var _log=Function.prototype.bind.call(console.log,console,"[ASSISTANT]"),log=function(){};Module.register("MMM-GoogleAssistant",{defaults:{debug:!1,assistantConfig:{lang:"en-US",credentialPath:"credentials.json",tokenPath:"token.json",projectId:"",modelId:"",instanceId:"",latitude:51.50853,longitude:-.076132},responseConfig:{useScreenOutput:!0,screenOutputCSS:"screen_output.css",screenOutputTimer:5e3,screenRotate:!1,activateDelay:250,useAudioOutput:!0,useChime:!0,newChime:!1,useNative:!1,playProgram:"mpg321"},micConfig:{recorder:"arecord",device:null},customActionConfig:{autoMakeAction:!1,autoUpdateAction:!1},snowboy:{usePMDL:!1,PMDLPath:"../../../components",audioGain:2,Frontend:!0,Model:"jarvis",Sensitivity:null},A2DServer:{useA2D:!1,stopCommand:"stop",useYouTube:!1,youtubeCommand:"youtube",displayResponse:!0},recipes:[],NPMCheck:{useChecker:!0,delay:6e5,useAlert:!0}},plugins:{onReady:[],onNotificationReceived:[],onActivate:[],onStatus:[]},commands:{},actions:{},transcriptionHooks:{},responseHooks:{},forceResponse:!1,getScripts:function(){return["/modules/MMM-GoogleAssistant/components/response.js"]},getStyles:function(){return["/modules/MMM-GoogleAssistant/MMM-GoogleAssistant.css"]},getTranslations:function(){return{en:"translations/en.json",fr:"translations/fr.json",it:"translations/it.json",de:"translations/de.json"}},start:function(){const t=["debug","dev","recipes","customActionConfig","assistantConfig","micConfig","responseConfig","A2DServer","snowboy","NPMCheck"];this.helperConfig={},this.config.debug&&(log=_log),this.config=this.configAssignment({},this.defaults,this.config);for(var s=0;s<t.length;s++)this.helperConfig[t[s]]=this.config[t[s]];this.myStatus={actual:"standby",old:"standby"};var e={assistantActivate:t=>{this.assistantActivate(t)},postProcess:(t,s,e)=>{this.postProcess(t,s,e)},endResponse:()=>{this.endResponse()},sendNotification:(t,s=null)=>{this.sendNotification(t,s)},sendSocketNotification:(t,s=null)=>{this.sendSocketNotification(t,s)},translate:t=>this.translate(t),myStatus:t=>{this.doPlugin("onStatus",{status:t}),this.myStatus=t},A2D:t=>{if(this.config.A2DServer.useA2D)return this.Assistant2Display(t)},sendAudio:t=>{this.sendSocketNotification("PLAY_AUDIO",t)},sendChime:t=>{this.sendSocketNotification("PLAY_CHIME",t)}};if(this.assistantResponse=new AssistantResponse(this.helperConfig.responseConfig,e),this.config.A2DServer.useA2D&&this.config.A2DServer.useYouTube){var n={transcriptionHooks:{SEARCH_YouTube:{pattern:this.config.A2DServer.youtubeCommand+" (.*)",command:"youtube"}},commands:{youtube:{moduleExec:{module:["MMM-GoogleAssistant"],exec:"__FUNC__(module, params) => { module.sendSocketNotification('YouTube_SEARCH', params[1]) }"},soundExec:{chime:"open"},displayResponse:this.config.A2DServer.displayResponse}}};this.parseLoadedRecipe(JSON.stringify(n))}},doPlugin:function(t,s){if(this.plugins.hasOwnProperty(t)){var e=this.plugins[t];if(Array.isArray(e)&&e.length>0)for(var n=0;n<e.length;n++){var o=e[n];this.doCommand(o,s,t)}}},registerPluginsObject:function(t){for(var s in this.plugins)if(t.hasOwnProperty(s)){var e=[];Array.isArray(t[s])?e=e.concat(t[s]):e.push(t[s].toString());for(var n=0;n<e.length;n++)this.registerPlugin(s,e[n])}},registerPlugin:function(t,s){this.plugins.hasOwnProperty(t)&&(Array.isArray(s)&&this.plugins[t].concat(s),this.plugins[t].push(s))},registerCommandsObject:function(t){this.commands=Object.assign({},this.commands,t)},registerTranscriptionHooksObject:function(t){this.transcriptionHooks=Object.assign({},this.transcriptionHooks,t)},registerActionsObject:function(t){this.actions=Object.assign({},this.actions,t)},registerResponseHooksObject:function(t){this.responseHooks=Object.assign({},this.responseHooks,t)},configAssignment:function(t){for(var s,e,n=Array.prototype.slice.call(arguments,1);n.length;)for(e in s=n.shift())s.hasOwnProperty(e)&&("object"==typeof t[e]&&t[e]&&"[object Array]"!==Object.prototype.toString.call(t[e])&&"object"==typeof s[e]&&null!==s[e]?t[e]=this.configAssignment({},t[e],s[e]):t[e]=s[e]);return t},getDom:function(){this.assistantResponse.modulePosition();var t=document.createElement("div");return t.id="GA_DOM",MM.getModules().withClass("MMM-GoogleAssistant").enumerate(t=>{t.hide(0,{lockString:"GA_LOCKED"})}),t},notificationReceived:function(t,s=null,e=null){switch(this.doPlugin("onNotificationReceived",{notification:t,payload:s}),t){case"DOM_OBJECTS_CREATED":this.sendSocketNotification("INIT",this.helperConfig),this.assistantResponse.prepare();break;case"ASSISTANT_WELCOME":this.assistantActivate({type:"TEXT",key:s.key,chime:!1},Date.now());break;case"ASSISTANT_START":this.sendSocketNotification("ASSISTANT_READY");break;case"ASSISTANT_STOP":this.sendSocketNotification("ASSISTANT_BUSY")}},socketNotificationReceived:function(t,s){switch(t){case"NPM_UPDATE":s&&s.length>0&&(this.config.NPMCheck.useAlert&&s.forEach(t=>{this.sendNotification("SHOW_ALERT",{type:"notification",message:"[NPM] "+t.library+" v"+t.installed+" -> v"+t.latest,title:this.translate("UPDATE_NOTIFICATION_MODULE",{MODULE_NAME:t.module}),timer:this.config.NPMCheck.delay-2e3})}),this.sendNotification("NPM_UPDATE",s));break;case"LOAD_RECIPE":this.parseLoadedRecipe(s);break;case"NOT_INITIALIZED":this.assistantResponse.fullscreen(!0),this.assistantResponse.showError(s);break;case"INITIALIZED":log("Initialized."),this.assistantResponse.status("standby"),this.sendSocketNotification("ASSISTANT_READY"),this.doPlugin("onReady"),this.config.A2DServer.useA2D&&this.sendNotification("ASSISTANT_READY");break;case"ASSISTANT_RESULT":null!==s.volume&&this.sendNotification("A2D_VOLUME",s.volume),this.assistantResponse.start(s);break;case"TUNNEL":this.assistantResponse.tunnel(s);break;case"ASSISTANT_ACTIVATE":this.assistantActivate(s);break;case"AUDIO_END":this.assistantResponse.end();break;case"YouTube_RESULT":this.sendYouTubeResult(s)}},parseLoadedRecipe:function(payload){let reviver=(key,value)=>{if("string"==typeof value&&0===value.indexOf("__FUNC__")){value=value.slice(8);let functionTemplate=`(${value})`;return eval(functionTemplate)}return value};var p=JSON.parse(payload,reviver);p.hasOwnProperty("commands")&&this.registerCommandsObject(p.commands),p.hasOwnProperty("actions")&&this.registerActionsObject(p.actions),p.hasOwnProperty("transcriptionHooks")&&this.registerTranscriptionHooksObject(p.transcriptionHooks),p.hasOwnProperty("responseHooks")&&this.registerResponseHooksObject(p.responseHooks),p.hasOwnProperty("plugins")&&this.registerPluginsObject(p.plugins)},assistantActivate:function(t){if("standby"!=this.myStatus.actual&&!t.force)return log("Assistant is busy.");this.doPlugin("onActivate"),this.assistantResponse.fullscreen(!0),this.config.A2DServer.useA2D&&this.sendNotification("A2D_ASSISTANT_BUSY"),this.sendSocketNotification("ASSISTANT_BUSY"),this.lastQuery=null;var s={type:"TEXT",key:null,lang:this.config.assistantConfig.lang,useScreenOutput:this.config.responseConfig.useScreenOutput,useAudioOutput:this.config.responseConfig.useAudioOutput,status:this.myStatus.old,chime:!0};s=Object.assign({},s,t);setTimeout(()=>{this.assistantResponse.status(s.type,!!s.chime),this.sendSocketNotification("ACTIVATE_ASSISTANT",s)},this.config.responseConfig.activateDelay)},endResponse:function(){this.config.A2DServer.useA2D&&this.sendNotification("A2D_ASSISTANT_READY"),this.sendSocketNotification("ASSISTANT_READY")},postProcess:function(t,s=(()=>{}),e=(()=>{})){if("continue"==t.lastQuery.status)return e();var n=this.findAllHooks(t);if(this.forceResponse=!1,n.length>0){this.assistantResponse.status("hook");for(var o=0;o<n.length;o++){var i=n[o];this.doCommand(i.command,i.params,i.from),"CUSTOM_DEVICE_ACTION"==i.from&&(this.forceResponse=!0)}this.forceResponse?e():s()}else e()},findAllHooks:function(t){var s=[];return s=(s=(s=s.concat(this.findTranscriptionHook(t))).concat(this.findAction(t))).concat(this.findResponseHook(t))},findResponseHook:function(t){var s=[];if(t.screen){var e=[];for(var n in e.links=t.screen.links?t.screen.links:[],e.text=t.screen.text?[].push(t.screen.text):[],e.photos=t.screen.photos?t.screen.photos:[],this.responseHooks)if(this.responseHooks.hasOwnProperty(n)){var o=this.responseHooks[n];if(o.where&&o.pattern&&o.command){var i=new RegExp(o.pattern,"ig").exec(e[o.where]);i&&(s.push({from:n,params:i,command:o.command}),log("ResponseHook matched:",n))}}}return s},findAction:function(t){var s=[],e=t.action?t.action:null;if(!e||!e.inputs)return[];for(var n=0;n<e.inputs.length;n++){var o=e.inputs[n];if("action.devices.EXECUTE"==o.intent)for(var i=o.payload.commands,a=0;a<i.length;a++)for(var r=i[a].execution,c=0;c<r.length;c++){var u=r[c];s.push({from:"CUSTOM_DEVICE_ACTION",params:u.params,command:u.command})}}return s},findTranscriptionHook:function(t){var s=[],e=t.transcription?t.transcription.transcription:"";for(var n in this.transcriptionHooks)if(this.transcriptionHooks.hasOwnProperty(n)){var o=this.transcriptionHooks[n];if(o.pattern&&o.command){var i=new RegExp(o.pattern,"ig").exec(e);i&&(s.push({from:n,params:i,command:o.command}),log("TranscriptionHook matched:",n))}else log(`TranscriptionHook:${n} has invalid format`)}return s},doCommand:function(t,s,e){if(this.assistantResponse.doCommand(t,s,e),"action.devices.commands.SetVolume"==t)return log("Volume Control:",s),this.sendNotification("A2D_VOLUME",s.volumeLevel);if(this.commands.hasOwnProperty(t)){var n=this.commands[t];n.displayResponse&&(this.forceResponse=!0);var o="object"==typeof s?Object.assign({},s):s;if(n.hasOwnProperty("notificationExec")){var i=n.notificationExec;if(i.notification){var a="function"==typeof i.notification?i.notification(o,e):i.notification,r=i.payload?"function"==typeof i.payload?i.payload(o,e):i.payload:null,c="object"==typeof r?Object.assign({},r):r;log(`Command ${t} is executed (notificationExec).`),this.sendNotification(a,c)}}if(n.hasOwnProperty("shellExec")){var u=n.shellExec;if(u.exec){var p="function"==typeof u.exec?u.exec(o,e):u.exec,l=u.options?"function"==typeof u.options?u.options(o,e):u.options:null,h="function"==typeof l?l(o,key):l;log(`Command ${t} is executed (shellExec).`),this.sendSocketNotification("SHELLEXEC",{command:p,options:h})}}if(n.hasOwnProperty("moduleExec")){var f=n.moduleExec,d="function"==typeof f.module?f.module(o,e):f.module,m=Array.isArray(d)?d:new Array(d);"function"==typeof f.exec&&MM.getModules().enumerate(s=>{(0==m.length||m.indexOf(s.name)>=0)&&(log(`Command ${t} is executed (moduleExec) for :`,s.name),f.exec(s,o,e))})}if(n.hasOwnProperty("functionExec")){var g=n.functionExec;"function"==typeof g.exec&&(log(`Command ${t} is executed (functionExec)`),g.exec(o,e))}if(n.hasOwnProperty("soundExec")){var A=n.soundExec;A.chime&&"string"==typeof A.chime&&("open"==A.chime&&this.assistantResponse.playChime("open"),"close"==A.chime&&this.assistantResponse.playChime("close")),A.sound&&"string"==typeof A.sound&&this.assistantResponse.playChime(A.sound,!0)}}else log(`Command ${t} is not found.`)},Assistant2Display:function(t){if(t.transcription&&t.transcription.transcription==this.config.A2DServer.stopCommand)return this.sendNotification("A2D_STOP");var s={photos:null,urls:null,transcription:null};t.screen&&(t.screen.links.length>0||t.screen.photos.length>0)&&(s.photos=t.screen.photos,s.urls=t.screen.links,s.transcription=t.transcription,log("Send A2D Response."),this.sendNotification("A2D",s))},sendYouTubeResult:function(t){var s={photos:[],urls:["https://www.youtube.com/watch?v="+t],transcription:{transcription:"Youtube Search...",done:"false"}};log("Send YouTube Response to A2D."),this.sendNotification("A2D",s)}});
