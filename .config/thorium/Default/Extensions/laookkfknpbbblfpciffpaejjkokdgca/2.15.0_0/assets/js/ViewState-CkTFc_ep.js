import{d as e,s as i,w as t,V as o,t as r}from"./ResizeSensor-CXS_pGRc.js";import{e as a,u as s,r as n}from"./promisifiedChrome-CheD9WtZ.js";import{a as c}from"./dashboard-CF_jRhAY.js";const l=e=>Object.keys(e).find((i=>{var t;return null==(t=e[i])?void 0:t.defaultView})),d=(r,{views:s}={})=>{const d=e(r+"ViewState",{state:()=>({activeViewId:(s&&l(s))??"",beforeViewChange:()=>Promise.resolve(!0),confirmationProps:null,popupActive:!1,name:r}),getters:{activeView(e){if(!s)return null;const i=s[e.activeViewId];if(i)return i;throw new Error("No view found with id: "+e.activeViewId)},focused:()=>c.isOnTop(r)},actions:{focus(){c.add(r)},async setActiveView(e){var i,t;if(!s||!(await this.beforeViewChange()))return;let o=e;if("default"===e){const e=l(s);if(!e)throw new Error("No view found with defaultView: true");o=e}await(null==(t=null==(i=this.activeView)?void 0:i.beforeLeave)?void 0:t.call(i,o)),this.activeViewId=o},async togglePopup(e,{resetActiveView:i=!0}={}){await this.beforeViewChange()&&(await o.nextTick(),this.popupActive=e??!this.popupActive,a.$emit(`${r}:toggled`),!this.popupActive&&i&&(this.resetBeforeViewChange(),this.confirmationProps=null,await this.setActiveView("default")))},resetBeforeViewChange(){this.beforeViewChange=()=>Promise.resolve(!0)},async setConfirmation(e){return new Promise((i=>{this.confirmationProps=e,this.confirmationProps.confirm=()=>i(!0),this.confirmationProps.cancel=()=>i(!1)})).finally((()=>{this.confirmationProps=null}))}}}),w=i(d());return a.$on(r+":open",(()=>d().togglePopup(!0))),a.$on(r+":close",(()=>d().togglePopup(!1))),t(w.popupActive,(e=>{e?c.add(r):c.remove(r)})),t(w.confirmationProps,(e=>{(null==e?void 0:e.dashboardOverlay)&&c.add(r,!0),n.dashboardOverlayActive=!!(null==e?void 0:e.dashboardOverlay)})),d},w=(e,{views:i,extend:t})=>{const o=d(`base${s.capitalizeFirstLetter(e)}`,{views:i}),r=t(o(),`extended${s.capitalizeFirstLetter(e)}ViewState`);return p(`${e}ViewState`,o,r)},p=(i,t,o)=>{const a=t(),s=o();return e(i,(()=>({...r(a),...r(s)})))};export{w as e,d as u};