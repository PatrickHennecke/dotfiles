const __vite__fileDeps=["assets/js/ToastMenuLegacy-Do47o3MR.js","assets/js/promisifiedChrome-CheD9WtZ.js","assets/js/timestampDb-sTUCijT1.js","assets/js/Logger-Dqn8sDPg.js","assets/js/environmentVariables-Cy83xda0.js","assets/js/ResizeSensor-CXS_pGRc.js","assets/js/preload-helper-D7CfCCEq.js","assets/js/string-KTo4Qfpe.js","assets/css/ToastMenuLegacy-DzMwE8K6.css","assets/js/Dropdown-CPB6qe0h.js","assets/js/icon-ellipsis-D3jS4u3x.js","assets/css/Dropdown-BcLAxJWG.css","assets/js/DropdownOption-CokACERR.js","assets/js/QuickNavOptionsList-B0pawPd9.js","assets/css/QuickNavOptionsList-BDWyBtxL.css","assets/js/QuickNav-CGdUOv2k.js","assets/js/allComponentsMounted-C3UsG_cA.js","assets/js/switch-EuBTQVVE.js","assets/css/QuickNav-CNmjNfzP.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as t}from"./preload-helper-D7CfCCEq.js";import{c as o}from"./clockMetadata-DW6lmI6A.js";import{p as e}from"./reactiveCustomization-CrL2eTrh.js";import{S as s}from"./SmoothReflow-B3dWZqEj.js";import{a as c}from"./allComponentsMounted-C3UsG_cA.js";import{n as i,A as a}from"./promisifiedChrome-CheD9WtZ.js";import{T as r}from"./dashboard-CF_jRhAY.js";import{s as n}from"./showAnyway-CbfR58eh.js";import{_ as l}from"./icon-circle-D-D5U4qS.js";import"./pomodoro-DvfTwCi0.js";import"./VueBase-CjPGMLuv.js";import"./ResizeSensor-CXS_pGRc.js";import"./environmentVariables-Cy83xda0.js";import"./index-CJJH83pl.js";import"./timestampDb-sTUCijT1.js";import"./Logger-Dqn8sDPg.js";import"./string-KTo4Qfpe.js";import"./main--IJuvtTE.js";import"./localStorage-B4mFdj8F.js";import"./migrateLegacyUserMessageHandler-CU6TUnqH.js";const p=i({name:"Clock",components:{ThreeColLayout:r,SmoothReflow:s,DefaultClock:i({name:"DefaultClock",mixins:[c],computed:{timeString:()=>m.models.date.getTimeString(),hours(){return this.timeString.split(":")[0]},minutes(){return this.timeString.split(":")[1]}}},(function(){var t=this,o=t._self._c;return o("span",{staticClass:"default-clock",attrs:{"data-test":"default-clock"}},[o("div",{staticClass:"time",attrs:{"data-test":"default-clock-time"}},[o("div",{staticClass:"hours",attrs:{"data-test":"default-clock-hours"}},[t._v(t._s(t.hours))]),o("div",{staticClass:"colon"},[t._v(":")]),o("div",{staticClass:"minutes",attrs:{"data-test":"default-clock-minutes"}},[t._v(t._s(t.minutes))])])])}),[],!1,null,"5023f844").exports,PercentClock:i({name:"PercentClock",mixins:[c],computed:{balance:()=>m.models.balanceMode}},(function(){var t=this,o=t._self._c;return o("span",{staticClass:"percent-clock",attrs:{"data-test":"percent-clock"}},[o("div",{staticClass:"time"},[t._v(" "+t._s(t.balance.get("percent"))),o("span",{staticClass:"format percent-format"},[t._v("%")])])])}),[],!1,null,"a9967cec").exports,ToastMenu:()=>t((()=>import("./ToastMenuLegacy-Do47o3MR.js")),__vite__mapDeps([0,1,2,3,4,5,6,7,8])),Dropdown:()=>t((()=>import("./Dropdown-CPB6qe0h.js")),__vite__mapDeps([9,10,1,2,3,4,5,6,7,11])),DropdownOption:()=>t((()=>import("./DropdownOption-CokACERR.js")),__vite__mapDeps([12,1,2,3,4,5,6,7])),QuickNavOptionsList:()=>t((()=>import("./QuickNavOptionsList-B0pawPd9.js")),__vite__mapDeps([13,1,2,3,4,5,6,7,14])),QuickNav:()=>t((()=>import("./QuickNav-CGdUOv2k.js")),__vite__mapDeps([15,13,1,2,3,4,5,6,7,14,16,17,18]))},mixins:[c],props:{quickNavVisible:{type:Boolean,default:!0}},unreactive:()=>({centerOptions:o,showAnyway:n}),data:()=>({dropdownActive:!1}),computed:{activeClock(){return this.percentClock?"percent":"clock"},percentClock:{get:()=>e.percentClock,set(t){e.percentClock=t}},hour12clock:{get:()=>e.hour12clock,set(t){e.hour12clock=t}}},methods:{switchClock(t){if("pomodoro"===t){if(!this.$plus)return;this.$emit("pomodoro-show",!0)}this.dropdownActive=!1},toggleDropdown(t=!this.dropdownActive){this.dropdownActive=t},togglePercentFormat(){this.percentClock=!this.percentClock,a.capture("clock percent toggle",{feature:"default clock",new_value:this.percentClock?"percent":"default"}),this.dropdownActive=!1},toggle12hFormat(){this.hour12clock=!this.hour12clock,a.capture("clock format toggle",{feature:"default clock",new_value:this.hour12clock?"12h":"24h"})},openScheduleSettings(){this.$plus?(m.commandManager.executeAsync("settings.display",null,{scheduleVisible:!0,section:"balance"}),this.dropdownActive=!1,a.capture("edit schedule click",{feature:"percent clock",is_paid_event:!0})):m.cmd("modal.open","UPSELL_BALANCE_MODE",{eventSource:"dash"})}}},(function(){var t=this,o=t._self._c;return o("three-col-layout",{staticClass:"app-container clock center-clock has-dash-icon",class:{"show-anyway":t.showAnyway.includes("clock")},attrs:{"data-show-anyway":"clock","data-test":"center-clock"},scopedSlots:t._u([t.quickNavVisible?{key:"left",fn:function(){return[o("transition",{attrs:{name:"fade",mode:"out-in"}},[t.$touch?t._e():o("quick-nav",{key:t.activeClock,attrs:{region:"center",options:t.centerOptions,active:t.activeClock},on:{"switch-to":t.switchClock}})],1)]},proxy:!0}:null,{key:"center",fn:function(){return[o("smooth-reflow",{staticClass:"clocks-reflow",attrs:{"await-apps-ready":"",height:!1,width:!0,"transition-duration":1e3,duration:100,transition:"smooth-width-fade"}},[o("div",{directives:[{name:"mobile-click",rawName:"v-mobile-click",value:t.toggleDropdown.bind(null,!0),expression:"toggleDropdown.bind(null, true)"}],key:t.activeClock,on:{dblclick:function(o){return t.toggleDropdown(!0)}}},[t.percentClock?o("percent-clock"):o("default-clock")],1)])]},proxy:!0},{key:"right",fn:function(){return[o(t.$touch?"ToastMenu":"Dropdown",{tag:"component",attrs:{"on-dash":!0,active:t.dropdownActive,"section-title":"Clock Settings"},on:{toggle:t.toggleDropdown},scopedSlots:t._u([{key:"header",fn:function(){return[t.$touch?o("quick-nav-options-list",{attrs:{options:t.centerOptions,active:"clock"},on:{"switch-to":t.switchClock}}):t._e()]},proxy:!0}])},[t.percentClock?t._e():o("li",{staticClass:"dropdown-list-item has-toggle",class:{on:!t.hour12clock},attrs:{"data-test":"hour-format"},on:{click:t.toggle12hFormat}},[o("span",{staticClass:"dropdown-list-label"},[t._v("24-hour clock")]),o("span",{staticClass:"toggle-slider"},[o("inline-svg",{staticClass:"toggle-switch",attrs:{src:l}})],1)]),t.percentClock?o("dropdown-option",{attrs:{name:"Edit Schedule","data-test":"edit-schedule"},nativeOn:{click:function(o){return t.openScheduleSettings.apply(null,arguments)}}}):t._e(),o("li",{staticClass:"dropdown-list-item",attrs:{"data-test":"percent-opt"},on:{click:t.togglePercentFormat}},[o("span",{staticClass:"dropdown-list-label"},[t._v(t._s(t.percentClock?"Switch to default clock":"Switch to percent clock"))])])],1)]},proxy:!0}],null,!0)})}),[],!1,null,"639ff432").exports;export{p as default};