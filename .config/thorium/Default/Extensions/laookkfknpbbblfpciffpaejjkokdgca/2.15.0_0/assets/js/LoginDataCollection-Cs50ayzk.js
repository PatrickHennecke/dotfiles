import{L as t,l as e}from"./loginStepMixin-Cw4SXMRY.js";import{n as o,D as n,u as a}from"./promisifiedChrome-CheD9WtZ.js";import{l as i}from"./dashboard-CF_jRhAY.js";import{_ as s}from"./icon-next-B4hjdiAA.js";import"./SmoothReflow-B3dWZqEj.js";import"./ResizeSensor-CXS_pGRc.js";import"./environmentVariables-Cy83xda0.js";import"./allComponentsMounted-C3UsG_cA.js";import"./timestampDb-sTUCijT1.js";import"./Logger-Dqn8sDPg.js";import"./preload-helper-D7CfCCEq.js";import"./string-KTo4Qfpe.js";import"./main--IJuvtTE.js";import"./localStorage-B4mFdj8F.js";import"./migrateLegacyUserMessageHandler-CU6TUnqH.js";const r=o({name:"LoginDataCollection",components:{LoginLayout:t},mixins:[e],inject:["capture"],methods:{acceptAndContinueToLogin(){localStorage.setItem(n,"true"),this.$emit("goToSubStep",i.NAME)},uninstallSelf(){a.getBrowser().management.uninstallSelf({showConfirmDialog:!0}).catch()}}},(function(){var t=this,e=t._self._c;return e("login-layout",{attrs:{"data-test":"data-collection"},on:{submit:t.acceptAndContinueToLogin},scopedSlots:t._u([{key:"title",fn:function(){return[t._v(" Keeping your data safe ")]},proxy:!0},{key:"question",fn:function(){return[t._v(" We require some information to provide our services: ")]},proxy:!0},{key:"input",fn:function(){return[e("ul",{staticClass:"usage-item"},[e("li",[t._v(" Your name (optional), email (optional), and any other items you input (like links and tasks) ")])])]},proxy:!0},{key:"below-message",fn:function(){return[e("span",{staticClass:"policy"},[t._v("We respect and honor your privacy. See our "),e("a",{attrs:{href:"https://momentumdash.com/legal",target:"_blank"}},[t._v("Terms")]),t._v(" and "),e("a",{attrs:{href:"https://momentumdash.com/legal/privacy",target:"_blank"}},[t._v("Privacy Policy")]),t._v(".")])]},proxy:!0},{key:"continue-message",fn:function(){return[t._v(" Agree & continue "),e("inline-svg",{staticClass:"icon icon-next",attrs:{src:s}})]},proxy:!0},{key:"below-continue",fn:function(){return[e("button",{staticClass:"dash-button dash-button-link",attrs:{"data-test":"uninstall"},on:{click:t.uninstallSelf}},[t._v(" Decline & uninstall ")])]},proxy:!0}])})}),[],!1,null,"bba7559f").exports;export{r as default};