(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a9e9fab6"],{"9c86":function(t,e,i){"use strict";i.d(e,"a",function(){return u});var o=i("d225"),r=i("b0b4"),s=i("308d"),a=i("6bb5"),n=i("2a88"),c=i("4e2b"),l=i("9242"),p=i("dd93"),u=function(t){function e(){return Object(o["a"])(this,e),Object(s["a"])(this,Object(a["a"])(e).apply(this,arguments))}return Object(c["a"])(e,t),Object(r["a"])(e,[{key:"load",value:function(t){t=t||{},Object(n["a"])(Object(a["a"])(e.prototype),"load",this).call(this,t),this.title=p["a"].isEmpty(t.title)?"":t.title,this.archived=p["a"].isEmpty(t.archived)?0:t.archived<<0,this.featuredScreen=p["a"].isEmpty(t.featuredScreen)?{}:t.featuredScreen}},{key:"getFeaturedScreen",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"original";return this.featuredScreen[t]||this.featuredScreen["original"]||""}},{key:"isArchived",get:function(){return!!this.archived}}]),e}(l["a"])},aef6:function(t,e,i){"use strict";var o=i("5ca1"),r=i("9def"),s=i("d2c8"),a="endsWith",n=""[a];o(o.P+o.F*i("5147")(a),"String",{endsWith:function(t){var e=s(this,t,a),i=arguments.length>1?arguments[1]:void 0,o=r(e.length),c=void 0===i?o:Math.min(r(i),o),l=String(t);return n?n.call(e,l,c):e.slice(c-l.length,c)===l}})},ba5d:function(t,e,i){"use strict";i.d(e,"a",function(){return d});i("aef6");var o=i("d225"),r=i("b0b4"),s=i("308d"),a=i("6bb5"),n=i("2a88"),c=i("4e2b"),l=i("9242"),p=i("72a1"),u=i("dd93"),d=function(t){function e(){return Object(o["a"])(this,e),Object(s["a"])(this,Object(a["a"])(e).apply(this,arguments))}return Object(c["a"])(e,t),Object(r["a"])(e,[{key:"load",value:function(t){t=t||{},Object(n["a"])(Object(a["a"])(e.prototype),"load",this).call(this,t),this.projectId=u["a"].isEmpty(t.projectId)?null:t.projectId,this.slug=u["a"].isEmpty(t.slug)?"":t.slug,this.passwordProtected=!!t.passwordProtected,this.allowComments=!!t.allowComments,this.allowGuideline=!!t.allowGuideline,u["a"].isArray(t.prototypes)?this.prototypes=p["a"].createInstances(t.prototypes):this.prototypes=this.prototypes||[]}},{key:"baseUrl",get:function(){var t=u["a"].getNestedVal(window,"location.origin","");return u["a"].getNestedVal(window,"location.href","").indexOf("/#/")>0&&(t+="/#"),t=t.endsWith("/")?t.substring(0,t.length-1):t,t}},{key:"fullUrl",get:function(){return this.baseUrl+"/"+this.slug}},{key:"prototypeIds",get:function(){var t=[];for(var e in this.prototypes)this.prototypes[e].id&&t.push(this.prototypes[e].id);return t}}]),e}(l["a"])},f228:function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.isSubRouteActive?i("keep-alive",{attrs:{max:3}},[i("router-view",{attrs:{project:t.project,collaborators:t.collaborators,projectLink:t.projectLink}})],1):i("div",{staticClass:"full-page-flex"},[i("div",{staticClass:"flex-fill-block"}),t.isMainLoaderActive?i("div",{staticClass:"block txt-center"},[i("span",{staticClass:"loader loader-lg loader-blend"})]):t._e(),t.isAuthorizeFormActive?i("div",{staticClass:"container-wrapper container-wrapper-sm"},[i("div",{staticClass:"panel m-t-10 m-b-base"},[i("div",{staticClass:"panel-content"},[i("h3",{staticClass:"panel-title"},[t._v(t._s(t.$t("This link is password protected")))]),i("p",{staticClass:"txt-center"},[t._v(t._s(t.$t("Enter the password below to view the project:")))]),i("form",{on:{submit:function(e){return e.preventDefault(),t.authorize()}}},[i("form-field",{staticClass:"form-group-lg",attrs:{name:"password"}},[i("div",{staticClass:"input-group"},[i("label",{staticClass:"input-addon p-r-0",attrs:{for:"project_link_password"}},[i("i",{staticClass:"fe fe-lock"})]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",id:"project_link_password",placeholder:t.$t("Password"),required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),i("button",{staticClass:"btn btn-primary btn-lg btn-loader block",class:{"btn-loader-active":t.isAuthorizing}},[i("span",{staticClass:"txt"},[t._v("View project")]),i("i",{staticClass:"fe fe-arrow-right-circle"})])],1)])])]):t._e(),i("div",{staticClass:"flex-fill-block"})])},r=[],s=(i("8e6e"),i("ac6a"),i("456d"),i("bd86")),a=i("2f62"),n=i("f744"),c=i("dd93"),l=i("9c86"),p=i("ba5d");function u(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,o)}return i}function d(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?u(i,!0).forEach(function(e){Object(s["a"])(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):u(i).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}var h={name:"project-link-preview",props:{slug:{type:String,required:!0,default:""}},data:function(){return{isMainLoaderActive:!0,isAuthorizeFormActive:!1,isSubRouteActive:!1,isLoadingInitialData:!1,isAuthorizing:!1,password:"",project:new l["a"],projectLink:new p["a"],collaborators:[]}},computed:d({},Object(a["d"])({activePrototypeId:function(t){return t.prototypes.activePrototypeId},prototypes:function(t){return t.prototypes.prototypes},previewToken:function(t){return t.preview.previewToken}}),{},Object(a["c"])({getPrototype:"prototypes/getPrototype",activePrototype:"prototypes/activePrototype"})),watch:{previewToken:function(t,e){t||this.isMainLoaderActive||this.showAuthorizeForm()}},mounted:function(){this.loadLocalPreviewToken(this.slug),this.showMainLoader(),this.previewToken?this.loadInitialData():this.authorize(this.slug,this.password,!1)},methods:d({},Object(a["b"])({setActivePrototypeId:"prototypes/setActivePrototypeId",setPrototypes:"prototypes/setPrototypes",setPreviewToken:"preview/setPreviewToken",loadLocalPreviewToken:"preview/loadLocalPreviewToken",clearPreviewToken:"preview/clearPreviewToken"}),{showMainLoader:function(){this.isMainLoaderActive=!0,this.isAuthorizeFormActive=!1,this.isSubRouteActive=!1},showAuthorizeForm:function(){this.resetAuthorizeForm(),this.isMainLoaderActive=!1,this.isAuthorizeFormActive=!0,this.isSubRouteActive=!1},showSubroute:function(){this.isMainLoaderActive=!1,this.isAuthorizeFormActive=!1,this.isSubRouteActive=!0},resetAuthorizeForm:function(){this.password=""},authorize:function(t,e){var i=this,o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];t=t||this.slug||"",e=e||this.password||"",this.isAuthorizing||(this.isAuthorizing=!0,n["a"].Previews.authorize(t,e).then(function(t){i.resetAuthorizeForm(),i.setPreviewToken(c["a"].getNestedVal(t,"data.token")),i.setInitialData(t.data)}).catch(function(t){401==c["a"].getNestedVal(t,"response.status",400)?(i.showAuthorizeForm(),o&&i.$errResponseHandler(t)):i.$errResponseHandler(t)}).finally(function(){i.isAuthorizing=!1}))},loadInitialData:function(t){var e=this;this.isLoadingInitialData||(this.isLoadingInitialData=!0,n["a"].Previews.getOne(this.previewToken).then(function(i){e.setInitialData(i.data),c["a"].isFunction(t)&&t(i)}).catch(function(t){401==c["a"].getNestedVal(t,"response.status",400)&&e.showAuthorizeForm()}).finally(function(){e.isLoadingInitialData=!1}))},setInitialData:function(t){t=t||{};var e=this.$route.params.prototypeId;this.project.load(t.project),this.projectLink.load(t.projectLink),this.collaborators=t.collaborators||[],this.$setDocumentTitle(this.project.title),this.setPrototypes(t.prototypes),this.getPrototype(e)&&this.setActivePrototypeId(e),this.showSubroute()}})},v=h,f=i("2877"),b=Object(f["a"])(v,o,r,!1,null,null,null);e["default"]=b.exports}}]);