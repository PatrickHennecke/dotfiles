import{_ as s}from"./icon-back-D_TFrgyJ.js";import{_ as t}from"./icon-close-BUGl_M7j.js";import{n as e}from"./promisifiedChrome-CheD9WtZ.js";const a=e({name:"ModalBanner",props:{sales:{type:Object,default:()=>({})},showClose:{type:Boolean,default:!0},showBack:{type:Boolean,default:!1}},computed:{date:()=>m.models.date,time(){return new Date(this.date.get("seconds"))},saleInfo(){return this.sales&&this.sales.yearly},saleTimeLeft(){return new Date(this.sales.yearly.endDate)-this.time},stringCountdown(){if(!this.sales||!this.sales.yearly.endDate)return"";if(this.saleTimeLeft<=0)return"Sale Has Ended";const s=Math.floor(this.saleTimeLeft/1e3),t=m.utils.twoDigit(s%60),e=Math.floor(s/60),a=m.utils.twoDigit(e%60),i=Math.floor(e/60),o=m.utils.twoDigit(i%24);return"Ends in "+Math.floor(i/24)+"d "+o+"h "+a+"m "+t+"s"}}},(function(){var e=this,a=e._self._c;return a("div",{staticClass:"sale"},[e.showBack?a("div",{staticClass:"back-container"},[a("div",{staticClass:"back icon-wrapper",attrs:{"data-test":"back"},on:{click:function(s){return e.$emit("goBack")}}},[a("inline-svg",{staticClass:"icon icon-back",attrs:{src:s}})],1)]):e._e(),a("span",{staticClass:"text"},[a("div",{staticClass:"description"},[e._v(e._s(e.saleInfo.title)),a("span",{staticClass:"divider"},[e._v("–")]),e._v(e._s(e.saleInfo.percentOff)+"% Off")]),a("div",{staticClass:"countdown"},[e._v(e._s(e.stringCountdown))])]),e.showClose?a("div",{staticClass:"close-container"},[a("div",{staticClass:"icon-wrapper close",attrs:{"data-test":"close"},on:{click:function(s){return e.$emit("close")}}},[a("inline-svg",{staticClass:"icon icon-close",attrs:{src:t}})],1)]):e._e()])}),[],!1,null,"3fae62db").exports;export{a as M};