//
// Module : MMM-GoogleAssistant
//

const fs = require("fs")
const { exec } = require("child_process")
const checker = require("./components/checker.js")
var logGA = (...args) => { /* do nothing */ }
var NodeHelper = require("node_helper")

module.exports = NodeHelper.create({
  start: function () {
    this.lib = { error: 0 }
    this.config = {}
    this.alreadyInitialized = false
  },

  socketNotificationReceived: async function (noti, payload) {
    switch (noti) {
      case "PRE-INIT":
        if (this.alreadyInitialized) {
          console.error("[GA] You can't use MMM-GoogleAssistant in server mode")
          this.sendSocketNotification("ERROR", "You can't use MMM-GoogleAssistant in server mode")
          setTimeout(() => process.exit(), 5000)
          return
        }
        if (this.website) return
        this.alreadyInitialized = true
        this.config = payload
        console.log("[GA] MMM-GoogleAssistant Version:", require('./package.json').version, "rev:", require('./package.json').rev)
        this.config.assistantConfig["modulePath"] = __dirname
        this.initGA()
        break
      case "WEBSITE-INIT":
        let Version = {
          version: require('./package.json').version,
          rev: require('./package.json').rev,
          lang: this.config.assistantConfig.lang
        }
        this.sendSocketNotification("INITIALIZED", Version)
        console.log("[GA] Assistant Ready!")
        await this.parseWebsite()
        this.website.init(payload)
        break
      case "SMARTHOME-INIT":
        let smarthome = await this.parseSmarthome()
        if (smarthome) await this.smarthome.init()
        this.website.server()
        break
      case "ACTIVATE_ASSISTANT":
        this.activate(payload)
        break
      case "SHELLEXEC":
        this.shellExec(payload)
        break
      case "GOOGLESEARCH":
        this.searchOnGoogle.search(this, payload)
        break
      case "HELLO":
        if (!this.website) {
          // library is not loaded ... retry (not needed but...)
          setTimeout(() => { this.socketNotificationReceived("HELLO", payload) }, 1000)
          return
        }
        this.website.setActiveVersion(payload)
        break
      case "RESTART":
        this.website.restartMM()
        break
      case "CLOSE":
        this.website.doClose()
        break
      case "EXTStatus":
        if (!this.website) {
          // library is not loaded ... retry (not needed but...)
          setTimeout(() => { this.socketNotificationReceived("EXTStatus", payload) }, 1000)
          return
        }
        this.website.setEXTStatus(payload)
        this.updateSmartHome()
        break
      case "TB_SYSINFO":
        let result = await this.website.website.systemInformation.lib.Get()
        result.sessionId = payload
        this.sendSocketNotification("TB_SYSINFO-RESULT", result)
        break
      case "GET-SYSINFO":
        this.sendSocketNotification("SYSINFO-RESULT", await this.website.website.systemInformation.lib.Get())
        break
    }
  },

  initGA: async function() {
    var msg = null
    var message = null
  
    if (!fs.existsSync(this.config.assistantConfig["modulePath"] + "/credentials.json")) {
      msg = "[FATAL] Assistant: credentials.json file not found !"
      message = "GAErrorCredentials"
    }
  
    if (!fs.existsSync(this.config.assistantConfig["modulePath"] + "/tokenGA.json")) {
      msg = "[FATAL] Assistant: tokenGA.json file not found !"
      message =  "GAErrorTokenGA"
    }
  
    if (msg) {
      console.error(`[GA] [DATA] [ERROR] ${msg}`)
      return this.sendSocketNotification("NOT_INITIALIZED", { message: message })
    }
  
    await checker.checkConfigDeepMerge()
    let bugsounet = await this.libraries("GA")
    if (bugsounet) return this.bugsounetError (bugsounet)

    this.config.micConfig.recorder= "arecord"

    this.searchOnGoogle = new this.lib.Assistant.GOOGLESEARCH()

    await this.loadRecipes()
    this.sendSocketNotification("GA-INIT")
  },

  parseWebsite: async function () {
    return new Promise(async resolve => {
      let bugsounet = await this.libraries("website")
      if (bugsounet) return this.bugsounetError (bugsounet)
  
      let WebsiteHelperConfig = {
        config: this.config.website,
        debug: this.config.debug,
        assistantLang: this.config.assistantConfig.lang,
        lib: this.lib
      }
  
      this.website = new this.lib.website(WebsiteHelperConfig, (...args) => this.sendSocketNotification(...args))
      resolve()
    })
  },

  parseSmarthome: async function() {
    if (!this.config.website.CLIENT_ID) return false
    return new Promise(async resolve => {
      let bugsounet = await this.libraries("smarthome")
      if (bugsounet) return this.bugsounetError (bugsounet)
  
      let SmarthomeHelperConfig = {
        config: this.config.website,
        debug: this.config.debug,
        lang: config.language,
        website: this.website
      }

      this.smarthome = new this.lib.smarthome(SmarthomeHelperConfig, (...args) => this.sendSocketNotification(...args))
      resolve(true)
    })
  },

  libraries: function (type) {
    if (this.config.debug) logGA = (...args) => { console.log("[GA] [LIBRARIES]", ...args) }
    let Libraries = []
    let GA= [
      // { "library to load" : "store library name" }
      { "./components/assistant.js": "Assistant" }
    ]
   
    let website= [
      { "./components/systemInformation.js": "SystemInformation" },
      { "./components/website.js" : "website" }
    ]
  
    let smarthome= [
      { "./components/smarthome.js" : "smarthome" }
    ]
    let errors = 0
  
    switch(type) {
      case "GA":
        logGA("Loading GA Libraries...")
        Libraries = GA
        break
      case "website":
        logGA("Loading website Libraries...")
        Libraries = website
        break
      case "smarthome":
        logGA("Loading smarhome Libraries...")
        Libraries = smarthome
        break
      default:
        console.log(`${type}: Unknow library database...`)
        return
        break
    }
  
    return new Promise(resolve => {
      Libraries.forEach(library => {
        for (const [name, configValues] of Object.entries(library)) {
          let libraryToLoad = name
          let libraryName = configValues
  
          try {
            if (!this.lib[libraryName]) {
              this.lib[libraryName] = require(libraryToLoad)
              logGA(`Loaded: ${libraryToLoad} --> this.lib.${libraryName}`)
            }
          } catch (e) {
            console.error(`[GA] [LIB] ${libraryToLoad} Loading error!`, e.message,e)
            this.sendSocketNotification("ERROR" , `Loading error! library: ${libraryToLoad}`)
            errors++
            this.lib.error = errors
          }
        }
      })
      resolve(errors)
      if (errors) {
        console.error("[GA] [LIBRARIES] Some libraries missing!")
        if (type == "GA") this.sendSocketNotification("NOT_INITIALIZED", { message: "Library loading Error!" })
      } else console.log(`[GA] [LIB] All ${type} libraries loaded!`)
    })
  },

  bugsounetError: function (bugsounet) {
    console.error(`[GA] [DATA] Warning: ${bugsounet} needed library not loaded !`)
    console.error("[GA] [DATA] Try to solve it with `npm run rebuild` in MMM-GoogleAssistant folder")
  },

  updateSmartHome: function() {
    if (!this.smarthome || !this.config.website.CLIENT_ID) return
    if (this.smarthome.SmartHome.use && this.smarthome.SmartHome.init) {
      this.smarthome.refreshData()
      this.smarthome.updateGraph()
    }
  },

  loadRecipes: function() {
    if (this.config.debug) logGA = (...args) => { console.log("[GA] [RECIPES]", ...args) }
    return new Promise(resolve => {
      if (this.config.recipes) {
        let replacer = (key, value) => {
          if (typeof value == "function") {
            return "__FUNC__" + value.toString()
          }
          return value
        }
        var recipes = this.config.recipes
        var error = null
        var nb_Err = 0
        for (var i = 0; i < recipes.length; i++) {
          try {
            var p = require("./recipes/" + recipes[i]).recipe
            this.sendSocketNotification("LOAD_RECIPE", JSON.stringify(p, replacer, 2))
            console.log("[GA] [RECIPES] LOADED:", recipes[i])
          } catch (e) {
            error = `[FATAL] RECIPE_ERROR (${recipes[i]})`
            console.error("[GA] [RECIPES] LOADING ERROR:", recipes[i])
            console.error("[GA] [RECIPES] DETAIL:", e.message)
            this.sendSocketNotification("RECIPE_ERROR", recipes[i])
            nb_Err++
          }
        }
        if (!nb_Err) console.log("[GA] Recipes loaded!")
        else console.log(`[GA] Recipes loaded but {$nb_Err} detected!`)
        resolve()
      } else {
        logGA("No Recipes to Load...")
        resolve()
      }
    })
  },

  shellExec: function(payload) {
    if (this.config.debug) logGA = (...args) => { console.log("[GA] [SHELL_EXEC]", ...args) }
    var command = payload.command
    if (!command) return console.error("[GA] [SHELLEXEC] no command to execute!")
    command += (payload.options) ? (" " + payload.options) : ""
    exec (command, (e,so,se)=> {
      logGA("command:", command)
      if (e) {
        console.log("[GA] [SHELL_EXEC] Error:" + e)
        this.sendSocketNotification("WARNING", { message: "ShellExecError"} )
      }
      logGA("RESULT", {
        executed: payload,
        result: {
          error: e,
          stdOut: so,
          stdErr: se,
        }
      })
    })
  },

  activate: function(payload) {
    if (this.config.debug) logGA = (...args) => { console.log("[GA] [ACTIVATE_ASSISTANT]", ...args) }
    logGA("QUERY:", payload)
    var assistantConfig = Object.assign({}, this.config.assistantConfig)
    assistantConfig.debug = this.config.debug
    assistantConfig.lang = payload.lang
    assistantConfig.micConfig = this.config.micConfig
    this.assistant = new this.lib.Assistant.ASSISTANT(assistantConfig, (obj)=>{ this.sendSocketNotification("TUNNEL", obj) })

    var parserConfig = {
      responseOutputCSS: this.config.responseConfig.responseOutputCSS,
      responseOutputURI: "tmp/responseOutput.html",
      responseOutputZoom: this.config.responseConfig.zoom.responseOutput
    }
    var parser = new this.lib.Assistant.SCREENPARSER(parserConfig, this.config.debug)
    var result = null
    this.assistant.activate(payload, (response)=> {
      response.lastQuery = payload

      if (!(response.screen || response.audio)) {
        if (!response.audio && !response.screen && !response.text) response.error.error = "NO_RESPONSE"
        if (response.transcription && response.transcription.transcription && !response.transcription.done) {
          response.error.error = "TRANSCRIPTION_FAILS"
        }
      }
      if (response && response.error.audio && !response.error.message) response.error.error = "TOO_SHORT"

      if (response.screen) {
        parser.parse(response, (result)=>{
          delete result.screen.originalContent
          logGA("RESULT", result)
          this.sendSocketNotification("ASSISTANT_RESULT", result)
        })
      } else {
        logGA("RESULT", response)
        this.sendSocketNotification("ASSISTANT_RESULT", response)
      }
    })
  }
})
