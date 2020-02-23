(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0fb5da20"],{"097d":function(t,e,i){"use strict";var r=i("5ca1"),s=i("8378"),o=i("7726"),a=i("ebd6"),n=i("bcaa");r(r.P+r.R,"Promise",{finally:function(t){var e=a(this,s.Promise||o.Promise),i="function"==typeof t;return this.then(i?function(i){return n(e,t()).then((function(){return i}))}:t,i?function(i){return n(e,t()).then((function(){throw i}))}:t)}})},"9c86":function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var r=i("9242"),s=i("dd93");class o extends r["a"]{load(t){t=t||{},super.load(t),this.title=s["a"].isEmpty(t.title)?"":t.title,this.archived=s["a"].isEmpty(t.archived)?0:t.archived<<0,this.featuredScreen=s["a"].isEmpty(t.featuredScreen)?{}:t.featuredScreen}getFeaturedScreen(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"original";return this.featuredScreen[t]||this.featuredScreen["original"]||""}get isArchived(){return!!this.archived}}},a5b8:function(t,e,i){"use strict";var r=i("d8e8");function s(t){var e,i;this.promise=new t((function(t,r){if(void 0!==e||void 0!==i)throw TypeError("Bad Promise constructor");e=t,i=r})),this.resolve=r(e),this.reject=r(i)}t.exports.f=function(t){return new s(t)}},ba5d:function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var r=i("9242"),s=i("72a1"),o=i("9c86"),a=i("dd93");class n extends r["a"]{load(t){t=t||{},super.load(t),this.projectId=a["a"].isEmpty(t.projectId)?null:t.projectId,this.slug=a["a"].isEmpty(t.slug)?"":t.slug,this.passwordProtected=!!t.passwordProtected,this.allowComments=!!t.allowComments,this.allowGuideline=!!t.allowGuideline,a["a"].isArray(t.prototypes)?this.prototypes=s["a"].createInstances(t.prototypes):this.prototypes=this.prototypes||[],this.project=null,a["a"].isEmpty(t.projectInfo)?t.project&&t.project instanceof o["a"]&&(this.project=t.project):this.project=new o["a"](t.projectInfo)}get baseUrl(){var t=a["a"].getNestedVal(window,"location.origin","");return a["a"].getNestedVal(window,"location.href","").indexOf("/#/")>0&&(t+="/#"),t=t.endsWith("/")?t.substring(0,t.length-1):t,t}get relativeUrl(){return"/"+this.slug}get fullUrl(){return this.baseUrl+this.relativeUrl}get prototypeIds(){var t=[];for(let e in this.prototypes)this.prototypes[e].id&&t.push(this.prototypes[e].id);return t}}},bcaa:function(t,e,i){var r=i("cb7c"),s=i("d3f4"),o=i("a5b8");t.exports=function(t,e){if(r(t),s(e)&&e.constructor===t)return e;var i=o.f(t),a=i.resolve;return a(e),i.promise}},f228:function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.isSubRouteActive?i("keep-alive",{attrs:{max:3}},[i("router-view",{attrs:{project:t.project,collaborators:t.collaborators,projectLink:t.projectLink}})],1):i("div",{staticClass:"full-page-flex"},[i("div",{staticClass:"flex-fill-block"}),t.isMainLoaderActive?i("div",{staticClass:"block txt-center"},[i("span",{staticClass:"loader loader-lg loader-blend"})]):t._e(),t.isAuthorizeFormActive?i("div",{staticClass:"container-wrapper container-wrapper-sm"},[i("div",{staticClass:"panel m-t-10 m-b-base"},[i("div",{staticClass:"panel-content"},[i("h3",{staticClass:"panel-title"},[t._v(t._s(t.$t("This link is password protected")))]),i("p",{staticClass:"txt-center"},[t._v(t._s(t.$t("Enter the password below to view the project:")))]),i("form",{on:{submit:function(e){return e.preventDefault(),t.authorize()}}},[i("form-field",{staticClass:"form-group-lg",attrs:{name:"password"}},[i("div",{staticClass:"input-group"},[i("label",{staticClass:"input-addon p-r-0",attrs:{for:"project_link_password"}},[i("i",{staticClass:"fe fe-lock"})]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",id:"project_link_password",placeholder:t.$t("Password"),required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),i("button",{staticClass:"btn btn-primary btn-lg btn-loader block",class:{"btn-loader-active":t.isAuthorizing}},[i("span",{staticClass:"txt"},[t._v(t._s(t.$t("View project")))]),i("i",{staticClass:"fe fe-arrow-right-circle"})])],1)])])]):t._e(),i("div",{staticClass:"flex-fill-block"})])},s=[],o=(i("ac6a"),i("a481"),i("097d"),i("ade3")),a=i("2f62"),n=i("f744"),c=i("dd93"),l=i("9c86"),p=i("ba5d");function u(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function h(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?u(i,!0).forEach((function(e){Object(o["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):u(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var d={name:"project-link-preview",props:{slug:{type:String,required:!0,default:""}},data(){return{isMainLoaderActive:!0,isAuthorizeFormActive:!1,isSubRouteActive:!1,isLoadingInitialData:!1,isAuthorizing:!1,password:"",project:new l["a"],projectLink:new p["a"],collaborators:[]}},computed:h({},Object(a["d"])({activePrototypeId:t=>t.prototypes.activePrototypeId,prototypes:t=>t.prototypes.prototypes,previewToken:t=>t.preview.previewToken}),{},Object(a["c"])({getPrototype:"prototypes/getPrototype",activePrototype:"prototypes/activePrototype"})),watch:{previewToken(t,e){t||this.isMainLoaderActive||this.showAuthorizeForm()}},mounted(){this.loadLocalPreviewToken(this.slug),this.showMainLoader(),this.previewToken?this.loadInitialData():this.authorize(this.slug,this.password,!1)},methods:h({},Object(a["b"])({setActivePrototypeId:"prototypes/setActivePrototypeId",setPrototypes:"prototypes/setPrototypes",setPreviewToken:"preview/setPreviewToken",loadLocalPreviewToken:"preview/loadLocalPreviewToken",clearPreviewToken:"preview/clearPreviewToken"}),{showMainLoader(){this.isMainLoaderActive=!0,this.isAuthorizeFormActive=!1,this.isSubRouteActive=!1},showAuthorizeForm(){this.resetAuthorizeForm(),this.isMainLoaderActive=!1,this.isAuthorizeFormActive=!0,this.isSubRouteActive=!1},showSubroute(){this.isMainLoaderActive=!1,this.isAuthorizeFormActive=!1,this.isSubRouteActive=!0},resetAuthorizeForm(){this.password=""},authorize(t,e){let i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];t=t||this.slug||"",e=e||this.password||"",this.isAuthorizing||(this.isAuthorizing=!0,n["a"].Previews.authorize(t,e).then(t=>{this.resetAuthorizeForm(),this.setPreviewToken(c["a"].getNestedVal(t,"data.token")),this.setInitialData(t.data)}).catch(t=>{401==c["a"].getNestedVal(t,"response.status",400)?(this.showAuthorizeForm(),i&&this.$errResponseHandler(t)):this.$errResponseHandler(t)}).finally(()=>{this.isAuthorizing=!1}))},loadInitialData(t){this.isLoadingInitialData||(this.isLoadingInitialData=!0,n["a"].Previews.getOne(this.previewToken).then(e=>{this.setInitialData(e.data),c["a"].isFunction(t)&&t(e)}).catch(t=>{401==c["a"].getNestedVal(t,"response.status",400)&&this.showAuthorizeForm()}).finally(()=>{this.isLoadingInitialData=!1}))},setInitialData(t){t=t||{};var e=this.$route.params.prototypeId;this.project.load(t.project),this.projectLink.load(t.projectLink),this.collaborators=t.collaborators||[],this.$setDocumentTitle(this.project.title),this.setPrototypes(t.prototypes),this.getPrototype(e)?this.setActivePrototypeId(e):this.prototypes.length?this.setActivePrototypeId(this.prototypes[this.prototypes.length-1].id):this.projectLink.allowGuideline&&this.$router.replace({name:"preview-guideline",params:{slug:this.projectLink.slug}}),this.showSubroute()}})},v=d,w=i("2877"),f=Object(w["a"])(v,r,s,!1,null,null,null);e["default"]=f.exports}}]);