import{T as t,B as e}from"./PlusBenefits-BpoeVvVL.js";import s from"./Upgrade-CudFDXBe.js";import a from"./Thanks-wjdUm54v.js";import{_ as i,a as r}from"./star-rating-CNohptmf.js";import{_ as o,a as n}from"./icon-chrome-BdhFuvxf.js";import{n as l,E as c,A as u,u as p}from"./promisifiedChrome-CheD9WtZ.js";import{S as d}from"./SmoothReflow-B3dWZqEj.js";import{p as h}from"./reactiveCustomization-CrL2eTrh.js";import{e as S}from"./ResizeSensor-CXS_pGRc.js";import{f,h as v,j as g}from"./dashboard-CF_jRhAY.js";import{o as y}from"./onboardingStepCollection-CDnR_iEN.js";import{M as _}from"./timestampDb-sTUCijT1.js";import{u as b}from"./SubscriptionSummary-Bb_CwKvU.js";import{_ as w}from"./icon-close-BUGl_M7j.js";import{_ as E}from"./icon-error-state-BKQhfBCj.js";import"./star-KworSO8x.js";import"./icon-back-D_TFrgyJ.js";import"./Logger-Dqn8sDPg.js";import"./environmentVariables-Cy83xda0.js";import"./preload-helper-D7CfCCEq.js";import"./string-KTo4Qfpe.js";import"./thanks-DfYnO-qW.js";import"./allComponentsMounted-C3UsG_cA.js";import"./VueBase-CjPGMLuv.js";import"./index-CJJH83pl.js";import"./main--IJuvtTE.js";import"./localStorage-B4mFdj8F.js";import"./migrateLegacyUserMessageHandler-CU6TUnqH.js";import"./itemModelMixin-BHakSWl-.js";import"./namesMixin-EAvqmdCw.js";import"./itemDataServiceMixins-R3DPkCUM.js";import"./focusModeHelpers-Cqkll3ju.js";import"./arrow-B0GpGOd-.js";import"./LinksService-BV1Om5gI.js";import"./icon-next-B4hjdiAA.js";import"./authService-B5VliZ3K.js";import"./icon-confetti-Dz2LojDe.js";import"./siteBlockerGroups-1V1XRNi6.js";import"./constants-D-OQQ8lR.js";import"./compareObjects-BF7sSNEf.js";const R=new Date;const I=l({name:"TrialOffer",props:{trialLength:{type:Number,required:!0},yearlyPrice:{type:String,required:!0},badgeText:{type:String,required:!0}},computed:{reminderDate(){return m.utils.dateAdd(R,"day",this.trialLength-2)},trialEndDate(){return m.utils.dateAdd(R,"day",this.trialLength)},reminderDateString(){return m.utils.getMonthName(this.reminderDate,!0)+" "+this.reminderDate.getDate()},trialEndDateString(){return m.utils.getMonthName(this.trialEndDate,!0)+" "+this.trialEndDate.getDate()}}},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"trial-offer"},[e("p",{staticClass:"subheading"},[t._v("Get the tools you need to achieve your highest potential, all in one place")]),e("div",{staticClass:"timeline"},[e("div",{staticClass:"timeline-heading"},[t._v(t._s(t.trialLength)+"-day free trial")]),t._m(0),e("div",{staticClass:"timeline-graph"},[e("inline-svg",{staticClass:"timeline-image",attrs:{src:i}}),e("div",{staticClass:"timeline-steps"},[t._m(1),e("div",[e("div",{staticClass:"timeline-day"},[t._v(t._s(t.reminderDateString))]),e("div",{staticClass:"timeline-info"},[t._v("You get a reminder.")])]),e("div",[e("div",{staticClass:"timeline-day"},[t._v(t._s(t.trialEndDateString))]),e("div",{staticClass:"timeline-info"},[t._v("Free trial ends.")])])])],1)]),e("a",{staticClass:"button",attrs:{"data-test":"proceed"},on:{click:function(e){return t.$emit("nextStep")}}},[t._v("Try for free")]),e("p",{staticClass:"fine-print"},[t._v(t._s(t.trialLength)+"-day free trial, then $"+t._s(t.yearlyPrice)+"/year. "+t._s(t.badgeText))]),t._t("default"),e("div",{staticClass:"footer"},[e("div",{staticClass:"footer-border"}),e("div",{staticClass:"footer-body"},[e("div",{staticClass:"featured"},[e("div",{staticClass:"featured-in"},[t._v("Featured in")]),e("div",{staticClass:"stores"},[e("div",{staticClass:"store-item"},[e("inline-svg",{staticClass:"icon icon-apple",attrs:{src:o}}),e("span",{staticClass:"store-item-text"},[t._v("App Store")])],1),e("div",{staticClass:"store-item"},[e("inline-svg",{staticClass:"icon icon-chrome",attrs:{src:n}}),e("span",{staticClass:"store-item-text"},[t._v("Web Store")])],1)])]),e("div",{staticClass:"footer-right"},[e("div",{staticClass:"stars"},[e("inline-svg",{attrs:{width:"86",height:"14",src:r}})],1),t._m(2)])])])],2)}),[function(){var t=this,e=t._self._c;return e("p",{staticClass:"timeline-description"},[t._v("You won’t be charged until after your free trial ends."),e("br"),t._v("You can cancel anytime.")])},function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"timeline-day"},[t._v("Today")]),e("div",{staticClass:"timeline-info"},[t._v("Start exploring today.")])])},function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"rating"},[t._v("4.4/5")]),e("div",{staticClass:"review-count"},[t._v("13,000+ reviews")])])}],!1,null,"3aea48ff").exports,T={REGISTER:"register",SIGN_IN:"sign-in",RESET_PASSWORD:"reset-password"};const C=l({name:"AuthForm",components:{SmoothReflow:d},props:{activeForm:{type:String,required:!0},onSuccess:{type:[Function,void 0],default:void 0},onError:{type:[Function,void 0],default:void 0}},unreactive:()=>({formTypes:{[T.REGISTER]:{submit:"register",buttonText:"Create account"},[T.SIGN_IN]:{submit:"signIn",buttonText:"Sign in"},[T.RESET_PASSWORD]:{submit:"resetPassword",buttonText:"Reset password",passwordPlaceholder:"New password"}}}),data:()=>({email:"",password:"",processing:!1,error:"",errorInput:""}),computed:{formConfig(){return this.formTypes[this.activeForm]},buttonText(){return this.processing?"Processing…":this.formConfig.buttonText}},created(){window.addEventListener("keyup",this.onKeyUp)},destroyed(){window.removeEventListener("keyup",this.onKeyUp)},methods:{async submit(){var t,e,s,a,i,r;this.clearError();try{this.validate(this.email,this.password),this.processing=!0,await(null==(t=this[this.formConfig.submit])?void 0:t.call(this)),null==(e=this.onSuccess)||e.call(this)}catch(o){429===(null==(s=o.response)?void 0:s.status)?this.setError(S.SERVER_ERROR_429):(null==(i=null==(a=o.response)?void 0:a.data)?void 0:i.detail)?this.setError(o.response.data.detail):"string"==typeof o||"string"==typeof o.error||o instanceof c?this.setError(o):this.setError(S.SERVER_ERROR_GENERAL),null==(r=this.onError)||r.call(this,o),console.error(o)}finally{this.processing=!1}},validate(t,e){if(!t)throw new c({message:S.EMAIL_EMPTY,input:"email"});if(!f(t))throw new c({message:S.EMAIL_INVALID_SHORT,input:"email"});if(!e)throw new c({message:S.PASSWORD_EMPTY,input:"password"});if(e.length<6)throw new c({message:S.PASSWORD_INVALID,input:"password"})},onKeyUp(t){"Enter"===t.code&&this.submit()},clearError(){this.error="",this.errorInput=""},setError(t){t instanceof c?(this.error=t.message,this.errorInput=t.input):t.error?(this.error=t.error,this.errorInput=t.input):"string"==typeof t&&(this.error=t)},async setNewUserState(t){v(t),localStorage.setItem("email",this.email),u.identify(),m.syncCoordinator.syncSettings((()=>{m.widgetManager.populateWidgets(),m.cmd("user.cleanup",{type:"notifications"}),m.cmd("settings.rerender")})),m.trigger("user:successfulLogin",(()=>{localStorage.setItem("loggedIn",m.now()),localStorage.removeItem("onetimeSent"),localStorage.removeItem("doLoginOnNextLoad")}))},async register(){var t,e,s;try{const{data:t}=await this.$xhr.post("user/register",{name:h.displayname,email:this.email,password:this.password});await this.setNewUserState(t)}catch(a){if(console.error(a),409===(null==(t=a.response)?void 0:t.status))throw S.EXISTING_USER;if("user_already_exists"===(null==(s=null==(e=a.response)?void 0:e.data)?void 0:s.type))throw S.EXISTING_USER;throw a}},async signIn(){var t;try{const{data:t}=await this.$xhr.post("user/authenticate",{username:this.email,password:this.password});await m.utils.clearStorage(),await this.setNewUserState(t)}catch(e){if(console.error(e),401===(null==(t=e.response)?void 0:t.status))throw S.INCORRECT_COMBINATION;throw e}},async resetPassword(){await this.$xhr.post("user/forgot",{email:this.email,password:this.password})}}},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"auth-form"},[e("div",{staticClass:"input-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],class:{error:"email"===t.error.input},attrs:{"data-test":"email",type:"email",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),e("div",{staticClass:"input-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],class:{error:"password"===t.error.input},attrs:{"data-test":"password",type:"password",placeholder:t.formConfig.passwordPlaceholder||"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._t("password-right")],2),e("smooth-reflow",{directives:[{name:"show",rawName:"v-show",value:t.error,expression:"error"}],staticClass:"error-container",attrs:{nested:!0}},[t.error?e("div",{staticClass:"error",attrs:{"data-test":"error"}},[t._v(t._s(t.error))]):t._e()]),e("div",{staticClass:"button",attrs:{"data-test":"submit-button"},on:{click:t.submit}},[t._v(t._s(t.buttonText))])],1)}),[],!1,null,"8cade4f9").exports,x=new u({feature:"paywall"});const P=l({name:"PlusOffer",components:{Testimonials:t,BenefitList:e,Upgrade:s,Thanks:a,TrialOffer:I,SmoothReflow:d,AuthForm:C},props:{plans:{type:Object,default:()=>({})},sales:{type:Object,default:()=>({})},plansError:{type:Boolean,default:!1},activeSubStepIndex:{type:Number,required:!0},forcedActive:{type:Boolean,default:!1}},unreactive:()=>({analyticsSubStepNames:["trial offer","auth form - register","auth form - sign in","auth form - reset password","payment form","thanks","error - existing trial"],fadeDuration:500,subStepsEnum:{TRIAL_OFFER:0,AUTH_FORM_REGISTER:1,AUTH_FORM_SIGN_IN:2,AUTH_FORM_RESET_PASSWORD:3,PAYMENT_FORM:4,THANKS:5,ERROR_EXISTING_TRIAL:6},authFormTypesEnum:T}),data:()=>({contentShown:!1,loadingIconShown:!1,skipButtonsShown:!0,changePasswordDisclaimerShown:!1,profileDetails:{}}),computed:{prices(){const t=this.plans.yearly||{},e=this.sales.yearly||{};return Object.keys(e).length?{yearly:e.friendlyPrice,monthly:e.friendlyMonthlyPrice,trialLength:e.trialDays||7,oldYearly:t.friendlyPrice,oldMonthly:t.friendlyMonthlyPrice,isSale:!0}:{yearly:t.friendlyPrice,monthly:t.friendlyMonthlyPrice,trialLength:t.trialDays||7,isSale:!1}},yearlyPrice(){return this.prices.yearly},monthlyPrice(){return this.prices.monthly},trialLength(){return this.prices.trialLength},badgeText(){var t,e;return this.prices.isSale?null==(t=this.sales.yearly)?void 0:t.badgeText:null==(e=this.plans.yearly)?void 0:e.badgeText},headerBadgeText(){var t,e;return this.prices.isSale?(null==(t=this.sales.yearly)?void 0:t.badgeText)+" – "+(null==(e=this.sales.yearly)?void 0:e.title):"Special offer"},iframeInfo(){return{textInfo:{button:`Start my ${this.trialLength}-day free trial`,finePrint:`A 1-year Momentum Plus subscription is $${this.monthlyPrice}/month billed as one payment of $${this.yearlyPrice} USD. Your subscription will automatically renew every 12 months until you cancel it.`},props:{trialLength:this.trialLength,yearlyPrice:this.yearlyPrice,monthlyPrice:this.monthlyPrice,oldYearlyPrice:this.prices.oldYearly,oldMonthlyPrice:this.prices.oldMonthly},component:"SummaryV2"}}},watch:{plans(){this.loadingIconShown&&this.showContentIfReady()},profileDetails(){this.loadingIconShown&&this.showContentIfReady()},plansError:{handler(){this.plansError&&this.skipPaywall({autoSkip:"plansError"})},immediate:!0},activeSubStepIndex(){x.capture("paywall sub-step show",{sub_step:this.analyticsSubStepNames[this.activeSubStepIndex]}),this.activeSubStepIndex===this.subStepsEnum.THANKS&&(this.skipButtonsShown=!1)}},async mounted(){this.$xhr.get("/user/profile?details=1").then((t=>this.profileDetails=t.data)).catch((t=>{console.error(t),this.skipPaywall({autoSkip:"profileDetailsError"})})),await p.delay(this.fadeDuration),this.showContentIfReady()},methods:{userIsUnregistered:()=>p.getUserState().isUnregistered,showContentIfReady(){Object.keys(this.plans).length&&Object.keys(this.profileDetails).length?(this.contentShown=!0,this.loadingIconShown=!1,x.capture("paywall sub-step show",{sub_step:this.analyticsSubStepNames[this.activeSubStepIndex]})):this.loadingIconShown=!0},async skipPaywall({autoSkip:t}={}){t?x.capture("paywall load error",{case:t}):(x.capture("paywall skip"),this.contentShown=!1,await p.delay(this.fadeDuration)),this.$emit("dismiss")},nextSubStep(){this.$emit("goToSubStep",this.getNextSubStep())},async trialSignupSuccess(){m.cmd("user.cleanup",{type:"notifications"}),m.cmd("settings.rerender"),await b().refresh(),this.nextSubStep()},async loadUpgradeTour(){this.contentShown=!1,await p.delay(this.fadeDuration),x.capture("paywall trial sign up"),this.$emit("stepComplete")},refresh(){let t=window.location;this.forcedActive&&(t=p.extendUrlParams(window.location,{modalStep:g.PLUS_OFFER,modalSubStepIndex:this.subStepsEnum.PAYMENT_FORM})),location.assign(t)},onProcessing(){this.skipButtonsShown=!1},onProcessingError(){this.skipButtonsShown=!0,x.capture("paywall trial sign up error")},afterRegister(){x.capture("authentication succeed",{case:this.analyticsSubStepNames[this.activeSubStepIndex]}),this.nextSubStep()},async afterSignIn(){x.capture("authentication succeed",{case:this.analyticsSubStepNames[this.activeSubStepIndex]}),await y.refresh({mode:_.Server}),this.profileDetails=(await this.$xhr.get("/user/profile?details=1")).data,y.saveStepProgress(y.getStep(g.PLUS_OFFER),this.getNextSubStep(),"active");const t=y.getStep(g.FREE_INTRODUCTION);t&&await y.delete(t),location.reload()},afterResetPassword(){this.changePasswordDisclaimerShown=!0,this.nextSubStep()},onAuthenticationError(t){x.capture("athentication error",{case:this.analyticsSubStepNames[this.activeSubStepIndex],error:"string"==typeof t?t:t.message})},getNextSubStep(){return this.$plus?this.subStepsEnum.THANKS:this.profileDetails.subscriptionSummary.trialEnd?this.subStepsEnum.ERROR_EXISTING_TRIAL:this.activeSubStepIndex===this.subStepsEnum.AUTH_FORM_REGISTER||this.activeSubStepIndex===this.subStepsEnum.AUTH_FORM_SIGN_IN?this.subStepsEnum.PAYMENT_FORM:this.activeSubStepIndex===this.subStepsEnum.AUTH_FORM_RESET_PASSWORD?this.subStepsEnum.AUTH_FORM_SIGN_IN:this.activeSubStepIndex===this.subStepsEnum.TRIAL_OFFER?this.userIsUnregistered()?this.subStepsEnum.AUTH_FORM_REGISTER:this.subStepsEnum.PAYMENT_FORM:void 0}}},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"plus-offer dark"},[e("transition",{attrs:{name:"fade",duration:t.fadeDuration}},[t.contentShown?e("div",{staticClass:"paywall"},[e("div",{key:"1",staticClass:"benefits-container"},[e("div",{staticClass:"benefits"},[e("div",{staticClass:"heading"},[t._v("Unlock the best experience")]),e("benefit-list"),e("a",{staticClass:"button dash-button button-more",attrs:{href:"https://momentumdash.com/plus",target:"_blank"}},[t._v("See all Plus has to offer")])],1),e("testimonials")],1),e("div",{key:"2",staticClass:"box app light-full"},[t.skipButtonsShown?e("span",{staticClass:"icon-wrapper skip-x",attrs:{"data-test":"skip-icon"},on:{click:t.skipPaywall}},[e("inline-svg",{staticClass:"icon icon-hide",attrs:{src:w}})],1):t._e(),e("smooth-reflow",{staticClass:"animation-container",attrs:{"transition-group":!0,"hide-overflow":!0}},[t.activeSubStepIndex===t.subStepsEnum.TRIAL_OFFER?e("div",{key:t.subStepsEnum.TRIAL_OFFER,staticClass:"offer step-container",attrs:{"data-test":"offer"}},[e("div",{staticClass:"special-offer"},[t._v(t._s(t.headerBadgeText))]),e("h2",{staticClass:"box-header"},[t._v("Try Momentum Plus for free")]),e("trial-offer",{attrs:{"trial-length":t.trialLength,"badge-text":t.badgeText,"yearly-price":t.yearlyPrice},on:{nextStep:t.nextSubStep}})],1):t._e(),t.activeSubStepIndex===t.subStepsEnum.AUTH_FORM_REGISTER?e("div",{key:t.subStepsEnum.AUTH_FORM_REGISTER,staticClass:"login step-container",attrs:{"data-test":"auth-form-register"}},[e("h2",{staticClass:"box-header"},[t._v("Create your account")]),e("auth-form",{attrs:{"active-form":t.authFormTypesEnum.REGISTER,"on-success":t.afterRegister,"on-error":t.onAuthenticationError}}),t.forcedActive?e("div",{staticClass:"disclaimer"},[t._v("Your current logged out data will be saved to your new account.")]):t._e()],1):t._e(),t.activeSubStepIndex===t.subStepsEnum.AUTH_FORM_SIGN_IN?e("div",{key:t.subStepsEnum.AUTH_FORM_SIGN_IN,staticClass:"login step-container",attrs:{"data-test":"auth-form-sign-in"}},[e("h2",{staticClass:"box-header"},[t._v("Sign in")]),e("auth-form",{attrs:{"active-form":t.authFormTypesEnum.SIGN_IN,"on-success":t.afterSignIn,"on-error":t.onAuthenticationError},scopedSlots:t._u([{key:"password-right",fn:function(){return[e("div",{staticClass:"reset-password-container"},[e("div",{staticClass:"reset-password-button",attrs:{"data-test":"reset-password-btn"},on:{click:function(e){return t.$emit("goToSubStep",t.subStepsEnum.AUTH_FORM_RESET_PASSWORD)}}},[t._v("Reset password")])])]},proxy:!0}],null,!1,706947599)}),t.changePasswordDisclaimerShown?e("div",{staticClass:"disclaimer warning"},[t._v("Please check your email to confirm your password change, then sign in")]):t._e(),t.forcedActive?e("div",{staticClass:"disclaimer"},[t._v("Note: if you have been using Momentum logged out and would like to keep that data, please register first to save the data to an account. If you log into an account, the current logged out data will be lost.")]):t._e(),e("div",{staticClass:"auth-form-bottom"},[e("span",[t._v("Don't have an account? "),e("a",{attrs:{"data-test":"register-btn"},on:{click:function(e){return t.$emit("goToSubStep",t.subStepsEnum.AUTH_FORM_REGISTER)}}},[t._v("Register")])])])],1):t._e(),t.activeSubStepIndex===t.subStepsEnum.AUTH_FORM_RESET_PASSWORD?e("div",{key:t.subStepsEnum.AUTH_FORM_RESET_PASSWORD,staticClass:"login step-container",attrs:{"data-test":"auth-form-reset-password"}},[e("h2",{staticClass:"box-header"},[t._v("Reset password")]),e("auth-form",{attrs:{"active-form":t.authFormTypesEnum.RESET_PASSWORD,"on-success":t.afterResetPassword,"on-error":t.onAuthenticationError}}),e("div",{staticClass:"auth-form-bottom"},[e("span",[e("a",{attrs:{"data-test":"sign-in-btn"},on:{click:function(e){return t.$emit("goToSubStep",t.subStepsEnum.AUTH_FORM_SIGN_IN)}}},[t._v("← Sign in")])])])],1):t._e(),e("div",{directives:[{name:"show",rawName:"v-show",value:t.activeSubStepIndex===t.subStepsEnum.PAYMENT_FORM,expression:"activeSubStepIndex === subStepsEnum.PAYMENT_FORM"}],key:t.subStepsEnum.PAYMENT_FORM,staticClass:"checkout step-container",attrs:{"data-test":"checkout"}},[e("div",{staticClass:"special-offer"},[t._v(t._s(t.headerBadgeText))]),e("h2",{staticClass:"box-header"},[t._v("Try Momentum Plus for free")]),e("upgrade",{attrs:{version:2,"iframe-info":t.iframeInfo,plans:t.plans,sales:t.sales,"selected-plan":"yearly","trial-length":t.trialLength},on:{nextStep:t.trialSignupSuccess,processing:t.onProcessing,processingError:t.onProcessingError}},[e("inline-svg",{staticClass:"error-state-icon",attrs:{src:E}}),e("p",{staticClass:"error-state-heading"},[t._v("Oops! Something didn’t go as expected."),e("br"),t._v(" Please try again.")]),e("button",{staticClass:"button",on:{click:t.refresh}},[t._v("Retry")])],1)],1),t.activeSubStepIndex===t.subStepsEnum.THANKS?e("div",{key:t.subStepsEnum.THANKS,staticClass:"thank-you step-container"},[e("h2",{staticClass:"box-header"},[t._v("Thanks!")]),e("thanks",{attrs:{"show-reload-button":!1}},[e("a",{staticClass:"button",attrs:{"data-test":"proceed"},on:{click:t.loadUpgradeTour}},[t._v("Continue to Momentum plus")])])],1):t._e(),e("div",{directives:[{name:"show",rawName:"v-show",value:t.activeSubStepIndex===t.subStepsEnum.ERROR_EXISTING_TRIAL,expression:"activeSubStepIndex === subStepsEnum.ERROR_EXISTING_TRIAL"}],key:t.subStepsEnum.ERROR_EXISTING_TRIAL,staticClass:"error-existing-trial step-container"},[e("h2",{staticClass:"box-header"},[t._v("Oops!")]),e("p",[t._v("You have already completed a trial. If you would like another trial, please "),e("a",{staticClass:"contact-link",attrs:{target:"_blank",href:"https://momentumdash.com/contact"}},[t._v("get in touch")]),t._v("!")])])])],1)]):t._e()]),t.loadingIconShown?e("i",{staticClass:"loading-icon"}):t._e()],1)}),[],!1,null,"c4114c54").exports;export{P as default};