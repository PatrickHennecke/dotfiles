import{useFocusModeViewStateStore as e}from"./focusModeViewState-Sf_PQc_2.js";import{F as s,m as t,n as i}from"./dashboard-CF_jRhAY.js";import{n as o,u as a}from"./promisifiedChrome-CheD9WtZ.js";import"./ResizeSensor-CXS_pGRc.js";import"./environmentVariables-Cy83xda0.js";import"./ViewState-CkTFc_ep.js";import"./focusModeHelpers-Cqkll3ju.js";import"./reactiveCustomization-CrL2eTrh.js";import"./VueBase-CjPGMLuv.js";import"./index-CJJH83pl.js";import"./preload-helper-D7CfCCEq.js";import"./siteBlockerViewState-BRcSSYc9.js";import"./timestampDb-sTUCijT1.js";import"./Logger-Dqn8sDPg.js";import"./string-KTo4Qfpe.js";import"./main--IJuvtTE.js";import"./localStorage-B4mFdj8F.js";import"./migrateLegacyUserMessageHandler-CU6TUnqH.js";const r=o({name:"FocusModeDash",setup(){const o=e();return{FocusModeView:s,transitionMessage:a.getRandomItem(t),celebrationMessage:a.getRandomItem(i),focusModeViewStateStore:o}},computed:{activeView(){return this.focusModeViewStateStore.currentFocusModeView}}},(function(){var e=this,s=e._self._c;return s("div",{staticClass:"focus-mode-dash",attrs:{"data-show-anyway":"focus-mode-dash"}},[s("transition",{attrs:{name:"fade",mode:"out-in"}},[e.activeView===e.FocusModeView.Idle?s("div"):e.activeView===e.FocusModeView.Transition?s("div",{key:"transition"},[s("div",{staticClass:"transition-message"},[e._v(e._s(e.transitionMessage))])]):e.activeView===e.FocusModeView.Focusing?s("div",{key:"focusing"}):e.activeView===e.FocusModeView.Celebration?s("div",{key:"celebration"},[s("div",{staticClass:"transition-message",attrs:{"data-test":"congrats-message"}},[e._v(e._s(e.celebrationMessage))])]):e._e()])],1)}),[],!1,null,"8c82641e").exports;export{r as default};