import{P as e}from"./Popup-Xs5lohqh.js";import{_ as s}from"./icon-lock-B0ekkj2F.js";import{n as t}from"./promisifiedChrome-CheD9WtZ.js";import"./AppPopup-D_ukOJBQ.js";import"./ResizeSensor-CXS_pGRc.js";import"./environmentVariables-Cy83xda0.js";import"./globalKeyEventManager-KbJZwtdf.js";import"./icon-close-BUGl_M7j.js";import"./chevron-down-DdbU9YAr.js";import"./timestampDb-sTUCijT1.js";import"./Logger-Dqn8sDPg.js";import"./preload-helper-D7CfCCEq.js";import"./string-KTo4Qfpe.js";const o=t({name:"FaviconPermission",components:{Popup:e},props:{source:{type:String,required:!0},resolve:{type:Function,required:!0},hasDismissedPreviously:{type:Boolean,default:!1}},methods:{showPermissionsOverlay(){m.cmd("modal.open","PERMISSION_REQUEST",{resolve:this.resolve,permissions:{permissions:["favicon"]},widgetName:this.source,requestImmediately:!0,force:!0,permissionExplanation:"Due to a recent update, in order to display favicons"})},openSettingsGeneral(){m.commandManager.executeAsync("settings.display")},reject(){this.resolve(!1)}}},(function(){var e=this,t=e._self._c;return t("popup",e._g({attrs:{id:"favicon-permission",width:350,"body-text":"Due to a Chrome update, please re-confirm your permission to display bookmarks/top sites.","cta-text":"Approve","cta-callback":e.showPermissionsOverlay,"hide-callback":e.reject,"target-element-selector":".app-container.settings"},scopedSlots:e._u([{key:"footer",fn:function(){return[t("div",{staticClass:"footer"},[t("hr"),e.hasDismissedPreviously?t("div",{staticClass:"footer-content"},[t("span",[t("span",{staticClass:"button-text",on:{click:e.openSettingsGeneral}},[e._v("Disable")]),e._v(" Bookmarks Bar & Launchpad to hide this message.")])]):t("div",{staticClass:"footer-content"},[t("inline-svg",{staticClass:"icon icon-lock",attrs:{src:s}}),t("span",[e._v("We take your "),t("a",{staticClass:"button-text",attrs:{href:"https://momentumdash.com/legal/privacy",target:"_blank"}},[e._v("privacy")]),e._v(" seriously.")])],1)])]},proxy:!0}])},e.$listeners))}),[],!1,null,"e738cdaf").exports;export{o as default};