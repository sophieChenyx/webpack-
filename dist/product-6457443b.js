!function(e){var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,r){!function(e,n){if(!O[e]||!b[e])return;for(var r in b[e]=!1,n)Object.prototype.hasOwnProperty.call(n,r)&&(h[r]=n[r]);0==--y&&0===m&&j()}(e,r),n&&n(e,r)};var r,t=!0,o="6457443b7622bdf874f6",c=1e4,i={},d=[],a=[];function s(e){var n=H[e];if(!n)return x;var t=function(t){return n.hot.active?(H[t]?-1===H[t].parents.indexOf(e)&&H[t].parents.push(e):(d=[e],r=t),-1===n.children.indexOf(t)&&n.children.push(t)):(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),d=[]),x(t)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return x[e]},set:function(n){x[e]=n}}};for(var c in x)Object.prototype.hasOwnProperty.call(x,c)&&"e"!==c&&Object.defineProperty(t,c,o(c));return t.e=function(e){return"ready"===p&&u("prepare"),m++,x.e(e).then(n,function(e){throw n(),e});function n(){m--,"prepare"===p&&(w[e]||D(e),0===m&&0===y&&j())}},t}var l=[],p="idle";function u(e){p=e;for(var n=0;n<l.length;n++)l[n].call(null,e)}var f,h,v,y=0,m=0,w={},b={},O={};function g(e){return+e+""===e?+e:e}function _(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return t=e,u("check"),(n=c,n=n||1e4,new Promise(function(e,r){if("undefined"==typeof XMLHttpRequest)return r(new Error("No browser support"));try{var t=new XMLHttpRequest,c=x.p+""+o+".hot-update.json";t.open("GET",c,!0),t.timeout=n,t.send(null)}catch(e){return r(e)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)r(new Error("Manifest request to "+c+" timed out."));else if(404===t.status)e();else if(200!==t.status&&304!==t.status)r(new Error("Manifest request to "+c+" failed."));else{try{var n=JSON.parse(t.responseText)}catch(e){return void r(e)}e(n)}}})).then(function(e){if(!e)return u("idle"),null;b={},w={},O=e.c,v=e.h,u("prepare");var n=new Promise(function(e,n){f={resolve:e,reject:n}});h={};return D(0),"prepare"===p&&0===m&&0===y&&j(),n});var n}function D(e){O[e]?(b[e]=!0,y++,function(e){var n=document.getElementsByTagName("head")[0],r=document.createElement("script");r.charset="utf-8",r.src=x.p+""+e+"."+o+".hot-update.js",n.appendChild(r)}(e)):w[e]=!0}function j(){u("ready");var e=f;if(f=null,e)if(t)Promise.resolve().then(function(){return E(t)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var r in h)Object.prototype.hasOwnProperty.call(h,r)&&n.push(g(r));e.resolve(n)}}function E(n){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var r,t,c,a,s;function l(e){for(var n=[e],r={},t=n.slice().map(function(e){return{chain:[e],id:e}});t.length>0;){var o=t.pop(),c=o.id,i=o.chain;if((a=H[c])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:c};if(a.hot._main)return{type:"unaccepted",chain:i,moduleId:c};for(var d=0;d<a.parents.length;d++){var s=a.parents[d],l=H[s];if(l){if(l.hot._declinedDependencies[c])return{type:"declined",chain:i.concat([s]),moduleId:c,parentId:s};-1===n.indexOf(s)&&(l.hot._acceptedDependencies[c]?(r[s]||(r[s]=[]),f(r[s],[c])):(delete r[s],n.push(s),t.push({chain:i.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:r}}function f(e,n){for(var r=0;r<n.length;r++){var t=n[r];-1===e.indexOf(t)&&e.push(t)}}n=n||{};var y={},m=[],w={},b=function(){console.warn("[HMR] unexpected require("+D.moduleId+") to disposed module")};for(var _ in h)if(Object.prototype.hasOwnProperty.call(h,_)){var D;s=g(_);var j=!1,E=!1,P=!1,I="";switch((D=h[_]?l(s):{type:"disposed",moduleId:_}).chain&&(I="\nUpdate propagation: "+D.chain.join(" -> ")),D.type){case"self-declined":n.onDeclined&&n.onDeclined(D),n.ignoreDeclined||(j=new Error("Aborted because of self decline: "+D.moduleId+I));break;case"declined":n.onDeclined&&n.onDeclined(D),n.ignoreDeclined||(j=new Error("Aborted because of declined dependency: "+D.moduleId+" in "+D.parentId+I));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(D),n.ignoreUnaccepted||(j=new Error("Aborted because "+s+" is not accepted"+I));break;case"accepted":n.onAccepted&&n.onAccepted(D),E=!0;break;case"disposed":n.onDisposed&&n.onDisposed(D),P=!0;break;default:throw new Error("Unexception type "+D.type)}if(j)return u("abort"),Promise.reject(j);if(E)for(s in w[s]=h[s],f(m,D.outdatedModules),D.outdatedDependencies)Object.prototype.hasOwnProperty.call(D.outdatedDependencies,s)&&(y[s]||(y[s]=[]),f(y[s],D.outdatedDependencies[s]));P&&(f(m,[D.moduleId]),w[s]=b)}var k,A=[];for(t=0;t<m.length;t++)s=m[t],H[s]&&H[s].hot._selfAccepted&&A.push({module:s,errorHandler:H[s].hot._selfAccepted});u("dispose"),Object.keys(O).forEach(function(e){!1===O[e]&&function(e){delete installedChunks[e]}(e)});for(var M,U,q=m.slice();q.length>0;)if(s=q.pop(),a=H[s]){var R={},S=a.hot._disposeHandlers;for(c=0;c<S.length;c++)(r=S[c])(R);for(i[s]=R,a.hot.active=!1,delete H[s],delete y[s],c=0;c<a.children.length;c++){var N=H[a.children[c]];N&&((k=N.parents.indexOf(s))>=0&&N.parents.splice(k,1))}}for(s in y)if(Object.prototype.hasOwnProperty.call(y,s)&&(a=H[s]))for(U=y[s],c=0;c<U.length;c++)M=U[c],(k=a.children.indexOf(M))>=0&&a.children.splice(k,1);for(s in u("apply"),o=v,w)Object.prototype.hasOwnProperty.call(w,s)&&(e[s]=w[s]);var T=null;for(s in y)if(Object.prototype.hasOwnProperty.call(y,s)&&(a=H[s])){U=y[s];var C=[];for(t=0;t<U.length;t++)if(M=U[t],r=a.hot._acceptedDependencies[M]){if(-1!==C.indexOf(r))continue;C.push(r)}for(t=0;t<C.length;t++){r=C[t];try{r(U)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:s,dependencyId:U[t],error:e}),n.ignoreErrored||T||(T=e)}}}for(t=0;t<A.length;t++){var L=A[t];s=L.module,d=[s];try{x(s)}catch(e){if("function"==typeof L.errorHandler)try{L.errorHandler(e)}catch(r){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:r,originalError:e}),n.ignoreErrored||T||(T=r),T||(T=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:s,error:e}),n.ignoreErrored||T||(T=e)}}return T?(u("fail"),Promise.reject(T)):(u("idle"),new Promise(function(e){e(m)}))}var H={};function x(n){if(H[n])return H[n].exports;var t=H[n]={i:n,l:!1,exports:{},hot:function(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:r!==e,active:!0,accept:function(e,r){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._acceptedDependencies[e[t]]=r||function(){};else n._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._declinedDependencies[e[r]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=n._disposeHandlers.indexOf(e);r>=0&&n._disposeHandlers.splice(r,1)},check:_,apply:E,status:function(e){if(!e)return p;l.push(e)},addStatusHandler:function(e){l.push(e)},removeStatusHandler:function(e){var n=l.indexOf(e);n>=0&&l.splice(n,1)},data:i[e]};return r=void 0,n}(n),parents:(a=d,d=[],a),children:[]};return e[n].call(t.exports,t,t.exports,s(n)),t.l=!0,t.exports}x.m=e,x.c=H,x.d=function(e,n,r){x.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},x.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},x.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return x.d(n,"a",n),n},x.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},x.p="/",x.h=function(){return o},s(1)(x.s=1)}([,function(e,n,r){"use strict";console.log("我是product.js"),document.write("我是product.js")}]);