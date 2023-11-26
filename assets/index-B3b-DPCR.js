const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ruffle_web-BmpnpbKh.js","./ruffle-imports-CztXuSei.js","./ruffle_web-wasm_mvp-DB98f-AV.js"])))=>i.map(i=>d[i]);
var sg=Object.defineProperty;var cg=(s,i,o)=>i in s?sg(s,i,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[i]=o;var br=(s,i,o)=>cg(s,typeof i!="symbol"?i+"":i,o);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))u(f);new MutationObserver(f=>{for(const m of f)if(m.type==="childList")for(const g of m.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&u(g)}).observe(document,{childList:!0,subtree:!0});function o(f){const m={};return f.integrity&&(m.integrity=f.integrity),f.referrerPolicy&&(m.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?m.credentials="include":f.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function u(f){if(f.ep)return;f.ep=!0;const m=o(f);fetch(f.href,m)}})();function kp(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Zu={exports:{}},$l={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jm;function fg(){if(jm)return $l;jm=1;var s=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function o(u,f,m){var g=null;if(m!==void 0&&(g=""+m),f.key!==void 0&&(g=""+f.key),"key"in f){m={};for(var w in f)w!=="key"&&(m[w]=f[w])}else m=f;return f=m.ref,{$$typeof:s,type:u,key:g,ref:f!==void 0?f:null,props:m}}return $l.Fragment=i,$l.jsx=o,$l.jsxs=o,$l}var Am;function dg(){return Am||(Am=1,Zu.exports=fg()),Zu.exports}var N=dg(),Qu={exports:{}},J={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tm;function mg(){if(Tm)return J;Tm=1;var s=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),g=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),O=Symbol.for("react.lazy"),H=Symbol.iterator;function $(h){return h===null||typeof h!="object"?null:(h=H&&h[H]||h["@@iterator"],typeof h=="function"?h:null)}var X={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},le=Object.assign,oe={};function be(h,M,U){this.props=h,this.context=M,this.refs=oe,this.updater=U||X}be.prototype.isReactComponent={},be.prototype.setState=function(h,M){if(typeof h!="object"&&typeof h!="function"&&h!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,h,M,"setState")},be.prototype.forceUpdate=function(h){this.updater.enqueueForceUpdate(this,h,"forceUpdate")};function qe(){}qe.prototype=be.prototype;function Ye(h,M,U){this.props=h,this.context=M,this.refs=oe,this.updater=U||X}var ue=Ye.prototype=new qe;ue.constructor=Ye,le(ue,be.prototype),ue.isPureReactComponent=!0;var ne=Array.isArray,W={H:null,A:null,T:null,S:null,V:null},Ue=Object.prototype.hasOwnProperty;function de(h,M,U,C,Y,se){return U=se.ref,{$$typeof:s,type:h,key:M,ref:U!==void 0?U:null,props:se}}function ye(h,M){return de(h.type,M,void 0,void 0,void 0,h.props)}function _(h){return typeof h=="object"&&h!==null&&h.$$typeof===s}function V(h){var M={"=":"=0",":":"=2"};return"$"+h.replace(/[=:]/g,function(U){return M[U]})}var ie=/\/+/g;function Ae(h,M){return typeof h=="object"&&h!==null&&h.key!=null?V(""+h.key):M.toString(36)}function dn(){}function Ze(h){switch(h.status){case"fulfilled":return h.value;case"rejected":throw h.reason;default:switch(typeof h.status=="string"?h.then(dn,dn):(h.status="pending",h.then(function(M){h.status==="pending"&&(h.status="fulfilled",h.value=M)},function(M){h.status==="pending"&&(h.status="rejected",h.reason=M)})),h.status){case"fulfilled":return h.value;case"rejected":throw h.reason}}throw h}function nn(h,M,U,C,Y){var se=typeof h;(se==="undefined"||se==="boolean")&&(h=null);var K=!1;if(h===null)K=!0;else switch(se){case"bigint":case"string":case"number":K=!0;break;case"object":switch(h.$$typeof){case s:case i:K=!0;break;case O:return K=h._init,nn(K(h._payload),M,U,C,Y)}}if(K)return Y=Y(h),K=C===""?"."+Ae(h,0):C,ne(Y)?(U="",K!=null&&(U=K.replace(ie,"$&/")+"/"),nn(Y,M,U,"",function(rt){return rt})):Y!=null&&(_(Y)&&(Y=ye(Y,U+(Y.key==null||h&&h.key===Y.key?"":(""+Y.key).replace(ie,"$&/")+"/")+K)),M.push(Y)),1;K=0;var mn=C===""?".":C+":";if(ne(h))for(var Te=0;Te<h.length;Te++)C=h[Te],se=mn+Ae(C,Te),K+=nn(C,M,U,se,Y);else if(Te=$(h),typeof Te=="function")for(h=Te.call(h),Te=0;!(C=h.next()).done;)C=C.value,se=mn+Ae(C,Te++),K+=nn(C,M,U,se,Y);else if(se==="object"){if(typeof h.then=="function")return nn(Ze(h),M,U,C,Y);throw M=String(h),Error("Objects are not valid as a React child (found: "+(M==="[object Object]"?"object with keys {"+Object.keys(h).join(", ")+"}":M)+"). If you meant to render a collection of children, use an array instead.")}return K}function j(h,M,U){if(h==null)return h;var C=[],Y=0;return nn(h,C,"","",function(se){return M.call(U,se,Y++)}),C}function q(h){if(h._status===-1){var M=h._result;M=M(),M.then(function(U){(h._status===0||h._status===-1)&&(h._status=1,h._result=U)},function(U){(h._status===0||h._status===-1)&&(h._status=2,h._result=U)}),h._status===-1&&(h._status=0,h._result=M)}if(h._status===1)return h._result.default;throw h._result}var Z=typeof reportError=="function"?reportError:function(h){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var M=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof h=="object"&&h!==null&&typeof h.message=="string"?String(h.message):String(h),error:h});if(!window.dispatchEvent(M))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",h);return}console.error(h)};function Se(){}return J.Children={map:j,forEach:function(h,M,U){j(h,function(){M.apply(this,arguments)},U)},count:function(h){var M=0;return j(h,function(){M++}),M},toArray:function(h){return j(h,function(M){return M})||[]},only:function(h){if(!_(h))throw Error("React.Children.only expected to receive a single React element child.");return h}},J.Component=be,J.Fragment=o,J.Profiler=f,J.PureComponent=Ye,J.StrictMode=u,J.Suspense=k,J.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,J.__COMPILER_RUNTIME={__proto__:null,c:function(h){return W.H.useMemoCache(h)}},J.cache=function(h){return function(){return h.apply(null,arguments)}},J.cloneElement=function(h,M,U){if(h==null)throw Error("The argument must be a React element, but you passed "+h+".");var C=le({},h.props),Y=h.key,se=void 0;if(M!=null)for(K in M.ref!==void 0&&(se=void 0),M.key!==void 0&&(Y=""+M.key),M)!Ue.call(M,K)||K==="key"||K==="__self"||K==="__source"||K==="ref"&&M.ref===void 0||(C[K]=M[K]);var K=arguments.length-2;if(K===1)C.children=U;else if(1<K){for(var mn=Array(K),Te=0;Te<K;Te++)mn[Te]=arguments[Te+2];C.children=mn}return de(h.type,Y,void 0,void 0,se,C)},J.createContext=function(h){return h={$$typeof:g,_currentValue:h,_currentValue2:h,_threadCount:0,Provider:null,Consumer:null},h.Provider=h,h.Consumer={$$typeof:m,_context:h},h},J.createElement=function(h,M,U){var C,Y={},se=null;if(M!=null)for(C in M.key!==void 0&&(se=""+M.key),M)Ue.call(M,C)&&C!=="key"&&C!=="__self"&&C!=="__source"&&(Y[C]=M[C]);var K=arguments.length-2;if(K===1)Y.children=U;else if(1<K){for(var mn=Array(K),Te=0;Te<K;Te++)mn[Te]=arguments[Te+2];Y.children=mn}if(h&&h.defaultProps)for(C in K=h.defaultProps,K)Y[C]===void 0&&(Y[C]=K[C]);return de(h,se,void 0,void 0,null,Y)},J.createRef=function(){return{current:null}},J.forwardRef=function(h){return{$$typeof:w,render:h}},J.isValidElement=_,J.lazy=function(h){return{$$typeof:O,_payload:{_status:-1,_result:h},_init:q}},J.memo=function(h,M){return{$$typeof:b,type:h,compare:M===void 0?null:M}},J.startTransition=function(h){var M=W.T,U={};W.T=U;try{var C=h(),Y=W.S;Y!==null&&Y(U,C),typeof C=="object"&&C!==null&&typeof C.then=="function"&&C.then(Se,Z)}catch(se){Z(se)}finally{W.T=M}},J.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},J.use=function(h){return W.H.use(h)},J.useActionState=function(h,M,U){return W.H.useActionState(h,M,U)},J.useCallback=function(h,M){return W.H.useCallback(h,M)},J.useContext=function(h){return W.H.useContext(h)},J.useDebugValue=function(){},J.useDeferredValue=function(h,M){return W.H.useDeferredValue(h,M)},J.useEffect=function(h,M,U){var C=W.H;if(typeof U=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return C.useEffect(h,M)},J.useId=function(){return W.H.useId()},J.useImperativeHandle=function(h,M,U){return W.H.useImperativeHandle(h,M,U)},J.useInsertionEffect=function(h,M){return W.H.useInsertionEffect(h,M)},J.useLayoutEffect=function(h,M){return W.H.useLayoutEffect(h,M)},J.useMemo=function(h,M){return W.H.useMemo(h,M)},J.useOptimistic=function(h,M){return W.H.useOptimistic(h,M)},J.useReducer=function(h,M,U){return W.H.useReducer(h,M,U)},J.useRef=function(h){return W.H.useRef(h)},J.useState=function(h){return W.H.useState(h)},J.useSyncExternalStore=function(h,M,U){return W.H.useSyncExternalStore(h,M,U)},J.useTransition=function(){return W.H.useTransition()},J.version="19.1.0",J}var Dm;function js(){return Dm||(Dm=1,Qu.exports=mg()),Qu.exports}var en=js();const ms=kp(en);var $u={exports:{}},Xl={},Xu={exports:{}},Wu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Om;function pg(){return Om||(Om=1,function(s){function i(j,q){var Z=j.length;j.push(q);e:for(;0<Z;){var Se=Z-1>>>1,h=j[Se];if(0<f(h,q))j[Se]=q,j[Z]=h,Z=Se;else break e}}function o(j){return j.length===0?null:j[0]}function u(j){if(j.length===0)return null;var q=j[0],Z=j.pop();if(Z!==q){j[0]=Z;e:for(var Se=0,h=j.length,M=h>>>1;Se<M;){var U=2*(Se+1)-1,C=j[U],Y=U+1,se=j[Y];if(0>f(C,Z))Y<h&&0>f(se,C)?(j[Se]=se,j[Y]=Z,Se=Y):(j[Se]=C,j[U]=Z,Se=U);else if(Y<h&&0>f(se,Z))j[Se]=se,j[Y]=Z,Se=Y;else break e}}return q}function f(j,q){var Z=j.sortIndex-q.sortIndex;return Z!==0?Z:j.id-q.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;s.unstable_now=function(){return m.now()}}else{var g=Date,w=g.now();s.unstable_now=function(){return g.now()-w}}var k=[],b=[],O=1,H=null,$=3,X=!1,le=!1,oe=!1,be=!1,qe=typeof setTimeout=="function"?setTimeout:null,Ye=typeof clearTimeout=="function"?clearTimeout:null,ue=typeof setImmediate<"u"?setImmediate:null;function ne(j){for(var q=o(b);q!==null;){if(q.callback===null)u(b);else if(q.startTime<=j)u(b),q.sortIndex=q.expirationTime,i(k,q);else break;q=o(b)}}function W(j){if(oe=!1,ne(j),!le)if(o(k)!==null)le=!0,Ue||(Ue=!0,Ae());else{var q=o(b);q!==null&&nn(W,q.startTime-j)}}var Ue=!1,de=-1,ye=5,_=-1;function V(){return be?!0:!(s.unstable_now()-_<ye)}function ie(){if(be=!1,Ue){var j=s.unstable_now();_=j;var q=!0;try{e:{le=!1,oe&&(oe=!1,Ye(de),de=-1),X=!0;var Z=$;try{n:{for(ne(j),H=o(k);H!==null&&!(H.expirationTime>j&&V());){var Se=H.callback;if(typeof Se=="function"){H.callback=null,$=H.priorityLevel;var h=Se(H.expirationTime<=j);if(j=s.unstable_now(),typeof h=="function"){H.callback=h,ne(j),q=!0;break n}H===o(k)&&u(k),ne(j)}else u(k);H=o(k)}if(H!==null)q=!0;else{var M=o(b);M!==null&&nn(W,M.startTime-j),q=!1}}break e}finally{H=null,$=Z,X=!1}q=void 0}}finally{q?Ae():Ue=!1}}}var Ae;if(typeof ue=="function")Ae=function(){ue(ie)};else if(typeof MessageChannel<"u"){var dn=new MessageChannel,Ze=dn.port2;dn.port1.onmessage=ie,Ae=function(){Ze.postMessage(null)}}else Ae=function(){qe(ie,0)};function nn(j,q){de=qe(function(){j(s.unstable_now())},q)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(j){j.callback=null},s.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ye=0<j?Math.floor(1e3/j):5},s.unstable_getCurrentPriorityLevel=function(){return $},s.unstable_next=function(j){switch($){case 1:case 2:case 3:var q=3;break;default:q=$}var Z=$;$=q;try{return j()}finally{$=Z}},s.unstable_requestPaint=function(){be=!0},s.unstable_runWithPriority=function(j,q){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var Z=$;$=j;try{return q()}finally{$=Z}},s.unstable_scheduleCallback=function(j,q,Z){var Se=s.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?Se+Z:Se):Z=Se,j){case 1:var h=-1;break;case 2:h=250;break;case 5:h=1073741823;break;case 4:h=1e4;break;default:h=5e3}return h=Z+h,j={id:O++,callback:q,priorityLevel:j,startTime:Z,expirationTime:h,sortIndex:-1},Z>Se?(j.sortIndex=Z,i(b,j),o(k)===null&&j===o(b)&&(oe?(Ye(de),de=-1):oe=!0,nn(W,Z-Se))):(j.sortIndex=h,i(k,j),le||X||(le=!0,Ue||(Ue=!0,Ae()))),j},s.unstable_shouldYield=V,s.unstable_wrapCallback=function(j){var q=$;return function(){var Z=$;$=q;try{return j.apply(this,arguments)}finally{$=Z}}}}(Wu)),Wu}var Mm;function hg(){return Mm||(Mm=1,Xu.exports=pg()),Xu.exports}var Ku={exports:{}},ln={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _m;function vg(){if(_m)return ln;_m=1;var s=js();function i(k){var b="https://react.dev/errors/"+k;if(1<arguments.length){b+="?args[]="+encodeURIComponent(arguments[1]);for(var O=2;O<arguments.length;O++)b+="&args[]="+encodeURIComponent(arguments[O])}return"Minified React error #"+k+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var u={d:{f:o,r:function(){throw Error(i(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},f=Symbol.for("react.portal");function m(k,b,O){var H=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:H==null?null:""+H,children:k,containerInfo:b,implementation:O}}var g=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function w(k,b){if(k==="font")return"";if(typeof b=="string")return b==="use-credentials"?b:""}return ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,ln.createPortal=function(k,b){var O=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!b||b.nodeType!==1&&b.nodeType!==9&&b.nodeType!==11)throw Error(i(299));return m(k,b,null,O)},ln.flushSync=function(k){var b=g.T,O=u.p;try{if(g.T=null,u.p=2,k)return k()}finally{g.T=b,u.p=O,u.d.f()}},ln.preconnect=function(k,b){typeof k=="string"&&(b?(b=b.crossOrigin,b=typeof b=="string"?b==="use-credentials"?b:"":void 0):b=null,u.d.C(k,b))},ln.prefetchDNS=function(k){typeof k=="string"&&u.d.D(k)},ln.preinit=function(k,b){if(typeof k=="string"&&b&&typeof b.as=="string"){var O=b.as,H=w(O,b.crossOrigin),$=typeof b.integrity=="string"?b.integrity:void 0,X=typeof b.fetchPriority=="string"?b.fetchPriority:void 0;O==="style"?u.d.S(k,typeof b.precedence=="string"?b.precedence:void 0,{crossOrigin:H,integrity:$,fetchPriority:X}):O==="script"&&u.d.X(k,{crossOrigin:H,integrity:$,fetchPriority:X,nonce:typeof b.nonce=="string"?b.nonce:void 0})}},ln.preinitModule=function(k,b){if(typeof k=="string")if(typeof b=="object"&&b!==null){if(b.as==null||b.as==="script"){var O=w(b.as,b.crossOrigin);u.d.M(k,{crossOrigin:O,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0})}}else b==null&&u.d.M(k)},ln.preload=function(k,b){if(typeof k=="string"&&typeof b=="object"&&b!==null&&typeof b.as=="string"){var O=b.as,H=w(O,b.crossOrigin);u.d.L(k,O,{crossOrigin:H,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,type:typeof b.type=="string"?b.type:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0,referrerPolicy:typeof b.referrerPolicy=="string"?b.referrerPolicy:void 0,imageSrcSet:typeof b.imageSrcSet=="string"?b.imageSrcSet:void 0,imageSizes:typeof b.imageSizes=="string"?b.imageSizes:void 0,media:typeof b.media=="string"?b.media:void 0})}},ln.preloadModule=function(k,b){if(typeof k=="string")if(b){var O=w(b.as,b.crossOrigin);u.d.m(k,{as:typeof b.as=="string"&&b.as!=="script"?b.as:void 0,crossOrigin:O,integrity:typeof b.integrity=="string"?b.integrity:void 0})}else u.d.m(k)},ln.requestFormReset=function(k){u.d.r(k)},ln.unstable_batchedUpdates=function(k,b){return k(b)},ln.useFormState=function(k,b,O){return g.H.useFormState(k,b,O)},ln.useFormStatus=function(){return g.H.useHostTransitionStatus()},ln.version="19.1.0",ln}var Cm;function gg(){if(Cm)return Ku.exports;Cm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(i){console.error(i)}}return s(),Ku.exports=vg(),Ku.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qm;function bg(){if(qm)return Xl;qm=1;var s=hg(),i=js(),o=gg();function u(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function g(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function w(e){if(m(e)!==e)throw Error(u(188))}function k(e){var n=e.alternate;if(!n){if(n=m(e),n===null)throw Error(u(188));return n!==e?null:e}for(var t=e,a=n;;){var l=t.return;if(l===null)break;var r=l.alternate;if(r===null){if(a=l.return,a!==null){t=a;continue}break}if(l.child===r.child){for(r=l.child;r;){if(r===t)return w(l),e;if(r===a)return w(l),n;r=r.sibling}throw Error(u(188))}if(t.return!==a.return)t=l,a=r;else{for(var c=!1,d=l.child;d;){if(d===t){c=!0,t=l,a=r;break}if(d===a){c=!0,a=l,t=r;break}d=d.sibling}if(!c){for(d=r.child;d;){if(d===t){c=!0,t=r,a=l;break}if(d===a){c=!0,a=r,t=l;break}d=d.sibling}if(!c)throw Error(u(189))}}if(t.alternate!==a)throw Error(u(190))}if(t.tag!==3)throw Error(u(188));return t.stateNode.current===t?e:n}function b(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=b(e),n!==null)return n;e=e.sibling}return null}var O=Object.assign,H=Symbol.for("react.element"),$=Symbol.for("react.transitional.element"),X=Symbol.for("react.portal"),le=Symbol.for("react.fragment"),oe=Symbol.for("react.strict_mode"),be=Symbol.for("react.profiler"),qe=Symbol.for("react.provider"),Ye=Symbol.for("react.consumer"),ue=Symbol.for("react.context"),ne=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),Ue=Symbol.for("react.suspense_list"),de=Symbol.for("react.memo"),ye=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),V=Symbol.for("react.memo_cache_sentinel"),ie=Symbol.iterator;function Ae(e){return e===null||typeof e!="object"?null:(e=ie&&e[ie]||e["@@iterator"],typeof e=="function"?e:null)}var dn=Symbol.for("react.client.reference");function Ze(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===dn?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case le:return"Fragment";case be:return"Profiler";case oe:return"StrictMode";case W:return"Suspense";case Ue:return"SuspenseList";case _:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case X:return"Portal";case ue:return(e.displayName||"Context")+".Provider";case Ye:return(e._context.displayName||"Context")+".Consumer";case ne:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case de:return n=e.displayName||null,n!==null?n:Ze(e.type)||"Memo";case ye:n=e._payload,e=e._init;try{return Ze(e(n))}catch{}}return null}var nn=Array.isArray,j=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},Se=[],h=-1;function M(e){return{current:e}}function U(e){0>h||(e.current=Se[h],Se[h]=null,h--)}function C(e,n){h++,Se[h]=e.current,e.current=n}var Y=M(null),se=M(null),K=M(null),mn=M(null);function Te(e,n){switch(C(K,n),C(se,e),C(Y,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?nm(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=nm(n),e=tm(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}U(Y),C(Y,e)}function rt(){U(Y),U(se),U(K)}function Tr(e){e.memoizedState!==null&&C(mn,e);var n=Y.current,t=tm(n,e.type);n!==t&&(C(se,e),C(Y,t))}function ai(e){se.current===e&&(U(Y),U(se)),mn.current===e&&(U(mn),Yl._currentValue=Z)}var Dr=Object.prototype.hasOwnProperty,Or=s.unstable_scheduleCallback,Mr=s.unstable_cancelCallback,Vp=s.unstable_shouldYield,Yp=s.unstable_requestPaint,Nn=s.unstable_now,Fp=s.unstable_getCurrentPriorityLevel,Cs=s.unstable_ImmediatePriority,qs=s.unstable_UserBlockingPriority,li=s.unstable_NormalPriority,Gp=s.unstable_LowPriority,Us=s.unstable_IdlePriority,Zp=s.log,Qp=s.unstable_setDisableYieldValue,Ka=null,pn=null;function ot(e){if(typeof Zp=="function"&&Qp(e),pn&&typeof pn.setStrictMode=="function")try{pn.setStrictMode(Ka,e)}catch{}}var hn=Math.clz32?Math.clz32:Wp,$p=Math.log,Xp=Math.LN2;function Wp(e){return e>>>=0,e===0?32:31-($p(e)/Xp|0)|0}var ii=256,ri=4194304;function qt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function oi(e,n,t){var a=e.pendingLanes;if(a===0)return 0;var l=0,r=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var d=a&134217727;return d!==0?(a=d&~r,a!==0?l=qt(a):(c&=d,c!==0?l=qt(c):t||(t=d&~e,t!==0&&(l=qt(t))))):(d=a&~r,d!==0?l=qt(d):c!==0?l=qt(c):t||(t=a&~e,t!==0&&(l=qt(t)))),l===0?0:n!==0&&n!==l&&(n&r)===0&&(r=l&-l,t=n&-n,r>=t||r===32&&(t&4194048)!==0)?n:l}function Ja(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Kp(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ns(){var e=ii;return ii<<=1,(ii&4194048)===0&&(ii=256),e}function Ls(){var e=ri;return ri<<=1,(ri&62914560)===0&&(ri=4194304),e}function _r(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Pa(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Jp(e,n,t,a,l,r){var c=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var d=e.entanglements,p=e.expirationTimes,S=e.hiddenUpdates;for(t=c&~t;0<t;){var E=31-hn(t),T=1<<E;d[E]=0,p[E]=-1;var z=S[E];if(z!==null)for(S[E]=null,E=0;E<z.length;E++){var x=z[E];x!==null&&(x.lane&=-536870913)}t&=~T}a!==0&&Hs(e,a,0),r!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=r&~(c&~n))}function Hs(e,n,t){e.pendingLanes|=n,e.suspendedLanes&=~n;var a=31-hn(n);e.entangledLanes|=n,e.entanglements[a]=e.entanglements[a]|1073741824|t&4194090}function Bs(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var a=31-hn(t),l=1<<a;l&n|e[a]&n&&(e[a]|=n),t&=~l}}function Cr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function qr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Vs(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:km(e.type))}function Pp(e,n){var t=q.p;try{return q.p=e,n()}finally{q.p=t}}var ut=Math.random().toString(36).slice(2),tn="__reactFiber$"+ut,on="__reactProps$"+ut,na="__reactContainer$"+ut,Ur="__reactEvents$"+ut,Ip="__reactListeners$"+ut,eh="__reactHandles$"+ut,Ys="__reactResources$"+ut,Ia="__reactMarker$"+ut;function Nr(e){delete e[tn],delete e[on],delete e[Ur],delete e[Ip],delete e[eh]}function ta(e){var n=e[tn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[na]||t[tn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=rm(e);e!==null;){if(t=e[tn])return t;e=rm(e)}return n}e=t,t=e.parentNode}return null}function aa(e){if(e=e[tn]||e[na]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function el(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(u(33))}function la(e){var n=e[Ys];return n||(n=e[Ys]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Qe(e){e[Ia]=!0}var Fs=new Set,Gs={};function Ut(e,n){ia(e,n),ia(e+"Capture",n)}function ia(e,n){for(Gs[e]=n,e=0;e<n.length;e++)Fs.add(n[e])}var nh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Zs={},Qs={};function th(e){return Dr.call(Qs,e)?!0:Dr.call(Zs,e)?!1:nh.test(e)?Qs[e]=!0:(Zs[e]=!0,!1)}function ui(e,n,t){if(th(n))if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var a=n.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+t)}}function si(e,n,t){if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+t)}}function Fn(e,n,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(n,t,""+a)}}var Lr,$s;function ra(e){if(Lr===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Lr=n&&n[1]||"",$s=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Lr+e+$s}var Hr=!1;function Br(e,n){if(!e||Hr)return"";Hr=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(n){var T=function(){throw Error()};if(Object.defineProperty(T.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(T,[])}catch(x){var z=x}Reflect.construct(e,[],T)}else{try{T.call()}catch(x){z=x}e.call(T.prototype)}}else{try{throw Error()}catch(x){z=x}(T=e())&&typeof T.catch=="function"&&T.catch(function(){})}}catch(x){if(x&&z&&typeof x.stack=="string")return[x.stack,z.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=a.DetermineComponentFrameRoot(),c=r[0],d=r[1];if(c&&d){var p=c.split(`
`),S=d.split(`
`);for(l=a=0;a<p.length&&!p[a].includes("DetermineComponentFrameRoot");)a++;for(;l<S.length&&!S[l].includes("DetermineComponentFrameRoot");)l++;if(a===p.length||l===S.length)for(a=p.length-1,l=S.length-1;1<=a&&0<=l&&p[a]!==S[l];)l--;for(;1<=a&&0<=l;a--,l--)if(p[a]!==S[l]){if(a!==1||l!==1)do if(a--,l--,0>l||p[a]!==S[l]){var E=`
`+p[a].replace(" at new "," at ");return e.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",e.displayName)),E}while(1<=a&&0<=l);break}}}finally{Hr=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?ra(t):""}function ah(e){switch(e.tag){case 26:case 27:case 5:return ra(e.type);case 16:return ra("Lazy");case 13:return ra("Suspense");case 19:return ra("SuspenseList");case 0:case 15:return Br(e.type,!1);case 11:return Br(e.type.render,!1);case 1:return Br(e.type,!0);case 31:return ra("Activity");default:return""}}function Xs(e){try{var n="";do n+=ah(e),e=e.return;while(e);return n}catch(t){return`
Error generating stack: `+t.message+`
`+t.stack}}function Sn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ws(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function lh(e){var n=Ws(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),a=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,r=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(c){a=""+c,r.call(this,c)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return a},setValue:function(c){a=""+c},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ci(e){e._valueTracker||(e._valueTracker=lh(e))}function Ks(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),a="";return e&&(a=Ws(e)?e.checked?"true":"false":e.value),e=a,e!==t?(n.setValue(e),!0):!1}function fi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ih=/[\n"\\]/g;function zn(e){return e.replace(ih,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Vr(e,n,t,a,l,r,c,d){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),n!=null?c==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Sn(n)):e.value!==""+Sn(n)&&(e.value=""+Sn(n)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),n!=null?Yr(e,c,Sn(n)):t!=null?Yr(e,c,Sn(t)):a!=null&&e.removeAttribute("value"),l==null&&r!=null&&(e.defaultChecked=!!r),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.name=""+Sn(d):e.removeAttribute("name")}function Js(e,n,t,a,l,r,c,d){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),n!=null||t!=null){if(!(r!=="submit"&&r!=="reset"||n!=null))return;t=t!=null?""+Sn(t):"",n=n!=null?""+Sn(n):t,d||n===e.value||(e.value=n),e.defaultValue=n}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=d?e.checked:!!a,e.defaultChecked=!!a,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c)}function Yr(e,n,t){n==="number"&&fi(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function oa(e,n,t,a){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&a&&(e[t].defaultSelected=!0)}else{for(t=""+Sn(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function Ps(e,n,t){if(n!=null&&(n=""+Sn(n),n!==e.value&&(e.value=n),t==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=t!=null?""+Sn(t):""}function Is(e,n,t,a){if(n==null){if(a!=null){if(t!=null)throw Error(u(92));if(nn(a)){if(1<a.length)throw Error(u(93));a=a[0]}t=a}t==null&&(t=""),n=t}t=Sn(n),e.defaultValue=t,a=e.textContent,a===t&&a!==""&&a!==null&&(e.value=a)}function ua(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var rh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ec(e,n,t){var a=n.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?a?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":a?e.setProperty(n,t):typeof t!="number"||t===0||rh.has(n)?n==="float"?e.cssFloat=t:e[n]=(""+t).trim():e[n]=t+"px"}function nc(e,n,t){if(n!=null&&typeof n!="object")throw Error(u(62));if(e=e.style,t!=null){for(var a in t)!t.hasOwnProperty(a)||n!=null&&n.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var l in n)a=n[l],n.hasOwnProperty(l)&&t[l]!==a&&ec(e,l,a)}else for(var r in n)n.hasOwnProperty(r)&&ec(e,r,n[r])}function Fr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var oh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),uh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function di(e){return uh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Gr=null;function Zr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var sa=null,ca=null;function tc(e){var n=aa(e);if(n&&(e=n.stateNode)){var t=e[on]||null;e:switch(e=n.stateNode,n.type){case"input":if(Vr(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+zn(""+n)+'"][type="radio"]'),n=0;n<t.length;n++){var a=t[n];if(a!==e&&a.form===e.form){var l=a[on]||null;if(!l)throw Error(u(90));Vr(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<t.length;n++)a=t[n],a.form===e.form&&Ks(a)}break e;case"textarea":Ps(e,t.value,t.defaultValue);break e;case"select":n=t.value,n!=null&&oa(e,!!t.multiple,n,!1)}}}var Qr=!1;function ac(e,n,t){if(Qr)return e(n,t);Qr=!0;try{var a=e(n);return a}finally{if(Qr=!1,(sa!==null||ca!==null)&&(Ji(),sa&&(n=sa,e=ca,ca=sa=null,tc(n),e)))for(n=0;n<e.length;n++)tc(e[n])}}function nl(e,n){var t=e.stateNode;if(t===null)return null;var a=t[on]||null;if(a===null)return null;t=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(u(231,n,typeof t));return t}var Gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$r=!1;if(Gn)try{var tl={};Object.defineProperty(tl,"passive",{get:function(){$r=!0}}),window.addEventListener("test",tl,tl),window.removeEventListener("test",tl,tl)}catch{$r=!1}var st=null,Xr=null,mi=null;function lc(){if(mi)return mi;var e,n=Xr,t=n.length,a,l="value"in st?st.value:st.textContent,r=l.length;for(e=0;e<t&&n[e]===l[e];e++);var c=t-e;for(a=1;a<=c&&n[t-a]===l[r-a];a++);return mi=l.slice(e,1<a?1-a:void 0)}function pi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function hi(){return!0}function ic(){return!1}function un(e){function n(t,a,l,r,c){this._reactName=t,this._targetInst=l,this.type=a,this.nativeEvent=r,this.target=c,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(t=e[d],this[d]=t?t(r):r[d]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?hi:ic,this.isPropagationStopped=ic,this}return O(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=hi)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=hi)},persist:function(){},isPersistent:hi}),n}var Nt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vi=un(Nt),al=O({},Nt,{view:0,detail:0}),sh=un(al),Wr,Kr,ll,gi=O({},al,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ll&&(ll&&e.type==="mousemove"?(Wr=e.screenX-ll.screenX,Kr=e.screenY-ll.screenY):Kr=Wr=0,ll=e),Wr)},movementY:function(e){return"movementY"in e?e.movementY:Kr}}),rc=un(gi),ch=O({},gi,{dataTransfer:0}),fh=un(ch),dh=O({},al,{relatedTarget:0}),Jr=un(dh),mh=O({},Nt,{animationName:0,elapsedTime:0,pseudoElement:0}),ph=un(mh),hh=O({},Nt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vh=un(hh),gh=O({},Nt,{data:0}),oc=un(gh),bh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kh(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=wh[e])?!!n[e]:!1}function Pr(){return kh}var Rh=O({},al,{key:function(e){if(e.key){var n=bh[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=pi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pr,charCode:function(e){return e.type==="keypress"?pi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?pi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sh=un(Rh),zh=O({},gi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),uc=un(zh),xh=O({},al,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pr}),Eh=un(xh),jh=O({},Nt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ah=un(jh),Th=O({},gi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Dh=un(Th),Oh=O({},Nt,{newState:0,oldState:0}),Mh=un(Oh),_h=[9,13,27,32],Ir=Gn&&"CompositionEvent"in window,il=null;Gn&&"documentMode"in document&&(il=document.documentMode);var Ch=Gn&&"TextEvent"in window&&!il,sc=Gn&&(!Ir||il&&8<il&&11>=il),cc=" ",fc=!1;function dc(e,n){switch(e){case"keyup":return _h.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fa=!1;function qh(e,n){switch(e){case"compositionend":return mc(n);case"keypress":return n.which!==32?null:(fc=!0,cc);case"textInput":return e=n.data,e===cc&&fc?null:e;default:return null}}function Uh(e,n){if(fa)return e==="compositionend"||!Ir&&dc(e,n)?(e=lc(),mi=Xr=st=null,fa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return sc&&n.locale!=="ko"?null:n.data;default:return null}}var Nh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Nh[e.type]:n==="textarea"}function hc(e,n,t,a){sa?ca?ca.push(a):ca=[a]:sa=a,n=ar(n,"onChange"),0<n.length&&(t=new vi("onChange","change",null,t,a),e.push({event:t,listeners:n}))}var rl=null,ol=null;function Lh(e){Kd(e,0)}function bi(e){var n=el(e);if(Ks(n))return e}function vc(e,n){if(e==="change")return n}var gc=!1;if(Gn){var eo;if(Gn){var no="oninput"in document;if(!no){var bc=document.createElement("div");bc.setAttribute("oninput","return;"),no=typeof bc.oninput=="function"}eo=no}else eo=!1;gc=eo&&(!document.documentMode||9<document.documentMode)}function yc(){rl&&(rl.detachEvent("onpropertychange",wc),ol=rl=null)}function wc(e){if(e.propertyName==="value"&&bi(ol)){var n=[];hc(n,ol,e,Zr(e)),ac(Lh,n)}}function Hh(e,n,t){e==="focusin"?(yc(),rl=n,ol=t,rl.attachEvent("onpropertychange",wc)):e==="focusout"&&yc()}function Bh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bi(ol)}function Vh(e,n){if(e==="click")return bi(n)}function Yh(e,n){if(e==="input"||e==="change")return bi(n)}function Fh(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var vn=typeof Object.is=="function"?Object.is:Fh;function ul(e,n){if(vn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),a=Object.keys(n);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var l=t[a];if(!Dr.call(n,l)||!vn(e[l],n[l]))return!1}return!0}function kc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Rc(e,n){var t=kc(e);e=0;for(var a;t;){if(t.nodeType===3){if(a=e+t.textContent.length,e<=n&&a>=n)return{node:t,offset:n-e};e=a}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=kc(t)}}function Sc(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Sc(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function zc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=fi(e.document);n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=fi(e.document)}return n}function to(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Gh=Gn&&"documentMode"in document&&11>=document.documentMode,da=null,ao=null,sl=null,lo=!1;function xc(e,n,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;lo||da==null||da!==fi(a)||(a=da,"selectionStart"in a&&to(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),sl&&ul(sl,a)||(sl=a,a=ar(ao,"onSelect"),0<a.length&&(n=new vi("onSelect","select",null,n,t),e.push({event:n,listeners:a}),n.target=da)))}function Lt(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var ma={animationend:Lt("Animation","AnimationEnd"),animationiteration:Lt("Animation","AnimationIteration"),animationstart:Lt("Animation","AnimationStart"),transitionrun:Lt("Transition","TransitionRun"),transitionstart:Lt("Transition","TransitionStart"),transitioncancel:Lt("Transition","TransitionCancel"),transitionend:Lt("Transition","TransitionEnd")},io={},Ec={};Gn&&(Ec=document.createElement("div").style,"AnimationEvent"in window||(delete ma.animationend.animation,delete ma.animationiteration.animation,delete ma.animationstart.animation),"TransitionEvent"in window||delete ma.transitionend.transition);function Ht(e){if(io[e])return io[e];if(!ma[e])return e;var n=ma[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Ec)return io[e]=n[t];return e}var jc=Ht("animationend"),Ac=Ht("animationiteration"),Tc=Ht("animationstart"),Zh=Ht("transitionrun"),Qh=Ht("transitionstart"),$h=Ht("transitioncancel"),Dc=Ht("transitionend"),Oc=new Map,ro="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ro.push("scrollEnd");function _n(e,n){Oc.set(e,n),Ut(n,[e])}var Mc=new WeakMap;function xn(e,n){if(typeof e=="object"&&e!==null){var t=Mc.get(e);return t!==void 0?t:(n={value:e,source:n,stack:Xs(n)},Mc.set(e,n),n)}return{value:e,source:n,stack:Xs(n)}}var En=[],pa=0,oo=0;function yi(){for(var e=pa,n=oo=pa=0;n<e;){var t=En[n];En[n++]=null;var a=En[n];En[n++]=null;var l=En[n];En[n++]=null;var r=En[n];if(En[n++]=null,a!==null&&l!==null){var c=a.pending;c===null?l.next=l:(l.next=c.next,c.next=l),a.pending=l}r!==0&&_c(t,l,r)}}function wi(e,n,t,a){En[pa++]=e,En[pa++]=n,En[pa++]=t,En[pa++]=a,oo|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function uo(e,n,t,a){return wi(e,n,t,a),ki(e)}function ha(e,n){return wi(e,null,null,n),ki(e)}function _c(e,n,t){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t);for(var l=!1,r=e.return;r!==null;)r.childLanes|=t,a=r.alternate,a!==null&&(a.childLanes|=t),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(l=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,l&&n!==null&&(l=31-hn(t),e=r.hiddenUpdates,a=e[l],a===null?e[l]=[n]:a.push(n),n.lane=t|536870912),r):null}function ki(e){if(50<Cl)throw Cl=0,hu=null,Error(u(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var va={};function Xh(e,n,t,a){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gn(e,n,t,a){return new Xh(e,n,t,a)}function so(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Zn(e,n){var t=e.alternate;return t===null?(t=gn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function Cc(e,n){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Ri(e,n,t,a,l,r){var c=0;if(a=e,typeof e=="function")so(e)&&(c=1);else if(typeof e=="string")c=Kv(e,t,Y.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case _:return e=gn(31,t,n,l),e.elementType=_,e.lanes=r,e;case le:return Bt(t.children,l,r,n);case oe:c=8,l|=24;break;case be:return e=gn(12,t,n,l|2),e.elementType=be,e.lanes=r,e;case W:return e=gn(13,t,n,l),e.elementType=W,e.lanes=r,e;case Ue:return e=gn(19,t,n,l),e.elementType=Ue,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case qe:case ue:c=10;break e;case Ye:c=9;break e;case ne:c=11;break e;case de:c=14;break e;case ye:c=16,a=null;break e}c=29,t=Error(u(130,e===null?"null":typeof e,"")),a=null}return n=gn(c,t,n,l),n.elementType=e,n.type=a,n.lanes=r,n}function Bt(e,n,t,a){return e=gn(7,e,a,n),e.lanes=t,e}function co(e,n,t){return e=gn(6,e,null,n),e.lanes=t,e}function fo(e,n,t){return n=gn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var ga=[],ba=0,Si=null,zi=0,jn=[],An=0,Vt=null,Qn=1,$n="";function Yt(e,n){ga[ba++]=zi,ga[ba++]=Si,Si=e,zi=n}function qc(e,n,t){jn[An++]=Qn,jn[An++]=$n,jn[An++]=Vt,Vt=e;var a=Qn;e=$n;var l=32-hn(a)-1;a&=~(1<<l),t+=1;var r=32-hn(n)+l;if(30<r){var c=l-l%5;r=(a&(1<<c)-1).toString(32),a>>=c,l-=c,Qn=1<<32-hn(n)+l|t<<l|a,$n=r+e}else Qn=1<<r|t<<l|a,$n=e}function mo(e){e.return!==null&&(Yt(e,1),qc(e,1,0))}function po(e){for(;e===Si;)Si=ga[--ba],ga[ba]=null,zi=ga[--ba],ga[ba]=null;for(;e===Vt;)Vt=jn[--An],jn[An]=null,$n=jn[--An],jn[An]=null,Qn=jn[--An],jn[An]=null}var rn=null,_e=null,fe=!1,Ft=null,Ln=!1,ho=Error(u(519));function Gt(e){var n=Error(u(418,""));throw dl(xn(n,e)),ho}function Uc(e){var n=e.stateNode,t=e.type,a=e.memoizedProps;switch(n[tn]=e,n[on]=a,t){case"dialog":ae("cancel",n),ae("close",n);break;case"iframe":case"object":case"embed":ae("load",n);break;case"video":case"audio":for(t=0;t<Ul.length;t++)ae(Ul[t],n);break;case"source":ae("error",n);break;case"img":case"image":case"link":ae("error",n),ae("load",n);break;case"details":ae("toggle",n);break;case"input":ae("invalid",n),Js(n,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),ci(n);break;case"select":ae("invalid",n);break;case"textarea":ae("invalid",n),Is(n,a.value,a.defaultValue,a.children),ci(n)}t=a.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||n.textContent===""+t||a.suppressHydrationWarning===!0||em(n.textContent,t)?(a.popover!=null&&(ae("beforetoggle",n),ae("toggle",n)),a.onScroll!=null&&ae("scroll",n),a.onScrollEnd!=null&&ae("scrollend",n),a.onClick!=null&&(n.onclick=lr),n=!0):n=!1,n||Gt(e)}function Nc(e){for(rn=e.return;rn;)switch(rn.tag){case 5:case 13:Ln=!1;return;case 27:case 3:Ln=!0;return;default:rn=rn.return}}function cl(e){if(e!==rn)return!1;if(!fe)return Nc(e),fe=!0,!1;var n=e.tag,t;if((t=n!==3&&n!==27)&&((t=n===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||Ou(e.type,e.memoizedProps)),t=!t),t&&_e&&Gt(e),Nc(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(t=e.data,t==="/$"){if(n===0){_e=qn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++;e=e.nextSibling}_e=null}}else n===27?(n=_e,xt(e.type)?(e=qu,qu=null,_e=e):_e=n):_e=rn?qn(e.stateNode.nextSibling):null;return!0}function fl(){_e=rn=null,fe=!1}function Lc(){var e=Ft;return e!==null&&(fn===null?fn=e:fn.push.apply(fn,e),Ft=null),e}function dl(e){Ft===null?Ft=[e]:Ft.push(e)}var vo=M(null),Zt=null,Xn=null;function ct(e,n,t){C(vo,n._currentValue),n._currentValue=t}function Wn(e){e._currentValue=vo.current,U(vo)}function go(e,n,t){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===t)break;e=e.return}}function bo(e,n,t,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var r=l.dependencies;if(r!==null){var c=l.child;r=r.firstContext;e:for(;r!==null;){var d=r;r=l;for(var p=0;p<n.length;p++)if(d.context===n[p]){r.lanes|=t,d=r.alternate,d!==null&&(d.lanes|=t),go(r.return,t,e),a||(c=null);break e}r=d.next}}else if(l.tag===18){if(c=l.return,c===null)throw Error(u(341));c.lanes|=t,r=c.alternate,r!==null&&(r.lanes|=t),go(c,t,e),c=null}else c=l.child;if(c!==null)c.return=l;else for(c=l;c!==null;){if(c===e){c=null;break}if(l=c.sibling,l!==null){l.return=c.return,c=l;break}c=c.return}l=c}}function ml(e,n,t,a){e=null;for(var l=n,r=!1;l!==null;){if(!r){if((l.flags&524288)!==0)r=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var c=l.alternate;if(c===null)throw Error(u(387));if(c=c.memoizedProps,c!==null){var d=l.type;vn(l.pendingProps.value,c.value)||(e!==null?e.push(d):e=[d])}}else if(l===mn.current){if(c=l.alternate,c===null)throw Error(u(387));c.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Yl):e=[Yl])}l=l.return}e!==null&&bo(n,e,t,a),n.flags|=262144}function xi(e){for(e=e.firstContext;e!==null;){if(!vn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Qt(e){Zt=e,Xn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function an(e){return Hc(Zt,e)}function Ei(e,n){return Zt===null&&Qt(e),Hc(e,n)}function Hc(e,n){var t=n._currentValue;if(n={context:n,memoizedValue:t,next:null},Xn===null){if(e===null)throw Error(u(308));Xn=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Xn=Xn.next=n;return t}var Wh=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(t,a){e.push(a)}};this.abort=function(){n.aborted=!0,e.forEach(function(t){return t()})}},Kh=s.unstable_scheduleCallback,Jh=s.unstable_NormalPriority,Fe={$$typeof:ue,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function yo(){return{controller:new Wh,data:new Map,refCount:0}}function pl(e){e.refCount--,e.refCount===0&&Kh(Jh,function(){e.controller.abort()})}var hl=null,wo=0,ya=0,wa=null;function Ph(e,n){if(hl===null){var t=hl=[];wo=0,ya=Ru(),wa={status:"pending",value:void 0,then:function(a){t.push(a)}}}return wo++,n.then(Bc,Bc),n}function Bc(){if(--wo===0&&hl!==null){wa!==null&&(wa.status="fulfilled");var e=hl;hl=null,ya=0,wa=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Ih(e,n){var t=[],a={status:"pending",value:null,reason:null,then:function(l){t.push(l)}};return e.then(function(){a.status="fulfilled",a.value=n;for(var l=0;l<t.length;l++)(0,t[l])(n)},function(l){for(a.status="rejected",a.reason=l,l=0;l<t.length;l++)(0,t[l])(void 0)}),a}var Vc=j.S;j.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Ph(e,n),Vc!==null&&Vc(e,n)};var $t=M(null);function ko(){var e=$t.current;return e!==null?e:xe.pooledCache}function ji(e,n){n===null?C($t,$t.current):C($t,n.pool)}function Yc(){var e=ko();return e===null?null:{parent:Fe._currentValue,pool:e}}var vl=Error(u(460)),Fc=Error(u(474)),Ai=Error(u(542)),Ro={then:function(){}};function Gc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ti(){}function Zc(e,n,t){switch(t=e[t],t===void 0?e.push(n):t!==n&&(n.then(Ti,Ti),n=t),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,$c(e),e;default:if(typeof n.status=="string")n.then(Ti,Ti);else{if(e=xe,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=n,e.status="pending",e.then(function(a){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=a}},function(a){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=a}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,$c(e),e}throw gl=n,vl}}var gl=null;function Qc(){if(gl===null)throw Error(u(459));var e=gl;return gl=null,e}function $c(e){if(e===vl||e===Ai)throw Error(u(483))}var ft=!1;function So(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function zo(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function dt(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function mt(e,n,t){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(pe&2)!==0){var l=a.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),a.pending=n,n=ki(e),_c(e,null,t),n}return wi(e,a,n,t),ki(e)}function bl(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194048)!==0)){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,Bs(e,t)}}function xo(e,n){var t=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var l=null,r=null;if(t=t.firstBaseUpdate,t!==null){do{var c={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};r===null?l=r=c:r=r.next=c,t=t.next}while(t!==null);r===null?l=r=n:r=r.next=n}else l=r=n;t={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:r,shared:a.shared,callbacks:a.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}var Eo=!1;function yl(){if(Eo){var e=wa;if(e!==null)throw e}}function wl(e,n,t,a){Eo=!1;var l=e.updateQueue;ft=!1;var r=l.firstBaseUpdate,c=l.lastBaseUpdate,d=l.shared.pending;if(d!==null){l.shared.pending=null;var p=d,S=p.next;p.next=null,c===null?r=S:c.next=S,c=p;var E=e.alternate;E!==null&&(E=E.updateQueue,d=E.lastBaseUpdate,d!==c&&(d===null?E.firstBaseUpdate=S:d.next=S,E.lastBaseUpdate=p))}if(r!==null){var T=l.baseState;c=0,E=S=p=null,d=r;do{var z=d.lane&-536870913,x=z!==d.lane;if(x?(re&z)===z:(a&z)===z){z!==0&&z===ya&&(Eo=!0),E!==null&&(E=E.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});e:{var Q=e,F=d;z=n;var Re=t;switch(F.tag){case 1:if(Q=F.payload,typeof Q=="function"){T=Q.call(Re,T,z);break e}T=Q;break e;case 3:Q.flags=Q.flags&-65537|128;case 0:if(Q=F.payload,z=typeof Q=="function"?Q.call(Re,T,z):Q,z==null)break e;T=O({},T,z);break e;case 2:ft=!0}}z=d.callback,z!==null&&(e.flags|=64,x&&(e.flags|=8192),x=l.callbacks,x===null?l.callbacks=[z]:x.push(z))}else x={lane:z,tag:d.tag,payload:d.payload,callback:d.callback,next:null},E===null?(S=E=x,p=T):E=E.next=x,c|=z;if(d=d.next,d===null){if(d=l.shared.pending,d===null)break;x=d,d=x.next,x.next=null,l.lastBaseUpdate=x,l.shared.pending=null}}while(!0);E===null&&(p=T),l.baseState=p,l.firstBaseUpdate=S,l.lastBaseUpdate=E,r===null&&(l.shared.lanes=0),kt|=c,e.lanes=c,e.memoizedState=T}}function Xc(e,n){if(typeof e!="function")throw Error(u(191,e));e.call(n)}function Wc(e,n){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)Xc(t[e],n)}var ka=M(null),Di=M(0);function Kc(e,n){e=tt,C(Di,e),C(ka,n),tt=e|n.baseLanes}function jo(){C(Di,tt),C(ka,ka.current)}function Ao(){tt=Di.current,U(ka),U(Di)}var pt=0,P=null,we=null,He=null,Oi=!1,Ra=!1,Xt=!1,Mi=0,kl=0,Sa=null,ev=0;function Ne(){throw Error(u(321))}function To(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!vn(e[t],n[t]))return!1;return!0}function Do(e,n,t,a,l,r){return pt=r,P=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,j.H=e===null||e.memoizedState===null?Cf:qf,Xt=!1,r=t(a,l),Xt=!1,Ra&&(r=Pc(n,t,a,l)),Jc(e),r}function Jc(e){j.H=Li;var n=we!==null&&we.next!==null;if(pt=0,He=we=P=null,Oi=!1,kl=0,Sa=null,n)throw Error(u(300));e===null||$e||(e=e.dependencies,e!==null&&xi(e)&&($e=!0))}function Pc(e,n,t,a){P=e;var l=0;do{if(Ra&&(Sa=null),kl=0,Ra=!1,25<=l)throw Error(u(301));if(l+=1,He=we=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}j.H=ov,r=n(t,a)}while(Ra);return r}function nv(){var e=j.H,n=e.useState()[0];return n=typeof n.then=="function"?Rl(n):n,e=e.useState()[0],(we!==null?we.memoizedState:null)!==e&&(P.flags|=1024),n}function Oo(){var e=Mi!==0;return Mi=0,e}function Mo(e,n,t){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t}function _o(e){if(Oi){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Oi=!1}pt=0,He=we=P=null,Ra=!1,kl=Mi=0,Sa=null}function sn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?P.memoizedState=He=e:He=He.next=e,He}function Be(){if(we===null){var e=P.alternate;e=e!==null?e.memoizedState:null}else e=we.next;var n=He===null?P.memoizedState:He.next;if(n!==null)He=n,we=e;else{if(e===null)throw P.alternate===null?Error(u(467)):Error(u(310));we=e,e={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},He===null?P.memoizedState=He=e:He=He.next=e}return He}function Co(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Rl(e){var n=kl;return kl+=1,Sa===null&&(Sa=[]),e=Zc(Sa,e,n),n=P,(He===null?n.memoizedState:He.next)===null&&(n=n.alternate,j.H=n===null||n.memoizedState===null?Cf:qf),e}function _i(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Rl(e);if(e.$$typeof===ue)return an(e)}throw Error(u(438,String(e)))}function qo(e){var n=null,t=P.updateQueue;if(t!==null&&(n=t.memoCache),n==null){var a=P.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(n={data:a.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),t===null&&(t=Co(),P.updateQueue=t),t.memoCache=n,t=n.data[n.index],t===void 0)for(t=n.data[n.index]=Array(e),a=0;a<e;a++)t[a]=V;return n.index++,t}function Kn(e,n){return typeof n=="function"?n(e):n}function Ci(e){var n=Be();return Uo(n,we,e)}function Uo(e,n,t){var a=e.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=t;var l=e.baseQueue,r=a.pending;if(r!==null){if(l!==null){var c=l.next;l.next=r.next,r.next=c}n.baseQueue=l=r,a.pending=null}if(r=e.baseState,l===null)e.memoizedState=r;else{n=l.next;var d=c=null,p=null,S=n,E=!1;do{var T=S.lane&-536870913;if(T!==S.lane?(re&T)===T:(pt&T)===T){var z=S.revertLane;if(z===0)p!==null&&(p=p.next={lane:0,revertLane:0,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null}),T===ya&&(E=!0);else if((pt&z)===z){S=S.next,z===ya&&(E=!0);continue}else T={lane:0,revertLane:S.revertLane,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},p===null?(d=p=T,c=r):p=p.next=T,P.lanes|=z,kt|=z;T=S.action,Xt&&t(r,T),r=S.hasEagerState?S.eagerState:t(r,T)}else z={lane:T,revertLane:S.revertLane,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},p===null?(d=p=z,c=r):p=p.next=z,P.lanes|=T,kt|=T;S=S.next}while(S!==null&&S!==n);if(p===null?c=r:p.next=d,!vn(r,e.memoizedState)&&($e=!0,E&&(t=wa,t!==null)))throw t;e.memoizedState=r,e.baseState=c,e.baseQueue=p,a.lastRenderedState=r}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function No(e){var n=Be(),t=n.queue;if(t===null)throw Error(u(311));t.lastRenderedReducer=e;var a=t.dispatch,l=t.pending,r=n.memoizedState;if(l!==null){t.pending=null;var c=l=l.next;do r=e(r,c.action),c=c.next;while(c!==l);vn(r,n.memoizedState)||($e=!0),n.memoizedState=r,n.baseQueue===null&&(n.baseState=r),t.lastRenderedState=r}return[r,a]}function Ic(e,n,t){var a=P,l=Be(),r=fe;if(r){if(t===void 0)throw Error(u(407));t=t()}else t=n();var c=!vn((we||l).memoizedState,t);c&&(l.memoizedState=t,$e=!0),l=l.queue;var d=tf.bind(null,a,l,e);if(Sl(2048,8,d,[e]),l.getSnapshot!==n||c||He!==null&&He.memoizedState.tag&1){if(a.flags|=2048,za(9,qi(),nf.bind(null,a,l,t,n),null),xe===null)throw Error(u(349));r||(pt&124)!==0||ef(a,n,t)}return t}function ef(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=P.updateQueue,n===null?(n=Co(),P.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function nf(e,n,t,a){n.value=t,n.getSnapshot=a,af(n)&&lf(e)}function tf(e,n,t){return t(function(){af(n)&&lf(e)})}function af(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!vn(e,t)}catch{return!0}}function lf(e){var n=ha(e,2);n!==null&&Rn(n,e,2)}function Lo(e){var n=sn();if(typeof e=="function"){var t=e;if(e=t(),Xt){ot(!0);try{t()}finally{ot(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kn,lastRenderedState:e},n}function rf(e,n,t,a){return e.baseState=t,Uo(e,we,typeof a=="function"?a:Kn)}function tv(e,n,t,a,l){if(Ni(e))throw Error(u(485));if(e=n.action,e!==null){var r={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){r.listeners.push(c)}};j.T!==null?t(!0):r.isTransition=!1,a(r),t=n.pending,t===null?(r.next=n.pending=r,of(n,r)):(r.next=t.next,n.pending=t.next=r)}}function of(e,n){var t=n.action,a=n.payload,l=e.state;if(n.isTransition){var r=j.T,c={};j.T=c;try{var d=t(l,a),p=j.S;p!==null&&p(c,d),uf(e,n,d)}catch(S){Ho(e,n,S)}finally{j.T=r}}else try{r=t(l,a),uf(e,n,r)}catch(S){Ho(e,n,S)}}function uf(e,n,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(a){sf(e,n,a)},function(a){return Ho(e,n,a)}):sf(e,n,t)}function sf(e,n,t){n.status="fulfilled",n.value=t,cf(n),e.state=t,n=e.pending,n!==null&&(t=n.next,t===n?e.pending=null:(t=t.next,n.next=t,of(e,t)))}function Ho(e,n,t){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do n.status="rejected",n.reason=t,cf(n),n=n.next;while(n!==a)}e.action=null}function cf(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function ff(e,n){return n}function df(e,n){if(fe){var t=xe.formState;if(t!==null){e:{var a=P;if(fe){if(_e){n:{for(var l=_e,r=Ln;l.nodeType!==8;){if(!r){l=null;break n}if(l=qn(l.nextSibling),l===null){l=null;break n}}r=l.data,l=r==="F!"||r==="F"?l:null}if(l){_e=qn(l.nextSibling),a=l.data==="F!";break e}}Gt(a)}a=!1}a&&(n=t[0])}}return t=sn(),t.memoizedState=t.baseState=n,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ff,lastRenderedState:n},t.queue=a,t=Of.bind(null,P,a),a.dispatch=t,a=Lo(!1),r=Go.bind(null,P,!1,a.queue),a=sn(),l={state:n,dispatch:null,action:e,pending:null},a.queue=l,t=tv.bind(null,P,l,r,t),l.dispatch=t,a.memoizedState=e,[n,t,!1]}function mf(e){var n=Be();return pf(n,we,e)}function pf(e,n,t){if(n=Uo(e,n,ff)[0],e=Ci(Kn)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var a=Rl(n)}catch(c){throw c===vl?Ai:c}else a=n;n=Be();var l=n.queue,r=l.dispatch;return t!==n.memoizedState&&(P.flags|=2048,za(9,qi(),av.bind(null,l,t),null)),[a,r,e]}function av(e,n){e.action=n}function hf(e){var n=Be(),t=we;if(t!==null)return pf(n,t,e);Be(),n=n.memoizedState,t=Be();var a=t.queue.dispatch;return t.memoizedState=e,[n,a,!1]}function za(e,n,t,a){return e={tag:e,create:t,deps:a,inst:n,next:null},n=P.updateQueue,n===null&&(n=Co(),P.updateQueue=n),t=n.lastEffect,t===null?n.lastEffect=e.next=e:(a=t.next,t.next=e,e.next=a,n.lastEffect=e),e}function qi(){return{destroy:void 0,resource:void 0}}function vf(){return Be().memoizedState}function Ui(e,n,t,a){var l=sn();a=a===void 0?null:a,P.flags|=e,l.memoizedState=za(1|n,qi(),t,a)}function Sl(e,n,t,a){var l=Be();a=a===void 0?null:a;var r=l.memoizedState.inst;we!==null&&a!==null&&To(a,we.memoizedState.deps)?l.memoizedState=za(n,r,t,a):(P.flags|=e,l.memoizedState=za(1|n,r,t,a))}function gf(e,n){Ui(8390656,8,e,n)}function bf(e,n){Sl(2048,8,e,n)}function yf(e,n){return Sl(4,2,e,n)}function wf(e,n){return Sl(4,4,e,n)}function kf(e,n){if(typeof n=="function"){e=e();var t=n(e);return function(){typeof t=="function"?t():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Rf(e,n,t){t=t!=null?t.concat([e]):null,Sl(4,4,kf.bind(null,n,e),t)}function Bo(){}function Sf(e,n){var t=Be();n=n===void 0?null:n;var a=t.memoizedState;return n!==null&&To(n,a[1])?a[0]:(t.memoizedState=[e,n],e)}function zf(e,n){var t=Be();n=n===void 0?null:n;var a=t.memoizedState;if(n!==null&&To(n,a[1]))return a[0];if(a=e(),Xt){ot(!0);try{e()}finally{ot(!1)}}return t.memoizedState=[a,n],a}function Vo(e,n,t){return t===void 0||(pt&1073741824)!==0?e.memoizedState=n:(e.memoizedState=t,e=jd(),P.lanes|=e,kt|=e,t)}function xf(e,n,t,a){return vn(t,n)?t:ka.current!==null?(e=Vo(e,t,a),vn(e,n)||($e=!0),e):(pt&42)===0?($e=!0,e.memoizedState=t):(e=jd(),P.lanes|=e,kt|=e,n)}function Ef(e,n,t,a,l){var r=q.p;q.p=r!==0&&8>r?r:8;var c=j.T,d={};j.T=d,Go(e,!1,n,t);try{var p=l(),S=j.S;if(S!==null&&S(d,p),p!==null&&typeof p=="object"&&typeof p.then=="function"){var E=Ih(p,a);zl(e,n,E,kn(e))}else zl(e,n,a,kn(e))}catch(T){zl(e,n,{then:function(){},status:"rejected",reason:T},kn())}finally{q.p=r,j.T=c}}function lv(){}function Yo(e,n,t,a){if(e.tag!==5)throw Error(u(476));var l=jf(e).queue;Ef(e,l,n,Z,t===null?lv:function(){return Af(e),t(a)})}function jf(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kn,lastRenderedState:Z},next:null};var t={};return n.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kn,lastRenderedState:t},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Af(e){var n=jf(e).next.queue;zl(e,n,{},kn())}function Fo(){return an(Yl)}function Tf(){return Be().memoizedState}function Df(){return Be().memoizedState}function iv(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var t=kn();e=dt(t);var a=mt(n,e,t);a!==null&&(Rn(a,n,t),bl(a,n,t)),n={cache:yo()},e.payload=n;return}n=n.return}}function rv(e,n,t){var a=kn();t={lane:a,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null},Ni(e)?Mf(n,t):(t=uo(e,n,t,a),t!==null&&(Rn(t,e,a),_f(t,n,a)))}function Of(e,n,t){var a=kn();zl(e,n,t,a)}function zl(e,n,t,a){var l={lane:a,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ni(e))Mf(n,l);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=n.lastRenderedReducer,r!==null))try{var c=n.lastRenderedState,d=r(c,t);if(l.hasEagerState=!0,l.eagerState=d,vn(d,c))return wi(e,n,l,0),xe===null&&yi(),!1}catch{}finally{}if(t=uo(e,n,l,a),t!==null)return Rn(t,e,a),_f(t,n,a),!0}return!1}function Go(e,n,t,a){if(a={lane:2,revertLane:Ru(),action:a,hasEagerState:!1,eagerState:null,next:null},Ni(e)){if(n)throw Error(u(479))}else n=uo(e,t,a,2),n!==null&&Rn(n,e,2)}function Ni(e){var n=e.alternate;return e===P||n!==null&&n===P}function Mf(e,n){Ra=Oi=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function _f(e,n,t){if((t&4194048)!==0){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,Bs(e,t)}}var Li={readContext:an,use:_i,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useLayoutEffect:Ne,useInsertionEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useSyncExternalStore:Ne,useId:Ne,useHostTransitionStatus:Ne,useFormState:Ne,useActionState:Ne,useOptimistic:Ne,useMemoCache:Ne,useCacheRefresh:Ne},Cf={readContext:an,use:_i,useCallback:function(e,n){return sn().memoizedState=[e,n===void 0?null:n],e},useContext:an,useEffect:gf,useImperativeHandle:function(e,n,t){t=t!=null?t.concat([e]):null,Ui(4194308,4,kf.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Ui(4194308,4,e,n)},useInsertionEffect:function(e,n){Ui(4,2,e,n)},useMemo:function(e,n){var t=sn();n=n===void 0?null:n;var a=e();if(Xt){ot(!0);try{e()}finally{ot(!1)}}return t.memoizedState=[a,n],a},useReducer:function(e,n,t){var a=sn();if(t!==void 0){var l=t(n);if(Xt){ot(!0);try{t(n)}finally{ot(!1)}}}else l=n;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=rv.bind(null,P,e),[a.memoizedState,e]},useRef:function(e){var n=sn();return e={current:e},n.memoizedState=e},useState:function(e){e=Lo(e);var n=e.queue,t=Of.bind(null,P,n);return n.dispatch=t,[e.memoizedState,t]},useDebugValue:Bo,useDeferredValue:function(e,n){var t=sn();return Vo(t,e,n)},useTransition:function(){var e=Lo(!1);return e=Ef.bind(null,P,e.queue,!0,!1),sn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,t){var a=P,l=sn();if(fe){if(t===void 0)throw Error(u(407));t=t()}else{if(t=n(),xe===null)throw Error(u(349));(re&124)!==0||ef(a,n,t)}l.memoizedState=t;var r={value:t,getSnapshot:n};return l.queue=r,gf(tf.bind(null,a,r,e),[e]),a.flags|=2048,za(9,qi(),nf.bind(null,a,r,t,n),null),t},useId:function(){var e=sn(),n=xe.identifierPrefix;if(fe){var t=$n,a=Qn;t=(a&~(1<<32-hn(a)-1)).toString(32)+t,n="«"+n+"R"+t,t=Mi++,0<t&&(n+="H"+t.toString(32)),n+="»"}else t=ev++,n="«"+n+"r"+t.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:Fo,useFormState:df,useActionState:df,useOptimistic:function(e){var n=sn();n.memoizedState=n.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=t,n=Go.bind(null,P,!0,t),t.dispatch=n,[e,n]},useMemoCache:qo,useCacheRefresh:function(){return sn().memoizedState=iv.bind(null,P)}},qf={readContext:an,use:_i,useCallback:Sf,useContext:an,useEffect:bf,useImperativeHandle:Rf,useInsertionEffect:yf,useLayoutEffect:wf,useMemo:zf,useReducer:Ci,useRef:vf,useState:function(){return Ci(Kn)},useDebugValue:Bo,useDeferredValue:function(e,n){var t=Be();return xf(t,we.memoizedState,e,n)},useTransition:function(){var e=Ci(Kn)[0],n=Be().memoizedState;return[typeof e=="boolean"?e:Rl(e),n]},useSyncExternalStore:Ic,useId:Tf,useHostTransitionStatus:Fo,useFormState:mf,useActionState:mf,useOptimistic:function(e,n){var t=Be();return rf(t,we,e,n)},useMemoCache:qo,useCacheRefresh:Df},ov={readContext:an,use:_i,useCallback:Sf,useContext:an,useEffect:bf,useImperativeHandle:Rf,useInsertionEffect:yf,useLayoutEffect:wf,useMemo:zf,useReducer:No,useRef:vf,useState:function(){return No(Kn)},useDebugValue:Bo,useDeferredValue:function(e,n){var t=Be();return we===null?Vo(t,e,n):xf(t,we.memoizedState,e,n)},useTransition:function(){var e=No(Kn)[0],n=Be().memoizedState;return[typeof e=="boolean"?e:Rl(e),n]},useSyncExternalStore:Ic,useId:Tf,useHostTransitionStatus:Fo,useFormState:hf,useActionState:hf,useOptimistic:function(e,n){var t=Be();return we!==null?rf(t,we,e,n):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:qo,useCacheRefresh:Df},xa=null,xl=0;function Hi(e){var n=xl;return xl+=1,xa===null&&(xa=[]),Zc(xa,e,n)}function El(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Bi(e,n){throw n.$$typeof===H?Error(u(525)):(e=Object.prototype.toString.call(n),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Uf(e){var n=e._init;return n(e._payload)}function Nf(e){function n(y,v){if(e){var R=y.deletions;R===null?(y.deletions=[v],y.flags|=16):R.push(v)}}function t(y,v){if(!e)return null;for(;v!==null;)n(y,v),v=v.sibling;return null}function a(y){for(var v=new Map;y!==null;)y.key!==null?v.set(y.key,y):v.set(y.index,y),y=y.sibling;return v}function l(y,v){return y=Zn(y,v),y.index=0,y.sibling=null,y}function r(y,v,R){return y.index=R,e?(R=y.alternate,R!==null?(R=R.index,R<v?(y.flags|=67108866,v):R):(y.flags|=67108866,v)):(y.flags|=1048576,v)}function c(y){return e&&y.alternate===null&&(y.flags|=67108866),y}function d(y,v,R,A){return v===null||v.tag!==6?(v=co(R,y.mode,A),v.return=y,v):(v=l(v,R),v.return=y,v)}function p(y,v,R,A){var L=R.type;return L===le?E(y,v,R.props.children,A,R.key):v!==null&&(v.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===ye&&Uf(L)===v.type)?(v=l(v,R.props),El(v,R),v.return=y,v):(v=Ri(R.type,R.key,R.props,null,y.mode,A),El(v,R),v.return=y,v)}function S(y,v,R,A){return v===null||v.tag!==4||v.stateNode.containerInfo!==R.containerInfo||v.stateNode.implementation!==R.implementation?(v=fo(R,y.mode,A),v.return=y,v):(v=l(v,R.children||[]),v.return=y,v)}function E(y,v,R,A,L){return v===null||v.tag!==7?(v=Bt(R,y.mode,A,L),v.return=y,v):(v=l(v,R),v.return=y,v)}function T(y,v,R){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=co(""+v,y.mode,R),v.return=y,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case $:return R=Ri(v.type,v.key,v.props,null,y.mode,R),El(R,v),R.return=y,R;case X:return v=fo(v,y.mode,R),v.return=y,v;case ye:var A=v._init;return v=A(v._payload),T(y,v,R)}if(nn(v)||Ae(v))return v=Bt(v,y.mode,R,null),v.return=y,v;if(typeof v.then=="function")return T(y,Hi(v),R);if(v.$$typeof===ue)return T(y,Ei(y,v),R);Bi(y,v)}return null}function z(y,v,R,A){var L=v!==null?v.key:null;if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return L!==null?null:d(y,v,""+R,A);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case $:return R.key===L?p(y,v,R,A):null;case X:return R.key===L?S(y,v,R,A):null;case ye:return L=R._init,R=L(R._payload),z(y,v,R,A)}if(nn(R)||Ae(R))return L!==null?null:E(y,v,R,A,null);if(typeof R.then=="function")return z(y,v,Hi(R),A);if(R.$$typeof===ue)return z(y,v,Ei(y,R),A);Bi(y,R)}return null}function x(y,v,R,A,L){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return y=y.get(R)||null,d(v,y,""+A,L);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case $:return y=y.get(A.key===null?R:A.key)||null,p(v,y,A,L);case X:return y=y.get(A.key===null?R:A.key)||null,S(v,y,A,L);case ye:var I=A._init;return A=I(A._payload),x(y,v,R,A,L)}if(nn(A)||Ae(A))return y=y.get(R)||null,E(v,y,A,L,null);if(typeof A.then=="function")return x(y,v,R,Hi(A),L);if(A.$$typeof===ue)return x(y,v,R,Ei(v,A),L);Bi(v,A)}return null}function Q(y,v,R,A){for(var L=null,I=null,B=v,G=v=0,We=null;B!==null&&G<R.length;G++){B.index>G?(We=B,B=null):We=B.sibling;var ce=z(y,B,R[G],A);if(ce===null){B===null&&(B=We);break}e&&B&&ce.alternate===null&&n(y,B),v=r(ce,v,G),I===null?L=ce:I.sibling=ce,I=ce,B=We}if(G===R.length)return t(y,B),fe&&Yt(y,G),L;if(B===null){for(;G<R.length;G++)B=T(y,R[G],A),B!==null&&(v=r(B,v,G),I===null?L=B:I.sibling=B,I=B);return fe&&Yt(y,G),L}for(B=a(B);G<R.length;G++)We=x(B,y,G,R[G],A),We!==null&&(e&&We.alternate!==null&&B.delete(We.key===null?G:We.key),v=r(We,v,G),I===null?L=We:I.sibling=We,I=We);return e&&B.forEach(function(Dt){return n(y,Dt)}),fe&&Yt(y,G),L}function F(y,v,R,A){if(R==null)throw Error(u(151));for(var L=null,I=null,B=v,G=v=0,We=null,ce=R.next();B!==null&&!ce.done;G++,ce=R.next()){B.index>G?(We=B,B=null):We=B.sibling;var Dt=z(y,B,ce.value,A);if(Dt===null){B===null&&(B=We);break}e&&B&&Dt.alternate===null&&n(y,B),v=r(Dt,v,G),I===null?L=Dt:I.sibling=Dt,I=Dt,B=We}if(ce.done)return t(y,B),fe&&Yt(y,G),L;if(B===null){for(;!ce.done;G++,ce=R.next())ce=T(y,ce.value,A),ce!==null&&(v=r(ce,v,G),I===null?L=ce:I.sibling=ce,I=ce);return fe&&Yt(y,G),L}for(B=a(B);!ce.done;G++,ce=R.next())ce=x(B,y,G,ce.value,A),ce!==null&&(e&&ce.alternate!==null&&B.delete(ce.key===null?G:ce.key),v=r(ce,v,G),I===null?L=ce:I.sibling=ce,I=ce);return e&&B.forEach(function(ug){return n(y,ug)}),fe&&Yt(y,G),L}function Re(y,v,R,A){if(typeof R=="object"&&R!==null&&R.type===le&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case $:e:{for(var L=R.key;v!==null;){if(v.key===L){if(L=R.type,L===le){if(v.tag===7){t(y,v.sibling),A=l(v,R.props.children),A.return=y,y=A;break e}}else if(v.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===ye&&Uf(L)===v.type){t(y,v.sibling),A=l(v,R.props),El(A,R),A.return=y,y=A;break e}t(y,v);break}else n(y,v);v=v.sibling}R.type===le?(A=Bt(R.props.children,y.mode,A,R.key),A.return=y,y=A):(A=Ri(R.type,R.key,R.props,null,y.mode,A),El(A,R),A.return=y,y=A)}return c(y);case X:e:{for(L=R.key;v!==null;){if(v.key===L)if(v.tag===4&&v.stateNode.containerInfo===R.containerInfo&&v.stateNode.implementation===R.implementation){t(y,v.sibling),A=l(v,R.children||[]),A.return=y,y=A;break e}else{t(y,v);break}else n(y,v);v=v.sibling}A=fo(R,y.mode,A),A.return=y,y=A}return c(y);case ye:return L=R._init,R=L(R._payload),Re(y,v,R,A)}if(nn(R))return Q(y,v,R,A);if(Ae(R)){if(L=Ae(R),typeof L!="function")throw Error(u(150));return R=L.call(R),F(y,v,R,A)}if(typeof R.then=="function")return Re(y,v,Hi(R),A);if(R.$$typeof===ue)return Re(y,v,Ei(y,R),A);Bi(y,R)}return typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint"?(R=""+R,v!==null&&v.tag===6?(t(y,v.sibling),A=l(v,R),A.return=y,y=A):(t(y,v),A=co(R,y.mode,A),A.return=y,y=A),c(y)):t(y,v)}return function(y,v,R,A){try{xl=0;var L=Re(y,v,R,A);return xa=null,L}catch(B){if(B===vl||B===Ai)throw B;var I=gn(29,B,null,y.mode);return I.lanes=A,I.return=y,I}finally{}}}var Ea=Nf(!0),Lf=Nf(!1),Tn=M(null),Hn=null;function ht(e){var n=e.alternate;C(Ge,Ge.current&1),C(Tn,e),Hn===null&&(n===null||ka.current!==null||n.memoizedState!==null)&&(Hn=e)}function Hf(e){if(e.tag===22){if(C(Ge,Ge.current),C(Tn,e),Hn===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Hn=e)}}else vt()}function vt(){C(Ge,Ge.current),C(Tn,Tn.current)}function Jn(e){U(Tn),Hn===e&&(Hn=null),U(Ge)}var Ge=M(0);function Vi(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||Cu(t)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Zo(e,n,t,a){n=e.memoizedState,t=t(a,n),t=t==null?n:O({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Qo={enqueueSetState:function(e,n,t){e=e._reactInternals;var a=kn(),l=dt(a);l.payload=n,t!=null&&(l.callback=t),n=mt(e,l,a),n!==null&&(Rn(n,e,a),bl(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var a=kn(),l=dt(a);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=mt(e,l,a),n!==null&&(Rn(n,e,a),bl(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=kn(),a=dt(t);a.tag=2,n!=null&&(a.callback=n),n=mt(e,a,t),n!==null&&(Rn(n,e,t),bl(n,e,t))}};function Bf(e,n,t,a,l,r,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,r,c):n.prototype&&n.prototype.isPureReactComponent?!ul(t,a)||!ul(l,r):!0}function Vf(e,n,t,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,a),n.state!==e&&Qo.enqueueReplaceState(n,n.state,null)}function Wt(e,n){var t=n;if("ref"in n){t={};for(var a in n)a!=="ref"&&(t[a]=n[a])}if(e=e.defaultProps){t===n&&(t=O({},t));for(var l in e)t[l]===void 0&&(t[l]=e[l])}return t}var Yi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Yf(e){Yi(e)}function Ff(e){console.error(e)}function Gf(e){Yi(e)}function Fi(e,n){try{var t=e.onUncaughtError;t(n.value,{componentStack:n.stack})}catch(a){setTimeout(function(){throw a})}}function Zf(e,n,t){try{var a=e.onCaughtError;a(t.value,{componentStack:t.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function $o(e,n,t){return t=dt(t),t.tag=3,t.payload={element:null},t.callback=function(){Fi(e,n)},t}function Qf(e){return e=dt(e),e.tag=3,e}function $f(e,n,t,a){var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var r=a.value;e.payload=function(){return l(r)},e.callback=function(){Zf(n,t,a)}}var c=t.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){Zf(n,t,a),typeof l!="function"&&(Rt===null?Rt=new Set([this]):Rt.add(this));var d=a.stack;this.componentDidCatch(a.value,{componentStack:d!==null?d:""})})}function uv(e,n,t,a,l){if(t.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(n=t.alternate,n!==null&&ml(n,t,l,!0),t=Tn.current,t!==null){switch(t.tag){case 13:return Hn===null?gu():t.alternate===null&&Ce===0&&(Ce=3),t.flags&=-257,t.flags|=65536,t.lanes=l,a===Ro?t.flags|=16384:(n=t.updateQueue,n===null?t.updateQueue=new Set([a]):n.add(a),yu(e,a,l)),!1;case 22:return t.flags|=65536,a===Ro?t.flags|=16384:(n=t.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([a])},t.updateQueue=n):(t=n.retryQueue,t===null?n.retryQueue=new Set([a]):t.add(a)),yu(e,a,l)),!1}throw Error(u(435,t.tag))}return yu(e,a,l),gu(),!1}if(fe)return n=Tn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,a!==ho&&(e=Error(u(422),{cause:a}),dl(xn(e,t)))):(a!==ho&&(n=Error(u(423),{cause:a}),dl(xn(n,t))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=xn(a,t),l=$o(e.stateNode,a,l),xo(e,l),Ce!==4&&(Ce=2)),!1;var r=Error(u(520),{cause:a});if(r=xn(r,t),_l===null?_l=[r]:_l.push(r),Ce!==4&&(Ce=2),n===null)return!0;a=xn(a,t),t=n;do{switch(t.tag){case 3:return t.flags|=65536,e=l&-l,t.lanes|=e,e=$o(t.stateNode,a,e),xo(t,e),!1;case 1:if(n=t.type,r=t.stateNode,(t.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Rt===null||!Rt.has(r))))return t.flags|=65536,l&=-l,t.lanes|=l,l=Qf(l),$f(l,e,t,a),xo(t,l),!1}t=t.return}while(t!==null);return!1}var Xf=Error(u(461)),$e=!1;function Je(e,n,t,a){n.child=e===null?Lf(n,null,t,a):Ea(n,e.child,t,a)}function Wf(e,n,t,a,l){t=t.render;var r=n.ref;if("ref"in a){var c={};for(var d in a)d!=="ref"&&(c[d]=a[d])}else c=a;return Qt(n),a=Do(e,n,t,c,r,l),d=Oo(),e!==null&&!$e?(Mo(e,n,l),Pn(e,n,l)):(fe&&d&&mo(n),n.flags|=1,Je(e,n,a,l),n.child)}function Kf(e,n,t,a,l){if(e===null){var r=t.type;return typeof r=="function"&&!so(r)&&r.defaultProps===void 0&&t.compare===null?(n.tag=15,n.type=r,Jf(e,n,r,a,l)):(e=Ri(t.type,null,a,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(r=e.child,!nu(e,l)){var c=r.memoizedProps;if(t=t.compare,t=t!==null?t:ul,t(c,a)&&e.ref===n.ref)return Pn(e,n,l)}return n.flags|=1,e=Zn(r,a),e.ref=n.ref,e.return=n,n.child=e}function Jf(e,n,t,a,l){if(e!==null){var r=e.memoizedProps;if(ul(r,a)&&e.ref===n.ref)if($e=!1,n.pendingProps=a=r,nu(e,l))(e.flags&131072)!==0&&($e=!0);else return n.lanes=e.lanes,Pn(e,n,l)}return Xo(e,n,t,a,l)}function Pf(e,n,t){var a=n.pendingProps,l=a.children,r=e!==null?e.memoizedState:null;if(a.mode==="hidden"){if((n.flags&128)!==0){if(a=r!==null?r.baseLanes|t:t,e!==null){for(l=n.child=e.child,r=0;l!==null;)r=r|l.lanes|l.childLanes,l=l.sibling;n.childLanes=r&~a}else n.childLanes=0,n.child=null;return If(e,n,a,t)}if((t&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&ji(n,r!==null?r.cachePool:null),r!==null?Kc(n,r):jo(),Hf(n);else return n.lanes=n.childLanes=536870912,If(e,n,r!==null?r.baseLanes|t:t,t)}else r!==null?(ji(n,r.cachePool),Kc(n,r),vt(),n.memoizedState=null):(e!==null&&ji(n,null),jo(),vt());return Je(e,n,l,t),n.child}function If(e,n,t,a){var l=ko();return l=l===null?null:{parent:Fe._currentValue,pool:l},n.memoizedState={baseLanes:t,cachePool:l},e!==null&&ji(n,null),jo(),Hf(n),e!==null&&ml(e,n,a,!0),null}function Gi(e,n){var t=n.ref;if(t===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(u(284));(e===null||e.ref!==t)&&(n.flags|=4194816)}}function Xo(e,n,t,a,l){return Qt(n),t=Do(e,n,t,a,void 0,l),a=Oo(),e!==null&&!$e?(Mo(e,n,l),Pn(e,n,l)):(fe&&a&&mo(n),n.flags|=1,Je(e,n,t,l),n.child)}function ed(e,n,t,a,l,r){return Qt(n),n.updateQueue=null,t=Pc(n,a,t,l),Jc(e),a=Oo(),e!==null&&!$e?(Mo(e,n,r),Pn(e,n,r)):(fe&&a&&mo(n),n.flags|=1,Je(e,n,t,r),n.child)}function nd(e,n,t,a,l){if(Qt(n),n.stateNode===null){var r=va,c=t.contextType;typeof c=="object"&&c!==null&&(r=an(c)),r=new t(a,r),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Qo,n.stateNode=r,r._reactInternals=n,r=n.stateNode,r.props=a,r.state=n.memoizedState,r.refs={},So(n),c=t.contextType,r.context=typeof c=="object"&&c!==null?an(c):va,r.state=n.memoizedState,c=t.getDerivedStateFromProps,typeof c=="function"&&(Zo(n,t,c,a),r.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(c=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),c!==r.state&&Qo.enqueueReplaceState(r,r.state,null),wl(n,a,r,l),yl(),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308),a=!0}else if(e===null){r=n.stateNode;var d=n.memoizedProps,p=Wt(t,d);r.props=p;var S=r.context,E=t.contextType;c=va,typeof E=="object"&&E!==null&&(c=an(E));var T=t.getDerivedStateFromProps;E=typeof T=="function"||typeof r.getSnapshotBeforeUpdate=="function",d=n.pendingProps!==d,E||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(d||S!==c)&&Vf(n,r,a,c),ft=!1;var z=n.memoizedState;r.state=z,wl(n,a,r,l),yl(),S=n.memoizedState,d||z!==S||ft?(typeof T=="function"&&(Zo(n,t,T,a),S=n.memoizedState),(p=ft||Bf(n,t,p,a,z,S,c))?(E||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(n.flags|=4194308)):(typeof r.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=S),r.props=a,r.state=S,r.context=c,a=p):(typeof r.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{r=n.stateNode,zo(e,n),c=n.memoizedProps,E=Wt(t,c),r.props=E,T=n.pendingProps,z=r.context,S=t.contextType,p=va,typeof S=="object"&&S!==null&&(p=an(S)),d=t.getDerivedStateFromProps,(S=typeof d=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(c!==T||z!==p)&&Vf(n,r,a,p),ft=!1,z=n.memoizedState,r.state=z,wl(n,a,r,l),yl();var x=n.memoizedState;c!==T||z!==x||ft||e!==null&&e.dependencies!==null&&xi(e.dependencies)?(typeof d=="function"&&(Zo(n,t,d,a),x=n.memoizedState),(E=ft||Bf(n,t,E,a,z,x,p)||e!==null&&e.dependencies!==null&&xi(e.dependencies))?(S||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(a,x,p),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(a,x,p)),typeof r.componentDidUpdate=="function"&&(n.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof r.componentDidUpdate!="function"||c===e.memoizedProps&&z===e.memoizedState||(n.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&z===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=x),r.props=a,r.state=x,r.context=p,a=E):(typeof r.componentDidUpdate!="function"||c===e.memoizedProps&&z===e.memoizedState||(n.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&z===e.memoizedState||(n.flags|=1024),a=!1)}return r=a,Gi(e,n),a=(n.flags&128)!==0,r||a?(r=n.stateNode,t=a&&typeof t.getDerivedStateFromError!="function"?null:r.render(),n.flags|=1,e!==null&&a?(n.child=Ea(n,e.child,null,l),n.child=Ea(n,null,t,l)):Je(e,n,t,l),n.memoizedState=r.state,e=n.child):e=Pn(e,n,l),e}function td(e,n,t,a){return fl(),n.flags|=256,Je(e,n,t,a),n.child}var Wo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ko(e){return{baseLanes:e,cachePool:Yc()}}function Jo(e,n,t){return e=e!==null?e.childLanes&~t:0,n&&(e|=Dn),e}function ad(e,n,t){var a=n.pendingProps,l=!1,r=(n.flags&128)!==0,c;if((c=r)||(c=e!==null&&e.memoizedState===null?!1:(Ge.current&2)!==0),c&&(l=!0,n.flags&=-129),c=(n.flags&32)!==0,n.flags&=-33,e===null){if(fe){if(l?ht(n):vt(),fe){var d=_e,p;if(p=d){e:{for(p=d,d=Ln;p.nodeType!==8;){if(!d){d=null;break e}if(p=qn(p.nextSibling),p===null){d=null;break e}}d=p}d!==null?(n.memoizedState={dehydrated:d,treeContext:Vt!==null?{id:Qn,overflow:$n}:null,retryLane:536870912,hydrationErrors:null},p=gn(18,null,null,0),p.stateNode=d,p.return=n,n.child=p,rn=n,_e=null,p=!0):p=!1}p||Gt(n)}if(d=n.memoizedState,d!==null&&(d=d.dehydrated,d!==null))return Cu(d)?n.lanes=32:n.lanes=536870912,null;Jn(n)}return d=a.children,a=a.fallback,l?(vt(),l=n.mode,d=Zi({mode:"hidden",children:d},l),a=Bt(a,l,t,null),d.return=n,a.return=n,d.sibling=a,n.child=d,l=n.child,l.memoizedState=Ko(t),l.childLanes=Jo(e,c,t),n.memoizedState=Wo,a):(ht(n),Po(n,d))}if(p=e.memoizedState,p!==null&&(d=p.dehydrated,d!==null)){if(r)n.flags&256?(ht(n),n.flags&=-257,n=Io(e,n,t)):n.memoizedState!==null?(vt(),n.child=e.child,n.flags|=128,n=null):(vt(),l=a.fallback,d=n.mode,a=Zi({mode:"visible",children:a.children},d),l=Bt(l,d,t,null),l.flags|=2,a.return=n,l.return=n,a.sibling=l,n.child=a,Ea(n,e.child,null,t),a=n.child,a.memoizedState=Ko(t),a.childLanes=Jo(e,c,t),n.memoizedState=Wo,n=l);else if(ht(n),Cu(d)){if(c=d.nextSibling&&d.nextSibling.dataset,c)var S=c.dgst;c=S,a=Error(u(419)),a.stack="",a.digest=c,dl({value:a,source:null,stack:null}),n=Io(e,n,t)}else if($e||ml(e,n,t,!1),c=(t&e.childLanes)!==0,$e||c){if(c=xe,c!==null&&(a=t&-t,a=(a&42)!==0?1:Cr(a),a=(a&(c.suspendedLanes|t))!==0?0:a,a!==0&&a!==p.retryLane))throw p.retryLane=a,ha(e,a),Rn(c,e,a),Xf;d.data==="$?"||gu(),n=Io(e,n,t)}else d.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=p.treeContext,_e=qn(d.nextSibling),rn=n,fe=!0,Ft=null,Ln=!1,e!==null&&(jn[An++]=Qn,jn[An++]=$n,jn[An++]=Vt,Qn=e.id,$n=e.overflow,Vt=n),n=Po(n,a.children),n.flags|=4096);return n}return l?(vt(),l=a.fallback,d=n.mode,p=e.child,S=p.sibling,a=Zn(p,{mode:"hidden",children:a.children}),a.subtreeFlags=p.subtreeFlags&65011712,S!==null?l=Zn(S,l):(l=Bt(l,d,t,null),l.flags|=2),l.return=n,a.return=n,a.sibling=l,n.child=a,a=l,l=n.child,d=e.child.memoizedState,d===null?d=Ko(t):(p=d.cachePool,p!==null?(S=Fe._currentValue,p=p.parent!==S?{parent:S,pool:S}:p):p=Yc(),d={baseLanes:d.baseLanes|t,cachePool:p}),l.memoizedState=d,l.childLanes=Jo(e,c,t),n.memoizedState=Wo,a):(ht(n),t=e.child,e=t.sibling,t=Zn(t,{mode:"visible",children:a.children}),t.return=n,t.sibling=null,e!==null&&(c=n.deletions,c===null?(n.deletions=[e],n.flags|=16):c.push(e)),n.child=t,n.memoizedState=null,t)}function Po(e,n){return n=Zi({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Zi(e,n){return e=gn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Io(e,n,t){return Ea(n,e.child,null,t),e=Po(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function ld(e,n,t){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),go(e.return,n,t)}function eu(e,n,t,a,l){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:l}:(r.isBackwards=n,r.rendering=null,r.renderingStartTime=0,r.last=a,r.tail=t,r.tailMode=l)}function id(e,n,t){var a=n.pendingProps,l=a.revealOrder,r=a.tail;if(Je(e,n,a.children,t),a=Ge.current,(a&2)!==0)a=a&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ld(e,t,n);else if(e.tag===19)ld(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}switch(C(Ge,a),l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&Vi(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),eu(n,!1,l,t,r);break;case"backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&Vi(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}eu(n,!0,t,null,r);break;case"together":eu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Pn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),kt|=n.lanes,(t&n.childLanes)===0)if(e!==null){if(ml(e,n,t,!1),(t&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(u(153));if(n.child!==null){for(e=n.child,t=Zn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Zn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function nu(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&xi(e)))}function sv(e,n,t){switch(n.tag){case 3:Te(n,n.stateNode.containerInfo),ct(n,Fe,e.memoizedState.cache),fl();break;case 27:case 5:Tr(n);break;case 4:Te(n,n.stateNode.containerInfo);break;case 10:ct(n,n.type,n.memoizedProps.value);break;case 13:var a=n.memoizedState;if(a!==null)return a.dehydrated!==null?(ht(n),n.flags|=128,null):(t&n.child.childLanes)!==0?ad(e,n,t):(ht(n),e=Pn(e,n,t),e!==null?e.sibling:null);ht(n);break;case 19:var l=(e.flags&128)!==0;if(a=(t&n.childLanes)!==0,a||(ml(e,n,t,!1),a=(t&n.childLanes)!==0),l){if(a)return id(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),C(Ge,Ge.current),a)break;return null;case 22:case 23:return n.lanes=0,Pf(e,n,t);case 24:ct(n,Fe,e.memoizedState.cache)}return Pn(e,n,t)}function rd(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps)$e=!0;else{if(!nu(e,t)&&(n.flags&128)===0)return $e=!1,sv(e,n,t);$e=(e.flags&131072)!==0}else $e=!1,fe&&(n.flags&1048576)!==0&&qc(n,zi,n.index);switch(n.lanes=0,n.tag){case 16:e:{e=n.pendingProps;var a=n.elementType,l=a._init;if(a=l(a._payload),n.type=a,typeof a=="function")so(a)?(e=Wt(a,e),n.tag=1,n=nd(null,n,a,e,t)):(n.tag=0,n=Xo(null,n,a,e,t));else{if(a!=null){if(l=a.$$typeof,l===ne){n.tag=11,n=Wf(null,n,a,e,t);break e}else if(l===de){n.tag=14,n=Kf(null,n,a,e,t);break e}}throw n=Ze(a)||a,Error(u(306,n,""))}}return n;case 0:return Xo(e,n,n.type,n.pendingProps,t);case 1:return a=n.type,l=Wt(a,n.pendingProps),nd(e,n,a,l,t);case 3:e:{if(Te(n,n.stateNode.containerInfo),e===null)throw Error(u(387));a=n.pendingProps;var r=n.memoizedState;l=r.element,zo(e,n),wl(n,a,null,t);var c=n.memoizedState;if(a=c.cache,ct(n,Fe,a),a!==r.cache&&bo(n,[Fe],t,!0),yl(),a=c.element,r.isDehydrated)if(r={element:a,isDehydrated:!1,cache:c.cache},n.updateQueue.baseState=r,n.memoizedState=r,n.flags&256){n=td(e,n,a,t);break e}else if(a!==l){l=xn(Error(u(424)),n),dl(l),n=td(e,n,a,t);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(_e=qn(e.firstChild),rn=n,fe=!0,Ft=null,Ln=!0,t=Lf(n,null,a,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(fl(),a===l){n=Pn(e,n,t);break e}Je(e,n,a,t)}n=n.child}return n;case 26:return Gi(e,n),e===null?(t=cm(n.type,null,n.pendingProps,null))?n.memoizedState=t:fe||(t=n.type,e=n.pendingProps,a=ir(K.current).createElement(t),a[tn]=n,a[on]=e,Ie(a,t,e),Qe(a),n.stateNode=a):n.memoizedState=cm(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Tr(n),e===null&&fe&&(a=n.stateNode=om(n.type,n.pendingProps,K.current),rn=n,Ln=!0,l=_e,xt(n.type)?(qu=l,_e=qn(a.firstChild)):_e=l),Je(e,n,n.pendingProps.children,t),Gi(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&fe&&((l=a=_e)&&(a=Nv(a,n.type,n.pendingProps,Ln),a!==null?(n.stateNode=a,rn=n,_e=qn(a.firstChild),Ln=!1,l=!0):l=!1),l||Gt(n)),Tr(n),l=n.type,r=n.pendingProps,c=e!==null?e.memoizedProps:null,a=r.children,Ou(l,r)?a=null:c!==null&&Ou(l,c)&&(n.flags|=32),n.memoizedState!==null&&(l=Do(e,n,nv,null,null,t),Yl._currentValue=l),Gi(e,n),Je(e,n,a,t),n.child;case 6:return e===null&&fe&&((e=t=_e)&&(t=Lv(t,n.pendingProps,Ln),t!==null?(n.stateNode=t,rn=n,_e=null,e=!0):e=!1),e||Gt(n)),null;case 13:return ad(e,n,t);case 4:return Te(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=Ea(n,null,a,t):Je(e,n,a,t),n.child;case 11:return Wf(e,n,n.type,n.pendingProps,t);case 7:return Je(e,n,n.pendingProps,t),n.child;case 8:return Je(e,n,n.pendingProps.children,t),n.child;case 12:return Je(e,n,n.pendingProps.children,t),n.child;case 10:return a=n.pendingProps,ct(n,n.type,a.value),Je(e,n,a.children,t),n.child;case 9:return l=n.type._context,a=n.pendingProps.children,Qt(n),l=an(l),a=a(l),n.flags|=1,Je(e,n,a,t),n.child;case 14:return Kf(e,n,n.type,n.pendingProps,t);case 15:return Jf(e,n,n.type,n.pendingProps,t);case 19:return id(e,n,t);case 31:return a=n.pendingProps,t=n.mode,a={mode:a.mode,children:a.children},e===null?(t=Zi(a,t),t.ref=n.ref,n.child=t,t.return=n,n=t):(t=Zn(e.child,a),t.ref=n.ref,n.child=t,t.return=n,n=t),n;case 22:return Pf(e,n,t);case 24:return Qt(n),a=an(Fe),e===null?(l=ko(),l===null&&(l=xe,r=yo(),l.pooledCache=r,r.refCount++,r!==null&&(l.pooledCacheLanes|=t),l=r),n.memoizedState={parent:a,cache:l},So(n),ct(n,Fe,l)):((e.lanes&t)!==0&&(zo(e,n),wl(n,null,null,t),yl()),l=e.memoizedState,r=n.memoizedState,l.parent!==a?(l={parent:a,cache:a},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),ct(n,Fe,a)):(a=r.cache,ct(n,Fe,a),a!==l.cache&&bo(n,[Fe],t,!0))),Je(e,n,n.pendingProps.children,t),n.child;case 29:throw n.pendingProps}throw Error(u(156,n.tag))}function In(e){e.flags|=4}function od(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!hm(n)){if(n=Tn.current,n!==null&&((re&4194048)===re?Hn!==null:(re&62914560)!==re&&(re&536870912)===0||n!==Hn))throw gl=Ro,Fc;e.flags|=8192}}function Qi(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ls():536870912,e.lanes|=n,Da|=n)}function jl(e,n){if(!fe)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Oe(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,a=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=t,n}function cv(e,n,t){var a=n.pendingProps;switch(po(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(n),null;case 1:return Oe(n),null;case 3:return t=n.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Wn(Fe),rt(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(cl(n)?In(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Lc())),Oe(n),null;case 26:return t=n.memoizedState,e===null?(In(n),t!==null?(Oe(n),od(n,t)):(Oe(n),n.flags&=-16777217)):t?t!==e.memoizedState?(In(n),Oe(n),od(n,t)):(Oe(n),n.flags&=-16777217):(e.memoizedProps!==a&&In(n),Oe(n),n.flags&=-16777217),null;case 27:ai(n),t=K.current;var l=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==a&&In(n);else{if(!a){if(n.stateNode===null)throw Error(u(166));return Oe(n),null}e=Y.current,cl(n)?Uc(n):(e=om(l,a,t),n.stateNode=e,In(n))}return Oe(n),null;case 5:if(ai(n),t=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==a&&In(n);else{if(!a){if(n.stateNode===null)throw Error(u(166));return Oe(n),null}if(e=Y.current,cl(n))Uc(n);else{switch(l=ir(K.current),e){case 1:e=l.createElementNS("http://www.w3.org/2000/svg",t);break;case 2:e=l.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;default:switch(t){case"svg":e=l.createElementNS("http://www.w3.org/2000/svg",t);break;case"math":e=l.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;case"script":e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?l.createElement("select",{is:a.is}):l.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?l.createElement(t,{is:a.is}):l.createElement(t)}}e[tn]=n,e[on]=a;e:for(l=n.child;l!==null;){if(l.tag===5||l.tag===6)e.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===n)break e;for(;l.sibling===null;){if(l.return===null||l.return===n)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}n.stateNode=e;e:switch(Ie(e,t,a),t){case"button":case"input":case"select":case"textarea":e=!!a.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&In(n)}}return Oe(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==a&&In(n);else{if(typeof a!="string"&&n.stateNode===null)throw Error(u(166));if(e=K.current,cl(n)){if(e=n.stateNode,t=n.memoizedProps,a=null,l=rn,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}e[tn]=n,e=!!(e.nodeValue===t||a!==null&&a.suppressHydrationWarning===!0||em(e.nodeValue,t)),e||Gt(n)}else e=ir(e).createTextNode(a),e[tn]=n,n.stateNode=e}return Oe(n),null;case 13:if(a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=cl(n),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(u(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(u(317));l[tn]=n}else fl(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Oe(n),l=!1}else l=Lc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(Jn(n),n):(Jn(n),null)}if(Jn(n),(n.flags&128)!==0)return n.lanes=t,n;if(t=a!==null,e=e!==null&&e.memoizedState!==null,t){a=n.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool);var r=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(r=a.memoizedState.cachePool.pool),r!==l&&(a.flags|=2048)}return t!==e&&t&&(n.child.flags|=8192),Qi(n,n.updateQueue),Oe(n),null;case 4:return rt(),e===null&&Eu(n.stateNode.containerInfo),Oe(n),null;case 10:return Wn(n.type),Oe(n),null;case 19:if(U(Ge),l=n.memoizedState,l===null)return Oe(n),null;if(a=(n.flags&128)!==0,r=l.rendering,r===null)if(a)jl(l,!1);else{if(Ce!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(r=Vi(e),r!==null){for(n.flags|=128,jl(l,!1),e=r.updateQueue,n.updateQueue=e,Qi(n,e),n.subtreeFlags=0,e=t,t=n.child;t!==null;)Cc(t,e),t=t.sibling;return C(Ge,Ge.current&1|2),n.child}e=e.sibling}l.tail!==null&&Nn()>Wi&&(n.flags|=128,a=!0,jl(l,!1),n.lanes=4194304)}else{if(!a)if(e=Vi(r),e!==null){if(n.flags|=128,a=!0,e=e.updateQueue,n.updateQueue=e,Qi(n,e),jl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!r.alternate&&!fe)return Oe(n),null}else 2*Nn()-l.renderingStartTime>Wi&&t!==536870912&&(n.flags|=128,a=!0,jl(l,!1),n.lanes=4194304);l.isBackwards?(r.sibling=n.child,n.child=r):(e=l.last,e!==null?e.sibling=r:n.child=r,l.last=r)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=Nn(),n.sibling=null,e=Ge.current,C(Ge,a?e&1|2:e&1),n):(Oe(n),null);case 22:case 23:return Jn(n),Ao(),a=n.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(n.flags|=8192):a&&(n.flags|=8192),a?(t&536870912)!==0&&(n.flags&128)===0&&(Oe(n),n.subtreeFlags&6&&(n.flags|=8192)):Oe(n),t=n.updateQueue,t!==null&&Qi(n,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),a=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),a!==t&&(n.flags|=2048),e!==null&&U($t),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),n.memoizedState.cache!==t&&(n.flags|=2048),Wn(Fe),Oe(n),null;case 25:return null;case 30:return null}throw Error(u(156,n.tag))}function fv(e,n){switch(po(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Wn(Fe),rt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ai(n),null;case 13:if(Jn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(u(340));fl()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return U(Ge),null;case 4:return rt(),null;case 10:return Wn(n.type),null;case 22:case 23:return Jn(n),Ao(),e!==null&&U($t),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Wn(Fe),null;case 25:return null;default:return null}}function ud(e,n){switch(po(n),n.tag){case 3:Wn(Fe),rt();break;case 26:case 27:case 5:ai(n);break;case 4:rt();break;case 13:Jn(n);break;case 19:U(Ge);break;case 10:Wn(n.type);break;case 22:case 23:Jn(n),Ao(),e!==null&&U($t);break;case 24:Wn(Fe)}}function Al(e,n){try{var t=n.updateQueue,a=t!==null?t.lastEffect:null;if(a!==null){var l=a.next;t=l;do{if((t.tag&e)===e){a=void 0;var r=t.create,c=t.inst;a=r(),c.destroy=a}t=t.next}while(t!==l)}}catch(d){ze(n,n.return,d)}}function gt(e,n,t){try{var a=n.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var r=l.next;a=r;do{if((a.tag&e)===e){var c=a.inst,d=c.destroy;if(d!==void 0){c.destroy=void 0,l=n;var p=t,S=d;try{S()}catch(E){ze(l,p,E)}}}a=a.next}while(a!==r)}}catch(E){ze(n,n.return,E)}}function sd(e){var n=e.updateQueue;if(n!==null){var t=e.stateNode;try{Wc(n,t)}catch(a){ze(e,e.return,a)}}}function cd(e,n,t){t.props=Wt(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(a){ze(e,n,a)}}function Tl(e,n){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof t=="function"?e.refCleanup=t(a):t.current=a}}catch(l){ze(e,n,l)}}function Bn(e,n){var t=e.ref,a=e.refCleanup;if(t!==null)if(typeof a=="function")try{a()}catch(l){ze(e,n,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(l){ze(e,n,l)}else t.current=null}function fd(e){var n=e.type,t=e.memoizedProps,a=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":t.autoFocus&&a.focus();break e;case"img":t.src?a.src=t.src:t.srcSet&&(a.srcset=t.srcSet)}}catch(l){ze(e,e.return,l)}}function tu(e,n,t){try{var a=e.stateNode;Mv(a,e.type,t,n),a[on]=n}catch(l){ze(e,e.return,l)}}function dd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&xt(e.type)||e.tag===4}function au(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||dd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&xt(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function lu(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,n):(n=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.appendChild(e),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=lr));else if(a!==4&&(a===27&&xt(e.type)&&(t=e.stateNode,n=null),e=e.child,e!==null))for(lu(e,n,t),e=e.sibling;e!==null;)lu(e,n,t),e=e.sibling}function $i(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(a!==4&&(a===27&&xt(e.type)&&(t=e.stateNode),e=e.child,e!==null))for($i(e,n,t),e=e.sibling;e!==null;)$i(e,n,t),e=e.sibling}function md(e){var n=e.stateNode,t=e.memoizedProps;try{for(var a=e.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);Ie(n,a,t),n[tn]=e,n[on]=t}catch(r){ze(e,e.return,r)}}var et=!1,Le=!1,iu=!1,pd=typeof WeakSet=="function"?WeakSet:Set,Xe=null;function dv(e,n){if(e=e.containerInfo,Tu=fr,e=zc(e),to(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var l=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{t.nodeType,r.nodeType}catch{t=null;break e}var c=0,d=-1,p=-1,S=0,E=0,T=e,z=null;n:for(;;){for(var x;T!==t||l!==0&&T.nodeType!==3||(d=c+l),T!==r||a!==0&&T.nodeType!==3||(p=c+a),T.nodeType===3&&(c+=T.nodeValue.length),(x=T.firstChild)!==null;)z=T,T=x;for(;;){if(T===e)break n;if(z===t&&++S===l&&(d=c),z===r&&++E===a&&(p=c),(x=T.nextSibling)!==null)break;T=z,z=T.parentNode}T=x}t=d===-1||p===-1?null:{start:d,end:p}}else t=null}t=t||{start:0,end:0}}else t=null;for(Du={focusedElem:e,selectionRange:t},fr=!1,Xe=n;Xe!==null;)if(n=Xe,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,Xe=e;else for(;Xe!==null;){switch(n=Xe,r=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,t=n,l=r.memoizedProps,r=r.memoizedState,a=t.stateNode;try{var Q=Wt(t.type,l,t.elementType===t.type);e=a.getSnapshotBeforeUpdate(Q,r),a.__reactInternalSnapshotBeforeUpdate=e}catch(F){ze(t,t.return,F)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,t=e.nodeType,t===9)_u(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":_u(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=n.sibling,e!==null){e.return=n.return,Xe=e;break}Xe=n.return}}function hd(e,n,t){var a=t.flags;switch(t.tag){case 0:case 11:case 15:bt(e,t),a&4&&Al(5,t);break;case 1:if(bt(e,t),a&4)if(e=t.stateNode,n===null)try{e.componentDidMount()}catch(c){ze(t,t.return,c)}else{var l=Wt(t.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(l,n,e.__reactInternalSnapshotBeforeUpdate)}catch(c){ze(t,t.return,c)}}a&64&&sd(t),a&512&&Tl(t,t.return);break;case 3:if(bt(e,t),a&64&&(e=t.updateQueue,e!==null)){if(n=null,t.child!==null)switch(t.child.tag){case 27:case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}try{Wc(e,n)}catch(c){ze(t,t.return,c)}}break;case 27:n===null&&a&4&&md(t);case 26:case 5:bt(e,t),n===null&&a&4&&fd(t),a&512&&Tl(t,t.return);break;case 12:bt(e,t);break;case 13:bt(e,t),a&4&&bd(e,t),a&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=kv.bind(null,t),Hv(e,t))));break;case 22:if(a=t.memoizedState!==null||et,!a){n=n!==null&&n.memoizedState!==null||Le,l=et;var r=Le;et=a,(Le=n)&&!r?yt(e,t,(t.subtreeFlags&8772)!==0):bt(e,t),et=l,Le=r}break;case 30:break;default:bt(e,t)}}function vd(e){var n=e.alternate;n!==null&&(e.alternate=null,vd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Nr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var De=null,cn=!1;function nt(e,n,t){for(t=t.child;t!==null;)gd(e,n,t),t=t.sibling}function gd(e,n,t){if(pn&&typeof pn.onCommitFiberUnmount=="function")try{pn.onCommitFiberUnmount(Ka,t)}catch{}switch(t.tag){case 26:Le||Bn(t,n),nt(e,n,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:Le||Bn(t,n);var a=De,l=cn;xt(t.type)&&(De=t.stateNode,cn=!1),nt(e,n,t),Ll(t.stateNode),De=a,cn=l;break;case 5:Le||Bn(t,n);case 6:if(a=De,l=cn,De=null,nt(e,n,t),De=a,cn=l,De!==null)if(cn)try{(De.nodeType===9?De.body:De.nodeName==="HTML"?De.ownerDocument.body:De).removeChild(t.stateNode)}catch(r){ze(t,n,r)}else try{De.removeChild(t.stateNode)}catch(r){ze(t,n,r)}break;case 18:De!==null&&(cn?(e=De,im(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),Ql(e)):im(De,t.stateNode));break;case 4:a=De,l=cn,De=t.stateNode.containerInfo,cn=!0,nt(e,n,t),De=a,cn=l;break;case 0:case 11:case 14:case 15:Le||gt(2,t,n),Le||gt(4,t,n),nt(e,n,t);break;case 1:Le||(Bn(t,n),a=t.stateNode,typeof a.componentWillUnmount=="function"&&cd(t,n,a)),nt(e,n,t);break;case 21:nt(e,n,t);break;case 22:Le=(a=Le)||t.memoizedState!==null,nt(e,n,t),Le=a;break;default:nt(e,n,t)}}function bd(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ql(e)}catch(t){ze(n,n.return,t)}}function mv(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new pd),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new pd),n;default:throw Error(u(435,e.tag))}}function ru(e,n){var t=mv(e);n.forEach(function(a){var l=Rv.bind(null,e,a);t.has(a)||(t.add(a),a.then(l,l))})}function bn(e,n){var t=n.deletions;if(t!==null)for(var a=0;a<t.length;a++){var l=t[a],r=e,c=n,d=c;e:for(;d!==null;){switch(d.tag){case 27:if(xt(d.type)){De=d.stateNode,cn=!1;break e}break;case 5:De=d.stateNode,cn=!1;break e;case 3:case 4:De=d.stateNode.containerInfo,cn=!0;break e}d=d.return}if(De===null)throw Error(u(160));gd(r,c,l),De=null,cn=!1,r=l.alternate,r!==null&&(r.return=null),l.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)yd(n,e),n=n.sibling}var Cn=null;function yd(e,n){var t=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:bn(n,e),yn(e),a&4&&(gt(3,e,e.return),Al(3,e),gt(5,e,e.return));break;case 1:bn(n,e),yn(e),a&512&&(Le||t===null||Bn(t,t.return)),a&64&&et&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?a:t.concat(a))));break;case 26:var l=Cn;if(bn(n,e),yn(e),a&512&&(Le||t===null||Bn(t,t.return)),a&4){var r=t!==null?t.memoizedState:null;if(a=e.memoizedState,t===null)if(a===null)if(e.stateNode===null){e:{a=e.type,t=e.memoizedProps,l=l.ownerDocument||l;n:switch(a){case"title":r=l.getElementsByTagName("title")[0],(!r||r[Ia]||r[tn]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(a),l.head.insertBefore(r,l.querySelector("head > title"))),Ie(r,a,t),r[tn]=e,Qe(r),a=r;break e;case"link":var c=mm("link","href",l).get(a+(t.href||""));if(c){for(var d=0;d<c.length;d++)if(r=c[d],r.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&r.getAttribute("rel")===(t.rel==null?null:t.rel)&&r.getAttribute("title")===(t.title==null?null:t.title)&&r.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){c.splice(d,1);break n}}r=l.createElement(a),Ie(r,a,t),l.head.appendChild(r);break;case"meta":if(c=mm("meta","content",l).get(a+(t.content||""))){for(d=0;d<c.length;d++)if(r=c[d],r.getAttribute("content")===(t.content==null?null:""+t.content)&&r.getAttribute("name")===(t.name==null?null:t.name)&&r.getAttribute("property")===(t.property==null?null:t.property)&&r.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&r.getAttribute("charset")===(t.charSet==null?null:t.charSet)){c.splice(d,1);break n}}r=l.createElement(a),Ie(r,a,t),l.head.appendChild(r);break;default:throw Error(u(468,a))}r[tn]=e,Qe(r),a=r}e.stateNode=a}else pm(l,e.type,e.stateNode);else e.stateNode=dm(l,a,e.memoizedProps);else r!==a?(r===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):r.count--,a===null?pm(l,e.type,e.stateNode):dm(l,a,e.memoizedProps)):a===null&&e.stateNode!==null&&tu(e,e.memoizedProps,t.memoizedProps)}break;case 27:bn(n,e),yn(e),a&512&&(Le||t===null||Bn(t,t.return)),t!==null&&a&4&&tu(e,e.memoizedProps,t.memoizedProps);break;case 5:if(bn(n,e),yn(e),a&512&&(Le||t===null||Bn(t,t.return)),e.flags&32){l=e.stateNode;try{ua(l,"")}catch(x){ze(e,e.return,x)}}a&4&&e.stateNode!=null&&(l=e.memoizedProps,tu(e,l,t!==null?t.memoizedProps:l)),a&1024&&(iu=!0);break;case 6:if(bn(n,e),yn(e),a&4){if(e.stateNode===null)throw Error(u(162));a=e.memoizedProps,t=e.stateNode;try{t.nodeValue=a}catch(x){ze(e,e.return,x)}}break;case 3:if(ur=null,l=Cn,Cn=rr(n.containerInfo),bn(n,e),Cn=l,yn(e),a&4&&t!==null&&t.memoizedState.isDehydrated)try{Ql(n.containerInfo)}catch(x){ze(e,e.return,x)}iu&&(iu=!1,wd(e));break;case 4:a=Cn,Cn=rr(e.stateNode.containerInfo),bn(n,e),yn(e),Cn=a;break;case 12:bn(n,e),yn(e);break;case 13:bn(n,e),yn(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(du=Nn()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,ru(e,a)));break;case 22:l=e.memoizedState!==null;var p=t!==null&&t.memoizedState!==null,S=et,E=Le;if(et=S||l,Le=E||p,bn(n,e),Le=E,et=S,yn(e),a&8192)e:for(n=e.stateNode,n._visibility=l?n._visibility&-2:n._visibility|1,l&&(t===null||p||et||Le||Kt(e)),t=null,n=e;;){if(n.tag===5||n.tag===26){if(t===null){p=t=n;try{if(r=p.stateNode,l)c=r.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{d=p.stateNode;var T=p.memoizedProps.style,z=T!=null&&T.hasOwnProperty("display")?T.display:null;d.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(x){ze(p,p.return,x)}}}else if(n.tag===6){if(t===null){p=n;try{p.stateNode.nodeValue=l?"":p.memoizedProps}catch(x){ze(p,p.return,x)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;t===n&&(t=null),n=n.return}t===n&&(t=null),n.sibling.return=n.return,n=n.sibling}a&4&&(a=e.updateQueue,a!==null&&(t=a.retryQueue,t!==null&&(a.retryQueue=null,ru(e,t))));break;case 19:bn(n,e),yn(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,ru(e,a)));break;case 30:break;case 21:break;default:bn(n,e),yn(e)}}function yn(e){var n=e.flags;if(n&2){try{for(var t,a=e.return;a!==null;){if(dd(a)){t=a;break}a=a.return}if(t==null)throw Error(u(160));switch(t.tag){case 27:var l=t.stateNode,r=au(e);$i(e,r,l);break;case 5:var c=t.stateNode;t.flags&32&&(ua(c,""),t.flags&=-33);var d=au(e);$i(e,d,c);break;case 3:case 4:var p=t.stateNode.containerInfo,S=au(e);lu(e,S,p);break;default:throw Error(u(161))}}catch(E){ze(e,e.return,E)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function wd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;wd(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function bt(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)hd(e,n.alternate,n),n=n.sibling}function Kt(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:gt(4,n,n.return),Kt(n);break;case 1:Bn(n,n.return);var t=n.stateNode;typeof t.componentWillUnmount=="function"&&cd(n,n.return,t),Kt(n);break;case 27:Ll(n.stateNode);case 26:case 5:Bn(n,n.return),Kt(n);break;case 22:n.memoizedState===null&&Kt(n);break;case 30:Kt(n);break;default:Kt(n)}e=e.sibling}}function yt(e,n,t){for(t=t&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var a=n.alternate,l=e,r=n,c=r.flags;switch(r.tag){case 0:case 11:case 15:yt(l,r,t),Al(4,r);break;case 1:if(yt(l,r,t),a=r,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(S){ze(a,a.return,S)}if(a=r,l=a.updateQueue,l!==null){var d=a.stateNode;try{var p=l.shared.hiddenCallbacks;if(p!==null)for(l.shared.hiddenCallbacks=null,l=0;l<p.length;l++)Xc(p[l],d)}catch(S){ze(a,a.return,S)}}t&&c&64&&sd(r),Tl(r,r.return);break;case 27:md(r);case 26:case 5:yt(l,r,t),t&&a===null&&c&4&&fd(r),Tl(r,r.return);break;case 12:yt(l,r,t);break;case 13:yt(l,r,t),t&&c&4&&bd(l,r);break;case 22:r.memoizedState===null&&yt(l,r,t),Tl(r,r.return);break;case 30:break;default:yt(l,r,t)}n=n.sibling}}function ou(e,n){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&pl(t))}function uu(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&pl(e))}function Vn(e,n,t,a){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)kd(e,n,t,a),n=n.sibling}function kd(e,n,t,a){var l=n.flags;switch(n.tag){case 0:case 11:case 15:Vn(e,n,t,a),l&2048&&Al(9,n);break;case 1:Vn(e,n,t,a);break;case 3:Vn(e,n,t,a),l&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&pl(e)));break;case 12:if(l&2048){Vn(e,n,t,a),e=n.stateNode;try{var r=n.memoizedProps,c=r.id,d=r.onPostCommit;typeof d=="function"&&d(c,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(p){ze(n,n.return,p)}}else Vn(e,n,t,a);break;case 13:Vn(e,n,t,a);break;case 23:break;case 22:r=n.stateNode,c=n.alternate,n.memoizedState!==null?r._visibility&2?Vn(e,n,t,a):Dl(e,n):r._visibility&2?Vn(e,n,t,a):(r._visibility|=2,ja(e,n,t,a,(n.subtreeFlags&10256)!==0)),l&2048&&ou(c,n);break;case 24:Vn(e,n,t,a),l&2048&&uu(n.alternate,n);break;default:Vn(e,n,t,a)}}function ja(e,n,t,a,l){for(l=l&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var r=e,c=n,d=t,p=a,S=c.flags;switch(c.tag){case 0:case 11:case 15:ja(r,c,d,p,l),Al(8,c);break;case 23:break;case 22:var E=c.stateNode;c.memoizedState!==null?E._visibility&2?ja(r,c,d,p,l):Dl(r,c):(E._visibility|=2,ja(r,c,d,p,l)),l&&S&2048&&ou(c.alternate,c);break;case 24:ja(r,c,d,p,l),l&&S&2048&&uu(c.alternate,c);break;default:ja(r,c,d,p,l)}n=n.sibling}}function Dl(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var t=e,a=n,l=a.flags;switch(a.tag){case 22:Dl(t,a),l&2048&&ou(a.alternate,a);break;case 24:Dl(t,a),l&2048&&uu(a.alternate,a);break;default:Dl(t,a)}n=n.sibling}}var Ol=8192;function Aa(e){if(e.subtreeFlags&Ol)for(e=e.child;e!==null;)Rd(e),e=e.sibling}function Rd(e){switch(e.tag){case 26:Aa(e),e.flags&Ol&&e.memoizedState!==null&&Pv(Cn,e.memoizedState,e.memoizedProps);break;case 5:Aa(e);break;case 3:case 4:var n=Cn;Cn=rr(e.stateNode.containerInfo),Aa(e),Cn=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Ol,Ol=16777216,Aa(e),Ol=n):Aa(e));break;default:Aa(e)}}function Sd(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Ml(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];Xe=a,xd(a,e)}Sd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)zd(e),e=e.sibling}function zd(e){switch(e.tag){case 0:case 11:case 15:Ml(e),e.flags&2048&&gt(9,e,e.return);break;case 3:Ml(e);break;case 12:Ml(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Xi(e)):Ml(e);break;default:Ml(e)}}function Xi(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];Xe=a,xd(a,e)}Sd(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:gt(8,n,n.return),Xi(n);break;case 22:t=n.stateNode,t._visibility&2&&(t._visibility&=-3,Xi(n));break;default:Xi(n)}e=e.sibling}}function xd(e,n){for(;Xe!==null;){var t=Xe;switch(t.tag){case 0:case 11:case 15:gt(8,t,n);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var a=t.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:pl(t.memoizedState.cache)}if(a=t.child,a!==null)a.return=t,Xe=a;else e:for(t=e;Xe!==null;){a=Xe;var l=a.sibling,r=a.return;if(vd(a),a===t){Xe=null;break e}if(l!==null){l.return=r,Xe=l;break e}Xe=r}}}var pv={getCacheForType:function(e){var n=an(Fe),t=n.data.get(e);return t===void 0&&(t=e(),n.data.set(e,t)),t}},hv=typeof WeakMap=="function"?WeakMap:Map,pe=0,xe=null,te=null,re=0,he=0,wn=null,wt=!1,Ta=!1,su=!1,tt=0,Ce=0,kt=0,Jt=0,cu=0,Dn=0,Da=0,_l=null,fn=null,fu=!1,du=0,Wi=1/0,Ki=null,Rt=null,Pe=0,St=null,Oa=null,Ma=0,mu=0,pu=null,Ed=null,Cl=0,hu=null;function kn(){if((pe&2)!==0&&re!==0)return re&-re;if(j.T!==null){var e=ya;return e!==0?e:Ru()}return Vs()}function jd(){Dn===0&&(Dn=(re&536870912)===0||fe?Ns():536870912);var e=Tn.current;return e!==null&&(e.flags|=32),Dn}function Rn(e,n,t){(e===xe&&(he===2||he===9)||e.cancelPendingCommit!==null)&&(_a(e,0),zt(e,re,Dn,!1)),Pa(e,t),((pe&2)===0||e!==xe)&&(e===xe&&((pe&2)===0&&(Jt|=t),Ce===4&&zt(e,re,Dn,!1)),Yn(e))}function Ad(e,n,t){if((pe&6)!==0)throw Error(u(327));var a=!t&&(n&124)===0&&(n&e.expiredLanes)===0||Ja(e,n),l=a?bv(e,n):bu(e,n,!0),r=a;do{if(l===0){Ta&&!a&&zt(e,n,0,!1);break}else{if(t=e.current.alternate,r&&!vv(t)){l=bu(e,n,!1),r=!1;continue}if(l===2){if(r=n,e.errorRecoveryDisabledLanes&r)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){n=c;e:{var d=e;l=_l;var p=d.current.memoizedState.isDehydrated;if(p&&(_a(d,c).flags|=256),c=bu(d,c,!1),c!==2){if(su&&!p){d.errorRecoveryDisabledLanes|=r,Jt|=r,l=4;break e}r=fn,fn=l,r!==null&&(fn===null?fn=r:fn.push.apply(fn,r))}l=c}if(r=!1,l!==2)continue}}if(l===1){_a(e,0),zt(e,n,0,!0);break}e:{switch(a=e,r=l,r){case 0:case 1:throw Error(u(345));case 4:if((n&4194048)!==n)break;case 6:zt(a,n,Dn,!wt);break e;case 2:fn=null;break;case 3:case 5:break;default:throw Error(u(329))}if((n&62914560)===n&&(l=du+300-Nn(),10<l)){if(zt(a,n,Dn,!wt),oi(a,0,!0)!==0)break e;a.timeoutHandle=am(Td.bind(null,a,t,fn,Ki,fu,n,Dn,Jt,Da,wt,r,2,-0,0),l);break e}Td(a,t,fn,Ki,fu,n,Dn,Jt,Da,wt,r,0,-0,0)}}break}while(!0);Yn(e)}function Td(e,n,t,a,l,r,c,d,p,S,E,T,z,x){if(e.timeoutHandle=-1,T=n.subtreeFlags,(T&8192||(T&16785408)===16785408)&&(Vl={stylesheets:null,count:0,unsuspend:Jv},Rd(n),T=Iv(),T!==null)){e.cancelPendingCommit=T(Ud.bind(null,e,n,r,t,a,l,c,d,p,E,1,z,x)),zt(e,r,c,!S);return}Ud(e,n,r,t,a,l,c,d,p)}function vv(e){for(var n=e;;){var t=n.tag;if((t===0||t===11||t===15)&&n.flags&16384&&(t=n.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var a=0;a<t.length;a++){var l=t[a],r=l.getSnapshot;l=l.value;try{if(!vn(r(),l))return!1}catch{return!1}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function zt(e,n,t,a){n&=~cu,n&=~Jt,e.suspendedLanes|=n,e.pingedLanes&=~n,a&&(e.warmLanes|=n),a=e.expirationTimes;for(var l=n;0<l;){var r=31-hn(l),c=1<<r;a[r]=-1,l&=~c}t!==0&&Hs(e,t,n)}function Ji(){return(pe&6)===0?(ql(0),!1):!0}function vu(){if(te!==null){if(he===0)var e=te.return;else e=te,Xn=Zt=null,_o(e),xa=null,xl=0,e=te;for(;e!==null;)ud(e.alternate,e),e=e.return;te=null}}function _a(e,n){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,Cv(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),vu(),xe=e,te=t=Zn(e.current,null),re=n,he=0,wn=null,wt=!1,Ta=Ja(e,n),su=!1,Da=Dn=cu=Jt=kt=Ce=0,fn=_l=null,fu=!1,(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var l=31-hn(a),r=1<<l;n|=e[l],a&=~r}return tt=n,yi(),t}function Dd(e,n){P=null,j.H=Li,n===vl||n===Ai?(n=Qc(),he=3):n===Fc?(n=Qc(),he=4):he=n===Xf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,wn=n,te===null&&(Ce=1,Fi(e,xn(n,e.current)))}function Od(){var e=j.H;return j.H=Li,e===null?Li:e}function Md(){var e=j.A;return j.A=pv,e}function gu(){Ce=4,wt||(re&4194048)!==re&&Tn.current!==null||(Ta=!0),(kt&134217727)===0&&(Jt&134217727)===0||xe===null||zt(xe,re,Dn,!1)}function bu(e,n,t){var a=pe;pe|=2;var l=Od(),r=Md();(xe!==e||re!==n)&&(Ki=null,_a(e,n)),n=!1;var c=Ce;e:do try{if(he!==0&&te!==null){var d=te,p=wn;switch(he){case 8:vu(),c=6;break e;case 3:case 2:case 9:case 6:Tn.current===null&&(n=!0);var S=he;if(he=0,wn=null,Ca(e,d,p,S),t&&Ta){c=0;break e}break;default:S=he,he=0,wn=null,Ca(e,d,p,S)}}gv(),c=Ce;break}catch(E){Dd(e,E)}while(!0);return n&&e.shellSuspendCounter++,Xn=Zt=null,pe=a,j.H=l,j.A=r,te===null&&(xe=null,re=0,yi()),c}function gv(){for(;te!==null;)_d(te)}function bv(e,n){var t=pe;pe|=2;var a=Od(),l=Md();xe!==e||re!==n?(Ki=null,Wi=Nn()+500,_a(e,n)):Ta=Ja(e,n);e:do try{if(he!==0&&te!==null){n=te;var r=wn;n:switch(he){case 1:he=0,wn=null,Ca(e,n,r,1);break;case 2:case 9:if(Gc(r)){he=0,wn=null,Cd(n);break}n=function(){he!==2&&he!==9||xe!==e||(he=7),Yn(e)},r.then(n,n);break e;case 3:he=7;break e;case 4:he=5;break e;case 7:Gc(r)?(he=0,wn=null,Cd(n)):(he=0,wn=null,Ca(e,n,r,7));break;case 5:var c=null;switch(te.tag){case 26:c=te.memoizedState;case 5:case 27:var d=te;if(!c||hm(c)){he=0,wn=null;var p=d.sibling;if(p!==null)te=p;else{var S=d.return;S!==null?(te=S,Pi(S)):te=null}break n}}he=0,wn=null,Ca(e,n,r,5);break;case 6:he=0,wn=null,Ca(e,n,r,6);break;case 8:vu(),Ce=6;break e;default:throw Error(u(462))}}yv();break}catch(E){Dd(e,E)}while(!0);return Xn=Zt=null,j.H=a,j.A=l,pe=t,te!==null?0:(xe=null,re=0,yi(),Ce)}function yv(){for(;te!==null&&!Vp();)_d(te)}function _d(e){var n=rd(e.alternate,e,tt);e.memoizedProps=e.pendingProps,n===null?Pi(e):te=n}function Cd(e){var n=e,t=n.alternate;switch(n.tag){case 15:case 0:n=ed(t,n,n.pendingProps,n.type,void 0,re);break;case 11:n=ed(t,n,n.pendingProps,n.type.render,n.ref,re);break;case 5:_o(n);default:ud(t,n),n=te=Cc(n,tt),n=rd(t,n,tt)}e.memoizedProps=e.pendingProps,n===null?Pi(e):te=n}function Ca(e,n,t,a){Xn=Zt=null,_o(n),xa=null,xl=0;var l=n.return;try{if(uv(e,l,n,t,re)){Ce=1,Fi(e,xn(t,e.current)),te=null;return}}catch(r){if(l!==null)throw te=l,r;Ce=1,Fi(e,xn(t,e.current)),te=null;return}n.flags&32768?(fe||a===1?e=!0:Ta||(re&536870912)!==0?e=!1:(wt=e=!0,(a===2||a===9||a===3||a===6)&&(a=Tn.current,a!==null&&a.tag===13&&(a.flags|=16384))),qd(n,e)):Pi(n)}function Pi(e){var n=e;do{if((n.flags&32768)!==0){qd(n,wt);return}e=n.return;var t=cv(n.alternate,n,tt);if(t!==null){te=t;return}if(n=n.sibling,n!==null){te=n;return}te=n=e}while(n!==null);Ce===0&&(Ce=5)}function qd(e,n){do{var t=fv(e.alternate,e);if(t!==null){t.flags&=32767,te=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!n&&(e=e.sibling,e!==null)){te=e;return}te=e=t}while(e!==null);Ce=6,te=null}function Ud(e,n,t,a,l,r,c,d,p){e.cancelPendingCommit=null;do Ii();while(Pe!==0);if((pe&6)!==0)throw Error(u(327));if(n!==null){if(n===e.current)throw Error(u(177));if(r=n.lanes|n.childLanes,r|=oo,Jp(e,t,r,c,d,p),e===xe&&(te=xe=null,re=0),Oa=n,St=e,Ma=t,mu=r,pu=l,Ed=a,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Sv(li,function(){return Vd(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||a){a=j.T,j.T=null,l=q.p,q.p=2,c=pe,pe|=4;try{dv(e,n,t)}finally{pe=c,q.p=l,j.T=a}}Pe=1,Nd(),Ld(),Hd()}}function Nd(){if(Pe===1){Pe=0;var e=St,n=Oa,t=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||t){t=j.T,j.T=null;var a=q.p;q.p=2;var l=pe;pe|=4;try{yd(n,e);var r=Du,c=zc(e.containerInfo),d=r.focusedElem,p=r.selectionRange;if(c!==d&&d&&d.ownerDocument&&Sc(d.ownerDocument.documentElement,d)){if(p!==null&&to(d)){var S=p.start,E=p.end;if(E===void 0&&(E=S),"selectionStart"in d)d.selectionStart=S,d.selectionEnd=Math.min(E,d.value.length);else{var T=d.ownerDocument||document,z=T&&T.defaultView||window;if(z.getSelection){var x=z.getSelection(),Q=d.textContent.length,F=Math.min(p.start,Q),Re=p.end===void 0?F:Math.min(p.end,Q);!x.extend&&F>Re&&(c=Re,Re=F,F=c);var y=Rc(d,F),v=Rc(d,Re);if(y&&v&&(x.rangeCount!==1||x.anchorNode!==y.node||x.anchorOffset!==y.offset||x.focusNode!==v.node||x.focusOffset!==v.offset)){var R=T.createRange();R.setStart(y.node,y.offset),x.removeAllRanges(),F>Re?(x.addRange(R),x.extend(v.node,v.offset)):(R.setEnd(v.node,v.offset),x.addRange(R))}}}}for(T=[],x=d;x=x.parentNode;)x.nodeType===1&&T.push({element:x,left:x.scrollLeft,top:x.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<T.length;d++){var A=T[d];A.element.scrollLeft=A.left,A.element.scrollTop=A.top}}fr=!!Tu,Du=Tu=null}finally{pe=l,q.p=a,j.T=t}}e.current=n,Pe=2}}function Ld(){if(Pe===2){Pe=0;var e=St,n=Oa,t=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||t){t=j.T,j.T=null;var a=q.p;q.p=2;var l=pe;pe|=4;try{hd(e,n.alternate,n)}finally{pe=l,q.p=a,j.T=t}}Pe=3}}function Hd(){if(Pe===4||Pe===3){Pe=0,Yp();var e=St,n=Oa,t=Ma,a=Ed;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Pe=5:(Pe=0,Oa=St=null,Bd(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(Rt=null),qr(t),n=n.stateNode,pn&&typeof pn.onCommitFiberRoot=="function")try{pn.onCommitFiberRoot(Ka,n,void 0,(n.current.flags&128)===128)}catch{}if(a!==null){n=j.T,l=q.p,q.p=2,j.T=null;try{for(var r=e.onRecoverableError,c=0;c<a.length;c++){var d=a[c];r(d.value,{componentStack:d.stack})}}finally{j.T=n,q.p=l}}(Ma&3)!==0&&Ii(),Yn(e),l=e.pendingLanes,(t&4194090)!==0&&(l&42)!==0?e===hu?Cl++:(Cl=0,hu=e):Cl=0,ql(0)}}function Bd(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,pl(n)))}function Ii(e){return Nd(),Ld(),Hd(),Vd()}function Vd(){if(Pe!==5)return!1;var e=St,n=mu;mu=0;var t=qr(Ma),a=j.T,l=q.p;try{q.p=32>t?32:t,j.T=null,t=pu,pu=null;var r=St,c=Ma;if(Pe=0,Oa=St=null,Ma=0,(pe&6)!==0)throw Error(u(331));var d=pe;if(pe|=4,zd(r.current),kd(r,r.current,c,t),pe=d,ql(0,!1),pn&&typeof pn.onPostCommitFiberRoot=="function")try{pn.onPostCommitFiberRoot(Ka,r)}catch{}return!0}finally{q.p=l,j.T=a,Bd(e,n)}}function Yd(e,n,t){n=xn(t,n),n=$o(e.stateNode,n,2),e=mt(e,n,2),e!==null&&(Pa(e,2),Yn(e))}function ze(e,n,t){if(e.tag===3)Yd(e,e,t);else for(;n!==null;){if(n.tag===3){Yd(n,e,t);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Rt===null||!Rt.has(a))){e=xn(t,e),t=Qf(2),a=mt(n,t,2),a!==null&&($f(t,a,n,e),Pa(a,2),Yn(a));break}}n=n.return}}function yu(e,n,t){var a=e.pingCache;if(a===null){a=e.pingCache=new hv;var l=new Set;a.set(n,l)}else l=a.get(n),l===void 0&&(l=new Set,a.set(n,l));l.has(t)||(su=!0,l.add(t),e=wv.bind(null,e,n,t),n.then(e,e))}function wv(e,n,t){var a=e.pingCache;a!==null&&a.delete(n),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,xe===e&&(re&t)===t&&(Ce===4||Ce===3&&(re&62914560)===re&&300>Nn()-du?(pe&2)===0&&_a(e,0):cu|=t,Da===re&&(Da=0)),Yn(e)}function Fd(e,n){n===0&&(n=Ls()),e=ha(e,n),e!==null&&(Pa(e,n),Yn(e))}function kv(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Fd(e,t)}function Rv(e,n){var t=0;switch(e.tag){case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(u(314))}a!==null&&a.delete(n),Fd(e,t)}function Sv(e,n){return Or(e,n)}var er=null,qa=null,wu=!1,nr=!1,ku=!1,Pt=0;function Yn(e){e!==qa&&e.next===null&&(qa===null?er=qa=e:qa=qa.next=e),nr=!0,wu||(wu=!0,xv())}function ql(e,n){if(!ku&&nr){ku=!0;do for(var t=!1,a=er;a!==null;){if(e!==0){var l=a.pendingLanes;if(l===0)var r=0;else{var c=a.suspendedLanes,d=a.pingedLanes;r=(1<<31-hn(42|e)+1)-1,r&=l&~(c&~d),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(t=!0,$d(a,r))}else r=re,r=oi(a,a===xe?r:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(r&3)===0||Ja(a,r)||(t=!0,$d(a,r));a=a.next}while(t);ku=!1}}function zv(){Gd()}function Gd(){nr=wu=!1;var e=0;Pt!==0&&(_v()&&(e=Pt),Pt=0);for(var n=Nn(),t=null,a=er;a!==null;){var l=a.next,r=Zd(a,n);r===0?(a.next=null,t===null?er=l:t.next=l,l===null&&(qa=t)):(t=a,(e!==0||(r&3)!==0)&&(nr=!0)),a=l}ql(e)}function Zd(e,n){for(var t=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var c=31-hn(r),d=1<<c,p=l[c];p===-1?((d&t)===0||(d&a)!==0)&&(l[c]=Kp(d,n)):p<=n&&(e.expiredLanes|=d),r&=~d}if(n=xe,t=re,t=oi(e,e===n?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,t===0||e===n&&(he===2||he===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Mr(a),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||Ja(e,t)){if(n=t&-t,n===e.callbackPriority)return n;switch(a!==null&&Mr(a),qr(t)){case 2:case 8:t=qs;break;case 32:t=li;break;case 268435456:t=Us;break;default:t=li}return a=Qd.bind(null,e),t=Or(t,a),e.callbackPriority=n,e.callbackNode=t,n}return a!==null&&a!==null&&Mr(a),e.callbackPriority=2,e.callbackNode=null,2}function Qd(e,n){if(Pe!==0&&Pe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(Ii()&&e.callbackNode!==t)return null;var a=re;return a=oi(e,e===xe?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Ad(e,a,n),Zd(e,Nn()),e.callbackNode!=null&&e.callbackNode===t?Qd.bind(null,e):null)}function $d(e,n){if(Ii())return null;Ad(e,n,!0)}function xv(){qv(function(){(pe&6)!==0?Or(Cs,zv):Gd()})}function Ru(){return Pt===0&&(Pt=Ns()),Pt}function Xd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:di(""+e)}function Wd(e,n){var t=n.ownerDocument.createElement("input");return t.name=n.name,t.value=n.value,e.id&&t.setAttribute("form",e.id),n.parentNode.insertBefore(t,n),e=new FormData(e),t.parentNode.removeChild(t),e}function Ev(e,n,t,a,l){if(n==="submit"&&t&&t.stateNode===l){var r=Xd((l[on]||null).action),c=a.submitter;c&&(n=(n=c[on]||null)?Xd(n.formAction):c.getAttribute("formAction"),n!==null&&(r=n,c=null));var d=new vi("action","action",null,a,l);e.push({event:d,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Pt!==0){var p=c?Wd(l,c):new FormData(l);Yo(t,{pending:!0,data:p,method:l.method,action:r},null,p)}}else typeof r=="function"&&(d.preventDefault(),p=c?Wd(l,c):new FormData(l),Yo(t,{pending:!0,data:p,method:l.method,action:r},r,p))},currentTarget:l}]})}}for(var Su=0;Su<ro.length;Su++){var zu=ro[Su],jv=zu.toLowerCase(),Av=zu[0].toUpperCase()+zu.slice(1);_n(jv,"on"+Av)}_n(jc,"onAnimationEnd"),_n(Ac,"onAnimationIteration"),_n(Tc,"onAnimationStart"),_n("dblclick","onDoubleClick"),_n("focusin","onFocus"),_n("focusout","onBlur"),_n(Zh,"onTransitionRun"),_n(Qh,"onTransitionStart"),_n($h,"onTransitionCancel"),_n(Dc,"onTransitionEnd"),ia("onMouseEnter",["mouseout","mouseover"]),ia("onMouseLeave",["mouseout","mouseover"]),ia("onPointerEnter",["pointerout","pointerover"]),ia("onPointerLeave",["pointerout","pointerover"]),Ut("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ut("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ut("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ut("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ut("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ut("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ul="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ul));function Kd(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var a=e[t],l=a.event;a=a.listeners;e:{var r=void 0;if(n)for(var c=a.length-1;0<=c;c--){var d=a[c],p=d.instance,S=d.currentTarget;if(d=d.listener,p!==r&&l.isPropagationStopped())break e;r=d,l.currentTarget=S;try{r(l)}catch(E){Yi(E)}l.currentTarget=null,r=p}else for(c=0;c<a.length;c++){if(d=a[c],p=d.instance,S=d.currentTarget,d=d.listener,p!==r&&l.isPropagationStopped())break e;r=d,l.currentTarget=S;try{r(l)}catch(E){Yi(E)}l.currentTarget=null,r=p}}}}function ae(e,n){var t=n[Ur];t===void 0&&(t=n[Ur]=new Set);var a=e+"__bubble";t.has(a)||(Jd(n,e,2,!1),t.add(a))}function xu(e,n,t){var a=0;n&&(a|=4),Jd(t,e,a,n)}var tr="_reactListening"+Math.random().toString(36).slice(2);function Eu(e){if(!e[tr]){e[tr]=!0,Fs.forEach(function(t){t!=="selectionchange"&&(Tv.has(t)||xu(t,!1,e),xu(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[tr]||(n[tr]=!0,xu("selectionchange",!1,n))}}function Jd(e,n,t,a){switch(km(n)){case 2:var l=tg;break;case 8:l=ag;break;default:l=Bu}t=l.bind(null,n,t,e),l=void 0,!$r||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function ju(e,n,t,a,l){var r=a;if((n&1)===0&&(n&2)===0&&a!==null)e:for(;;){if(a===null)return;var c=a.tag;if(c===3||c===4){var d=a.stateNode.containerInfo;if(d===l)break;if(c===4)for(c=a.return;c!==null;){var p=c.tag;if((p===3||p===4)&&c.stateNode.containerInfo===l)return;c=c.return}for(;d!==null;){if(c=ta(d),c===null)return;if(p=c.tag,p===5||p===6||p===26||p===27){a=r=c;continue e}d=d.parentNode}}a=a.return}ac(function(){var S=r,E=Zr(t),T=[];e:{var z=Oc.get(e);if(z!==void 0){var x=vi,Q=e;switch(e){case"keypress":if(pi(t)===0)break e;case"keydown":case"keyup":x=Sh;break;case"focusin":Q="focus",x=Jr;break;case"focusout":Q="blur",x=Jr;break;case"beforeblur":case"afterblur":x=Jr;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=rc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=fh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Eh;break;case jc:case Ac:case Tc:x=ph;break;case Dc:x=Ah;break;case"scroll":case"scrollend":x=sh;break;case"wheel":x=Dh;break;case"copy":case"cut":case"paste":x=vh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=uc;break;case"toggle":case"beforetoggle":x=Mh}var F=(n&4)!==0,Re=!F&&(e==="scroll"||e==="scrollend"),y=F?z!==null?z+"Capture":null:z;F=[];for(var v=S,R;v!==null;){var A=v;if(R=A.stateNode,A=A.tag,A!==5&&A!==26&&A!==27||R===null||y===null||(A=nl(v,y),A!=null&&F.push(Nl(v,A,R))),Re)break;v=v.return}0<F.length&&(z=new x(z,Q,null,t,E),T.push({event:z,listeners:F}))}}if((n&7)===0){e:{if(z=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",z&&t!==Gr&&(Q=t.relatedTarget||t.fromElement)&&(ta(Q)||Q[na]))break e;if((x||z)&&(z=E.window===E?E:(z=E.ownerDocument)?z.defaultView||z.parentWindow:window,x?(Q=t.relatedTarget||t.toElement,x=S,Q=Q?ta(Q):null,Q!==null&&(Re=m(Q),F=Q.tag,Q!==Re||F!==5&&F!==27&&F!==6)&&(Q=null)):(x=null,Q=S),x!==Q)){if(F=rc,A="onMouseLeave",y="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(F=uc,A="onPointerLeave",y="onPointerEnter",v="pointer"),Re=x==null?z:el(x),R=Q==null?z:el(Q),z=new F(A,v+"leave",x,t,E),z.target=Re,z.relatedTarget=R,A=null,ta(E)===S&&(F=new F(y,v+"enter",Q,t,E),F.target=R,F.relatedTarget=Re,A=F),Re=A,x&&Q)n:{for(F=x,y=Q,v=0,R=F;R;R=Ua(R))v++;for(R=0,A=y;A;A=Ua(A))R++;for(;0<v-R;)F=Ua(F),v--;for(;0<R-v;)y=Ua(y),R--;for(;v--;){if(F===y||y!==null&&F===y.alternate)break n;F=Ua(F),y=Ua(y)}F=null}else F=null;x!==null&&Pd(T,z,x,F,!1),Q!==null&&Re!==null&&Pd(T,Re,Q,F,!0)}}e:{if(z=S?el(S):window,x=z.nodeName&&z.nodeName.toLowerCase(),x==="select"||x==="input"&&z.type==="file")var L=vc;else if(pc(z))if(gc)L=Yh;else{L=Bh;var I=Hh}else x=z.nodeName,!x||x.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?S&&Fr(S.elementType)&&(L=vc):L=Vh;if(L&&(L=L(e,S))){hc(T,L,t,E);break e}I&&I(e,z,S),e==="focusout"&&S&&z.type==="number"&&S.memoizedProps.value!=null&&Yr(z,"number",z.value)}switch(I=S?el(S):window,e){case"focusin":(pc(I)||I.contentEditable==="true")&&(da=I,ao=S,sl=null);break;case"focusout":sl=ao=da=null;break;case"mousedown":lo=!0;break;case"contextmenu":case"mouseup":case"dragend":lo=!1,xc(T,t,E);break;case"selectionchange":if(Gh)break;case"keydown":case"keyup":xc(T,t,E)}var B;if(Ir)e:{switch(e){case"compositionstart":var G="onCompositionStart";break e;case"compositionend":G="onCompositionEnd";break e;case"compositionupdate":G="onCompositionUpdate";break e}G=void 0}else fa?dc(e,t)&&(G="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(G="onCompositionStart");G&&(sc&&t.locale!=="ko"&&(fa||G!=="onCompositionStart"?G==="onCompositionEnd"&&fa&&(B=lc()):(st=E,Xr="value"in st?st.value:st.textContent,fa=!0)),I=ar(S,G),0<I.length&&(G=new oc(G,e,null,t,E),T.push({event:G,listeners:I}),B?G.data=B:(B=mc(t),B!==null&&(G.data=B)))),(B=Ch?qh(e,t):Uh(e,t))&&(G=ar(S,"onBeforeInput"),0<G.length&&(I=new oc("onBeforeInput","beforeinput",null,t,E),T.push({event:I,listeners:G}),I.data=B)),Ev(T,e,S,t,E)}Kd(T,n)})}function Nl(e,n,t){return{instance:e,listener:n,currentTarget:t}}function ar(e,n){for(var t=n+"Capture",a=[];e!==null;){var l=e,r=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||r===null||(l=nl(e,t),l!=null&&a.unshift(Nl(e,l,r)),l=nl(e,n),l!=null&&a.push(Nl(e,l,r))),e.tag===3)return a;e=e.return}return[]}function Ua(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Pd(e,n,t,a,l){for(var r=n._reactName,c=[];t!==null&&t!==a;){var d=t,p=d.alternate,S=d.stateNode;if(d=d.tag,p!==null&&p===a)break;d!==5&&d!==26&&d!==27||S===null||(p=S,l?(S=nl(t,r),S!=null&&c.unshift(Nl(t,S,p))):l||(S=nl(t,r),S!=null&&c.push(Nl(t,S,p)))),t=t.return}c.length!==0&&e.push({event:n,listeners:c})}var Dv=/\r\n?/g,Ov=/\u0000|\uFFFD/g;function Id(e){return(typeof e=="string"?e:""+e).replace(Dv,`
`).replace(Ov,"")}function em(e,n){return n=Id(n),Id(e)===n}function lr(){}function ke(e,n,t,a,l,r){switch(t){case"children":typeof a=="string"?n==="body"||n==="textarea"&&a===""||ua(e,a):(typeof a=="number"||typeof a=="bigint")&&n!=="body"&&ua(e,""+a);break;case"className":si(e,"class",a);break;case"tabIndex":si(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":si(e,t,a);break;case"style":nc(e,a,r);break;case"data":if(n!=="object"){si(e,"data",a);break}case"src":case"href":if(a===""&&(n!=="a"||t!=="href")){e.removeAttribute(t);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=di(""+a),e.setAttribute(t,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(t==="formAction"?(n!=="input"&&ke(e,n,"name",l.name,l,null),ke(e,n,"formEncType",l.formEncType,l,null),ke(e,n,"formMethod",l.formMethod,l,null),ke(e,n,"formTarget",l.formTarget,l,null)):(ke(e,n,"encType",l.encType,l,null),ke(e,n,"method",l.method,l,null),ke(e,n,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=di(""+a),e.setAttribute(t,a);break;case"onClick":a!=null&&(e.onclick=lr);break;case"onScroll":a!=null&&ae("scroll",e);break;case"onScrollEnd":a!=null&&ae("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(t=a.__html,t!=null){if(l.children!=null)throw Error(u(60));e.innerHTML=t}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}t=di(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""+a):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":a===!0?e.setAttribute(t,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,a):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(t,a):e.removeAttribute(t);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(t):e.setAttribute(t,a);break;case"popover":ae("beforetoggle",e),ae("toggle",e),ui(e,"popover",a);break;case"xlinkActuate":Fn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Fn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Fn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Fn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Fn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Fn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Fn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Fn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Fn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":ui(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=oh.get(t)||t,ui(e,t,a))}}function Au(e,n,t,a,l,r){switch(t){case"style":nc(e,a,r);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(t=a.__html,t!=null){if(l.children!=null)throw Error(u(60));e.innerHTML=t}}break;case"children":typeof a=="string"?ua(e,a):(typeof a=="number"||typeof a=="bigint")&&ua(e,""+a);break;case"onScroll":a!=null&&ae("scroll",e);break;case"onScrollEnd":a!=null&&ae("scrollend",e);break;case"onClick":a!=null&&(e.onclick=lr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Gs.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(l=t.endsWith("Capture"),n=t.slice(2,l?t.length-7:void 0),r=e[on]||null,r=r!=null?r[t]:null,typeof r=="function"&&e.removeEventListener(n,r,l),typeof a=="function")){typeof r!="function"&&r!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(n,a,l);break e}t in e?e[t]=a:a===!0?e.setAttribute(t,""):ui(e,t,a)}}}function Ie(e,n,t){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ae("error",e),ae("load",e);var a=!1,l=!1,r;for(r in t)if(t.hasOwnProperty(r)){var c=t[r];if(c!=null)switch(r){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,n));default:ke(e,n,r,c,t,null)}}l&&ke(e,n,"srcSet",t.srcSet,t,null),a&&ke(e,n,"src",t.src,t,null);return;case"input":ae("invalid",e);var d=r=c=l=null,p=null,S=null;for(a in t)if(t.hasOwnProperty(a)){var E=t[a];if(E!=null)switch(a){case"name":l=E;break;case"type":c=E;break;case"checked":p=E;break;case"defaultChecked":S=E;break;case"value":r=E;break;case"defaultValue":d=E;break;case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(u(137,n));break;default:ke(e,n,a,E,t,null)}}Js(e,r,d,p,S,c,l,!1),ci(e);return;case"select":ae("invalid",e),a=c=r=null;for(l in t)if(t.hasOwnProperty(l)&&(d=t[l],d!=null))switch(l){case"value":r=d;break;case"defaultValue":c=d;break;case"multiple":a=d;default:ke(e,n,l,d,t,null)}n=r,t=c,e.multiple=!!a,n!=null?oa(e,!!a,n,!1):t!=null&&oa(e,!!a,t,!0);return;case"textarea":ae("invalid",e),r=l=a=null;for(c in t)if(t.hasOwnProperty(c)&&(d=t[c],d!=null))switch(c){case"value":a=d;break;case"defaultValue":l=d;break;case"children":r=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(u(91));break;default:ke(e,n,c,d,t,null)}Is(e,a,l,r),ci(e);return;case"option":for(p in t)if(t.hasOwnProperty(p)&&(a=t[p],a!=null))switch(p){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:ke(e,n,p,a,t,null)}return;case"dialog":ae("beforetoggle",e),ae("toggle",e),ae("cancel",e),ae("close",e);break;case"iframe":case"object":ae("load",e);break;case"video":case"audio":for(a=0;a<Ul.length;a++)ae(Ul[a],e);break;case"image":ae("error",e),ae("load",e);break;case"details":ae("toggle",e);break;case"embed":case"source":case"link":ae("error",e),ae("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(S in t)if(t.hasOwnProperty(S)&&(a=t[S],a!=null))switch(S){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,n));default:ke(e,n,S,a,t,null)}return;default:if(Fr(n)){for(E in t)t.hasOwnProperty(E)&&(a=t[E],a!==void 0&&Au(e,n,E,a,t,void 0));return}}for(d in t)t.hasOwnProperty(d)&&(a=t[d],a!=null&&ke(e,n,d,a,t,null))}function Mv(e,n,t,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,r=null,c=null,d=null,p=null,S=null,E=null;for(x in t){var T=t[x];if(t.hasOwnProperty(x)&&T!=null)switch(x){case"checked":break;case"value":break;case"defaultValue":p=T;default:a.hasOwnProperty(x)||ke(e,n,x,null,a,T)}}for(var z in a){var x=a[z];if(T=t[z],a.hasOwnProperty(z)&&(x!=null||T!=null))switch(z){case"type":r=x;break;case"name":l=x;break;case"checked":S=x;break;case"defaultChecked":E=x;break;case"value":c=x;break;case"defaultValue":d=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(u(137,n));break;default:x!==T&&ke(e,n,z,x,a,T)}}Vr(e,c,d,p,S,E,r,l);return;case"select":x=c=d=z=null;for(r in t)if(p=t[r],t.hasOwnProperty(r)&&p!=null)switch(r){case"value":break;case"multiple":x=p;default:a.hasOwnProperty(r)||ke(e,n,r,null,a,p)}for(l in a)if(r=a[l],p=t[l],a.hasOwnProperty(l)&&(r!=null||p!=null))switch(l){case"value":z=r;break;case"defaultValue":d=r;break;case"multiple":c=r;default:r!==p&&ke(e,n,l,r,a,p)}n=d,t=c,a=x,z!=null?oa(e,!!t,z,!1):!!a!=!!t&&(n!=null?oa(e,!!t,n,!0):oa(e,!!t,t?[]:"",!1));return;case"textarea":x=z=null;for(d in t)if(l=t[d],t.hasOwnProperty(d)&&l!=null&&!a.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:ke(e,n,d,null,a,l)}for(c in a)if(l=a[c],r=t[c],a.hasOwnProperty(c)&&(l!=null||r!=null))switch(c){case"value":z=l;break;case"defaultValue":x=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(u(91));break;default:l!==r&&ke(e,n,c,l,a,r)}Ps(e,z,x);return;case"option":for(var Q in t)if(z=t[Q],t.hasOwnProperty(Q)&&z!=null&&!a.hasOwnProperty(Q))switch(Q){case"selected":e.selected=!1;break;default:ke(e,n,Q,null,a,z)}for(p in a)if(z=a[p],x=t[p],a.hasOwnProperty(p)&&z!==x&&(z!=null||x!=null))switch(p){case"selected":e.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:ke(e,n,p,z,a,x)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var F in t)z=t[F],t.hasOwnProperty(F)&&z!=null&&!a.hasOwnProperty(F)&&ke(e,n,F,null,a,z);for(S in a)if(z=a[S],x=t[S],a.hasOwnProperty(S)&&z!==x&&(z!=null||x!=null))switch(S){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(u(137,n));break;default:ke(e,n,S,z,a,x)}return;default:if(Fr(n)){for(var Re in t)z=t[Re],t.hasOwnProperty(Re)&&z!==void 0&&!a.hasOwnProperty(Re)&&Au(e,n,Re,void 0,a,z);for(E in a)z=a[E],x=t[E],!a.hasOwnProperty(E)||z===x||z===void 0&&x===void 0||Au(e,n,E,z,a,x);return}}for(var y in t)z=t[y],t.hasOwnProperty(y)&&z!=null&&!a.hasOwnProperty(y)&&ke(e,n,y,null,a,z);for(T in a)z=a[T],x=t[T],!a.hasOwnProperty(T)||z===x||z==null&&x==null||ke(e,n,T,z,a,x)}var Tu=null,Du=null;function ir(e){return e.nodeType===9?e:e.ownerDocument}function nm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function tm(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Ou(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Mu=null;function _v(){var e=window.event;return e&&e.type==="popstate"?e===Mu?!1:(Mu=e,!0):(Mu=null,!1)}var am=typeof setTimeout=="function"?setTimeout:void 0,Cv=typeof clearTimeout=="function"?clearTimeout:void 0,lm=typeof Promise=="function"?Promise:void 0,qv=typeof queueMicrotask=="function"?queueMicrotask:typeof lm<"u"?function(e){return lm.resolve(null).then(e).catch(Uv)}:am;function Uv(e){setTimeout(function(){throw e})}function xt(e){return e==="head"}function im(e,n){var t=n,a=0,l=0;do{var r=t.nextSibling;if(e.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(0<a&&8>a){t=a;var c=e.ownerDocument;if(t&1&&Ll(c.documentElement),t&2&&Ll(c.body),t&4)for(t=c.head,Ll(t),c=t.firstChild;c;){var d=c.nextSibling,p=c.nodeName;c[Ia]||p==="SCRIPT"||p==="STYLE"||p==="LINK"&&c.rel.toLowerCase()==="stylesheet"||t.removeChild(c),c=d}}if(l===0){e.removeChild(r),Ql(n);return}l--}else t==="$"||t==="$?"||t==="$!"?l++:a=t.charCodeAt(0)-48;else a=0;t=r}while(t);Ql(n)}function _u(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var t=n;switch(n=n.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":_u(t),Nr(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function Nv(e,n,t,a){for(;e.nodeType===1;){var l=t;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Ia])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var r=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=qn(e.nextSibling),e===null)break}return null}function Lv(e,n,t){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=qn(e.nextSibling),e===null))return null;return e}function Cu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Hv(e,n){var t=e.ownerDocument;if(e.data!=="$?"||t.readyState==="complete")n();else{var a=function(){n(),t.removeEventListener("DOMContentLoaded",a)};t.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function qn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var qu=null;function rm(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}function om(e,n,t){switch(n=ir(t),e){case"html":if(e=n.documentElement,!e)throw Error(u(452));return e;case"head":if(e=n.head,!e)throw Error(u(453));return e;case"body":if(e=n.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function Ll(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Nr(e)}var On=new Map,um=new Set;function rr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var at=q.d;q.d={f:Bv,r:Vv,D:Yv,C:Fv,L:Gv,m:Zv,X:$v,S:Qv,M:Xv};function Bv(){var e=at.f(),n=Ji();return e||n}function Vv(e){var n=aa(e);n!==null&&n.tag===5&&n.type==="form"?Af(n):at.r(e)}var Na=typeof document>"u"?null:document;function sm(e,n,t){var a=Na;if(a&&typeof n=="string"&&n){var l=zn(n);l='link[rel="'+e+'"][href="'+l+'"]',typeof t=="string"&&(l+='[crossorigin="'+t+'"]'),um.has(l)||(um.add(l),e={rel:e,crossOrigin:t,href:n},a.querySelector(l)===null&&(n=a.createElement("link"),Ie(n,"link",e),Qe(n),a.head.appendChild(n)))}}function Yv(e){at.D(e),sm("dns-prefetch",e,null)}function Fv(e,n){at.C(e,n),sm("preconnect",e,n)}function Gv(e,n,t){at.L(e,n,t);var a=Na;if(a&&e&&n){var l='link[rel="preload"][as="'+zn(n)+'"]';n==="image"&&t&&t.imageSrcSet?(l+='[imagesrcset="'+zn(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(l+='[imagesizes="'+zn(t.imageSizes)+'"]')):l+='[href="'+zn(e)+'"]';var r=l;switch(n){case"style":r=La(e);break;case"script":r=Ha(e)}On.has(r)||(e=O({rel:"preload",href:n==="image"&&t&&t.imageSrcSet?void 0:e,as:n},t),On.set(r,e),a.querySelector(l)!==null||n==="style"&&a.querySelector(Hl(r))||n==="script"&&a.querySelector(Bl(r))||(n=a.createElement("link"),Ie(n,"link",e),Qe(n),a.head.appendChild(n)))}}function Zv(e,n){at.m(e,n);var t=Na;if(t&&e){var a=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+zn(a)+'"][href="'+zn(e)+'"]',r=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Ha(e)}if(!On.has(r)&&(e=O({rel:"modulepreload",href:e},n),On.set(r,e),t.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Bl(r)))return}a=t.createElement("link"),Ie(a,"link",e),Qe(a),t.head.appendChild(a)}}}function Qv(e,n,t){at.S(e,n,t);var a=Na;if(a&&e){var l=la(a).hoistableStyles,r=La(e);n=n||"default";var c=l.get(r);if(!c){var d={loading:0,preload:null};if(c=a.querySelector(Hl(r)))d.loading=5;else{e=O({rel:"stylesheet",href:e,"data-precedence":n},t),(t=On.get(r))&&Uu(e,t);var p=c=a.createElement("link");Qe(p),Ie(p,"link",e),p._p=new Promise(function(S,E){p.onload=S,p.onerror=E}),p.addEventListener("load",function(){d.loading|=1}),p.addEventListener("error",function(){d.loading|=2}),d.loading|=4,or(c,n,a)}c={type:"stylesheet",instance:c,count:1,state:d},l.set(r,c)}}}function $v(e,n){at.X(e,n);var t=Na;if(t&&e){var a=la(t).hoistableScripts,l=Ha(e),r=a.get(l);r||(r=t.querySelector(Bl(l)),r||(e=O({src:e,async:!0},n),(n=On.get(l))&&Nu(e,n),r=t.createElement("script"),Qe(r),Ie(r,"link",e),t.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(l,r))}}function Xv(e,n){at.M(e,n);var t=Na;if(t&&e){var a=la(t).hoistableScripts,l=Ha(e),r=a.get(l);r||(r=t.querySelector(Bl(l)),r||(e=O({src:e,async:!0,type:"module"},n),(n=On.get(l))&&Nu(e,n),r=t.createElement("script"),Qe(r),Ie(r,"link",e),t.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(l,r))}}function cm(e,n,t,a){var l=(l=K.current)?rr(l):null;if(!l)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(n=La(t.href),t=la(l).hoistableStyles,a=t.get(n),a||(a={type:"style",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=La(t.href);var r=la(l).hoistableStyles,c=r.get(e);if(c||(l=l.ownerDocument||l,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,c),(r=l.querySelector(Hl(e)))&&!r._p&&(c.instance=r,c.state.loading=5),On.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},On.set(e,t),r||Wv(l,e,t,c.state))),n&&a===null)throw Error(u(528,""));return c}if(n&&a!==null)throw Error(u(529,""));return null;case"script":return n=t.async,t=t.src,typeof t=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ha(t),t=la(l).hoistableScripts,a=t.get(n),a||(a={type:"script",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function La(e){return'href="'+zn(e)+'"'}function Hl(e){return'link[rel="stylesheet"]['+e+"]"}function fm(e){return O({},e,{"data-precedence":e.precedence,precedence:null})}function Wv(e,n,t,a){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?a.loading=1:(n=e.createElement("link"),a.preload=n,n.addEventListener("load",function(){return a.loading|=1}),n.addEventListener("error",function(){return a.loading|=2}),Ie(n,"link",t),Qe(n),e.head.appendChild(n))}function Ha(e){return'[src="'+zn(e)+'"]'}function Bl(e){return"script[async]"+e}function dm(e,n,t){if(n.count++,n.instance===null)switch(n.type){case"style":var a=e.querySelector('style[data-href~="'+zn(t.href)+'"]');if(a)return n.instance=a,Qe(a),a;var l=O({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Qe(a),Ie(a,"style",l),or(a,t.precedence,e),n.instance=a;case"stylesheet":l=La(t.href);var r=e.querySelector(Hl(l));if(r)return n.state.loading|=4,n.instance=r,Qe(r),r;a=fm(t),(l=On.get(l))&&Uu(a,l),r=(e.ownerDocument||e).createElement("link"),Qe(r);var c=r;return c._p=new Promise(function(d,p){c.onload=d,c.onerror=p}),Ie(r,"link",a),n.state.loading|=4,or(r,t.precedence,e),n.instance=r;case"script":return r=Ha(t.src),(l=e.querySelector(Bl(r)))?(n.instance=l,Qe(l),l):(a=t,(l=On.get(r))&&(a=O({},t),Nu(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),Qe(l),Ie(l,"link",a),e.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(u(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(a=n.instance,n.state.loading|=4,or(a,t.precedence,e));return n.instance}function or(e,n,t){for(var a=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,r=l,c=0;c<a.length;c++){var d=a[c];if(d.dataset.precedence===n)r=d;else if(r!==l)break}r?r.parentNode.insertBefore(e,r.nextSibling):(n=t.nodeType===9?t.head:t,n.insertBefore(e,n.firstChild))}function Uu(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Nu(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var ur=null;function mm(e,n,t){if(ur===null){var a=new Map,l=ur=new Map;l.set(t,a)}else l=ur,a=l.get(t),a||(a=new Map,l.set(t,a));if(a.has(e))return a;for(a.set(e,null),t=t.getElementsByTagName(e),l=0;l<t.length;l++){var r=t[l];if(!(r[Ia]||r[tn]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var c=r.getAttribute(n)||"";c=e+c;var d=a.get(c);d?d.push(r):a.set(c,[r])}}return a}function pm(e,n,t){e=e.ownerDocument||e,e.head.insertBefore(t,n==="title"?e.querySelector("head > title"):null)}function Kv(e,n,t){if(t===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function hm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Vl=null;function Jv(){}function Pv(e,n,t){if(Vl===null)throw Error(u(475));var a=Vl;if(n.type==="stylesheet"&&(typeof t.media!="string"||matchMedia(t.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var l=La(t.href),r=e.querySelector(Hl(l));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=sr.bind(a),e.then(a,a)),n.state.loading|=4,n.instance=r,Qe(r);return}r=e.ownerDocument||e,t=fm(t),(l=On.get(l))&&Uu(t,l),r=r.createElement("link"),Qe(r);var c=r;c._p=new Promise(function(d,p){c.onload=d,c.onerror=p}),Ie(r,"link",t),n.instance=r}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(a.count++,n=sr.bind(a),e.addEventListener("load",n),e.addEventListener("error",n))}}function Iv(){if(Vl===null)throw Error(u(475));var e=Vl;return e.stylesheets&&e.count===0&&Lu(e,e.stylesheets),0<e.count?function(n){var t=setTimeout(function(){if(e.stylesheets&&Lu(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(t)}}:null}function sr(){if(this.count--,this.count===0){if(this.stylesheets)Lu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var cr=null;function Lu(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,cr=new Map,n.forEach(eg,e),cr=null,sr.call(e))}function eg(e,n){if(!(n.state.loading&4)){var t=cr.get(e);if(t)var a=t.get(null);else{t=new Map,cr.set(e,t);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<l.length;r++){var c=l[r];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(t.set(c.dataset.precedence,c),a=c)}a&&t.set(null,a)}l=n.instance,c=l.getAttribute("data-precedence"),r=t.get(c)||a,r===a&&t.set(null,l),t.set(c,l),this.count++,a=sr.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),r?r.parentNode.insertBefore(l,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),n.state.loading|=4}}var Yl={$$typeof:ue,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function ng(e,n,t,a,l,r,c,d){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=_r(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_r(0),this.hiddenUpdates=_r(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=r,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=d,this.incompleteTransitions=new Map}function vm(e,n,t,a,l,r,c,d,p,S,E,T){return e=new ng(e,n,t,c,d,p,S,T),n=1,r===!0&&(n|=24),r=gn(3,null,null,n),e.current=r,r.stateNode=e,n=yo(),n.refCount++,e.pooledCache=n,n.refCount++,r.memoizedState={element:a,isDehydrated:t,cache:n},So(r),e}function gm(e){return e?(e=va,e):va}function bm(e,n,t,a,l,r){l=gm(l),a.context===null?a.context=l:a.pendingContext=l,a=dt(n),a.payload={element:t},r=r===void 0?null:r,r!==null&&(a.callback=r),t=mt(e,a,n),t!==null&&(Rn(t,e,n),bl(t,e,n))}function ym(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Hu(e,n){ym(e,n),(e=e.alternate)&&ym(e,n)}function wm(e){if(e.tag===13){var n=ha(e,67108864);n!==null&&Rn(n,e,67108864),Hu(e,67108864)}}var fr=!0;function tg(e,n,t,a){var l=j.T;j.T=null;var r=q.p;try{q.p=2,Bu(e,n,t,a)}finally{q.p=r,j.T=l}}function ag(e,n,t,a){var l=j.T;j.T=null;var r=q.p;try{q.p=8,Bu(e,n,t,a)}finally{q.p=r,j.T=l}}function Bu(e,n,t,a){if(fr){var l=Vu(a);if(l===null)ju(e,n,a,dr,t),Rm(e,a);else if(ig(l,e,n,t,a))a.stopPropagation();else if(Rm(e,a),n&4&&-1<lg.indexOf(e)){for(;l!==null;){var r=aa(l);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var c=qt(r.pendingLanes);if(c!==0){var d=r;for(d.pendingLanes|=2,d.entangledLanes|=2;c;){var p=1<<31-hn(c);d.entanglements[1]|=p,c&=~p}Yn(r),(pe&6)===0&&(Wi=Nn()+500,ql(0))}}break;case 13:d=ha(r,2),d!==null&&Rn(d,r,2),Ji(),Hu(r,2)}if(r=Vu(a),r===null&&ju(e,n,a,dr,t),r===l)break;l=r}l!==null&&a.stopPropagation()}else ju(e,n,a,null,t)}}function Vu(e){return e=Zr(e),Yu(e)}var dr=null;function Yu(e){if(dr=null,e=ta(e),e!==null){var n=m(e);if(n===null)e=null;else{var t=n.tag;if(t===13){if(e=g(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return dr=e,null}function km(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Fp()){case Cs:return 2;case qs:return 8;case li:case Gp:return 32;case Us:return 268435456;default:return 32}default:return 32}}var Fu=!1,Et=null,jt=null,At=null,Fl=new Map,Gl=new Map,Tt=[],lg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Rm(e,n){switch(e){case"focusin":case"focusout":Et=null;break;case"dragenter":case"dragleave":jt=null;break;case"mouseover":case"mouseout":At=null;break;case"pointerover":case"pointerout":Fl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gl.delete(n.pointerId)}}function Zl(e,n,t,a,l,r){return e===null||e.nativeEvent!==r?(e={blockedOn:n,domEventName:t,eventSystemFlags:a,nativeEvent:r,targetContainers:[l]},n!==null&&(n=aa(n),n!==null&&wm(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function ig(e,n,t,a,l){switch(n){case"focusin":return Et=Zl(Et,e,n,t,a,l),!0;case"dragenter":return jt=Zl(jt,e,n,t,a,l),!0;case"mouseover":return At=Zl(At,e,n,t,a,l),!0;case"pointerover":var r=l.pointerId;return Fl.set(r,Zl(Fl.get(r)||null,e,n,t,a,l)),!0;case"gotpointercapture":return r=l.pointerId,Gl.set(r,Zl(Gl.get(r)||null,e,n,t,a,l)),!0}return!1}function Sm(e){var n=ta(e.target);if(n!==null){var t=m(n);if(t!==null){if(n=t.tag,n===13){if(n=g(t),n!==null){e.blockedOn=n,Pp(e.priority,function(){if(t.tag===13){var a=kn();a=Cr(a);var l=ha(t,a);l!==null&&Rn(l,t,a),Hu(t,a)}});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function mr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Vu(e.nativeEvent);if(t===null){t=e.nativeEvent;var a=new t.constructor(t.type,t);Gr=a,t.target.dispatchEvent(a),Gr=null}else return n=aa(t),n!==null&&wm(n),e.blockedOn=t,!1;n.shift()}return!0}function zm(e,n,t){mr(e)&&t.delete(n)}function rg(){Fu=!1,Et!==null&&mr(Et)&&(Et=null),jt!==null&&mr(jt)&&(jt=null),At!==null&&mr(At)&&(At=null),Fl.forEach(zm),Gl.forEach(zm)}function pr(e,n){e.blockedOn===n&&(e.blockedOn=null,Fu||(Fu=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,rg)))}var hr=null;function xm(e){hr!==e&&(hr=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){hr===e&&(hr=null);for(var n=0;n<e.length;n+=3){var t=e[n],a=e[n+1],l=e[n+2];if(typeof a!="function"){if(Yu(a||t)===null)continue;break}var r=aa(t);r!==null&&(e.splice(n,3),n-=3,Yo(r,{pending:!0,data:l,method:t.method,action:a},a,l))}}))}function Ql(e){function n(p){return pr(p,e)}Et!==null&&pr(Et,e),jt!==null&&pr(jt,e),At!==null&&pr(At,e),Fl.forEach(n),Gl.forEach(n);for(var t=0;t<Tt.length;t++){var a=Tt[t];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Tt.length&&(t=Tt[0],t.blockedOn===null);)Sm(t),t.blockedOn===null&&Tt.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(a=0;a<t.length;a+=3){var l=t[a],r=t[a+1],c=l[on]||null;if(typeof r=="function")c||xm(t);else if(c){var d=null;if(r&&r.hasAttribute("formAction")){if(l=r,c=r[on]||null)d=c.formAction;else if(Yu(l)!==null)continue}else d=c.action;typeof d=="function"?t[a+1]=d:(t.splice(a,3),a-=3),xm(t)}}}function Gu(e){this._internalRoot=e}vr.prototype.render=Gu.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(u(409));var t=n.current,a=kn();bm(t,a,e,n,null,null)},vr.prototype.unmount=Gu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;bm(e.current,2,null,e,null,null),Ji(),n[na]=null}};function vr(e){this._internalRoot=e}vr.prototype.unstable_scheduleHydration=function(e){if(e){var n=Vs();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Tt.length&&n!==0&&n<Tt[t].priority;t++);Tt.splice(t,0,e),t===0&&Sm(e)}};var Em=i.version;if(Em!=="19.1.0")throw Error(u(527,Em,"19.1.0"));q.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=k(n),e=e!==null?b(e):null,e=e===null?null:e.stateNode,e};var og={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:j,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gr.isDisabled&&gr.supportsFiber)try{Ka=gr.inject(og),pn=gr}catch{}}return Xl.createRoot=function(e,n){if(!f(e))throw Error(u(299));var t=!1,a="",l=Yf,r=Ff,c=Gf,d=null;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(c=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(d=n.unstable_transitionCallbacks)),n=vm(e,1,!1,null,null,t,a,l,r,c,d,null),e[na]=n.current,Eu(e),new Gu(n)},Xl.hydrateRoot=function(e,n,t){if(!f(e))throw Error(u(299));var a=!1,l="",r=Yf,c=Ff,d=Gf,p=null,S=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(p=t.unstable_transitionCallbacks),t.formState!==void 0&&(S=t.formState)),n=vm(e,1,!0,n,t??null,a,l,r,c,d,p,S),n.context=gm(null),t=n.current,a=kn(),a=Cr(a),l=dt(a),l.callback=null,mt(t,l,a),t=a,n.current.lanes=t,Pa(n,t),Yn(n),e[na]=n.current,Eu(e),new vr(n)},Xl.version="19.1.0",Xl}var Um;function yg(){if(Um)return $u.exports;Um=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(i){console.error(i)}}return s(),$u.exports=bg(),$u.exports}var wg=yg();const kg=kp(wg);class Rg extends ms.Component{constructor(o){super(o);br(this,"container");br(this,"player",null);br(this,"isLoading",!1);this.container=ms.createRef()}componentDidMount(){this.player=window.RufflePlayer.newest().createPlayer(),this.player.id="player",this.player.addEventListener("loadedmetadata",()=>{this.props.onLoadedMetadata&&this.props.onLoadedMetadata(this.player.ruffle().metadata)}),this.isLoading=!1,this.container.current.appendChild(this.player)}componentWillUnmount(){var o;(o=this.player)==null||o.remove(),this.player=null,this.isLoading=!1}render(){return N.jsx("div",{id:this.props.id,ref:this.container,onDragEnter:this.props.onDragEnter,onDragLeave:this.props.onDragLeave,onDragOver:this.props.onDragOver,onDrop:this.props.onDragDrop,children:this.props.children})}reload(){var o;this.isLoading||(this.isLoading=!0,(o=this.player)==null||o.ruffle().reload().finally(()=>{this.isLoading=!1}))}loadUrl(o,u){var f;this.isLoading||(this.isLoading=!0,(f=this.player)==null||f.ruffle().load({url:o,...this.props.baseConfig,...u}).finally(()=>{this.isLoading=!1}))}loadFile(o){this.isLoading||(this.isLoading=!0,new Response(o).arrayBuffer().then(u=>{var f;return(f=this.player)==null?void 0:f.ruffle().load({data:u,...this.props.baseConfig})}).finally(()=>{this.isLoading=!1}))}}const Sg=""+new URL("../logo.svg",import.meta.url).href,Nm={Animation:"Animations",Game:"Games"};function zg({sampleSelectionInput:s,selectedSample:i,setSelectedSample:o,setSelectedFilename:u,onSelectUrl:f}){const[m,g]=en.useState([]),w=b=>{const O=b.target,H=parseInt(O.value,10);m[H]&&k(m[H])},k=en.useCallback(b=>{f(b.location,b.config??{}),o(b),u(null)},[f,u,o]);return en.useEffect(()=>{(async()=>{const b=await fetch("swfs.json");if(b.ok){const O=await b.json();g(O.swfs),O.swfs.length>0&&k(O.swfs[0])}})()},[k]),N.jsxs("div",{id:"sample-swfs-container",className:m.length==0?"hidden":"",children:[N.jsx("span",{id:"sample-swfs-label",children:"Sample SWF:"}),N.jsxs("select",{id:"sample-swfs","aria-describedby":"sample-swfs-label",onChange:w,ref:s,children:[m.map((b,O)=>N.jsx(en.Fragment,{children:b.type==null&&N.jsx("option",{value:O,children:b.title})},O)),Object.keys(Nm).map(b=>N.jsx("optgroup",{label:Nm[b],children:m.map((O,H)=>N.jsx(en.Fragment,{children:O.type==b&&N.jsx("option",{value:H,children:O.title})},H))},b))]}),N.jsxs("div",{id:"author-container",className:i!=null&&i.author?"":"hidden",children:[N.jsx("span",{children:"Author: "}),N.jsx("a",{href:i==null?void 0:i.authorLink,target:"_blank",id:"author",children:i==null?void 0:i.author})]})]})}function xg({allowUrlLoading:s,allowSampleSwfs:i,onToggleMetadata:o,onReloadMovie:u,onSelectUrl:f,onSelectFile:m,selectedFilename:g,setSelectedFilename:w,onFileDragLeave:k,onFileDragOver:b,onFileDragDrop:O}){const H=en.useRef(null),$=en.useRef(null),X=en.useRef(null),[le,oe]=en.useState(null),be=()=>{var de;(de=H.current)==null||de.click()},qe=de=>{f(de,{}),w(null),oe(null),X.current&&(X.current.selectedIndex=-1)},Ye=de=>{m(de),oe(null),w(de.name),X.current&&(X.current.selectedIndex=-1)},ue=de=>{var ye;de.preventDefault(),(ye=$.current)!=null&&ye.value&&qe($.current.value)},ne=de=>{const ye=de.target;ye!=null&&ye.files&&(ye==null?void 0:ye.files.length)>0&&ye.files[0]&&Ye(ye.files[0])},W=()=>{confirm("Reload the current SWF?")&&u()},Ue=navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPhone/i)||navigator.platform==="MacIntel"&&typeof navigator.standalone<"u";return en.useEffect(()=>{g!=null&&(oe(null),X.current&&(X.current.selectedIndex=-1))},[g]),N.jsxs("div",{id:"nav",children:[N.jsx("a",{id:"logo-container",href:"https://ruffle.rs/",target:"_blank",children:N.jsx("img",{className:"logo",src:Sg,alt:"Ruffle"})}),N.jsxs("div",{className:"select-container",children:[N.jsxs("form",{id:"web-url-container",onSubmit:ue,hidden:!s,children:[N.jsx("input",{id:"web-url",name:"web-url",type:"text",placeholder:"URL of a .swf file on the web",ref:$}),N.jsx("button",{id:"web-form-submit",type:"submit",children:"Load"})]}),N.jsxs("div",{id:"local-file-container",onDragLeave:k,onDragOver:b,onDrop:O,children:[N.jsx("span",{id:"local-file-static-label",onClick:be,children:"Local SWF:"}),N.jsx("input",{type:"file",accept:Ue?void 0:".swf,.spl",id:"local-file","aria-describedby":"local-file-static-label",ref:H,onChange:ne}),N.jsx("button",{id:"local-file-label",onClick:be,children:"Select File"}),N.jsx("label",{id:"local-file-name",htmlFor:"local-file",children:g??"No file selected."})]}),i&&N.jsx(zg,{onSelectUrl:f,selectedSample:le,setSelectedFilename:w,setSelectedSample:oe,sampleSelectionInput:X})]}),N.jsxs("div",{children:[N.jsx("svg",{id:"toggle-info",width:"20px",viewBox:"0 0 416.979 416.979",onClick:o,children:N.jsx("path",{fill:"white",d:"M356.004 61.156c-81.37-81.47-213.377-81.551-294.848-.182-81.47 81.371-81.552 213.379-.181 294.85 81.369 81.47 213.378 81.551 294.849.181 81.469-81.369 81.551-213.379.18-294.849zM237.6 340.786a5.821 5.821 0 0 1-5.822 5.822h-46.576a5.821 5.821 0 0 1-5.822-5.822V167.885a5.821 5.821 0 0 1 5.822-5.822h46.576a5.82 5.82 0 0 1 5.822 5.822v172.901zm-29.11-202.885c-18.618 0-33.766-15.146-33.766-33.765 0-18.617 15.147-33.766 33.766-33.766s33.766 15.148 33.766 33.766c0 18.619-15.149 33.765-33.766 33.765z"})}),N.jsx("svg",{id:"reload-swf",width:"20px",viewBox:"0 0 489.711 489.711",onClick:W,children:N.jsx("path",{fill:"white",d:"M112.156 97.111c72.3-65.4 180.5-66.4 253.8-6.7l-58.1 2.2c-7.5.3-13.3 6.5-13 14 .3 7.3 6.3 13 13.5 13h.5l89.2-3.3c7.3-.3 13-6.2 13-13.5v-1.6l-3.3-88.2c-.3-7.5-6.6-13.3-14-13-7.5.3-13.3 6.5-13 14l2.1 55.3c-36.3-29.7-81-46.9-128.8-49.3-59.2-3-116.1 17.3-160 57.1-60.4 54.7-86 137.9-66.8 217.1 1.5 6.2 7 10.3 13.1 10.3 1.1 0 2.1-.1 3.2-.4 7.2-1.8 11.7-9.1 9.9-16.3-16.8-69.6 5.6-142.7 58.7-190.7zm350.3 98.4c-1.8-7.2-9.1-11.7-16.3-9.9-7.2 1.8-11.7 9.1-9.9 16.3 16.9 69.6-5.6 142.7-58.7 190.7-37.3 33.7-84.1 50.3-130.7 50.3-44.5 0-88.9-15.1-124.7-44.9l58.8-5.3c7.4-.7 12.9-7.2 12.2-14.7s-7.2-12.9-14.7-12.2l-88.9 8c-7.4.7-12.9 7.2-12.2 14.7l8 88.9c.6 7 6.5 12.3 13.4 12.3.4 0 .8 0 1.2-.1 7.4-.7 12.9-7.2 12.2-14.7l-4.8-54.1c36.3 29.4 80.8 46.5 128.3 48.9 3.8.2 7.6.3 11.3.3 55.1 0 107.5-20.2 148.7-57.4 60.4-54.7 86-137.8 66.8-217.1z"})})]})]})}const Eg={1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9.0",10:"10.0/10.1",11:"10.2",12:"10.3",13:"11.0",14:"11.1",15:"11.2",16:"11.3",17:"11.4",18:"11.5",19:"11.6",20:"11.7",21:"11.8",22:"11.9",23:"12",24:"13",25:"14",26:"15",27:"16",28:"17",29:"18",30:"19",31:"20",32:"21",33:"22",34:"23",35:"24",36:"25",37:"26",38:"27",39:"28",40:"29",41:"30",42:"31",43:"32"};function jg({visible:s,metadata:i}){return N.jsxs("div",{id:"info-container",className:s?"":"hidden",children:[N.jsxs("div",{children:[N.jsx("span",{children:"Uncompressed Length"}),N.jsxs("span",{id:"uncompressedLength",children:[((i==null?void 0:i.uncompressedLength)??0)>>10,"Kb"]})]}),N.jsxs("div",{children:[N.jsx("span",{children:"SWF Version"}),N.jsx("span",{id:"swfVersion",children:i==null?void 0:i.swfVersion})]}),N.jsxs("div",{children:[N.jsx("span",{children:"FP Version"}),N.jsx("span",{id:"flashVersion",children:i?Eg[i.swfVersion]??"Unknown":""})]}),N.jsxs("div",{children:[N.jsx("span",{children:"ActionScript 3"}),N.jsx("span",{id:"isActionScript3",children:i!=null&&i.isActionScript3?"true":"false"})]}),N.jsxs("div",{children:[N.jsx("span",{children:"Total Frames"}),N.jsx("span",{id:"numFrames",children:i==null?void 0:i.numFrames})]}),N.jsxs("div",{children:[N.jsx("span",{children:"Frame Rate"}),N.jsx("span",{id:"frameRate",children:i==null?void 0:i.frameRate})]}),N.jsxs("div",{children:[N.jsx("span",{children:"SWF Width"}),N.jsx("span",{id:"width",children:i==null?void 0:i.width})]}),N.jsxs("div",{children:[N.jsx("span",{children:"SWF Height"}),N.jsx("span",{id:"height",children:i==null?void 0:i.height})]}),N.jsxs("div",{children:[N.jsx("span",{children:"SWF Background Color"}),N.jsx("span",{id:"backgroundColor",style:{backgroundColor:(i==null?void 0:i.backgroundColor)??void 0}})]})]})}function Ag({ruffleBaseConfig:s,allowUrlLoading:i,allowSampleSwfs:o}){const[u,f]=en.useState(null),[m,g]=en.useState(!1),[w,k]=en.useState(null),[b,O]=en.useState(!1),H=en.useRef(null),$=()=>{g(!m)},X=()=>{var ne;(ne=H.current)==null||ne.reload()},le=en.useCallback((ne,W)=>{var Ue;(Ue=H.current)==null||Ue.loadUrl(ne,W)},[]),oe=ne=>{var W;(W=H.current)==null||W.loadFile(ne)},be=ne=>{ne.stopPropagation(),ne.preventDefault()},qe=ne=>{ne.stopPropagation(),ne.preventDefault(),O(!1)},Ye=ne=>{ne.stopPropagation(),ne.preventDefault(),O(!0)},ue=ne=>{var W;ne.stopPropagation(),ne.preventDefault(),O(!1),ne.dataTransfer&&(k(ne.dataTransfer.files[0].name),(W=H.current)==null||W.loadFile(ne.dataTransfer.files[0]))};return N.jsxs(N.Fragment,{children:[N.jsx(xg,{allowUrlLoading:i,allowSampleSwfs:o,onToggleMetadata:$,onReloadMovie:X,onSelectUrl:le,onSelectFile:oe,selectedFilename:w,setSelectedFilename:k,onFileDragLeave:qe,onFileDragOver:Ye,onFileDragDrop:ue}),N.jsxs("div",{id:"main",className:m?"info-container-shown":"",children:[N.jsx(Rg,{id:"player-container","aria-label":"Select a demo or drag an SWF",onLoadedMetadata:f,ref:H,onDragEnter:be,onDragLeave:qe,onDragOver:Ye,onDragDrop:ue,baseConfig:s,children:N.jsx("div",{id:"overlay",className:b?"drag":""})}),N.jsx(jg,{visible:m,metadata:u})]})]})}class Ya{constructor(i,o,u,f,m){this.major=i,this.minor=o,this.patch=u,this.prIdent=f,this.buildIdent=m}static fromSemver(i){const o=i.split("+"),u=o[0].split("-"),f=u[0].split("."),m=parseInt(f[0],10);let g=0,w=0,k=null,b=null;return f[1]!==void 0&&(g=parseInt(f[1],10)),f[2]!==void 0&&(w=parseInt(f[2],10)),u[1]!==void 0&&(k=u[1].split(".")),o[1]!==void 0&&(b=o[1].split(".")),new Ya(m,g,w,k,b)}isCompatibleWith(i){return this.major!==0&&this.major===i.major||this.major===0&&i.major===0&&this.minor!==0&&this.minor===i.minor||this.major===0&&i.major===0&&this.minor===0&&i.minor===0&&this.patch!==0&&this.patch===i.patch}hasPrecedenceOver(i){if(this.major>i.major)return!0;if(this.major<i.major)return!1;if(this.minor>i.minor)return!0;if(this.minor<i.minor)return!1;if(this.patch>i.patch)return!0;if(this.patch<i.patch)return!1;if(this.prIdent===null&&i.prIdent!==null)return!0;if(this.prIdent!==null&&i.prIdent===null)return!1;if(this.prIdent!==null&&i.prIdent!==null){const o=/^[0-9]*$/;for(let u=0;u<this.prIdent.length&&u<i.prIdent.length;u+=1){const f=o.test(i.prIdent[u]),m=o.test(this.prIdent[u]);if(!m&&f)return!0;if(m&&f){const g=parseInt(this.prIdent[u],10),w=parseInt(i.prIdent[u],10);if(g>w)return!0;if(g<w)return!1}else{if(m&&!f)return!1;if(!m&&!f){if(this.prIdent[u]>i.prIdent[u])return!0;if(this.prIdent[u]<i.prIdent[u])return!1}}}if(this.prIdent.length>i.prIdent.length)return!0;if(this.prIdent.length<i.prIdent.length)return!1}if(this.buildIdent!==null&&i.buildIdent===null)return!0;if(this.buildIdent===null&&i.buildIdent!==null)return!1;if(this.buildIdent!==null&&i.buildIdent!==null){const o=/^[0-9]*$/;for(let u=0;u<this.buildIdent.length&&u<i.buildIdent.length;u+=1){const f=o.test(this.buildIdent[u]),m=o.test(i.buildIdent[u]);if(!f&&m)return!0;if(f&&m){const g=parseInt(this.buildIdent[u],10),w=parseInt(i.buildIdent[u],10);if(g>w)return!0;if(g<w)return!1}else{if(f&&!m)return!1;if(!f&&!m){if(this.buildIdent[u]>i.buildIdent[u])return!0;if(this.buildIdent[u]<i.buildIdent[u])return!1}}}return this.buildIdent.length>i.buildIdent.length}return!1}isEqual(i){return this.major===i.major&&this.minor===i.minor&&this.patch===i.patch}isStableOrCompatiblePrerelease(i){return i.prIdent===null?!0:this.major===i.major&&this.minor===i.minor&&this.patch===i.patch}}class As{constructor(i){this.requirements=i}satisfiedBy(i){for(const o of this.requirements){let u=!0;for(const{comparator:f,version:m}of o)u=u&&m.isStableOrCompatiblePrerelease(i),f===""||f==="="?u=u&&m.isEqual(i):f===">"?u=u&&i.hasPrecedenceOver(m):f===">="?u=u&&(i.hasPrecedenceOver(m)||m.isEqual(i)):f==="<"?u=u&&m.hasPrecedenceOver(i):f==="<="?u=u&&(m.hasPrecedenceOver(i)||m.isEqual(i)):f==="^"&&(u=u&&m.isCompatibleWith(i));if(u)return!0}return!1}static fromRequirementString(i){const o=i.split(" ");let u=[];const f=[];for(const m of o)if(m==="||")u.length>0&&(f.push(u),u=[]);else if(m.length>0){const g=/[0-9]/.exec(m);if(g){const w=m.slice(0,g.index).trim(),k=Ya.fromSemver(m.slice(g.index).trim());u.push({comparator:w,version:k})}}return u.length>0&&f.push(u),new As(f)}}class Lm{constructor(i){var o;this.sources=(i==null?void 0:i.sources)||{},this.config=(i==null?void 0:i.config)||{},this.invoked=(i==null?void 0:i.invoked)||!1,this.newestName=(i==null?void 0:i.newestName)||null,(o=i==null?void 0:i.superseded)==null||o.call(i),document.readyState==="loading"?document.addEventListener("readystatechange",this.init.bind(this)):window.setTimeout(this.init.bind(this),0)}get version(){return"0.1.0"}newestSourceName(){let i=null,o=Ya.fromSemver("0.0.0");for(const u in this.sources)if(Object.prototype.hasOwnProperty.call(this.sources,u)){const f=Ya.fromSemver(this.sources[u].version);f.hasPrecedenceOver(o)&&(i=u,o=f)}return i}init(){if(!this.invoked){if(this.invoked=!0,this.newestName=this.newestSourceName(),this.newestName===null)throw new Error("No registered Ruffle source!");("polyfills"in this.config?this.config.polyfills:!0)!==!1&&this.sources[this.newestName].polyfill()}}newest(){const i=this.newestSourceName();return i!==null?this.sources[i]:null}satisfying(i){const o=As.fromRequirementString(i);let u=null;for(const f in this.sources)if(Object.prototype.hasOwnProperty.call(this.sources,f)){const m=Ya.fromSemver(this.sources[f].version);o.satisfiedBy(m)&&(u=this.sources[f])}return u}localCompatible(){return this.sources.local!==void 0?this.satisfying("^"+this.sources.local.version):this.newest()}local(){return this.sources.local!==void 0?this.satisfying("="+this.sources.local.version):this.newest()}superseded(){this.invoked=!0}}const Mn={versionNumber:"0.1.0",versionName:"nightly 2025-04-05",versionChannel:"nightly",buildDate:"2025-04-05T00:06:44.080Z",commitHash:"0c72ed3415a9a55c074abb77bf00e700cdeae5a1"};var Fa;(function(s){s[s.HaveNothing=0]="HaveNothing",s[s.Loading=1]="Loading",s[s.Loaded=2]="Loaded"})(Fa||(Fa={}));var Ba={},yr={},It={},Ju={},Hm;function Tg(){return Hm||(Hm=1,Object.defineProperty(Ju,"__esModule",{value:!0})),Ju}var Pu={},Bm;function Dg(){return Bm||(Bm=1,Object.defineProperty(Pu,"__esModule",{value:!0})),Pu}var Iu={},Vm;function Og(){return Vm||(Vm=1,Object.defineProperty(Iu,"__esModule",{value:!0})),Iu}var es={},Ym;function Mg(){return Ym||(Ym=1,Object.defineProperty(es,"__esModule",{value:!0})),es}var ns={},Fm;function _g(){return Fm||(Fm=1,Object.defineProperty(ns,"__esModule",{value:!0})),ns}var wr={},Gm;function Cg(){if(Gm)return wr;Gm=1,Object.defineProperty(wr,"__esModule",{value:!0}),wr.classnames=m;const s=g=>Object.entries(g).map(([w,k])=>k&&w),i=g=>!!g,o=(g,w,k)=>k.indexOf(g)===w,u=[];function f(g){return g?typeof g=="string"?[g]:Array.isArray(g)?g.flatMap(f).filter(i):s(g).filter(i):u}function m(g){const w=f(g).filter(o);return w.length>0?w.join(" "):void 0}return wr}var Zm;function qg(){return Zm||(Zm=1,function(s){var i=It&&It.__createBinding||(Object.create?function(u,f,m,g){g===void 0&&(g=m);var w=Object.getOwnPropertyDescriptor(f,m);(!w||("get"in w?!f.__esModule:w.writable||w.configurable))&&(w={enumerable:!0,get:function(){return f[m]}}),Object.defineProperty(u,g,w)}:function(u,f,m,g){g===void 0&&(g=m),u[g]=f[m]}),o=It&&It.__exportStar||function(u,f){for(var m in u)m!=="default"&&!Object.prototype.hasOwnProperty.call(f,m)&&i(f,u,m)};Object.defineProperty(s,"__esModule",{value:!0}),o(Tg(),s),o(Dg(),s),o(Og(),s),o(Mg(),s),o(_g(),s),o(Cg(),s)}(It)),It}var Qm;function Rp(){if(Qm)return yr;Qm=1,Object.defineProperty(yr,"__esModule",{value:!0}),yr.setAttributes=u;const s=qg();function i(f,m){for(const g of Object.keys(f))g in m&&(m[g]=f[g])}const o=new RegExp("^on\\p{Lu}","u");function u(f,m){for(const g of Object.keys(m)){if(g==="__source"||g==="__self"||g==="tsxTag")continue;const w=m[g];if(g==="class"){const k=(0,s.classnames)(w);k&&f.setAttribute(g,k)}else if(g==="ref")w.current=f;else if(o.test(g)){const k=g.replace(/Capture$/,""),b=g!==k,O=k.toLowerCase().substring(2);f.addEventListener(O,w,b)}else g==="style"&&typeof w!="string"?i(w,f.style):g==="dangerouslySetInnerHTML"?f.innerHTML=w:w===!0?f.setAttribute(g,g):(w||w===0||w==="")&&f.setAttribute(g,w.toString())}}return yr}var Va={},$m;function Sp(){if($m)return Va;$m=1,Object.defineProperty(Va,"__esModule",{value:!0}),Va.applyChildren=i,Va.createDomElement=o,Va.applyTsxTag=u;function s(f,m){m instanceof Element?f.appendChild(m):typeof m=="string"||typeof m=="number"?f.appendChild(document.createTextNode(m.toString())):console.warn("Unknown type to append: ",m)}function i(f,m){for(const g of m)!g&&g!==0||(Array.isArray(g)?i(f,g):s(f,g))}function o(f,m){const g=m!=null&&m.is?{is:m.is}:void 0;return m!=null&&m.xmlns?document.createElementNS(m.xmlns,f,g):document.createElement(f,g)}function u(f,m){let g=f,w=m;return w&&"tsxTag"in w&&(g=w.tsxTag,!w.is&&f.includes("-")&&(w={...w,is:f})),{finalTag:g,finalAttrs:w}}return Va}var Xm;function Ts(){if(Xm)return Ba;Xm=1,Object.defineProperty(Ba,"__esModule",{value:!0}),Ba.jsx=o,Ba.jsxs=o,Ba.jsxDEV=o;const s=Rp(),i=Sp();function o(u,f){if(typeof u=="function")return u(f);const{children:m,...g}=f,{finalTag:w,finalAttrs:k}=(0,i.applyTsxTag)(u,g),b=(0,i.createDomElement)(w,k);return(0,s.setAttributes)(b,k),(0,i.applyChildren)(b,[m]),b}return Ba}var D=Ts(),$a;(function(s){s.On="on",s.Off="off",s.Auto="auto"})($a||($a={}));var xr;(function(s){s.Off="off",s.Fullscreen="fullscreen",s.On="on"})(xr||(xr={}));var ei;(function(s){s.Visible="visible",s.Hidden="hidden"})(ei||(ei={}));var Er;(function(s){s.Error="error",s.Warn="warn",s.Info="info",s.Debug="debug",s.Trace="trace"})(Er||(Er={}));var jr;(function(s){s.Window="window",s.Opaque="opaque",s.Transparent="transparent",s.Direct="direct",s.Gpu="gpu"})(jr||(jr={}));var Ar;(function(s){s.WebGpu="webgpu",s.WgpuWebgl="wgpu-webgl",s.Webgl="webgl",s.Canvas="canvas"})(Ar||(Ar={}));var Ga;(function(s){s.On="on",s.RightClickOnly="rightClickOnly",s.Off="off"})(Ga||(Ga={}));var ps;(function(s){s.AIR="air",s.FlashPlayer="flashPlayer"})(ps||(ps={}));var hs;(function(s){s.Allow="allow",s.Confirm="confirm",s.Deny="deny"})(hs||(hs={}));var vs;(function(s){s.All="all",s.Internal="internal",s.None="none"})(vs||(vs={}));var Wm;(function(s){s.South="south",s.East="east",s.North="north",s.West="west",s.LeftTrigger="left-trigger",s.LeftTrigger2="left-trigger-2",s.RightTrigger="right-trigger",s.RightTrigger2="right-trigger-2",s.Select="select",s.Start="start",s.DPadUp="dpad-up",s.DPadDown="dpad-down",s.DPadLeft="dpad-left",s.DPadRight="dpad-right"})(Wm||(Wm={}));const Ug={allowScriptAccess:!1,parameters:{},autoplay:$a.Auto,backgroundColor:null,letterbox:xr.Fullscreen,unmuteOverlay:ei.Visible,upgradeToHttps:!0,compatibilityRules:!0,favorFlash:!0,warnOnUnsupportedContent:!0,logLevel:Er.Error,showSwfDownload:!1,contextMenu:Ga.On,preloader:!0,splashScreen:!0,maxExecutionDuration:15,base:null,menu:!0,allowFullscreen:!1,salign:"",forceAlign:!1,quality:"high",scale:"showAll",forceScale:!1,frameRate:null,wmode:jr.Window,publicPath:null,polyfills:!0,playerVersion:null,preferredRenderer:null,openUrlMode:hs.Allow,allowNetworking:vs.All,openInNewTab:null,socketProxy:[],fontSources:[],defaultFonts:{},credentialAllowList:[],playerRuntime:ps.FlashPlayer,gamepadButtonMapping:{},urlRewriteRules:[]},Ng=`:host{all:initial;pointer-events:inherit;--ruffle-blue:#37528c;--ruffle-orange:#ffad33;display:inline-block;font-family:Arial,sans-serif;height:400px;letter-spacing:.4px;position:relative;touch-action:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:550px;-webkit-tap-highlight-color:transparent}:host(:-webkit-full-screen){display:block;height:100%!important;width:100%!important}.hidden{display:none!important}#container,#message-overlay,#panic,#play-button,#splash-screen,#unmute-overlay,#unmute-overlay .background{inset:0;position:absolute}#container{outline:none;overflow:hidden}#container canvas{height:100%;width:100%}#play-button,#unmute-overlay{cursor:pointer;display:none}#unmute-overlay .background{background:#000;opacity:.7}#play-button .icon,#unmute-overlay .icon{height:50%;left:50%;max-height:384px;max-width:384px;opacity:.8;position:absolute;top:50%;transform:translate(-50%,-50%);width:50%}#play-button:hover .icon,#unmute-overlay:hover .icon{opacity:1}#unmute-overlay-svg{scale:.8}#panic{background:linear-gradient(180deg,#fd3a40,#fda138);color:#fff;display:flex;flex-flow:column;font-size:20px;justify-content:space-around;overflow:auto;text-align:center}#panic a{color:var(--ruffle-blue);font-weight:700}#panic-title{font-size:xxx-large;font-weight:700}#panic-body.details{flex:0.9;margin:0 10px}#panic-body textarea{height:100%;resize:none;width:100%}#panic ul{display:flex;justify-content:space-evenly;list-style-type:none;padding:0}#message-overlay{align-items:center;background:var(--ruffle-blue);color:var(--ruffle-orange);display:flex;justify-content:center;opacity:1;overflow:auto;position:absolute;z-index:2}#message-overlay .message{font-size:20px;max-height:100%;max-width:100%;padding:5%;text-align:center}#message-overlay p{margin:.5em 0}#message-overlay .message div{-moz-column-gap:1em;column-gap:1em;display:flex;flex-wrap:wrap;justify-content:center}#message-overlay a,#message-overlay button{background:var(--ruffle-blue);border:2px solid var(--ruffle-orange);border-radius:.6em;color:var(--ruffle-orange);cursor:pointer;font-size:1.25em;font-weight:700;margin:2% 0;padding:10px;text-decoration:none}#message-overlay a:hover,#message-overlay button:hover{background:#ffffff4c}#continue-btn{background:var(--ruffle-blue);border:2px solid var(--ruffle-orange);border-radius:20px;color:var(--ruffle-orange);cursor:pointer;font-size:20px;font-weight:700;padding:10px}#continue-btn:hover{background:#ffffff4c}#context-menu-overlay,.modal{height:100%;position:absolute;width:100%;z-index:1}#context-menu{background-color:var(--modal-background);border:1px solid gray;box-shadow:0 5px 10px -5px #000;color:rgb(var(--modal-foreground-rgb));font-size:14px;list-style:none;margin:0;padding:3px 0;position:absolute;text-align:start;white-space:nowrap}#context-menu .menu-item{color:rgb(var(--modal-foreground-rgb));padding:5px 10px}#context-menu .menu-item.disabled{color:rgba(var(--modal-foreground-rgb),.5);cursor:default}#context-menu .menu-item:not(.disabled):hover{background-color:rgba(var(--modal-foreground-rgb),.15)}#context-menu .menu-separator hr{border:none;border-bottom:1px solid rgba(var(--modal-foreground-rgb),.2);margin:3px}#splash-screen{align-items:center;background:var(
        --splash-screen-background,var(--preloader-background,var(--ruffle-blue))
    );display:flex;flex-direction:column;justify-content:center}.loadbar{background:#253559;height:20%;max-height:10px;max-width:316px;width:100%}.loadbar-inner{background:var(--ruffle-orange);height:100%;max-width:100%;width:0}.logo{display:var(--logo-display,block);max-height:150px;max-width:380px}.loading-animation{aspect-ratio:1;margin-bottom:2%;max-height:28px;max-width:28px;width:10%}.spinner{stroke-dasharray:180;stroke-dashoffset:135;stroke:var(--ruffle-orange);animation:a 1.5s linear infinite;transform-origin:50% 50%}@keyframes a{to{transform:rotate(1turn)}}#virtual-keyboard{height:1px;opacity:0;position:absolute;top:-100px;width:1px}.modal{background-color:#0008}.modal-area{background-color:var(--modal-background);border-radius:12px;box-shadow:0 2px 6px 0 #0008;color:rgb(var(--modal-foreground-rgb));left:50%;padding:8px 12px;position:relative;transform:translateX(-50%);width:-moz-fit-content;width:fit-content}#modal-area{height:300px;width:450px}.close-modal{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 -960 960 960'%3E%3Cpath d='M480-392 300-212q-18 18-44 18t-44-18-18-44 18-44l180-180-180-180q-18-18-18-44t18-44 44-18 44 18l180 180 180-180q18-18 44-18t44 18 18 44-18 44L568-480l180 180q18 18 18 44t-18 44-44 18-44-18z'/%3E%3C/svg%3E");cursor:pointer;filter:var(--modal-foreground-filter);height:16px;width:16px}.modal-button{background-color:rgba(var(--modal-foreground-rgb),.2);border-radius:6px;color:rgb(var(--modal-foreground-rgb));cursor:pointer;display:inline-block;padding:4px 8px;text-decoration:none}:not(#volume-controls)>.close-modal{position:absolute;right:16px;top:14px}.general-save-options{border-bottom:2px solid rgba(var(--modal-foreground-rgb),.3);padding-bottom:8px;text-align:center}#local-saves{border-collapse:collapse;color:inherit;display:block;height:calc(100% - 45px);min-height:30px;overflow-y:auto}#local-saves td{border-bottom:2px solid rgba(var(--modal-foreground-rgb),.15);height:30px}#local-saves td:first-child{width:100%;word-break:break-all}.save-option{cursor:pointer;display:inline-block;filter:var(--modal-foreground-filter);height:24px;opacity:.4;vertical-align:middle;width:24px}#local-saves>tr:hover .save-option{opacity:1}#download-save{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 -960 960 960'%3E%3Cpath d='M480-337q-8 0-15-2.5t-13-8.5L308-492q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T365-549l75 75v-286q0-17 11.5-28.5T480-800t28.5 11.5T520-760v286l75-75q12-12 28.5-11.5T652-548q11 12 11.5 28T652-492L508-348q-6 6-13 8.5t-15 2.5M240-160q-33 0-56.5-23.5T160-240v-80q0-17 11.5-28.5T200-360t28.5 11.5T240-320v80h480v-80q0-17 11.5-28.5T760-360t28.5 11.5T800-320v80q0 33-23.5 56.5T720-160z'/%3E%3C/svg%3E")}#replace-save{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 -1080 960 1200'%3E%3Cpath d='M440-367v127q0 17 11.5 28.5T480-200t28.5-11.5T520-240v-127l36 36q6 6 13.5 9t15 2.5T599-323t13-9q11-12 11.5-28T612-388L508-492q-6-6-13-8.5t-15-2.5-15 2.5-13 8.5L348-388q-12 12-11.5 28t12.5 28q12 11 28 11.5t28-11.5zM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v447q0 33-23.5 56.5T720-80zm280-560q0 17 11.5 28.5T560-600h160L520-800z'/%3E%3C/svg%3E")}#delete-save{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 -1020 960 1080'%3E%3Cpath d='M280-120q-33 0-56.5-23.5T200-200v-520q-17 0-28.5-11.5T160-760t11.5-28.5T200-800h160q0-17 11.5-28.5T400-840h160q17 0 28.5 11.5T600-800h160q17 0 28.5 11.5T800-760t-11.5 28.5T760-720v520q0 33-23.5 56.5T680-120zm120-160q17 0 28.5-11.5T440-320v-280q0-17-11.5-28.5T400-640t-28.5 11.5T360-600v280q0 17 11.5 28.5T400-280m160 0q17 0 28.5-11.5T600-320v-280q0-17-11.5-28.5T560-640t-28.5 11.5T520-600v280q0 17 11.5 28.5T560-280'/%3E%3C/svg%3E")}.replace-save{display:none}#video-modal .modal-area{box-sizing:border-box;height:95%;width:95%}#video-holder{box-sizing:border-box;height:100%;padding:36px 4px 6px}#video-holder video{background-color:#000;height:100%;width:100%}#volume-controls{align-items:center;display:flex;gap:6px}#mute-checkbox{display:none}label[for=mute-checkbox]{cursor:pointer;filter:var(--modal-foreground-filter);height:24px;line-height:0;width:24px}#volume-mute{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 -960 960 960'%3E%3Cpath d='m719.13-419.35-71.67 71.68Q634.78-335 617.13-335t-30.33-12.67q-12.67-12.68-12.67-30.33t12.67-30.33L658.48-480l-71.68-71.67q-12.67-12.68-12.67-30.33t12.67-30.33Q599.48-625 617.13-625t30.33 12.67l71.67 71.68 71.67-71.68Q803.48-625 821.13-625t30.33 12.67q12.67 12.68 12.67 30.33t-12.67 30.33L779.78-480l71.68 71.67q12.67 12.68 12.67 30.33t-12.67 30.33Q838.78-335 821.13-335t-30.33-12.67zM278-357.87H161.22q-17.66 0-30.33-12.67-12.67-12.68-12.67-30.33v-158.26q0-17.65 12.67-30.33 12.67-12.67 30.33-12.67H278l130.15-129.91q20.63-20.63 46.98-9.45 26.35 11.19 26.35 39.77v443.44q0 28.58-26.35 39.77-26.35 11.18-46.98-9.45z'/%3E%3C/svg%3E")}#volume-min{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='161 -960 960 960'%3E%3Cpath d='M438.65-357.87H321.87q-17.65 0-30.33-12.67-12.67-12.68-12.67-30.33v-158.26q0-17.65 12.67-30.33 12.68-12.67 30.33-12.67h116.78L568.8-732.04q20.63-20.63 46.98-9.45 26.35 11.19 26.35 39.77v443.44q0 28.58-26.35 39.77-26.35 11.18-46.98-9.45z'/%3E%3C/svg%3E")}#volume-mid{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='80 -960 960 960'%3E%3Cpath d='M357.98-357.87H241.2q-17.66 0-30.33-12.67-12.67-12.68-12.67-30.33v-158.26q0-17.65 12.67-30.33 12.67-12.67 30.33-12.67h116.78L487.65-731.8q20.63-20.64 47.1-9.57t26.47 39.65v443.44q0 28.58-26.47 39.65t-47.1-9.57zM741.8-480q0 42.48-20.47 80.09-20.48 37.61-54.94 60.82-10.22 5.98-20.19.25-9.98-5.73-9.98-17.44v-248.44q0-11.71 9.98-17.32 9.97-5.61 20.19.37 34.46 23.71 54.94 61.45Q741.8-522.48 741.8-480'/%3E%3C/svg%3E")}#volume-max{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='9 -960 960 960'%3E%3Cpath d='M754.22-480.5q0-78.52-41.88-143.9t-111.91-98.62q-14.47-6.74-20.47-20.96t-.53-28.93q5.74-15.72 20.34-22.46t29.58 0q92.48 42.46 147.97 127.05 55.48 84.6 55.48 187.82t-55.48 187.82q-55.49 84.59-147.97 127.05-14.98 6.74-29.58 0t-20.34-22.46q-5.47-14.71.53-28.93t20.47-20.96q70.03-33.24 111.91-98.62t41.88-143.9M286.98-357.87H170.2q-17.66 0-30.33-12.67-12.67-12.68-12.67-30.33v-158.26q0-17.65 12.67-30.33 12.67-12.67 30.33-12.67h116.78L416.65-731.8q20.63-20.64 47.1-9.57t26.47 39.65v443.44q0 28.58-26.47 39.65t-47.1-9.57zM670.8-480q0 42.48-20.47 80.09-20.48 37.61-54.94 60.82-10.22 5.98-20.19.25-9.98-5.73-9.98-17.44v-248.44q0-11.71 9.98-17.32 9.97-5.61 20.19.37 34.46 23.71 54.94 61.45Q670.8-522.48 670.8-480'/%3E%3C/svg%3E")}#volume-slider-text{text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:4.8ch}#hardware-acceleration-modal .modal-area{box-sizing:border-box;padding:16px 48px;text-align:center;width:95%}#acceleration-text{display:block;margin-bottom:8px}#clipboard-modal h2{margin-right:36px;margin-top:4px}#clipboard-modal p:last-child{margin-bottom:2px}@media (prefers-color-scheme:light){:host{--modal-background:#fafafa;--modal-foreground-rgb:0,0,0;--modal-foreground-filter:none}}@media (prefers-color-scheme:dark){:host{--modal-background:#282828;--modal-foreground-rgb:221,221,221;--modal-foreground-filter:invert(90%)}}`;function Lg(){return D.jsx("style",{children:Ng})}function Hg(){return D.jsx("style",{id:"dynamic-styles"})}function Bg(){return D.jsxs("div",{id:"container",children:[D.jsx("div",{id:"play-button",children:D.jsx("div",{class:"icon",children:D.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",viewBox:"0 0 250 250",width:"100%",height:"100%",children:[D.jsxs("defs",{xmlns:"http://www.w3.org/2000/svg",children:[D.jsxs("linearGradient",{xmlns:"http://www.w3.org/2000/svg",id:"a",gradientUnits:"userSpaceOnUse",x1:"125",y1:"0",x2:"125",y2:"250",spreadMethod:"pad",children:[D.jsx("stop",{xmlns:"http://www.w3.org/2000/svg",offset:"0%","stop-color":"#FDA138"}),D.jsx("stop",{xmlns:"http://www.w3.org/2000/svg",offset:"100%","stop-color":"#FD3A40"})]}),D.jsxs("g",{xmlns:"http://www.w3.org/2000/svg",id:"b",children:[D.jsx("path",{xmlns:"http://www.w3.org/2000/svg",fill:"url(#a)",d:"M250 125q0-52-37-88-36-37-88-37T37 37Q0 73 0 125t37 88q36 37 88 37t88-37q37-36 37-88M87 195V55l100 70-100 70z"}),D.jsx("path",{xmlns:"http://www.w3.org/2000/svg",fill:"#FFF",d:"M87 55v140l100-70L87 55z"})]})]}),D.jsx("use",{xmlns:"http://www.w3.org/2000/svg",href:"#b"})]})})}),D.jsxs("div",{id:"unmute-overlay",children:[D.jsx("div",{class:"background"}),D.jsx("div",{class:"icon",children:D.jsxs("svg",{id:"unmute-overlay-svg",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",viewBox:"0 0 512 584",width:"100%",height:"100%",children:[D.jsx("path",{xmlns:"http://www.w3.org/2000/svg",fill:"#FFF",stroke:"#FFF",d:"m457.941 256 47.029-47.029c9.372-9.373 9.372-24.568 0-33.941-9.373-9.373-24.568-9.373-33.941 0l-47.029 47.029-47.029-47.029c-9.373-9.373-24.568-9.373-33.941 0-9.372 9.373-9.372 24.568 0 33.941l47.029 47.029-47.029 47.029c-9.372 9.373-9.372 24.568 0 33.941 4.686 4.687 10.827 7.03 16.97 7.03s12.284-2.343 16.971-7.029l47.029-47.03 47.029 47.029c4.687 4.687 10.828 7.03 16.971 7.03s12.284-2.343 16.971-7.029c9.372-9.373 9.372-24.568 0-33.941z"}),D.jsx("path",{xmlns:"http://www.w3.org/2000/svg",fill:"#FFF",stroke:"#FFF",d:"m99 160h-55c-24.301 0-44 19.699-44 44v104c0 24.301 19.699 44 44 44h55c2.761 0 5-2.239 5-5v-182c0-2.761-2.239-5-5-5z"}),D.jsx("path",{xmlns:"http://www.w3.org/2000/svg",fill:"#FFF",stroke:"#FFF",d:"m280 56h-24c-5.269 0-10.392 1.734-14.578 4.935l-103.459 79.116c-1.237.946-1.963 2.414-1.963 3.972v223.955c0 1.557.726 3.026 1.963 3.972l103.459 79.115c4.186 3.201 9.309 4.936 14.579 4.936h23.999c13.255 0 24-10.745 24-24v-352.001c0-13.255-10.745-24-24-24z"}),D.jsx("text",{xmlns:"http://www.w3.org/2000/svg",id:"unmute-text",x:"256",y:"560","text-anchor":"middle","font-size":"60px",fill:"#FFF",stroke:"#FFF",children:"Click to unmute"})]})})]}),D.jsx("input",{"aria-hidden":"true",id:"virtual-keyboard",type:"text",autocomplete:"off",autocorrect:"off",autocapitalize:"none"})]})}function Vg(){return D.jsxs("div",{id:"splash-screen",class:"hidden",children:[D.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",class:"logo",preserveAspectRatio:"xMidYMid",viewBox:"0 0 380 150",children:D.jsxs("g",{xmlns:"http://www.w3.org/2000/svg",children:[D.jsx("path",{xmlns:"http://www.w3.org/2000/svg",fill:"#966214",d:"M58.75 85.6q.75-.1 1.5-.35.85-.25 1.65-.75.55-.35 1.05-.8.5-.45.95-1 .5-.5.75-1.2-.05.05-.15.1-.1.15-.25.25l-.1.2q-.15.05-.25.1-.4 0-.8.05-.5-.25-.9-.5-.3-.1-.55-.3l-.6-.6-4.25-6.45-1.5 11.25h3.45m83.15-.2h3.45q.75-.1 1.5-.35.25-.05.45-.15.35-.15.65-.3l.5-.3q.25-.15.5-.35.45-.35.9-.75.45-.35.75-.85l.1-.1q.1-.2.2-.35.2-.3.35-.6l-.3.4-.15.15q-.5.15-1.1.1-.25 0-.4-.05-.5-.15-.8-.4-.15-.1-.25-.25-.3-.3-.55-.6l-.05-.05v-.05l-4.25-6.4-1.5 11.25m-21.15-3.95q-.3-.3-.55-.6l-.05-.05v-.05l-4.25-6.4-1.5 11.25h3.45q.75-.1 1.5-.35.85-.25 1.6-.75.75-.5 1.4-1.1.45-.35.75-.85.35-.5.65-1.05l-.45.55q-.5.15-1.1.1-.9 0-1.45-.7m59.15.3q-.75-.5-1.4-1-3.15-2.55-3.5-6.4l-1.5 11.25h21q-3.1-.25-5.7-.75-5.6-1.05-8.9-3.1m94.2 3.85h3.45q.6-.1 1.2-.3.4-.1.75-.2.35-.15.65-.3.7-.35 1.35-.8.75-.55 1.3-1.25.1-.15.25-.3-2.55-.25-3.25-1.8l-4.2-6.3-1.5 11.25m-45.3-4.85q-.5-.4-.9-.8-2.3-2.35-2.6-5.6l-1.5 11.25h21q-11.25-.95-16-4.85m97.7 4.85q-.3-.05-.6-.05-10.8-1-15.4-4.8-3.15-2.55-3.5-6.35l-1.5 11.2h21Z"}),D.jsx("path",{xmlns:"http://www.w3.org/2000/svg",fill:"var(--ruffle-orange)",d:"M92.6 54.8q-1.95-1.4-4.5-1.4H60.35q-1.35 0-2.6.45-1.65.55-3.15 1.8-2.75 2.25-3.25 5.25l-1.65 12h.05v.3l5.85 1.15h-9.5q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45-.5.3-.95.7-.45.35-.85.8-.35.4-.65.85-.3.45-.5.9-.15.45-.3.95l-5.85 41.6H50.3l5-35.5 1.5-11.25 4.25 6.45.6.6q.25.2.55.3.4.25.9.5.4-.05.8-.05.1-.05.25-.1l.1-.2q.15-.1.25-.25.1-.05.15-.1l.3-1.05 1.75-12.3h11.15L75.8 82.6h16.5l2.3-16.25h-.05l.8-5.7q.4-2.45-1-4.2-.35-.4-.75-.8-.25-.25-.55-.5-.2-.2-.45-.35m16.2 18.1h.05l-.05.3 5.85 1.15H105.2q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45-.5.3-1 .65-.4.4-.8.85-.25.3-.55.65-.05.1-.15.2-.25.45-.4.9-.2.45-.3.95-.1.65-.2 1.25-.2 1.15-.4 2.25l-4.3 30.6q-.25 3 1.75 5.25 1.6 1.8 4 2.15.6.1 1.25.1h27.35q3.25 0 6-2.25.35-.35.7-.55l.3-.2q2-2 2.25-4.5l1.65-11.6q.05-.05.1-.05l1.65-11.35h.05l.7-5.2 1.5-11.25 4.25 6.4v.05l.05.05q.25.3.55.6.1.15.25.25.3.25.8.4.15.05.4.05.6.05 1.1-.1l.15-.15.3-.4.3-1.05 1.3-9.05h-.05l.7-5.05h-.05l.15-1.25h-.05l1.65-11.7h-16.25l-2.65 19.5h.05v.2l-.05.1h.05l5.8 1.15H132.7q-.5.05-1 .15-.5.15-1 .35-.15.05-.3.15-.3.1-.55.25-.05 0-.1.05-.5.3-1 .65-.4.35-.7.7-.55.7-.95 1.45-.35.65-.55 1.4-.15.7-.25 1.4v.05q-.15 1.05-.35 2.05l-1.2 8.75v.1l-2.1 14.7H111.4l2.25-15.55h.05l.7-5.2 1.5-11.25 4.25 6.4v.05l.05.05q.25.3.55.6.55.7 1.45.7.6.05 1.1-.1l.45-.55.3-1.05 1.3-9.05h-.05l.7-5.05h-.05l.15-1.25h-.05l1.65-11.7h-16.25l-2.65 19.5m106.5-41.75q-2.25-2.25-5.5-2.25h-27.75q-3 0-5.75 2.25-1.3.95-2.05 2.1-.45.6-.7 1.2-.2.5-.35 1-.1.45-.15.95l-4.15 29.95h-.05l-.7 5.2h-.05l-.2 1.35h.05l-.05.3 5.85 1.15h-9.45q-2.1.05-3.95 1.6-1.9 1.55-2.25 3.55l-.5 3.5h-.05l-5.3 38.1h16.25l5-35.5 1.5-11.25q.35 3.85 3.5 6.4.65.5 1.4 1 3.3 2.05 8.9 3.1 2.6.5 5.7.75l1.75-11.25h-12.2l.4-2.95h-.05l.7-5.05h-.05q.1-.9.3-1.9.1-.75.2-1.6.85-5.9 2.15-14.9 0-.15.05-.25l.1-.9q.2-1.55.45-3.15h11.25l-3.1 20.8h16.5l4.1-28.05q.15-1.7-.4-3.15-.5-1.1-1.35-2.1m46.65 44.15q-.5.3-1 .65-.4.4-.8.85-.35.4-.7.85-.25.45-.45.9-.15.45-.3.95l-5.85 41.6h16.25l5-35.5 1.5-11.25 4.2 6.3q.7 1.55 3.25 1.8l.05-.1q.25-.4.35-.85l.3-1.05 1.8-14.05v-.05l5.35-37.45h-16.25l-6.15 44.3 5.85 1.15h-9.45q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45m5.4-38.9q.15-1.7-.4-3.15-.5-1.1-1.35-2.1-2.25-2.25-5.5-2.25h-27.75q-2.3 0-4.45 1.35-.65.35-1.3.9-1.3.95-2.05 2.1-.45.6-.7 1.2-.4.9-.5 1.95l-4.15 29.95h-.05l-.7 5.2h-.05l-.2 1.35h.05l-.05.3 5.85 1.15h-9.45q-2.1.05-3.95 1.6-1.9 1.55-2.25 3.55l-.5 3.5h-.05l-1.2 8.75v.1l-4.1 29.25h16.25l5-35.5 1.5-11.25q.3 3.25 2.6 5.6.4.4.9.8 4.75 3.9 16 4.85l1.75-11.25h-12.2l.4-2.95h-.05l.7-5.05h-.05q.15-.9.3-1.9.1-.75.25-1.6.15-1.25.35-2.65v-.05q.95-6.7 2.35-16.5h11.25l-3.1 20.8h16.5l4.1-28.05M345 66.35h-.05l1.15-8.2q.5-3-1.75-5.25-1.25-1.25-3-1.75-1-.5-2.25-.5h-27.95q-.65 0-1.3.1-2.5.35-4.7 2.15-2.75 2.25-3.25 5.25l-1.95 14.7v.05l-.05.3 5.85 1.15h-9.45q-1.9.05-3.6 1.35-.2.1-.35.25-1.9 1.55-2.25 3.55l-4.85 34.1q-.25 3 1.75 5.25 1.25 1.4 3 1.95 1.05.3 2.25.3H320q3.25 0 6-2.25 2.75-2 3.25-5l2.75-18.5h-16.5l-1.75 11H302.5l2.1-14.75h.05l.85-6 1.5-11.2q.35 3.8 3.5 6.35 4.6 3.8 15.4 4.8.3 0 .6.05h15.75L345 66.35m-16.4-.95-1.25 8.95h-11.3l.4-2.95h-.05l.7-5.05h-.1l.15-.95h11.45Z"})]})}),D.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",class:"loading-animation",viewBox:"0 0 66 66",children:D.jsx("circle",{xmlns:"http://www.w3.org/2000/svg",class:"spinner",fill:"none","stroke-width":"6","stroke-linecap":"round",cx:"33",cy:"33",r:"30"})}),D.jsx("div",{class:"loadbar",children:D.jsx("div",{class:"loadbar-inner"})})]})}function Yg(){return D.jsx("div",{id:"save-manager",class:"modal hidden",children:D.jsxs("div",{id:"modal-area",class:"modal-area",children:[D.jsx("span",{class:"close-modal"}),D.jsx("div",{class:"general-save-options",children:D.jsx("span",{class:"modal-button"})}),D.jsx("table",{id:"local-saves"})]})})}class Za{constructor(i){this.value=i}valueOf(){return this.value}}class Ve extends Za{constructor(i="???"){super(i)}toString(i){return`{${this.value}}`}}class lt extends Za{constructor(i,o={}){super(i),this.opts=o}toString(i){try{return i.memoizeIntlObject(Intl.NumberFormat,this.opts).format(this.value)}catch(o){return i.reportError(o),this.value.toString(10)}}}class Ct extends Za{static supportsValue(i){if(typeof i=="number"||i instanceof Date)return!0;if(i instanceof Za)return Ct.supportsValue(i.valueOf());if("Temporal"in globalThis){const o=globalThis.Temporal;if(i instanceof o.Instant||i instanceof o.PlainDateTime||i instanceof o.PlainDate||i instanceof o.PlainMonthDay||i instanceof o.PlainTime||i instanceof o.PlainYearMonth)return!0}return!1}constructor(i,o={}){i instanceof Ct?(o={...i.opts,...o},i=i.value):i instanceof Za&&(i=i.valueOf()),typeof i=="object"&&"calendarId"in i&&o.calendar===void 0&&(o={...o,calendar:i.calendarId}),super(i),this.opts=o}toNumber(){const i=this.value;if(typeof i=="number")return i;if(i instanceof Date)return i.getTime();if("epochMilliseconds"in i)return i.epochMilliseconds;if("toZonedDateTime"in i)return i.toZonedDateTime("UTC").epochMilliseconds;throw new TypeError("Unwrapping a non-number value as a number")}toString(i){try{return i.memoizeIntlObject(Intl.DateTimeFormat,this.opts).format(this.value)}catch(o){return i.reportError(o),typeof this.value=="number"||this.value instanceof Date?new Date(this.value).toISOString():this.value.toString()}}}const Km=100,Fg="⁨",Gg="⁩";function Zg(s,i,o){if(o===i||o instanceof lt&&i instanceof lt&&o.value===i.value)return!0;if(i instanceof lt&&typeof o=="string"){let u=s.memoizeIntlObject(Intl.PluralRules,i.opts).select(i.value);if(o===u)return!0}return!1}function Jm(s,i,o){return i[o]?Xa(s,i[o].value):(s.reportError(new RangeError("No default")),new Ve)}function gs(s,i){const o=[],u=Object.create(null);for(const f of i)f.type==="narg"?u[f.name]=ni(s,f.value):o.push(ni(s,f));return{positional:o,named:u}}function ni(s,i){switch(i.type){case"str":return i.value;case"num":return new lt(i.value,{minimumFractionDigits:i.precision});case"var":return Qg(s,i);case"mesg":return $g(s,i);case"term":return Xg(s,i);case"func":return Wg(s,i);case"select":return Kg(s,i);default:return new Ve}}function Qg(s,{name:i}){let o;if(s.params)if(Object.prototype.hasOwnProperty.call(s.params,i))o=s.params[i];else return new Ve(`$${i}`);else if(s.args&&Object.prototype.hasOwnProperty.call(s.args,i))o=s.args[i];else return s.reportError(new ReferenceError(`Unknown variable: $${i}`)),new Ve(`$${i}`);if(o instanceof Za)return o;switch(typeof o){case"string":return o;case"number":return new lt(o);case"object":if(Ct.supportsValue(o))return new Ct(o);default:return s.reportError(new TypeError(`Variable type not supported: $${i}, ${typeof o}`)),new Ve(`$${i}`)}}function $g(s,{name:i,attr:o}){const u=s.bundle._messages.get(i);if(!u)return s.reportError(new ReferenceError(`Unknown message: ${i}`)),new Ve(i);if(o){const f=u.attributes[o];return f?Xa(s,f):(s.reportError(new ReferenceError(`Unknown attribute: ${o}`)),new Ve(`${i}.${o}`))}return u.value?Xa(s,u.value):(s.reportError(new ReferenceError(`No value: ${i}`)),new Ve(i))}function Xg(s,{name:i,attr:o,args:u}){const f=`-${i}`,m=s.bundle._terms.get(f);if(!m)return s.reportError(new ReferenceError(`Unknown term: ${f}`)),new Ve(f);if(o){const w=m.attributes[o];if(w){s.params=gs(s,u).named;const k=Xa(s,w);return s.params=null,k}return s.reportError(new ReferenceError(`Unknown attribute: ${o}`)),new Ve(`${f}.${o}`)}s.params=gs(s,u).named;const g=Xa(s,m.value);return s.params=null,g}function Wg(s,{name:i,args:o}){let u=s.bundle._functions[i];if(!u)return s.reportError(new ReferenceError(`Unknown function: ${i}()`)),new Ve(`${i}()`);if(typeof u!="function")return s.reportError(new TypeError(`Function ${i}() is not callable`)),new Ve(`${i}()`);try{let f=gs(s,o);return u(f.positional,f.named)}catch(f){return s.reportError(f),new Ve(`${i}()`)}}function Kg(s,{selector:i,variants:o,star:u}){let f=ni(s,i);if(f instanceof Ve)return Jm(s,o,u);for(const m of o){const g=ni(s,m.key);if(Zg(s,f,g))return Xa(s,m.value)}return Jm(s,o,u)}function zp(s,i){if(s.dirty.has(i))return s.reportError(new RangeError("Cyclic reference")),new Ve;s.dirty.add(i);const o=[],u=s.bundle._useIsolating&&i.length>1;for(const f of i){if(typeof f=="string"){o.push(s.bundle._transform(f));continue}if(s.placeables++,s.placeables>Km)throw s.dirty.delete(i),new RangeError(`Too many placeables expanded: ${s.placeables}, max allowed is ${Km}`);u&&o.push(Fg),o.push(ni(s,f).toString(s)),u&&o.push(Gg)}return s.dirty.delete(i),o.join("")}function Xa(s,i){return typeof i=="string"?s.bundle._transform(i):zp(s,i)}class Jg{constructor(i,o,u){this.dirty=new WeakSet,this.params=null,this.placeables=0,this.bundle=i,this.errors=o,this.args=u}reportError(i){if(!this.errors||!(i instanceof Error))throw i;this.errors.push(i)}memoizeIntlObject(i,o){let u=this.bundle._intls.get(i);u||(u={},this.bundle._intls.set(i,u));let f=JSON.stringify(o);return u[f]||(u[f]=new i(this.bundle.locales,o)),u[f]}}function bs(s,i){const o=Object.create(null);for(const[u,f]of Object.entries(s))i.includes(u)&&(o[u]=f.valueOf());return o}const Pm=["unitDisplay","currencyDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits"];function Pg(s,i){let o=s[0];if(o instanceof Ve)return new Ve(`NUMBER(${o.valueOf()})`);if(o instanceof lt)return new lt(o.valueOf(),{...o.opts,...bs(i,Pm)});if(o instanceof Ct)return new lt(o.toNumber(),{...bs(i,Pm)});throw new TypeError("Invalid argument to NUMBER")}const Ig=["dateStyle","timeStyle","fractionalSecondDigits","dayPeriod","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName"];function eb(s,i){let o=s[0];if(o instanceof Ve)return new Ve(`DATETIME(${o.valueOf()})`);if(o instanceof Ct||o instanceof lt)return new Ct(o,bs(i,Ig));throw new TypeError("Invalid argument to DATETIME")}const Im=new Map;function nb(s){const i=Array.isArray(s)?s.join(" "):s;let o=Im.get(i);return o===void 0&&(o=new Map,Im.set(i,o)),o}class tb{constructor(i,{functions:o,useIsolating:u=!0,transform:f=m=>m}={}){this._terms=new Map,this._messages=new Map,this.locales=Array.isArray(i)?i:[i],this._functions={NUMBER:Pg,DATETIME:eb,...o},this._useIsolating=u,this._transform=f,this._intls=nb(i)}hasMessage(i){return this._messages.has(i)}getMessage(i){return this._messages.get(i)}addResource(i,{allowOverrides:o=!1}={}){const u=[];for(let f=0;f<i.body.length;f++){let m=i.body[f];if(m.id.startsWith("-")){if(o===!1&&this._terms.has(m.id)){u.push(new Error(`Attempt to override an existing term: "${m.id}"`));continue}this._terms.set(m.id,m)}else{if(o===!1&&this._messages.has(m.id)){u.push(new Error(`Attempt to override an existing message: "${m.id}"`));continue}this._messages.set(m.id,m)}}return u}formatPattern(i,o=null,u=null){if(typeof i=="string")return this._transform(i);let f=new Jg(this,u,o);try{return zp(f,i).toString(f)}catch(m){if(f.errors&&m instanceof Error)return f.errors.push(m),new Ve().toString(f);throw m}}}const ts=/^(-?[a-zA-Z][\w-]*) *= */gm,ep=/\.([a-zA-Z][\w-]*) *= */y,ab=/\*?\[/y,as=/(-?[0-9]+(?:\.([0-9]+))?)/y,lb=/([a-zA-Z][\w-]*)/y,np=/([$-])?([a-zA-Z][\w-]*)(?:\.([a-zA-Z][\w-]*))?/y,ib=/^[A-Z][A-Z0-9_-]*$/,kr=/([^{}\n\r]+)/y,rb=/([^\\"\n\r]*)/y,tp=/\\([\\"])/y,ap=/\\u([a-fA-F0-9]{4})|\\U([a-fA-F0-9]{6})/y,ob=/^\n+/,lp=/ +$/,ub=/ *\r?\n/g,sb=/( *)$/,cb=/{\s*/y,ip=/\s*}/y,fb=/\[\s*/y,db=/\s*] */y,mb=/\s*\(\s*/y,pb=/\s*->\s*/y,hb=/\s*:\s*/y,vb=/\s*,?\s*/y,gb=/\s+/y;class bb{constructor(i){this.body=[],ts.lastIndex=0;let o=0;for(;;){let _=ts.exec(i);if(_===null)break;o=ts.lastIndex;try{this.body.push(k(_[1]))}catch(V){if(V instanceof SyntaxError)continue;throw V}}function u(_){return _.lastIndex=o,_.test(i)}function f(_,V){if(i[o]===_)return o++,!0;if(V)throw new V(`Expected ${_}`);return!1}function m(_,V){if(u(_))return o=_.lastIndex,!0;if(V)throw new V(`Expected ${_.toString()}`);return!1}function g(_){_.lastIndex=o;let V=_.exec(i);if(V===null)throw new SyntaxError(`Expected ${_.toString()}`);return o=_.lastIndex,V}function w(_){return g(_)[1]}function k(_){let V=O(),ie=b();if(V===null&&Object.keys(ie).length===0)throw new SyntaxError("Expected message value or attributes");return{id:_,value:V,attributes:ie}}function b(){let _=Object.create(null);for(;u(ep);){let V=w(ep),ie=O();if(ie===null)throw new SyntaxError("Expected attribute value");_[V]=ie}return _}function O(){let _;if(u(kr)&&(_=w(kr)),i[o]==="{"||i[o]==="}")return H(_?[_]:[],1/0);let V=Ue();return V?_?H([_,V],V.length):(V.value=de(V.value,ob),H([V],V.length)):_?de(_,lp):null}function H(_=[],V){for(;;){if(u(kr)){_.push(w(kr));continue}if(i[o]==="{"){_.push($());continue}if(i[o]==="}")throw new SyntaxError("Unbalanced closing brace");let Ze=Ue();if(Ze){_.push(Ze),V=Math.min(V,Ze.length);continue}break}let ie=_.length-1,Ae=_[ie];typeof Ae=="string"&&(_[ie]=de(Ae,lp));let dn=[];for(let Ze of _)Ze instanceof rp&&(Ze=Ze.value.slice(0,Ze.value.length-V)),Ze&&dn.push(Ze);return dn}function $(){m(cb,SyntaxError);let _=X();if(m(ip))return _;if(m(pb)){let V=be();return m(ip,SyntaxError),{type:"select",selector:_,...V}}throw new SyntaxError("Unclosed placeable")}function X(){if(i[o]==="{")return $();if(u(np)){let[,_,V,ie=null]=g(np);if(_==="$")return{type:"var",name:V};if(m(mb)){let Ae=le();if(_==="-")return{type:"term",name:V,attr:ie,args:Ae};if(ib.test(V))return{type:"func",name:V,args:Ae};throw new SyntaxError("Function names must be all upper-case")}return _==="-"?{type:"term",name:V,attr:ie,args:[]}:{type:"mesg",name:V,attr:ie}}return Ye()}function le(){let _=[];for(;;){switch(i[o]){case")":return o++,_;case void 0:throw new SyntaxError("Unclosed argument list")}_.push(oe()),m(vb)}}function oe(){let _=X();return _.type!=="mesg"?_:m(hb)?{type:"narg",name:_.name,value:Ye()}:_}function be(){let _=[],V=0,ie;for(;u(ab);){f("*")&&(ie=V);let Ae=qe(),dn=O();if(dn===null)throw new SyntaxError("Expected variant value");_[V++]={key:Ae,value:dn}}if(V===0)return null;if(ie===void 0)throw new SyntaxError("Expected default variant");return{variants:_,star:ie}}function qe(){m(fb,SyntaxError);let _;return u(as)?_=ue():_={type:"str",value:w(lb)},m(db,SyntaxError),_}function Ye(){if(u(as))return ue();if(i[o]==='"')return ne();throw new SyntaxError("Invalid expression")}function ue(){let[,_,V=""]=g(as),ie=V.length;return{type:"num",value:parseFloat(_),precision:ie}}function ne(){f('"',SyntaxError);let _="";for(;;){if(_+=w(rb),i[o]==="\\"){_+=W();continue}if(f('"'))return{type:"str",value:_};throw new SyntaxError("Unclosed string literal")}}function W(){if(u(tp))return w(tp);if(u(ap)){let[,_,V]=g(ap),ie=parseInt(_||V,16);return ie<=55295||57344<=ie?String.fromCodePoint(ie):"�"}throw new SyntaxError("Unknown escape sequence")}function Ue(){let _=o;switch(m(gb),i[o]){case".":case"[":case"*":case"}":case void 0:return!1;case"{":return ye(i.slice(_,o))}return i[o-1]===" "?ye(i.slice(_,o)):!1}function de(_,V){return _.replace(V,"")}function ye(_){let V=_.replace(ub,`
`),ie=sb.exec(_)[1].length;return new rp(V,ie)}}}class rp{constructor(i,o){this.value=i,this.length=o}}const yb="([a-z]{2,3}|\\*)",wb="(?:-([a-z]{4}|\\*))",kb="(?:-([a-z]{2}|\\*))",Rb="(?:-(([0-9][a-z0-9]{3}|[a-z0-9]{5,8})|\\*))",Sb=new RegExp(`^${yb}${wb}?${kb}?${Rb}?$`,"i");class Kl{constructor(i){const o=Sb.exec(i.replace(/_/g,"-"));if(!o){this.isWellFormed=!1;return}let[,u,f,m,g]=o;u&&(this.language=u.toLowerCase()),f&&(this.script=f[0].toUpperCase()+f.slice(1)),m&&(this.region=m.toUpperCase()),this.variant=g,this.isWellFormed=!0}isEqual(i){return this.language===i.language&&this.script===i.script&&this.region===i.region&&this.variant===i.variant}matches(i,o=!1,u=!1){return(this.language===i.language||o&&this.language===void 0||u&&i.language===void 0)&&(this.script===i.script||o&&this.script===void 0||u&&i.script===void 0)&&(this.region===i.region||o&&this.region===void 0||u&&i.region===void 0)&&(this.variant===i.variant||o&&this.variant===void 0||u&&i.variant===void 0)}toString(){return[this.language,this.script,this.region,this.variant].filter(i=>i!==void 0).join("-")}clearVariants(){this.variant=void 0}clearRegion(){this.region=void 0}addLikelySubtags(){const i=xb(this.toString().toLowerCase());return i?(this.language=i.language,this.script=i.script,this.region=i.region,this.variant=i.variant,!0):!1}}const op={ar:"ar-arab-eg","az-arab":"az-arab-ir","az-ir":"az-arab-ir",be:"be-cyrl-by",da:"da-latn-dk",el:"el-grek-gr",en:"en-latn-us",fa:"fa-arab-ir",ja:"ja-jpan-jp",ko:"ko-kore-kr",pt:"pt-latn-br",sr:"sr-cyrl-rs","sr-ru":"sr-latn-ru",sv:"sv-latn-se",ta:"ta-taml-in",uk:"uk-cyrl-ua",zh:"zh-hans-cn","zh-hant":"zh-hant-tw","zh-hk":"zh-hant-hk","zh-mo":"zh-hant-mo","zh-tw":"zh-hant-tw","zh-gb":"zh-hant-gb","zh-us":"zh-hant-us"},zb=["az","bg","cs","de","es","fi","fr","hu","it","lt","lv","nl","pl","ro","ru"];function xb(s){if(Object.prototype.hasOwnProperty.call(op,s))return new Kl(op[s]);const i=new Kl(s);return i.language&&zb.includes(i.language)?(i.region=i.language.toUpperCase(),i):null}function Eb(s,i,o){const u=new Set,f=new Map;for(let m of i)new Kl(m).isWellFormed&&f.set(m,new Kl(m));e:for(const m of s){const g=m.toLowerCase(),w=new Kl(g);if(w.language!==void 0){for(const k of f.keys())if(g===k.toLowerCase()){if(u.add(k),f.delete(k),o==="lookup")return Array.from(u);if(o==="filtering")continue;continue e}for(const[k,b]of f.entries())if(b.matches(w,!0,!1)){if(u.add(k),f.delete(k),o==="lookup")return Array.from(u);if(o==="filtering")continue;continue e}if(w.addLikelySubtags()){for(const[k,b]of f.entries())if(b.matches(w,!0,!1)){if(u.add(k),f.delete(k),o==="lookup")return Array.from(u);if(o==="filtering")continue;continue e}}w.clearVariants();for(const[k,b]of f.entries())if(b.matches(w,!0,!0)){if(u.add(k),f.delete(k),o==="lookup")return Array.from(u);if(o==="filtering")continue;continue e}if(w.clearRegion(),w.addLikelySubtags()){for(const[k,b]of f.entries())if(b.matches(w,!0,!1)){if(u.add(k),f.delete(k),o==="lookup")return Array.from(u);if(o==="filtering")continue;continue e}}w.clearRegion();for(const[k,b]of f.entries())if(b.matches(w,!0,!0)){if(u.add(k),f.delete(k),o==="lookup")return Array.from(u);if(o==="filtering")continue;continue e}}}return Array.from(u)}function jb(s,i,{strategy:o="filtering",defaultLocale:u}={}){const f=Eb(Array.from(s??[]).map(String),Array.from(i??[]).map(String),o);if(o==="lookup"){if(u===void 0)throw new Error("defaultLocale cannot be undefined for strategy `lookup`");f.length===0&&f.push(u)}else u&&!f.includes(u)&&f.push(u);return f}function Ab(){Object.defineProperty(Array.prototype,"reduce",{value(...s){if(s.length===0&&window.Prototype&&window.Prototype.Version&&window.Prototype.Version<"1.6.1")return this.length>1?this:this[0];const i=s[0];if(this===null)throw new TypeError("Array.prototype.reduce called on null or undefined");if(typeof i!="function")throw new TypeError(`${i} is not a function`);const o=Object(this),u=o.length>>>0;let f=0,m;if(s.length>=2)m=s[1];else{for(;f<u&&!(f in o);)f++;if(f>=u)throw new TypeError("Reduce of empty array with no initial value");m=o[f++]}for(;f<u;)f in o&&(m=i(m,o[f],f,o)),f++;return m}})}function Tb(){typeof window.constructor!="function"||!ys(window.constructor)||(window.Window=window.constructor)}function Db(){(window.Reflect===void 0||window.Reflect===null)&&(window.Reflect={}),typeof Reflect.get!="function"&&Object.defineProperty(Reflect,"get",{value(s,i){return s[i]}}),typeof Reflect.set!="function"&&Object.defineProperty(Reflect,"set",{value(s,i,o){s[i]=o}}),typeof Reflect.has!="function"&&Object.defineProperty(Reflect,"has",{value(s,i){return i in s}}),typeof Reflect.ownKeys!="function"&&Object.defineProperty(Reflect,"ownKeys",{value(s){return[...Object.getOwnPropertyNames(s),...Object.getOwnPropertySymbols(s)]}})}function xp(){if(typeof Map.prototype.set!="function"){const s=Map,i=document.createElement("iframe");return i.style.display="none",document.documentElement.append(i),Map=i.contentWindow.Map,i.remove(),s}}function Ep(s){s&&(Map=s)}function ys(s){const i=typeof Function.prototype.toString=="function"?Function.prototype.toString():null;return typeof i=="string"&&i.indexOf("[native code]")>=0?Function.prototype.toString.call(s).indexOf("[native code]")>=0:!1}function Ob(){(typeof Array.prototype.reduce!="function"||!ys(Array.prototype.reduce))&&Ab(),(typeof Window!="function"||!ys(Window))&&Tb(),Db()}const Mb={"ar-SA":{"context_menu.ftl":`context-menu-download-swf = حمِّل .swf
context-menu-copy-debug-info = إنسخ معلومات التصحيح
context-menu-open-save-manager = إفتح مدير الحفظ
context-menu-about-ruffle =
    { $flavor ->
        [extension] عن ملحق Ruffle ({ $version })
       *[other] عن Ruffle ({ $version })
    }
context-menu-hide = أخفِ هذه القائمة
context-menu-exit-fullscreen = إخرج من وضعية الشاشة الكاملة
context-menu-enter-fullscreen = إدخل وضعية الشاشة الكاملة
context-menu-volume-controls = التحكم بالصوت
`,"messages.ftl":`message-cant-embed =
    لم يكن رفل قادرًا على تشغيل الفلاش المضمنة في هذه الصفحة.
    يمكنك محاولة فتح الملف في علامة تبويب منفصلة لتجاوز هذه المشكلة.
panic-title = لقد حدث خطأ ما :(
more-info = معلومات أكثر
run-anyway = شغِّل على أي حال
continue = إستمر
report-bug = بلِّغ عن خلل
update-ruffle = تحديث رفل
ruffle-demo = العرض التجريبي
ruffle-desktop = برنامج سطح المكتب
ruffle-wiki = إعرض ويكي رفل
enable-hardware-acceleration = يبدو أن تسريع الجهاز معطل. على الرغم من أن رفل قد يعمل، إلا أنه قد يكون بطيئًا جدًا. يمكنك معرفة كيفية تمكين تسريع الأجهزة بالنقر على الرابط أدناه:
enable-hardware-acceleration-link = الأسئلة الشائعة - تسريع أجهزة كروم
view-error-details = إعرض تفاصيل الخطأ
open-in-new-tab = إفتح في علامة تبويب جديدة
click-to-unmute = إنقر لإلغاء الكتم
clipboard-message-title = النسخ واللصق في رفل
clipboard-message-description =
    {$variant ->
       *[unsupported] متصفحك لا يدعم الوصول للحافظة الكاملة،
        [access-denied] تم رفض الوصول للحافظة،
    } لكن يمكنك إستخدام هذه الاختصارات دائمًا:
clipboard-message-copy = { " " } للنسخ
clipboard-message-cut = { " " } للقص
clipboard-message-paste = { " " } للصق
error-file-protocol =
    يبدو أنك تقوم بتشغيل رفل على بروتوكول "file:".
    هذا لن يعمل لأن المتصفحات تمنع العديد من الميزات من العمل لأسباب أمنية.
    بدلاً من ذلك، ندعوك إلى إعداد خادم محلي أو إستخدام عرض الويب أو تطبيق سطح المكتب.
error-javascript-config =
    تعرض رفل إلى مشكلة كبيرة بسبب الإعدادات الخاطئة للجافا سكريبت.
    إذا كنت مسؤول الخادم، نحن ندعوك إلى التحقق من تفاصيل الخطأ لمعرفة سبب المشكلة.
    يمكنك أيضًا الرجوع إلى ويكي رفل للحصول على المساعدة.
error-wasm-not-found =
    فشل رفل في تحميل مكون الملف ".wasm" المطلوب.
    إذا كنت مسؤول الخادم، يرجى التأكد من أن الملف قد تم تحميله بشكل صحيح.
    إذا استمرت المشكلة، قد تحتاج إلى إستخدام إعدادات "publicPath": الرجاء مراجعة ويكي رفل للحصول على المساعدة.
error-wasm-mime-type =
    واجه رفل مشكلة كبيرة أثناء محاولة التهيئة.
    خادم الويب هذا لا يخدم ملفات ". wasm" مع نوع MIME الصحيح.
    إذا كنت مسؤول الخادم، يرجى مراجعة ويكي رفل للحصول على المساعدة.
error-invalid-swf =
    لا يمكن لرفل تحليل الملف المطلوب.
    السبب الأكثر إحتمالاً هو أن الملف المطلوب ليس صالحًا.
error-swf-fetch =
    فشل رفل في تحميل ملف فلاش SWF.
    السبب الأكثر إحتمالاً هو أن الملف لم يعد موجودًا، لذلك لا يوجد شيء ليحمله رفل.
    حاول الإتصال بمسؤول الموقع للحصول على المساعدة.
error-swf-cors =
    فشل رفل في تحميل ملف فلاش SWF.
    من المحتمل أن إحضار الملف قد حُظِر بواسطة سياسة CORS.
    إذا كنت مسؤول الخادم، يرجى مراجعة رفل ويكي للحصول على المساعدة.
error-wasm-cors =
    فشل رفل في تحميل مكون ملف ".wasm" المطلوب.
    من المحتمل أن إحضار الملف قد حُظِر بواسطة سياسة CORS.
    إذا كنت مسؤول الخادم، يرجى مراجعة رفل ويكي للحصول على المساعدة.
error-wasm-invalid =
    واجه رفل مشكلة كبيرة أثناء محاولة التهيئة.
    يبدو أن هذه الصفحة تحتوي على ملفات مفقودة أو غير صالحة لتشغيل رفل.
    إذا كنت مسؤول الخادم، يرجى مراجعة ويكي رفل للحصول على المساعدة.
error-wasm-download =
    واجه رفل مشكلة كبيرة أثناء محاولتها التهيئة.
    هذا يمكن أن يحل نفسه في كثير من الأحيان، لذلك يمكنك محاولة إعادة تحميل الصفحة.
    وإلا يرجى الاتصال بمدير الموقع.
error-wasm-disabled-on-edge =
    فشل Ruffle في تحميل مكون الملف ".wasm" المطلوب.
    لإصلاح هذه المشكلة، حاول فتح إعدادات متصفحك، ثم إنقر فوق "الخصوصية، البحث، الخدمات"، والتمرير لأسفل، وإيقاف "تعزيز أمانك على الويب".
    هذا سيسمح لمتصفحك بتحميل الملفات ".wasm" المطلوبة.
    إذا إستمرت المشكلة، قد تحتاج إلى إستخدام متصفح أخر.
error-wasm-unsupported-browser =
    لا يدعم المتصفح الذي تستخدمه امتدادات WebAssembly الذي يتطلبه رفل لتشغيله.
    رجاءً انتقل لمتصفح داعم.
    يمكنك إيجاد لائحة للمتصفحات الداعمة في الويكي.
error-javascript-conflict =
    واجه رفل مشكلة كبيرة أثناء محاولة التهيئة.
    يبدو أن هذه الصفحة تستخدم كود جافا سكريبت الذي يتعارض مع رفل.
    إذا كنت مسؤول الخادم، فإننا ندعوك إلى محاولة تحميل الملف على صفحة فارغة.
error-javascript-conflict-outdated = يمكنك أيضًا محاولة تحميل نسخة أحدث من رفل التي قد تحل المشكلة (النسخة الحالية قديمة: { $buildDate }).
error-csp-conflict =
    واجه Ruffle مشكلة كبيرة أثناء محاولة التهيئة.
    لا تسمح سياسة أمان المحتوى لخادم الويب هذا بتشغيل مكون ".wasm" المطلوب.
    إذا كنت مسؤول الخادم، يرجى الرجوع إلى ويكي Ruffle للحصول على المساعدة.
error-unknown =
    واجه رفل مشكلة كبيرة أثناء محاولة عرض محتوى الفلاش هذا.
    { $outdated ->
        [true] إذا كنت مسؤول الخادم، يرجى محاولة تحميل إصدار أحدث من رفل (النسخة الحالية قديمة: { $buildDate }).
       *[false] ليس من المفترض أن يحدث هذا، لذلك نحن نقدر حقًا إذا بلغت عن الخطأ!
    }
`,"save-manager.ftl":`save-delete-prompt = هل أنت متأكد أنك تريد حذف ملف الحفظ هذا؟
save-reload-prompt =
    الطريقة الوحيدة لـ { $action ->
        [delete] حذف
       *[replace] إستبدال
    } ملف الحفظ هذا دون تعارض محتمل هي إعادة تحميل هذه الصفحة. هل ترغب في المتابعة على أي حال؟
save-download = حمّل
save-replace = إستبدل
save-delete = إحذف
save-backup-all = حمّل جميع ملفات الحفظ
`,"volume-controls.ftl":`volume-controls-mute = إكتم
volume-controls-unmute = ألغِ الكتم
`},"ca-ES":{"context_menu.ftl":`context-menu-download-swf = Baixa el fitxer .swf
context-menu-copy-debug-info = Copia la informació de depuració
context-menu-open-save-manager = Obre el gestor d'emmagatzematge
context-menu-about-ruffle =
    { $flavor ->
        [extension] Quant a l'extensió de Ruffle ({ $version })
       *[other] Quant a Ruffle ({ $version })
    }
context-menu-hide = Amaga aquest menú
context-menu-exit-fullscreen = Surt de la pantalla completa
context-menu-enter-fullscreen = Pantalla completa
context-menu-volume-controls = Controls de volum
`,"messages.ftl":`message-cant-embed =
    Ruffle no ha pogut executar el contingut Flash incrustat en aquesta pàgina.
    Podeu provar d'obrir el fitxer en una pestanya a part per evitar aquest problema.
panic-title = Alguna cosa ha fallat :(
more-info = Més informació
run-anyway = Reprodueix igualment
continue = Continua
report-bug = Informa d'un error
update-ruffle = Actualitza Ruffle
ruffle-demo = Demostració web
ruffle-desktop = Aplicació d'escriptori
ruffle-wiki = Obre la wiki de Ruffle
view-error-details = Mostra detalls de l'error
open-in-new-tab = Obre en una pestanya nova
click-to-unmute = Feu clic per activar el so
error-file-protocol =
    Sembla que esteu executant Ruffle al protocol "file:".
    Això no funcionarà perquè els navegadors bloquegen moltes característiques per raons de seguretat. En comptes d'això, us suggerim que configureu un servidor local o bé utilitzeu la demostració web o l'aplicació d'escriptori.
error-javascript-config =
    Ruffle ha topat amb un problema greu a causa d'una configuració JavaScript errònia.
    Si sou l'administrador del servidor, us suggerim que comproveu els detalls de l'error per determinar el paràmetre culpable.
    També podeu consultar la wiki del Ruffle per obtenir ajuda.
error-wasm-not-found =
    Ruffle no ha pogut carregar el component de fitxer ".wasm" necessari.
    Si sou l'administrador del servidor, si us plau, comproveu que el fitxer ha estat carregat correctament.
    Si el problema continua, és possible que hàgiu d'utilitzar el parámetre "publicPath": us preguem que consulteu la wiki de Ruffle per obtenir ajuda.
error-wasm-mime-type =
    Ruffle ha topat amb un problema greu mentre provava d'inicialitzar-se.
    Aquest servidor no està servint els fitxers ".wasm" amb el tipus MIME adequat.
    Si sou l'administrador del servidor, us preguem que consulteu la wiki de Ruffle per obtenir ajuda.
error-invalid-swf =
    Ruffle no ha pogut llegir el fitxer sol·licitat.
    La raó més probable és que no sigui un fitxer SWF vàlid.
error-swf-fetch =
    Ruffle no ha pogut carregar el fitxer SWF Flash.
    La raó més probable és que el fitxer ja no existeixi, així que no hi ha res que el Ruffle pugui carregar.
    Proveu de contactar a l'administrador del lloc per obtenir ajuda.
error-swf-cors =
    Ruffle no ha pogut carregar el fitxer SWF Flash.
    És probable que l'accés a la càrrega hagi estat denegat per una política CORS.
    Si sou l'administrador del servidor, us preguem que consulteu la wiki del Ruffle per obtenir ajuda.
error-wasm-cors =
    Ruffle no ha pogut carregar el component de fitxer ".wasm" necessari.
    És probable que l'accés a la càrrega hagi estat denegat per una política CORS.
    Si sou l'administrador del servidor, us preguem que consulteu la wiki del Ruffle per obtenir ajuda.
error-wasm-invalid =
    Ruffle ha topat amb un problema greu mentre provava d'inicialitzar-se.
    Sembla que a aquest lloc li manquen fitxers o aquests no són vàlids per a l'execució de Ruffle.
    Si sou l'administrador del servidor, us preguem que consulteu la wiki de Ruffle per obtenir ajuda.
error-wasm-download =
    Ruffle ha topat amb un problema greu mentre provava d'inicialitzar-se.
    Això sovint això pot resoldre's sol, així que podeu provar de recarregar la pàgina.
    En cas contrari, us preguem que contacteu l'administrador del lloc.
error-wasm-disabled-on-edge =
    Ruffle no ha pogut carregar el component de fitxer ".wasm" necessari.
    Per a arreglar-ho, proveu d'obrir els paràmetres del navegador, feu clic sobre "Privadesa, cerca i serveis", i desactiveu "Prevenció de seguiment".
    Això permetrà que el vostre navegador carregui els fitxers ".wasm" necessaris.
    Si el problema continua, possiblement haureu d'utilitzar un altre navegador.
error-javascript-conflict =
    Ruffle ha topat amb un problema greu mentre provava d'inicialitzar-se.
    Sembla que aquest lloc fa servir codi JavaScript que entra en conflicte amb Ruffle.
    Si sou l'administrador del servidor, us preguem que consulteu la wiki de Ruffle per obtenir ajuda.
error-javascript-conflict-outdated = També podeu provar de carregar una versió més recent de Ruffle que podria resoldre el problema (la compilació actual està desactualitzada: { $buildDate }).
error-csp-conflict =
    Ruffle ha topat amb un problema greu mentre provava d'inicialitzar-se.
    La política de seguretat del contingut (CSP) no permet l'execució del component ".wasm" necessari.
    Si sou l'administrador del servidor, us preguem que consulteu la wiki de Ruffle per obtenir ajuda.
error-unknown =
    Ruffle ha topat amb un problema greu mentre provava de mostrar aquest contingut Flash.
    { $outdated ->
        [true] Si sou l'administrador del servidor, us preguem que proveu de carregar una versió més recent de Ruffle (la compilació actual està desactualitzada: { $buildDate }).
       *[false] Això no hauria d'haver passat, així que us agrairíem molt que n'informéssiu l'error!
    }
`,"save-manager.ftl":`save-delete-prompt = Segur que vols esborrar aquest fitxer desat?
save-reload-prompt =
    L'única forma d{ $action ->
        [delete] 'eliminar
       *[replace] e substituir
    } aquest fitxer desat sense crear un potencial conflicte és recarregant el contingut. Voleu continuar igualment?
save-download = Baixa
save-replace = Substitueix
save-delete = Elimina
save-backup-all = Baixa tots els fitxers desats
`,"volume-controls.ftl":`volume-controls-mute = Silenci
`},"cs-CZ":{"context_menu.ftl":`context-menu-download-swf = Stáhnout .swf
context-menu-copy-debug-info = Zkopírovat debug info
context-menu-open-save-manager = Otevřít správce uložení
context-menu-about-ruffle =
    { $flavor ->
         [extension] O Ruffle rozšíření ({ $version })
        *[other] O Ruffle ({ $version })
    }
context-menu-hide = Skrýt menu
context-menu-exit-fullscreen = Ukončit režim celé obrazovky
context-menu-enter-fullscreen = Přejít do režimu celé obrazovky
context-menu-volume-controls = Ovládání hlasitosti
`,"messages.ftl":`message-cant-embed =
    Ruffle nemohl spustit Flash vložený na této stránce.
    Můžete se pokusit otevřít soubor na samostatné kartě, abyste se vyhnuli tomuto problému.
panic-title = Něco se pokazilo :(
more-info = Další informace
run-anyway = Přesto spustit
continue = Pokračovat
report-bug = Nahlásit chybu
update-ruffle = Aktualizovat Ruffle
ruffle-demo = Web Demo
ruffle-desktop = Desktopová aplikace
ruffle-wiki = Zobrazit Ruffle Wiki
enable-hardware-acceleration = Zdá se, že hardwarová akcelerace je vypnutá. I když Ruffle funguje správně, může být nepřiměřeně pomalý. Jak povolit hardwarovou akceleraci zjistíte na tomto odkazu:
enable-hardware-acceleration-link = Časté dotazy - Hardwarová akcelerace Chrome
view-error-details = Zobrazit podrobnosti o chybě
open-in-new-tab = Otevřít na nové kartě
click-to-unmute = Kliknutím zrušíte ztlumení
clipboard-message-title = Kopírování a vkládání v Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Váš prohlížeč nepodporuje plný přístup ke schránce,
        [access-denied] Přístup ke schránce byl odepřen,
    } ale místo toho můžete vždy použít tyto zkratky:
clipboard-message-copy = { " " } pro kopírování
clipboard-message-cut = { " " } pro vystřihování
clipboard-message-paste = { " " } pro vkládání
error-canvas-reload = Nelze znovu načíst pomocí vykreslovače plátna, pokud je vykreslovač plátna již používán.
error-file-protocol =
    Zdá se, že používáte Ruffle na protokolu "file:".
    To není možné, protože prohlížeče blokují fungování mnoha funkcí z bezpečnostních důvodů.
    Namísto toho vám doporučujeme nastavit lokální server nebo použít web demo či desktopovou aplikaci.
error-javascript-config =
    Ruffle narazil na problém v důsledku nesprávné konfigurace JavaScriptu.
    Pokud jste správcem serveru, doporučujeme vám zkontrolovat podrobnosti o chybě, abyste zjistili, který parametr je vadný.
    Pomoc můžete získat také na wiki Ruffle.
error-wasm-not-found =
    Ruffle se nepodařilo načíst požadovanou komponentu souboru „.wasm“.
    Pokud jste správcem serveru, zkontrolujte, zda byl soubor správně nahrán.
    Pokud problém přetrvává, možná budete muset použít nastavení „publicPath“: pomoc naleznete na wiki Ruffle.
error-wasm-mime-type =
    Ruffle narazil na problém při pokusu o inicializaci.
    Tento webový server neposkytuje soubory „.wasm“ se správným typem MIME.
    Pokud jste správcem serveru, nápovědu najdete na Ruffle wiki.
error-invalid-swf =
    Ruffle nemůže zpracovat požadovaný soubor.
    Nejpravděpodobnějším důvodem je, že požadovaný soubor není platným souborem SWF.
error-swf-fetch =
    Ruffle se nepodařilo načíst SWF soubor Flash.
    Nejpravděpodobnějším důvodem je, že soubor již neexistuje, takže Ruffle nemá co načíst.
    Zkuste požádat o pomoc správce webu.
error-swf-cors =
    Ruffle se nepodařilo načíst SWF soubor Flash.
    Přístup k načítání byl pravděpodobně zablokován politikou CORS.
    Pokud jste správcem serveru, nápovědu najdete na Ruffle wiki.
error-wasm-cors =
    Ruffle se nepodařilo načíst požadovanou komponentu souboru „.wasm“.
    Přístup k načítání byl pravděpodobně zablokován politikou CORS.
    Pokud jste správcem serveru, nápovědu najdete na Ruffle wiki.
error-wasm-invalid =
    Ruffle narazil na problém při pokusu o inicializaci.
    Zdá se, že na této stránce chybí nebo jsou neplatné soubory ke spuštění Ruffle.
    Pokud jste správcem serveru, nápovědu najdete na Ruffle wiki.
error-wasm-download =
    Ruffle narazil na problém při pokusu o inicializaci.
    Problém se může vyřešit i sám, takže můžete zkusit stránku načíst znovu.
    V opačném případě kontaktujte administrátora stránky.
error-wasm-disabled-on-edge =
    Ruffle se nepodařilo načíst požadovanou komponentu souboru „.wasm“.
    Chcete-li tento problém vyřešit, zkuste otevřít nastavení prohlížeče, klikněte na položku „Ochrana osobních údajů, vyhledávání a služby“, přejděte dolů a vypněte možnost „Zvyšte svou bezpečnost na webu“.
    Vašemu prohlížeči to umožní načíst požadované soubory „.wasm“.
    Pokud problém přetrvává, budete možná muset použít jiný prohlížeč.
error-wasm-unsupported-browser =
    Prohlížeč, který používáte, nepodporuje rozšíření WebAssembly, které Ruffle vyžaduje ke spuštění.
    Přejděte na podporovaný prohlížeč.
    Seznam podporovaných prohlížečů naleznete na Wiki.
error-javascript-conflict =
    Ruffle narazil na problém při pokusu o inicializaci.
    Zdá se, že tato stránka používá kód JavaScript, který je v konfliktu s Ruffle.
    Pokud jste správcem serveru, doporučujeme vám zkusit načíst soubor na prázdnou stránku.
error-javascript-conflict-outdated = Můžete se také pokusit nahrát novější verzi Ruffle, která může daný problém vyřešit (aktuální build je zastaralý: { $buildDate }).
error-csp-conflict =
    Ruffle narazil na problém při pokusu o inicializaci.
    Zásady zabezpečení obsahu tohoto webového serveru nepovolují spuštění požadované komponenty „.wasm“.
    Pokud jste správcem serveru, nápovědu najdete na Ruffle wiki.
error-unknown =
    Ruffle narazil na problém při pokusu zobrazit tento Flash obsah.
    { $outdated ->
          [true] Pokud jste správcem serveru, zkuste nahrát novější verzi Ruffle (aktuální build je zastaralý: { $buildDate }).
         *[false] Toto by se nemělo stát, takže bychom opravdu ocenili, kdybyste mohli nahlásit chybu!
    }
`,"save-manager.ftl":`save-delete-prompt = Opravdu chcete odstranit tento soubor s uloženými pozicemi?
save-reload-prompt =
    Jediný způsob, jak { $action ->
          [delete] vymazat
         *[replace] nahradit
    } tento soubor s uloženými pozicemi bez potenciálního konfliktu je opětovné načtení tohoto obsahu. Chcete přesto pokračovat?
save-download = Stáhnout
save-replace = Nahradit
save-delete = Vymazat
save-backup-all = Stáhnout všechny soubory s uloženými pozicemi
`,"volume-controls.ftl":`volume-controls-mute = Ztlumit
volume-controls-unmute = Zrušit ztlumení
`},"de-DE":{"context_menu.ftl":`context-menu-download-swf = .swf herunterladen
context-menu-copy-debug-info = Debug-Info kopieren
context-menu-open-save-manager = Dateimanager öffnen
context-menu-about-ruffle =
    { $flavor ->
        [extension] Über Ruffle Erweiterung ({ $version })
       *[other] Über Ruffle ({ $version })
    }
context-menu-hide = Menü ausblenden
context-menu-exit-fullscreen = Vollbild verlassen
context-menu-enter-fullscreen = Vollbildmodus aktivieren
context-menu-volume-controls = Lautstärke einstellen
`,"messages.ftl":`message-cant-embed =
    Ruffle konnte den Flash in dieser Seite nicht ausführen.
    Du kannst versuchen, die Datei in einem separaten Tab zu öffnen, um dieses Problem zu umgehen.
panic-title = Etwas ist schief gelaufen
more-info = Weitere Informationen
run-anyway = Trotzdem ausführen
continue = Fortfahren
report-bug = Fehler melden
update-ruffle = Ruffle aktuallisieren
ruffle-demo = Web-Demo
ruffle-desktop = Desktop-Anwendung
ruffle-wiki = Ruffle-Wiki anzeigen
enable-hardware-acceleration = Es sieht so aus, als ob die Hardwarebeschleunigung deaktiviert ist. Ruffle kann zwar funktionieren, könnte aber sehr langsam sein. Wie Sie die Hardwarebeschleunigung aktivieren können, erfahren Sie unter dem folgenden Link:
enable-hardware-acceleration-link = FAQ - Chrome Hardwarebeschleunigung
view-error-details = Fehlerdetails anzeigen
open-in-new-tab = In einem neuen Tab öffnen
click-to-unmute = Klicke zum Entmuten
clipboard-message-title = Kopieren und Einfügen in Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Dein Browser unterstützt keinen vollständigen Zugriff auf die Zwischenablage,
        [access-denied] Zugriff auf die Zwischenablage wurde verweigert,
    } aber du kannst stattdessen auch diese Tastenkombinationen verwenden:
clipboard-message-copy = { " " } zum Kopieren
clipboard-message-cut = { " " } zum Ausschneiden
clipboard-message-paste = { " " } zum Einfügen
error-canvas-reload = Canvas Renderer kann nicht neu geladen werden, während er in Verwendung ist.
error-file-protocol =
    Es scheint, dass Sie Ruffle auf dem "file:"-Protokoll ausführen.
    Jedoch werden aus Sicherheitsgründen viele Funktionen vom Browser blockiert, weswegen die Datei nicht geladen werden kann.
    Setzen Sie stattdessen einen lokalen Server auf, verwenden Sie die Webdemo oder die Desktop-Anwendung.
error-javascript-config =
    Ruffle ist aufgrund einer falschen JavaScript-Konfiguration auf ein Problem gestoßen.
    Wenn du der Server-Administrator bist, laden wir dich ein, die Fehlerdetails zu überprüfen, um herauszufinden, welcher Parameter fehlerhaft ist.
    Sie können auch das Ruffle-Wiki für Hilfe konsultieren.
error-wasm-not-found =
    Ruffle konnte die erforderliche ".wasm"-Datei-Komponente nicht laden.
    Wenn Sie der Server-Administrator sind, stellen Sie bitte sicher, dass die Datei korrekt hochgeladen wurde.
    Wenn das Problem weiterhin besteht, müssen Sie unter Umständen die "publicPath"-Einstellung verwenden: Bitte konsultieren Sie das Ruffle-Wiki für Hilfe.
error-wasm-mime-type =
    Ruffle ist auf ein Fehler beim Initialisieren gestoßen.
    Dieser Webserver dient nicht ". asm"-Dateien mit dem korrekten MIME-Typ.
    Wenn Sie der Server-Administrator sind, konsultieren Sie bitte das Ruffle-Wiki für Hilfe.
error-invalid-swf =
    Ruffle konnte die angegebene Datei nicht lesen.
    Am wahrscheinlichsten ist die angegebene Datei keine gültige SWF.
error-swf-fetch =
    Ruffle konnte die Flash-SWF-Datei nicht laden.
    Der wahrscheinlichste Grund ist, dass die Datei nicht mehr existiert, so dass Ruffle nicht geladen werden kann.
    Kontaktieren Sie den Website-Administrator für Hilfe.
error-swf-cors =
    Ruffle konnte die Flash-SWF-Datei nicht laden.
    Der Zugriff auf den Abruf wurde wahrscheinlich durch die CORS-Richtlinie blockiert.
    Wenn Sie der Server-Administrator sind, konsultieren Sie bitte das Ruffle-Wiki für Hilfe.
error-wasm-cors =
    Ruffle konnte die Flash-SWF-Datei nicht laden.
    Der Zugriff auf den Abruf wurde wahrscheinlich durch die CORS-Richtlinie blockiert.
    Wenn Sie der Server-Administrator sind, konsultieren Sie bitte das Ruffle-Wiki für Hilfe.
error-wasm-invalid =
    Ruffle ist auf ein Fehler beim Initialisieren gestoßen.
    Dieser Webserver dient nicht ". asm"-Dateien mit dem korrekten MIME-Typ.
    Wenn Sie der Server-Administrator sind, konsultieren Sie bitte das Ruffle-Wiki für Hilfe.
error-wasm-download =
    Ruffle ist auf ein Fehler beim Initialisieren gestoßen.
    Dies kann sich oft selbst beheben, so dass Sie versuchen können, die Seite neu zu laden.
    Andernfalls kontaktieren Sie bitte den Website-Administrator.
error-wasm-disabled-on-edge =
    Ruffle konnte die erforderliche ".wasm"-Datei-Komponente nicht laden.
    Um dies zu beheben, versuche die Einstellungen deines Browsers zu öffnen, klicke auf "Privatsphäre, Suche und Dienste", scrollen nach unten und schalte "Verbessere deine Sicherheit im Web" aus.
    Dies erlaubt Ihrem Browser die erforderlichen ".wasm"-Dateien zu laden.
    Wenn das Problem weiterhin besteht, müssen Sie möglicherweise einen anderen Browser verwenden.
error-wasm-unsupported-browser =
    Der verwendete Browser unterstützt die WebAssembly Erweiterungen nicht welche Ruffle zur Ausführung benötigt.
    Bitte verwende einen unterstützen Browser.
    Du kannst eine Liste der unterstützten Browser in der Wiki finden.
error-javascript-conflict =
    Ruffle ist auf ein Fehler beim Initialisieren gestoßen.
    Es scheint, als ob diese Seite JavaScript-Code verwendet, der mit Ruffle kollidiert.
    Wenn Sie der Server-Administrator sind, laden wir Sie ein, die Datei auf einer leeren Seite zu laden.
error-javascript-conflict-outdated = Du kannst auch versuchen, eine neuere Version von Ruffle hochzuladen, die das Problem umgehen könnte (aktuelle Version ist veraltet: { $buildDate }).
error-csp-conflict =
    Ruffle ist auf ein Fehler beim Initialisieren gestoßen.
    Dieser Webserver dient nicht ". asm"-Dateien mit dem korrekten MIME-Typ.
    Wenn Sie der Server-Administrator sind, konsultieren Sie bitte das Ruffle-Wiki für Hilfe.
error-unknown =
    Bei dem Versuch, diesen Flash-Inhalt anzuzeigen, ist Ruffle auf ein großes Problem gestoßen.
    { $outdated ->
        [true] Wenn Sie der Server-Administrator sind, Bitte versuchen Sie, eine neuere Version von Ruffle hochzuladen (aktuelle Version ist veraltet: { $buildDate }).
       *[false] Dies soll nicht passieren, deshalb würden wir uns sehr darüber freuen, wenn Sie einen Fehler melden könnten!
    }
`,"save-manager.ftl":`save-delete-prompt = Sind Sie sicher, dass Sie diese Speicherdatei löschen möchten?
save-reload-prompt =
    Der einzige Weg zu { $action ->
        [delete] löschen
       *[replace] ersetzen
    } diese Speicherdatei ohne möglichen Konflikt ist das erneute Laden dieses Inhalts. Möchten Sie trotzdem fortfahren?
save-download = Herunterladen
save-replace = Ersetzen
save-delete = Löschen
save-backup-all = Alle gespeicherten Dateien herunterladen
`,"volume-controls.ftl":`volume-controls-mute = Stummschalten
volume-controls-unmute = Stummschaltung aufheben
`},"en-US":{"context_menu.ftl":`context-menu-download-swf = Download .swf
context-menu-copy-debug-info = Copy debug info
context-menu-open-save-manager = Open Save Manager
context-menu-about-ruffle =
    { $flavor ->
        [extension] About Ruffle Extension ({$version})
        *[other] About Ruffle ({$version})
    }
context-menu-hide = Hide this menu
context-menu-exit-fullscreen = Exit fullscreen
context-menu-enter-fullscreen = Enter fullscreen
context-menu-volume-controls = Volume controls
`,"messages.ftl":`message-cant-embed =
    Ruffle wasn't able to run the Flash embedded in this page.
    You can try to open the file in a separate tab, to sidestep this issue.
panic-title = Something went wrong :(
more-info = More info
run-anyway = Run anyway
continue = Continue
report-bug = Report Bug
update-ruffle = Update Ruffle
ruffle-demo = Web Demo
ruffle-desktop = Desktop Application
ruffle-wiki = View Ruffle Wiki
enable-hardware-acceleration = It looks like hardware acceleration is disabled. While Ruffle may work, it could be very slow. You can find out how to enable hardware acceleration by following the link below:
enable-hardware-acceleration-link = FAQ - Chrome Hardware Acceleration
view-error-details = View Error Details
open-in-new-tab = Open in a new tab
click-to-unmute = Click to unmute
clipboard-message-title = Copying and pasting in Ruffle
clipboard-message-description =
    { $variant ->
        *[unsupported] Your browser does not support full clipboard access,
        [access-denied] Access to the clipboard has been denied,
    } but you can always use these shortcuts instead:
clipboard-message-copy = { " " } for copy
clipboard-message-cut = { " " } for cut
clipboard-message-paste = { " " } for paste
error-canvas-reload = Cannot reload with the canvas renderer when the canvas renderer is already in use.
error-file-protocol =
    It appears you are running Ruffle on the "file:" protocol.
    This doesn't work as browsers block many features from working for security reasons.
    Instead, we invite you to setup a local server or either use the web demo or the desktop application.
error-javascript-config =
    Ruffle has encountered a major issue due to an incorrect JavaScript configuration.
    If you are the server administrator, we invite you to check the error details to find out which parameter is at fault.
    You can also consult the Ruffle wiki for help.
error-wasm-not-found =
    Ruffle failed to load the required ".wasm" file component.
    If you are the server administrator, please ensure the file has correctly been uploaded.
    If the issue persists, you may need to use the "publicPath" setting: please consult the Ruffle wiki for help.
error-wasm-mime-type =
    Ruffle has encountered a major issue whilst trying to initialize.
    This web server is not serving ".wasm" files with the correct MIME type.
    If you are the server administrator, please consult the Ruffle wiki for help.
error-invalid-swf =
    Ruffle cannot parse the requested file.
    The most likely reason is that the requested file is not a valid SWF.
error-swf-fetch =
    Ruffle failed to load the Flash SWF file.
    The most likely reason is that the file no longer exists, so there is nothing for Ruffle to load.
    Try contacting the website administrator for help.
error-swf-cors =
    Ruffle failed to load the Flash SWF file.
    Access to fetch has likely been blocked by CORS policy.
    If you are the server administrator, please consult the Ruffle wiki for help.
error-wasm-cors =
    Ruffle failed to load the required ".wasm" file component.
    Access to fetch has likely been blocked by CORS policy.
    If you are the server administrator, please consult the Ruffle wiki for help.
error-wasm-invalid =
    Ruffle has encountered a major issue whilst trying to initialize.
    It seems like this page has missing or invalid files for running Ruffle.
    If you are the server administrator, please consult the Ruffle wiki for help.
error-wasm-download =
    Ruffle has encountered a major issue whilst trying to initialize.
    This can often resolve itself, so you can try reloading the page.
    Otherwise, please contact the website administrator.
error-wasm-disabled-on-edge =
    Ruffle failed to load the required ".wasm" file component.
    To fix this, try opening your browser's settings, clicking "Privacy, search, and services", scrolling down, and turning off "Enhance your security on the web".
    This will allow your browser to load the required ".wasm" files.
    If the issue persists, you might have to use a different browser.
error-wasm-unsupported-browser =
    The browser you are using does not support the WebAssembly extensions Ruffle requires to run.
    Please switch to a supported browser.
    You can find a list of supported browsers on the Wiki.
error-javascript-conflict =
    Ruffle has encountered a major issue whilst trying to initialize.
    It seems like this page uses JavaScript code that conflicts with Ruffle.
    If you are the server administrator, we invite you to try loading the file on a blank page.
error-javascript-conflict-outdated = You can also try to upload a more recent version of Ruffle that may circumvent the issue (current build is outdated: {$buildDate}).
error-csp-conflict =
    Ruffle has encountered a major issue whilst trying to initialize.
    This web server's Content Security Policy does not allow the required ".wasm" component to run.
    If you are the server administrator, please consult the Ruffle wiki for help.
error-unknown =
    Ruffle has encountered a major issue whilst trying to display this Flash content.
    {$outdated ->
        [true] If you are the server administrator, please try to upload a more recent version of Ruffle (current build is outdated: {$buildDate}).
        *[false] This isn't supposed to happen, so we'd really appreciate if you could file a bug!
    }
`,"save-manager.ftl":`save-delete-prompt = Are you sure you want to delete this save file?
save-reload-prompt =
    The only way to {$action ->
    [delete] delete
    *[replace] replace
    } this save file without potential conflict is to reload this content. Do you wish to continue anyway?
save-download = Download
save-replace = Replace
save-delete = Delete
save-backup-all = Download all save files`,"volume-controls.ftl":`volume-controls-mute = Mute
volume-controls-unmute = Unmute
`},"es-ES":{"context_menu.ftl":`context-menu-download-swf = Descargar .swf
context-menu-copy-debug-info = Copiar Información de depuración
context-menu-open-save-manager = Abrir gestor de guardado
context-menu-about-ruffle =
    { $flavor ->
        [extension] Sobre la extensión de Ruffle ({ $version })
       *[other] Sobre Ruffle ({ $version })
    }
context-menu-hide = Ocultar este menú
context-menu-exit-fullscreen = Salir de pantalla completa
context-menu-enter-fullscreen = Entrar a pantalla completa
context-menu-volume-controls = Controles de volumen
`,"messages.ftl":`message-cant-embed =
    Ruffle no pudo ejecutar el Flash incrustado en esta página.
    Puedes intentar abrir el archivo en una pestaña aparte, para evitar este problema.
panic-title = Algo salió mal :(
more-info = Más info
run-anyway = Ejecutar de todos modos
continue = Continuar
report-bug = Reportar un Error
update-ruffle = Actualizar Ruffle
ruffle-demo = Demostración de web
ruffle-desktop = Aplicación de Desktop
ruffle-wiki = Ver la página wiki
enable-hardware-acceleration = Al parecer, la aceleración de hardware está deshabilitada. Puede que Ruffle funcione, pero este podría funcionar muy lentamente. Puedes averiguar como habilitar aceleración de hardware presionando el enlace:
enable-hardware-acceleration-link = Preguntas frecuentes sobre la aceleración de hardware en Chrome
view-error-details = Ver los detalles del error
open-in-new-tab = Abrir en una pestaña nueva
click-to-unmute = Haz clic para dejar de silenciar
clipboard-message-title = Para copiar y pegar en Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Este navegador no apoya acceso completo al portapapeles,
        [access-denied] Se ha denegado el acceso al portapapeles,
    } pero siempre se puede utilizar estos atajos:
clipboard-message-copy = Para copiar
clipboard-message-cut = Para cortar
clipboard-message-paste = Para pegar
error-canvas-reload = No se puede recargar con el renderizado de lienzo cuando este ya está en uso.
error-file-protocol =
    Parece que está ejecutando Ruffle en el protocolo "archivo:".
    Esto no funciona porque los navegadores bloquean que muchas características funcionen por razones de seguridad.
    En su lugar, le invitamos a configurar un servidor local o bien usar la demostración web o la aplicación de desktop.
error-javascript-config =
    Ruffle ha encontrado un problema crítico debido a una configuración JavaScript incorrecta.
    Si usted es el administrador del servidor, le invitamos a comprobar los detalles del error para averiguar qué parámetro está en falta.
    También puedes consultar la wiki de Ruffle para obtener ayuda.
error-wasm-not-found =
    Ruffle no pudo cargar el componente de archivo ".wasm" requerido.
    Si usted es el administrador del servidor, asegúrese de que el archivo ha sido subido correctamente.
    Si el problema persiste, puede que necesite usar la configuración "publicPath": por favor consulte la wiki de Ruffle para obtener ayuda.
error-wasm-mime-type =
    Ruffle ha encontrado un problema crítico al intentar inicializar.
    Este servidor web no está sirviendo archivos wasm" con el tipo MIME correcto.
    Si usted es el administrador del servidor, consulte la wiki de Ruffle para obtener ayuda.
error-invalid-swf = Ruffle no puede analizar el archivo solicitado. La razón más probable es que no es un archivo válido SWF.
error-swf-fetch =
    Ruffle no pudo cargar el archivo Flash SWF.
    La razón más probable es que el archivo ya no existe, así que no hay nada para cargar Ruffle.
    Intente ponerse en contacto con el administrador del sitio web para obtener ayuda.
error-swf-cors =
    Ruffle no pudo cargar el archivo Flash SWF.
    Es probable que el acceso a la búsqueda haya sido bloqueado por la política CORS.
    Si usted es el administrador del servidor, consulte la wiki de Ruffle para obtener ayuda.
error-wasm-cors =
    Ruffle no pudo cargar el archivo ".wasm."
    Es probable que el acceso a la búsqueda o la llamada a la función fetch haya sido bloqueado por la política CORS.
    Si usted es el administrador del servidor, consulte la wiki de Ruffle para obtener ayuda.
error-wasm-invalid =
    Ruffle ha encontrado un problema crítico al intentar inicializar.
    Este servidor web no está sirviendo archivos wasm" con el tipo Mime correcto.
    Si usted es el administrador del servidor, consulte la wiki de Ruffle para obtener ayuda.
error-wasm-download =
    Ruffle ha encontrado un problema crítico mientras intentaba inicializarse.
    Esto a menudo puede resolverse por sí mismo, así que puede intentar recargar la página.
    De lo contrario, póngase en contacto con el administrador del sitio web.
error-wasm-disabled-on-edge =
    Ruffle no pudo cargar el componente de archivo ".wasm" requerido.
    Para solucionar esto, intenta abrir la configuración de tu navegador, haciendo clic en "Privacidad, búsqueda y servicios", desplazándote y apagando "Mejore su seguridad en la web".
    Esto permitirá a su navegador cargar los archivos ".wasm" necesarios.
    Si el problema persiste, puede que tenga que utilizar un navegador diferente.
error-wasm-unsupported-browser =
    Este navegador no apoya las extensiones de WebAssembly que Ruffle requiere para ejecutar.
    Por favor, cambia a un navegador apoyado.
    Se puede ver una lista de navegadores apoyados en el Wiki.
error-javascript-conflict =
    Ruffle ha encontrado un problema crítico mientras intentaba inicializarse.
    Parece que esta página utiliza código JavaScript que entra en conflicto con Ruffle.
    Si usted es el administrador del servidor, le invitamos a intentar cargar el archivo en una página en blanco.
error-javascript-conflict-outdated = También puedes intentar subir una versión más reciente de Ruffle que puede eludir el problema (la versión actual está desactualizada: { $buildDate }).
error-csp-conflict =
    Ruffle encontró un problema al intentar inicializarse.
    La Política de Seguridad de Contenido de este servidor web no permite el componente requerido ".wasm". 
    Si usted es el administrador del servidor, por favor consulta la wiki de Ruffle para obtener ayuda.
error-unknown =
    Ruffle ha encontrado un problema al tratar de mostrar el contenido Flash.
    { $outdated ->
        [true] Si usted es el administrador del servidor, intenta cargar una version más reciente de Ruffle (la version actual esta desactualizada: { $buildDate }).
       *[false] Esto no deberia suceder! apreciariamos que reportes el error!
    }
`,"save-manager.ftl":`save-delete-prompt = ¿Está seguro de querer eliminar este archivo de guardado?
save-reload-prompt =
    La única forma de { $action ->
        [delete] eliminar
       *[replace] sobreescribir
    } este archivo de guardado sin conflictos potenciales es reiniciando el contenido. ¿Desea continuar de todos modos?
save-download = Descargar
save-replace = Sobreescribir
save-delete = Borrar
save-backup-all = Borrar todos los archivos de guardado
`,"volume-controls.ftl":`volume-controls-mute = Silenciar
volume-controls-unmute = Desmutear
`},"fr-FR":{"context_menu.ftl":`context-menu-download-swf = Télécharger en tant que .swf
context-menu-copy-debug-info = Copier les infos de débogage
context-menu-open-save-manager = Ouvrir le gestionnaire de stockage
context-menu-about-ruffle =
    { $flavor ->
        [extension] À propos de l'Extension Ruffle ({ $version })
       *[other] À propos de Ruffle ({ $version })
    }
context-menu-hide = Masquer ce menu
context-menu-exit-fullscreen = Sortir du mode plein écran
context-menu-enter-fullscreen = Afficher en plein écran
context-menu-volume-controls = Contrôles du volume
`,"messages.ftl":`message-cant-embed =
    Ruffle n'a pas été en mesure de lire le fichier Flash intégré dans cette page.
    Vous pouvez essayer d'ouvrir le fichier dans un onglet isolé, pour contourner le problème.
panic-title = Une erreur est survenue :(
more-info = Plus d'infos
run-anyway = Exécuter quand même
continue = Continuer
report-bug = Signaler le bug
update-ruffle = Mettre à jour Ruffle
ruffle-demo = Démo en ligne
ruffle-desktop = Application de bureau
ruffle-wiki = Wiki de Ruffle
enable-hardware-acceleration = Il semblerait que l'accélération matérielle soit désactivée. Cela n'empêche généralement pas Ruffle de fonctionner, mais il peut être beaucoup plus lent. Vous pouvez trouver comment activer l'accélération matérielle en suivant le lien ci-dessous :
enable-hardware-acceleration-link = FAQ - Accélération matérielle dans Chrome
view-error-details = Détails de l'erreur
open-in-new-tab = Ouvrir dans un nouvel onglet
click-to-unmute = Cliquez pour activer le son
clipboard-message-title = Copier et coller dans Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Votre navigateur ne prend pas en charge l'accès au presse-papiers,
        [access-denied] L'accès au presse-papiers a été refusé,
    } mais vous pouvez toujours utiliser ces raccourcis clavier à la place :
clipboard-message-copy = { " " } pour copier
clipboard-message-cut = { " " } pour couper
clipboard-message-paste = { " " } pour coller
error-canvas-reload = Impossible de recharger avec le moteur de rendu canvas lorsque celui-ci est déjà en cours d'utilisation.
error-file-protocol =
    Il semblerait que vous exécutiez Ruffle sur le protocole "file:".
    Cela ne fonctionne pas car les navigateurs bloquent de nombreuses fonctionnalités pour des raisons de sécurité.
    Nous vous invitons soit à configurer un serveur local, soit à utiliser la démo en ligne ou l'application de bureau.
error-javascript-config =
    Ruffle a rencontré un problème majeur en raison d'une configuration JavaScript incorrecte.
    Si vous êtes l'administrateur du serveur, nous vous invitons à vérifier les détails de l'erreur pour savoir quel est le paramètre en cause.
    Vous pouvez également consulter le wiki de Ruffle pour obtenir de l'aide.
error-wasm-not-found =
    Ruffle n'a pas réussi à charger son fichier ".wasm".
    Si vous êtes l'administrateur du serveur, veuillez vous assurer que ce fichier a bien été mis en ligne.
    Si le problème persiste, il vous faudra peut-être utiliser le paramètre "publicPath" : veuillez consulter le wiki de Ruffle pour obtenir de l'aide.
error-wasm-mime-type =
    Ruffle a rencontré un problème majeur durant sa phase d'initialisation.
    Ce serveur web ne renvoie pas le bon type MIME pour les fichiers ".wasm".
    Si vous êtes l'administrateur du serveur, veuillez consulter le wiki de Ruffle pour obtenir de l'aide.
error-invalid-swf =
    Ruffle n'a pas été en mesure de lire le fichier demandé.
    La raison la plus probable est que ce fichier n'est pas un SWF valide.
error-swf-fetch =
    Ruffle n'a pas réussi à charger le fichier Flash.
    La raison la plus probable est que le fichier n'existe pas ou plus.
    Vous pouvez essayer de prendre contact avec l'administrateur du site pour obtenir plus d'informations.
error-swf-cors =
    Ruffle n'a pas réussi à charger le fichier Flash.
    La requête a probablement été rejetée en raison de la configuration du CORS.
    Si vous êtes l'administrateur du serveur, veuillez consulter le wiki de Ruffle pour obtenir de l'aide.
error-wasm-cors =
    Ruffle n'a pas réussi à charger son fichier ".wasm".
    La requête a probablement été rejetée en raison de la configuration du CORS.
    Si vous êtes l'administrateur du serveur, veuillez consulter le wiki de Ruffle pour obtenir de l'aide.
error-wasm-invalid =
    Ruffle a rencontré un problème majeur durant sa phase d'initialisation.
    Il semblerait que cette page comporte des fichiers manquants ou invalides pour exécuter Ruffle.
    Si vous êtes l'administrateur du serveur, veuillez consulter le wiki de Ruffle pour obtenir de l'aide.
error-wasm-download =
    Ruffle a rencontré un problème majeur durant sa phase d'initialisation.
    Le problème détecté peut souvent se résoudre de lui-même, donc vous pouvez essayer de recharger la page.
    Si le problème persiste, veuillez prendre contact avec l'administrateur du site.
error-wasm-disabled-on-edge =
    Ruffle n'a pas réussi à charger son fichier ".wasm".
    Pour résoudre ce problème, essayez d'ouvrir les paramètres de votre navigateur et de cliquer sur "Confidentialité, recherche et services". Puis, vers le bas de la page, désactivez l'option "Améliorez votre sécurité sur le web".
    Cela permettra à votre navigateur de charger les fichiers ".wasm".
    Si le problème persiste, vous devrez peut-être utiliser un autre navigateur.
error-wasm-unsupported-browser =
    Votre navigateur ne prend pas en charge les extensions WebAssembly nécessaires au fonctionnement de Ruffle.
    Veuillez utiliser un navigateur les prenant en charge.
    Vous pouvez trouver une liste de navigateurs fonctionnant avec Ruffle sur le wiki.
error-javascript-conflict =
    Ruffle a rencontré un problème majeur durant sa phase d'initialisation.
    Il semblerait que cette page contienne du code JavaScript qui entre en conflit avec Ruffle.
    Si vous êtes l'administrateur du serveur, nous vous invitons à essayer de charger le fichier dans une page vide.
error-javascript-conflict-outdated = Vous pouvez également essayer de mettre en ligne une version plus récente de Ruffle qui pourrait avoir corrigé le problème (la version que vous utilisez est obsolète : { $buildDate }).
error-csp-conflict =
    Ruffle a rencontré un problème majeur durant sa phase d'initialisation.
    La stratégie de sécurité du contenu (CSP) de ce serveur web n'autorise pas l'exécution de fichiers ".wasm".
    Si vous êtes l'administrateur du serveur, veuillez consulter le wiki de Ruffle pour obtenir de l'aide.
error-unknown =
    Ruffle a rencontré un problème majeur durant l'exécution de ce contenu Flash.
    { $outdated ->
        [true] Si vous êtes l'administrateur du serveur, veuillez essayer de mettre en ligne une version plus récente de Ruffle (la version que vous utilisez est obsolète : { $buildDate }).
       *[false] Cela n'est pas censé se produire, donc nous vous serions reconnaissants si vous pouviez nous signaler ce bug !
    }
`,"save-manager.ftl":`save-delete-prompt = Voulez-vous vraiment supprimer ce fichier de sauvegarde ?
save-reload-prompt =
    La seule façon de { $action ->
        [delete] supprimer
       *[replace] remplacer
    } ce fichier de sauvegarde sans conflit potentiel est de recharger ce contenu. Souhaitez-vous quand même continuer ?
save-download = Télécharger
save-replace = Remplacer
save-delete = Supprimer
save-backup-all = Télécharger tous les fichiers de sauvegarde
`,"volume-controls.ftl":`volume-controls-mute = Rendre muet
volume-controls-unmute = Rendre audible
`},"he-IL":{"context_menu.ftl":`context-menu-download-swf = הורדת קובץ הswf.
context-menu-copy-debug-info = העתקת נתוני ניפוי שגיאות
context-menu-open-save-manager = פתח את מנהל השמירות
context-menu-about-ruffle =
    { $flavor ->
        [extension] אודות התוסף Ruffle ({ $version })
       *[other] אודות Ruffle ({ $version })
    }
context-menu-hide = הסתר תפריט זה
context-menu-exit-fullscreen = יציאה ממסך מלא
context-menu-enter-fullscreen = מסך מלא
context-menu-volume-controls = בקרת עוצמת קול
`,"messages.ftl":`message-cant-embed =
    Ruffle לא הצליח להריץ את תוכן הפלאש המוטמע בדף זה.
    אתה יכול לפתוח את הקובץ בלשונית נפרדת, על מנת לעקוף בעיה זו.
panic-title = משהו השתבש :(
more-info = מידע נוסף
run-anyway = הפעל בכל זאת
continue = המשך
report-bug = דווח על תקלה
update-ruffle = עדכן את Ruffle
ruffle-demo = הדגמה
ruffle-desktop = אפליקציית שולחן עבודה
ruffle-wiki = ראה את Ruffle wiki
enable-hardware-acceleration = נראה שהאצת החומרה שלך לא מופעלת. בעוד שRuffle עשוי לעבוד, הוא יכול להיות איטי. תוכל לראות כיצד להפעיל תכונה זו בלחיצה על הלינק הזה:
enable-hardware-acceleration-link = שאלות נפוצות - האצת החומרה של Chrome
view-error-details = ראה פרטי שגיאה
open-in-new-tab = פתח בכרטיסייה חדשה
click-to-unmute = לחץ על מנת לבטל השתקה
clipboard-message-title = העתקה והדבקה בRuffle
clipboard-message-copy = { " " } עבור העתקה
clipboard-message-cut = { " " } עבור גזירה
clipboard-message-paste = { " " } עבור הדבקה
error-file-protocol =
    נדמה שאתה מריץ את Ruffle תחת פרוטוקול "file:".
    זה לא יעבוד מכיוון שדפדפנים חוסמים אפשרויות רבות מלעבוד עקב סיבות אבטחה.
    במקום זה, אנו מזמינים אותך לאחסן אתר זה תחת שרת מקומי או הדגמה ברשת או דרך אפליקציית שולחן העבודה.
error-javascript-config =
    Ruffle נתקל בתקלה חמורה עקב הגדרת JavaScript שגויה.
    אם אתה מנהל האתר, אנו מזמינים אותך לבדוק את פרטי השגיאה על מנת למצוא איזה פרמטר הוא שגוי.
    אתה יכול לעיין ולהועץ בwiki של Ruffle על מנת לקבל עזרה.
error-wasm-not-found =
    Ruffle נכשל לטעון את קובץ ה"wasm." הדרוש.
    אם אתה מנהל האתר, אנא וודא כי הקובץ הועלה כשורה.
    אם הבעיה ממשיכה, ייתכן ותצטרך להשתמש בהגדרת "publicPath": אנא עיין והועץ בwiki של Ruffle על מנת לקבל עזרה.
error-wasm-mime-type =
    Ruffle נתקל בבעיה חמורה תוך כדי ניסיון לאתחל.
    שרתו של אתר זה לא משייך קבצי ".wasm" עם סוג הMIME הנכון.
    אם אתה מנהל האתר, אנא עיין והועץ בwiki של Ruffle על מנת לקבל עזרה.
error-invalid-swf =
    Ruffle לא יכול לנתח את הקובץ המבוקש.
    הסיבה הסבירה ביותר לבעיה זו היא בגלל שהקובץ המבוקש אינו SWF חוקי.
error-swf-fetch =
    Ruffle נכשל לטעון את קובץ הפלאש/swf. .
    זה נובע ככל הנראה מכיוון והקובץ לא קיים יותר, אז אין לRuffle מה לטעון.
    נסה ליצור קשר עם מנהל האתר על מנת לקבל עזרה.
error-swf-cors =
    Ruffle נכשל לטעון את קובץ הפלאש/swf. .
    גישה לfetch ככל הנראה נחסמה על ידי מדיניות CORS.
    אם אתה מנהל האתר, אנא עיין והועץ בwiki של Ruffle על מנת לקבל עזרה.
error-wasm-cors =
    Ruffle נכשל לטעון את קובץ ה".wasm" הדרוש.
    גישה לfetch ככל הנראה נחסמה על ידי מדיניות CORS.
    אם אתה מנהל האתר, אנא עיין והועץ בwiki של Ruffle על מנת לקבל עזרה.
error-wasm-invalid =
    Ruffle נתקל בבעיה חמורה תוך כדי ניסיון לאתחל.
    נדמה כי בדף זה חסרים או לא עובדים כראוי קבצים אשר משמשים את Ruffle כדי לפעול
    אם אתה מנהל האתר, אנא עיין והועץ בwiki של Ruffle על מנת לקבל עזרה.
error-wasm-download =
    Ruffle נתקל בבעיה חמורה תוך כדי ניסיון לאתחל.
    לעיתים בעיה זו יכולה לפתור את עצמה, אז אתה יכול לנסות לטעון מחדש את הדף זה.
    אם לא, אנא פנה למנהל האתר.
error-wasm-disabled-on-edge =
    Ruffle נכשל לטעון את קובץ ה".wasm" הדרוש.
    על מנת לתקן בעיה זו, נסה לפתוח את הגדרות הדפדפן שלך, לחץ על "אבטחה, חיפוש ושירות",
    גלול מטה, וכבה את "הגבר את האבטחה שלך ברשת".
    זה יאפשר לדפדפן שלך לטעון את קובץ ה".wasm" הדרוש.
    אם הבעיה ממשיכה, ייתכן ועליך להשתמש בדפדפן אחר.
error-wasm-unsupported-browser =
    הדפדפן שבו אתה משתמש אינו תומך בתוספי WebAssembly ש-Ruffle דורש כדי לפעול.
    אנא עבור לדפדפן נתמך.
    אתה יכול למצוא רשימה של דפדפנים נתמכים ב-Wiki שלנו.
error-javascript-conflict =
    Ruffle נתקל בבעיה חמורה תוך כדי ניסיון לאתחל.
    נדמה כי דף זה משתמש בקוד JavaScript אשר מתנגש עם Ruffle.
    אם אתה מנהל האתר, אנו מזמינים אותך לנסות לטעון את הדף תחת עמוד ריק.
error-javascript-conflict-outdated = בנוסף, אתה יכול לנסות ולהעלות גרסאות עדכניות של Ruffle אשר עלולים לעקוף בעיה זו (גרסה זו הינה מיושנת : { $buildDate }).
error-csp-conflict =
    Ruffle נתקל בבעיה חמורה תוך כדי ניסיון לאתחל.
    מדיניות אבטחת התוכן של שרתו של אתר זה אינה מאפשרת לקובץ ה"wasm." הדרוש לפעול.
    אם אתה מנהל האתר, אנא עיין והועץ בwiki של Ruffle על מנת לקבל עזרה.
error-unknown =
    Ruffle נתקל בבעיה חמורה בניסיון להציג את תוכן פלאש זה.
    { $outdated ->
        [true] אם אתה מנהל האתר, אנא נסה להעלות גרסה עדכנית יותר של Ruffle (גרסה זו הינה מיושנת:  { $buildDate }).
       *[false] זה לא אמור לקרות, נשמח אם תוכל לשתף תקלה זו!
    }
`,"save-manager.ftl":`save-delete-prompt = האם אתה בטוח שברצונך למחוק את קובץ שמירה זה?
save-reload-prompt =
    הדרך היחידה { $action ->
        [delete] למחוק
       *[replace] להחליף
    } את קובץ השמירה הזה מבלי לגרום לו להתנגש היא לטעון מחדש את תוכן זה. האם אתה רוצה להמשיך בכל זאת?
save-download = הורדה
save-replace = החלפה
save-delete = מחיקה
save-backup-all = הורדת כל קבצי השמירה
`,"volume-controls.ftl":`volume-controls-mute = השתק
volume-controls-unmute = ביטול השתקה
`},"hu-HU":{"context_menu.ftl":`context-menu-download-swf = .swf fájl letöltése
context-menu-copy-debug-info = Hibakeresési információk másolása
context-menu-open-save-manager = Mentéskezelő megnyitása
context-menu-about-ruffle =
    { $flavor ->
        [extension] A Ruffle kiegészítő ({ $version }) névjegye
       *[other] A Ruffle ({ $version }) névjegye
    }
context-menu-hide = Ezen menü elrejtése
context-menu-exit-fullscreen = Kilépés a teljes képernyőből
context-menu-enter-fullscreen = Váltás teljes képernyőre
context-menu-volume-controls = Hangerőszabályzó
`,"messages.ftl":`message-cant-embed =
    A Ruffle nem tudta futtatni az oldalba ágyazott Flash tartalmat.
    A probléma kikerüléséhez megpróbálhatod megnyitni a fájlt egy külön lapon.
panic-title = Valami baj történt :(
more-info = További információ
run-anyway = Futtatás mégis
continue = Folytatás
report-bug = Hiba jelentése
update-ruffle = Ruffle frissítése
ruffle-demo = Webes demó
ruffle-desktop = Asztali alkalmazás
ruffle-wiki = Ruffle Wiki megnyitása
enable-hardware-acceleration = Úgy tűnik, a hardveres gyorsítás ki van kapcsolva. Bár a Ruffle működhet, nagyon lassú lehet. Az alábbi hivatkozást követve megtudhatod, hogyan engedélyezd a hardveres gyorsítást:
enable-hardware-acceleration-link = GYIK - Chrome hardveres gyorsítás
view-error-details = Hiba részletei
open-in-new-tab = Megnyitás új lapon
click-to-unmute = Kattints a némítás feloldásához
clipboard-message-title = Másolás és beíllesztés a Ruffle-ben
clipboard-message-description =
    { $variant ->
       *[unsupported] A böngésződ nem támogatja a vágólaphoz való teljes hozzáférést,
        [access-denied] A vágólaphoz való hozzáférés el lett utasítva,
    } de mindig használhatod ezeket a gyorsbillentyűket helyette:
clipboard-message-copy = { " " } másoláshoz
clipboard-message-cut = { " " } kivágáshoz
clipboard-message-paste = { " " } beillesztéshez
error-canvas-reload = Újratöltés a canvas megjelenítővel nem lehetséges, ha már az van használatban.
error-file-protocol =
    Úgy tűnik, a Ruffle-t a "file:" protokollon futtatod.
    Ez nem működik, mivel így a böngészők biztonsági okokból számos funkció működését letiltják.
    Ehelyett azt ajánljuk hogy indíts egy helyi kiszolgálót, vagy használd a webes demót vagy az asztali alkalmazást.
error-javascript-config =
    A Ruffle komoly problémába ütközött egy helytelen JavaScript-konfiguráció miatt.
    Ha a szerver rendszergazdája vagy, kérjük, ellenőrizd a hiba részleteit, hogy megtudd, melyik paraméter a hibás.
    A Ruffle wikiben is találhatsz ehhez segítséget.
error-wasm-not-found =
    A Ruffle nem tudta betölteni a szükséges ".wasm" összetevőt.
    Ha a szerver rendszergazdája vagy, kérjük ellenőrizd, hogy a fájl megfelelően lett-e feltöltve.
    Ha a probléma továbbra is fennáll, előfordulhat, hogy a "publicPath" beállítást kell használnod: segítségért keresd fel a Ruffle wikit.
error-wasm-mime-type =
    A Ruffle komoly problémába ütközött az inicializálás során.
    Ez a webszerver a ".wasm" fájlokat nem a megfelelő MIME-típussal szolgálja ki.
    Ha a szerver rendszergazdája vagy, kérjük, keresd fel a Ruffle wikit segítségért.
error-invalid-swf =
    A Ruffle nem tudta értelmezni a kért fájlt.
    Ennek a legvalószínűbb oka az, hogy a kért fájl nem érvényes SWF.
error-swf-fetch =
    A Ruffle nem tudta betölteni a Flash SWF fájlt.
    A legvalószínűbb ok az, hogy a fájl már nem létezik, így a Ruffle számára nincs mit betölteni.
    Próbáld meg felvenni a kapcsolatot a webhely rendszergazdájával segítségért.
error-swf-cors =
    A Ruffle nem tudta betölteni a Flash SWF fájlt.
    A lekéréshez való hozzáférést valószínűleg letiltotta a CORS-házirend.
    Ha a szerver rendszergazdája vagy, kérjük, keresd fel a Ruffle wikit segítségért.
error-wasm-cors =
    A Ruffle nem tudta betölteni a szükséges ".wasm" összetevőt.
    A lekéréshez való hozzáférést valószínűleg letiltotta a CORS-házirend.
    Ha a szerver rendszergazdája vagy, kérjük keresd fel a Ruffle wikit segítségért.
error-wasm-invalid =
    A Ruffle komoly problémába ütközött az inicializálás során.
    Úgy tűnik, hogy ezen az oldalon hiányoznak vagy hibásak a Ruffle futtatásához szükséges fájlok.
    Ha a szerver rendszergazdája vagy, kérjük keresd fel a Ruffle wikit segítségért.
error-wasm-download =
    A Ruffle komoly problémába ütközött az inicializálás során.
    Ez gyakran magától megoldódik, ezért megpróbálhatod újratölteni az oldalt.
    Ellenkező esetben fordulj a webhely rendszergazdájához.
error-wasm-disabled-on-edge =
    A Ruffle nem tudta betölteni a szükséges ".wasm" összetevőt.
    A probléma megoldásához nyisd meg a böngésző beállításait, kattints az „Adatvédelem, keresés és szolgáltatások” elemre, görgess le, és kapcsold ki a „Fokozott biztonság a weben” opciót.
    Ez lehetővé teszi a böngésző számára, hogy betöltse a szükséges ".wasm" fájlokat.
    Ha a probléma továbbra is fennáll, lehet, hogy másik böngészőt kell használnod.
error-wasm-unsupported-browser =
    Az általad használt böngésző nem támogatja a Ruffle futtatásához szükséges WebAssembly kiegészítéseket.
    Kérlek, válts egy támogatott böngészőre.
    A támogatott böngészők listáját a Wikin találod.
error-javascript-conflict =
    A Ruffle komoly problémába ütközött az inicializálás során.
    Úgy tűnik, ez az oldal olyan JavaScript-kódot használ, amely ütközik a Ruffle-lel.
    Ha a kiszolgáló rendszergazdája vagy, kérjük, próbáld meg a fájlt egy üres oldalon betölteni.
error-javascript-conflict-outdated = Megpróbálhatod továbbá feltölteni a Ruffle egy újabb verzióját is, amely megkerülheti a problémát (a jelenlegi elavult: { $buildDate }).
error-csp-conflict =
    A Ruffle komoly problémába ütközött az inicializálás során.
    A kiszolgáló tartalombiztonsági házirendje nem teszi lehetővé a szükséges „.wasm” összetevők futtatását.
    Ha a szerver rendszergazdája vagy, kérjük, keresd fel a Ruffle wikit segítségért.
error-unknown =
    A Ruffle komoly problémába ütközött, miközben megpróbálta megjeleníteni ezt a Flash-tartalmat.
    { $outdated ->
        [true] Ha a szerver rendszergazdája vagy, kérjük, próbáld meg feltölteni a Ruffle egy újabb verzióját (a jelenlegi elavult: { $buildDate }).
       *[false] Ennek nem lett volna szabad megtörténnie, ezért nagyon hálásak lennénk, ha jeleznéd a hibát!
    }
`,"save-manager.ftl":`save-delete-prompt = Biztosan törölni akarod ezt a mentést?
save-reload-prompt =
    Ennek a mentésnek az esetleges konfliktus nélküli { $action ->
        [delete] törléséhez
       *[replace] cseréjéhez
    } újra kell tölteni a tartalmat. Mégis szeretnéd folytatni?
save-download = Letöltés
save-replace = Csere
save-delete = Törlés
save-backup-all = Az összes fájl letöltése
`,"volume-controls.ftl":`volume-controls-mute = Némítás
volume-controls-unmute = Némítás feloldása
`},"id-ID":{"context_menu.ftl":`context-menu-download-swf = Unduh .swf
context-menu-copy-debug-info = Salin info debug
context-menu-open-save-manager = Buka Manager Save
context-menu-about-ruffle =
    { $flavor ->
        [extension] Tentang Ekstensi Ruffle ({ $version })
       *[other] Tentang Ruffle ({ $version })
    }
context-menu-hide = Sembunyikan Menu ini
context-menu-exit-fullscreen = Keluar dari layar penuh
context-menu-enter-fullscreen = Masuk mode layar penuh
context-menu-volume-controls = Pengaturan Volume
`,"messages.ftl":`message-cant-embed =
    Ruffle tidak dapat menjalankan Flash yang disematkan di halaman ini.
    Anda dapat mencoba membuka file di tab terpisah, untuk menghindari masalah ini.
panic-title = Terjadi kesalahan :(
more-info = Info lebih lanjut
run-anyway = Jalankan
continue = Lanjutkan
report-bug = Laporkan Bug
update-ruffle = Perbarui Ruffle
ruffle-demo = Demo Web
ruffle-desktop = Aplikasi Desktop
ruffle-wiki = Kunjungi Wiki Ruffle
view-error-details = Tunjukan Detail Error
open-in-new-tab = Buka di Tab Baru
click-to-unmute = Tekan untuk menyalakan suara
error-file-protocol =
    Sepertinya anda menjalankan Ruffle di protokol "file:". 
    Ini tidak berfungsi karena browser memblokir fitur ini dengan alasan keamanan.
    Sebagai gantinya, kami mengajak anda untuk membuat server lokal, menggunakan demo web atau aplikasi desktop.
error-javascript-config =
    Ruffle mengalami masalah besar karena konfigurasi JavaScript yang salah.
    Jika Anda adalah administrator server ini, kami mengajak Anda untuk memeriksa detail kesalahan untuk mengetahui parameter mana yang salah.
    Anda juga dapat membaca wiki Ruffle untuk mendapatkan bantuan.
error-wasm-not-found =
    Ruffle gagal memuat komponen file ".wasm" yang diperlukan.
    Jika Anda adalah administrator server ini, pastikan file telah diunggah dengan benar.
    Jika masalah terus berlanjut, Anda mungkin perlu menggunakan pengaturan "publicPath": silakan baca wiki Ruffle untuk mendapatkan bantuan.
error-wasm-mime-type =
    Ruffle mengalami masalah ketika mencoba melakukan inisialisasi.
    Server web ini tidak melayani file ".wasm" dengan tipe MIME yang benar.
    Jika Anda adalah administrator server ini, silakan baca wiki Ruffle untuk mendapatkan bantuan.
error-swf-fetch =
    Ruffle gagal memuat file SWF Flash.
    Kemungkinan file tersebut sudah tidak ada, sehingga tidak dapat dimuat oleh Ruffle.
    Coba hubungi administrator situs web ini untuk mendapatkan bantuan.
error-swf-cors =
    Ruffle gagal memuat file SWF Flash.
    Akses untuk memuat kemungkinan telah diblokir oleh kebijakan CORS.
    Jika Anda adalah administrator server ini, silakan baca wiki Ruffle untuk mendapatkan bantuan.
error-wasm-cors =
    Ruffle gagal memuat komponen file ".wasm" yang diperlukan.
    Akses untuk mengambil kemungkinan telah diblokir oleh kebijakan CORS.
    Jika Anda adalah administrator server ini, silakan baca wiki Ruffle untuk mendapatkan bantuan.
error-wasm-invalid =
    Ruffle mengalami masalah besar ketika mencoba melakukan inisialisasi.
    Sepertinya halaman ini memiliki file yang hilang atau tidak valid untuk menjalankan Ruffle.
    Jika Anda adalah administrator server ini, silakan baca wiki Ruffle untuk mendapatkan bantuan.
error-wasm-download =
    Ruffle mengalami masalah besar ketika mencoba melakukan inisialisasi.
    Hal ini sering kali dapat teratasi dengan sendirinya, sehingga Anda dapat mencoba memuat ulang halaman.
    Jika tidak, silakan hubungi administrator situs web ini.
error-wasm-disabled-on-edge =
    Ruffle gagal memuat komponen file ".wasm" yang diperlukan.
    Untuk mengatasinya, coba buka pengaturan peramban Anda, klik "Privasi, pencarian, dan layanan", turun ke bawah, dan matikan "Tingkatkan keamanan Anda di web".
    Ini akan memungkinkan browser Anda memuat file ".wasm" yang diperlukan.
    Jika masalah berlanjut, Anda mungkin harus menggunakan browser yang berbeda.
error-javascript-conflict =
    Ruffle mengalami masalah besar ketika mencoba melakukan inisialisasi.
    Sepertinya situs web ini menggunakan kode JavaScript yang bertentangan dengan Ruffle.
    Jika Anda adalah administrator server ini, kami mengajak Anda untuk mencoba memuat file pada halaman kosong.
error-javascript-conflict-outdated = Anda juga dapat mencoba mengunggah versi Ruffle yang lebih baru yang mungkin dapat mengatasi masalah ini (versi saat ini sudah kedaluwarsa: { $buildDate }).
error-csp-conflict =
    Ruffle mengalami masalah besar ketika mencoba melakukan inisialisasi.
    Kebijakan Keamanan Konten server web ini tidak mengizinkan komponen ".wasm" yang diperlukan untuk dijalankan.
    Jika Anda adalah administrator server ini, silakan baca wiki Ruffle untuk mendapatkan bantuan.
error-unknown =
    Ruffle telah mengalami masalah besar saat menampilkan konten Flash ini.
    { $outdated ->
        [true] Jika Anda administrator server ini, cobalah untuk mengganti versi Ruffle yang lebih baru (versi saat ini sudah kedaluwarsa: { $buildDate }).
       *[false] Hal ini seharusnya tidak terjadi, jadi kami sangat menghargai jika Anda dapat melaporkan bug ini!
    }
`,"save-manager.ftl":`save-delete-prompt = Anda yakin ingin menghapus berkas ini?
save-reload-prompt =
    Satu-satunya cara untuk { $action ->
        [delete] menghapus
       *[replace] mengganti
    } berkas penyimpanan ini tanpa potensi konflik adalah dengan memuat ulang konten ini. Apakah Anda ingin melanjutkannya?
save-download = Unduh
save-replace = Ganti
save-delete = Hapus
save-backup-all = Unduh semua berkas penyimpanan
`,"volume-controls.ftl":`volume-controls-mute = Bisukan
`},"it-IT":{"context_menu.ftl":`context-menu-download-swf = Scarica .swf
context-menu-copy-debug-info = Copia informazioni di debug
context-menu-open-save-manager = Apri Gestione salvataggi
context-menu-about-ruffle =
    { $flavor ->
        [extension] Informazioni su Ruffle Extension ({ $version })
       *[other] Informazioni su Ruffle ({ $version })
    }
context-menu-hide = Nascondi questo menu
context-menu-exit-fullscreen = Esci dallo schermo intero
context-menu-enter-fullscreen = Entra a schermo intero
context-menu-volume-controls = Controlli volume
`,"messages.ftl":`message-cant-embed =
    Ruffle non è stato in grado di eseguire il Flash incorporato in questa pagina.
    Puoi provare ad aprire il file in una scheda separata, per evitare questo problema.
panic-title = Qualcosa è andato storto :(
more-info = Maggiori informazioni
run-anyway = Esegui comunque
continue = Continua
report-bug = Segnala Un Bug
update-ruffle = Aggiorna Ruffle
ruffle-demo = Demo Web
ruffle-desktop = Applicazione Desktop
ruffle-wiki = Visualizza Ruffle Wiki
enable-hardware-acceleration = Sembra che l'accelerazione hardware sia disabilitata. Sebbene Ruffle possa funzionare, potrebbe essere molto lento. Puoi scoprire come abilitare l'accelerazione hardware seguendo il link seguente:
view-error-details = Visualizza Dettagli Errore
open-in-new-tab = Apri in una nuova scheda
click-to-unmute = Clicca per riattivare l'audio
error-file-protocol =
    Sembra che tu stia eseguendo Ruffle sul protocollo "file:".
    Questo non funziona come browser blocca molte funzionalità di lavoro per motivi di sicurezza.
    Invece, ti invitiamo a configurare un server locale o a utilizzare la demo web o l'applicazione desktop.
error-javascript-config =
    Ruffle ha incontrato un problema importante a causa di una configurazione JavaScript non corretta.
    Se sei l'amministratore del server, ti invitiamo a controllare i dettagli dell'errore per scoprire quale parametro è in errore.
    Puoi anche consultare il wiki Ruffle per aiuto.
error-wasm-not-found =
    Ruffle non è riuscito a caricare il componente di file ".wasm".
    Se sei l'amministratore del server, assicurati che il file sia stato caricato correttamente.
    Se il problema persiste, potrebbe essere necessario utilizzare l'impostazione "publicPath": si prega di consultare il wiki Ruffle per aiuto.
error-wasm-mime-type =
    Ruffle ha incontrato un problema importante durante il tentativo di inizializzazione.
    Questo server web non serve ". asm" file con il tipo MIME corretto.
    Se sei l'amministratore del server, consulta la wiki Ruffle per aiuto.
error-swf-fetch =
    Ruffle non è riuscito a caricare il file Flash SWF.
    La ragione più probabile è che il file non esiste più, quindi non c'è nulla che Ruffle possa caricare.
    Prova a contattare l'amministratore del sito web per aiuto.
error-swf-cors =
    Ruffle non è riuscito a caricare il file SWF Flash.
    L'accesso al recupero probabilmente è stato bloccato dalla politica CORS.
    Se sei l'amministratore del server, consulta la wiki Ruffle per ricevere aiuto.
error-wasm-cors =
    Ruffle non è riuscito a caricare il componente di file ".wasm".
    L'accesso al recupero probabilmente è stato bloccato dalla politica CORS.
    Se sei l'amministratore del server, consulta la wiki Ruffle per ricevere aiuto.
error-wasm-invalid =
    Ruffle ha incontrato un problema importante durante il tentativo di inizializzazione.
    Sembra che questa pagina abbia file mancanti o non validi per l'esecuzione di Ruffle.
    Se sei l'amministratore del server, consulta la wiki Ruffle per ricevere aiuto.
error-wasm-download =
    Ruffle ha incontrato un problema importante durante il tentativo di inizializzazione.
    Questo può spesso risolversi da solo, quindi puoi provare a ricaricare la pagina.
    Altrimenti, contatta l'amministratore del sito.
error-wasm-disabled-on-edge =
    Ruffle non ha caricato il componente di file ".wasm" richiesto.
    Per risolvere il problema, prova ad aprire le impostazioni del tuo browser, facendo clic su "Privacy, search, and services", scorrendo verso il basso e disattivando "Migliora la tua sicurezza sul web".
    Questo permetterà al tuo browser di caricare i file ".wasm" richiesti.
    Se il problema persiste, potresti dover usare un browser diverso.
error-javascript-conflict =
    Ruffle ha riscontrato un problema importante durante il tentativo di inizializzazione.
    Sembra che questa pagina utilizzi il codice JavaScript che è in conflitto con Ruffle.
    Se sei l'amministratore del server, ti invitiamo a provare a caricare il file su una pagina vuota.
error-javascript-conflict-outdated = Puoi anche provare a caricare una versione più recente di Ruffle che potrebbe aggirare il problema (l'attuale build è obsoleta: { $buildDate }).
error-csp-conflict =
    Ruffle ha incontrato un problema importante durante il tentativo di inizializzare.
    La Politica di Sicurezza dei Contenuti di questo server web non consente l'impostazione richiesta". asm" componente da eseguire.
    Se sei l'amministratore del server, consulta la Ruffle wiki per aiuto.
error-unknown =
    Ruffle ha incontrato un problema importante durante il tentativo di visualizzare questo contenuto Flash.
    { $outdated ->
        [true] Se sei l'amministratore del server, prova a caricare una versione più recente di Ruffle (la versione attuale è obsoleta: { $buildDate }).
       *[false] Questo non dovrebbe accadere, quindi ci piacerebbe molto se si potesse inviare un bug!
    }
`,"save-manager.ftl":`save-delete-prompt = Sei sicuro di voler eliminare questo file di salvataggio?
save-reload-prompt =
    L'unico modo per { $action ->
        [delete] delete
       *[replace] replace
    } questo salvataggio file senza potenziali conflitti è quello di ricaricare questo contenuto. Volete continuare comunque?
save-download = Scarica
save-replace = Sostituisci
save-delete = Elimina
save-backup-all = Scarica tutti i file di salvataggio
`,"volume-controls.ftl":`volume-controls-mute = Silenzia
`},"ja-JP":{"context_menu.ftl":`context-menu-download-swf = .swfをダウンロード
context-menu-copy-debug-info = デバッグ情報をコピー
context-menu-open-save-manager = セーブマネージャーを開く
context-menu-about-ruffle =
    { $flavor ->
        [extension] Ruffle拡張機能について ({ $version })
       *[other] Ruffleについて ({ $version })
    }
context-menu-hide = メニューを隠す
context-menu-exit-fullscreen = フルスクリーンを終了
context-menu-enter-fullscreen = フルスクリーンにする
context-menu-volume-controls = 音量
`,"messages.ftl":`message-cant-embed =
    Ruffleはこのページに埋め込まれた Flash を実行できませんでした。
    別のタブでファイルを開くことで、この問題を解決できるかもしれません。
panic-title = エラーが発生しました :(
more-info = 詳細情報
run-anyway = とにかく実行する
continue = 続行
report-bug = バグを報告
update-ruffle = Ruffleを更新
ruffle-demo = Webデモ
ruffle-desktop = デスクトップアプリ
ruffle-wiki = Ruffle Wikiを閲覧
enable-hardware-acceleration = ハードウェア アクセラレーションが無効になっているようです。Ruffle は動作するかもしれませんが、非常に遅くなる可能性があります。ハードウェア アクセラレーションを有効にする方法については、以下のリンクを参照してください。
enable-hardware-acceleration-link = よくある質問 - Chromeのハードウェア アクセラレーション
view-error-details = エラーの詳細を表示
open-in-new-tab = 新しいタブで開く
click-to-unmute = クリックでミュートを解除
clipboard-message-title = Ruffleでのコピーと貼り付け
clipboard-message-description =
    { $variant ->
       *[unsupported] お使いのブラウザはクリップボードへのフルアクセスをサポートしていません。
        [access-denied] クリップボードへのアクセスが拒否されました。
    } 代わりに、以下のショートカットを利用できます:
clipboard-message-copy = { " " } : コピー
clipboard-message-cut = { " " } : 切り取り
clipboard-message-paste = { " " } : 貼り付け
error-canvas-reload = canvasレンダラ使用中のため、canvasレンダラによる再読み込みはできません。
error-file-protocol =
    Ruffleを"file:"プロトコルで使用しているようです。
    ブラウザはセキュリティ上の理由から多くの機能を制限しているため、正しく動作しません。
    ローカルサーバーをセットアップするか、ウェブデモまたはデスクトップアプリをご利用ください。
error-javascript-config =
    JavaScriptの設定が正しくないため、Ruffleで問題が発生しました。
    サーバー管理者の方は、エラーの詳細から、どのパラメーターに問題があるのかを確認してください。
    Ruffleのwikiを参照することで、解決方法が見つかるかもしれません。
error-wasm-not-found =
    Ruffleは、必要な「.wasm」ファイルコンポーネントの読み込みに失敗しました。
    サーバーの管理者は、ファイルが正しくアップロードされているか確認をしてください。問題が解決しない場合は、「publicPath」の設定が必要かもしれません。Ruffleのwikiを参照してください。
error-wasm-mime-type =
    Ruffleの初期化中に大きな問題が発生しました。
    このWebサーバーは「.wasm」ファイルを正しいMIMEタイプで提供していません。
    サーバーの管理者は、Ruffleのwikiを参照してください。
error-invalid-swf =
    Ruffle はリクエストされたファイルのパースに失敗しました。
    最も考えられる原因は、ファイルが有効な SWF でないことです。
error-swf-fetch =
    RuffleがFlash SWFファイルの読み込みに失敗しました。
    読み込むべきファイルが既に存在していないことが原因である可能性が高いです。
    Webサイトの管理者にお問い合わせください。
error-swf-cors =
    RuffleはSWFファイルの読み込みに失敗しました。
    CORSポリシーの設定により、fetchへのアクセスがブロックされている可能性があります。
    サーバー管理者の方は、Ruffleのwikiを参照してください。
error-wasm-cors =
    Ruffleに必要となる「.wasm」ファイルコンポーネントの読み込みに失敗しました。
    CORSポリシーによってfetchへのアクセスがブロックされている可能性があります。
    サーバーの管理者は、Ruffle wikiを参照してください。
error-wasm-invalid =
    Ruffleの初期化時に重大な問題が発生しました。
    このページにはRuffleを実行するためのファイルが存在しないか、無効なファイルがあるかもしれません。
    サーバーの管理者は、Ruffleのwikiを参照してください。
error-wasm-download =
    Ruffleの初期化時に重大な問題が発生しました。
    この問題は自然に解決する場合があるため、ページの再読み込みを試してください。
    それでも解決しない場合は、Webサイトの管理者にお問い合わせください。
error-wasm-disabled-on-edge =
    Ruffleに必要となる「.wasm」ファイルコンポーネントの読み込みに失敗しました。
    問題解決のため、ブラウザーの設定画面から、「プライバシー、検索、サービス」をクリックし、下にスクロールして「Web上のセキュリティを強化する」をオフにしてみてください。
    必要となる「.wasm」ファイルの読み込みが許可されます。
    それでも問題が解決しない場合、別のブラウザーを使用する必要があるかもしれません。
error-wasm-unsupported-browser =
    現在使用中のブラウザは、Ruffleの動作に必要なWebAssembly拡張をサポートしていません。
    サポートされているブラウザをご利用ください。
    サポートされているブラウザ一覧は、Wikiに記載されています。
error-javascript-conflict =
    Ruffleの初期化時に重大な問題が発生しました。
    このページではRuffleと競合するJavaScriptコードが使用されているかもしれません。
    サーバーの管理者は、空白のページでファイルを読み込みし直してみてください。
error-javascript-conflict-outdated = 新しいバージョンのRuffleをアップロードすることで、この問題を回避できる可能性があります。(現在のビルドは古い物です:{ $buildDate })
error-csp-conflict =
    Ruffleの初期化時に重大な問題が発生しました。
    このWebサーバーのコンテンツセキュリティポリシーが実行に必要となる「.wasm」コンポーネントの実行を許可していません。
    サーバーの管理者は、Ruffleのwikiを参照してください。
error-unknown =
    Flashコンテンツを表示する際にRuffleで問題が発生しました。
    { $outdated ->
        [true] 現在使用しているビルドは最新ではないため、サーバー管理者の方は、最新版のRuffleに更新してみてください(現在利用中のビルド: { $buildDate })。
       *[false] 想定外の問題なので、バグとして報告していただけると嬉しいです!
    }
`,"save-manager.ftl":`save-delete-prompt = このセーブファイルを削除してもよろしいですか?
save-reload-prompt =
    セーブファイルを競合の可能性なく { $action ->
        [delete] 削除する
       *[replace] 置き換える
    } ために、このコンテンツを再読み込みすることを推奨します。続行しますか？
save-download = ダウンロード
save-replace = 置き換え
save-delete = 削除
save-backup-all = すべてのセーブファイルをダウンロード
`,"volume-controls.ftl":`volume-controls-mute = ミュート
volume-controls-unmute = ミュート解除
`},"ko-KR":{"context_menu.ftl":`context-menu-download-swf = .swf 다운로드
context-menu-copy-debug-info = 디버그 정보 복사
context-menu-open-save-manager = 저장 관리자 열기
context-menu-about-ruffle =
    { $flavor ->
        [extension] Ruffle 확장 프로그램 정보 ({ $version })
       *[other] Ruffle 정보 ({ $version })
    }
context-menu-hide = 이 메뉴 숨기기
context-menu-exit-fullscreen = 전체화면 나가기
context-menu-enter-fullscreen = 전체화면으로 열기
context-menu-volume-controls = 음량 조절
`,"messages.ftl":`message-cant-embed = Ruffle이 이 페이지에 포함된 플래시를 실행할 수 없었습니다. 별도의 탭에서 파일을 열어봄으로서 이 문제를 해결할 수 있습니다.
panic-title = 문제가 발생했습니다 :(
more-info = 추가 정보
run-anyway = 그래도 실행하기
continue = 계속하기
report-bug = 버그 제보
update-ruffle = Ruffle 업데이트
ruffle-demo = 웹 데모
ruffle-desktop = 데스크톱 애플리케이션
ruffle-wiki = Ruffle 위키 보기
enable-hardware-acceleration = 하드웨어 가속이 비활성화되어 있는 것 같습니다. Ruffle은 계속 작동하지만 매우 느릴 수 있습니다. 아래 링크를 참고하여 하드웨어 가속을 활성화하는 방법을 찾아보세요:
enable-hardware-acceleration-link = FAQ - 크롬 하드웨어 가속
view-error-details = 오류 세부 정보 보기
open-in-new-tab = 새 탭에서 열기
click-to-unmute = 클릭하여 음소거 해제
clipboard-message-title = Ruffle에서 복사하고 붙여넣기
clipboard-message-description =
    { $variant ->
       *[unsupported] 이 브라우저는 클립보드 액세스를 지원하지 않습니다,
        [access-denied] 클립보드 액세스가 거절되었습니다,
    } 하지만 다음 단축키를 대신 사용할 수 있습니다:
clipboard-message-copy = { " " } 복사
clipboard-message-cut = { " " } 잘라내기
clipboard-message-paste = { " " } 붙여넣기
error-canvas-reload = 캔버스 렌더러가 이미 사용 중인 경우 캔버스 렌더러로 다시 로드할 수 없습니다.
error-file-protocol =
    Ruffle을 "file:" 프로토콜에서 실행하고 있는 것으로 보입니다.
    브라우저에서는 이 프로토콜을 보안상의 이유로 많은 기능을 작동하지 않게 차단하므로 이 방법은 작동하지 않습니다.
    대신, 로컬 서버를 직접 열어서 설정하거나 웹 데모 또는 데스크톱 애플리케이션을 사용하시기 바랍니다.
error-javascript-config =
    잘못된 자바스크립트 설정으로 인해 Ruffle에서 중대한 문제가 발생했습니다.
    만약 당신이 서버 관리자인 경우, 오류 세부사항을 확인하여 어떤 매개변수가 잘못되었는지 알아보세요.
    또는 Ruffle 위키를 통해 도움을 받아 볼 수도 있습니다.
error-wasm-not-found =
    Ruffle이 ".wasm" 필수 파일 구성요소를 로드하지 못했습니다.
    만약 당신이 서버 관리자라면 파일이 올바르게 업로드되었는지 확인하세요.
    문제가 지속된다면 "publicPath" 옵션을 사용해야 할 수도 있습니다: Ruffle 위키를 참조하여 도움을 받으세요.
error-wasm-mime-type =
    Ruffle이 초기화를 시도하는 동안 중대한 문제가 발생했습니다.
    이 웹 서버는 올바른 MIME 유형의 ".wasm" 파일을 제공하지 않습니다.
    만약 당신이 서버 관리자라면 Ruffle 위키를 통해 도움을 받으세요.
error-invalid-swf =
    Ruffle이 요청한 파일을 분석하지 못했습니다.
    요청한 파일이 유효한 SWF 파일이 아닐 가능성이 높습니다.
error-swf-fetch =
    Ruffle이 플래시 SWF 파일을 로드하는 데 실패하였습니다.
    이는 주로 파일이 더 이상 존재하지 않아 Ruffle이 로드할 수 있는 것이 없을 가능성이 높습니다.
    웹사이트 관리자에게 문의하여 도움을 받아보세요.
error-swf-cors =
    Ruffle이 플래시 SWF 파일을 로드하는 데 실패하였습니다.
    CORS 정책에 의해 데이터 가져오기에 대한 액세스가 차단되었을 수 있습니다.
    만약 당신이 서버 관리자라면 Ruffle 위키를 참조하여 도움을 받아볼 수 있습니다.
error-wasm-cors =
    Ruffle이 ".wasm" 필수 파일 구성요소를 로드하지 못했습니다.
    CORS 정책에 의해 데이터 가져오기에 대한 액세스가 차단되었을 수 있습니다.
    만약 당신이 서버 관리자라면 Ruffle 위키를 참조하여 도움을 받아볼 수 있습니다.
error-wasm-invalid =
    Ruffle이 초기화를 시도하는 동안 중대한 문제가 발생했습니다.
    이 페이지에 Ruffle을 실행하기 위한 파일이 누락되었거나 잘못된 것 같습니다.
    만약 당신이 서버 관리자라면 Ruffle 위키를 참조하여 도움을 받아볼 수 있습니다.
error-wasm-download =
    Ruffle이 초기화를 시도하는 동안 중대한 문제가 발생했습니다.
    이 문제는 때때로 바로 해결될 수 있으므로 페이지를 새로고침하여 다시 시도해보세요.
    그래도 문제가 지속된다면, 웹사이트 관리자에게 문의해주세요.
error-wasm-disabled-on-edge =
    Ruffle이 ".wasm" 필수 파일 구성요소를 로드하지 못했습니다.
    이를 해결하려면 브라우저 설정에서 "개인 정보, 검색 및 서비스"를 클릭한 후, 하단으로 스크롤하여 "웹에서 보안 강화" 기능을 꺼야 합니다.
    이는 필요한 ".wasm" 파일을 브라우저에서 로드할 수 있도록 허용합니다.
    이 문제가 지속될 경우 다른 브라우저를 사용해야 할 수 있습니다.
error-wasm-unsupported-browser =
    사용 중인 브라우저에서 Ruffle이 필요한 웹 어셈블리 확장을 지원하지 않습니다. 
    지원되는 브라우저로 전환하세요. 지원되는 브라우저 목록은 위키에서 확인할 수 있습니다.
error-javascript-conflict =
    Ruffle이 초기화를 시도하는 동안 중대한 문제가 발생했습니다.
    이 페이지에서 사용되는 자바스크립트 코드가 Ruffle과 충돌하는 것으로 보입니다.
    만약 당신이 서버 관리자라면 빈 페이지에서 파일을 로드해보세요.
error-javascript-conflict-outdated = 또한 Ruffle의 최신 버전을 업로드하는 것을 시도하여 문제를 우회해볼 수 있습니다. (현재 빌드가 오래되었습니다: { $buildDate }).
error-csp-conflict =
    Ruffle이 초기화를 시도하는 동안 중대한 문제가 발생했습니다.
    이 웹 서버의 CSP(Content Security Policy) 정책이 ".wasm" 필수 구성요소를 실행하는 것을 허용하지 않습니다.
    만약 당신이 서버 관리자라면 Ruffle 위키를 참조하여 도움을 받아볼 수 있습니다.
error-unknown =
    Ruffle이 플래시 콘텐츠를 표시하려고 시도하는 동안 중대한 문제가 발생했습니다.
    { $outdated ->
        [true] 만약 당신이 서버 관리자라면, Ruffle의 최신 버전을 업로드하여 다시 시도해보세요. (현재 빌드가 오래되었습니다: { $buildDate }).
       *[false] 이런 현상이 발생해서는 안되므로, 버그를 제보해주신다면 감사하겠습니다!
    }
`,"save-manager.ftl":`save-delete-prompt = 정말로 이 세이브 파일을 삭제하시겠습니까?
save-reload-prompt =
    \b이 파일을 잠재적인 충돌 없이 { $action ->
        [delete] 삭제
       *[replace] 교체
    }하려면 콘텐츠를 다시 로드해야 합니다. 그래도 계속하시겠습니까?
save-download = 다운로드
save-replace = 교체
save-delete = 삭제
save-backup-all = 모든 저장 파일 다운로드
`,"volume-controls.ftl":`volume-controls-mute = 음소거
volume-controls-unmute = 음소거 해제
`},"nl-NL":{"context_menu.ftl":`context-menu-download-swf = .swf downloaden
context-menu-copy-debug-info = Kopieer debuginformatie
context-menu-open-save-manager = Open opgeslagen-data-manager
context-menu-about-ruffle =
    { $flavor ->
        [extension] Over Ruffle Uitbreiding ({ $version })
       *[other] Over Ruffle ({ $version })
    }
context-menu-hide = Verberg dit menu
context-menu-exit-fullscreen = Verlaat volledig scherm
context-menu-enter-fullscreen = Naar volledig scherm
context-menu-volume-controls = Geluidsniveaus
`,"messages.ftl":`message-cant-embed =
    Ruffle kon de Flash-inhoud op de pagina niet draaien.
    Je kan proberen het bestand in een apart tabblad te openen, om hier omheen te werken.
panic-title = Er ging iets mis :(
more-info = Meer informatie
run-anyway = Toch starten
continue = Doorgaan
report-bug = Bug rapporteren
update-ruffle = Ruffle updaten
ruffle-demo = Web Demo
ruffle-desktop = Desktopapplicatie
ruffle-wiki = Bekijk de Ruffle Wiki
enable-hardware-acceleration = Het lijkt erop dat hardwareversnelling is uitgeschakeld. Ruffle zou hierdoor erg traag kunnen zijn. In de link hieronder wordt uitgelegd hoe je hardwareversnelling kunt inschakelen:
enable-hardware-acceleration-link = FAQ - Chrome Hardwareversnelling
view-error-details = Foutdetails tonen
open-in-new-tab = Openen in een nieuw tabblad
click-to-unmute = Klik om te ontdempen
clipboard-message-title = Kopiëren en plakken in Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Je browser heeft geen ondersteuning voor volledige toegang tot het klembord,
        [access-denied] Toegang tot het klembord werd geweigerd,
    } maar je kunt altijd nog de volgende sneltoetsen gebruiken:
clipboard-message-copy = { " " } om te kopiëren
clipboard-message-cut = { " " } om te knippen
clipboard-message-paste = { " " } om te plakken
error-file-protocol =
    Het lijkt erop dat je Ruffle gebruikt met het "file" protocol.
    De meeste browsers blokkeren dit om veiligheidsredenen, waardoor het niet werkt.
    In plaats hiervan raden we aan om een lokale server te draaien, de web demo te gebruiken, of de desktopapplicatie.
error-javascript-config =
    Ruffle heeft een groot probleem ondervonden vanwege een onjuiste JavaScript configuratie.
    Als je de serverbeheerder bent, kijk dan naar de foutdetails om te zien wat er verkeerd is.
    Je kan ook in de Ruffle wiki kijken voor hulp.
error-wasm-not-found =
    Ruffle kon het vereiste ".wasm" bestandscomponent niet laden.
    Als je de serverbeheerder bent, controleer dan of het bestaand juist is geüpload.
    Mocht het probleem blijven voordoen, moet je misschien de "publicPath" instelling gebruiken: zie ook de Ruffle wiki voor hulp.
error-wasm-mime-type =
    Ruffle heeft een groot probleem ondervonden tijdens het initialiseren.
    Deze webserver serveert ".wasm" bestanden niet met het juiste MIME type.
    Als je de serverbeheerder bent, kijk dan in de Ruffle wiki voor hulp.
error-invalid-swf =
    Ruffle kon het gevraagde bestand niet verwerken.
    Waarschijnlijk is het geen geldig SWF bestand.
error-swf-fetch =
    Ruffle kon het Flash SWF bestand niet inladen.
    De meest waarschijnlijke reden is dat het bestand niet langer bestaat, en er dus niets is om in te laden.
    Probeer contact op te nemen met de websitebeheerder voor hulp.
error-swf-cors =
    Ruffle kon het Flash SWD bestand niet inladen.
    Toegang is waarschijnlijk geblokeerd door het CORS beleid.
    Als je de serverbeheerder bent, kijk dan in de Ruffle wiki voor hulp.
error-wasm-cors =
    Ruffle kon het vereiste ".wasm" bestandscomponent niet laden.
    Toegang is waarschijnlijk geblokeerd door het CORS beleid.
    Als je de serverbeheerder bent, kijk dan in de Ruffle wiki voor hulp.
error-wasm-invalid =
    Ruffle heeft een groot probleem ondervonden tijdens het initialiseren.
    Het lijkt erop dat de Ruffle bestanden ontbreken of ongeldig zijn.
    Als je de serverbeheerder bent, kijk dan in de Ruffle wiki voor hulp.
error-wasm-download =
    Ruffle heeft een groot probleem ondervonden tijdens het initialiseren.
    Dit lost zichzelf vaak op als je de bladzijde opnieuw inlaadt.
    Zo niet, neem dan contact op met de websitebeheerder.
error-wasm-disabled-on-edge =
    Ruffle kon het vereiste ".wasm" bestandscomponent niet laden.
    Om dit op te lossen, ga naar je browserinstellingen, klik op "Privacy, zoeken en diensten", scroll omlaag, en schakel "Verbeter je veiligheid op he web" uit.
    Dan kan je browser wel de vereiste ".wasm" bestanden inladen.
    Als het probleem zich blijft voordoen, moet je misschien een andere browser gebruiken.
error-javascript-conflict =
    Ruffle heeft een groot probleem ondervonden tijdens het initialiseren.
    Het lijkt erop dat deze pagina JavaScript code gebruikt die conflicteert met Ruffle.
    Als je de serverbeheerder bent, raden we aan om het bestand op een lege pagina te proberen in te laden.
error-javascript-conflict-outdated = Je kan ook proberen een nieuwe versie van Ruffle te installeren, om om het probleem heen te werken (huidige versie is oud: { $buildDate }).
error-csp-conflict =
    Ruffle heeft een groot probleem ondervonden tijdens het initialiseren.
    Het CSP-beleid staat niet toe dat het vereiste ".wasm" component kan draaien.
    Als je de serverbeheerder bent, kijk dan in de Ruffle wiki voor hulp.
error-unknown =
    Ruffle heeft een groot probleem onderbonden tijdens het weergeven van deze Flash-inhoud.
    { $outdated ->
        [true] Als je de serverbeheerder bent, upload dan een nieuwe versie van Ruffle (huidige versie is oud: { $buildDate }).
       *[false] Dit hoort niet te gebeuren, dus we stellen het op prijs als je de fout aan ons rapporteert!
    }
`,"save-manager.ftl":`save-delete-prompt = Weet je zeker dat je deze opgeslagen data wilt verwijderen?
save-reload-prompt =
    De enige manier om deze opgeslagen data te { $action ->
        [delete] verwijderen
       *[replace] vervangen
    } zonder potentiële problemen is door de inhoud opnieuw te laden. Toch doorgaan?
save-download = Downloaden
save-replace = Vervangen
save-delete = Verwijderen
save-backup-all = Download alle opgeslagen data
`,"volume-controls.ftl":`volume-controls-mute = Dempen
volume-controls-unmute = Dempen opheffen
`},"pl-PL":{"context_menu.ftl":`context-menu-download-swf = Pobierz .swf
context-menu-copy-debug-info = Kopiuj informacje debugowania
context-menu-open-save-manager = Otwórz Menadżer Zapisów
context-menu-about-ruffle =
    { $flavor ->
        [extension] O Rozszerzeniu Ruffle ({ $version })
       *[other] O Ruffle ({ $version })
    }
context-menu-hide = Ukryj to menu
context-menu-exit-fullscreen = Zamknij pełny ekran
context-menu-enter-fullscreen = Pełny ekran
context-menu-volume-controls = Sterowanie głośnością
`,"messages.ftl":`message-cant-embed =
    Ruffle nie było w stanie uruchomić zawartości Flash w tej stronie.
    Możesz spróbować otworzyć plik w nowej karcie, aby uniknąć tego problemu.
panic-title = Coś poszło nie tak :(
more-info = Więcej informacji
run-anyway = Uruchom mimo tego
continue = Kontynuuj
report-bug = Zgłoś błąd
update-ruffle = Zaktualizuj Ruffle
ruffle-demo = Webowe demo
ruffle-desktop = Aplikacja na komputer
ruffle-wiki = Zobacz Wiki Ruffle
enable-hardware-acceleration = Wygląda na to, że akceleracja grafiki jest wyłączona. Chociaż Ruffle może działać, może być bardzo powolny. Możesz dowiedzieć się, jak włączyć akcelerację grafiki, klikając poniższy link:
enable-hardware-acceleration-link = FAQ — Akceleracja Grafiki Chrome
view-error-details = Zobacz szczegóły błędu
open-in-new-tab = Otwórz w nowej karcie
click-to-unmute = Kliknij aby wyłączyć wyciszenie
clipboard-message-title = Kopiowanie i wklejanie w Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Twoja przeglądarka nie obsługuje pełnego dostępu do schowka,
        [access-denied] Odmówiono dostępu do schowka,
    } ale zawsze możesz stosować te skróty klawiszowe:
clipboard-message-copy = { " " } w celu skopiowania
clipboard-message-cut = { " " } w celu wycięcia
clipboard-message-paste = { " " } w celu wklejenia
error-canvas-reload = Nie można ponownie załadować renderera canvas, gdy jest już on używany.
error-file-protocol =
    Wygląda na to, że używasz Ruffle z protokołem "file:".
    To nie działa, ponieważ przeglądarka blokuje wiele funkcji przed działaniem ze względów bezpieczeństwa.
    Zamiast tego zachęcamy do konfiguracji lokalnego serwera lub użycia webowego demo lub aplikacji desktopowej.
error-javascript-config =
    Ruffle napotkał poważny problem z powodu nieprawidłowej konfiguracji JavaScript.
    Jeśli jesteś administratorem serwera, prosimy o sprawdzenie szczegółów błędu, aby dowiedzieć się, który parametr jest błędny.
    Możesz również zapoznać się z wiki Ruffle, aby uzyskać pomoc.
error-wasm-not-found =
    Nie udało się załadować wymaganego komponentu pliku ".wasm".
    Jeśli jesteś administratorem serwera, upewnij się, że plik został poprawnie przesłany.
    Jeśli problem będzie się powtarzał, być może będziesz musiał użyć ustawienia "publicPath": zapoznaj się z wiki Ruffle, aby uzyskać pomoc.
error-wasm-mime-type =
    Ruffle napotkał poważny problem podczas próby zainicjowania.
    Ten serwer nie serwuje plików ".wasm" z poprawnym typem MIME.
    Jeśli jesteś administratorem serwera, zasięgnij pomocy na wiki Ruffle.
error-invalid-swf =
    Ruffle nie może przetworzyć żądanego pliku.
    Prawdopodobnie to nie jest poprawny plik SWF.
error-swf-fetch =
    Nie udało się załadować pliku Flash SWF.
    Najbardziej prawdopodobnym powodem jest to, że plik już nie istnieje, więc Ruffle nie ma co załadować.
    Spróbuj skontaktować się z administratorem witryny, aby uzyskać pomoc.
error-swf-cors =
    Nie udało się załadować pliku Flash SWF.
    Pobieranie zostało prawdopodobnie zablokowane przez politykę CORS.
    Jeśli jesteś administratorem serwera, zasięgnij pomocy na wiki Ruffle.
error-wasm-cors =
    Nie udało się załadować wymaganego komponentu pliku ".wasm".
    Pobieranie zostało prawdopodobnie zablokowane przez politykę CORS.
    Jeśli jesteś administratorem serwera, zasięgnij pomocy na wiki Ruffle.
error-wasm-invalid =
    Ruffle napotkał poważny problem podczas próby zainicjowania.
    Wygląda na to, że ta strona ma brakujące lub nieprawidłowe pliki niezbędne do uruchomienia Ruffle.
    Jeśli jesteś administratorem serwera, zasięgnij pomocy na wiki Ruffle.
error-wasm-download =
    Ruffle napotkał poważny problem podczas próby zainicjowania.
    Ten problem często sam się rozwiązuje, więc możesz spróbować odświeżyć stronę.
    W przeciwnym razie skontaktuj się z administratorem witryny.
error-wasm-disabled-on-edge =
    Ruffle nie udało się załadować wymaganego komponentu pliku ".wasm".
    Aby to naprawić, spróbuj otworzyć ustawienia przeglądarki, klikając "Prywatność, wyszukiwanie i usługi", przewijając w dół i wyłączając "Zwiększ bezpieczeństwo w sieci".
    Pozwoli to przeglądarce załadować wymagane pliki ".wasm".
    Jeśli problem będzie się powtarzał, być może będziesz musiał użyć innej przeglądarki.
error-wasm-unsupported-browser =
    Przeglądarka, której używasz, nie obsługuje rozszerzeń WebAssembly wymaganych do działania Ruffle.
    Proszę użyć obsługiwanej przeglądarki.
    Listę obsługiwanych przeglądarek znajdziesz na Wiki.
error-javascript-conflict =
    Ruffle napotkał poważny problem podczas próby zainicjowania.
    Wygląda na to, że ta strona używa kodu JavaScript, który koliduje z Ruffle.
    Jeśli jesteś administratorem serwera, zapraszamy Cię do ładowania pliku na pustej stronie.
error-javascript-conflict-outdated = Możesz również spróbować przesłać nowszą wersję Ruffle, która może ominąć problem (obecna wersja jest przestarzała: { $buildDate }).
error-csp-conflict =
    Ruffle napotkał poważny problem podczas próby zainicjowania.
    Polityka bezpieczeństwa zawartości tego serwera (CSP) nie zezwala na komponent ".wasm" wymagany do uruchomienia.
    Jeśli jesteś administratorem serwera, zasięgnij pomocy na wiki Ruffle.
error-unknown =
    Ruffle napotkał poważny problem podczas próby wyświetlenia tej zawartości Flash.
    { $outdated ->
        [true] Jeśli jesteś administratorem serwera, spróbuj zaktualizować Ruffle (obecna wersja jest przestarzała: { $buildDate }).
       *[false] To nie powinno się wydarzyć, więc bylibyśmy wdzięczni, gdybyś zgłosił błąd!
    }
`,"save-manager.ftl":`save-delete-prompt = Czy na pewno chcesz skasować ten plik zapisu?
save-reload-prompt =
    Jedyną opcją, aby { $action ->
        [delete] usunąć
       *[replace] zamienić
    } ten plik zapisu bez potencjalnych konfliktów jest przeładowanie zawartości. Czy chcesz kontynuować?
save-download = Pobierz
save-replace = Zamień
save-delete = Usuń
save-backup-all = Pobierz wszystkie pliki zapisu
`,"volume-controls.ftl":`volume-controls-mute = Wycisz
volume-controls-unmute = Wyłącz wyciszenie
`},"pt-BR":{"context_menu.ftl":`context-menu-download-swf = Baixar .swf
context-menu-copy-debug-info = Copiar informação de depuração
context-menu-open-save-manager = Abrir o Gerenciador de Salvamento
context-menu-about-ruffle =
    { $flavor ->
        [extension] Sobre a extensão do Ruffle ({ $version })
       *[other] Sobre o Ruffle ({ $version })
    }
context-menu-hide = Esconder este menu
context-menu-exit-fullscreen = Sair da tela cheia
context-menu-enter-fullscreen = Entrar em tela cheia
context-menu-volume-controls = Controles de volume
`,"messages.ftl":`message-cant-embed =
    Ruffle não conseguiu executar o Flash incorporado nesta página.
    Você pode tentar abrir o arquivo em uma guia separada para evitar esse problema.
panic-title = Algo deu errado :(
more-info = Mais informação
run-anyway = Executar mesmo assim
continue = Continuar
report-bug = Reportar Bug
update-ruffle = Atualizar Ruffle
ruffle-demo = Demo Web
ruffle-desktop = Aplicativo de Desktop
ruffle-wiki = Ver Wiki do Ruffle
enable-hardware-acceleration = Parece que a aceleração de hardware está desabilitada. Embora o Ruffle possa funcionar, ele pode ser muito lento. Você pode descobrir como habilitar a aceleração de hardware seguindo o link abaixo:
enable-hardware-acceleration-link = FAQ - Aceleração de hardware do Chrome
view-error-details = Ver detalhes do erro
open-in-new-tab = Abrir em uma nova guia
click-to-unmute = Clique para ativar o som
clipboard-message-title = Copiando e colando no Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Seu navegador não suporta acesso total à área de transferência,
        [access-denied] O acesso à área de transferência foi negado,
    } mas você sempre pode usar estes atalhos:
clipboard-message-copy = { " " } para copiar
clipboard-message-cut = { " " } para recortar
clipboard-message-paste = { " " } para colar
error-file-protocol =
    Parece que você está executando o Ruffle no protocolo "file:".
    Isto não funciona como navegadores bloqueiam muitos recursos de funcionar por razões de segurança.
    Ao invés disso, convidamos você a configurar um servidor local ou a usar a demonstração da web, ou o aplicativo de desktop.
error-javascript-config =
    O Ruffle encontrou um grande problema devido a uma configuração incorreta do JavaScript.
    Se você for o administrador do servidor, convidamos você a verificar os detalhes do erro para descobrir qual parâmetro está com falha.
    Você também pode consultar o wiki do Ruffle para obter ajuda.
error-wasm-not-found =
    Ruffle falhou ao carregar o componente de arquivo ".wasm" necessário.
    Se você é o administrador do servidor, por favor, certifique-se de que o arquivo foi carregado corretamente.
    Se o problema persistir, você pode precisar usar a configuração "publicPath": por favor consulte a wiki do Ruffle para obter ajuda.
error-wasm-mime-type =
    Ruffle encontrou um grande problema ao tentar inicializar.
    Este servidor de web não está servindo ".wasm" arquivos com o tipo MIME correto.
    Se você é o administrador do servidor, por favor consulte o wiki do Ruffle para obter ajuda.
error-invalid-swf =
    Ruffle não pode analisar o arquivo solicitado.
    O motivo provável é que o arquivo solicitado não seja um SWF válido.
error-swf-fetch =
    Ruffle falhou ao carregar o arquivo Flash SWF.
    A razão provável é que o arquivo não existe mais, então não há nada para o Ruffle carregar.
    Tente contatar o administrador do site para obter ajuda.
error-swf-cors =
    Ruffle falhou ao carregar o arquivo Flash SWF.
    O acesso para fetch provavelmente foi bloqueado pela política CORS.
    Se você for o administrador do servidor, consulte o wiki do Ruffle para obter ajuda.
error-wasm-cors =
    Ruffle falhou ao carregar o componente de arquivo ".wasm" necessário.
    O acesso para fetch foi provavelmente bloqueado pela política CORS.
    Se você é o administrador do servidor, por favor consulte a wiki do Ruffle para obter ajuda.
error-wasm-invalid =
    Ruffle encontrou um grande problema ao tentar inicializar.
    Parece que esta página tem arquivos ausentes ou inválidos para executar o Ruffle.
    Se você for o administrador do servidor, consulte o wiki do Ruffle para obter ajuda.
error-wasm-download =
    O Ruffle encontrou um grande problema ao tentar inicializar.
    Muitas vezes isso pode se resolver sozinho, então você pode tentar recarregar a página.
    Caso contrário, contate o administrador do site.
error-wasm-disabled-on-edge =
    O Ruffle falhou ao carregar o componente de arquivo ".wasm" necessário.
    Para corrigir isso, tente abrir configurações do seu navegador, clicando em "Privacidade, pesquisa e serviços", rolando para baixo e desativando "Melhore sua segurança na web".
    Isso permitirá que seu navegador carregue os arquivos ".wasm" necessários.
    Se o problema persistir, talvez seja necessário usar um navegador diferente.
error-wasm-unsupported-browser =
    O navegador que você está usando não suporta as extensões WebAssembly Ruffle exige que seja executado.
    Por favor, mude para um navegador suportado.
    Você pode encontrar uma lista de navegadores suportados no wiki.
error-javascript-conflict =
    Ruffle encontrou um grande problema ao tentar inicializar.
    Parece que esta página usa código JavaScript que entra em conflito com o Ruffle.
    Se você for o administrador do servidor, convidamos você a tentar carregar o arquivo em uma página em branco.
error-javascript-conflict-outdated = Você também pode tentar fazer o upload de uma versão mais recente do Ruffle que pode contornar o problema (a compilação atual está desatualizada: { $buildDate }).
error-csp-conflict =
    Ruffle encontrou um grande problema ao tentar inicializar.
    A política de segurança de conteúdo deste servidor da web não permite a execução do componente ".wasm" necessário.
    Se você for o administrador do servidor, consulte o wiki do Ruffle para obter ajuda.
error-unknown =
    O Ruffle encontrou um grande problema enquanto tentava exibir este conteúdo em Flash.
    { $outdated ->
        [true] Se você é o administrador do servidor, por favor tente fazer o upload de uma versão mais recente do Ruffle (a compilação atual está desatualizada: { $buildDate }).
       *[false] Isso não deveria acontecer, então apreciaríamos muito se você pudesse arquivar um bug!
    }
`,"save-manager.ftl":`save-delete-prompt = Tem certeza que deseja excluir este arquivo de salvamento?
save-reload-prompt =
    A única maneira de { $action ->
        [delete] excluir
       *[replace] substituir
    } este arquivo sem potencial conflito é recarregar este conteúdo. Deseja continuar mesmo assim?
save-download = Baixar
save-replace = Substituir
save-delete = Excluir
save-backup-all = Baixar todos os arquivos de salvamento
`,"volume-controls.ftl":`volume-controls-mute = Silenciar
volume-controls-unmute = Ativar som
`},"pt-PT":{"context_menu.ftl":`context-menu-download-swf = Descarga.swf
context-menu-copy-debug-info = Copiar informações de depuração
context-menu-open-save-manager = Abrir Gestor de Gravações
context-menu-about-ruffle =
    { $flavor ->
        [extension] Sobre a extensão do Ruffle ({ $version })
       *[other] Sobre o Ruffle ({ $version })
    }
context-menu-hide = Esconder este menu
context-menu-exit-fullscreen = Fechar Ecrã Inteiro
context-menu-enter-fullscreen = Abrir Ecrã Inteiro
context-menu-volume-controls = Controlos de volume
`,"messages.ftl":`message-cant-embed =
    O Ruffle não conseguiu abrir o Flash integrado nesta página.
    Para tentar resolver o problema, pode abrir o ficheiro num novo separador.
panic-title = Algo correu mal :(
more-info = Mais informações
run-anyway = Executar mesmo assim
continue = Continuar
report-bug = Reportar falha
update-ruffle = Atualizar o Ruffle
ruffle-demo = Demonstração na Web
ruffle-desktop = Aplicação para Desktop
ruffle-wiki = Ver a Wiki do Ruffle
enable-hardware-acceleration = Parece que a aceleração de hardware está desativada. Mesmo que o Ruffle funcione, pode estar excessivamente lento. Descubra como ativar a aceleração de hardware seguindo este link:
enable-hardware-acceleration-link = Perguntas Frequentes - Aceleração de Hardware no Chrome
view-error-details = Ver detalhes do erro
open-in-new-tab = Abrir num novo separador
click-to-unmute = Clique para ativar o som
clipboard-message-title = Copiar e colar no Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] O seu navegador não suporta acesso total à área de transferência,
        [access-denied] O acesso à área de transferência foi negado,
    } mas pode sempre usar estes atalhos em alternativa:
clipboard-message-copy = { " " } para copiar
clipboard-message-cut = { " " } para cortar
clipboard-message-paste = { " " } para colar
error-canvas-reload = Não é possível recarregar com o renderizado de tela quando o renderizado de tela já estiver em uso.
error-file-protocol =
    Parece que executa o Ruffle no protocolo "file:".
    Isto não funciona, já que os navegadores bloqueiam muitas funcionalidades por razões de segurança.
    Em vez disto, recomendados configurar um servidor local ou usar a demonstração na web, ou a aplicação para desktop.
error-javascript-config =
    O Ruffle encontrou um problema maior devido a uma configuração de JavaScript incorreta.
    Se é o administrador do servidor, convidamo-lo a verificar os detalhes do erro para descobrir o parâmetro problemático.
    Pode ainda consultar a wiki do Ruffle para obter ajuda.
error-wasm-not-found =
    O Ruffle falhou ao carregar o componente de ficheiro ".wasm" necessário.
    Se é o administrador do servidor, por favor certifique-se de que o ficheiro foi devidamente carregado.
    Se o problema persistir, poderá querer usar a configuração "publicPath": consulte a wiki do Ruffle para obter ajuda.
error-wasm-mime-type =
    O Ruffle encontrou um problema maior ao tentar inicializar.
    Este servidor de web não suporta ficheiros ".wasm" com o tipo MIME correto.
    Se é o administrador do servidor, por favor consulte o wiki do Ruffle para obter ajuda.
error-invalid-swf =
    O Ruffle não consegue analisar o ficheiro solicitado.
    O motivo provável é que o ficheiro solicitado não seja um SWF válido.
error-swf-fetch =
    Ruffle falhou ao carregar o arquivo SWF do Flash
    A razão mais provável é que o arquivo não existe mais, então não há nada para o Ruffle carregar.
    Tente contactar o administrador do site para obter ajuda.
error-swf-cors =
    O Ruffle falhou ao carregar o ficheiro Flash SWF.
    Acesso a buscar foi provavelmente bloqueado pela política de CORS.
    Se é o administrador do servidor, por favor consulte a wiki do Ruffle para obter ajuda.
error-wasm-cors =
    O Ruffle falhou ao carregar o componente de ficheiro ".wasm" necessário.
    O acesso a buscar foi provavelmente bloqueado pela política CORS.
    Se é o administrador do servidor, por favor consulte a wiki do Ruffle para obter ajuda.
error-wasm-invalid =
    Ruffle encontrou um grande problema ao tentar inicializar.
    Parece que esta página está ausente ou arquivos inválidos para executar o Ruffle.
    Se você é o administrador do servidor, por favor consulte a wiki do Ruffle para obter ajuda.
error-wasm-download =
    O Ruffle encontrou um problema maior ao tentar inicializar.
    Isto frequentemente resolve-se sozinho, portanto experimente recarregar a página.
    Caso contrário, por favor contacte o administrador do site.
error-wasm-disabled-on-edge =
    O Ruffle falhou ao carregar o componente de ficheiro ".wasm" necessário.
    Para corrigir isso, tente abrir as opções do seu navegador, clicando em "Privacidade, pesquisa e serviços", rolando para baixo e desativando "Melhore a sua segurança na web".
    Isto permitirá ao seu navegador carregar os ficheiros ".wasm" necessários.
    Se o problema persistir, talvez seja necessário usar um navegador diferente.
error-wasm-unsupported-browser =
    O navegador que utiliza não suporta as extensões WebAssembly de que o Ruffle necessita para ser executado.
    Deve mudar para um navegador suportado.
    Pode encontrar uma lista de navegadores suportados na Wiki.
error-javascript-conflict =
    O Ruffle encontrou um problema maior ao tentar inicializar.
    Parece que esta página usa código JavaScript que entra em conflito com o Ruffle.
    Se é o administrador do servidor, convidamo-lo a tentar carregar o ficheiro em numa página em branco.
error-javascript-conflict-outdated = Pode ainda tentar carregar uma versão mais recente do Ruffle que talvez contorne o problema (a compilação atual está desatualizada: { $buildDate }).
error-csp-conflict =
    O Ruffle encontrou um problema maior ao tentar inicializar.
    A Política de Segurança de Conteúdo deste servidor não permite que o componente ".wasm" necessário seja executado.
    Se é o administrador do servidor, por favor consulte o wiki do Ruffle para obter ajuda.
error-unknown =
    O Ruffle encontrou um problema maior enquanto tentava mostrar este conteúdo em Flash.
    { $outdated ->
        [true] Se é o administrador do servidor, por favor tente carregar uma versão mais recente do Ruffle (a compilação atual está desatualizada: { $buildDate }).
       *[false] Não era suposto isto ter acontecido, por isso agradeceríamos muito se pudesse reportar a falha!
    }
`,"save-manager.ftl":`save-delete-prompt = Tem a certeza de que quer apagar esta gravação?
save-reload-prompt =
    A única forma de { $action ->
        [delete] apagar
       *[replace] substituir
    } esta gravação sem um potencial conflito é recarregar este conteúdo. Deseja continuar mesmo assim?
save-download = Descarregar
save-replace = Substituir
save-delete = Apagar
save-backup-all = Descarregar todas as gravações
`,"volume-controls.ftl":`volume-controls-mute = Silenciar
volume-controls-unmute = Ativar o som
`},"ro-RO":{"context_menu.ftl":`context-menu-download-swf = Descarcă .swf
context-menu-copy-debug-info = Copiază informațiile de depanare
context-menu-open-save-manager = Deschide managerul de salvări
context-menu-about-ruffle =
    { $flavor ->
        [extension] Despre extensia Ruffle ({ $version })
       *[other] Despre Ruffle ({ $version })
    }
context-menu-hide = Ascunde acest meniu
context-menu-exit-fullscreen = Ieși din ecranul complet
context-menu-enter-fullscreen = Intră în ecran complet
context-menu-volume-controls = Comenzi pentru volum
`,"messages.ftl":`message-cant-embed =
    Ruffle nu a putut să ruleze Flash încorporat în această pagină.
    Poți încerca să deschizi fișierul într-o filă separată, pentru a evita această problemă.
panic-title = Ceva a mers prost :(
more-info = Mai multe informații
run-anyway = Rulează oricum
continue = Continuă
report-bug = Raportează un bug
update-ruffle = Actualizează Ruffle
ruffle-demo = Demo web
ruffle-desktop = Aplicație desktop
ruffle-wiki = Vezi wikiul Ruffle
view-error-details = Vezi detaliile erorii
open-in-new-tab = Deschide într-o filă nouă
click-to-unmute = Dă click pentru a dezmuți
error-file-protocol =
    Se pare că rulezi Ruffle pe protocolul „file:”.
    Acesta nu funcționează, deoarece browserele blochează funcționarea multor funcții din motive de securitate.
    În schimb, te invităm să configurezi un server local sau să folosești fie demoul web, fie aplicația desktop.
error-javascript-config =
    Ruffle a întâmpinat o problemă majoră din cauza unei configurări incorecte a JavaScript.
    Dacă ești administratorul serverului, te invităm să verifici detaliile erorii pentru a afla care parametru este defect.
    De asemenea, poți consulta wikiul Ruffle pentru ajutor.
error-wasm-not-found =
    Ruffle a eșuat la încărcarea componentei de fișier „.wasm”.
    Dacă ești administratorul serverului, te rugăm să te asiguri că fișierul a fost încărcat corect.
    Dacă problema persistă, poate fi necesar să folosești setarea „publicPath”: te rugăm să consulți wikiul Ruffle pentru ajutor.
error-wasm-mime-type =
    Ruffle a întâmpinat o problemă majoră în timp ce încerca să se inițializeze.
    Acest server web nu servește fișiere „.wasm” cu tipul MIME corect.
    Dacă ești administratorul serverului, te rugăm să consulți wikiul Ruffle pentru ajutor.
error-swf-fetch =
    Ruffle a eșuat la încărcarea fișierului SWF.
    Motivul cel mai probabil este că fișierul nu mai există, deci Ruffle nu mai are ce să încarce.
    Încearcă să contactezi administratorul site-ului web pentru ajutor.
error-swf-cors =
    Ruffle a eșuat la încărcarea fișierului SWF.
    Accesul de preluare a fost probabil blocat de politica CORS.
    Dacă ești administratorul serverului, te rugăm să consulți wikiul Ruffle pentru ajutor.
error-wasm-cors =
    Ruffle a eșuat la încărcarea componentei de fișier „.wasm”.
    Accesul de preluare a fost probabil blocat de politica CORS.
    Dacă ești administratorul serverului, te rugăm să consulți wikiul Ruffle pentru ajutor.
error-wasm-invalid =
    Ruffle a întâmpinat o problemă majoră în timp ce încerca să se inițializeze.
    Se pare că această pagină are fișiere lipsă sau nevalide pentru a rula Ruffle.
    Dacă ești administratorul serverului, te rugăm să consulți wikiul Ruffle pentru ajutor.
error-wasm-download =
    Ruffle a întâmpinat o problemă majoră în timp ce încerca să inițializeze.
    Acest lucru se poate rezolva adesea de la sine, așa că poți încerca să reîncarci pagina.
    În caz contrar, te rugăm să contactezi administratorul site-ului web.
error-wasm-disabled-on-edge =
    Ruffle a eșuat la încărcarea componentei de fișier „.wasm”.
    Pentru a remedia acest lucru, încearcă să deschizi setările browserului, să faci clic pe „Confidențialitate, căutare și servicii”, să derulezi în jos și să dezactivezi „Îmbunătățiți-vă securitatea pe web”.
    Acest lucru va permite browserului să încarce fișierele „.wasm” necesare.
    Dacă problema persistă, este posibil să trebuiască să folosești un alt browser.
error-javascript-conflict =
    Ruffle a întâmpinat o problemă majoră în timp ce încerca să se inițializeze.
    Se pare că această pagină folosește cod JavaScript care intră în conflict cu Ruffle.
    Dacă ești administratorul serverului, te invităm să încerci încărcarea fișierului pe o pagină goală.
error-javascript-conflict-outdated = De asemenea, poți încerca să încarci o versiune mai recentă de Ruffle care ar putea ocoli problema (versiunea actuală este învechită: { $buildDate }).
error-csp-conflict =
    Ruffle a întâmpinat o problemă majoră în timp ce încerca să se inițializeze.
    Politica de securitate a conținutului a acestui server web nu permite rularea componentei „.wasm” necesare.
    Dacă ești administratorul serverului, te rugăm să consulți wikiul Ruffle pentru ajutor.
error-unknown =
    Ruffle a întâmpinat o problemă majoră în timp ce încerca să afișeze acest conținut Flash.
    { $outdated ->
        [true] Dacă ești administratorul serverului, te rugăm să încerci să încarci o versiune mai recentă de Ruffle (versiunea actuală este învechită: { $buildDate }).
       *[false] Acest lucru nu ar trebui să se întâmple, așa că am aprecia foarte mult dacă ai putea trimite un bug!
    }
`,"save-manager.ftl":`save-delete-prompt = Sigur vrei să ștergi acest fișier de salvare?
save-reload-prompt =
    Singura cale de a { $action ->
        [delete] șterge
       *[replace] înlocui
    } acest fișier de salvare fără un conflict potențial este de a reîncărca acest conținut. Dorești să continui oricum?
save-download = Descarcă
save-replace = Înlocuiește
save-delete = Șterge
`,"volume-controls.ftl":""},"ru-RU":{"context_menu.ftl":`context-menu-download-swf = Скачать .swf
context-menu-copy-debug-info = Копировать отладочную информацию
context-menu-open-save-manager = Менеджер сохранений
context-menu-about-ruffle =
    { $flavor ->
        [extension] О расширении Ruffle ({ $version })
       *[other] О Ruffle ({ $version })
    }
context-menu-hide = Скрыть это меню
context-menu-exit-fullscreen = Оконный режим
context-menu-enter-fullscreen = Полноэкранный режим
context-menu-volume-controls = Громкость
`,"messages.ftl":`message-cant-embed =
    Ruffle не смог запустить Flash, используемый на этой странице.
    Чтобы обойти эту проблему, вы можете попробовать открыть файл в отдельной вкладке.
panic-title = Что-то пошло не так :(
more-info = Подробнее
run-anyway = Всё равно запустить
continue = Продолжить
report-bug = Сообщить об ошибке
update-ruffle = Обновить Ruffle
ruffle-demo = Веб-демо
ruffle-desktop = Настольное приложение
ruffle-wiki = Открыть вики Ruffle
enable-hardware-acceleration = Похоже, что аппаратное ускорение отключено. Хотя Ruffle может работать, но он может быть очень медленным. Вы можете узнать, как включить аппаратное ускорение, перейдя по ссылке ниже:
enable-hardware-acceleration-link = FAQ - Аппаратное ускорение Chrome
view-error-details = Сведения об ошибке
open-in-new-tab = Открыть в новой вкладке
click-to-unmute = Включить звук
clipboard-message-title = Копирование и вставка в Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Ваш браузер не поддерживает полный доступ к буферу обмена.
        [access-denied]  Доступ к буферу обмена был отклонён.
    } Используйте сочетания клавиш для вырезания, копирования и вставки:
clipboard-message-copy = { " " } копировать
clipboard-message-cut = { " " } вырезать
clipboard-message-paste = { " " } вставить
error-canvas-reload = Невозможно перезагрузить с рендерером canvas, когда рендерер canvas уже используется.
error-file-protocol =
    Похоже, что вы запускаете Ruffle по протоколу "file:".
    Это не работает, поскольку браузеры блокируют работу многих функций по соображениям безопасности.
    Вместо этого мы предлагаем вам использовать настольное приложение, веб-демо или настроить локальный сервер.
error-javascript-config =
    Возникла серьёзная ошибка из-за неправильной конфигурации JavaScript.
    Если вы являетесь администратором сервера, мы предлагаем вам проверить детали ошибки, чтобы выяснить, какой параметр дал сбой.
    Вы также можете обратиться за помощью к вики Ruffle.
error-wasm-not-found =
    Ruffle не удалось запустить необходимый компонент файла ".wasm".
    Если вы администратор сервера, пожалуйста, убедитесь, что файл был загружен правильно.
    Если проблема не устраняется, вам может потребоваться использовать настройку "publicPath": обратитесь к вики Ruffle.
error-wasm-mime-type =
    Ruffle столкнулся с серьёзной проблемой во время инициализации.
    Этот веб-сервер не предоставляет файлы ".wasm" с правильным типом MIME.
    Если вы администратор сервера, обратитесь за помощью к вики Ruffle.
error-invalid-swf =
    Ruffle не удалось обработать запрашиваемый файл.
    Вероятнее всего, данный SWF повреждён или не является таковым.
error-swf-fetch =
    Ruffle не удалось запустить SWF-файл Flash.
    Вероятнее всего, файл больше не существует, поэтому Ruffle нечего загружать.
    Попробуйте связаться с администратором сайта для получения помощи.
error-swf-cors =
    Ruffle не удалось запустить SWF-файл Flash.
    Скорее всего, доступ к файлу был заблокирован политикой CORS.
    Если вы администратор сервера, обратитесь за помощью к вики Ruffle.
error-wasm-cors =
    Ruffle не удалось загрузить необходимый компонент файла ".wasm".
    Скорее всего, доступ к файлу был заблокирован политикой CORS.
    Если вы администратор сервера, обратитесь за помощью к вики Ruffle.
error-wasm-invalid =
    Ruffle столкнулся с серьёзной проблемой во время инициализации.
    Похоже, что на этой странице отсутствуют файлы для запуска Ruffle или они недействительны.
    Если вы администратор сервера, обратитесь за помощью к вики Ruffle.
error-wasm-download =
    Ruffle столкнулся с серьёзной проблемой во время инициализации.
    Чаще всего эта проблема устраняется сама собою, поэтому вы можете просто перезагрузить страницу.
    Если ошибка продолжает появляться, свяжитесь с администратором сайта.
error-wasm-disabled-on-edge =
    Ruffle не удалось загрузить необходимый компонент файла ".wasm".
    Чтобы исправить эту ошибку, попробуйте отключить в настройках браузера дополнительную конфиденциальность. Это позволит браузеру загрузить необходимые WASM-файлы.
    Если проблема осталась, вам может потребоваться другой браузер.
error-wasm-unsupported-browser =
    Ваш браузер не поддерживает расширения WebAssembly, необходимые для запуска Ruffle.
    Пожалуйста, переключитесь на поддерживаемый браузер.
    Список поддерживаемых браузеров вы можете найти в Вики.
error-javascript-conflict =
    Ruffle столкнулся с серьёзной проблемой во время инициализации.
    Похоже, что эта страница использует конфликтующий с Ruffle код JavaScript.
    Если вы являетесь администратором сервера, мы предлагаем вам попробовать запустить файл на пустой странице.
error-javascript-conflict-outdated = Вы также можете попробовать загрузить последнюю версию Ruffle, которая может обойти проблему (текущая версия устарела: { $buildDate }).
error-csp-conflict =
    Ruffle столкнулся с серьёзной проблемой во время инициализации.
    Политика безопасности содержимого этого веб-сервера не позволяет использовать требуемые компоненты для запуска ".wasm".
    Если вы являетесь администратором сервера, обратитесь за помощью к вики Ruffle.
error-unknown =
    Ruffle столкнулся с серьёзной проблемой при попытке отобразить этот Flash-контент.
    { $outdated ->
        [true] Если вы администратор сервера, попробуйте загрузить более новую версию Ruffle (текущая версия устарела: { $buildDate }).
       *[false] Этого не должно происходить, поэтому мы будем очень признательны, если вы сообщите нам об ошибке!
    }
`,"save-manager.ftl":`save-delete-prompt = Удалить этот файл сохранения?
save-reload-prompt =
    Единственный способ { $action ->
        [delete] удалить
       *[replace] заменить
    } этот файл сохранения без потенциального конфликта – перезапустить запущенный контент. Всё равно продолжить?
save-download = Скачать
save-replace = Заменить
save-delete = Удалить
save-backup-all = Скачать все сохранения
`,"volume-controls.ftl":`volume-controls-mute = Без звука
volume-controls-unmute = Включить звук
`},"sk-SK":{"context_menu.ftl":`context-menu-download-swf = Stiahnuť .swf
context-menu-copy-debug-info = Skopírovať debug info
context-menu-open-save-manager = Otvoriť správcu uložení
context-menu-about-ruffle =
    { $flavor ->
        [extension] O Ruffle rozšírení ({ $version })
       *[other] O Ruffle ({ $version })
    }
context-menu-hide = Skryť menu
context-menu-exit-fullscreen = Ukončiť režim celej obrazovky
context-menu-enter-fullscreen = Prejsť do režimu celej obrazovky
context-menu-volume-controls = Ovládanie hlasitosti
`,"messages.ftl":`message-cant-embed =
    Ruffle nemohol spustiť Flash vložený na tejto stránke.
    Môžete sa pokúsiť otvoriť súbor na samostatnej karte, aby ste sa vyhli tomuto problému.
panic-title = Niečo sa pokazilo :(
more-info = Viac informácií
run-anyway = Spustiť aj tak
continue = Pokračovať
report-bug = Nahlásiť chybu
update-ruffle = Aktualizovať Ruffle
ruffle-demo = Web Demo
ruffle-desktop = Desktopová aplikácia
ruffle-wiki = Zobraziť Ruffle Wiki
enable-hardware-acceleration = Zdá sa, že hardvérová akcelerácia je vypnutá. Aj keď Ruffle funguje správne, môže byť neprimerane pomalý. Ako povoliť hardvérovú akceleráciu zistíte na tomto odkaze:
enable-hardware-acceleration-link = Časté otázky - Hardvérová akcelerácia Chrome
view-error-details = Zobraziť podrobnosti o chybe
open-in-new-tab = Otvoriť na novej karte
click-to-unmute = Kliknutím zapnete zvuk
clipboard-message-title = Kopírovanie a vkladanie v Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Váš prehliadač nepodporuje plný prístup k schránke,
        [access-denied] Prístup k schránke bol odmietnutý,
    } ale namiesto toho môžete vždy použiť tieto skratky:
clipboard-message-copy = { " " } pre kopírovanie
clipboard-message-cut = { " " } pre vystrihovanie
clipboard-message-paste = { " " } pre vloženie
error-file-protocol =
    Zdá sa, že používate Ruffle na protokole "file:".
    To nie je možné, pretože prehliadače blokujú fungovanie mnohých funkcií z bezpečnostných dôvodov.
    Namiesto toho vám odporúčame nastaviť lokálny server alebo použiť web demo či desktopovú aplikáciu.
error-javascript-config =
    Ruffle narazil na problém v dôsledku nesprávnej konfigurácie JavaScriptu.
    Ak ste správcom servera, odporúčame vám skontrolovať podrobnosti o chybe, aby ste zistili, ktorý parameter je chybný.
    Pomoc môžete získať aj na wiki Ruffle.
error-wasm-not-found =
    Ruffle sa nepodarilo načítať požadovaný komponent súboru „.wasm“.
    Ak ste správcom servera, skontrolujte, či bol súbor správne nahraný.
    Ak problém pretrváva, možno budete musieť použiť nastavenie „publicPath“: pomoc nájdete na wiki Ruffle.
error-wasm-mime-type =
    Ruffle narazil na problém pri pokuse o inicializáciu.
    Tento webový server neposkytuje súbory „.wasm“ so správnym typom MIME.
    Ak ste správcom servera, pomoc nájdete na Ruffle wiki.
error-invalid-swf =
    Ruffle nemôže spracovať požadovaný súbor.
    Najpravdepodobnejším dôvodom je, že požadovaný súbor nie je platným súborom SWF.
error-swf-fetch =
    Ruffle sa nepodarilo načítať SWF súbor Flash.
    Najpravdepodobnejším dôvodom je, že súbor už neexistuje, takže Ruffle nemá čo načítať.
    Skúste požiadať o pomoc správcu webovej lokality.
error-swf-cors =
    Ruffle sa nepodarilo načítať SWF súbor Flash.
    Prístup k načítaniu bol pravdepodobne zablokovaný politikou CORS.
    Ak ste správcom servera, pomoc nájdete na Ruffle wiki.
error-wasm-cors =
    Ruffle sa nepodarilo načítať požadovaný komponent súboru „.wasm“.
    Prístup k načítaniu bol pravdepodobne zablokovaný politikou CORS.
    Ak ste správcom servera, pomoc nájdete na Ruffle wiki.
error-wasm-invalid =
    Ruffle narazil na problém pri pokuse o inicializáciu.
    Zdá sa, že na tejto stránke chýbajú alebo sú neplatné súbory na spustenie Ruffle.
    Ak ste správcom servera, pomoc nájdete na Ruffle wiki.
error-wasm-download =
    Ruffle narazil na problém pri pokuse o inicializáciu.
    Problém sa môže vyriešiť aj sám, takže môžete skúsiť stránku načítať znova.
    V opačnom prípade kontaktujte administrátora stránky.
error-wasm-disabled-on-edge =
    Ruffle sa nepodarilo načítať požadovaný komponent súboru „.wasm“.
    Ak chcete tento problém vyriešiť, skúste otvoriť nastavenia prehliadača, kliknite na položku „Ochrana osobných údajov, vyhľadávanie a služby“, prejdite nadol a vypnite možnosť „Zvýšte svoju bezpečnosť na webe“.
    Vášmu prehliadaču to umožní načítať požadované súbory „.wasm“.
    Ak problém pretrváva, možno budete musieť použiť iný prehliadač.
error-wasm-unsupported-browser =
    Prehliadač, ktorý používate, nepodporuje rozšírenie WebAssembly, ktoré Ruffle vyžaduje na spustenie.
    Prejdite na podporovaný prehliadač.
    Zoznam podporovaných prehliadačov nájdete na Wiki.
error-javascript-conflict =
    Ruffle narazil na problém pri pokuse o inicializáciu.
    Zdá sa, že táto stránka používa kód JavaScript, ktorý je v konflikte s Ruffle.
    Ak ste správcom servera, odporúčame vám skúsiť načítať súbor na prázdnu stránku.
error-javascript-conflict-outdated = Môžete sa tiež pokúsiť nahrať novšiu verziu Ruffle, ktorá môže daný problém vyriešiť (aktuálny build je zastaraný: { $buildDate }).
error-csp-conflict =
    Ruffle narazil na problém pri pokuse o inicializáciu.
    Zásady zabezpečenia obsahu tohto webového servera nepovoľujú spustenie požadovaného komponentu „.wasm“.
    Ak ste správcom servera, pomoc nájdete na Ruffle wiki.
error-unknown =
    Ruffle narazil na problém pri pokuse zobraziť tento Flash obsah.
    { $outdated ->
         [true] Ak ste správcom servera, skúste nahrať novšiu verziu Ruffle (aktuálny build je zastaraný: { $buildDate }).
        *[false] Toto by sa nemalo stať, takže by sme naozaj ocenili, keby ste mohli nahlásiť chybu!
    }
`,"save-manager.ftl":`save-delete-prompt = Naozaj chcete odstrániť tento súbor s uloženými pozíciami?
save-reload-prompt =
    Jediný spôsob, ako { $action ->
         [delete] vymazať
        *[replace] nahradiť
    } tento súbor s uloženými pozíciami bez potenciálneho konfliktu je opätovné načítanie tohto obsahu. Chcete napriek tomu pokračovať?
save-download = Stiahnuť
save-replace = Nahradiť
save-delete = Vymazať
save-backup-all = Stiahnuť všetky súbory s uloženými pozíciami
`,"volume-controls.ftl":`volume-controls-mute = Stlmiť
volume-controls-unmute = Zrušiť stlmenie
`},"sv-SE":{"context_menu.ftl":`context-menu-download-swf = Ladda ner .swf
context-menu-copy-debug-info = Kopiera felsökningsinfo
context-menu-open-save-manager = Öppna Sparhanteraren
context-menu-about-ruffle =
    { $flavor ->
        [extension] Om Ruffle-tillägget ({ $version })
       *[other] Om Ruffle ({ $version })
    }
context-menu-hide = Dölj denna meny
context-menu-exit-fullscreen = Avsluta helskärm
context-menu-enter-fullscreen = Helskärm
context-menu-volume-controls = Ljudkontroller
`,"messages.ftl":`message-cant-embed =
    Ruffle kunde inte köra det inbäddade Flashinnehållet på denna sida.
    Du kan försöka öppna filen i en separat flik för att kringgå problemet.
panic-title = Något gick fel :(
more-info = Mer info
run-anyway = Kör ändå
continue = Fortsätt
report-bug = Rapportera Bugg
update-ruffle = Uppdatera Ruffle
ruffle-demo = Webbdemo
ruffle-desktop = Skrivbordsprogram
ruffle-wiki = Se Ruffle-wiki
enable-hardware-acceleration = Det ser ut som att hårdvaruacceleration är avstängt. På grund av det kan Ruffle fungera långsamt. Du kan ta reda på hur man sätter på hårdvaruacceleration genom länken nedan:
enable-hardware-acceleration-link = FAQ - Chrome Hårdvaruacceleration
view-error-details = Visa Felinformation
open-in-new-tab = Öppna i en ny flik
click-to-unmute = Klicka för ljud
clipboard-message-title = Kopierar och klistrar in i Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Din webbläsare har inte fullständig åtkomst till urklipp,
        [access-denied] Urklippsåtkomst har nekats,
    } men du kan använda dom här kortkommandon istället:
clipboard-message-copy = { " " } för att kopiera
clipboard-message-cut = { " " } för att klippa
clipboard-message-paste = { " " } för att klistra in
error-file-protocol =
    Det verkar som att du kör Ruffle på "fil:"-protokollet.
    Detta fungerar inte eftersom webbläsare blockerar många funktioner från att fungera av säkerhetsskäl.
    Istället bjuder vi in dig att sätta upp en lokal server eller antingen använda webbdemon eller skrivbordsprogrammet.
error-javascript-config =
    Ruffle har stött på ett stort fel på grund av en felaktig JavaScript-konfiguration.
    Om du är serveradministratören bjuder vi in dig att kontrollera feldetaljerna för att ta reda på vilken parameter som är felaktig.
    Du kan också konsultera Ruffle-wikin för hjälp.
error-wasm-not-found =
    Ruffle misslyckades ladda ".wasm"-filkomponenten.
    Om du är serveradministratören se till att filen har laddats upp korrekt.
    Om problemet kvarstår kan du behöva använda inställningen "publicPath": konsultera vänligen Ruffle-wikin för hjälp.
error-wasm-mime-type =
    Ruffle har stött på ett stort fel under initialiseringen.
    Denna webbserver serverar inte ".wasm"-filer med korrekt MIME-typ.
    Om du är serveradministratören konsultera vänligen Ruffle-wikin för hjälp.
error-invalid-swf =
    Ruffle kan inte läsa den begärda filen.
    Det mest sannolika skälet är att den begärda filen inte är en giltig SWF.
error-swf-fetch =
    Ruffle misslyckades ladda SWF-filen.
    Det mest sannolika skälet är att filen inte längre existerar, så det finns inget för Ruffle att köra.
    Försök att kontakta webbplatsadministratören för hjälp.
error-swf-cors =
    Ruffle misslyckades ladda SWF-filen.
    Åtkomst att hämta har sannolikt blockerats av CORS-policy.
    Om du är serveradministratören konsultera vänligen Ruffle-wikin för hjälp.
error-wasm-cors =
    Ruffle misslyckades ladda ".wasm"-filkomponenten.
    Åtkomst att hämta har sannolikt blockerats av CORS-policy.
    Om du är serveradministratören konsultera vänligen Ruffle-wikin för hjälp.
error-wasm-invalid =
    Ruffle har stött på ett stort fel under initialiseringen.
    Det verkar som att den här sidan har saknade eller ogiltiga filer för att köra Ruffle.
    Om du är serveradministratören konsultera vänligen Ruffle-wikin för hjälp.
error-wasm-download =
    Ruffle har stött på ett stort fel under initialiseringen.
    Detta kan ofta lösas av sig själv så du kan prova att ladda om sidan.
    Kontakta annars vänligen webbplatsens administratör.
error-wasm-disabled-on-edge =
    Ruffle misslyckades ladda ".wasm"-filkomponenten.
    För att åtgärda detta försök att öppna webbläsarens inställningar, klicka på "Sekretess, sökning och tjänster", bläddra ner och stäng av "Förbättra säkerheten på webben".
    Detta tillåter din webbläsare att ladda ".wasm"-filerna.
    Om problemet kvarstår kan du behöva använda en annan webbläsare.
error-javascript-conflict =
    Ruffle har stött på ett stort fel under initialiseringen.
    Det verkar som att den här sidan använder JavaScript-kod som stör Ruffle.
    Om du är serveradministratören bjuder vi in dig att försöka köra filen på en blank sida.
error-javascript-conflict-outdated = Du kan också försöka ladda upp en nyare version av Ruffle, vilket kan kringgå problemet (nuvarande version är utdaterad: { $buildDate }).
error-csp-conflict =
    Ruffle har stött på ett stort fel under initialiseringen.
    Webbserverns Content Security Policy tillåter inte ".wasm"-komponenten att köra.
    Om du är serveradministratören konsultera vänligen Ruffle-wikin för hjälp.
error-unknown =
    Ruffle har stött på ett stort fel medan den försökte visa Flashinnehållet.
    { $outdated ->
        [true] Om du är serveradministratören försök att ladda upp en nyare version av Ruffle (nuvarande version är utdaterad: { $buildDate }).
       *[false] Detta är inte tänkt att hända så vi skulle verkligen uppskatta om du kunde rapportera in en bugg!
    }
`,"save-manager.ftl":`save-delete-prompt = Är du säker på att du vill radera sparfilen?
save-reload-prompt =
    Det enda sättet att { $action ->
        [delete] radera
       *[replace] ersätta
    } denna sparfil utan potentiell konflikt är att ladda om innehållet. Vill du fortsätta ändå?
save-download = Ladda ner
save-replace = Ersätt
save-delete = Radera
save-backup-all = Ladda ner alla sparfiler
`,"volume-controls.ftl":`volume-controls-mute = Stäng av ljud
`},"tr-TR":{"context_menu.ftl":`context-menu-download-swf = İndir .swf
context-menu-copy-debug-info = Hata ayıklama bilgisini kopyala
context-menu-open-save-manager = Kayıt Yöneticisini Aç
context-menu-about-ruffle =
    { $flavor ->
        [extension] Ruffle Uzantısı Hakkında ({ $version })
       *[other] Ruffle Hakkında ({ $version })
    }
context-menu-hide = Bu menüyü gizle
context-menu-exit-fullscreen = Tam ekrandan çık
context-menu-enter-fullscreen = Tam ekran yap
context-menu-volume-controls = Ses kontrolleri
`,"messages.ftl":`message-cant-embed =
    Ruffle, bu sayfaya gömülü Flash'ı çalıştıramadı.
    Bu sorunu ortadan kaldırmak için dosyayı ayrı bir sekmede açmayı deneyebilirsiniz.
panic-title = Bir şeyler yanlış gitti :(
more-info = Daha fazla bilgi
run-anyway = Yine de çalıştır
continue = Devam et
report-bug = Hata Bildir
update-ruffle = Ruffle'ı Güncelle
ruffle-demo = Ağ Demosu
ruffle-desktop = Masaüstü Uygulaması
ruffle-wiki = Ruffle Wiki'yi Görüntüle
enable-hardware-acceleration = Görünüşe göre donanım hızlandırma etkin değil. Ruffle çalışabilir ancak fazlasıyla yavaş olabilir. Donanım hızlandırmayı nasıl etkinleştirebiliceğiniz hakkında bu linkten bilgi edinebilirsiniz:
enable-hardware-acceleration-link = SSS - Chrome Donanım Hızlandırma
view-error-details = Hata Ayrıntılarını Görüntüle
open-in-new-tab = Yeni sekmede aç
click-to-unmute = Sesi açmak için tıklayın
clipboard-message-title = Ruffle'da kopyalama ve yapıştırma
clipboard-message-description =
    { $variant ->
    *[unsupported] Tarayıcınız tam panoya erişimi desteklemiyor,
    [access-denied] Pano erişimi reddedildi,
    } ancak pano yerine her zaman bu kısayolları kullanabilirsiniz:
clipboard-message-copy = { " " } kopyalamak için
clipboard-message-cut = { " " } kesmek için
clipboard-message-paste = { " " } yapıştırmak için
error-file-protocol =
    Görünüşe göre Ruffle'ı "dosya:" protokolünde çalıştırıyorsunuz.
    Tarayıcılar güvenlik nedenleriyle birçok özelliğin çalışmasını engellediğinden bu işe yaramaz.
    Bunun yerine, sizi yerel bir sunucu kurmaya veya ağın demosunu ya da masaüstü uygulamasını kullanmaya davet ediyoruz.
error-javascript-config =
    Ruffle, yanlış bir JavaScript yapılandırması nedeniyle önemli bir sorunla karşılaştı.
    Sunucu yöneticisiyseniz, hangi parametrenin hatalı olduğunu bulmak için sizi hata ayrıntılarını kontrol etmeye davet ediyoruz.
    Yardım için Ruffle wiki'sine de başvurabilirsiniz.
error-wasm-not-found =
    Ruffle gerekli ".wasm" dosya bileşenini yükleyemedi.
    Sunucu yöneticisi iseniz, lütfen dosyanın doğru bir şekilde yüklendiğinden emin olun.
    Sorun devam ederse, "publicPath" ayarını kullanmanız gerekebilir: yardım için lütfen Ruffle wiki'sine başvurun.
error-wasm-mime-type =
    Ruffle, başlatmaya çalışırken önemli bir sorunla karşılaştı.
    Bu web sunucusu, doğru MIME tipinde ".wasm" dosyaları sunmuyor.
    Sunucu yöneticisiyseniz, yardım için lütfen Ruffle wiki'sine başvurun.
error-invalid-swf =
    Ruffle istenen dosyayı ayrıştıramıyor.
    Bunun en olası nedeni, istenen dosyanın geçerli bir SWF olmamasıdır.
error-swf-fetch =
    Ruffle, Flash SWF dosyasını yükleyemedi.
    Bunun en olası nedeni, dosyanın artık mevcut olmaması ve bu nedenle Ruffle'ın yükleyeceği hiçbir şeyin olmamasıdır.
    Yardım için web sitesi yöneticisiyle iletişime geçmeyi deneyin.
error-swf-cors =
    Ruffle, Flash SWF dosyasını yükleyemedi.
    Getirme erişimi muhtemelen CORS politikası tarafından engellenmiştir.
    Sunucu yöneticisiyseniz, yardım için lütfen Ruffle wiki'sine başvurun.
error-wasm-cors =
    Ruffle gerekli ".wasm" dosya bileşenini yükleyemedi.
    Getirme erişimi muhtemelen CORS politikası tarafından engellenmiştir.
    Sunucu yöneticisiyseniz, yardım için lütfen Ruffle wiki'sine başvurun.
error-wasm-invalid =
    Ruffle, başlatmaya çalışırken önemli bir sorunla karşılaştı.
    Görünüşe göre bu sayfada Ruffle'ı çalıştırmak için eksik veya geçersiz dosyalar var.
    Sunucu yöneticisiyseniz, yardım için lütfen Ruffle wiki'sine başvurun.
error-wasm-download =
    Ruffle, başlatmaya çalışırken önemli bir sorunla karşılaştı.
    Bu genellikle kendi kendine çözülebilir, bu nedenle sayfayı yeniden yüklemeyi deneyebilirsiniz.
    Aksi takdirde, lütfen site yöneticisiyle iletişime geçin.
error-wasm-disabled-on-edge =
    Ruffle gerekli ".wasm" dosya bileşenini yükleyemedi.
    Bunu düzeltmek için tarayıcınızın ayarlarını açın, "Gizlilik, arama ve hizmetler"i tıklayın, aşağı kaydırın ve "Web'de güvenliğinizi artırın"ı kapatmayı deneyin.
    Bu, tarayıcınızın gerekli ".wasm" dosyalarını yüklemesine izin verecektir.
    Sorun devam ederse, farklı bir tarayıcı kullanmanız gerekebilir.
error-javascript-conflict =
    Ruffle, başlatmaya çalışırken önemli bir sorunla karşılaştı.
    Görünüşe göre bu sayfa, Ruffle ile çakışan JavaScript kodu kullanıyor.
    Sunucu yöneticisiyseniz, sizi dosyayı boş bir sayfaya yüklemeyi denemeye davet ediyoruz.
error-javascript-conflict-outdated = Ayrıca sorunu giderebilecek daha yeni bir Ruffle sürümü yüklemeyi de deneyebilirsiniz (mevcut yapım eskimiş: { $buildDate }).
error-csp-conflict =
    Ruffle, başlatmaya çalışırken önemli bir sorunla karşılaştı.
    Bu web sunucusunun İçerik Güvenliği Politikası, gerekli ".wasm" bileşeninin çalışmasına izin vermiyor.
    Sunucu yöneticisiyseniz, yardım için lütfen Ruffle wiki'sine bakın.
error-unknown =
    Ruffle, bu Flash içeriğini görüntülemeye çalışırken önemli bir sorunla karşılaştı.
    { $outdated ->
        [true] Sunucu yöneticisiyseniz, lütfen Ruffle'ın daha yeni bir sürümünü yüklemeyi deneyin (mevcut yapım eskimiş: { $buildDate }).
       *[false] Bunun olmaması gerekiyor, bu yüzden bir hata bildirebilirseniz çok memnun oluruz!
    }
`,"save-manager.ftl":`save-delete-prompt = Bu kayıt dosyasını silmek istediğinize emin misiniz?
save-reload-prompt =
    Bu kaydetme dosyasını potansiyel çakışma olmadan { $action ->
        [delete] silmenin
       *[replace] değiştirmenin
    } tek yolu, bu içeriği yeniden yüklemektir. Yine de devam etmek istiyor musunuz?
save-download = İndir
save-replace = Değiştir
save-delete = Sil
save-backup-all = Tüm kayıt dosyalarını indir
`,"volume-controls.ftl":`volume-controls-mute = Sustur
volume-controls-unmute = Susturmayı kaldır
`},"uk-UA":{"context_menu.ftl":`context-menu-download-swf = Завантажити .swf
context-menu-copy-debug-info = Копіювати інформацію про налагодження
context-menu-open-save-manager = Відкрити менеджер збереження
context-menu-about-ruffle =
    { $flavor ->
        [extension] Про розширення Ruffle ({ $version })
       *[other] Про Ruffle ({ $version })
    }
context-menu-hide = Приховати це меню
context-menu-exit-fullscreen = Вийти з повноекранного режиму
context-menu-enter-fullscreen = Перейти в повноекранний режим
context-menu-volume-controls = Елементи керування гучністю
`,"messages.ftl":`message-cant-embed = Ruffle не вдалося запустити Flash, вбудований у цю сторінку. Ви можете спробувати відкрити файл в окремій вкладці, щоб уникнути цієї проблеми.
panic-title = Щось пішло не так :(
more-info = Більше інформації
run-anyway = Запустити все одно
continue = Продовжити
report-bug = Повідомити про помилку
update-ruffle = Оновити Ruffle
ruffle-demo = Вебдемонстрація
ruffle-desktop = Застосунок робочого столу
ruffle-wiki = Переглянути Ruffle Wiki
enable-hardware-acceleration = Схоже, апаратне прискорення вимкнено. Хоча Ruffle може працювати, це може бути дуже повільним. Ви можете дізнатися, як увімкнути апаратне прискорення, перейшовши за посиланням нижче:
enable-hardware-acceleration-link = FAQ - Апаратне прискорення Chrome
view-error-details = Переглянути деталі помилки
open-in-new-tab = Відкрити в новій вкладці
click-to-unmute = Натисніть, щоб увімкнути звук
clipboard-message-title = Копіювання та вставлення в Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Ваш браузер не підтримує повний доступ до буфера обміну,
        [access-denied] У доступі до буфера обміну відмовлено,
    } але ви завжди можете скористатися цими ярликами:
clipboard-message-copy = { " " } для копіювання
clipboard-message-cut = { " " } для вирізання
clipboard-message-paste = { " " } для вставлення
error-canvas-reload = Неможливо оновити з Canvas рендерером, коли Canvas рендерер вже використовується.
error-file-protocol = Здається, ви запускаєте Ruffle за протоколом "file:". Це не працює, оскільки браузери блокують роботу багатьох функцій з міркувань безпеки. Замість цього ми запрошуємо вас налаштувати локальний сервер або скористатися вебдемонстрацією чи застосунком робочого столу.
error-javascript-config = Ruffle зіткнувся з серйозною проблемою через неправильну конфігурацію JavaScript. Якщо ви адміністратор сервера, ми пропонуємо вам перевірити деталі помилки, щоб дізнатися, який параметр є несправним. Ви також можете звернутися за допомогою до Ruffle Wiki.
error-wasm-not-found = Ruffle не вдалося завантажити необхідний файловий компонент ".wasm". Якщо ви адміністратор сервера, переконайтеся, що файл завантажено правильно. Якщо проблема не зникає, можливо, вам знадобиться скористатися налаштуванням "publicPath": будь ласка, зверніться до Ruffle Wiki, щоб отримати допомогу.
error-wasm-mime-type = Ruffle зіткнувся з серйозною проблемою під час спроби ініціалізації. Цей вебсервер не обслуговує файли ".wasm" із правильним типом MIME. Якщо ви адміністратор сервера, зверніться до Ruffle Wiki, щоб отримати допомогу.
error-invalid-swf = Ruffle не може проаналізувати файл запиту. Найімовірніша причина полягає в тому, що файл запиту не є дійсним SWF.
error-swf-fetch = Ruffle не вдалося завантажити файл Flash SWF. Найімовірніша причина полягає в тому, що файл більше не існує, тому Ruffle нема чого завантажити. Спробуйте звернутися по допомогу до адміністратора сайту.
error-swf-cors = Ruffle не вдалося завантажити файл Flash SWF. Можливо, доступ до отримання було заблоковано політикою CORS. Якщо ви адміністратор сервера, зверніться до Ruffle Wiki, щоб отримати допомогу.
error-wasm-cors = Ruffle не вдалося завантажити необхідний файловий компонент ".wasm". Можливо, доступ до отримання було заблоковано політикою CORS. Якщо ви адміністратор сервера, зверніться до Ruffle Wiki, щоб отримати допомогу.
error-wasm-invalid = Ruffle зіткнувся з серйозною проблемою під час спроби ініціалізації. Здається, на цій сторінці відсутні або недійсні файли для запуску Ruffle. Якщо ви адміністратор сервера, зверніться до Ruffle Wiki, щоб отримати допомогу.
error-wasm-download = Ruffle зіткнувся з серйозною проблемою під час спроби ініціалізації. Часто це може вирішитися само собою, тому ви можете спробувати оновити сторінку. В іншому випадку зверніться до адміністратора сайту.
error-wasm-disabled-on-edge = Ruffle не вдалося завантажити необхідний файловий компонент ".wasm". Щоб виправити це, спробуйте відкрити налаштування вашого браузера, натиснути «Конфіденційність, пошук і служби», прокрутити вниз і вимкнути «Підвищити безпеку в інтернеті». Це дозволить вашому браузеру завантажити необхідні файли «.wasm». Якщо проблема не зникає, можливо, вам доведеться скористатися іншим браузером.
error-wasm-unsupported-browser =
    Ваш браузер не підтримує розширення WebAssembly, необхідні для роботи Ruffle.
    Будь ласка, переключіться на підтримуваний браузер.
    Список підтримуваних браузерів можна знайти у Вікі.
error-javascript-conflict = Ruffle зіткнувся з серйозною проблемою під час спроби ініціалізації. Схоже, що ця сторінка використовує код JavaScript, який конфліктує з Ruffle. Якщо ви адміністратор сервера, ми запрошуємо вас спробувати завантажити файл на порожній сторінці.
error-javascript-conflict-outdated = Ви також можете спробувати завантажити новішу версію Ruffle, яка може уникнути проблеми (поточна збірка застаріла: { $buildDate }).
error-csp-conflict = Ruffle зіткнувся з серйозною проблемою під час спроби ініціалізації. Політика безпеки контенту цього вебсервера не дозволяє запускати необхідний компонент ".wasm". Якщо ви адміністратор сервера, зверніться до Ruffle Wiki, щоб отримати допомогу.
error-unknown =
    Ruffle зіткнувся з серйозною проблемою під час спроби відобразити цей Flash контент.
    { $outdated ->
        [true] Якщо ви адміністратор сервера, спробуйте завантажити новішу версію Ruffle (поточна збірка застаріла: { $buildDate }).
       *[false] Цього не повинно відбуватися, тому ми будемо дуже вдячні, якщо ви повідомите про помилку!
    }
`,"save-manager.ftl":`save-delete-prompt = Ви впевнені, що хочете видалити цей файл збереження?
save-reload-prompt =
    Єдиний спосіб { $action ->
        [delete] видалити
       *[replace] замінити
    } цей файл збереження без потенційного конфлікту є перезавантаження цього контенту. Ви все одно бажаєте продовжити?
save-download = Завантажити
save-replace = Замінити
save-delete = Видалити
save-backup-all = Завантажити всі файли збереження
`,"volume-controls.ftl":`volume-controls-mute = Вимкнути звук
volume-controls-unmute = Увімкнути звук
`},"vi-VN":{"context_menu.ftl":`context-menu-download-swf = Tải về file .swf
context-menu-copy-debug-info = Sao chép thông tin gỡ lỗi
context-menu-open-save-manager = Mở trình quản lý lưu file
context-menu-about-ruffle =
    { $flavor ->
        [extension] Giới thiệu về phần mở rộng Ruffle ({ $version })
       *[other] Giới thiệu về Ruffle ({ $version })
    }
context-menu-hide = Ẩn menu này
context-menu-exit-fullscreen = Thoát chế độ toàn màn hình
context-menu-enter-fullscreen = Chuyển sang chế độ toàn màn hình
context-menu-volume-controls = Tuỳ chỉnh âm lượng
`,"messages.ftl":`message-cant-embed =
    Ruffle không thể chạy nội dung Flash được nhúng trong trang này.
    Bạn có thể thử mở tệp ở một tab riêng biệt để tránh sự cố này.
panic-title = Có lỗi xảy ra :(
more-info = Thông tin thêm
run-anyway = Vẫn khởi chạy
continue = Tiếp tục
report-bug = Báo cáo lỗi
update-ruffle = Cập nhật Ruffle
ruffle-demo = Trang demo
ruffle-desktop = Ứng dụng desktop
ruffle-wiki = Truy cập Ruffle Wiki
enable-hardware-acceleration = Có vẻ như tăng tốc phần cứng đã bị vô hiệu hoá. Mặc dù Ruffle vẫn có thể hoạt động, nhưng nó có thể rất chậm. Bạn có thể tìm cách bật tăng tốc phần cứng bằng cách làm theo hướng dẫn trong đường dẫn bên dưới:
enable-hardware-acceleration-link = Các câu hỏi thường gặp - Tăng tốc phần cứng cho Chrome
view-error-details = Xem chi tiết lỗi
open-in-new-tab = Mở trong thẻ mới
click-to-unmute = Bấm để bật tiếng
clipboard-message-title = Sao chép và dán bên trong Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Trình duyệt của bạn không hỗ trợ đầy đủ truy xuất bộ nhớ tạm,
        [access-denied] Truy xuất bộ nhớ tạm bị từ chối,
    } nhưng bạn luôn có thể sử dụng phím tắt để làm điều đó:
clipboard-message-copy = { " " } để sao chép
clipboard-message-cut = { " " } để cắt
clipboard-message-paste = { " " } để dán
error-file-protocol =
    Có vẻ như bạn đang chạy Ruffle trên giao thức "file:".
    Điều này không được phép vì trình duyệt chặn nhiều tính năng hoạt động vì lý do bảo mật.
    Thay vào đó, chúng tôi mời bạn thiết lập một máy chủ cục bộ hoặc sử dụng trang demo hoặc ứng dụng desktop.
error-javascript-config =
    Ruffle đã gặp phải sự cố lớn do cấu hình JavaScript không chính xác.
    Nếu bạn là người quản trị máy chủ, chúng tôi mời bạn kiểm tra chi tiết lỗi để tìm ra tham số nào không đúng.
    Bạn cũng có thể tham khảo thông tin trợ giúp từ Ruffle Wiki.
error-wasm-not-found =
    Ruffle không tải được tệp ".wasm" cần thiết.
    Nếu bạn là người quản trị máy chủ, vui lòng đảm bảo tệp đã được tải lên đúng cách.
    Nếu sự cố vẫn tiếp diễn, bạn có thể cần phải sử dụng thiết lập "publicPath": vui lòng tham khảo thông tin trợ giúp từ Ruffle Wiki.
error-wasm-mime-type =
    Ruffle đã gặp phải một vấn đề lớn khi cố gắng khởi tạo.
    Máy chủ web không cung cấp tệp ".wasm" với đúng loại MIME.
    Nếu bạn là quản trị viên máy chủ, vui lòng tham khảo wiki Ruffle để được trợ giúp.
error-invalid-swf =
    Ruffle không thể phân tích tệp được yêu cầu.
    Khả năng lớn nhất là do tệp được yêu cầu không phải là một tệp SWF hợp lệ.
error-swf-fetch =
    Ruffle không tải được tệp Flash SWF.
    Khả năng lớn nhất là do tệp không còn tồn tại nữa, vì vậy không có gì để Ruffle tải.
    Hãy thử liên hệ với quản trị viên trang web để được trợ giúp.
error-swf-cors =
    Ruffle không tải được tệp Flash SWF.
    Quyền truy cập để lấy dữ liệu có thể đã bị chính sách CORS chặn.
    Nếu bạn là quản trị viên máy chủ, vui lòng tham khảo Ruffle Wiki để được trợ giúp.
error-wasm-cors =
    Ruffle không tải được tệp ".wasm" cần thiết.
    Quyền truy cập để lấy dữ liệu có thể đã bị chính sách CORS chặn.
    Nếu bạn là quản trị viên máy chủ, vui lòng tham khảo wiki Ruffle để được trợ giúp.
error-wasm-invalid =
    Ruffle đã gặp phải một vấn đề lớn khi cố gắng khởi tạo.
    Có vẻ như trang này có các tệp bị thiếu hoặc không hợp lệ để chạy Ruffle.
    Nếu bạn là quản trị viên máy chủ, vui lòng tham khảo Ruffle Wiki để được trợ giúp.
error-wasm-download =
    Ruffle đã gặp phải một vấn đề lớn khi cố gắng khởi tạo.
    Vấn đề này thường có thể tự giải quyết, vì vậy bạn có thể thử tải lại trang.
    Nếu không, vui lòng liên hệ với quản trị viên trang web.
error-wasm-disabled-on-edge =
    Ruffle không tải được thành phần tệp ".wasm" cần thiết.
    Để khắc phục sự cố này, hãy thử mở cài đặt của trình duyệt, nhấp vào "Quyền riêng tư, tìm kiếm và dịch vụ", cuộn xuống và tắt "Nâng cao bảo mật trên web".
    Thao tác này sẽ cho phép trình duyệt của bạn tải các tệp ".wasm" cần thiết.
    Nếu sự cố vẫn tiếp diễn, bạn có thể phải sử dụng trình duyệt khác.
error-wasm-unsupported-browser =
    Trình duyệt bạn đang sử dụng không hỗ trợ tiện ích mở rộng WebAssembly cần thiết để chạy Ruffle.
    Vui lòng chuyển sang trình duyệt được hỗ trợ.
    Bạn có thể xem danh sách các trình duyệt được hỗ trợ trên Ruffle Wiki.
error-javascript-conflict =
    Ruffle gặp phải một vấn đề lớn khi cố gắng khởi tạo.
    Có vẻ trang này sử dụng mã JavaScript xung đột với Ruffle.
    Nếu bạn là quản trị viên máy chủ, chúng tôi mời bạn thử tải tệp trên một trang trắng.
error-javascript-conflict-outdated = Bạn cũng có thể thử tải lên phiên bản Ruffle mới hơn để xem sự cố có thể được khắc phục (bản dựng hiện tại đã cũ: { $buildDate }).
error-csp-conflict =
    Ruffle đã gặp phải một vấn đề lớn khi cố gắng khởi tạo.
    Chính sách bảo mật nội dung của máy chủ web này không cho phép chạy thành phần tệp ".wasm" bắt buộc phải có để hoạt động.
    Nếu bạn là quản trị viên máy chủ, vui lòng tham khảo Ruffle Wiki để được trợ giúp.
error-unknown =
    Ruffle đã gặp phải một vấn đề lớn khi cố gắng hiển thị nội dung Flash này.
    { $outdated ->
        [true] Nếu bạn là quản trị viên máy chủ, vui lòng thử tải lên phiên bản Ruffle mới hơn (bản dựng hiện tại đã cũ: { $buildDate }).
       *[false] Vấn đề này đáng lẽ không nên xảy ra, vì vậy chúng tôi thực sự biết ơn nếu bạn có thể báo cáo lỗi!
    }
`,"save-manager.ftl":`save-delete-prompt = Bạn có chắc chắn muốn xoá tệp đã lưu này không?
save-reload-prompt =
    Cách duy nhất để { $action ->
        [delete] xoá
       *[replace] thay thế
    } tệp đã lưu này mà không có nguy cơ xung đột là tải lại nội dung này. Bạn có muốn tiếp tục không?
save-download = Tải về
save-replace = Thay thế
save-delete = Xoá
save-backup-all = Tải xuống tất cả tệp đã lưu
`,"volume-controls.ftl":`volume-controls-mute = Tắt tiếng
volume-controls-unmute = Bật tiếng
`},"zh-CN":{"context_menu.ftl":`context-menu-download-swf = 下载 .swf
context-menu-copy-debug-info = 复制调试信息
context-menu-open-save-manager = 打开存档管理器
context-menu-about-ruffle =
    { $flavor ->
        [extension] 关于 Ruffle 扩展 ({ $version })
       *[other] 关于 Ruffle ({ $version })
    }
context-menu-hide = 隐藏此菜单
context-menu-exit-fullscreen = 退出全屏
context-menu-enter-fullscreen = 进入全屏
context-menu-volume-controls = 音量控制
`,"messages.ftl":`message-cant-embed =
    Ruffle 无法运行嵌入在此页面中的 Flash。
    您可以尝试在单独的标签页中打开该文件，以回避此问题。
panic-title = 出了些问题 :(
more-info = 更多信息
run-anyway = 仍然运行
continue = 继续
report-bug = 反馈问题
update-ruffle = 更新 Ruffle
ruffle-demo = 网页演示
ruffle-desktop = 桌面应用程序
ruffle-wiki = 查看 Ruffle Wiki
enable-hardware-acceleration = 看起来硬件加速已被禁用。虽然Ruffle可能可以运行，但速度可能会非常慢。您可以通过下面的链接了解如何启用硬件加速：
enable-hardware-acceleration-link = 常见问题 - Chrome 硬件加速
view-error-details = 查看错误详情
open-in-new-tab = 在新标签页中打开
click-to-unmute = 点击取消静音
clipboard-message-title = 在Ruffle中复制粘贴
clipboard-message-description =
    { $variant ->
       *[unsupported] 您的浏览器不支持完全剪贴板访问,
        [access-denied] 对剪贴板的访问已被拒绝,
    } 但您仍然可以使用以下快捷键:
clipboard-message-copy = { " " } 复制
clipboard-message-cut = { " " } 剪切
clipboard-message-paste = { " " } 粘贴
error-canvas-reload = Canvas 渲染器已在使用中时，无法使用 Canvas 渲染器重新加载。
error-file-protocol =
    看来您正在 "file:" 协议上使用 Ruffle。
    由于浏览器以安全原因阻止许多功能，因此这不起作用。
    相反我们邀请您设置本地服务器或使用网页演示或桌面应用程序。
error-javascript-config =
    由于错误的 JavaScript 配置，Ruffle 遇到了一个重大问题。
    如果您是服务器管理员，我们邀请您检查错误详细信息，以找出哪个参数有故障。
    您也可以查阅 Ruffle 的 Wiki 获取帮助。
error-wasm-not-found =
    Ruffle 无法加载所需的 “.wasm” 文件组件。
    如果您是服务器管理员，请确保文件已正确上传。
    如果问题仍然存在，您可能需要使用 “publicPath” 设置：请查看 Ruffle 的 Wiki 获取帮助。
error-wasm-mime-type =
    Ruffle 在试图初始化时遇到了一个重大问题。
    该网站服务器没有提供 ".asm” 文件正确的 MIME 类型。
    如果您是服务器管理员，请查阅 Ruffle Wiki 获取帮助。
error-invalid-swf =
    Ruffle无法解析请求的文件。
    最有可能的原因是该请求文件不是一个合法的SWF文件。
error-swf-fetch =
    Ruffle 无法加载 Flash SWF 文件。
    最可能的原因是文件不再存在所以 Ruffle 没有要加载的内容。
    请尝试联系网站管理员寻求帮助。
error-swf-cors =
    Ruffle 无法加载 Flash SWF 文件。
    获取权限可能被 CORS 策略阻止。
    如果您是服务器管理员，请参考 Ruffle Wiki 获取帮助。
error-wasm-cors =
    Ruffle 无法加载所需的“.wasm”文件组件。
    获取权限可能被 CORS 策略阻止。
    如果您是服务器管理员，请查阅 Ruffle Wiki 获取帮助。
error-wasm-invalid =
    Ruffle 在试图初始化时遇到了一个重大问题。
    这个页面似乎缺少文件来运行 Curl。
    如果您是服务器管理员，请查阅 Ruffle Wiki 获取帮助。
error-wasm-download =
    Ruffle 在试图初始化时遇到了一个重大问题。
    这通常可以自行解决，因此您可以尝试重新加载页面。
    否则请联系网站管理员。
error-wasm-disabled-on-edge =
    Ruffle 无法加载所需的 “.wasm” 文件组件。
    要解决这个问题，请尝试打开您的浏览器设置，单击"隐私、搜索和服务"，向下滚动并关闭"增强 Web 安全性"。
    这将允许您的浏览器加载所需的 “.wasm” 文件。
    如果问题仍然存在，您可能必须使用不同的浏览器。
error-wasm-unsupported-browser =
    您使用的浏览器不支持 Ruffle 运行所需的 WebAssembly 扩展。
    请切换到支持的浏览器。
    您可以在 Wiki 上找到支持的浏览器列表。
error-javascript-conflict =
    Ruffle 在试图初始化时遇到了一个重大问题。
    这个页面似乎使用了与 Ruffle 冲突的 JavaScript 代码。
    如果您是服务器管理员，我们建议您尝试在空白页面上加载文件。
error-javascript-conflict-outdated = 您还可以尝试上传可能规避该问题的最新版本的 (当前构建已过时: { $buildDate })。
error-csp-conflict =
    Ruffle 在试图初始化时遇到了一个重大问题。
    该网站服务器的内容安全策略不允许运行所需的 “.wasm” 组件。
    如果您是服务器管理员，请查阅 Ruffle Wiki 获取帮助。
error-unknown =
    Ruffle 在试图显示此 Flash 内容时遇到了一个重大问题。
    { $outdated ->
        [true] 如果您是服务器管理员，请尝试上传更新的 Ruffle 版本 (当前版本已过时: { $buildDate }).
       *[false] 这不应该发生，因此如果您可以报告错误，我们将非常感谢！
    }
`,"save-manager.ftl":`save-delete-prompt = 确定要删除此存档吗？
save-reload-prompt =
    为了避免潜在的冲突，{ $action ->
        [delete] 删除
       *[replace] 替换
    } 此存档文件需要重新加载当前内容。是否仍然继续？
save-download = 下载
save-replace = 替换
save-delete = 删除
save-backup-all = 下载所有存档文件
`,"volume-controls.ftl":`volume-controls-mute = 静音
volume-controls-unmute = 取消静音
`},"zh-TW":{"context_menu.ftl":`context-menu-download-swf = 下載SWF檔案
context-menu-copy-debug-info = 複製除錯資訊
context-menu-open-save-manager = 開啟存檔管理器
context-menu-about-ruffle =
    { $flavor ->
        [extension] 關於Ruffle擴充功能 ({ $version })
       *[other] 關於Ruffle ({ $version })
    }
context-menu-hide = 隱藏菜單
context-menu-exit-fullscreen = 退出全螢幕
context-menu-enter-fullscreen = 進入全螢幕
context-menu-volume-controls = 音量控制
`,"messages.ftl":`message-cant-embed =
    Ruffle 無法執行本頁面內嵌的 Flash。
    您可以嘗試在單獨的標籤頁中開啟檔案，以避免此問題。
panic-title = 發生了某些錯誤 :(
more-info = 更多資訊
run-anyway = 直接執行
continue = 繼續
report-bug = 回報BUG
update-ruffle = 更新Ruffle
ruffle-demo = 網頁展示
ruffle-desktop = 桌面應用程式
ruffle-wiki = 查看Ruffle Wiki
enable-hardware-acceleration = 看起來硬體加速已停用。雖然 Ruffle 可以運作，但速度可能很慢。您可以透過以下連結瞭解如何啟用硬體加速：
enable-hardware-acceleration-link = FAQ - Chrome硬體加速
view-error-details = 檢視錯誤詳細資料
open-in-new-tab = 開啟新增分頁
click-to-unmute = 點擊以取消靜音
clipboard-message-title = 在 Ruffle 中複製和貼上
clipboard-message-description =
    { $variant ->
       *[unsupported] 您的瀏覽器不支援完整的剪貼板存取、
        [access-denied] 已拒絕存取剪貼簿、
    } 但您可以使用這些捷徑來代替：
clipboard-message-copy = { " " } 複製
clipboard-message-cut = { " " } 剪下
clipboard-message-paste = { " " } 貼上
error-file-protocol =
    您似乎是在 「file: 」協定上執行 Ruffle。
    這並不可行，因為瀏覽器基於安全理由會阻擋許多功能的運作。
    相反，我們邀請您設定本機伺服器，或使用網頁示範或桌面應用程式。
error-javascript-config =
    由於 JavaScript 設定不正確，Ruffle 遇到了重大問題。
    如果您是伺服器管理員，我們邀請您檢查錯誤細節，找出是哪個參數出了問題。
    您也可以參考 Ruffle wiki 以獲得協助。
error-wasm-not-found =
    Ruffle 未能載入所需的 「.wasm」 檔案元件。
    如果您是伺服器管理員，請確認檔案已正確上傳。
    如果問題仍然存在，您可能需要使用「publicPath」設定：請參閱 Ruffle wiki 以獲得協助。
error-wasm-mime-type =
    Ruffle 在嘗試初始化時遇到重大問題。
    此 Web 伺服器無法提供 MIME 類型正確的 「.wasm 」檔案。
    如果您是伺服器管理員，請參閱 Ruffle wiki 以獲得協助。
error-invalid-swf =
    Ruffle 無法解析請求的檔案。
    最可能的原因是請求的檔案不是有效的 SWF。
error-swf-fetch =
    Ruffle 未能載入 Flash SWF 檔案。
    最可能的原因是該檔案已不存在，因此 Ruffle 無法載入任何內容。
    請嘗試聯絡網站管理員尋求協助。
error-swf-cors =
    Ruffle 未能載入 Flash SWF 檔案。
    訪問 fetch 可能已被 CORS 策略封鎖。
    如果您是伺服器管理員，請參閱 Ruffle wiki 以獲得協助。
error-wasm-cors =
    Ruffle 未能載入所需的 「.wasm」 檔案元件。
    訪問 fetch 可能已被 CORS 策略封鎖。
    如果您是伺服器管理員，請參閱 Ruffle wiki 以獲得協助。
error-wasm-invalid =
    Ruffle 在嘗試初始化時遇到重大問題。
    此頁面似乎有遺失或無效的檔案，無法執行 Ruffle。
    如果您是伺服器管理員，請參閱 Ruffle wiki 以獲得協助。
error-wasm-download =
    Ruffle 在嘗試初始化時遇到重大問題。
    這通常可以自行解決，因此您可以嘗試重新載入頁面。
    否則，請聯絡網站管理員。
error-wasm-disabled-on-edge =
    Ruffle 未能載入所需的「.wasm 」檔案元件。
    要解決這個問題，請嘗試打開瀏覽器的設定，按一下「隱私、搜尋和服務」，向下捲動，然後關閉「加強您在網路上的安全性」。
    這將允許您的瀏覽器載入所需的「.wasm 」檔案。
    如果問題仍然存在，您可能必須使用其他瀏覽器。
error-wasm-unsupported-browser =
    您使用的瀏覽器不支援 Ruffle 執行所需的 WebAssembly 擴充套件。
    請切換到支援的瀏覽器。
    您可以在 Wiki 上找到支援的瀏覽器清單。
error-javascript-conflict =
    Ruffle 在嘗試初始化時遇到重大問題。
    這個頁面似乎使用了與 Ruffle 相衝突的 JavaScript 程式碼。
    如果您是伺服器管理員，請嘗試在空白頁面上載入檔案。
error-javascript-conflict-outdated = 您也可以嘗試上傳較新版本的 Ruffle，可能會避免此問題 (目前的版本已過時：{ $buildDate })。
error-csp-conflict =
    Ruffle 在嘗試初始化時遇到重大問題。
    此網頁伺服器的內容安全政策不允許執行所需的 「.wasm 」元件。
    如果您是伺服器管理員，請參閱 Ruffle wiki 以取得協助。
error-unknown =
    Ruffle 在嘗試顯示此 Flash 內容時遇到了重大問題。
    { $outdated ->
        [true]  如果您是伺服器管理員，請嘗試上傳較新版本的 Ruffle (目前的版本已經過時 { $buildDate })。
       *[false] 這不應該發生，所以如果您能提出錯誤，我們會非常感激！
    }
`,"save-manager.ftl":`save-delete-prompt = 你確定要刪除這個存檔嗎？
save-reload-prompt =
    唯一方法只有 { $action ->
        [delete] 刪除
       *[replace] 取代
    } 這個存檔不會完全取代直到重新啟動。 你需要繼續嗎?
save-download = 下載
save-replace = 取代
save-delete = 刪除
save-backup-all = 下載所有存檔檔案。
`,"volume-controls.ftl":`volume-controls-mute = 靜音
volume-controls-unmute = 取消靜音
`}},Ds={};for(const[s,i]of Object.entries(Mb)){const o=new tb(s);if(i){const u=xp();for(const[f,m]of Object.entries(i))if(m)for(const g of o.addResource(new bb(m)))console.error(`Error in text for ${s} ${f}: ${g}`);Ep(u)}Ds[s]=o}function _b(s,i,o){const u=Ds[s];if(u!==void 0){const f=u.getMessage(i);if(f!==void 0&&f.value)return u.formatPattern(f.value,o)}return null}function ee(s,i){const o=xp(),u=jb(navigator.languages,Object.keys(Ds),{defaultLocale:"en-US"});for(const f in u){const m=_b(u[f],s,i);if(m)return m}return console.error(`Unknown text key '${s}'`),Ep(o),s}function Ke(s,i){const o=document.createElement("div");return ee(s,i).split(`
`).forEach(u=>{const f=document.createElement("p");f.innerText=u,o.appendChild(f)}),o}function Cb(){return D.jsx("div",{id:"volume-controls-modal",class:"modal hidden",children:D.jsx("div",{class:"modal-area",children:D.jsxs("div",{id:"volume-controls",children:[D.jsx("input",{id:"mute-checkbox",type:"checkbox"}),D.jsx("label",{id:"volume-mute",for:"mute-checkbox",title:ee("volume-controls-unmute")}),D.jsx("label",{id:"volume-min",for:"mute-checkbox",title:ee("volume-controls-mute")}),D.jsx("label",{id:"volume-mid",for:"mute-checkbox",title:ee("volume-controls-mute")}),D.jsx("label",{id:"volume-max",for:"mute-checkbox",title:ee("volume-controls-mute")}),D.jsx("input",{id:"volume-slider",type:"range",min:"0",max:"100",step:"1"}),D.jsx("span",{id:"volume-slider-text"}),D.jsx("span",{class:"close-modal"})]})})})}function qb(){return D.jsx("div",{id:"video-modal",class:"modal hidden",children:D.jsxs("div",{class:"modal-area",children:[D.jsx("span",{class:"close-modal"}),D.jsx("div",{id:"video-holder"})]})})}function Ub(){return D.jsx("div",{id:"hardware-acceleration-modal",class:"modal hidden",children:D.jsxs("div",{class:"modal-area",children:[D.jsx("span",{class:"close-modal"}),D.jsx("span",{id:"acceleration-text",children:ee("enable-hardware-acceleration")}),D.jsx("a",{href:"https://github.com/ruffle-rs/ruffle/wiki/Frequently-Asked-Questions-For-Users#chrome-hardware-acceleration",target:"_blank",class:"modal-button",children:ee("enable-hardware-acceleration-link")})]})})}const ls=navigator.userAgent.includes("Mac OS X")?"Command":"Ctrl";function Nb(){return D.jsx("div",{id:"clipboard-modal",class:"modal hidden",children:D.jsxs("div",{class:"modal-area",children:[D.jsx("span",{class:"close-modal"}),D.jsx("h2",{children:ee("clipboard-message-title")}),D.jsx("p",{id:"clipboard-modal-description"}),D.jsxs("p",{children:[D.jsxs("b",{children:[ls,"+C"]}),D.jsx("span",{children:ee("clipboard-message-copy")})]}),D.jsxs("p",{children:[D.jsxs("b",{children:[ls,"+X"]}),D.jsx("span",{children:ee("clipboard-message-cut")})]}),D.jsxs("p",{children:[D.jsxs("b",{children:[ls,"+V"]}),D.jsx("span",{children:ee("clipboard-message-paste")})]})]})})}function Lb(){return D.jsx("div",{id:"context-menu-overlay",class:"hidden",children:D.jsx("ul",{id:"context-menu"})})}const Un=document.createElement("template");Un.content.appendChild(D.jsx(Lg,{}));Un.content.appendChild(D.jsx(Hg,{}));Un.content.appendChild(D.jsx(Bg,{}));Un.content.appendChild(D.jsx(Vg,{}));Un.content.appendChild(D.jsx(Yg,{}));Un.content.appendChild(D.jsx(Cb,{}));Un.content.appendChild(D.jsx(qb,{}));Un.content.appendChild(D.jsx(Ub,{}));Un.content.appendChild(D.jsx(Nb,{}));Un.content.appendChild(D.jsx(Lb,{}));const jp="application/x-shockwave-flash",Ap="application/futuresplash",Tp="application/x-shockwave-flash2-preview",Dp="application/vnd.adobe.flash.movie",Hb="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";function Bb(s){let i="";try{i=new URL(s,"https://example.com").pathname}catch{}if(i&&i.length>=4){const o=i.slice(-4).toLowerCase();if(o===".swf"||o===".spl")return!0}return!1}function Vb(s,i){switch(s=s.toLowerCase(),s){case jp.toLowerCase():case Ap.toLowerCase():case Tp.toLowerCase():case Dp.toLowerCase():return!0;default:if(i)switch(s){case"application/octet-stream":case"binary/octet-stream":return!0}}return!1}function Op(s,i){const o=Bb(s);return i?Vb(i,o):o}function Yb(s){const i=s.pathname;return i.substring(i.lastIndexOf("/")+1)}let Jl=null,_t=!1;try{if(document.currentScript!==void 0&&document.currentScript!==null&&"src"in document.currentScript&&document.currentScript.src!==""){let s=document.currentScript.src;!s.endsWith(".js")&&!s.endsWith("/")&&(s+="/"),Jl=new URL(".",s),_t=Jl.protocol.includes("extension")}}catch{console.warn("Unable to get currentScript URL")}const Pl="https://ruffle.rs";class Mp extends Error{constructor(i){super(`Failed to fetch ${i}`),this.swfUrl=i,this.swfUrl=i}}class _p extends Error{constructor(i){super(`Not a valid swf: ${i}`)}}class ws extends Error{constructor(i){super("Failed to load Ruffle WASM"),this.cause=i}}class Cp extends Error{constructor(i){super(`Invalid options: ${i}`)}}var ea={},Ot={},up;function Fb(){if(up)return Ot;up=1,Object.defineProperty(Ot,"__esModule",{value:!0}),Ot.createRef=Ot.h=void 0,Ot.createElement=o;const s=Rp(),i=Sp();function o(f,m,...g){if(typeof f=="function")return f({...m,children:g});const{finalTag:w,finalAttrs:k}=(0,i.applyTsxTag)(f,m),b=(0,i.createDomElement)(w,k);return k&&(0,s.setAttributes)(b,k),(0,i.applyChildren)(b,g),b}Ot.h=o;const u=()=>({current:null});return Ot.createRef=u,Ot}var Rr={},sp;function Gb(){if(sp)return Rr;sp=1,Object.defineProperty(Rr,"__esModule",{value:!0}),Rr.defineCustomElement=i;const s=Ts();function i(o,u,f){return customElements.define(o,u,f),m=>(0,s.jsx)(o,m)}return Rr}var is={},cp;function Zb(){return cp||(cp=1,Object.defineProperty(is,"__esModule",{value:!0})),is}var fp;function Qb(){return fp||(fp=1,function(s){var i=ea&&ea.__createBinding||(Object.create?function(u,f,m,g){g===void 0&&(g=m);var w=Object.getOwnPropertyDescriptor(f,m);(!w||("get"in w?!f.__esModule:w.writable||w.configurable))&&(w={enumerable:!0,get:function(){return f[m]}}),Object.defineProperty(u,g,w)}:function(u,f,m,g){g===void 0&&(g=m),u[g]=f[m]}),o=ea&&ea.__exportStar||function(u,f){for(var m in u)m!=="default"&&!Object.prototype.hasOwnProperty.call(f,m)&&i(f,u,m)};Object.defineProperty(s,"__esModule",{value:!0}),o(Fb(),s),o(Gb(),s),o(Ts(),s),o(Zb(),s)}(ea)),ea}var $b=Qb();function Xb({action:s,showDetails:i,errorArray:o,errorText:u,swfUrl:f}){if(s.type=="show_details"){const m=()=>(i(),!1);return D.jsx("li",{children:D.jsx("a",{href:"#",id:"panic-view-details",onClick:m,children:ee("view-error-details")})})}else{if(s.type=="open_link")return D.jsx("li",{children:D.jsx("a",{href:s.url,target:"_top",children:s.label})});{let m;document.location.protocol.includes("extension")&&f?m=f.href:m=document.location.href,m=m.split(/[?#]/,1)[0];const g=`Error on ${m}`;let w=`https://github.com/ruffle-rs/ruffle/issues/new?title=${encodeURIComponent(g)}&template=error_report.md&labels=error-report&body=`,k=encodeURIComponent(u);return o.stackIndex>-1&&String(w+k).length>8195&&(o[o.stackIndex]=null,o.avmStackIndex>-1&&(o[o.avmStackIndex]=null),k=encodeURIComponent(o.join(""))),w+=k,D.jsx("li",{children:D.jsx("a",{href:w,target:"_top",children:ee("report-bug")})})}}}function ks(){const s=new Date(Mn.buildDate),i=new Date;return i.setMonth(i.getMonth()-6),i>s}const ve={OpenDemo:{type:"open_link",url:Pl+"/demo",label:ee("ruffle-demo")},DownloadDesktop:{type:"open_link",url:Pl+"/downloads#desktop-app",label:ee("ruffle-desktop")},UpdateRuffle:{type:"open_link",url:Pl+"/downloads",label:ee("update-ruffle")},CreateReport:{type:"create_report"},ShowDetails:{type:"show_details"},createReportOrUpdate(){return ks()?this.UpdateRuffle:this.CreateReport},openWiki(s,i){return{type:"open_link",url:`https://github.com/ruffle-rs/ruffle/wiki/${s}`,label:i??ee("ruffle-wiki")}}};function Wb(s){var i;if(s instanceof Mp)return s.swfUrl&&!s.swfUrl.protocol.includes("http")?{body:Ke("error-file-protocol"),actions:[ve.OpenDemo,ve.DownloadDesktop]}:window.location.origin===((i=s.swfUrl)==null?void 0:i.origin)||window.location.protocol.includes("extension")?{body:Ke("error-swf-fetch"),actions:[ve.ShowDetails]}:{body:Ke("error-swf-cors"),actions:[ve.openWiki("Using-Ruffle#configure-cors-header"),ve.ShowDetails]};if(s instanceof _p)return{body:Ke("error-invalid-swf"),actions:[ve.ShowDetails]};if(s instanceof ws){if(window.location.protocol==="file:")return{body:Ke("error-file-protocol"),actions:[ve.OpenDemo,ve.DownloadDesktop]};const o=String(s.cause.message).toLowerCase();if(o.includes("mime"))return{body:Ke("error-wasm-mime-type"),actions:[ve.openWiki("Using-Ruffle#configure-webassembly-mime-type"),ve.ShowDetails]};if(o.includes("networkerror")||o.includes("failed to fetch"))return{body:Ke("error-wasm-cors"),actions:[ve.openWiki("Using-Ruffle#configure-cors-header"),ve.ShowDetails]};if(o.includes("disallowed by embedder"))return{body:Ke("error-csp-conflict"),actions:[ve.openWiki("Using-Ruffle#configure-wasm-csp"),ve.ShowDetails]};if(s.cause.name==="CompileError"&&o.includes("bad type"))return{body:Ke("error-wasm-unsupported-browser"),actions:[ve.openWiki("#web"),ve.ShowDetails]};if(s.cause.name==="CompileError")return{body:Ke("error-wasm-invalid"),actions:[ve.openWiki("Using-Ruffle#addressing-a-compileerror"),ve.ShowDetails]};if((o.includes("could not download wasm module")||o.includes("webassembly compilation aborted"))&&s.cause.name==="TypeError")return{body:Ke("error-wasm-download"),actions:[ve.ShowDetails]};if(s.cause.name==="TypeError"){const u=Ke("error-javascript-conflict");return ks()&&u.appendChild(Ke("error-javascript-conflict-outdated",{buildDate:Mn.buildDate})),{body:u,actions:[ve.createReportOrUpdate(),ve.ShowDetails]}}return navigator.userAgent.includes("Edg")&&o.includes("webassembly is not defined")?{body:Ke("error-wasm-disabled-on-edge"),actions:[ve.openWiki("Frequently-Asked-Questions-For-Users#edge-webassembly-error",ee("more-info")),ve.ShowDetails]}:{body:Ke("error-wasm-not-found"),actions:[ve.openWiki("Using-Ruffle#configuration-options"),ve.ShowDetails]}}return s instanceof Cp?{body:Ke("error-javascript-config"),actions:[ve.openWiki("Using-Ruffle#javascript-api"),ve.ShowDetails]}:{body:Ke("error-unknown",{buildDate:Mn.buildDate,outdated:String(ks)}),actions:[ve.createReportOrUpdate(),ve.ShowDetails]}}function Kb(s,i,o,u){const f=o.join("");let{body:m,actions:g}=Wb(i);const w=$b.createRef(),k=()=>{w.current.classList.add("details"),w.current.replaceChildren(D.jsx("textarea",{readOnly:!0,children:f}))};s.textContent="",s.appendChild(D.jsxs("div",{id:"panic",children:[D.jsx("div",{id:"panic-title",children:ee("panic-title")}),D.jsx("div",{id:"panic-body",ref:w,children:m}),D.jsx("div",{id:"panic-footer",children:D.jsx("ul",{children:g.map(b=>Xb({action:b,showDetails:k,errorText:f,errorArray:o,swfUrl:u}))})})]}))}const Jb="modulepreload",Pb=function(s,i){return new URL(s,i).href},dp={},mp=function(i,o,u){let f=Promise.resolve();if(o&&o.length>0){const g=document.getElementsByTagName("link"),w=document.querySelector("meta[property=csp-nonce]"),k=(w==null?void 0:w.nonce)||(w==null?void 0:w.getAttribute("nonce"));f=Promise.allSettled(o.map(b=>{if(b=Pb(b,u),b in dp)return;dp[b]=!0;const O=b.endsWith(".css"),H=O?'[rel="stylesheet"]':"";if(!!u)for(let le=g.length-1;le>=0;le--){const oe=g[le];if(oe.href===b&&(!O||oe.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${b}"]${H}`))return;const X=document.createElement("link");if(X.rel=O?"stylesheet":Jb,O||(X.as="script"),X.crossOrigin="",X.href=b,k&&X.setAttribute("nonce",k),document.head.appendChild(X),O)return new Promise((le,oe)=>{X.addEventListener("load",le),X.addEventListener("error",()=>oe(new Error(`Unable to preload CSS for ${b}`)))})}))}function m(g){const w=new Event("vite:preloadError",{cancelable:!0});if(w.payload=g,window.dispatchEvent(w),!w.defaultPrevented)throw g}return f.then(g=>{for(const w of g||[])w.status==="rejected"&&m(w.reason);return i().catch(m)})},Ib=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,3,1,0,1,10,14,1,12,0,65,0,65,0,65,0,252,10,0,0,11])),ey=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,7,1,5,0,208,112,26,11])),ny=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,12,1,10,0,67,0,0,0,0,252,0,26,11])),ty=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,8,1,6,0,65,0,192,26,11])),ay=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]));async function ly(s){var b,O,H;Ob();const i=(await Promise.all([Ib(),ay(),ny(),ty(),ey()])).every(Boolean);i||console.log("Some WebAssembly extensions are NOT available, falling back to the vanilla WebAssembly module"),(O=(b=Il.options).onFirstLoad)==null||O.call(b),Il.options.onFirstLoad=()=>{};const{default:o,RuffleInstanceBuilder:u,ZipWriter:f}=await(i?mp(()=>import("./ruffle_web-BmpnpbKh.js"),__vite__mapDeps([0,1]),import.meta.url):mp(()=>import("./ruffle_web-wasm_mvp-DB98f-AV.js"),__vite__mapDeps([2,1]),import.meta.url));let m;const g=i?new URL(""+new URL("ruffle_web_bg-b2_YOVBa.wasm",import.meta.url).href,import.meta.url):new URL(""+new URL("ruffle_web-wasm_mvp_bg-BUoLu6TE.wasm",import.meta.url).href,import.meta.url),w=await fetch(g);if(s&&typeof ReadableStreamDefaultController=="function"){const $=((H=w==null?void 0:w.headers)==null?void 0:H.get("content-length"))||"";let X=0;const le=parseInt($);m=new Response(new ReadableStream({async start(oe){var qe;const be=(qe=w.body)==null?void 0:qe.getReader();if(!be)throw"Response had no body";for(s(X,le);;){const{done:Ye,value:ue}=await be.read();if(Ye)break;ue!=null&&ue.byteLength&&(X+=ue==null?void 0:ue.byteLength),oe.enqueue(ue),s(X,le)}oe.close()}}),w)}else m=w;return await o(m),[u,f]}let rs=null;async function iy(s){rs===null&&(rs=ly(s));const i=await rs;return[new i[0],()=>new i[1]]}const ry=999,Rs={};function oy(s){const i=Rs[s];return i!==void 0?{internalName:s,name:i.name,class:i.class}:null}function Os(s,i){const o=Rs[s];if(o!==void 0){if(o.class!==i)throw new Error("Internal naming conflict on "+s);return o.name}let u=0;if(window.customElements!==void 0)for(;u<ry;){let f=s;if(u>0&&(f=f+"-"+u),window.customElements.get(f)!==void 0){u+=1;continue}else window.customElements.define(f,i);return Rs[s]={class:i,name:f,internalName:s},f}throw new Error("Failed to assign custom element "+s)}function Ee(s){return s!=null}function uy(s,i){if(Ee(i.allowScriptAccess)&&s.setAllowScriptAccess(i.allowScriptAccess),Ee(i.backgroundColor)&&s.setBackgroundColor(sy(i.backgroundColor)),Ee(i.upgradeToHttps)&&s.setUpgradeToHttps(i.upgradeToHttps),Ee(i.compatibilityRules)&&s.setCompatibilityRules(i.compatibilityRules),Ee(i.letterbox)&&s.setLetterbox(i.letterbox.toLowerCase()),Ee(i.base)&&s.setBaseUrl(i.base),Ee(i.menu)&&s.setShowMenu(i.menu),Ee(i.allowFullscreen)&&s.setAllowFullscreen(i.allowFullscreen),Ee(i.salign)&&s.setStageAlign(i.salign.toLowerCase()),Ee(i.forceAlign)&&s.setForceAlign(i.forceAlign),Ee(i.quality)?s.setQuality(i.quality.toLowerCase()):fy()&&(console.log("Running on a mobile device; defaulting to low quality"),s.setQuality("low")),Ee(i.scale)&&s.setScale(i.scale.toLowerCase()),Ee(i.forceScale)&&s.setForceScale(i.forceScale),Ee(i.frameRate)&&s.setFrameRate(i.frameRate),Ee(i.wmode)&&s.setWmode(i.wmode),Ee(i.logLevel)&&s.setLogLevel(i.logLevel),Ee(i.maxExecutionDuration)&&s.setMaxExecutionDuration(cy(i.maxExecutionDuration)),Ee(i.playerVersion)&&s.setPlayerVersion(i.playerVersion),Ee(i.preferredRenderer)&&s.setPreferredRenderer(i.preferredRenderer),Ee(i.openUrlMode)&&s.setOpenUrlMode(i.openUrlMode.toLowerCase()),Ee(i.allowNetworking)&&s.setAllowNetworking(i.allowNetworking.toLowerCase()),Ee(i.credentialAllowList)&&s.setCredentialAllowList(i.credentialAllowList),Ee(i.playerRuntime)&&s.setPlayerRuntime(i.playerRuntime),Ee(i.socketProxy))for(const o of i.socketProxy)s.addSocketProxy(o.host,o.port,o.proxyUrl);if(Ee(i.gamepadButtonMapping))for(const[o,u]of Object.entries(i.gamepadButtonMapping))s.addGamepadButtonMapping(o,u);if(Ee(i.urlRewriteRules))for(const[o,u]of i.urlRewriteRules)if(o instanceof RegExp)s.addUrlRewriteRule(o,u);else{const f=o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),m=new RegExp(`^${f}$`),g=u.replace(/\$/g,"$$$$");s.addUrlRewriteRule(m,g)}}function sy(s){if(s.startsWith("#")&&(s=s.substring(1)),s.length<6)return;let i=0;for(let o=0;o<6;o++){const u=parseInt(s[o],16);isNaN(u)?i=i<<4:i=i<<4|u}return i}function cy(s){return typeof s=="number"?s:s.secs}function fy(){return typeof window.orientation<"u"}const dy=/^\s*(\d+(\.\d+)?(%)?)/;let Sr=!1;function os(s){if(s==null)return{};s instanceof URLSearchParams||(s=new URLSearchParams(s));const i={};for(const[o,u]of s)i[o]=u.toString();return i}class pp{constructor(i,o){this.x=i,this.y=o}distanceTo(i){const o=i.x-this.x,u=i.y-this.y;return Math.sqrt(o*o+u*u)}}class Mt{constructor(i,o,u){this.contextMenuForceDisabled=!1,this.isTouch=!1,this.contextMenuSupported=!1,this._suppressContextMenu=!1,this.panicked=!1,this.rendererDebugInfo="",this.longPressTimer=null,this.pointerDownPosition=null,this.pointerMoveMaxDistance=0,this.onFSCommand=[],this.config={},this.SaveRow=({rowKey:w,solName:k,solData:b})=>D.jsxs("tr",{children:[D.jsx("td",{title:w,children:k}),D.jsx("td",{children:D.jsx("span",{class:"save-option",id:"download-save",title:ee("save-download"),onClick:()=>us(py(b,"application/octet-stream"),k+".sol")})}),D.jsxs("td",{children:[D.jsx("input",{type:"file",accept:".sol",class:"replace-save",id:"replace-save-"+w,onChange:O=>this.replaceSOL(O,w)}),D.jsx("label",{for:"replace-save-"+w,class:"save-option",id:"replace-save",title:ee("save-replace")})]}),D.jsx("td",{children:D.jsx("span",{class:"save-option",id:"delete-save",title:ee("save-delete"),onClick:()=>this.deleteSave(w)})})]}),this.element=i,this.debugPlayerInfo=o,this.onCallbackAvailable=u,this.shadow=this.element.attachShadow({mode:"open",delegatesFocus:!0}),this.shadow.appendChild(Un.content.cloneNode(!0)),this.dynamicStyles=this.shadow.getElementById("dynamic-styles"),this.container=this.shadow.getElementById("container"),this.playButton=this.shadow.getElementById("play-button"),this.playButton.addEventListener("click",()=>this.play()),this.unmuteOverlay=this.shadow.getElementById("unmute-overlay"),this.splashScreen=this.shadow.getElementById("splash-screen"),this.virtualKeyboard=this.shadow.getElementById("virtual-keyboard"),this.virtualKeyboard.addEventListener("input",this.virtualKeyboardInput.bind(this)),this.saveManager=this.shadow.getElementById("save-manager"),this.videoModal=this.shadow.getElementById("video-modal"),this.hardwareAccelerationModal=this.shadow.getElementById("hardware-acceleration-modal"),this.volumeControls=this.shadow.getElementById("volume-controls-modal"),this.clipboardModal=this.shadow.getElementById("clipboard-modal"),this.addModalJavaScript(this.saveManager),this.addModalJavaScript(this.volumeControls),this.addModalJavaScript(this.videoModal),this.addModalJavaScript(this.hardwareAccelerationModal),this.addModalJavaScript(this.clipboardModal),this.volumeSettings=new my(!1,100),this.addVolumeControlsJavaScript(this.volumeControls);const f=this.saveManager.querySelector(".modal-button");f&&(f.addEventListener("click",this.backupSaves.bind(this)),f.innerText=ee("save-backup-all"));const m=this.unmuteOverlay.querySelector("#unmute-overlay-svg");if(m){const w=m.querySelector("#unmute-text");w.textContent=ee("click-to-unmute")}this.contextMenuOverlay=this.shadow.getElementById("context-menu-overlay"),this.contextMenuElement=this.shadow.getElementById("context-menu");const g=w=>{w.preventDefault(),w.stopPropagation()};this.contextMenuElement.addEventListener("contextmenu",g),this.contextMenuElement.addEventListener("click",g),this.contextMenuElement.dir=vy(),document.documentElement.addEventListener("pointerdown",this.checkIfTouch.bind(this)),this.element.addEventListener("contextmenu",this.showContextMenu.bind(this)),this.container.addEventListener("pointerdown",this.pointerDown.bind(this)),this.container.addEventListener("pointermove",this.checkLongPressMovement.bind(this)),this.container.addEventListener("pointerup",this.checkLongPress.bind(this)),this.container.addEventListener("pointercancel",this.clearLongPressTimer.bind(this)),this.element.addEventListener("fullscreenchange",this.fullScreenChange.bind(this)),this.element.addEventListener("webkitfullscreenchange",this.fullScreenChange.bind(this)),this.instance=null,this.newZipWriter=null,this._readyState=Fa.HaveNothing,this.metadata=null,this.lastActivePlayingState=!1,this.setupPauseOnTabHidden()}addFSCommandHandler(i){this.onFSCommand.push(i)}callFSCommand(i,o){if(this.onFSCommand.length==0)return!1;for(const u of this.onFSCommand)u(i,o);return!0}addModalJavaScript(i){const o=i.querySelector("#video-holder"),u=()=>{i.classList.add("hidden"),o&&(o.textContent="")};i.parentNode.addEventListener("click",u);const f=i.querySelector(".modal-area");f&&f.addEventListener("click",g=>g.stopPropagation());const m=i.querySelector(".close-modal");m&&m.addEventListener("click",u)}addVolumeControlsJavaScript(i){const o=i.querySelector("#mute-checkbox"),u=i.querySelector("#volume-mute"),f=[i.querySelector("#volume-min"),i.querySelector("#volume-mid"),i.querySelector("#volume-max")],m=i.querySelector("#volume-slider"),g=i.querySelector("#volume-slider-text"),w=()=>{if(this.volumeSettings.isMuted)u.style.display="inline",f.forEach(k=>{k.style.display="none"});else{u.style.display="none";const k=Math.round(this.volumeSettings.volume/50);f.forEach((b,O)=>{b.style.display=O===k?"inline":"none"})}};o.checked=this.volumeSettings.isMuted,m.disabled=o.checked,m.valueAsNumber=this.volumeSettings.volume,g.textContent=m.value+"%",w(),o.addEventListener("change",()=>{var k;m.disabled=o.checked,this.volumeSettings.isMuted=o.checked,(k=this.instance)==null||k.set_volume(this.volumeSettings.get_volume()),w()}),m.addEventListener("input",()=>{var k;g.textContent=m.value+"%",this.volumeSettings.volume=m.valueAsNumber,(k=this.instance)==null||k.set_volume(this.volumeSettings.get_volume()),w()})}setupPauseOnTabHidden(){document.addEventListener("visibilitychange",()=>{this.instance&&(document.hidden&&(this.lastActivePlayingState=this.instance.is_playing(),this.instance.pause()),!document.hidden&&this.lastActivePlayingState===!0&&this.instance.play())},!1)}updateStyles(){if(this.dynamicStyles.sheet){if(this.dynamicStyles.sheet.cssRules)for(let u=this.dynamicStyles.sheet.cssRules.length-1;u>=0;u--)this.dynamicStyles.sheet.deleteRule(u);const i=this.element.attributes.getNamedItem("width");if(i!=null){const u=Mt.htmlDimensionToCssDimension(i.value);u!==null&&this.dynamicStyles.sheet.insertRule(`:host { width: ${u}; }`)}const o=this.element.attributes.getNamedItem("height");if(o!=null){const u=Mt.htmlDimensionToCssDimension(o.value);u!==null&&this.dynamicStyles.sheet.insertRule(`:host { height: ${u}; }`)}}}isUnusedFallbackObject(){const i=oy("ruffle-object");if(i!==null){let o=this.element.parentNode;for(;o!==document&&o!==null;){if(o.nodeName===i.name)return!0;o=o.parentNode}}return!1}async ensureFreshInstance(){var m,g,w;this.destroy(),this.loadedConfig&&this.loadedConfig.splashScreen!==!1&&this.loadedConfig.preloader!==!1&&this.showSplashScreen(),this.loadedConfig&&this.loadedConfig.preloader===!1&&console.warn("The configuration option preloader has been replaced with splashScreen. If you own this website, please update the configuration."),this.loadedConfig&&this.loadedConfig.maxExecutionDuration&&typeof this.loadedConfig.maxExecutionDuration!="number"&&console.warn("Configuration: An obsolete format for duration for 'maxExecutionDuration' was used, please use a single number indicating seconds instead. For instance '15' instead of '{secs: 15, nanos: 0}'."),this.loadedConfig&&typeof this.loadedConfig.contextMenu=="boolean"&&console.warn('The configuration option contextMenu no longer takes a boolean. Use "on", "off", or "rightClickOnly".');const[i,o]=await iy(this.onRuffleDownloadProgress.bind(this)).catch(k=>{console.error(`Serious error loading Ruffle: ${k}`);const b=new ws(k);throw this.panic(b),b});if(this.newZipWriter=o,uy(i,this.loadedConfig||{}),i.setVolume(this.volumeSettings.get_volume()),(m=this.loadedConfig)!=null&&m.fontSources)for(const k of this.loadedConfig.fontSources)try{const b=await fetch(k);i.addFont(k,new Uint8Array(await b.arrayBuffer()))}catch(b){console.warn(`Couldn't download font source from ${k}`,b)}for(const k in(g=this.loadedConfig)==null?void 0:g.defaultFonts){const b=this.loadedConfig.defaultFonts[k];b&&i.setDefaultFont(k,b)}this.instance=await i.build(this.container,this).catch(k=>{throw console.error(`Serious error loading Ruffle: ${k}`),this.panic(k),k}),this.rendererDebugInfo=this.instance.renderer_debug_info(),this.rendererDebugInfo.includes("Adapter Device Type: Cpu")&&this.container.addEventListener("mouseover",this.openHardwareAccelerationModal.bind(this),{once:!0});const u=this.instance.renderer_name(),f=this.instance.constructor;if(console.log("%cNew Ruffle instance created (Version: "+Mn.versionName+" | WebAssembly extensions: "+(f.is_wasm_simd_used()?"ON":"OFF")+" | Used renderer: "+(u??"")+")","background: #37528C; color: #FFAD33"),this.audioState()!=="running"&&(this.container.style.visibility="hidden",await new Promise(k=>{window.setTimeout(()=>{k()},200)}),this.container.style.visibility=""),this.unmuteAudioContext(),!this.loadedConfig||this.loadedConfig.autoplay===$a.On||this.loadedConfig.autoplay!==$a.Off&&this.audioState()==="running"){if(this.play(),this.audioState()!=="running"){(!this.loadedConfig||this.loadedConfig.unmuteOverlay!==ei.Hidden)&&(this.unmuteOverlay.style.display="block"),this.container.addEventListener("click",this.unmuteOverlayClicked.bind(this),{once:!0});const k=(w=this.instance)==null?void 0:w.audio_context();k&&(k.onstatechange=()=>{k.state==="running"&&this.unmuteOverlayClicked(),k.onstatechange=null})}}else this.playButton.style.display="block"}onRuffleDownloadProgress(i,o){const u=this.splashScreen.querySelector(".loadbar-inner"),f=this.splashScreen.querySelector(".loadbar");Number.isNaN(o)?f&&(f.style.display="none"):u.style.width=`${100*(i/o)}%`}destroy(){this.instance&&(this.instance.destroy(),this.instance=null,this.metadata=null,this._readyState=Fa.HaveNothing,console.log("Ruffle instance destroyed."))}checkOptions(i){if(typeof i=="string")return{url:i};const o=(u,f)=>{if(!u){const m=new Cp(f);throw this.panic(m),m}};return o(i!==null&&typeof i=="object","Argument 0 must be a string or object"),o("url"in i||"data"in i,"Argument 0 must contain a `url` or `data` key"),o(!("url"in i)||typeof i.url=="string","`url` must be a string"),i}async reload(){if(this.loadedConfig)await this.load(this.loadedConfig);else throw new Error("Cannot reload if load wasn't first called")}async reloadWithCanvasRenderer(){if(this.loadedConfig&&this.loadedConfig.preferredRenderer!==Ar.Canvas){const i={...this.loadedConfig,preferredRenderer:Ar.Canvas};await this.load(i)}else if(this.loadedConfig)this.panic(new Error(ee("error-canvas-reload")));else throw new Error("Cannot reload if load wasn't first called")}async load(i,o=!1){var u;if(i=this.checkOptions(i),!this.element.isConnected||this.isUnusedFallbackObject()){console.warn("Ignoring attempt to play a disconnected or suspended Ruffle element");return}if(!Ms(this.element))try{this.loadedConfig={...Ug,...o&&"url"in i?{allowScriptAccess:Up("samedomain",i.url)}:{},...((u=window.RufflePlayer)==null?void 0:u.config)??{},...this.config,...i},this.loadedConfig.backgroundColor&&this.loadedConfig.wmode!==jr.Transparent&&(this.container.style.backgroundColor=this.loadedConfig.backgroundColor),await this.ensureFreshInstance(),"url"in i?(console.log(`Loading SWF file ${i.url}`),this.swfUrl=new URL(i.url,document.baseURI),this.instance.stream_from(this.swfUrl.href,os(i.parameters))):"data"in i&&(console.log("Loading SWF data"),delete this.swfUrl,this.instance.load_data(new Uint8Array(i.data),os(i.parameters),i.swfFileName||"movie.swf"))}catch(f){console.error(`Serious error occurred loading SWF file: ${f}`);const m=new Error(f);throw this.panic(m),m}}play(){this.instance&&(this.instance.play(),this.playButton.style.display="none")}get isPlaying(){return this.instance?this.instance.is_playing():!1}get volume(){return this.instance?this.instance.volume():1}set volume(i){this.instance&&this.instance.set_volume(i)}get fullscreenEnabled(){return!!(document.fullscreenEnabled||document.webkitFullscreenEnabled)}get isFullscreen(){return(document.fullscreenElement||document.webkitFullscreenElement)===this.element}setFullscreen(i){this.fullscreenEnabled&&i!==this.isFullscreen&&(i?this.enterFullscreen():this.exitFullscreen())}enterFullscreen(){const i={navigationUI:"hide"};this.element.requestFullscreen?this.element.requestFullscreen(i):this.element.webkitRequestFullscreen?this.element.webkitRequestFullscreen(i):this.element.webkitRequestFullScreen&&this.element.webkitRequestFullScreen(i)}exitFullscreen(){document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}fullScreenChange(){var i;(i=this.instance)==null||i.set_fullscreen(this.isFullscreen)}checkIfTouch(i){this.isTouch=i.pointerType==="touch"||i.pointerType==="pen"}confirmReloadSave(i,o,u){if(zr(o)&&localStorage[i]){if(!u&&!confirm(ee("save-delete-prompt")))return;const f=this.swfUrl?this.swfUrl.pathname:"",m=this.swfUrl?this.swfUrl.hostname:document.location.hostname,g=i.split("/").slice(1,-1).join("/");if(f.includes(g)&&i.startsWith(m)){confirm(ee("save-reload-prompt",{action:u?"replace":"delete"}))&&this.loadedConfig&&(this.destroy(),u?localStorage.setItem(i,o):localStorage.removeItem(i),this.reload(),this.populateSaves(),this.saveManager.classList.add("hidden"));return}u?localStorage.setItem(i,o):localStorage.removeItem(i),this.populateSaves(),this.saveManager.classList.add("hidden")}}replaceSOL(i,o){const u=i.target,f=new FileReader;f.addEventListener("load",()=>{if(f.result&&typeof f.result=="string"){const m=new RegExp("data:.*;base64,"),g=f.result.replace(m,"");this.confirmReloadSave(o,g,!0)}}),u&&u.files&&u.files.length>0&&u.files[0]&&f.readAsDataURL(u.files[0])}checkSaves(){if(!this.saveManager.querySelector("#local-saves"))return!1;try{if(localStorage===null)return!1}catch{return!1}return Object.keys(localStorage).some(i=>{const o=i.split("/").pop(),u=localStorage.getItem(i);return o&&u&&zr(u)})}deleteSave(i){const o=localStorage.getItem(i);o&&this.confirmReloadSave(i,o,!1)}populateSaves(){if(!this.checkSaves())return;const i=this.saveManager.querySelector("#local-saves");i.textContent="",Object.keys(localStorage).forEach(o=>{const u=o.split("/").pop(),f=localStorage.getItem(o);u&&f&&zr(f)&&i.appendChild(D.jsx(this.SaveRow,{rowKey:o,solName:u,solData:f}))})}async backupSaves(){const i=this.newZipWriter(),o=[];Object.keys(localStorage).forEach(f=>{let m=String(f.split("/").pop());const g=localStorage.getItem(f);if(g&&zr(g)){const w=qp(g),k=o.filter(b=>b===m).length;o.push(m),k>0&&(m+=` (${k+1})`),i.addFile(m+".sol",w)}});const u=new Blob([i.save()],{type:"application/zip"});us(u,"saves.zip")}openHardwareAccelerationModal(){this.hardwareAccelerationModal.classList.remove("hidden")}async openSaveManager(){this.populateSaves(),this.saveManager.classList.remove("hidden")}openVolumeControls(){this.volumeControls.classList.remove("hidden")}async downloadSwf(){try{if(this.swfUrl){console.log("Downloading SWF: "+this.swfUrl);const i=await fetch(this.swfUrl.href);if(!i.ok){console.error("SWF download failed");return}const o=await i.blob();us(o,Yb(this.swfUrl))}else console.error("SWF download failed")}catch{console.error("SWF download failed")}}virtualKeyboardInput(){const i=this.virtualKeyboard,o=i.value;for(const u of o)for(const f of["keydown","keyup"])this.element.dispatchEvent(new KeyboardEvent(f,{key:u,bubbles:!0}));i.value=""}openVirtualKeyboard(){var i;(i=this.instance)!=null&&i.has_focus()?this.virtualKeyboard.focus({preventScroll:!0}):setTimeout(()=>{this.virtualKeyboard.focus({preventScroll:!0})},0)}closeVirtualKeyboard(){this.isVirtualKeyboardFocused()&&this.container.focus({preventScroll:!0})}isVirtualKeyboardFocused(){return this.shadow.activeElement===this.virtualKeyboard}contextMenuItems(){const i="✓",o=[],u=()=>{o.length>0&&o[o.length-1]!==null&&o.push(null)};return this.instance&&this.isPlaying&&(this.instance.prepare_context_menu().forEach((m,g)=>{m.separatorBefore&&u(),o.push({text:m.caption+(m.checked?` (${i})`:""),onClick:async()=>{var w;return(w=this.instance)==null?void 0:w.run_context_menu_callback(g)},enabled:m.enabled})}),u()),this.fullscreenEnabled&&(this.isFullscreen?o.push({text:ee("context-menu-exit-fullscreen"),onClick:async()=>this.setFullscreen(!1)}):o.push({text:ee("context-menu-enter-fullscreen"),onClick:async()=>this.setFullscreen(!0)})),o.push({text:ee("context-menu-volume-controls"),onClick:async()=>{this.openVolumeControls()}}),this.instance&&this.swfUrl&&this.loadedConfig&&this.loadedConfig.showSwfDownload===!0&&(u(),o.push({text:ee("context-menu-download-swf"),onClick:this.downloadSwf.bind(this)})),navigator.clipboard&&window.isSecureContext&&o.push({text:ee("context-menu-copy-debug-info"),onClick:()=>navigator.clipboard.writeText(this.getPanicData())}),this.checkSaves()&&o.push({text:ee("context-menu-open-save-manager"),onClick:this.openSaveManager.bind(this)}),u(),o.push({text:ee("context-menu-about-ruffle",{flavor:_t?"extension":"",version:Mn.versionName}),async onClick(){window.open(Pl,"_blank")}}),this.isTouch&&(u(),o.push({text:ee("context-menu-hide"),onClick:async()=>{this.contextMenuForceDisabled=!0}})),o}pointerDown(i){this.pointerDownPosition=new pp(i.pageX,i.pageY),this.pointerMoveMaxDistance=0,this.startLongPressTimer()}clearLongPressTimer(){this.longPressTimer&&(clearTimeout(this.longPressTimer),this.longPressTimer=null)}startLongPressTimer(){this.clearLongPressTimer(),this.longPressTimer=setTimeout(()=>this.clearLongPressTimer(),800)}checkLongPressMovement(i){if(this.pointerDownPosition!==null){const o=new pp(i.pageX,i.pageY),u=this.pointerDownPosition.distanceTo(o);u>this.pointerMoveMaxDistance&&(this.pointerMoveMaxDistance=u)}}checkLongPress(i){this.longPressTimer?this.clearLongPressTimer():!this.contextMenuSupported&&i.pointerType!=="mouse"&&this.pointerMoveMaxDistance<15&&this.showContextMenu(i)}suppressContextMenu(){this._suppressContextMenu=!0}showContextMenu(i){var b,O;if(this.panicked)return;if(i.preventDefault(),this._suppressContextMenu){this._suppressContextMenu=!1;return}if(this.shadow.querySelectorAll(".modal:not(.hidden)").length!==0||(i.type==="contextmenu"?(this.contextMenuSupported=!0,document.documentElement.addEventListener("click",this.hideContextMenu.bind(this),{once:!0})):(document.documentElement.addEventListener("pointerup",this.hideContextMenu.bind(this),{once:!0}),i.stopPropagation()),[!1,Ga.Off].includes(((b=this.loadedConfig)==null?void 0:b.contextMenu)??Ga.On)||this.isTouch&&((O=this.loadedConfig)==null?void 0:O.contextMenu)===Ga.RightClickOnly||this.contextMenuForceDisabled))return;for(;this.contextMenuElement.firstChild;)this.contextMenuElement.removeChild(this.contextMenuElement.firstChild);for(const H of this.contextMenuItems())if(H===null)this.contextMenuElement.appendChild(D.jsx("li",{class:"menu-separator",children:D.jsx("hr",{})}));else{const{text:$,onClick:X,enabled:le}=H,oe=D.jsx("li",{class:{"menu-item":!0,disabled:le===!1},"data-text":$,children:$});if(this.contextMenuElement.appendChild(oe),le!==!1){const be=async qe=>{qe.preventDefault(),qe.stopPropagation(),await X(qe),this.hideContextMenu()};this.contextMenuSupported?(oe.addEventListener("click",be),oe.addEventListener("contextmenu",be)):oe.addEventListener("pointerup",be)}}this.contextMenuOverlay.classList.remove("hidden");const o=this.element.getBoundingClientRect(),u=this.contextMenuElement.getBoundingClientRect(),f=Math.max(0,i.clientX+u.width-document.documentElement.clientWidth),m=Math.max(0,i.clientY+u.height-document.documentElement.clientHeight),g=i.clientX-o.x-f,w=i.clientY-o.y-m,k=getComputedStyle(this.contextMenuElement).direction==="rtl";this.contextMenuElement.style.top=`${w}px`,k?(this.contextMenuElement.style.right=`${o.width-g}px`,this.contextMenuElement.style.left=""):(this.contextMenuElement.style.right="",this.contextMenuElement.style.left=`${g}px`)}hideContextMenu(){var i;(i=this.instance)==null||i.clear_custom_menu_items(),this.contextMenuOverlay.classList.add("hidden")}pause(){this.instance&&(this.instance.pause(),this.playButton.style.display="block")}audioState(){if(this.instance){const i=this.instance.audio_context();return i&&i.state||"running"}return"suspended"}unmuteOverlayClicked(){if(this.instance){if(this.audioState()!=="running"){const i=this.instance.audio_context();i&&i.resume()}this.unmuteOverlay.style.display="none"}}unmuteAudioContext(){if(!Sr){if(navigator.maxTouchPoints<1){Sr=!0;return}"audioSession"in navigator?navigator.audioSession.type="playback":this.container.addEventListener("click",()=>{var u;if(Sr)return;const i=(u=this.instance)==null?void 0:u.audio_context();if(!i)return;const o=new Audio;o.src=(()=>{const f=new ArrayBuffer(10),m=new DataView(f),g=i.sampleRate;return m.setUint32(0,g,!0),m.setUint32(4,g,!0),m.setUint16(8,1,!0),`data:audio/wav;base64,UklGRisAAABXQVZFZm10IBAAAAABAAEA${window.btoa(String.fromCharCode(...new Uint8Array(f))).slice(0,13)}AgAZGF0YQcAAACAgICAgICAAAA=`})(),o.load(),o.play().then(()=>{Sr=!0}).catch(f=>{console.warn(`Failed to play dummy sound: ${f}`)})},{once:!0})}}static htmlDimensionToCssDimension(i){if(i){const o=i.match(dy);if(o){let u=o[1];return o[3]||(u+="px"),u}}return null}callExternalInterface(i,o){var u;return(u=this.instance)==null?void 0:u.call_exposed_callback(i,o)}getObjectId(){return this.element.getAttribute("name")}set traceObserver(i){var o;(o=this.instance)==null||o.set_trace_observer(i)}getPanicData(){let i=`
# Player Info
`;if(i+=`Allows script access: ${this.loadedConfig?this.loadedConfig.allowScriptAccess:!1}
`,i+=`${this.rendererDebugInfo}
`,i+=this.debugPlayerInfo(),i+=`
# Page Info
`,i+=`Page URL: ${document.location.href}
`,this.swfUrl&&(i+=`SWF URL: ${this.swfUrl}
`),i+=`
# Browser Info
`,i+=`User Agent: ${window.navigator.userAgent}
`,i+=`Platform: ${window.navigator.platform}
`,i+=`Has touch support: ${window.navigator.maxTouchPoints>0}
`,i+=`
# Ruffle Info
`,i+=`Version: ${Mn.versionNumber}
`,i+=`Name: ${Mn.versionName}
`,i+=`Channel: ${Mn.versionChannel}
`,i+=`Built: ${Mn.buildDate}
`,i+=`Commit: ${Mn.commitHash}
`,i+=`Is extension: ${_t}
`,i+=`
# Metadata
`,this.metadata)for(const[o,u]of Object.entries(this.metadata))i+=`${o}: ${u}
`;return i}panic(i){var f;if(this.panicked)return;this.panicked=!0,this.hideSplashScreen();const o=i;if(i instanceof Error&&(i.name==="AbortError"||i.message.includes("AbortError")))return;if(i instanceof ws){const m=(f=this.loadedConfig)==null?void 0:f.openInNewTab,g=this.loadedConfig&&"url"in this.loadedConfig?new URL(this.loadedConfig.url,document.baseURI):void 0;if(m&&g){this.addOpenInNewTabMessage(m,g);return}i=i.cause}const u=Object.assign([],{stackIndex:-1,avmStackIndex:-1});if(u.push(`# Error Info
`),i instanceof Error){if(u.push(`Error name: ${i.name}
`),u.push(`Error message: ${i.message}
`),i.stack){const m=u.push(`Error stack:
\`\`\`
${i.stack}
\`\`\`
`)-1;if(i.avmStack){const g=u.push(`AVM2 stack:
\`\`\`
    ${i.avmStack.trim().replace(/\t/g,"    ")}
\`\`\`
`)-1;u.avmStackIndex=g}u.stackIndex=m}}else u.push(`Error: ${i}
`);u.push(this.getPanicData()),Kb(this.container,o,u,this.swfUrl),this.destroy()}addOpenInNewTabMessage(i,o){var k,b;const u=new URL(o);if((k=this.loadedConfig)!=null&&k.parameters){const O=os((b=this.loadedConfig)==null?void 0:b.parameters);Object.entries(O).forEach(([H,$])=>{u.searchParams.set(H,$)})}this.hideSplashScreen();const f=document.createElement("div");f.id="message-overlay";const m=document.createElement("div");m.className="message",m.appendChild(Ke("message-cant-embed"));const g=document.createElement("div"),w=document.createElement("a");w.innerText=ee("open-in-new-tab"),w.onclick=()=>i(u),g.appendChild(w),m.appendChild(g),f.appendChild(m),this.container.prepend(f)}displayRootMovieDownloadFailedMessage(i){var u;const o=(u=this.loadedConfig)==null?void 0:u.openInNewTab;if(o&&this.swfUrl&&window.location.origin!==this.swfUrl.origin)this.addOpenInNewTabMessage(o,this.swfUrl);else{const f=i?new _p(this.swfUrl):new Mp(this.swfUrl);this.panic(f)}}displayMessage(i){const o=document.createElement("div");o.id="message-overlay";const u=document.createElement("div");u.className="message";const f=document.createElement("p");f.textContent=i,u.appendChild(f);const m=document.createElement("div"),g=document.createElement("button");g.id="continue-btn",g.textContent=ee("continue"),m.appendChild(g),u.appendChild(m),o.appendChild(u),this.container.prepend(o),this.container.querySelector("#continue-btn").onclick=()=>{o.parentNode.removeChild(o)}}displayUnsupportedVideo(i){const o=this.videoModal.querySelector("#video-holder");if(o){const u=document.createElement("video");u.addEventListener("contextmenu",f=>f.stopPropagation()),u.src=i,u.autoplay=!0,u.controls=!0,o.textContent="",o.appendChild(u),this.videoModal.classList.remove("hidden")}}displayClipboardModal(i){const o=this.clipboardModal.querySelector("#clipboard-modal-description");o&&(o.textContent=ee("clipboard-message-description",{variant:i?"access-denied":"unsupported"}),this.clipboardModal.classList.remove("hidden"))}hideSplashScreen(){this.splashScreen.classList.add("hidden"),this.container.classList.remove("hidden")}showSplashScreen(){this.splashScreen.classList.remove("hidden"),this.container.classList.add("hidden")}setMetadata(i){this.metadata=i,this._readyState=Fa.Loaded,this.hideSplashScreen(),this.element.dispatchEvent(new CustomEvent(Mt.LOADED_METADATA)),this.element.dispatchEvent(new CustomEvent(Mt.LOADED_DATA))}}Mt.LOADED_METADATA="loadedmetadata";Mt.LOADED_DATA="loadeddata";class my{constructor(i,o){this.isMuted=i,this.volume=o}get_volume(){return this.isMuted?0:this.volume/100}}function Ss(s,i){const o={url:s},u=i("allowNetworking");u!==null&&(o.allowNetworking=u);const f=Up(i("allowScriptAccess"),s);f!==null&&(o.allowScriptAccess=f);const m=i("bgcolor");m!==null&&(o.backgroundColor=m);const g=i("base");if(g!==null)if(g==="."){const le=new URL(s,document.baseURI);o.base=new URL(g,le).href}else o.base=g;const w=hp(i("menu"));w!==null&&(o.menu=w);const k=hp(i("allowFullScreen"));k!==null&&(o.allowFullscreen=k);const b=i("flashvars");b!==null&&(o.parameters=b);const O=i("quality");O!==null&&(o.quality=O);const H=i("salign");H!==null&&(o.salign=H);const $=i("scale");$!==null&&(o.scale=$);const X=i("wmode");return X!==null&&(o.wmode=X),o}function zs(s){if(s){let i="",o="";try{const u=new URL(s,Pl);i=u.pathname,o=u.hostname}catch{}if(i.startsWith("/v/")&&/^(?:(?:www\.|m\.)?youtube(?:-nocookie)?\.com)|(?:youtu\.be)$/i.test(o))return!0}return!1}function xs(s,i){var f;const o=s.getAttribute(i),u=((f=window.RufflePlayer)==null?void 0:f.config)??{};if(o)try{const m=new URL(o);m.protocol==="http:"&&window.location.protocol==="https:"&&(!("upgradeToHttps"in u)||u.upgradeToHttps!==!1)&&(m.protocol="https:",s.setAttribute(i,m.toString()))}catch{}}function Ms(s){let i=s.parentElement;for(;i!==null;){switch(i.tagName){case"AUDIO":case"VIDEO":return!0}i=i.parentElement}return!1}function us(s,i){const o=URL.createObjectURL(s),u=document.createElement("a");u.href=o,u.download=i,u.click(),URL.revokeObjectURL(o)}function qp(s){const i=atob(s);return Uint8Array.from(i,o=>o.charCodeAt(0))}function py(s,i){const o=qp(s);return new Blob([o],{type:i})}function zr(s){try{const i=atob(s);return hy(i)}catch{return!1}}function hy(s){return s.charCodeAt(0)===0&&s.charCodeAt(1)===191&&s.slice(6,10)==="TCSO"&&[0,4,0,0,0,0].every((i,o)=>s.charCodeAt(10+o)===i)}function hp(s){switch(s==null?void 0:s.toLowerCase()){case"true":return!0;case"false":return!1;default:return null}}function Up(s,i){switch(s==null?void 0:s.toLowerCase()){case"always":return!0;case"never":return!1;case"samedomain":try{return new URL(window.location.href).origin===new URL(i,window.location.href).origin}catch{return!1}default:return null}}function vy(){const s=new Intl.Locale(navigator.language);let i=null;if("getTextInfo"in s&&typeof s.getTextInfo=="function")i=s.getTextInfo();else if("textInfo"in s&&typeof s.textInfo=="object")i=s.textInfo;else return"ltr";return typeof i=="object"&&"direction"in i&&typeof i.direction=="string"&&i.direction||"ltr"}var gy=function(s,i,o,u,f){if(u==="m")throw new TypeError("Private method is not writable");if(u==="a"&&!f)throw new TypeError("Private accessor was defined without a setter");if(typeof i=="function"?s!==i||!f:!i.has(s))throw new TypeError("Cannot write private member to an object whose class did not declare it");return u==="a"?f.call(s,o):f?f.value=o:i.set(s,o),o},Me=function(s,i,o,u){if(o==="a"&&!u)throw new TypeError("Private accessor was defined without a getter");if(typeof i=="function"?s!==i||!u:!i.has(s))throw new TypeError("Cannot read private member from an object whose class did not declare it");return o==="m"?u:o==="a"?u.call(s):u?u.value:i.get(s)},je;class by{constructor(i){je.set(this,void 0),gy(this,je,i,"f")}addFSCommandHandler(i){Me(this,je,"f").addFSCommandHandler(i)}get readyState(){return Me(this,je,"f")._readyState}get metadata(){return Me(this,je,"f").metadata}get loadedConfig(){return Me(this,je,"f").loadedConfig??null}async reload(){await Me(this,je,"f").reload()}async load(i,o=!1){await Me(this,je,"f").load(i,o)}resume(){Me(this,je,"f").play()}get isPlaying(){return Me(this,je,"f").isPlaying}get volume(){return Me(this,je,"f").volume}set volume(i){Me(this,je,"f").volume=i}get fullscreenEnabled(){return Me(this,je,"f").fullscreenEnabled}get isFullscreen(){return Me(this,je,"f").isFullscreen}setFullscreen(i){Me(this,je,"f").setFullscreen(i)}requestFullscreen(){Me(this,je,"f").enterFullscreen()}exitFullscreen(){Me(this,je,"f").exitFullscreen()}async downloadSwf(){await Me(this,je,"f").downloadSwf()}displayMessage(i){Me(this,je,"f").displayMessage(i)}suspend(){Me(this,je,"f").pause()}get suspended(){return!Me(this,je,"f").isPlaying}set traceObserver(i){Me(this,je,"f").traceObserver=i}get config(){return Me(this,je,"f").config}set config(i){Me(this,je,"f").config=i}callExternalInterface(i,...o){return Me(this,je,"f").callExternalInterface(i,o)}}je=new WeakMap;var ge=function(s,i,o,u){if(o==="a"&&!u)throw new TypeError("Private accessor was defined without a getter");if(typeof i=="function"?s!==i||!u:!i.has(s))throw new TypeError("Cannot read private member from an object whose class did not declare it");return o==="m"?u:o==="a"?u.call(s):u?u.value:i.get(s)},vp=function(s,i,o,u,f){if(u==="m")throw new TypeError("Private method is not writable");if(u==="a"&&!f)throw new TypeError("Private accessor was defined without a setter");if(typeof i=="function"?s!==i||!f:!i.has(s))throw new TypeError("Cannot write private member to an object whose class did not declare it");return u==="a"?f.call(s,o):f?f.value=o:i.set(s,o),o},me,Wl;class _s extends HTMLElement{get onFSCommand(){return ge(this,Wl,"f")}set onFSCommand(i){vp(this,Wl,i,"f")}get readyState(){return ge(this,me,"f")._readyState}get metadata(){return ge(this,me,"f").metadata}constructor(){super(),me.set(this,void 0),Wl.set(this,null),vp(this,me,new Mt(this,()=>this.debugPlayerInfo(),i=>{try{Object.defineProperty(this,i,{value:(...o)=>ge(this,me,"f").callExternalInterface(i,o),configurable:!0})}catch(o){console.warn(`Error setting ExternalInterface legacy callback for ${i}`,o)}}),"f"),ge(this,me,"f").addFSCommandHandler((i,o)=>{var u;(u=ge(this,Wl,"f"))==null||u.call(this,i,o)})}ruffle(i){if((i??1)===1)return new by(ge(this,me,"f"));throw new Error(`Version ${i} not supported.`)}get loadedConfig(){return ge(this,me,"f").loadedConfig??null}connectedCallback(){ge(this,me,"f").updateStyles()}static get observedAttributes(){return["width","height"]}attributeChangedCallback(i,o,u){(i==="width"||i==="height")&&ge(this,me,"f").updateStyles()}disconnectedCallback(){ge(this,me,"f").destroy()}async reload(){await ge(this,me,"f").reload()}async load(i,o=!1){await ge(this,me,"f").load(i,o)}play(){ge(this,me,"f").play()}get isPlaying(){return ge(this,me,"f").isPlaying}get volume(){return ge(this,me,"f").volume}set volume(i){ge(this,me,"f").volume=i}get fullscreenEnabled(){return ge(this,me,"f").fullscreenEnabled}get isFullscreen(){return ge(this,me,"f").isFullscreen}setFullscreen(i){ge(this,me,"f").setFullscreen(i)}enterFullscreen(){ge(this,me,"f").enterFullscreen()}exitFullscreen(){ge(this,me,"f").exitFullscreen()}async downloadSwf(){await ge(this,me,"f").downloadSwf()}pause(){ge(this,me,"f").pause()}set traceObserver(i){ge(this,me,"f").traceObserver=i}debugPlayerInfo(){return""}PercentLoaded(){return ge(this,me,"f")._readyState===Fa.Loaded?100:0}get config(){return ge(this,me,"f").config}set config(i){ge(this,me,"f").config=i}displayMessage(i){ge(this,me,"f").displayMessage(i)}}me=new WeakMap,Wl=new WeakMap;function Np(s,i){if(s){for(const o of s.attributes)if(o.specified){if(o.name==="title"&&o.value==="Adobe Flash Player")continue;try{i.setAttribute(o.name,o.value)}catch{console.warn(`Unable to set attribute ${o.name} on Ruffle instance`)}}for(const o of Array.from(s.children))i.appendChild(o)}}class Wa extends _s{connectedCallback(){super.connectedCallback();const i=this.attributes.getNamedItem("src");if(i){const o=f=>{var m;return((m=this.attributes.getNamedItem(f))==null?void 0:m.value)??null},u=Ss(i.value,o);this.load(u,!0)}}get nodeName(){return"EMBED"}get src(){var i;return(i=this.attributes.getNamedItem("src"))==null?void 0:i.value}set src(i){if(i){const o=document.createAttribute("src");o.value=i,this.attributes.setNamedItem(o)}else this.attributes.removeNamedItem("src")}static get observedAttributes(){return["src","width","height"]}attributeChangedCallback(i,o,u){if(super.attributeChangedCallback(i,o,u),this.isConnected&&i==="src"){const f=this.attributes.getNamedItem("src");if(f){const m=w=>{var k;return((k=this.attributes.getNamedItem(w))==null?void 0:k.value)??null},g=Ss(f.value,m);this.load(g,!0)}}}static isInterdictable(i){const o=i.getAttribute("src"),u=i.getAttribute("type");return!o||Ms(i)?!1:zs(o)?(xs(i,"src"),!1):Op(o,u)}static fromNativeEmbedElement(i){const o=Os("ruffle-embed",Wa),u=document.createElement(o);return Np(i,u),u}get height(){return this.getAttribute("height")||""}set height(i){this.setAttribute("height",i)}get width(){return this.getAttribute("width")||""}set width(i){this.setAttribute("width",i)}get type(){return this.getAttribute("type")||""}set type(i){this.setAttribute("type",i)}}function yy(s,i,o){i=i.toLowerCase();for(const[u,f]of Object.entries(s))if(u.toLowerCase()===i)return f;return o}function gp(s){var o,u;const i={};for(const f of s.children)if(f instanceof HTMLParamElement){const m=(o=f.attributes.getNamedItem("name"))==null?void 0:o.value,g=(u=f.attributes.getNamedItem("value"))==null?void 0:u.value;m&&g&&(i[m]=g)}return i}class Qa extends _s{constructor(){super(...arguments),this.params={}}connectedCallback(){var o;super.connectedCallback(),this.params=gp(this);let i=null;if(this.attributes.getNamedItem("data")?i=(o=this.attributes.getNamedItem("data"))==null?void 0:o.value:this.params.movie&&(i=this.params.movie),i){const u=["allowNetworking","base","bgcolor","flashvars"],m=Ss(i,g=>yy(this.params,g,u.includes(g)?this.getAttribute(g):null));this.load(m,!0)}}debugPlayerInfo(){var u;let i=`Player type: Object
`,o=null;return this.attributes.getNamedItem("data")?o=(u=this.attributes.getNamedItem("data"))==null?void 0:u.value:this.params.movie&&(o=this.params.movie),i+=`SWF URL: ${o}
`,Object.keys(this.params).forEach(f=>{i+=`Param ${f}: ${this.params[f]}
`}),Object.keys(this.attributes).forEach(f=>{var m;i+=`Attribute ${f}: ${(m=this.attributes.getNamedItem(f))==null?void 0:m.value}
`}),i}get nodeName(){return"OBJECT"}get data(){return this.getAttribute("data")}set data(i){if(i){const o=document.createAttribute("data");o.value=i,this.attributes.setNamedItem(o)}else this.attributes.removeNamedItem("data")}static isInterdictable(i){var w,k,b;if(Ms(i)||i.getElementsByTagName("ruffle-object").length>0||i.getElementsByTagName("ruffle-embed").length>0)return!1;const o=(w=i.attributes.getNamedItem("data"))==null?void 0:w.value.toLowerCase(),u=((k=i.attributes.getNamedItem("type"))==null?void 0:k.value)??null,f=gp(i);let m;if(o){if(zs(o))return xs(i,"data"),!1;m=o}else if(f&&f.movie){if(zs(f.movie)){const O=i.querySelector("param[name='movie']");if(O){xs(O,"value");const H=O.getAttribute("value");H&&i.setAttribute("data",H)}return!1}m=f.movie}else return!1;const g=(b=i.attributes.getNamedItem("classid"))==null?void 0:b.value.toLowerCase();return g===Hb.toLowerCase()?!Array.from(i.getElementsByTagName("object")).some(Qa.isInterdictable)&&!Array.from(i.getElementsByTagName("embed")).some(Wa.isInterdictable):g?!1:Op(m,u)}static fromNativeObjectElement(i){const o=Os("ruffle-object",Qa),u=document.createElement(o);for(const f of Array.from(i.getElementsByTagName("embed")))Wa.isInterdictable(f)&&f.remove();for(const f of Array.from(i.getElementsByTagName("object")))Qa.isInterdictable(f)&&f.remove();return Np(i,u),u}get height(){return this.getAttribute("height")||""}set height(i){this.setAttribute("height",i)}get width(){return this.getAttribute("width")||""}set width(i){this.setAttribute("width",i)}get type(){return this.getAttribute("type")||""}set type(i){this.setAttribute("type",i)}}class Es{constructor(i){if(this.__mimeTypes=[],this.__namedMimeTypes={},i)for(let o=0;o<i.length;o++)this.install(i[o])}install(i){const o=new Lp(i),u=this.__mimeTypes.length;this.__mimeTypes.push(o),this.__namedMimeTypes[i.type]=o,this[o.type]=o,this[u]=o}item(i){return this.__mimeTypes[i>>>0]}namedItem(i){return this.__namedMimeTypes[i]}get length(){return this.__mimeTypes.length}[Symbol.iterator](){return this.__mimeTypes[Symbol.iterator]()}get[Symbol.toStringTag](){return"MimeTypeArray"}}class Lp{constructor(i){this.__mimeType=i}get type(){return this.__mimeType.type}get description(){return this.__mimeType.description}get suffixes(){return this.__mimeType.suffixes}get enabledPlugin(){return this.__mimeType.enabledPlugin}get[Symbol.toStringTag](){return"MimeType"}}class wy extends Es{constructor(i,o,u){super(),this.name=i,this.description=o,this.filename=u}}class bp{constructor(i){this.__plugins=[],this.__namedPlugins={};for(let o=0;o<i.length;o++)this.install(i[o])}install(i){const o=this.__plugins.length;this.__plugins.push(i),this.__namedPlugins[i.name]=i,this[i.name]=i,this[o]=i}item(i){return this.__plugins[i>>>0]}namedItem(i){return this.__namedPlugins[i]}refresh(){}[Symbol.iterator](){return this.__plugins[Symbol.iterator]()}get[Symbol.toStringTag](){return"PluginArray"}get length(){return this.__plugins.length}}const it=new wy("Shockwave Flash","Shockwave Flash 32.0 r0","ruffle.js");it.install({type:Ap,description:"Shockwave Flash",suffixes:"spl",enabledPlugin:it});it.install({type:jp,description:"Shockwave Flash",suffixes:"swf",enabledPlugin:it});it.install({type:Tp,description:"Shockwave Flash",suffixes:"swf",enabledPlugin:it});it.install({type:Dp,description:"Shockwave Flash",suffixes:"swf",enabledPlugin:it});function ky(s){if(navigator.plugins.namedItem("Shockwave Flash"))return;(!("install"in navigator.plugins)||!navigator.plugins.install)&&(Object.defineProperty(window,"PluginArray",{value:bp}),Object.defineProperty(navigator,"plugins",{value:new bp(navigator.plugins),writable:!1})),navigator.plugins.install(s),s.length>0&&(!("install"in navigator.mimeTypes)||!navigator.mimeTypes.install)&&(Object.defineProperty(window,"MimeTypeArray",{value:Es}),Object.defineProperty(window,"MimeType",{value:Lp}),Object.defineProperty(navigator,"mimeTypes",{value:new Es(navigator.mimeTypes),writable:!1}));const o=navigator.mimeTypes;for(let u=0;u<s.length;u+=1)o.install(s[u])}function Ry(s){let i=(Jl==null?void 0:Jl.href)??"";return!_t&&"publicPath"in s&&s.publicPath!==null&&s.publicPath!==void 0&&(i=s.publicPath),i!==""&&!i.endsWith("/")&&(i+="/"),i}var wp;const ti=((wp=window.RufflePlayer)==null?void 0:wp.config)??{},Sy=Ry(ti)+"ruffle.js";let ss,cs;function zy(){var s;return"favorFlash"in ti&&ti.favorFlash===!1?!1:(((s=navigator.plugins.namedItem("Shockwave Flash"))==null?void 0:s.filename)??"ruffle.js")!=="ruffle.js"}function Hp(){try{ss=ss??document.getElementsByTagName("object"),cs=cs??document.getElementsByTagName("embed");for(const s of Array.from(ss))if(Qa.isInterdictable(s)){const i=Qa.fromNativeObjectElement(s);s.replaceWith(i)}for(const s of Array.from(cs))if(Wa.isInterdictable(s)){const i=Wa.fromNativeEmbedElement(s);s.replaceWith(i)}}catch(s){console.error(`Serious error encountered when polyfilling native Flash elements: ${s}`)}}let fs,ds;function Bp(){fs=fs??document.getElementsByTagName("iframe"),ds=ds??document.getElementsByTagName("frame"),[fs,ds].forEach(s=>{for(const i of s){if(i.dataset.rufflePolyfilled!==void 0)continue;i.dataset.rufflePolyfilled="";const o=i.contentWindow,u=`Couldn't load Ruffle into ${i.tagName}[${i.src}]: `;try{o.document.readyState==="complete"&&yp(o,u)}catch(f){_t||console.warn(u+f)}i.addEventListener("load",()=>{yp(o,u)},!1)}})}async function yp(s,i){await new Promise(u=>{window.setTimeout(()=>{u()},100)});let o;try{if(o=s.document,!o)return}catch(u){_t||console.warn(i+u);return}if(!(!_t&&o.documentElement.dataset.ruffleOptout!==void 0)){if(_t)s.RufflePlayer||(s.RufflePlayer={}),s.RufflePlayer.config={...ti,...s.RufflePlayer.config??{}};else if(!s.RufflePlayer){const u=o.createElement("script");u.setAttribute("src",Sy),u.onload=()=>{s.RufflePlayer={},s.RufflePlayer.config=ti},o.head.appendChild(u)}}}function xy(){new MutationObserver(function(i){i.some(u=>Array.from(u.addedNodes).some(f=>["EMBED","OBJECT"].includes(f.nodeName)||f instanceof Element&&f.querySelector("embed, object")!==null))&&(Hp(),Bp())}).observe(document,{childList:!0,subtree:!0})}function Ey(){ky(it)}function jy(){zy()||(Hp(),Bp(),xy())}const Il={version:Mn.versionNumber+"+"+Mn.buildDate.substring(0,10),polyfill(){jy()},pluginPolyfill(){Ey()},createPlayer(){const s=Os("ruffle-player",_s);return document.createElement(s)},options:{}};function Ay(s,i={}){let o;window.RufflePlayer instanceof Lm?o=window.RufflePlayer:(o=new Lm(window.RufflePlayer),window.RufflePlayer=o),o.sources[s]=Il,Il.options=i,("polyfills"in o.config?o.config.polyfills:!0)!==!1&&Il.pluginPolyfill()}Ay("local");kg.createRoot(document.getElementById("root")).render(N.jsx(ms.StrictMode,{children:N.jsx(Ag,{ruffleBaseConfig:{autoplay:$a.On,unmuteOverlay:ei.Hidden,logLevel:Er.Warn,letterbox:xr.On,forceScale:!0,forceAlign:!0},allowSampleSwfs:!0,allowUrlLoading:!1})}));
