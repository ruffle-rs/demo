const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ruffle_web-76ccn4kA.js","./ruffle-imports-CztXuSei.js","./ruffle_web-wasm_mvp-DdsUD5M_.js"])))=>i.map(i=>d[i]);
var wg=Object.defineProperty;var kg=(s,i,o)=>i in s?wg(s,i,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[i]=o;var jr=(s,i,o)=>kg(s,typeof i!="symbol"?i+"":i,o);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))u(f);new MutationObserver(f=>{for(const m of f)if(m.type==="childList")for(const g of m.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&u(g)}).observe(document,{childList:!0,subtree:!0});function o(f){const m={};return f.integrity&&(m.integrity=f.integrity),f.referrerPolicy&&(m.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?m.credentials="include":f.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function u(f){if(f.ep)return;f.ep=!0;const m=o(f);fetch(f.href,m)}})();function Op(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var ts={exports:{}},Il={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lm;function Rg(){if(Lm)return Il;Lm=1;var s=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function o(u,f,m){var g=null;if(m!==void 0&&(g=""+m),f.key!==void 0&&(g=""+f.key),"key"in f){m={};for(var k in f)k!=="key"&&(m[k]=f[k])}else m=f;return f=m.ref,{$$typeof:s,type:u,key:g,ref:f!==void 0?f:null,props:m}}return Il.Fragment=i,Il.jsx=o,Il.jsxs=o,Il}var Hm;function Sg(){return Hm||(Hm=1,ts.exports=Rg()),ts.exports}var N=Sg(),as={exports:{}},K={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bm;function zg(){if(Bm)return K;Bm=1;var s=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),g=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),M=Symbol.for("react.lazy"),L=Symbol.iterator;function Z(h){return h===null||typeof h!="object"?null:(h=L&&h[L]||h["@@iterator"],typeof h=="function"?h:null)}var J={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I=Object.assign,ie={};function re(h,O,U){this.props=h,this.context=O,this.refs=ie,this.updater=U||J}re.prototype.isReactComponent={},re.prototype.setState=function(h,O){if(typeof h!="object"&&typeof h!="function"&&h!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,h,O,"setState")},re.prototype.forceUpdate=function(h){this.updater.enqueueForceUpdate(this,h,"forceUpdate")};function Ue(){}Ue.prototype=re.prototype;function Me(h,O,U){this.props=h,this.context=O,this.refs=ie,this.updater=U||J}var se=Me.prototype=new Ue;se.constructor=Me,I(se,re.prototype),se.isPureReactComponent=!0;var te=Array.isArray,X={H:null,A:null,T:null,S:null,V:null},Ne=Object.prototype.hasOwnProperty;function me(h,O,U,_,Y,ce){return U=ce.ref,{$$typeof:s,type:h,key:O,ref:U!==void 0?U:null,props:ce}}function ye(h,O){return me(h.type,O,void 0,void 0,void 0,h.props)}function C(h){return typeof h=="object"&&h!==null&&h.$$typeof===s}function V(h){var O={"=":"=0",":":"=2"};return"$"+h.replace(/[=:]/g,function(U){return O[U]})}var oe=/\/+/g;function Ae(h,O){return typeof h=="object"&&h!==null&&h.key!=null?V(""+h.key):O.toString(36)}function mn(){}function $e(h){switch(h.status){case"fulfilled":return h.value;case"rejected":throw h.reason;default:switch(typeof h.status=="string"?h.then(mn,mn):(h.status="pending",h.then(function(O){h.status==="pending"&&(h.status="fulfilled",h.value=O)},function(O){h.status==="pending"&&(h.status="rejected",h.reason=O)})),h.status){case"fulfilled":return h.value;case"rejected":throw h.reason}}throw h}function tn(h,O,U,_,Y){var ce=typeof h;(ce==="undefined"||ce==="boolean")&&(h=null);var W=!1;if(h===null)W=!0;else switch(ce){case"bigint":case"string":case"number":W=!0;break;case"object":switch(h.$$typeof){case s:case i:W=!0;break;case M:return W=h._init,tn(W(h._payload),O,U,_,Y)}}if(W)return Y=Y(h),W=_===""?"."+Ae(h,0):_,te(Y)?(U="",W!=null&&(U=W.replace(oe,"$&/")+"/"),tn(Y,O,U,"",function(ot){return ot})):Y!=null&&(C(Y)&&(Y=ye(Y,U+(Y.key==null||h&&h.key===Y.key?"":(""+Y.key).replace(oe,"$&/")+"/")+W)),O.push(Y)),1;W=0;var pn=_===""?".":_+":";if(te(h))for(var Te=0;Te<h.length;Te++)_=h[Te],ce=pn+Ae(_,Te),W+=tn(_,O,U,ce,Y);else if(Te=Z(h),typeof Te=="function")for(h=Te.call(h),Te=0;!(_=h.next()).done;)_=_.value,ce=pn+Ae(_,Te++),W+=tn(_,O,U,ce,Y);else if(ce==="object"){if(typeof h.then=="function")return tn($e(h),O,U,_,Y);throw O=String(h),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(h).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.")}return W}function E(h,O,U){if(h==null)return h;var _=[],Y=0;return tn(h,_,"","",function(ce){return O.call(U,ce,Y++)}),_}function q(h){if(h._status===-1){var O=h._result;O=O(),O.then(function(U){(h._status===0||h._status===-1)&&(h._status=1,h._result=U)},function(U){(h._status===0||h._status===-1)&&(h._status=2,h._result=U)}),h._status===-1&&(h._status=0,h._result=O)}if(h._status===1)return h._result.default;throw h._result}var Q=typeof reportError=="function"?reportError:function(h){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var O=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof h=="object"&&h!==null&&typeof h.message=="string"?String(h.message):String(h),error:h});if(!window.dispatchEvent(O))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",h);return}console.error(h)};function Se(){}return K.Children={map:E,forEach:function(h,O,U){E(h,function(){O.apply(this,arguments)},U)},count:function(h){var O=0;return E(h,function(){O++}),O},toArray:function(h){return E(h,function(O){return O})||[]},only:function(h){if(!C(h))throw Error("React.Children.only expected to receive a single React element child.");return h}},K.Component=re,K.Fragment=o,K.Profiler=f,K.PureComponent=Me,K.StrictMode=u,K.Suspense=w,K.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,K.__COMPILER_RUNTIME={__proto__:null,c:function(h){return X.H.useMemoCache(h)}},K.cache=function(h){return function(){return h.apply(null,arguments)}},K.cloneElement=function(h,O,U){if(h==null)throw Error("The argument must be a React element, but you passed "+h+".");var _=I({},h.props),Y=h.key,ce=void 0;if(O!=null)for(W in O.ref!==void 0&&(ce=void 0),O.key!==void 0&&(Y=""+O.key),O)!Ne.call(O,W)||W==="key"||W==="__self"||W==="__source"||W==="ref"&&O.ref===void 0||(_[W]=O[W]);var W=arguments.length-2;if(W===1)_.children=U;else if(1<W){for(var pn=Array(W),Te=0;Te<W;Te++)pn[Te]=arguments[Te+2];_.children=pn}return me(h.type,Y,void 0,void 0,ce,_)},K.createContext=function(h){return h={$$typeof:g,_currentValue:h,_currentValue2:h,_threadCount:0,Provider:null,Consumer:null},h.Provider=h,h.Consumer={$$typeof:m,_context:h},h},K.createElement=function(h,O,U){var _,Y={},ce=null;if(O!=null)for(_ in O.key!==void 0&&(ce=""+O.key),O)Ne.call(O,_)&&_!=="key"&&_!=="__self"&&_!=="__source"&&(Y[_]=O[_]);var W=arguments.length-2;if(W===1)Y.children=U;else if(1<W){for(var pn=Array(W),Te=0;Te<W;Te++)pn[Te]=arguments[Te+2];Y.children=pn}if(h&&h.defaultProps)for(_ in W=h.defaultProps,W)Y[_]===void 0&&(Y[_]=W[_]);return me(h,ce,void 0,void 0,null,Y)},K.createRef=function(){return{current:null}},K.forwardRef=function(h){return{$$typeof:k,render:h}},K.isValidElement=C,K.lazy=function(h){return{$$typeof:M,_payload:{_status:-1,_result:h},_init:q}},K.memo=function(h,O){return{$$typeof:b,type:h,compare:O===void 0?null:O}},K.startTransition=function(h){var O=X.T,U={};X.T=U;try{var _=h(),Y=X.S;Y!==null&&Y(U,_),typeof _=="object"&&_!==null&&typeof _.then=="function"&&_.then(Se,Q)}catch(ce){Q(ce)}finally{X.T=O}},K.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},K.use=function(h){return X.H.use(h)},K.useActionState=function(h,O,U){return X.H.useActionState(h,O,U)},K.useCallback=function(h,O){return X.H.useCallback(h,O)},K.useContext=function(h){return X.H.useContext(h)},K.useDebugValue=function(){},K.useDeferredValue=function(h,O){return X.H.useDeferredValue(h,O)},K.useEffect=function(h,O,U){var _=X.H;if(typeof U=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return _.useEffect(h,O)},K.useId=function(){return X.H.useId()},K.useImperativeHandle=function(h,O,U){return X.H.useImperativeHandle(h,O,U)},K.useInsertionEffect=function(h,O){return X.H.useInsertionEffect(h,O)},K.useLayoutEffect=function(h,O){return X.H.useLayoutEffect(h,O)},K.useMemo=function(h,O){return X.H.useMemo(h,O)},K.useOptimistic=function(h,O){return X.H.useOptimistic(h,O)},K.useReducer=function(h,O,U){return X.H.useReducer(h,O,U)},K.useRef=function(h){return X.H.useRef(h)},K.useState=function(h){return X.H.useState(h)},K.useSyncExternalStore=function(h,O,U){return X.H.useSyncExternalStore(h,O,U)},K.useTransition=function(){return X.H.useTransition()},K.version="19.1.0",K}var Vm;function Hs(){return Vm||(Vm=1,as.exports=zg()),as.exports}var nn=Hs();const zs=Op(nn);var ls={exports:{}},ei={},is={exports:{}},rs={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ym;function xg(){return Ym||(Ym=1,function(s){function i(E,q){var Q=E.length;E.push(q);e:for(;0<Q;){var Se=Q-1>>>1,h=E[Se];if(0<f(h,q))E[Se]=q,E[Q]=h,Q=Se;else break e}}function o(E){return E.length===0?null:E[0]}function u(E){if(E.length===0)return null;var q=E[0],Q=E.pop();if(Q!==q){E[0]=Q;e:for(var Se=0,h=E.length,O=h>>>1;Se<O;){var U=2*(Se+1)-1,_=E[U],Y=U+1,ce=E[Y];if(0>f(_,Q))Y<h&&0>f(ce,_)?(E[Se]=ce,E[Y]=Q,Se=Y):(E[Se]=_,E[U]=Q,Se=U);else if(Y<h&&0>f(ce,Q))E[Se]=ce,E[Y]=Q,Se=Y;else break e}}return q}function f(E,q){var Q=E.sortIndex-q.sortIndex;return Q!==0?Q:E.id-q.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;s.unstable_now=function(){return m.now()}}else{var g=Date,k=g.now();s.unstable_now=function(){return g.now()-k}}var w=[],b=[],M=1,L=null,Z=3,J=!1,I=!1,ie=!1,re=!1,Ue=typeof setTimeout=="function"?setTimeout:null,Me=typeof clearTimeout=="function"?clearTimeout:null,se=typeof setImmediate<"u"?setImmediate:null;function te(E){for(var q=o(b);q!==null;){if(q.callback===null)u(b);else if(q.startTime<=E)u(b),q.sortIndex=q.expirationTime,i(w,q);else break;q=o(b)}}function X(E){if(ie=!1,te(E),!I)if(o(w)!==null)I=!0,Ne||(Ne=!0,Ae());else{var q=o(b);q!==null&&tn(X,q.startTime-E)}}var Ne=!1,me=-1,ye=5,C=-1;function V(){return re?!0:!(s.unstable_now()-C<ye)}function oe(){if(re=!1,Ne){var E=s.unstable_now();C=E;var q=!0;try{e:{I=!1,ie&&(ie=!1,Me(me),me=-1),J=!0;var Q=Z;try{n:{for(te(E),L=o(w);L!==null&&!(L.expirationTime>E&&V());){var Se=L.callback;if(typeof Se=="function"){L.callback=null,Z=L.priorityLevel;var h=Se(L.expirationTime<=E);if(E=s.unstable_now(),typeof h=="function"){L.callback=h,te(E),q=!0;break n}L===o(w)&&u(w),te(E)}else u(w);L=o(w)}if(L!==null)q=!0;else{var O=o(b);O!==null&&tn(X,O.startTime-E),q=!1}}break e}finally{L=null,Z=Q,J=!1}q=void 0}}finally{q?Ae():Ne=!1}}}var Ae;if(typeof se=="function")Ae=function(){se(oe)};else if(typeof MessageChannel<"u"){var mn=new MessageChannel,$e=mn.port2;mn.port1.onmessage=oe,Ae=function(){$e.postMessage(null)}}else Ae=function(){Ue(oe,0)};function tn(E,q){me=Ue(function(){E(s.unstable_now())},q)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(E){E.callback=null},s.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ye=0<E?Math.floor(1e3/E):5},s.unstable_getCurrentPriorityLevel=function(){return Z},s.unstable_next=function(E){switch(Z){case 1:case 2:case 3:var q=3;break;default:q=Z}var Q=Z;Z=q;try{return E()}finally{Z=Q}},s.unstable_requestPaint=function(){re=!0},s.unstable_runWithPriority=function(E,q){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var Q=Z;Z=E;try{return q()}finally{Z=Q}},s.unstable_scheduleCallback=function(E,q,Q){var Se=s.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?Se+Q:Se):Q=Se,E){case 1:var h=-1;break;case 2:h=250;break;case 5:h=1073741823;break;case 4:h=1e4;break;default:h=5e3}return h=Q+h,E={id:M++,callback:q,priorityLevel:E,startTime:Q,expirationTime:h,sortIndex:-1},Q>Se?(E.sortIndex=Q,i(b,E),o(w)===null&&E===o(b)&&(ie?(Me(me),me=-1):ie=!0,tn(X,Q-Se))):(E.sortIndex=h,i(w,E),I||J||(I=!0,Ne||(Ne=!0,Ae()))),E},s.unstable_shouldYield=V,s.unstable_wrapCallback=function(E){var q=Z;return function(){var Q=Z;Z=q;try{return E.apply(this,arguments)}finally{Z=Q}}}}(rs)),rs}var Fm;function jg(){return Fm||(Fm=1,is.exports=xg()),is.exports}var os={exports:{}},rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gm;function Eg(){if(Gm)return rn;Gm=1;var s=Hs();function i(w){var b="https://react.dev/errors/"+w;if(1<arguments.length){b+="?args[]="+encodeURIComponent(arguments[1]);for(var M=2;M<arguments.length;M++)b+="&args[]="+encodeURIComponent(arguments[M])}return"Minified React error #"+w+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var u={d:{f:o,r:function(){throw Error(i(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},f=Symbol.for("react.portal");function m(w,b,M){var L=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:L==null?null:""+L,children:w,containerInfo:b,implementation:M}}var g=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function k(w,b){if(w==="font")return"";if(typeof b=="string")return b==="use-credentials"?b:""}return rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,rn.createPortal=function(w,b){var M=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!b||b.nodeType!==1&&b.nodeType!==9&&b.nodeType!==11)throw Error(i(299));return m(w,b,null,M)},rn.flushSync=function(w){var b=g.T,M=u.p;try{if(g.T=null,u.p=2,w)return w()}finally{g.T=b,u.p=M,u.d.f()}},rn.preconnect=function(w,b){typeof w=="string"&&(b?(b=b.crossOrigin,b=typeof b=="string"?b==="use-credentials"?b:"":void 0):b=null,u.d.C(w,b))},rn.prefetchDNS=function(w){typeof w=="string"&&u.d.D(w)},rn.preinit=function(w,b){if(typeof w=="string"&&b&&typeof b.as=="string"){var M=b.as,L=k(M,b.crossOrigin),Z=typeof b.integrity=="string"?b.integrity:void 0,J=typeof b.fetchPriority=="string"?b.fetchPriority:void 0;M==="style"?u.d.S(w,typeof b.precedence=="string"?b.precedence:void 0,{crossOrigin:L,integrity:Z,fetchPriority:J}):M==="script"&&u.d.X(w,{crossOrigin:L,integrity:Z,fetchPriority:J,nonce:typeof b.nonce=="string"?b.nonce:void 0})}},rn.preinitModule=function(w,b){if(typeof w=="string")if(typeof b=="object"&&b!==null){if(b.as==null||b.as==="script"){var M=k(b.as,b.crossOrigin);u.d.M(w,{crossOrigin:M,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0})}}else b==null&&u.d.M(w)},rn.preload=function(w,b){if(typeof w=="string"&&typeof b=="object"&&b!==null&&typeof b.as=="string"){var M=b.as,L=k(M,b.crossOrigin);u.d.L(w,M,{crossOrigin:L,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,type:typeof b.type=="string"?b.type:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0,referrerPolicy:typeof b.referrerPolicy=="string"?b.referrerPolicy:void 0,imageSrcSet:typeof b.imageSrcSet=="string"?b.imageSrcSet:void 0,imageSizes:typeof b.imageSizes=="string"?b.imageSizes:void 0,media:typeof b.media=="string"?b.media:void 0})}},rn.preloadModule=function(w,b){if(typeof w=="string")if(b){var M=k(b.as,b.crossOrigin);u.d.m(w,{as:typeof b.as=="string"&&b.as!=="script"?b.as:void 0,crossOrigin:M,integrity:typeof b.integrity=="string"?b.integrity:void 0})}else u.d.m(w)},rn.requestFormReset=function(w){u.d.r(w)},rn.unstable_batchedUpdates=function(w,b){return w(b)},rn.useFormState=function(w,b,M){return g.H.useFormState(w,b,M)},rn.useFormStatus=function(){return g.H.useHostTransitionStatus()},rn.version="19.1.0",rn}var Zm;function Ag(){if(Zm)return os.exports;Zm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(i){console.error(i)}}return s(),os.exports=Eg(),os.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qm;function Tg(){if(Qm)return ei;Qm=1;var s=jg(),i=Hs(),o=Ag();function u(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function g(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function k(e){if(m(e)!==e)throw Error(u(188))}function w(e){var n=e.alternate;if(!n){if(n=m(e),n===null)throw Error(u(188));return n!==e?null:e}for(var t=e,a=n;;){var l=t.return;if(l===null)break;var r=l.alternate;if(r===null){if(a=l.return,a!==null){t=a;continue}break}if(l.child===r.child){for(r=l.child;r;){if(r===t)return k(l),e;if(r===a)return k(l),n;r=r.sibling}throw Error(u(188))}if(t.return!==a.return)t=l,a=r;else{for(var c=!1,d=l.child;d;){if(d===t){c=!0,t=l,a=r;break}if(d===a){c=!0,a=l,t=r;break}d=d.sibling}if(!c){for(d=r.child;d;){if(d===t){c=!0,t=r,a=l;break}if(d===a){c=!0,a=r,t=l;break}d=d.sibling}if(!c)throw Error(u(189))}}if(t.alternate!==a)throw Error(u(190))}if(t.tag!==3)throw Error(u(188));return t.stateNode.current===t?e:n}function b(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=b(e),n!==null)return n;e=e.sibling}return null}var M=Object.assign,L=Symbol.for("react.element"),Z=Symbol.for("react.transitional.element"),J=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),ie=Symbol.for("react.strict_mode"),re=Symbol.for("react.profiler"),Ue=Symbol.for("react.provider"),Me=Symbol.for("react.consumer"),se=Symbol.for("react.context"),te=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),Ne=Symbol.for("react.suspense_list"),me=Symbol.for("react.memo"),ye=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),V=Symbol.for("react.memo_cache_sentinel"),oe=Symbol.iterator;function Ae(e){return e===null||typeof e!="object"?null:(e=oe&&e[oe]||e["@@iterator"],typeof e=="function"?e:null)}var mn=Symbol.for("react.client.reference");function $e(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===mn?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case I:return"Fragment";case re:return"Profiler";case ie:return"StrictMode";case X:return"Suspense";case Ne:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case J:return"Portal";case se:return(e.displayName||"Context")+".Provider";case Me:return(e._context.displayName||"Context")+".Consumer";case te:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case me:return n=e.displayName||null,n!==null?n:$e(e.type)||"Memo";case ye:n=e._payload,e=e._init;try{return $e(e(n))}catch{}}return null}var tn=Array.isArray,E=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q={pending:!1,data:null,method:null,action:null},Se=[],h=-1;function O(e){return{current:e}}function U(e){0>h||(e.current=Se[h],Se[h]=null,h--)}function _(e,n){h++,Se[h]=e.current,e.current=n}var Y=O(null),ce=O(null),W=O(null),pn=O(null);function Te(e,n){switch(_(W,n),_(ce,e),_(Y,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?dm(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=dm(n),e=mm(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}U(Y),_(Y,e)}function ot(){U(Y),U(ce),U(W)}function Br(e){e.memoizedState!==null&&_(pn,e);var n=Y.current,t=mm(n,e.type);n!==t&&(_(ce,e),_(Y,t))}function fi(e){ce.current===e&&(U(Y),U(ce)),pn.current===e&&(U(pn),Xl._currentValue=Q)}var Vr=Object.prototype.hasOwnProperty,Yr=s.unstable_scheduleCallback,Fr=s.unstable_cancelCallback,Pp=s.unstable_shouldYield,Ip=s.unstable_requestPaint,Ln=s.unstable_now,eh=s.unstable_getCurrentPriorityLevel,Zs=s.unstable_ImmediatePriority,Qs=s.unstable_UserBlockingPriority,di=s.unstable_NormalPriority,nh=s.unstable_LowPriority,$s=s.unstable_IdlePriority,th=s.log,ah=s.unstable_setDisableYieldValue,tl=null,hn=null;function ut(e){if(typeof th=="function"&&ah(e),hn&&typeof hn.setStrictMode=="function")try{hn.setStrictMode(tl,e)}catch{}}var vn=Math.clz32?Math.clz32:rh,lh=Math.log,ih=Math.LN2;function rh(e){return e>>>=0,e===0?32:31-(lh(e)/ih|0)|0}var mi=256,pi=4194304;function Ht(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function hi(e,n,t){var a=e.pendingLanes;if(a===0)return 0;var l=0,r=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var d=a&134217727;return d!==0?(a=d&~r,a!==0?l=Ht(a):(c&=d,c!==0?l=Ht(c):t||(t=d&~e,t!==0&&(l=Ht(t))))):(d=a&~r,d!==0?l=Ht(d):c!==0?l=Ht(c):t||(t=a&~e,t!==0&&(l=Ht(t)))),l===0?0:n!==0&&n!==l&&(n&r)===0&&(r=l&-l,t=n&-n,r>=t||r===32&&(t&4194048)!==0)?n:l}function al(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function oh(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xs(){var e=mi;return mi<<=1,(mi&4194048)===0&&(mi=256),e}function Ws(){var e=pi;return pi<<=1,(pi&62914560)===0&&(pi=4194304),e}function Gr(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function ll(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function uh(e,n,t,a,l,r){var c=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var d=e.entanglements,p=e.expirationTimes,S=e.hiddenUpdates;for(t=c&~t;0<t;){var j=31-vn(t),D=1<<j;d[j]=0,p[j]=-1;var z=S[j];if(z!==null)for(S[j]=null,j=0;j<z.length;j++){var x=z[j];x!==null&&(x.lane&=-536870913)}t&=~D}a!==0&&Ks(e,a,0),r!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=r&~(c&~n))}function Ks(e,n,t){e.pendingLanes|=n,e.suspendedLanes&=~n;var a=31-vn(n);e.entangledLanes|=n,e.entanglements[a]=e.entanglements[a]|1073741824|t&4194090}function Js(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var a=31-vn(t),l=1<<a;l&n|e[a]&n&&(e[a]|=n),t&=~l}}function Zr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Qr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ps(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:Om(e.type))}function sh(e,n){var t=q.p;try{return q.p=e,n()}finally{q.p=t}}var st=Math.random().toString(36).slice(2),an="__reactFiber$"+st,un="__reactProps$"+st,ra="__reactContainer$"+st,$r="__reactEvents$"+st,ch="__reactListeners$"+st,fh="__reactHandles$"+st,Is="__reactResources$"+st,il="__reactMarker$"+st;function Xr(e){delete e[an],delete e[un],delete e[$r],delete e[ch],delete e[fh]}function oa(e){var n=e[an];if(n)return n;for(var t=e.parentNode;t;){if(n=t[ra]||t[an]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=gm(e);e!==null;){if(t=e[an])return t;e=gm(e)}return n}e=t,t=e.parentNode}return null}function ua(e){if(e=e[an]||e[ra]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function rl(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(u(33))}function sa(e){var n=e[Is];return n||(n=e[Is]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Xe(e){e[il]=!0}var ec=new Set,nc={};function Bt(e,n){ca(e,n),ca(e+"Capture",n)}function ca(e,n){for(nc[e]=n,e=0;e<n.length;e++)ec.add(n[e])}var dh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),tc={},ac={};function mh(e){return Vr.call(ac,e)?!0:Vr.call(tc,e)?!1:dh.test(e)?ac[e]=!0:(tc[e]=!0,!1)}function vi(e,n,t){if(mh(n))if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var a=n.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+t)}}function gi(e,n,t){if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+t)}}function Gn(e,n,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(n,t,""+a)}}var Wr,lc;function fa(e){if(Wr===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Wr=n&&n[1]||"",lc=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Wr+e+lc}var Kr=!1;function Jr(e,n){if(!e||Kr)return"";Kr=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(n){var D=function(){throw Error()};if(Object.defineProperty(D.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(D,[])}catch(x){var z=x}Reflect.construct(e,[],D)}else{try{D.call()}catch(x){z=x}e.call(D.prototype)}}else{try{throw Error()}catch(x){z=x}(D=e())&&typeof D.catch=="function"&&D.catch(function(){})}}catch(x){if(x&&z&&typeof x.stack=="string")return[x.stack,z.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=a.DetermineComponentFrameRoot(),c=r[0],d=r[1];if(c&&d){var p=c.split(`
`),S=d.split(`
`);for(l=a=0;a<p.length&&!p[a].includes("DetermineComponentFrameRoot");)a++;for(;l<S.length&&!S[l].includes("DetermineComponentFrameRoot");)l++;if(a===p.length||l===S.length)for(a=p.length-1,l=S.length-1;1<=a&&0<=l&&p[a]!==S[l];)l--;for(;1<=a&&0<=l;a--,l--)if(p[a]!==S[l]){if(a!==1||l!==1)do if(a--,l--,0>l||p[a]!==S[l]){var j=`
`+p[a].replace(" at new "," at ");return e.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",e.displayName)),j}while(1<=a&&0<=l);break}}}finally{Kr=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?fa(t):""}function ph(e){switch(e.tag){case 26:case 27:case 5:return fa(e.type);case 16:return fa("Lazy");case 13:return fa("Suspense");case 19:return fa("SuspenseList");case 0:case 15:return Jr(e.type,!1);case 11:return Jr(e.type.render,!1);case 1:return Jr(e.type,!0);case 31:return fa("Activity");default:return""}}function ic(e){try{var n="";do n+=ph(e),e=e.return;while(e);return n}catch(t){return`
Error generating stack: `+t.message+`
`+t.stack}}function zn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function rc(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function hh(e){var n=rc(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),a=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,r=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(c){a=""+c,r.call(this,c)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return a},setValue:function(c){a=""+c},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function bi(e){e._valueTracker||(e._valueTracker=hh(e))}function oc(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),a="";return e&&(a=rc(e)?e.checked?"true":"false":e.value),e=a,e!==t?(n.setValue(e),!0):!1}function yi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var vh=/[\n"\\]/g;function xn(e){return e.replace(vh,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Pr(e,n,t,a,l,r,c,d){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),n!=null?c==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+zn(n)):e.value!==""+zn(n)&&(e.value=""+zn(n)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),n!=null?Ir(e,c,zn(n)):t!=null?Ir(e,c,zn(t)):a!=null&&e.removeAttribute("value"),l==null&&r!=null&&(e.defaultChecked=!!r),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.name=""+zn(d):e.removeAttribute("name")}function uc(e,n,t,a,l,r,c,d){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),n!=null||t!=null){if(!(r!=="submit"&&r!=="reset"||n!=null))return;t=t!=null?""+zn(t):"",n=n!=null?""+zn(n):t,d||n===e.value||(e.value=n),e.defaultValue=n}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=d?e.checked:!!a,e.defaultChecked=!!a,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c)}function Ir(e,n,t){n==="number"&&yi(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function da(e,n,t,a){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&a&&(e[t].defaultSelected=!0)}else{for(t=""+zn(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function sc(e,n,t){if(n!=null&&(n=""+zn(n),n!==e.value&&(e.value=n),t==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=t!=null?""+zn(t):""}function cc(e,n,t,a){if(n==null){if(a!=null){if(t!=null)throw Error(u(92));if(tn(a)){if(1<a.length)throw Error(u(93));a=a[0]}t=a}t==null&&(t=""),n=t}t=zn(n),e.defaultValue=t,a=e.textContent,a===t&&a!==""&&a!==null&&(e.value=a)}function ma(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var gh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function fc(e,n,t){var a=n.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?a?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":a?e.setProperty(n,t):typeof t!="number"||t===0||gh.has(n)?n==="float"?e.cssFloat=t:e[n]=(""+t).trim():e[n]=t+"px"}function dc(e,n,t){if(n!=null&&typeof n!="object")throw Error(u(62));if(e=e.style,t!=null){for(var a in t)!t.hasOwnProperty(a)||n!=null&&n.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var l in n)a=n[l],n.hasOwnProperty(l)&&t[l]!==a&&fc(e,l,a)}else for(var r in n)n.hasOwnProperty(r)&&fc(e,r,n[r])}function eo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),yh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function wi(e){return yh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var no=null;function to(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pa=null,ha=null;function mc(e){var n=ua(e);if(n&&(e=n.stateNode)){var t=e[un]||null;e:switch(e=n.stateNode,n.type){case"input":if(Pr(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+xn(""+n)+'"][type="radio"]'),n=0;n<t.length;n++){var a=t[n];if(a!==e&&a.form===e.form){var l=a[un]||null;if(!l)throw Error(u(90));Pr(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<t.length;n++)a=t[n],a.form===e.form&&oc(a)}break e;case"textarea":sc(e,t.value,t.defaultValue);break e;case"select":n=t.value,n!=null&&da(e,!!t.multiple,n,!1)}}}var ao=!1;function pc(e,n,t){if(ao)return e(n,t);ao=!0;try{var a=e(n);return a}finally{if(ao=!1,(pa!==null||ha!==null)&&(ir(),pa&&(n=pa,e=ha,ha=pa=null,mc(n),e)))for(n=0;n<e.length;n++)mc(e[n])}}function ol(e,n){var t=e.stateNode;if(t===null)return null;var a=t[un]||null;if(a===null)return null;t=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(u(231,n,typeof t));return t}var Zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lo=!1;if(Zn)try{var ul={};Object.defineProperty(ul,"passive",{get:function(){lo=!0}}),window.addEventListener("test",ul,ul),window.removeEventListener("test",ul,ul)}catch{lo=!1}var ct=null,io=null,ki=null;function hc(){if(ki)return ki;var e,n=io,t=n.length,a,l="value"in ct?ct.value:ct.textContent,r=l.length;for(e=0;e<t&&n[e]===l[e];e++);var c=t-e;for(a=1;a<=c&&n[t-a]===l[r-a];a++);return ki=l.slice(e,1<a?1-a:void 0)}function Ri(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Si(){return!0}function vc(){return!1}function sn(e){function n(t,a,l,r,c){this._reactName=t,this._targetInst=l,this.type=a,this.nativeEvent=r,this.target=c,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(t=e[d],this[d]=t?t(r):r[d]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Si:vc,this.isPropagationStopped=vc,this}return M(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Si)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Si)},persist:function(){},isPersistent:Si}),n}var Vt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zi=sn(Vt),sl=M({},Vt,{view:0,detail:0}),wh=sn(sl),ro,oo,cl,xi=M({},sl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:so,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==cl&&(cl&&e.type==="mousemove"?(ro=e.screenX-cl.screenX,oo=e.screenY-cl.screenY):oo=ro=0,cl=e),ro)},movementY:function(e){return"movementY"in e?e.movementY:oo}}),gc=sn(xi),kh=M({},xi,{dataTransfer:0}),Rh=sn(kh),Sh=M({},sl,{relatedTarget:0}),uo=sn(Sh),zh=M({},Vt,{animationName:0,elapsedTime:0,pseudoElement:0}),xh=sn(zh),jh=M({},Vt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Eh=sn(jh),Ah=M({},Vt,{data:0}),bc=sn(Ah),Th={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Oh(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Mh[e])?!!n[e]:!1}function so(){return Oh}var Ch=M({},sl,{key:function(e){if(e.key){var n=Th[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ri(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Dh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:so,charCode:function(e){return e.type==="keypress"?Ri(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ri(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_h=sn(Ch),qh=M({},xi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yc=sn(qh),Uh=M({},sl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:so}),Nh=sn(Uh),Lh=M({},Vt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hh=sn(Lh),Bh=M({},xi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Vh=sn(Bh),Yh=M({},Vt,{newState:0,oldState:0}),Fh=sn(Yh),Gh=[9,13,27,32],co=Zn&&"CompositionEvent"in window,fl=null;Zn&&"documentMode"in document&&(fl=document.documentMode);var Zh=Zn&&"TextEvent"in window&&!fl,wc=Zn&&(!co||fl&&8<fl&&11>=fl),kc=" ",Rc=!1;function Sc(e,n){switch(e){case"keyup":return Gh.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var va=!1;function Qh(e,n){switch(e){case"compositionend":return zc(n);case"keypress":return n.which!==32?null:(Rc=!0,kc);case"textInput":return e=n.data,e===kc&&Rc?null:e;default:return null}}function $h(e,n){if(va)return e==="compositionend"||!co&&Sc(e,n)?(e=hc(),ki=io=ct=null,va=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return wc&&n.locale!=="ko"?null:n.data;default:return null}}var Xh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Xh[e.type]:n==="textarea"}function jc(e,n,t,a){pa?ha?ha.push(a):ha=[a]:pa=a,n=fr(n,"onChange"),0<n.length&&(t=new zi("onChange","change",null,t,a),e.push({event:t,listeners:n}))}var dl=null,ml=null;function Wh(e){om(e,0)}function ji(e){var n=rl(e);if(oc(n))return e}function Ec(e,n){if(e==="change")return n}var Ac=!1;if(Zn){var fo;if(Zn){var mo="oninput"in document;if(!mo){var Tc=document.createElement("div");Tc.setAttribute("oninput","return;"),mo=typeof Tc.oninput=="function"}fo=mo}else fo=!1;Ac=fo&&(!document.documentMode||9<document.documentMode)}function Dc(){dl&&(dl.detachEvent("onpropertychange",Mc),ml=dl=null)}function Mc(e){if(e.propertyName==="value"&&ji(ml)){var n=[];jc(n,ml,e,to(e)),pc(Wh,n)}}function Kh(e,n,t){e==="focusin"?(Dc(),dl=n,ml=t,dl.attachEvent("onpropertychange",Mc)):e==="focusout"&&Dc()}function Jh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ji(ml)}function Ph(e,n){if(e==="click")return ji(n)}function Ih(e,n){if(e==="input"||e==="change")return ji(n)}function ev(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var gn=typeof Object.is=="function"?Object.is:ev;function pl(e,n){if(gn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),a=Object.keys(n);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var l=t[a];if(!Vr.call(n,l)||!gn(e[l],n[l]))return!1}return!0}function Oc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Cc(e,n){var t=Oc(e);e=0;for(var a;t;){if(t.nodeType===3){if(a=e+t.textContent.length,e<=n&&a>=n)return{node:t,offset:n-e};e=a}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Oc(t)}}function _c(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?_c(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function qc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=yi(e.document);n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=yi(e.document)}return n}function po(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var nv=Zn&&"documentMode"in document&&11>=document.documentMode,ga=null,ho=null,hl=null,vo=!1;function Uc(e,n,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;vo||ga==null||ga!==yi(a)||(a=ga,"selectionStart"in a&&po(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),hl&&pl(hl,a)||(hl=a,a=fr(ho,"onSelect"),0<a.length&&(n=new zi("onSelect","select",null,n,t),e.push({event:n,listeners:a}),n.target=ga)))}function Yt(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var ba={animationend:Yt("Animation","AnimationEnd"),animationiteration:Yt("Animation","AnimationIteration"),animationstart:Yt("Animation","AnimationStart"),transitionrun:Yt("Transition","TransitionRun"),transitionstart:Yt("Transition","TransitionStart"),transitioncancel:Yt("Transition","TransitionCancel"),transitionend:Yt("Transition","TransitionEnd")},go={},Nc={};Zn&&(Nc=document.createElement("div").style,"AnimationEvent"in window||(delete ba.animationend.animation,delete ba.animationiteration.animation,delete ba.animationstart.animation),"TransitionEvent"in window||delete ba.transitionend.transition);function Ft(e){if(go[e])return go[e];if(!ba[e])return e;var n=ba[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Nc)return go[e]=n[t];return e}var Lc=Ft("animationend"),Hc=Ft("animationiteration"),Bc=Ft("animationstart"),tv=Ft("transitionrun"),av=Ft("transitionstart"),lv=Ft("transitioncancel"),Vc=Ft("transitionend"),Yc=new Map,bo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");bo.push("scrollEnd");function _n(e,n){Yc.set(e,n),Bt(n,[e])}var Fc=new WeakMap;function jn(e,n){if(typeof e=="object"&&e!==null){var t=Fc.get(e);return t!==void 0?t:(n={value:e,source:n,stack:ic(n)},Fc.set(e,n),n)}return{value:e,source:n,stack:ic(n)}}var En=[],ya=0,yo=0;function Ei(){for(var e=ya,n=yo=ya=0;n<e;){var t=En[n];En[n++]=null;var a=En[n];En[n++]=null;var l=En[n];En[n++]=null;var r=En[n];if(En[n++]=null,a!==null&&l!==null){var c=a.pending;c===null?l.next=l:(l.next=c.next,c.next=l),a.pending=l}r!==0&&Gc(t,l,r)}}function Ai(e,n,t,a){En[ya++]=e,En[ya++]=n,En[ya++]=t,En[ya++]=a,yo|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function wo(e,n,t,a){return Ai(e,n,t,a),Ti(e)}function wa(e,n){return Ai(e,null,null,n),Ti(e)}function Gc(e,n,t){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t);for(var l=!1,r=e.return;r!==null;)r.childLanes|=t,a=r.alternate,a!==null&&(a.childLanes|=t),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(l=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,l&&n!==null&&(l=31-vn(t),e=r.hiddenUpdates,a=e[l],a===null?e[l]=[n]:a.push(n),n.lane=t|536870912),r):null}function Ti(e){if(50<Bl)throw Bl=0,ju=null,Error(u(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var ka={};function iv(e,n,t,a){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bn(e,n,t,a){return new iv(e,n,t,a)}function ko(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qn(e,n){var t=e.alternate;return t===null?(t=bn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function Zc(e,n){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Di(e,n,t,a,l,r){var c=0;if(a=e,typeof e=="function")ko(e)&&(c=1);else if(typeof e=="string")c=og(e,t,Y.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case C:return e=bn(31,t,n,l),e.elementType=C,e.lanes=r,e;case I:return Gt(t.children,l,r,n);case ie:c=8,l|=24;break;case re:return e=bn(12,t,n,l|2),e.elementType=re,e.lanes=r,e;case X:return e=bn(13,t,n,l),e.elementType=X,e.lanes=r,e;case Ne:return e=bn(19,t,n,l),e.elementType=Ne,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ue:case se:c=10;break e;case Me:c=9;break e;case te:c=11;break e;case me:c=14;break e;case ye:c=16,a=null;break e}c=29,t=Error(u(130,e===null?"null":typeof e,"")),a=null}return n=bn(c,t,n,l),n.elementType=e,n.type=a,n.lanes=r,n}function Gt(e,n,t,a){return e=bn(7,e,a,n),e.lanes=t,e}function Ro(e,n,t){return e=bn(6,e,null,n),e.lanes=t,e}function So(e,n,t){return n=bn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Ra=[],Sa=0,Mi=null,Oi=0,An=[],Tn=0,Zt=null,$n=1,Xn="";function Qt(e,n){Ra[Sa++]=Oi,Ra[Sa++]=Mi,Mi=e,Oi=n}function Qc(e,n,t){An[Tn++]=$n,An[Tn++]=Xn,An[Tn++]=Zt,Zt=e;var a=$n;e=Xn;var l=32-vn(a)-1;a&=~(1<<l),t+=1;var r=32-vn(n)+l;if(30<r){var c=l-l%5;r=(a&(1<<c)-1).toString(32),a>>=c,l-=c,$n=1<<32-vn(n)+l|t<<l|a,Xn=r+e}else $n=1<<r|t<<l|a,Xn=e}function zo(e){e.return!==null&&(Qt(e,1),Qc(e,1,0))}function xo(e){for(;e===Mi;)Mi=Ra[--Sa],Ra[Sa]=null,Oi=Ra[--Sa],Ra[Sa]=null;for(;e===Zt;)Zt=An[--Tn],An[Tn]=null,Xn=An[--Tn],An[Tn]=null,$n=An[--Tn],An[Tn]=null}var on=null,_e=null,de=!1,$t=null,Hn=!1,jo=Error(u(519));function Xt(e){var n=Error(u(418,""));throw bl(jn(n,e)),jo}function $c(e){var n=e.stateNode,t=e.type,a=e.memoizedProps;switch(n[an]=e,n[un]=a,t){case"dialog":le("cancel",n),le("close",n);break;case"iframe":case"object":case"embed":le("load",n);break;case"video":case"audio":for(t=0;t<Yl.length;t++)le(Yl[t],n);break;case"source":le("error",n);break;case"img":case"image":case"link":le("error",n),le("load",n);break;case"details":le("toggle",n);break;case"input":le("invalid",n),uc(n,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),bi(n);break;case"select":le("invalid",n);break;case"textarea":le("invalid",n),cc(n,a.value,a.defaultValue,a.children),bi(n)}t=a.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||n.textContent===""+t||a.suppressHydrationWarning===!0||fm(n.textContent,t)?(a.popover!=null&&(le("beforetoggle",n),le("toggle",n)),a.onScroll!=null&&le("scroll",n),a.onScrollEnd!=null&&le("scrollend",n),a.onClick!=null&&(n.onclick=dr),n=!0):n=!1,n||Xt(e)}function Xc(e){for(on=e.return;on;)switch(on.tag){case 5:case 13:Hn=!1;return;case 27:case 3:Hn=!0;return;default:on=on.return}}function vl(e){if(e!==on)return!1;if(!de)return Xc(e),de=!0,!1;var n=e.tag,t;if((t=n!==3&&n!==27)&&((t=n===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||Yu(e.type,e.memoizedProps)),t=!t),t&&_e&&Xt(e),Xc(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(t=e.data,t==="/$"){if(n===0){_e=Un(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++;e=e.nextSibling}_e=null}}else n===27?(n=_e,jt(e.type)?(e=Qu,Qu=null,_e=e):_e=n):_e=on?Un(e.stateNode.nextSibling):null;return!0}function gl(){_e=on=null,de=!1}function Wc(){var e=$t;return e!==null&&(dn===null?dn=e:dn.push.apply(dn,e),$t=null),e}function bl(e){$t===null?$t=[e]:$t.push(e)}var Eo=O(null),Wt=null,Wn=null;function ft(e,n,t){_(Eo,n._currentValue),n._currentValue=t}function Kn(e){e._currentValue=Eo.current,U(Eo)}function Ao(e,n,t){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===t)break;e=e.return}}function To(e,n,t,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var r=l.dependencies;if(r!==null){var c=l.child;r=r.firstContext;e:for(;r!==null;){var d=r;r=l;for(var p=0;p<n.length;p++)if(d.context===n[p]){r.lanes|=t,d=r.alternate,d!==null&&(d.lanes|=t),Ao(r.return,t,e),a||(c=null);break e}r=d.next}}else if(l.tag===18){if(c=l.return,c===null)throw Error(u(341));c.lanes|=t,r=c.alternate,r!==null&&(r.lanes|=t),Ao(c,t,e),c=null}else c=l.child;if(c!==null)c.return=l;else for(c=l;c!==null;){if(c===e){c=null;break}if(l=c.sibling,l!==null){l.return=c.return,c=l;break}c=c.return}l=c}}function yl(e,n,t,a){e=null;for(var l=n,r=!1;l!==null;){if(!r){if((l.flags&524288)!==0)r=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var c=l.alternate;if(c===null)throw Error(u(387));if(c=c.memoizedProps,c!==null){var d=l.type;gn(l.pendingProps.value,c.value)||(e!==null?e.push(d):e=[d])}}else if(l===pn.current){if(c=l.alternate,c===null)throw Error(u(387));c.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Xl):e=[Xl])}l=l.return}e!==null&&To(n,e,t,a),n.flags|=262144}function Ci(e){for(e=e.firstContext;e!==null;){if(!gn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Kt(e){Wt=e,Wn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ln(e){return Kc(Wt,e)}function _i(e,n){return Wt===null&&Kt(e),Kc(e,n)}function Kc(e,n){var t=n._currentValue;if(n={context:n,memoizedValue:t,next:null},Wn===null){if(e===null)throw Error(u(308));Wn=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Wn=Wn.next=n;return t}var rv=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(t,a){e.push(a)}};this.abort=function(){n.aborted=!0,e.forEach(function(t){return t()})}},ov=s.unstable_scheduleCallback,uv=s.unstable_NormalPriority,Ge={$$typeof:se,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Do(){return{controller:new rv,data:new Map,refCount:0}}function wl(e){e.refCount--,e.refCount===0&&ov(uv,function(){e.controller.abort()})}var kl=null,Mo=0,za=0,xa=null;function sv(e,n){if(kl===null){var t=kl=[];Mo=0,za=Cu(),xa={status:"pending",value:void 0,then:function(a){t.push(a)}}}return Mo++,n.then(Jc,Jc),n}function Jc(){if(--Mo===0&&kl!==null){xa!==null&&(xa.status="fulfilled");var e=kl;kl=null,za=0,xa=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function cv(e,n){var t=[],a={status:"pending",value:null,reason:null,then:function(l){t.push(l)}};return e.then(function(){a.status="fulfilled",a.value=n;for(var l=0;l<t.length;l++)(0,t[l])(n)},function(l){for(a.status="rejected",a.reason=l,l=0;l<t.length;l++)(0,t[l])(void 0)}),a}var Pc=E.S;E.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&sv(e,n),Pc!==null&&Pc(e,n)};var Jt=O(null);function Oo(){var e=Jt.current;return e!==null?e:je.pooledCache}function qi(e,n){n===null?_(Jt,Jt.current):_(Jt,n.pool)}function Ic(){var e=Oo();return e===null?null:{parent:Ge._currentValue,pool:e}}var Rl=Error(u(460)),ef=Error(u(474)),Ui=Error(u(542)),Co={then:function(){}};function nf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ni(){}function tf(e,n,t){switch(t=e[t],t===void 0?e.push(n):t!==n&&(n.then(Ni,Ni),n=t),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,lf(e),e;default:if(typeof n.status=="string")n.then(Ni,Ni);else{if(e=je,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=n,e.status="pending",e.then(function(a){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=a}},function(a){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=a}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,lf(e),e}throw Sl=n,Rl}}var Sl=null;function af(){if(Sl===null)throw Error(u(459));var e=Sl;return Sl=null,e}function lf(e){if(e===Rl||e===Ui)throw Error(u(483))}var dt=!1;function _o(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qo(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function mt(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function pt(e,n,t){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(he&2)!==0){var l=a.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),a.pending=n,n=Ti(e),Gc(e,null,t),n}return Ai(e,a,n,t),Ti(e)}function zl(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194048)!==0)){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,Js(e,t)}}function Uo(e,n){var t=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var l=null,r=null;if(t=t.firstBaseUpdate,t!==null){do{var c={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};r===null?l=r=c:r=r.next=c,t=t.next}while(t!==null);r===null?l=r=n:r=r.next=n}else l=r=n;t={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:r,shared:a.shared,callbacks:a.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}var No=!1;function xl(){if(No){var e=xa;if(e!==null)throw e}}function jl(e,n,t,a){No=!1;var l=e.updateQueue;dt=!1;var r=l.firstBaseUpdate,c=l.lastBaseUpdate,d=l.shared.pending;if(d!==null){l.shared.pending=null;var p=d,S=p.next;p.next=null,c===null?r=S:c.next=S,c=p;var j=e.alternate;j!==null&&(j=j.updateQueue,d=j.lastBaseUpdate,d!==c&&(d===null?j.firstBaseUpdate=S:d.next=S,j.lastBaseUpdate=p))}if(r!==null){var D=l.baseState;c=0,j=S=p=null,d=r;do{var z=d.lane&-536870913,x=z!==d.lane;if(x?(ue&z)===z:(a&z)===z){z!==0&&z===za&&(No=!0),j!==null&&(j=j.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});e:{var $=e,F=d;z=n;var Re=t;switch(F.tag){case 1:if($=F.payload,typeof $=="function"){D=$.call(Re,D,z);break e}D=$;break e;case 3:$.flags=$.flags&-65537|128;case 0:if($=F.payload,z=typeof $=="function"?$.call(Re,D,z):$,z==null)break e;D=M({},D,z);break e;case 2:dt=!0}}z=d.callback,z!==null&&(e.flags|=64,x&&(e.flags|=8192),x=l.callbacks,x===null?l.callbacks=[z]:x.push(z))}else x={lane:z,tag:d.tag,payload:d.payload,callback:d.callback,next:null},j===null?(S=j=x,p=D):j=j.next=x,c|=z;if(d=d.next,d===null){if(d=l.shared.pending,d===null)break;x=d,d=x.next,x.next=null,l.lastBaseUpdate=x,l.shared.pending=null}}while(!0);j===null&&(p=D),l.baseState=p,l.firstBaseUpdate=S,l.lastBaseUpdate=j,r===null&&(l.shared.lanes=0),Rt|=c,e.lanes=c,e.memoizedState=D}}function rf(e,n){if(typeof e!="function")throw Error(u(191,e));e.call(n)}function of(e,n){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)rf(t[e],n)}var ja=O(null),Li=O(0);function uf(e,n){e=at,_(Li,e),_(ja,n),at=e|n.baseLanes}function Lo(){_(Li,at),_(ja,ja.current)}function Ho(){at=Li.current,U(ja),U(Li)}var ht=0,P=null,we=null,Ve=null,Hi=!1,Ea=!1,Pt=!1,Bi=0,El=0,Aa=null,fv=0;function Le(){throw Error(u(321))}function Bo(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!gn(e[t],n[t]))return!1;return!0}function Vo(e,n,t,a,l,r){return ht=r,P=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,E.H=e===null||e.memoizedState===null?Zf:Qf,Pt=!1,r=t(a,l),Pt=!1,Ea&&(r=cf(n,t,a,l)),sf(e),r}function sf(e){E.H=Qi;var n=we!==null&&we.next!==null;if(ht=0,Ve=we=P=null,Hi=!1,El=0,Aa=null,n)throw Error(u(300));e===null||We||(e=e.dependencies,e!==null&&Ci(e)&&(We=!0))}function cf(e,n,t,a){P=e;var l=0;do{if(Ea&&(Aa=null),El=0,Ea=!1,25<=l)throw Error(u(301));if(l+=1,Ve=we=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}E.H=bv,r=n(t,a)}while(Ea);return r}function dv(){var e=E.H,n=e.useState()[0];return n=typeof n.then=="function"?Al(n):n,e=e.useState()[0],(we!==null?we.memoizedState:null)!==e&&(P.flags|=1024),n}function Yo(){var e=Bi!==0;return Bi=0,e}function Fo(e,n,t){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t}function Go(e){if(Hi){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Hi=!1}ht=0,Ve=we=P=null,Ea=!1,El=Bi=0,Aa=null}function cn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?P.memoizedState=Ve=e:Ve=Ve.next=e,Ve}function Ye(){if(we===null){var e=P.alternate;e=e!==null?e.memoizedState:null}else e=we.next;var n=Ve===null?P.memoizedState:Ve.next;if(n!==null)Ve=n,we=e;else{if(e===null)throw P.alternate===null?Error(u(467)):Error(u(310));we=e,e={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},Ve===null?P.memoizedState=Ve=e:Ve=Ve.next=e}return Ve}function Zo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Al(e){var n=El;return El+=1,Aa===null&&(Aa=[]),e=tf(Aa,e,n),n=P,(Ve===null?n.memoizedState:Ve.next)===null&&(n=n.alternate,E.H=n===null||n.memoizedState===null?Zf:Qf),e}function Vi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Al(e);if(e.$$typeof===se)return ln(e)}throw Error(u(438,String(e)))}function Qo(e){var n=null,t=P.updateQueue;if(t!==null&&(n=t.memoCache),n==null){var a=P.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(n={data:a.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),t===null&&(t=Zo(),P.updateQueue=t),t.memoCache=n,t=n.data[n.index],t===void 0)for(t=n.data[n.index]=Array(e),a=0;a<e;a++)t[a]=V;return n.index++,t}function Jn(e,n){return typeof n=="function"?n(e):n}function Yi(e){var n=Ye();return $o(n,we,e)}function $o(e,n,t){var a=e.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=t;var l=e.baseQueue,r=a.pending;if(r!==null){if(l!==null){var c=l.next;l.next=r.next,r.next=c}n.baseQueue=l=r,a.pending=null}if(r=e.baseState,l===null)e.memoizedState=r;else{n=l.next;var d=c=null,p=null,S=n,j=!1;do{var D=S.lane&-536870913;if(D!==S.lane?(ue&D)===D:(ht&D)===D){var z=S.revertLane;if(z===0)p!==null&&(p=p.next={lane:0,revertLane:0,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null}),D===za&&(j=!0);else if((ht&z)===z){S=S.next,z===za&&(j=!0);continue}else D={lane:0,revertLane:S.revertLane,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},p===null?(d=p=D,c=r):p=p.next=D,P.lanes|=z,Rt|=z;D=S.action,Pt&&t(r,D),r=S.hasEagerState?S.eagerState:t(r,D)}else z={lane:D,revertLane:S.revertLane,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},p===null?(d=p=z,c=r):p=p.next=z,P.lanes|=D,Rt|=D;S=S.next}while(S!==null&&S!==n);if(p===null?c=r:p.next=d,!gn(r,e.memoizedState)&&(We=!0,j&&(t=xa,t!==null)))throw t;e.memoizedState=r,e.baseState=c,e.baseQueue=p,a.lastRenderedState=r}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Xo(e){var n=Ye(),t=n.queue;if(t===null)throw Error(u(311));t.lastRenderedReducer=e;var a=t.dispatch,l=t.pending,r=n.memoizedState;if(l!==null){t.pending=null;var c=l=l.next;do r=e(r,c.action),c=c.next;while(c!==l);gn(r,n.memoizedState)||(We=!0),n.memoizedState=r,n.baseQueue===null&&(n.baseState=r),t.lastRenderedState=r}return[r,a]}function ff(e,n,t){var a=P,l=Ye(),r=de;if(r){if(t===void 0)throw Error(u(407));t=t()}else t=n();var c=!gn((we||l).memoizedState,t);c&&(l.memoizedState=t,We=!0),l=l.queue;var d=pf.bind(null,a,l,e);if(Tl(2048,8,d,[e]),l.getSnapshot!==n||c||Ve!==null&&Ve.memoizedState.tag&1){if(a.flags|=2048,Ta(9,Fi(),mf.bind(null,a,l,t,n),null),je===null)throw Error(u(349));r||(ht&124)!==0||df(a,n,t)}return t}function df(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=P.updateQueue,n===null?(n=Zo(),P.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function mf(e,n,t,a){n.value=t,n.getSnapshot=a,hf(n)&&vf(e)}function pf(e,n,t){return t(function(){hf(n)&&vf(e)})}function hf(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!gn(e,t)}catch{return!0}}function vf(e){var n=wa(e,2);n!==null&&Sn(n,e,2)}function Wo(e){var n=cn();if(typeof e=="function"){var t=e;if(e=t(),Pt){ut(!0);try{t()}finally{ut(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jn,lastRenderedState:e},n}function gf(e,n,t,a){return e.baseState=t,$o(e,we,typeof a=="function"?a:Jn)}function mv(e,n,t,a,l){if(Zi(e))throw Error(u(485));if(e=n.action,e!==null){var r={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){r.listeners.push(c)}};E.T!==null?t(!0):r.isTransition=!1,a(r),t=n.pending,t===null?(r.next=n.pending=r,bf(n,r)):(r.next=t.next,n.pending=t.next=r)}}function bf(e,n){var t=n.action,a=n.payload,l=e.state;if(n.isTransition){var r=E.T,c={};E.T=c;try{var d=t(l,a),p=E.S;p!==null&&p(c,d),yf(e,n,d)}catch(S){Ko(e,n,S)}finally{E.T=r}}else try{r=t(l,a),yf(e,n,r)}catch(S){Ko(e,n,S)}}function yf(e,n,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(a){wf(e,n,a)},function(a){return Ko(e,n,a)}):wf(e,n,t)}function wf(e,n,t){n.status="fulfilled",n.value=t,kf(n),e.state=t,n=e.pending,n!==null&&(t=n.next,t===n?e.pending=null:(t=t.next,n.next=t,bf(e,t)))}function Ko(e,n,t){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do n.status="rejected",n.reason=t,kf(n),n=n.next;while(n!==a)}e.action=null}function kf(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Rf(e,n){return n}function Sf(e,n){if(de){var t=je.formState;if(t!==null){e:{var a=P;if(de){if(_e){n:{for(var l=_e,r=Hn;l.nodeType!==8;){if(!r){l=null;break n}if(l=Un(l.nextSibling),l===null){l=null;break n}}r=l.data,l=r==="F!"||r==="F"?l:null}if(l){_e=Un(l.nextSibling),a=l.data==="F!";break e}}Xt(a)}a=!1}a&&(n=t[0])}}return t=cn(),t.memoizedState=t.baseState=n,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rf,lastRenderedState:n},t.queue=a,t=Yf.bind(null,P,a),a.dispatch=t,a=Wo(!1),r=nu.bind(null,P,!1,a.queue),a=cn(),l={state:n,dispatch:null,action:e,pending:null},a.queue=l,t=mv.bind(null,P,l,r,t),l.dispatch=t,a.memoizedState=e,[n,t,!1]}function zf(e){var n=Ye();return xf(n,we,e)}function xf(e,n,t){if(n=$o(e,n,Rf)[0],e=Yi(Jn)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var a=Al(n)}catch(c){throw c===Rl?Ui:c}else a=n;n=Ye();var l=n.queue,r=l.dispatch;return t!==n.memoizedState&&(P.flags|=2048,Ta(9,Fi(),pv.bind(null,l,t),null)),[a,r,e]}function pv(e,n){e.action=n}function jf(e){var n=Ye(),t=we;if(t!==null)return xf(n,t,e);Ye(),n=n.memoizedState,t=Ye();var a=t.queue.dispatch;return t.memoizedState=e,[n,a,!1]}function Ta(e,n,t,a){return e={tag:e,create:t,deps:a,inst:n,next:null},n=P.updateQueue,n===null&&(n=Zo(),P.updateQueue=n),t=n.lastEffect,t===null?n.lastEffect=e.next=e:(a=t.next,t.next=e,e.next=a,n.lastEffect=e),e}function Fi(){return{destroy:void 0,resource:void 0}}function Ef(){return Ye().memoizedState}function Gi(e,n,t,a){var l=cn();a=a===void 0?null:a,P.flags|=e,l.memoizedState=Ta(1|n,Fi(),t,a)}function Tl(e,n,t,a){var l=Ye();a=a===void 0?null:a;var r=l.memoizedState.inst;we!==null&&a!==null&&Bo(a,we.memoizedState.deps)?l.memoizedState=Ta(n,r,t,a):(P.flags|=e,l.memoizedState=Ta(1|n,r,t,a))}function Af(e,n){Gi(8390656,8,e,n)}function Tf(e,n){Tl(2048,8,e,n)}function Df(e,n){return Tl(4,2,e,n)}function Mf(e,n){return Tl(4,4,e,n)}function Of(e,n){if(typeof n=="function"){e=e();var t=n(e);return function(){typeof t=="function"?t():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Cf(e,n,t){t=t!=null?t.concat([e]):null,Tl(4,4,Of.bind(null,n,e),t)}function Jo(){}function _f(e,n){var t=Ye();n=n===void 0?null:n;var a=t.memoizedState;return n!==null&&Bo(n,a[1])?a[0]:(t.memoizedState=[e,n],e)}function qf(e,n){var t=Ye();n=n===void 0?null:n;var a=t.memoizedState;if(n!==null&&Bo(n,a[1]))return a[0];if(a=e(),Pt){ut(!0);try{e()}finally{ut(!1)}}return t.memoizedState=[a,n],a}function Po(e,n,t){return t===void 0||(ht&1073741824)!==0?e.memoizedState=n:(e.memoizedState=t,e=Ld(),P.lanes|=e,Rt|=e,t)}function Uf(e,n,t,a){return gn(t,n)?t:ja.current!==null?(e=Po(e,t,a),gn(e,n)||(We=!0),e):(ht&42)===0?(We=!0,e.memoizedState=t):(e=Ld(),P.lanes|=e,Rt|=e,n)}function Nf(e,n,t,a,l){var r=q.p;q.p=r!==0&&8>r?r:8;var c=E.T,d={};E.T=d,nu(e,!1,n,t);try{var p=l(),S=E.S;if(S!==null&&S(d,p),p!==null&&typeof p=="object"&&typeof p.then=="function"){var j=cv(p,a);Dl(e,n,j,Rn(e))}else Dl(e,n,a,Rn(e))}catch(D){Dl(e,n,{then:function(){},status:"rejected",reason:D},Rn())}finally{q.p=r,E.T=c}}function hv(){}function Io(e,n,t,a){if(e.tag!==5)throw Error(u(476));var l=Lf(e).queue;Nf(e,l,n,Q,t===null?hv:function(){return Hf(e),t(a)})}function Lf(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Q,baseState:Q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jn,lastRenderedState:Q},next:null};var t={};return n.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jn,lastRenderedState:t},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Hf(e){var n=Lf(e).next.queue;Dl(e,n,{},Rn())}function eu(){return ln(Xl)}function Bf(){return Ye().memoizedState}function Vf(){return Ye().memoizedState}function vv(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var t=Rn();e=mt(t);var a=pt(n,e,t);a!==null&&(Sn(a,n,t),zl(a,n,t)),n={cache:Do()},e.payload=n;return}n=n.return}}function gv(e,n,t){var a=Rn();t={lane:a,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null},Zi(e)?Ff(n,t):(t=wo(e,n,t,a),t!==null&&(Sn(t,e,a),Gf(t,n,a)))}function Yf(e,n,t){var a=Rn();Dl(e,n,t,a)}function Dl(e,n,t,a){var l={lane:a,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null};if(Zi(e))Ff(n,l);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=n.lastRenderedReducer,r!==null))try{var c=n.lastRenderedState,d=r(c,t);if(l.hasEagerState=!0,l.eagerState=d,gn(d,c))return Ai(e,n,l,0),je===null&&Ei(),!1}catch{}finally{}if(t=wo(e,n,l,a),t!==null)return Sn(t,e,a),Gf(t,n,a),!0}return!1}function nu(e,n,t,a){if(a={lane:2,revertLane:Cu(),action:a,hasEagerState:!1,eagerState:null,next:null},Zi(e)){if(n)throw Error(u(479))}else n=wo(e,t,a,2),n!==null&&Sn(n,e,2)}function Zi(e){var n=e.alternate;return e===P||n!==null&&n===P}function Ff(e,n){Ea=Hi=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Gf(e,n,t){if((t&4194048)!==0){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,Js(e,t)}}var Qi={readContext:ln,use:Vi,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useLayoutEffect:Le,useInsertionEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useSyncExternalStore:Le,useId:Le,useHostTransitionStatus:Le,useFormState:Le,useActionState:Le,useOptimistic:Le,useMemoCache:Le,useCacheRefresh:Le},Zf={readContext:ln,use:Vi,useCallback:function(e,n){return cn().memoizedState=[e,n===void 0?null:n],e},useContext:ln,useEffect:Af,useImperativeHandle:function(e,n,t){t=t!=null?t.concat([e]):null,Gi(4194308,4,Of.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Gi(4194308,4,e,n)},useInsertionEffect:function(e,n){Gi(4,2,e,n)},useMemo:function(e,n){var t=cn();n=n===void 0?null:n;var a=e();if(Pt){ut(!0);try{e()}finally{ut(!1)}}return t.memoizedState=[a,n],a},useReducer:function(e,n,t){var a=cn();if(t!==void 0){var l=t(n);if(Pt){ut(!0);try{t(n)}finally{ut(!1)}}}else l=n;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=gv.bind(null,P,e),[a.memoizedState,e]},useRef:function(e){var n=cn();return e={current:e},n.memoizedState=e},useState:function(e){e=Wo(e);var n=e.queue,t=Yf.bind(null,P,n);return n.dispatch=t,[e.memoizedState,t]},useDebugValue:Jo,useDeferredValue:function(e,n){var t=cn();return Po(t,e,n)},useTransition:function(){var e=Wo(!1);return e=Nf.bind(null,P,e.queue,!0,!1),cn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,t){var a=P,l=cn();if(de){if(t===void 0)throw Error(u(407));t=t()}else{if(t=n(),je===null)throw Error(u(349));(ue&124)!==0||df(a,n,t)}l.memoizedState=t;var r={value:t,getSnapshot:n};return l.queue=r,Af(pf.bind(null,a,r,e),[e]),a.flags|=2048,Ta(9,Fi(),mf.bind(null,a,r,t,n),null),t},useId:function(){var e=cn(),n=je.identifierPrefix;if(de){var t=Xn,a=$n;t=(a&~(1<<32-vn(a)-1)).toString(32)+t,n="«"+n+"R"+t,t=Bi++,0<t&&(n+="H"+t.toString(32)),n+="»"}else t=fv++,n="«"+n+"r"+t.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:eu,useFormState:Sf,useActionState:Sf,useOptimistic:function(e){var n=cn();n.memoizedState=n.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=t,n=nu.bind(null,P,!0,t),t.dispatch=n,[e,n]},useMemoCache:Qo,useCacheRefresh:function(){return cn().memoizedState=vv.bind(null,P)}},Qf={readContext:ln,use:Vi,useCallback:_f,useContext:ln,useEffect:Tf,useImperativeHandle:Cf,useInsertionEffect:Df,useLayoutEffect:Mf,useMemo:qf,useReducer:Yi,useRef:Ef,useState:function(){return Yi(Jn)},useDebugValue:Jo,useDeferredValue:function(e,n){var t=Ye();return Uf(t,we.memoizedState,e,n)},useTransition:function(){var e=Yi(Jn)[0],n=Ye().memoizedState;return[typeof e=="boolean"?e:Al(e),n]},useSyncExternalStore:ff,useId:Bf,useHostTransitionStatus:eu,useFormState:zf,useActionState:zf,useOptimistic:function(e,n){var t=Ye();return gf(t,we,e,n)},useMemoCache:Qo,useCacheRefresh:Vf},bv={readContext:ln,use:Vi,useCallback:_f,useContext:ln,useEffect:Tf,useImperativeHandle:Cf,useInsertionEffect:Df,useLayoutEffect:Mf,useMemo:qf,useReducer:Xo,useRef:Ef,useState:function(){return Xo(Jn)},useDebugValue:Jo,useDeferredValue:function(e,n){var t=Ye();return we===null?Po(t,e,n):Uf(t,we.memoizedState,e,n)},useTransition:function(){var e=Xo(Jn)[0],n=Ye().memoizedState;return[typeof e=="boolean"?e:Al(e),n]},useSyncExternalStore:ff,useId:Bf,useHostTransitionStatus:eu,useFormState:jf,useActionState:jf,useOptimistic:function(e,n){var t=Ye();return we!==null?gf(t,we,e,n):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:Qo,useCacheRefresh:Vf},Da=null,Ml=0;function $i(e){var n=Ml;return Ml+=1,Da===null&&(Da=[]),tf(Da,e,n)}function Ol(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Xi(e,n){throw n.$$typeof===L?Error(u(525)):(e=Object.prototype.toString.call(n),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function $f(e){var n=e._init;return n(e._payload)}function Xf(e){function n(y,v){if(e){var R=y.deletions;R===null?(y.deletions=[v],y.flags|=16):R.push(v)}}function t(y,v){if(!e)return null;for(;v!==null;)n(y,v),v=v.sibling;return null}function a(y){for(var v=new Map;y!==null;)y.key!==null?v.set(y.key,y):v.set(y.index,y),y=y.sibling;return v}function l(y,v){return y=Qn(y,v),y.index=0,y.sibling=null,y}function r(y,v,R){return y.index=R,e?(R=y.alternate,R!==null?(R=R.index,R<v?(y.flags|=67108866,v):R):(y.flags|=67108866,v)):(y.flags|=1048576,v)}function c(y){return e&&y.alternate===null&&(y.flags|=67108866),y}function d(y,v,R,T){return v===null||v.tag!==6?(v=Ro(R,y.mode,T),v.return=y,v):(v=l(v,R),v.return=y,v)}function p(y,v,R,T){var H=R.type;return H===I?j(y,v,R.props.children,T,R.key):v!==null&&(v.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===ye&&$f(H)===v.type)?(v=l(v,R.props),Ol(v,R),v.return=y,v):(v=Di(R.type,R.key,R.props,null,y.mode,T),Ol(v,R),v.return=y,v)}function S(y,v,R,T){return v===null||v.tag!==4||v.stateNode.containerInfo!==R.containerInfo||v.stateNode.implementation!==R.implementation?(v=So(R,y.mode,T),v.return=y,v):(v=l(v,R.children||[]),v.return=y,v)}function j(y,v,R,T,H){return v===null||v.tag!==7?(v=Gt(R,y.mode,T,H),v.return=y,v):(v=l(v,R),v.return=y,v)}function D(y,v,R){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=Ro(""+v,y.mode,R),v.return=y,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Z:return R=Di(v.type,v.key,v.props,null,y.mode,R),Ol(R,v),R.return=y,R;case J:return v=So(v,y.mode,R),v.return=y,v;case ye:var T=v._init;return v=T(v._payload),D(y,v,R)}if(tn(v)||Ae(v))return v=Gt(v,y.mode,R,null),v.return=y,v;if(typeof v.then=="function")return D(y,$i(v),R);if(v.$$typeof===se)return D(y,_i(y,v),R);Xi(y,v)}return null}function z(y,v,R,T){var H=v!==null?v.key:null;if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return H!==null?null:d(y,v,""+R,T);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case Z:return R.key===H?p(y,v,R,T):null;case J:return R.key===H?S(y,v,R,T):null;case ye:return H=R._init,R=H(R._payload),z(y,v,R,T)}if(tn(R)||Ae(R))return H!==null?null:j(y,v,R,T,null);if(typeof R.then=="function")return z(y,v,$i(R),T);if(R.$$typeof===se)return z(y,v,_i(y,R),T);Xi(y,R)}return null}function x(y,v,R,T,H){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return y=y.get(R)||null,d(v,y,""+T,H);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Z:return y=y.get(T.key===null?R:T.key)||null,p(v,y,T,H);case J:return y=y.get(T.key===null?R:T.key)||null,S(v,y,T,H);case ye:var ee=T._init;return T=ee(T._payload),x(y,v,R,T,H)}if(tn(T)||Ae(T))return y=y.get(R)||null,j(v,y,T,H,null);if(typeof T.then=="function")return x(y,v,R,$i(T),H);if(T.$$typeof===se)return x(y,v,R,_i(v,T),H);Xi(v,T)}return null}function $(y,v,R,T){for(var H=null,ee=null,B=v,G=v=0,Je=null;B!==null&&G<R.length;G++){B.index>G?(Je=B,B=null):Je=B.sibling;var fe=z(y,B,R[G],T);if(fe===null){B===null&&(B=Je);break}e&&B&&fe.alternate===null&&n(y,B),v=r(fe,v,G),ee===null?H=fe:ee.sibling=fe,ee=fe,B=Je}if(G===R.length)return t(y,B),de&&Qt(y,G),H;if(B===null){for(;G<R.length;G++)B=D(y,R[G],T),B!==null&&(v=r(B,v,G),ee===null?H=B:ee.sibling=B,ee=B);return de&&Qt(y,G),H}for(B=a(B);G<R.length;G++)Je=x(B,y,G,R[G],T),Je!==null&&(e&&Je.alternate!==null&&B.delete(Je.key===null?G:Je.key),v=r(Je,v,G),ee===null?H=Je:ee.sibling=Je,ee=Je);return e&&B.forEach(function(Mt){return n(y,Mt)}),de&&Qt(y,G),H}function F(y,v,R,T){if(R==null)throw Error(u(151));for(var H=null,ee=null,B=v,G=v=0,Je=null,fe=R.next();B!==null&&!fe.done;G++,fe=R.next()){B.index>G?(Je=B,B=null):Je=B.sibling;var Mt=z(y,B,fe.value,T);if(Mt===null){B===null&&(B=Je);break}e&&B&&Mt.alternate===null&&n(y,B),v=r(Mt,v,G),ee===null?H=Mt:ee.sibling=Mt,ee=Mt,B=Je}if(fe.done)return t(y,B),de&&Qt(y,G),H;if(B===null){for(;!fe.done;G++,fe=R.next())fe=D(y,fe.value,T),fe!==null&&(v=r(fe,v,G),ee===null?H=fe:ee.sibling=fe,ee=fe);return de&&Qt(y,G),H}for(B=a(B);!fe.done;G++,fe=R.next())fe=x(B,y,G,fe.value,T),fe!==null&&(e&&fe.alternate!==null&&B.delete(fe.key===null?G:fe.key),v=r(fe,v,G),ee===null?H=fe:ee.sibling=fe,ee=fe);return e&&B.forEach(function(yg){return n(y,yg)}),de&&Qt(y,G),H}function Re(y,v,R,T){if(typeof R=="object"&&R!==null&&R.type===I&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case Z:e:{for(var H=R.key;v!==null;){if(v.key===H){if(H=R.type,H===I){if(v.tag===7){t(y,v.sibling),T=l(v,R.props.children),T.return=y,y=T;break e}}else if(v.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===ye&&$f(H)===v.type){t(y,v.sibling),T=l(v,R.props),Ol(T,R),T.return=y,y=T;break e}t(y,v);break}else n(y,v);v=v.sibling}R.type===I?(T=Gt(R.props.children,y.mode,T,R.key),T.return=y,y=T):(T=Di(R.type,R.key,R.props,null,y.mode,T),Ol(T,R),T.return=y,y=T)}return c(y);case J:e:{for(H=R.key;v!==null;){if(v.key===H)if(v.tag===4&&v.stateNode.containerInfo===R.containerInfo&&v.stateNode.implementation===R.implementation){t(y,v.sibling),T=l(v,R.children||[]),T.return=y,y=T;break e}else{t(y,v);break}else n(y,v);v=v.sibling}T=So(R,y.mode,T),T.return=y,y=T}return c(y);case ye:return H=R._init,R=H(R._payload),Re(y,v,R,T)}if(tn(R))return $(y,v,R,T);if(Ae(R)){if(H=Ae(R),typeof H!="function")throw Error(u(150));return R=H.call(R),F(y,v,R,T)}if(typeof R.then=="function")return Re(y,v,$i(R),T);if(R.$$typeof===se)return Re(y,v,_i(y,R),T);Xi(y,R)}return typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint"?(R=""+R,v!==null&&v.tag===6?(t(y,v.sibling),T=l(v,R),T.return=y,y=T):(t(y,v),T=Ro(R,y.mode,T),T.return=y,y=T),c(y)):t(y,v)}return function(y,v,R,T){try{Ml=0;var H=Re(y,v,R,T);return Da=null,H}catch(B){if(B===Rl||B===Ui)throw B;var ee=bn(29,B,null,y.mode);return ee.lanes=T,ee.return=y,ee}finally{}}}var Ma=Xf(!0),Wf=Xf(!1),Dn=O(null),Bn=null;function vt(e){var n=e.alternate;_(Ze,Ze.current&1),_(Dn,e),Bn===null&&(n===null||ja.current!==null||n.memoizedState!==null)&&(Bn=e)}function Kf(e){if(e.tag===22){if(_(Ze,Ze.current),_(Dn,e),Bn===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Bn=e)}}else gt()}function gt(){_(Ze,Ze.current),_(Dn,Dn.current)}function Pn(e){U(Dn),Bn===e&&(Bn=null),U(Ze)}var Ze=O(0);function Wi(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||Zu(t)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function tu(e,n,t,a){n=e.memoizedState,t=t(a,n),t=t==null?n:M({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var au={enqueueSetState:function(e,n,t){e=e._reactInternals;var a=Rn(),l=mt(a);l.payload=n,t!=null&&(l.callback=t),n=pt(e,l,a),n!==null&&(Sn(n,e,a),zl(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var a=Rn(),l=mt(a);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=pt(e,l,a),n!==null&&(Sn(n,e,a),zl(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Rn(),a=mt(t);a.tag=2,n!=null&&(a.callback=n),n=pt(e,a,t),n!==null&&(Sn(n,e,t),zl(n,e,t))}};function Jf(e,n,t,a,l,r,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,r,c):n.prototype&&n.prototype.isPureReactComponent?!pl(t,a)||!pl(l,r):!0}function Pf(e,n,t,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,a),n.state!==e&&au.enqueueReplaceState(n,n.state,null)}function It(e,n){var t=n;if("ref"in n){t={};for(var a in n)a!=="ref"&&(t[a]=n[a])}if(e=e.defaultProps){t===n&&(t=M({},t));for(var l in e)t[l]===void 0&&(t[l]=e[l])}return t}var Ki=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function If(e){Ki(e)}function ed(e){console.error(e)}function nd(e){Ki(e)}function Ji(e,n){try{var t=e.onUncaughtError;t(n.value,{componentStack:n.stack})}catch(a){setTimeout(function(){throw a})}}function td(e,n,t){try{var a=e.onCaughtError;a(t.value,{componentStack:t.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function lu(e,n,t){return t=mt(t),t.tag=3,t.payload={element:null},t.callback=function(){Ji(e,n)},t}function ad(e){return e=mt(e),e.tag=3,e}function ld(e,n,t,a){var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var r=a.value;e.payload=function(){return l(r)},e.callback=function(){td(n,t,a)}}var c=t.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){td(n,t,a),typeof l!="function"&&(St===null?St=new Set([this]):St.add(this));var d=a.stack;this.componentDidCatch(a.value,{componentStack:d!==null?d:""})})}function yv(e,n,t,a,l){if(t.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(n=t.alternate,n!==null&&yl(n,t,l,!0),t=Dn.current,t!==null){switch(t.tag){case 13:return Bn===null?Au():t.alternate===null&&qe===0&&(qe=3),t.flags&=-257,t.flags|=65536,t.lanes=l,a===Co?t.flags|=16384:(n=t.updateQueue,n===null?t.updateQueue=new Set([a]):n.add(a),Du(e,a,l)),!1;case 22:return t.flags|=65536,a===Co?t.flags|=16384:(n=t.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([a])},t.updateQueue=n):(t=n.retryQueue,t===null?n.retryQueue=new Set([a]):t.add(a)),Du(e,a,l)),!1}throw Error(u(435,t.tag))}return Du(e,a,l),Au(),!1}if(de)return n=Dn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,a!==jo&&(e=Error(u(422),{cause:a}),bl(jn(e,t)))):(a!==jo&&(n=Error(u(423),{cause:a}),bl(jn(n,t))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=jn(a,t),l=lu(e.stateNode,a,l),Uo(e,l),qe!==4&&(qe=2)),!1;var r=Error(u(520),{cause:a});if(r=jn(r,t),Hl===null?Hl=[r]:Hl.push(r),qe!==4&&(qe=2),n===null)return!0;a=jn(a,t),t=n;do{switch(t.tag){case 3:return t.flags|=65536,e=l&-l,t.lanes|=e,e=lu(t.stateNode,a,e),Uo(t,e),!1;case 1:if(n=t.type,r=t.stateNode,(t.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(St===null||!St.has(r))))return t.flags|=65536,l&=-l,t.lanes|=l,l=ad(l),ld(l,e,t,a),Uo(t,l),!1}t=t.return}while(t!==null);return!1}var id=Error(u(461)),We=!1;function Pe(e,n,t,a){n.child=e===null?Wf(n,null,t,a):Ma(n,e.child,t,a)}function rd(e,n,t,a,l){t=t.render;var r=n.ref;if("ref"in a){var c={};for(var d in a)d!=="ref"&&(c[d]=a[d])}else c=a;return Kt(n),a=Vo(e,n,t,c,r,l),d=Yo(),e!==null&&!We?(Fo(e,n,l),In(e,n,l)):(de&&d&&zo(n),n.flags|=1,Pe(e,n,a,l),n.child)}function od(e,n,t,a,l){if(e===null){var r=t.type;return typeof r=="function"&&!ko(r)&&r.defaultProps===void 0&&t.compare===null?(n.tag=15,n.type=r,ud(e,n,r,a,l)):(e=Di(t.type,null,a,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(r=e.child,!du(e,l)){var c=r.memoizedProps;if(t=t.compare,t=t!==null?t:pl,t(c,a)&&e.ref===n.ref)return In(e,n,l)}return n.flags|=1,e=Qn(r,a),e.ref=n.ref,e.return=n,n.child=e}function ud(e,n,t,a,l){if(e!==null){var r=e.memoizedProps;if(pl(r,a)&&e.ref===n.ref)if(We=!1,n.pendingProps=a=r,du(e,l))(e.flags&131072)!==0&&(We=!0);else return n.lanes=e.lanes,In(e,n,l)}return iu(e,n,t,a,l)}function sd(e,n,t){var a=n.pendingProps,l=a.children,r=e!==null?e.memoizedState:null;if(a.mode==="hidden"){if((n.flags&128)!==0){if(a=r!==null?r.baseLanes|t:t,e!==null){for(l=n.child=e.child,r=0;l!==null;)r=r|l.lanes|l.childLanes,l=l.sibling;n.childLanes=r&~a}else n.childLanes=0,n.child=null;return cd(e,n,a,t)}if((t&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&qi(n,r!==null?r.cachePool:null),r!==null?uf(n,r):Lo(),Kf(n);else return n.lanes=n.childLanes=536870912,cd(e,n,r!==null?r.baseLanes|t:t,t)}else r!==null?(qi(n,r.cachePool),uf(n,r),gt(),n.memoizedState=null):(e!==null&&qi(n,null),Lo(),gt());return Pe(e,n,l,t),n.child}function cd(e,n,t,a){var l=Oo();return l=l===null?null:{parent:Ge._currentValue,pool:l},n.memoizedState={baseLanes:t,cachePool:l},e!==null&&qi(n,null),Lo(),Kf(n),e!==null&&yl(e,n,a,!0),null}function Pi(e,n){var t=n.ref;if(t===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(u(284));(e===null||e.ref!==t)&&(n.flags|=4194816)}}function iu(e,n,t,a,l){return Kt(n),t=Vo(e,n,t,a,void 0,l),a=Yo(),e!==null&&!We?(Fo(e,n,l),In(e,n,l)):(de&&a&&zo(n),n.flags|=1,Pe(e,n,t,l),n.child)}function fd(e,n,t,a,l,r){return Kt(n),n.updateQueue=null,t=cf(n,a,t,l),sf(e),a=Yo(),e!==null&&!We?(Fo(e,n,r),In(e,n,r)):(de&&a&&zo(n),n.flags|=1,Pe(e,n,t,r),n.child)}function dd(e,n,t,a,l){if(Kt(n),n.stateNode===null){var r=ka,c=t.contextType;typeof c=="object"&&c!==null&&(r=ln(c)),r=new t(a,r),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=au,n.stateNode=r,r._reactInternals=n,r=n.stateNode,r.props=a,r.state=n.memoizedState,r.refs={},_o(n),c=t.contextType,r.context=typeof c=="object"&&c!==null?ln(c):ka,r.state=n.memoizedState,c=t.getDerivedStateFromProps,typeof c=="function"&&(tu(n,t,c,a),r.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(c=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),c!==r.state&&au.enqueueReplaceState(r,r.state,null),jl(n,a,r,l),xl(),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308),a=!0}else if(e===null){r=n.stateNode;var d=n.memoizedProps,p=It(t,d);r.props=p;var S=r.context,j=t.contextType;c=ka,typeof j=="object"&&j!==null&&(c=ln(j));var D=t.getDerivedStateFromProps;j=typeof D=="function"||typeof r.getSnapshotBeforeUpdate=="function",d=n.pendingProps!==d,j||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(d||S!==c)&&Pf(n,r,a,c),dt=!1;var z=n.memoizedState;r.state=z,jl(n,a,r,l),xl(),S=n.memoizedState,d||z!==S||dt?(typeof D=="function"&&(tu(n,t,D,a),S=n.memoizedState),(p=dt||Jf(n,t,p,a,z,S,c))?(j||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(n.flags|=4194308)):(typeof r.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=S),r.props=a,r.state=S,r.context=c,a=p):(typeof r.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{r=n.stateNode,qo(e,n),c=n.memoizedProps,j=It(t,c),r.props=j,D=n.pendingProps,z=r.context,S=t.contextType,p=ka,typeof S=="object"&&S!==null&&(p=ln(S)),d=t.getDerivedStateFromProps,(S=typeof d=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(c!==D||z!==p)&&Pf(n,r,a,p),dt=!1,z=n.memoizedState,r.state=z,jl(n,a,r,l),xl();var x=n.memoizedState;c!==D||z!==x||dt||e!==null&&e.dependencies!==null&&Ci(e.dependencies)?(typeof d=="function"&&(tu(n,t,d,a),x=n.memoizedState),(j=dt||Jf(n,t,j,a,z,x,p)||e!==null&&e.dependencies!==null&&Ci(e.dependencies))?(S||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(a,x,p),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(a,x,p)),typeof r.componentDidUpdate=="function"&&(n.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof r.componentDidUpdate!="function"||c===e.memoizedProps&&z===e.memoizedState||(n.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&z===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=x),r.props=a,r.state=x,r.context=p,a=j):(typeof r.componentDidUpdate!="function"||c===e.memoizedProps&&z===e.memoizedState||(n.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&z===e.memoizedState||(n.flags|=1024),a=!1)}return r=a,Pi(e,n),a=(n.flags&128)!==0,r||a?(r=n.stateNode,t=a&&typeof t.getDerivedStateFromError!="function"?null:r.render(),n.flags|=1,e!==null&&a?(n.child=Ma(n,e.child,null,l),n.child=Ma(n,null,t,l)):Pe(e,n,t,l),n.memoizedState=r.state,e=n.child):e=In(e,n,l),e}function md(e,n,t,a){return gl(),n.flags|=256,Pe(e,n,t,a),n.child}var ru={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ou(e){return{baseLanes:e,cachePool:Ic()}}function uu(e,n,t){return e=e!==null?e.childLanes&~t:0,n&&(e|=Mn),e}function pd(e,n,t){var a=n.pendingProps,l=!1,r=(n.flags&128)!==0,c;if((c=r)||(c=e!==null&&e.memoizedState===null?!1:(Ze.current&2)!==0),c&&(l=!0,n.flags&=-129),c=(n.flags&32)!==0,n.flags&=-33,e===null){if(de){if(l?vt(n):gt(),de){var d=_e,p;if(p=d){e:{for(p=d,d=Hn;p.nodeType!==8;){if(!d){d=null;break e}if(p=Un(p.nextSibling),p===null){d=null;break e}}d=p}d!==null?(n.memoizedState={dehydrated:d,treeContext:Zt!==null?{id:$n,overflow:Xn}:null,retryLane:536870912,hydrationErrors:null},p=bn(18,null,null,0),p.stateNode=d,p.return=n,n.child=p,on=n,_e=null,p=!0):p=!1}p||Xt(n)}if(d=n.memoizedState,d!==null&&(d=d.dehydrated,d!==null))return Zu(d)?n.lanes=32:n.lanes=536870912,null;Pn(n)}return d=a.children,a=a.fallback,l?(gt(),l=n.mode,d=Ii({mode:"hidden",children:d},l),a=Gt(a,l,t,null),d.return=n,a.return=n,d.sibling=a,n.child=d,l=n.child,l.memoizedState=ou(t),l.childLanes=uu(e,c,t),n.memoizedState=ru,a):(vt(n),su(n,d))}if(p=e.memoizedState,p!==null&&(d=p.dehydrated,d!==null)){if(r)n.flags&256?(vt(n),n.flags&=-257,n=cu(e,n,t)):n.memoizedState!==null?(gt(),n.child=e.child,n.flags|=128,n=null):(gt(),l=a.fallback,d=n.mode,a=Ii({mode:"visible",children:a.children},d),l=Gt(l,d,t,null),l.flags|=2,a.return=n,l.return=n,a.sibling=l,n.child=a,Ma(n,e.child,null,t),a=n.child,a.memoizedState=ou(t),a.childLanes=uu(e,c,t),n.memoizedState=ru,n=l);else if(vt(n),Zu(d)){if(c=d.nextSibling&&d.nextSibling.dataset,c)var S=c.dgst;c=S,a=Error(u(419)),a.stack="",a.digest=c,bl({value:a,source:null,stack:null}),n=cu(e,n,t)}else if(We||yl(e,n,t,!1),c=(t&e.childLanes)!==0,We||c){if(c=je,c!==null&&(a=t&-t,a=(a&42)!==0?1:Zr(a),a=(a&(c.suspendedLanes|t))!==0?0:a,a!==0&&a!==p.retryLane))throw p.retryLane=a,wa(e,a),Sn(c,e,a),id;d.data==="$?"||Au(),n=cu(e,n,t)}else d.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=p.treeContext,_e=Un(d.nextSibling),on=n,de=!0,$t=null,Hn=!1,e!==null&&(An[Tn++]=$n,An[Tn++]=Xn,An[Tn++]=Zt,$n=e.id,Xn=e.overflow,Zt=n),n=su(n,a.children),n.flags|=4096);return n}return l?(gt(),l=a.fallback,d=n.mode,p=e.child,S=p.sibling,a=Qn(p,{mode:"hidden",children:a.children}),a.subtreeFlags=p.subtreeFlags&65011712,S!==null?l=Qn(S,l):(l=Gt(l,d,t,null),l.flags|=2),l.return=n,a.return=n,a.sibling=l,n.child=a,a=l,l=n.child,d=e.child.memoizedState,d===null?d=ou(t):(p=d.cachePool,p!==null?(S=Ge._currentValue,p=p.parent!==S?{parent:S,pool:S}:p):p=Ic(),d={baseLanes:d.baseLanes|t,cachePool:p}),l.memoizedState=d,l.childLanes=uu(e,c,t),n.memoizedState=ru,a):(vt(n),t=e.child,e=t.sibling,t=Qn(t,{mode:"visible",children:a.children}),t.return=n,t.sibling=null,e!==null&&(c=n.deletions,c===null?(n.deletions=[e],n.flags|=16):c.push(e)),n.child=t,n.memoizedState=null,t)}function su(e,n){return n=Ii({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ii(e,n){return e=bn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function cu(e,n,t){return Ma(n,e.child,null,t),e=su(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function hd(e,n,t){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),Ao(e.return,n,t)}function fu(e,n,t,a,l){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:l}:(r.isBackwards=n,r.rendering=null,r.renderingStartTime=0,r.last=a,r.tail=t,r.tailMode=l)}function vd(e,n,t){var a=n.pendingProps,l=a.revealOrder,r=a.tail;if(Pe(e,n,a.children,t),a=Ze.current,(a&2)!==0)a=a&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hd(e,t,n);else if(e.tag===19)hd(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}switch(_(Ze,a),l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&Wi(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),fu(n,!1,l,t,r);break;case"backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&Wi(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}fu(n,!0,t,null,r);break;case"together":fu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function In(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Rt|=n.lanes,(t&n.childLanes)===0)if(e!==null){if(yl(e,n,t,!1),(t&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(u(153));if(n.child!==null){for(e=n.child,t=Qn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Qn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function du(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Ci(e)))}function wv(e,n,t){switch(n.tag){case 3:Te(n,n.stateNode.containerInfo),ft(n,Ge,e.memoizedState.cache),gl();break;case 27:case 5:Br(n);break;case 4:Te(n,n.stateNode.containerInfo);break;case 10:ft(n,n.type,n.memoizedProps.value);break;case 13:var a=n.memoizedState;if(a!==null)return a.dehydrated!==null?(vt(n),n.flags|=128,null):(t&n.child.childLanes)!==0?pd(e,n,t):(vt(n),e=In(e,n,t),e!==null?e.sibling:null);vt(n);break;case 19:var l=(e.flags&128)!==0;if(a=(t&n.childLanes)!==0,a||(yl(e,n,t,!1),a=(t&n.childLanes)!==0),l){if(a)return vd(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),_(Ze,Ze.current),a)break;return null;case 22:case 23:return n.lanes=0,sd(e,n,t);case 24:ft(n,Ge,e.memoizedState.cache)}return In(e,n,t)}function gd(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps)We=!0;else{if(!du(e,t)&&(n.flags&128)===0)return We=!1,wv(e,n,t);We=(e.flags&131072)!==0}else We=!1,de&&(n.flags&1048576)!==0&&Qc(n,Oi,n.index);switch(n.lanes=0,n.tag){case 16:e:{e=n.pendingProps;var a=n.elementType,l=a._init;if(a=l(a._payload),n.type=a,typeof a=="function")ko(a)?(e=It(a,e),n.tag=1,n=dd(null,n,a,e,t)):(n.tag=0,n=iu(null,n,a,e,t));else{if(a!=null){if(l=a.$$typeof,l===te){n.tag=11,n=rd(null,n,a,e,t);break e}else if(l===me){n.tag=14,n=od(null,n,a,e,t);break e}}throw n=$e(a)||a,Error(u(306,n,""))}}return n;case 0:return iu(e,n,n.type,n.pendingProps,t);case 1:return a=n.type,l=It(a,n.pendingProps),dd(e,n,a,l,t);case 3:e:{if(Te(n,n.stateNode.containerInfo),e===null)throw Error(u(387));a=n.pendingProps;var r=n.memoizedState;l=r.element,qo(e,n),jl(n,a,null,t);var c=n.memoizedState;if(a=c.cache,ft(n,Ge,a),a!==r.cache&&To(n,[Ge],t,!0),xl(),a=c.element,r.isDehydrated)if(r={element:a,isDehydrated:!1,cache:c.cache},n.updateQueue.baseState=r,n.memoizedState=r,n.flags&256){n=md(e,n,a,t);break e}else if(a!==l){l=jn(Error(u(424)),n),bl(l),n=md(e,n,a,t);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(_e=Un(e.firstChild),on=n,de=!0,$t=null,Hn=!0,t=Wf(n,null,a,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(gl(),a===l){n=In(e,n,t);break e}Pe(e,n,a,t)}n=n.child}return n;case 26:return Pi(e,n),e===null?(t=km(n.type,null,n.pendingProps,null))?n.memoizedState=t:de||(t=n.type,e=n.pendingProps,a=mr(W.current).createElement(t),a[an]=n,a[un]=e,en(a,t,e),Xe(a),n.stateNode=a):n.memoizedState=km(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Br(n),e===null&&de&&(a=n.stateNode=bm(n.type,n.pendingProps,W.current),on=n,Hn=!0,l=_e,jt(n.type)?(Qu=l,_e=Un(a.firstChild)):_e=l),Pe(e,n,n.pendingProps.children,t),Pi(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&de&&((l=a=_e)&&(a=Xv(a,n.type,n.pendingProps,Hn),a!==null?(n.stateNode=a,on=n,_e=Un(a.firstChild),Hn=!1,l=!0):l=!1),l||Xt(n)),Br(n),l=n.type,r=n.pendingProps,c=e!==null?e.memoizedProps:null,a=r.children,Yu(l,r)?a=null:c!==null&&Yu(l,c)&&(n.flags|=32),n.memoizedState!==null&&(l=Vo(e,n,dv,null,null,t),Xl._currentValue=l),Pi(e,n),Pe(e,n,a,t),n.child;case 6:return e===null&&de&&((e=t=_e)&&(t=Wv(t,n.pendingProps,Hn),t!==null?(n.stateNode=t,on=n,_e=null,e=!0):e=!1),e||Xt(n)),null;case 13:return pd(e,n,t);case 4:return Te(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=Ma(n,null,a,t):Pe(e,n,a,t),n.child;case 11:return rd(e,n,n.type,n.pendingProps,t);case 7:return Pe(e,n,n.pendingProps,t),n.child;case 8:return Pe(e,n,n.pendingProps.children,t),n.child;case 12:return Pe(e,n,n.pendingProps.children,t),n.child;case 10:return a=n.pendingProps,ft(n,n.type,a.value),Pe(e,n,a.children,t),n.child;case 9:return l=n.type._context,a=n.pendingProps.children,Kt(n),l=ln(l),a=a(l),n.flags|=1,Pe(e,n,a,t),n.child;case 14:return od(e,n,n.type,n.pendingProps,t);case 15:return ud(e,n,n.type,n.pendingProps,t);case 19:return vd(e,n,t);case 31:return a=n.pendingProps,t=n.mode,a={mode:a.mode,children:a.children},e===null?(t=Ii(a,t),t.ref=n.ref,n.child=t,t.return=n,n=t):(t=Qn(e.child,a),t.ref=n.ref,n.child=t,t.return=n,n=t),n;case 22:return sd(e,n,t);case 24:return Kt(n),a=ln(Ge),e===null?(l=Oo(),l===null&&(l=je,r=Do(),l.pooledCache=r,r.refCount++,r!==null&&(l.pooledCacheLanes|=t),l=r),n.memoizedState={parent:a,cache:l},_o(n),ft(n,Ge,l)):((e.lanes&t)!==0&&(qo(e,n),jl(n,null,null,t),xl()),l=e.memoizedState,r=n.memoizedState,l.parent!==a?(l={parent:a,cache:a},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),ft(n,Ge,a)):(a=r.cache,ft(n,Ge,a),a!==l.cache&&To(n,[Ge],t,!0))),Pe(e,n,n.pendingProps.children,t),n.child;case 29:throw n.pendingProps}throw Error(u(156,n.tag))}function et(e){e.flags|=4}function bd(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!jm(n)){if(n=Dn.current,n!==null&&((ue&4194048)===ue?Bn!==null:(ue&62914560)!==ue&&(ue&536870912)===0||n!==Bn))throw Sl=Co,ef;e.flags|=8192}}function er(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ws():536870912,e.lanes|=n,qa|=n)}function Cl(e,n){if(!de)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Oe(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,a=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=t,n}function kv(e,n,t){var a=n.pendingProps;switch(xo(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(n),null;case 1:return Oe(n),null;case 3:return t=n.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Kn(Ge),ot(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(vl(n)?et(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Wc())),Oe(n),null;case 26:return t=n.memoizedState,e===null?(et(n),t!==null?(Oe(n),bd(n,t)):(Oe(n),n.flags&=-16777217)):t?t!==e.memoizedState?(et(n),Oe(n),bd(n,t)):(Oe(n),n.flags&=-16777217):(e.memoizedProps!==a&&et(n),Oe(n),n.flags&=-16777217),null;case 27:fi(n),t=W.current;var l=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==a&&et(n);else{if(!a){if(n.stateNode===null)throw Error(u(166));return Oe(n),null}e=Y.current,vl(n)?$c(n):(e=bm(l,a,t),n.stateNode=e,et(n))}return Oe(n),null;case 5:if(fi(n),t=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==a&&et(n);else{if(!a){if(n.stateNode===null)throw Error(u(166));return Oe(n),null}if(e=Y.current,vl(n))$c(n);else{switch(l=mr(W.current),e){case 1:e=l.createElementNS("http://www.w3.org/2000/svg",t);break;case 2:e=l.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;default:switch(t){case"svg":e=l.createElementNS("http://www.w3.org/2000/svg",t);break;case"math":e=l.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;case"script":e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?l.createElement("select",{is:a.is}):l.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?l.createElement(t,{is:a.is}):l.createElement(t)}}e[an]=n,e[un]=a;e:for(l=n.child;l!==null;){if(l.tag===5||l.tag===6)e.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===n)break e;for(;l.sibling===null;){if(l.return===null||l.return===n)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}n.stateNode=e;e:switch(en(e,t,a),t){case"button":case"input":case"select":case"textarea":e=!!a.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&et(n)}}return Oe(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==a&&et(n);else{if(typeof a!="string"&&n.stateNode===null)throw Error(u(166));if(e=W.current,vl(n)){if(e=n.stateNode,t=n.memoizedProps,a=null,l=on,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}e[an]=n,e=!!(e.nodeValue===t||a!==null&&a.suppressHydrationWarning===!0||fm(e.nodeValue,t)),e||Xt(n)}else e=mr(e).createTextNode(a),e[an]=n,n.stateNode=e}return Oe(n),null;case 13:if(a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=vl(n),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(u(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(u(317));l[an]=n}else gl(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Oe(n),l=!1}else l=Wc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(Pn(n),n):(Pn(n),null)}if(Pn(n),(n.flags&128)!==0)return n.lanes=t,n;if(t=a!==null,e=e!==null&&e.memoizedState!==null,t){a=n.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool);var r=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(r=a.memoizedState.cachePool.pool),r!==l&&(a.flags|=2048)}return t!==e&&t&&(n.child.flags|=8192),er(n,n.updateQueue),Oe(n),null;case 4:return ot(),e===null&&Nu(n.stateNode.containerInfo),Oe(n),null;case 10:return Kn(n.type),Oe(n),null;case 19:if(U(Ze),l=n.memoizedState,l===null)return Oe(n),null;if(a=(n.flags&128)!==0,r=l.rendering,r===null)if(a)Cl(l,!1);else{if(qe!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(r=Wi(e),r!==null){for(n.flags|=128,Cl(l,!1),e=r.updateQueue,n.updateQueue=e,er(n,e),n.subtreeFlags=0,e=t,t=n.child;t!==null;)Zc(t,e),t=t.sibling;return _(Ze,Ze.current&1|2),n.child}e=e.sibling}l.tail!==null&&Ln()>ar&&(n.flags|=128,a=!0,Cl(l,!1),n.lanes=4194304)}else{if(!a)if(e=Wi(r),e!==null){if(n.flags|=128,a=!0,e=e.updateQueue,n.updateQueue=e,er(n,e),Cl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!r.alternate&&!de)return Oe(n),null}else 2*Ln()-l.renderingStartTime>ar&&t!==536870912&&(n.flags|=128,a=!0,Cl(l,!1),n.lanes=4194304);l.isBackwards?(r.sibling=n.child,n.child=r):(e=l.last,e!==null?e.sibling=r:n.child=r,l.last=r)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=Ln(),n.sibling=null,e=Ze.current,_(Ze,a?e&1|2:e&1),n):(Oe(n),null);case 22:case 23:return Pn(n),Ho(),a=n.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(n.flags|=8192):a&&(n.flags|=8192),a?(t&536870912)!==0&&(n.flags&128)===0&&(Oe(n),n.subtreeFlags&6&&(n.flags|=8192)):Oe(n),t=n.updateQueue,t!==null&&er(n,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),a=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),a!==t&&(n.flags|=2048),e!==null&&U(Jt),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),n.memoizedState.cache!==t&&(n.flags|=2048),Kn(Ge),Oe(n),null;case 25:return null;case 30:return null}throw Error(u(156,n.tag))}function Rv(e,n){switch(xo(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Kn(Ge),ot(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return fi(n),null;case 13:if(Pn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(u(340));gl()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return U(Ze),null;case 4:return ot(),null;case 10:return Kn(n.type),null;case 22:case 23:return Pn(n),Ho(),e!==null&&U(Jt),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Kn(Ge),null;case 25:return null;default:return null}}function yd(e,n){switch(xo(n),n.tag){case 3:Kn(Ge),ot();break;case 26:case 27:case 5:fi(n);break;case 4:ot();break;case 13:Pn(n);break;case 19:U(Ze);break;case 10:Kn(n.type);break;case 22:case 23:Pn(n),Ho(),e!==null&&U(Jt);break;case 24:Kn(Ge)}}function _l(e,n){try{var t=n.updateQueue,a=t!==null?t.lastEffect:null;if(a!==null){var l=a.next;t=l;do{if((t.tag&e)===e){a=void 0;var r=t.create,c=t.inst;a=r(),c.destroy=a}t=t.next}while(t!==l)}}catch(d){ze(n,n.return,d)}}function bt(e,n,t){try{var a=n.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var r=l.next;a=r;do{if((a.tag&e)===e){var c=a.inst,d=c.destroy;if(d!==void 0){c.destroy=void 0,l=n;var p=t,S=d;try{S()}catch(j){ze(l,p,j)}}}a=a.next}while(a!==r)}}catch(j){ze(n,n.return,j)}}function wd(e){var n=e.updateQueue;if(n!==null){var t=e.stateNode;try{of(n,t)}catch(a){ze(e,e.return,a)}}}function kd(e,n,t){t.props=It(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(a){ze(e,n,a)}}function ql(e,n){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof t=="function"?e.refCleanup=t(a):t.current=a}}catch(l){ze(e,n,l)}}function Vn(e,n){var t=e.ref,a=e.refCleanup;if(t!==null)if(typeof a=="function")try{a()}catch(l){ze(e,n,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(l){ze(e,n,l)}else t.current=null}function Rd(e){var n=e.type,t=e.memoizedProps,a=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":t.autoFocus&&a.focus();break e;case"img":t.src?a.src=t.src:t.srcSet&&(a.srcset=t.srcSet)}}catch(l){ze(e,e.return,l)}}function mu(e,n,t){try{var a=e.stateNode;Fv(a,e.type,t,n),a[un]=n}catch(l){ze(e,e.return,l)}}function Sd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&jt(e.type)||e.tag===4}function pu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Sd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&jt(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hu(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,n):(n=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.appendChild(e),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=dr));else if(a!==4&&(a===27&&jt(e.type)&&(t=e.stateNode,n=null),e=e.child,e!==null))for(hu(e,n,t),e=e.sibling;e!==null;)hu(e,n,t),e=e.sibling}function nr(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(a!==4&&(a===27&&jt(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(nr(e,n,t),e=e.sibling;e!==null;)nr(e,n,t),e=e.sibling}function zd(e){var n=e.stateNode,t=e.memoizedProps;try{for(var a=e.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);en(n,a,t),n[an]=e,n[un]=t}catch(r){ze(e,e.return,r)}}var nt=!1,He=!1,vu=!1,xd=typeof WeakSet=="function"?WeakSet:Set,Ke=null;function Sv(e,n){if(e=e.containerInfo,Bu=yr,e=qc(e),po(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var l=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{t.nodeType,r.nodeType}catch{t=null;break e}var c=0,d=-1,p=-1,S=0,j=0,D=e,z=null;n:for(;;){for(var x;D!==t||l!==0&&D.nodeType!==3||(d=c+l),D!==r||a!==0&&D.nodeType!==3||(p=c+a),D.nodeType===3&&(c+=D.nodeValue.length),(x=D.firstChild)!==null;)z=D,D=x;for(;;){if(D===e)break n;if(z===t&&++S===l&&(d=c),z===r&&++j===a&&(p=c),(x=D.nextSibling)!==null)break;D=z,z=D.parentNode}D=x}t=d===-1||p===-1?null:{start:d,end:p}}else t=null}t=t||{start:0,end:0}}else t=null;for(Vu={focusedElem:e,selectionRange:t},yr=!1,Ke=n;Ke!==null;)if(n=Ke,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,Ke=e;else for(;Ke!==null;){switch(n=Ke,r=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,t=n,l=r.memoizedProps,r=r.memoizedState,a=t.stateNode;try{var $=It(t.type,l,t.elementType===t.type);e=a.getSnapshotBeforeUpdate($,r),a.__reactInternalSnapshotBeforeUpdate=e}catch(F){ze(t,t.return,F)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,t=e.nodeType,t===9)Gu(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Gu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=n.sibling,e!==null){e.return=n.return,Ke=e;break}Ke=n.return}}function jd(e,n,t){var a=t.flags;switch(t.tag){case 0:case 11:case 15:yt(e,t),a&4&&_l(5,t);break;case 1:if(yt(e,t),a&4)if(e=t.stateNode,n===null)try{e.componentDidMount()}catch(c){ze(t,t.return,c)}else{var l=It(t.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(l,n,e.__reactInternalSnapshotBeforeUpdate)}catch(c){ze(t,t.return,c)}}a&64&&wd(t),a&512&&ql(t,t.return);break;case 3:if(yt(e,t),a&64&&(e=t.updateQueue,e!==null)){if(n=null,t.child!==null)switch(t.child.tag){case 27:case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}try{of(e,n)}catch(c){ze(t,t.return,c)}}break;case 27:n===null&&a&4&&zd(t);case 26:case 5:yt(e,t),n===null&&a&4&&Rd(t),a&512&&ql(t,t.return);break;case 12:yt(e,t);break;case 13:yt(e,t),a&4&&Td(e,t),a&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=Ov.bind(null,t),Kv(e,t))));break;case 22:if(a=t.memoizedState!==null||nt,!a){n=n!==null&&n.memoizedState!==null||He,l=nt;var r=He;nt=a,(He=n)&&!r?wt(e,t,(t.subtreeFlags&8772)!==0):yt(e,t),nt=l,He=r}break;case 30:break;default:yt(e,t)}}function Ed(e){var n=e.alternate;n!==null&&(e.alternate=null,Ed(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Xr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var De=null,fn=!1;function tt(e,n,t){for(t=t.child;t!==null;)Ad(e,n,t),t=t.sibling}function Ad(e,n,t){if(hn&&typeof hn.onCommitFiberUnmount=="function")try{hn.onCommitFiberUnmount(tl,t)}catch{}switch(t.tag){case 26:He||Vn(t,n),tt(e,n,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:He||Vn(t,n);var a=De,l=fn;jt(t.type)&&(De=t.stateNode,fn=!1),tt(e,n,t),Gl(t.stateNode),De=a,fn=l;break;case 5:He||Vn(t,n);case 6:if(a=De,l=fn,De=null,tt(e,n,t),De=a,fn=l,De!==null)if(fn)try{(De.nodeType===9?De.body:De.nodeName==="HTML"?De.ownerDocument.body:De).removeChild(t.stateNode)}catch(r){ze(t,n,r)}else try{De.removeChild(t.stateNode)}catch(r){ze(t,n,r)}break;case 18:De!==null&&(fn?(e=De,vm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),Pl(e)):vm(De,t.stateNode));break;case 4:a=De,l=fn,De=t.stateNode.containerInfo,fn=!0,tt(e,n,t),De=a,fn=l;break;case 0:case 11:case 14:case 15:He||bt(2,t,n),He||bt(4,t,n),tt(e,n,t);break;case 1:He||(Vn(t,n),a=t.stateNode,typeof a.componentWillUnmount=="function"&&kd(t,n,a)),tt(e,n,t);break;case 21:tt(e,n,t);break;case 22:He=(a=He)||t.memoizedState!==null,tt(e,n,t),He=a;break;default:tt(e,n,t)}}function Td(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Pl(e)}catch(t){ze(n,n.return,t)}}function zv(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new xd),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new xd),n;default:throw Error(u(435,e.tag))}}function gu(e,n){var t=zv(e);n.forEach(function(a){var l=Cv.bind(null,e,a);t.has(a)||(t.add(a),a.then(l,l))})}function yn(e,n){var t=n.deletions;if(t!==null)for(var a=0;a<t.length;a++){var l=t[a],r=e,c=n,d=c;e:for(;d!==null;){switch(d.tag){case 27:if(jt(d.type)){De=d.stateNode,fn=!1;break e}break;case 5:De=d.stateNode,fn=!1;break e;case 3:case 4:De=d.stateNode.containerInfo,fn=!0;break e}d=d.return}if(De===null)throw Error(u(160));Ad(r,c,l),De=null,fn=!1,r=l.alternate,r!==null&&(r.return=null),l.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Dd(n,e),n=n.sibling}var qn=null;function Dd(e,n){var t=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:yn(n,e),wn(e),a&4&&(bt(3,e,e.return),_l(3,e),bt(5,e,e.return));break;case 1:yn(n,e),wn(e),a&512&&(He||t===null||Vn(t,t.return)),a&64&&nt&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?a:t.concat(a))));break;case 26:var l=qn;if(yn(n,e),wn(e),a&512&&(He||t===null||Vn(t,t.return)),a&4){var r=t!==null?t.memoizedState:null;if(a=e.memoizedState,t===null)if(a===null)if(e.stateNode===null){e:{a=e.type,t=e.memoizedProps,l=l.ownerDocument||l;n:switch(a){case"title":r=l.getElementsByTagName("title")[0],(!r||r[il]||r[an]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(a),l.head.insertBefore(r,l.querySelector("head > title"))),en(r,a,t),r[an]=e,Xe(r),a=r;break e;case"link":var c=zm("link","href",l).get(a+(t.href||""));if(c){for(var d=0;d<c.length;d++)if(r=c[d],r.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&r.getAttribute("rel")===(t.rel==null?null:t.rel)&&r.getAttribute("title")===(t.title==null?null:t.title)&&r.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){c.splice(d,1);break n}}r=l.createElement(a),en(r,a,t),l.head.appendChild(r);break;case"meta":if(c=zm("meta","content",l).get(a+(t.content||""))){for(d=0;d<c.length;d++)if(r=c[d],r.getAttribute("content")===(t.content==null?null:""+t.content)&&r.getAttribute("name")===(t.name==null?null:t.name)&&r.getAttribute("property")===(t.property==null?null:t.property)&&r.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&r.getAttribute("charset")===(t.charSet==null?null:t.charSet)){c.splice(d,1);break n}}r=l.createElement(a),en(r,a,t),l.head.appendChild(r);break;default:throw Error(u(468,a))}r[an]=e,Xe(r),a=r}e.stateNode=a}else xm(l,e.type,e.stateNode);else e.stateNode=Sm(l,a,e.memoizedProps);else r!==a?(r===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):r.count--,a===null?xm(l,e.type,e.stateNode):Sm(l,a,e.memoizedProps)):a===null&&e.stateNode!==null&&mu(e,e.memoizedProps,t.memoizedProps)}break;case 27:yn(n,e),wn(e),a&512&&(He||t===null||Vn(t,t.return)),t!==null&&a&4&&mu(e,e.memoizedProps,t.memoizedProps);break;case 5:if(yn(n,e),wn(e),a&512&&(He||t===null||Vn(t,t.return)),e.flags&32){l=e.stateNode;try{ma(l,"")}catch(x){ze(e,e.return,x)}}a&4&&e.stateNode!=null&&(l=e.memoizedProps,mu(e,l,t!==null?t.memoizedProps:l)),a&1024&&(vu=!0);break;case 6:if(yn(n,e),wn(e),a&4){if(e.stateNode===null)throw Error(u(162));a=e.memoizedProps,t=e.stateNode;try{t.nodeValue=a}catch(x){ze(e,e.return,x)}}break;case 3:if(vr=null,l=qn,qn=pr(n.containerInfo),yn(n,e),qn=l,wn(e),a&4&&t!==null&&t.memoizedState.isDehydrated)try{Pl(n.containerInfo)}catch(x){ze(e,e.return,x)}vu&&(vu=!1,Md(e));break;case 4:a=qn,qn=pr(e.stateNode.containerInfo),yn(n,e),wn(e),qn=a;break;case 12:yn(n,e),wn(e);break;case 13:yn(n,e),wn(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(Su=Ln()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,gu(e,a)));break;case 22:l=e.memoizedState!==null;var p=t!==null&&t.memoizedState!==null,S=nt,j=He;if(nt=S||l,He=j||p,yn(n,e),He=j,nt=S,wn(e),a&8192)e:for(n=e.stateNode,n._visibility=l?n._visibility&-2:n._visibility|1,l&&(t===null||p||nt||He||ea(e)),t=null,n=e;;){if(n.tag===5||n.tag===26){if(t===null){p=t=n;try{if(r=p.stateNode,l)c=r.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{d=p.stateNode;var D=p.memoizedProps.style,z=D!=null&&D.hasOwnProperty("display")?D.display:null;d.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(x){ze(p,p.return,x)}}}else if(n.tag===6){if(t===null){p=n;try{p.stateNode.nodeValue=l?"":p.memoizedProps}catch(x){ze(p,p.return,x)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;t===n&&(t=null),n=n.return}t===n&&(t=null),n.sibling.return=n.return,n=n.sibling}a&4&&(a=e.updateQueue,a!==null&&(t=a.retryQueue,t!==null&&(a.retryQueue=null,gu(e,t))));break;case 19:yn(n,e),wn(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,gu(e,a)));break;case 30:break;case 21:break;default:yn(n,e),wn(e)}}function wn(e){var n=e.flags;if(n&2){try{for(var t,a=e.return;a!==null;){if(Sd(a)){t=a;break}a=a.return}if(t==null)throw Error(u(160));switch(t.tag){case 27:var l=t.stateNode,r=pu(e);nr(e,r,l);break;case 5:var c=t.stateNode;t.flags&32&&(ma(c,""),t.flags&=-33);var d=pu(e);nr(e,d,c);break;case 3:case 4:var p=t.stateNode.containerInfo,S=pu(e);hu(e,S,p);break;default:throw Error(u(161))}}catch(j){ze(e,e.return,j)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Md(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Md(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function yt(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)jd(e,n.alternate,n),n=n.sibling}function ea(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:bt(4,n,n.return),ea(n);break;case 1:Vn(n,n.return);var t=n.stateNode;typeof t.componentWillUnmount=="function"&&kd(n,n.return,t),ea(n);break;case 27:Gl(n.stateNode);case 26:case 5:Vn(n,n.return),ea(n);break;case 22:n.memoizedState===null&&ea(n);break;case 30:ea(n);break;default:ea(n)}e=e.sibling}}function wt(e,n,t){for(t=t&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var a=n.alternate,l=e,r=n,c=r.flags;switch(r.tag){case 0:case 11:case 15:wt(l,r,t),_l(4,r);break;case 1:if(wt(l,r,t),a=r,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(S){ze(a,a.return,S)}if(a=r,l=a.updateQueue,l!==null){var d=a.stateNode;try{var p=l.shared.hiddenCallbacks;if(p!==null)for(l.shared.hiddenCallbacks=null,l=0;l<p.length;l++)rf(p[l],d)}catch(S){ze(a,a.return,S)}}t&&c&64&&wd(r),ql(r,r.return);break;case 27:zd(r);case 26:case 5:wt(l,r,t),t&&a===null&&c&4&&Rd(r),ql(r,r.return);break;case 12:wt(l,r,t);break;case 13:wt(l,r,t),t&&c&4&&Td(l,r);break;case 22:r.memoizedState===null&&wt(l,r,t),ql(r,r.return);break;case 30:break;default:wt(l,r,t)}n=n.sibling}}function bu(e,n){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&wl(t))}function yu(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&wl(e))}function Yn(e,n,t,a){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Od(e,n,t,a),n=n.sibling}function Od(e,n,t,a){var l=n.flags;switch(n.tag){case 0:case 11:case 15:Yn(e,n,t,a),l&2048&&_l(9,n);break;case 1:Yn(e,n,t,a);break;case 3:Yn(e,n,t,a),l&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&wl(e)));break;case 12:if(l&2048){Yn(e,n,t,a),e=n.stateNode;try{var r=n.memoizedProps,c=r.id,d=r.onPostCommit;typeof d=="function"&&d(c,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(p){ze(n,n.return,p)}}else Yn(e,n,t,a);break;case 13:Yn(e,n,t,a);break;case 23:break;case 22:r=n.stateNode,c=n.alternate,n.memoizedState!==null?r._visibility&2?Yn(e,n,t,a):Ul(e,n):r._visibility&2?Yn(e,n,t,a):(r._visibility|=2,Oa(e,n,t,a,(n.subtreeFlags&10256)!==0)),l&2048&&bu(c,n);break;case 24:Yn(e,n,t,a),l&2048&&yu(n.alternate,n);break;default:Yn(e,n,t,a)}}function Oa(e,n,t,a,l){for(l=l&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var r=e,c=n,d=t,p=a,S=c.flags;switch(c.tag){case 0:case 11:case 15:Oa(r,c,d,p,l),_l(8,c);break;case 23:break;case 22:var j=c.stateNode;c.memoizedState!==null?j._visibility&2?Oa(r,c,d,p,l):Ul(r,c):(j._visibility|=2,Oa(r,c,d,p,l)),l&&S&2048&&bu(c.alternate,c);break;case 24:Oa(r,c,d,p,l),l&&S&2048&&yu(c.alternate,c);break;default:Oa(r,c,d,p,l)}n=n.sibling}}function Ul(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var t=e,a=n,l=a.flags;switch(a.tag){case 22:Ul(t,a),l&2048&&bu(a.alternate,a);break;case 24:Ul(t,a),l&2048&&yu(a.alternate,a);break;default:Ul(t,a)}n=n.sibling}}var Nl=8192;function Ca(e){if(e.subtreeFlags&Nl)for(e=e.child;e!==null;)Cd(e),e=e.sibling}function Cd(e){switch(e.tag){case 26:Ca(e),e.flags&Nl&&e.memoizedState!==null&&sg(qn,e.memoizedState,e.memoizedProps);break;case 5:Ca(e);break;case 3:case 4:var n=qn;qn=pr(e.stateNode.containerInfo),Ca(e),qn=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Nl,Nl=16777216,Ca(e),Nl=n):Ca(e));break;default:Ca(e)}}function _d(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Ll(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];Ke=a,Ud(a,e)}_d(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)qd(e),e=e.sibling}function qd(e){switch(e.tag){case 0:case 11:case 15:Ll(e),e.flags&2048&&bt(9,e,e.return);break;case 3:Ll(e);break;case 12:Ll(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,tr(e)):Ll(e);break;default:Ll(e)}}function tr(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];Ke=a,Ud(a,e)}_d(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:bt(8,n,n.return),tr(n);break;case 22:t=n.stateNode,t._visibility&2&&(t._visibility&=-3,tr(n));break;default:tr(n)}e=e.sibling}}function Ud(e,n){for(;Ke!==null;){var t=Ke;switch(t.tag){case 0:case 11:case 15:bt(8,t,n);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var a=t.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:wl(t.memoizedState.cache)}if(a=t.child,a!==null)a.return=t,Ke=a;else e:for(t=e;Ke!==null;){a=Ke;var l=a.sibling,r=a.return;if(Ed(a),a===t){Ke=null;break e}if(l!==null){l.return=r,Ke=l;break e}Ke=r}}}var xv={getCacheForType:function(e){var n=ln(Ge),t=n.data.get(e);return t===void 0&&(t=e(),n.data.set(e,t)),t}},jv=typeof WeakMap=="function"?WeakMap:Map,he=0,je=null,ae=null,ue=0,ve=0,kn=null,kt=!1,_a=!1,wu=!1,at=0,qe=0,Rt=0,na=0,ku=0,Mn=0,qa=0,Hl=null,dn=null,Ru=!1,Su=0,ar=1/0,lr=null,St=null,Ie=0,zt=null,Ua=null,Na=0,zu=0,xu=null,Nd=null,Bl=0,ju=null;function Rn(){if((he&2)!==0&&ue!==0)return ue&-ue;if(E.T!==null){var e=za;return e!==0?e:Cu()}return Ps()}function Ld(){Mn===0&&(Mn=(ue&536870912)===0||de?Xs():536870912);var e=Dn.current;return e!==null&&(e.flags|=32),Mn}function Sn(e,n,t){(e===je&&(ve===2||ve===9)||e.cancelPendingCommit!==null)&&(La(e,0),xt(e,ue,Mn,!1)),ll(e,t),((he&2)===0||e!==je)&&(e===je&&((he&2)===0&&(na|=t),qe===4&&xt(e,ue,Mn,!1)),Fn(e))}function Hd(e,n,t){if((he&6)!==0)throw Error(u(327));var a=!t&&(n&124)===0&&(n&e.expiredLanes)===0||al(e,n),l=a?Tv(e,n):Tu(e,n,!0),r=a;do{if(l===0){_a&&!a&&xt(e,n,0,!1);break}else{if(t=e.current.alternate,r&&!Ev(t)){l=Tu(e,n,!1),r=!1;continue}if(l===2){if(r=n,e.errorRecoveryDisabledLanes&r)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){n=c;e:{var d=e;l=Hl;var p=d.current.memoizedState.isDehydrated;if(p&&(La(d,c).flags|=256),c=Tu(d,c,!1),c!==2){if(wu&&!p){d.errorRecoveryDisabledLanes|=r,na|=r,l=4;break e}r=dn,dn=l,r!==null&&(dn===null?dn=r:dn.push.apply(dn,r))}l=c}if(r=!1,l!==2)continue}}if(l===1){La(e,0),xt(e,n,0,!0);break}e:{switch(a=e,r=l,r){case 0:case 1:throw Error(u(345));case 4:if((n&4194048)!==n)break;case 6:xt(a,n,Mn,!kt);break e;case 2:dn=null;break;case 3:case 5:break;default:throw Error(u(329))}if((n&62914560)===n&&(l=Su+300-Ln(),10<l)){if(xt(a,n,Mn,!kt),hi(a,0,!0)!==0)break e;a.timeoutHandle=pm(Bd.bind(null,a,t,dn,lr,Ru,n,Mn,na,qa,kt,r,2,-0,0),l);break e}Bd(a,t,dn,lr,Ru,n,Mn,na,qa,kt,r,0,-0,0)}}break}while(!0);Fn(e)}function Bd(e,n,t,a,l,r,c,d,p,S,j,D,z,x){if(e.timeoutHandle=-1,D=n.subtreeFlags,(D&8192||(D&16785408)===16785408)&&($l={stylesheets:null,count:0,unsuspend:ug},Cd(n),D=cg(),D!==null)){e.cancelPendingCommit=D($d.bind(null,e,n,r,t,a,l,c,d,p,j,1,z,x)),xt(e,r,c,!S);return}$d(e,n,r,t,a,l,c,d,p)}function Ev(e){for(var n=e;;){var t=n.tag;if((t===0||t===11||t===15)&&n.flags&16384&&(t=n.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var a=0;a<t.length;a++){var l=t[a],r=l.getSnapshot;l=l.value;try{if(!gn(r(),l))return!1}catch{return!1}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function xt(e,n,t,a){n&=~ku,n&=~na,e.suspendedLanes|=n,e.pingedLanes&=~n,a&&(e.warmLanes|=n),a=e.expirationTimes;for(var l=n;0<l;){var r=31-vn(l),c=1<<r;a[r]=-1,l&=~c}t!==0&&Ks(e,t,n)}function ir(){return(he&6)===0?(Vl(0),!1):!0}function Eu(){if(ae!==null){if(ve===0)var e=ae.return;else e=ae,Wn=Wt=null,Go(e),Da=null,Ml=0,e=ae;for(;e!==null;)yd(e.alternate,e),e=e.return;ae=null}}function La(e,n){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,Zv(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),Eu(),je=e,ae=t=Qn(e.current,null),ue=n,ve=0,kn=null,kt=!1,_a=al(e,n),wu=!1,qa=Mn=ku=na=Rt=qe=0,dn=Hl=null,Ru=!1,(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var l=31-vn(a),r=1<<l;n|=e[l],a&=~r}return at=n,Ei(),t}function Vd(e,n){P=null,E.H=Qi,n===Rl||n===Ui?(n=af(),ve=3):n===ef?(n=af(),ve=4):ve=n===id?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,kn=n,ae===null&&(qe=1,Ji(e,jn(n,e.current)))}function Yd(){var e=E.H;return E.H=Qi,e===null?Qi:e}function Fd(){var e=E.A;return E.A=xv,e}function Au(){qe=4,kt||(ue&4194048)!==ue&&Dn.current!==null||(_a=!0),(Rt&134217727)===0&&(na&134217727)===0||je===null||xt(je,ue,Mn,!1)}function Tu(e,n,t){var a=he;he|=2;var l=Yd(),r=Fd();(je!==e||ue!==n)&&(lr=null,La(e,n)),n=!1;var c=qe;e:do try{if(ve!==0&&ae!==null){var d=ae,p=kn;switch(ve){case 8:Eu(),c=6;break e;case 3:case 2:case 9:case 6:Dn.current===null&&(n=!0);var S=ve;if(ve=0,kn=null,Ha(e,d,p,S),t&&_a){c=0;break e}break;default:S=ve,ve=0,kn=null,Ha(e,d,p,S)}}Av(),c=qe;break}catch(j){Vd(e,j)}while(!0);return n&&e.shellSuspendCounter++,Wn=Wt=null,he=a,E.H=l,E.A=r,ae===null&&(je=null,ue=0,Ei()),c}function Av(){for(;ae!==null;)Gd(ae)}function Tv(e,n){var t=he;he|=2;var a=Yd(),l=Fd();je!==e||ue!==n?(lr=null,ar=Ln()+500,La(e,n)):_a=al(e,n);e:do try{if(ve!==0&&ae!==null){n=ae;var r=kn;n:switch(ve){case 1:ve=0,kn=null,Ha(e,n,r,1);break;case 2:case 9:if(nf(r)){ve=0,kn=null,Zd(n);break}n=function(){ve!==2&&ve!==9||je!==e||(ve=7),Fn(e)},r.then(n,n);break e;case 3:ve=7;break e;case 4:ve=5;break e;case 7:nf(r)?(ve=0,kn=null,Zd(n)):(ve=0,kn=null,Ha(e,n,r,7));break;case 5:var c=null;switch(ae.tag){case 26:c=ae.memoizedState;case 5:case 27:var d=ae;if(!c||jm(c)){ve=0,kn=null;var p=d.sibling;if(p!==null)ae=p;else{var S=d.return;S!==null?(ae=S,rr(S)):ae=null}break n}}ve=0,kn=null,Ha(e,n,r,5);break;case 6:ve=0,kn=null,Ha(e,n,r,6);break;case 8:Eu(),qe=6;break e;default:throw Error(u(462))}}Dv();break}catch(j){Vd(e,j)}while(!0);return Wn=Wt=null,E.H=a,E.A=l,he=t,ae!==null?0:(je=null,ue=0,Ei(),qe)}function Dv(){for(;ae!==null&&!Pp();)Gd(ae)}function Gd(e){var n=gd(e.alternate,e,at);e.memoizedProps=e.pendingProps,n===null?rr(e):ae=n}function Zd(e){var n=e,t=n.alternate;switch(n.tag){case 15:case 0:n=fd(t,n,n.pendingProps,n.type,void 0,ue);break;case 11:n=fd(t,n,n.pendingProps,n.type.render,n.ref,ue);break;case 5:Go(n);default:yd(t,n),n=ae=Zc(n,at),n=gd(t,n,at)}e.memoizedProps=e.pendingProps,n===null?rr(e):ae=n}function Ha(e,n,t,a){Wn=Wt=null,Go(n),Da=null,Ml=0;var l=n.return;try{if(yv(e,l,n,t,ue)){qe=1,Ji(e,jn(t,e.current)),ae=null;return}}catch(r){if(l!==null)throw ae=l,r;qe=1,Ji(e,jn(t,e.current)),ae=null;return}n.flags&32768?(de||a===1?e=!0:_a||(ue&536870912)!==0?e=!1:(kt=e=!0,(a===2||a===9||a===3||a===6)&&(a=Dn.current,a!==null&&a.tag===13&&(a.flags|=16384))),Qd(n,e)):rr(n)}function rr(e){var n=e;do{if((n.flags&32768)!==0){Qd(n,kt);return}e=n.return;var t=kv(n.alternate,n,at);if(t!==null){ae=t;return}if(n=n.sibling,n!==null){ae=n;return}ae=n=e}while(n!==null);qe===0&&(qe=5)}function Qd(e,n){do{var t=Rv(e.alternate,e);if(t!==null){t.flags&=32767,ae=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!n&&(e=e.sibling,e!==null)){ae=e;return}ae=e=t}while(e!==null);qe=6,ae=null}function $d(e,n,t,a,l,r,c,d,p){e.cancelPendingCommit=null;do or();while(Ie!==0);if((he&6)!==0)throw Error(u(327));if(n!==null){if(n===e.current)throw Error(u(177));if(r=n.lanes|n.childLanes,r|=yo,uh(e,t,r,c,d,p),e===je&&(ae=je=null,ue=0),Ua=n,zt=e,Na=t,zu=r,xu=l,Nd=a,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,_v(di,function(){return Pd(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||a){a=E.T,E.T=null,l=q.p,q.p=2,c=he,he|=4;try{Sv(e,n,t)}finally{he=c,q.p=l,E.T=a}}Ie=1,Xd(),Wd(),Kd()}}function Xd(){if(Ie===1){Ie=0;var e=zt,n=Ua,t=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||t){t=E.T,E.T=null;var a=q.p;q.p=2;var l=he;he|=4;try{Dd(n,e);var r=Vu,c=qc(e.containerInfo),d=r.focusedElem,p=r.selectionRange;if(c!==d&&d&&d.ownerDocument&&_c(d.ownerDocument.documentElement,d)){if(p!==null&&po(d)){var S=p.start,j=p.end;if(j===void 0&&(j=S),"selectionStart"in d)d.selectionStart=S,d.selectionEnd=Math.min(j,d.value.length);else{var D=d.ownerDocument||document,z=D&&D.defaultView||window;if(z.getSelection){var x=z.getSelection(),$=d.textContent.length,F=Math.min(p.start,$),Re=p.end===void 0?F:Math.min(p.end,$);!x.extend&&F>Re&&(c=Re,Re=F,F=c);var y=Cc(d,F),v=Cc(d,Re);if(y&&v&&(x.rangeCount!==1||x.anchorNode!==y.node||x.anchorOffset!==y.offset||x.focusNode!==v.node||x.focusOffset!==v.offset)){var R=D.createRange();R.setStart(y.node,y.offset),x.removeAllRanges(),F>Re?(x.addRange(R),x.extend(v.node,v.offset)):(R.setEnd(v.node,v.offset),x.addRange(R))}}}}for(D=[],x=d;x=x.parentNode;)x.nodeType===1&&D.push({element:x,left:x.scrollLeft,top:x.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<D.length;d++){var T=D[d];T.element.scrollLeft=T.left,T.element.scrollTop=T.top}}yr=!!Bu,Vu=Bu=null}finally{he=l,q.p=a,E.T=t}}e.current=n,Ie=2}}function Wd(){if(Ie===2){Ie=0;var e=zt,n=Ua,t=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||t){t=E.T,E.T=null;var a=q.p;q.p=2;var l=he;he|=4;try{jd(e,n.alternate,n)}finally{he=l,q.p=a,E.T=t}}Ie=3}}function Kd(){if(Ie===4||Ie===3){Ie=0,Ip();var e=zt,n=Ua,t=Na,a=Nd;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Ie=5:(Ie=0,Ua=zt=null,Jd(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(St=null),Qr(t),n=n.stateNode,hn&&typeof hn.onCommitFiberRoot=="function")try{hn.onCommitFiberRoot(tl,n,void 0,(n.current.flags&128)===128)}catch{}if(a!==null){n=E.T,l=q.p,q.p=2,E.T=null;try{for(var r=e.onRecoverableError,c=0;c<a.length;c++){var d=a[c];r(d.value,{componentStack:d.stack})}}finally{E.T=n,q.p=l}}(Na&3)!==0&&or(),Fn(e),l=e.pendingLanes,(t&4194090)!==0&&(l&42)!==0?e===ju?Bl++:(Bl=0,ju=e):Bl=0,Vl(0)}}function Jd(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,wl(n)))}function or(e){return Xd(),Wd(),Kd(),Pd()}function Pd(){if(Ie!==5)return!1;var e=zt,n=zu;zu=0;var t=Qr(Na),a=E.T,l=q.p;try{q.p=32>t?32:t,E.T=null,t=xu,xu=null;var r=zt,c=Na;if(Ie=0,Ua=zt=null,Na=0,(he&6)!==0)throw Error(u(331));var d=he;if(he|=4,qd(r.current),Od(r,r.current,c,t),he=d,Vl(0,!1),hn&&typeof hn.onPostCommitFiberRoot=="function")try{hn.onPostCommitFiberRoot(tl,r)}catch{}return!0}finally{q.p=l,E.T=a,Jd(e,n)}}function Id(e,n,t){n=jn(t,n),n=lu(e.stateNode,n,2),e=pt(e,n,2),e!==null&&(ll(e,2),Fn(e))}function ze(e,n,t){if(e.tag===3)Id(e,e,t);else for(;n!==null;){if(n.tag===3){Id(n,e,t);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(St===null||!St.has(a))){e=jn(t,e),t=ad(2),a=pt(n,t,2),a!==null&&(ld(t,a,n,e),ll(a,2),Fn(a));break}}n=n.return}}function Du(e,n,t){var a=e.pingCache;if(a===null){a=e.pingCache=new jv;var l=new Set;a.set(n,l)}else l=a.get(n),l===void 0&&(l=new Set,a.set(n,l));l.has(t)||(wu=!0,l.add(t),e=Mv.bind(null,e,n,t),n.then(e,e))}function Mv(e,n,t){var a=e.pingCache;a!==null&&a.delete(n),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,je===e&&(ue&t)===t&&(qe===4||qe===3&&(ue&62914560)===ue&&300>Ln()-Su?(he&2)===0&&La(e,0):ku|=t,qa===ue&&(qa=0)),Fn(e)}function em(e,n){n===0&&(n=Ws()),e=wa(e,n),e!==null&&(ll(e,n),Fn(e))}function Ov(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),em(e,t)}function Cv(e,n){var t=0;switch(e.tag){case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(u(314))}a!==null&&a.delete(n),em(e,t)}function _v(e,n){return Yr(e,n)}var ur=null,Ba=null,Mu=!1,sr=!1,Ou=!1,ta=0;function Fn(e){e!==Ba&&e.next===null&&(Ba===null?ur=Ba=e:Ba=Ba.next=e),sr=!0,Mu||(Mu=!0,Uv())}function Vl(e,n){if(!Ou&&sr){Ou=!0;do for(var t=!1,a=ur;a!==null;){if(e!==0){var l=a.pendingLanes;if(l===0)var r=0;else{var c=a.suspendedLanes,d=a.pingedLanes;r=(1<<31-vn(42|e)+1)-1,r&=l&~(c&~d),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(t=!0,lm(a,r))}else r=ue,r=hi(a,a===je?r:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(r&3)===0||al(a,r)||(t=!0,lm(a,r));a=a.next}while(t);Ou=!1}}function qv(){nm()}function nm(){sr=Mu=!1;var e=0;ta!==0&&(Gv()&&(e=ta),ta=0);for(var n=Ln(),t=null,a=ur;a!==null;){var l=a.next,r=tm(a,n);r===0?(a.next=null,t===null?ur=l:t.next=l,l===null&&(Ba=t)):(t=a,(e!==0||(r&3)!==0)&&(sr=!0)),a=l}Vl(e)}function tm(e,n){for(var t=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var c=31-vn(r),d=1<<c,p=l[c];p===-1?((d&t)===0||(d&a)!==0)&&(l[c]=oh(d,n)):p<=n&&(e.expiredLanes|=d),r&=~d}if(n=je,t=ue,t=hi(e,e===n?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,t===0||e===n&&(ve===2||ve===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Fr(a),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||al(e,t)){if(n=t&-t,n===e.callbackPriority)return n;switch(a!==null&&Fr(a),Qr(t)){case 2:case 8:t=Qs;break;case 32:t=di;break;case 268435456:t=$s;break;default:t=di}return a=am.bind(null,e),t=Yr(t,a),e.callbackPriority=n,e.callbackNode=t,n}return a!==null&&a!==null&&Fr(a),e.callbackPriority=2,e.callbackNode=null,2}function am(e,n){if(Ie!==0&&Ie!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(or()&&e.callbackNode!==t)return null;var a=ue;return a=hi(e,e===je?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Hd(e,a,n),tm(e,Ln()),e.callbackNode!=null&&e.callbackNode===t?am.bind(null,e):null)}function lm(e,n){if(or())return null;Hd(e,n,!0)}function Uv(){Qv(function(){(he&6)!==0?Yr(Zs,qv):nm()})}function Cu(){return ta===0&&(ta=Xs()),ta}function im(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:wi(""+e)}function rm(e,n){var t=n.ownerDocument.createElement("input");return t.name=n.name,t.value=n.value,e.id&&t.setAttribute("form",e.id),n.parentNode.insertBefore(t,n),e=new FormData(e),t.parentNode.removeChild(t),e}function Nv(e,n,t,a,l){if(n==="submit"&&t&&t.stateNode===l){var r=im((l[un]||null).action),c=a.submitter;c&&(n=(n=c[un]||null)?im(n.formAction):c.getAttribute("formAction"),n!==null&&(r=n,c=null));var d=new zi("action","action",null,a,l);e.push({event:d,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ta!==0){var p=c?rm(l,c):new FormData(l);Io(t,{pending:!0,data:p,method:l.method,action:r},null,p)}}else typeof r=="function"&&(d.preventDefault(),p=c?rm(l,c):new FormData(l),Io(t,{pending:!0,data:p,method:l.method,action:r},r,p))},currentTarget:l}]})}}for(var _u=0;_u<bo.length;_u++){var qu=bo[_u],Lv=qu.toLowerCase(),Hv=qu[0].toUpperCase()+qu.slice(1);_n(Lv,"on"+Hv)}_n(Lc,"onAnimationEnd"),_n(Hc,"onAnimationIteration"),_n(Bc,"onAnimationStart"),_n("dblclick","onDoubleClick"),_n("focusin","onFocus"),_n("focusout","onBlur"),_n(tv,"onTransitionRun"),_n(av,"onTransitionStart"),_n(lv,"onTransitionCancel"),_n(Vc,"onTransitionEnd"),ca("onMouseEnter",["mouseout","mouseover"]),ca("onMouseLeave",["mouseout","mouseover"]),ca("onPointerEnter",["pointerout","pointerover"]),ca("onPointerLeave",["pointerout","pointerover"]),Bt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Bt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Bt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Bt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Bt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Bt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Yl));function om(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var a=e[t],l=a.event;a=a.listeners;e:{var r=void 0;if(n)for(var c=a.length-1;0<=c;c--){var d=a[c],p=d.instance,S=d.currentTarget;if(d=d.listener,p!==r&&l.isPropagationStopped())break e;r=d,l.currentTarget=S;try{r(l)}catch(j){Ki(j)}l.currentTarget=null,r=p}else for(c=0;c<a.length;c++){if(d=a[c],p=d.instance,S=d.currentTarget,d=d.listener,p!==r&&l.isPropagationStopped())break e;r=d,l.currentTarget=S;try{r(l)}catch(j){Ki(j)}l.currentTarget=null,r=p}}}}function le(e,n){var t=n[$r];t===void 0&&(t=n[$r]=new Set);var a=e+"__bubble";t.has(a)||(um(n,e,2,!1),t.add(a))}function Uu(e,n,t){var a=0;n&&(a|=4),um(t,e,a,n)}var cr="_reactListening"+Math.random().toString(36).slice(2);function Nu(e){if(!e[cr]){e[cr]=!0,ec.forEach(function(t){t!=="selectionchange"&&(Bv.has(t)||Uu(t,!1,e),Uu(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[cr]||(n[cr]=!0,Uu("selectionchange",!1,n))}}function um(e,n,t,a){switch(Om(n)){case 2:var l=mg;break;case 8:l=pg;break;default:l=Ju}t=l.bind(null,n,t,e),l=void 0,!lo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function Lu(e,n,t,a,l){var r=a;if((n&1)===0&&(n&2)===0&&a!==null)e:for(;;){if(a===null)return;var c=a.tag;if(c===3||c===4){var d=a.stateNode.containerInfo;if(d===l)break;if(c===4)for(c=a.return;c!==null;){var p=c.tag;if((p===3||p===4)&&c.stateNode.containerInfo===l)return;c=c.return}for(;d!==null;){if(c=oa(d),c===null)return;if(p=c.tag,p===5||p===6||p===26||p===27){a=r=c;continue e}d=d.parentNode}}a=a.return}pc(function(){var S=r,j=to(t),D=[];e:{var z=Yc.get(e);if(z!==void 0){var x=zi,$=e;switch(e){case"keypress":if(Ri(t)===0)break e;case"keydown":case"keyup":x=_h;break;case"focusin":$="focus",x=uo;break;case"focusout":$="blur",x=uo;break;case"beforeblur":case"afterblur":x=uo;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=gc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Rh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Nh;break;case Lc:case Hc:case Bc:x=xh;break;case Vc:x=Hh;break;case"scroll":case"scrollend":x=wh;break;case"wheel":x=Vh;break;case"copy":case"cut":case"paste":x=Eh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=yc;break;case"toggle":case"beforetoggle":x=Fh}var F=(n&4)!==0,Re=!F&&(e==="scroll"||e==="scrollend"),y=F?z!==null?z+"Capture":null:z;F=[];for(var v=S,R;v!==null;){var T=v;if(R=T.stateNode,T=T.tag,T!==5&&T!==26&&T!==27||R===null||y===null||(T=ol(v,y),T!=null&&F.push(Fl(v,T,R))),Re)break;v=v.return}0<F.length&&(z=new x(z,$,null,t,j),D.push({event:z,listeners:F}))}}if((n&7)===0){e:{if(z=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",z&&t!==no&&($=t.relatedTarget||t.fromElement)&&(oa($)||$[ra]))break e;if((x||z)&&(z=j.window===j?j:(z=j.ownerDocument)?z.defaultView||z.parentWindow:window,x?($=t.relatedTarget||t.toElement,x=S,$=$?oa($):null,$!==null&&(Re=m($),F=$.tag,$!==Re||F!==5&&F!==27&&F!==6)&&($=null)):(x=null,$=S),x!==$)){if(F=gc,T="onMouseLeave",y="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(F=yc,T="onPointerLeave",y="onPointerEnter",v="pointer"),Re=x==null?z:rl(x),R=$==null?z:rl($),z=new F(T,v+"leave",x,t,j),z.target=Re,z.relatedTarget=R,T=null,oa(j)===S&&(F=new F(y,v+"enter",$,t,j),F.target=R,F.relatedTarget=Re,T=F),Re=T,x&&$)n:{for(F=x,y=$,v=0,R=F;R;R=Va(R))v++;for(R=0,T=y;T;T=Va(T))R++;for(;0<v-R;)F=Va(F),v--;for(;0<R-v;)y=Va(y),R--;for(;v--;){if(F===y||y!==null&&F===y.alternate)break n;F=Va(F),y=Va(y)}F=null}else F=null;x!==null&&sm(D,z,x,F,!1),$!==null&&Re!==null&&sm(D,Re,$,F,!0)}}e:{if(z=S?rl(S):window,x=z.nodeName&&z.nodeName.toLowerCase(),x==="select"||x==="input"&&z.type==="file")var H=Ec;else if(xc(z))if(Ac)H=Ih;else{H=Jh;var ee=Kh}else x=z.nodeName,!x||x.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?S&&eo(S.elementType)&&(H=Ec):H=Ph;if(H&&(H=H(e,S))){jc(D,H,t,j);break e}ee&&ee(e,z,S),e==="focusout"&&S&&z.type==="number"&&S.memoizedProps.value!=null&&Ir(z,"number",z.value)}switch(ee=S?rl(S):window,e){case"focusin":(xc(ee)||ee.contentEditable==="true")&&(ga=ee,ho=S,hl=null);break;case"focusout":hl=ho=ga=null;break;case"mousedown":vo=!0;break;case"contextmenu":case"mouseup":case"dragend":vo=!1,Uc(D,t,j);break;case"selectionchange":if(nv)break;case"keydown":case"keyup":Uc(D,t,j)}var B;if(co)e:{switch(e){case"compositionstart":var G="onCompositionStart";break e;case"compositionend":G="onCompositionEnd";break e;case"compositionupdate":G="onCompositionUpdate";break e}G=void 0}else va?Sc(e,t)&&(G="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(G="onCompositionStart");G&&(wc&&t.locale!=="ko"&&(va||G!=="onCompositionStart"?G==="onCompositionEnd"&&va&&(B=hc()):(ct=j,io="value"in ct?ct.value:ct.textContent,va=!0)),ee=fr(S,G),0<ee.length&&(G=new bc(G,e,null,t,j),D.push({event:G,listeners:ee}),B?G.data=B:(B=zc(t),B!==null&&(G.data=B)))),(B=Zh?Qh(e,t):$h(e,t))&&(G=fr(S,"onBeforeInput"),0<G.length&&(ee=new bc("onBeforeInput","beforeinput",null,t,j),D.push({event:ee,listeners:G}),ee.data=B)),Nv(D,e,S,t,j)}om(D,n)})}function Fl(e,n,t){return{instance:e,listener:n,currentTarget:t}}function fr(e,n){for(var t=n+"Capture",a=[];e!==null;){var l=e,r=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||r===null||(l=ol(e,t),l!=null&&a.unshift(Fl(e,l,r)),l=ol(e,n),l!=null&&a.push(Fl(e,l,r))),e.tag===3)return a;e=e.return}return[]}function Va(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function sm(e,n,t,a,l){for(var r=n._reactName,c=[];t!==null&&t!==a;){var d=t,p=d.alternate,S=d.stateNode;if(d=d.tag,p!==null&&p===a)break;d!==5&&d!==26&&d!==27||S===null||(p=S,l?(S=ol(t,r),S!=null&&c.unshift(Fl(t,S,p))):l||(S=ol(t,r),S!=null&&c.push(Fl(t,S,p)))),t=t.return}c.length!==0&&e.push({event:n,listeners:c})}var Vv=/\r\n?/g,Yv=/\u0000|\uFFFD/g;function cm(e){return(typeof e=="string"?e:""+e).replace(Vv,`
`).replace(Yv,"")}function fm(e,n){return n=cm(n),cm(e)===n}function dr(){}function ke(e,n,t,a,l,r){switch(t){case"children":typeof a=="string"?n==="body"||n==="textarea"&&a===""||ma(e,a):(typeof a=="number"||typeof a=="bigint")&&n!=="body"&&ma(e,""+a);break;case"className":gi(e,"class",a);break;case"tabIndex":gi(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":gi(e,t,a);break;case"style":dc(e,a,r);break;case"data":if(n!=="object"){gi(e,"data",a);break}case"src":case"href":if(a===""&&(n!=="a"||t!=="href")){e.removeAttribute(t);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=wi(""+a),e.setAttribute(t,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(t==="formAction"?(n!=="input"&&ke(e,n,"name",l.name,l,null),ke(e,n,"formEncType",l.formEncType,l,null),ke(e,n,"formMethod",l.formMethod,l,null),ke(e,n,"formTarget",l.formTarget,l,null)):(ke(e,n,"encType",l.encType,l,null),ke(e,n,"method",l.method,l,null),ke(e,n,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=wi(""+a),e.setAttribute(t,a);break;case"onClick":a!=null&&(e.onclick=dr);break;case"onScroll":a!=null&&le("scroll",e);break;case"onScrollEnd":a!=null&&le("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(t=a.__html,t!=null){if(l.children!=null)throw Error(u(60));e.innerHTML=t}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}t=wi(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""+a):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":a===!0?e.setAttribute(t,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,a):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(t,a):e.removeAttribute(t);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(t):e.setAttribute(t,a);break;case"popover":le("beforetoggle",e),le("toggle",e),vi(e,"popover",a);break;case"xlinkActuate":Gn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Gn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Gn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Gn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Gn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Gn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Gn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Gn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Gn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":vi(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=bh.get(t)||t,vi(e,t,a))}}function Hu(e,n,t,a,l,r){switch(t){case"style":dc(e,a,r);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(t=a.__html,t!=null){if(l.children!=null)throw Error(u(60));e.innerHTML=t}}break;case"children":typeof a=="string"?ma(e,a):(typeof a=="number"||typeof a=="bigint")&&ma(e,""+a);break;case"onScroll":a!=null&&le("scroll",e);break;case"onScrollEnd":a!=null&&le("scrollend",e);break;case"onClick":a!=null&&(e.onclick=dr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!nc.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(l=t.endsWith("Capture"),n=t.slice(2,l?t.length-7:void 0),r=e[un]||null,r=r!=null?r[t]:null,typeof r=="function"&&e.removeEventListener(n,r,l),typeof a=="function")){typeof r!="function"&&r!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(n,a,l);break e}t in e?e[t]=a:a===!0?e.setAttribute(t,""):vi(e,t,a)}}}function en(e,n,t){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":le("error",e),le("load",e);var a=!1,l=!1,r;for(r in t)if(t.hasOwnProperty(r)){var c=t[r];if(c!=null)switch(r){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,n));default:ke(e,n,r,c,t,null)}}l&&ke(e,n,"srcSet",t.srcSet,t,null),a&&ke(e,n,"src",t.src,t,null);return;case"input":le("invalid",e);var d=r=c=l=null,p=null,S=null;for(a in t)if(t.hasOwnProperty(a)){var j=t[a];if(j!=null)switch(a){case"name":l=j;break;case"type":c=j;break;case"checked":p=j;break;case"defaultChecked":S=j;break;case"value":r=j;break;case"defaultValue":d=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(u(137,n));break;default:ke(e,n,a,j,t,null)}}uc(e,r,d,p,S,c,l,!1),bi(e);return;case"select":le("invalid",e),a=c=r=null;for(l in t)if(t.hasOwnProperty(l)&&(d=t[l],d!=null))switch(l){case"value":r=d;break;case"defaultValue":c=d;break;case"multiple":a=d;default:ke(e,n,l,d,t,null)}n=r,t=c,e.multiple=!!a,n!=null?da(e,!!a,n,!1):t!=null&&da(e,!!a,t,!0);return;case"textarea":le("invalid",e),r=l=a=null;for(c in t)if(t.hasOwnProperty(c)&&(d=t[c],d!=null))switch(c){case"value":a=d;break;case"defaultValue":l=d;break;case"children":r=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(u(91));break;default:ke(e,n,c,d,t,null)}cc(e,a,l,r),bi(e);return;case"option":for(p in t)if(t.hasOwnProperty(p)&&(a=t[p],a!=null))switch(p){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:ke(e,n,p,a,t,null)}return;case"dialog":le("beforetoggle",e),le("toggle",e),le("cancel",e),le("close",e);break;case"iframe":case"object":le("load",e);break;case"video":case"audio":for(a=0;a<Yl.length;a++)le(Yl[a],e);break;case"image":le("error",e),le("load",e);break;case"details":le("toggle",e);break;case"embed":case"source":case"link":le("error",e),le("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(S in t)if(t.hasOwnProperty(S)&&(a=t[S],a!=null))switch(S){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,n));default:ke(e,n,S,a,t,null)}return;default:if(eo(n)){for(j in t)t.hasOwnProperty(j)&&(a=t[j],a!==void 0&&Hu(e,n,j,a,t,void 0));return}}for(d in t)t.hasOwnProperty(d)&&(a=t[d],a!=null&&ke(e,n,d,a,t,null))}function Fv(e,n,t,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,r=null,c=null,d=null,p=null,S=null,j=null;for(x in t){var D=t[x];if(t.hasOwnProperty(x)&&D!=null)switch(x){case"checked":break;case"value":break;case"defaultValue":p=D;default:a.hasOwnProperty(x)||ke(e,n,x,null,a,D)}}for(var z in a){var x=a[z];if(D=t[z],a.hasOwnProperty(z)&&(x!=null||D!=null))switch(z){case"type":r=x;break;case"name":l=x;break;case"checked":S=x;break;case"defaultChecked":j=x;break;case"value":c=x;break;case"defaultValue":d=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(u(137,n));break;default:x!==D&&ke(e,n,z,x,a,D)}}Pr(e,c,d,p,S,j,r,l);return;case"select":x=c=d=z=null;for(r in t)if(p=t[r],t.hasOwnProperty(r)&&p!=null)switch(r){case"value":break;case"multiple":x=p;default:a.hasOwnProperty(r)||ke(e,n,r,null,a,p)}for(l in a)if(r=a[l],p=t[l],a.hasOwnProperty(l)&&(r!=null||p!=null))switch(l){case"value":z=r;break;case"defaultValue":d=r;break;case"multiple":c=r;default:r!==p&&ke(e,n,l,r,a,p)}n=d,t=c,a=x,z!=null?da(e,!!t,z,!1):!!a!=!!t&&(n!=null?da(e,!!t,n,!0):da(e,!!t,t?[]:"",!1));return;case"textarea":x=z=null;for(d in t)if(l=t[d],t.hasOwnProperty(d)&&l!=null&&!a.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:ke(e,n,d,null,a,l)}for(c in a)if(l=a[c],r=t[c],a.hasOwnProperty(c)&&(l!=null||r!=null))switch(c){case"value":z=l;break;case"defaultValue":x=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(u(91));break;default:l!==r&&ke(e,n,c,l,a,r)}sc(e,z,x);return;case"option":for(var $ in t)if(z=t[$],t.hasOwnProperty($)&&z!=null&&!a.hasOwnProperty($))switch($){case"selected":e.selected=!1;break;default:ke(e,n,$,null,a,z)}for(p in a)if(z=a[p],x=t[p],a.hasOwnProperty(p)&&z!==x&&(z!=null||x!=null))switch(p){case"selected":e.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:ke(e,n,p,z,a,x)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var F in t)z=t[F],t.hasOwnProperty(F)&&z!=null&&!a.hasOwnProperty(F)&&ke(e,n,F,null,a,z);for(S in a)if(z=a[S],x=t[S],a.hasOwnProperty(S)&&z!==x&&(z!=null||x!=null))switch(S){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(u(137,n));break;default:ke(e,n,S,z,a,x)}return;default:if(eo(n)){for(var Re in t)z=t[Re],t.hasOwnProperty(Re)&&z!==void 0&&!a.hasOwnProperty(Re)&&Hu(e,n,Re,void 0,a,z);for(j in a)z=a[j],x=t[j],!a.hasOwnProperty(j)||z===x||z===void 0&&x===void 0||Hu(e,n,j,z,a,x);return}}for(var y in t)z=t[y],t.hasOwnProperty(y)&&z!=null&&!a.hasOwnProperty(y)&&ke(e,n,y,null,a,z);for(D in a)z=a[D],x=t[D],!a.hasOwnProperty(D)||z===x||z==null&&x==null||ke(e,n,D,z,a,x)}var Bu=null,Vu=null;function mr(e){return e.nodeType===9?e:e.ownerDocument}function dm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function mm(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Yu(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Fu=null;function Gv(){var e=window.event;return e&&e.type==="popstate"?e===Fu?!1:(Fu=e,!0):(Fu=null,!1)}var pm=typeof setTimeout=="function"?setTimeout:void 0,Zv=typeof clearTimeout=="function"?clearTimeout:void 0,hm=typeof Promise=="function"?Promise:void 0,Qv=typeof queueMicrotask=="function"?queueMicrotask:typeof hm<"u"?function(e){return hm.resolve(null).then(e).catch($v)}:pm;function $v(e){setTimeout(function(){throw e})}function jt(e){return e==="head"}function vm(e,n){var t=n,a=0,l=0;do{var r=t.nextSibling;if(e.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(0<a&&8>a){t=a;var c=e.ownerDocument;if(t&1&&Gl(c.documentElement),t&2&&Gl(c.body),t&4)for(t=c.head,Gl(t),c=t.firstChild;c;){var d=c.nextSibling,p=c.nodeName;c[il]||p==="SCRIPT"||p==="STYLE"||p==="LINK"&&c.rel.toLowerCase()==="stylesheet"||t.removeChild(c),c=d}}if(l===0){e.removeChild(r),Pl(n);return}l--}else t==="$"||t==="$?"||t==="$!"?l++:a=t.charCodeAt(0)-48;else a=0;t=r}while(t);Pl(n)}function Gu(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var t=n;switch(n=n.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":Gu(t),Xr(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function Xv(e,n,t,a){for(;e.nodeType===1;){var l=t;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[il])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var r=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Un(e.nextSibling),e===null)break}return null}function Wv(e,n,t){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Un(e.nextSibling),e===null))return null;return e}function Zu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Kv(e,n){var t=e.ownerDocument;if(e.data!=="$?"||t.readyState==="complete")n();else{var a=function(){n(),t.removeEventListener("DOMContentLoaded",a)};t.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Un(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Qu=null;function gm(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}function bm(e,n,t){switch(n=mr(t),e){case"html":if(e=n.documentElement,!e)throw Error(u(452));return e;case"head":if(e=n.head,!e)throw Error(u(453));return e;case"body":if(e=n.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function Gl(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Xr(e)}var On=new Map,ym=new Set;function pr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var lt=q.d;q.d={f:Jv,r:Pv,D:Iv,C:eg,L:ng,m:tg,X:lg,S:ag,M:ig};function Jv(){var e=lt.f(),n=ir();return e||n}function Pv(e){var n=ua(e);n!==null&&n.tag===5&&n.type==="form"?Hf(n):lt.r(e)}var Ya=typeof document>"u"?null:document;function wm(e,n,t){var a=Ya;if(a&&typeof n=="string"&&n){var l=xn(n);l='link[rel="'+e+'"][href="'+l+'"]',typeof t=="string"&&(l+='[crossorigin="'+t+'"]'),ym.has(l)||(ym.add(l),e={rel:e,crossOrigin:t,href:n},a.querySelector(l)===null&&(n=a.createElement("link"),en(n,"link",e),Xe(n),a.head.appendChild(n)))}}function Iv(e){lt.D(e),wm("dns-prefetch",e,null)}function eg(e,n){lt.C(e,n),wm("preconnect",e,n)}function ng(e,n,t){lt.L(e,n,t);var a=Ya;if(a&&e&&n){var l='link[rel="preload"][as="'+xn(n)+'"]';n==="image"&&t&&t.imageSrcSet?(l+='[imagesrcset="'+xn(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(l+='[imagesizes="'+xn(t.imageSizes)+'"]')):l+='[href="'+xn(e)+'"]';var r=l;switch(n){case"style":r=Fa(e);break;case"script":r=Ga(e)}On.has(r)||(e=M({rel:"preload",href:n==="image"&&t&&t.imageSrcSet?void 0:e,as:n},t),On.set(r,e),a.querySelector(l)!==null||n==="style"&&a.querySelector(Zl(r))||n==="script"&&a.querySelector(Ql(r))||(n=a.createElement("link"),en(n,"link",e),Xe(n),a.head.appendChild(n)))}}function tg(e,n){lt.m(e,n);var t=Ya;if(t&&e){var a=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+xn(a)+'"][href="'+xn(e)+'"]',r=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Ga(e)}if(!On.has(r)&&(e=M({rel:"modulepreload",href:e},n),On.set(r,e),t.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Ql(r)))return}a=t.createElement("link"),en(a,"link",e),Xe(a),t.head.appendChild(a)}}}function ag(e,n,t){lt.S(e,n,t);var a=Ya;if(a&&e){var l=sa(a).hoistableStyles,r=Fa(e);n=n||"default";var c=l.get(r);if(!c){var d={loading:0,preload:null};if(c=a.querySelector(Zl(r)))d.loading=5;else{e=M({rel:"stylesheet",href:e,"data-precedence":n},t),(t=On.get(r))&&$u(e,t);var p=c=a.createElement("link");Xe(p),en(p,"link",e),p._p=new Promise(function(S,j){p.onload=S,p.onerror=j}),p.addEventListener("load",function(){d.loading|=1}),p.addEventListener("error",function(){d.loading|=2}),d.loading|=4,hr(c,n,a)}c={type:"stylesheet",instance:c,count:1,state:d},l.set(r,c)}}}function lg(e,n){lt.X(e,n);var t=Ya;if(t&&e){var a=sa(t).hoistableScripts,l=Ga(e),r=a.get(l);r||(r=t.querySelector(Ql(l)),r||(e=M({src:e,async:!0},n),(n=On.get(l))&&Xu(e,n),r=t.createElement("script"),Xe(r),en(r,"link",e),t.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(l,r))}}function ig(e,n){lt.M(e,n);var t=Ya;if(t&&e){var a=sa(t).hoistableScripts,l=Ga(e),r=a.get(l);r||(r=t.querySelector(Ql(l)),r||(e=M({src:e,async:!0,type:"module"},n),(n=On.get(l))&&Xu(e,n),r=t.createElement("script"),Xe(r),en(r,"link",e),t.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(l,r))}}function km(e,n,t,a){var l=(l=W.current)?pr(l):null;if(!l)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(n=Fa(t.href),t=sa(l).hoistableStyles,a=t.get(n),a||(a={type:"style",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=Fa(t.href);var r=sa(l).hoistableStyles,c=r.get(e);if(c||(l=l.ownerDocument||l,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,c),(r=l.querySelector(Zl(e)))&&!r._p&&(c.instance=r,c.state.loading=5),On.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},On.set(e,t),r||rg(l,e,t,c.state))),n&&a===null)throw Error(u(528,""));return c}if(n&&a!==null)throw Error(u(529,""));return null;case"script":return n=t.async,t=t.src,typeof t=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ga(t),t=sa(l).hoistableScripts,a=t.get(n),a||(a={type:"script",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function Fa(e){return'href="'+xn(e)+'"'}function Zl(e){return'link[rel="stylesheet"]['+e+"]"}function Rm(e){return M({},e,{"data-precedence":e.precedence,precedence:null})}function rg(e,n,t,a){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?a.loading=1:(n=e.createElement("link"),a.preload=n,n.addEventListener("load",function(){return a.loading|=1}),n.addEventListener("error",function(){return a.loading|=2}),en(n,"link",t),Xe(n),e.head.appendChild(n))}function Ga(e){return'[src="'+xn(e)+'"]'}function Ql(e){return"script[async]"+e}function Sm(e,n,t){if(n.count++,n.instance===null)switch(n.type){case"style":var a=e.querySelector('style[data-href~="'+xn(t.href)+'"]');if(a)return n.instance=a,Xe(a),a;var l=M({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Xe(a),en(a,"style",l),hr(a,t.precedence,e),n.instance=a;case"stylesheet":l=Fa(t.href);var r=e.querySelector(Zl(l));if(r)return n.state.loading|=4,n.instance=r,Xe(r),r;a=Rm(t),(l=On.get(l))&&$u(a,l),r=(e.ownerDocument||e).createElement("link"),Xe(r);var c=r;return c._p=new Promise(function(d,p){c.onload=d,c.onerror=p}),en(r,"link",a),n.state.loading|=4,hr(r,t.precedence,e),n.instance=r;case"script":return r=Ga(t.src),(l=e.querySelector(Ql(r)))?(n.instance=l,Xe(l),l):(a=t,(l=On.get(r))&&(a=M({},t),Xu(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),Xe(l),en(l,"link",a),e.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(u(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(a=n.instance,n.state.loading|=4,hr(a,t.precedence,e));return n.instance}function hr(e,n,t){for(var a=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,r=l,c=0;c<a.length;c++){var d=a[c];if(d.dataset.precedence===n)r=d;else if(r!==l)break}r?r.parentNode.insertBefore(e,r.nextSibling):(n=t.nodeType===9?t.head:t,n.insertBefore(e,n.firstChild))}function $u(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Xu(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var vr=null;function zm(e,n,t){if(vr===null){var a=new Map,l=vr=new Map;l.set(t,a)}else l=vr,a=l.get(t),a||(a=new Map,l.set(t,a));if(a.has(e))return a;for(a.set(e,null),t=t.getElementsByTagName(e),l=0;l<t.length;l++){var r=t[l];if(!(r[il]||r[an]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var c=r.getAttribute(n)||"";c=e+c;var d=a.get(c);d?d.push(r):a.set(c,[r])}}return a}function xm(e,n,t){e=e.ownerDocument||e,e.head.insertBefore(t,n==="title"?e.querySelector("head > title"):null)}function og(e,n,t){if(t===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function jm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var $l=null;function ug(){}function sg(e,n,t){if($l===null)throw Error(u(475));var a=$l;if(n.type==="stylesheet"&&(typeof t.media!="string"||matchMedia(t.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var l=Fa(t.href),r=e.querySelector(Zl(l));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=gr.bind(a),e.then(a,a)),n.state.loading|=4,n.instance=r,Xe(r);return}r=e.ownerDocument||e,t=Rm(t),(l=On.get(l))&&$u(t,l),r=r.createElement("link"),Xe(r);var c=r;c._p=new Promise(function(d,p){c.onload=d,c.onerror=p}),en(r,"link",t),n.instance=r}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(a.count++,n=gr.bind(a),e.addEventListener("load",n),e.addEventListener("error",n))}}function cg(){if($l===null)throw Error(u(475));var e=$l;return e.stylesheets&&e.count===0&&Wu(e,e.stylesheets),0<e.count?function(n){var t=setTimeout(function(){if(e.stylesheets&&Wu(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(t)}}:null}function gr(){if(this.count--,this.count===0){if(this.stylesheets)Wu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var br=null;function Wu(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,br=new Map,n.forEach(fg,e),br=null,gr.call(e))}function fg(e,n){if(!(n.state.loading&4)){var t=br.get(e);if(t)var a=t.get(null);else{t=new Map,br.set(e,t);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<l.length;r++){var c=l[r];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(t.set(c.dataset.precedence,c),a=c)}a&&t.set(null,a)}l=n.instance,c=l.getAttribute("data-precedence"),r=t.get(c)||a,r===a&&t.set(null,l),t.set(c,l),this.count++,a=gr.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),r?r.parentNode.insertBefore(l,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),n.state.loading|=4}}var Xl={$$typeof:se,Provider:null,Consumer:null,_currentValue:Q,_currentValue2:Q,_threadCount:0};function dg(e,n,t,a,l,r,c,d){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Gr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gr(0),this.hiddenUpdates=Gr(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=r,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=d,this.incompleteTransitions=new Map}function Em(e,n,t,a,l,r,c,d,p,S,j,D){return e=new dg(e,n,t,c,d,p,S,D),n=1,r===!0&&(n|=24),r=bn(3,null,null,n),e.current=r,r.stateNode=e,n=Do(),n.refCount++,e.pooledCache=n,n.refCount++,r.memoizedState={element:a,isDehydrated:t,cache:n},_o(r),e}function Am(e){return e?(e=ka,e):ka}function Tm(e,n,t,a,l,r){l=Am(l),a.context===null?a.context=l:a.pendingContext=l,a=mt(n),a.payload={element:t},r=r===void 0?null:r,r!==null&&(a.callback=r),t=pt(e,a,n),t!==null&&(Sn(t,e,n),zl(t,e,n))}function Dm(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Ku(e,n){Dm(e,n),(e=e.alternate)&&Dm(e,n)}function Mm(e){if(e.tag===13){var n=wa(e,67108864);n!==null&&Sn(n,e,67108864),Ku(e,67108864)}}var yr=!0;function mg(e,n,t,a){var l=E.T;E.T=null;var r=q.p;try{q.p=2,Ju(e,n,t,a)}finally{q.p=r,E.T=l}}function pg(e,n,t,a){var l=E.T;E.T=null;var r=q.p;try{q.p=8,Ju(e,n,t,a)}finally{q.p=r,E.T=l}}function Ju(e,n,t,a){if(yr){var l=Pu(a);if(l===null)Lu(e,n,a,wr,t),Cm(e,a);else if(vg(l,e,n,t,a))a.stopPropagation();else if(Cm(e,a),n&4&&-1<hg.indexOf(e)){for(;l!==null;){var r=ua(l);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var c=Ht(r.pendingLanes);if(c!==0){var d=r;for(d.pendingLanes|=2,d.entangledLanes|=2;c;){var p=1<<31-vn(c);d.entanglements[1]|=p,c&=~p}Fn(r),(he&6)===0&&(ar=Ln()+500,Vl(0))}}break;case 13:d=wa(r,2),d!==null&&Sn(d,r,2),ir(),Ku(r,2)}if(r=Pu(a),r===null&&Lu(e,n,a,wr,t),r===l)break;l=r}l!==null&&a.stopPropagation()}else Lu(e,n,a,null,t)}}function Pu(e){return e=to(e),Iu(e)}var wr=null;function Iu(e){if(wr=null,e=oa(e),e!==null){var n=m(e);if(n===null)e=null;else{var t=n.tag;if(t===13){if(e=g(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return wr=e,null}function Om(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(eh()){case Zs:return 2;case Qs:return 8;case di:case nh:return 32;case $s:return 268435456;default:return 32}default:return 32}}var es=!1,Et=null,At=null,Tt=null,Wl=new Map,Kl=new Map,Dt=[],hg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Cm(e,n){switch(e){case"focusin":case"focusout":Et=null;break;case"dragenter":case"dragleave":At=null;break;case"mouseover":case"mouseout":Tt=null;break;case"pointerover":case"pointerout":Wl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Kl.delete(n.pointerId)}}function Jl(e,n,t,a,l,r){return e===null||e.nativeEvent!==r?(e={blockedOn:n,domEventName:t,eventSystemFlags:a,nativeEvent:r,targetContainers:[l]},n!==null&&(n=ua(n),n!==null&&Mm(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function vg(e,n,t,a,l){switch(n){case"focusin":return Et=Jl(Et,e,n,t,a,l),!0;case"dragenter":return At=Jl(At,e,n,t,a,l),!0;case"mouseover":return Tt=Jl(Tt,e,n,t,a,l),!0;case"pointerover":var r=l.pointerId;return Wl.set(r,Jl(Wl.get(r)||null,e,n,t,a,l)),!0;case"gotpointercapture":return r=l.pointerId,Kl.set(r,Jl(Kl.get(r)||null,e,n,t,a,l)),!0}return!1}function _m(e){var n=oa(e.target);if(n!==null){var t=m(n);if(t!==null){if(n=t.tag,n===13){if(n=g(t),n!==null){e.blockedOn=n,sh(e.priority,function(){if(t.tag===13){var a=Rn();a=Zr(a);var l=wa(t,a);l!==null&&Sn(l,t,a),Ku(t,a)}});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Pu(e.nativeEvent);if(t===null){t=e.nativeEvent;var a=new t.constructor(t.type,t);no=a,t.target.dispatchEvent(a),no=null}else return n=ua(t),n!==null&&Mm(n),e.blockedOn=t,!1;n.shift()}return!0}function qm(e,n,t){kr(e)&&t.delete(n)}function gg(){es=!1,Et!==null&&kr(Et)&&(Et=null),At!==null&&kr(At)&&(At=null),Tt!==null&&kr(Tt)&&(Tt=null),Wl.forEach(qm),Kl.forEach(qm)}function Rr(e,n){e.blockedOn===n&&(e.blockedOn=null,es||(es=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,gg)))}var Sr=null;function Um(e){Sr!==e&&(Sr=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Sr===e&&(Sr=null);for(var n=0;n<e.length;n+=3){var t=e[n],a=e[n+1],l=e[n+2];if(typeof a!="function"){if(Iu(a||t)===null)continue;break}var r=ua(t);r!==null&&(e.splice(n,3),n-=3,Io(r,{pending:!0,data:l,method:t.method,action:a},a,l))}}))}function Pl(e){function n(p){return Rr(p,e)}Et!==null&&Rr(Et,e),At!==null&&Rr(At,e),Tt!==null&&Rr(Tt,e),Wl.forEach(n),Kl.forEach(n);for(var t=0;t<Dt.length;t++){var a=Dt[t];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Dt.length&&(t=Dt[0],t.blockedOn===null);)_m(t),t.blockedOn===null&&Dt.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(a=0;a<t.length;a+=3){var l=t[a],r=t[a+1],c=l[un]||null;if(typeof r=="function")c||Um(t);else if(c){var d=null;if(r&&r.hasAttribute("formAction")){if(l=r,c=r[un]||null)d=c.formAction;else if(Iu(l)!==null)continue}else d=c.action;typeof d=="function"?t[a+1]=d:(t.splice(a,3),a-=3),Um(t)}}}function ns(e){this._internalRoot=e}zr.prototype.render=ns.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(u(409));var t=n.current,a=Rn();Tm(t,a,e,n,null,null)},zr.prototype.unmount=ns.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Tm(e.current,2,null,e,null,null),ir(),n[ra]=null}};function zr(e){this._internalRoot=e}zr.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ps();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Dt.length&&n!==0&&n<Dt[t].priority;t++);Dt.splice(t,0,e),t===0&&_m(e)}};var Nm=i.version;if(Nm!=="19.1.0")throw Error(u(527,Nm,"19.1.0"));q.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=w(n),e=e!==null?b(e):null,e=e===null?null:e.stateNode,e};var bg={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:E,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xr.isDisabled&&xr.supportsFiber)try{tl=xr.inject(bg),hn=xr}catch{}}return ei.createRoot=function(e,n){if(!f(e))throw Error(u(299));var t=!1,a="",l=If,r=ed,c=nd,d=null;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(c=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(d=n.unstable_transitionCallbacks)),n=Em(e,1,!1,null,null,t,a,l,r,c,d,null),e[ra]=n.current,Nu(e),new ns(n)},ei.hydrateRoot=function(e,n,t){if(!f(e))throw Error(u(299));var a=!1,l="",r=If,c=ed,d=nd,p=null,S=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(p=t.unstable_transitionCallbacks),t.formState!==void 0&&(S=t.formState)),n=Em(e,1,!0,n,t??null,a,l,r,c,d,p,S),n.context=Am(null),t=n.current,a=Rn(),a=Zr(a),l=mt(a),l.callback=null,pt(t,l,a),t=a,n.current.lanes=t,ll(n,t),Fn(n),e[ra]=n.current,Nu(e),new zr(n)},ei.version="19.1.0",ei}var $m;function Dg(){if($m)return ls.exports;$m=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(i){console.error(i)}}return s(),ls.exports=Tg(),ls.exports}var Mg=Dg();const Og=Op(Mg);class Cg extends zs.Component{constructor(o){super(o);jr(this,"container");jr(this,"player",null);jr(this,"isLoading",!1);this.container=zs.createRef()}componentDidMount(){this.player=window.RufflePlayer.newest().createPlayer(),this.player.id="player",this.player.addEventListener("loadedmetadata",()=>{this.props.onLoadedMetadata&&this.props.onLoadedMetadata(this.player.ruffle().metadata)}),this.isLoading=!1,this.container.current.appendChild(this.player)}componentWillUnmount(){var o;(o=this.player)==null||o.remove(),this.player=null,this.isLoading=!1}render(){return N.jsx("div",{id:this.props.id,ref:this.container,onDragEnter:this.props.onDragEnter,onDragLeave:this.props.onDragLeave,onDragOver:this.props.onDragOver,onDrop:this.props.onDragDrop,children:this.props.children})}reload(){var o;this.isLoading||(this.isLoading=!0,(o=this.player)==null||o.ruffle().reload().finally(()=>{this.isLoading=!1}))}loadUrl(o,u){var f;this.isLoading||(this.isLoading=!0,(f=this.player)==null||f.ruffle().load({url:o,...this.props.baseConfig,...u}).finally(()=>{this.isLoading=!1}))}loadFile(o){this.isLoading||(this.isLoading=!0,new Response(o).arrayBuffer().then(u=>{var f;return(f=this.player)==null?void 0:f.ruffle().load({data:u,...this.props.baseConfig})}).finally(()=>{this.isLoading=!1}))}}const _g=""+new URL("../logo.svg",import.meta.url).href,Xm={Animation:"Animations",Game:"Games"};function qg({sampleSelectionInput:s,selectedSample:i,setSelectedSample:o,setSelectedFilename:u,onSelectUrl:f}){const[m,g]=nn.useState([]),k=b=>{const M=b.target,L=parseInt(M.value,10);m[L]&&w(m[L])},w=nn.useCallback(b=>{f(b.location,b.config??{}),o(b),u(null)},[f,u,o]);return nn.useEffect(()=>{(async()=>{const b=await fetch("swfs.json");if(b.ok){const M=await b.json();g(M.swfs),M.swfs.length>0&&w(M.swfs[0])}})()},[w]),N.jsxs("div",{id:"sample-swfs-container",className:m.length===0?"hidden":"",children:[N.jsx("span",{id:"sample-swfs-label",children:"Sample SWF:"}),N.jsxs("select",{id:"sample-swfs","aria-describedby":"sample-swfs-label",onChange:k,ref:s,children:[m.map((b,M)=>N.jsx(nn.Fragment,{children:b.type===null&&N.jsx("option",{value:M,children:b.title})},M)),Object.keys(Xm).map(b=>N.jsx("optgroup",{label:Xm[b],children:m.map((M,L)=>N.jsx(nn.Fragment,{children:M.type===b&&N.jsx("option",{value:L,children:M.title})},L))},b))]}),N.jsxs("div",{id:"author-container",className:i!=null&&i.author?"":"hidden",children:[N.jsx("span",{children:"Author: "}),N.jsx("a",{href:i==null?void 0:i.authorLink,target:"_blank",id:"author",children:i==null?void 0:i.author})]})]})}function Ug({allowUrlLoading:s,allowSampleSwfs:i,onToggleMetadata:o,onReloadMovie:u,onSelectUrl:f,onSelectFile:m,selectedFilename:g,setSelectedFilename:k,onFileDragLeave:w,onFileDragOver:b,onFileDragDrop:M}){const L=nn.useRef(null),Z=nn.useRef(null),J=nn.useRef(null),[I,ie]=nn.useState(null),re=()=>{var me;(me=L.current)==null||me.click()},Ue=me=>{f(me,{}),k(null),ie(null),J.current&&(J.current.selectedIndex=-1)},Me=me=>{m(me),ie(null),k(me.name),J.current&&(J.current.selectedIndex=-1)},se=me=>{var ye;me.preventDefault(),(ye=Z.current)!=null&&ye.value&&Ue(Z.current.value)},te=me=>{const ye=me.target;ye!=null&&ye.files&&(ye==null?void 0:ye.files.length)>0&&ye.files[0]&&Me(ye.files[0])},X=()=>{confirm("Reload the current SWF?")&&u()},Ne=navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPhone/i)||navigator.platform==="MacIntel"&&typeof navigator.standalone<"u";return nn.useEffect(()=>{g!==null&&(ie(null),J.current&&(J.current.selectedIndex=-1))},[g]),N.jsxs("div",{id:"nav",children:[N.jsx("a",{id:"logo-container",href:"https://ruffle.rs/",target:"_blank",children:N.jsx("img",{className:"logo",src:_g,alt:"Ruffle"})}),N.jsxs("div",{className:"select-container",children:[N.jsxs("form",{id:"web-url-container",onSubmit:se,hidden:!s,children:[N.jsx("input",{id:"web-url",name:"web-url",type:"text",placeholder:"URL of a .swf file on the web",ref:Z}),N.jsx("button",{id:"web-form-submit",type:"submit",children:"Load"})]}),N.jsxs("div",{id:"local-file-container",onDragLeave:w,onDragOver:b,onDrop:M,children:[N.jsx("span",{id:"local-file-static-label",onClick:re,children:"Local SWF:"}),N.jsx("input",{type:"file",accept:Ne?void 0:".swf,.spl",id:"local-file","aria-describedby":"local-file-static-label",ref:L,onChange:te}),N.jsx("button",{id:"local-file-label",onClick:re,children:"Select File"}),N.jsx("label",{id:"local-file-name",htmlFor:"local-file",children:g??"No file selected."})]}),i&&N.jsx(qg,{onSelectUrl:f,selectedSample:I,setSelectedFilename:k,setSelectedSample:ie,sampleSelectionInput:J})]}),N.jsxs("div",{children:[N.jsx("svg",{id:"toggle-info",width:"20px",viewBox:"0 0 416.979 416.979",onClick:o,children:N.jsx("path",{fill:"white",d:"M356.004 61.156c-81.37-81.47-213.377-81.551-294.848-.182-81.47 81.371-81.552 213.379-.181 294.85 81.369 81.47 213.378 81.551 294.849.181 81.469-81.369 81.551-213.379.18-294.849zM237.6 340.786a5.821 5.821 0 0 1-5.822 5.822h-46.576a5.821 5.821 0 0 1-5.822-5.822V167.885a5.821 5.821 0 0 1 5.822-5.822h46.576a5.82 5.82 0 0 1 5.822 5.822v172.901zm-29.11-202.885c-18.618 0-33.766-15.146-33.766-33.765 0-18.617 15.147-33.766 33.766-33.766s33.766 15.148 33.766 33.766c0 18.619-15.149 33.765-33.766 33.765z"})}),N.jsx("svg",{id:"reload-swf",width:"20px",viewBox:"0 0 489.711 489.711",onClick:X,children:N.jsx("path",{fill:"white",d:"M112.156 97.111c72.3-65.4 180.5-66.4 253.8-6.7l-58.1 2.2c-7.5.3-13.3 6.5-13 14 .3 7.3 6.3 13 13.5 13h.5l89.2-3.3c7.3-.3 13-6.2 13-13.5v-1.6l-3.3-88.2c-.3-7.5-6.6-13.3-14-13-7.5.3-13.3 6.5-13 14l2.1 55.3c-36.3-29.7-81-46.9-128.8-49.3-59.2-3-116.1 17.3-160 57.1-60.4 54.7-86 137.9-66.8 217.1 1.5 6.2 7 10.3 13.1 10.3 1.1 0 2.1-.1 3.2-.4 7.2-1.8 11.7-9.1 9.9-16.3-16.8-69.6 5.6-142.7 58.7-190.7zm350.3 98.4c-1.8-7.2-9.1-11.7-16.3-9.9-7.2 1.8-11.7 9.1-9.9 16.3 16.9 69.6-5.6 142.7-58.7 190.7-37.3 33.7-84.1 50.3-130.7 50.3-44.5 0-88.9-15.1-124.7-44.9l58.8-5.3c7.4-.7 12.9-7.2 12.2-14.7s-7.2-12.9-14.7-12.2l-88.9 8c-7.4.7-12.9 7.2-12.2 14.7l8 88.9c.6 7 6.5 12.3 13.4 12.3.4 0 .8 0 1.2-.1 7.4-.7 12.9-7.2 12.2-14.7l-4.8-54.1c36.3 29.4 80.8 46.5 128.3 48.9 3.8.2 7.6.3 11.3.3 55.1 0 107.5-20.2 148.7-57.4 60.4-54.7 86-137.8 66.8-217.1z"})})]})]})}const Ng={1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9.0",10:"10.0/10.1",11:"10.2",12:"10.3",13:"11.0",14:"11.1",15:"11.2",16:"11.3",17:"11.4",18:"11.5",19:"11.6",20:"11.7",21:"11.8",22:"11.9",23:"12",24:"13",25:"14",26:"15",27:"16",28:"17",29:"18",30:"19",31:"20",32:"21",33:"22",34:"23",35:"24",36:"25",37:"26",38:"27",39:"28",40:"29",41:"30",42:"31",43:"32"};function Lg({visible:s,metadata:i}){return N.jsxs("div",{id:"info-container",className:s?"":"hidden",children:[N.jsxs("div",{children:[N.jsx("span",{children:"Uncompressed Length"}),N.jsxs("span",{id:"uncompressedLength",children:[((i==null?void 0:i.uncompressedLength)??0)>>10,"Kb"]})]}),N.jsxs("div",{children:[N.jsx("span",{children:"SWF Version"}),N.jsx("span",{id:"swfVersion",children:i==null?void 0:i.swfVersion})]}),N.jsxs("div",{children:[N.jsx("span",{children:"FP Version"}),N.jsx("span",{id:"flashVersion",children:i?Ng[i.swfVersion]??"Unknown":""})]}),N.jsxs("div",{children:[N.jsx("span",{children:"ActionScript 3"}),N.jsx("span",{id:"isActionScript3",children:i!=null&&i.isActionScript3?"true":"false"})]}),N.jsxs("div",{children:[N.jsx("span",{children:"Total Frames"}),N.jsx("span",{id:"numFrames",children:i==null?void 0:i.numFrames})]}),N.jsxs("div",{children:[N.jsx("span",{children:"Frame Rate"}),N.jsx("span",{id:"frameRate",children:i==null?void 0:i.frameRate})]}),N.jsxs("div",{children:[N.jsx("span",{children:"SWF Width"}),N.jsx("span",{id:"width",children:i==null?void 0:i.width})]}),N.jsxs("div",{children:[N.jsx("span",{children:"SWF Height"}),N.jsx("span",{id:"height",children:i==null?void 0:i.height})]}),N.jsxs("div",{children:[N.jsx("span",{children:"SWF Background Color"}),N.jsx("span",{id:"backgroundColor",style:{backgroundColor:(i==null?void 0:i.backgroundColor)??void 0}})]})]})}function Hg({ruffleBaseConfig:s,allowUrlLoading:i,allowSampleSwfs:o}){const[u,f]=nn.useState(null),[m,g]=nn.useState(!1),[k,w]=nn.useState(null),[b,M]=nn.useState(!1),L=nn.useRef(null),Z=()=>{g(!m)},J=()=>{var te;(te=L.current)==null||te.reload()},I=nn.useCallback((te,X)=>{var Ne;(Ne=L.current)==null||Ne.loadUrl(te,X)},[]),ie=te=>{var X;(X=L.current)==null||X.loadFile(te)},re=te=>{te.stopPropagation(),te.preventDefault()},Ue=te=>{te.stopPropagation(),te.preventDefault(),M(!1)},Me=te=>{te.stopPropagation(),te.preventDefault(),M(!0)},se=te=>{var X;te.stopPropagation(),te.preventDefault(),M(!1),te.dataTransfer&&(w(te.dataTransfer.files[0].name),(X=L.current)==null||X.loadFile(te.dataTransfer.files[0]))};return N.jsxs(N.Fragment,{children:[N.jsx(Ug,{allowUrlLoading:i,allowSampleSwfs:o,onToggleMetadata:Z,onReloadMovie:J,onSelectUrl:I,onSelectFile:ie,selectedFilename:k,setSelectedFilename:w,onFileDragLeave:Ue,onFileDragOver:Me,onFileDragDrop:se}),N.jsxs("div",{id:"main",className:m?"info-container-shown":"",children:[N.jsx(Cg,{id:"player-container","aria-label":"Select a demo or drag an SWF",onLoadedMetadata:f,ref:L,onDragEnter:re,onDragLeave:Ue,onDragOver:Me,onDragDrop:se,baseConfig:s,children:N.jsx("div",{id:"overlay",className:b?"drag":""})}),N.jsx(Lg,{visible:m,metadata:u})]})]})}class $a{constructor(i,o,u,f,m){this.major=i,this.minor=o,this.patch=u,this.prIdent=f,this.buildIdent=m}static fromSemver(i){const o=i.split("+"),u=o[0].split("-"),f=u[0].split("."),m=parseInt(f[0],10);let g=0,k=0,w=null,b=null;return f[1]!==void 0&&(g=parseInt(f[1],10)),f[2]!==void 0&&(k=parseInt(f[2],10)),u[1]!==void 0&&(w=u[1].split(".")),o[1]!==void 0&&(b=o[1].split(".")),new $a(m,g,k,w,b)}isCompatibleWith(i){return this.major!==0&&this.major===i.major||this.major===0&&i.major===0&&this.minor!==0&&this.minor===i.minor||this.major===0&&i.major===0&&this.minor===0&&i.minor===0&&this.patch!==0&&this.patch===i.patch}hasPrecedenceOver(i){if(this.major>i.major)return!0;if(this.major<i.major)return!1;if(this.minor>i.minor)return!0;if(this.minor<i.minor)return!1;if(this.patch>i.patch)return!0;if(this.patch<i.patch)return!1;if(this.prIdent===null&&i.prIdent!==null)return!0;if(this.prIdent!==null&&i.prIdent===null)return!1;if(this.prIdent!==null&&i.prIdent!==null){const o=/^[0-9]*$/;for(let u=0;u<this.prIdent.length&&u<i.prIdent.length;u+=1){const f=o.test(i.prIdent[u]),m=o.test(this.prIdent[u]);if(!m&&f)return!0;if(m&&f){const g=parseInt(this.prIdent[u],10),k=parseInt(i.prIdent[u],10);if(g>k)return!0;if(g<k)return!1}else{if(m&&!f)return!1;if(!m&&!f){if(this.prIdent[u]>i.prIdent[u])return!0;if(this.prIdent[u]<i.prIdent[u])return!1}}}if(this.prIdent.length>i.prIdent.length)return!0;if(this.prIdent.length<i.prIdent.length)return!1}if(this.buildIdent!==null&&i.buildIdent===null)return!0;if(this.buildIdent===null&&i.buildIdent!==null)return!1;if(this.buildIdent!==null&&i.buildIdent!==null){const o=/^[0-9]*$/;for(let u=0;u<this.buildIdent.length&&u<i.buildIdent.length;u+=1){const f=o.test(this.buildIdent[u]),m=o.test(i.buildIdent[u]);if(!f&&m)return!0;if(f&&m){const g=parseInt(this.buildIdent[u],10),k=parseInt(i.buildIdent[u],10);if(g>k)return!0;if(g<k)return!1}else{if(f&&!m)return!1;if(!f&&!m){if(this.buildIdent[u]>i.buildIdent[u])return!0;if(this.buildIdent[u]<i.buildIdent[u])return!1}}}return this.buildIdent.length>i.buildIdent.length}return!1}isEqual(i){return this.major===i.major&&this.minor===i.minor&&this.patch===i.patch}isStableOrCompatiblePrerelease(i){return i.prIdent===null?!0:this.major===i.major&&this.minor===i.minor&&this.patch===i.patch}}class Bs{constructor(i){this.requirements=i}satisfiedBy(i){for(const o of this.requirements){let u=!0;for(const{comparator:f,version:m}of o)u=u&&m.isStableOrCompatiblePrerelease(i),f===""||f==="="?u=u&&m.isEqual(i):f===">"?u=u&&i.hasPrecedenceOver(m):f===">="?u=u&&(i.hasPrecedenceOver(m)||m.isEqual(i)):f==="<"?u=u&&m.hasPrecedenceOver(i):f==="<="?u=u&&(m.hasPrecedenceOver(i)||m.isEqual(i)):f==="^"&&(u=u&&m.isCompatibleWith(i));if(u)return!0}return!1}static fromRequirementString(i){const o=i.split(" ");let u=[];const f=[];for(const m of o)if(m==="||")u.length>0&&(f.push(u),u=[]);else if(m.length>0){const g=/[0-9]/.exec(m);if(g){const k=m.slice(0,g.index).trim(),w=$a.fromSemver(m.slice(g.index).trim());u.push({comparator:k,version:w})}}return u.length>0&&f.push(u),new Bs(f)}}class Wm{constructor(i){var o;this.sources=(i==null?void 0:i.sources)||{},this.config=(i==null?void 0:i.config)||{},this.invoked=(i==null?void 0:i.invoked)||!1,this.newestName=(i==null?void 0:i.newestName)||null,(o=i==null?void 0:i.superseded)==null||o.call(i),document.readyState==="loading"?document.addEventListener("readystatechange",this.init.bind(this)):window.setTimeout(this.init.bind(this),0)}get version(){return"0.1.0"}newestSourceName(){let i=null,o=$a.fromSemver("0.0.0");for(const u in this.sources)if(Object.prototype.hasOwnProperty.call(this.sources,u)){const f=$a.fromSemver(this.sources[u].version);f.hasPrecedenceOver(o)&&(i=u,o=f)}return i}init(){if(!this.invoked){if(this.invoked=!0,this.newestName=this.newestSourceName(),this.newestName===null)throw new Error("No registered Ruffle source!");("polyfills"in this.config?this.config.polyfills:!0)!==!1&&this.sources[this.newestName].polyfill()}}newest(){const i=this.newestSourceName();return i!==null?this.sources[i]:null}satisfying(i){const o=Bs.fromRequirementString(i);let u=null;for(const f in this.sources)if(Object.prototype.hasOwnProperty.call(this.sources,f)){const m=$a.fromSemver(this.sources[f].version);o.satisfiedBy(m)&&(u=this.sources[f])}return u}localCompatible(){return this.sources.local!==void 0?this.satisfying("^"+this.sources.local.version):this.newest()}local(){return this.sources.local!==void 0?this.satisfying("="+this.sources.local.version):this.newest()}superseded(){this.invoked=!0}}const Cn={versionNumber:"0.2.0-nightly.2025.7.6",versionName:"0.2.0-nightly.2025.7.6",versionChannel:"nightly",buildDate:"2025-07-06T00:08:34.102Z",commitHash:"7c21c6891e4b0a3bfee31b00b9cbc65af7f7da78"};var Xa;(function(s){s[s.HaveNothing=0]="HaveNothing",s[s.Loading=1]="Loading",s[s.Loaded=2]="Loaded"})(Xa||(Xa={}));var Za={},Er={},aa={},us={},Km;function Bg(){return Km||(Km=1,Object.defineProperty(us,"__esModule",{value:!0})),us}var ss={},Jm;function Vg(){return Jm||(Jm=1,Object.defineProperty(ss,"__esModule",{value:!0})),ss}var cs={},Pm;function Yg(){return Pm||(Pm=1,Object.defineProperty(cs,"__esModule",{value:!0})),cs}var fs={},Im;function Fg(){return Im||(Im=1,Object.defineProperty(fs,"__esModule",{value:!0})),fs}var ds={},ep;function Gg(){return ep||(ep=1,Object.defineProperty(ds,"__esModule",{value:!0})),ds}var Ar={},np;function Zg(){if(np)return Ar;np=1,Object.defineProperty(Ar,"__esModule",{value:!0}),Ar.classnames=m;const s=g=>Object.entries(g).map(([k,w])=>w&&k),i=g=>!!g,o=(g,k,w)=>w.indexOf(g)===k,u=[];function f(g){return g?typeof g=="string"?[g]:Array.isArray(g)?g.flatMap(f).filter(i):s(g).filter(i):u}function m(g){const k=f(g).filter(o);return k.length>0?k.join(" "):void 0}return Ar}var tp;function Qg(){return tp||(tp=1,function(s){var i=aa&&aa.__createBinding||(Object.create?function(u,f,m,g){g===void 0&&(g=m);var k=Object.getOwnPropertyDescriptor(f,m);(!k||("get"in k?!f.__esModule:k.writable||k.configurable))&&(k={enumerable:!0,get:function(){return f[m]}}),Object.defineProperty(u,g,k)}:function(u,f,m,g){g===void 0&&(g=m),u[g]=f[m]}),o=aa&&aa.__exportStar||function(u,f){for(var m in u)m!=="default"&&!Object.prototype.hasOwnProperty.call(f,m)&&i(f,u,m)};Object.defineProperty(s,"__esModule",{value:!0}),o(Bg(),s),o(Vg(),s),o(Yg(),s),o(Fg(),s),o(Gg(),s),o(Zg(),s)}(aa)),aa}var ap;function Cp(){if(ap)return Er;ap=1,Object.defineProperty(Er,"__esModule",{value:!0}),Er.setAttributes=u;const s=Qg();function i(f,m){for(const g of Object.keys(f))g in m&&(m[g]=f[g])}const o=new RegExp("^on\\p{Lu}","u");function u(f,m){for(const g of Object.keys(m)){if(g==="__source"||g==="__self"||g==="tsxTag")continue;const k=m[g];if(g==="class"){const w=(0,s.classnames)(k);w&&f.setAttribute(g,w)}else if(g==="ref")k.current=f;else if(o.test(g)){const w=g.replace(/Capture$/,""),b=g!==w,M=w.toLowerCase().substring(2);f.addEventListener(M,k,b)}else g==="style"&&typeof k!="string"?i(k,f.style):g==="dangerouslySetInnerHTML"?f.innerHTML=k:k===!0?f.setAttribute(g,g):(k||k===0||k==="")&&f.setAttribute(g,k.toString())}}return Er}var Qa={},lp;function _p(){if(lp)return Qa;lp=1,Object.defineProperty(Qa,"__esModule",{value:!0}),Qa.applyChildren=i,Qa.createDomElement=o,Qa.applyTsxTag=u;function s(f,m){m instanceof Element?f.appendChild(m):typeof m=="string"||typeof m=="number"?f.appendChild(document.createTextNode(m.toString())):console.warn("Unknown type to append: ",m)}function i(f,m){for(const g of m)!g&&g!==0||(Array.isArray(g)?i(f,g):s(f,g))}function o(f,m){const g=m!=null&&m.is?{is:m.is}:void 0;return m!=null&&m.xmlns?document.createElementNS(m.xmlns,f,g):document.createElement(f,g)}function u(f,m){let g=f,k=m;return k&&"tsxTag"in k&&(g=k.tsxTag,!k.is&&f.includes("-")&&(k={...k,is:f})),{finalTag:g,finalAttrs:k}}return Qa}var ip;function Vs(){if(ip)return Za;ip=1,Object.defineProperty(Za,"__esModule",{value:!0}),Za.jsx=o,Za.jsxs=o,Za.jsxDEV=o;const s=Cp(),i=_p();function o(u,f){if(typeof u=="function")return u(f);const{children:m,...g}=f,{finalTag:k,finalAttrs:w}=(0,i.applyTsxTag)(u,g),b=(0,i.createDomElement)(k,w);return(0,s.setAttributes)(b,w),(0,i.applyChildren)(b,[m]),b}return Za}var A=Vs(),Pa;(function(s){s.On="on",s.Off="off",s.Auto="auto"})(Pa||(Pa={}));var Ur;(function(s){s.Off="off",s.Fullscreen="fullscreen",s.On="on"})(Ur||(Ur={}));var ui;(function(s){s.Visible="visible",s.Hidden="hidden"})(ui||(ui={}));var Nr;(function(s){s.Error="error",s.Warn="warn",s.Info="info",s.Debug="debug",s.Trace="trace"})(Nr||(Nr={}));var Lr;(function(s){s.Window="window",s.Opaque="opaque",s.Transparent="transparent",s.Direct="direct",s.Gpu="gpu"})(Lr||(Lr={}));var Hr;(function(s){s.WebGpu="webgpu",s.WgpuWebgl="wgpu-webgl",s.Webgl="webgl",s.Canvas="canvas"})(Hr||(Hr={}));var Wa;(function(s){s.On="on",s.RightClickOnly="rightClickOnly",s.Off="off"})(Wa||(Wa={}));var xs;(function(s){s.AIR="air",s.FlashPlayer="flashPlayer"})(xs||(xs={}));var js;(function(s){s.Allow="allow",s.Confirm="confirm",s.Deny="deny"})(js||(js={}));var Es;(function(s){s.All="all",s.Internal="internal",s.None="none"})(Es||(Es={}));var As;(function(s){s.Always="always",s.Never="never",s.Smart="smart"})(As||(As={}));var rp;(function(s){s.South="south",s.East="east",s.North="north",s.West="west",s.LeftTrigger="left-trigger",s.LeftTrigger2="left-trigger-2",s.RightTrigger="right-trigger",s.RightTrigger2="right-trigger-2",s.Select="select",s.Start="start",s.DPadUp="dpad-up",s.DPadDown="dpad-down",s.DPadLeft="dpad-left",s.DPadRight="dpad-right"})(rp||(rp={}));const $g={allowScriptAccess:!1,parameters:{},autoplay:Pa.Auto,backgroundColor:null,letterbox:Ur.Fullscreen,unmuteOverlay:ui.Visible,upgradeToHttps:!0,compatibilityRules:!0,favorFlash:!0,warnOnUnsupportedContent:!0,logLevel:Nr.Error,showSwfDownload:!1,contextMenu:Wa.On,preloader:!0,splashScreen:!0,maxExecutionDuration:15,base:null,menu:!0,allowFullscreen:!1,salign:"",fullScreenAspectRatio:"",forceAlign:!1,quality:null,scale:"showAll",forceScale:!1,frameRate:null,wmode:Lr.Window,publicPath:null,polyfills:!0,playerVersion:null,preferredRenderer:null,openUrlMode:js.Allow,allowNetworking:Es.All,openInNewTab:null,socketProxy:[],fontSources:[],defaultFonts:{},credentialAllowList:[],playerRuntime:xs.FlashPlayer,gamepadButtonMapping:{},urlRewriteRules:[],scrollingBehavior:As.Smart},Xg=`:host{all:initial;pointer-events:inherit;--ruffle-blue:#37528c;--ruffle-orange:#ffad33;display:inline-block;font-family:Arial,sans-serif;height:400px;letter-spacing:.4px;position:relative;touch-action:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:550px;-webkit-tap-highlight-color:transparent}:host(:-webkit-full-screen){display:block;height:100%!important;width:100%!important}.hidden{display:none!important}#container,#message-overlay,#panic,#play-button,#splash-screen,#unmute-overlay,#unmute-overlay .background{inset:0;position:absolute}#container{outline:none;overflow:hidden}#container canvas{height:100%;width:100%}#play-button,#unmute-overlay{cursor:pointer;display:none}#unmute-overlay .background{background:#000;opacity:.7}#play-button .icon,#unmute-overlay .icon{height:50%;left:50%;max-height:384px;max-width:384px;opacity:.8;position:absolute;top:50%;transform:translate(-50%,-50%);width:50%}#play-button:hover .icon,#unmute-overlay:hover .icon{opacity:1}#unmute-overlay-svg{scale:.8}#panic{background:linear-gradient(180deg,#fd3a40,#fda138);color:#fff;display:flex;flex-flow:column;font-size:20px;justify-content:space-around;overflow:auto;text-align:center}#panic a{color:var(--ruffle-blue);font-weight:700}#panic-title{font-size:xxx-large;font-weight:700}#panic-body.details{flex:0.9;margin:0 10px}#panic-body textarea{height:100%;resize:none;width:100%}#panic ul{display:flex;justify-content:space-evenly;list-style-type:none;padding:0}#message-overlay{align-items:center;background:var(--ruffle-blue);color:var(--ruffle-orange);display:flex;justify-content:center;opacity:1;overflow:auto;position:absolute;z-index:2}#message-overlay .message{font-size:20px;max-height:100%;max-width:100%;padding:5%;text-align:center}#message-overlay p{margin:.5em 0}#message-overlay .message div{-moz-column-gap:1em;column-gap:1em;display:flex;flex-wrap:wrap;justify-content:center}#message-overlay a,#message-overlay button{background:var(--ruffle-blue);border:2px solid var(--ruffle-orange);border-radius:.6em;color:var(--ruffle-orange);cursor:pointer;font-size:1.25em;font-weight:700;margin:2% 0;padding:10px;text-decoration:none}#message-overlay a:hover,#message-overlay button:hover{background:#ffffff4c}#continue-btn{background:var(--ruffle-blue);border:2px solid var(--ruffle-orange);border-radius:20px;color:var(--ruffle-orange);cursor:pointer;font-size:20px;font-weight:700;padding:10px}#continue-btn:hover{background:#ffffff4c}#context-menu-overlay,.modal{height:100%;position:absolute;width:100%;z-index:1}#context-menu{background-color:var(--modal-background);border:1px solid gray;box-shadow:0 5px 10px -5px #000;color:rgb(var(--modal-foreground-rgb));font-size:14px;list-style:none;margin:0;padding:3px 0;position:absolute;text-align:start;white-space:nowrap}#context-menu .menu-item{color:rgb(var(--modal-foreground-rgb));padding:5px 10px}#context-menu .menu-item.disabled{color:rgb(var(--modal-foreground-rgb),.5);cursor:default}#context-menu .menu-item:not(.disabled):hover{background-color:rgb(var(--modal-foreground-rgb),.15)}#context-menu .menu-separator hr{border:none;border-bottom:1px solid rgb(var(--modal-foreground-rgb),.2);margin:3px}#splash-screen{align-items:center;background:var(
        --splash-screen-background,var(--preloader-background,var(--ruffle-blue))
    );display:flex;flex-direction:column;justify-content:center}.loadbar{background:#253559;height:20%;max-height:10px;max-width:316px;width:100%}.loadbar-inner{background:var(--ruffle-orange);height:100%;max-width:100%;width:0}.logo{display:var(--logo-display,block);max-height:150px;max-width:380px}.loading-animation{aspect-ratio:1;margin-bottom:2%;max-height:28px;max-width:28px;width:10%}.spinner{stroke-dasharray:180;stroke-dashoffset:135;stroke:var(--ruffle-orange);animation:a 1.5s linear infinite;transform-origin:50% 50%}@keyframes a{to{transform:rotate(1turn)}}#virtual-keyboard{height:1px;opacity:0;position:absolute;top:-100px;width:1px}.modal{background-color:#0008}.modal-area{background-color:var(--modal-background);border-radius:12px;box-shadow:0 2px 6px 0 #0008;color:rgb(var(--modal-foreground-rgb));left:50%;padding:8px 12px;position:relative;transform:translateX(-50%);width:-moz-fit-content;width:fit-content}#modal-area{height:300px;width:450px}.close-modal{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 -960 960 960'%3E%3Cpath d='M480-392 300-212q-18 18-44 18t-44-18-18-44 18-44l180-180-180-180q-18-18-18-44t18-44 44-18 44 18l180 180 180-180q18-18 44-18t44 18 18 44-18 44L568-480l180 180q18 18 18 44t-18 44-44 18-44-18z'/%3E%3C/svg%3E");cursor:pointer;filter:var(--modal-foreground-filter);height:16px;width:16px}.modal-button{background-color:rgb(var(--modal-foreground-rgb),.2);border-radius:6px;color:rgb(var(--modal-foreground-rgb));cursor:pointer;display:inline-block;padding:4px 8px;text-decoration:none}:not(#volume-controls)>.close-modal{position:absolute;right:16px;top:14px}.general-save-options{border-bottom:2px solid rgb(var(--modal-foreground-rgb),.3);padding-bottom:8px;text-align:center}#local-saves{border-collapse:collapse;color:inherit;display:block;height:calc(100% - 45px);min-height:30px;overflow-y:auto}#local-saves td{border-bottom:2px solid rgb(var(--modal-foreground-rgb),.15);height:30px}#local-saves td:first-child{width:100%;word-break:break-all}.save-option{cursor:pointer;display:inline-block;filter:var(--modal-foreground-filter);height:24px;opacity:.4;vertical-align:middle;width:24px}#local-saves>tr:hover .save-option{opacity:1}#download-save{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 -960 960 960'%3E%3Cpath d='M480-337q-8 0-15-2.5t-13-8.5L308-492q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T365-549l75 75v-286q0-17 11.5-28.5T480-800t28.5 11.5T520-760v286l75-75q12-12 28.5-11.5T652-548q11 12 11.5 28T652-492L508-348q-6 6-13 8.5t-15 2.5M240-160q-33 0-56.5-23.5T160-240v-80q0-17 11.5-28.5T200-360t28.5 11.5T240-320v80h480v-80q0-17 11.5-28.5T760-360t28.5 11.5T800-320v80q0 33-23.5 56.5T720-160z'/%3E%3C/svg%3E")}#replace-save{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 -1080 960 1200'%3E%3Cpath d='M440-367v127q0 17 11.5 28.5T480-200t28.5-11.5T520-240v-127l36 36q6 6 13.5 9t15 2.5T599-323t13-9q11-12 11.5-28T612-388L508-492q-6-6-13-8.5t-15-2.5-15 2.5-13 8.5L348-388q-12 12-11.5 28t12.5 28q12 11 28 11.5t28-11.5zM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v447q0 33-23.5 56.5T720-80zm280-560q0 17 11.5 28.5T560-600h160L520-800z'/%3E%3C/svg%3E")}#delete-save{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 -1020 960 1080'%3E%3Cpath d='M280-120q-33 0-56.5-23.5T200-200v-520q-17 0-28.5-11.5T160-760t11.5-28.5T200-800h160q0-17 11.5-28.5T400-840h160q17 0 28.5 11.5T600-800h160q17 0 28.5 11.5T800-760t-11.5 28.5T760-720v520q0 33-23.5 56.5T680-120zm120-160q17 0 28.5-11.5T440-320v-280q0-17-11.5-28.5T400-640t-28.5 11.5T360-600v280q0 17 11.5 28.5T400-280m160 0q17 0 28.5-11.5T600-320v-280q0-17-11.5-28.5T560-640t-28.5 11.5T520-600v280q0 17 11.5 28.5T560-280'/%3E%3C/svg%3E")}.replace-save{display:none}#video-modal .modal-area{box-sizing:border-box;height:95%;width:95%}#video-holder{box-sizing:border-box;height:100%;padding:36px 4px 6px}#video-holder video{background-color:#000;height:100%;width:100%}#volume-controls{align-items:center;display:flex;gap:6px}#mute-checkbox{display:none}label[for=mute-checkbox]{cursor:pointer;filter:var(--modal-foreground-filter);height:24px;line-height:0;width:24px}#volume-mute{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 -960 960 960'%3E%3Cpath d='m719.13-419.35-71.67 71.68Q634.78-335 617.13-335t-30.33-12.67q-12.67-12.68-12.67-30.33t12.67-30.33L658.48-480l-71.68-71.67q-12.67-12.68-12.67-30.33t12.67-30.33Q599.48-625 617.13-625t30.33 12.67l71.67 71.68 71.67-71.68Q803.48-625 821.13-625t30.33 12.67q12.67 12.68 12.67 30.33t-12.67 30.33L779.78-480l71.68 71.67q12.67 12.68 12.67 30.33t-12.67 30.33Q838.78-335 821.13-335t-30.33-12.67zM278-357.87H161.22q-17.66 0-30.33-12.67-12.67-12.68-12.67-30.33v-158.26q0-17.65 12.67-30.33 12.67-12.67 30.33-12.67H278l130.15-129.91q20.63-20.63 46.98-9.45 26.35 11.19 26.35 39.77v443.44q0 28.58-26.35 39.77-26.35 11.18-46.98-9.45z'/%3E%3C/svg%3E")}#volume-min{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='161 -960 960 960'%3E%3Cpath d='M438.65-357.87H321.87q-17.65 0-30.33-12.67-12.67-12.68-12.67-30.33v-158.26q0-17.65 12.67-30.33 12.68-12.67 30.33-12.67h116.78L568.8-732.04q20.63-20.63 46.98-9.45 26.35 11.19 26.35 39.77v443.44q0 28.58-26.35 39.77-26.35 11.18-46.98-9.45z'/%3E%3C/svg%3E")}#volume-mid{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='80 -960 960 960'%3E%3Cpath d='M357.98-357.87H241.2q-17.66 0-30.33-12.67-12.67-12.68-12.67-30.33v-158.26q0-17.65 12.67-30.33 12.67-12.67 30.33-12.67h116.78L487.65-731.8q20.63-20.64 47.1-9.57t26.47 39.65v443.44q0 28.58-26.47 39.65t-47.1-9.57zM741.8-480q0 42.48-20.47 80.09-20.48 37.61-54.94 60.82-10.22 5.98-20.19.25-9.98-5.73-9.98-17.44v-248.44q0-11.71 9.98-17.32 9.97-5.61 20.19.37 34.46 23.71 54.94 61.45Q741.8-522.48 741.8-480'/%3E%3C/svg%3E")}#volume-max{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='9 -960 960 960'%3E%3Cpath d='M754.22-480.5q0-78.52-41.88-143.9t-111.91-98.62q-14.47-6.74-20.47-20.96t-.53-28.93q5.74-15.72 20.34-22.46t29.58 0q92.48 42.46 147.97 127.05 55.48 84.6 55.48 187.82t-55.48 187.82q-55.49 84.59-147.97 127.05-14.98 6.74-29.58 0t-20.34-22.46q-5.47-14.71.53-28.93t20.47-20.96q70.03-33.24 111.91-98.62t41.88-143.9M286.98-357.87H170.2q-17.66 0-30.33-12.67-12.67-12.68-12.67-30.33v-158.26q0-17.65 12.67-30.33 12.67-12.67 30.33-12.67h116.78L416.65-731.8q20.63-20.64 47.1-9.57t26.47 39.65v443.44q0 28.58-26.47 39.65t-47.1-9.57zM670.8-480q0 42.48-20.47 80.09-20.48 37.61-54.94 60.82-10.22 5.98-20.19.25-9.98-5.73-9.98-17.44v-248.44q0-11.71 9.98-17.32 9.97-5.61 20.19.37 34.46 23.71 54.94 61.45Q670.8-522.48 670.8-480'/%3E%3C/svg%3E")}#volume-slider-text{text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:4.8ch}#hardware-acceleration-modal .modal-area{box-sizing:border-box;padding:16px 48px;text-align:center;width:95%}#acceleration-text{display:block;margin-bottom:8px}#clipboard-modal h2{margin-right:36px;margin-top:4px}#clipboard-modal p:last-child{margin-bottom:2px}@media (prefers-color-scheme:light){:host{--modal-background:#fafafa;--modal-foreground-rgb:0,0,0;--modal-foreground-filter:none}}@media (prefers-color-scheme:dark){:host{--modal-background:#282828;--modal-foreground-rgb:221,221,221;--modal-foreground-filter:invert(90%)}}`;function Wg(){return A.jsx("style",{children:Xg})}function Kg(){return A.jsx("style",{id:"dynamic-styles"})}function Jg(){return A.jsxs("div",{id:"container",children:[A.jsx("div",{id:"play-button",children:A.jsx("div",{class:"icon",children:A.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",viewBox:"0 0 250 250",width:"100%",height:"100%",children:[A.jsxs("defs",{xmlns:"http://www.w3.org/2000/svg",children:[A.jsxs("linearGradient",{xmlns:"http://www.w3.org/2000/svg",id:"a",gradientUnits:"userSpaceOnUse",x1:"125",y1:"0",x2:"125",y2:"250",spreadMethod:"pad",children:[A.jsx("stop",{xmlns:"http://www.w3.org/2000/svg",offset:"0%","stop-color":"#FDA138"}),A.jsx("stop",{xmlns:"http://www.w3.org/2000/svg",offset:"100%","stop-color":"#FD3A40"})]}),A.jsxs("g",{xmlns:"http://www.w3.org/2000/svg",id:"b",children:[A.jsx("path",{xmlns:"http://www.w3.org/2000/svg",fill:"url(#a)",d:"M250 125q0-52-37-88-36-37-88-37T37 37Q0 73 0 125t37 88q36 37 88 37t88-37q37-36 37-88M87 195V55l100 70-100 70z"}),A.jsx("path",{xmlns:"http://www.w3.org/2000/svg",fill:"#FFF",d:"M87 55v140l100-70L87 55z"})]})]}),A.jsx("use",{xmlns:"http://www.w3.org/2000/svg",href:"#b"})]})})}),A.jsxs("div",{id:"unmute-overlay",children:[A.jsx("div",{class:"background"}),A.jsx("div",{class:"icon",children:A.jsxs("svg",{id:"unmute-overlay-svg",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",viewBox:"0 0 512 584",width:"100%",height:"100%",children:[A.jsx("path",{xmlns:"http://www.w3.org/2000/svg",fill:"#FFF",stroke:"#FFF",d:"m457.941 256 47.029-47.029c9.372-9.373 9.372-24.568 0-33.941-9.373-9.373-24.568-9.373-33.941 0l-47.029 47.029-47.029-47.029c-9.373-9.373-24.568-9.373-33.941 0-9.372 9.373-9.372 24.568 0 33.941l47.029 47.029-47.029 47.029c-9.372 9.373-9.372 24.568 0 33.941 4.686 4.687 10.827 7.03 16.97 7.03s12.284-2.343 16.971-7.029l47.029-47.03 47.029 47.029c4.687 4.687 10.828 7.03 16.971 7.03s12.284-2.343 16.971-7.029c9.372-9.373 9.372-24.568 0-33.941z"}),A.jsx("path",{xmlns:"http://www.w3.org/2000/svg",fill:"#FFF",stroke:"#FFF",d:"m99 160h-55c-24.301 0-44 19.699-44 44v104c0 24.301 19.699 44 44 44h55c2.761 0 5-2.239 5-5v-182c0-2.761-2.239-5-5-5z"}),A.jsx("path",{xmlns:"http://www.w3.org/2000/svg",fill:"#FFF",stroke:"#FFF",d:"m280 56h-24c-5.269 0-10.392 1.734-14.578 4.935l-103.459 79.116c-1.237.946-1.963 2.414-1.963 3.972v223.955c0 1.557.726 3.026 1.963 3.972l103.459 79.115c4.186 3.201 9.309 4.936 14.579 4.936h23.999c13.255 0 24-10.745 24-24v-352.001c0-13.255-10.745-24-24-24z"}),A.jsx("text",{xmlns:"http://www.w3.org/2000/svg",id:"unmute-text",x:"256",y:"560","text-anchor":"middle","font-size":"60px",fill:"#FFF",stroke:"#FFF",children:"Click to unmute"})]})})]}),A.jsx("input",{"aria-hidden":"true",id:"virtual-keyboard",type:"text",autocomplete:"off",autocorrect:"off",autocapitalize:"none"})]})}function Pg(){return A.jsxs("div",{id:"splash-screen",class:"hidden",children:[A.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",class:"logo",preserveAspectRatio:"xMidYMid",viewBox:"0 0 380 150",children:A.jsxs("g",{xmlns:"http://www.w3.org/2000/svg",children:[A.jsx("path",{xmlns:"http://www.w3.org/2000/svg",fill:"#966214",d:"M58.75 85.6q.75-.1 1.5-.35.85-.25 1.65-.75.55-.35 1.05-.8.5-.45.95-1 .5-.5.75-1.2-.05.05-.15.1-.1.15-.25.25l-.1.2q-.15.05-.25.1-.4 0-.8.05-.5-.25-.9-.5-.3-.1-.55-.3l-.6-.6-4.25-6.45-1.5 11.25h3.45m83.15-.2h3.45q.75-.1 1.5-.35.25-.05.45-.15.35-.15.65-.3l.5-.3q.25-.15.5-.35.45-.35.9-.75.45-.35.75-.85l.1-.1q.1-.2.2-.35.2-.3.35-.6l-.3.4-.15.15q-.5.15-1.1.1-.25 0-.4-.05-.5-.15-.8-.4-.15-.1-.25-.25-.3-.3-.55-.6l-.05-.05v-.05l-4.25-6.4-1.5 11.25m-21.15-3.95q-.3-.3-.55-.6l-.05-.05v-.05l-4.25-6.4-1.5 11.25h3.45q.75-.1 1.5-.35.85-.25 1.6-.75.75-.5 1.4-1.1.45-.35.75-.85.35-.5.65-1.05l-.45.55q-.5.15-1.1.1-.9 0-1.45-.7m59.15.3q-.75-.5-1.4-1-3.15-2.55-3.5-6.4l-1.5 11.25h21q-3.1-.25-5.7-.75-5.6-1.05-8.9-3.1m94.2 3.85h3.45q.6-.1 1.2-.3.4-.1.75-.2.35-.15.65-.3.7-.35 1.35-.8.75-.55 1.3-1.25.1-.15.25-.3-2.55-.25-3.25-1.8l-4.2-6.3-1.5 11.25m-45.3-4.85q-.5-.4-.9-.8-2.3-2.35-2.6-5.6l-1.5 11.25h21q-11.25-.95-16-4.85m97.7 4.85q-.3-.05-.6-.05-10.8-1-15.4-4.8-3.15-2.55-3.5-6.35l-1.5 11.2h21Z"}),A.jsx("path",{xmlns:"http://www.w3.org/2000/svg",fill:"var(--ruffle-orange)",d:"M92.6 54.8q-1.95-1.4-4.5-1.4H60.35q-1.35 0-2.6.45-1.65.55-3.15 1.8-2.75 2.25-3.25 5.25l-1.65 12h.05v.3l5.85 1.15h-9.5q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45-.5.3-.95.7-.45.35-.85.8-.35.4-.65.85-.3.45-.5.9-.15.45-.3.95l-5.85 41.6H50.3l5-35.5 1.5-11.25 4.25 6.45.6.6q.25.2.55.3.4.25.9.5.4-.05.8-.05.1-.05.25-.1l.1-.2q.15-.1.25-.25.1-.05.15-.1l.3-1.05 1.75-12.3h11.15L75.8 82.6h16.5l2.3-16.25h-.05l.8-5.7q.4-2.45-1-4.2-.35-.4-.75-.8-.25-.25-.55-.5-.2-.2-.45-.35m16.2 18.1h.05l-.05.3 5.85 1.15H105.2q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45-.5.3-1 .65-.4.4-.8.85-.25.3-.55.65-.05.1-.15.2-.25.45-.4.9-.2.45-.3.95-.1.65-.2 1.25-.2 1.15-.4 2.25l-4.3 30.6q-.25 3 1.75 5.25 1.6 1.8 4 2.15.6.1 1.25.1h27.35q3.25 0 6-2.25.35-.35.7-.55l.3-.2q2-2 2.25-4.5l1.65-11.6q.05-.05.1-.05l1.65-11.35h.05l.7-5.2 1.5-11.25 4.25 6.4v.05l.05.05q.25.3.55.6.1.15.25.25.3.25.8.4.15.05.4.05.6.05 1.1-.1l.15-.15.3-.4.3-1.05 1.3-9.05h-.05l.7-5.05h-.05l.15-1.25h-.05l1.65-11.7h-16.25l-2.65 19.5h.05v.2l-.05.1h.05l5.8 1.15H132.7q-.5.05-1 .15-.5.15-1 .35-.15.05-.3.15-.3.1-.55.25-.05 0-.1.05-.5.3-1 .65-.4.35-.7.7-.55.7-.95 1.45-.35.65-.55 1.4-.15.7-.25 1.4v.05q-.15 1.05-.35 2.05l-1.2 8.75v.1l-2.1 14.7H111.4l2.25-15.55h.05l.7-5.2 1.5-11.25 4.25 6.4v.05l.05.05q.25.3.55.6.55.7 1.45.7.6.05 1.1-.1l.45-.55.3-1.05 1.3-9.05h-.05l.7-5.05h-.05l.15-1.25h-.05l1.65-11.7h-16.25l-2.65 19.5m106.5-41.75q-2.25-2.25-5.5-2.25h-27.75q-3 0-5.75 2.25-1.3.95-2.05 2.1-.45.6-.7 1.2-.2.5-.35 1-.1.45-.15.95l-4.15 29.95h-.05l-.7 5.2h-.05l-.2 1.35h.05l-.05.3 5.85 1.15h-9.45q-2.1.05-3.95 1.6-1.9 1.55-2.25 3.55l-.5 3.5h-.05l-5.3 38.1h16.25l5-35.5 1.5-11.25q.35 3.85 3.5 6.4.65.5 1.4 1 3.3 2.05 8.9 3.1 2.6.5 5.7.75l1.75-11.25h-12.2l.4-2.95h-.05l.7-5.05h-.05q.1-.9.3-1.9.1-.75.2-1.6.85-5.9 2.15-14.9 0-.15.05-.25l.1-.9q.2-1.55.45-3.15h11.25l-3.1 20.8h16.5l4.1-28.05q.15-1.7-.4-3.15-.5-1.1-1.35-2.1m46.65 44.15q-.5.3-1 .65-.4.4-.8.85-.35.4-.7.85-.25.45-.45.9-.15.45-.3.95l-5.85 41.6h16.25l5-35.5 1.5-11.25 4.2 6.3q.7 1.55 3.25 1.8l.05-.1q.25-.4.35-.85l.3-1.05 1.8-14.05v-.05l5.35-37.45h-16.25l-6.15 44.3 5.85 1.15h-9.45q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45m5.4-38.9q.15-1.7-.4-3.15-.5-1.1-1.35-2.1-2.25-2.25-5.5-2.25h-27.75q-2.3 0-4.45 1.35-.65.35-1.3.9-1.3.95-2.05 2.1-.45.6-.7 1.2-.4.9-.5 1.95l-4.15 29.95h-.05l-.7 5.2h-.05l-.2 1.35h.05l-.05.3 5.85 1.15h-9.45q-2.1.05-3.95 1.6-1.9 1.55-2.25 3.55l-.5 3.5h-.05l-1.2 8.75v.1l-4.1 29.25h16.25l5-35.5 1.5-11.25q.3 3.25 2.6 5.6.4.4.9.8 4.75 3.9 16 4.85l1.75-11.25h-12.2l.4-2.95h-.05l.7-5.05h-.05q.15-.9.3-1.9.1-.75.25-1.6.15-1.25.35-2.65v-.05q.95-6.7 2.35-16.5h11.25l-3.1 20.8h16.5l4.1-28.05M345 66.35h-.05l1.15-8.2q.5-3-1.75-5.25-1.25-1.25-3-1.75-1-.5-2.25-.5h-27.95q-.65 0-1.3.1-2.5.35-4.7 2.15-2.75 2.25-3.25 5.25l-1.95 14.7v.05l-.05.3 5.85 1.15h-9.45q-1.9.05-3.6 1.35-.2.1-.35.25-1.9 1.55-2.25 3.55l-4.85 34.1q-.25 3 1.75 5.25 1.25 1.4 3 1.95 1.05.3 2.25.3H320q3.25 0 6-2.25 2.75-2 3.25-5l2.75-18.5h-16.5l-1.75 11H302.5l2.1-14.75h.05l.85-6 1.5-11.2q.35 3.8 3.5 6.35 4.6 3.8 15.4 4.8.3 0 .6.05h15.75L345 66.35m-16.4-.95-1.25 8.95h-11.3l.4-2.95h-.05l.7-5.05h-.1l.15-.95h11.45Z"})]})}),A.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",class:"loading-animation",viewBox:"0 0 66 66",children:A.jsx("circle",{xmlns:"http://www.w3.org/2000/svg",class:"spinner",fill:"none","stroke-width":"6","stroke-linecap":"round",cx:"33",cy:"33",r:"30"})}),A.jsx("div",{class:"loadbar",children:A.jsx("div",{class:"loadbar-inner"})})]})}function Ig(){return A.jsx("div",{id:"save-manager",class:"modal hidden",children:A.jsxs("div",{id:"modal-area",class:"modal-area",children:[A.jsx("span",{class:"close-modal"}),A.jsx("div",{class:"general-save-options",children:A.jsx("span",{class:"modal-button"})}),A.jsx("table",{id:"local-saves"})]})})}class Ka{constructor(i){this.value=i}valueOf(){return this.value}}class Fe extends Ka{constructor(i="???"){super(i)}toString(i){return`{${this.value}}`}}class it extends Ka{constructor(i,o={}){super(i),this.opts=o}toString(i){if(i)try{return i.memoizeIntlObject(Intl.NumberFormat,this.opts).format(this.value)}catch(o){i.reportError(o)}return this.value.toString(10)}}class Lt extends Ka{static supportsValue(i){if(typeof i=="number"||i instanceof Date)return!0;if(i instanceof Ka)return Lt.supportsValue(i.valueOf());if("Temporal"in globalThis){const o=globalThis.Temporal;if(i instanceof o.Instant||i instanceof o.PlainDateTime||i instanceof o.PlainDate||i instanceof o.PlainMonthDay||i instanceof o.PlainTime||i instanceof o.PlainYearMonth)return!0}return!1}constructor(i,o={}){i instanceof Lt?(o={...i.opts,...o},i=i.value):i instanceof Ka&&(i=i.valueOf()),typeof i=="object"&&"calendarId"in i&&o.calendar===void 0&&(o={...o,calendar:i.calendarId}),super(i),this.opts=o}[Symbol.toPrimitive](i){return i==="string"?this.toString():this.toNumber()}toNumber(){const i=this.value;if(typeof i=="number")return i;if(i instanceof Date)return i.getTime();if("epochMilliseconds"in i)return i.epochMilliseconds;if("toZonedDateTime"in i)return i.toZonedDateTime("UTC").epochMilliseconds;throw new TypeError("Unwrapping a non-number value as a number")}toString(i){if(i)try{return i.memoizeIntlObject(Intl.DateTimeFormat,this.opts).format(this.value)}catch(o){i.reportError(o)}return typeof this.value=="number"||this.value instanceof Date?new Date(this.value).toISOString():this.value.toString()}}const op=100,eb="⁨",nb="⁩";function tb(s,i,o){if(o===i||o instanceof it&&i instanceof it&&o.value===i.value)return!0;if(i instanceof it&&typeof o=="string"){let u=s.memoizeIntlObject(Intl.PluralRules,i.opts).select(i.value);if(o===u)return!0}return!1}function up(s,i,o){return i[o]?Ia(s,i[o].value):(s.reportError(new RangeError("No default")),new Fe)}function Ts(s,i){const o=[],u=Object.create(null);for(const f of i)f.type==="narg"?u[f.name]=si(s,f.value):o.push(si(s,f));return{positional:o,named:u}}function si(s,i){switch(i.type){case"str":return i.value;case"num":return new it(i.value,{minimumFractionDigits:i.precision});case"var":return ab(s,i);case"mesg":return lb(s,i);case"term":return ib(s,i);case"func":return rb(s,i);case"select":return ob(s,i);default:return new Fe}}function ab(s,{name:i}){let o;if(s.params)if(Object.prototype.hasOwnProperty.call(s.params,i))o=s.params[i];else return new Fe(`$${i}`);else if(s.args&&Object.prototype.hasOwnProperty.call(s.args,i))o=s.args[i];else return s.reportError(new ReferenceError(`Unknown variable: $${i}`)),new Fe(`$${i}`);if(o instanceof Ka)return o;switch(typeof o){case"string":return o;case"number":return new it(o);case"object":if(Lt.supportsValue(o))return new Lt(o);default:return s.reportError(new TypeError(`Variable type not supported: $${i}, ${typeof o}`)),new Fe(`$${i}`)}}function lb(s,{name:i,attr:o}){const u=s.bundle._messages.get(i);if(!u)return s.reportError(new ReferenceError(`Unknown message: ${i}`)),new Fe(i);if(o){const f=u.attributes[o];return f?Ia(s,f):(s.reportError(new ReferenceError(`Unknown attribute: ${o}`)),new Fe(`${i}.${o}`))}return u.value?Ia(s,u.value):(s.reportError(new ReferenceError(`No value: ${i}`)),new Fe(i))}function ib(s,{name:i,attr:o,args:u}){const f=`-${i}`,m=s.bundle._terms.get(f);if(!m)return s.reportError(new ReferenceError(`Unknown term: ${f}`)),new Fe(f);if(o){const k=m.attributes[o];if(k){s.params=Ts(s,u).named;const w=Ia(s,k);return s.params=null,w}return s.reportError(new ReferenceError(`Unknown attribute: ${o}`)),new Fe(`${f}.${o}`)}s.params=Ts(s,u).named;const g=Ia(s,m.value);return s.params=null,g}function rb(s,{name:i,args:o}){let u=s.bundle._functions[i];if(!u)return s.reportError(new ReferenceError(`Unknown function: ${i}()`)),new Fe(`${i}()`);if(typeof u!="function")return s.reportError(new TypeError(`Function ${i}() is not callable`)),new Fe(`${i}()`);try{let f=Ts(s,o);return u(f.positional,f.named)}catch(f){return s.reportError(f),new Fe(`${i}()`)}}function ob(s,{selector:i,variants:o,star:u}){let f=si(s,i);if(f instanceof Fe)return up(s,o,u);for(const m of o){const g=si(s,m.key);if(tb(s,f,g))return Ia(s,m.value)}return up(s,o,u)}function qp(s,i){if(s.dirty.has(i))return s.reportError(new RangeError("Cyclic reference")),new Fe;s.dirty.add(i);const o=[],u=s.bundle._useIsolating&&i.length>1;for(const f of i){if(typeof f=="string"){o.push(s.bundle._transform(f));continue}if(s.placeables++,s.placeables>op)throw s.dirty.delete(i),new RangeError(`Too many placeables expanded: ${s.placeables}, max allowed is ${op}`);u&&o.push(eb),o.push(si(s,f).toString(s)),u&&o.push(nb)}return s.dirty.delete(i),o.join("")}function Ia(s,i){return typeof i=="string"?s.bundle._transform(i):qp(s,i)}class ub{constructor(i,o,u){this.dirty=new WeakSet,this.params=null,this.placeables=0,this.bundle=i,this.errors=o,this.args=u}reportError(i){if(!this.errors||!(i instanceof Error))throw i;this.errors.push(i)}memoizeIntlObject(i,o){let u=this.bundle._intls.get(i);u||(u={},this.bundle._intls.set(i,u));let f=JSON.stringify(o);return u[f]||(u[f]=new i(this.bundle.locales,o)),u[f]}}function Ds(s,i){const o=Object.create(null);for(const[u,f]of Object.entries(s))i.includes(u)&&(o[u]=f.valueOf());return o}const sp=["unitDisplay","currencyDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits"];function sb(s,i){let o=s[0];if(o instanceof Fe)return new Fe(`NUMBER(${o.valueOf()})`);if(o instanceof it)return new it(o.valueOf(),{...o.opts,...Ds(i,sp)});if(o instanceof Lt)return new it(o.toNumber(),{...Ds(i,sp)});throw new TypeError("Invalid argument to NUMBER")}const cb=["dateStyle","timeStyle","fractionalSecondDigits","dayPeriod","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName"];function fb(s,i){let o=s[0];if(o instanceof Fe)return new Fe(`DATETIME(${o.valueOf()})`);if(o instanceof Lt||o instanceof it)return new Lt(o,Ds(i,cb));throw new TypeError("Invalid argument to DATETIME")}const cp=new Map;function db(s){const i=Array.isArray(s)?s.join(" "):s;let o=cp.get(i);return o===void 0&&(o=new Map,cp.set(i,o)),o}class mb{constructor(i,{functions:o,useIsolating:u=!0,transform:f=m=>m}={}){this._terms=new Map,this._messages=new Map,this.locales=Array.isArray(i)?i:[i],this._functions={NUMBER:sb,DATETIME:fb,...o},this._useIsolating=u,this._transform=f,this._intls=db(i)}hasMessage(i){return this._messages.has(i)}getMessage(i){return this._messages.get(i)}addResource(i,{allowOverrides:o=!1}={}){const u=[];for(let f=0;f<i.body.length;f++){let m=i.body[f];if(m.id.startsWith("-")){if(o===!1&&this._terms.has(m.id)){u.push(new Error(`Attempt to override an existing term: "${m.id}"`));continue}this._terms.set(m.id,m)}else{if(o===!1&&this._messages.has(m.id)){u.push(new Error(`Attempt to override an existing message: "${m.id}"`));continue}this._messages.set(m.id,m)}}return u}formatPattern(i,o=null,u=null){if(typeof i=="string")return this._transform(i);let f=new ub(this,u,o);try{return qp(f,i).toString(f)}catch(m){if(f.errors&&m instanceof Error)return f.errors.push(m),new Fe().toString(f);throw m}}}const ms=/^(-?[a-zA-Z][\w-]*) *= */gm,fp=/\.([a-zA-Z][\w-]*) *= */y,pb=/\*?\[/y,ps=/(-?[0-9]+(?:\.([0-9]+))?)/y,hb=/([a-zA-Z][\w-]*)/y,dp=/([$-])?([a-zA-Z][\w-]*)(?:\.([a-zA-Z][\w-]*))?/y,vb=/^[A-Z][A-Z0-9_-]*$/,Tr=/([^{}\n\r]+)/y,gb=/([^\\"\n\r]*)/y,mp=/\\([\\"])/y,pp=/\\u([a-fA-F0-9]{4})|\\U([a-fA-F0-9]{6})/y,bb=/^\n+/,hp=/ +$/,yb=/ *\r?\n/g,wb=/( *)$/,kb=/{\s*/y,vp=/\s*}/y,Rb=/\[\s*/y,Sb=/\s*] */y,zb=/\s*\(\s*/y,xb=/\s*->\s*/y,jb=/\s*:\s*/y,Eb=/\s*,?\s*/y,Ab=/\s+/y;class Tb{constructor(i){this.body=[],ms.lastIndex=0;let o=0;for(;;){let C=ms.exec(i);if(C===null)break;o=ms.lastIndex;try{this.body.push(w(C[1]))}catch(V){if(V instanceof SyntaxError)continue;throw V}}function u(C){return C.lastIndex=o,C.test(i)}function f(C,V){if(i[o]===C)return o++,!0;if(V)throw new V(`Expected ${C}`);return!1}function m(C,V){if(u(C))return o=C.lastIndex,!0;if(V)throw new V(`Expected ${C.toString()}`);return!1}function g(C){C.lastIndex=o;let V=C.exec(i);if(V===null)throw new SyntaxError(`Expected ${C.toString()}`);return o=C.lastIndex,V}function k(C){return g(C)[1]}function w(C){let V=M(),oe=b();if(V===null&&Object.keys(oe).length===0)throw new SyntaxError("Expected message value or attributes");return{id:C,value:V,attributes:oe}}function b(){let C=Object.create(null);for(;u(fp);){let V=k(fp),oe=M();if(oe===null)throw new SyntaxError("Expected attribute value");C[V]=oe}return C}function M(){let C;if(u(Tr)&&(C=k(Tr)),i[o]==="{"||i[o]==="}")return L(C?[C]:[],1/0);let V=Ne();return V?C?L([C,V],V.length):(V.value=me(V.value,bb),L([V],V.length)):C?me(C,hp):null}function L(C=[],V){for(;;){if(u(Tr)){C.push(k(Tr));continue}if(i[o]==="{"){C.push(Z());continue}if(i[o]==="}")throw new SyntaxError("Unbalanced closing brace");let $e=Ne();if($e){C.push($e),V=Math.min(V,$e.length);continue}break}let oe=C.length-1,Ae=C[oe];typeof Ae=="string"&&(C[oe]=me(Ae,hp));let mn=[];for(let $e of C)$e instanceof gp&&($e=$e.value.slice(0,$e.value.length-V)),$e&&mn.push($e);return mn}function Z(){m(kb,SyntaxError);let C=J();if(m(vp))return C;if(m(xb)){let V=re();return m(vp,SyntaxError),{type:"select",selector:C,...V}}throw new SyntaxError("Unclosed placeable")}function J(){if(i[o]==="{")return Z();if(u(dp)){let[,C,V,oe=null]=g(dp);if(C==="$")return{type:"var",name:V};if(m(zb)){let Ae=I();if(C==="-")return{type:"term",name:V,attr:oe,args:Ae};if(vb.test(V))return{type:"func",name:V,args:Ae};throw new SyntaxError("Function names must be all upper-case")}return C==="-"?{type:"term",name:V,attr:oe,args:[]}:{type:"mesg",name:V,attr:oe}}return Me()}function I(){let C=[];for(;;){switch(i[o]){case")":return o++,C;case void 0:throw new SyntaxError("Unclosed argument list")}C.push(ie()),m(Eb)}}function ie(){let C=J();return C.type!=="mesg"?C:m(jb)?{type:"narg",name:C.name,value:Me()}:C}function re(){let C=[],V=0,oe;for(;u(pb);){f("*")&&(oe=V);let Ae=Ue(),mn=M();if(mn===null)throw new SyntaxError("Expected variant value");C[V++]={key:Ae,value:mn}}if(V===0)return null;if(oe===void 0)throw new SyntaxError("Expected default variant");return{variants:C,star:oe}}function Ue(){m(Rb,SyntaxError);let C;return u(ps)?C=se():C={type:"str",value:k(hb)},m(Sb,SyntaxError),C}function Me(){if(u(ps))return se();if(i[o]==='"')return te();throw new SyntaxError("Invalid expression")}function se(){let[,C,V=""]=g(ps),oe=V.length;return{type:"num",value:parseFloat(C),precision:oe}}function te(){f('"',SyntaxError);let C="";for(;;){if(C+=k(gb),i[o]==="\\"){C+=X();continue}if(f('"'))return{type:"str",value:C};throw new SyntaxError("Unclosed string literal")}}function X(){if(u(mp))return k(mp);if(u(pp)){let[,C,V]=g(pp),oe=parseInt(C||V,16);return oe<=55295||57344<=oe?String.fromCodePoint(oe):"�"}throw new SyntaxError("Unknown escape sequence")}function Ne(){let C=o;switch(m(Ab),i[o]){case".":case"[":case"*":case"}":case void 0:return!1;case"{":return ye(i.slice(C,o))}return i[o-1]===" "?ye(i.slice(C,o)):!1}function me(C,V){return C.replace(V,"")}function ye(C){let V=C.replace(yb,`
`),oe=wb.exec(C)[1].length;return new gp(V,oe)}}}class gp{constructor(i,o){this.value=i,this.length=o}}const Db="([a-z]{2,3}|\\*)",Mb="(?:-([a-z]{4}|\\*))",Ob="(?:-([a-z]{2}|\\*))",Cb="(?:-(([0-9][a-z0-9]{3}|[a-z0-9]{5,8})|\\*))",_b=new RegExp(`^${Db}${Mb}?${Ob}?${Cb}?$`,"i");class li{constructor(i){const o=_b.exec(i.replace(/_/g,"-"));if(!o){this.isWellFormed=!1;return}let[,u,f,m,g]=o;u&&(this.language=u.toLowerCase()),f&&(this.script=f[0].toUpperCase()+f.slice(1)),m&&(this.region=m.toUpperCase()),this.variant=g,this.isWellFormed=!0}isEqual(i){return this.language===i.language&&this.script===i.script&&this.region===i.region&&this.variant===i.variant}matches(i,o=!1,u=!1){return(this.language===i.language||o&&this.language===void 0||u&&i.language===void 0)&&(this.script===i.script||o&&this.script===void 0||u&&i.script===void 0)&&(this.region===i.region||o&&this.region===void 0||u&&i.region===void 0)&&(this.variant===i.variant||o&&this.variant===void 0||u&&i.variant===void 0)}toString(){return[this.language,this.script,this.region,this.variant].filter(i=>i!==void 0).join("-")}clearVariants(){this.variant=void 0}clearRegion(){this.region=void 0}addLikelySubtags(){const i=Ub(this.toString().toLowerCase());return i?(this.language=i.language,this.script=i.script,this.region=i.region,this.variant=i.variant,!0):!1}}const bp={ar:"ar-arab-eg","az-arab":"az-arab-ir","az-ir":"az-arab-ir",be:"be-cyrl-by",da:"da-latn-dk",el:"el-grek-gr",en:"en-latn-us",fa:"fa-arab-ir",ja:"ja-jpan-jp",ko:"ko-kore-kr",pt:"pt-latn-br",sr:"sr-cyrl-rs","sr-ru":"sr-latn-ru",sv:"sv-latn-se",ta:"ta-taml-in",uk:"uk-cyrl-ua",zh:"zh-hans-cn","zh-hant":"zh-hant-tw","zh-hk":"zh-hant-hk","zh-mo":"zh-hant-mo","zh-tw":"zh-hant-tw","zh-gb":"zh-hant-gb","zh-us":"zh-hant-us"},qb=["az","bg","cs","de","es","fi","fr","hu","it","lt","lv","nl","pl","ro","ru"];function Ub(s){if(Object.prototype.hasOwnProperty.call(bp,s))return new li(bp[s]);const i=new li(s);return i.language&&qb.includes(i.language)?(i.region=i.language.toUpperCase(),i):null}function Nb(s,i,o){const u=new Set,f=new Map;for(let m of i)new li(m).isWellFormed&&f.set(m,new li(m));e:for(const m of s){const g=m.toLowerCase(),k=new li(g);if(k.language!==void 0){for(const w of f.keys())if(g===w.toLowerCase()){if(u.add(w),f.delete(w),o==="lookup")return Array.from(u);if(o==="filtering")continue;continue e}for(const[w,b]of f.entries())if(b.matches(k,!0,!1)){if(u.add(w),f.delete(w),o==="lookup")return Array.from(u);if(o==="filtering")continue;continue e}if(k.addLikelySubtags()){for(const[w,b]of f.entries())if(b.matches(k,!0,!1)){if(u.add(w),f.delete(w),o==="lookup")return Array.from(u);if(o==="filtering")continue;continue e}}k.clearVariants();for(const[w,b]of f.entries())if(b.matches(k,!0,!0)){if(u.add(w),f.delete(w),o==="lookup")return Array.from(u);if(o==="filtering")continue;continue e}if(k.clearRegion(),k.addLikelySubtags()){for(const[w,b]of f.entries())if(b.matches(k,!0,!1)){if(u.add(w),f.delete(w),o==="lookup")return Array.from(u);if(o==="filtering")continue;continue e}}k.clearRegion();for(const[w,b]of f.entries())if(b.matches(k,!0,!0)){if(u.add(w),f.delete(w),o==="lookup")return Array.from(u);if(o==="filtering")continue;continue e}}}return Array.from(u)}function Lb(s,i,{strategy:o="filtering",defaultLocale:u}={}){const f=Nb(Array.from(s??[]).map(String),Array.from(i??[]).map(String),o);if(o==="lookup"){if(u===void 0)throw new Error("defaultLocale cannot be undefined for strategy `lookup`");f.length===0&&f.push(u)}else u&&!f.includes(u)&&f.push(u);return f}function Hb(){Object.defineProperty(Array.prototype,"reduce",{value(...s){if(s.length===0&&window.Prototype&&window.Prototype.Version&&window.Prototype.Version<"1.6.1")return this.length>1?this:this[0];const i=s[0];if(this===null)throw new TypeError("Array.prototype.reduce called on null or undefined");if(typeof i!="function")throw new TypeError(`${i} is not a function`);const o=Object(this),u=o.length>>>0;let f=0,m;if(s.length>=2)m=s[1];else{for(;f<u&&!(f in o);)f++;if(f>=u)throw new TypeError("Reduce of empty array with no initial value");m=o[f++]}for(;f<u;)f in o&&(m=i(m,o[f],f,o)),f++;return m}})}function Bb(){typeof window.constructor!="function"||!Ms(window.constructor)||(window.Window=window.constructor)}function Vb(){(window.Reflect===void 0||window.Reflect===null)&&(window.Reflect={}),typeof Reflect.get!="function"&&Object.defineProperty(Reflect,"get",{value(s,i){return s[i]}}),typeof Reflect.set!="function"&&Object.defineProperty(Reflect,"set",{value(s,i,o){s[i]=o}}),typeof Reflect.has!="function"&&Object.defineProperty(Reflect,"has",{value(s,i){return i in s}}),typeof Reflect.ownKeys!="function"&&Object.defineProperty(Reflect,"ownKeys",{value(s){return[...Object.getOwnPropertyNames(s),...Object.getOwnPropertySymbols(s)]}})}function Up(){if(typeof Map.prototype.set!="function"){const s=Map,i=document.createElement("iframe");return i.style.display="none",document.documentElement.append(i),Map=i.contentWindow.Map,i.remove(),s}}function Np(s){s&&(Map=s)}function Ms(s){const i=typeof Function.prototype.toString=="function"?Function.prototype.toString():null;return typeof i=="string"&&i.indexOf("[native code]")>=0?Function.prototype.toString.call(s).indexOf("[native code]")>=0:!1}function Yb(){(typeof Array.prototype.reduce!="function"||!Ms(Array.prototype.reduce))&&Hb(),(typeof Window!="function"||!Ms(Window))&&Bb(),Vb()}const Fb={"ar-SA":{"context_menu.ftl":`context-menu-download-swf = حمِّل .swf
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
message-restored-from-bfcache =
    Váš prohlížeč obnovil tento Flash obsah z předchozí relace.
    Chcete-li začít znovu, znovu načtěte stránku.
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
message-restored-from-bfcache =
    Your browser restored this Flash content from a previous session.
    To start fresh, reload the page.
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
save-backup-all = Download all save files
`,"volume-controls.ftl":`volume-controls-mute = Mute
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
`},"fi-FI":{"context_menu.ftl":"","messages.ftl":"","save-manager.ftl":"","volume-controls.ftl":""},"fr-FR":{"context_menu.ftl":`context-menu-download-swf = Télécharger en tant que .swf
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
message-restored-from-bfcache =
    Votre navigateur a restauré ce contenu Flash d'une session antérieure.
    Rechargez la page pour repartir de zéro.
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
error-canvas-reload = לא ניתן לטעון מחדש עם מעבד הקנבס כאשר מעבד הקנבס כבר בשימוש.
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
message-restored-from-bfcache =
    브라우저가 이전 세션에서 플래시 콘텐츠를 복원했습니다.
    새로 시작하려면 페이지를 새로 고침하세요.
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
message-restored-from-bfcache =
    Twoja przeglądarka przywróciła tę zawartość Flash z poprzedniej sesji.
    Aby zacząć od nowa, odśwież stronę.
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
enable-hardware-acceleration = Se pare că accelerarea hardware este dezactivată. Deși Ruffle ar putea funcționa, va fi foarte lent. Puteți afla cum să activați accelerarea hardware accesând linkul de mai jos:
enable-hardware-acceleration-link = Întrebări frecvente - Accelerarea hardware Chrome
view-error-details = Vezi detaliile erorii
open-in-new-tab = Deschide într-o filă nouă
click-to-unmute = Dă click pentru a dezmuți
clipboard-message-title = Copierea și lipirea în Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Browserul dvs. nu acceptă accesul complet către clipboard,
        [access-denied] Accesul la clipboard a fost refuzat,
    } dar puteți oricând să utilizați aceste scurtături:
clipboard-message-copy = { " " } pentru copiere
clipboard-message-cut = { " " } pentru decupare
clipboard-message-paste = { " " } pentru lipire
error-canvas-reload = Nu se poate reîncărca utilizând rendererul canvas atunci când acesta este deja folosit.
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
error-invalid-swf =
    Ruffle nu poate analiza fișierul solicitat.
    Cel mai probabil motiv este că fișierul solicitat nu este un SWF valid.
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
error-wasm-unsupported-browser =
    Browserul pe care îl utilizați nu suportă extensiile WebAssembly pe care Ruffle le solicită pentru a rula.
    Vă rugăm să folosiți un browser compatibil.
    Puteți găsi o listă de browsere compatibile pe Wiki.
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
save-backup-all = Descarcă toate fișierele de salvare
`,"volume-controls.ftl":`volume-controls-mute = Mut
volume-controls-unmute = Activare sunet
`},"ru-RU":{"context_menu.ftl":`context-menu-download-swf = Скачать .swf
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
message-restored-from-bfcache =
    Ваш браузер восстановил этот Flash-контент с предыдущей сессии.
    Чтобы начать заново, перезагрузите страницу.
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
message-restored-from-bfcache =
    Váš prehliadač obnovil tento Flash obsah z predchádzajúcej relácie.
    Ak chcete začať znovu, opätovne načítajte stránku.
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
error-canvas-reload = Nie je možné znova načítať pomocou vykresľovača plátna, keď sa vykresľovanie plátna už používa.
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
message-restored-from-bfcache =
    Tarayıcınız bu Flash içeriğini önceki bir oturumdan geri yükledi.
    Sıfırdan başlamak için sayfayı yeniden yükleyin.
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
error-wasm-unsupported-browser =
    Kullandığınız tarayıcı, Ruffle'ın çalışması için gereken WebAssembly uzantılarını desteklemiyor.
    Lütfen desteklenen bir tarayıcıya geçin.
    Wiki'de desteklenen tarayıcıların bir listesini bulabilirsiniz.
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
message-restored-from-bfcache =
    Ваш браузер відновив цей Flash-вміст із попередньої сесії.
    Щоб почати заново, оновіть сторінку.
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
error-canvas-reload = Trình kết xuất đồ hoạ canvas renderer đang được sử dụng nên không thể làm mới.
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
error-canvas-reload = 當畫布渲染器已在使用中時，無法使用畫布渲染器重新載入。
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
`}},Ys={};for(const[s,i]of Object.entries(Fb)){const o=new mb(s);if(i){let u;for(const[f,m]of Object.entries(i))if(m){u??(u=Up());for(const g of o.addResource(new Tb(m)))console.error(`Error in text for ${s} ${f}: ${g}`)}Np(u)}Ys[s]=o}function Gb(s,i,o){const u=Ys[s];if(u!==void 0){const f=u.getMessage(i);if(f!==void 0&&f.value)return u.formatPattern(f.value,o)}return null}function ne(s,i){const o=Up(),u=Lb(navigator.languages,Object.keys(Ys),{defaultLocale:"en-US"});for(const f in u){const m=Gb(u[f],s,i);if(m)return m}return console.error(`Unknown text key '${s}'`),Np(o),s}function Qe(s,i){const o=document.createElement("div");return ne(s,i).split(`
`).forEach(u=>{const f=document.createElement("p");f.innerText=u,o.appendChild(f)}),o}function Zb(){return A.jsx("div",{id:"volume-controls-modal",class:"modal hidden",children:A.jsx("div",{class:"modal-area",children:A.jsxs("div",{id:"volume-controls",children:[A.jsx("input",{id:"mute-checkbox",type:"checkbox"}),A.jsx("label",{id:"volume-mute",for:"mute-checkbox",title:ne("volume-controls-unmute")}),A.jsx("label",{id:"volume-min",for:"mute-checkbox",title:ne("volume-controls-mute")}),A.jsx("label",{id:"volume-mid",for:"mute-checkbox",title:ne("volume-controls-mute")}),A.jsx("label",{id:"volume-max",for:"mute-checkbox",title:ne("volume-controls-mute")}),A.jsx("input",{id:"volume-slider",type:"range",min:"0",max:"100",step:"1"}),A.jsx("span",{id:"volume-slider-text"}),A.jsx("span",{class:"close-modal"})]})})})}function Qb(){return A.jsx("div",{id:"video-modal",class:"modal hidden",children:A.jsxs("div",{class:"modal-area",children:[A.jsx("span",{class:"close-modal"}),A.jsx("div",{id:"video-holder"})]})})}function $b(){return A.jsx("div",{id:"hardware-acceleration-modal",class:"modal hidden",children:A.jsxs("div",{class:"modal-area",children:[A.jsx("span",{class:"close-modal"}),A.jsx("span",{id:"acceleration-text",children:ne("enable-hardware-acceleration")}),A.jsx("a",{href:"https://github.com/ruffle-rs/ruffle/wiki/Frequently-Asked-Questions-For-Users#chrome-hardware-acceleration",target:"_blank",class:"modal-button",children:ne("enable-hardware-acceleration-link")})]})})}const hs=navigator.userAgent.includes("Mac OS X")?"Command":"Ctrl";function Xb(){return A.jsx("div",{id:"clipboard-modal",class:"modal hidden",children:A.jsxs("div",{class:"modal-area",children:[A.jsx("span",{class:"close-modal"}),A.jsx("h2",{children:ne("clipboard-message-title")}),A.jsx("p",{id:"clipboard-modal-description"}),A.jsxs("p",{children:[A.jsxs("b",{children:[hs,"+C"]}),A.jsx("span",{children:ne("clipboard-message-copy")})]}),A.jsxs("p",{children:[A.jsxs("b",{children:[hs,"+X"]}),A.jsx("span",{children:ne("clipboard-message-cut")})]}),A.jsxs("p",{children:[A.jsxs("b",{children:[hs,"+V"]}),A.jsx("span",{children:ne("clipboard-message-paste")})]})]})})}function Wb(){return A.jsx("div",{id:"context-menu-overlay",class:"hidden",children:A.jsx("ul",{id:"context-menu"})})}const Nn=document.createElement("template");Nn.content.appendChild(A.jsx(Wg,{}));Nn.content.appendChild(A.jsx(Kg,{}));Nn.content.appendChild(A.jsx(Jg,{}));Nn.content.appendChild(A.jsx(Pg,{}));Nn.content.appendChild(A.jsx(Ig,{}));Nn.content.appendChild(A.jsx(Zb,{}));Nn.content.appendChild(A.jsx(Qb,{}));Nn.content.appendChild(A.jsx($b,{}));Nn.content.appendChild(A.jsx(Xb,{}));Nn.content.appendChild(A.jsx(Wb,{}));const Lp="application/x-shockwave-flash",Hp="application/futuresplash",Bp="application/x-shockwave-flash2-preview",Vp="application/vnd.adobe.flash.movie",Kb="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";function Jb(s){let i="";try{i=new URL(s,"https://example.com").pathname}catch{}if(i&&i.length>=4){const o=i.slice(-4).toLowerCase();if(o===".swf"||o===".spl")return!0}return!1}function Pb(s,i){switch(s=s.toLowerCase(),s){case Lp.toLowerCase():case Hp.toLowerCase():case Bp.toLowerCase():case Vp.toLowerCase():return!0;default:if(i)switch(s){case"application/octet-stream":case"binary/octet-stream":return!0}}return!1}function Yp(s,i){const o=Jb(s);return i?Pb(i,o):o}function Ib(s){const i=s.pathname;return i.substring(i.lastIndexOf("/")+1)}let ii=null,Ut=!1;try{if(document.currentScript instanceof HTMLScriptElement&&document.currentScript.src!==""){let s=document.currentScript.src;!s.endsWith(".js")&&!s.endsWith("/")&&(s+="/"),ii=new URL(".",s),Ut=ii.protocol.includes("extension")}}catch(s){console.warn("Unable to get currentScript URL",s)}const ri="https://ruffle.rs";class Fp extends Error{constructor(i,o){super(`Failed to fetch ${i}`),this.swfUrl=i,this.statusNotOk=o,this.swfUrl=i,this.statusNotOk=o}}class Gp extends Error{constructor(i){super(`Not a valid swf: ${i}`)}}class Os extends Error{constructor(i){super("Failed to load Ruffle WASM"),this.cause=i}}class Zp extends Error{constructor(i){super(`Invalid options: ${i}`)}}var la={},Ot={},yp;function ey(){if(yp)return Ot;yp=1,Object.defineProperty(Ot,"__esModule",{value:!0}),Ot.createRef=Ot.h=void 0,Ot.createElement=o;const s=Cp(),i=_p();function o(f,m,...g){if(typeof f=="function")return f({...m,children:g});const{finalTag:k,finalAttrs:w}=(0,i.applyTsxTag)(f,m),b=(0,i.createDomElement)(k,w);return w&&(0,s.setAttributes)(b,w),(0,i.applyChildren)(b,g),b}Ot.h=o;const u=()=>({current:null});return Ot.createRef=u,Ot}var Dr={},wp;function ny(){if(wp)return Dr;wp=1,Object.defineProperty(Dr,"__esModule",{value:!0}),Dr.defineCustomElement=i;const s=Vs();function i(o,u,f){return customElements.define(o,u,f),m=>(0,s.jsx)(o,m)}return Dr}var vs={},kp;function ty(){return kp||(kp=1,Object.defineProperty(vs,"__esModule",{value:!0})),vs}var Rp;function ay(){return Rp||(Rp=1,function(s){var i=la&&la.__createBinding||(Object.create?function(u,f,m,g){g===void 0&&(g=m);var k=Object.getOwnPropertyDescriptor(f,m);(!k||("get"in k?!f.__esModule:k.writable||k.configurable))&&(k={enumerable:!0,get:function(){return f[m]}}),Object.defineProperty(u,g,k)}:function(u,f,m,g){g===void 0&&(g=m),u[g]=f[m]}),o=la&&la.__exportStar||function(u,f){for(var m in u)m!=="default"&&!Object.prototype.hasOwnProperty.call(f,m)&&i(f,u,m)};Object.defineProperty(s,"__esModule",{value:!0}),o(ey(),s),o(ny(),s),o(Vs(),s),o(ty(),s)}(la)),la}var ly=ay();function iy({action:s,showDetails:i,errorArray:o,errorText:u,swfUrl:f}){if(s.type==="show_details"){const m=()=>(i(),!1);return A.jsx("li",{children:A.jsx("a",{href:"#",id:"panic-view-details",onClick:m,children:ne("view-error-details")})})}else{if(s.type==="open_link")return A.jsx("li",{children:A.jsx("a",{href:s.url,target:"_top",children:s.label})});{let m;document.location.protocol.includes("extension")&&f?m=f.href:m=document.location.href,m=m.split(/[?#]/,1)[0];const g=`Error on ${m}`;let k=`https://github.com/ruffle-rs/ruffle/issues/new?title=${encodeURIComponent(g)}&template=error_report.md&labels=error-report&body=`,w=encodeURIComponent(u);return o.stackIndex>-1&&String(k+w).length>8195&&(o[o.stackIndex]=null,o.avmStackIndex>-1&&(o[o.avmStackIndex]=null),w=encodeURIComponent(o.join(""))),k+=w,A.jsx("li",{children:A.jsx("a",{href:k,target:"_top",children:ne("report-bug")})})}}}function Cs(){const s=new Date(Cn.buildDate),i=new Date;return i.setMonth(i.getMonth()-6),i>s}const ge={OpenDemo:{type:"open_link",url:ri+"/demo",label:ne("ruffle-demo")},DownloadDesktop:{type:"open_link",url:ri+"/downloads#desktop-app",label:ne("ruffle-desktop")},UpdateRuffle:{type:"open_link",url:ri+"/downloads",label:ne("update-ruffle")},CreateReport:{type:"create_report"},ShowDetails:{type:"show_details"},createReportOrUpdate(){return Cs()?this.UpdateRuffle:this.CreateReport},openWiki(s,i){return{type:"open_link",url:`https://github.com/ruffle-rs/ruffle/wiki/${s}`,label:i??ne("ruffle-wiki")}}};function ry(s){var i;if(s instanceof Fp)return s.swfUrl&&!s.swfUrl.protocol.includes("http")?{body:Qe("error-file-protocol"),actions:[ge.OpenDemo,ge.DownloadDesktop]}:window.location.origin===((i=s.swfUrl)==null?void 0:i.origin)||s.statusNotOk||window.location.protocol.includes("extension")?{body:Qe("error-swf-fetch"),actions:[ge.ShowDetails]}:{body:Qe("error-swf-cors"),actions:[ge.openWiki("Using-Ruffle#configure-cors-header"),ge.ShowDetails]};if(s instanceof Gp)return{body:Qe("error-invalid-swf"),actions:[ge.ShowDetails]};if(s instanceof Os){if(window.location.protocol==="file:")return{body:Qe("error-file-protocol"),actions:[ge.OpenDemo,ge.DownloadDesktop]};const o=String(s.cause.message).toLowerCase();if(o.includes("mime"))return{body:Qe("error-wasm-mime-type"),actions:[ge.openWiki("Using-Ruffle#configure-webassembly-mime-type"),ge.ShowDetails]};if(o.includes("networkerror")||o.includes("failed to fetch")||o.includes("load failed"))return{body:Qe("error-wasm-cors"),actions:[ge.openWiki("Using-Ruffle#configure-cors-header"),ge.ShowDetails]};if(o.includes("disallowed by embedder"))return{body:Qe("error-csp-conflict"),actions:[ge.openWiki("Using-Ruffle#configure-wasm-csp"),ge.ShowDetails]};if(s.cause.name==="CompileError"&&o.includes("bad type"))return{body:Qe("error-wasm-unsupported-browser"),actions:[ge.openWiki("#web"),ge.ShowDetails]};if(s.cause.name==="CompileError")return{body:Qe("error-wasm-invalid"),actions:[ge.openWiki("Using-Ruffle#addressing-a-compileerror"),ge.ShowDetails]};if((o.includes("could not download wasm module")||o.includes("webassembly compilation aborted"))&&s.cause.name==="TypeError")return{body:Qe("error-wasm-download"),actions:[ge.ShowDetails]};if(s.cause.name==="TypeError"){const u=Qe("error-javascript-conflict");return Cs()&&u.appendChild(Qe("error-javascript-conflict-outdated",{buildDate:Cn.buildDate})),{body:u,actions:[ge.createReportOrUpdate(),ge.ShowDetails]}}return navigator.userAgent.includes("Edg")&&o.includes("webassembly is not defined")?{body:Qe("error-wasm-disabled-on-edge"),actions:[ge.openWiki("Frequently-Asked-Questions-For-Users#edge-webassembly-error",ne("more-info")),ge.ShowDetails]}:{body:Qe("error-wasm-not-found"),actions:[ge.openWiki("Using-Ruffle#configuration-options"),ge.ShowDetails]}}return s instanceof Zp?{body:Qe("error-javascript-config"),actions:[ge.openWiki("Using-Ruffle#javascript-api"),ge.ShowDetails]}:{body:Qe("error-unknown",{buildDate:Cn.buildDate,outdated:String(Cs)}),actions:[ge.createReportOrUpdate(),ge.ShowDetails]}}function oy(s,i,o,u){const f=o.join(""),{body:m,actions:g}=ry(i),k=ly.createRef(),w=()=>{k.current.classList.add("details"),k.current.replaceChildren(A.jsx("textarea",{readOnly:!0,children:f}))};s.textContent="",s.appendChild(A.jsxs("div",{id:"panic",children:[A.jsx("div",{id:"panic-title",children:ne("panic-title")}),A.jsx("div",{id:"panic-body",ref:k,children:m}),A.jsx("div",{id:"panic-footer",children:A.jsx("ul",{children:g.map(b=>iy({action:b,showDetails:w,errorText:f,errorArray:o,swfUrl:u}))})})]}))}const uy="modulepreload",sy=function(s,i){return new URL(s,i).href},Sp={},zp=function(i,o,u){let f=Promise.resolve();if(o&&o.length>0){let g=function(M){return Promise.all(M.map(L=>Promise.resolve(L).then(Z=>({status:"fulfilled",value:Z}),Z=>({status:"rejected",reason:Z}))))};const k=document.getElementsByTagName("link"),w=document.querySelector("meta[property=csp-nonce]"),b=(w==null?void 0:w.nonce)||(w==null?void 0:w.getAttribute("nonce"));f=g(o.map(M=>{if(M=sy(M,u),M in Sp)return;Sp[M]=!0;const L=M.endsWith(".css"),Z=L?'[rel="stylesheet"]':"";if(!!u)for(let ie=k.length-1;ie>=0;ie--){const re=k[ie];if(re.href===M&&(!L||re.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${M}"]${Z}`))return;const I=document.createElement("link");if(I.rel=L?"stylesheet":uy,L||(I.as="script"),I.crossOrigin="",I.href=M,b&&I.setAttribute("nonce",b),document.head.appendChild(I),L)return new Promise((ie,re)=>{I.addEventListener("load",ie),I.addEventListener("error",()=>re(new Error(`Unable to preload CSS for ${M}`)))})}))}function m(g){const k=new Event("vite:preloadError",{cancelable:!0});if(k.payload=g,window.dispatchEvent(k),!k.defaultPrevented)throw g}return f.then(g=>{for(const k of g||[])k.status==="rejected"&&m(k.reason);return i().catch(m)})},cy=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,3,1,0,1,10,14,1,12,0,65,0,65,0,65,0,252,10,0,0,11])),fy=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,7,1,5,0,208,112,26,11])),dy=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,12,1,10,0,67,0,0,0,0,252,0,26,11])),my=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,8,1,6,0,65,0,192,26,11])),py=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]));async function hy(s){var b,M,L;Yb();const i=(await Promise.all([cy(),py(),dy(),my(),fy()])).every(Boolean);i||console.log("Some WebAssembly extensions are NOT available, falling back to the vanilla WebAssembly module"),(M=(b=oi.options).onFirstLoad)==null||M.call(b),oi.options.onFirstLoad=()=>{};const{default:o,RuffleInstanceBuilder:u,ZipWriter:f}=await(i?zp(()=>import("./ruffle_web-76ccn4kA.js"),__vite__mapDeps([0,1]),import.meta.url):zp(()=>import("./ruffle_web-wasm_mvp-DdsUD5M_.js"),__vite__mapDeps([2,1]),import.meta.url));let m;const g=i?new URL(""+new URL("ruffle_web_bg-b9UYdNyr.wasm",import.meta.url).href,import.meta.url):new URL(""+new URL("ruffle_web-wasm_mvp_bg--P7gnhWV.wasm",import.meta.url).href,import.meta.url),k=await fetch(g);if(s&&typeof ReadableStreamDefaultController=="function"){const Z=((L=k==null?void 0:k.headers)==null?void 0:L.get("content-length"))||"";let J=0;const I=parseInt(Z);m=new Response(new ReadableStream({async start(ie){var Ue;const re=(Ue=k.body)==null?void 0:Ue.getReader();if(!re)throw"Response had no body";for(s(J,I);;){const{done:Me,value:se}=await re.read();if(Me)break;se!=null&&se.byteLength&&(J+=se==null?void 0:se.byteLength),ie.enqueue(se),s(J,I)}ie.close()}}),k)}else m=k;return await o({module_or_path:m}),[u,f]}let gs=null;async function vy(s){gs===null&&(gs=hy(s));const i=await gs;return[new i[0],()=>new i[1]]}const gy=999,_s={};function by(s){const i=_s[s];return i!==void 0?{internalName:s,name:i.name,class:i.class}:null}function Fs(s,i){const o=_s[s];if(o!==void 0){if(o.class!==i)throw new Error("Internal naming conflict on "+s);return o.name}let u=0;if(window.customElements!==void 0)for(;u<gy;){let f=s;if(u>0&&(f=f+"-"+u),window.customElements.get(f)!==void 0){u+=1;continue}else window.customElements.define(f,i);return _s[s]={class:i,name:f,internalName:s},f}throw new Error("Failed to assign custom element "+s)}function xe(s){return s!=null}function yy(s,i){if(xe(i.allowScriptAccess)&&s.setAllowScriptAccess(i.allowScriptAccess),xe(i.backgroundColor)&&s.setBackgroundColor(wy(i.backgroundColor)),xe(i.upgradeToHttps)&&s.setUpgradeToHttps(i.upgradeToHttps),xe(i.compatibilityRules)&&s.setCompatibilityRules(i.compatibilityRules),xe(i.letterbox)&&s.setLetterbox(i.letterbox.toLowerCase()),xe(i.base)&&s.setBaseUrl(i.base),xe(i.menu)&&s.setShowMenu(i.menu),xe(i.allowFullscreen)&&s.setAllowFullscreen(i.allowFullscreen),xe(i.salign)&&s.setStageAlign(i.salign.toLowerCase()),xe(i.forceAlign)&&s.setForceAlign(i.forceAlign),xe(i.quality)?s.setQuality(i.quality.toLowerCase()):Ry()&&(console.log("Running on a mobile device; defaulting to low quality"),s.setQuality("low")),xe(i.scale)&&s.setScale(i.scale.toLowerCase()),xe(i.forceScale)&&s.setForceScale(i.forceScale),xe(i.frameRate)&&s.setFrameRate(i.frameRate),xe(i.wmode)&&s.setWmode(i.wmode),xe(i.logLevel)&&s.setLogLevel(i.logLevel),xe(i.maxExecutionDuration)&&s.setMaxExecutionDuration(ky(i.maxExecutionDuration)),xe(i.playerVersion)&&s.setPlayerVersion(i.playerVersion),xe(i.preferredRenderer)&&s.setPreferredRenderer(i.preferredRenderer),xe(i.openUrlMode)&&s.setOpenUrlMode(i.openUrlMode.toLowerCase()),xe(i.allowNetworking)&&s.setAllowNetworking(i.allowNetworking.toLowerCase()),xe(i.credentialAllowList)&&s.setCredentialAllowList(i.credentialAllowList),xe(i.playerRuntime)&&s.setPlayerRuntime(i.playerRuntime),xe(i.socketProxy))for(const o of i.socketProxy)s.addSocketProxy(o.host,o.port,o.proxyUrl);if(xe(i.gamepadButtonMapping))for(const[o,u]of Object.entries(i.gamepadButtonMapping))s.addGamepadButtonMapping(o,u);if(xe(i.urlRewriteRules))for(const[o,u]of i.urlRewriteRules)if(o instanceof RegExp)s.addUrlRewriteRule(o,u);else{const f=o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),m=new RegExp(`^${f}$`),g=u.replace(/\$/g,"$$$$");s.addUrlRewriteRule(m,g)}xe(i.scrollingBehavior)&&s.setScrollingBehavior(i.scrollingBehavior)}function wy(s){if(s.startsWith("#")&&(s=s.substring(1)),s.length<6)return;let i=0;for(let o=0;o<6;o++){const u=parseInt(s[o],16);isNaN(u)?i=i<<4:i=i<<4|u}return i}function ky(s){return typeof s=="number"?s:s.secs}function Ry(){return typeof window.orientation<"u"}const Sy=/^\s*(\d+(\.\d+)?(%)?)/;let Mr=!1;function bs(s){if(s==null)return{};s instanceof URLSearchParams||(s=new URLSearchParams(s));const i={};for(const[o,u]of s)i[o]=u.toString();return i}class xp{constructor(i,o){this.x=i,this.y=o}distanceTo(i){const o=i.x-this.x,u=i.y-this.y;return Math.sqrt(o*o+u*u)}}class qt{constructor(i,o,u){this.contextMenuForceDisabled=!1,this.isTouch=!1,this.contextMenuSupported=!1,this._suppressContextMenu=!1,this.panicked=!1,this.rendererDebugInfo="",this.longPressTimer=null,this.pointerDownPosition=null,this.pointerMoveMaxDistance=0,this.onFSCommand=[],this.config={},this.SaveRow=({rowKey:k,solName:w,solData:b})=>A.jsxs("tr",{children:[A.jsx("td",{title:k,children:w}),A.jsx("td",{children:A.jsx("span",{class:"save-option",id:"download-save",title:ne("save-download"),onClick:()=>ys(xy(b,"application/octet-stream"),w+".sol")})}),A.jsxs("td",{children:[A.jsx("input",{type:"file",accept:".sol",class:"replace-save",id:"replace-save-"+k,onChange:M=>this.replaceSOL(M,k)}),A.jsx("label",{for:"replace-save-"+k,class:"save-option",id:"replace-save",title:ne("save-replace")})]}),A.jsx("td",{children:A.jsx("span",{class:"save-option",id:"delete-save",title:ne("save-delete"),onClick:()=>this.deleteSave(k)})})]}),this.element=i,this.debugPlayerInfo=o,this.onCallbackAvailable=u,this.shadow=this.element.attachShadow({mode:"open",delegatesFocus:!0}),this.shadow.appendChild(Nn.content.cloneNode(!0)),this.dynamicStyles=this.shadow.getElementById("dynamic-styles"),this.container=this.shadow.getElementById("container"),this.playButton=this.shadow.getElementById("play-button"),this.playButton.addEventListener("click",()=>this.play()),this.unmuteOverlay=this.shadow.getElementById("unmute-overlay"),this.splashScreen=this.shadow.getElementById("splash-screen"),this.virtualKeyboard=this.shadow.getElementById("virtual-keyboard"),this.virtualKeyboard.addEventListener("input",this.virtualKeyboardInput.bind(this)),this.saveManager=this.shadow.getElementById("save-manager"),this.videoModal=this.shadow.getElementById("video-modal"),this.hardwareAccelerationModal=this.shadow.getElementById("hardware-acceleration-modal"),this.volumeControls=this.shadow.getElementById("volume-controls-modal"),this.clipboardModal=this.shadow.getElementById("clipboard-modal"),this.addModalJavaScript(this.saveManager),this.addModalJavaScript(this.volumeControls),this.addModalJavaScript(this.videoModal),this.addModalJavaScript(this.hardwareAccelerationModal),this.addModalJavaScript(this.clipboardModal),this.volumeSettings=new zy(!1,100),this.addVolumeControlsJavaScript(this.volumeControls);const f=this.saveManager.querySelector(".modal-button");f&&(f.addEventListener("click",this.backupSaves.bind(this)),f.innerText=ne("save-backup-all"));const m=this.unmuteOverlay.querySelector("#unmute-overlay-svg");if(m){const k=m.querySelector("#unmute-text");k.textContent=ne("click-to-unmute")}this.contextMenuOverlay=this.shadow.getElementById("context-menu-overlay"),this.contextMenuElement=this.shadow.getElementById("context-menu");const g=k=>{k.preventDefault(),k.stopPropagation()};this.contextMenuElement.addEventListener("contextmenu",g),this.contextMenuElement.addEventListener("click",g),this.contextMenuElement.dir=Ey(),document.documentElement.addEventListener("pointerdown",this.checkIfTouch.bind(this)),this.element.addEventListener("contextmenu",this.showContextMenu.bind(this)),this.container.addEventListener("pointerdown",this.pointerDown.bind(this)),this.container.addEventListener("pointermove",this.checkLongPressMovement.bind(this)),this.container.addEventListener("pointerup",this.checkLongPress.bind(this)),this.container.addEventListener("pointercancel",this.clearLongPressTimer.bind(this)),this.element.addEventListener("fullscreenchange",this.fullScreenChange.bind(this)),this.element.addEventListener("webkitfullscreenchange",this.fullScreenChange.bind(this)),this.instance=null,this.newZipWriter=null,this._readyState=Xa.HaveNothing,this.metadata=null,this.lastActivePlayingState=!1,this.setupPauseOnTabHidden()}addFSCommandHandler(i){this.onFSCommand.push(i)}callFSCommand(i,o){if(this.onFSCommand.length===0)return!1;for(const u of this.onFSCommand)u(i,o);return!0}addModalJavaScript(i){const o=i.querySelector("#video-holder"),u=()=>{i.classList.add("hidden"),o&&(o.textContent="")};i.parentNode.addEventListener("click",u);const f=i.querySelector(".modal-area");f&&f.addEventListener("click",g=>g.stopPropagation());const m=i.querySelector(".close-modal");m&&m.addEventListener("click",u)}addVolumeControlsJavaScript(i){const o=i.querySelector("#mute-checkbox"),u=i.querySelector("#volume-mute"),f=[i.querySelector("#volume-min"),i.querySelector("#volume-mid"),i.querySelector("#volume-max")],m=i.querySelector("#volume-slider"),g=i.querySelector("#volume-slider-text"),k=()=>{if(this.volumeSettings.isMuted)u.style.display="inline",f.forEach(w=>{w.style.display="none"});else{u.style.display="none";const w=Math.round(this.volumeSettings.volume/50);f.forEach((b,M)=>{b.style.display=M===w?"inline":"none"})}};o.checked=this.volumeSettings.isMuted,m.disabled=o.checked,m.valueAsNumber=this.volumeSettings.volume,g.textContent=m.value+"%",k(),o.addEventListener("change",()=>{var w;m.disabled=o.checked,this.volumeSettings.isMuted=o.checked,(w=this.instance)==null||w.set_volume(this.volumeSettings.get_volume()),k()}),m.addEventListener("input",()=>{var w;g.textContent=m.value+"%",this.volumeSettings.volume=m.valueAsNumber,(w=this.instance)==null||w.set_volume(this.volumeSettings.get_volume()),k()})}setupPauseOnTabHidden(){document.addEventListener("visibilitychange",()=>{this.instance&&(document.hidden&&(this.lastActivePlayingState=this.instance.is_playing(),this.instance.pause()),!document.hidden&&this.lastActivePlayingState===!0&&this.instance.play())},!1)}updateStyles(){if(this.dynamicStyles.sheet){if(this.dynamicStyles.sheet.cssRules)for(let f=this.dynamicStyles.sheet.cssRules.length-1;f>=0;f--)this.dynamicStyles.sheet.deleteRule(f);const i=this.element.attributes.getNamedItem("align");if(i!=null){const f=i.value.toLowerCase(),m=(()=>{switch(f){case"right":return"vertical-align: top; float: right;";case"left":return"vertical-align: top; float: left;";case"bottom":return"vertical-align: baseline;";case"top":return"vertical-align: top;";case"center":return"vertical-align: middle; vertical-align: -moz-middle-with-baseline;";case"middle":return"vertical-align: middle; vertical-align: -webkit-baseline-middle; vertical-align: -moz-middle-with-baseline;";case"absbottom":return"vertical-align: bottom;";case"absmiddle":case"abscenter":return"vertical-align: middle;";case"texttop":return"vertical-align: text-top;";default:return""}})();m&&this.dynamicStyles.sheet.insertRule(`:host { ${m} }`)}const o=this.element.attributes.getNamedItem("width");if(o!=null){const f=qt.htmlDimensionToCssDimension(o.value);f!==null&&this.dynamicStyles.sheet.insertRule(`:host { width: ${f}; }`)}const u=this.element.attributes.getNamedItem("height");if(u!=null){const f=qt.htmlDimensionToCssDimension(u.value);f!==null&&this.dynamicStyles.sheet.insertRule(`:host { height: ${f}; }`)}}}isUnusedFallbackObject(){const i=by("ruffle-object");if(i!==null){let o=this.element.parentNode;for(;o!==document&&o!==null;){if(o.nodeName===i.name)return!0;o=o.parentNode}}return!1}async ensureFreshInstance(){var m,g,k;this.destroy(),this.loadedConfig&&this.loadedConfig.splashScreen!==!1&&this.loadedConfig.preloader!==!1&&this.showSplashScreen(),this.loadedConfig&&this.loadedConfig.preloader===!1&&console.warn("The configuration option preloader has been replaced with splashScreen. If you own this website, please update the configuration."),this.loadedConfig&&this.loadedConfig.maxExecutionDuration&&typeof this.loadedConfig.maxExecutionDuration!="number"&&console.warn("Configuration: An obsolete format for duration for 'maxExecutionDuration' was used, please use a single number indicating seconds instead. For instance '15' instead of '{secs: 15, nanos: 0}'."),this.loadedConfig&&typeof this.loadedConfig.contextMenu=="boolean"&&console.warn('The configuration option contextMenu no longer takes a boolean. Use "on", "off", or "rightClickOnly".');const[i,o]=await vy(this.onRuffleDownloadProgress.bind(this)).catch(w=>{console.error(`Serious error loading Ruffle: ${w}`);const b=new Os(w);throw this.panic(b),b});if(this.newZipWriter=o,yy(i,this.loadedConfig||{}),i.setVolume(this.volumeSettings.get_volume()),(m=this.loadedConfig)!=null&&m.fontSources)for(const w of this.loadedConfig.fontSources)try{const b=await fetch(w);i.addFont(w,new Uint8Array(await b.arrayBuffer()))}catch(b){console.warn(`Couldn't download font source from ${w}`,b)}for(const w in(g=this.loadedConfig)==null?void 0:g.defaultFonts){const b=this.loadedConfig.defaultFonts[w];b&&i.setDefaultFont(w,b)}this.instance=await i.build(this.container,this).catch(w=>{throw console.error(`Serious error loading Ruffle: ${w}`),this.panic(w),w}),this.rendererDebugInfo=this.instance.renderer_debug_info(),this.rendererDebugInfo.includes("Adapter Device Type: Cpu")&&this.container.addEventListener("mouseover",this.openHardwareAccelerationModal.bind(this),{once:!0});const u=this.instance.renderer_name(),f=this.instance.constructor;if(console.log("%cNew Ruffle instance created (Version: "+Cn.versionName+" | WebAssembly extensions: "+(f.is_wasm_simd_used()?"ON":"OFF")+" | Used renderer: "+(u??"")+")","background: #37528C; color: #FFAD33"),this.audioState()!=="running"&&(this.container.style.visibility="hidden",await new Promise(w=>{window.setTimeout(()=>{w()},200)}),this.container.style.visibility=""),this.unmuteAudioContext(),!this.loadedConfig||this.loadedConfig.autoplay===Pa.On||this.loadedConfig.autoplay!==Pa.Off&&this.audioState()==="running"){if(this.play(),this.audioState()!=="running"){(!this.loadedConfig||this.loadedConfig.unmuteOverlay!==ui.Hidden)&&(this.unmuteOverlay.style.display="block"),this.container.addEventListener("click",this.unmuteOverlayClicked.bind(this),{once:!0});const w=(k=this.instance)==null?void 0:k.audio_context();w&&(w.onstatechange=()=>{w.state==="running"&&this.unmuteOverlayClicked(),w.onstatechange=null})}}else this.playButton.style.display="block"}onRuffleDownloadProgress(i,o){const u=this.splashScreen.querySelector(".loadbar-inner"),f=this.splashScreen.querySelector(".loadbar");Number.isNaN(o)?f&&(f.style.display="none"):u.style.width=`${100*(i/o)}%`}destroy(){this.instance&&(this.instance.destroy(),this.instance=null,this.metadata=null,this._readyState=Xa.HaveNothing,console.log("Ruffle instance destroyed."))}checkOptions(i){if(typeof i=="string")return{url:i};const o=(u,f)=>{if(!u){const m=new Zp(f);throw this.panic(m),m}};return o(i!==null&&typeof i=="object","Argument 0 must be a string or object"),o("url"in i||"data"in i,"Argument 0 must contain a `url` or `data` key"),o(!("url"in i)||typeof i.url=="string","`url` must be a string"),i}async reload(){if(this.loadedConfig)await this.load(this.loadedConfig);else throw new Error("Cannot reload if load wasn't first called")}async reloadWithCanvasRenderer(){if(this.loadedConfig&&this.loadedConfig.preferredRenderer!==Hr.Canvas){const i={...this.loadedConfig,preferredRenderer:Hr.Canvas};await this.load(i)}else if(this.loadedConfig)this.panic(new Error(ne("error-canvas-reload")));else throw new Error("Cannot reload if load wasn't first called")}async load(i,o=!1){var u;if(i=this.checkOptions(i),!this.element.isConnected||this.isUnusedFallbackObject()){console.warn("Ignoring attempt to play a disconnected or suspended Ruffle element");return}if(!Gs(this.element))try{this.loadedConfig={...$g,...o&&"url"in i?{allowScriptAccess:$p("samedomain",i.url)}:{},...((u=window.RufflePlayer)==null?void 0:u.config)??{},...this.config,...i},this.loadedConfig.backgroundColor&&this.loadedConfig.wmode!==Lr.Transparent&&(this.container.style.backgroundColor=this.loadedConfig.backgroundColor),await this.ensureFreshInstance(),"url"in i?(console.log(`Loading SWF file ${i.url}`),this.swfUrl=new URL(i.url,document.baseURI),this.instance.stream_from(this.swfUrl.href,bs(i.parameters))):"data"in i&&(console.log("Loading SWF data"),delete this.swfUrl,this.instance.load_data(new Uint8Array(i.data),bs(i.parameters),i.swfFileName||"movie.swf"))}catch(f){console.error(`Serious error occurred loading SWF file: ${f}`);const m=new Error(f);throw this.panic(m),m}}play(){this.instance&&(this.instance.play(),this.playButton.style.display="none")}get isPlaying(){return this.instance?this.instance.is_playing():!1}get volume(){return this.instance?this.instance.volume():1}set volume(i){this.instance&&this.instance.set_volume(i)}get fullscreenEnabled(){return!!(document.fullscreenEnabled||document.webkitFullscreenEnabled)}get isFullscreen(){return(document.fullscreenElement||document.webkitFullscreenElement)===this.element}setFullscreen(i){this.fullscreenEnabled&&i!==this.isFullscreen&&(i?this.enterFullscreen():this.exitFullscreen())}enterFullscreen(){const i={navigationUI:"hide"};this.element.requestFullscreen?this.element.requestFullscreen(i):this.element.webkitRequestFullscreen?this.element.webkitRequestFullscreen(i):this.element.webkitRequestFullScreen&&this.element.webkitRequestFullScreen(i)}exitFullscreen(){document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}fullScreenChange(){var i,o,u;if(this.isFullscreen&&screen.orientation&&typeof screen.orientation.lock=="function"){const f=((o=(i=this.loadedConfig)==null?void 0:i.fullScreenAspectRatio)==null?void 0:o.toLowerCase())??"";["portrait","landscape","any"].includes(f)&&screen.orientation.lock(f).catch(()=>{})}else try{screen.orientation.unlock()}catch{}(u=this.instance)==null||u.set_fullscreen(this.isFullscreen)}checkIfTouch(i){this.isTouch=i.pointerType==="touch"||i.pointerType==="pen"}confirmReloadSave(i,o,u){if(Or(o)&&localStorage[i]){if(!u&&!confirm(ne("save-delete-prompt")))return;const f=this.swfUrl?this.swfUrl.pathname:"",m=this.swfUrl?this.swfUrl.hostname:document.location.hostname,g=i.split("/").slice(1,-1).join("/");if(f.includes(g)&&i.startsWith(m)){confirm(ne("save-reload-prompt",{action:u?"replace":"delete"}))&&this.loadedConfig&&(this.destroy(),u?localStorage.setItem(i,o):localStorage.removeItem(i),this.reload(),this.populateSaves(),this.saveManager.classList.add("hidden"));return}u?localStorage.setItem(i,o):localStorage.removeItem(i),this.populateSaves(),this.saveManager.classList.add("hidden")}}replaceSOL(i,o){const u=i.target,f=new FileReader;f.addEventListener("load",()=>{if(f.result&&typeof f.result=="string"){const m=new RegExp("data:.*;base64,"),g=f.result.replace(m,"");this.confirmReloadSave(o,g,!0)}}),u&&u.files&&u.files.length>0&&u.files[0]&&f.readAsDataURL(u.files[0])}checkSaves(){if(!this.saveManager.querySelector("#local-saves"))return!1;try{if(localStorage===null)return!1}catch{return!1}return Object.keys(localStorage).some(i=>{const o=i.split("/").pop(),u=localStorage.getItem(i);return o&&u&&Or(u)})}deleteSave(i){const o=localStorage.getItem(i);o&&this.confirmReloadSave(i,o,!1)}populateSaves(){if(!this.checkSaves())return;const i=this.saveManager.querySelector("#local-saves");i.textContent="",Object.keys(localStorage).forEach(o=>{const u=o.split("/").pop(),f=localStorage.getItem(o);u&&f&&Or(f)&&i.appendChild(A.jsx(this.SaveRow,{rowKey:o,solName:u,solData:f}))})}async backupSaves(){const i=this.newZipWriter(),o=[];Object.keys(localStorage).forEach(f=>{let m=String(f.split("/").pop());const g=localStorage.getItem(f);if(g&&Or(g)){const k=Qp(g),w=o.filter(b=>b===m).length;o.push(m),w>0&&(m+=` (${w+1})`),i.addFile(m+".sol",k)}});const u=new Blob([i.save()],{type:"application/zip"});ys(u,"saves.zip")}openHardwareAccelerationModal(){this.hardwareAccelerationModal.classList.remove("hidden")}async openSaveManager(){this.populateSaves(),this.saveManager.classList.remove("hidden")}openVolumeControls(){this.volumeControls.classList.remove("hidden")}async downloadSwf(){try{if(this.swfUrl){console.log("Downloading SWF: "+this.swfUrl);const i=await fetch(this.swfUrl.href);if(!i.ok){console.error("SWF download failed");return}const o=await i.blob();ys(o,Ib(this.swfUrl))}else console.error("SWF download failed")}catch{console.error("SWF download failed")}}virtualKeyboardInput(){const i=this.virtualKeyboard,o=i.value;for(const u of o)for(const f of["keydown","keyup"])this.element.dispatchEvent(new KeyboardEvent(f,{key:u,bubbles:!0}));i.value=""}openVirtualKeyboard(){var i;(i=this.instance)!=null&&i.has_focus()?this.virtualKeyboard.focus({preventScroll:!0}):setTimeout(()=>{this.virtualKeyboard.focus({preventScroll:!0})},0)}closeVirtualKeyboard(){this.isVirtualKeyboardFocused()&&this.container.focus({preventScroll:!0})}isVirtualKeyboardFocused(){return this.shadow.activeElement===this.virtualKeyboard}contextMenuItems(){const i="✓",o=[],u=()=>{o.length>0&&o[o.length-1]!==null&&o.push(null)};return this.instance&&this.isPlaying&&(this.instance.prepare_context_menu().forEach((m,g)=>{m.separatorBefore&&u(),o.push({text:m.caption+(m.checked?` (${i})`:""),onClick:async()=>{var k;return(k=this.instance)==null?void 0:k.run_context_menu_callback(g)},enabled:m.enabled})}),u()),this.fullscreenEnabled&&(this.isFullscreen?o.push({text:ne("context-menu-exit-fullscreen"),onClick:async()=>this.setFullscreen(!1)}):o.push({text:ne("context-menu-enter-fullscreen"),onClick:async()=>this.setFullscreen(!0)})),o.push({text:ne("context-menu-volume-controls"),onClick:async()=>{this.openVolumeControls()}}),this.instance&&this.swfUrl&&this.loadedConfig&&this.loadedConfig.showSwfDownload===!0&&(u(),o.push({text:ne("context-menu-download-swf"),onClick:this.downloadSwf.bind(this)})),navigator.clipboard&&window.isSecureContext&&o.push({text:ne("context-menu-copy-debug-info"),onClick:()=>navigator.clipboard.writeText(this.getPanicData())}),this.checkSaves()&&o.push({text:ne("context-menu-open-save-manager"),onClick:this.openSaveManager.bind(this)}),u(),o.push({text:ne("context-menu-about-ruffle",{flavor:Ut?"extension":"",version:Cn.versionName}),async onClick(){window.open(ri,"_blank")}}),this.isTouch&&(u(),o.push({text:ne("context-menu-hide"),onClick:async()=>{this.contextMenuForceDisabled=!0}})),o}pointerDown(i){this.pointerDownPosition=new xp(i.pageX,i.pageY),this.pointerMoveMaxDistance=0,this.startLongPressTimer()}clearLongPressTimer(){this.longPressTimer&&(clearTimeout(this.longPressTimer),this.longPressTimer=null)}startLongPressTimer(){this.clearLongPressTimer(),this.longPressTimer=setTimeout(()=>this.clearLongPressTimer(),800)}checkLongPressMovement(i){if(this.pointerDownPosition!==null){const o=new xp(i.pageX,i.pageY),u=this.pointerDownPosition.distanceTo(o);u>this.pointerMoveMaxDistance&&(this.pointerMoveMaxDistance=u)}}checkLongPress(i){this.longPressTimer?this.clearLongPressTimer():!this.contextMenuSupported&&i.pointerType!=="mouse"&&this.pointerMoveMaxDistance<15&&this.showContextMenu(i)}suppressContextMenu(){this._suppressContextMenu=!0}showContextMenu(i){var M,L;if(this.panicked)return;if(i.preventDefault(),this._suppressContextMenu){this._suppressContextMenu=!1;return}if(this.shadow.querySelectorAll(".modal:not(.hidden)").length!==0||(i.type==="contextmenu"?(this.contextMenuSupported=!0,document.documentElement.addEventListener("click",this.hideContextMenu.bind(this),{once:!0})):(document.documentElement.addEventListener("pointerup",this.hideContextMenu.bind(this),{once:!0}),i.stopPropagation()),[!1,Wa.Off].includes(((M=this.loadedConfig)==null?void 0:M.contextMenu)??Wa.On)||this.isTouch&&((L=this.loadedConfig)==null?void 0:L.contextMenu)===Wa.RightClickOnly||this.contextMenuForceDisabled))return;for(;this.contextMenuElement.firstChild;)this.contextMenuElement.removeChild(this.contextMenuElement.firstChild);for(const Z of this.contextMenuItems())if(Z===null)this.contextMenuElement.appendChild(A.jsx("li",{class:"menu-separator",children:A.jsx("hr",{})}));else{const{text:J,onClick:I,enabled:ie}=Z,re=A.jsx("li",{class:{"menu-item":!0,disabled:ie===!1},"data-text":J,children:J});if(this.contextMenuElement.appendChild(re),ie!==!1){const Ue=async Me=>{Me.preventDefault(),Me.stopPropagation(),await I(Me),this.hideContextMenu()};this.contextMenuSupported?(re.addEventListener("click",Ue),re.addEventListener("contextmenu",Ue)):re.addEventListener("pointerup",Ue)}}this.contextMenuOverlay.classList.remove("hidden");const o=this.element.getBoundingClientRect(),u=this.contextMenuElement.getBoundingClientRect(),f=document.scrollingElement||document.body,m=Math.max(0,i.clientX+u.width-f.clientWidth),g=Math.max(0,i.clientY+u.height-f.clientHeight),k=i.clientX-o.x-m,w=i.clientY-o.y-g,b=getComputedStyle(this.contextMenuElement).direction==="rtl";this.contextMenuElement.style.top=`${w}px`,b?(this.contextMenuElement.style.right=`${o.width-k}px`,this.contextMenuElement.style.left=""):(this.contextMenuElement.style.right="",this.contextMenuElement.style.left=`${k}px`)}hideContextMenu(){var i;(i=this.instance)==null||i.clear_custom_menu_items(),this.contextMenuOverlay.classList.add("hidden")}pause(){this.instance&&(this.instance.pause(),this.playButton.style.display="block")}audioState(){if(this.instance){const i=this.instance.audio_context();return i&&i.state||"running"}return"suspended"}unmuteOverlayClicked(){if(this.instance){if(this.audioState()!=="running"){const i=this.instance.audio_context();i&&i.resume()}this.unmuteOverlay.style.display="none"}}unmuteAudioContext(){if(!Mr){if(navigator.maxTouchPoints<1){Mr=!0;return}"audioSession"in navigator?navigator.audioSession.type="playback":this.container.addEventListener("click",()=>{var u;if(Mr)return;const i=(u=this.instance)==null?void 0:u.audio_context();if(!i)return;const o=new Audio;o.src=(()=>{const f=new ArrayBuffer(10),m=new DataView(f),g=i.sampleRate;return m.setUint32(0,g,!0),m.setUint32(4,g,!0),m.setUint16(8,1,!0),`data:audio/wav;base64,UklGRisAAABXQVZFZm10IBAAAAABAAEA${window.btoa(String.fromCharCode(...new Uint8Array(f))).slice(0,13)}AgAZGF0YQcAAACAgICAgICAAAA=`})(),o.load(),o.play().then(()=>{Mr=!0}).catch(f=>{console.warn(`Failed to play dummy sound: ${f}`)})},{once:!0})}}static htmlDimensionToCssDimension(i){if(i){const o=i.match(Sy);if(o){let u=o[1];return o[3]||(u+="px"),u}}return null}callExternalInterface(i,o){var u;return(u=this.instance)==null?void 0:u.call_exposed_callback(i,o)}getObjectId(){return this.element.getAttribute("name")}set traceObserver(i){var o;(o=this.instance)==null||o.set_trace_observer(i)}getPanicData(){let i=`
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
`,i+=`Version: ${Cn.versionNumber}
`,i+=`Name: ${Cn.versionName}
`,i+=`Channel: ${Cn.versionChannel}
`,i+=`Built: ${Cn.buildDate}
`,i+=`Commit: ${Cn.commitHash}
`,i+=`Is extension: ${Ut}
`,i+=`
# Metadata
`,this.metadata)for(const[o,u]of Object.entries(this.metadata))i+=`${o}: ${u}
`;return i}panic(i){var f;if(this.panicked)return;this.panicked=!0,this.hideSplashScreen();const o=i;if(i instanceof Error&&(i.name==="AbortError"||i.message.includes("AbortError")))return;if(i instanceof Os){const m=(f=this.loadedConfig)==null?void 0:f.openInNewTab,g=this.loadedConfig&&"url"in this.loadedConfig?new URL(this.loadedConfig.url,document.baseURI):void 0;if(m&&g){this.addOpenInNewTabMessage(m,g);return}i=i.cause}const u=Object.assign([],{stackIndex:-1,avmStackIndex:-1});if(u.push(`# Error Info
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
`);u.push(this.getPanicData()),oy(this.container,o,u,this.swfUrl),this.destroy()}addOpenInNewTabMessage(i,o){var m,g;const u=new URL(o);if((m=this.loadedConfig)!=null&&m.parameters){const k=bs((g=this.loadedConfig)==null?void 0:g.parameters);Object.entries(k).forEach(([w,b])=>{u.searchParams.set(w,b)})}this.hideSplashScreen();const f=A.jsxs("div",{children:[Qe("message-cant-embed"),A.jsx("div",{children:A.jsx("a",{href:"#",onClick:()=>i(u),children:ne("open-in-new-tab")})})]});this.displayMessageOrElement(f,!0)}displayRootMovieDownloadFailedMessage(i,o){var f;const u=(f=this.loadedConfig)==null?void 0:f.openInNewTab;if(u&&this.swfUrl&&window.location.origin!==this.swfUrl.origin)this.addOpenInNewTabMessage(u,this.swfUrl);else{const m=o.includes("HTTP Status is not OK:"),g=i?new Gp(this.swfUrl):new Fp(this.swfUrl,m);this.panic(g)}}displayMessageOrElement(i,o){const u=i instanceof HTMLDivElement?i:A.jsx("p",{children:i}),f=o?null:A.jsx("div",{children:A.jsx("button",{id:"continue-btn",children:ne("continue")})}),m=A.jsx("div",{id:"message-overlay",children:A.jsxs("div",{class:"message",children:[u,f]})});if(this.container.prepend(m),!o){const g=this.container.querySelector("#continue-btn");g.onclick=()=>{m.parentNode.removeChild(m)}}}displayMessage(i){this.displayMessageOrElement(i)}displayRestoredFromBfcacheMessage(){if(this.container.querySelector("#message-overlay")!==null)return;const i=Qe("message-restored-from-bfcache");this.displayMessageOrElement(i);const o=this.container.querySelector("#message-overlay");(o.scrollWidth>o.offsetWidth||o.scrollHeight>o.offsetHeight)&&o.parentNode.removeChild(o)}displayUnsupportedVideo(i){const o=this.videoModal.querySelector("#video-holder");if(o){const u=A.jsx("video",{src:i,autoplay:!0,controls:!0,onContextMenu:f=>f.stopPropagation()});o.textContent="",o.appendChild(u),this.videoModal.classList.remove("hidden")}}displayClipboardModal(i){const o=this.clipboardModal.querySelector("#clipboard-modal-description");o&&(o.textContent=ne("clipboard-message-description",{variant:i?"access-denied":"unsupported"}),this.clipboardModal.classList.remove("hidden"))}hideSplashScreen(){this.splashScreen.classList.add("hidden"),this.container.classList.remove("hidden")}showSplashScreen(){this.splashScreen.classList.remove("hidden"),this.container.classList.add("hidden")}setMetadata(i){this.metadata=i,this._readyState=Xa.Loaded,this.hideSplashScreen(),this.element.dispatchEvent(new CustomEvent(qt.LOADED_METADATA)),this.element.dispatchEvent(new CustomEvent(qt.LOADED_DATA))}}qt.LOADED_METADATA="loadedmetadata";qt.LOADED_DATA="loadeddata";class zy{constructor(i,o){this.isMuted=i,this.volume=o}get_volume(){return this.isMuted?0:this.volume/100}}function qs(s,i){const o={url:s},u=i("allowNetworking");u!==null&&(o.allowNetworking=u);const f=$p(i("allowScriptAccess"),s);f!==null&&(o.allowScriptAccess=f);const m=i("bgcolor");m!==null&&(o.backgroundColor=m);const g=i("base");if(g!==null)if(g==="."){const ie=new URL(s,document.baseURI);o.base=new URL(g,ie).href}else o.base=g;const k=jp(i("menu"));k!==null&&(o.menu=k);const w=jp(i("allowFullScreen"));w!==null&&(o.allowFullscreen=w);const b=i("flashvars");b!==null&&(o.parameters=b);const M=i("quality");M!==null&&(o.quality=M);const L=i("salign");L!==null&&(o.salign=L);const Z=i("scale");Z!==null&&(o.scale=Z);const J=i("wmode");J!==null&&(o.wmode=J);const I=i("fullScreenAspectRatio");return I!==null&&(o.fullScreenAspectRatio=I),o}function Us(s){if(s){let i="",o="";try{const u=new URL(s,ri);i=u.pathname,o=u.hostname}catch{}if(i.startsWith("/v/")&&/^(?:(?:www\.|m\.)?youtube(?:-nocookie)?\.com)|(?:youtu\.be)$/i.test(o))return!0}return!1}function Ns(s,i){var f;const o=s.getAttribute(i),u=((f=window.RufflePlayer)==null?void 0:f.config)??{};if(o)try{const m=new URL(o);m.protocol==="http:"&&window.location.protocol==="https:"&&(!("upgradeToHttps"in u)||u.upgradeToHttps!==!1)&&(m.protocol="https:",s.setAttribute(i,m.toString()))}catch{}}function Gs(s){let i=s.parentElement;for(;i!==null;){switch(i.tagName){case"AUDIO":case"VIDEO":return!0}i=i.parentElement}return!1}function ys(s,i){const o=URL.createObjectURL(s),u=document.createElement("a");u.href=o,u.download=i,u.click(),URL.revokeObjectURL(o)}function Qp(s){const i=atob(s);return Uint8Array.from(i,o=>o.charCodeAt(0))}function xy(s,i){const o=Qp(s);return new Blob([o],{type:i})}function Or(s){try{const i=atob(s);return jy(i)}catch{return!1}}function jy(s){return s.charCodeAt(0)===0&&s.charCodeAt(1)===191&&s.slice(6,10)==="TCSO"&&[0,4,0,0,0,0].every((i,o)=>s.charCodeAt(10+o)===i)}function jp(s){switch(s==null?void 0:s.toLowerCase()){case"true":return!0;case"false":return!1;default:return null}}function $p(s,i){switch(s==null?void 0:s.toLowerCase()){case"always":return!0;case"never":return!1;case"samedomain":try{return new URL(window.location.href).origin===new URL(i,window.location.href).origin}catch{return!1}default:return null}}function Ey(){const s=new Intl.Locale(navigator.language);let i=null;if("getTextInfo"in s&&typeof s.getTextInfo=="function")i=s.getTextInfo();else if("textInfo"in s&&typeof s.textInfo=="object")i=s.textInfo;else return"ltr";return typeof i=="object"&&"direction"in i&&typeof i.direction=="string"&&i.direction||"ltr"}var Ay=function(s,i,o,u,f){if(u==="m")throw new TypeError("Private method is not writable");if(u==="a"&&!f)throw new TypeError("Private accessor was defined without a setter");if(typeof i=="function"?s!==i||!f:!i.has(s))throw new TypeError("Cannot write private member to an object whose class did not declare it");return u==="a"?f.call(s,o):f?f.value=o:i.set(s,o),o},Ce=function(s,i,o,u){if(o==="a"&&!u)throw new TypeError("Private accessor was defined without a getter");if(typeof i=="function"?s!==i||!u:!i.has(s))throw new TypeError("Cannot read private member from an object whose class did not declare it");return o==="m"?u:o==="a"?u.call(s):u?u.value:i.get(s)},Ee;class Ty{constructor(i){Ee.set(this,void 0),Ay(this,Ee,i,"f")}addFSCommandHandler(i){Ce(this,Ee,"f").addFSCommandHandler(i)}get readyState(){return Ce(this,Ee,"f")._readyState}get metadata(){return Ce(this,Ee,"f").metadata}get loadedConfig(){return Ce(this,Ee,"f").loadedConfig??null}async reload(){await Ce(this,Ee,"f").reload()}async load(i,o=!1){await Ce(this,Ee,"f").load(i,o)}resume(){Ce(this,Ee,"f").play()}get isPlaying(){return Ce(this,Ee,"f").isPlaying}get volume(){return Ce(this,Ee,"f").volume}set volume(i){Ce(this,Ee,"f").volume=i}get fullscreenEnabled(){return Ce(this,Ee,"f").fullscreenEnabled}get isFullscreen(){return Ce(this,Ee,"f").isFullscreen}setFullscreen(i){Ce(this,Ee,"f").setFullscreen(i)}requestFullscreen(){Ce(this,Ee,"f").enterFullscreen()}exitFullscreen(){Ce(this,Ee,"f").exitFullscreen()}async downloadSwf(){await Ce(this,Ee,"f").downloadSwf()}displayMessage(i){Ce(this,Ee,"f").displayMessage(i)}suspend(){Ce(this,Ee,"f").pause()}get suspended(){return!Ce(this,Ee,"f").isPlaying}set traceObserver(i){Ce(this,Ee,"f").traceObserver=i}get config(){return Ce(this,Ee,"f").config}set config(i){Ce(this,Ee,"f").config=i}callExternalInterface(i,...o){return Ce(this,Ee,"f").callExternalInterface(i,o)}}Ee=new WeakMap;var be=function(s,i,o,u){if(o==="a"&&!u)throw new TypeError("Private accessor was defined without a getter");if(typeof i=="function"?s!==i||!u:!i.has(s))throw new TypeError("Cannot read private member from an object whose class did not declare it");return o==="m"?u:o==="a"?u.call(s):u?u.value:i.get(s)},Ep=function(s,i,o,u,f){if(u==="m")throw new TypeError("Private method is not writable");if(u==="a"&&!f)throw new TypeError("Private accessor was defined without a setter");if(typeof i=="function"?s!==i||!f:!i.has(s))throw new TypeError("Cannot write private member to an object whose class did not declare it");return u==="a"?f.call(s,o):f?f.value=o:i.set(s,o),o},pe,ai;class el extends HTMLElement{get onFSCommand(){return be(this,ai,"f")}set onFSCommand(i){Ep(this,ai,i,"f")}get readyState(){return be(this,pe,"f")._readyState}get metadata(){return be(this,pe,"f").metadata}constructor(){super(),pe.set(this,void 0),ai.set(this,null),Ep(this,pe,new qt(this,()=>this.debugPlayerInfo(),i=>{try{Object.defineProperty(this,i,{value:(...o)=>be(this,pe,"f").callExternalInterface(i,o),configurable:!0})}catch(o){console.warn(`Error setting ExternalInterface legacy callback for ${i}`,o)}}),"f"),be(this,pe,"f").addFSCommandHandler((i,o)=>{var u;(u=be(this,ai,"f"))==null||u.call(this,i,o)})}ruffle(i){if((i??1)===1)return new Ty(be(this,pe,"f"));throw new Error(`Version ${i} not supported.`)}get loadedConfig(){return be(this,pe,"f").loadedConfig??null}connectedCallback(){be(this,pe,"f").updateStyles()}static get observedAttributes(){return["width","height","align"]}attributeChangedCallback(i,o,u){el.observedAttributes.includes(i)&&be(this,pe,"f").updateStyles()}disconnectedCallback(){be(this,pe,"f").destroy()}async reload(){await be(this,pe,"f").reload()}async load(i,o=!1){await be(this,pe,"f").load(i,o)}play(){be(this,pe,"f").play()}get isPlaying(){return be(this,pe,"f").isPlaying}get volume(){return be(this,pe,"f").volume}set volume(i){be(this,pe,"f").volume=i}get fullscreenEnabled(){return be(this,pe,"f").fullscreenEnabled}get isFullscreen(){return be(this,pe,"f").isFullscreen}setFullscreen(i){be(this,pe,"f").setFullscreen(i)}enterFullscreen(){be(this,pe,"f").enterFullscreen()}exitFullscreen(){be(this,pe,"f").exitFullscreen()}async downloadSwf(){await be(this,pe,"f").downloadSwf()}pause(){be(this,pe,"f").pause()}set traceObserver(i){be(this,pe,"f").traceObserver=i}debugPlayerInfo(){return""}PercentLoaded(){return be(this,pe,"f")._readyState===Xa.Loaded?100:0}get config(){return be(this,pe,"f").config}set config(i){be(this,pe,"f").config=i}displayMessage(i){be(this,pe,"f").displayMessage(i)}}pe=new WeakMap,ai=new WeakMap;function Xp(s,i){if(s){for(const o of s.attributes)if(o.specified){if(o.name==="title"&&o.value==="Adobe Flash Player")continue;try{i.setAttribute(o.name,o.value)}catch{console.warn(`Unable to set attribute ${o.name} on Ruffle instance`)}}for(const o of Array.from(s.children))i.appendChild(o)}}class nl extends el{connectedCallback(){super.connectedCallback();const i=this.attributes.getNamedItem("src");if(i){const o=f=>{var m;return((m=this.attributes.getNamedItem(f))==null?void 0:m.value)??null},u=qs(i.value,o);this.load(u,!0)}}get nodeName(){return"EMBED"}get src(){var i;return(i=this.attributes.getNamedItem("src"))==null?void 0:i.value}set src(i){if(i){const o=document.createAttribute("src");o.value=i,this.attributes.setNamedItem(o)}else this.attributes.removeNamedItem("src")}static get observedAttributes(){return[...el.observedAttributes,"src"]}attributeChangedCallback(i,o,u){if(super.attributeChangedCallback(i,o,u),this.isConnected&&i==="src"){const f=this.attributes.getNamedItem("src");if(f){const m=k=>{var w;return((w=this.attributes.getNamedItem(k))==null?void 0:w.value)??null},g=qs(f.value,m);this.load(g,!0)}}}static isInterdictable(i){const o=i.getAttribute("src"),u=i.getAttribute("type");return!o||Gs(i)?!1:Us(o)?(Ns(i,"src"),!1):Yp(o,u)}static fromNativeEmbedElement(i){const o=Fs("ruffle-embed",nl),u=document.createElement(o);return Xp(i,u),u}get height(){return this.getAttribute("height")||""}set height(i){this.setAttribute("height",i)}get width(){return this.getAttribute("width")||""}set width(i){this.setAttribute("width",i)}get type(){return this.getAttribute("type")||""}set type(i){this.setAttribute("type",i)}}function Dy(s,i,o){i=i.toLowerCase();for(const[u,f]of Object.entries(s))if(u.toLowerCase()===i)return f;return o}function Ap(s){var o,u;const i={};for(const f of s.children)if(f instanceof HTMLParamElement){const m=(o=f.attributes.getNamedItem("name"))==null?void 0:o.value,g=(u=f.attributes.getNamedItem("value"))==null?void 0:u.value;m&&g&&(i[m]=g)}return i}class Ja extends el{constructor(){super(...arguments),this.params={}}connectedCallback(){var o;super.connectedCallback(),this.params=Ap(this);let i=null;if(this.attributes.getNamedItem("data")?i=(o=this.attributes.getNamedItem("data"))==null?void 0:o.value:this.params.movie&&(i=this.params.movie),i){const u=["allowNetworking","base","bgcolor","flashvars"],m=qs(i,g=>Dy(this.params,g,u.includes(g)?this.getAttribute(g):null));this.load(m,!0)}}debugPlayerInfo(){var u;let i=`Player type: Object
`,o=null;return this.attributes.getNamedItem("data")?o=(u=this.attributes.getNamedItem("data"))==null?void 0:u.value:this.params.movie&&(o=this.params.movie),i+=`SWF URL: ${o}
`,Object.keys(this.params).forEach(f=>{i+=`Param ${f}: ${this.params[f]}
`}),Object.keys(this.attributes).forEach(f=>{var m;i+=`Attribute ${f}: ${(m=this.attributes.getNamedItem(f))==null?void 0:m.value}
`}),i}get nodeName(){return"OBJECT"}get data(){return this.getAttribute("data")}set data(i){if(i){const o=document.createAttribute("data");o.value=i,this.attributes.setNamedItem(o)}else this.attributes.removeNamedItem("data")}static isInterdictable(i){var k,w,b;if(Gs(i)||i.getElementsByTagName("ruffle-object").length>0||i.getElementsByTagName("ruffle-embed").length>0)return!1;const o=(k=i.attributes.getNamedItem("data"))==null?void 0:k.value.toLowerCase(),u=((w=i.attributes.getNamedItem("type"))==null?void 0:w.value)??null,f=Ap(i);let m;if(o){if(Us(o))return Ns(i,"data"),!1;m=o}else if(f&&f.movie){if(Us(f.movie)){const M=i.querySelector("param[name='movie']");if(M){Ns(M,"value");const L=M.getAttribute("value");L&&i.setAttribute("data",L)}return!1}m=f.movie}else return!1;const g=(b=i.attributes.getNamedItem("classid"))==null?void 0:b.value.toLowerCase();return g===Kb.toLowerCase()?!Array.from(i.getElementsByTagName("object")).some(Ja.isInterdictable)&&!Array.from(i.getElementsByTagName("embed")).some(nl.isInterdictable):g?!1:Yp(m,u)}static fromNativeObjectElement(i){const o=Fs("ruffle-object",Ja),u=document.createElement(o);for(const f of Array.from(i.getElementsByTagName("embed")))nl.isInterdictable(f)&&f.remove();for(const f of Array.from(i.getElementsByTagName("object")))Ja.isInterdictable(f)&&f.remove();return Xp(i,u),u}get height(){return this.getAttribute("height")||""}set height(i){this.setAttribute("height",i)}get width(){return this.getAttribute("width")||""}set width(i){this.setAttribute("width",i)}get type(){return this.getAttribute("type")||""}set type(i){this.setAttribute("type",i)}}var Nt=function(s,i,o,u,f){if(u==="m")throw new TypeError("Private method is not writable");if(u==="a"&&!f)throw new TypeError("Private accessor was defined without a setter");if(typeof i=="function"?s!==i||!f:!i.has(s))throw new TypeError("Cannot write private member to an object whose class did not declare it");return u==="a"?f.call(s,o):f?f.value=o:i.set(s,o),o},Be=function(s,i,o,u){if(o==="a"&&!u)throw new TypeError("Private accessor was defined without a getter");if(typeof i=="function"?s!==i||!u:!i.has(s))throw new TypeError("Cannot read private member from an object whose class did not declare it");return o==="m"?u:o==="a"?u.call(s):u?u.value:i.get(s)},Ct,ni,ia,Cr,_r,qr,_t,ti;class Ls{constructor(i){if(Ct.set(this,void 0),ni.set(this,void 0),Nt(this,Ct,[],"f"),Nt(this,ni,{},"f"),i)for(let o=0;o<i.length;o++)this.install(i[o])}install(i){const o=new Wp(i),u=Be(this,Ct,"f").length;Be(this,Ct,"f").push(o),Be(this,ni,"f")[i.type]=o,Object.defineProperty(this,o.type,{configurable:!0,enumerable:!1,value:o}),this[u]=o}item(i){return Be(this,Ct,"f")[i>>>0]}namedItem(i){return Be(this,ni,"f")[i]}get length(){return Be(this,Ct,"f").length}[(Ct=new WeakMap,ni=new WeakMap,Symbol.iterator)](){return Be(this,Ct,"f")[Symbol.iterator]()}get[Symbol.toStringTag](){return"MimeTypeArray"}}class Wp{constructor(i){ia.set(this,void 0),Nt(this,ia,i,"f")}get type(){return Be(this,ia,"f").type}get description(){return Be(this,ia,"f").description}get suffixes(){return Be(this,ia,"f").suffixes}get enabledPlugin(){return Be(this,ia,"f").enabledPlugin}get[(ia=new WeakMap,Symbol.toStringTag)](){return"MimeType"}}class My extends Ls{constructor(i,o,u){super(),Cr.set(this,void 0),_r.set(this,void 0),qr.set(this,void 0),Nt(this,Cr,i,"f"),Nt(this,_r,o,"f"),Nt(this,qr,u,"f")}get name(){return Be(this,Cr,"f")}get description(){return Be(this,_r,"f")}get filename(){return Be(this,qr,"f")}get[(Cr=new WeakMap,_r=new WeakMap,qr=new WeakMap,Symbol.toStringTag)](){return"Plugin"}}class Tp{constructor(i){_t.set(this,void 0),ti.set(this,void 0),Nt(this,_t,[],"f"),Nt(this,ti,{},"f");for(let o=0;o<i.length;o++)this.install(i[o])}install(i){const o=Be(this,_t,"f").length;Be(this,_t,"f").push(i),Be(this,ti,"f")[i.name]=i,Object.defineProperty(this,i.name,{configurable:!0,enumerable:!1,value:i}),this[o]=i}item(i){return Be(this,_t,"f")[i>>>0]}namedItem(i){return Be(this,ti,"f")[i]}refresh(){}[(_t=new WeakMap,ti=new WeakMap,Symbol.iterator)](){return Be(this,_t,"f")[Symbol.iterator]()}get[Symbol.toStringTag](){return"PluginArray"}get length(){return Be(this,_t,"f").length}}const rt=new My("Shockwave Flash","Shockwave Flash 32.0 r0","ruffle.js");rt.install({type:Hp,description:"Shockwave Flash",suffixes:"spl",enabledPlugin:rt});rt.install({type:Lp,description:"Shockwave Flash",suffixes:"swf",enabledPlugin:rt});rt.install({type:Bp,description:"Shockwave Flash",suffixes:"swf",enabledPlugin:rt});rt.install({type:Vp,description:"Shockwave Flash",suffixes:"swf",enabledPlugin:rt});function Oy(s){if(navigator.plugins.namedItem("Shockwave Flash"))return;(!("install"in navigator.plugins)||!navigator.plugins.install)&&(Object.defineProperty(window,"PluginArray",{value:Tp}),Object.defineProperty(navigator,"plugins",{value:new Tp(navigator.plugins),writable:!1})),navigator.plugins.install(s),s.length>0&&(!("install"in navigator.mimeTypes)||!navigator.mimeTypes.install)&&(Object.defineProperty(window,"MimeTypeArray",{value:Ls}),Object.defineProperty(window,"MimeType",{value:Wp}),Object.defineProperty(navigator,"mimeTypes",{value:new Ls(navigator.mimeTypes),writable:!1}));const o=navigator.mimeTypes;for(let u=0;u<s.length;u+=1)o.install(s[u])}function Cy(s){let i=(ii==null?void 0:ii.href)??"";return!Ut&&"publicPath"in s&&s.publicPath!==null&&s.publicPath!==void 0&&(i=s.publicPath),i!==""&&!i.endsWith("/")&&(i+="/"),i}var Mp;const ci=((Mp=window.RufflePlayer)==null?void 0:Mp.config)??{},_y=Cy(ci)+"ruffle.js";let ws,ks;function qy(){var s;return"favorFlash"in ci&&ci.favorFlash===!1?!1:(((s=navigator.plugins.namedItem("Shockwave Flash"))==null?void 0:s.filename)??"ruffle.js")!=="ruffle.js"}function Kp(){try{ws=ws??document.getElementsByTagName("object"),ks=ks??document.getElementsByTagName("embed");for(const s of Array.from(ws))if(Ja.isInterdictable(s)){const i=Ja.fromNativeObjectElement(s);s.replaceWith(i)}for(const s of Array.from(ks))if(nl.isInterdictable(s)){const i=nl.fromNativeEmbedElement(s);s.replaceWith(i)}}catch(s){console.error(`Serious error encountered when polyfilling native Flash elements: ${s}`)}}let Rs,Ss;function Jp(){Rs=Rs??document.getElementsByTagName("iframe"),Ss=Ss??document.getElementsByTagName("frame"),[Rs,Ss].forEach(s=>{for(const i of s){if(i.dataset.rufflePolyfilled!==void 0)continue;i.dataset.rufflePolyfilled="";const o=i.contentWindow,u=`Couldn't load Ruffle into ${i.tagName}[${i.src}]: `;try{o.document.readyState==="complete"&&Dp(o,u)}catch(f){Ut||console.warn(u+f)}i.addEventListener("load",()=>{Dp(o,u)},!1)}})}async function Dp(s,i){await new Promise(u=>{window.setTimeout(()=>{u()},100)});let o;try{if(o=s.document,!o)return}catch(u){Ut||console.warn(i+u);return}if(!(!Ut&&o.documentElement.dataset.ruffleOptout!==void 0)){if(Ut)s.RufflePlayer||(s.RufflePlayer={}),s.RufflePlayer.config={...ci,...s.RufflePlayer.config??{}};else if(!s.RufflePlayer){const u=o.createElement("script");u.setAttribute("src",_y),u.onload=()=>{s.RufflePlayer={},s.RufflePlayer.config=ci},o.head.appendChild(u)}}}function Uy(){new MutationObserver(function(i){i.some(u=>Array.from(u.addedNodes).some(f=>["EMBED","OBJECT"].includes(f.nodeName)||f instanceof Element&&f.querySelector("embed, object")!==null))&&(Kp(),Jp())}).observe(document,{childList:!0,subtree:!0})}function Ny(){Oy(rt)}function Ly(){qy()||(Kp(),Jp(),Uy())}const oi={version:Cn.versionNumber+"+"+Cn.buildDate.substring(0,10),polyfill(){Ly()},pluginPolyfill(){Ny()},createPlayer(){const s=Fs("ruffle-player",el);return document.createElement(s)},options:{}};function Hy(s,i={}){let o;window.RufflePlayer instanceof Wm?o=window.RufflePlayer:(o=new Wm(window.RufflePlayer),window.RufflePlayer=o),o.sources[s]=oi,oi.options=i,("polyfills"in o.config?o.config.polyfills:!0)!==!1&&oi.pluginPolyfill()}Hy("local");Og.createRoot(document.getElementById("root")).render(N.jsx(zs.StrictMode,{children:N.jsx(Hg,{ruffleBaseConfig:{autoplay:Pa.On,unmuteOverlay:ui.Hidden,logLevel:Nr.Warn,letterbox:Ur.On,forceScale:!0,forceAlign:!0},allowSampleSwfs:!0,allowUrlLoading:!1})}));
