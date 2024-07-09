// Copyright (C) 1999-2024 Siber Systems Inc. All Rights Reserved.
(self.rf_vlu7ce9uien=self.rf_vlu7ce9uien||[]).push([[471],{260:function(){},63212:function(a,b,c){"use strict"
;var d=c(43246),e=(c(260),c(18540)),f=c(53707),g=c(66423),h=c(52965),i=c(5197),j=c(78440),k=c(13117);(0,j.fI)((async()=>{try{
await(0,d.r)((0,e.Me)(),(0,f.G5)(),(0,f.i0)(),(0,g.k)(),(0,h.c)(),(0,i.T)())}catch(a){(0,k.Rm)("!!! StartPage load error",a)}
})())},43246:function(a,b,c){"use strict";c.d(b,{r:function(){return q}})
;var d=c(47333),e=c(401),f=c(76259),g=c(95239),h=c(94061),i=c(70346),j=c(79997),k=c(20855),l=c(60954),m=c(78440),n=c(13113),o=c(69893),p=c(13117)
;async function q(a,b,c,q,r,s){const t=a,u=await t.Init(null),v=c,w=await(0,l.y)(t),x={initialized:!1,type:"local",
mode:"extension-v9",extensionMode:"use-native",status:"initial",rfVersion:[],platformOs:await b.GetPlatformOS(),
browserType:await b.GetBrowserType(),staging:!1,testRoboFormSetup:!1,showUsageInfo:!1,isBreachMonSupported:!1,
isPasswordAuditSupported:!1,isAccountSetupSupported:!1,isDesktopAppSetupWithAccountInfoFromExtensionSupported:!1,
isPasswordDetailsSupported:!1,isPassgenOnStartPageSupported:!1,isInAppPaymentDisabled:!1,isPaymentPageSupported:!0,
isSSOLoginSupported:!1,isUpdatePaymentPageAvailable:!0};t.onNotificationFromBackgroundScript.Add((function(a,...b){
"BackgroundReloaded"===a&&(0,m.fI)(z(null))}));let y=!1;return void await z(u);async function z(a){if(!y)try{y=!0;let c=0
;const d=10;for(;;){if(c++,x.initialized)return;let e,f=2;c>=3&&(f=5);try{e=await t.CallBackgroundScript("start-page-loaded",{
timeoutSec:f},null)}catch(b){if(c>=d)throw(0,p.Rm)(`!!! DoStartLocalStartPage: 'start-page-loaded' error, tried ${c} times`,b),b
;let a=500;(0,o.n4)(b)&&b.message.indexOf("Receiving end does not exist")>=0&&(a=500),(0,o.r5)(b,o.ut)&&(c=0,a=0),(0,
o.r5)(b,o.Un)&&(a=0),await(0,m.xy)(a);continue}return void await A(e,a)}}finally{y=!1}}async function A(b,c){var l,m,o,u,y,z,A,B
;if(x.initialized)return;if("object"==typeof b);else{if("string"!=typeof b)return void(0,
p.Rm)("!!! RF Start Page initialization failed: wrong params");b=JSON.parse(b)}x.initialized=!0,x.mode="extension-v9",
x.extensionMode=b.extensionMode,x.isBreachMonSupported=null!==(l=b.isBreachMonSupported)&&void 0!==l&&l,
x.isPasswordAuditSupported=null!==(m=b.isPasswordAuditSupported)&&void 0!==m&&m,
x.isAccountSetupSupported=null!==(o=b.isAccountSetupSupported)&&void 0!==o&&o,
x.isDesktopAppSetupWithAccountInfoFromExtensionSupported=null!==(u=b.isDesktopAppSetupSupported)&&void 0!==u&&u,
x.isPasswordDetailsSupported=null!==(y=b.isPasswordDetailsSupported)&&void 0!==y&&y,
x.isPassgenOnStartPageSupported=null!==(z=b.isPassgenOnStartPageSupported)&&void 0!==z&&z,
x.isInAppPaymentDisabled=null!==(A=b.isInAppPaymentDisabled)&&void 0!==A&&A,
x.isSSOLoginSupported=null!==(B=b.isSSOLoginSupported)&&void 0!==B&&B,x.isUpdatePaymentPageAvailable;let C=null,D=null
;if(x.isBreachMonSupported){const b=(0,i.v)(a);await b.Init();const c=(0,k.oT)();await c.Init(b,w.data),C=c}
x.isPasswordAuditSupported&&(D=(0,j.N)(a),await D.Init());let E=null,F=null;x.isSSOLoginSupported&&(E=(0,g.BO)(a),F=(0,h.O9)(a))
;const G=t.storage,H=t.storage,I=(0,n._V)((0,n.R2)(location.hash)),J=!(0,n.a8)(I,"admin-center");await(0,
e.O)(x,a,w,w.commands,C,D,E,F,null!=c?c:null,J,H,G,f.g,(async()=>{const{StartPageUrl:b}=await a.storage.Get({StartPageUrl:d.xC})
;return null!=b?b:""}),null,null,v,q,r,s)}}},79997:function(a,b,c){"use strict";function d(a){const b=a;return{
Init:async function(){return},UnInit:function(){return},GetCachedPasswordStrengthInfo:async function(a,c){
return b.CallBackgroundScript("PA:GetCachedPasswordStrengthInfo",null,c,a)},GetUpdatePasswordStrengthInfo:async function(a,c){
return b.CallBackgroundScript("PA:GetUpdatePasswordStrengthInfo",null,c,a)},GetCachedPasswordStrengthLevel:async function(a,c){
return b.CallBackgroundScript("PA:GetCachedPasswordStrengthLevel",null,c,a)},GetUpdatePasswordStrengthLevel:async function(a,c){
return b.CallBackgroundScript("PA:GetUpdatePasswordStrengthLevel",null,c,a)},GetUpdateAuditResult:async function(a,c){
return b.CallBackgroundScript("PA:GetUpdateAuditResult",null,c,a)},GetLastUpdateTime:async function(a){
return b.CallBackgroundScript("PA:GetLastUpdateTime",null,a)}}}c.d(b,{N:function(){return d}})},85e3:function(a,b,c){
"use strict";c.d(b,{v:function(){return v}})
;var d=c(65852),e=c(11834),f=c(41107),g=c(63956),h=c(32105),i=c(30045),j=c(55674),k=c(78949),l=c(62806),m=c(98266),n=c(21176),o=c(78440),p=c(88262),q=c(95399),r=c(4153),s=c(69893),t=(c(13117),
c(97514)),u=c(91764)._;function v(a,b){
const c=b,v=b.passwordGenerator,w=a.m_rf_api,x=a.m_localization,y=a.m_rf_manager,z=w.settings,A=w.options,B=w.passwordsHistory,C=a.m_http,D=a.m_rng,E=a.m_view_api,F=a.m_clipboard_cleaner,G=x.LocalizeString
;let H=null,I=null,J=null,K=null,L=null,M=null,N=null,O=null,P=null,Q=null,R=null;const S=new Map;let T=null,U=null;const V=1e3
;let W=!1,X=!1,Y=!0,Z=null,aa=null,ab=null;const ac=(0,o.tG)();let ad,ae="",af="",ag="",ah=""
;["password-generator-random-password","password-generator-passphrase"].forEach((a=>{S.set(a,function(a){switch(a){
case"password-generator-random-password":{const a=u("div",{className:"selector-item",onclick:ak},u("span",{className:"title"
},(0,g.LX)(G("PassGen_RandomPass"),"")));return v.orderSelector.appendChild(a),a}case"password-generator-passphrase":{
const a=u("div",{className:"selector-item",onclick:al},u("span",{className:"title"},(0,g.LX)(G("PassGen_Passphrase"),"")))
;return v.orderSelector.appendChild(a),a}}}(a))}));return{Activate:function(){if(W)return;W=!0,(0,g.l5)(c.files),(0,
g.l5)(v.main),az(),T||(I=(0,o.YZ)({action:aj}),(0,o.fI)(I.Execute(null)))},Deactivate:function(){if(!W)return;W=!1,T=null,(0,
g.SE)(v.main),Q&&R&&(v.main.removeChild(Q),v.main.removeChild(R))},UpdateView:function(a){a&&(X=!1);if(!W)return
;if(y.IsEditorShown())return;if(y.IsSearchResultShown())return;if(X)return;X=!0},Invalidate:function(){X=!1},
IsStillActual:function(){return W},GetIsStillActual:function(){return function(){return W}}};async function ai(){Q=function(){
const a=u("div",{className:"separator rf-progress"},u("div",{className:"rf-progress-runner hidden"}));return ad=(0,d.ZP)(a),a
}(),R=await async function(){ae=await G("PassAud_PwdStrengthStrong"),af=await G("PassAud_PwdStrengthGood"),
ag=await G("PassAud_PwdStrengthMedium"),ah=await G("PassAud_PwdStrengthWeak");const a=u("section",{
className:"rf-password-generator-container"},K=u("div",{className:"rf-password-view-and-actions","data-score":"none"},u("div",{
className:"rf-password-view-and-generate"},L=u("span",{className:"rf-generated-password"}),M=u("div",{
className:"rf-generate-password-button",onclick:an,title:await G("PassGen_Generate_Tip")})),u("div",{
className:"rf-password-view-and-actions-separator"}),u("div",{className:"rf-password-score-and-copy"},u("div",{
className:"rf-password-score"},u("div",{className:"rf-password-score-image"}),N=u("span",{className:"rf-password-score-value"
})),O=u("div",{className:"rf-copy-password-button",onclick:ap,title:await G("PassGen_Copy_Tip")
},await G("StartPage_Cmd_CopyContent")))),P=u("div",{className:"rf-password-generator-settings"}));return a}(),
v.main.append(Q,R),ad.StartIfNotStarted()}async function aj(a){await ai(),Z=await async function(){if(Z)return Z
;return Z=await(0,p.$)(`pwd-dict.json?vvv=${(0,t.RD)()}`,null,C),null!=Z?Z:{}}(),aa=await async function(){if(aa)return aa
;return aa=await(0,p.$)(`pwd-gen-words.json?vvv=${(0,t.RD)()}`,null,C),aa}();const b=[...await B.GetHistory(a)]
;Y=b.length>0?0===b[0].m_generator_type:await z.GetValue("PassGenIsWord",!0),await z.SetValue("PassGenIsWord",Y),Y?ak():al()}
function ak(){
Y&&T||(T="password-generator-random-password",(0,g.D$)((()=>am("password-generator-random-password")),az,V,(()=>ad.StartIfNotStarted)))
}function al(){
!Y&&T||(T="password-generator-passphrase",(0,g.D$)((()=>am("password-generator-passphrase")),az,V,(()=>ad.StartIfNotStarted)))}
async function am(a){const b=S.get(a);S.forEach((a=>a.classList.remove("active"))),(0,r.TT)(b).classList.add("active"),
Y="password-generator-random-password"===a,(0,g.rK)((0,r.TT)(P)),U=function(a,b,c,d,k,p,t,v){
const w=a,x=d,y=k,z=p,A=t,B=v,C=b.LocalizeString
;let D=c?(0,l.H5)():(0,l.CZ)(),E=null,F=null,G=null,H=null,I=null,J=null,K=null,L=null,M=null,N=null,O="";const P={Create:Q,
OnAfterShow:R,OnBeforeHide:S,Focus:T,Dispose:U,SetValues:V,GetValues:W,CorrectInputValues:X};return P;async function Q(){
const a="chars-number-input-startpage",b="chars-number-label-startpage";O=await C("PassGen_BitStrength");const d=c?u("div",{
className:"password-generator-settings-container"},u("div",{className:"password-generator-settings-list"},u("div",{
className:"chars-number"},u("label",{className:"setting-name-text setting-name-text-chars",
title:await C("PassGen_CharNumber_Tip"),id:b,htmlFor:a},await C("PassGen_CharNumber_Text")),E=u(h.x8,{className:"number-input",
min:1,max:512,step:1,value:D.m_length,onchange:Y,id:a,labeledById:b})),u("div",{className:"toggle-option"},u("span",{
className:"setting-name-text"},await C("PassGen_Number_Text")),F=u(h.Ig,{checked:D.m_include_digits,onchange:Z})),u("div",{
className:"toggle-option"},u("span",{className:"setting-name-text"},await C("PassGen_Upper_Text")),G=u(h.Ig,{
checked:D.m_include_upper_case_chars,onchange:aa})),u("div",{className:"toggle-option"},u("span",{className:"setting-name-text"
},await C("PassGen_Lower_Text")),H=u(h.Ig,{checked:D.m_include_lower_case_chars,onchange:ab})),u("div",{
className:"toggle-option"},u("span",{className:"setting-name-text"},await C("PassGen_UseHexChars")),K=u(h.Ig,{
checked:D.m_hex_digits_only,onchange:ai})),u("div",{className:"toggle-option"},u("span",{className:"setting-name-text"
},await C("PassGen_ExcludeSimilar_Text")),L=u(h.Ig,{checked:D.m_exclude_similar_chars,onchange:ah})),u("div",{
className:"toggle-option toggle-option-with-input",title:await C("PassGen_UseSpecial_Tip")},u("div",{className:"input-wrapper"
},u("span",{className:"setting-name-text"},await C("PassGen_Special_Text")),J=u("input",{type:"text",maxLength:30,
className:"input chars-input-identity",value:D.m_specific_chars||j.OZ,oninput:ad,onpaste:ae})),I=u(h.Ig,{
checked:D.m_include_specific_chars,onchange:ac}))),u("div",{className:"password-generator-restore-and-history"},u("a",{
className:"restore-link flat-link",onclick:aj},await C("PassGen_RestoreDefaults_Text")),M=u("div",{
className:"password-generator-history-button disabled",onclick:an},await C("PassGen_ShowHistory"))),N=u("div",{
className:"password-generator-bitstrength"})):u("div",{className:"password-generator-settings-container"},u("div",{
className:"password-generator-settings-list"},u("div",{className:"chars-number"},u("label",{
className:"setting-name-text setting-name-text-chars",title:await C("PassGen_WordsNumber_Tip"),id:b,htmlFor:a
},await C("PassGen_WordsNumber_Text")),E=u(h.x8,{className:"number-input",min:2,max:8,step:1,value:D.m_length,onchange:Y,id:a,
labeledById:b})),u("div",{className:"toggle-option toggle-option-with-input",title:await C("PassGen_UseDelim_Tip")},u("div",{
className:"input-wrapper"},u("span",{className:"setting-name-text"},await C("PassGen_WordSeparator")),J=u("input",{type:"text",
maxLength:1,className:"input chars-input-identity",value:D.m_specific_chars||j.lt,onpaste:ae,onfocus:af,onkeydown:ag
})),I=u(h.Ig,{checked:D.m_include_specific_chars,onchange:ac})),u("div",{className:"toggle-option"},u("span",{
className:"setting-name-text"},await C("PassGen_Capitalize_Text")),G=u(h.Ig,{checked:D.m_include_upper_case_chars,onchange:aa
})),u("div",{className:"toggle-option"},u("span",{className:"setting-name-text"},await C("PassGen_AddNumber")),F=u(h.Ig,{
checked:D.m_include_digits,onchange:Z}))),u("div",{className:"password-generator-restore-and-history"},u("a",{
className:"restore-link flat-link",onclick:aj},await C("PassGen_RestoreDefaults_Text")),M=u("div",{
className:"password-generator-history-button disabled",onclick:an},await C("PassGen_ShowHistory"))));return ak(),am(),d}
function R(){}function S(){}function T(){}function U(){}function V(a){const b=c?j.OZ:j.lt;(0,r.TT)(E).SetValue(a.m_length),(0,
r.TT)(F).SetChecked(a.m_include_digits),(0,r.TT)(G).SetChecked(a.m_include_upper_case_chars),(0,
r.TT)(I).SetChecked(!!a.m_specific_chars),(0,r.TT)(J).value=a.m_specific_chars||b,c&&((0,
r.TT)(H).SetChecked(a.m_include_lower_case_chars),(0,r.TT)(K).SetChecked(a.m_hex_digits_only),(0,
r.TT)(L).SetChecked(a.m_exclude_similar_chars)),D=a,am(),ak()}function W(){return D}function X(){D.m_length<1?D.m_length=c?(0,
l.H5)().m_length:(0,l.CZ)().m_length:D.m_length>j.wd&&(D.m_length=j.wd),(0,r.TT)(E).SetValue(D.m_length)}function Y(){
const a=c?(0,l.H5)().m_length:(0,l.CZ)().m_length;D.m_length=(0,r.TT)(E).GetValue()||a;try{am(),z(D,c)}catch(b){}}function Z(){
D.m_include_digits=(0,r.TT)(F).IsChecked(),am(),z(D,c)}function aa(){D.m_include_upper_case_chars=(0,r.TT)(G).IsChecked(),am(),
z(D,c)}function ab(){D.m_include_lower_case_chars=(0,r.TT)(H).IsChecked(),am(),z(D,c)}function ac(){const a=(0,
r.TT)(I).IsChecked();a?((0,r.TT)(J).removeAttribute("disabled"),(0,r.TT)(J).removeAttribute("readonly")):((0,
r.TT)(J).setAttribute("disabled","true"),(0,r.TT)(J).setAttribute("readonly","true")),D.m_include_specific_chars=a,
D.m_specific_chars=(0,r.TT)(J).value,z(D,c)}function ad(){D.m_specific_chars=(0,r.TT)(J).value,al(),am(),z(D,c)}function ae(){
setTimeout((function(){D.m_specific_chars=(0,r.TT)(J).value,c&&(al(),am()),z(D,c)}),0)}function af(){(0,r.TT)(J).select()}
function ag(a){const b=(0,r.TT)(J).value,d=a.key;b!==d&&1===d.length&&((0,r.TT)(J).value=d,D.m_specific_chars=d,z(D,c))}
function ah(){D.m_exclude_similar_chars=(0,r.TT)(L).IsChecked(),am(),z(D,c)}function ai(){D.m_hex_digits_only=(0,
r.TT)(K).IsChecked(),ak(),am(),z(D,c)}function aj(){A(c)}function ak(){(0,r.TT)(G).SetChecked(D.m_include_upper_case_chars),(0,
r.TT)(F).SetChecked(D.m_include_digits),(0,r.TT)(I).SetChecked(D.m_include_specific_chars),D.m_include_specific_chars?((0,
r.TT)(J).removeAttribute("disabled"),(0,r.TT)(J).removeAttribute("readonly")):((0,r.TT)(J).setAttribute("disabled","true"),(0,
r.TT)(J).setAttribute("readonly","true")),c&&(0,r.TT)(H).SetChecked(D.m_include_lower_case_chars),D.m_hex_digits_only?((0,
r.TT)(J).setAttribute("disabled","true"),(0,r.TT)(G).Enable(!1),(0,r.TT)(F).Enable(!1),(0,r.TT)(I).Enable(!1),c&&(0,
r.TT)(H).Enable(!1)):(D.m_include_specific_chars&&(0,r.TT)(J).removeAttribute("disabled"),(0,r.TT)(G).Enable(!0),(0,
r.TT)(F).Enable(!0),(0,r.TT)(I).Enable(!0),c&&(0,r.TT)(H).Enable(!0))}function al(){const a=(0,
l.gp)(D.m_specific_chars),b=new Set;let c="";for(const d of a)b.has(d)||(b.add(d),c+=d)
;c!==D.m_specific_chars&&(D.m_specific_chars=c,(0,r.TT)(J).value=D.m_specific_chars)}function am(){if(!c)return;let a=D.m_length
;a<1&&(a=1),a>512&&(a=512);const b=(0,n.uQ)(a,D);(0,r.TT)(N).textContent=`${O}${b.toString()}`}function an(){(0,
r.TT)(M).classList.contains("disabled")||(0,g.D$)((()=>ao()),(()=>()=>{}),0,null)}async function ao(){var a
;const b=null!==(a=C("ContextMenuAndShortcuts_RunPassHistory_Text"))&&void 0!==a?a:"",c=(0,e.BG)((0,m.p)((0,
e.IW)("rf-passwords-history-dialog",b,null),(()=>(0,i._)((async(a,b)=>{let c,d=null;const e=new Map,h=u("div",{
className:"rf-passwords-history-wrapper"},u("span",{className:"history-clears-caution"
},await C("PassGen_PassHistory_Clears_Text")),c=u("div",{className:"passwords-history-list"}),u("div",{
className:"passwords-history-footer"},u("div",{className:"passwords-history-clear-btn",onclick:k
},await C("PassGen_ClearHistory")))),i=[...await x.GetHistory(null)];i.sort(((a,b)=>{var c,d,e,f,g,h
;const i=Math.max(a.m_time_generated_utc_secs,null!==(c=a.m_time_last_copied_utc_secs)&&void 0!==c?c:0,null!==(e=a.m_fill_history&&(null===(d=a.m_fill_history[0])||void 0===d?void 0:d.m_time_utc_secs))&&void 0!==e?e:0),j=Math.max(b.m_time_generated_utc_secs,null!==(f=b.m_time_last_copied_utc_secs)&&void 0!==f?f:0,null!==(h=b.m_fill_history&&(null===(g=b.m_fill_history[0])||void 0===g?void 0:g.m_time_utc_secs))&&void 0!==h?h:0)
;return j>i?1:j<i?-1:0}));for(const f of i){const a=u("div",{className:"passwords-history-item",onclick:()=>(0,o.fI)(j(f))
},u("span",{className:"passwords-history-item-value"},f.m_password),d=u("div",{className:"passwords-history-item-actions"
}),u("div",{className:"passwords-history-item-copy-icon"}))
;if(e.set(f,d),f.m_fill_history&&f.m_fill_history.length>0)for(const b of f.m_fill_history){m(await(0,
l.nY)(w,b.m_time_utc_secs,"fill",b.m_domain),d)}if(f.m_time_last_copied_utc_secs){m(await(0,
l.nY)(w,f.m_time_last_copied_utc_secs,"copy",null),d)}
if(!(f.m_fill_history&&0!==f.m_fill_history.length||f.m_time_last_copied_utc_secs)){m(await(0,
l.nY)(w,f.m_time_generated_utc_secs,"generate",null),d)}c.appendChild(a)}return h;async function j(a){
const b=Object.assign({},a);b.m_time_last_copied_utc_secs=(0,q.t2)(),await x.UpdatePasswordData(b,null)
;for(const c of e)if(b.m_password===c[0].m_password){const a=c[1];if((0,g.rK)((0,r.TT)(a)),
b.m_fill_history)for(const c of b.m_fill_history){m(await(0,l.nY)(w,c.m_time_utc_secs,"fill",c.m_domain),a)}m(await(0,
l.nY)(w,b.m_time_last_copied_utc_secs,"copy",null),a);break}
(0,o.fI)((0,f.sZ)(b.m_password||"",C("StartPage_PasswordCopy_Notification"),f.jG,y))}function k(){i&&0!==i.length&&(B(),(0,
g.rK)((0,r.TT)(c)),b(s.JS))}function m(a,b){if(!b)return;const c=u("span",{className:"history-action-text"},a);(0,
r.TT)(b).appendChild(c)}})))));await c.Execute(null)}}(E,x,Y,B,F,ar,as,aw),H=(0,o.YZ)({action:aq}),(0,
r.TT)(P).appendChild(await U.Create()),(0,o.fI)(H.Execute(null));const c=[...await B.GetHistory(null)];let d=!1
;if(c.length>0)for(const e of c)if(Y&&0===e.m_generator_type||!Y&&1===e.m_generator_type){d=!0,ab=e;break}
if(d)ab&&ax(ab);else try{await au(null)}catch(k){await at(),await au(null)}ay()}function an(){(0,
r.TT)(M).classList.contains("disabled")||(J=(0,o.YZ)({action:ao}),(0,g.D$)((()=>(0,
r.TT)(J).Execute(null)),az,V,(()=>ad.StartIfNotStarted)))}async function ao(a){await au(a)}function ap(){const a=(0,
r.TT)(L).textContent,b=(0,r.TT)(O).classList.contains("disabled");a&&!b&&(0,g.D$)((()=>async function(){if(!ab)return
;ab.m_time_last_copied_utc_secs=(0,
q.t2)(),(0,o.fI)((0,f.sZ)(ab.m_password||"",G("StartPage_PasswordCopy_Notification"),f.jG,F)),
await B.UpdatePasswordData(ab,null)}()),(()=>()=>{}),0,null)}async function aq(a){if(Y){const b=(0,l.H5)(),c=await A.Get({
PassGenCharNumber:b.m_length,PassGenExcludeSimilar:b.m_exclude_similar_chars,PassGenUseHexChars:b.m_hex_digits_only,
PassGenCheckUpper:b.m_include_upper_case_chars,PassGenCheckLower:b.m_include_lower_case_chars,
PassGenCheckNumber:b.m_include_digits,PassGenCheckSpecial:b.m_include_specific_chars,PassGenCharSet:b.m_specific_chars})
;a.ThrowIfShouldStop();const d={m_length:c.PassGenCharNumber,m_include_digits:c.PassGenCheckNumber,
m_include_upper_case_chars:c.PassGenCheckUpper,m_include_lower_case_chars:c.PassGenCheckLower,
m_include_specific_chars:c.PassGenCheckSpecial,m_specific_chars:c.PassGenCharSet,m_min_digits:-1,
m_hex_digits_only:c.PassGenUseHexChars,m_exclude_similar_chars:c.PassGenExcludeSimilar};(0,r.TT)(U).SetValues(d)}else{
const b=(0,l.CZ)(),c=await A.Get({PassphraseGenCharNumber:b.m_length,PassphraseGenExcludeSimilar:b.m_exclude_similar_chars,
PassphraseGenUseHexChars:b.m_hex_digits_only,PassphraseGenCheckUpper:b.m_include_upper_case_chars,
PassphraseGenCheckLower:b.m_include_lower_case_chars,PassphraseGenCheckNumber:b.m_include_digits,
PassphraseGenCheckSpecial:b.m_include_specific_chars,PassphraseGenCharSet:b.m_specific_chars});a.ThrowIfShouldStop();const d={
m_length:c.PassphraseGenCharNumber,m_include_digits:c.PassphraseGenCheckNumber,
m_include_upper_case_chars:c.PassphraseGenCheckUpper,m_include_lower_case_chars:c.PassphraseGenCheckLower,
m_include_specific_chars:c.PassphraseGenCheckSpecial,m_specific_chars:c.PassphraseGenCharSet,m_min_digits:-1,
m_hex_digits_only:c.PassphraseGenUseHexChars,m_exclude_similar_chars:c.PassphraseGenExcludeSimilar};(0,r.TT)(U).SetValues(d)}
ay()}function ar(a,b){ac.Start((async c=>{b?await z.Set({PassGenCharNumber:a.m_length,
PassGenExcludeSimilar:a.m_exclude_similar_chars,PassGenUseHexChars:a.m_hex_digits_only,
PassGenCheckUpper:a.m_include_upper_case_chars,PassGenCheckLower:a.m_include_lower_case_chars,
PassGenCheckNumber:a.m_include_digits,PassGenCheckSpecial:a.m_include_specific_chars,PassGenCharSet:a.m_specific_chars
}):await z.Set({PassphraseGenCharNumber:a.m_length,PassphraseGenExcludeSimilar:a.m_exclude_similar_chars,
PassphraseGenUseHexChars:a.m_hex_digits_only,PassphraseGenCheckUpper:a.m_include_upper_case_chars,
PassphraseGenCheckLower:a.m_include_lower_case_chars,PassphraseGenCheckNumber:a.m_include_digits,
PassphraseGenCheckSpecial:a.m_include_specific_chars,PassphraseGenCharSet:a.m_specific_chars}),c.ThrowIfShouldStop()})),ay()}
function as(){(0,g.D$)((()=>at()),az,V,(()=>ad.StartIfNotStarted))}async function at(){
Y?(await z.Remove(["PassGenCharNumber","PassGenExcludeSimilar","PassGenUseHexChars","PassGenCheckUpper","PassGenCheckLower","PassGenCheckNumber","PassGenCheckSpecial","PassGenCharSet"]),
(0,
r.TT)(U).SetValues((0,l.H5)())):(await z.Remove(["PassphraseGenCharNumber","PassphraseGenExcludeSimilar","PassphraseGenUseHexChars","PassphraseGenCheckUpper","PassphraseGenCheckLower","PassphraseGenCheckNumber","PassphraseGenCheckSpecial","PassphraseGenCharSet"]),
(0,r.TT)(U).SetValues((0,l.CZ)())),ay()}async function au(a){ab=Y?function(){(0,r.TT)(U).CorrectInputValues();const a=(0,
r.TT)(U).GetValues();return{m_password:(0,n.Zf)(a.m_length,a,D),m_generator_type:0,m_time_generated_utc_secs:(0,q.t2)()}
}():function(){(0,r.TT)(U).CorrectInputValues();const a=(0,r.TT)(U).GetValues(),b=(0,r.TT)(aa).words;return{m_password:(0,
n.e3)(a.m_length,a,b),m_generator_type:1,m_time_generated_utc_secs:(0,q.t2)()}}(),ax(ab),await B.AddPassword(ab,a)}
function av(a){if(!a)return(0,r.TT)(N).textContent="",void((0,r.TT)(K).dataset.score="none");(0,k.Hq)((0,r.TT)(Z));const b=(0,
k.im)(a,[],null);let c;b>75?((0,r.TT)(N).textContent=ae,c="strong"):b>50?((0,r.TT)(N).textContent=af,c="good"):b>25?((0,
r.TT)(N).textContent=ag,c="medium"):((0,r.TT)(N).textContent=ah,c="weak"),(0,r.TT)(K).dataset.score=c}function aw(){(0,
g.D$)((()=>async function(){ab=null,(0,r.TT)(L).textContent="",av(""),ay(),await B.Clear(null)}()),(()=>()=>{}),0,null)}
function ax(a){(0,r.TT)(L).textContent=a.m_password,av(a.m_password),ay()}function ay(){const a=(0,
r.TT)(L).textContent,b=document.querySelector(".password-generator-history-button");a?((0,r.TT)(O).classList.remove("disabled"),
(0,r.TT)(b).classList.remove("disabled")):((0,r.TT)(O).classList.add("disabled"),(0,r.TT)(b).classList.add("disabled"))
;const c=(0,r.TT)(U).GetValues()
;c.m_hex_digits_only||c.m_include_upper_case_chars||c.m_include_lower_case_chars||c.m_include_digits||c.m_specific_chars?(0,
r.TT)(M).classList.remove("disabled"):(0,r.TT)(M).classList.add("disabled")}function az(){
return window.addEventListener("mousedown",aB,!0),aA}function aA(){window.removeEventListener("mousedown",aB,!0),(0,
r.TT)(O).classList.remove("disabled"),(0,r.TT)(M).classList.remove("disabled"),ad.Stop()}function aB(a){a.preventDefault(),
a.stopPropagation(),(0,r.TT)(O).classList.add("disabled"),(0,r.TT)(M).classList.add("disabled")}}},76259:function(a,b,c){
"use strict";c.d(b,{g:function(){return d}})
;const d=["login-page-bg-1.jpg","login-page-bg-2.jpg","login-page-bg-3.jpg","login-page-bg-4.jpg","login-page-bg-5.jpg","login-page-bg-6.jpg","login-page-bg-7.jpg","login-page-bg-8.jpg","login-page-bg-9.jpg","login-page-bg-10.jpg","login-page-bg-11.jpg","login-page-bg-12.jpg","login-page-bg-13.jpg","login-page-bg-14.jpg"]
},63452:function(a,b,c){"use strict";c(58863),c(25116),c(21217),c(2346),c(15482),c(6353),c(36029),c(3846),c(76853),c(30526),
c(14755),c(41808),c(42244),c(43503),c(24713),c(26781),c(74072),c(47974),c(38664),c(42609),c(51796),c(20958),c(1597),c(41656),
c(85122),c(14497),c(31586),c(59212),c(15422),c(775),c(89257),c(30588),c(57837),c(81465),c(73627),c(90942),c(21625),c(90292),
c(67857),c(4181),c(31733),c(82755),c(7299),c(40260),c(78143),c(48017),c(27641),c(19865),c(36205),c(44760),c(68741),c(58496),
c(88502),c(54730),c(15153),c(25507),c(22744),c(85726),c(34732),c(89398),c(53306),c(48374),c(19921),c(18927),c(78920),c(87492),
c(31913),c(23870),c(54369),c(61817),c(24034),c(23869),c(70712),c(83374),c(41388),c(86379),c(53022),c(14816),c(18735),c(27402),
c(5540),c(28737),c(13083),c(65012),c(25921),c(37604),c(25148),c(80275),c(98550),c(2672),c(91505),c(77353),c(41836),c(58004),
c(54640),c(77079),c(49788),c(20796),c(38456),c(36915),c(85163),c(1191),c(53867),c(91953),c(64085),c(18144),c(44119),c(96779),
c(21491),c(40216),c(15272),c(48486),c(8818),c(99007),c(19135),c(39971),c(77534),c(64293),c(16670),c(61633),c(12711),c(28486),
c(24995),c(88132),c(1052),c(65496),c(83033),c(65180),c(90969),c(21421),c(51367),c(81753),c(99925),c(7842),c(54498),c(54564),
c(40912),c(15943),c(87108),c(38870),c(35441),c(71523),c(89476),c(10562),c(51043),c(82060),c(83712),c(81518),c(36914),c(47264),
c(32816),c(73806),c(85683),c(67644),c(79119),c(28469),c(24478),c(16337),c(82759),c(20349),c(36980),c(64192),c(12049),c(3329),
c(54715),c(38162),c(18267),c(53957),c(12454),c(27113),c(90957),c(45691),c(96601),c(6825),c(9269),c(8578),c(66043),c(4473),
c(38779),c(11422),c(50471),c(1982),c(24382),c(7863),c(18516),c(45788),c(56907),c(76768),c(47808),c(10659),c(20589),c(60734),
c(90185),c(3364),c(91986),c(15096),c(9335),c(17037),c(24403),c(9403),c(89993),c(84166),c(10529),c(40944),c(41104),c(54011),
c(66069),c(58262),c(77467),c(22275),c(8251),c(31750),c(91424),c(50750),c(57188),c(43667),c(11),c(97226),c(82288),c(64891),
c(5085),c(49651),c(90579),c(41955),c(72757),c(52663),c(66721),c(71577),c(59748),c(54163),c(39545),c(38538),c(48771),c(25385),
c(48762),c(29491),c(77324),c(99635),c(87400),c(412),c(57214),c(10119),c(13018),c(62703),c(2882),c(19548),c(18796),c(15712),
c(80323),c(11677),c(84676),c(28144),c(3626),c(75576),c(6247),c(53848),c(68809),c(96886),c(68409),c(90886),c(57034),c(59108),
c(36724),c(38715),c(5848),c(20271),c(26009),c(21621),c(85994),c(14172),c(21009),c(16276),c(59051),c(69492),c(3409),c(36462),
c(65421),c(21813),c(6399),c(65864),c(94782),c(61410),c(99457),c(58322),c(73374),c(25019),c(36078),c(21736),c(51350),c(45919),
c(53484),c(18370),c(45337)},47048:function(a,b,c){"use strict";c.d(b,{B:function(){return s}})
;var d=c(37367),e=c(48658),f=c(36786),g=c(4601),h=c(41107),i=c(38221),j=c(47333),k=c(54811),l=c(4234),m=c(63956),n=c(4153),o=c(13113),p=c(69893),q=c(78440),r=c(13117)
;function s(a,b,c){const s=c,t=s.LocalizeString;let u=!1,v=!1
;const w=a,x=a.m_rf_manager,y=w.m_rf_api.policies,z=a.m_rf_data_popular,A=a.m_data_item_display_name_provider,B=a.m_initial_identity_provider,C=a.m_rf_cached_data_info,D=a.m_rf_page_status,E=b,F=[E.createItem,E.actualItem,E.categoryItem]
;let G=[],H=null,I=null;const J=(0,q.E5)(!1),K=(0,e.nj)("actual-identity",L);if(F.forEach((a=>{a.addEventListener("click",(a=>{
const b=a.target,c=b.classList.contains("rf-actual-identity")||null!==(0,i.Yw)(b,".rf-actual-identity");if(I){
if(b.classList.contains("rf-item-menu"))return;const c={path:l.xG,type:5};x.OnOpenEditor(c,!1,!1,(0,g.l7)(a))
}else if(0===G.length)(0,q.fI)((async()=>{try{const a=await N();await w.OnNew(a)}catch(a){}})());else if(null!==H&&c){
if(b.classList.contains("rf-item-menu"))return;x.OnOpenEditor(H,!1,!1,(0,g.l7)(a))
}else x.OnSelectItemTypeFilter("item-type-filter-identities")}))})),(0,i.sj)(E.actualItem,(a=>{const b=a.target
;H&&!b.classList.contains("rf-item-menu")&&x.OnOpenEditor(H,!1,!1,!0)
})),(0,h.YC)("#v8 .identity-select.rf-create-identity .select-title",t("StartPage_Create_Identity_Tip")),D.staging){
const a=["KeyI","KeyI","KeyI"];let b=[];document.addEventListener("keydown",(c=>{
if(c.code===a[b.length]&&c.altKey&&c.shiftKey&&c.ctrlKey){if(b.push(a[b.length]),(0,n.Fu)(b,a)){if(b=[],!u)return;if(I)return
;H&&(0,q.fI)((0,d.DR)(H,w.m_ui_commands,x,s))}}else b.length>0&&(b=[])}))}return{Activate:function(){if(u)return;u=!0},
Deactivate:function(){if(!u)return;u=!1},UpdateView:function(){if(!u)return;return void(0,q.fI)(async function(){try{
const a=await async function(a){let b=[],c=!1;try{await a.UpdateData((async(a,d,e)=>{
if(d&&0!==d.length&&(b=b.concat(d.filter((a=>5===a.type))),b.length>1))throw c=!0,p.JS}),null)}catch(d){if(!c)throw d}return b
}(K),b=await async function(a){if(0===a.length)return null;const b=a[0];if(1===a.length)return d(b);try{
await z.Update("get-my-identity",null,null)}catch(e){return d(b)}const c=z.GetData()||[]
;for(const f of c)if(5===f.type)return d(f);return d(b);async function d(a){return C.FetchDataInfo(a.path,!0)}}(a);if(G=a,b)H=b,
I=null;else{if(await(0,k.h$)(y)){const a=await B.GetInitialIdentity(null);H=null,I=a}else H=null,I=null}v=!0,
G.length<2&&"category-folders"===x.GetCategory()&&"item-type-filter-identities"===x.GetItemTypeFilter()&&x.OnSelectItemTypeFilter("item-type-filter-all"),
F.forEach((a=>{(0,m.SE)(a)})),I?(P(),await O()):0===G.length?await M():1===G.length?(P(),H&&await O()):(P(),H&&await O(),(0,
m.l5)(E.categoryItem)),x.GetController(1).UpdateScrollMode()}catch(a){(0,p.r5)(a,p.ut)?x.ScheduleUpdateViewsAfterError():(0,
r.Rm)("!!! Actual Identity View: cannot get identities",a)}}())},Invalidate:()=>{v=!1},IsStillActual:L,
GetIsStillActual:function(){return L},UpdateCreateIdentity:M};function L(){return u}async function M(){if(a())try{
if(await J.Execute({action:N},null),!a())return;P(),(0,m.l5)(E.createItem)}catch(b){if((0,p.r5)(b,p.kd))return;if(!a())return
;!function(){const a=E.section;(0,m.SE)(a)}()}else;function a(){return u&&v&&0===G.length&&!I}}async function N(){try{
return await(0,f.YO)("new-identity","",c),""}catch(a){const b="category-folders"===x.GetCategory()&&x.GetFolder()||""
;if(""!==b){let a=(0,o.Y0)(b);return a=""===a?b:a,await(0,f.YO)("new-identity",a,c),a}throw a}}async function O(){
const a=E.actualItem;if(I){(0,m.l5)(a);const b=I,c=await(0,j.D5)(b,{},s);E.actualItemName.textContent=c
;const d=E.actualItemImage;(0,g.EI)(c,"",d,d),E.actualItemSharing&&(E.actualItemSharing.remove(),E.actualItemSharing=null)}else{
if(!H)return;{(0,m.l5)(a);const b=H;if(0===(0,l.Wi)(b.path).type){(0,h.YC)(a,t("StartPage_Category_Tip_Identity",[(0,
l.em)(b.path)])),E.actualItemName.textContent=(0,l.em)(b.path);const c=E.actualItemImage;(0,g.EI)(b.path,b.path,c,c)}else{
const a=await A.GetDisplayNameByPath(b.path,null);E.actualItemName.textContent=a;const c=E.actualItemImage;(0,
g.EI)(a,b.path,c,c)}E.actualItemSharing?(0,g.bv)(a,b):(E.actualItemSharing=(0,g.sj)(b,!0),a.appendChild(E.actualItemSharing))}}
if(null===E.actualItemMenu){const b=document.createElement("div");(0,h.YC)(b,t("StartPage_MoreActions_Tip")),
b.classList.add("rf-item-menu","rf-cmdbutton","auto-hide"),b.addEventListener("click",(()=>{if(I){const c=(0,i.VC)(b);(0,
q.fI)((0,g.KR)(I,a,{clientX:c.left,clientY:c.top+b.offsetHeight}))}else if(H){const c=(0,i.VC)(b);(0,q.fI)((0,g.j1)(H,a,{
clientX:c.left,clientY:c.top+b.offsetHeight}))}})),a.addEventListener("contextmenu",(b=>(I?(0,q.fI)((0,g.KR)(I,a,(0,
h.Eo)(b))):H&&(0,q.fI)((0,g.j1)(H,a,(0,h.Eo)(b))),b.preventDefault(),!1))),E.actualItemMenu=b,a.appendChild(b)}}function P(){
const a=E.section;(0,h.YC)(a,t("StartPage_Category_Tip_Identities")),(0,m.l5)(a),(0,
q.C)((()=>x.GetController(1).UpdateScrollMode()))}}},1871:function(a,b,c){"use strict";c.d(b,{Z:function(){return n},
i:function(){return o}});var d=c(4601),e=c(41107),f=c(38221),g=c(65852),h=c(31173),i=c(63956),j=c(78440),k=c(69893),l=c(4153)
;c(13117);function m(a){return"section-title"===a.type}function n(a){
const b=a.m_get_is_still_actual,c=a.m_items_list,e=a.m_data_item_display_name_provider,k=(0,
g.ZP)(a.m_progress_indicator),n=a.m_rf_cached_data_info,o=a.m_on_finish_update,p=a.m_show_all_items;let q,r,s=0;const t=new Map
;let u=[],v=-1,w=-1;const x=(0,l.TT)(document.querySelector("#v8 .rf-data-view .rf-no-items")),y=(0,
l.TT)(document.querySelector("#v8 .rf-data-view .rf-data"));if(y.addEventListener("scroll",(()=>A(c,!1))),
window.addEventListener("resize",(()=>A(c,!1))),window.ResizeObserver){new ResizeObserver((()=>A(c,!1))).observe(c)}const z={
StartUpdate:function(a){const b=q!==a.m_view_id;q=a.m_view_id,r=a.m_data_item_appearence_rules,b&&D()
;const d=c.querySelector(".rf-add-new-item");null!==d&&d.remove();(0,i.SE)(x),s=y.scrollTop,t.forEach((a=>{a.invalidated=!0})),
u=[],v=-1,w=-1,k.StartIfNotStarted()},UpdateItems:function(a){const b=a.m_items_in_folders_count||{};if(q!==a.m_view_id)return
;u=[];for(const c of a.m_items){const a=c.path;if(m(c))continue;const d=n.GetDataInfo(a)||c;let e=t.get(a);e?(e.uptodate=!1,
e.invalidated=!1,e.item_info=d,e.items_in_folder_count=b[a]):(e={path:a,item_info:d,items_in_folder_count:b[a],elem:null,
uptodate:!1,invalidated:!1},t.set(a,e)),u.push(e)}A(c,!0),a.m_preserve_scroll_position&&s?y.scrollTop=s:y.scrollTop=0
;k.ScheduleStop(500)},FinishUpdate:function(a){if(q!==a.m_view_id)return;E(),(0,j.fI)((0,
d.XV)(c,(async a=>e.GetDisplayNameByPath(a,null)),(()=>q===a.m_view_id))),(0,j.fI)(b()),
a.m_not_final?k.ScheduleStop(500):k.Stop();return;async function b(){const b=u.length,e=a.m_total_shown_items_number||b
;if(0===e&&!0!==a.m_not_final){const b=await(0,d.w8)();if(q!==a.m_view_id)return;if(b)return(0,i.l5)(x),void await(0,
d.y4)(c,y.offsetHeight,!0)}if(e>0&&(0,i.l5)((0,l.TT)(document.querySelector("#v8 .rf-data-view .rf-data-view-header"))),
!0!==a.m_not_final&&((0,i.SE)(x),await(0,d.y4)(c,y.offsetHeight,!1)),a.m_select_item){const b=a.m_select_item.path;(0,
j.C)((()=>function(a){let b=-1;for(let c=0;c<u.length;++c)if(u[c].path===a){b=c;break}if(-1===b)return
;const d=C(c),e=Math.floor(b/d.items_per_line)*d.item_height;y.scrollTop=e,A(c,!1);const f=u[b].elem
;null!==f&&(f.classList.add("selected"),setTimeout((()=>{f.classList.remove("selected")}),3e3))}(b)))}o&&o(b)}},
RemoveAllElements:D};return z;function A(a,b){if(0===a.clientWidth)return;if(p||r.fixed_items_per_line)return v=0,w=u.length-1,
void(b&&B());const c=C(a);let d=a.querySelector(".virtual-list-scroller");null===d&&(d=document.createElement("div"),
d.classList.add("virtual-list-scroller"),
a.appendChild(d)),d.style.height=(0,h.Md)(c.item_height*Math.ceil(u.length/c.items_per_line))
;const e=Math.floor(y.scrollTop/c.item_height),f=Math.floor((y.scrollTop+c.viewport_height)/c.item_height),g=e*c.items_per_line,i=Math.min(u.length-1,(f+1)*c.items_per_line-1),j=i-g+1,k=Math.max(0,g-j),l=Math.min(u.length-1,i+j)
;(b||v!==k||w!==l)&&(v=k,w=l,B())}function B(){for(let e=0;e<u.length;++e){const h=u[e]
;e<=w?(null===h.elem?h.elem=(a=h.item_info,
g=h.items_in_folder_count,(0,d.ef)(a,r.image_size,b(),g)):h.uptodate||H(h.elem,h.item_info,h.items_in_folder_count),
h.uptodate=!0,G(h),(0,f.k)(c,h.elem,e)):F(h)}var a,g;(0,j.fI)((0,d.XV)(c,(async a=>e.GetDisplayNameByPath(a,null)),b()))}
function C(a){const b=a.clientWidth,c=Math.floor((0,f.VC)(y).top),d=window.innerHeight-c-38;let e=r.default_item_outer_width
;r.fixed_items_per_line&&(e=Math.floor(b/r.fixed_items_per_line));const g=r.default_item_outer_height
;let h=Math.max(1,Math.floor(b/e));return r.fixed_items_per_line&&(h=r.fixed_items_per_line),{viewport_width:b,
viewport_height:d,item_width:e,item_height:g,items_per_line:h}}function D(){(0,f.Nt)(c),t.clear(),u=[]}function E(){
t.forEach((a=>{var b;a.invalidated&&(F(a),null===(b=a.elem)||void 0===b||b.setAttribute("data-invalidated","true"))}))}
function F(a){var b;null!==a.elem&&((0,i.SE)(a.elem),null===(b=a.elem)||void 0===b||b.removeAttribute("data-invalidated"))}
function G(a){var b;null!==a.elem&&((0,i.l5)(a.elem),null===(b=a.elem)||void 0===b||b.removeAttribute("data-invalidated"))}
function H(a,c,e){(0,d.Td)(a,c,r.image_size,b(),e)}}function o(a){
const b=a.m_get_is_still_actual,c=a.m_data_item_display_name_provider,f=a.m_items_list,h=(0,
g.ZP)(a.m_progress_indicator),n=a.m_on_finish_update;let o;const p=(0,e.wj)({elem:f,itemHeight:50,itemsListTopPadding:50,
alwaysSelectFirstItem:!1,onScrollEvent:()=>{(0,e.DN)(f)&&(0,e.b2)(!1)},onViewportItemsUpdated:function(){
const a=f.querySelector(".rf-add-new-item");if(null!==a){const b=a.nextElementSibling
;b&&b.classList.contains("rf-list-item-row")&&(a.remove(),(0,l.TT)(f.querySelector(".rf-virt-list-viewport")).appendChild(a))}}
});let q=[],r=0;const s={StartUpdate:function(a){const b=o!==a.m_view_id;o=a.m_view_id,b&&t();(0,i.SE)((0,
l.TT)(document.querySelector("#v8 .rf-data-view .rf-no-items")));const c=f.querySelector(".rf-add-new-item")
;null!==c&&c.remove();(0,d.RN)(f),r=f.scrollTop,h.StartIfNotStarted()},UpdateItems:function(a){
const c=a.m_items,g=a.m_items_in_folders_count||{};if(o!==a.m_view_id)return;const h=c.map((a=>a.path))
;q=q.filter((a=>h.includes(a.path)));let i=l("");for(let b=0;b<c.length;b++){const a=c[b];i++;const d=l(a.path)
;-1===d?q.splice(i,0,a):d!==i&&(q.splice(d,1),d<i&&i--,q.splice(i,0,a))}p.UpdateItems({items:q.map((a=>a.path)),
CreateItem:function(a){let c=null;const f=j(a);if(f&&(c=function(a,c){let f=null;!function(a){return!m(a)
}(a)?m(a)&&"section-title"===a.type&&(f=document.createElement("div"),f.classList.add("rf-section-title"),(0,
e.$9)(f,a.title)):f=(0,d.Ip)(a,"img32",(()=>b()()&&p.IsItemReal(a.path)),c,!0);if(!f)return null;return f}(f,g[a])),!c)throw(0,
k.ZU)(k.V2,"Cannot create item element");return c},UpdateItem:function(a,c){const e=j(a);e&&function(a,c,e){if(m(a))return;(0,
d.Td)(c,a,"img32",(()=>b()()&&p.IsItemReal(a.path)),e)}(e,c,g[a])},DeleteItem:function(a){(0,d.Pi)(a)}}),
a.m_preserve_scroll_position&&r&&(f.scrollTop=r);return;function j(a){for(let b=0;b<q.length;++b)if(q[b].path===a)return q[b]
;return null}function l(a){for(let b=0;b<q.length;++b)if(q[b].path===a)return b;return-1}},FinishUpdate:function(a){
if(o!==a.m_view_id)return;(0,j.fI)((0,d.XV)(f,(async a=>c.GetDisplayNameByPath(a,null)),(()=>o===a.m_view_id))),(0,j.fI)(b()),
a.m_not_final?h.ScheduleStop(500):h.Stop();return;async function b(){if(0===q.length&&!0!==a.m_not_final){const b=await(0,
d.w8)();if(o!==a.m_view_id)return;if(b){(0,i.l5)((0,l.TT)(document.querySelector("#v8 .rf-data-view .rf-no-items"))),await(0,
d.y4)((0,l.TT)(f.querySelector(".rf-virt-list-viewport")),f.offsetHeight-50,!0);const a=f.querySelector(".rf-list-item-header")
;return void(a&&a.remove())}}
if(q.length>0&&(0,i.l5)((0,l.TT)(document.querySelector("#v8 .rf-data-view .rf-data-view-header"))),
!0!==a.m_not_final&&(await(0,d.y4)((0,l.TT)(f.querySelector(".rf-virt-list-viewport")),f.offsetHeight-50,!1),(0,d.gt)()),
a.m_select_item){const b=a.m_select_item.path;p.Select(b),setTimeout((()=>{p.Deselect(b)}),3e3)}n(q.length)}},
RemoveAllElements:t};return s;function t(){q=[];const a=f.querySelector(".rf-add-new-item");null!==a&&a.remove()}}},
84428:function(a,b,c){"use strict";c.d(b,{F:function(){return w}})
;var d=c(48658),e=c(83645),f=c(1871),g=c(4601),h=c(11834),i=c(41107),j=c(38221),k=c(65852),l=c(98266),m=c(4234),n=c(54811),o=c(31173),p=c(63956),q=c(13113),r=c(4153),s=c(78440),t=c(73863),u=c(69893),v=(c(13117),
c(91764)._);function w(a,b){const c=a.m_localization,e=c.LocalizeString;let k=!1,q=!1
;const w=a,z=a.m_rf_manager,A=a.m_rf_cached_data_info,B=a.m_rf_items_existance,C=a.m_data_item_display_name_provider,D=a.m_start_page_preferences,E=b,F=b.dataItems,G=a.m_rf_api.sharing,H=(0,
s.tG)(),I=(0,s.tG)(),J=(0,s.h1)(),K=(0,s.h1)();let L,M=[],N=[],O="rf-view-large",P="",Q="",R="",S=null;const T=(0,f.Z)({
m_get_is_still_actual:ad,m_items_list:ae("data-items-section-main").items,m_progress_indicator:F.progress,
m_rf_cached_data_info:A,m_data_item_display_name_provider:C,m_on_finish_update:ak,m_show_all_items:!1}),U=(0,f.i)({
m_get_is_still_actual:ad,m_data_item_display_name_provider:C,m_items_list:ae("data-items-section-main-list-view").items,
m_progress_indicator:F.progress,m_on_finish_update:ak}),V=(0,f.Z)({m_get_is_still_actual:ad,
m_items_list:ae("data-items-section-shared-folders").items,m_progress_indicator:F.progress,m_rf_cached_data_info:A,
m_data_item_display_name_provider:C,m_show_all_items:!0}),W=(0,f.Z)({m_get_is_still_actual:ad,
m_items_list:ae("data-items-section-groups").items,m_progress_indicator:F.progress,m_rf_cached_data_info:A,
m_data_item_display_name_provider:C,m_show_all_items:!0}),X=(0,f.Z)({m_get_is_still_actual:ad,
m_items_list:ae("data-items-section-shared-files").items,m_progress_indicator:F.progress,m_rf_cached_data_info:A,
m_data_item_display_name_provider:C,m_show_all_items:!0}),Y=new Map;Y.set("pinned-view",x({m_view_id:"pinned-view",
m_data_items_list:T,m_subfolders:!0,m_get_data:()=>w.m_rf_data_pinned,
m_schedule_update_views_after_error:z.ScheduleUpdateViewsAfterError,m_is_still_actual:ad("pinned-view")})),
Y.set("popular-view",x({m_view_id:"popular-view",m_data_items_list:T,m_subfolders:!0,m_get_data:()=>w.m_rf_data_popular,
m_schedule_update_views_after_error:z.ScheduleUpdateViewsAfterError,m_is_still_actual:ad("popular-view")})),
Y.set("popular-list-view",x({m_view_id:"popular-list-view",m_data_items_list:U,m_subfolders:!0,
m_get_data:()=>w.m_rf_data_popular,m_schedule_update_views_after_error:z.ScheduleUpdateViewsAfterError,
m_is_still_actual:ad("popular-list-view")})),Y.set("recent-view",x({m_view_id:"recent-view",m_data_items_list:T,m_subfolders:!0,
m_get_data:()=>w.m_rf_data_recent,m_schedule_update_views_after_error:z.ScheduleUpdateViewsAfterError,
m_is_still_actual:ad("recent-view")})),Y.set("recent-list-view",x({m_view_id:"recent-list-view",m_data_items_list:U,
m_subfolders:!0,m_get_data:()=>w.m_rf_data_recent,m_schedule_update_views_after_error:z.ScheduleUpdateViewsAfterError,
m_is_still_actual:ad("recent-list-view")})),Y.set("one-folder-view",x({m_view_id:"one-folder-view",m_data_items_list:T,
m_subfolders:!0,m_get_data:a=>w.AllItemsPerFolderData(a),m_get_folder_items_count:B.GetItemsCount,
m_schedule_update_views_after_error:z.ScheduleUpdateViewsAfterError,m_is_still_actual:ad("one-folder-view")})),
Y.set("one-folder-list-view",x({m_view_id:"one-folder-list-view",m_data_items_list:U,m_subfolders:!1,
m_get_data:a=>w.AllItemsPerFolderData(a),m_get_folder_items_count:B.GetItemsCount,
m_schedule_update_views_after_error:z.ScheduleUpdateViewsAfterError,m_is_still_actual:ad("one-folder-list-view")})),
Y.set("authenticator-view",x({m_view_id:"authenticator-view",m_data_items_list:U,m_subfolders:!0,
m_get_data:()=>a.m_rf_data_totp,m_schedule_update_views_after_error:z.ScheduleUpdateViewsAfterError,
m_is_still_actual:ad("authenticator-view")})),Y.set("sharing-center-view",function(a){
const b=a.view_id,c=a.data_collector,d=a.showDataItemsSection,e=a.shared_folders_data_items_list,f=a.shared_files_data_items_list,g=a.groups_data_items_list,h=(0,
r.y8)();let i,j=h.GetNext(),k="sharing-center-all-shared",l=[],m=[],n=[];const o={UpdateView:p,
GetAllShownItems:()=>l.concat(m,n)};return o;function p(a){i=a.data_item_appearence_rules||i,k=a.sort_order||k
;const o=j=h.GetNext();l=[],m=[],n=[];const p=b+"--shared-folders--"+k,q=b+"--groups--"+k,r=b+"--shared-files--"+k
;return void c.UpdateData(s,null).then((()=>{t(),d("data-items-section-shared-files",l.length>0)})).catch((a=>{(0,u.r5)(a,u.kd),
o===j&&t()}));async function s(b,c,h,j){const o=""===b;let s=!1;for(let a=0;a<c.length;a++){const b=c[a]
;(o&&b.sharedFolder||b.sharedFile)&&(await y(b,k)&&(b.sharedFile?(l.push(b),
s=!0):o&&(b.sharedGroup?m.push(b):b.sharedFolder&&n.push(b))))}o&&(v(p,"data-items-section-shared-folders",e,n),
v(q,"data-items-section-groups",g,m),f.StartUpdate({m_view_id:r,m_data_item_appearence_rules:i})),
s&&(d("data-items-section-shared-files",l.length>0),f.UpdateItems({m_view_id:r,m_items:l,
m_preserve_scroll_position:a.preserve_scroll_position}))}function t(){f.FinishUpdate({m_view_id:r,
m_total_shown_items_number:l.length+m.length+n.length})}function v(b,c,e,f){d(c,f.length>0),0!==f.length&&(e.StartUpdate({
m_view_id:b,m_data_item_appearence_rules:i}),e.UpdateItems({m_view_id:b,m_items:f,
m_preserve_scroll_position:a.preserve_scroll_position}),e.FinishUpdate({m_view_id:b,m_not_final:!0}))}}}({
view_id:"sharing-center-view",data_collector:(0,d.nj)("sharing-center",ad("sharing-center-view")),showDataItemsSection:af,
shared_folders_data_items_list:V,shared_files_data_items_list:X,groups_data_items_list:W})),
Y.set("sharing-center-list-view",function(a){
const b=a.localization,c=b.LocalizeString,d=a.view_id,e=a.data_items_list,f=a.data_collector,g=a.showDataItemsSection,h=(0,
r.y8)();let i=h.GetNext(),j="sharing-center-all-shared",k=[],l=[],m=[];const n={UpdateView:o,GetAllShownItems:()=>k.concat(l,m)}
;return n;function o(a){j=a.sort_order||j;const b=i=h.GetNext(),n=d+j;let o=[];return k=[],l=[],m=[],
void f.UpdateData(p,null).then((()=>{q(),g("data-items-section-main-list-view",o.length>0)})).catch((a=>{(0,u.r5)(a,u.kd),
b===i&&(q(),g("data-items-section-main-list-view",o.length>0))}));async function p(b,d,f,g){const h=""===b;let i=!1
;for(let a=0;a<d.length;a++){const b=d[a]
;(h&&b.sharedFolder||b.sharedFile)&&(await y(b,j)&&(h?(b.sharedGroup?l.push(b):b.sharedFolder?m.push(b):b.sharedFile&&k.push(b),
i=!0):b.sharedFile&&(k.length>0?o.push(b):(k.push(b),r("sharing-section-files",c("StartPage_Sharing_SectionFiles"),k)),i=!0)))}
h&&(e.StartUpdate({m_view_id:n,m_data_item_appearence_rules:{}
}),r("sharing-section-folders",c("StartPage_Sharing_SectionFolders"),m),
r("sharing-section-groups",c("StartPage_Sharing_SectionGroups"),l),
r("sharing-section-files",c("StartPage_Sharing_SectionFiles"),k)),i&&e.UpdateItems({m_view_id:n,m_items:o,
m_preserve_scroll_position:a.preserve_scroll_position})}function q(){e.FinishUpdate({m_view_id:n})}function r(a,b,c){
c.length>0&&(o.push({type:"section-title",path:"section-title-"+a,title:b}),o=o.concat(c))}}}({
view_id:"sharing-center-list-view",data_items_list:U,
data_collector:(0,d.nj)("sharing-center-list",ad("sharing-center-list-view")),showDataItemsSection:af,localization:c})),(0,
i.YC)(F.viewStyleLarge,e("StartPage_ViewStyle_Grid")),(0,i.YC)(F.viewStyleCompact,e("StartPage_ViewStyle_Compact")),(0,
i.YC)(F.viewStyleList,e("StartPage_ViewStyle_List")),(0,i.$9)(F.authenticatorTitle,e("StartPage_Category_Authenticator"))
;const Z=F.header;function aa(){window.innerWidth>650?(Z.classList.remove("rf-view-style-popup-shown"),(0,
p.SE)(F.viewStyleSelector)):(0,p.l5)(F.viewStyleSelector)}window.addEventListener("resize",aa),aa(),
F.viewStyleSelector.addEventListener("click",(()=>{
Z.classList.contains("rf-view-style-popup-shown")?Z.classList.remove("rf-view-style-popup-shown"):Z.classList.add("rf-view-style-popup-shown")
})),F.viewStyleLarge.addEventListener("click",(()=>{const a=O;Z.classList.remove("rf-view-style-popup-shown"),
ai("rf-view-large",!0),"rf-view-large"!==a&&ab(!0)})),F.viewStyleList.addEventListener("click",(()=>{const a=O
;Z.classList.remove("rf-view-style-popup-shown"),ai("rf-view-list",!0),"rf-view-list"!==a&&ab(!0)})),
F.viewStyleCompact.addEventListener("click",(()=>{const a=O;Z.classList.remove("rf-view-style-popup-shown"),
ai("rf-view-condensed",!0),"rf-view-condensed"!==a&&ab(!0)})),function(){const a=10,b=ae("data-items-section-main").items
;if(b.classList.contains("rf-sortable"))return;let c,d,e,f,h,i,l,m,n=null,p=null,q=[],s=5,t=!1
;return b.classList.add("rf-sortable"),void b.addEventListener("mousedown",(function(a){if(D())return;if(A(),1!==a.which)return
;let e=a.target;for(;e.parentElement&&e.parentElement!==b;)e=e.parentElement;if(n=e&&C(e)?e:null,!n)return;c=a.clientX,
d=a.clientY,document.addEventListener("mousemove",u),document.addEventListener("mouseup",x)}));function u(g){
D()||n&&1===g.which&&(!t&&Math.abs(g.clientX-c)<a&&Math.abs(g.clientY-d)<a||(t||function(a){if(!n)return;t=!0,
document.addEventListener("keydown",y),b.classList.add("rf-dragging-in-process")
;const c=window.getComputedStyle(n),d=n.getBoundingClientRect();h=d.width+parseInt(c.marginLeft)+ +parseInt(c.marginRight),
i=d.height+parseInt(c.marginTop)+ +parseInt(c.marginBottom),s=Math.max(1,Math.floor(b.clientWidth/h));const g=(0,j.VC)(n)
;e=Math.max(3,a.clientX-g.left),f=Math.max(3,a.clientY-g.top),n.style.position="absolute",n.style.zIndex="1000",
q=Array.prototype.slice.call(b.children).filter((a=>C(a))),p=v("li",{className:"rf-sortable-paceholder "+n.className,style:{
visibility:"hidden"}});for(let e=0;e<q.length;++e)if(q[e]===n){m=l=e,b.insertBefore(p,n);break}}(g),function(a){if(!t||!n)return
;const c=(0,j.VC)(b),d=a.clientX-c.left,g=a.clientY-c.top;n.style.left=(0,o.Md)(d-e),n.style.top=(0,o.Md)(g-f)
;const k=Math.max(0,Math.floor(g/i)),m=Math.min(Math.max(Math.floor(d/h),0),s-1),p=Math.min(k*s+m,q.length-1);p!==l&&(B(l,p),
l=p);const u=(0,r.TT)((0,j.Yw)(b,".rf-data"));if(u.offsetHeight<u.scrollHeight||u.offsetWidth<u.scrollWidth){const b=(0,
j.VC)(u),c=a.clientX-b.left,d=a.clientY-b.top;c<14&&(u.scrollLeft-=15),c>u.offsetWidth-24&&(u.scrollLeft+=15),
d<14&&(u.scrollTop-=15),d>u.offsetHeight-24&&(u.scrollTop+=15)}}(g)))}function x(){D()||(A(),l!==m&&function(){if(!k)return
;if("category-pinned"!==z.GetCategory())return;const a=[],c=b.querySelectorAll(".rf-item");for(let b=0;b<c.length;++b){
const d=c[b];if(!C(d))continue;const e=(0,g.Kx)(d);e&&e.path&&(a[b]={path:e.path,type:e.type})}
w.m_rf_api.usageInfo.SetUsageInfoList(0,1,a,null).then((()=>{})).catch((a=>{}))}())}function y(a){
a.which!==j.O5.ESCAPE&&a.keyCode!==j.O5.ESCAPE||(m!==l&&B(l,m),A())}function A(){n&&(n.style.position="",n.style.zIndex="",
n.style.left="",n.style.top="",n=null),p&&(p.remove(),p=null),t=!1,b.classList.remove("rf-dragging-in-process"),
document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",x),document.removeEventListener("keydown",y)}
function B(a,c){if(!n||0===q.length)return;const d=q[q.length-1];q.splice(a,1),q.splice(c,0,n),
c>=q.length-1?null!==d.nextElementSibling?b.insertBefore(n,d.nextElementSibling):b.appendChild(n):b.insertBefore(n,q[c+1]),
p&&b.insertBefore(p,n)}function C(a){return a.classList.contains("rf-item")&&(0,
j.Sd)(a)&&!a.classList.contains("rf-add-new-item")}function D(){
return!b.classList.contains("rf-sortable")||b.classList.contains("rf-sortable-disabled")}}(),function(){const a=v("div",{
className:"selector-item sort-order-popular",onclick:()=>z.OnSelectCategoryOrder("sort-order-popular")},v("div",{
className:"select-title"},(0,p.LX)(e("StartPage_SortOrder_Popular"),"")));F.orderSelectorSortPopular=a,
F.orderSelectorSort.appendChild(a);const b=v("div",{className:"selector-item sort-order-recent",
onclick:()=>z.OnSelectCategoryOrder("sort-order-recent")},v("div",{className:"select-title"},(0,
p.LX)(e("StartPage_SortOrder_Recent"),"")));F.orderSelectorSortRecent=b,F.orderSelectorSort.appendChild(b);const c=v("div",{
className:"selector-item sort-order-alphabet",onclick:()=>z.OnSelectCategoryOrder("sort-order-alphabet")},v("div",{
className:"select-title"},(0,p.LX)(e("StartPage_SortOrder_Alphabetical"),"")));F.orderSelectorSortAlphabet=c,
F.orderSelectorSort.appendChild(c);const d=v("div",{className:"selector-item sharing-center-all-shared",
onclick:()=>z.OnSelectCategoryOrder("sharing-center-all-shared")},v("div",{className:"select-title"},(0,
p.LX)(e("StartPage_Sharing_AllShared"),"")));F.orderSelectorSharingCenterAll=d,F.orderSelectorSharingCenter.appendChild(d)
;const f=v("div",{className:"selector-item sharing-center-shared-with-me",
onclick:()=>z.OnSelectCategoryOrder("sharing-center-shared-with-me")},v("div",{className:"select-title"},(0,
p.LX)(e("StartPage_Sharing_SharedWithMe"),"")));F.orderSelectorSharingCenterWithMe=f,F.orderSelectorSharingCenter.appendChild(f)
;const g=v("div",{className:"selector-item sharing-center-shared-by-me",
onclick:()=>z.OnSelectCategoryOrder("sharing-center-shared-by-me")},v("div",{className:"select-title"},(0,
p.LX)(e("StartPage_Sharing_SaredByMe"),"")));F.orderSelectorSharingCenterByMe=g,F.orderSelectorSharingCenter.appendChild(g)}()
;return{Activate:function(){if(k)return;k=!0,(0,p.l5)(E.files),(0,p.l5)(F.main),
"stand-alone"===a.page_status.extensionMode&&(H.Cancel(),I.Cancel(),J.Cancel(),(0,s.fI)(J.Execute({action:ao},null)),
null===(b=a.m_rf_api.service.onSyncSucceeded)||void 0===b||b.Add(am));var b},Deactivate:function(){if(!k)return;(0,
p.SE)(F.main),
k=!1,"stand-alone"===a.page_status.extensionMode&&(null===(b=a.m_rf_api.service.onSyncSucceeded)||void 0===b||b.Remove(am),
H.Cancel(),I.Cancel(),J.Cancel(),N=[],M=[]);var b},UpdateView:ab,Invalidate:()=>{q=!1},IsStillActual:ac,GetIsStillActual:ad,
GetViewStyle:()=>O,SelectViewStyle:ai,SetDataItemFilter:function(a){S=a,ab(!1)},GetAllShownItems:()=>""!==P&&Y.get(P)?(0,
r.TT)(Y.get(P)).GetAllShownItems():[],ScheduleSelectItemAfterUpdate:a=>{L=a}};function ab(b){if(b&&(q=!1),
k&&"category-folders"===z.GetCategory()||(Q=""),!k)return void(R="");if(z.IsEditorShown())return
;if(z.IsSearchResultShown())return;(0,s.fI)(w.m_rf_new_menu.UpdateNewItemButton());if(function(a){
const b=ae("data-items-section-main").items
;b&&b.classList.contains("rf-sortable")&&(a?b.classList.remove("rf-sortable-disabled"):b.classList.add("rf-sortable-disabled"))
}("category-pinned"===z.GetCategory()),q)return void function(){const a=Y.get(P);if(!a)return;const b=z.GetCategory();let c,d=!1
;"category-folders"===b&&(c=z.GetFolder(),"item-type-filter-all"!==z.GetItemTypeFilter()&&(d=!0));const e=al();a.UpdateView({
folder_path:c,sort_order:z.GetSortOrder(),show_only_folders_with_items:d,data_items_filter:aj(b),preserve_scroll_position:e===R,
select_item:L}),L=void 0,R=e}();q=!0;const c=O,d=z.GetCategory(),e=z.GetSortOrder(),f=ae("data-items-section-main").items
;"category-pinned"===d?f.classList.add("rf-items-fixed-num-per-line"):f.classList.remove("rf-items-fixed-num-per-line"),
"category-sharing-center"===d?((0,p.SE)(F.authenticatorTitle),(0,p.SE)(F.orderSelectorSort),(0,p.l5)(F.viewStylePopup),(0,
p.l5)(F.orderSelectorSharingCenter),af("data-items-section-main",!1)):"category-authenticator"===d?((0,
p.SE)(F.orderSelectorSort),(0,p.SE)(F.orderSelectorSharingCenter),(0,p.SE)(F.viewStylePopup),(0,
p.l5)(F.authenticatorTitle)):((0,p.l5)(F.viewStylePopup),(0,p.l5)(F.orderSelectorSort),(0,p.SE)(F.authenticatorTitle),(0,
p.SE)(F.orderSelectorSharingCenter),af("data-items-section-main",!0),af("data-items-section-shared-folders",!1),
af("data-items-section-groups",!1),
af("data-items-section-shared-files",!1)),"rf-view-list"===c?(af("data-items-section-main-list-view",!0),
af("data-items-section-main",!1),af("data-items-section-shared-folders",!1),af("data-items-section-groups",!1),
af("data-items-section-shared-files",!1)):af("data-items-section-main-list-view",!1);const g=F.data;switch(c){
case"rf-view-condensed":g.classList.remove("rf-view-large"),g.classList.remove("rf-view-list"),
g.classList.add("rf-view-condensed");break;case"rf-view-list":g.classList.remove("rf-view-large"),
g.classList.remove("rf-view-condensed"),g.classList.add("rf-view-list");break;case"rf-view-large":
g.classList.remove("rf-view-list"),g.classList.remove("rf-view-condensed"),g.classList.add("rf-view-large")}const h=P
;let i,j,l="",m=!1;switch(d){case"category-pinned":j=[1,2,3,4,5,6,7],l="pinned-view";break;case"category-folders":
switch(j=[8,1,2,3,4,5,6,7],z.GetItemTypeFilter()){case"item-type-filter-logins":j=[1,3,4];break
;case"item-type-filter-bookmarks":j=[2];break;case"item-type-filter-logins-and-bookmarks":j=[1,3,4,2];break
;case"item-type-filter-safenotes":j=[7];break;case"item-type-filter-identities":j=[5]}switch(i=z.GetFolder(),e){
case"sort-order-alphabet":-1===j.indexOf(8)&&j.push(8),"item-type-filter-all"!==z.GetItemTypeFilter()&&(m=!0),
l="rf-view-list"===c?"one-folder-list-view":"one-folder-view";break;case"sort-order-popular":
l="rf-view-list"===c?"popular-list-view":"popular-view";break;case"sort-order-recent":
l="rf-view-list"===c?"recent-list-view":"recent-view";break;default:l="popular-view"}break;case"category-authenticator":j=[1],
l="authenticator-view";break;case"category-sharing-center":
j=[8,1,2,3,4,5,6,7],l="rf-view-list"===c?"sharing-center-list-view":"sharing-center-view";break;default:j=[1,2,3,4,5,6,7],
l="popular-view"}const n=Y.get(l);if(!n)return
;P=l,h!==l&&("sharing-center-view"!==h&&"sharing-center-list-view"!==h&&""!==h&&"stand-alone"===a.page_status.extensionMode&&(N=[],
M=[],J.Cancel(),H.Cancel(),I.Cancel(),(0,s.fI)(J.Execute({action:ao},null))),T.RemoveAllElements(),V.RemoveAllElements(),
W.RemoveAllElements(),X.RemoveAllElements());const o=al();n.UpdateView({folder_path:i,item_types_to_show:j,
data_item_appearence_rules:ag(c,d),sort_order:z.GetSortOrder(),show_only_folders_with_items:m,data_items_filter:aj(d),
preserve_scroll_position:R===o,select_item:L}),L=void 0,R=o}function ac(a){if(!k)return!1;const b=a&&a.imageSize;if(void 0!==b){
if(b!==ah(O))return!1}return!0}function ad(a){const b=a||P;return function(a){return ac(a)&&P===b}}function ae(a){
const b=F.itemsSections.get(a);if(b)return b;let c,d;switch(a){case"data-items-section-shared-folders":c=v("div",{
className:"rf-items-section rf-items-section-shared-folders hidden"},v("div",{className:"rf-section-header"},v("div",{
className:"rf-section-title"},(0,p.LX)(e("StartPage_Sharing_SectionFolders"),""))),d=v("div",{className:"rf-items"}));break
;case"data-items-section-groups":c=v("div",{className:"rf-items-section rf-items-section-groups hidden"},v("div",{
className:"rf-section-header"},v("div",{className:"rf-section-title"
},(0,p.LX)(e("StartPage_Sharing_SectionGroups"),""))),d=v("div",{className:"rf-items"}));break
;case"data-items-section-shared-files":c=v("div",{className:"rf-items-section rf-items-section-shared-files hidden"},v("div",{
className:"rf-section-header"},v("div",{className:"rf-section-title"
},(0,p.LX)(e("StartPage_Sharing_SectionFiles"),""))),d=v("div",{className:"rf-items"}));break
;case"data-items-section-main-list-view":c=v("div",{className:"rf-items-section rf-items-section-main-list-view hidden"
},d=v("div",{className:"rf-items"}));break;default:c=v("div",{className:"rf-items-section rf-items-section-main"},d=v("div",{
className:"rf-items"}))}F.data.appendChild(c);const f={section:c,items:d};return F.itemsSections.set(a,f),f}function af(a,b){
const c=ae(a).section;b?(0,p.l5)(c):(0,p.SE)(c)}function ag(a,b){let c,d;"rf-view-large"===a?(c=229,
d=150):"rf-view-condensed"===a?(c=229,d=90):(c=230,d=150);const e="category-pinned"===b&&5;return{image_size:ah(a),
default_item_outer_width:c,default_item_outer_height:d,fixed_items_per_line:e}}function ah(a){let b="img16";switch(a){
case"rf-view-large":b="imgLogo";break;case"rf-view-list":b="img32";break;case"rf-view-condensed":b="img48"}return b}
function ai(a,b){const c=F.viewStyleLarge,d=F.viewStyleCompact,f=F.viewStyleList,g=F.viewStyleSelector
;switch(g.classList.remove("rf-view-style-large","rf-view-style-condensed","rf-view-style-list"),a){case"rf-view-condensed":
d.classList.add("active"),c.classList.remove("active"),f.classList.remove("active"),g.classList.add("rf-view-style-condensed"),
(0,i.YC)(g,e("StartPage_ViewStyle_Compact")),O="rf-view-condensed";break;case"rf-view-list":f.classList.add("active"),
d.classList.remove("active"),c.classList.remove("active"),g.classList.add("rf-view-style-list"),O="rf-view-list",(0,
i.YC)(g,e("StartPage_ViewStyle_List"));break;default:c.classList.add("active"),d.classList.remove("active"),
f.classList.remove("active"),g.classList.add("rf-view-style-large"),O="rf-view-large",(0,i.YC)(g,e("StartPage_ViewStyle_Grid"))}
if(b){const b="category-pinned"===z.GetCategory()?"StartPage.PinnedViewStyle":"StartPage.NonPinnedViewStyle";(0,
s.fI)(D.SetValue(b,a))}}function aj(a){return"category-pinned"===a?null:S}function ak(a){
0===a&&"category-folders"===z.GetCategory()&&""!==z.GetFolder()&&-1!==["sort-order-popular","sort-order-recent"].indexOf(z.GetLastSortOrder("category-folders"))&&Q!==z.GetFolder()&&z.SetState("state-change-event-folder-sort-order-autochanged",{
category:"category-folders",order:"sort-order-alphabet"}),"category-folders"===z.GetCategory()&&(Q=z.GetFolder())}function al(){
let a=z.GetCategory()+O;return"category-pinned"!==z.GetCategory()&&(a+=z.GetSortOrder()),
"category-folders"===z.GetCategory()&&(a+=z.GetItemTypeFilter()+z.GetFolder()),a}function am(a){an(a.pendingItems)}
function an(a){const b=200;if("category-sharing-center"!==z.GetCategory())return;let c=!1,d=!1;if((0,r.XM)(M,a.accounts)){
if(!(0,r.XM)(N,a.files)){if(K.IsExecuting())return void(N=[]);if(I.IsExecuting())return;d=!0,N=a.files}}else{
if(K.IsExecuting())return void(M=[]);if(c=!0,M=a.accounts,H.IsExecuting()){if(!(a.accounts.length>0))return;N=[],H.Cancel()}}
if(c&&a.accounts.length>0){
const a=(0,h.BG)((0,l.p)((0,h.IW)("rf-new-item-dialog rf-pending-dialog",e("StartPage_Category_SharingCenter"),null),(a=>function(a,c,d,f){
const g={Create:j,OnAfterShow:k,OnBeforeHide:l,Focus:n,Dispose:o};return g;async function j(g,j){
const k=await e("SharedFoldersConfirmation_Title"),l=new Set([]),n=[];for(const b of a){const a=b.name||"",c=(0,
m.em)(a),d=`${b.senderName||""} <${b.senderEmail}>`;let e;const f=v("div",{className:"item-row"},v("div",{className:"checkbox"
},v("label",{className:"flex-cell"},v("div",{className:"icon-section folder-icon"}),v("div",{className:"text-section"},v("div",{
className:"normal-text item-name-text"},c),v("div",{className:"hint-text sender-name-text"},d)),v("div",{className:"item-check"
},e=v("input",{type:"checkbox",checked:!0,onchange:()=>{e.checked?l.add(b):l.delete(b),0===l.size?((0,h.DG)(o),(0,h.DG)(q)):((0,
h.aV)(o),(0,h.aV)(q))}}),v("div",{className:"checkbox-check"})))));l.add(b),n.push(f)}const o=(0,h.n7)({btnClass:"rf-ok-button",
btnDefault:!0,btnCaption:e("EmergencyAccess_Accept_Invitation_Text"),btnAction:()=>{(0,p.D$)(w,(()=>y()),b,(()=>u.Show()))}
}),q=(0,h.n7)({btnClass:"rf-ok-button",btnCaption:e("SharedFolderSettings_RejectSharedFolder"),btnAction:()=>{(0,
p.D$)(x,(()=>y()),b,(()=>u.Show()))}}),r=(0,h.n7)({btnClass:"rf-ok-button",btnCaption:e("Cmd_Skip_Flat"),btnAction:()=>{g()}
}),s=(0,h.lD)([o,q,r]),t=v("div",null,v("div",{className:"rf-body"},v("div",{className:"invitation-text"},k),v("div",{
className:"items-container"},n)),s),u=(0,i.yd)(t);return t;async function w(){try{await c(Array.from(l),f),g()}catch(a){j(a)}}
async function x(){try{await d(Array.from(l),f),g()}catch(a){j(a)}}function y(){return(0,h.DG)(o),(0,h.DG)(q),(0,h.DG)(r),()=>{
(0,h.aV)(o),(0,h.aV)(q),(0,h.aV)(r)}}}function k(){}function l(){}function n(){}function o(){}}(M,aq,ap,a))))
;I.Start((async b=>{await a.Execute(b),(0,s.fI)(J.Execute({action:ao},b))}))}else if(d&&a.files.length>0){const a=(0,h.BG)((0,
l.p)((0,h.IW)("rf-new-item-dialog rf-pending-dialog",e("StartPage_Category_SharingCenter"),null),(a=>function(a,c,d,f){const g={
Create:j,OnAfterShow:k,OnBeforeHide:l,Focus:o,Dispose:q};return g;async function j(g,j){
const k=await e("SharedFilesConfirmation_Title"),l=new Set([]),o=[];for(const b of a){const a=b.name||"",c=(0,m.em)(a);let d=""
;b.grantorName&&b.grantorEmail&&b.grantorName!==b.grantorEmail?d=`${b.grantorName} <${b.grantorEmail}>`:b.grantorName?d=b.grantorName:b.grantorEmail&&(d=b.grantorEmail)
;const e=(0,m.hF)(a);let f;const g=v("div",{className:"item-row"},v("div",{className:"checkbox"},v("label",{
className:"flex-cell"},v("div",{className:(0,t.bt)("icon-section"," ",(0,n._m)(e))}),v("div",{className:"text-section"
},v("div",{className:"normal-text item-name-text"},c),v("div",{className:"hint-text sender-name-text"},d)),v("div",{
className:"item-check"},f=v("input",{type:"checkbox",checked:!0,onchange:()=>{f.checked?l.add(b):l.delete(b),0===l.size?((0,
h.DG)(q),(0,h.DG)(r)):((0,h.aV)(q),(0,h.aV)(r))}}),v("div",{className:"checkbox-check"})))));o.push(g),l.add(b)}const q=(0,
h.n7)({btnClass:"rf-ok-button",btnDefault:!0,btnCaption:e("EmergencyAccess_Accept_Invitation_Text"),btnAction:()=>{(0,
p.D$)(y,(()=>A()),b,(()=>x.Show()))}}),r=(0,h.n7)({btnClass:"rf-ok-button",
btnCaption:e("SharedFolderSettings_RejectSharedFolder"),btnAction:()=>{(0,p.D$)(z,(()=>A()),b,(()=>x.Show()))}}),s=(0,h.n7)({
btnClass:"rf-ok-button",btnCaption:e("Cmd_Skip_Flat"),btnAction:()=>{g()}}),u=(0,h.lD)([q,r,s]),w=v("div",null,v("div",{
className:"rf-body"},v("div",{className:"invitation-text"},k),v("div",{className:"items-container"},o)),u),x=(0,i.yd)(w)
;return w;async function y(){try{await c(Array.from(l),f),g()}catch(a){j(a)}}async function z(){try{await d(Array.from(l),f),g()
}catch(a){j(a)}}function A(){return(0,h.DG)(q),(0,h.DG)(r),(0,h.DG)(s),()=>{(0,h.aV)(q),(0,h.aV)(r),(0,h.aV)(s)}}}function k(){}
function l(){}function o(){}function q(){}}(N,as,ar,a))));H.Start((async b=>{await a.Execute(b),(0,s.fI)(J.Execute({action:ao
},b))}))}else I.IsExecuting()&&0===a.accounts.length&&(I.Cancel(),(0,s.fI)(J.Execute({action:ao},null))),
H.IsExecuting()&&0===a.files.length&&H.Cancel()}async function ao(){const b=await a.m_rf_api.service.GetSyncPendingItems(null)
;b&&an(b)}async function ap(a,b){await K.Execute({action:async()=>{
await Promise.all(a.map((a=>G.RejectSharedAccount(a.accountId,b))))}},b)}async function aq(a,b){await K.Execute({
action:async()=>{await Promise.all(a.map((a=>G.AcceptSharedAccount(a.accountId,b))))}},b)}async function ar(a,b){
await K.Execute({action:async()=>{await Promise.all(a.map((a=>G.RejectSharedFile(a,b))))}},b)}async function as(a,b){
await K.Execute({action:async()=>{await Promise.all(a.map((a=>G.AcceptSharedFile(a,b))))}},b)}}function x(a){
const b="single-data-view",c=a.m_view_id,d=a.m_data_items_list,e=a.m_get_data,f=a.m_get_folder_items_count||null,g=a.m_schedule_update_views_after_error,h=a.m_is_still_actual,i=a.m_subfolders
;let j,l,n,o,p=new Map,r=null,t=[1,2,3,4,5,6,7],v=null;const w=(0,s.tG)(),x={UpdateView:function(a){let i=!1,m="",q=!1
;void 0!==a.folder_path&&(m=a.folder_path,q=!0);m===j&&q===l||(j=m.slice(0),l=q,i=!0);t=a.item_types_to_show||t,
n=a.data_item_appearence_rules||n,v!==(a.data_items_filter||null)&&(v=a.data_items_filter||null,i=!0);const s=new Set(t);o&&(0,
k.cD)(o,s)||(i=!0);return o=s,void w.Start((async k=>{const l=c+j;d.StartUpdate({m_view_id:l,m_data_item_appearence_rules:n})
;try{await async function(g,i,j){const k=e(m),l=!k.IsUptodate();if(l&&(await k.Update(b,m,j),!h()))throw u.JS
;const n=k.GetData()||[],o=g||l||null!==r&&r.length!==n.length||n.length>0&&0===p.size;r=n
;const q=!!v,s={},w=[],x=a.show_only_folders_with_items&&null!==f;let A;if(x||q){A=[];for(const a of n)if(8===a.type){if(f){
const b=t.filter((a=>8!==a)),d=await f(b,a.path,"get-folder-items-"+c,j);if(!h())throw u.JS;if(q||(s[a.path]=d),d<=0)continue}
A.push(a),q&&w.push(a)}else A.push(a)}else A=n;const B=w.length>0;if(await async function(b,c,e,f,g,h){if(b){const a=new Map,b=p
;for(let d=0;d<c.length;d++){const e=c[d];let g;g=8!==e.type?await y(e,h):!!f||b.has(e.path),g&&a.set(e.path,e)}p=a}
d.UpdateItems({m_view_id:g,m_items:c.filter((a=>p.has(a.path))),m_items_in_folders_count:e,
m_preserve_scroll_position:a.preserve_scroll_position})}(o,A,s,!B,i,j),B){for(const a of w){const c=await z(b,a,j)
;if(!h())throw u.JS;c?p.has(a.path)||p.set(a.path,a):p.delete(a.path)}d.UpdateItems({m_view_id:i,
m_items:A.filter((a=>p.has(a.path))),m_items_in_folders_count:s,m_preserve_scroll_position:a.preserve_scroll_position})}}(i,l,k)
}catch(o){if((0,u.r5)(o,u.ut))return void g();if((0,u.r5)(o,u.kd))return;throw o}d.FinishUpdate({m_view_id:l,
m_select_item:a.select_item})}))},GetAllShownItems:()=>Array.from(p.values())};return x;async function y(a,c){
if(!o.has(a.type))return!1;if(8===a.type)return!0;if(!l)return z(b,a,c);if(i)return(0,m.QC)(j,a.path)&&z(b,a,c);return(0,
q.fA)(a.path)===j&&z(b,a,c)}async function z(a,b,c){return!v||v.DoesItemPathMatchFilter(a,b,c)}}async function y(a,b){
if("sharing-center-all-shared"===b)return!0;const c=await(0,e.d1)(a),d=0===c||4===c||8===c
;return"sharing-center-shared-by-me"===b?d:"sharing-center-shared-with-me"!==b||!d}},26227:function(a,b,c){"use strict";c.d(b,{
Q:function(){return w},g:function(){return v}})
;var d=c(3342),e=c(41107),f=c(11834),g=c(80794),h=c(38221),i=c(65852),j=c(4234),k=c(98266),l=c(31173),m=c(63956),n=c(88262),o=c(13113),p=c(32105),q=c(4153),r=c(78440),s=c(69893),t=(c(13117),
c(91764)._);const u=200;function v(a,b){const c=a,p=c.rf_api,v=c.rf_manager,w=(0,
q.TT)(p.emergencyAccess),x=b,y=c.localization,z=y.LocalizeString;let A=!1,B=[],C=[];const D=[],E=(0,r.tG)(),F=(0,r.tG)(),G=(0,
i.ZP)(x.progress),H={0:()=>z("EmergencyAccess_TimeoutImmediately_Text"),43200:()=>z("EmergencyAccess_Timeout12hours_Text"),
86400:()=>z("EmergencyAccess_Timeout24hours_Text"),172800:()=>z("EmergencyAccess_Timeout2days_Text"),
259200:()=>z("EmergencyAccess_Timeout3days_Text"),604800:()=>z("EmergencyAccess_Timeout7days_Text"),
1209600:()=>z("EmergencyAccess_Timeout14days_Text"),2592e3:()=>z("EmergencyAccess_Timeout30days_Text")},I=x.newButton
;I.addEventListener("click",(()=>(0,r.fI)(async function(){const a=(0,f.BG)((0,k.p)((0,
f.IW)("rf-ea-dialog rf-ea-new-contact-dialog",z("EmergencyAccess_AddContact_Title2"),null),(()=>function(a){
let b,c,d,g,h,i,j=!1,k="";const l=80,p={Create:q,OnAfterShow:v,OnBeforeHide:w,Focus:x,Dispose:y};return p;async function q(a,j){
const k=t("div",{className:"rf-body"},t("div",{className:"rf-ea-description"
},await z("EmergencyAccess_ContactsTabDescription_Text")),t("div",{className:"rf-title"
},await z("EmergencyAccess_AddContact_Email_Caption2")),b=t("input",{className:"rf-input rf-email",spellcheck:!1}),c=t("div",{
className:"rf-field-error"}),t("div",{className:"rf-title"
},await z("EmergencyAccess_AddContact_Timeout_Caption2")),d=O(172800,E));g=(0,f.n7)({btnClass:"rf-cancel-btn",
btnCaption:z("StartPage_DialogButton_Cancel"),btnAction:()=>j(s.JS)}),h=(0,f.n7)({btnClass:"rf-ok-button",btnDefault:!0,
btnDisabled:!0,btnCaption:z("StartPage_DialogButton_Ok"),btnAction:()=>B()});const l=(0,f.lD)([g,h]);(0,
e.pr)(b,z("EmergencyAccess_AddContact_Banner")),(0,m.uA)(b,A,!1);const n=t("div",null,k,l);return i=(0,e.yd)(n),n}function v(){
E()}function w(){}function x(){b.focus()}function y(){}function A(){k!==b.value&&(k=b.value,K()),D()}function B(){if(!G())return
;if(!H())return;const a=b.value.trim(),c=parseInt(d.value)||0;(0,m.D$)((()=>C(a,c)),(()=>(K(),L())),u,(()=>i.Show()))}
async function C(b,c){try{await a.OnInvite(b,c),await J(!1,!1),(0,e.Fp)(z("EmergencyAccess_AddContact_Success_Prompt"))
}catch(d){let a="";if((0,n.dW)(d)){a=(d.httpResponse.headers||{})["x-sib-reason"]||""}(0,s.r5)(d,s.m)?await C(b,c):(0,
s.r5)(d,s.Y$)||(0,
s.r5)(d,s.FN)&&"user-not-found"===a?await(0,f.nn)(z("EmergencyAccess_AddContact_NonExistingUser_Message",[b])):(0,
s.r5)(d,s.kd)||await(0,f.nn)(z("EmergencyAccess_AddContact_Error",[b,(0,s.EB)(d)]))}}function D(){F.Start((async a=>{await(0,
r.Gu)(200,a,!1),E()}))}function E(){G()?(0,f.aV)(h):(0,f.DG)(h)}function G(){return!j&&""!==b.value.trim()&&""!==d.value}
function H(){const a=b.value;if(a.length>l)return I(z("EmailMaxLength_Error",[l.toString()])),b.focus(),!1;return!!(0,
o.MA)(a).ok||(I(z("EmailIncorrect_Error")),b.focus(),!1)}function I(a){c.classList.add("shown"),(0,e.$9)(c,a)}function K(){
c.classList.remove("shown"),c.textContent=""}function L(){return j=!0,b.disabled=!0,d.disabled=!0,(0,f.DG)(h),M}function M(){
j=!1,b.disabled=!1,d.disabled=!1,(0,f.aV)(h)}}({OnInvite:async(b,c)=>{await(0,d.en)((async()=>w.InviteEmergencyContact(b,!1,{
timeoutSec:c},null)),p,y),a.Cancel()}}))));await a.Execute(null)}()))),(0,e.YC)(I,z("EmergencyAccess_AddContact_Title2")),
function(){let a;const b=t("div",{className:"selector-item emergency-access-my-contacts",
onclick:()=>v.OnSelectCategoryOrder("emergency-access-my-contacts")},t("div",{className:"select-title"},(0,
m.LX)(z("EmergencyAccess_Contacts_Title"),""),a=t("span",{className:"rf-bandge-count"})));let c;const d=t("div",{
className:"selector-item emergency-access-im-contact-for",onclick:()=>v.OnSelectCategoryOrder("emergency-access-im-contact-for")
},t("div",{className:"select-title"},(0,m.LX)(z("EmergencyAccess_Testators_Title"),""),c=t("span",{className:"rf-bandge-count"
})));x.orderSelectorContacts=b,x.orderSelectorTestators=d,x.orderSelector.appendChild(b),x.orderSelector.appendChild(d),
x.contactsBandge=a,x.testatorsBandge=c}();return{UpdateView:J,UpdatePendingEAEventsCount:K};async function J(a,b){
if(D.forEach((a=>{clearInterval(a)})),a&&A)n();else{G.StartIfNotStarted();try{await(0,d.en)(L,p,y),n()}catch(o){if((0,
s.r5)(o,s.m))return void await J(a,b);(0,s.r5)(o,s.kd)||await(0,f.nn)(z("EmergencyAccess_GetAccounts_Error",[(0,s.EB)(o)]))
}finally{G.ScheduleStop(500)}}function n(){M(!0),M(!1),function(a){const b=a?C:B,n=x.accounts;(0,h.Nt)(n);const A=x.noAccounts
;if(0===b.length)return(0,m.l5)(A),(0,h.Nt)(A),A.appendChild(t("div",{className:"rf-ea-no-accounts-icon"})),
void A.appendChild(t("div",{className:"rf-ea-no-accounts-text"
},(0,m.LX)(z(a?"EmergencyAccess_TestatorsTabDescription_Text":"EmergencyAccess_Help_Hint"),"")));(0,m.SE)(A)
;const E=document.createElement("tr"),F=document.createElement("thead");F.appendChild(E),n.appendChild(F),
E.appendChild(t("td",null,(0,m.LX)(z("EmergencyAccess_Name_Title"),""))),a||E.appendChild(t("td",{
className:"rf-ea-pending-action-mark"}));E.appendChild(t("td",{className:"rf-status"},(0,
m.LX)(z("EmergencyAccess_Access_Status_Title"),""))),E.appendChild(t("td",{className:"rf-timeout"},(0,
m.LX)(z("EmergencyAccess_Timeout_Period_Title"),""))),a&&E.appendChild(t("td",{className:"rf-ea-pending-action-mark"}))
;E.appendChild(t("td",{className:"rf-status"},(0,m.LX)(z("EmergencyAccess_Contact_Status_Title"),""))),E.appendChild(t("td",{
className:"rf-commands"}));const G=t("tbody",null);n.appendChild(G),b.forEach((b=>{G.appendChild(function(a,b){let n="invited"
;1===a.status?n="accepted":2===a.status&&(n="rejected");let x=Promise.resolve("—"),A="n-a"
;a.accessStatus&&1===a.accessStatus?(x=z("EmergencyAccess_AccessRequested_Status"),
A="requested"):a.accessStatus&&2===a.accessStatus&&(x=z("EmergencyAccess_AccessGranted_Status"),A="access-granted")
;const B=b?function(a){const b=(0,e.Kw)();0===a.status?b.AddCommand({cmdCommand:"accept-invitation",
cmdCaption:z("EmergencyAccess_Accept_Invitation_Text"),cmdAction:()=>{return void(0,r.fI)((async()=>{2===await(0,
f.dD)(z("EmergencyAccess_AcceptInvitation_Question",[a.email]),z("StartPage_DialogButton_Yes"),z("StartPage_DialogButton_No"))&&await b()
})());async function b(){try{await(0,d.en)((async()=>w.AcceptEmergencyContactInvitation(a.accountId,null)),p,y),await J(!1,!0),
await K(),(0,e.Fp)(z("EmergencyAccess_AcceptInvitation_Notification"))}catch(o){if((0,s.r5)(o,s.m))return void await b();(0,
s.r5)(o,s.kd)||await(0,f.nn)(z("EmergencyAccess_AcceptInvitation_Error",[a.email,(0,s.EB)(o)]))}}}
}):1!==a.status||a.accessStatus&&(1===a.accessStatus||2===a.accessStatus)?a.accessStatus&&1===a.accessStatus?b.AddCommand({
cmdCommand:"revoke-request",cmdCaption:z("EmergencyAccess_RevokeRequest_Text"),cmdAction:()=>{return void(0,r.fI)((async()=>{
2===await(0,
f.dD)(z("EmergencyAccess_RejectPendingAccessTestator_Question",[a.email]),z("StartPage_DialogButton_Yes"),z("StartPage_DialogButton_No"))&&await b()
})());async function b(){try{await(0,d.en)((async()=>w.RejectEmergencyAccess(a.accountId,null)),p,y),await J(!1,!0),(0,
e.Fp)(z("EmergencyAccess_RejectPendingAccessTestator_Notification"))}catch(o){if((0,s.r5)(o,s.m))return void await b();(0,
s.r5)(o,s.kd)||await(0,f.nn)(z("EmergencyAccess_RejectPendingAccessTestator_Error",[(0,s.EB)(o)]))}}}
}):a.accessStatus&&2===a.accessStatus&&b.AddCommand({cmdCommand:"get-data",cmdCaption:z("EmergencyAccess_GetData_Request_Text"),
cmdAction:()=>(0,r.fI)(async function(a){const b=await n();let d=[];const i=(0,f.BG)((0,k.p)((0,
f.IW)("rf-ea-dialog rf-ea-user-data-dialog",z("EmergencyAccess_Title"),null),(()=>function(a){let b,c,d,i,k;const n=new Map
;let p="",u=null;const w={Create:x,OnAfterShow:y,OnBeforeHide:A,Focus:B,Dispose:C};return w;async function x(c){
return b=await D(),(0,r.fI)((async()=>{const d=(0,e.p8)(b);d.Show(),await a.OnLoad(c),d.Hide(),E(a.GetDownloadedItemInfos())
})()),b}function y(){M()}function A(){N()}function B(){}function C(){}async function D(){const b=t("div",{className:"rf-body"
},t("div",{className:"rf-ea-description"
},await z("EmergencyAccess_GetData_Help_Text2",[a.GetAccountData().name||a.GetAccountData().email,(0,
j.XE)(a.GetBaseTargetPath(),!0)])),t("div",{className:"rf-ea-search-box"},c=t("input",{className:"rf-ea-search",
placeholder:"Search",spellcheck:!1}),d=t("div",{className:"rf-ea-search-icon",onclick:J})),i=t("div",{className:"rf-ea-files"}))
;k=(0,f.n7)({btnClass:"rf-ea-download-all-button",btnCaption:z("EmergencyAccess_DownloadAll_Text"),btnAction:L});const e=(0,
f.lD)([k]);(0,m.uA)(c,I,!1);return t("div",null,b,e)}function E(a){
0===a.length?k.classList.add("disabled-button"):k.classList.remove("disabled-button"),(0,h.Nt)(i),n.clear(),a.forEach((a=>{
const b=F(a);n.set(a.path,b),i.appendChild(b)}))}function F(b){const c=(0,j.em)(b.path),d=(0,j.hF)(b.path),f=b.item;let h
;const i=t("div",{className:"rf-ea-file"},t("div",{className:"rf-ea-file-title"},t("div",{className:"rf-ea-file-icon "+(0,
e.Av)({path:"",type:d})}),t("div",{className:"rf-ea-file-name"},c)),h=t("div",{className:"rf-ea-file-fields"}));if((0,
r.fI)((async()=>{await a.IsItemExist(b.path)?i.appendChild(H(b)):i.appendChild(G(b))})()),7===d)h.appendChild(t("div",{
className:"rf-ea-file-field"},f.m_note));else if(1===d||3===d||4===d){h.appendChild(t("div",{className:"rf-ea-file-field rf-url"
},f.m_goto_url));f.m_fields.forEach((a=>{let b;if(a.m_name===j.Aq||2===a.m_type){const c=t("span",{className:"rf-password-value"
});c.textContent=(0,g.Ss)(),b=t("div",{className:"rf-ea-file-field rf-password",title:a.m_name},c,t("span",{
className:"rf-password-icon",onclick:b=>{const d=b.currentTarget;d.classList.contains("shown")?(d.classList.remove("shown"),
c.textContent=(0,g.Ss)()):(d.classList.add("shown"),c.textContent=a.m_value||"")}}))}else b=t("div",{
className:"rf-ea-file-field",title:a.m_name},a.m_value);h.appendChild(b)}))}else if(2===d)h.appendChild(t("div",{
className:"rf-ea-file-field rf-url"},f.m_goto_url));else if(5===d||6===d){const a=f.m_groups
;if(a&&a.length&&"Person"===a[0].m_name&&a[0].m_instances&&a[0].m_instances.length){const b=a[0].m_instances[0]
;for(let a=0;a<b.m_fields.length&&a<4;a++)h.appendChild(t("div",{className:"rf-ea-file-field",title:b.m_fields[a].m_name
},b.m_fields[a].m_value))}}return i}function G(a){return t("div",{className:"rf-ea-file-download-btn rf-ea-download",
onclick:()=>(0,r.fI)(K(a))},(0,m.LX)(z("EmergencyAccess_Download"),""))}function H(b){return t("div",{
className:"rf-ea-file-download-btn rf-ea-open",onclick:()=>(0,r.fI)(a.OnOpenEditor(b.path))},(0,
m.LX)(z("EmergencyAccess_Open"),""))}function I(){const b=c.value.trim();if(p===b)return;p=b,
b?d.classList.add("rf-ea-eraser-icon"):d.classList.remove("rf-ea-eraser-icon");const e=[],f=new RegExp(b,"i")
;a.GetDownloadedItemInfos().forEach((a=>{const b=a.path?(0,j.em)(a.path):"";null!==f.exec(b)&&e.push(a)})),E(e)}function J(){
d.classList.contains("rf-ea-eraser-icon")&&(d.classList.remove("rf-ea-eraser-icon"),c.value="",c.focus(),I())}
async function K(b){try{await a.OnDownloadItem(b);const c=n.get(b.path);if(c){const a=(0,
q.TT)(c.querySelector(".rf-ea-file-download-btn")),d=H(b);c.replaceChild(d,a)}}catch(o){await(0,
f.nn)(z("EmergencyAccess_DownloadItem_Error",[(0,s.EB)(o)]))}}function L(){a.GetDownloadedItemInfos().forEach((a=>{
n.get(a.path)&&(0,r.fI)(K(a))}))}function M(){const a=(0,q.TT)(document.querySelector("#v8 .modal-dialog-screen"))
;a.style.zIndex="3";const b=(0,q.TT)(document.querySelector("#v8 .rf-editor"));function c(){const c=parseInt(b.style.left)||0
;a.style.paddingRight=0===c?"":(0,l.Md)(window.innerWidth-c)}u=new MutationObserver(c),u.observe(b,{attributes:!0,
attributeFilter:["style"]}),v.IsInlineEditorShown()&&c()}function N(){const a=(0,
q.TT)(document.querySelector("#v8 .modal-dialog-screen"));a.style.zIndex="",a.style.paddingRight="",null!==u&&u.disconnect()}}({
GetAccountData:()=>a,GetBaseTargetPath:()=>b,GetDownloadedItemInfos:()=>d,OnLoad:async c=>{try{
const c=await w.GetEmergencyContactDataItems(a.accountId,b,null);d=c.items||[]}catch(o){(0,s.r5)(o,s.kd)||await(0,
f.nn)(z("EmergencyAccess_GetData_Error",[a.email,(0,s.EB)(o)])),c()}},IsItemExist:async a=>{const b=p(a);try{
return await c.GetDataItemInfo(b),!0}catch(o){return!1}},OnOpenEditor:async a=>{const b=p(a);try{
const a=await c.GetDataItemInfo(b);c.OnOpenEditor(a,!1,!1,!1)}catch(o){await(0,f.nn)(z("EmergencyAccess_OpenItem_Error",[(0,
j.XE)(b,!1),(0,s.EB)(o)]))}},OnDownloadItem:async a=>{const b=p(a.path);await c.rf_api.data.PutDataItem(b,a.item,null)}}))))
;async function n(){const b=a.name?`${a.name}(${a.email})`:a.email;return`/${(0,
j.KF)(await z("EmergencyAccess_FolderName"),null)||"Emergency Access"}/${b}`}function p(a){return b+a}await i.Execute(null)}(a))
}):b.AddCommand({cmdCommand:"request-access",cmdCaption:z("EmergencyAccess_Request_Access_Text"),cmdAction:()=>{
async function b(){try{await(0,d.en)((async()=>w.RequestEmergencyAccess(a.accountId,null)),p,y),await J(!1,!0),(0,
e.Fp)(z("EmergencyAccess_RequestAccess_Notification"))}catch(o){if((0,s.r5)(o,s.m))return void await b();(0,
s.r5)(o,s.kd)||await(0,f.nn)(z("EmergencyAccess_RequestAccess_Error2",[(0,s.EB)(o)]))}}(0,r.fI)((async()=>{2===await(0,
f.dD)(z("EmergencyAccess_RequestAccess_Question",[a.email]),z("StartPage_DialogButton_Yes"),z("StartPage_DialogButton_No"))&&await b()
})())}});return b.AddCommand({cmdCommand:"reject-invitation",cmdCaption:z("EmergencyAccess_Remove_Me"),cmdAction:()=>{
return void(0,r.fI)((async()=>{const c=a.name?`${a.name} (${a.email})`:a.email;2===await(0,
f.dD)(z("EmergencyAccess_RejectTestator_Question",[c]),z("StartPage_DialogButton_Yes"),z("StartPage_DialogButton_No"))&&await b()
})());async function b(){try{await(0,d.en)((async()=>w.RejectEmergencyContactInvitation(a.accountId,null)),p,y),await J(!1,!0),
await K(),(0,e.Fp)(z("EmergencyAccess_RejectTestator_Notification"))}catch(o){if((0,s.r5)(o,s.m))return void await b();(0,
s.r5)(o,s.kd)||await(0,f.nn)(z("EmergencyAccess_RejectTestator_Error",[(0,s.EB)(o)]))}}}}),b}(a):function(a){const b=(0,e.Kw)()
;a.accessStatus&&1===a.accessStatus&&(b.AddCommand({cmdCommand:"grant-access",cmdCaption:z("EmergencyAccess_GrantAccess_Title"),
cmdAction:()=>{return void(0,r.fI)((async()=>{
2===await(0,f.dD)(z("EmergencyAccess_GrantAccess_Question",[a.email]),z("StartPage_DialogButton_Yes"),z("StartPage_DialogButton_No"))&&await b()
})());async function b(){try{await(0,d.en)((async()=>w.GrantEmergencyAccess(a.accountId,null)),p,y),await J(!1,!1),await K(),(0,
e.Fp)(z("EmergencyAccess_GrantAccess_Notification"))}catch(o){if((0,s.r5)(o,s.m))return void await b();(0,
s.r5)(o,s.kd)||await(0,f.nn)(z("EmergencyAccess_GrantAccess_Error",[a.email,(0,s.EB)(o)]))}}}}),b.AddCommand({
cmdCommand:"deny-access",cmdCaption:z("EmergencyAccess_DenyAccess_Text"),cmdAction:()=>{return void(0,r.fI)((async()=>{
2===await(0,
f.dD)(z("EmergencyAccess_DenyAccess_Question",[a.email]),z("StartPage_DialogButton_Yes"),z("StartPage_DialogButton_No"))&&await b()
})());async function b(){try{await(0,d.en)((async()=>w.RevokeEmergencyAccess(a.accountId,null)),p,y),await J(!1,!1),await K(),
(0,e.Fp)(z("EmergencyAccess_DenyAccess_Notification"))}catch(o){if((0,s.r5)(o,s.m))return void await b();(0,
s.r5)(o,s.kd)||await(0,f.nn)(z("EmergencyAccess_DenyAccess_Error",[a.email,(0,s.EB)(o)]))}}}}))
;a.accessStatus&&2===a.accessStatus&&b.AddCommand({cmdCommand:"revoke-access",cmdCaption:z("EmergencyAccess_RevokeAccess_Text"),
cmdAction:()=>{return void(0,r.fI)((async()=>{
2===await(0,f.dD)(z("EmergencyAccess_RevokeAccess_Question",[a.email]),z("StartPage_DialogButton_Yes"),z("StartPage_DialogButton_No"))&&await b()
})());async function b(){try{await(0,d.en)((async()=>w.RevokeEmergencyAccess(a.accountId,null)),p,y),await J(!1,!1),(0,
e.Fp)(z("EmergencyAccess_RevokeAccess_Notification"))}catch(o){if((0,s.r5)(o,s.m))return void await b();(0,
s.r5)(o,s.kd)||await(0,f.nn)(z("EmergencyAccess_RevokeAccess_Error",[a.email,(0,s.EB)(o)]))}}}});return b.AddCommand({
cmdCommand:"change-timeout-period",cmdCaption:z("EmergencyAccess_ChangeTimeoutPeriod_Text"),cmdAction:()=>(0,
r.fI)(async function(a){
const b=(0,f.BG)((0,k.p)((0,f.IW)("rf-ea-dialog rf-ea-change-timeout-dialog",z("EmergencyAccess_EditTimeoutPeriod_Text"),null),(()=>function(a,b){
let c,d,g;const h={Create:i,OnAfterShow:j,OnBeforeHide:k,Focus:l,Dispose:n};return h;async function i(b,h){const i=t("div",{
className:"rf-body"},t("div",{className:"rf-title"},await z("EmergencyAccess_AddContact_Timeout_Caption2")),c=O(a,r)),j=(0,
f.n7)({btnClass:"rf-cancel-btn",btnCaption:z("StartPage_DialogButton_Cancel"),btnAction:()=>h(s.JS)});d=(0,f.n7)({
btnClass:"rf-ok-button",btnDefault:!0,btnDisabled:!0,btnCaption:z("StartPage_DialogButton_Ok"),btnAction:()=>p()});const k=(0,
f.lD)([j,d]),l=t("div",null,i,k);return g=(0,e.yd)(l),l}function j(){r()}function k(){}function l(){}function n(){}function p(){
if(!v())return;const a=parseInt(c.value)||0;(0,m.D$)((()=>q(a)),(()=>w()),u,(()=>g.Show()))}async function q(a){try{
await b.OnUpdateTimeout(a),await J(!1,!1),(0,e.Fp)(z("EmergencyAccess_EditTimeoutPeriod_Notification"))}catch(o){if((0,
s.r5)(o,s.m))return void await q(a);(0,s.r5)(o,s.kd)||await(0,f.nn)(z("EmergencyAccess_EditTimeoutPeriod_Error",[(0,s.EB)(o)]))}
}function r(){v()?(0,f.aV)(d):(0,f.DG)(d)}function v(){return parseInt(c.value)!==a}function w(){return c.disabled=!0,(0,
f.DG)(d),x}function x(){c.disabled=!1,(0,f.aV)(d)}}((0,q.TT)(a.timeoutSecs),{OnUpdateTimeout:async c=>{await(0,
d.en)((async()=>w.UpdateEmergencyContactInfo(a.accountId,{timeoutSec:c},null)),p,y),b.Cancel()}}))));await b.Execute(null)}(a))
}),b.AddCommand({cmdCommand:"revoke-contact",
cmdCaption:0===a.status?z("EmergencyAccess_RevokeInvitation_Text"):z("EmergencyAccess_RemoveContact_Text"),cmdAction:()=>{
async function b(){try{await(0,d.en)((async()=>w.RevokeEmergencyContact(a.accountId,!1,null)),p,y),await J(!1,!1),(0,
e.Fp)(0===a.status?z("EmergencyAccess_RevokeContactInvitation_Notification"):z("EmergencyAccess_RemoveContact_Notification"))
}catch(o){if((0,s.r5)(o,s.m))return void await b()
;(0,s.r5)(o,s.kd)||await(0,f.nn)(0===a.status?z("EmergencyAccess_RevokeContactInvitation_Error",[a.email,(0,
s.EB)(o)]):z("EmergencyAccess_RemoveContact_Error",[a.email,(0,s.EB)(o)]))}}(0,r.fI)((async()=>{
const c=0===a.status?z("EmergencyAccess_RevokeContactInvitation_Question2",[a.email]):z("EmergencyAccess_RemoveContact_Question2",[a.email])
;2===await(0,f.dD)(c,z("StartPage_DialogButton_Yes"),z("StartPage_DialogButton_No"))&&await b()})())}}),b}(a);let C,E,F
;const G=t("td",{className:"rf-ea-pending-action-mark"});let I;const L=t("tr",{
className:"rf-ea-account rf-item "+(b?"rf-ea-contact":"rf-ea-testator")},t("td",{className:"rf-title"},t("div",{
className:"rf-name"},a.name),t("div",{className:"rf-email"},a.email)),b?null:G,C=t("td",{
className:"rf-status rf-access-status "+A},(0,m.LX)(x,"")),E=t("td",{className:"rf-timeout"},(0,m.LX)(H[(0,
q.TT)(a.timeoutSecs)],"")),b?G:null,F=t("td",{className:"rf-status rf-contact-status "+n},M()),t("td",{className:"rf-commands"
},I=t("div",{className:"rf-item-menu rf-cmdbutton auto-hide",onclick:()=>{const a=(0,h.VC)(I),b={clientX:a.left,
clientY:a.top+I.offsetHeight};(0,r.fI)((0,e.Wz)({dropdownHandlerEl:L,position:b,commands:B,isContextMenu:!0,
cssClass:"commands-menu"}))}})));!b&&a.accessStatus&&1===a.accessStatus&&(E.style.fontWeight="bold",N(E,a),
D.push(setInterval((()=>{N(E,a)}),1e3)),P(C,G,a,b));b&&0===a.status&&P(F,G,a,b);return L;function M(){
const c=a.name||"",d=a.email,f=(0,i.rR)((0,q.TT)(a.statusChangedTime));let g=Promise.resolve(""),h=Promise.resolve("")
;b?0===a.status?(g=z("EmergencyAccess_Status_TestatorInvited_Tip",[c,d,f]),
h=z("EmergencyAccess_ContactInvited_Status")):1===a.status&&(g=z("EmergencyAccess_Status_TestatorAccepted_Tip",[c,d,f]),
h=z("EmergencyAccess_ContactAccepted_Status")):0===a.status?(g=z("EmergencyAccess_Status_ContactIvited_Tip",[c,d,f]),
h=z("EmergencyAccess_ContactInvited_Status")):1===a.status?(g=z("EmergencyAccess_Status_ContactAccepted_Tip",[c,d,f]),
h=z("EmergencyAccess_ContactAccepted_Status")):2===a.status&&(g=z("EmergencyAccess_Status_ContactRejected_Tip",[c,d,f]),
h=z("EmergencyAccess_ContactRejected_Status"));const j=t("div",{className:"rf-status-content"},t("div",{
className:"rf-status-icon"}),t("div",{className:"rf-status-text"},(0,m.LX)(h,"")));return(0,e.YC)(j,g),j}}(b,a))}))}(b)}}
async function K(){}async function L(){const a=await Promise.all([w.GetEmergencyContacts(null),w.GetTestators(null)])
;B=a[0].map((a=>void 0===a.status?Object.assign(Object.assign({},a),{status:0}):a)),
C=a[1].map((a=>void 0===a.status?Object.assign(Object.assign({},a),{status:0}):a)).filter((a=>2!==a.status)),A=!0}function M(a){
const b=a?x.testatorsBandge:x.contactsBandge;null!==b&&(a&&C.length?b.textContent=(0,
q.bf)(C.length):!a&&B.length?b.textContent=(0,q.bf)(B.length):(0,m.SE)(b))}function N(a,b){let c=(0,
q.TT)(b.timeoutSecs)-(Math.floor(Date.now()/1e3)-(0,q.TT)(b.accessRequestedTime));c=Math.max(0,c);let d=""
;const e=Math.floor(c/3600);c-=3600*e,d+=(e<10?"0":"")+(0,q.bf)(e)+":";const f=Math.floor(c/60);c-=60*f,d+=("00"+(0,
q.bf)(f)).slice(-2)+":",d+=("00"+(0,q.bf)(c)).slice(-2),a.textContent=d}function O(a,b){const c=t("select",{
className:"rf-input rf-timeout",onchange:()=>{E.Start((async a=>{await(0,r.Gu)(200,a,!1),b()}))}
},Object.keys(H).map((a=>t("option",{value:a},(0,m.LX)(H[parseInt(a)],"")))));return c.value=(0,q.bf)(a),c}function P(a,b,c,d){
const g=c.email,i=c.name?`${c.name} (${c.email})`:c.email,j=t("div",{className:"rf-ea-pending-action"});function k(a,b,c,d,g,h){
const i=t("div",{className:"rf-ea-pending-action-btn rf-ea-pending-action-"+a,onclick:()=>{(0,r.fI)((async()=>{2===await(0,
f.dD)(c,z("StartPage_DialogButton_Yes"),z("StartPage_DialogButton_No"))&&await l(d,g,h)})())}});return(0,e.YC)(i,b),i}
return d?(j.appendChild(t("div",{className:"rf-ea-pending-action-desc"
},(0,m.LX)(z("EmergencyAccess_Pending_InvitationReceived_Title"),""))),
j.appendChild(k("accept",z("EmergencyAccess_Accept_Invitation_Text"),z("EmergencyAccess_AcceptInvitation_Question",[g]),z("EmergencyAccess_AcceptInvitation_Notification"),(a=>z("EmergencyAccess_AcceptInvitation_Error",[g,a])),(()=>w.AcceptEmergencyContactInvitation(c.accountId,null)))),
j.appendChild(k("reject",z("EmergencyAccess_Remove_Me"),z("EmergencyAccess_RejectTestator_Question",[i]),z("EmergencyAccess_RejectTestator_Notification"),(a=>z("EmergencyAccess_RejectTestator_Error",[a])),(()=>w.RejectEmergencyContactInvitation(c.accountId,null))))):(j.appendChild(t("div",{
className:"rf-ea-pending-action-desc"},(0,m.LX)(z("EmergencyAccess_Pending_AccessRequested_Title"),""))),
j.appendChild(k("grant",z("EmergencyAccess_GrantAccess_Title"),z("EmergencyAccess_GrantAccess_Question",[g]),z("EmergencyAccess_GrantAccess_Notification"),(a=>z("EmergencyAccess_GrantAccess_Error",[g,a])),(()=>w.GrantEmergencyAccess(c.accountId,null)))),
j.appendChild(k("deny",z("EmergencyAccess_DenyAccess_Text"),z("EmergencyAccess_DenyAccess_Question",[g]),z("EmergencyAccess_DenyAccess_Notification"),(a=>z("EmergencyAccess_DenyAccess_Error",[g,a])),(()=>w.RevokeEmergencyAccess(c.accountId,null))))),
(0,h.Nt)(a),a.appendChild(j),b.classList.add("rf-shown"),void b.appendChild(t("div",null,(0,
m.LX)(z("EmergencyAccess_Pending_Action"),"")));async function l(a,b,c){try{await c(),await J(!1,d),await K(),(0,e.Fp)(a)
}catch(g){if((0,s.r5)(g,s.m))return void await l(a,b,c);(0,s.r5)(g,s.kd)||await(0,f.nn)(b((0,s.EB)(g)))}}}}function w(a,b){
let c=!1,d=!1;const g=a,h=b,i=(0,q.TT)(g.rf_api.emergencyAccess),j=(0,r.tG)(),l=(0,r.tG)(),n=(0,r.h1)(),o=(0,r.h1)()
;let s=[],v=[];const w=a.localization.LocalizeString;return{Activate:function(){if(c)return;c=!0,(0,m.l5)(h.files),(0,
m.l5)(h.emergencyAccess.main),"stand-alone"===a.page_status.extensionMode&&((0,r.fI)(n.Execute({action:x},null)),
null===(b=a.rf_api.service.onSyncSucceeded)||void 0===b||b.Add(y));var b},Deactivate:function(){if(!c)return;c=!1,(0,
m.SE)(h.emergencyAccess.main),"stand-alone"===a.page_status.extensionMode&&(s=[],v=[],
null===(b=a.rf_api.service.onSyncSucceeded)||void 0===b||b.Remove(y),j.Cancel(),l.Cancel());var b},UpdateView:function(a){
const b=g.rf_manager.GetController(1);if(g.GetPolicies().DisableEmergencyAccess)return b.ShowSelector(10,!1,null),
void(c&&g.rf_manager.OnSelectCategory("category-folders"));b.ShowSelector(10,!0,null);a&&(d=!1);if(!c)return
;if(g.rf_manager.IsEditorShown())return;if(g.rf_manager.IsSearchResultShown())return;(0,
r.fI)(g.GetEmergencyAccess().UpdateView(d,"emergency-access-im-contact-for"===g.rf_manager.GetSortOrder())),d=!0},
Invalidate:()=>{d=!1},IsStillActual:()=>c,GetIsStillActual:function(){return function(){return c}}};async function x(){
const b=await a.rf_api.service.GetSyncPendingItems(null);b&&z(b)}function y(a){z(a.pendingItems)}function z(a){
if(a.emergencyAccess.length>0){let b=!1,c=!1;const d=[],g=[]
;for(const e of a.emergencyAccess)1===e.status&&1===e.accessStatus?g.push(e):d.push(e);if((0,q.XM)(v,g)){if(!(0,q.XM)(s,d)){
if(o.IsExecuting())return void(s=[]);if(l.IsExecuting())return;b=!0,s=d}}else{if(o.IsExecuting())return void(v=[]);if(c=!0,v=g,
j.IsExecuting()){if(!(g.length>0))return;s=[],j.Cancel()}}if(c&&g.length>0){const a=(0,f.BG)((0,k.p)((0,
f.IW)("rf-new-item-dialog rf-pending-dialog rf-ea-request-pending",w("StartPage_Category_EmergencyAccess"),null),(a=>function(a,b,c,d){
const g={Create:h,OnAfterShow:i,OnBeforeHide:j,Focus:k,Dispose:l};return g;async function h(g,h){
const i=await w("EmergencyAccessDataAccessConfirmationDescription_Text"),j=new Set,k=[];for(const b of a){let a
;const c=t("div",{className:"item-row"},a=t(p.b_,{text:`${b.name||""} (${b.email})`,checked:!0,onchange:()=>{
a.GetChecked()?j.add(b):j.delete(b),0===j.size?((0,f.DG)(l),(0,f.DG)(n)):((0,f.aV)(l),(0,f.aV)(n))}}));k.push(c),j.add(b)}
const l=(0,f.n7)({btnClass:"rf-ok-button",btnDefault:!0,btnCaption:w("EmergencyAccess_GrantAccess_Title"),btnAction:()=>{(0,
m.D$)(v,(()=>y()),u,(()=>s.Show()))}}),n=(0,f.n7)({btnClass:"rf-ok-button",btnCaption:w("EmergencyAccess_DenyAccess_Text"),
btnAction:()=>{(0,m.D$)(x,(()=>y()),u,(()=>s.Show()))}}),o=(0,f.n7)({btnClass:"rf-ok-button",btnCaption:w("Cmd_Later_Flat"),
btnAction:()=>{g()}}),q=(0,f.lD)([l,n,o]),r=t("div",null,t("div",{className:"rf-body"},t("div",{className:"invitation-text"
},i),t("div",{className:"items-container"},k)),q),s=(0,e.yd)(r);return r;async function v(){try{await b(Array.from(j),d),g()
}catch(a){h(a)}}async function x(){try{await c(Array.from(j),d),g()}catch(a){h(a)}}function y(){return(0,f.DG)(l),(0,f.DG)(n),
(0,f.DG)(o),()=>{(0,f.aV)(l),(0,f.aV)(n),(0,f.aV)(o)}}}function i(){}function j(){}function k(){}function l(){}}(g,A,B,a))))
;l.Start((async b=>{await a.Execute(b),(0,r.fI)(n.Execute({action:x},b))}))}else if(b&&d.length>0){const a=(0,f.BG)((0,k.p)((0,
f.IW)("rf-new-item-dialog rf-pending-dialog",w("StartPage_Category_EmergencyAccess"),null),(a=>function(a,b,c,d){const g={
Create:h,OnAfterShow:i,OnBeforeHide:j,Focus:k,Dispose:l};return g;async function h(g,h){
const i=await w("EmergencyAccessContactConfirmationDescription_Text"),j=new Set,k=[];for(const b of a){let a;const c=t("div",{
className:"item-row"},a=t(p.b_,{text:`${b.name||""} (${b.email})`,checked:!0,onchange:()=>{a.GetChecked()?j.add(b):j.delete(b),
0===j.size?((0,f.DG)(l),(0,f.DG)(n)):((0,f.aV)(l),(0,f.aV)(n))}}));k.push(c),j.add(b)}const l=(0,f.n7)({btnClass:"rf-ok-button",
btnDefault:!0,btnCaption:w("EmergencyAccess_Accept_Invitation_Text"),btnAction:()=>{(0,m.D$)(v,(()=>y()),u,(()=>s.Show()))}
}),n=(0,f.n7)({btnClass:"rf-ok-button",btnCaption:w("EmergencyAccess_Reject_Invitation_Text2"),btnAction:()=>{(0,
m.D$)(x,(()=>y()),u,(()=>s.Show()))}}),o=(0,f.n7)({btnClass:"rf-ok-button",btnCaption:w("Cmd_Later_Flat"),btnAction:()=>{g()}
}),q=(0,f.lD)([l,n,o]),r=t("div",null,t("div",{className:"rf-body"},t("div",{className:"invitation-text"},i),t("div",{
className:"items-container"},k)),q),s=(0,e.yd)(r);return r;async function v(){try{await b(Array.from(j),d),g()}catch(a){h(a)}}
async function x(){try{await c(Array.from(j),d),g()}catch(a){h(a)}}function y(){return(0,f.DG)(l),(0,f.DG)(n),(0,f.DG)(o),()=>{
(0,f.aV)(l),(0,f.aV)(n),(0,f.aV)(o)}}}function i(){}function j(){}function k(){}function l(){}}(d,C,D,a))));j.Start((async b=>{
await a.Execute(b),(0,r.fI)(n.Execute({action:x},b))}))}else l.IsExecuting()&&0===g.length&&(l.Cancel(),(0,r.fI)(n.Execute({
action:x},null))),j.IsExecuting()&&0===d.length&&j.Cancel()}else l.Cancel(),j.Cancel()}async function A(a,b){await o.Execute({
action:async()=>{await Promise.all(a.map((a=>i.GrantEmergencyAccess(a.email,b))))}},b)}async function B(a,b){await o.Execute({
action:async()=>{await Promise.all(a.map((a=>i.RevokeEmergencyAccess(a.accountId,b))))}},b)}async function C(a,b){
await o.Execute({action:async()=>{await Promise.all(a.map((a=>i.AcceptEmergencyContactInvitation(a.email,b))))}},b)}
async function D(a,b){await o.Execute({action:async()=>{
await Promise.all(a.map((a=>i.RejectEmergencyContactInvitation(a.email,b))))}},b)}}},37042:function(a,b,c){"use strict";c.d(b,{
b:function(){return f}});var d=c(48658),e=c(55195);function f(a){const b=a,c=(0,d.Xe)(""),f={};return{GetItemsCount:g,
HasItems:async function(a,b,c,d){return await g([a],b,c,d)>0},HasFolders:async function(a,b){const c=await h(a,b)
;for(const d of c)if(8===d.type)return!0;return!1},HasNonSharedFolders:async function(a){
const b=await h("has-non-shared-folders",a);for(const c of b)if(8===c.type&&!c.sharedFolder)return!0;return!1}}
;async function g(a,c,d,g){const h=function(a){let c=f[a];if(c)return c;return c=(0,e.Xp)({UpdateData:async(a,c)=>{
const d=await b.data.GetCounts(a,c),e=new Map;for(const b of d)e.set(b.type,b.count);return e},
onDataChanged:b.data.onDataChanged,ShouldChangeCauseUpdate:(a,b)=>{switch(b.event){case 1:case 2:case 3:case 5:case 7:case 8:
case 10:return!0}return!1}}),f[a]=c,c}(c);h.IsUptodate()||await h.Update(d,c,g);const i=h.GetData()
;return i?a.reduce(((a,b)=>a+=i.get(b)||0),0):0}async function h(a,b){return c.IsUptodate()||await c.Update(a,"",b),
c.GetData()||[]}}},25057:function(a,b,c){"use strict";c.d(b,{I:function(){return s}})
;var d=c(13064),e=c(37367),f=c(83645),g=c(48141),h=c(4601),i=c(11834),j=c(41107),k=c(38221),l=c(4234),m=c(31173),n=c(63956),o=c(78440),p=c(69893),q=c(4153),r=c(91764)._
;function s(a,b,c,s,v,w){const x=v.LocalizeString,y=w;let z=null,A=null,B=!1,C=!1,D=!1;const E=new Set;let F=null,G=null,H=!1
;const I=new Set;let J=null;document.body.addEventListener("mousedown",(b=>{if(!C)return;const c=b.target,d=t(a)
;if(d&&c.classList.contains("rf-items")||!d&&c.classList.contains("rf-data")){const a=(0,k.VC)(c)
;if(b.clientX>c.clientWidth+a.left)return;if(b.clientY>c.clientHeight+a.top)return}(0,
k.LP)(c,"#v8 .rf-multiselect-in-process .rf-item-folder")||a.IsInlineEditorShown()&&c.classList.contains("rf-command-close-editor")||(null===(0,
k.LP)(c,"#v8 .modal-dialog-screen")||c.classList.contains("default-button"))&&(null!==(0,
k.LP)(c,"#v8 .rf-items.rf-multiselect-in-process")||null!==(0,k.LP)(c,"#v8 .context-menu-popup")||null!==(0,
k.LP)(c,"#v8 .rf-multiselect-cmdbar")?"category-security-center"!==a.GetCategory()?(0,
k.LP)(c,"#v8 .rf-items.rf-multiselect-in-process")&&null===(0,k.LP)(c,"#v8 .rf-list-item-row")&&null===(0,
k.LP)(c,"#v8 .rf-list-item-header")&&null===(0,k.LP)(c,"#v8 .rf-item")&&null===(0,
k.LP)(c,"#v8 .rf-add-new-item")&&(u(b.clientX,b.clientY-18,d)||u(b.clientX-18,b.clientY,d)||u(b.clientX-18,b.clientY-18,d)||S()):H&&(0,
k.LP)(c,".rf-security-center-item")&&b.preventDefault():S())})),document.body.addEventListener("mousemove",(b=>{if(F&&!T()){
const c=b.target;G=t(a)?(0,k.LP)(c,"#v8 .rf-list-item-row"):"category-security-center"===a.GetCategory()?(0,
k.LP)(c,".rf-security-center-item"):(0,k.LP)(c,"#v8 .rf-data-view .rf-item"),H?V():U()}})),
document.body.addEventListener("keydown",(a=>{if(I.add(a.which),C)return I.size>1?(H&&U(),
void(H=!1)):void(H||a.which!==k.O5.SHIFT||a.altKey||a.ctrlKey||a.metaKey||(H=!0,F&&!T()&&V()))})),
document.body.addEventListener("keyup",(a=>{I.delete(a.which),C&&(H&&U(),H=!1)})),window.addEventListener("blur",(()=>{H=!1,
I.clear()})),window.addEventListener("focus",(()=>{H=!1,I.clear()}));const K={SelectItem:async function(b){
b.classList.contains("rf-item")&&t(a)&&(b=(0,q.TT)((0,k.LP)(b,".rf-list-item-row")))
;"category-security-center"!==a.GetCategory()||a.IsSearchResultShown()||(b=(0,q.TT)((0,k.LP)(b,".rf-security-center-item")))
;const c=(0,q.TT)((0,k.Yw)(b,".rf-items"));if(H&&F&&F!==b){try{const a=await W(F,b);Y(a).forEach((a=>{
a.classList.remove("rf-multiselect-hovered"),a.classList.add("rf-multiselect-selected"),E.add((0,j.eK)(a))})),a.forEach((a=>{
E.add(a)}))}catch(d){return}b.classList.add("rf-multiselect-hovered")}else b.classList.toggle("rf-multiselect-selected")
;b.classList.contains("rf-multiselect-selected")?(F=b,E.add((0,j.eK)(b))):(F=null,E.delete((0,j.eK)(b)));E.size>0?(L(c),
await M()):S()},InitListView:function(a,b){if(z===a)return;z=a,A=b,a.removeEventListener("click",ab),
a.addEventListener("click",ab),A.removeEventListener("mousemove",ac),A.addEventListener("mousemove",ac),
A.removeEventListener("mouseleave",ad),A.addEventListener("mouseleave",ad)},UpdateItemSelection:function(a,b){
if(E.has(a)&&(b.classList.add("rf-multiselect-selected"),F)){a===(0,j.eK)(F)&&(F=b)}},IsItemSelected:function(a){
return a.classList.contains("rf-multiselect-selected")},GetSelectedItemPaths:()=>[...E],GetMenuCommands:P,Clear:S,
IsInProcess:()=>C,IsDraggingAllowed:function(){const b=a.GetCategory(),c=a.GetSortOrder()
;return C&&!H&&!a.IsSearchResultShown()&&("category-sharing-center"===b||"category-folders"===b&&"sort-order-alphabet"===c)}}
;return K;function L(c){C=!0,D=!1,y.main.classList.add("rf-multiselect-in-process"),
c.classList.add("rf-multiselect-in-process"),
(0,o.fI)(Q(E.size)),a.IsSearchResultShown()||"category-security-center"===a.GetCategory()||function(a,b,c,d){
if(a.classList.contains("rf-multiselect-draggable-initialized"))return;const e=10;let g,i,j=null,l=null;const n=60,p=15;let s=!1
;return a.addEventListener("mousedown",v),void a.classList.add("rf-multiselect-draggable-initialized");function v(a){
if(!d.IsDraggingAllowed())return;if(y(),1!==a.which)return;let b=(0,k.LP)(a.target,".rf-list-item-row");b||(b=(0,
k.LP)(a.target,".rf-item")),b&&d.IsItemSelected(b)&&(g=a.clientX,i=a.clientY,document.addEventListener("mousemove",w),
document.addEventListener("mouseup",x))}function w(b){
if(d.IsDraggingAllowed()&&1===b.which&&!(!s&&Math.abs(b.clientX-g)<e&&Math.abs(b.clientY-i)<e))return s||o(),void v(b)
;function o(){const b=window.getSelection();b&&b.removeAllRanges(),j||(j=r("div",{className:"rf-multiselect-drag-item"}),
a.appendChild(j)),j.textContent=`${d.GetSelectedItemPaths().length} files`,s=!0,a.classList.add("rf-dragging-in-process")}
function v(b){if(!s||!j)return
;const d=t(c),e=(0,k.VC)(a),g=b.clientX-e.left+(d?a.scrollLeft:0),i=b.clientY-e.top+(d?a.scrollTop:0);j.style.left=(0,
m.Md)(g-n),j.style.top=(0,m.Md)(i-p);const o=u(b.clientX,b.clientY,d)
;if(l&&l!==o&&(l.classList.remove("rf-multiselect-can-drop"),l=null),o&&o!==l){const a=(0,h.Kx)(o);a&&8===a.type?(0,
f.Xl)(a)?j.style.cursor="no-drop":(o.classList.add("rf-multiselect-can-drop"),l=o,j.style.cursor="pointer"):j.style.cursor=""}
o||(j.style.cursor="");const r=d?a:(0,q.TT)((0,k.Yw)(a,".rf-data"))
;if(r.offsetHeight<r.scrollHeight||r.offsetWidth<r.scrollWidth){const a=(0,k.VC)(r),c=b.clientX-a.left,e=b.clientY-a.top
;c<14&&(r.scrollLeft-=15),c>r.offsetWidth-24&&(r.scrollLeft+=15),e<(d?64:14)&&(r.scrollTop-=15),
e>r.offsetHeight-24&&(r.scrollTop+=15)}}}function x(){if(d.IsDraggingAllowed()){if(l){const a=(0,h.Kx)(l);a&&8===a.type&&!(0,
f.Xl)(a)&&(0,o.fI)(b.MoveOrCloneMultiselectItems(!0,d.GetSelectedItemPaths(),a.path)),d.Clear()}y()}else y()}function y(){
j&&(j.remove(),j=null),l&&(l.classList.remove("rf-multiselect-can-drop"),l=null),s=!1,
a.classList.remove("rf-dragging-in-process"),document.removeEventListener("mousemove",w),
document.removeEventListener("mouseup",x)}}(c,b,a,K);const d=R();"category-authenticator"!==a.GetCategory()&&(0,n.l5)(d),
window.ResizeObserver&&null===J&&(J=new ResizeObserver(aa),J.observe(d),aa())}async function M(){if(z)if(C){
await O()?z.classList.add("checked"):z.classList.remove("checked")}else z.classList.remove("checked")}async function N(){try{
(await X()).forEach((a=>E.add(a)))}catch(a){return}Z().forEach((a=>{
if(a.classList.contains("rf-item-folder")||a.classList.contains("rf-add-new-item")||!(0,
k.Sd)(a)&&a.getAttribute("data-invalidated")||null!==a.querySelector(".rf-item-folder"))return;const b=(0,j.eK)(a)
;b&&(a.classList.add("rf-multiselect-selected"),E.add(b))})),await M(),(0,o.fI)(Q(E.size))}async function O(){if(!C)return!1
;try{const a=await X();for(const b of a)if(!E.has(b))return!1}catch(a){return!1}return!0}async function P(){const f=(0,
j.Kw)(),g=function(){const a=[];return E.forEach((b=>{const d=c.GetDataInfo(b);d&&a.push(d)})),a}();(0,
d.Cr)(a,null)&&(f.AddCommand({cmdCommand:"multiselect-disable-user-data-breach-warning",
cmdCaption:x("Cmd_ExcludeFromSecurityScore"),cmdCssClass:"rf-menu-cmd-disable-user-data-breach-warning",cmdShowImage:!0,
cmdAction:()=>(0,o.fI)((async()=>{D=!1;const a=[...E];if(0===a.length)return void await(0,
i.nn)(v.LocalizeString("StartPage_NoSelectedItems_Error"));const c=1===a.length?`'${(0,
l.XE)(a[0],!1)}'`:await x("StartPage_SelectedItems",[(0,q.bf)(a.length),await x((0,
l.Y5)(1,!0))]),d=x("StartPage_ExcludeFromSecurityScore_Confirmation",[c]);2===await(0,
i.dD)(d,x("StartPage_DialogButton_Yes"),x("StartPage_DialogButton_No"))&&(await b.DisableSecurityWarningForMultiselectItems(!0,a),
S())})())}),f.AddSeparator()),(0,d.Jh)(a)&&(f.AddCommand({cmdCommand:"multiselect-enable-user-data-breach-warning",
cmdCaption:x("Cmd_IncludeToSecurityScore"),cmdCssClass:"rf-menu-cmd-enable-user-data-breach-warning",cmdShowImage:!0,
cmdAction:()=>{D=!1,(0,o.fI)((async()=>{await b.DisableSecurityWarningForMultiselectItems(!1,[...E]),S()})())}}),
f.AddSeparator());if(g.filter((a=>1===a.type||2===a.type)).length===g.length){const a={cmdCommand:"multiselect-batch-login",
cmdCaption:x("StartPage_Cmd_BatchLogIn"),cmdCssClass:"rf-menu-cmd-login",cmdShowImage:!0,hidden:!0};(0,h.$R)(a,g,!0,(()=>{D=!1
}))&&(f.AddCommand(a),f.AddSeparator())}f.AddCommand({cmdCommand:"multiselect-move",cmdCaption:x("Cmd_Move_Flat"),
cmdCssClass:"rf-menu-cmd-move",cmdShowImage:!0,cmdAction:()=>{D=!1,(0,o.fI)((0,e.ng)([...E],!0,b,v))}}),f.AddCommand({
cmdCommand:"multiselect-clone",cmdCaption:x("Cmd_Clone_Flat"),cmdCssClass:"rf-menu-cmd-clone",cmdShowImage:!0,cmdAction:()=>{
D=!1,(0,o.fI)((0,e.ng)([...E],!1,b,v))}}),f.AddCommand({cmdCommand:"multiselect-unpin",
cmdCaption:x("StartPage_Cmd_RemoveFromPinned"),cmdCssClass:"rf-menu-cmd-unpin",cmdShowImage:!0,
hidden:"category-pinned"!==a.GetCategory(),cmdAction:()=>{D=!1,(0,o.fI)((async()=>{await b.PinMultiselectItems(!1,[...E]),S()
})())}}),f.AddCommand({cmdCommand:"multiselect-delete",cmdCaption:x("Cmd_Delete_Flat"),cmdCssClass:"rf-menu-cmd-delete",
cmdShowImage:!0,cmdAction:()=>{D=!1,(0,o.fI)((0,e.TH)([...E],b,a,v))}})
;return await s.HasFolders("has-folders-multiselect-context-menu",null)||(f.ShowCommand("multiselect-move",!1),
f.ShowCommand("multiselect-clone",!1)),f}async function Q(b){const c=await P();if(!C)return;const d=c.GetSortedCommands(),e=R()
;(0,k.Nt)(e);for(const a of d){if(a.hidden)continue;if(a.separator)continue
;"multiselect-disable-user-data-breach-warning"===a.cmdCommand&&(a.cmdCaption=x("Cmd_ExcludeFromSecurityScore")),
"multiselect-enable-user-data-breach-warning"===a.cmdCommand&&(a.cmdCaption=x("Cmd_IncludeToSecurityScore"))
;l(a,!1).classList.add("cmd-framed")}e.appendChild(r("div",{className:"rf-flex-gap"}));const f={
cmdCommand:"multiselect-select-all",cmdCaption:x("StartPage_Cmd_SelectAll"),cmdCssClass:"rf-menu-cmd-select-all",
cmdShowImage:!0,cmdAction:()=>{(0,o.fI)((async()=>{const a=f.cmdElement
;a&&!a.classList.contains("rf-cmd-processing")&&(a.classList.add("rf-cmd-processing"),await N(),
a.classList.remove("rf-cmd-processing"))})())}},h={cmdCommand:"multiselect-deselect",cmdCaption:x("StartPage_Cmd_Deselect",[(0,
q.bf)(b)]),cmdCssClass:"rf-menu-cmd-deselect",cmdShowImage:!0,cmdAction:S},i=l(f,!1);return l(h,!0),
void(a.IsSearchResultShown()&&((0,n.SE)(i),(0,o.fI)((async()=>{const a=await(0,g.x3)()
;C&&i.parentElement===e&&(null===a?await(0,o.xy)(100):a.length<200&&(0,n.l5)(i))})())));function l(a,b){let c;const d=r("div",{
className:"rf-multiselect-cmd-item-image"}),f=r("div",{className:"rf-multiselect-cmd-item "+(a.cmdCssClass||"")
},b?null:d,c=r("div",{className:"rf-multiselect-cmd-item-text"}),b?d:null);return a.cmdCaption&&((0,j.$9)(c,a.cmdCaption),(0,
j.YC)(f,a.cmdCaption)),f.addEventListener("click",(b=>{a.cmdAction&&a.cmdAction(b)})),a.cmdElement=f,e.appendChild(f),f}}
function R(){let b=y.dataItems.multiselectCmdbar
;return a.IsSearchResultShown()?b=y.searchResults.multiselectCmdbar:"category-security-center"===a.GetCategory()&&(b=y.securityCenter.multiselectCmdbar),
b}function S(){C=!1,D=!1,E.clear(),F=null,G=null,H=!1,I.clear(),y.main.classList.remove("rf-multiselect-in-process"),
Z().forEach((a=>{a.classList.remove("rf-multiselect-selected","rf-multiselect-hovered")})),
document.querySelectorAll("#v8 .rf-items").forEach((a=>{a.classList.remove("rf-multiselect-in-process")})),J&&(J.disconnect(),
J=null),(0,n.SE)(R()),(0,o.fI)(M()),B&&(B=!1,z&&(0,n.SE)(z))}function T(){if(F){const a=(0,k.Yw)(F,".rf-items")
;return a&&a.classList.contains("rf-dragging-in-process")||!1}return!1}function U(){Z().forEach((a=>{
a.classList.remove("rf-multiselect-hovered")}))}function V(){G&&F&&(U(),(0,o.fI)((async()=>{try{Y(await W(F,G)).forEach((a=>{
a.classList.add("rf-multiselect-hovered")}))}catch(a){return}})()))}async function W(a,b){const c=await X(),d=(0,j.eK)(a),e=(0,
j.eK)(b);let f=c.indexOf(d),g=c.indexOf(e);return f>g&&([f,g]=[g,f]),f>=0&&g>=0&&g<c.length?c.slice(f,g+1):[]}
async function X(){let b=[];if(a.IsSearchResultShown())for(D=!0;;){const a=await(0,g.x3)();if(!C||!D)throw p.JS;if(null!==a){b=a
;break}await(0,o.xy)(50)}else if("category-security-center"===a.GetCategory())b=a.GetController(9).GetAllItemPaths();else{
a.GetController(3).GetAllShownItems().forEach((a=>{8!==a.type&&b.push(a.path)}))}return D=!1,b}function Y(a){const b=Z(),c=[]
;return b.forEach((b=>{const d=(0,j.eK)(b);-1!==a.indexOf(d)&&c.push(b)})),c}function Z(){
return t(a)?a.IsSearchResultShown()?Array.from(document.querySelectorAll("#v8 .rf-search-result-view .rf-items .rf-list-item-row")):Array.from(document.querySelectorAll("#v8 .rf-data-view .rf-items .rf-list-item-row")):"category-security-center"===a.GetCategory()?Array.from(document.querySelectorAll("#v8 .rf-security-center .rf-items.rf-multiselect-in-process .rf-security-center-item")):Array.from(document.querySelectorAll("#v8 .rf-data-view .rf-items-section-main .rf-items .rf-item"))
}function aa(){const b=R(),c=b.offsetWidth;let d=850,e=730;"category-pinned"===a.GetCategory()?(d=980,
e=820):"category-security-center"===a.GetCategory()&&("security-center-compromised"===a.GetSortOrder()||"security-center-excluded"===a.GetSortOrder()?(d=1100,
e=830):(d=810,e=710)),b.classList.remove("medium","compact"),c<=e?b.classList.add("compact"):c<=d&&b.classList.add("medium")}
function ab(){(0,o.fI)((async()=>{await O()?S():(!C&&A&&L(A),await N())})())}function ac(b){if(!A||!z)return;if(C)return void(0,
n.l5)(z);const c=b.target;t(a)?(0,k.LP)(c,".rf-list-item-header")||(0,k.LP)(c,".rf-list-item-row:not(.rf-item-folder)")?(0,
n.l5)(z):(0,n.SE)(z):"category-security-center"===a.GetCategory()&&((0,k.LP)(c,".table-items")?(0,n.l5)(z):(0,n.SE)(z))}
function ad(){C?B=!0:A&&z&&(0,n.SE)(z)}}function t(a){
return a.IsSearchResultShown()||-1!==["category-folders","category-sharing-center","category-authenticator"].indexOf(a.GetCategory())&&"rf-view-list"===a.GetItemsViewStyle()
}function u(a,b,c){let d=[];var e
;document.elementsFromPoint?d=document.elementsFromPoint(a,b):(e=document)&&void 0!==e.msElementsFromPoint&&(d=Array.from(document.msElementsFromPoint(a,b)))
;for(const f of d){const a=c?"rf-list-item-row":"rf-item";if(f.classList.contains(a)&&f.matches("#v8 .rf-items ."+a))return f}
return null}},95890:function(a,b,c){"use strict";c.d(b,{E:function(){return o},x:function(){return p}})
;var d=c(48658),e=c(41107),f=c(74864),g=c(38221),h=c(31173),i=c(63956),j=c(40371),k=c(78440),l=c(4153),m=(c(13117),c(91764)._)
;const n="upgrade-stars-anim.svg";function o(a,b){let c,d,f,o=!1,p=!1;const q=a,r=a.rf_manager,s=a.rf_items_existance,t=b,u=(0,
l.TT)(b.navigator),v=(0,k.SI)(300);let w=!1;const x=new Set,y=t.main,z=u.main;!function(){const a=t.contextMenuPopup
;function b(){
y.classList.add("rf-navigator-hovered"),d()||(0,e.b2)(!1),u.upgradeSelect&&(u.upgradeSelect.style.backgroundImage="")}
function c(){y.classList.remove("rf-navigator-hovered"),d()&&(0,e.b2)(!1),u.upgradeSelect&&(0,i.hX)(n,u.upgradeSelect)}
function d(){return(0,e.DN)(z)}z.addEventListener("scroll",(()=>{d()&&(0,e.b2)(!1)})),z.addEventListener("mouseenter",(()=>{
w&&b()})),z.addEventListener("mouseleave",(a=>{if(w){if(L()){const b=a.target;null===(0,
g.LP)(b,".more-categories-select")&&z.classList.remove("rf-more-categories-shown")}const b=a.relatedTarget&&null!==(0,
g.LP)(a.relatedTarget,".context-menu-popup");d()&&b||c()}})),a.addEventListener("mouseenter",(()=>{w&&d()&&b()})),
a.addEventListener("mouseleave",(a=>{const b=a.relatedTarget&&null!==(0,g.LP)(a.relatedTarget,".rf-navigator");w&&d()&&!b&&c()
}))}();const A=(0,l.TT)(u.foldersPane);let B=!1;const C=(0,l.TT)(u.dataFilterInput);C.addEventListener("keydown",(function(a){
if(a.which===g.O5.ESCAPE)P(),a.preventDefault(),a.stopPropagation()})),(0,i.uA)(C,(function(){C.value?(0,i.l5)(D):(0,i.SE)(D)
;G.onFilterChanged.CallAllSync(C.value)}),!1);const D=(0,l.TT)(u.dataFilterEraser);D.addEventListener("click",(function(){P()
})),(0,i.SE)(D);const E=(0,l.TT)(u.foldersTree);E.addEventListener("scroll",(function(){(0,e.DN)(E)&&(0,e.b2)(!1)}))
;const F=r.GetController(2).GetFoldersTreeView();window.addEventListener("resize",(()=>{M(),H(null)}));const G={
Activate:function(){var b;if(o)return
;o=!0,(0,i.l5)(z),H(null),R(),"stand-alone"===a.page_status.extensionMode&&(null===(b=a.rf_api.service.onSyncSucceeded)||void 0===b||b.Add(S))
},Deactivate:function(){var b
;(0,i.SE)(z),o=!1,"stand-alone"===a.page_status.extensionMode&&(null===(b=a.rf_api.service.onSyncSucceeded)||void 0===b||b.Remove(S))
},UpdateView:function(a){a&&(p=!1);if(!o)return;if(r.IsEditorShown())return;if((0,k.fI)(N()),(0,k.fI)(O()),p)return;p=!0,J(),(0,
k.fI)(q.GetEmergencyAccess().UpdatePendingEAEventsCount()),(0,k.fI)(async function(){
const a=await r.ShouldShowUpgradePromo(),b=u.sectionUpgrade;if(a){const a=await c();u.upgradeSelect=a,(0,g.Nt)(b),
b.appendChild(a),(0,i.l5)(b)}else(0,i.SE)(b);return;async function c(){const a=q.localization.LocalizeString;return m("div",{
className:"upgrade-select"},await d(),m("div",{className:"buttons-bar"},m("div",{className:"button learn-more-btn",onclick:()=>{
(0,k.fI)(r.ShowUpgradePromo())}},await a("StartPage_Upgrade_Button_LearnMore")),m("div",{className:"separator"}),m("div",{
className:"button upgrade-btn",onclick:()=>{(0,k.fI)(r.OnUpgrade())}},await a("Cmd_License_BuyNow"))))}async function d(){
const a=q.localization,b=a.LocalizeString,c=await q.rf_api.options.Get({AccountLicenseActive:!1,AccountLicenseExpirationTime:0,
AccountClientReadOnly:!1});if(c.AccountClientReadOnly){return m("div",{className:"text"},(0,
e.R1)(await b("StartPage_Upgrade_ReadOnlyMode_Text"),[]))}if(c.AccountLicenseActive&&c.AccountLicenseExpirationTime>0){
const d=new Date(1e3*c.AccountLicenseExpirationTime).toLocaleDateString(await a.GetLanguageTag(null),{day:"numeric",
month:"short"});return m("div",{className:"text"},(0,e.R1)(await b("StartPage_Upgrade_TrialMode_Text"),[m("span",null,d)]))}
return m("div",{className:"text"},(0,e.R1)(await b("StartPage_Upgrade_FreeMode_Text"),[]))}}())},Invalidate:()=>{p=!1},
IsStillActual:()=>o,GetIsStillActual:function(){return function(){return o}},ShowSelector:I,UpdateCategoryAndOrderSelectors:J,
Collapse:H,ToggleMoreCategories:function(){
L()?z.classList.contains("rf-more-categories-shown")?z.classList.remove("rf-more-categories-shown"):z.classList.add("rf-more-categories-shown"):z.classList.remove("rf-more-categories-shown")
},UpdateScrollMode:M,UpdateNarrowStyle:function(){let a=0;F.GetAllFoldersElements().forEach((b=>{(0,
g.Sd)(b)&&(a=Math.max(a,parseInt(b.getAttribute("data-level")||"")||0))
})),a<3?E.classList.add("narrow"):E.classList.remove("narrow")},ShowFoldersTree:function(a){if(a&&B||!a&&!B)return;M(a),a?(B=!0,
z.classList.add("rf-folders-pane-shown")):(B=!1,z.classList.remove("rf-folders-pane-shown"))
;a?u.foldersDropdownHandler.classList.add("shown-popup-menu"):(u.foldersDropdownHandler.classList.remove("shown-popup-menu"),
P());(0,e.b2)(!1),I(1,a,{slideIn:!0,slideOut:!0,onAnimationEnd:()=>{M(a)}})},SetFilterValue:function(a){C.value=a,a?(0,
i.l5)(D):(0,i.SE)(D)},onFilterChanged:(0,j.dU)()};return G;function H(a){const b=window.innerWidth,c=w;let d=c
;if(r.IsInlineEditorShown()){if(null===a)return;d=b<=920+a}else d=b<=1170
;w=d,d?y.classList.add("rf-navigator-collapsed"):(y.classList.remove("rf-navigator-collapsed"),
y.classList.remove("rf-navigator-hovered")),d!==c&&(r.GetController(2).UpdateView(!1),u.upgradeSelect&&(d?(0,
i.hX)(n,u.upgradeSelect):u.upgradeSelect.style.backgroundImage=""))}function I(a,b,c){let d=null;switch(a){case 0:case 1:
d=u.sectionFolders;break;case 2:d=u.sectionPinned;break;case 3:case 4:case 5:d=u.sectionCategories;break;case 6:
d=u.sectionWhyRoboForm;break;case 10:d=u.sectionMoreCategories}let f=null;switch(a){case 0:f=u.categoryFolders;break;case 1:
f=u.foldersPane;break;case 2:f=u.categoryPinned;break;case 3:f=u.categoryLogins;break;case 4:f=u.categoryLoginsAndBookmarks
;break;case 5:f=u.categoryBookmarks;break;case 6:f=u.categoryWhyRoboForm;break;case 10:f=u.categoryEmergencyAccess}
if(null!==d&&null!==f)if(b)(0,i.l5)(d),(0,i.l5)(f),c&&c.slideIn&&((0,e.wz)(f,300,null),c.onAnimationEnd()),x.delete(a);else{
c&&c.slideOut?(0,e.bV)(f,300,(()=>{(0,i.SE)((0,l.TT)(f)),c.onAnimationEnd()})):(0,i.SE)(f);let b=!0
;d.querySelectorAll(".selector-item").forEach((a=>{(0,g.Sd)(a)&&(b=!1)})),b&&(0,i.SE)(d),x.add(a)}}function J(){
const a=r.GetCategory(),b=r.GetSortOrder();switch(F.GetAllFoldersElements().forEach((a=>{a.classList.remove("active")})),
[u.categoryFolders,u.categoryPinned,u.categoryAll,u.categoryLogins,u.categoryBookmarks,u.categoryLoginsAndBookmarks,u.categorySafenotes,u.identity.categoryItem,u.categoryWhyRoboForm,u.categorySecurityCenter,u.categorySharingCenter,u.categoryAuthenticator,u.categoryEmergencyAccess,u.categoryMoreCategories,u.categoryPasswordGenerator].forEach((a=>{
a.classList.remove("active")})),a){case"category-pinned":u.categoryPinned.classList.add("active");break;case"category-folders":{
const a=r.GetFolder(),b=""===a?u.categoryFolders:F.GetFolderElement(a);b&&B&&b.classList.add("active")}
switch(r.GetItemTypeFilter()){case"item-type-filter-logins":u.categoryLogins.classList.add("active");break
;case"item-type-filter-bookmarks":u.categoryBookmarks.classList.add("active");break;case"item-type-filter-logins-and-bookmarks":
u.categoryLoginsAndBookmarks.classList.add("active");break;case"item-type-filter-safenotes":
u.categorySafenotes.classList.add("active");break;case"item-type-filter-identities":
u.identity.categoryItem.classList.add("active");break;default:u.categoryAll.classList.add("active")}break
;case"category-why-roboform":u.categoryWhyRoboForm.classList.add("active");break;case"category-authenticator":
u.categoryAuthenticator.classList.add("active"),u.categoryMoreCategories.classList.add("active");break
;case"category-password-generator":u.categoryPasswordGenerator.classList.add("active"),
u.categoryMoreCategories.classList.add("active");break;case"category-emergency-access":
u.categoryEmergencyAccess.classList.add("active"),u.categoryMoreCategories.classList.add("active");break
;case"category-sharing-center":u.categorySharingCenter.classList.add("active"),u.categoryMoreCategories.classList.add("active")
;break;case"category-security-center":u.categorySecurityCenter.classList.add("active"),
u.categoryMoreCategories.classList.add("active")}const c=u.categoryMoreCategories
;switch(c.classList.remove("more-categories-authenticator","more-categories-password-generator","more-categories-emergency-access","more-categories-sharing-center","more-categories-security-center"),
a){case"category-authenticator":c.classList.add("more-categories-authenticator");break;case"category-password-generator":
c.classList.add("more-categories-password-generator");break;case"category-emergency-access":
c.classList.add("more-categories-emergency-access");break;case"category-sharing-center":
c.classList.add("more-categories-sharing-center");break;case"category-security-center":
c.classList.add("more-categories-security-center")}
if("category-folders"===a?E.classList.add("active"):E.classList.remove("active"),"category-emergency-access"===a){if((0,
i.l5)(t.emergencyAccess.orderSelector),
null!==t.emergencyAccess.orderSelectorContacts&&null!==t.emergencyAccess.orderSelectorTestators)switch(t.emergencyAccess.orderSelectorContacts.classList.remove("active"),
t.emergencyAccess.orderSelectorTestators.classList.remove("active"),b){case"emergency-access-my-contacts":(0,
i.l5)(t.emergencyAccess.newButton),t.emergencyAccess.orderSelectorContacts.classList.add("active");break
;case"emergency-access-im-contact-for":
(0,i.SE)(t.emergencyAccess.newButton),t.emergencyAccess.orderSelectorTestators.classList.add("active")}
}else if("category-password-generator"===a)(0,i.l5)(t.passwordGenerator.orderSelector);else if("category-sharing-center"===a){
if((0,
i.l5)(t.dataItems.orderSelectorSharingCenter),null!==t.dataItems.orderSelectorSharingCenterAll&&null!==t.dataItems.orderSelectorSharingCenterWithMe&&null!==t.dataItems.orderSelectorSharingCenterByMe)switch(t.dataItems.orderSelectorSharingCenterAll.classList.remove("active"),
t.dataItems.orderSelectorSharingCenterWithMe.classList.remove("active"),
t.dataItems.orderSelectorSharingCenterByMe.classList.remove("active"),b){case"sharing-center-all-shared":
t.dataItems.orderSelectorSharingCenterAll.classList.add("active");break;case"sharing-center-shared-with-me":
t.dataItems.orderSelectorSharingCenterWithMe.classList.add("active");break;case"sharing-center-shared-by-me":
t.dataItems.orderSelectorSharingCenterByMe.classList.add("active")}
}else if(("category-folders"===a||"category-pinned"===a)&&((0,i.l5)(t.dataItems.orderSelectorSort),
null!==t.dataItems.orderSelectorSortPopular&&null!==t.dataItems.orderSelectorSortRecent&&null!==t.dataItems.orderSelectorSortAlphabet&&(t.dataItems.orderSelectorSortPopular.classList.remove("active"),
t.dataItems.orderSelectorSortRecent.classList.remove("active"),t.dataItems.orderSelectorSortAlphabet.classList.remove("active"),
"category-folders"===a)))switch(b){case"sort-order-popular":t.dataItems.orderSelectorSortPopular.classList.add("active");break
;case"sort-order-recent":t.dataItems.orderSelectorSortRecent.classList.add("active");break;case"sort-order-alphabet":
t.dataItems.orderSelectorSortAlphabet.classList.add("active")}}function K(a){const b=u.flexyGap.clientHeight-10;let c=0
;[7,9,8,10].forEach((a=>{x.has(a)||c++
})),!L()&&c<=1?z.classList.remove("rf-more-categories-collapsed","rf-more-categories-shown"):a?z.classList.add("rf-more-categories-collapsed"):L()?b>50*(c-1)?z.classList.remove("rf-more-categories-collapsed","rf-more-categories-shown"):z.classList.add("rf-more-categories-collapsed"):b<=0?z.classList.add("rf-more-categories-collapsed"):z.classList.remove("rf-more-categories-collapsed","rf-more-categories-shown")
}function L(){return z.classList.contains("rf-more-categories-collapsed")}function M(a){v.Start((async()=>{
z.offsetHeight<z.scrollHeight?z.classList.add("has-vertical-scroll"):z.classList.remove("has-vertical-scroll")}))
;const b=u.flexyGap.clientHeight-10;let c=a||!1;if(void 0===a&&(c=B),!c)return A.style.maxHeight="",void K(!1)
;const d=240,e=A.clientHeight;let f=E.scrollHeight;const g=(()=>{const a=E.cloneNode(!0);a.style.position="absolute",
a.style.top="0",a.style.left="-10px",a.style.width="1px",a.style.height="auto",a.style.maxHeight="none",a.style.display="block",
z.appendChild(a);const b=a.clientHeight;return a.remove(),b})();(0===f||g<f)&&(f=g),E.offsetWidth<E.scrollWidth&&(f+=16)
;let i=e+b
;i<f+40&&(K(!0),i=e+b,i<f+40&&i<d&&(i=d)),z.clientHeight<z.scrollHeight&&i>d&&(i=Math.max(d,i-(z.scrollHeight-z.clientHeight-10))),
A.style.maxHeight=(0,h.Md)(i);const j=Math.min(f,i-40);E.style.height=(0,h.Md)(j)}async function N(){
const a=await s.HasItems(2,"","has-bookmarks-from-navigator",null),b=r.GetItemTypeFilter(),e=q.GetOptions().ShowBookmarksAndLoginsTogether&&a
;let f=!1
;if(e!==d?f=!0:(!e||"item-type-filter-logins"!==b&&"item-type-filter-bookmarks"!==b)&&(e||"item-type-filter-logins-and-bookmarks"!==b)||(f=!0),
f){let c=b;d=e,e?("item-type-filter-logins"!==b&&"item-type-filter-bookmarks"!==b||(c="item-type-filter-logins-and-bookmarks"),
I(3,!1,null),I(5,!1,null),I(4,!0,null)):("item-type-filter-logins-and-bookmarks"===b&&(c="item-type-filter-logins"),
I(3,!0,null),I(5,a,null),I(4,!1,null)),"category-folders"===r.GetCategory()&&c!==b&&r.OnSelectItemTypeFilter(c)}c!==a&&(c=a,
d||I(5,a,null),a||"item-type-filter-bookmarks"!==r.GetItemTypeFilter()||r.OnSelectItemTypeFilter("item-type-filter-logins"))}
async function O(){const b=a.rf_data_pinned;b.IsUptodate()||await b.Update("pinned-items-visibility","",null)
;const c=b.GetData(),d=c&&0!==c.length||"category-pinned"===r.GetCategory();d!==f&&(f=d,I(2,d,null))}function P(){C.value="",(0,
i.SE)(D),G.onFilterChanged.CallAllSync(C.value)}function Q(a){
a&&(a.accounts.length>0||a.files.length>0?(u.sharingBadge.textContent=`${a.accounts.length+a.files.length}`,(0,
i.l5)(u.sharingBadge),u.categorySharingCenter.classList.add("badge-shown")):((0,i.SE)(u.sharingBadge),
u.categorySharingCenter.classList.remove("badge-shown")),
a.emergencyAccess.length>0?(u.emergencyAccessBadge.textContent=`${a.emergencyAccess.length}`,(0,i.l5)(u.emergencyAccessBadge),
u.categoryEmergencyAccess.classList.add("badge-shown")):((0,i.SE)(u.emergencyAccessBadge),
u.categoryEmergencyAccess.classList.remove("badge-shown")))}function R(){"stand-alone"===a.page_status.extensionMode&&(0,
k.fI)((async()=>{const b=await a.rf_api.service.GetSyncPendingItems(null);b&&Q(b)})())}function S(a){Q(a.pendingItems)}}
function p(a,b,c,g){const h=b.LocalizeString,j=(0,f.Uv)()
;let k,l,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S;const T=m("div",{
className:"rf-navigator noselect hidden"},p=m("div",{
className:"navigator-section-folders navigator-section navigator-section-with-separator hidden"},C=m("div",{
className:"selector-item rf-folders selector-with-dropdown",onclick:()=>a.OnSelectFoldersView(!1)},B=m("div",{
className:"dropdown-handler select-ext",onclick:b=>{if("category-folders"===a.GetCategory())a.OnSelectFoldersView(!0);else{
const b=a.GetController(2),c=b.ShowFolders();b.ShowFolders(!c),b.UpdateView(!1)}(0,d.OZ)(c.dataItems),b&&(b.preventDefault(),
b.stopPropagation())}}),m("div",{className:"select-image"}),m("div",{className:"select-title"},(0,
i.LX)(h("StartPage_HomeFolder"),""))),k=m("div",{className:"rf-folders-pane navigator-flexy-item narrow rf-dark hidden"
},m("div",{className:"rf-data-filter rf-input-box"},m("div",{className:"rf-filter"}),l=m("input",{type:"text",
placeholder:"Filter"}),n=m("div",{className:"rf-eraser"})),o=m("div",{className:"rf-folders-tree"}))),q=m("div",{
className:"navigator-section-pinned navigator-section navigator-section-with-separator hidden"},D=m("div",{
className:"selector-item category-pinned",onclick:()=>a.OnSelectCategory("category-pinned")},m("div",{className:"select-image"
}),m("div",{className:"select-title"},(0,i.LX)(h("StartPage_Category_Pinned"),"")))),r=m("div",{
className:"categories-selector navigator-section navigator-section-with-separator"},E=m("div",{
className:"selector-item category-all",onclick:()=>a.OnSelectItemTypeFilter("item-type-filter-all")},m("div",{
className:"select-image"}),m("div",{className:"select-title"},(0,i.LX)(h("StartPage_Category_All"),""))),F=m("div",{
className:"selector-item category-logins",onclick:()=>a.OnSelectItemTypeFilter("item-type-filter-logins")},m("div",{
className:"select-image"}),m("div",{className:"select-title"},(0,i.LX)(h("StartPage_Category_Logins"),""))),G=m("div",{
className:"selector-item category-bookmarks",onclick:()=>a.OnSelectItemTypeFilter("item-type-filter-bookmarks")},m("div",{
className:"select-image"}),m("div",{className:"select-title"},(0,i.LX)(h("StartPage_Category_Bookmarks"),""))),H=m("div",{
className:"selector-item category-logins-and-bookmarks hidden",
onclick:()=>a.OnSelectItemTypeFilter("item-type-filter-logins-and-bookmarks")},m("div",{className:"select-image"}),m("div",{
className:"select-title"},(0,i.LX)(h("StartPage_Category_LoginsAndBookmarks"),""))),I=m("div",{
className:"selector-item category-safenotes",onclick:()=>a.OnSelectItemTypeFilter("item-type-filter-safenotes")},m("div",{
className:"select-image"}),m("div",{className:"select-title"},(0,i.LX)(h("StartPage_Category_Safenotes"),"")))),v=m("div",{
className:"rf-identities navigator-section navigator-section-with-separator hidden"},w=m("div",{
className:"identity-select selector-item rf-create-identity hidden"},m("div",{className:"select-image"}),m("div",{
className:"select-title action-handler"},(0,i.LX)(h("StartPage_Create_Identity"),"")),m("div",{
className:"plus-image action-handler"})),x=m("div",{className:"identity-select selector-item rf-actual-identity hidden"
},A=m("div",{className:"select-image"}),m("div",{className:"select-title"},z=m("div",{className:"rf-actual-identity-name"},(0,
i.LX)(h("IdentityType_MyIdentity"),"")))),y=m("div",{className:"identity-select selector-item rf-category-identity hidden"
},m("div",{className:"select-image"}),m("div",{className:"select-title"},m("div",{className:"rf-actual-identity-title"},(0,
i.LX)(h("StartPage_Category_Identities"),""))))),S=m("div",{className:"navigator-flexy-gap navigator-flexy navigator-section"
}),s=m("div",{className:"navigator-section-why-roboform navigator-section hidden"},J=m("div",{
className:"selector-item category-why-roboform hidden",onclick:()=>a.OnSelectCategory("category-why-roboform")},m("div",{
className:"select-image"}),m("div",{className:"select-title"},(0,i.LX)(h("StartPage_Category_WhyRoboForm"),"")))),t=m("div",{
className:"rf-more-categories navigator-section navigator-section-with-separator separator-top"},m("div",{
className:"rf-more-categories-popup"},L=m("div",{className:"selector-item password-generator-select",onclick:()=>{
T.classList.remove("rf-more-categories-shown"),a.OnSelectCategory("category-password-generator")}},m("div",{
className:"select-image"}),m("div",{className:"select-title"
},(0,i.LX)(h("StartPage_Category_PasswordGenerator"),""))),K=m("div",{
className:"selector-item authenticator-select "+(j?"":"hidden"),onclick:()=>{T.classList.remove("rf-more-categories-shown"),
a.OnSelectCategory("category-authenticator")}},m("div",{className:"select-image"}),m("div",{className:"select-title"},(0,
i.LX)(h("StartPage_Category_Authenticator"),""))),M=m("div",{className:"selector-item security-center-select",onclick:()=>{
T.classList.remove("rf-more-categories-shown"),a.OnSelectCategory("category-security-center")}},m("div",{
className:"select-image"}),m("div",{className:"select-title"},(0,i.LX)(h("StartPage_Category_SecurityCenter"),""))),N=m("div",{
className:"selector-item sharing-center-select",onclick:()=>{T.classList.remove("rf-more-categories-shown"),
a.OnSelectCategory("category-sharing-center")}},m("div",{className:"select-image"}),m("div",{className:"select-title"},(0,
i.LX)(h("StartPage_Category_SharingCenter"),"")),O=m("div",{className:"category-badge hidden"})),P=m("div",{
className:"selector-item emergency-access-select",onclick:()=>{T.classList.remove("rf-more-categories-shown"),
a.OnSelectCategory("category-emergency-access")}},m("div",{className:"select-image"}),m("div",{className:"select-title"},(0,
i.LX)(h("StartPage_Category_EmergencyAccess"),"")),m("div",{className:"rf-events-count select-ext hidden"}),Q=m("div",{
className:"category-badge hidden"}))),R=m("div",{className:"selector-item more-categories-select",
onclick:()=>a.GetController(1).ToggleMoreCategories()},m("div",{className:"select-image"}),m("div",{className:"select-title"
},(0,i.LX)(h("StartPage_Category_MoreCategories"),"")))),u=m("div",{
className:"navigator-section-upgrade navigator-section hidden"}));(0,e.YC)(B,h("StartPage_ShowAllFolders_Tip")),(0,
e.YC)(D,h("StartPage_Category_Tip_Pinned")),(0,e.YC)(E,h("StartPage_Category_Tip_All")),(0,
e.YC)(F,h("StartPage_Category_Tip_Logins")),(0,e.YC)(G,h("StartPage_Category_Tip_Bookmarks")),(0,
e.YC)(H,h("StartPage_Category_Tip_LoginsAndBookmarks")),(0,e.YC)(I,h("StartPage_Category_Tip_Safenotes")),(0,
e.YC)(J,h("StartPage_Category_WhyRoboForm")),(0,e.YC)(L,h("StartPage_Category_PasswordGenerator")),(0,
e.YC)(K,h("StartPage_Category_Authenticator")),(0,e.YC)(M,h("StartPage_Category_SecurityCenter")),(0,
e.YC)(N,h("StartPage_Category_SharingCenter")),(0,e.YC)(P,h("StartPage_Category_EmergencyAccess")),(0,
e.YC)(R,h("StartPage_Category_Tip_MoreCategories")),g.isPassgenOnStartPageSupported||(0,i.SE)(L);const U={main:T,foldersPane:k,
dataFilterInput:l,dataFilterEraser:n,foldersTree:o,foldersDropdownHandler:B,identity:{section:v,createItem:w,actualItem:x,
categoryItem:y,actualItemName:z,actualItemImage:A,actualItemSharing:null,actualItemMenu:null},sectionFolders:p,sectionPinned:q,
sectionCategories:r,sectionWhyRoboForm:s,sectionMoreCategories:t,sectionUpgrade:u,categoryFolders:C,categoryPinned:D,
categoryAll:E,categoryLogins:F,categoryBookmarks:G,categoryLoginsAndBookmarks:H,categorySafenotes:I,categoryWhyRoboForm:J,
categoryAuthenticator:K,categoryPasswordGenerator:L,categorySecurityCenter:M,categorySharingCenter:N,sharingBadge:O,
categoryEmergencyAccess:P,emergencyAccessBadge:Q,categoryMoreCategories:R,flexyGap:S,upgradeSelect:null}
;return c.mainFrame.insertBefore(T,c.navigatorStub),c.navigatorStub.remove(),c.navigator=U,U}},401:function(a,b,c){"use strict"
;c.d(b,{O:function(){return X}});c(63452)
;var d=c(34842),e=c(13064),f=c(3342),g=c(95890),h=c(48658),i=c(83645),j=c(47048),k=c(84428),l=c(42160),m=c(37042),n=c(36786),o=c(41107),p=c(80794),q=c(26227),r=c(64737),s=c(48141),t=c(16494),u=c(34560),v=c(58860),w=c(25057),x=c(55195),y=c(4601),z=c(37367),A=c(85e3),B=c(93075),C=c(38221),D=c(47333),E=c(83382),F=c(4234),G=c(61211),H=c(54811),I=c(12131),J=c(71796),K=c(79999),L=c(87450),M=c(98539),N=c(31173),O=c(88262),P=c(13113),Q=c(78440),R=c(4153),S=c(70026),T=c(95399),U=c(69893),V=c(13117),W=c(97514)
;async function X(a,b,c,X,Y,Z,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an){
const ao=a,ap=b,aq=c,ar="use-native"===a.extensionMode?Object.assign(Object.assign({},X),{ShowLoginUI:async function(a){
aT.GetController(0).SetShowNativeLoginDialog(X.ShowLoginUI),aT.ActivateControllers([0]),aT.UpdateViews(!0)},
OpenPaymentPage:async(a,b)=>aY(a,X,b),OpenAdminCenter:aZ,OpenSignUpEnterprise:async a=>a0(a),OpenRFOPage:a1
}):Object.assign(Object.assign({},X),{ShowLoginUI:async function(a){aT.ActivateControllers([0]),aT.UpdateViews(!0)},
ShowSharedFolderDialog:async function(a){const b=await aq.data.GetInfo(a,1,null);await(0,i.Ng)(b)},
ShowSharedFileSettings:async function(a){const b=await aq.data.GetInfo(a,1,null);await(0,i.Gl)(b)},
ShowSendFileDialog:async function(a){if(0===a.length)return;const b=await aq.data.GetInfo(a[0],1,null);await(0,i.wJ)(b,null)},
ShowCreateSharedFolderDialog:async function(){const a=await(0,i.sJ)(!1);if(null!==a){const b=(0,P.fA)(a);(0,
h.Xe)(b).Invalidate(),aT.SetState("state-change-event-folder-or-group-created",{category:"category-folders",folder:a})}},
ShowCreateGroupDialog:async function(){const a=await(0,i.sJ)(!0);if(null!==a){const b=(0,P.fA)(a);(0,h.Xe)(b).Invalidate(),
aT.SetState("state-change-event-folder-or-group-created",{category:"category-folders",folder:a})}},
ShowRenameSharedFolderDialog:async function(a){try{const b=await aq.data.GetInfo(a.path,1,null),c=await(0,z.gk)(b,aN,aT,av)
;if("category-folders"===aT.GetCategory()&&aT.GetFolder()===b.path){aT.SetState("state-change-event-selected-folder-renamed",{
category:"category-folders",folder:c});const a=(0,P.fA)(c);(0,h.Xe)(a).Invalidate()}}catch(b){}},
OpenPaymentPage:async(a,b)=>aY(a,X,b),OpenAdminCenter:aZ,OpenSignUpEnterprise:async a=>a0(a),OpenRFOPage:a1
}),as=Y,at=af,au=aj,av=b,aw=al,ax=am,ay=ak,az=null!=Z?Z:(0,r.$9)({receivedFiles:!0,groups:!0,regularSharedFolders:!0
},aq.data,aq.securityWarningsManager,as,(()=>aT),an),aA=(0,S.t)();aq.rfTemplates=(0,J.P4)({GetServerTemplates:async function(){
var a;const b=`rf-templates.json?vvv=${(0,W.RD)()}`,c={};return null!==(a=await aA.GetData(b,{maxAgeSec:86400,default:c,
onGetData:async a=>(0,O.$)(b,a,an)}))&&void 0!==a?a:c},GetEnterpriseTemplates:async function(){const a=aW.RfTemplates||""
;return(0,J.mG)(a)},GetCustomTemplates:async function(){if(!ao.staging)return{};return window.RfCustomTemplates||{}},
GetDisableCommonTemplates:async function(){return aW.DisableCommonTemplates||!1}});const aB=aa,aC=ab,aD=(0,
B._)(aq.service,an),aE=(0,x.NF)(aq),aF=(0,x.ZK)(aq),aG=(0,Q.SI)(300),aH=(0,Q.tG)(),aI=(0,Q.SI)(300),aJ=(0,Q.tG)(),aK=(0,
o.rH)(ao.browserType,ap),aL=(0,D.au)(aq.data,av);aL.Init();const aM=(0,H.I9)(aq.data,aq.service,aq.rfo,ay,av);aM.Init()
;const aN=function(){const a=(0,z.v9)(aq,ar,ap,ao,aL,av),b=a.Share;return a.Share=async function(a){try{
const c=await async function(a){if(!a.received&&!a.granted)return a;const b=a.path,c=(0,P.Y0)(b);if(!c)return a;const d=await(0,
h.VO)(c);if(d)return d;return a}(a);return b(c)}catch(c){}},a}();let aO=null,aP=!1,aQ=null,aR=ac?(0,e.Nt)(ac):null;await a6()
;const aS=await(0,d.V)(av,ao),aT=(0,e.fN)({m_rf_api:aq,m_extension_storage:ae,m_rf_commands:ar,m_ui_commands:aN,
m_rf_page_status:ao,m_rf_cached_data_info:aE,m_initial_identity_provider:aM,m_page_preferences:at,GetNewMenu:()=>bk,
m_view_api:b,m_rf_sso_login:aB,m_rf_login_method:aC,m_browser_language_info:ay,m_localization:av,m_rng:ax,m_http:an
},aS,aR&&aR.setup||null,aR&&aR.view||null,aR&&aR.editor||null,aR&&aR.settings||null,aR&&aR.sharing||null);aR=aR&&aR.new?{
new:aR.new}:aR&&aR.import?{import:aR.import}:aR&&aR.purchase?{purchase:aR.purchase}:aR&&aR.adminCenter?{
adminCenter:aR.adminCenter}:aR&&aR.signupEnterprise?{signupEnterprise:aR.signupEnterprise}:null,
aT.onPageStatusChanged.Add((async function(){const b=aq.service.GetGlobalStatus();b.m_connected_to_server&&!aU&&(aU=!0,
await a4());b.m_storage_connected&&ao.showUsageInfo&&!aQ&&await a5();if(b.m_storage_connected&&b.m_logged_in){if(!aR){
if(ad)return;const b=await c.options.Get({AccountEnterprise:!1,AccountCompanyAdmin:!1,AccountGroupManager:!1})
;return b.AccountEnterprise&&(b.AccountCompanyAdmin||b.AccountGroupManager)?void("local"===a.type?window.location.replace(`${window.location.origin}/admin-center.html`):(window.location.replace(`${window.location.origin+window.location.pathname}#admin-center`),
window.location.reload())):void 0}const b=aR;aR=null,bt(b,!1)}}));let aU=!1,aV={},aW={};await async function(){
aT.UpdatePage(!0),aq.data.onDataChanged.Add(a2),aq.options.AddOnChangeListener(a3),aq.policies.AddOnChangeListener(a3)}(),
ap.onNotificationFromBackgroundScript.Add((function(a,...b){if("DataFromBackground"===a){{const a=b[0],c=b[1];(0,
Q.uT)(a7(a,c,!1),"_OnNotificationFromBackgroundScript:DataFromBackground")}return}}));const aX=await(0,L.Z)(ap,null)
;async function aY(a,b,c){if("local"===ao.type)await b.OpenPaymentPage(a,c);else{const b=aq.service.GetGlobalStatus()
;if(!b.m_storage_connected)throw(0,U.ZU)(U.yI,"Disconnected");if(!b.m_logged_in)throw I.SP
;window.location.replace(`${window.location.origin+window.location.pathname}#payment-page=${a}`),window.location.reload()}}
async function aZ(b,c){var d,e;if("stand-alone"===a.mode)await f();else{
const g=null!==(d=await(null==ae?void 0:ae.GetValue("AdminCenterPage",null)))&&void 0!==d?d:null;if(null===g){
new Date(2024,6,1).getTime()-1e3*(b&&null!==(e=b.companyCreatedTime)&&void 0!==e?e:(0,
T.t2)())>0?await ar.OpenRFOPage(null,D.q2,{newTab:!0},null):"local"===a.type?await X.OpenAdminCenter(b,c):await f()
}else 1===g?"local"===a.type?await X.OpenAdminCenter(b,c):await f():await ar.OpenRFOPage(null,D.q2,{newTab:!0},null)}
async function f(){const c=aq.service.GetGlobalStatus();if(!c.m_storage_connected)throw(0,U.ZU)(U.yI,"Disconnected")
;if(!c.m_logged_in)throw I.SP;{const c=b&&b.view?`#admin-center&ac-view=${b.view}`:"#admin-center&ac-view=dashboard"
;if("stand-alone"===a.mode)window.location.assign(c),window.location.reload();else{
const a=`${window.location.origin+window.location.pathname}${c}`,b=window.open(a,"_admincenter")
;null==b||b.window.location.reload()}}}}async function a0(a){var b
;const c=null!==(b=null==a?void 0:a.userType)&&void 0!==b?b:"new",d=aq.service.GetGlobalStatus()
;if(!d.m_storage_connected)throw window.location.replace(`${window.location.origin+window.location.pathname}#signup-enterprise&business-user=new`),
window.location.reload(),(0,U.ZU)(U.yI,"Disconnected")
;if(!d.m_logged_in)throw window.location.replace(`${window.location.origin+window.location.pathname}#signup-enterprise&business-user=new`),
window.location.reload(),I.SP
;window.location.replace(`${window.location.origin+window.location.pathname}#signup-enterprise&business-user=${c}`),
window.location.reload()}async function a1(b,c,d,e){if("stand-alone"!==a.mode)await X.OpenRFOPage(b,c,d,e);else{
const b=a.staging?`https://online-test.roboform.com/site/account/manage?type=${c||"dashboard"}`:`https://online.roboform.com/site/account/manage?type=${c||"dashboard"}`
;window.open(b,"_blank")}}function a2(a){let b=!1,c=!1;for(let d=0;d<a.length;d++){switch(a[d].event){case 2:b=!0;break;case 10:
case 11:aT.OnLogOut(),b=!0;break;case 14:c=!0}}if(ao.showUsageInfo){let b=!1;for(let c=0;c<a.length;c++){switch(a[c].event){
case 2:case 3:case 12:b=!0}}b&&aH.Start((async a=>{await(0,Q.Gu)(100,a);await a5()&&aT.UpdatePage(!0)}))}aF.OnChanges(a),
aT.GetController(5).OnChanges(a),aT.GetController(9).OnChanges(a),b?aT.UpdatePage(!0):aG.Start((async()=>{aT.UpdatePage(!1)})),
c&&aI.Start((async()=>{(0,y.kI)()}))}function a3(){aJ.Start((async a=>{await(0,Q.Gu)(300,a),await a4(),aT.UpdatePage(!0)}))}
async function a4(){var a;const b={ShowBookmarksAndLoginsTogether:!1,SyncIsOn:!1,AccountCompanyAdmin:!1,AccountGroupManager:!1,
AccountEnterprise:!1,LocalizationFile:"",DontShowCompromisedDataIcons:!1},c={SelfHostedServer:!1,DisableCreateLogins:!1,
NoPasscards:!1,DisableCreateBookmarks:!1,NoBookmarks:!1,DisableCreateIdentities:!1,NoIdentities:!1,DisableCreateContacts:!1,
NoContacts:!1,DisableCreateSafenotes:!1,NoSafenotes:!1,DisableNonGroupData:!1,DisableSharing:!1,DisableEmergencyAccess:!1,
ShowPasswordsAsStarsInEditor:!1,DisableLogoff:!1,RfTemplates:"",DisableCommonTemplates:!1};try{aV=await aq.options.Get(b),
aW=await aq.policies.Get(c),aU=!0}catch(e){aV=b,aW=c}await a6()
;const d=null!==(a=aV.DontShowCompromisedDataIcons)&&void 0!==a&&a;aP!==d&&(aP=d,aI.Start((async()=>{(0,y.kI)()}))),(0,p.cx)({
m_rf_options:aV,m_rf_policies:aW})}async function a5(){aQ=aQ||new Map;const a={mru:{},mruExt:{},mruExt2:{}};try{
const b=await aq.data.GetFile(G.dc,"utf16",null);a.mru=JSON.parse(b)||{}}catch(c){a.mru={}}try{
const b=await aq.data.GetFile(G.LN,"utf16",null);a.mruExt=JSON.parse(b)||{}}catch(c){a.mruExt={}}try{
const b=await aq.data.GetFile(G.l$,"utf16",null);a.mruExt2=JSON.parse(b)||{}}catch(c){a.mruExt2={}}let b=!1;try{const c=aQ,d=(0,
G.uI)();d.Load(a);const e=d.GetItemsUsageInfoDetails(null),f=new Set(c.keys());if(e.forEach((a=>{const d=a.path,e=c.get(d)
;e&&(0,R.XM)(e,a)||(b=!0,c.set(d,a),f.delete(d))})),f.size>0){b=!0;for(const a of f)c.delete(a)}}catch(c){(0,
V.Rm)("!!! UpdateItemsUsageDetails failed",c),aQ.clear(),b=!0}return b}async function a6(){
const a=await aq.options.GetValue("LocalizationFile","");if(aO!==a){aO=a;const b=(0,E.p3)(aO)||"";let c=(0,E.Mi)(b)
;c||(c="extension-legacy"===ao.mode||"extension-v9"===ao.mode&&"use-native"===ao.extensionMode?"en":(0,N.Jy)()),
await av.SetLanguageTag(c,null),await(0,M.oz)(document.body,av)}}async function a7(a,b,c){if((b||!a)&&!(a=await(0,
L.Z)(ap,null)))return;const d=(0,e.Nt)(a);if(d)if(d.view)aT.RestoreState(d.view),
aT.UpdateViews(!1);else if(d.setup)aT.StartAccountSetup(d.setup);else{const a=aq.service.GetGlobalStatus()
;a.m_storage_connected&&a.m_logged_in&&(aR=null,bt(d,c))}}aX&&await a7(aX,!1,!0),
window.addEventListener("visibilitychange",(()=>{aT.OnPageVisibilityChanged(document.visibilityState)}))
;const a8=39,a9=[1,2,3,5,6,7],ba=(0,x.Xp)({UpdateData:async(a,b)=>{const c=await aq.usageInfo.GetUsageInfoList(0,1,b)
;for(let d=0;d<c.length;d++)c[d]=aE.GetDataInfo(c[d].path)||c[d],c[d].favorite=!0;return(0,x.lX)(aE,c,a9,32)},
onDataChanged:aq.data.onDataChanged,ShouldChangeCauseUpdate:(a,b)=>(0,x.yJ)(b,a9)});function bb(a){return(0,x.Xp)({
UpdateData:async(b,c)=>(ba.IsUptodate()||await ba.Update(a,b,c),ba.GetData()||[]),onDataChanged:aq.data.onDataChanged,
ShouldChangeCauseUpdate:(a,b)=>(0,x.yJ)(b,a9)})}const bc=(0,x.Xp)({UpdateData:async(a,b)=>{
const c=await aq.usageInfo.GetUsageInfoList(0,3,b);return(0,x.lX)(aE,c,null,32)},onDataChanged:aq.data.onDataChanged,
ShouldChangeCauseUpdate:(a,b)=>(0,x.yJ)(b,null)}),bd=(0,x.Xp)({UpdateData:async(a,b)=>{const c=[];await(0,
H.s_)(aq.data,(async a=>{if(1===a.type)try{const d=await aq.data.GetDataItem(a.path,4,null,b);(0,F.JG)(d)&&c.push(a)}catch(d){
(0,U.au)(d)}}),{deep:!0,parts:a8},b);return(0,x.lX)(aE,c,[1],a8).sort(((a,b)=>(0,P.Gx)((0,P._p)(a.path),(0,P._p)(b.path))))},
onDataChanged:aq.data.onDataChanged,ShouldChangeCauseUpdate:(a,b)=>(0,x.yJ)(b,[1])}),be=(0,x.Xp)({UpdateData:async(a,b)=>{
const c=await aq.usageInfo.GetUsageInfoList(0,0,b);return(0,x.lX)(aE,c,null,32)},onDataChanged:aq.data.onDataChanged,
ShouldChangeCauseUpdate:(a,b)=>(0,x.yJ)(b,null)}),bf=(0,x.Xp)({UpdateData:async(a,b)=>{if(a===F.xG){return{path:F.xG,type:5}}
const c=await aq.data.GetInfo(a,a8,b);return aE.UpdateDataInfo(c,a8),c},onDataChanged:aq.data.onDataChanged,
ShouldChangeCauseUpdate:(a,b)=>(0,x.Ie)(b,a)}),bg=(0,x.Xp)({UpdateData:async(a,b)=>{if(a===F.xG){
const a=await aM.GetInitialIdentity(null);return(0,D.eQ)(a,{})}return await aq.data.GetDataItem(a,4,null,b)},
onDataChanged:aq.data.onDataChanged,ShouldChangeCauseUpdate:(a,b)=>(0,x.Ie)(b,a)}),bh=(0,K.AZ)(an);(0,o.AV)({
m_main_view_html_elements:aS}),(0,z.g_)({m_rf_cached_data_info:aE,m_localization:av}),(0,i.wP)({m_rf_api:aq,m_rf_cache:aF,
m_rf_cached_data_info:aE,GetOptions:()=>aV,m_localization:av}),(0,h.CE)({m_rf_api:aq,m_ui_commands:aN,m_rf_manager:aT,
m_rf_cached_data_info:aE,m_rf_cache:aF,GetOptions:function(){return aV},GetPolicies:function(){return aW},
m_rf_data_item_info_parts:a8,m_localization:av});const bi=(0,m.b)(aq),bj=(0,w.I)(aT,aN,aE,bi,av,aS),bk=(0,n.IB)({m_rf_api:aq,
m_rf_commands:ar,m_rf_page_status:ao,m_ui_commands:aN,m_rf_manager:aT,m_rf_items_existance:bi,GetOptions:function(){return aV},
GetPolicies:function(){return aW},m_identity_view_structure_loader:bh,m_initial_identity_provider:aM,m_localization:av
},aS.newMenu);(0,y.C3)({m_rf_api:aq,m_rf_commands:ar,m_rf_page_status:ao,m_ui_commands:aN,m_rf_manager:aT,
m_rf_items_existance:bi,m_data_item_display_name_provider:aL,m_rf_cached_data_info:aE,m_rf_cache:aF,GetOptions:()=>aV,
GetPolicies:()=>aW,m_rf_cached_data_images:aD,m_rf_new_menu:bk,m_rf_pinned_items_types:a9,AllItemsPerFolderData:h.Xe,
m_items_usage_details:ao.showUsageInfo?aQ:null,m_rf_items_multiselect:bj,m_breach_mon_service:as,m_rf_password_audit_service:az,
m_clipboard_cleaner:aK,m_clipboard:aw,m_identity_view_structure_loader:bh,m_localization:av,m_main_view_html_elements:aS}),(0,
n.zd)({rf_page_status:ao,rf_cached_data_info:aE,GetOptions:function(){return aV},GetPolicies:function(){return aW}})
;const bl=(0,f.P)(an)
;aT.AddController(0,(0,f.CR)(ap,aq,ar,aC,ae,ao,aT,aE,aS,bl,aR&&void 0!==aR.signupEnterprise||!1,ag,ah,ai,au,ay,av,aw)),(0,
g.x)(aT,av,aS,ao),aT.AddController(2,(0,h.Ue)({m_ui_commands:aN,m_rf_manager:aT,m_rf_new_menu:bk,m_rf_cached_data_info:aE,
m_localization:av},aS)),aT.AddController(1,(0,g.E)({rf_api:aq,rf_manager:aT,page_status:ao,
rf_data_pinned:bb("navigator-pinned-items"),rf_items_existance:bi,GetOptions:()=>aV,GetEmergencyAccess:()=>bq,localization:av
},aS)),aT.AddController(3,(0,k.F)({m_rf_api:aq,m_ui_commands:aN,m_rf_manager:aT,page_status:ao,m_rf_new_menu:bk,
m_rf_items_existance:bi,m_data_item_display_name_provider:aL,m_rf_cached_data_info:aE,AllItemsPerFolderData:h.Xe,
m_rf_data_pinned:bb("data-list-pinned-items"),m_rf_data_popular:bc,m_rf_data_recent:be,m_rf_data_totp:bd,
m_start_page_preferences:at,m_localization:av},aS));let bm="",bn=null;async function bo(a,b,c,d){if(8===b.type){const e=(0,
h.Xe)(b.path);e.IsUptodate()||await e.Update(a,b.path,d);const f=e.GetData()||[]
;for(const a of f)if(8!==a.type&&bp(a.path,c))return!0;for(const b of f)if(8===b.type){if(await bo(a,b,c,d))return!0}return!1}
return bp(b.path,c)}function bp(a,b){const c=(0,F.em)(a);return b.test(c)}aT.GetController(1).onFilterChanged.Add((a=>{
if(bm!==a){if(bm=a,a){const b=new RegExp(a,"i");bn={DoesItemPathMatchFilter:async(a,c,d)=>bo(a,c,b,d),GetDisplayText:()=>a}
}else bn=null;aT.GetController(3).SetDataItemFilter(bn),aT.GetController(2).SetDataItemFilter(bn),(0,h.NL)(bm,aS.dataItems)}})),
aT.AddController(4,(0,j.B)({m_rf_api:aq,m_ui_commands:aN,m_rf_manager:aT,m_rf_data_popular:bc,
m_data_item_display_name_provider:aL,m_initial_identity_provider:aM,m_rf_cached_data_info:aE,m_rf_page_status:ao,
OnNew:async a=>bk.CreateNew("new-identity",a,!0)},(0,R.TT)(aS.navigator).identity,av)),aT.AddController(5,(0,p.uY)({
m_ui_commands:aN,m_rf_manager:aT,m_rf_service:aq.service,m_rf_data_editor_info:bf,m_rf_data_editor_data:bg,
m_identity_view_structure_loader:bh,m_localization:av,m_rf_cache:aF,m_sharing_api:c.sharing,m_clipboard:aw
},aS.main,aS.editorScreen)),(0,p.Dz)({m_rf_page_status:ao,m_rf_api:aq,m_rf_commands:ar,m_ui_commands:aN,m_rf_manager:aT,
m_rf_cached_data_info:aE,m_rf_items_existance:bi,m_data_item_display_name_provider:aL,m_initial_identity_provider:aM,
m_rf_options:aV,m_rf_policies:aW,m_page_preferences:at,m_breach_mon_service:as,password_audit_service:az,
m_rf_data_item_images:aD,IsStillActual:function(){return aT.GetController(5).IsStillActual()},m_clipboard_cleaner:aK,
m_clipboard:aw,m_view_api:b,m_localization:av,m_main_view_html_elements:aS,
m_enable_password_strength_details:a.isPasswordDetailsSupported}),(0,t.ph)({m_view_messaging:ap,m_browser_type:ao.browserType,
m_rf_api:aq,m_rf_manager:aT,m_ui_commands:aN,m_rf_items_existance:bi,m_cached_data_images:aD,m_localization:av}),
aT.AddController(6,(0,s.gY)()),aT.AddController(7,(0,s.DB)()),aT.AddController(8,(0,q.Q)({rf_api:aq,rf_manager:aT,
GetPolicies:function(){return aW},GetEmergencyAccess:function(){return bq},page_status:ao,localization:av},aS));const bq=(0,
q.g)({rf_api:aq,rf_commands:ar,rf_manager:aT,page_status:ao,OnOpenEditor:aT.OnOpenEditor,GetDataItemInfo:aE.FetchDataInfo,
localization:av},aS.emergencyAccess);aT.AddController(13,(0,A.v)({m_rf_api:aq,m_rf_manager:aT,m_ui_commands:aN,
m_localization:av,m_http:an,m_rng:ax,m_view_api:b,m_page_status:ao,m_clipboard_cleaner:aK},aS)),aT.AddController(9,(0,r.I0)({
m_rf_api:aq,m_breach_mon_service:as,m_password_audit_service:az,m_rf_manager:aT,m_ui_commands:aN,m_rf_cache:aF,
m_rf_items_multiselect:bj,m_rf_new_menu:bk,GetOptions:async()=>aV,GetPolicies:async()=>aW,m_page_preferences:at,
m_localization:av
},aS.securityCenter,aS.files)),aS.loginCopyright.textContent="Copyright (C) 1999-2024 Siber Systems Inc. All Rights Reserved.",
document.body.addEventListener("mousedown",(a=>{document.querySelectorAll("#v8 .rf-data-view .rf-items .selected").forEach((a=>{
a.classList.remove("selected")}));const b=a.target
;(0,o.ve)()&&null!==(0,C.Yw)(b,".rf-data-view .rf-view-style-item,.rf-data-view-header .selector-item, .rf-items .rf-item,.rf-search-list .rf-item,.rf-search,.rf-account,.rf-new-menu,.rf-navigator .selector-item,.rf-navigator .rf-item-folder,.rf-button,.rf-cmdbutton")&&(0,
o.C1)(),
null===(0,C.LP)(b,"#v8 .rf-view-style-popup")&&null===(0,C.LP)(b,"#v8 .rf-view-style-selector")&&aS.dataItems.header.classList.remove("rf-view-style-popup-shown"),
null===(0,C.LP)(b,"#v8 .rf-more-categories-popup")&&null===(0,C.LP)(b,"#v8 .more-categories-select")&&(0,
R.TT)(aS.navigator).main.classList.remove("rf-more-categories-shown"),(0,C.LP)(b,".dropdown-handler")||(0,
C.LP)(b,".dropdown-popup")||0===a.button&&(0,
C.Yw)(b,".shown-popup-menu")&&b.matches(".rf-item-menu")||0===a.button&&b.matches(".rf-command-more-commands")||(0,o.b2)(!1)}))
;const br=[{key:"F",auxKeys:["ctrlKey"],action:()=>((0,s.o5)(!0),!0)},{key:"S",auxKeys:["ctrlKey"],action:()=>!0}]
;document.addEventListener("keydown",(a=>{for(let b=0;b<br.length;b++){const c=br[b];if(c.keyCode){
if(a.which===c.keyCode)return a.preventDefault(),!c.action()}else if(c.key){if(a.keyCode!==c.key.charCodeAt(0))continue
;const b=c.auxKeys;if(!b)return a.preventDefault(),!c.action();for(let d=0;d<b.length;d++)if(a[b[d]])return a.preventDefault(),
!c.action()}}return!0})),(0,l.r)(aq,ar,aN,aT,(()=>aV),(()=>aW),at,aS,ao,b,av),aT.AddController(10,(0,
e.m_)(aq,ar,aT,ao,bl,ae,ay,b,av,aw,aS));const bs="use-native"===ao.extensionMode?()=>{(0,Q.fI)(ar.ShowImportDialog(!0))}:null
;function bt(a,b){if(a.settings)aT.OpenSettings(a.settings.section);else if(a.editor)(0,
Q.fI)(aT.OpenEditorFromBrowserExtension(a.editor));else if(a.sharing)(0,
Q.fI)(aT.OpenSharingDialogFromBrowserExtension(a.sharing,b));else if(a.new){const b=a.new;(0,
Q.fI)(aT.CreateNewItemFromBrowserExtension(b.item,b.folderPath||"",b.url))}else a.purchase?(0,
Q.fI)(ar.OpenPaymentPage(a.purchase,null)):a.adminCenter?(0,Q.fI)(ar.OpenAdminCenter({view:a.adminCenter.view,
companyCreatedTime:a.adminCenter.companyCreatedTime},null)):a.signupEnterprise?(0,Q.fI)(ar.OpenSignUpEnterprise({
userType:a.signupEnterprise},null)):a.import&&(0,Q.fI)(aT.OpenImportFromBrowserExtension())}if(aT.AddController(11,(0,u.q)({
rf_api:aq,rf_new_menu:bk,parentFrame:aS.mainFrame,localization:av},{on_show_native_import_dialog:bs,OnStart:()=>{const a=(0,
T.t2)();(0,Q.fI)(at.SetValue("StartPage.StepByStepGuideShownTimestamp",(0,R.bf)(a)))},OnShowPinExtensionStep:()=>{const a=(0,
T.t2)();(0,Q.fI)(at.SetValue("StartPage.PinExtensionShownTimestamp",(0,R.bf)(a)))}})),aT.AddController(12,(0,v.n)({rf_api:aq,
rf_manager:aT,localization:av},aS.files,aS.whyRoboForm)),aS.dataItems.data.addEventListener("scroll",(()=>{(0,
o.DN)(aS.dataItems.data)&&(0,o.b2)(!1)})),aS.dataItems.data.addEventListener("contextmenu",(a=>{
if("category-folders"!==aT.GetCategory())return a.preventDefault(),!1;const b=(0,o.Eo)(a),c=aT.GetFolder()||""
;if(!c)return a.preventDefault(),!1;const d=a.target;return!d||null===(0,C.LP)(d,".rf-item")&&null===(0,
C.LP)(d,".rf-list-item-row")?((0,Q.fI)((async()=>{const a=await aE.FetchDataInfo(c);await(0,y.mC)(a,aS.dataItems.data,b)})()),
a.preventDefault(),!1):(a.preventDefault(),!1)})),(0,s.xp)({m_ui_commands:aN,m_rf_api:aq,m_rf_manager:aT,m_items_multiselect:bj,
m_data_collector:(0,h.nj)("search",aT.GetController(6).GetIsStillActual()),m_data_item_display_name_provider:aL,
m_data_item_info_parts:a8,m_main_view_html_elements:aS,m_search_pane_view_components:aS.searchPane,
m_search_results_view_components:aS.searchResults,ShowSearchResults:function(){
aT.IsSearchResultShown()||(aT.ActivateControllers([6,7],[3,8,9]),setTimeout((()=>{aT.UpdateViews(!1)}),0))},
HideSearchResults:function(){aT.ActivateControllers([aT.GetActiveDataControllerId(aT.GetCategory())],[7]),aT.UpdateViews(!0)},
localization:av}),window.ResizeObserver){new ResizeObserver((()=>(0,y.gt)())).observe(aS.files)
}else window.addEventListener("resize",y.gt)}},34842:function(a,b,c){"use strict";c.d(b,{V:function(){return i}})
;var d=c(41107),e=c(11834),f=c(31173),g=(c(13117),c(91764)._);const h="start-page-v8.css";async function i(a,b){var c,i;await(0,
f.eA)(),await(0,d.D4)(h);const as=function(a){
let b,c,d,e,f,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au
;const av=g("div",{id:"v8",className:"light-theme"},b=g("div",{className:"rf-main-header hidden"},g("a",{
className:"rf-header-logo",href:"https://start.roboform.com",title:"RoboForm"}),q=g("div",{className:"rf-search"},r=g("div",{
className:"rf-search-box"},g("div",{className:"rf-search-box-header"}),s=g("div",{className:"rf-search-box-edit"},t=g("input",{
type:"text",placeholder:"Search RoboForm"})),u=g("div",{className:"rf-search-box-count"}),v=g("div",{
className:"rf-search-box-eraser"}),w=g("div",{className:"rf-search-box-arrow"})),x=g("div",{className:"rf-search-dropdown"
}),y=g("div",{className:"rf-progress"},g("div",{className:"rf-progress-runner hidden"}))),g("div",{className:"rf-flex-gap"
}),m=g("div",{className:"rf-start-guide rf-cmdbutton"}),D=g("div",{className:"rf-account noselect"},E=g("div",{
className:"rf-account-box selector-with-dropdown"},G=g("div",{className:"selector-image"}),F=g("div",{className:"selector-title"
}),H=g("div",{className:"dropdown-image"})),I=g("div",{className:"rf-account-menu rf-fade-in rf-fade-out hidden"}),J=g("div",{
className:"rf-modal-screen rf-account-dropdown-screen rf-fade-in rf-fade-out hidden"}))),c=g("div",{className:"main-frame"
},e=g("div",{className:"rf-login hidden"}),f=g("div",{className:"rf-login-page-copyright hidden"}),d=g("div",{
className:"rf-navigator noselect hidden"}),h=g("div",{className:"rf-view-frame hidden"},z=g("div",{
className:"rf-search-result-view rf-view-list hidden"},C=g("div",{className:"rf-multiselect-cmdbar hidden"}),A=g("div",{
className:"rf-search-list rf-items"}),B=g("div",{className:"rf-no-items rf-no-items-search hidden"})),K=g("div",{
className:"rf-data-view hidden"},P=g("div",{className:"rf-folder-breadcrumbs"},Q=g("div",{className:"container"})),L=g("div",{
className:"rf-data-view-header"},M=g("div",{className:"sort-order-selector order-selector noselect"}),N=g("div",{
className:"sharing-center-order-selector order-selector noselect"}),O=g("div",{className:"authenticator-title"}),R=g("div",{
className:"rf-multiselect-cmdbar noselect hidden"}),g("div",{className:"rf-flex-gap"}),S=g("div",{
className:"rf-view-style-selector rf-view-style-item active hidden"}),T=g("div",{className:"rf-view-style-popup"},U=g("div",{
className:"rf-view-style-item rf-view-style-large"}),V=g("div",{className:"rf-view-style-item rf-view-style-condensed"
}),W=g("div",{className:"rf-view-style-item rf-view-style-list"}))),X=g("div",{className:"separator rf-progress"},g("div",{
className:"rf-progress-runner hidden"})),Y=g("div",{className:"rf-data"},Z=g("div",{
className:"rf-items-section rf-items-section-main"},aa=g("div",{className:"rf-items"})),g("div",{className:"rf-no-items hidden"
},g("div",{className:"rf-no-items-icon"}),g("div",{className:"rf-no-items-text"}))),ar=g("div",{className:"rf-new-menu"
},as=g("div",{className:"rf-new-button plus-image"}),at=g("div",{className:"rf-new-dropdown rf-fade-out hidden"}),au=g("div",{
className:"rf-modal-screen rf-new-dropdown-screen rf-fade-in rf-fade-out hidden"}))),ab=g("div",{
className:"rf-password-generator hidden"},g("div",{className:"rf-data-view-header"},ac=g("div",{
className:"password-generator-order-selector order-selector noselect"}))),ad=g("div",{className:"rf-emergency-access hidden"
},g("div",{className:"rf-data-view-header"},ae=g("div",{className:"emergency-access-order-selector order-selector noselect"
})),af=g("div",{className:"separator rf-progress"},g("div",{className:"rf-progress-runner hidden"})),g("div",{
className:"rf-ea-data"},ag=g("table",{className:"rf-ea-accounts"}),ah=g("div",{className:"rf-ea-no-accounts hidden"
})),ai=g("div",{className:"rf-ea-new-contact"},g("div",{className:"rf-new-button plus-image"}))),aj=g("div",{
className:"rf-security-center hidden"},ak=g("div",{className:"summary-pane"}),g("div",{className:"rf-data-view-header"
},ap=g("div",{className:"security-center-order-selector order-selector noselect"}),aq=g("div",{
className:"rf-multiselect-cmdbar hidden"})),am=g("div",{className:"rf-data"},ao=g("div",{
className:"rf-no-items rf-no-items-security-center-tab hidden"})),an=g("div",{
className:"rf-no-items rf-no-items-security-center hidden"}),al=g("div",{className:"rf-security-center-new-login"},g("div",{
className:"rf-new-button plus-image"}))),i=g("div",{className:"rf-settings hidden"},g("div",{className:"rf-progress"
})),j=g("div",{className:"rf-why-roboform hidden"})),o=g("div",{className:"rf-notification rf-common-notification"},g("div",{
className:"rf-notification-msg"}),g("div",{className:"rf-close-btn"})),k=g("div",{
className:"rf-editor-screen rf-modal-screen hidden"}),n=g("div",{className:"rf-notification rf-editor-notification"},g("div",{
className:"rf-notification-msg"}),g("div",{className:"rf-close-btn"}))),p=g("div",{className:"rf-tooltip"}),l=g("div",{
className:"dropdown-popup context-menu-popup hidden"})),aw=new Map;return aw.set("data-items-section-main",{section:Z,items:aa
}),{main:av,commonDialogsParent:c,header:b,startGuideButton:m,account:{main:D,box:E,title:F,image:G,dropdown:H,menu:I,
modalScreen:J},mainFrame:c,login:e,loginCopyright:f,navigator:null,navigatorStub:d,files:h,dataItems:{main:K,header:L,
orderSelectorSort:M,orderSelectorSortPopular:null,orderSelectorSortRecent:null,orderSelectorSortAlphabet:null,
orderSelectorSharingCenter:N,orderSelectorSharingCenterAll:null,orderSelectorSharingCenterWithMe:null,
orderSelectorSharingCenterByMe:null,authenticatorTitle:O,folderBreadcrumbs:{main:P,container:Q,filterTag:null,filterTagText:null
},multiselectCmdbar:R,viewStyleSelector:S,viewStylePopup:T,viewStyleLarge:U,viewStyleCompact:V,viewStyleList:W,progress:X,
data:Y,itemsSections:aw},newMenu:{main:ar,button:as,dropdown:at,modalScreen:au},passwordGenerator:{main:ab,orderSelector:ac},
emergencyAccess:{main:ad,orderSelector:ae,orderSelectorContacts:null,orderSelectorTestators:null,contactsBandge:null,
testatorsBandge:null,progress:af,accounts:ag,noAccounts:ah,newButton:ai},securityCenter:{main:aj,summaryPane:ak,newLogin:al,
data:am,noItems:an,noItemsTab:ao,noItemsText:null,orderSelector:ap,multiselectCmdbar:aq},settings:i,whyRoboForm:j,
editorScreen:k,searchPane:{main:q,options:x,box:r,boxEdit:s,boxInput:t,boxCount:u,boxEraser:v,boxArrow:w,progress:y},
searchResults:{main:z,list:A,noItems:B,noItemsText:null,multiselectCmdbar:C},editor:null,editorNotification:n,
commonNotification:o,tooltip:p,contextMenuPopup:l,shownDropdownMenuHandler:null,shownDropdownMenuPopup:null,
shownDropdownMenuModalScreen:null}}();"msie"===b.browserType&&as.main.classList.add("msie"),(0,
d.Qn)([j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K]),
(0,d.Qn)([L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar])
;const at=document.querySelector("#v8")
;return at&&at.remove(),null===(c=document.querySelector("#rf-start-page-not-loaded"))||void 0===c||c.remove(),
null===(i=document.querySelector("#rf-loading-screen"))||void 0===i||i.remove(),document.body.classList.add("body-v8"),
document.body.appendChild(as.main),(0,e.Ic)(as.commonDialogsParent,a),as}
const j="selector-all-items.svg",k="selector-login.svg",l="selector-bookmark.svg",m="selector-safenote.svg",n="selector-identity.svg",o="selector-sharing-center.svg",p="selector-security-center.svg",q="selector-emergency-access.svg",r="selector-all-items-dark.svg",s="selector-login-dark.svg",t="selector-bookmark-dark.svg",u="selector-safenote-dark.svg",v="selector-identity-dark.svg",w="selector-sharing-center-dark.svg",x="selector-security-center-dark.svg",y="selector-emergency-access-dark.svg",z="view-style-grid-black40.svg",A="view-style-grid-active-black87.svg",B="view-style-grid-white40.svg",C="view-style-grid-active-white87.svg",D="view-style-compact-black40.svg",E="view-style-compact-active-black87.svg",F="view-style-compact-white40.svg",G="view-style-compact-active-white87.svg",H="view-style-list-black40.svg",I="view-style-list-active-black87.svg",J="view-style-list-white40.svg",K="view-style-list-active-white87.svg"
;const L="cmd-log-in-hover.svg",M="cmd-go-fill-hover.svg",N="cmd-go-to-hover.svg",O="cmd-copy-hover.svg",P="cmd-view-hover.svg",Q="cmd-edit-hover.svg",R="cmd-rename-hover.svg",S="cmd-move-hover.svg",T="cmd-clone-hover.svg",U="cmd-delete-hover.svg",V="cmd-pin-hover.svg",W="cmd-unpin-hover.svg",X="cmd-share-hover.svg",Y="cmd-send-hover.svg",Z="cmd-print-hover.svg",aa="cmd-folder-hover.svg",ab="cmd-exclude-from-security-score-hover.svg",ac="cmd-include-to-security-score-hover.svg",ad="cmd-go-fill-black87.svg",ae="cmd-go-to-black87.svg",af="cmd-copy-black87.svg",ag="cmd-view-black87.svg",ah="cmd-edit-black87.svg",ai="cmd-rename-black87.svg",aj="cmd-move-black87.svg",ak="cmd-clone-black87.svg",al="cmd-pin-black87.svg",am="cmd-unpin-black87.svg",an="cmd-share-black87.svg",ao="cmd-send-black87.svg",ap="cmd-folder-black87.svg",aq="cmd-exclude-from-security-score-black87.svg",ar="cmd-include-to-security-score-black87.svg"
},89808:function(a,b,c){"use strict";c.d(b,{A:function(){return d}});const d={version:"9.6.4.0"}},59212:function(a,b,c){
"use strict";a.exports=c.p+"progress-circle.svg"},775:function(a,b,c){"use strict";a.exports=c.p+"search-dark.svg"},
15422:function(a,b,c){"use strict";a.exports=c.p+"search.svg"},85122:function(a,b,c){"use strict";a.exports=c.p+"clear-text.svg"
},20958:function(a,b,c){"use strict";a.exports=c.p+"clone.svg"},47974:function(a,b,c){"use strict";a.exports=c.p+"delete.svg"},
25116:function(a,b,c){"use strict";a.exports=c.p+"editor-close-light.svg"},58863:function(a,b,c){"use strict"
;a.exports=c.p+"editor-close.svg"},6353:function(a,b,c){"use strict";a.exports=c.p+"editor-copy-light.svg"},
15482:function(a,b,c){"use strict";a.exports=c.p+"editor-copy.svg"},2346:function(a,b,c){"use strict"
;a.exports=c.p+"editor-edit-light.svg"},21217:function(a,b,c){"use strict";a.exports=c.p+"editor-edit.svg"},
3846:function(a,b,c){"use strict";a.exports=c.p+"editor-favorite-light.svg"},36029:function(a,b,c){"use strict"
;a.exports=c.p+"editor-favorite.svg"},43503:function(a,b,c){"use strict";a.exports=c.p+"editor-home-light.svg"},
42244:function(a,b,c){"use strict";a.exports=c.p+"editor-home.svg"},41808:function(a,b,c){"use strict"
;a.exports=c.p+"editor-non-favorite-light.svg"},14755:function(a,b,c){"use strict";a.exports=c.p+"editor-non-favorite.svg"},
30526:function(a,b,c){"use strict";a.exports=c.p+"editor-view-in-new-tab-light.svg"},76853:function(a,b,c){"use strict"
;a.exports=c.p+"editor-view-in-new-tab.svg"},89257:function(a,b,c){"use strict";a.exports=c.p+"flag-abkhazia.svg"},
30588:function(a,b,c){"use strict";a.exports=c.p+"flag-afganistan.svg"},57837:function(a,b,c){"use strict"
;a.exports=c.p+"flag-aland-islands.svg"},81465:function(a,b,c){"use strict";a.exports=c.p+"flag-albania.svg"},
73627:function(a,b,c){"use strict";a.exports=c.p+"flag-algeria.svg"},90942:function(a,b,c){"use strict"
;a.exports=c.p+"flag-american-samoa.svg"},21625:function(a,b,c){"use strict";a.exports=c.p+"flag-andorra.svg"},
90292:function(a,b,c){"use strict";a.exports=c.p+"flag-angola.svg"},67857:function(a,b,c){"use strict"
;a.exports=c.p+"flag-anguilla.svg"},4181:function(a,b,c){"use strict";a.exports=c.p+"flag-antigua-and-barbuda.svg"},
31733:function(a,b,c){"use strict";a.exports=c.p+"flag-argentina.svg"},82755:function(a,b,c){"use strict"
;a.exports=c.p+"flag-armenia.svg"},7299:function(a,b,c){"use strict";a.exports=c.p+"flag-aruba.svg"},40260:function(a,b,c){
"use strict";a.exports=c.p+"flag-australia.svg"},78143:function(a,b,c){"use strict";a.exports=c.p+"flag-austria.svg"},
48017:function(a,b,c){"use strict";a.exports=c.p+"flag-azerbaijan.svg"},27641:function(a,b,c){"use strict"
;a.exports=c.p+"flag-azores-islands.svg"},19865:function(a,b,c){"use strict";a.exports=c.p+"flag-bahamas.svg"},
36205:function(a,b,c){"use strict";a.exports=c.p+"flag-bahrain.svg"},44760:function(a,b,c){"use strict"
;a.exports=c.p+"flag-balearic-islands.svg"},68741:function(a,b,c){"use strict";a.exports=c.p+"flag-bangladesh.svg"},
58496:function(a,b,c){"use strict";a.exports=c.p+"flag-barbados.svg"},88502:function(a,b,c){"use strict"
;a.exports=c.p+"flag-basque-country.svg"},54730:function(a,b,c){"use strict";a.exports=c.p+"flag-belarus.svg"},
15153:function(a,b,c){"use strict";a.exports=c.p+"flag-belgium.svg"},25507:function(a,b,c){"use strict"
;a.exports=c.p+"flag-belize.svg"},22744:function(a,b,c){"use strict";a.exports=c.p+"flag-benin.svg"},85726:function(a,b,c){
"use strict";a.exports=c.p+"flag-bermuda.svg"},34732:function(a,b,c){"use strict";a.exports=c.p+"flag-bhutan-1.svg"},
89398:function(a,b,c){"use strict";a.exports=c.p+"flag-bhutan.svg"},53306:function(a,b,c){"use strict"
;a.exports=c.p+"flag-bolivia.svg"},48374:function(a,b,c){"use strict";a.exports=c.p+"flag-bonaire.svg"},19921:function(a,b,c){
"use strict";a.exports=c.p+"flag-bosnia-and-herzegovina.svg"},18927:function(a,b,c){"use strict"
;a.exports=c.p+"flag-botswana.svg"},78920:function(a,b,c){"use strict";a.exports=c.p+"flag-brazil.svg"},87492:function(a,b,c){
"use strict";a.exports=c.p+"flag-british-columbia.svg"},31913:function(a,b,c){"use strict"
;a.exports=c.p+"flag-british-indian-ocean-territory.svg"},23870:function(a,b,c){"use strict"
;a.exports=c.p+"flag-british-virgin-islands.svg"},54369:function(a,b,c){"use strict";a.exports=c.p+"flag-brunei.svg"},
61817:function(a,b,c){"use strict";a.exports=c.p+"flag-bulgaria.svg"},24034:function(a,b,c){"use strict"
;a.exports=c.p+"flag-burkina-faso.svg"},23869:function(a,b,c){"use strict";a.exports=c.p+"flag-burundi.svg"},
70712:function(a,b,c){"use strict";a.exports=c.p+"flag-cambodia.svg"},83374:function(a,b,c){"use strict"
;a.exports=c.p+"flag-cameroon.svg"},41388:function(a,b,c){"use strict";a.exports=c.p+"flag-canada.svg"},86379:function(a,b,c){
"use strict";a.exports=c.p+"flag-canary-islands.svg"},53022:function(a,b,c){"use strict";a.exports=c.p+"flag-cape-verde.svg"},
14816:function(a,b,c){"use strict";a.exports=c.p+"flag-cayman-islands.svg"},18735:function(a,b,c){"use strict"
;a.exports=c.p+"flag-central-african-republic.svg"},27402:function(a,b,c){"use strict";a.exports=c.p+"flag-ceuta.svg"},
5540:function(a,b,c){"use strict";a.exports=c.p+"flag-chad.svg"},28737:function(a,b,c){"use strict"
;a.exports=c.p+"flag-chile.svg"},13083:function(a,b,c){"use strict";a.exports=c.p+"flag-china.svg"},65012:function(a,b,c){
"use strict";a.exports=c.p+"flag-christmas-island.svg"},25921:function(a,b,c){"use strict";a.exports=c.p+"flag-cocos-island.svg"
},37604:function(a,b,c){"use strict";a.exports=c.p+"flag-colombia.svg"},25148:function(a,b,c){"use strict"
;a.exports=c.p+"flag-comoros.svg"},80275:function(a,b,c){"use strict";a.exports=c.p+"flag-cook-islands.svg"},
98550:function(a,b,c){"use strict";a.exports=c.p+"flag-corsica.svg"},2672:function(a,b,c){"use strict"
;a.exports=c.p+"flag-costa-rica.svg"},91505:function(a,b,c){"use strict";a.exports=c.p+"flag-croatia.svg"},
77353:function(a,b,c){"use strict";a.exports=c.p+"flag-cuba.svg"},41836:function(a,b,c){"use strict"
;a.exports=c.p+"flag-curacao.svg"},58004:function(a,b,c){"use strict";a.exports=c.p+"flag-cyprus.svg"},54640:function(a,b,c){
"use strict";a.exports=c.p+"flag-czech-republic.svg"},77079:function(a,b,c){"use strict"
;a.exports=c.p+"flag-democratic-republic-of-congo.svg"},49788:function(a,b,c){"use strict";a.exports=c.p+"flag-denmark.svg"},
20796:function(a,b,c){"use strict";a.exports=c.p+"flag-djibouti.svg"},38456:function(a,b,c){"use strict"
;a.exports=c.p+"flag-dominica.svg"},36915:function(a,b,c){"use strict";a.exports=c.p+"flag-dominican-republic.svg"},
85163:function(a,b,c){"use strict";a.exports=c.p+"flag-east-timor.svg"},1191:function(a,b,c){"use strict"
;a.exports=c.p+"flag-ecuador.svg"},53867:function(a,b,c){"use strict";a.exports=c.p+"flag-egypt.svg"},91953:function(a,b,c){
"use strict";a.exports=c.p+"flag-england.svg"},64085:function(a,b,c){"use strict";a.exports=c.p+"flag-equatorial-guinea.svg"},
18144:function(a,b,c){"use strict";a.exports=c.p+"flag-eritrea.svg"},44119:function(a,b,c){"use strict"
;a.exports=c.p+"flag-estonia.svg"},96779:function(a,b,c){"use strict";a.exports=c.p+"flag-ethiopia.svg"},21491:function(a,b,c){
"use strict";a.exports=c.p+"flag-european-union.svg"},40216:function(a,b,c){"use strict"
;a.exports=c.p+"flag-falkland-islands.svg"},15272:function(a,b,c){"use strict";a.exports=c.p+"flag-faroe-islands.svg"},
48486:function(a,b,c){"use strict";a.exports=c.p+"flag-fiji.svg"},8818:function(a,b,c){"use strict"
;a.exports=c.p+"flag-finland.svg"},99007:function(a,b,c){"use strict";a.exports=c.p+"flag-france.svg"},19135:function(a,b,c){
"use strict";a.exports=c.p+"flag-french-polynesia.svg"},39971:function(a,b,c){"use strict";a.exports=c.p+"flag-gabon.svg"},
77534:function(a,b,c){"use strict";a.exports=c.p+"flag-galapagos-islands.svg"},64293:function(a,b,c){"use strict"
;a.exports=c.p+"flag-gambia.svg"},16670:function(a,b,c){"use strict";a.exports=c.p+"flag-georgia.svg"},61633:function(a,b,c){
"use strict";a.exports=c.p+"flag-germany.svg"},12711:function(a,b,c){"use strict";a.exports=c.p+"flag-ghana.svg"},
28486:function(a,b,c){"use strict";a.exports=c.p+"flag-gibraltar.svg"},24995:function(a,b,c){"use strict"
;a.exports=c.p+"flag-greece.svg"},88132:function(a,b,c){"use strict";a.exports=c.p+"flag-greenland.svg"},1052:function(a,b,c){
"use strict";a.exports=c.p+"flag-grenada.svg"},65496:function(a,b,c){"use strict";a.exports=c.p+"flag-guam.svg"},
83033:function(a,b,c){"use strict";a.exports=c.p+"flag-guatemala.svg"},65180:function(a,b,c){"use strict"
;a.exports=c.p+"flag-guernsey.svg"},90969:function(a,b,c){"use strict";a.exports=c.p+"flag-guinea-bissau.svg"},
21421:function(a,b,c){"use strict";a.exports=c.p+"flag-guinea.svg"},51367:function(a,b,c){"use strict"
;a.exports=c.p+"flag-guyana.svg"},81753:function(a,b,c){"use strict";a.exports=c.p+"flag-haiti.svg"},99925:function(a,b,c){
"use strict";a.exports=c.p+"flag-hawaii.svg"},7842:function(a,b,c){"use strict";a.exports=c.p+"flag-honduras.svg"},
54498:function(a,b,c){"use strict";a.exports=c.p+"flag-hong-kong.svg"},54564:function(a,b,c){"use strict"
;a.exports=c.p+"flag-hungary.svg"},40912:function(a,b,c){"use strict";a.exports=c.p+"flag-iceland.svg"},15943:function(a,b,c){
"use strict";a.exports=c.p+"flag-india.svg"},87108:function(a,b,c){"use strict";a.exports=c.p+"flag-indonesia.svg"},
38870:function(a,b,c){"use strict";a.exports=c.p+"flag-iran.svg"},35441:function(a,b,c){"use strict"
;a.exports=c.p+"flag-iraq.svg"},71523:function(a,b,c){"use strict";a.exports=c.p+"flag-ireland.svg"},89476:function(a,b,c){
"use strict";a.exports=c.p+"flag-isle-of-man.svg"},10562:function(a,b,c){"use strict";a.exports=c.p+"flag-israel.svg"},
51043:function(a,b,c){"use strict";a.exports=c.p+"flag-italy.svg"},82060:function(a,b,c){"use strict"
;a.exports=c.p+"flag-ivory-coast.svg"},83712:function(a,b,c){"use strict";a.exports=c.p+"flag-jamaica.svg"},
81518:function(a,b,c){"use strict";a.exports=c.p+"flag-japan.svg"},36914:function(a,b,c){"use strict"
;a.exports=c.p+"flag-jersey.svg"},47264:function(a,b,c){"use strict";a.exports=c.p+"flag-jordan.svg"},32816:function(a,b,c){
"use strict";a.exports=c.p+"flag-kazakhstan.svg"},73806:function(a,b,c){"use strict";a.exports=c.p+"flag-kenya.svg"},
85683:function(a,b,c){"use strict";a.exports=c.p+"flag-kiribati.svg"},67644:function(a,b,c){"use strict"
;a.exports=c.p+"flag-korea.svg"},79119:function(a,b,c){"use strict";a.exports=c.p+"flag-kosovo.svg"},28469:function(a,b,c){
"use strict";a.exports=c.p+"flag-kuwait.svg"},24478:function(a,b,c){"use strict";a.exports=c.p+"flag-kyrgyzstan.svg"},
16337:function(a,b,c){"use strict";a.exports=c.p+"flag-laos.svg"},82759:function(a,b,c){"use strict"
;a.exports=c.p+"flag-latvia.svg"},20349:function(a,b,c){"use strict";a.exports=c.p+"flag-lebanon.svg"},36980:function(a,b,c){
"use strict";a.exports=c.p+"flag-lesotho.svg"},64192:function(a,b,c){"use strict";a.exports=c.p+"flag-liberia.svg"},
12049:function(a,b,c){"use strict";a.exports=c.p+"flag-libya.svg"},3329:function(a,b,c){"use strict"
;a.exports=c.p+"flag-liechtenstein.svg"},54715:function(a,b,c){"use strict";a.exports=c.p+"flag-lithuania.svg"},
38162:function(a,b,c){"use strict";a.exports=c.p+"flag-luxembourg.svg"},18267:function(a,b,c){"use strict"
;a.exports=c.p+"flag-macao.svg"},53957:function(a,b,c){"use strict";a.exports=c.p+"flag-macedonia.svg"},12454:function(a,b,c){
"use strict";a.exports=c.p+"flag-madagascar.svg"},27113:function(a,b,c){"use strict";a.exports=c.p+"flag-madeira.svg"},
90957:function(a,b,c){"use strict";a.exports=c.p+"flag-malawi.svg"},45691:function(a,b,c){"use strict"
;a.exports=c.p+"flag-malaysia.svg"},96601:function(a,b,c){"use strict";a.exports=c.p+"flag-maldives.svg"},6825:function(a,b,c){
"use strict";a.exports=c.p+"flag-mali.svg"},9269:function(a,b,c){"use strict";a.exports=c.p+"flag-malta.svg"},
8578:function(a,b,c){"use strict";a.exports=c.p+"flag-marshall-island.svg"},66043:function(a,b,c){"use strict"
;a.exports=c.p+"flag-martinique.svg"},4473:function(a,b,c){"use strict";a.exports=c.p+"flag-mauritania.svg"},
38779:function(a,b,c){"use strict";a.exports=c.p+"flag-mauritius.svg"},11422:function(a,b,c){"use strict"
;a.exports=c.p+"flag-melilla.svg"},50471:function(a,b,c){"use strict";a.exports=c.p+"flag-mexico.svg"},1982:function(a,b,c){
"use strict";a.exports=c.p+"flag-micronesia.svg"},24382:function(a,b,c){"use strict";a.exports=c.p+"flag-moldova.svg"},
7863:function(a,b,c){"use strict";a.exports=c.p+"flag-monaco.svg"},18516:function(a,b,c){"use strict"
;a.exports=c.p+"flag-mongolia.svg"},45788:function(a,b,c){"use strict";a.exports=c.p+"flag-montenegro.svg"},
56907:function(a,b,c){"use strict";a.exports=c.p+"flag-montserrat.svg"},76768:function(a,b,c){"use strict"
;a.exports=c.p+"flag-morocco.svg"},47808:function(a,b,c){"use strict";a.exports=c.p+"flag-mozambique.svg"},
10659:function(a,b,c){"use strict";a.exports=c.p+"flag-myanmar.svg"},20589:function(a,b,c){"use strict"
;a.exports=c.p+"flag-namibia.svg"},60734:function(a,b,c){"use strict";a.exports=c.p+"flag-nato.svg"},90185:function(a,b,c){
"use strict";a.exports=c.p+"flag-nauru.svg"},3364:function(a,b,c){"use strict";a.exports=c.p+"flag-nepal.svg"},
91986:function(a,b,c){"use strict";a.exports=c.p+"flag-netherlands.svg"},15096:function(a,b,c){"use strict"
;a.exports=c.p+"flag-new-zealand.svg"},9335:function(a,b,c){"use strict";a.exports=c.p+"flag-nicaragua.svg"},
17037:function(a,b,c){"use strict";a.exports=c.p+"flag-niger.svg"},24403:function(a,b,c){"use strict"
;a.exports=c.p+"flag-nigeria.svg"},9403:function(a,b,c){"use strict";a.exports=c.p+"flag-niue.svg"},89993:function(a,b,c){
"use strict";a.exports=c.p+"flag-norfolk-island.svg"},84166:function(a,b,c){"use strict";a.exports=c.p+"flag-north-korea.svg"},
10529:function(a,b,c){"use strict";a.exports=c.p+"flag-northen-cyprus.svg"},40944:function(a,b,c){"use strict"
;a.exports=c.p+"flag-northern-marianas-islands.svg"},41104:function(a,b,c){"use strict";a.exports=c.p+"flag-norway.svg"},
54011:function(a,b,c){"use strict";a.exports=c.p+"flag-oman.svg"},66069:function(a,b,c){"use strict"
;a.exports=c.p+"flag-orkney-islands.svg"},58262:function(a,b,c){"use strict";a.exports=c.p+"flag-ossetia.svg"},
77467:function(a,b,c){"use strict";a.exports=c.p+"flag-pakistan.svg"},22275:function(a,b,c){"use strict"
;a.exports=c.p+"flag-palau.svg"},8251:function(a,b,c){"use strict";a.exports=c.p+"flag-palestine.svg"},31750:function(a,b,c){
"use strict";a.exports=c.p+"flag-panama.svg"},91424:function(a,b,c){"use strict";a.exports=c.p+"flag-papua-new-guinea.svg"},
50750:function(a,b,c){"use strict";a.exports=c.p+"flag-paraguay.svg"},57188:function(a,b,c){"use strict"
;a.exports=c.p+"flag-peru.svg"},43667:function(a,b,c){"use strict";a.exports=c.p+"flag-philippines.svg"},11:function(a,b,c){
"use strict";a.exports=c.p+"flag-pitcairn-islands.svg"},97226:function(a,b,c){"use strict";a.exports=c.p+"flag-poland.svg"},
82288:function(a,b,c){"use strict";a.exports=c.p+"flag-portugal.svg"},64891:function(a,b,c){"use strict"
;a.exports=c.p+"flag-puerto-rico.svg"},5085:function(a,b,c){"use strict";a.exports=c.p+"flag-qatar.svg"},49651:function(a,b,c){
"use strict";a.exports=c.p+"flag-rapa-nui.svg"},90579:function(a,b,c){"use strict"
;a.exports=c.p+"flag-republic-of-the-congo.svg"},41955:function(a,b,c){"use strict";a.exports=c.p+"flag-romania.svg"},
72757:function(a,b,c){"use strict";a.exports=c.p+"flag-russia.svg"},52663:function(a,b,c){"use strict"
;a.exports=c.p+"flag-rwanda.svg"},66721:function(a,b,c){"use strict";a.exports=c.p+"flag-saba-island.svg"},
71577:function(a,b,c){"use strict";a.exports=c.p+"flag-saint-kitts-and-nevis.svg"},59748:function(a,b,c){"use strict"
;a.exports=c.p+"flag-salvador.svg"},54163:function(a,b,c){"use strict";a.exports=c.p+"flag-samoa.svg"},39545:function(a,b,c){
"use strict";a.exports=c.p+"flag-san-marino.svg"},38538:function(a,b,c){"use strict"
;a.exports=c.p+"flag-sao-tome-and-principe.svg"},48771:function(a,b,c){"use strict";a.exports=c.p+"flag-sardinia.svg"},
25385:function(a,b,c){"use strict";a.exports=c.p+"flag-saudi-arabia.svg"},48762:function(a,b,c){"use strict"
;a.exports=c.p+"flag-scotland.svg"},29491:function(a,b,c){"use strict";a.exports=c.p+"flag-senegal.svg"},77324:function(a,b,c){
"use strict";a.exports=c.p+"flag-serbia.svg"},99635:function(a,b,c){"use strict";a.exports=c.p+"flag-seychelles.svg"},
87400:function(a,b,c){"use strict";a.exports=c.p+"flag-sierra-leone.svg"},412:function(a,b,c){"use strict"
;a.exports=c.p+"flag-singapore.svg"},57214:function(a,b,c){"use strict";a.exports=c.p+"flag-sint-eustatius.svg"},
10119:function(a,b,c){"use strict";a.exports=c.p+"flag-sint-maarten.svg"},13018:function(a,b,c){"use strict"
;a.exports=c.p+"flag-slovakia.svg"},62703:function(a,b,c){"use strict";a.exports=c.p+"flag-slovenia.svg"},2882:function(a,b,c){
"use strict";a.exports=c.p+"flag-solomon-islands.svg"},19548:function(a,b,c){"use strict";a.exports=c.p+"flag-somalia.svg"},
18796:function(a,b,c){"use strict";a.exports=c.p+"flag-somaliland.svg"},15712:function(a,b,c){"use strict"
;a.exports=c.p+"flag-south-africa.svg"},80323:function(a,b,c){"use strict";a.exports=c.p+"flag-south-sudan.svg"},
11677:function(a,b,c){"use strict";a.exports=c.p+"flag-spain.svg"},84676:function(a,b,c){"use strict"
;a.exports=c.p+"flag-sri-lanka.svg"},28144:function(a,b,c){"use strict";a.exports=c.p+"flag-st-barts.svg"},3626:function(a,b,c){
"use strict";a.exports=c.p+"flag-st-lucia.svg"},75576:function(a,b,c){"use strict"
;a.exports=c.p+"flag-st-vincent-and-the-grenadines.svg"},6247:function(a,b,c){"use strict";a.exports=c.p+"flag-sudan.svg"},
53848:function(a,b,c){"use strict";a.exports=c.p+"flag-suriname.svg"},68809:function(a,b,c){"use strict"
;a.exports=c.p+"flag-swaziland.svg"},96886:function(a,b,c){"use strict";a.exports=c.p+"flag-sweden.svg"},68409:function(a,b,c){
"use strict";a.exports=c.p+"flag-switzerland.svg"},90886:function(a,b,c){"use strict";a.exports=c.p+"flag-syria.svg"},
57034:function(a,b,c){"use strict";a.exports=c.p+"flag-taiwan.svg"},59108:function(a,b,c){"use strict"
;a.exports=c.p+"flag-tajikistan.svg"},36724:function(a,b,c){"use strict";a.exports=c.p+"flag-tanzania.svg"},
38715:function(a,b,c){"use strict";a.exports=c.p+"flag-thailand.svg"},5848:function(a,b,c){"use strict"
;a.exports=c.p+"flag-tibet.svg"},20271:function(a,b,c){"use strict";a.exports=c.p+"flag-togo.svg"},26009:function(a,b,c){
"use strict";a.exports=c.p+"flag-tokelau.svg"},21621:function(a,b,c){"use strict";a.exports=c.p+"flag-tonga.svg"},
85994:function(a,b,c){"use strict";a.exports=c.p+"flag-transnistria.svg"},14172:function(a,b,c){"use strict"
;a.exports=c.p+"flag-trinidad-and-tobago.svg"},21009:function(a,b,c){"use strict";a.exports=c.p+"flag-tunisia.svg"},
16276:function(a,b,c){"use strict";a.exports=c.p+"flag-turkey.svg"},59051:function(a,b,c){"use strict"
;a.exports=c.p+"flag-turkmenistan.svg"},69492:function(a,b,c){"use strict";a.exports=c.p+"flag-turks-and-caicos.svg"},
3409:function(a,b,c){"use strict";a.exports=c.p+"flag-tuvalu.svg"},36462:function(a,b,c){"use strict"
;a.exports=c.p+"flag-uganda.svg"},65421:function(a,b,c){"use strict";a.exports=c.p+"flag-ukraine.svg"},21813:function(a,b,c){
"use strict";a.exports=c.p+"flag-united-arab-emirates.svg"},6399:function(a,b,c){"use strict"
;a.exports=c.p+"flag-united-kingdom.svg"},65864:function(a,b,c){"use strict";a.exports=c.p+"flag-united-nations.svg"},
94782:function(a,b,c){"use strict";a.exports=c.p+"flag-united-states.svg"},61410:function(a,b,c){"use strict"
;a.exports=c.p+"flag-uruguay.svg"},99457:function(a,b,c){"use strict";a.exports=c.p+"flag-uzbekistn.svg"},58322:function(a,b,c){
"use strict";a.exports=c.p+"flag-vanuatu.svg"},73374:function(a,b,c){"use strict";a.exports=c.p+"flag-vatican-city.svg"},
25019:function(a,b,c){"use strict";a.exports=c.p+"flag-venezuela.svg"},36078:function(a,b,c){"use strict"
;a.exports=c.p+"flag-vietnam.svg"},21736:function(a,b,c){"use strict";a.exports=c.p+"flag-virgin-islands.svg"},
51350:function(a,b,c){"use strict";a.exports=c.p+"flag-wales.svg"},45919:function(a,b,c){"use strict"
;a.exports=c.p+"flag-western-sahara.svg"},53484:function(a,b,c){"use strict";a.exports=c.p+"flag-yemen.svg"},
18370:function(a,b,c){"use strict";a.exports=c.p+"flag-zambia.svg"},45337:function(a,b,c){"use strict"
;a.exports=c.p+"flag-zimbabwe.svg"},14497:function(a,b,c){"use strict";a.exports=c.p+"folder-black.svg"},26781:function(a,b,c){
"use strict";a.exports=c.p+"go-fill.svg"},24713:function(a,b,c){"use strict";a.exports=c.p+"log-in.svg"},51796:function(a,b,c){
"use strict";a.exports=c.p+"move.svg"},38664:function(a,b,c){"use strict";a.exports=c.p+"print.svg"},31586:function(a,b,c){
"use strict";a.exports=c.p+"rename-dark.svg"},42609:function(a,b,c){"use strict";a.exports=c.p+"rename.svg"},
1597:function(a,b,c){"use strict";a.exports=c.p+"send.svg"},41656:function(a,b,c){"use strict";a.exports=c.p+"share.svg"},
74072:function(a,b,c){"use strict";a.exports=c.p+"view.svg"},44974:function(){},49701:function(){},29165:function(){}
},function(a){a.O(0,[612],(function(){return b=63212,a(a.s=b);var b}));a.O()}]);