import{a as e,r as t,z as s}from"./ResizeSensor-CXS_pGRc.js";import{j as n,n as i}from"./promisifiedChrome-CheD9WtZ.js";import{g as u}from"./globalKeyEventManager-KbJZwtdf.js";const l=i(e({name:"FormEditableInlineInput",props:{value:{type:String,required:!0},placeholder:{type:String,default:""},editing:{type:Boolean,default:!1},name:{type:String,default:"inline-input"}},emits:["input"],setup:()=>({inputRef:t(),formFields:s("formFields")}),data:()=>({pulse:!1,focused:!1}),watch:{focused(){this.focused?u.registerEventListener("blurInlineInput","keyup",27,this.blur):this.clearEscapeEventIfListening()}},created(){var e;null==(e=this.formFields)||e.addField(this.name,this.focus,this.pulseAndFocus)},destroyed(){var e;null==(e=this.formFields)||e.removeField(this.name),this.clearEscapeEventIfListening()},methods:{emitInputValue(e){const t=e.target.value;this.$emit("input",t)},async focus(){var e;await this.$nextTick(),null==(e=this.inputRef)||e.focus()},blur(){var e;null==(e=this.inputRef)||e.blur()},async pulseAndFocus(){await this.focus(),this.pulse=!0,await n(1e3),this.pulse=!1},submitAndSetBlurred(){var e;null==(e=this.formFields)||e.submitOnBlurAndNoneFocused(),this.focused=!1},setFocused(){this.focused=!0},clearEscapeEventIfListening(){u.hasEventListener("blurInlineInput","keyup",27)&&u.removeEventListener("blurInlineInput","keyup",27)}}}),(function(){var e=this,t=e._self._c;return e._self._setupProxy,t("span",{staticClass:"inline-input",class:{editing:e.editing},attrs:{name:e.name,"data-test-value":e.value}},[t("input",{ref:"inputRef",class:{pulse:e.pulse},attrs:{type:"text",placeholder:e.placeholder,readonly:!e.editing},domProps:{value:e.value},on:{click:function(e){e.stopPropagation()},input:e.emitInputValue,keydown:function(t){var s;if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;null==(s=e.formFields)||s.focusNextInputOrSubmitIfLast(e.name)},blur:e.submitAndSetBlurred,focus:e.setFocused}}),t("span",{staticClass:"reference-text"},[e._v(e._s(e.value||e.placeholder))])])}),[],!1,null,"8b7e083b").exports;export{l as F};