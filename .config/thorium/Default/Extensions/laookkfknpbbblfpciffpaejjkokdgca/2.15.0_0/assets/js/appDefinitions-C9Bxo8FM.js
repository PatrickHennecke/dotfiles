const __vite__fileDeps=["assets/js/siteBlockerGroups-1V1XRNi6.js","assets/js/promisifiedChrome-CheD9WtZ.js","assets/js/timestampDb-sTUCijT1.js","assets/js/Logger-Dqn8sDPg.js","assets/js/environmentVariables-Cy83xda0.js","assets/js/ResizeSensor-CXS_pGRc.js","assets/js/preload-helper-D7CfCCEq.js","assets/js/string-KTo4Qfpe.js","assets/js/constants-D-OQQ8lR.js","assets/js/compareObjects-BF7sSNEf.js","assets/js/siteBlockerSession-DgFf8Wzp.js","assets/js/dashboard-CF_jRhAY.js","assets/js/main--IJuvtTE.js","assets/js/localStorage-B4mFdj8F.js","assets/js/migrateLegacyUserMessageHandler-CU6TUnqH.js","assets/css/dashboard-C0DDMXTO.css","assets/js/focusModeHelpers-Cqkll3ju.js","assets/js/reactiveCustomization-CrL2eTrh.js","assets/js/VueBase-CjPGMLuv.js","assets/js/index-CJJH83pl.js","assets/js/focusModeViewState-Sf_PQc_2.js","assets/js/ViewState-CkTFc_ep.js","assets/js/siteBlockerViewState-BRcSSYc9.js","assets/js/soundscapesState-B7l38hfb.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as e}from"./preload-helper-D7CfCCEq.js";import{w as o}from"./ResizeSensor-CXS_pGRc.js";import{i as s}from"./focusModeHelpers-Cqkll3ju.js";import{u as a,e as t}from"./promisifiedChrome-CheD9WtZ.js";import{c as r,a as n}from"./reactiveCustomization-CrL2eTrh.js";import{scenes as i}from"./scenes-Bti57oYU.js";import{A as d,S as l}from"./dashboard-CF_jRhAY.js";const c=()=>{localStorage.setItem(l,Date.now().toString())},p={pomodoro:{icon:"icon/pomodoro",name:"Pomodoro",description:"Timed focus and rest intervals",enable:()=>(m.trigger("centerBelow:show",!1),localStorage.removeItem("pomodoro-started"),localStorage.removeItem("pomodoro-time-remaining"),(async()=>{"true"===localStorage.getItem("pomodoro-showing")?await a.delay(2*d):await new Promise((e=>m.on("pomodoro:created",e))),m.trigger("pomodoro:reset"),"true"!==localStorage.getItem("pomodoro-running")&&m.trigger("pomodoro:togglePlay")})(),!0),disable:()=>{m.trigger("pomodoro:complete",{switchAfterComplete:!1})}},siteBlocker:{icon:"icon/apps/site-blocker",name:"Site Blocker",description:"Block distracting websites",enable:async()=>{if(!r.siteBlockerEnabled)return;const o=(await e((()=>import("./siteBlockerGroups-1V1XRNi6.js").then((e=>e.b))),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]))).default(),s=(await e((()=>import("./siteBlockerGroups-1V1XRNi6.js").then((e=>e.s))),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]))).default();o.refresh(),s.refresh();return(await e((()=>import("./siteBlockerSession-DgFf8Wzp.js")),__vite__mapDeps([10,5,4,11,12,1,2,3,6,7,13,14,15,0,8,9,16,17,18,19,20,21,22]))).default().active},disable:async({enableResult:o})=>{const s=(await e((()=>import("./siteBlockerSession-DgFf8Wzp.js")),__vite__mapDeps([10,5,4,11,12,1,2,3,6,7,13,14,15,0,8,9,16,17,18,19,20,21,22]))).default();await s.toggleActive(!!o)},shouldEnableOnResume:()=>!0},soundscapes:{icon:"icon/soundscapes",name:"Soundscapes",description:"Background sounds",enable:async o=>{var s,r;"soundscapesIsReady"in m.widgetManager&&m.widgetManager.soundscapesIsReady||await new Promise((e=>{m.once("soundscapes:created",e)}));const d=(await e((()=>import("./soundscapesState-B7l38hfb.js")),__vite__mapDeps([23,18,5,4,11,12,1,2,3,6,7,13,14,15,19]))).default;t.sendCrossTabMessage("soundscapes:stop"),m.trigger("soundscapes:stop"),m.trigger("soundscapes:togglePopup",!1);let l=null==(r=null==(s=n.focusModeSettings.apps)?void 0:s.soundscapes)?void 0:r.preset;return l&&"Random"!==l||(l=o&&"string"==typeof o?o:a.getRandomItem([...i.flatMap((e=>"Random"===e.name||"Custom"===e.name?[]:[e.name]))])),m.trigger("soundscapes:play",l),d.globalPlaying||(d.globalPlaying=!0),addEventListener("beforeunload",c),l},disable:()=>{m.trigger("soundscapes:stop"),t.sendCrossTabMessage("soundscapes:stop"),removeEventListener("beforeunload",c),localStorage.removeItem(l)},shouldEnableOnResume:()=>{const e=Number(localStorage.getItem(l));return localStorage.removeItem(l),!!(e&&!isNaN(e)&&e>Date.now()-3e4)},shouldDisableEnableOnSettingChangeWhileFocusing:!0},tabStash:{icon:"icon/tabs",name:"Tab Stash",description:"Hide open tabs & restore later",enable:async()=>{const e=(await s.tabsStore())(),o=await e.stashSession();return!!o&&o.id},disable:async({enableResult:e,inactive:t})=>{var r;if(t)return;const n=(await s.tabsStore())();if(n.loaded&&!n.loading||(await new Promise((e=>{o((()=>n.loaded),e),n.loading||n.refresh()})),await a.delay(1e3)),m.conditionalFeatures.featureEnabled("plus")||m.conditionalFeatures.featureEnabled("tab-stash-degraded")||(e=null==(r=n.getItems[0])?void 0:r.id),"string"==typeof e){const o=n.getItemById(e);o&&await n.restoreSession(o)}},get unsupported(){return a.isSafari()}}};export{p as a};