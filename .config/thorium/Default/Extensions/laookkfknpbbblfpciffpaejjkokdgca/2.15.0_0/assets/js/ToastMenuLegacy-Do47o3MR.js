import{n as t}from"./promisifiedChrome-CheD9WtZ.js";import"./timestampDb-sTUCijT1.js";import"./Logger-Dqn8sDPg.js";import"./environmentVariables-Cy83xda0.js";import"./ResizeSensor-CXS_pGRc.js";import"./preload-helper-D7CfCCEq.js";import"./string-KTo4Qfpe.js";const s=t({doNotWaitForMount:!0,name:"ToastMenu",props:{dataOb:{type:String,default:""},active:{type:Boolean,default:!0},sectionTitle:{type:String,default:""}},methods:{hide(t){this.active&&(this.$touch&&t.stopPropagation(),this.$emit("toggle",!1))},hasHeader(){return!!this.$slots.header}}},(function(){var t=this,s=t._self._c;return s("div",{on:{click:function(t){t.stopPropagation()}}},[t._t("moreToggle"),s("div",{staticClass:"toast-container"},[s("transition",{attrs:{name:"slide-up",appear:""}},[t.active?s("div",{ref:"toast",staticClass:"toast more-toast",attrs:{"data-test":"toast"}},[t.hasHeader()?s("div",{staticClass:"toast-header"},[t._t("header")],2):t._e(),t.hasHeader()?s("div",{staticClass:"line header-line"}):t._e(),t.sectionTitle?s("div",{staticClass:"section-title"},[t._v(t._s(t.sectionTitle))]):t._e(),s("ul",{staticClass:"toast-list",class:{"toast-hide":t.$slots.upsell},attrs:{"data-test":"toast-options"}},[t._t("default")],2),s("div",{staticClass:"button button-close",on:{click:t.hide}},[s("span",{staticClass:"button-label"},[t._v("Close")])])]):t._e()]),s("transition",{attrs:{name:"fade",duration:"150"}},[t.active?s("div",{staticClass:"toast-overlay",on:{click:function(s){return s.stopPropagation(),t.hide.apply(null,arguments)}}}):t._e()])],1)],2)}),[],!1,null,"9cf0a6b3").exports;export{s as default};