(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63134e0e"],{"9c86":function(t,e,i){"use strict";i.d(e,"a",(function(){return d}));i("2397");var r=i("d225"),o=i("b0b4"),s=i("2a88"),n=i("4e2b"),a=i("308d"),c=i("6bb5"),l=i("9242"),u=i("dd93");function p(t){var e=h();return function(){var i,r=Object(c["a"])(t);if(e){var o=Object(c["a"])(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return Object(a["a"])(this,i)}}function h(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}var d=function(t){Object(n["a"])(i,t);var e=p(i);function i(){return Object(r["a"])(this,i),e.apply(this,arguments)}return Object(o["a"])(i,[{key:"load",value:function(t){t=t||{},Object(s["a"])(Object(c["a"])(i.prototype),"load",this).call(this,t),this.title=u["a"].isEmpty(t.title)?"":t.title,this.archived=u["a"].isEmpty(t.archived)?0:t.archived<<0,this.pinned=u["a"].isEmpty(t.pinned)?0:t.pinned<<0,this.featuredScreen=u["a"].isEmpty(t.featuredScreen)?{}:t.featuredScreen}},{key:"getFeaturedScreen",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"original";return this.featuredScreen[t]||this.featuredScreen["original"]||""}},{key:"isArchived",get:function(){return!!this.archived}},{key:"isPinned",get:function(){return!!this.pinned}}]),i}(l["a"])},aef6:function(t,e,i){"use strict";var r=i("5ca1"),o=i("9def"),s=i("d2c8"),n="endsWith",a=""[n];r(r.P+r.F*i("5147")(n),"String",{endsWith:function(t){var e=s(this,t,n),i=arguments.length>1?arguments[1]:void 0,r=o(e.length),c=void 0===i?r:Math.min(o(i),r),l=String(t);return a?a.call(e,l,c):e.slice(c-l.length,c)===l}})},ba5d:function(t,e,i){"use strict";i.d(e,"a",(function(){return v}));i("2397"),i("aef6");var r=i("d225"),o=i("b0b4"),s=i("2a88"),n=i("4e2b"),a=i("308d"),c=i("6bb5"),l=i("9242"),u=i("72a1"),p=i("9c86"),h=i("dd93");function d(t){var e=f();return function(){var i,r=Object(c["a"])(t);if(e){var o=Object(c["a"])(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return Object(a["a"])(this,i)}}function f(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}var v=function(t){Object(n["a"])(i,t);var e=d(i);function i(){return Object(r["a"])(this,i),e.apply(this,arguments)}return Object(o["a"])(i,[{key:"load",value:function(t){t=t||{},Object(s["a"])(Object(c["a"])(i.prototype),"load",this).call(this,t),this.projectId=h["a"].isEmpty(t.projectId)?null:t.projectId,this.slug=h["a"].isEmpty(t.slug)?"":t.slug,this.passwordProtected=!!t.passwordProtected,this.allowComments=!!t.allowComments,this.allowGuideline=!!t.allowGuideline,h["a"].isArray(t.prototypes)?this.prototypes=u["a"].createInstances(t.prototypes):this.prototypes=this.prototypes||[],this.project=null,h["a"].isEmpty(t.projectInfo)?t.project&&t.project instanceof p["a"]&&(this.project=t.project):this.project=new p["a"](t.projectInfo)}},{key:"baseUrl",get:function(){var t=h["a"].getNestedVal(window,"location.origin","");return h["a"].getNestedVal(window,"location.href","").indexOf("/#/")>0&&(t+="/#"),t=t.endsWith("/")?t.substring(0,t.length-1):t,t}},{key:"relativeUrl",get:function(){return"/"+this.slug}},{key:"fullUrl",get:function(){return this.baseUrl+this.relativeUrl}},{key:"prototypeIds",get:function(){var t=[];for(var e in this.prototypes)this.prototypes[e].id&&t.push(this.prototypes[e].id);return t}}]),i}(l["a"])},f228:function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.isSubRouteActive?i("keep-alive",{attrs:{max:3}},[i("router-view",{attrs:{project:t.project,collaborators:t.collaborators,projectLink:t.projectLink}})],1):i("div",{staticClass:"full-page-flex"},[i("div",{staticClass:"flex-fill-block"}),t.isMainLoaderActive?i("div",{staticClass:"block txt-center"},[i("span",{staticClass:"loader loader-lg loader-blend"})]):t._e(),t.isAuthorizeFormActive?i("div",{staticClass:"container-wrapper container-wrapper-sm"},[i("div",{staticClass:"panel m-t-10 m-b-base"},[i("div",{staticClass:"panel-content"},[i("h3",{staticClass:"panel-title"},[t._v(t._s(t.$t("This link is password protected")))]),i("p",{staticClass:"txt-center"},[t._v(t._s(t.$t("Enter the password below to view the project:")))]),i("form",{on:{submit:function(e){return e.preventDefault(),t.authorize()}}},[i("form-field",{staticClass:"form-group-lg",attrs:{name:"password"}},[i("div",{staticClass:"input-group"},[i("label",{staticClass:"input-addon p-r-0",attrs:{for:"project_link_password"}},[i("i",{staticClass:"fe fe-lock"})]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",id:"project_link_password",placeholder:t.$t("Password"),required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),i("button",{staticClass:"btn btn-primary btn-lg btn-loader block",class:{"btn-loader-active":t.isAuthorizing}},[i("span",{staticClass:"txt"},[t._v(t._s(t.$t("View project")))]),i("i",{staticClass:"fe fe-arrow-right-circle"})])],1)])])]):t._e(),i("div",{staticClass:"flex-fill-block"})])},o=[],s=(i("8e6e"),i("ac6a"),i("456d"),i("a481"),i("bd86")),n=i("2f62"),a=i("f744"),c=i("dd93"),l=i("9c86"),u=i("ba5d");function p(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function h(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?p(Object(i),!0).forEach((function(e){Object(s["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):p(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var d={name:"project-link-preview",props:{slug:{type:String,required:!0,default:""}},data:function(){return{isMainLoaderActive:!0,isAuthorizeFormActive:!1,isSubRouteActive:!1,isLoadingInitialData:!1,isAuthorizing:!1,password:"",project:new l["a"],projectLink:new u["a"],collaborators:[]}},computed:h(h({},Object(n["d"])({activePrototypeId:function(t){return t.prototypes.activePrototypeId},prototypes:function(t){return t.prototypes.prototypes},previewToken:function(t){return t.preview.previewToken}})),Object(n["c"])({getPrototype:"prototypes/getPrototype",activePrototype:"prototypes/activePrototype"})),watch:{previewToken:function(t,e){t||this.isMainLoaderActive||this.showAuthorizeForm()}},mounted:function(){this.loadLocalPreviewToken(this.slug),this.showMainLoader(),this.previewToken?this.loadInitialData():this.authorize(this.slug,this.password,!1)},methods:h(h({},Object(n["b"])({setActivePrototypeId:"prototypes/setActivePrototypeId",setPrototypes:"prototypes/setPrototypes",setPreviewToken:"preview/setPreviewToken",loadLocalPreviewToken:"preview/loadLocalPreviewToken",clearPreviewToken:"preview/clearPreviewToken"})),{},{showMainLoader:function(){this.isMainLoaderActive=!0,this.isAuthorizeFormActive=!1,this.isSubRouteActive=!1},showAuthorizeForm:function(){this.resetAuthorizeForm(),this.isMainLoaderActive=!1,this.isAuthorizeFormActive=!0,this.isSubRouteActive=!1},showSubroute:function(){this.isMainLoaderActive=!1,this.isAuthorizeFormActive=!1,this.isSubRouteActive=!0},resetAuthorizeForm:function(){this.password=""},authorize:function(t,e){var i=this,r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];t=t||this.slug||"",e=e||this.password||"",this.isAuthorizing||(this.isAuthorizing=!0,a["a"].Previews.authorize(t,e).then((function(t){i.resetAuthorizeForm(),i.setPreviewToken(c["a"].getNestedVal(t,"data.token")),i.setInitialData(t.data)})).catch((function(t){401==c["a"].getNestedVal(t,"response.status",400)?(i.showAuthorizeForm(),r&&i.$errResponseHandler(t)):i.$errResponseHandler(t)})).finally((function(){i.isAuthorizing=!1})))},loadInitialData:function(t){var e=this;this.isLoadingInitialData||(this.isLoadingInitialData=!0,a["a"].Previews.getOne(this.previewToken).then((function(i){e.setInitialData(i.data),c["a"].isFunction(t)&&t(i)})).catch((function(t){401==c["a"].getNestedVal(t,"response.status",400)&&e.showAuthorizeForm()})).finally((function(){e.isLoadingInitialData=!1})))},setInitialData:function(t){t=t||{};var e=this.$route.params.prototypeId;this.project.load(t.project),this.projectLink.load(t.projectLink),this.collaborators=t.collaborators||[],this.$setDocumentTitle(this.project.title),this.setPrototypes(t.prototypes),this.getPrototype(e)?this.setActivePrototypeId(e):this.prototypes.length?this.setActivePrototypeId(this.prototypes[this.prototypes.length-1].id):this.projectLink.allowGuideline&&this.$router.replace({name:"preview-guideline",params:{slug:this.projectLink.slug}}),this.showSubroute()}})},f=d,v=i("2877"),y=Object(v["a"])(f,r,o,!1,null,null,null);e["default"]=y.exports}}]);