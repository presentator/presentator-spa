(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1bf71f0a"],{"097d":function(e,t,s){"use strict";var a=s("5ca1"),n=s("8378"),i=s("7726"),r=s("ebd6"),o=s("bcaa");a(a.P+a.R,"Promise",{finally:function(e){var t=r(this,n.Promise||i.Promise),s="function"==typeof e;return this.then(s?function(s){return o(t,e()).then(function(){return s})}:e,s?function(s){return o(t,e()).then(function(){throw s})}:e)}})},"11b2":function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{ref:"slotWrapper"},[e._t("default")],2)])},n=[],i={name:"relocator",props:{container:{default:"body"}},computed:{containerElem(){return"string"===typeof this.container?document.querySelector(this.container):this.container}},mounted(){if(this.containerElem){let e=this.$refs.slotWrapper;e.parentNode.removeChild(e),this.containerElem.appendChild(e),this.$once("hook:beforeDestroy",()=>{e&&(e.parentNode.removeChild(e),this.$el.appendChild(e))})}}},r=i,o=s("2877"),c=Object(o["a"])(r,a,n,!1,null,null,null);t["a"]=c.exports},3905:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{ref:"popupContainer",staticClass:"popup",class:{active:e.isActive,"is-closing":e.isClosing},attrs:{tabindex:"-1"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:t.target!==t.currentTarget?null:void(!e.closeOnEsc||e.close())}}},[s("div",{staticClass:"popup-overlay",on:{click:function(t){t.preventDefault(),!e.closeOnOverlay||e.close()}}}),s("div",{staticClass:"popup-panel"},[e.closeBtn?s("span",{staticClass:"popup-close-handle popup-close",on:{click:function(t){return t.preventDefault(),e.close()}}}):e._e(),s("div",{staticClass:"popup-header"},[e._t("header")],2),s("div",{staticClass:"popup-content"},[e._t("content")],2),s("div",{staticClass:"popup-footer"},[e._t("footer")],2)])])},n=[],i={name:"popup",props:{closeOnEsc:{type:Boolean,default:!0},closeOnOverlay:{type:Boolean,default:!0},closeBtn:{type:Boolean,default:!0}},data(){return{isActive:!1,isClosing:!1}},methods:{open(){this.isActive=!0,this.isClosing=!1,this.$nextTick(()=>{this.$refs.popupContainer.focus()}),document.body.classList.add("popup-active"),this.$nextTick(()=>{let e=this.$el.querySelector("form input");e&&e.focus()})},close(){this.isActive&&(this.isClosing=!0,document.body.classList.remove("popup-active"),this.closingTimeoutId&&clearTimeout(this.closingTimeoutId),this.closingTimeoutId=setTimeout(()=>{this.isActive=!1,this.isClosing=!1},300))}}},r=i,o=s("2877"),c=Object(o["a"])(r,a,n,!1,null,null,null);t["a"]=c.exports},"438c":function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("footer",{staticClass:"app-footer"},[s("div",{staticClass:"info"},[s("div",{staticClass:"info-item"},[e._v("Presentator v2.0.0")]),s("a",{staticClass:"info-item",attrs:{href:e.$getAppConfig("VUE_APP_REPO_URL"),target:"_blank",rel:"noopener"}},[s("i",{staticClass:"fe fe-github"}),s("span",{staticClass:"txt"},[e._v("Github")])]),e.loggedUser&&e.loggedUser.id?s("div",{staticClass:"info-item handle",on:{click:function(t){return t.preventDefault(),e.openFeedbackPopup()}}},[s("i",{staticClass:"fe fe-life-buoy"}),s("span",{staticClass:"txt"},[e._v(e._s(e.$t("Send feedback")))])]):e._e(),s("div",{staticClass:"info-item"},[s("languages-select")],1)]),!(e.$getAppConfig("VUE_APP_SHOW_CREDITS")<<0)?e._e():s("div",{staticClass:"credits"},[s("i18n",{attrs:{path:"Crafted by {author}"}},[s("a",{attrs:{place:"author",href:"https://gani.bg",target:"_blank",rel:"noopener"}},[e._v("Gani")])])],1),s("relocator",[s("feedback-popup",{ref:"feedbackPopup"})],1)],1)},n=[],i=(s("ac6a"),s("ade3")),r=s("2f62"),o=s("11b2"),c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("form",{on:{submit:function(t){return t.preventDefault(),e.submitForm()}}},[s("popup",{ref:"popup",staticClass:"popup-sm",scopedSlots:e._u([{key:"header",fn:function(){return[s("h4",{staticClass:"title"},[e._v(e._s(e.$t("Help us improve Presentator")))])]},proxy:!0},{key:"content",fn:function(){return[s("div",{staticClass:"alert alert-light-border txt-center m-b-small"},[s("p",[e._v("\n                    "+e._s(e.$t("Found a bug or have a feature request?"))+" "),s("br"),s("i18n",{attrs:{path:"Fill the form below OR {issuesLink}."}},[s("a",{attrs:{place:"issuesLink",href:e.$getAppConfig("VUE_APP_ISSUES_URL"),target:"_blank",rel:"noopener"}},[e._v(e._s(e.$t("create a GitHub issue")))])])],1)]),s("form-field",{staticClass:"required",attrs:{name:"message"}},[s("label",{attrs:{for:"feedback_message"}},[e._v(e._s(e.$t("Message")))]),s("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:e.message,expression:"message",modifiers:{trim:!0}}],attrs:{id:"feedback_message",required:""},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])]},proxy:!0},{key:"footer",fn:function(){return[s("button",{staticClass:"btn btn-light-border",attrs:{type:"button"},on:{click:function(t){return t.preventDefault(),e.close()}}},[s("span",{staticClass:"txt"},[e._v(e._s(e.$t("Cancel")))])]),s("button",{staticClass:"btn btn-primary btn-cons btn-loader",class:{"btn-loader-active":e.isProcessing},attrs:{type:"submit"}},[s("span",{staticClass:"txt"},[e._v(e._s(e.$t("Send feedback")))])])]},proxy:!0}])})],1)},l=[],u=(s("097d"),s("f744")),p=s("3905"),f={name:"feedback-popup",components:{popup:p["a"]},data(){return{isProcessing:!1,message:""}},methods:{open(){this.resetForm(),this.$refs.popup.open(),this.$emit("open")},close(){this.$refs.popup.close(),this.$emit("close")},resetForm(){this.message=""},submitForm(){this.isProcessing||(this.isProcessing=!0,u["a"].Users.sendFeedback(this.message).then(e=>{this.$toast(this.$t("Thank you for the feedback!")),this.close(),this.resetForm()}).catch(e=>{this.$errResponseHandler(e)}).finally(()=>{this.isProcessing=!1}))}}},d=f,g=s("2877"),h=Object(g["a"])(d,c,l,!1,null,null,null),m=h.exports,v=s("f7ef");function b(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,a)}return s}function C(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?b(s,!0).forEach(function(t){Object(i["a"])(e,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):b(s).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}var _={name:"app-footer",components:{relocator:o["a"],"feedback-popup":m,"languages-select":v["a"]},computed:C({},Object(r["d"])({loggedUser:e=>e.user.user})),methods:{openFeedbackPopup(){this.$refs.feedbackPopup&&this.$refs.feedbackPopup.open()}}},y=_,k=Object(g["a"])(y,a,n,!1,null,null,null);t["a"]=k.exports},"81fb":function(e,t,s){e.exports=s.p+"spa-resources/img/logogram.a11cb759.svg"},a5b8:function(e,t,s){"use strict";var a=s("d8e8");function n(e){var t,s;this.promise=new e(function(e,a){if(void 0!==t||void 0!==s)throw TypeError("Bad Promise constructor");t=e,s=a}),this.resolve=a(t),this.reject=a(s)}e.exports.f=function(e){return new n(e)}},b684:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"auth-container"},[s("div",{staticClass:"flex-fill-block"}),s("div",{staticClass:"container-wrapper container-wrapper-sm"},[s("app-header"),s("div",{staticClass:"clearfix m-b-large"}),s("div",{staticClass:"panel auth-panel"},[s("h3",{staticClass:"panel-title"},[e._v(e._s(e.$t("Error {code}",{code:404})))]),s("div",{staticClass:"panel-content txt-center"},[s("p",[e._v(e._s(e.$t("Oops, the page you were looking for does not exist or is temporary unavailable.")))]),s("div",{staticClass:"clearfix m-b-small"}),s("router-link",{staticClass:"btn btn-primary btn-lg btn-block",attrs:{to:{name:"home"}}},[s("span",{staticClass:"txt"},[e._v(e._s(e.$t("Go to homepage")))]),s("i",{staticClass:"fe fe-arrow-right-circle"})])],1)]),s("div",{staticClass:"clearfix m-b-base"})],1),s("div",{staticClass:"flex-fill-block m-b-base"}),s("app-footer")],1)},n=[],i=s("dbb6"),r=s("438c"),o={name:"not-found",components:{"app-header":i["a"],"app-footer":r["a"]},beforeMount(){this.$setDocumentTitle(()=>this.$t("Error {code}",{code:404}))}},c=o,l=s("2877"),u=Object(l["a"])(c,a,n,!1,null,null,null);t["default"]=u.exports},bcaa:function(e,t,s){var a=s("cb7c"),n=s("d3f4"),i=s("a5b8");e.exports=function(e,t){if(a(e),n(t)&&t.constructor===e)return t;var s=i.f(e),r=s.resolve;return r(t),s.promise}},dbb6:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"app-logo-wrapper"},[a("router-link",{staticClass:"app-logo",attrs:{to:{name:"home"}}},[a("img",{staticClass:"img",attrs:{src:s("81fb"),alt:"Presentator logo",width:"44"}}),a("span",{staticClass:"txt"},[e._v("Presentator")])])],1)},n=[],i={name:"app-header"},r=i,o=s("2877"),c=Object(o["a"])(r,a,n,!1,null,null,null);t["a"]=c.exports},f7ef:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"languages-select",class:{loading:e.isChanging}},[s("div",{staticClass:"selected-language"},[s("span",{staticClass:"txt language-title"},[e._v(e._s(e.activeLanguageTitle))]),e._v("\n        ("),s("span",{staticClass:"txt language-code"},[e._v(e._s(e.activeLanguageCode))]),e._v(")\n    ")]),s("toggler",{staticClass:"dropdown dropdown-sm"},e._l(e.languages,function(t,a){return s("div",{key:"language_"+a,staticClass:"dropdown-item",class:{active:e.activeLanguageCode==a},on:{click:function(t){return t.preventDefault(),e.changeLanguage(a)}}},[s("small",{staticClass:"label language-code m-r-5",class:e.activeLanguageCode==a?"label-transp-primary":"label-light-border"},[e._v(e._s(a))]),s("span",{staticClass:"txt language-title"},[e._v(e._s(t))])])}),0)],1)},n=[],i=(s("097d"),s("9225")),r={name:"languages-select",data(){return{isChanging:!1,languages:Object.assign({},i["c"])}},watch:{"$i18n.locale":function(e,t){"function"===typeof document._titleFunc&&this.$setDocumentTitle(document._titleFunc)}},computed:{activeLanguageCode(){return this.$i18n.locale},activeLanguageTitle(){return this.languages[this.activeLanguageCode]}},methods:{changeLanguage(e){this.isChanging=!0,Object(i["a"])(e).finally(()=>{this.isChanging=!1})}}},o=r,c=s("2877"),l=Object(c["a"])(o,a,n,!1,null,null,null);t["a"]=l.exports}}]);