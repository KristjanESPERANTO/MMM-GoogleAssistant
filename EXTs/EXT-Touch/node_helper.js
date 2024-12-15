/** EXT-Touch
  * File: EXT-Touch/node_helper.js
  * Version: 1.2.1
  * Revision: 241215
  * ⚠ This file must not be modified ⚠
**/
const NodeHelper=require("node_helper");module.exports=NodeHelper.create({socketNotificationReceived(e){switch(e){case"INIT":this.initialize();break}},initialize(){console.log("[TOUCH] EXT-Touch Version:",require("./package.json").version,"rev:",require("./package.json").rev),console.log("[TOUCH] Ready with Touch Screen"),this.sendSocketNotification("INITIALIZED")}});
/** ❤ Coded With Heart by @bugsounet -- https://www.bugsounet.fr **/
