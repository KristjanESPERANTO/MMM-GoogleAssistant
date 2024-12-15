/** EXT-Touch
  * File: EXT-Touch/EXT-Touch.js
  * Version: 1.2.1
  * Revision: 241215
  * ⚠ This file must not be modified ⚠
**/
Module.register("EXT-Touch",{requiresVersion:"2.26.0",start(){this.ready=!1;const e={file:(...i)=>this.file(...i),sendNotification:(...i)=>this.sendNotification(...i)};this.Touch=new DetectorTouchVisual(e)},notificationReceived(e,i,s){switch(e){case"EXT_TOUCH-START":this.ready&&this.Touch.RefreshLogo(!1);break;case"EXT_TOUCH-BLINK":this.ready&&this.Touch.RefreshLogo(!0);break;case"EXT_TOUCH-STOP":this.ready&&this.Touch.Disabled();break;case"GA_READY":s.name==="MMM-GoogleAssistant"&&this.sendSocketNotification("INIT");break}},socketNotificationReceived(e){switch(e){case"INITIALIZED":this.ready=!0,this.sendNotification("EXT_HELLO",this.name);break}},getStyles(){return[this.file("EXT-Touch.css")]},getScripts(){return["/modules/EXT-Touch/components/visual.js"]},getDom(){return this.Touch.TouchDom()}});
/** ❤ Coded With Heart by @bugsounet -- https://www.bugsounet.fr **/
