(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49f2ec4b"],{"097d":function(t,e,s){"use strict";var a=s("5ca1"),n=s("8378"),i=s("7726"),r=s("ebd6"),o=s("bcaa");a(a.P+a.R,"Promise",{finally:function(t){var e=r(this,n.Promise||i.Promise),s="function"==typeof t;return this.then(s?function(s){return o(e,t()).then(function(){return s})}:t,s?function(s){return o(e,t()).then(function(){throw s})}:t)}})},"11b2":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{ref:"slotWrapper"},[t._t("default")],2)])},n=[],i={name:"relocator",props:{container:{default:"body"}},computed:{containerElem(){return"string"===typeof this.container?document.querySelector(this.container):this.container}},mounted(){if(this.containerElem){let t=this.$refs.slotWrapper;t.parentNode.removeChild(t),this.containerElem.appendChild(t),this.$once("hook:beforeDestroy",()=>{t&&(t.parentNode.removeChild(t),this.$el.appendChild(t))})}}},r=i,o=s("2877"),l=Object(o["a"])(r,a,n,!1,null,null,null);e["a"]=l.exports},3905:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"popupContainer",staticClass:"popup",class:{active:t.isActive,"is-closing":t.isClosing},attrs:{tabindex:"-1"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:e.target!==e.currentTarget?null:void(!t.closeOnEsc||t.close())}}},[s("div",{staticClass:"popup-overlay",on:{click:function(e){e.preventDefault(),!t.closeOnOverlay||t.close()}}}),s("div",{staticClass:"popup-panel"},[t.closeBtn?s("span",{staticClass:"popup-close-handle popup-close",on:{click:function(e){return e.preventDefault(),t.close()}}}):t._e(),s("div",{staticClass:"popup-header"},[t._t("header")],2),s("div",{staticClass:"popup-content"},[t._t("content")],2),s("div",{staticClass:"popup-footer"},[t._t("footer")],2)])])},n=[],i={name:"popup",props:{closeOnEsc:{type:Boolean,default:!0},closeOnOverlay:{type:Boolean,default:!0},closeBtn:{type:Boolean,default:!0}},data(){return{isActive:!1,isClosing:!1}},methods:{open(){this.isActive=!0,this.isClosing=!1,this.$nextTick(()=>{this.$refs.popupContainer.focus()}),document.body.classList.add("popup-active"),this.$nextTick(()=>{let t=this.$el.querySelector("form input");t&&t.focus()})},close(){this.isActive&&(this.isClosing=!0,document.body.classList.remove("popup-active"),this.closingTimeoutId&&clearTimeout(this.closingTimeoutId),this.closingTimeoutId=setTimeout(()=>{this.isActive=!1,this.isClosing=!1},300))}}},r=i,o=s("2877"),l=Object(o["a"])(r,a,n,!1,null,null,null);e["a"]=l.exports},"438c":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"app-footer"},[s("div",{staticClass:"info"},[s("div",{staticClass:"info-item"},[t._v("Presentator v2.2.0")]),s("a",{staticClass:"info-item",attrs:{href:t.$getAppConfig("VUE_APP_REPO_URL"),target:"_blank",rel:"noopener"}},[s("i",{staticClass:"fe fe-github"}),s("span",{staticClass:"txt"},[t._v("Github")])]),t.loggedUser&&t.loggedUser.id?s("div",{staticClass:"info-item handle",on:{click:function(e){return e.preventDefault(),t.openFeedbackPopup()}}},[s("i",{staticClass:"fe fe-life-buoy"}),s("span",{staticClass:"txt"},[t._v(t._s(t.$t("Send feedback")))])]):t._e(),s("div",{staticClass:"info-item"},[s("languages-select")],1)]),!(t.$getAppConfig("VUE_APP_SHOW_CREDITS")<<0)?t._e():s("div",{staticClass:"credits"},[s("i18n",{attrs:{path:"Crafted by {author}"}},[s("a",{attrs:{slot:"author",href:"https://gani.bg",target:"_blank",rel:"noopener"},slot:"author"},[t._v("Gani")])])],1),s("relocator",[s("feedback-popup",{ref:"feedbackPopup"})],1)],1)},n=[],i=(s("ac6a"),s("ade3")),r=s("2f62"),o=s("11b2"),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{on:{submit:function(e){return e.preventDefault(),t.submitForm()}}},[s("popup",{ref:"popup",staticClass:"popup-sm",scopedSlots:t._u([{key:"header",fn:function(){return[s("h4",{staticClass:"title"},[t._v(t._s(t.$t("Help us improve Presentator")))])]},proxy:!0},{key:"content",fn:function(){return[s("div",{staticClass:"alert alert-light-border txt-center m-b-small"},[s("p",[t._v("\n                    "+t._s(t.$t("Found a bug or have a feature request?"))+" "),s("br"),s("i18n",{attrs:{path:"Fill the form below OR {issuesLink}."}},[s("a",{attrs:{slot:"issuesLink",href:t.$getAppConfig("VUE_APP_ISSUES_URL"),target:"_blank",rel:"noopener"},slot:"issuesLink"},[t._v(t._s(t.$t("create a GitHub issue")))])])],1)]),s("form-field",{staticClass:"required",attrs:{name:"message"}},[s("label",{attrs:{for:"feedback_message"}},[t._v(t._s(t.$t("Message")))]),s("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.message,expression:"message",modifiers:{trim:!0}}],attrs:{id:"feedback_message",required:""},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]},proxy:!0},{key:"footer",fn:function(){return[s("button",{staticClass:"btn btn-light-border",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.close()}}},[s("span",{staticClass:"txt"},[t._v(t._s(t.$t("Cancel")))])]),s("button",{staticClass:"btn btn-primary btn-cons btn-loader",class:{"btn-loader-active":t.isProcessing},attrs:{type:"submit"}},[s("span",{staticClass:"txt"},[t._v(t._s(t.$t("Send feedback")))])])]},proxy:!0}])})],1)},c=[],u=(s("097d"),s("f744")),p=s("3905"),d={name:"feedback-popup",components:{popup:p["a"]},data(){return{isProcessing:!1,message:""}},methods:{open(){this.resetForm(),this.$refs.popup.open(),this.$emit("open")},close(){this.$refs.popup.close(),this.$emit("close")},resetForm(){this.message=""},submitForm(){this.isProcessing||(this.isProcessing=!0,u["a"].Users.sendFeedback(this.message).then(t=>{this.$toast(this.$t("Thank you for the feedback!")),this.close(),this.resetForm()}).catch(t=>{this.$errResponseHandler(t)}).finally(()=>{this.isProcessing=!1}))}}},f=d,g=s("2877"),m=Object(g["a"])(f,l,c,!1,null,null,null),h=m.exports,v=s("f7ef");function b(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),s.push.apply(s,a)}return s}function C(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?b(s,!0).forEach(function(e){Object(i["a"])(t,e,s[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):b(s).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))})}return t}var _={name:"app-footer",components:{relocator:o["a"],"feedback-popup":h,"languages-select":v["a"]},computed:C({},Object(r["d"])({loggedUser:t=>t.user.user})),methods:{openFeedbackPopup(){this.$refs.feedbackPopup&&this.$refs.feedbackPopup.open()}}},y=_,k=Object(g["a"])(y,a,n,!1,null,null,null);e["a"]=k.exports},"5d68":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"auth-container"},[s("div",{staticClass:"flex-fill-block"}),s("div",{staticClass:"container-wrapper container-wrapper-sm"},[s("app-header"),s("div",{staticClass:"clearfix m-b-large"}),s("div",{staticClass:"panel auth-panel"},[s("h3",{staticClass:"panel-title"},[t._v(t._s(t.$t("Forgotten password")))]),t.processSuccess?s("div",{staticClass:"panel-content"},[s("div",{staticClass:"alert alert-transp-primary txt-center"},[s("p",[t._v("\n                        "+t._s(t.$t("We sent a recovery link to your email address:"))+" "),s("br"),s("strong",[t._v(t._s(t.email))])])])]):s("div",{staticClass:"panel-content"},[s("p",{staticClass:"txt-center"},[t._v(t._s(t.$t("We'll send a recovery link to your email:")))]),s("form",{staticClass:"register-form disabled",on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[s("form-field",{staticClass:"form-group-lg",attrs:{name:"email"}},[s("div",{staticClass:"input-group"},[s("label",{staticClass:"input-addon p-r-0",attrs:{for:"forgotten_password_email"}},[s("i",{staticClass:"fe fe-mail"})]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",id:"forgotten_password_email",placeholder:t.$t("Email"),required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})])]),s("button",{staticClass:"btn btn-primary btn-lg btn-loader block",class:{"btn-loader-active":t.isProcessing}},[s("span",{staticClass:"txt"},[t._v(t._s(t.$t("Send recovery link")))]),s("i",{staticClass:"fe fe-arrow-right-circle"})])],1)])]),s("div",{staticClass:"clearfix m-b-base"}),s("div",{staticClass:"auth-meta"},[s("router-link",{attrs:{to:{name:"login"}}},[t._v(t._s(t.$t("Return to login.")))])],1)],1),s("div",{staticClass:"flex-fill-block m-b-base"}),s("app-footer")],1)},n=[],i=(s("097d"),s("f744")),r=s("dbb6"),o=s("438c"),l={name:"forgotten-password",components:{"app-header":r["a"],"app-footer":o["a"]},data(){return{email:"",isProcessing:!1,processSuccess:!1}},beforeMount(){this.$setDocumentTitle(()=>this.$t("Forgotten password"))},methods:{onSubmit(){this.isProcessing||(this.isProcessing=!0,i["a"].Users.requestPasswordReset(this.email).then(t=>{this.processSuccess=!0}).catch(t=>{this.processSuccess=!1,this.$errResponseHandler(t)}).finally(()=>{this.isProcessing=!1}))}}},c=l,u=s("2877"),p=Object(u["a"])(c,a,n,!1,null,null,null);e["default"]=p.exports},"81fb":function(t,e,s){t.exports=s.p+"spa-resources/img/logogram.a11cb759.svg"},a5b8:function(t,e,s){"use strict";var a=s("d8e8");function n(t){var e,s;this.promise=new t(function(t,a){if(void 0!==e||void 0!==s)throw TypeError("Bad Promise constructor");e=t,s=a}),this.resolve=a(e),this.reject=a(s)}t.exports.f=function(t){return new n(t)}},bcaa:function(t,e,s){var a=s("cb7c"),n=s("d3f4"),i=s("a5b8");t.exports=function(t,e){if(a(t),n(e)&&e.constructor===t)return e;var s=i.f(t),r=s.resolve;return r(e),s.promise}},dbb6:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"app-logo-wrapper"},[a("router-link",{staticClass:"app-logo",attrs:{to:{name:"home"}}},[a("img",{staticClass:"img",attrs:{src:s("81fb"),alt:"Presentator logo",width:"44"}}),a("span",{staticClass:"txt"},[t._v("Presentator")])])],1)},n=[],i={name:"app-header"},r=i,o=s("2877"),l=Object(o["a"])(r,a,n,!1,null,null,null);e["a"]=l.exports},f7ef:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"languages-select",class:{loading:t.isChanging}},[s("div",{staticClass:"selected-language"},[s("span",{staticClass:"txt language-title"},[t._v(t._s(t.activeLanguageTitle))]),t._v("\n        ("),s("span",{staticClass:"txt language-code"},[t._v(t._s(t.activeLanguageCode))]),t._v(")\n    ")]),s("toggler",{staticClass:"dropdown dropdown-sm"},t._l(t.languages,function(e,a){return s("div",{key:"language_"+a,staticClass:"dropdown-item",class:{active:t.activeLanguageCode==a},on:{click:function(e){return e.preventDefault(),t.changeLanguage(a)}}},[s("small",{staticClass:"label language-code m-r-5",class:t.activeLanguageCode==a?"label-transp-primary":"label-light-border"},[t._v(t._s(a))]),s("span",{staticClass:"txt language-title"},[t._v(t._s(e))])])}),0)],1)},n=[],i=(s("097d"),s("9225")),r={name:"languages-select",data(){return{isChanging:!1,languages:Object.assign({},i["c"])}},watch:{"$i18n.locale":function(t,e){"function"===typeof document._titleFunc&&this.$setDocumentTitle(document._titleFunc)}},computed:{activeLanguageCode(){return this.$i18n.locale},activeLanguageTitle(){return this.languages[this.activeLanguageCode]}},methods:{changeLanguage(t){this.isChanging=!0,Object(i["a"])(t).finally(()=>{this.isChanging=!1})}}},o=r,l=s("2877"),c=Object(l["a"])(o,a,n,!1,null,null,null);e["a"]=c.exports}}]);