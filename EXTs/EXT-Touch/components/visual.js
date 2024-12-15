/** EXT-Touch
  * File: EXT-Touch/components/visual.js
  * Version: 1.2.1
  * Revision: 241215
  * ⚠ This file must not be modified ⚠
**/
class DetectorTouchVisual{constructor(e){this.file=(...s)=>e.file(...s),this.sendNotification=(...s)=>e.sendNotification(...s),this.listening=!1,this.logoGoogle=this.file("resources/google.png"),console.log("[EXT-Touch] Visual Loaded")}Disabled(){this.listening=!1;const e=document.getElementById("EXT_TOUCH-ICON");e.classList.add("busy"),e.classList.remove("flash")}ClickCheck(){this.listening&&(this.listening=!1,this.RefreshLogo(!0),this.sendNotification("GA_ACTIVATE"))}RefreshLogo(e){const s=document.getElementById("EXT_TOUCH-ICON");e?(this.listening=!1,s.classList.remove("busy"),s.classList.add("flash")):(this.listening=!0,s.classList.remove("busy","flash"))}TouchDom(){const e=document.createElement("div");e.id="EXT_TOUCH";const s=document.createElement("div");return s.id="EXT_TOUCH-ICON",s.style.backgroundImage=`url(${this.logoGoogle})`,s.classList.add("busy"),s.onclick=i=>{i.stopPropagation(),this.ClickCheck()},e.appendChild(s),e}}
/** ❤ Coded With Heart by @bugsounet -- https://www.bugsounet.fr **/
