(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70f2095f"],{1173:function(t,e){t.exports=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!");return t}},"18f8":function(t,e,n){"use strict";n("96cf");var r=n("795b"),o=n.n(r);function i(t,e,n,r,i,c,a){try{var u=t[c](a),s=u.value}catch(f){return void n(f)}u.done?e(s):o.a.resolve(s).then(r,i)}function c(t){return function(){var e=this,n=arguments;return new o.a((function(r,o){var c=t.apply(e,n);function a(t){i(c,r,o,a,u,"next",t)}function u(t){i(c,r,o,a,u,"throw",t)}a(void 0)}))}}var a=n("79e3"),u=n.n(a),s=n("dd93"),f=n("f744");e["a"]={data:function(){return{dropzone:null,isReplacing:!1,isReplaceHandleClickable:!0}},mounted:function(){u.a.autoDiscover=!1},destroyed:function(){this.destroyReplace()},methods:{destroyReplace:function(){this.isReplacing=!1,this.dropzone&&this.dropzone.destroy()},initReplace:function(t,e){var n=this;e=e||this.$refs.replaceHandle,this.destroyReplace(),e&&t&&t.id&&(this.dropzone=new u.a(e,{url:f["a"].$baseUrl+"/screens/"+encodeURIComponent(t.id),clickable:this.isReplaceHandleClickable,method:"put",paramName:"file",maxFiles:1,parallelUploads:1,uploadMultiple:!1,thumbnailWidth:null,thumbnailHeight:null,addRemoveLinks:!1,createImageThumbnails:!1,previewTemplate:'<div style="display: none"></div>',accept:function(){var e=c(regeneratorRuntime.mark((function e(r,o){var i,c,a,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=window.URL.createObjectURL(r),e.next=3,s["a"].loadImage(i);case 3:return c=e.sent,window.URL.revokeObjectURL(i),e.next=7,s["a"].loadImage(t.getImage("original"));case 7:if(a=e.sent,u=c.width<a.width||c.height<a.height,!u||window.confirm(n.$t("Replacing could result in hotspots and comments misplacement if the new screen image has different dimensions from the original.")+"\n"+n.$t("Do you still want to proceed?"))){e.next=12;break}return n.dropzone.removeAllFiles(!0),e.abrupt("return");case 12:o();case 13:case"end":return e.stop()}}),e)})));function r(t,n){return e.apply(this,arguments)}return r}()}),this.dropzone.on("addedfile",function(){var t=c(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n.dropzone.options.headers=Object.assign(n.dropzone.options.headers||{},{Authorization:"Bearer "+f["a"].$token});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),this.dropzone.on("sending",(function(t,e,r){n.isReplacing=!0})),this.dropzone.on("queuecomplete",(function(){n.isReplacing=!1,n.dropzone.removeAllFiles(!0)})),this.dropzone.on("success",(function(e,r){t.load(r),n.replaceSucceeded()})),this.dropzone.on("error",(function(t,e,r){var o=s["a"].getNestedVal(e,"errors.file",n.$t("An error occurred while uploading the screen."));n.$toast(o,"danger"),n.dropzone.removeAllFiles(!0)})))},replaceSucceeded:function(){}}}},"24c5":function(t,e,n){"use strict";var r,o,i,c,a=n("b8e3"),u=n("e53d"),s=n("d864"),f=n("40c3"),l=n("63b6"),h=n("f772"),p=n("79aa"),d=n("1173"),v=n("a22a"),y=n("f201"),m=n("4178").set,g=n("aba2")(),w=n("656e"),x=n("4439"),_=n("bc13"),b=n("cd78"),L="Promise",E=u.TypeError,j=u.process,R=j&&j.versions,k=R&&R.v8||"",O=u[L],P="process"==f(j),T=function(){},z=o=w.f,F=!!function(){try{var t=O.resolve(1),e=(t.constructor={})[n("5168")("species")]=function(t){t(T,T)};return(P||"function"==typeof PromiseRejectionEvent)&&t.then(T)instanceof e&&0!==k.indexOf("6.6")&&-1===_.indexOf("Chrome/66")}catch(r){}}(),A=function(t){var e;return!(!h(t)||"function"!=typeof(e=t.then))&&e},S=function(t,e){if(!t._n){t._n=!0;var n=t._c;g((function(){var r=t._v,o=1==t._s,i=0,c=function(e){var n,i,c,a=o?e.ok:e.fail,u=e.resolve,s=e.reject,f=e.domain;try{a?(o||(2==t._h&&U(t),t._h=1),!0===a?n=r:(f&&f.enter(),n=a(r),f&&(f.exit(),c=!0)),n===e.promise?s(E("Promise-chain cycle")):(i=A(n))?i.call(n,u,s):u(n)):s(r)}catch(l){f&&!c&&f.exit(),s(l)}};while(n.length>i)c(n[i++]);t._c=[],t._n=!1,e&&!t._h&&N(t)}))}},N=function(t){m.call(u,(function(){var e,n,r,o=t._v,i=I(t);if(i&&(e=x((function(){P?j.emit("unhandledRejection",o,t):(n=u.onunhandledrejection)?n({promise:t,reason:o}):(r=u.console)&&r.error&&r.error("Unhandled promise rejection",o)})),t._h=P||I(t)?2:1),t._a=void 0,i&&e.e)throw e.v}))},I=function(t){return 1!==t._h&&0===(t._a||t._c).length},U=function(t){m.call(u,(function(){var e;P?j.emit("rejectionHandled",t):(e=u.onrejectionhandled)&&e({promise:t,reason:t._v})}))},G=function(t){var e=this;e._d||(e._d=!0,e=e._w||e,e._v=t,e._s=2,e._a||(e._a=e._c.slice()),S(e,!0))},M=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw E("Promise can't be resolved itself");(e=A(t))?g((function(){var r={_w:n,_d:!1};try{e.call(t,s(M,r,1),s(G,r,1))}catch(o){G.call(r,o)}})):(n._v=t,n._s=1,S(n,!1))}catch(r){G.call({_w:n,_d:!1},r)}}};F||(O=function(t){d(this,O,L,"_h"),p(t),r.call(this);try{t(s(M,this,1),s(G,this,1))}catch(e){G.call(this,e)}},r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},r.prototype=n("5c95")(O.prototype,{then:function(t,e){var n=z(y(this,O));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=P?j.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&S(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r;this.promise=t,this.resolve=s(M,t,1),this.reject=s(G,t,1)},w.f=z=function(t){return t===O||t===c?new i(t):o(t)}),l(l.G+l.W+l.F*!F,{Promise:O}),n("45f2")(O,L),n("4c95")(L),c=n("584a")[L],l(l.S+l.F*!F,L,{reject:function(t){var e=z(this),n=e.reject;return n(t),e.promise}}),l(l.S+l.F*(a||!F),L,{resolve:function(t){return b(a&&this===c?O:this,t)}}),l(l.S+l.F*!(F&&n("4ee1")((function(t){O.all(t)["catch"](T)}))),L,{all:function(t){var e=this,n=z(e),r=n.resolve,o=n.reject,i=x((function(){var n=[],i=0,c=1;v(t,!1,(function(t){var a=i++,u=!1;n.push(void 0),c++,e.resolve(t).then((function(t){u||(u=!0,n[a]=t,--c||r(n))}),o)})),--c||r(n)}));return i.e&&o(i.v),n.promise},race:function(t){var e=this,n=z(e),r=n.reject,o=x((function(){v(t,!1,(function(t){e.resolve(t).then(n.resolve,r)}))}));return o.e&&r(o.v),n.promise}})},3024:function(t,e){t.exports=function(t,e,n){var r=void 0===n;switch(e.length){case 0:return r?t():t.call(n);case 1:return r?t(e[0]):t.call(n,e[0]);case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},3702:function(t,e,n){var r=n("481b"),o=n("5168")("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},"3c11":function(t,e,n){"use strict";var r=n("63b6"),o=n("584a"),i=n("e53d"),c=n("f201"),a=n("cd78");r(r.P+r.R,"Promise",{finally:function(t){var e=c(this,o.Promise||i.Promise),n="function"==typeof t;return this.then(n?function(n){return a(e,t()).then((function(){return n}))}:t,n?function(n){return a(e,t()).then((function(){throw n}))}:t)}})},"40c3":function(t,e,n){var r=n("6b4c"),o=n("5168")("toStringTag"),i="Arguments"==r(function(){return arguments}()),c=function(t,e){try{return t[e]}catch(n){}};t.exports=function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=c(e=Object(t),o))?n:i?r(e):"Object"==(a=r(e))&&"function"==typeof e.callee?"Arguments":a}},4178:function(t,e,n){var r,o,i,c=n("d864"),a=n("3024"),u=n("32fc"),s=n("1ec9"),f=n("e53d"),l=f.process,h=f.setImmediate,p=f.clearImmediate,d=f.MessageChannel,v=f.Dispatch,y=0,m={},g="onreadystatechange",w=function(){var t=+this;if(m.hasOwnProperty(t)){var e=m[t];delete m[t],e()}},x=function(t){w.call(t.data)};h&&p||(h=function(t){var e=[],n=1;while(arguments.length>n)e.push(arguments[n++]);return m[++y]=function(){a("function"==typeof t?t:Function(t),e)},r(y),y},p=function(t){delete m[t]},"process"==n("6b4c")(l)?r=function(t){l.nextTick(c(w,t,1))}:v&&v.now?r=function(t){v.now(c(w,t,1))}:d?(o=new d,i=o.port2,o.port1.onmessage=x,r=c(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(r=function(t){f.postMessage(t+"","*")},f.addEventListener("message",x,!1)):r=g in s("script")?function(t){u.appendChild(s("script"))[g]=function(){u.removeChild(this),w.call(t)}}:function(t){setTimeout(c(w,t,1),0)}),t.exports={set:h,clear:p}},"43fc":function(t,e,n){"use strict";var r=n("63b6"),o=n("656e"),i=n("4439");r(r.S,"Promise",{try:function(t){var e=o.f(this),n=i(t);return(n.e?e.reject:e.resolve)(n.v),e.promise}})},4439:function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(e){return{e:!0,v:e}}}},"4c95":function(t,e,n){"use strict";var r=n("e53d"),o=n("584a"),i=n("d9f6"),c=n("8e60"),a=n("5168")("species");t.exports=function(t){var e="function"==typeof o[t]?o[t]:r[t];c&&e&&!e[a]&&i.f(e,a,{configurable:!0,get:function(){return this}})}},"4ee1":function(t,e,n){var r=n("5168")("iterator"),o=!1;try{var i=[7][r]();i["return"]=function(){o=!0},Array.from(i,(function(){throw 2}))}catch(c){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i=[7],a=i[r]();a.next=function(){return{done:n=!0}},i[r]=function(){return a},t(i)}catch(c){}return n}},"5c95":function(t,e,n){var r=n("35e8");t.exports=function(t,e,n){for(var o in e)n&&t[o]?t[o]=e[o]:r(t,o,e[o]);return t}},"656e":function(t,e,n){"use strict";var r=n("79aa");function o(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=r(e),this.reject=r(n)}t.exports.f=function(t){return new o(t)}},"696e":function(t,e,n){n("c207"),n("1654"),n("6c1c"),n("24c5"),n("3c11"),n("43fc"),t.exports=n("584a").Promise},"795b":function(t,e,n){t.exports=n("696e")},"7cd6":function(t,e,n){var r=n("40c3"),o=n("5168")("iterator"),i=n("481b");t.exports=n("584a").getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},"96cf":function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function u(t,e,n,r){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),c=new O(r||[]);return i._invoke=E(t,n,c),i}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}t.wrap=u;var f="suspendedStart",l="suspendedYield",h="executing",p="completed",d={};function v(){}function y(){}function m(){}var g={};g[i]=function(){return this};var w=Object.getPrototypeOf,x=w&&w(w(P([])));x&&x!==n&&r.call(x,i)&&(g=x);var _=m.prototype=v.prototype=Object.create(g);function b(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function L(t){function e(n,o,i,c){var a=s(t[n],t,o);if("throw"!==a.type){var u=a.arg,f=u.value;return f&&"object"===typeof f&&r.call(f,"__await")?Promise.resolve(f.__await).then((function(t){e("next",t,i,c)}),(function(t){e("throw",t,i,c)})):Promise.resolve(f).then((function(t){u.value=t,i(u)}),(function(t){return e("throw",t,i,c)}))}c(a.arg)}var n;function o(t,r){function o(){return new Promise((function(n,o){e(t,r,n,o)}))}return n=n?n.then(o,o):o()}this._invoke=o}function E(t,e,n){var r=f;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw i;return T()}n.method=o,n.arg=i;while(1){var c=n.delegate;if(c){var a=j(c,n);if(a){if(a===d)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var u=s(t,e,n);if("normal"===u.type){if(r=n.done?p:l,u.arg===d)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=p,n.method="throw",n.arg=u.arg)}}}function j(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,j(t,n),"throw"===n.method))return d;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=s(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,d;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,d):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function R(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(R,this),this.reset(!0)}function P(t){if(t){var n=t[i];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,c=function n(){while(++o<t.length)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return c.next=c}}return{next:T}}function T(){return{value:e,done:!0}}return y.prototype=_.constructor=m,m.constructor=y,m[a]=y.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},b(L.prototype),L.prototype[c]=function(){return this},t.AsyncIterator=L,t.async=function(e,n,r,o){var i=new L(u(e,n,r,o));return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(_),_[a]="Generator",_[i]=function(){return this},_.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=P,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return a.type="throw",a.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i],a=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var u=r.call(c,"catchLoc"),s=r.call(c,"finallyLoc");if(u&&s){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(u){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;k(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:P(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=r}catch(o){Function("r","regeneratorRuntime = r")(r)}},a22a:function(t,e,n){var r=n("d864"),o=n("b0dc"),i=n("3702"),c=n("e4ae"),a=n("b447"),u=n("7cd6"),s={},f={};e=t.exports=function(t,e,n,l,h){var p,d,v,y,m=h?function(){return t}:u(t),g=r(n,l,e?2:1),w=0;if("function"!=typeof m)throw TypeError(t+" is not iterable!");if(i(m)){for(p=a(t.length);p>w;w++)if(y=e?g(c(d=t[w])[0],d[1]):g(t[w]),y===s||y===f)return y}else for(v=m.call(t);!(d=v.next()).done;)if(y=o(v,g,d.value,e),y===s||y===f)return y};e.BREAK=s,e.RETURN=f},aba2:function(t,e,n){var r=n("e53d"),o=n("4178").set,i=r.MutationObserver||r.WebKitMutationObserver,c=r.process,a=r.Promise,u="process"==n("6b4c")(c);t.exports=function(){var t,e,n,s=function(){var r,o;u&&(r=c.domain)&&r.exit();while(t){o=t.fn,t=t.next;try{o()}catch(i){throw t?n():e=void 0,i}}e=void 0,r&&r.enter()};if(u)n=function(){c.nextTick(s)};else if(!i||r.navigator&&r.navigator.standalone)if(a&&a.resolve){var f=a.resolve(void 0);n=function(){f.then(s)}}else n=function(){o.call(r,s)};else{var l=!0,h=document.createTextNode("");new i(s).observe(h,{characterData:!0}),n=function(){h.data=l=!l}}return function(r){var o={fn:r,next:void 0};e&&(e.next=o),t||(t=o,n()),e=o}}},b0dc:function(t,e,n){var r=n("e4ae");t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(c){var i=t["return"];throw void 0!==i&&r(i.call(t)),c}}},bc13:function(t,e,n){var r=n("e53d"),o=r.navigator;t.exports=o&&o.userAgent||""},cd78:function(t,e,n){var r=n("e4ae"),o=n("f772"),i=n("656e");t.exports=function(t,e){if(r(t),o(e)&&e.constructor===t)return e;var n=i.f(t),c=n.resolve;return c(e),n.promise}},f201:function(t,e,n){var r=n("e4ae"),o=n("79aa"),i=n("5168")("species");t.exports=function(t,e){var n,c=r(t).constructor;return void 0===c||void 0==(n=r(c)[i])?e:o(n)}}}]);