(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44ed9b90"],{"2e8c8":function(e,t,s){"use strict";s("6c13")},"5df3":function(e,t,s){"use strict";var o=s("02f4")(!0);s("01f9")(String,"String",(function(e){this._t=String(e),this._i=0}),(function(){var e,t=this._t,s=this._i;return s>=t.length?{value:void 0,done:!0}:(e=o(t,s),this._i+=e.length,{value:e,done:!1})}))},"6c13":function(e,t,s){},fb7f:function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"preview-container-wrapper"},[s("div",{staticClass:"preview-container",class:{"comments-mode":e.isInCommentsMode,"preview-mode":e.isInPreviewMode,"preview-mode-hints":e.keepHotspotsVisible||e.isPreviewModeHintsActive},style:{background:e.activePrototype&&e.activeScreen&&e.activePrototype.isForDesktop?e.activeScreen.background:null},attrs:{tabindex:"-1"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.onEscPress.apply(null,arguments)}}},[s("div",{staticClass:"flex-fill-block"}),s("active-comment-popover",{ref:"commentPopover",attrs:{isForPreview:!0,mentionsList:e.mentionsList}}),e.isLoadingData?s("div",{staticClass:"block txt-center"},[s("span",{staticClass:"loader loader-lg loader-blend"})]):e._e(),e.isLoadingData||e.screens.length?e._e():s("div",{staticClass:"block scroll-block txt-center p-base"},[e._m(0),s("h4",[e._v(e._s(e.$t("No prototype screens to show.")))])]),!e.isLoadingData&&e.screens.length?s("screen-preview",{ref:"screenPreview",attrs:{interactions:e.isInPreviewMode,activeScreenTooltip:e.modeHelpTooltip,fitToScreen:e.fitToScreen},on:{activeScreenClick:e.onActiveScreenClick}},[e.isInCommentsMode?s("div",{staticClass:"block comments-block"},e._l(e.activeScreenComments,(function(t){return s("comment-pin",{key:"comment_"+t.id,ref:"screenCommentPins",refInFor:!0,class:{"soft-hidden":!e.showResolvedComments&&t.isResolved,unread:e.isCommentUnread(t.id)},attrs:{comment:t,allowPositionChange:!1}})})),1):e._e()]):e._e(),s("div",{staticClass:"flex-fill-block"}),s("preview-bar",{attrs:{project:e.project,projectLink:e.projectLink},on:{hide:function(t){!e.$refs.screensPanel||e.$refs.screensPanel.hide()}},scopedSlots:e._u([{key:"left",fn:function(){return[e.activeScreen&&e.$refs.screensPanel?s("div",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:e.$refs.screensPanel.isActive?e.$t("Hide screens panel"):e.$t("Show screens panel"),expression:"$refs.screensPanel.isActive ? $t('Hide screens panel') : $t('Show screens panel')",modifiers:{top:!0}}],staticClass:"ctrl-item ctrl-item-screens",class:{active:e.$refs.screensPanel.isActive},on:{click:function(t){return t.preventDefault(),e.$refs.screensPanel.toggle()}}},[s("span",{staticClass:"txt screen-title"},[e._v(e._s(e.activeScreen.title))]),s("span",{staticClass:"txt counter m-l-5"},[e._v("("+e._s(e.activeScreenOrderedIndex+1)+" of "+e._s(e.screens.length)+")")]),s("i",{staticClass:"m-l-5 fe",class:e.$refs.screensPanel.isActive?"fe-chevron-up":"fe-chevron-down"})]):e._e()]},proxy:!0},{key:"right",fn:function(){return[e.isInCommentsMode&&e.$refs.commentsPanel?s("button",{staticClass:"btn btn-sm no-shadow comments-panel-toggle",class:e.$refs.commentsPanel.isActive?"btn-danger":"btn-transp-danger",on:{click:function(t){return t.preventDefault(),e.$refs.commentsPanel.toggle()}}},[s("span",{staticClass:"txt"},[e._v(e._s(e.$t("Comments panel")))])]):e._e(),e.isInPreviewMode&&e.prototypes.length>0?s("div",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:e.$t("Toggle hotspots"),expression:"$t('Toggle hotspots')",modifiers:{top:!0}}],staticClass:"ctrl-item ctrl-item-circle",class:e.keepHotspotsVisible?"ctrl-item-success active bg-light-border":"",on:{click:function(t){return t.preventDefault(),e.toggleKeepHotspotsVisible.apply(null,arguments)}}},[s("i",{staticClass:"fe fe-target"})]):e._e(),e.prototypes.length>0&&0!=e.activePrototype.scaleFactor?s("div",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:e.$t("Toggle fit to screen"),expression:"$t('Toggle fit to screen')",modifiers:{top:!0}}],staticClass:"ctrl-item ctrl-item-circle",class:e.fitToScreen?"ctrl-item-success active bg-light-border":"",on:{click:function(t){return t.preventDefault(),e.toggleFitToScreen.apply(null,arguments)}}},[s("i",{staticClass:"fe fe-maximize"})]):e._e(),e.prototypes.length>1?s("div",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:e.$refs.prototypesDropdown&&e.$refs.prototypesDropdown.isActive?"":e.$t("Change prototype"),expression:"!$refs.prototypesDropdown || !$refs.prototypesDropdown.isActive ? $t('Change prototype') : ''",modifiers:{top:!0}}],staticClass:"btn btn-sm btn-default m-l-small prototypes-ctrl"},[s("i",{staticClass:"fe",class:e.activePrototype.isForDesktop?"fe-monitor":"fe-smartphone"}),s("span",{staticClass:"txt title m-l-5 m-r-5"},[e._v(e._s(e.activePrototype.title))]),s("i",{staticClass:"fe",class:e.$refs.prototypesDropdown&&e.$refs.prototypesDropdown.isActive?"fe-chevron-up":"fe-chevron-down"}),s("toggler",{ref:"prototypesDropdown",staticClass:"dropdown dropdown-wrapped prototypes-dropdown"},e._l(e.prototypes,(function(t){return s("div",{key:t.id,staticClass:"dropdown-item",class:{active:e.activePrototype.id==t.id},on:{click:function(s){return s.preventDefault(),e.setActivePrototypeId(t.id)}}},[s("i",{staticClass:"fe",class:t.isForDesktop?"fe-monitor":"fe-smartphone"}),s("span",{staticClass:"txt"},[e._v(e._s(t.title))])])})),0)],1):e._e()]},proxy:!0}])}),s("screens-panel",{ref:"screensPanel"})],1),s("comments-panel",{ref:"commentsPanel"})],1)},n=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("figure",{staticClass:"mockup m-b-small"},[s("div",{staticClass:"mockup-bg"}),s("div",{staticClass:"browser secondary"}),s("div",{staticClass:"browser primary"},[s("i",{staticClass:"fe fe-image"})])])}],i=(s("8e6e"),s("456d"),s("a481"),s("ac6a"),s("5df3"),s("7f7f"),s("bd86")),r=s("2f62"),a=s("c1df"),c=s.n(a),p=s("0abc"),l=s("f744"),d=s("dd93"),m=s("3d48"),u=s("9c86"),f=s("ba5d"),v=s("46a0"),h=s("0372"),y=s("9aaf"),g=s("7bbf"),P=s("57d1"),C=s("917d"),w=s("c647"),b=s("35bb"),I=s("db9e");function $(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,o)}return s}function _(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?$(Object(s),!0).forEach((function(t){Object(i["a"])(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):$(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var S="preview",k="comments",O=null,j={name:"screens-view",mixins:[w["a"],b["a"]],props:{project:{type:u["a"],required:!0},collaborators:{type:Array,required:!0},projectLink:{type:f["a"],required:!0}},components:{"screen-preview":h["a"],"screens-panel":y["a"],"comment-pin":g["a"],"comments-panel":P["a"],"active-comment-popover":C["a"],"preview-bar":I["a"]},data:function(){return{isPreviewBarActive:!0,isLoadingData:!1,mode:S}},computed:_(_(_({},Object(r["d"])({activePrototypeId:function(e){return e.prototypes.activePrototypeId},prototypes:function(e){return e.prototypes.prototypes},screens:function(e){return e.screens.screens},activeScreenId:function(e){return e.screens.activeScreenId},previewToken:function(e){return e.preview.previewToken}})),Object(r["c"])({activePrototype:"prototypes/activePrototype",getPrototype:"prototypes/getPrototype",activeScreen:"screens/activeScreen",getScreen:"screens/getScreen",activeScreenOrderedIndex:"screens/activeScreenOrderedIndex",getComment:"comments/getComment"})),{},{isInCommentsMode:function(){return this.mode===k},isInPreviewMode:function(){return this.mode===S},modeHelpTooltip:function(){return this.isInCommentsMode?this.$t("Click to leave a comment"):""}}),watch:{"$route.params.prototypeId":function(e,t){e&&this.getPrototype(e)?e!=this.activePrototypeId&&this.setActivePrototypeId(e):this.updateRoutePrototypeId()},"$route.params.screenId":function(e,t){e!=this.activeScreenId&&this.setActiveScreenId(e)},"$route.query.mode":function(e,t){e===k?this.setCommentsMode():e===S?this.setPreviewMode():"preview-prototype"===this.$route.name&&this.updateRouteMode()},activePrototypeId:function(e,t){this.init()},activeScreenId:function(e,t){this.updateRouteScreenId(),this.deactivateComments()},mode:function(e,t){!this.isInCommentsMode&&this.$refs.commentsPanel&&this.$refs.commentsPanel.hide()}},activated:function(){var e=this;this.isLoadingData||this.screens.length||this.$setDocumentTitle((function(){return e.$t("{projectTitle} prototypes",{projectTitle:e.project.title})}))},beforeMount:function(){this.$route.query.mode===k?this.setCommentsMode():this.setPreviewMode(),this.init()},methods:_(_({},Object(r["b"])({setActivePrototypeId:"prototypes/setActivePrototypeId",setScreens:"screens/setScreens",setActiveScreenId:"screens/setActiveScreenId",setHotspotTemplates:"hotspots/setHotspotTemplates",appendHotspots:"hotspots/appendHotspots",setHotspots:"hotspots/setHotspots",addUnreadComment:"notifications/addUnreadComment"})),{},{init:function(){this.activePrototypeId&&(this.loadPrototypeData(this.activePrototypeId,this.$route.params.screenId),this.projectLink.allowComments&&(this.loadComments(this.activePrototypeId,1,!0),this.startNewCommentsListener()),this.mentionsList=this.convertCollaboratorsListToMentionsList(this.collaborators))},loadPrototypeData:function(e,t){var s=this;e=e||this.activePrototypeId,t=t||this.activeScreenId,this.isLoadingData=!0,l["a"].Previews.getPrototype(this.previewToken,e).then((function(e){var o=d["a"].getNestedVal(e,"data.screens",[]),n=d["a"].getNestedVal(e,"data.hotspotTemplates",[]);if(s.setScreens(o),s.screens.length>0){s.isLoadingData=!0;var i=[];for(var r in s.screens)i.push(d["a"].loadImage(s.screens[r].getImage()));Promise.all(i).finally((function(){s.isLoadingData=!1}))}for(var a in s.setHotspots([]),o)o[a].hotspots&&s.appendHotspots(o[a].hotspots);for(var c in s.setHotspotTemplates(n),n)n[c].hotspots&&s.appendHotspots(n[c].hotspots);t&&s.getScreen(t)&&s.setActiveScreenId(t),s.$refs.screensPanel&&s.$refs.screensPanel.hide(),s.updateRoutePrototypeId(),s.updateRouteScreenId(),s.updateRouteMode()})).catch((function(e){s.$errResponseHandler(e)})).finally((function(){s.isLoadingData=!1}))},updateRoutePrototypeId:function(){if("preview-prototype"==this.$route.name){var e=this.$route.params.prototypeId;e!=this.activePrototypeId&&this.$router[e?"push":"replace"]({name:this.$route.name,params:Object.assign({},this.$route.params,{prototypeId:this.activePrototypeId,screenId:this.activeScreenId}),query:Object.assign({},this.$route.query)})}},updateRouteScreenId:function(){if("preview-prototype"==this.$route.name){var e=this.$route.params.screenId;e!=this.activeScreenId&&this.$router[e?"push":"replace"]({name:this.$route.name,params:Object.assign({},this.$route.params,{screenId:this.activeScreenId}),query:Object.assign({},this.$route.query)})}},updateRouteMode:function(){var e=this.$route.query.mode;e!=this.mode&&this.$router.replace({name:this.$route.name,params:Object.assign({},this.$route.params),query:Object.assign({},this.$route.query,{mode:this.mode})})},setCommentsMode:function(){this.mode=k},setPreviewMode:function(){this.mode=S},onEscPress:function(e){this.isInCommentsMode&&(e.preventDefault(),this.deactivateComments())},onActiveScreenClick:function(e){this.isInPreviewMode?this.blinkPreviewModeHints():this.isInCommentsMode&&this.initCommentCreation(e,this.activeScreenId)},loadLatestPreviewComments:function(e,t){var s=this;if(!this.isLoadingComments){if("undefined"===typeof t){var o=m["a"].getItem(p["a"].get("VUE_APP_PREVIEW_LAST_COMMENTS_LOAD_STORAGE_KEY")+this.projectLink.slug,c()().format("X"))<<0;t=c.a.utc(o-1,"X").format("YYYY-MM-DD HH:mm:ss")}l["a"].enableAutoCancellation(!1),l["a"].Previews.getScreenCommentsList(this.previewToken,1,100,{"search[prototypeId]":e,"search[afterCreatedAt]":t}).then((function(e){var t=v["a"].createInstances(e.data),o=m["a"].getItem(p["a"].get("VUE_APP_PREVIEW_COMMENT_FROM_STORAGE_KEY"));for(var n in t)t[n].from!=o&&s.addUnreadComment(t[n])})).catch((function(e){s.$errResponseHandler(e)})).finally((function(){m["a"].setItem(p["a"].get("VUE_APP_PREVIEW_LAST_COMMENTS_LOAD_STORAGE_KEY")+s.projectLink.slug,c()().format("X"))}))}},startNewCommentsListener:function(){var e=this;this.projectLink.allowComments&&p["a"].isFirestoreConfigured()&&Promise.all([s.e("chunk-ee848dd6"),s.e("chunk-2d0c9af8")]).then(s.t.bind(null,"59ca",7)).then((function(t){Promise.all([s.e("chunk-ee848dd6"),s.e("chunk-6d637c67")]).then(s.bind(null,"e71f")).then((function(){t.apps.length||t.initializeApp({projectId:p["a"].get("VUE_APP_FIRESTORE_PROJECT_ID")}),e.stopNewCommentsListener();var s=t.firestore();O=s.collection(p["a"].get("VUE_APP_FIRESTORE_COLLECTION")).doc("p"+e.project.id).onSnapshot((function(t){e.projectLink.allowComments&&e.loadLatestPreviewComments(e.activePrototypeId)})),e.$once("hook:deactivated",(function(){e.stopNewCommentsListener()}))}))}))},stopNewCommentsListener:function(){d["a"].isFunction(O)&&(O(),O=null)}})},D=j,L=(s("2e8c8"),s("2877")),A=Object(L["a"])(D,o,n,!1,null,"f5cff522",null);t["default"]=A.exports}}]);