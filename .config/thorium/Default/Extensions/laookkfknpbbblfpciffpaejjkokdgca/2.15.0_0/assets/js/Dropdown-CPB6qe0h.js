import{_ as t}from"./icon-ellipsis-D3jS4u3x.js";import{n as e}from"./promisifiedChrome-CheD9WtZ.js";import"./timestampDb-sTUCijT1.js";import"./Logger-Dqn8sDPg.js";import"./environmentVariables-Cy83xda0.js";import"./ResizeSensor-CXS_pGRc.js";import"./preload-helper-D7CfCCEq.js";import"./string-KTo4Qfpe.js";const o=e({doNotWaitForMount:!0,name:"Dropdown",props:{dataOb:{type:String,default:""},active:{type:Boolean,default:!1},onDash:{type:Boolean,default:!1}},data:()=>({shiftToLeft:!1}),watch:{active(t){t?(this.shiftToLeft=!1,this.$nextTick(this.shiftDropdownLeftIfNeeded),window.addEventListener("resize",this.debouncedDropdownShift)):window.removeEventListener("resize",this.debouncedDropdownShift)}},created(){m.on("globalEvent:esc",this.hideDropdown),m.on("globalEvent:toggle:bottom-right",this.hideDropdown)},destroyed(){m.off("globalEvent:esc",this.hideDropdown),m.off("globalEvent:toggle:bottom-right",this.hideDropdown),window.removeEventListener("resize",this.shouldDropdownShiftToLeft)},methods:{hideDropdown(t){this.active&&(this.$touch&&t.stopPropagation(),this.$emit("toggle",!1))},shiftDropdownLeftIfNeeded(){const t=this.$refs.dropdown&&this.$refs.dropdown.getBoundingClientRect();if(!t)return;const e=window.innerWidth-t.right;this.shiftToLeft=!(e>=135)},debouncedDropdownShift(){clearTimeout(this.debounce),this.debounce=setTimeout((()=>{this.shiftToLeft=!1,this.$nextTick(this.shiftDropdownLeftIfNeeded)}),200)}}},(function(){var e=this,o=e._self._c;return o("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.hideDropdown,expression:"hideDropdown"}],staticClass:"more",class:{"shift-to-left":e.shiftToLeft,"dropdown-visible":e.active,"more-dash":e.onDash},attrs:{"data-test":"more-container"}},[e._t("moreToggle",(function(){return[o("div",{staticClass:"icon-wrapper more-toggle",class:{"dash-icon-wrapper":e.onDash,"u--touch-hide":e.onDash},attrs:{"data-test":"more-toggle","data-ob":e.dataOb},on:{click:function(t){return e.$emit("toggle",!e.active)}}},[o("inline-svg",{staticClass:"icon icon-ellipsis more-icon",class:{"dash-icon":e.onDash},attrs:{src:t}})],1)]})),o("transition",{attrs:{name:"open"}},[e.active?o("div",{ref:"dropdown",staticClass:"dropdown more-dropdown",class:{"app dash-dropdown nipple nipple-top-left":e.onDash},attrs:{"data-test":"dropdown"}},[e._t("header"),e._t("upsell"),o("ul",{staticClass:"dropdown-list",class:{"dropdown-hide":e.$slots.upsell},attrs:{"data-test":"dropdown-options"}},[e._t("default")],2)],2):e._e()])],2)}),[],!1,null,"0e8069d7").exports;export{o as default};