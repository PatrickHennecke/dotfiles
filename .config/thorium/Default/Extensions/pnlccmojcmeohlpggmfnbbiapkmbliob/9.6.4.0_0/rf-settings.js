// Copyright (C) 1999-2024 Siber Systems Inc. All Rights Reserved.
"use strict";(self.rf_vlu7ce9uien=self.rf_vlu7ce9uien||[]).push([[43],{41326:function(a,b,c){c.r(b),c.d(b,{
SettingsController:function(){return l}})
;var d=c(11834),e=c(83343),f=c(47333),g=c(97490),h=c(63956),i=c(78440),j=c(69893),k=c(4153);c(13117)
;function l(a,b,c,l,m,n,o,p,q,r,s){const t=a,u=b,v=c,w=l,x=m,y=n,z=o,A=p,B=q,C=r;let D=!1;const E=s.main,F=s.files,G=s.settings
;let H=null,I=0;return{Activate:function(){if(D)return;D=!0,(0,h.l5)(F),(0,h.l5)(G),v.IsInlineEditorShown()&&v.CloseEditor();(0,
h.PQ)(J,(()=>()=>{}),500,(()=>(G.classList.add("rf-in-proggress"),L)),(a=>(0,i.fI)((0,d.nn)((0,j.EB)(a)))))},
Deactivate:function(){if(!D)return;D=!1,null==H||H.forEach((a=>{G.contains(a)&&G.removeChild(a)})),H=null,I=0,
E.classList.remove("rf-settings-shown"),(0,h.SE)(G)},UpdateView:function(a){if(!D)return},Invalidate:()=>{},IsStillActual:()=>D,
GetIsStillActual:()=>function(){return D},SelectSection:function(a){I=a},GetExtensionStorage:function(){return y}}
;async function J(){const a="stand-alone"===w.mode||"extension-v9"===w.mode&&"stand-alone"===w.extensionMode,b={
onDone:()=>v.CloseSettings(),OnPaymentAction:K,ShowViewInRightPanel:a=>{v.ShowViewInRightPanel(a)},HideViewInRightPanel:()=>{
v.CloseEditor()}},c=(0,e.r)(I,!0,!a,!w.isInAppPaymentDisabled,!0,A,u,(0,k.TT)(t.rfo),(0,
k.TT)(t.enterprise),t.service,t.data,t.usageInfo,t.backups,x,t.options,t.settings,t.policies,B,y,null,z,w.platformOs,w.browserType,C,b)
;H=await(0,g.Dn)((0,g.i2)(),c),H.forEach((a=>G.appendChild(a))),E.classList.add("rf-settings-shown")}async function K(a,b){
if(w.isPaymentPageSupported){switch(await(0,f.ov)((0,k.TT)(y))){case 0:await c();break;case 1:await u.OpenPaymentPage(a,b)}
}else await c();async function c(){const c="buymore"===a||"renew"===a||"upgradetofamily"===a;if(await p.OpenUrl({url:await(0,
k.TT)(t.rfo).GetLicensingWebPageUrlFromServer(a,b),newTab:c},b),!c)throw j.JS}}function L(){
G.classList.remove("rf-in-proggress")}}}}]);