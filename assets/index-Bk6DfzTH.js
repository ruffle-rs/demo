const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ruffle_web-C-SP2psu.js","./ruffle-imports-29akwK1q.js","./ruffle_web-wasm_mvp-BnWTB4dR.js"])))=>i.map(i=>d[i]);
var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function S(){}var C={H:null,A:null,T:null,S:null},te=Object.prototype.hasOwnProperty;function ne(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function re(e,t){return ne(e.type,t,e.props)}function ie(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ae(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var oe=/\/+/g;function se(e,t){return typeof e==`object`&&e&&e.key!=null?ae(``+e.key):t.toString(36)}function ce(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(S,S):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function le(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,le(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+se(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(oe,`$&/`)+`/`),le(o,r,i,``,function(e){return e})):o!=null&&(ie(o)&&(o=re(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(oe,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+se(a,u),c+=le(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+se(a,u++),c+=le(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return le(ce(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ue(e,t,n){if(e==null)return e;var r=[],i=0;return le(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function de(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var w=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},T={map:ue,forEach:function(e,t,n){ue(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ue(e,function(){t++}),t},toArray:function(e){return ue(e,function(e){return e})||[]},only:function(e){if(!ie(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=T,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!te.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ne(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)te.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ne(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ie,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:de}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=C.T,n={};C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(S,w)}catch(e){w(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}},e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.2.7`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,ee||(ee=!0,ie());else{var t=n(l);t!==null&&se(x,t.startTime-e)}}var ee=!1,S=-1,C=5,te=-1;function ne(){return g?!0:!(e.unstable_now()-te<C)}function re(){if(g=!1,ee){var t=e.unstable_now();te=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(S),S=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&se(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?ie():ee=!1}}}var ie;if(typeof y==`function`)ie=function(){y(re)};else if(typeof MessageChannel<`u`){var ae=new MessageChannel,oe=ae.port2;ae.port1.onmessage=re,ie=function(){oe.postMessage(null)}}else ie=function(){_(re,0)};function se(t,n){S=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(S),S=-1):h=!0,se(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,ie()))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.7`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),S=Symbol.for(`react.context`),C=Symbol.for(`react.forward_ref`),te=Symbol.for(`react.suspense`),ne=Symbol.for(`react.suspense_list`),re=Symbol.for(`react.memo`),ie=Symbol.for(`react.lazy`),ae=Symbol.for(`react.activity`),oe=Symbol.for(`react.memo_cache_sentinel`),se=Symbol.iterator;function ce(e){return typeof e!=`object`||!e?null:(e=se&&e[se]||e[`@@iterator`],typeof e==`function`?e:null)}var le=Symbol.for(`react.client.reference`);function ue(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===le?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case te:return`Suspense`;case ne:return`SuspenseList`;case ae:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case S:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case C:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case re:return t=e.displayName||null,t===null?ue(e.type)||`Memo`:t;case ie:t=e._payload,e=e._init;try{return ue(e(t))}catch{}}return null}var de=Array.isArray,w=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,T=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fe={pending:!1,data:null,method:null,action:null},pe=[],me=-1;function he(e){return{current:e}}function ge(e){0>me||(e.current=pe[me],pe[me]=null,me--)}function E(e,t){me++,pe[me]=e.current,e.current=t}var _e=he(null),ve=he(null),ye=he(null),be=he(null);function xe(e,t){switch(E(ye,t),E(ve,e),E(_e,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}ge(_e),E(_e,e)}function Se(){ge(_e),ge(ve),ge(ye)}function Ce(e){e.memoizedState!==null&&E(be,e);var t=_e.current,n=Hd(t,e.type);t!==n&&(E(ve,e),E(_e,n))}function we(e){ve.current===e&&(ge(_e),ge(ve)),be.current===e&&(ge(be),Qf._currentValue=fe)}var Te,Ee;function De(e){if(Te===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Te=t&&t[1]||``,Ee=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Te+e+Ee}var Oe=!1;function ke(e,t){if(!e||Oe)return``;Oe=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Oe=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?De(n):``}function Ae(e,t){switch(e.tag){case 26:case 27:case 5:return De(e.type);case 16:return De(`Lazy`);case 13:return e.child!==t&&t!==null?De(`Suspense Fallback`):De(`Suspense`);case 19:return De(`SuspenseList`);case 0:case 15:return ke(e.type,!1);case 11:return ke(e.type.render,!1);case 1:return ke(e.type,!0);case 31:return De(`Activity`);default:return``}}function je(e){try{var t=``,n=null;do t+=Ae(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var D=Object.prototype.hasOwnProperty,Me=t.unstable_scheduleCallback,Ne=t.unstable_cancelCallback,Pe=t.unstable_shouldYield,Fe=t.unstable_requestPaint,Ie=t.unstable_now,Le=t.unstable_getCurrentPriorityLevel,Re=t.unstable_ImmediatePriority,O=t.unstable_UserBlockingPriority,ze=t.unstable_NormalPriority,Be=t.unstable_LowPriority,Ve=t.unstable_IdlePriority,He=t.log,Ue=t.unstable_setDisableYieldValue,We=null,Ge=null;function Ke(e){if(typeof He==`function`&&Ue(e),Ge&&typeof Ge.setStrictMode==`function`)try{Ge.setStrictMode(We,e)}catch{}}var qe=Math.clz32?Math.clz32:Xe,Je=Math.log,Ye=Math.LN2;function Xe(e){return e>>>=0,e===0?32:31-(Je(e)/Ye|0)|0}var Ze=256,Qe=262144,$e=4194304;function et(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function tt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=et(n))):i=et(o):i=et(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=et(n))):i=et(o)):i=et(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function nt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function rt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function it(){var e=$e;return $e<<=1,!($e&62914560)&&($e=4194304),e}function at(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ot(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function st(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-qe(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&ct(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function ct(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-qe(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function lt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-qe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ut(e,t){var n=t&-t;return n=n&42?1:dt(n),(n&(e.suspendedLanes|t))===0?n:0}function dt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ft(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function pt(){var e=T.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function mt(e,t){var n=T.p;try{return T.p=e,t()}finally{T.p=n}}var ht=Math.random().toString(36).slice(2),gt=`__reactFiber$`+ht,_t=`__reactProps$`+ht,vt=`__reactContainer$`+ht,yt=`__reactEvents$`+ht,bt=`__reactListeners$`+ht,xt=`__reactHandles$`+ht,St=`__reactResources$`+ht,Ct=`__reactMarker$`+ht;function wt(e){delete e[gt],delete e[_t],delete e[yt],delete e[bt],delete e[xt]}function Tt(e){var t=e[gt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[vt]||n[gt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[gt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Et(e){if(e=e[gt]||e[vt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Dt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Ot(e){var t=e[St];return t||=e[St]={hoistableStyles:new Map,hoistableScripts:new Map},t}function kt(e){e[Ct]=!0}var At=new Set,jt={};function Mt(e,t){Nt(e,t),Nt(e+`Capture`,t)}function Nt(e,t){for(jt[e]=t,e=0;e<t.length;e++)At.add(t[e])}var Pt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Ft={},It={};function Lt(e){return D.call(It,e)?!0:D.call(Ft,e)?!1:Pt.test(e)?It[e]=!0:(Ft[e]=!0,!1)}function Rt(e,t,n){if(Lt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function zt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Bt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Vt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Ht(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ut(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Wt(e){if(!e._valueTracker){var t=Ht(e)?`checked`:`value`;e._valueTracker=Ut(e,t,``+e[t])}}function Gt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Ht(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Kt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var qt=/[\n"\\]/g;function Jt(e){return e.replace(qt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Yt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Vt(t)):e.value!==``+Vt(t)&&(e.value=``+Vt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Zt(e,o,Vt(n)):Zt(e,o,Vt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Vt(s):e.removeAttribute(`name`)}function Xt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Wt(e);return}n=n==null?``:``+Vt(n),t=t==null?n:``+Vt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Wt(e)}function Zt(e,t,n){t===`number`&&Kt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Qt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Vt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function k(e,t,n){if(t!=null&&(t=``+Vt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Vt(n)}function $t(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(de(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Vt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Wt(e)}function en(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var tn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function nn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||tn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function rn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&nn(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&nn(e,o,t[o])}function an(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var on=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),sn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cn(e){return sn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function ln(){}var un=null;function dn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fn=null,pn=null;function mn(e){var t=Et(e);if(t&&(e=t.stateNode)){var n=e[_t]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Yt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Jt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[_t]||null;if(!a)throw Error(i(90));Yt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Gt(r)}break a;case`textarea`:k(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Qt(e,!!n.multiple,t,!1)}}}var hn=!1;function gn(e,t,n){if(hn)return e(t,n);hn=!0;try{return e(t)}finally{if(hn=!1,(fn!==null||pn!==null)&&(bu(),fn&&(t=fn,e=pn,pn=fn=null,mn(t),e)))for(t=0;t<e.length;t++)mn(e[t])}}function _n(e,t){var n=e.stateNode;if(n===null)return null;var r=n[_t]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var vn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),yn=!1;if(vn)try{var bn={};Object.defineProperty(bn,"passive",{get:function(){yn=!0}}),window.addEventListener(`test`,bn,bn),window.removeEventListener(`test`,bn,bn)}catch{yn=!1}var xn=null,Sn=null,Cn=null;function wn(){if(Cn)return Cn;var e,t=Sn,n=t.length,r,i=`value`in xn?xn.value:xn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Cn=i.slice(e,1<r?1-r:void 0)}function Tn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function En(){return!0}function Dn(){return!1}function On(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?En:Dn,this.isPropagationStopped=Dn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=En)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=En)},persist:function(){},isPersistent:En}),t}var A={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kn=On(A),An=h({},A,{view:0,detail:0}),jn=On(An),Mn,Nn,Pn,Fn=h({},An,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Pn&&(Pn&&e.type===`mousemove`?(Mn=e.screenX-Pn.screenX,Nn=e.screenY-Pn.screenY):Nn=Mn=0,Pn=e),Mn)},movementY:function(e){return`movementY`in e?e.movementY:Nn}}),In=On(Fn),Ln=On(h({},Fn,{dataTransfer:0})),Rn=On(h({},An,{relatedTarget:0})),zn=On(h({},A,{animationName:0,elapsedTime:0,pseudoElement:0})),Bn=On(h({},A,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Vn=On(h({},A,{data:0})),Hn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Un={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Wn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Gn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wn[e])?!!t[e]:!1}function Kn(){return Gn}var qn=On(h({},An,{key:function(e){if(e.key){var t=Hn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Tn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Un[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kn,charCode:function(e){return e.type===`keypress`?Tn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Tn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Jn=On(h({},Fn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Yn=On(h({},An,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kn})),Xn=On(h({},A,{propertyName:0,elapsedTime:0,pseudoElement:0})),j=On(h({},Fn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Zn=On(h({},A,{newState:0,oldState:0})),Qn=[9,13,27,32],$n=vn&&`CompositionEvent`in window,er=null;vn&&`documentMode`in document&&(er=document.documentMode);var tr=vn&&`TextEvent`in window&&!er,nr=vn&&(!$n||er&&8<er&&11>=er),rr=` `,ir=!1;function ar(e,t){switch(e){case`keyup`:return Qn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function or(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var sr=!1;function cr(e,t){switch(e){case`compositionend`:return or(t);case`keypress`:return t.which===32?(ir=!0,rr):null;case`textInput`:return e=t.data,e===rr&&ir?null:e;default:return null}}function lr(e,t){if(sr)return e===`compositionend`||!$n&&ar(e,t)?(e=wn(),Cn=Sn=xn=null,sr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return nr&&t.locale!==`ko`?null:t.data;default:return null}}var ur={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!ur[e.type]:t===`textarea`}function fr(e,t,n,r){fn?pn?pn.push(r):pn=[r]:fn=r,t=Ed(t,`onChange`),0<t.length&&(n=new kn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var pr=null,mr=null;function hr(e){yd(e,0)}function gr(e){if(Gt(Dt(e)))return e}function _r(e,t){if(e===`change`)return t}var vr=!1;if(vn){var yr;if(vn){var M=`oninput`in document;if(!M){var N=document.createElement(`div`);N.setAttribute(`oninput`,`return;`),M=typeof N.oninput==`function`}yr=M}else yr=!1;vr=yr&&(!document.documentMode||9<document.documentMode)}function br(){pr&&(pr.detachEvent(`onpropertychange`,P),mr=pr=null)}function P(e){if(e.propertyName===`value`&&gr(mr)){var t=[];fr(t,mr,e,dn(e)),gn(hr,t)}}function xr(e,t,n){e===`focusin`?(br(),pr=t,mr=n,pr.attachEvent(`onpropertychange`,P)):e===`focusout`&&br()}function F(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return gr(mr)}function Sr(e,t){if(e===`click`)return gr(t)}function Cr(e,t){if(e===`input`||e===`change`)return gr(t)}function wr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Tr=typeof Object.is==`function`?Object.is:wr;function Er(e,t){if(Tr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!D.call(t,i)||!Tr(e[i],t[i]))return!1}return!0}function Dr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Or(e,t){var n=Dr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Dr(n)}}function kr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?kr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function I(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Kt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Kt(e.document)}return t}function Ar(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var jr=vn&&`documentMode`in document&&11>=document.documentMode,Mr=null,Nr=null,Pr=null,Fr=!1;function Ir(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fr||Mr==null||Mr!==Kt(r)||(r=Mr,`selectionStart`in r&&Ar(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Pr&&Er(Pr,r)||(Pr=r,r=Ed(Nr,`onSelect`),0<r.length&&(t=new kn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Mr)))}function Lr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Rr={animationend:Lr(`Animation`,`AnimationEnd`),animationiteration:Lr(`Animation`,`AnimationIteration`),animationstart:Lr(`Animation`,`AnimationStart`),transitionrun:Lr(`Transition`,`TransitionRun`),transitionstart:Lr(`Transition`,`TransitionStart`),transitioncancel:Lr(`Transition`,`TransitionCancel`),transitionend:Lr(`Transition`,`TransitionEnd`)},zr={},Br={};vn&&(Br=document.createElement(`div`).style,`AnimationEvent`in window||(delete Rr.animationend.animation,delete Rr.animationiteration.animation,delete Rr.animationstart.animation),`TransitionEvent`in window||delete Rr.transitionend.transition);function Vr(e){if(zr[e])return zr[e];if(!Rr[e])return e;var t=Rr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Br)return zr[e]=t[n];return e}var Hr=Vr(`animationend`),Ur=Vr(`animationiteration`),Wr=Vr(`animationstart`),Gr=Vr(`transitionrun`),Kr=Vr(`transitionstart`),qr=Vr(`transitioncancel`),Jr=Vr(`transitionend`),Yr=new Map,Xr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Xr.push(`scrollEnd`);function Zr(e,t){Yr.set(e,t),Mt(t,[e])}var Qr=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},$r=[],ei=0,ti=0;function ni(){for(var e=ei,t=ti=ei=0;t<e;){var n=$r[t];$r[t++]=null;var r=$r[t];$r[t++]=null;var i=$r[t];$r[t++]=null;var a=$r[t];if($r[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&oi(n,i,a)}}function ri(e,t,n,r){$r[ei++]=e,$r[ei++]=t,$r[ei++]=n,$r[ei++]=r,ti|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ii(e,t,n,r){return ri(e,t,n,r),si(e)}function ai(e,t){return ri(e,null,null,t),si(e)}function oi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-qe(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function si(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ci={};function li(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ui(e,t,n,r){return new li(e,t,n,r)}function di(e){return e=e.prototype,!(!e||!e.isReactComponent)}function fi(e,t){var n=e.alternate;return n===null?(n=ui(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function pi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function mi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)di(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,_e.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ae:return e=ui(31,n,t,a),e.elementType=ae,e.lanes=o,e;case y:return hi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=ui(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case te:return e=ui(13,n,t,a),e.elementType=te,e.lanes=o,e;case ne:return e=ui(19,n,t,a),e.elementType=ne,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case S:s=10;break a;case ee:s=9;break a;case C:s=11;break a;case re:s=14;break a;case ie:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=ui(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function hi(e,t,n,r){return e=ui(7,e,r,t),e.lanes=n,e}function gi(e,t,n){return e=ui(6,e,null,t),e.lanes=n,e}function _i(e){var t=ui(18,null,null,0);return t.stateNode=e,t}function vi(e,t,n){return t=ui(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var yi=new WeakMap;function bi(e,t){if(typeof e==`object`&&e){var n=yi.get(e);return n===void 0?(t={value:e,source:t,stack:je(t)},yi.set(e,t),t):n}return{value:e,source:t,stack:je(t)}}var xi=[],Si=0,Ci=null,wi=0,Ti=[],Ei=0,Di=null,Oi=1,ki=``;function Ai(e,t){xi[Si++]=wi,xi[Si++]=Ci,Ci=e,wi=t}function ji(e,t,n){Ti[Ei++]=Oi,Ti[Ei++]=ki,Ti[Ei++]=Di,Di=e;var r=Oi;e=ki;var i=32-qe(r)-1;r&=~(1<<i),n+=1;var a=32-qe(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Oi=1<<32-qe(t)+i|n<<i|r,ki=a+e}else Oi=1<<a|n<<i|r,ki=e}function Mi(e){e.return!==null&&(Ai(e,1),ji(e,1,0))}function Ni(e){for(;e===Ci;)Ci=xi[--Si],xi[Si]=null,wi=xi[--Si],xi[Si]=null;for(;e===Di;)Di=Ti[--Ei],Ti[Ei]=null,ki=Ti[--Ei],Ti[Ei]=null,Oi=Ti[--Ei],Ti[Ei]=null}function Pi(e,t){Ti[Ei++]=Oi,Ti[Ei++]=ki,Ti[Ei++]=Di,Oi=t.id,ki=t.overflow,Di=e}var Fi=null,L=null,R=!1,Ii=null,Li=!1,Ri=Error(i(519));function zi(e){throw Gi(bi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Ri}function Bi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[gt]=e,t[_t]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Xt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),$t(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=ln),t=!0):t=!1,t||zi(e,!0)}function Vi(e){for(Fi=e.return;Fi;)switch(Fi.tag){case 5:case 31:case 13:Li=!1;return;case 27:case 3:Li=!0;return;default:Fi=Fi.return}}function Hi(e){if(e!==Fi)return!1;if(!R)return Vi(e),R=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&L&&zi(e),Vi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));L=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));L=uf(e)}else t===27?(t=L,Zd(e.type)?(e=lf,lf=null,L=e):L=t):L=Fi?cf(e.stateNode.nextSibling):null;return!0}function Ui(){L=Fi=null,R=!1}function Wi(){var e=Ii;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Ii=null),e}function Gi(e){Ii===null?Ii=[e]:Ii.push(e)}var Ki=he(null),qi=null,Ji=null;function Yi(e,t,n){E(Ki,t._currentValue),t._currentValue=n}function Xi(e){e._currentValue=Ki.current,ge(Ki)}function Zi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Qi(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Zi(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Zi(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function $i(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Tr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===be.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&Qi(t,e,n,r),t.flags|=262144}function ea(e){for(e=e.firstContext;e!==null;){if(!Tr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ta(e){qi=e,Ji=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function na(e){return ia(qi,e)}function ra(e,t){return qi===null&&ta(e),ia(e,t)}function ia(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ji===null){if(e===null)throw Error(i(308));Ji=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ji=Ji.next=t;return n}var aa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},oa=t.unstable_scheduleCallback,sa=t.unstable_NormalPriority,ca={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function la(){return{controller:new aa,data:new Map,refCount:0}}function ua(e){e.refCount--,e.refCount===0&&oa(sa,function(){e.controller.abort()})}var da=null,fa=0,pa=0,ma=null;function ha(e,t){if(da===null){var n=da=[];fa=0,pa=dd(),ma={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return fa++,t.then(ga,ga),t}function ga(){if(--fa===0&&da!==null){ma!==null&&(ma.status=`fulfilled`);var e=da;da=null,pa=0,ma=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function _a(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var va=w.S;w.S=function(e,t){eu=Ie(),typeof t==`object`&&t&&typeof t.then==`function`&&ha(e,t),va!==null&&va(e,t)};var ya=he(null);function ba(){var e=ya.current;return e===null?K.pooledCache:e}function xa(e,t){t===null?E(ya,ya.current):E(ya,t.pool)}function Sa(){var e=ba();return e===null?null:{parent:ca._currentValue,pool:e}}var Ca=Error(i(460)),wa=Error(i(474)),Ta=Error(i(542)),Ea={then:function(){}};function Da(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Oa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ln,ln),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ma(e),e;default:if(typeof t.status==`string`)t.then(ln,ln);else{if(e=K,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ma(e),e}throw Aa=t,Ca}}function ka(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Aa=e,Ca):e}}var Aa=null;function ja(){if(Aa===null)throw Error(i(459));var e=Aa;return Aa=null,e}function Ma(e){if(e===Ca||e===Ta)throw Error(i(483))}var Na=null,Pa=0;function Fa(e){var t=Pa;return Pa+=1,Na===null&&(Na=[]),Oa(Na,e,t)}function Ia(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function La(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ra(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=fi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=gi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===ie&&ka(i)===t.type)?(t=a(t,n.props),Ia(t,n),t.return=e,t):(t=mi(n.type,n.key,n.props,null,e.mode,r),Ia(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=vi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=hi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=gi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=mi(t.type,t.key,t.props,null,e.mode,n),Ia(n,t),n.return=e,n;case v:return t=vi(t,e.mode,n),t.return=e,t;case ie:return t=ka(t),f(e,t,n)}if(de(t)||ce(t))return t=hi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Fa(t),n);if(t.$$typeof===S)return f(e,ra(e,t),n);La(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case ie:return n=ka(n),p(e,t,n,r)}if(de(n)||ce(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Fa(n),r);if(n.$$typeof===S)return p(e,t,ra(e,n),r);La(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case ie:return r=ka(r),m(e,t,n,r,i)}if(de(r)||ce(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Fa(r),i);if(r.$$typeof===S)return m(e,t,n,ra(t,r),i);La(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),R&&Ai(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return R&&Ai(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),R&&Ai(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),R&&Ai(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return R&&Ai(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),R&&Ai(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===ie&&ka(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ia(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=hi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=mi(o.type,o.key,o.props,null,e.mode,c),Ia(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=vi(o,e.mode,c),c.return=e,e=c}return s(e);case ie:return o=ka(o),b(e,r,o,c)}if(de(o))return h(e,r,o,c);if(ce(o)){if(l=ce(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Fa(o),c);if(o.$$typeof===S)return b(e,r,ra(e,o),c);La(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=gi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Pa=0;var i=b(e,t,n,r);return Na=null,i}catch(t){if(t===Ca||t===Ta)throw t;var a=ui(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var za=Ra(!0),Ba=Ra(!1),Va=!1;function Ha(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ua(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Wa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ga(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=si(e),oi(e,null,n),t}return ri(e,r,t,n),si(e)}function Ka(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lt(e,n)}}function qa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ja=!1;function Ya(){if(Ja){var e=ma;if(e!==null)throw e}}function Xa(e,t,n,r){Ja=!1;var i=e.updateQueue;Va=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(J&f)===f:(r&f)===f){f!==0&&f===pa&&(Ja=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Va=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function Za(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Qa(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Za(n[e],t)}var $a=he(null),eo=he(0);function to(e,t){e=Wl,E(eo,e),E($a,t),Wl=e|t.baseLanes}function no(){E(eo,Wl),E($a,$a.current)}function ro(){Wl=eo.current,ge($a),ge(eo)}var io=he(null),ao=null;function oo(e){var t=e.alternate;E(z,z.current&1),E(io,e),ao===null&&(t===null||$a.current!==null||t.memoizedState!==null)&&(ao=e)}function so(e){E(z,z.current),E(io,e),ao===null&&(ao=e)}function co(e){e.tag===22?(E(z,z.current),E(io,e),ao===null&&(ao=e)):lo(e)}function lo(){E(z,z.current),E(io,io.current)}function uo(e){ge(io),ao===e&&(ao=null),ge(z)}var z=he(0);function fo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var po=0,B=null,V=null,mo=null,ho=!1,go=!1,_o=!1,vo=0,yo=0,bo=null,xo=0;function H(){throw Error(i(321))}function So(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Tr(e[n],t[n]))return!1;return!0}function Co(e,t,n,r,i,a){return po=a,B=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,w.H=e===null||e.memoizedState===null?Bs:Vs,_o=!1,a=n(r,i),_o=!1,go&&(a=To(t,n,r,i)),wo(e),a}function wo(e){w.H=zs;var t=V!==null&&V.next!==null;if(po=0,mo=V=B=null,ho=!1,yo=0,bo=null,t)throw Error(i(300));e===null||ic||(e=e.dependencies,e!==null&&ea(e)&&(ic=!0))}function To(e,t,n,r){B=e;var a=0;do{if(go&&(bo=null),yo=0,go=!1,25<=a)throw Error(i(301));if(a+=1,mo=V=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}w.H=Hs,o=t(n,r)}while(go);return o}function Eo(){var e=w.H,t=e.useState()[0];return t=typeof t.then==`function`?No(t):t,e=e.useState()[0],(V===null?null:V.memoizedState)!==e&&(B.flags|=1024),t}function Do(){var e=vo!==0;return vo=0,e}function Oo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ko(e){if(ho){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ho=!1}po=0,mo=V=B=null,go=!1,yo=vo=0,bo=null}function Ao(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mo===null?B.memoizedState=mo=e:mo=mo.next=e,mo}function jo(){if(V===null){var e=B.alternate;e=e===null?null:e.memoizedState}else e=V.next;var t=mo===null?B.memoizedState:mo.next;if(t!==null)mo=t,V=e;else{if(e===null)throw B.alternate===null?Error(i(467)):Error(i(310));V=e,e={memoizedState:V.memoizedState,baseState:V.baseState,baseQueue:V.baseQueue,queue:V.queue,next:null},mo===null?B.memoizedState=mo=e:mo=mo.next=e}return mo}function Mo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function No(e){var t=yo;return yo+=1,bo===null&&(bo=[]),e=Oa(bo,e,t),t=B,(mo===null?t.memoizedState:mo.next)===null&&(t=t.alternate,w.H=t===null||t.memoizedState===null?Bs:Vs),e}function Po(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return No(e);if(e.$$typeof===S)return na(e)}throw Error(i(438,String(e)))}function Fo(e){var t=null,n=B.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=B.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Mo(),B.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=oe;return t.index++,n}function Io(e,t){return typeof t==`function`?t(e):t}function Lo(e){return Ro(jo(),V,e)}function Ro(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(po&f)===f:(J&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===pa&&(d=!0);else if((po&p)===p){u=u.next,p===pa&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,B.lanes|=p,Gl|=p;f=u.action,_o&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,B.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Tr(o,e.memoizedState)&&(ic=!0,d&&(n=ma,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function zo(e){var t=jo(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Tr(o,t.memoizedState)||(ic=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Bo(e,t,n){var r=B,a=jo(),o=R;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Tr((V||a).memoizedState,n);if(s&&(a.memoizedState=n,ic=!0),a=a.queue,ds(Uo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||mo!==null&&mo.memoizedState.tag&1){if(r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,a,n,t),null),K===null)throw Error(i(349));o||po&127||Vo(r,t,n)}return n}function Vo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=B.updateQueue,t===null?(t=Mo(),B.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ho(e,t,n,r){t.value=n,t.getSnapshot=r,Wo(t)&&Go(e)}function Uo(e,t,n){return n(function(){Wo(t)&&Go(e)})}function Wo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Tr(e,n)}catch{return!0}}function Go(e){var t=ai(e,2);t!==null&&hu(t,e,2)}function Ko(e){var t=Ao();if(typeof e==`function`){var n=e;if(e=n(),_o){Ke(!0);try{n()}finally{Ke(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:e},t}function qo(e,t,n,r){return e.baseState=n,Ro(e,V,typeof r==`function`?r:Io)}function Jo(e,t,n,r,a){if(Is(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};w.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Yo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Yo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=w.T,o={};w.T=o;try{var s=n(i,r),c=w.S;c!==null&&c(o,s),Xo(e,t,s)}catch(n){Qo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),w.T=a}}else try{a=n(i,r),Xo(e,t,a)}catch(n){Qo(e,t,n)}}function Xo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Zo(e,t,n)},function(n){return Qo(e,t,n)}):Zo(e,t,n)}function Zo(e,t,n){t.status=`fulfilled`,t.value=n,$o(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Yo(e,n)))}function Qo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,$o(t),t=t.next;while(t!==r)}e.action=null}function $o(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function es(e,t){return t}function ts(e,t){if(R){var n=K.formState;if(n!==null){a:{var r=B;if(R){if(L){b:{for(var i=L,a=Li;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){L=cf(i.nextSibling),r=i.data===`F!`;break a}}zi(r)}r=!1}r&&(t=n[0])}}return n=Ao(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:t},n.queue=r,n=Ns.bind(null,B,r),r.dispatch=n,r=Ko(!1),a=Fs.bind(null,B,!1,r.queue),r=Ao(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Jo.bind(null,B,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ns(e){return rs(jo(),V,e)}function rs(e,t,n){if(t=Ro(e,t,es)[0],e=Lo(Io)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=No(t)}catch(e){throw e===Ca?Ta:e}else r=t;t=jo();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(B.flags|=2048,os(9,{destroy:void 0},is.bind(null,i,n),null)),[r,a,e]}function is(e,t){e.action=t}function as(e){var t=jo(),n=V;if(n!==null)return rs(t,n,e);jo(),t=t.memoizedState,n=jo();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function os(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=B.updateQueue,t===null&&(t=Mo(),B.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ss(){return jo().memoizedState}function cs(e,t,n,r){var i=Ao();B.flags|=e,i.memoizedState=os(1|t,{destroy:void 0},n,r===void 0?null:r)}function ls(e,t,n,r){var i=jo();r=r===void 0?null:r;var a=i.memoizedState.inst;V!==null&&r!==null&&So(r,V.memoizedState.deps)?i.memoizedState=os(t,a,n,r):(B.flags|=e,i.memoizedState=os(1|t,a,n,r))}function us(e,t){cs(8390656,8,e,t)}function ds(e,t){ls(2048,8,e,t)}function fs(e){B.flags|=4;var t=B.updateQueue;if(t===null)t=Mo(),B.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ps(e){var t=jo().memoizedState;return fs({ref:t,nextImpl:e}),function(){if(G&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ms(e,t){return ls(4,2,e,t)}function hs(e,t){return ls(4,4,e,t)}function gs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _s(e,t,n){n=n==null?null:n.concat([e]),ls(4,4,gs.bind(null,t,e),n)}function vs(){}function ys(e,t){var n=jo();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&So(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bs(e,t){var n=jo();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&So(t,r[1]))return r[0];if(r=e(),_o){Ke(!0);try{e()}finally{Ke(!1)}}return n.memoizedState=[r,t],r}function xs(e,t,n){return n===void 0||po&1073741824&&!(J&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),B.lanes|=e,Gl|=e,n)}function Ss(e,t,n,r){return Tr(n,t)?n:$a.current===null?!(po&42)||po&1073741824&&!(J&261930)?(ic=!0,e.memoizedState=n):(e=mu(),B.lanes|=e,Gl|=e,t):(e=xs(e,n,r),Tr(e,t)||(ic=!0),e)}function Cs(e,t,n,r,i){var a=T.p;T.p=a!==0&&8>a?a:8;var o=w.T,s={};w.T=s,Fs(e,!1,t,n);try{var c=i(),l=w.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ps(e,t,_a(c,r),pu(e)):Ps(e,t,r,pu(e))}catch(n){Ps(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{T.p=a,o!==null&&s.types!==null&&(o.types=s.types),w.T=o}}function ws(){}function Ts(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Es(e).queue;Cs(e,a,t,fe,n===null?ws:function(){return Ds(e),n(r)})}function Es(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:fe,baseState:fe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:fe},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ds(e){var t=Es(e);t.next===null&&(t=e.alternate.memoizedState),Ps(e,t.next.queue,{},pu())}function Os(){return na(Qf)}function ks(){return jo().memoizedState}function As(){return jo().memoizedState}function js(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Wa(n);var r=Ga(t,e,n);r!==null&&(hu(r,t,n),Ka(r,t,n)),t={cache:la()},e.payload=t;return}t=t.return}}function Ms(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Is(e)?Ls(t,n):(n=ii(e,t,n,r),n!==null&&(hu(n,e,r),Rs(n,t,r)))}function Ns(e,t,n){Ps(e,t,n,pu())}function Ps(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Is(e))Ls(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Tr(s,o))return ri(e,t,i,0),K===null&&ni(),!1}catch{}if(n=ii(e,t,i,r),n!==null)return hu(n,e,r),Rs(n,t,r),!0}return!1}function Fs(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Is(e)){if(t)throw Error(i(479))}else t=ii(e,n,r,2),t!==null&&hu(t,e,2)}function Is(e){var t=e.alternate;return e===B||t!==null&&t===B}function Ls(e,t){go=ho=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lt(e,n)}}var zs={readContext:na,use:Po,useCallback:H,useContext:H,useEffect:H,useImperativeHandle:H,useLayoutEffect:H,useInsertionEffect:H,useMemo:H,useReducer:H,useRef:H,useState:H,useDebugValue:H,useDeferredValue:H,useTransition:H,useSyncExternalStore:H,useId:H,useHostTransitionStatus:H,useFormState:H,useActionState:H,useOptimistic:H,useMemoCache:H,useCacheRefresh:H};zs.useEffectEvent=H;var Bs={readContext:na,use:Po,useCallback:function(e,t){return Ao().memoizedState=[e,t===void 0?null:t],e},useContext:na,useEffect:us,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),cs(4194308,4,gs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return cs(4194308,4,e,t)},useInsertionEffect:function(e,t){cs(4,2,e,t)},useMemo:function(e,t){var n=Ao();t=t===void 0?null:t;var r=e();if(_o){Ke(!0);try{e()}finally{Ke(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Ao();if(n!==void 0){var i=n(t);if(_o){Ke(!0);try{n(t)}finally{Ke(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ms.bind(null,B,e),[r.memoizedState,e]},useRef:function(e){var t=Ao();return e={current:e},t.memoizedState=e},useState:function(e){e=Ko(e);var t=e.queue,n=Ns.bind(null,B,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:vs,useDeferredValue:function(e,t){return xs(Ao(),e,t)},useTransition:function(){var e=Ko(!1);return e=Cs.bind(null,B,e.queue,!0,!1),Ao().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=B,a=Ao();if(R){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),K===null)throw Error(i(349));J&127||Vo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,us(Uo.bind(null,r,o,e),[e]),r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,o,n,t),null),n},useId:function(){var e=Ao(),t=K.identifierPrefix;if(R){var n=ki,r=Oi;n=(r&~(1<<32-qe(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=vo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=xo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Os,useFormState:ts,useActionState:ts,useOptimistic:function(e){var t=Ao();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Fs.bind(null,B,!0,n),n.dispatch=t,[e,t]},useMemoCache:Fo,useCacheRefresh:function(){return Ao().memoizedState=js.bind(null,B)},useEffectEvent:function(e){var t=Ao(),n={impl:e};return t.memoizedState=n,function(){if(G&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Vs={readContext:na,use:Po,useCallback:ys,useContext:na,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:Lo,useRef:ss,useState:function(){return Lo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){return Ss(jo(),V.memoizedState,e,t)},useTransition:function(){var e=Lo(Io)[0],t=jo().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:ns,useActionState:ns,useOptimistic:function(e,t){return qo(jo(),V,e,t)},useMemoCache:Fo,useCacheRefresh:As};Vs.useEffectEvent=ps;var Hs={readContext:na,use:Po,useCallback:ys,useContext:na,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:zo,useRef:ss,useState:function(){return zo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){var n=jo();return V===null?xs(n,e,t):Ss(n,V.memoizedState,e,t)},useTransition:function(){var e=zo(Io)[0],t=jo().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:as,useActionState:as,useOptimistic:function(e,t){var n=jo();return V===null?(n.baseState=e,[e,n.queue.dispatch]):qo(n,V,e,t)},useMemoCache:Fo,useCacheRefresh:As};Hs.useEffectEvent=ps;function Us(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ws={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Wa(r);i.payload=t,n!=null&&(i.callback=n),t=Ga(e,i,r),t!==null&&(hu(t,e,r),Ka(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Wa(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ga(e,i,r),t!==null&&(hu(t,e,r),Ka(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Wa(n);r.tag=2,t!=null&&(r.callback=t),t=Ga(e,r,n),t!==null&&(hu(t,e,n),Ka(t,e,n))}};function Gs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Er(n,r)||!Er(i,a):!0}function Ks(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ws.enqueueReplaceState(t,t.state,null)}function qs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Js(e){Qr(e)}function Ys(e){console.error(e)}function Xs(e){Qr(e)}function Zs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Qs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function $s(e,t,n){return n=Wa(n),n.tag=3,n.payload={element:null},n.callback=function(){Zs(e,t)},n}function ec(e){return e=Wa(e),e.tag=3,e}function tc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Qs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Qs(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function nc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&$i(t,n,a,!0),n=io.current,n!==null){switch(n.tag){case 31:case 13:return ao===null?Du():n.alternate===null&&X===0&&(X=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Ea?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Ea?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(R)return t=io.current,t===null?(r!==Ri&&(t=Error(i(423),{cause:r}),Gi(bi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=bi(r,n),a=$s(e.stateNode,r,a),qa(e,a),X!==4&&(X=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Ri&&(e=Error(i(422),{cause:r}),Gi(bi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=bi(o,n),Xl===null?Xl=[o]:Xl.push(o),X!==4&&(X=2),t===null)return!0;r=bi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=$s(n.stateNode,r,e),qa(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=ec(a),tc(a,e,n,r),qa(n,a),!1}n=n.return}while(n!==null);return!1}var rc=Error(i(461)),ic=!1;function ac(e,t,n,r){t.child=e===null?Ba(t,null,n,r):za(t,e.child,n,r)}function oc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ta(t),r=Co(e,t,n,o,a,i),s=Do(),e!==null&&!ic?(Oo(e,t,i),Ac(e,t,i)):(R&&s&&Mi(t),t.flags|=1,ac(e,t,r,i),t.child)}function sc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!di(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,cc(e,t,a,r,i)):(e=mi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!jc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Er:n,n(o,r)&&e.ref===t.ref)return Ac(e,t,i)}return t.flags|=1,e=fi(a,r),e.ref=t.ref,e.return=t,t.child=e}function cc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Er(a,r)&&e.ref===t.ref)if(ic=!1,t.pendingProps=r=a,jc(e,i))e.flags&131072&&(ic=!0);else return t.lanes=e.lanes,Ac(e,t,i)}return gc(e,t,n,r,i)}function lc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return dc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&xa(t,a===null?null:a.cachePool),a===null?no():to(t,a),co(t);else return r=t.lanes=536870912,dc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&xa(t,null),no(),lo(t)):(xa(t,a.cachePool),to(t,a),lo(t),t.memoizedState=null);return ac(e,t,i,n),t.child}function uc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function dc(e,t,n,r,i){var a=ba();return a=a===null?null:{parent:ca._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&xa(t,null),no(),co(t),e!==null&&$i(e,t,r,!0),t.childLanes=i,null}function fc(e,t){return t=Tc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function pc(e,t,n){return za(t,e.child,null,n),e=fc(t,t.pendingProps),e.flags|=2,uo(t),t.memoizedState=null,e}function mc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(R){if(r.mode===`hidden`)return e=fc(t,r),t.lanes=536870912,uc(null,e);if(so(t),(e=L)?(e=rf(e,Li),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Di===null?null:{id:Oi,overflow:ki},retryLane:536870912,hydrationErrors:null},n=_i(e),n.return=t,t.child=n,Fi=t,L=null)):e=null,e===null)throw zi(t);return t.lanes=536870912,null}return fc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(so(t),a)if(t.flags&256)t.flags&=-257,t=pc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(ic||$i(e,t,n,!1),a=(n&e.childLanes)!==0,ic||a){if(r=K,r!==null&&(s=ut(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ai(e,s),hu(r,e,s),rc;Du(),t=pc(e,t,n)}else e=o.treeContext,L=cf(s.nextSibling),Fi=t,R=!0,Ii=null,Li=!1,e!==null&&Pi(t,e),t=fc(t,r),t.flags|=4096;return t}return e=fi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function hc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function gc(e,t,n,r,i){return ta(t),n=Co(e,t,n,r,void 0,i),r=Do(),e!==null&&!ic?(Oo(e,t,i),Ac(e,t,i)):(R&&r&&Mi(t),t.flags|=1,ac(e,t,n,i),t.child)}function _c(e,t,n,r,i,a){return ta(t),t.updateQueue=null,n=To(t,r,n,i),wo(e),r=Do(),e!==null&&!ic?(Oo(e,t,a),Ac(e,t,a)):(R&&r&&Mi(t),t.flags|=1,ac(e,t,n,a),t.child)}function vc(e,t,n,r,i){if(ta(t),t.stateNode===null){var a=ci,o=n.contextType;typeof o==`object`&&o&&(a=na(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ws,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ha(t),o=n.contextType,a.context=typeof o==`object`&&o?na(o):ci,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Us(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ws.enqueueReplaceState(a,a.state,null),Xa(t,r,a,i),Ya(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=qs(n,s);a.props=c;var l=a.context,u=n.contextType;o=ci,typeof u==`object`&&u&&(o=na(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ks(t,a,r,o),Va=!1;var f=t.memoizedState;a.state=f,Xa(t,r,a,i),Ya(),l=t.memoizedState,s||f!==l||Va?(typeof d==`function`&&(Us(t,n,d,r),l=t.memoizedState),(c=Va||Gs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ua(e,t),o=t.memoizedProps,u=qs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=ci,typeof l==`object`&&l&&(c=na(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ks(t,a,r,c),Va=!1,f=t.memoizedState,a.state=f,Xa(t,r,a,i),Ya();var p=t.memoizedState;o!==d||f!==p||Va||e!==null&&e.dependencies!==null&&ea(e.dependencies)?(typeof s==`function`&&(Us(t,n,s,r),p=t.memoizedState),(u=Va||Gs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ea(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,hc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=za(t,e.child,null,i),t.child=za(t,null,n,i)):ac(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Ac(e,t,i),e}function yc(e,t,n,r){return Ui(),t.flags|=256,ac(e,t,n,r),t.child}var bc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xc(e){return{baseLanes:e,cachePool:Sa()}}function Sc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function Cc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(z.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(R){if(a?oo(t):lo(t),(e=L)?(e=rf(e,Li),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Di===null?null:{id:Oi,overflow:ki},retryLane:536870912,hydrationErrors:null},n=_i(e),n.return=t,t.child=n,Fi=t,L=null)):e=null,e===null)throw zi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(lo(t),a=t.mode,c=Tc({mode:`hidden`,children:c},a),r=hi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(null,r)):(oo(t),wc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(oo(t),t.flags&=-257,t=Ec(e,t,n)):t.memoizedState===null?(lo(t),c=r.fallback,a=t.mode,r=Tc({mode:`visible`,children:r.children},a),c=hi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,za(t,e.child,null,n),r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,t=uc(null,r)):(lo(t),t.child=e.child,t.flags|=128,t=null);else if(oo(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Gi({value:r,source:null,stack:null}),t=Ec(e,t,n)}else if(ic||$i(e,t,n,!1),s=(n&e.childLanes)!==0,ic||s){if(s=K,s!==null&&(r=ut(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ai(e,r),hu(s,e,r),rc;af(c)||Du(),t=Ec(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,L=cf(c.nextSibling),Fi=t,R=!0,Ii=null,Li=!1,e!==null&&Pi(t,e),t=wc(t,r.children),t.flags|=4096);return t}return a?(lo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=fi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=hi(c,a,n,null),c.flags|=2):c=fi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,uc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=xc(n):(a=c.cachePool,a===null?a=Sa():(l=ca._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(e.child,r)):(oo(t),n=e.child,e=n.sibling,n=fi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function wc(e,t){return t=Tc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Tc(e,t){return e=ui(22,e,null,t),e.lanes=0,e}function Ec(e,t,n){return za(t,e.child,null,n),e=wc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Dc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Zi(e.return,t,n)}function Oc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function kc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=z.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,E(z,o),ac(e,t,r,n),r=R?wi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dc(e,n,t);else if(e.tag===19)Dc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&fo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Oc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&fo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Oc(t,!0,n,null,a,r);break;case`together`:Oc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Ac(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if($i(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=fi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=fi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&ea(e))):!0}function Mc(e,t,n){switch(t.tag){case 3:xe(t,t.stateNode.containerInfo),Yi(t,ca,e.memoizedState.cache),Ui();break;case 27:case 5:Ce(t);break;case 4:xe(t,t.stateNode.containerInfo);break;case 10:Yi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,so(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(oo(t),e=Ac(e,t,n),e===null?null:e.sibling):Cc(e,t,n):(oo(t),t.flags|=128,null);oo(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=($i(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return kc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),E(z,z.current),r)break;return null;case 22:return t.lanes=0,lc(e,t,n,t.pendingProps);case 24:Yi(t,ca,e.memoizedState.cache)}return Ac(e,t,n)}function Nc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ic=!0;else{if(!jc(e,n)&&!(t.flags&128))return ic=!1,Mc(e,t,n);ic=!!(e.flags&131072)}else ic=!1,R&&t.flags&1048576&&ji(t,wi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=ka(t.elementType),t.type=e,typeof e==`function`)di(e)?(r=qs(e,r),t.tag=1,t=vc(null,t,e,r,n)):(t.tag=0,t=gc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===C){t.tag=11,t=oc(null,t,e,r,n);break a}else if(a===re){t.tag=14,t=sc(null,t,e,r,n);break a}}throw t=ue(e)||e,Error(i(306,t,``))}}return t;case 0:return gc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=qs(r,t.pendingProps),vc(e,t,r,a,n);case 3:a:{if(xe(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ua(e,t),Xa(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Yi(t,ca,r),r!==o.cache&&Qi(t,[ca],n,!0),Ya(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=yc(e,t,r,n);break a}else if(r!==a){a=bi(Error(i(424)),t),Gi(a),t=yc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(L=cf(e.firstChild),Fi=t,R=!0,Ii=null,Li=!0,n=Ba(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ui(),r===a){t=Ac(e,t,n);break a}ac(e,t,r,n)}t=t.child}return t;case 26:return hc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:R||(n=t.type,e=t.pendingProps,r=Bd(ye.current).createElement(n),r[gt]=t,r[_t]=e,Pd(r,n,e),kt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ce(t),e===null&&R&&(r=t.stateNode=ff(t.type,t.pendingProps,ye.current),Fi=t,Li=!0,a=L,Zd(t.type)?(lf=a,L=cf(r.firstChild)):L=a),ac(e,t,t.pendingProps.children,n),hc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&R&&((a=r=L)&&(r=tf(r,t.type,t.pendingProps,Li),r===null?a=!1:(t.stateNode=r,Fi=t,L=cf(r.firstChild),Li=!1,a=!0)),a||zi(t)),Ce(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Co(e,t,Eo,null,null,n),Qf._currentValue=a),hc(e,t),ac(e,t,r,n),t.child;case 6:return e===null&&R&&((e=n=L)&&(n=nf(n,t.pendingProps,Li),n===null?e=!1:(t.stateNode=n,Fi=t,L=null,e=!0)),e||zi(t)),null;case 13:return Cc(e,t,n);case 4:return xe(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=za(t,null,r,n):ac(e,t,r,n),t.child;case 11:return oc(e,t,t.type,t.pendingProps,n);case 7:return ac(e,t,t.pendingProps,n),t.child;case 8:return ac(e,t,t.pendingProps.children,n),t.child;case 12:return ac(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Yi(t,t.type,r.value),ac(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,ta(t),a=na(a),r=r(a),t.flags|=1,ac(e,t,r,n),t.child;case 14:return sc(e,t,t.type,t.pendingProps,n);case 15:return cc(e,t,t.type,t.pendingProps,n);case 19:return kc(e,t,n);case 31:return mc(e,t,n);case 22:return lc(e,t,n,t.pendingProps);case 24:return ta(t),r=na(ca),e===null?(a=ba(),a===null&&(a=K,o=la(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ha(t),Yi(t,ca,a)):((e.lanes&n)!==0&&(Ua(e,t),Xa(t,null,null,n),Ya()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Yi(t,ca,r),r!==a.cache&&Qi(t,[ca],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Yi(t,ca,r))),ac(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Pc(e){e.flags|=4}function Fc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Aa=Ea,wa}else e.flags&=-16777217}function Ic(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Aa=Ea,wa}function Lc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:it(),e.lanes|=t,Yl|=t)}function Rc(e,t){if(!R)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function U(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function zc(e,t,n){var r=t.pendingProps;switch(Ni(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return U(t),null;case 1:return U(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Xi(ca),Se(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Hi(t)?Pc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Wi())),U(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Pc(t),o===null?(U(t),Fc(t,a,null,r,n)):(U(t),Ic(t,o))):o?o===e.memoizedState?(U(t),t.flags&=-16777217):(Pc(t),U(t),Ic(t,o)):(e=e.memoizedProps,e!==r&&Pc(t),U(t),Fc(t,a,e,r,n)),null;case 27:if(we(t),n=ye.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}e=_e.current,Hi(t)?Bi(t,e):(e=ff(a,r,n),t.stateNode=e,Pc(t))}return U(t),null;case 5:if(we(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}if(o=_e.current,Hi(t))Bi(t,o);else{var s=Bd(ye.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[gt]=t,o[_t]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Pc(t)}}return U(t),Fc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ye.current,Hi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Fi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[gt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||zi(t,!0)}else e=Bd(e).createTextNode(r),e[gt]=t,t.stateNode=e}return U(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Hi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[gt]=t}else Ui(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),e=!1}else n=Wi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(uo(t),t):(uo(t),null);if(t.flags&128)throw Error(i(558))}return U(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Hi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[gt]=t}else Ui(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),a=!1}else a=Wi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(uo(t),t):(uo(t),null)}return uo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Lc(t,t.updateQueue),U(t),null);case 4:return Se(),e===null&&Sd(t.stateNode.containerInfo),U(t),null;case 10:return Xi(t.type),U(t),null;case 19:if(ge(z),r=t.memoizedState,r===null)return U(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Rc(r,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=fo(e),o!==null){for(t.flags|=128,Rc(r,!1),e=o.updateQueue,t.updateQueue=e,Lc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)pi(n,e),n=n.sibling;return E(z,z.current&1|2),R&&Ai(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ie()>tu&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304)}else{if(!a)if(e=fo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Lc(t,e),Rc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!R)return U(t),null}else 2*Ie()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(U(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ie(),e.sibling=null,n=z.current,E(z,a?n&1|2:n&1),R&&Ai(t,r.treeForkCount),e);case 22:case 23:return uo(t),ro(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(U(t),t.subtreeFlags&6&&(t.flags|=8192)):U(t),n=t.updateQueue,n!==null&&Lc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&ge(ya),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Xi(ca),U(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Bc(e,t){switch(Ni(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Xi(ca),Se(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return we(t),null;case 31:if(t.memoizedState!==null){if(uo(t),t.alternate===null)throw Error(i(340));Ui()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(uo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Ui()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ge(z),null;case 4:return Se(),null;case 10:return Xi(t.type),null;case 22:case 23:return uo(t),ro(),e!==null&&ge(ya),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Xi(ca),null;case 25:return null;default:return null}}function Vc(e,t){switch(Ni(t),t.tag){case 3:Xi(ca),Se();break;case 26:case 27:case 5:we(t);break;case 4:Se();break;case 31:t.memoizedState!==null&&uo(t);break;case 13:uo(t);break;case 19:ge(z);break;case 10:Xi(t.type);break;case 22:case 23:uo(t),ro(),e!==null&&ge(ya);break;case 24:Xi(ca)}}function Hc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Uc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Wc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Qa(t,n)}catch(t){Z(e,e.return,t)}}}function Gc(e,t,n){n.props=qs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Kc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function qc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Jc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Yc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[_t]=t}catch(t){Z(e,e.return,t)}}function Xc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Zc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Xc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ln));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Qc(e,t,n),e=e.sibling;e!==null;)Qc(e,t,n),e=e.sibling}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function el(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[gt]=e,t[_t]=n}catch(t){Z(e,e.return,t)}}var tl=!1,nl=!1,rl=!1,il=typeof WeakSet==`function`?WeakSet:Set,al=null;function ol(e,t){if(e=e.containerInfo,Rd=sp,e=I(e),Ar(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,al=t;al!==null;)if(t=al,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,al=e;else for(;al!==null;){switch(t=al,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=qs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,al=e;break}al=t.return}}function sl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:xl(e,n),r&4&&Hc(5,n);break;case 1:if(xl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=qs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Wc(n),r&512&&Kc(n,n.return);break;case 3:if(xl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Qa(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&el(n);case 26:case 5:xl(e,n),t===null&&r&4&&Jc(n),r&512&&Kc(n,n.return);break;case 12:xl(e,n);break;case 31:xl(e,n),r&4&&fl(e,n);break;case 13:xl(e,n),r&4&&pl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||tl,!r){t=t!==null&&t.memoizedState!==null||nl,i=tl;var a=nl;tl=r,(nl=t)&&!a?Cl(e,n,(n.subtreeFlags&8772)!=0):xl(e,n),tl=i,nl=a}break;case 30:break;default:xl(e,n)}}function cl(e){var t=e.alternate;t!==null&&(e.alternate=null,cl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&wt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var W=null,ll=!1;function ul(e,t,n){for(n=n.child;n!==null;)dl(e,t,n),n=n.sibling}function dl(e,t,n){if(Ge&&typeof Ge.onCommitFiberUnmount==`function`)try{Ge.onCommitFiberUnmount(We,n)}catch{}switch(n.tag){case 26:nl||qc(n,t),ul(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:nl||qc(n,t);var r=W,i=ll;Zd(n.type)&&(W=n.stateNode,ll=!1),ul(e,t,n),pf(n.stateNode),W=r,ll=i;break;case 5:nl||qc(n,t);case 6:if(r=W,i=ll,W=null,ul(e,t,n),W=r,ll=i,W!==null)if(ll)try{(W.nodeType===9?W.body:W.nodeName===`HTML`?W.ownerDocument.body:W).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{W.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:W!==null&&(ll?(e=W,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(W,n.stateNode));break;case 4:r=W,i=ll,W=n.stateNode.containerInfo,ll=!0,ul(e,t,n),W=r,ll=i;break;case 0:case 11:case 14:case 15:Uc(2,n,t),nl||Uc(4,n,t),ul(e,t,n);break;case 1:nl||(qc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Gc(n,t,r)),ul(e,t,n);break;case 21:ul(e,t,n);break;case 22:nl=(r=nl)||n.memoizedState!==null,ul(e,t,n),nl=r;break;default:ul(e,t,n)}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function ml(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new il),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new il),t;default:throw Error(i(435,e.tag))}}function hl(e,t){var n=ml(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function gl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){W=c.stateNode,ll=!1;break a}break;case 5:W=c.stateNode,ll=!1;break a;case 3:case 4:W=c.stateNode.containerInfo,ll=!0;break a}c=c.return}if(W===null)throw Error(i(160));dl(o,s,a),W=null,ll=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vl(t,e),t=t.sibling}var _l=null;function vl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gl(t,e),yl(e),r&4&&(Uc(3,e,e.return),Hc(3,e),Uc(5,e,e.return));break;case 1:gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),r&64&&tl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=_l;if(gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[Ct]||o[gt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[gt]=e,kt(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[gt]=e,kt(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Yc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),n!==null&&r&4&&Yc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),e.flags&32){a=e.stateNode;try{en(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Yc(e,a,n===null?a:n.memoizedProps)),r&1024&&(rl=!0);break;case 6:if(gl(t,e),yl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=_l,_l=gf(t.containerInfo),gl(t,e),_l=a,yl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}rl&&(rl=!1,bl(e));break;case 4:r=_l,_l=gf(e.stateNode.containerInfo),gl(t,e),yl(e),_l=r;break;case 12:gl(t,e),yl(e);break;case 31:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 13:gl(t,e),yl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=Ie()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=tl,d=nl;if(tl=u||a,nl=d||l,gl(t,e),nl=d,tl=u,yl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||tl||nl||Sl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,hl(e,n))));break;case 19:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 30:break;case 21:break;default:gl(t,e),yl(e)}}function yl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Xc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;$c(e,Zc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(en(o,``),n.flags&=-33),$c(e,Zc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Qc(e,Zc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sl(e,t.alternate,t),t=t.sibling}function Sl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Uc(4,t,t.return),Sl(t);break;case 1:qc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Gc(t,t.return,n),Sl(t);break;case 27:pf(t.stateNode);case 26:case 5:qc(t,t.return),Sl(t);break;case 22:t.memoizedState===null&&Sl(t);break;case 30:Sl(t);break;default:Sl(t)}e=e.sibling}}function Cl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Cl(i,a,n),Hc(4,a);break;case 1:if(Cl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Za(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Wc(a),Kc(a,a.return);break;case 27:el(a);case 26:case 5:Cl(i,a,n),n&&r===null&&o&4&&Jc(a),Kc(a,a.return);break;case 12:Cl(i,a,n);break;case 31:Cl(i,a,n),n&&o&4&&fl(i,a);break;case 13:Cl(i,a,n),n&&o&4&&pl(i,a);break;case 22:a.memoizedState===null&&Cl(i,a,n),Kc(a,a.return);break;case 30:break;default:Cl(i,a,n)}t=t.sibling}}function wl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ua(n))}function Tl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ua(e))}function El(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dl(e,t,n,r),t=t.sibling}function Dl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:El(e,t,n,r),i&2048&&Hc(9,t);break;case 1:El(e,t,n,r);break;case 3:El(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ua(e)));break;case 12:if(i&2048){El(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else El(e,t,n,r);break;case 31:El(e,t,n,r);break;case 13:El(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?El(e,t,n,r):(a._visibility|=2,Ol(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?El(e,t,n,r):kl(e,t),i&2048&&wl(o,t);break;case 24:El(e,t,n,r),i&2048&&Tl(t.alternate,t);break;default:El(e,t,n,r)}}function Ol(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ol(a,o,s,c,i),Hc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ol(a,o,s,c,i)):u._visibility&2?Ol(a,o,s,c,i):kl(a,o),i&&l&2048&&wl(o.alternate,o);break;case 24:Ol(a,o,s,c,i),i&&l&2048&&Tl(o.alternate,o);break;default:Ol(a,o,s,c,i)}t=t.sibling}}function kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:kl(n,r),i&2048&&wl(r.alternate,r);break;case 24:kl(n,r),i&2048&&Tl(r.alternate,r);break;default:kl(n,r)}t=t.sibling}}var Al=8192;function jl(e,t,n){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)Ml(e,t,n),e=e.sibling}function Ml(e,t,n){switch(e.tag){case 26:jl(e,t,n),e.flags&Al&&e.memoizedState!==null&&Gf(n,_l,e.memoizedState,e.memoizedProps);break;case 5:jl(e,t,n);break;case 3:case 4:var r=_l;_l=gf(e.stateNode.containerInfo),jl(e,t,n),_l=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Al,Al=16777216,jl(e,t,n),Al=r):jl(e,t,n));break;default:jl(e,t,n)}}function Nl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fl(e),e=e.sibling}function Fl(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&Uc(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Il(e)):Pl(e);break;default:Pl(e)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Uc(8,t,t.return),Il(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Il(t));break;default:Il(t)}e=e.sibling}}function Ll(e,t){for(;al!==null;){var n=al;switch(n.tag){case 0:case 11:case 15:Uc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ua(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,al=r;else a:for(n=e;al!==null;){r=al;var i=r.sibling,a=r.return;if(cl(r),r===n){al=null;break a}if(i!==null){i.return=a,al=i;break a}al=a}}}var Rl={getCacheForType:function(e){var t=na(ca),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return na(ca).controller.signal}},zl=typeof WeakMap==`function`?WeakMap:Map,G=0,K=null,q=null,J=0,Y=0,Bl=null,Vl=!1,Hl=!1,Ul=!1,Wl=0,X=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return G&2&&J!==0?J&-J:w.T===null?pt():dd()}function mu(){if(Jl===0)if(!(J&536870912)||R){var e=Qe;Qe<<=1,!(Qe&3932160)&&(Qe=262144),Jl=e}else Jl=536870912;return e=io.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===K&&(Y===2||Y===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,J,Jl,!1)),ot(e,n),(!(G&2)||e!==K)&&(e===K&&(!(G&2)&&(Kl|=n),X===4&&yu(e,J,Jl,!1)),rd(e))}function gu(e,t,n){if(G&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||nt(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Hl&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Ul&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Vl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-Ie(),10<a)){if(yu(r,t,Jl,!Vl),tt(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ln},Ml(t,a,d);var m=(a&62914560)===a?$l-Ie():(a&4194048)===a?eu-Ie():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Tr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-qe(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&ct(e,n,t)}function bu(){return G&6?!0:(id(0,!1),!1)}function xu(){if(q!==null){if(Y===0)var e=q.return;else e=q,Ji=qi=null,ko(e),Na=null,Pa=0,e=q;for(;e!==null;)Vc(e.alternate,e),e=e.return;q=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),K=e,q=n=fi(e.current,null),J=t,Y=0,Bl=null,Vl=!1,Hl=nt(e,t),Ul=!1,Yl=Jl=ql=Kl=Gl=X=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-qe(r),a=1<<i;t|=e[i],r&=~a}return Wl=t,ni(),n}function Cu(e,t){B=null,w.H=zs,t===Ca||t===Ta?(t=ja(),Y=3):t===wa?(t=ja(),Y=4):Y=t===rc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Bl=t,q===null&&(X=1,Zs(e,bi(t,e.current)))}function wu(){var e=io.current;return e===null?!0:(J&4194048)===J?ao===null:(J&62914560)===J||J&536870912?e===ao:!1}function Tu(){var e=w.H;return w.H=zs,e===null?zs:e}function Eu(){var e=w.A;return w.A=Rl,e}function Du(){X=4,Vl||(J&4194048)!==J&&io.current!==null||(Hl=!0),!(Gl&134217727)&&!(Kl&134217727)||K===null||yu(K,J,Jl,!1)}function Ou(e,t,n){var r=G;G|=2;var i=Tu(),a=Eu();(K!==e||J!==t)&&(nu=null,Su(e,t)),t=!1;var o=X;a:do try{if(Y!==0&&q!==null){var s=q,c=Bl;switch(Y){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:io.current===null&&(t=!0);var l=Y;if(Y=0,Bl=null,Pu(e,s,c,l),n&&Hl){o=0;break a}break;default:l=Y,Y=0,Bl=null,Pu(e,s,c,l)}}ku(),o=X;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Ji=qi=null,G=r,w.H=i,w.A=a,q===null&&(K=null,J=0,ni()),o}function ku(){for(;q!==null;)Mu(q)}function Au(e,t){var n=G;G|=2;var r=Tu(),a=Eu();K!==e||J!==t?(nu=null,tu=Ie()+500,Su(e,t)):Hl=nt(e,t);a:do try{if(Y!==0&&q!==null){t=q;var o=Bl;b:switch(Y){case 1:Y=0,Bl=null,Pu(e,t,o,1);break;case 2:case 9:if(Da(o)){Y=0,Bl=null,Nu(t);break}t=function(){Y!==2&&Y!==9||K!==e||(Y=7),rd(e)},o.then(t,t);break a;case 3:Y=7;break a;case 4:Y=5;break a;case 7:Da(o)?(Y=0,Bl=null,Nu(t)):(Y=0,Bl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(q.tag){case 26:s=q.memoizedState;case 5:case 27:var c=q;if(s?Wf(s):c.stateNode.complete){Y=0,Bl=null;var l=c.sibling;if(l!==null)q=l;else{var u=c.return;u===null?q=null:(q=u,Fu(u))}break b}}Y=0,Bl=null,Pu(e,t,o,5);break;case 6:Y=0,Bl=null,Pu(e,t,o,6);break;case 8:xu(),X=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Ji=qi=null,w.H=r,w.A=a,G=n,q===null?(K=null,J=0,ni(),X):0}function ju(){for(;q!==null&&!Pe();)Mu(q)}function Mu(e){var t=Nc(e.alternate,e,Wl);e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=_c(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=_c(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:ko(t);default:Vc(n,t),t=q=pi(t,Wl),t=Nc(n,t,Wl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Pu(e,t,n,r){Ji=qi=null,ko(t),Na=null,Pa=0;var i=t.return;try{if(nc(e,i,t,n,J)){X=1,Zs(e,bi(n,e.current)),q=null;return}}catch(t){if(i!==null)throw q=i,t;X=1,Zs(e,bi(n,e.current)),q=null;return}t.flags&32768?(R||r===1?e=!0:Hl||J&536870912?e=!1:(Vl=e=!0,(r===2||r===9||r===3||r===6)&&(r=io.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Vl);return}e=t.return;var n=zc(t.alternate,t,Wl);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);X===0&&(X=5)}function Iu(e,t){do{var n=Bc(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);X=6,q=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(G&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ti,st(e,n,o,s,c,l),e===K&&(q=K=null,J=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(ze,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=w.T,w.T=null,a=T.p,T.p=2,s=G,G|=4;try{ol(e,t,n)}finally{G=s,T.p=a,w.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=w.T,w.T=null;var r=T.p;T.p=2;var i=G;G|=4;try{vl(t,e);var a=zd,o=I(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&kr(s.ownerDocument.documentElement,s)){if(c!==null&&Ar(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Or(s,h),v=Or(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{G=i,T.p=r,w.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=w.T,w.T=null;var r=T.p;T.p=2;var i=G;G|=4;try{sl(e,t.alternate,t)}finally{G=i,T.p=r,w.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Fe();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),ft(n),t=t.stateNode,Ge&&typeof Ge.onCommitFiberRoot==`function`)try{Ge.onCommitFiberRoot(We,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=w.T,i=T.p,T.p=2,w.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{w.T=t,T.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ua(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=ft(su),r=w.T,a=T.p;try{T.p=32>n?32:n,w.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,G&6)throw Error(i(331));var c=G;if(G|=4,Fl(o.current),Dl(o,o.current,s,n),G=c,id(0,!1),Ge&&typeof Ge.onPostCommitFiberRoot==`function`)try{Ge.onPostCommitFiberRoot(We,o)}catch{}return!0}finally{T.p=a,w.T=r,Vu(e,t)}}function Wu(e,t,n){t=bi(n,t),t=$s(e.stateNode,t,2),e=Ga(e,t,2),e!==null&&(ot(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=bi(n,e),n=ec(2),r=Ga(t,n,2),r!==null&&(tc(n,r,t,e),ot(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Ul=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,K===e&&(J&n)===n&&(X===4||X===3&&(J&62914560)===J&&300>Ie()-$l?!(G&2)&&Su(e,0):ql|=n,Yl===J&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=it()),e=ai(e,t),e!==null&&(ot(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Me(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-qe(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=J,a=tt(r,r===K?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||nt(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Ie(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-qe(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=rt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=K,n=J,n=tt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Y===2||Y===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ne(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||nt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ne(r),ft(n)){case 2:case 8:n=O;break;case 32:n=ze;break;case 268435456:n=Ve;break;default:n=ze}return r=cd.bind(null,e),n=Me(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ne(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=J;return r=tt(e,e===K?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Ie()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){G&6?Me(Re,ad):od()})}function dd(){if(nd===0){var e=pa;e===0&&(e=Ze,Ze<<=1,!(Ze&261888)&&(Ze=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:cn(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[_t]||null).action),o=r.submitter;o&&(t=(t=o[_t]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new kn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Ts(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Ts(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<Xr.length;hd++){var gd=Xr[hd];Zr(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}Zr(Hr,`onAnimationEnd`),Zr(Ur,`onAnimationIteration`),Zr(Wr,`onAnimationStart`),Zr(`dblclick`,`onDoubleClick`),Zr(`focusin`,`onFocus`),Zr(`focusout`,`onBlur`),Zr(Gr,`onTransitionRun`),Zr(Kr,`onTransitionStart`),Zr(qr,`onTransitionCancel`),Zr(Jr,`onTransitionEnd`),Nt(`onMouseEnter`,[`mouseout`,`mouseover`]),Nt(`onMouseLeave`,[`mouseout`,`mouseover`]),Nt(`onPointerEnter`,[`pointerout`,`pointerover`]),Nt(`onPointerLeave`,[`pointerout`,`pointerover`]),Mt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Mt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Mt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Mt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Mt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Mt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Qr(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Qr(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[yt];n===void 0&&(n=t[yt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,At.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!yn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Tt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}gn(function(){var r=a,i=dn(n),s=[];a:{var c=Yr.get(e);if(c!==void 0){var l=kn,u=e;switch(e){case`keypress`:if(Tn(n)===0)break a;case`keydown`:case`keyup`:l=qn;break;case`focusin`:u=`focus`,l=Rn;break;case`focusout`:u=`blur`,l=Rn;break;case`beforeblur`:case`afterblur`:l=Rn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=In;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Ln;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Yn;break;case Hr:case Ur:case Wr:l=zn;break;case Jr:l=Xn;break;case`scroll`:case`scrollend`:l=jn;break;case`wheel`:l=j;break;case`copy`:case`cut`:case`paste`:l=Bn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Jn;break;case`toggle`:case`beforetoggle`:l=Zn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=_n(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==un&&(u=n.relatedTarget||n.fromElement)&&(Tt(u)||u[vt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?Tt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=In,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Jn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Dt(l),h=u==null?c:Dt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,Tt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?Dt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=_r;else if(dr(c))if(vr)v=Cr;else{v=F;var y=xr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&an(r.elementType)&&(v=_r):v=Sr;if(v&&=v(e,r)){fr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Zt(c,`number`,c.value)}switch(y=r?Dt(r):window,e){case`focusin`:(dr(y)||y.contentEditable===`true`)&&(Mr=y,Nr=r,Pr=null);break;case`focusout`:Pr=Nr=Mr=null;break;case`mousedown`:Fr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Fr=!1,Ir(s,n,i);break;case`selectionchange`:if(jr)break;case`keydown`:case`keyup`:Ir(s,n,i)}var b;if($n)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else sr?ar(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(nr&&n.locale!==`ko`&&(sr||x!==`onCompositionStart`?x===`onCompositionEnd`&&sr&&(b=wn()):(xn=i,Sn=`value`in xn?xn.value:xn.textContent,sr=!0)),y=Ed(r,x),0<y.length&&(x=new Vn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=or(n),b!==null&&(x.data=b)))),(b=tr?cr(e,n):lr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Vn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=_n(e,n),i!=null&&r.unshift(Td(e,i,a)),i=_n(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=_n(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=_n(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||en(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&en(e,``+r);break;case`className`:zt(e,`class`,r);break;case`tabIndex`:zt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:zt(e,n,r);break;case`style`:rn(e,r,o);break;case`data`:if(t!==`object`){zt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=cn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Rt(e,`popover`,r);break;case`xlinkActuate`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Bt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Bt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Bt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Rt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=on.get(n)||n,Rt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:rn(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?en(e,r):(typeof r==`number`||typeof r==`bigint`)&&en(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!jt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[_t]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Rt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Xt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Qt(e,!!r,n,!0):Qt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}$t(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(an(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Yt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Qt(e,!!n,n?[]:``,!1):Qt(e,!!n,t,!0)):Qt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}k(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(an(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[Ct]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),wt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[Ct])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);wt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=T.d;T.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Et(e);t!==null&&t.tag===5&&t.type===`form`?Ds(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Jt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),kt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Jt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Jt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Jt(n.imageSizes)+`"]`)):i+=`[href="`+Jt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),kt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Jt(r)+`"][href="`+Jt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),kt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Ot(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);kt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Ot(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),kt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Ot(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),kt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=ye.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Ot(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=Ot(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Ot(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Jt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),kt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Jt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Jt(n.href)+`"]`);if(r)return t.instance=r,kt(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),kt(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,kt(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),kt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,kt(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),kt(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Ct]||a[gt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,kt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),kt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:S,Provider:null,Consumer:null,_currentValue:fe,_currentValue2:fe,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=at(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=at(0),this.hiddenUpdates=at(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=ui(3,null,null,t),e.current=a,a.stateNode=e,t=la(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ha(a),e}function tp(e){return e?(e=ci,e):ci}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Wa(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ga(e,r,t),n!==null&&(hu(n,e,t),Ka(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=ai(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=dt(t);var n=ai(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=w.T;w.T=null;var a=T.p;try{T.p=2,up(e,t,n,r)}finally{T.p=a,w.T=i}}function lp(e,t,n,r){var i=w.T;w.T=null;var a=T.p;try{T.p=8,up(e,t,n,r)}finally{T.p=a,w.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Et(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=et(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-qe(o);s.entanglements[1]|=c,o&=~c}rd(a),!(G&6)&&(tu=Ie()+500,id(0,!1))}}break;case 31:case 13:s=ai(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=dn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=Tt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Le()){case Re:return 2;case O:return 8;case ze:case Be:return 32;case Ve:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Et(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=Tt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,mt(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,mt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);un=r,n.target.dispatchEvent(r),un=null}else return t=Et(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Et(n);a!==null&&(e.splice(t,3),t-=3,Ts(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[_t]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[_t]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[vt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=pt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.7`)throw Error(i(527,Lp,`19.2.7`));T.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.7`,rendererPackageName:`react-dom`,currentDispatcherRef:w,reconcilerVersion:`19.2.7`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{We=zp.inject(Rp),Ge=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Js,s=Ys,c=Xs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[vt]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u(),1),v=c(g(),1),y=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),b=o(((e,t)=>{t.exports=y()}))(),x=class extends _.Component{container;player=null;isLoading=!1;constructor(e){super(e),this.container=_.createRef()}componentDidMount(){this.player=window.RufflePlayer.newest().createPlayer(),this.player.id=`player`,this.player.addEventListener(`loadedmetadata`,()=>{this.props.onLoadedMetadata&&this.props.onLoadedMetadata(this.player.ruffle().metadata)}),this.isLoading=!1,this.container.current.appendChild(this.player)}componentWillUnmount(){this.player?.remove(),this.player=null,this.isLoading=!1}render(){return(0,b.jsx)(`div`,{id:this.props.id,ref:this.container,onDragEnter:this.props.onDragEnter,onDragLeave:this.props.onDragLeave,onDragOver:this.props.onDragOver,onDrop:this.props.onDragDrop,children:this.props.children})}reload(){this.isLoading||(this.isLoading=!0,this.player?.ruffle().reload().finally(()=>{this.isLoading=!1}))}loadUrl(e,t){this.isLoading||(this.isLoading=!0,this.player?.ruffle().load({url:e,...this.props.baseConfig,...t}).finally(()=>{this.isLoading=!1}))}loadFile(e){this.isLoading||(this.isLoading=!0,new Response(e).arrayBuffer().then(e=>this.player?.ruffle().load({data:e,...this.props.baseConfig})).finally(()=>{this.isLoading=!1}))}},ee=``+new URL(`../logo.svg`,import.meta.url).href,S={Animation:`Animations`,Game:`Games`};function C({sampleSelectionInput:e,selectedSample:t,setSelectedSample:n,setSelectedFilename:r,onSelectUrl:i}){let[a,o]=(0,_.useState)([]),s=e=>{let t=e.target,n=parseInt(t.value,10);a[n]&&(c(a[n]),window.history.replaceState(null,``,`${window.location.pathname}?file=${a[n].location}`))},c=(0,_.useCallback)(e=>{i(e.location,e.config??{}),n(e),r(null)},[i,r,n]);return(0,_.useEffect)(()=>{(async()=>{let t=await fetch(`swfs.json`);if(t.ok){let n=await t.json();if(o(n.swfs),n.swfs.length>0){let t=new URLSearchParams(window.location.search).get(`file`),r=0;t&&(r=n.swfs.findIndex(e=>e.location===t),r===-1&&(r=0)),c(n.swfs[r]),requestAnimationFrame(()=>{e.current&&(e.current.selectedIndex=r)})}}})()},[c,e]),(0,b.jsxs)(`div`,{id:`sample-swfs-container`,className:a.length===0?`hidden`:``,children:[(0,b.jsx)(`span`,{id:`sample-swfs-label`,children:`Sample SWF:`}),(0,b.jsxs)(`select`,{id:`sample-swfs`,"aria-describedby":`sample-swfs-label`,onChange:s,ref:e,children:[a.map((e,t)=>(0,b.jsx)(_.Fragment,{children:e.type===void 0&&(0,b.jsx)(`option`,{value:t,children:e.title})},t)),Object.keys(S).map(e=>(0,b.jsx)(`optgroup`,{label:S[e],children:a.map((t,n)=>(0,b.jsx)(_.Fragment,{children:t.type===e&&(0,b.jsx)(`option`,{value:n,children:t.title})},n))},e))]}),(0,b.jsxs)(`div`,{id:`author-container`,className:t?.author?``:`hidden`,children:[(0,b.jsx)(`span`,{children:`Author: `}),(0,b.jsx)(`a`,{href:t?.authorLink,target:`_blank`,id:`author`,children:t?.author})]})]})}function te({allowUrlLoading:e,allowSampleSwfs:t,onToggleMetadata:n,onReloadMovie:r,onSelectUrl:i,onSelectFile:a,selectedFilename:o,setSelectedFilename:s,onFileDragLeave:c,onFileDragOver:l,onFileDragDrop:u}){let d=(0,_.useRef)(null),f=(0,_.useRef)(null),p=(0,_.useRef)(null),[m,h]=(0,_.useState)(null),g=()=>{d.current?.click()},v=e=>{i(e,{}),s(null),h(null),window.history.replaceState(null,``,`${window.location.pathname}${window.location.hash}`),p.current&&(p.current.selectedIndex=-1)},y=e=>{a(e),h(null),s(e.name),window.history.replaceState(null,``,window.location.pathname),p.current&&(p.current.selectedIndex=-1)},x=e=>{e.preventDefault(),f.current?.value&&v(f.current.value)},S=e=>{let t=e.target;t?.files&&t?.files.length>0&&t.files[0]&&y(t.files[0])},te=()=>{confirm(`Reload the current SWF?`)&&r()},ne=navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPhone/i)||navigator.platform===`MacIntel`&&navigator.standalone!==void 0;return(0,b.jsxs)(`div`,{id:`nav`,children:[(0,b.jsx)(`a`,{id:`logo-container`,href:`https://ruffle.rs/`,target:`_blank`,children:(0,b.jsx)(`img`,{className:`logo`,src:ee,alt:`Ruffle`})}),(0,b.jsxs)(`div`,{className:`select-container`,children:[(0,b.jsxs)(`form`,{id:`web-url-container`,onSubmit:x,hidden:!e,children:[(0,b.jsx)(`input`,{id:`web-url`,name:`web-url`,type:`text`,placeholder:`URL of a .swf file on the web`,ref:f}),(0,b.jsx)(`button`,{id:`web-form-submit`,type:`submit`,children:`Load`})]}),(0,b.jsxs)(`div`,{id:`local-file-container`,onDragLeave:c,onDragOver:l,onDrop:u,children:[(0,b.jsx)(`span`,{id:`local-file-static-label`,onClick:g,children:`Local SWF:`}),(0,b.jsx)(`input`,{type:`file`,accept:ne?void 0:`.swf,.spl`,id:`local-file`,"aria-describedby":`local-file-static-label`,ref:d,onChange:S}),(0,b.jsx)(`button`,{id:`local-file-label`,onClick:g,children:`Select File`}),(0,b.jsx)(`label`,{id:`local-file-name`,htmlFor:`local-file`,children:o??`No file selected.`})]}),t&&(0,b.jsx)(C,{onSelectUrl:i,selectedSample:m,setSelectedFilename:s,setSelectedSample:h,sampleSelectionInput:p})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`svg`,{id:`toggle-info`,width:`20px`,viewBox:`0 0 416.979 416.979`,onClick:n,children:(0,b.jsx)(`path`,{fill:`white`,d:`M356.004 61.156c-81.37-81.47-213.377-81.551-294.848-.182-81.47 81.371-81.552 213.379-.181 294.85 81.369 81.47 213.378 81.551 294.849.181 81.469-81.369 81.551-213.379.18-294.849zM237.6 340.786a5.821 5.821 0 0 1-5.822 5.822h-46.576a5.821 5.821 0 0 1-5.822-5.822V167.885a5.821 5.821 0 0 1 5.822-5.822h46.576a5.82 5.82 0 0 1 5.822 5.822v172.901zm-29.11-202.885c-18.618 0-33.766-15.146-33.766-33.765 0-18.617 15.147-33.766 33.766-33.766s33.766 15.148 33.766 33.766c0 18.619-15.149 33.765-33.766 33.765z`})}),(0,b.jsx)(`svg`,{id:`reload-swf`,width:`20px`,viewBox:`0 0 489.711 489.711`,onClick:te,children:(0,b.jsx)(`path`,{fill:`white`,d:`M112.156 97.111c72.3-65.4 180.5-66.4 253.8-6.7l-58.1 2.2c-7.5.3-13.3 6.5-13 14 .3 7.3 6.3 13 13.5 13h.5l89.2-3.3c7.3-.3 13-6.2 13-13.5v-1.6l-3.3-88.2c-.3-7.5-6.6-13.3-14-13-7.5.3-13.3 6.5-13 14l2.1 55.3c-36.3-29.7-81-46.9-128.8-49.3-59.2-3-116.1 17.3-160 57.1-60.4 54.7-86 137.9-66.8 217.1 1.5 6.2 7 10.3 13.1 10.3 1.1 0 2.1-.1 3.2-.4 7.2-1.8 11.7-9.1 9.9-16.3-16.8-69.6 5.6-142.7 58.7-190.7zm350.3 98.4c-1.8-7.2-9.1-11.7-16.3-9.9-7.2 1.8-11.7 9.1-9.9 16.3 16.9 69.6-5.6 142.7-58.7 190.7-37.3 33.7-84.1 50.3-130.7 50.3-44.5 0-88.9-15.1-124.7-44.9l58.8-5.3c7.4-.7 12.9-7.2 12.2-14.7s-7.2-12.9-14.7-12.2l-88.9 8c-7.4.7-12.9 7.2-12.2 14.7l8 88.9c.6 7 6.5 12.3 13.4 12.3.4 0 .8 0 1.2-.1 7.4-.7 12.9-7.2 12.2-14.7l-4.8-54.1c36.3 29.4 80.8 46.5 128.3 48.9 3.8.2 7.6.3 11.3.3 55.1 0 107.5-20.2 148.7-57.4 60.4-54.7 86-137.8 66.8-217.1z`})})]})]})}var ne={1:`1`,2:`2`,3:`3`,4:`4`,5:`5`,6:`6`,7:`7`,8:`8`,9:`9.0`,10:`10.0/10.1`,11:`10.2`,12:`10.3`,13:`11.0`,14:`11.1`,15:`11.2`,16:`11.3`,17:`11.4`,18:`11.5`,19:`11.6`,20:`11.7`,21:`11.8`,22:`11.9`,23:`12`,24:`13`,25:`14`,26:`15`,27:`16`,28:`17`,29:`18`,30:`19`,31:`20`,32:`21`,33:`22`,34:`23`,35:`24`,36:`25`,37:`26`,38:`27`,39:`28`,40:`29`,41:`30`,42:`31`,43:`32`};function re({visible:e,metadata:t}){return(0,b.jsxs)(`div`,{id:`info-container`,className:e?``:`hidden`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`span`,{children:`Uncompressed Length`}),(0,b.jsxs)(`span`,{id:`uncompressedLength`,children:[(t?.uncompressedLength??0)>>10,`Kb`]})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`span`,{children:`SWF Version`}),(0,b.jsx)(`span`,{id:`swfVersion`,children:t?.swfVersion})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`span`,{children:`FP Version`}),(0,b.jsx)(`span`,{id:`flashVersion`,children:t?ne[t.swfVersion]??`Unknown`:``})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`span`,{children:`ActionScript 3`}),(0,b.jsx)(`span`,{id:`isActionScript3`,children:t?.isActionScript3?`true`:`false`})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`span`,{children:`Total Frames`}),(0,b.jsx)(`span`,{id:`numFrames`,children:t?.numFrames})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`span`,{children:`Frame Rate`}),(0,b.jsx)(`span`,{id:`frameRate`,children:t?.frameRate})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`span`,{children:`SWF Width`}),(0,b.jsx)(`span`,{id:`width`,children:t?.width})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`span`,{children:`SWF Height`}),(0,b.jsx)(`span`,{id:`height`,children:t?.height})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`span`,{children:`SWF Background Color`}),(0,b.jsx)(`span`,{id:`backgroundColor`,style:{backgroundColor:t?.backgroundColor??void 0}})]})]})}function ie({ruffleBaseConfig:e,allowUrlLoading:t,allowSampleSwfs:n}){let[r,i]=(0,_.useState)(null),[a,o]=(0,_.useState)(!1),[s,c]=(0,_.useState)(null),[l,u]=(0,_.useState)(!1),d=(0,_.useRef)(null),f=()=>{o(!a)},p=()=>{d.current?.reload()},m=(0,_.useCallback)((e,t)=>{d.current?.loadUrl(e,t)},[]),h=e=>{d.current?.loadFile(e)},g=e=>{e.stopPropagation(),e.preventDefault()},v=e=>{e.stopPropagation(),e.preventDefault(),u(!1)},y=e=>{e.stopPropagation(),e.preventDefault(),u(!0)},ee=e=>{e.stopPropagation(),e.preventDefault(),u(!1),e.dataTransfer&&(c(e.dataTransfer.files[0].name),d.current?.loadFile(e.dataTransfer.files[0]))};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(te,{allowUrlLoading:t,allowSampleSwfs:n,onToggleMetadata:f,onReloadMovie:p,onSelectUrl:m,onSelectFile:h,selectedFilename:s,setSelectedFilename:c,onFileDragLeave:v,onFileDragOver:y,onFileDragDrop:ee}),(0,b.jsxs)(`div`,{id:`main`,className:a?`info-container-shown`:``,children:[(0,b.jsx)(x,{id:`player-container`,"aria-label":`Select a demo or drag an SWF`,onLoadedMetadata:i,ref:d,onDragEnter:g,onDragLeave:v,onDragOver:y,onDragDrop:ee,baseConfig:e,children:(0,b.jsx)(`div`,{id:`overlay`,className:l?`drag`:``})}),(0,b.jsx)(re,{visible:a,metadata:r})]})]})}var ae=class e{constructor(e,t,n,r,i){this.major=e,this.minor=t,this.patch=n,this.prIdent=r,this.buildIdent=i}static fromSemver(t){let n=t.split(`+`),r=n[0].split(`-`),i=r[0].split(`.`),a=parseInt(i[0],10),o=0,s=0,c=null,l=null;return i[1]!==void 0&&(o=parseInt(i[1],10)),i[2]!==void 0&&(s=parseInt(i[2],10)),r[1]!==void 0&&(c=r[1].split(`.`)),n[1]!==void 0&&(l=n[1].split(`.`)),new e(a,o,s,c,l)}isCompatibleWith(e){return this.major!==0&&this.major===e.major||this.major===0&&e.major===0&&this.minor!==0&&this.minor===e.minor||this.major===0&&e.major===0&&this.minor===0&&e.minor===0&&this.patch!==0&&this.patch===e.patch}hasPrecedenceOver(e){if(this.major>e.major)return!0;if(this.major<e.major)return!1;if(this.minor>e.minor)return!0;if(this.minor<e.minor)return!1;if(this.patch>e.patch)return!0;if(this.patch<e.patch)return!1;if(this.prIdent===null&&e.prIdent!==null)return!0;if(this.prIdent!==null&&e.prIdent===null)return!1;if(this.prIdent!==null&&e.prIdent!==null){let t=/^[0-9]*$/;for(let n=0;n<this.prIdent.length&&n<e.prIdent.length;n+=1){let r=t.test(e.prIdent[n]),i=t.test(this.prIdent[n]);if(!i&&r)return!0;if(i&&r){let t=parseInt(this.prIdent[n],10),r=parseInt(e.prIdent[n],10);if(t>r)return!0;if(t<r)return!1}else if(i&&!r)return!1;else if(!i&&!r){if(this.prIdent[n]>e.prIdent[n])return!0;if(this.prIdent[n]<e.prIdent[n])return!1}}if(this.prIdent.length>e.prIdent.length)return!0;if(this.prIdent.length<e.prIdent.length)return!1}if(this.buildIdent!==null&&e.buildIdent===null)return!0;if(this.buildIdent===null&&e.buildIdent!==null)return!1;if(this.buildIdent!==null&&e.buildIdent!==null){let t=/^[0-9]*$/;for(let n=0;n<this.buildIdent.length&&n<e.buildIdent.length;n+=1){let r=t.test(this.buildIdent[n]),i=t.test(e.buildIdent[n]);if(!r&&i)return!0;if(r&&i){let t=parseInt(this.buildIdent[n],10),r=parseInt(e.buildIdent[n],10);if(t>r)return!0;if(t<r)return!1}else if(r&&!i)return!1;else if(!r&&!i){if(this.buildIdent[n]>e.buildIdent[n])return!0;if(this.buildIdent[n]<e.buildIdent[n])return!1}}return this.buildIdent.length>e.buildIdent.length}return!1}isEqual(e){return this.major===e.major&&this.minor===e.minor&&this.patch===e.patch}isStableOrCompatiblePrerelease(e){return e.prIdent===null?!0:this.major===e.major&&this.minor===e.minor&&this.patch===e.patch}},oe=class e{constructor(e){this.requirements=e}satisfiedBy(e){for(let t of this.requirements){let n=!0;for(let{comparator:r,version:i}of t)n&&=i.isStableOrCompatiblePrerelease(e),r===``||r===`=`?n&&=i.isEqual(e):r===`>`?n&&=e.hasPrecedenceOver(i):r===`>=`?n&&=e.hasPrecedenceOver(i)||i.isEqual(e):r===`<`?n&&=i.hasPrecedenceOver(e):r===`<=`?n&&=i.hasPrecedenceOver(e)||i.isEqual(e):r===`^`&&(n&&=i.isCompatibleWith(e));if(n)return!0}return!1}static fromRequirementString(t){let n=t.split(` `),r=[],i=[];for(let e of n)if(e===`||`)r.length>0&&(i.push(r),r=[]);else if(e.length>0){let t=/[0-9]/.exec(e);if(t){let n=e.slice(0,t.index).trim(),i=ae.fromSemver(e.slice(t.index).trim());r.push({comparator:n,version:i})}}return r.length>0&&i.push(r),new e(i)}},se=class{constructor(e){this.sources=e?.sources||{},this.config=e?.config||{},this.invoked=e?.invoked||!1,this.newestName=e?.newestName||null,e?.superseded?.(),document.readyState===`loading`?document.addEventListener(`readystatechange`,this.init.bind(this)):window.setTimeout(this.init.bind(this),0)}get version(){return`0.1.0`}newestSourceName(){let e=null,t=ae.fromSemver(`0.0.0`);for(let n in this.sources)if(Object.prototype.hasOwnProperty.call(this.sources,n)){let r=ae.fromSemver(this.sources[n].version);r.hasPrecedenceOver(t)&&(e=n,t=r)}return e}init(){if(!this.invoked){if(this.invoked=!0,this.newestName=this.newestSourceName(),this.newestName===null)throw Error(`No registered Ruffle source!`);(`polyfills`in this.config?this.config.polyfills:!0)!==!1&&this.sources[this.newestName].polyfill()}}newest(){let e=this.newestSourceName();return e===null?null:this.sources[e]}satisfying(e){let t=oe.fromRequirementString(e),n=null;for(let e in this.sources)if(Object.prototype.hasOwnProperty.call(this.sources,e)){let r=ae.fromSemver(this.sources[e].version);t.satisfiedBy(r)&&(n=this.sources[e])}return n}localCompatible(){return this.sources.local===void 0?this.newest():this.satisfying(`^`+this.sources.local.version)}local(){return this.sources.local===void 0?this.newest():this.satisfying(`=`+this.sources.local.version)}superseded(){this.invoked=!0}},ce={versionNumber:`0.4.0-nightly.2026.7.2`,versionName:`0.4.0-nightly.2026.7.2`,versionChannel:`nightly`,buildDate:`2026-07-02T00:38:15.262Z`,commitHash:`ae2674437999c34dfde3bac6268f691207b51ecb`},le;(function(e){e[e.HaveNothing=0]=`HaveNothing`,e[e.Loading=1]=`Loading`,e[e.Loaded=2]=`Loaded`})(le||={});var ue=o((e=>{Object.defineProperty(e,"__esModule",{value:!0})})),de=o((e=>{Object.defineProperty(e,"__esModule",{value:!0})})),w=o((e=>{Object.defineProperty(e,"__esModule",{value:!0})})),T=o((e=>{Object.defineProperty(e,"__esModule",{value:!0})})),fe=o((e=>{Object.defineProperty(e,"__esModule",{value:!0})})),pe=o((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.classnames=o;var t=e=>Object.entries(e).map(([e,t])=>t&&e),n=e=>!!e,r=(e,t,n)=>n.indexOf(e)===t,i=[];function a(e){return e?typeof e==`string`?[e]:Array.isArray(e)?e.flatMap(a).filter(n):t(e).filter(n):i}function o(e){let t=a(e).filter(r);return t.length>0?t.join(` `):void 0}})),me=o((e=>{var t=e&&e.__createBinding||(Object.create?(function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||(`get`in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}):(function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]})),n=e&&e.__exportStar||function(e,n){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(n,r)&&t(n,e,r)};Object.defineProperty(e,"__esModule",{value:!0}),n(ue(),e),n(de(),e),n(w(),e),n(T(),e),n(fe(),e),n(pe(),e)})),he=o((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.setAttributes=i;var t=me();function n(e,t){for(let n of Object.keys(e))n in t&&(t[n]=e[n])}var r=/^on\p{Lu}/u;function i(e,i){for(let a of Object.keys(i)){if(a===`__source`||a===`__self`||a===`tsxTag`)continue;let o=i[a];if(a===`class`){let n=(0,t.classnames)(o);n&&e.setAttribute(a,n)}else if(a===`ref`)o.current=e;else if(r.test(a)){let t=a.replace(/Capture$/,``),n=a!==t,r=t.toLowerCase().substring(2);e.addEventListener(r,o,n)}else a===`style`&&typeof o!=`string`?n(o,e.style):a===`dangerouslySetInnerHTML`?e.innerHTML=o:o===!0?e.setAttribute(a,a):(o||o===0||o===``)&&e.setAttribute(a,o.toString())}}})),ge=o((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.applyChildren=n,e.createDomElement=r,e.applyTsxTag=i;function t(e,t){t instanceof Element?e.appendChild(t):typeof t==`string`||typeof t==`number`?e.appendChild(document.createTextNode(t.toString())):console.warn(`Unknown type to append: `,t)}function n(e,r){for(let i of r)!i&&i!==0||(Array.isArray(i)?n(e,i):t(e,i))}function r(e,t){let n=t?.is?{is:t.is}:void 0;return t?.xmlns?document.createElementNS(t.xmlns,e,n):document.createElement(e,n)}function i(e,t){let n=e,r=t;return r&&`tsxTag`in r&&(n=r.tsxTag,!r.is&&e.includes(`-`)&&(r={...r,is:e})),{finalTag:n,finalAttrs:r}}})),E=o((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.jsx=r,e.jsxs=r,e.jsxDEV=r;var t=he(),n=ge();function r(e,r){if(typeof e==`function`)return e(r);let{children:i,...a}=r,{finalTag:o,finalAttrs:s}=(0,n.applyTsxTag)(e,a),c=(0,n.createDomElement)(o,s);return(0,t.setAttributes)(c,s),(0,n.applyChildren)(c,[i]),c}})),_e;(function(e){e.On=`on`,e.Off=`off`,e.Auto=`auto`})(_e||={});var ve;(function(e){e.Off=`off`,e.Fullscreen=`fullscreen`,e.On=`on`})(ve||={});var ye;(function(e){e.Visible=`visible`,e.Hidden=`hidden`})(ye||={});var be;(function(e){e.Error=`error`,e.Warn=`warn`,e.Info=`info`,e.Debug=`debug`,e.Trace=`trace`})(be||={});var xe;(function(e){e.Window=`window`,e.Opaque=`opaque`,e.Transparent=`transparent`,e.Direct=`direct`,e.Gpu=`gpu`})(xe||={});var Se;(function(e){e.WebGpu=`webgpu`,e.WgpuWebgl=`wgpu-webgl`,e.Webgl=`webgl`,e.Canvas=`canvas`})(Se||={});var Ce;(function(e){e.On=`on`,e.RightClickOnly=`rightClickOnly`,e.Off=`off`})(Ce||={});var we;(function(e){e.AIR=`air`,e.FlashPlayer=`flashPlayer`})(we||={});var Te;(function(e){e.Allow=`allow`,e.Confirm=`confirm`,e.Deny=`deny`})(Te||={});var Ee;(function(e){e.All=`all`,e.Internal=`internal`,e.None=`none`})(Ee||={});var De;(function(e){e.Always=`always`,e.Never=`never`,e.Smart=`smart`})(De||={});var Oe;(function(e){e.Embedded=`embedded`,e.Canvas=`canvas`})(Oe||={});var ke;(function(e){e.None=`none`,e.MainThread=`mainThread`})(ke||={});var Ae;(function(e){e.South=`south`,e.East=`east`,e.North=`north`,e.West=`west`,e.LeftTrigger=`left-trigger`,e.LeftTrigger2=`left-trigger-2`,e.RightTrigger=`right-trigger`,e.RightTrigger2=`right-trigger-2`,e.Select=`select`,e.Start=`start`,e.DPadUp=`dpad-up`,e.DPadDown=`dpad-down`,e.DPadLeft=`dpad-left`,e.DPadRight=`dpad-right`})(Ae||={});var je={allowScriptAccess:!1,parameters:{},autoplay:_e.Auto,backgroundColor:null,letterbox:ve.Fullscreen,unmuteOverlay:ye.Visible,upgradeToHttps:!0,compatibilityRules:!0,favorFlash:!0,warnOnUnsupportedContent:!0,logLevel:be.Error,showSwfDownload:!1,contextMenu:Ce.On,preloader:!0,splashScreen:!0,maxExecutionDuration:15,base:null,menu:!0,allowFullscreen:!1,salign:``,fullScreenAspectRatio:``,forceAlign:!1,quality:null,scale:`showAll`,forceScale:!1,frameRate:null,wmode:xe.Window,publicPath:null,polyfills:!0,playerVersion:null,preferredRenderer:null,openUrlMode:Te.Allow,allowNetworking:Ee.All,openInNewTab:null,socketProxy:[],fontSources:[],defaultFonts:{},credentialAllowList:[],playerRuntime:we.FlashPlayer,gamepadButtonMapping:{},urlRewriteRules:[],scrollingBehavior:De.Smart,deviceFontRenderer:Oe.Embedded,backgroundExecutionMode:ke.MainThread},D=E(),Me=`:host{all:initial;pointer-events:inherit;--ruffle-blue:#37528c;--ruffle-blue-dark:#253559;--ruffle-orange:#ffad33;--modal-background:#fafafa;--modal-foreground-rgb:0,0,0;--modal-foreground-filter:none;display:inline-block;font-family:Arial,sans-serif;height:400px;letter-spacing:.4px;position:relative;touch-action:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:550px;-webkit-tap-highlight-color:transparent}:host(:-webkit-full-screen){display:block;height:100%!important;width:100%!important}.hidden{display:none!important}#container,#message-overlay,#panic,#play-button,#splash-screen,#unmute-overlay,#unmute-overlay .background{inset:0;position:absolute}#container{outline:none;overflow:hidden}#container canvas{height:100%;width:100%}#play-button,#unmute-overlay{cursor:pointer;display:none}#unmute-overlay .background{background:#000;opacity:.7}#play-button .icon,#unmute-overlay .icon{height:50%;left:50%;max-height:384px;max-width:384px;opacity:.8;position:absolute;top:50%;transform:translate(-50%,-50%);width:50%}#play-button:hover .icon,#unmute-overlay:hover .icon{opacity:1}#unmute-overlay-svg{scale:.8}#panic{align-items:center;background:linear-gradient(180deg,#fd3a40,#fda138);color:#fff;display:flex;flex-flow:column;font-size:15px;gap:8px;justify-content:center;overflow:auto;padding:16px;text-align:center}#panic a{color:#fff;text-underline-offset:2px}#panic-title{font-size:30px;font-weight:700;letter-spacing:-.5px}#panic-body{max-width:480px;opacity:.85;width:100%}#panic-details-modal{align-items:center;background:#0008;box-sizing:border-box;display:flex;inset:0;justify-content:center;padding:8px;position:absolute;z-index:1}#panic-details-content{background-color:var(--modal-background);border-radius:12px;box-shadow:0 2px 6px 0 #0008;box-sizing:border-box;color:rgb(var(--modal-foreground-rgb));height:80%;max-width:720px;overflow:hidden;padding:44px 12px 12px;position:relative;width:100%}#panic-details-content .panic-copy-button{background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 -960 960 960"><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240zm0-80h360v-480H360zM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80zm160-240v-480z"/></svg>');border-radius:4px;cursor:pointer;filter:var(--modal-foreground-filter);height:16px;opacity:.6;position:absolute;right:40px;top:14px;transition:opacity .15s,background-image 0s;width:16px}:is(#panic-details-content .panic-copy-button):hover{opacity:1}.copied:is(#panic-details-content .panic-copy-button){background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%2322c55e' viewBox='0 -960 960 960'%3E%3Cpath d='M382-240 154-468l57-57 171 171 367-367 57 57z'/%3E%3C/svg%3E");cursor:default;filter:none;opacity:1;pointer-events:none}#panic-details-content textarea{background:rgb(var(--modal-foreground-rgb),.07);border:none;border-radius:8px;box-sizing:border-box;color:rgb(var(--modal-foreground-rgb));font-family:monospace;font-size:12px;height:100%;outline:none;padding:10px;resize:none;width:100%}#panic-details-content textarea::-webkit-scrollbar{width:6px}#panic-details-content textarea::-webkit-scrollbar-thumb{background:rgb(var(--modal-foreground-rgb),.25);border-radius:3px}#panic-details-content textarea::-webkit-scrollbar-track{background:transparent}#message-overlay{align-items:center;background:var(--ruffle-blue);color:var(--ruffle-orange);display:flex;justify-content:center;opacity:1;overflow:auto;z-index:2}#message-overlay .message{font-size:20px;max-height:100%;max-width:100%;padding:5%;text-align:center}#message-overlay p{margin:.5em 0}#message-overlay .message div{-moz-column-gap:1em;column-gap:1em;display:flex;flex-wrap:wrap;justify-content:center}#message-overlay a,#message-overlay button{background:var(--ruffle-blue);border:2px solid var(--ruffle-orange);border-radius:8px;color:var(--ruffle-orange);cursor:pointer;font-family:inherit;font-size:16px;font-weight:700;margin:8px 0;padding:10px 16px;text-decoration:none;transition:background .15s}#panic ul{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;list-style-type:none;margin:0;padding:0}:is(#panic ul) li a{background:transparent;border:1px solid hsla(0,0%,100%,.7);border-radius:8px;color:#fff;display:inline-block;font-family:inherit;font-size:13px;font-weight:700;padding:8px 16px;text-decoration:none;transition:background .15s}:is(:is(#panic ul) li a):hover{background:hsla(0,0%,100%,.2)}#message-overlay a:hover,#message-overlay button:hover{background:#ffffff4c}#context-menu-overlay,.modal{height:100%;position:absolute;width:100%;z-index:1}#context-menu{background-color:var(--modal-background);border-radius:8px;box-shadow:0 0 16px #0006;color:rgb(var(--modal-foreground-rgb));font-size:14px;list-style:none;margin:0;overflow:hidden;padding:5px 0;position:absolute;text-align:start;white-space:nowrap}#context-menu .menu-item{padding:7px 12px}#context-menu.has-checkmarks .menu-item{padding-inline-start:32px;position:relative}#context-menu.has-checkmarks .menu-item.checked:before{background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 -960 960 960"><path d="M382-240 154-468l57-57 171 171 367-367 57 57z"/></svg>');background-repeat:no-repeat;background-size:contain;content:"";filter:var(--modal-foreground-filter);height:16px;inset-inline-start:8px;position:absolute;top:50%;transform:translateY(-50%);width:16px}#context-menu .menu-item.disabled{color:rgb(var(--modal-foreground-rgb),.5);cursor:default}#context-menu .menu-item:not(.disabled):hover{background-color:rgb(var(--modal-foreground-rgb),.15)}#context-menu .menu-separator hr{border:none;border-bottom:1px solid rgb(var(--modal-foreground-rgb),.2);margin:4px 0}#splash-screen{align-items:center;background:var(
        --splash-screen-background,var(--preloader-background,var(--ruffle-blue))
    );display:flex;flex-direction:column;justify-content:center}.loadbar{background:var(--ruffle-blue-dark);height:20%;max-height:10px;max-width:316px;width:100%}.loadbar-inner{background:var(--ruffle-orange);height:100%;max-width:100%;width:0}.logo{display:var(--logo-display,block);max-height:150px;max-width:380px}.loading-animation{aspect-ratio:1;margin-bottom:2%;max-height:28px;max-width:28px;width:10%}.spinner{animation:a 1.5s linear infinite;stroke:var(--ruffle-orange);stroke-dasharray:180;stroke-dashoffset:135;transform-origin:50% 50%}@keyframes a{to{transform:rotate(1turn)}}#virtual-keyboard{height:1px;opacity:0;position:absolute;top:-100px;width:1px}.modal{background-color:#0008}.modal-area{background-color:var(--modal-background);border-radius:12px;box-shadow:0 2px 6px 0 #0008;color:rgb(var(--modal-foreground-rgb));left:50%;padding:8px 12px;position:relative;transform:translateX(-50%);width:-moz-fit-content;width:fit-content}#modal-area{height:300px;width:450px}.close-modal{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 -960 960 960'%3E%3Cpath d='M480-392 300-212q-18 18-44 18t-44-18-18-44 18-44l180-180-180-180q-18-18-18-44t18-44 44-18 44 18l180 180 180-180q18-18 44-18t44 18 18 44-18 44L568-480l180 180q18 18 18 44t-18 44-44 18-44-18z'/%3E%3C/svg%3E");cursor:pointer;filter:var(--modal-foreground-filter);height:16px;width:16px}.modal-button{background-color:rgb(var(--modal-foreground-rgb),.2);border-radius:6px;color:rgb(var(--modal-foreground-rgb));cursor:pointer;display:inline-block;padding:4px 8px;text-decoration:none}:not(#volume-controls)>.close-modal{position:absolute;right:16px;top:14px}.general-save-options{border-bottom:2px solid rgb(var(--modal-foreground-rgb),.3);padding-bottom:8px;text-align:center}#local-saves{border-collapse:collapse;color:inherit;display:block;height:calc(100% - 45px);min-height:30px;overflow-y:auto}#local-saves td{border-bottom:2px solid rgb(var(--modal-foreground-rgb),.15);height:30px}#local-saves td:first-child{width:100%;word-break:break-all}.save-option{cursor:pointer;display:inline-block;filter:var(--modal-foreground-filter);height:24px;opacity:.4;vertical-align:middle;width:24px}#local-saves>tr:hover .save-option{opacity:1}#download-save{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 -960 960 960'%3E%3Cpath d='M480-337q-8 0-15-2.5t-13-8.5L308-492q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T365-549l75 75v-286q0-17 11.5-28.5T480-800t28.5 11.5T520-760v286l75-75q12-12 28.5-11.5T652-548q11 12 11.5 28T652-492L508-348q-6 6-13 8.5t-15 2.5M240-160q-33 0-56.5-23.5T160-240v-80q0-17 11.5-28.5T200-360t28.5 11.5T240-320v80h480v-80q0-17 11.5-28.5T760-360t28.5 11.5T800-320v80q0 33-23.5 56.5T720-160z'/%3E%3C/svg%3E")}#replace-save{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 -1080 960 1200'%3E%3Cpath d='M440-367v127q0 17 11.5 28.5T480-200t28.5-11.5T520-240v-127l36 36q6 6 13.5 9t15 2.5T599-323t13-9q11-12 11.5-28T612-388L508-492q-6-6-13-8.5t-15-2.5-15 2.5-13 8.5L348-388q-12 12-11.5 28t12.5 28q12 11 28 11.5t28-11.5zM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v447q0 33-23.5 56.5T720-80zm280-560q0 17 11.5 28.5T560-600h160L520-800z'/%3E%3C/svg%3E")}#delete-save{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 -1020 960 1080'%3E%3Cpath d='M280-120q-33 0-56.5-23.5T200-200v-520q-17 0-28.5-11.5T160-760t11.5-28.5T200-800h160q0-17 11.5-28.5T400-840h160q17 0 28.5 11.5T600-800h160q17 0 28.5 11.5T800-760t-11.5 28.5T760-720v520q0 33-23.5 56.5T680-120zm120-160q17 0 28.5-11.5T440-320v-280q0-17-11.5-28.5T400-640t-28.5 11.5T360-600v280q0 17 11.5 28.5T400-280m160 0q17 0 28.5-11.5T600-320v-280q0-17-11.5-28.5T560-640t-28.5 11.5T520-600v280q0 17 11.5 28.5T560-280'/%3E%3C/svg%3E")}.replace-save{display:none}#video-modal .modal-area{box-sizing:border-box;height:95%;width:95%}#video-holder{box-sizing:border-box;height:100%;padding:36px 4px 6px}#video-holder video{background-color:#000;height:100%;width:100%}#volume-controls{align-items:center;display:flex;gap:6px}#mute-checkbox{display:none}label[for=mute-checkbox]{cursor:pointer;filter:var(--modal-foreground-filter);height:24px;line-height:0;width:24px}#volume-mute{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 -960 960 960'%3E%3Cpath d='m719.13-419.35-71.67 71.68Q634.78-335 617.13-335t-30.33-12.67q-12.67-12.68-12.67-30.33t12.67-30.33L658.48-480l-71.68-71.67q-12.67-12.68-12.67-30.33t12.67-30.33Q599.48-625 617.13-625t30.33 12.67l71.67 71.68 71.67-71.68Q803.48-625 821.13-625t30.33 12.67q12.67 12.68 12.67 30.33t-12.67 30.33L779.78-480l71.68 71.67q12.67 12.68 12.67 30.33t-12.67 30.33Q838.78-335 821.13-335t-30.33-12.67zM278-357.87H161.22q-17.66 0-30.33-12.67-12.67-12.68-12.67-30.33v-158.26q0-17.65 12.67-30.33 12.67-12.67 30.33-12.67H278l130.15-129.91q20.63-20.63 46.98-9.45 26.35 11.19 26.35 39.77v443.44q0 28.58-26.35 39.77-26.35 11.18-46.98-9.45z'/%3E%3C/svg%3E")}#volume-min{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='161 -960 960 960'%3E%3Cpath d='M438.65-357.87H321.87q-17.65 0-30.33-12.67-12.67-12.68-12.67-30.33v-158.26q0-17.65 12.67-30.33 12.68-12.67 30.33-12.67h116.78L568.8-732.04q20.63-20.63 46.98-9.45 26.35 11.19 26.35 39.77v443.44q0 28.58-26.35 39.77-26.35 11.18-46.98-9.45z'/%3E%3C/svg%3E")}#volume-mid{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='80 -960 960 960'%3E%3Cpath d='M357.98-357.87H241.2q-17.66 0-30.33-12.67-12.67-12.68-12.67-30.33v-158.26q0-17.65 12.67-30.33 12.67-12.67 30.33-12.67h116.78L487.65-731.8q20.63-20.64 47.1-9.57t26.47 39.65v443.44q0 28.58-26.47 39.65t-47.1-9.57zM741.8-480q0 42.48-20.47 80.09-20.48 37.61-54.94 60.82-10.22 5.98-20.19.25-9.98-5.73-9.98-17.44v-248.44q0-11.71 9.98-17.32 9.97-5.61 20.19.37 34.46 23.71 54.94 61.45Q741.8-522.48 741.8-480'/%3E%3C/svg%3E")}#volume-max{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='9 -960 960 960'%3E%3Cpath d='M754.22-480.5q0-78.52-41.88-143.9t-111.91-98.62q-14.47-6.74-20.47-20.96t-.53-28.93q5.74-15.72 20.34-22.46t29.58 0q92.48 42.46 147.97 127.05 55.48 84.6 55.48 187.82t-55.48 187.82q-55.49 84.59-147.97 127.05-14.98 6.74-29.58 0t-20.34-22.46q-5.47-14.71.53-28.93t20.47-20.96q70.03-33.24 111.91-98.62t41.88-143.9M286.98-357.87H170.2q-17.66 0-30.33-12.67-12.67-12.68-12.67-30.33v-158.26q0-17.65 12.67-30.33 12.67-12.67 30.33-12.67h116.78L416.65-731.8q20.63-20.64 47.1-9.57t26.47 39.65v443.44q0 28.58-26.47 39.65t-47.1-9.57zM670.8-480q0 42.48-20.47 80.09-20.48 37.61-54.94 60.82-10.22 5.98-20.19.25-9.98-5.73-9.98-17.44v-248.44q0-11.71 9.98-17.32 9.97-5.61 20.19.37 34.46 23.71 54.94 61.45Q670.8-522.48 670.8-480'/%3E%3C/svg%3E")}#volume-slider-text{text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:4.8ch}#hardware-acceleration-modal .modal-area{box-sizing:border-box;padding:16px 48px;text-align:center;width:95%}#acceleration-text{display:block;margin-bottom:8px}#clipboard-modal h2{margin-right:36px;margin-top:4px}#clipboard-modal p:last-child{margin-bottom:2px}@media (prefers-color-scheme:light){:host{--modal-background:#fafafa;--modal-foreground-rgb:0,0,0;--modal-foreground-filter:none}}@media (prefers-color-scheme:dark){:host{--modal-background:#282828;--modal-foreground-rgb:221,221,221;--modal-foreground-filter:invert(90%)}}`;function Ne(){return(0,D.jsx)(`style`,{children:Me})}function Pe(){return(0,D.jsx)(`style`,{id:`dynamic-styles`})}function Fe(){return(0,D.jsxs)(`div`,{id:`container`,children:[(0,D.jsx)(`div`,{id:`play-button`,children:(0,D.jsx)(`div`,{class:`icon`,children:(0,D.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,preserveAspectRatio:`xMidYMid`,viewBox:`0 0 250 250`,width:`100%`,height:`100%`,children:[(0,D.jsxs)(`defs`,{xmlns:`http://www.w3.org/2000/svg`,children:[(0,D.jsxs)(`linearGradient`,{xmlns:`http://www.w3.org/2000/svg`,id:`a`,gradientUnits:`userSpaceOnUse`,x1:`125`,y1:`0`,x2:`125`,y2:`250`,spreadMethod:`pad`,children:[(0,D.jsx)(`stop`,{xmlns:`http://www.w3.org/2000/svg`,offset:`0%`,"stop-color":`#FDA138`}),(0,D.jsx)(`stop`,{xmlns:`http://www.w3.org/2000/svg`,offset:`100%`,"stop-color":`#FD3A40`})]}),(0,D.jsxs)(`g`,{xmlns:`http://www.w3.org/2000/svg`,id:`b`,children:[(0,D.jsx)(`path`,{xmlns:`http://www.w3.org/2000/svg`,fill:`url(#a)`,d:`M250 125q0-52-37-88-36-37-88-37T37 37Q0 73 0 125t37 88q36 37 88 37t88-37q37-36 37-88M87 195V55l100 70-100 70z`}),(0,D.jsx)(`path`,{xmlns:`http://www.w3.org/2000/svg`,fill:`#FFF`,d:`M87 55v140l100-70L87 55z`})]})]}),(0,D.jsx)(`use`,{xmlns:`http://www.w3.org/2000/svg`,href:`#b`})]})})}),(0,D.jsxs)(`div`,{id:`unmute-overlay`,children:[(0,D.jsx)(`div`,{class:`background`}),(0,D.jsx)(`div`,{class:`icon`,children:(0,D.jsxs)(`svg`,{id:`unmute-overlay-svg`,xmlns:`http://www.w3.org/2000/svg`,preserveAspectRatio:`xMidYMid`,viewBox:`0 0 512 584`,width:`100%`,height:`100%`,children:[(0,D.jsx)(`path`,{xmlns:`http://www.w3.org/2000/svg`,fill:`#FFF`,stroke:`#FFF`,d:`m457.941 256 47.029-47.029c9.372-9.373 9.372-24.568 0-33.941-9.373-9.373-24.568-9.373-33.941 0l-47.029 47.029-47.029-47.029c-9.373-9.373-24.568-9.373-33.941 0-9.372 9.373-9.372 24.568 0 33.941l47.029 47.029-47.029 47.029c-9.372 9.373-9.372 24.568 0 33.941 4.686 4.687 10.827 7.03 16.97 7.03s12.284-2.343 16.971-7.029l47.029-47.03 47.029 47.029c4.687 4.687 10.828 7.03 16.971 7.03s12.284-2.343 16.971-7.029c9.372-9.373 9.372-24.568 0-33.941z`}),(0,D.jsx)(`path`,{xmlns:`http://www.w3.org/2000/svg`,fill:`#FFF`,stroke:`#FFF`,d:`m99 160h-55c-24.301 0-44 19.699-44 44v104c0 24.301 19.699 44 44 44h55c2.761 0 5-2.239 5-5v-182c0-2.761-2.239-5-5-5z`}),(0,D.jsx)(`path`,{xmlns:`http://www.w3.org/2000/svg`,fill:`#FFF`,stroke:`#FFF`,d:`m280 56h-24c-5.269 0-10.392 1.734-14.578 4.935l-103.459 79.116c-1.237.946-1.963 2.414-1.963 3.972v223.955c0 1.557.726 3.026 1.963 3.972l103.459 79.115c4.186 3.201 9.309 4.936 14.579 4.936h23.999c13.255 0 24-10.745 24-24v-352.001c0-13.255-10.745-24-24-24z`}),(0,D.jsx)(`text`,{xmlns:`http://www.w3.org/2000/svg`,id:`unmute-text`,x:`256`,y:`560`,"text-anchor":`middle`,"font-size":`60px`,fill:`#FFF`,stroke:`#FFF`,children:`Click to unmute`})]})})]}),(0,D.jsx)(`input`,{"aria-hidden":`true`,id:`virtual-keyboard`,type:`text`,autocomplete:`off`,autocorrect:`off`,autocapitalize:`none`})]})}function Ie(){return(0,D.jsxs)(`div`,{id:`splash-screen`,class:`hidden`,children:[(0,D.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,class:`logo`,preserveAspectRatio:`xMidYMid`,viewBox:`0 0 380 150`,children:(0,D.jsxs)(`g`,{xmlns:`http://www.w3.org/2000/svg`,children:[(0,D.jsx)(`path`,{xmlns:`http://www.w3.org/2000/svg`,fill:`#966214`,d:`M58.75 85.6q.75-.1 1.5-.35.85-.25 1.65-.75.55-.35 1.05-.8.5-.45.95-1 .5-.5.75-1.2-.05.05-.15.1-.1.15-.25.25l-.1.2q-.15.05-.25.1-.4 0-.8.05-.5-.25-.9-.5-.3-.1-.55-.3l-.6-.6-4.25-6.45-1.5 11.25h3.45m83.15-.2h3.45q.75-.1 1.5-.35.25-.05.45-.15.35-.15.65-.3l.5-.3q.25-.15.5-.35.45-.35.9-.75.45-.35.75-.85l.1-.1q.1-.2.2-.35.2-.3.35-.6l-.3.4-.15.15q-.5.15-1.1.1-.25 0-.4-.05-.5-.15-.8-.4-.15-.1-.25-.25-.3-.3-.55-.6l-.05-.05v-.05l-4.25-6.4-1.5 11.25m-21.15-3.95q-.3-.3-.55-.6l-.05-.05v-.05l-4.25-6.4-1.5 11.25h3.45q.75-.1 1.5-.35.85-.25 1.6-.75.75-.5 1.4-1.1.45-.35.75-.85.35-.5.65-1.05l-.45.55q-.5.15-1.1.1-.9 0-1.45-.7m59.15.3q-.75-.5-1.4-1-3.15-2.55-3.5-6.4l-1.5 11.25h21q-3.1-.25-5.7-.75-5.6-1.05-8.9-3.1m94.2 3.85h3.45q.6-.1 1.2-.3.4-.1.75-.2.35-.15.65-.3.7-.35 1.35-.8.75-.55 1.3-1.25.1-.15.25-.3-2.55-.25-3.25-1.8l-4.2-6.3-1.5 11.25m-45.3-4.85q-.5-.4-.9-.8-2.3-2.35-2.6-5.6l-1.5 11.25h21q-11.25-.95-16-4.85m97.7 4.85q-.3-.05-.6-.05-10.8-1-15.4-4.8-3.15-2.55-3.5-6.35l-1.5 11.2h21Z`}),(0,D.jsx)(`path`,{xmlns:`http://www.w3.org/2000/svg`,fill:`var(--ruffle-orange)`,d:`M92.6 54.8q-1.95-1.4-4.5-1.4H60.35q-1.35 0-2.6.45-1.65.55-3.15 1.8-2.75 2.25-3.25 5.25l-1.65 12h.05v.3l5.85 1.15h-9.5q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45-.5.3-.95.7-.45.35-.85.8-.35.4-.65.85-.3.45-.5.9-.15.45-.3.95l-5.85 41.6H50.3l5-35.5 1.5-11.25 4.25 6.45.6.6q.25.2.55.3.4.25.9.5.4-.05.8-.05.1-.05.25-.1l.1-.2q.15-.1.25-.25.1-.05.15-.1l.3-1.05 1.75-12.3h11.15L75.8 82.6h16.5l2.3-16.25h-.05l.8-5.7q.4-2.45-1-4.2-.35-.4-.75-.8-.25-.25-.55-.5-.2-.2-.45-.35m16.2 18.1h.05l-.05.3 5.85 1.15H105.2q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45-.5.3-1 .65-.4.4-.8.85-.25.3-.55.65-.05.1-.15.2-.25.45-.4.9-.2.45-.3.95-.1.65-.2 1.25-.2 1.15-.4 2.25l-4.3 30.6q-.25 3 1.75 5.25 1.6 1.8 4 2.15.6.1 1.25.1h27.35q3.25 0 6-2.25.35-.35.7-.55l.3-.2q2-2 2.25-4.5l1.65-11.6q.05-.05.1-.05l1.65-11.35h.05l.7-5.2 1.5-11.25 4.25 6.4v.05l.05.05q.25.3.55.6.1.15.25.25.3.25.8.4.15.05.4.05.6.05 1.1-.1l.15-.15.3-.4.3-1.05 1.3-9.05h-.05l.7-5.05h-.05l.15-1.25h-.05l1.65-11.7h-16.25l-2.65 19.5h.05v.2l-.05.1h.05l5.8 1.15H132.7q-.5.05-1 .15-.5.15-1 .35-.15.05-.3.15-.3.1-.55.25-.05 0-.1.05-.5.3-1 .65-.4.35-.7.7-.55.7-.95 1.45-.35.65-.55 1.4-.15.7-.25 1.4v.05q-.15 1.05-.35 2.05l-1.2 8.75v.1l-2.1 14.7H111.4l2.25-15.55h.05l.7-5.2 1.5-11.25 4.25 6.4v.05l.05.05q.25.3.55.6.55.7 1.45.7.6.05 1.1-.1l.45-.55.3-1.05 1.3-9.05h-.05l.7-5.05h-.05l.15-1.25h-.05l1.65-11.7h-16.25l-2.65 19.5m106.5-41.75q-2.25-2.25-5.5-2.25h-27.75q-3 0-5.75 2.25-1.3.95-2.05 2.1-.45.6-.7 1.2-.2.5-.35 1-.1.45-.15.95l-4.15 29.95h-.05l-.7 5.2h-.05l-.2 1.35h.05l-.05.3 5.85 1.15h-9.45q-2.1.05-3.95 1.6-1.9 1.55-2.25 3.55l-.5 3.5h-.05l-5.3 38.1h16.25l5-35.5 1.5-11.25q.35 3.85 3.5 6.4.65.5 1.4 1 3.3 2.05 8.9 3.1 2.6.5 5.7.75l1.75-11.25h-12.2l.4-2.95h-.05l.7-5.05h-.05q.1-.9.3-1.9.1-.75.2-1.6.85-5.9 2.15-14.9 0-.15.05-.25l.1-.9q.2-1.55.45-3.15h11.25l-3.1 20.8h16.5l4.1-28.05q.15-1.7-.4-3.15-.5-1.1-1.35-2.1m46.65 44.15q-.5.3-1 .65-.4.4-.8.85-.35.4-.7.85-.25.45-.45.9-.15.45-.3.95l-5.85 41.6h16.25l5-35.5 1.5-11.25 4.2 6.3q.7 1.55 3.25 1.8l.05-.1q.25-.4.35-.85l.3-1.05 1.8-14.05v-.05l5.35-37.45h-16.25l-6.15 44.3 5.85 1.15h-9.45q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45m5.4-38.9q.15-1.7-.4-3.15-.5-1.1-1.35-2.1-2.25-2.25-5.5-2.25h-27.75q-2.3 0-4.45 1.35-.65.35-1.3.9-1.3.95-2.05 2.1-.45.6-.7 1.2-.4.9-.5 1.95l-4.15 29.95h-.05l-.7 5.2h-.05l-.2 1.35h.05l-.05.3 5.85 1.15h-9.45q-2.1.05-3.95 1.6-1.9 1.55-2.25 3.55l-.5 3.5h-.05l-1.2 8.75v.1l-4.1 29.25h16.25l5-35.5 1.5-11.25q.3 3.25 2.6 5.6.4.4.9.8 4.75 3.9 16 4.85l1.75-11.25h-12.2l.4-2.95h-.05l.7-5.05h-.05q.15-.9.3-1.9.1-.75.25-1.6.15-1.25.35-2.65v-.05q.95-6.7 2.35-16.5h11.25l-3.1 20.8h16.5l4.1-28.05M345 66.35h-.05l1.15-8.2q.5-3-1.75-5.25-1.25-1.25-3-1.75-1-.5-2.25-.5h-27.95q-.65 0-1.3.1-2.5.35-4.7 2.15-2.75 2.25-3.25 5.25l-1.95 14.7v.05l-.05.3 5.85 1.15h-9.45q-1.9.05-3.6 1.35-.2.1-.35.25-1.9 1.55-2.25 3.55l-4.85 34.1q-.25 3 1.75 5.25 1.25 1.4 3 1.95 1.05.3 2.25.3H320q3.25 0 6-2.25 2.75-2 3.25-5l2.75-18.5h-16.5l-1.75 11H302.5l2.1-14.75h.05l.85-6 1.5-11.2q.35 3.8 3.5 6.35 4.6 3.8 15.4 4.8.3 0 .6.05h15.75L345 66.35m-16.4-.95-1.25 8.95h-11.3l.4-2.95h-.05l.7-5.05h-.1l.15-.95h11.45Z`})]})}),(0,D.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,class:`loading-animation`,viewBox:`0 0 66 66`,children:(0,D.jsx)(`circle`,{xmlns:`http://www.w3.org/2000/svg`,class:`spinner`,fill:`none`,"stroke-width":`6`,"stroke-linecap":`round`,cx:`33`,cy:`33`,r:`30`})}),(0,D.jsx)(`div`,{class:`loadbar`,children:(0,D.jsx)(`div`,{class:`loadbar-inner`})})]})}function Le(){return(0,D.jsx)(`div`,{id:`save-manager`,class:`modal hidden`,children:(0,D.jsxs)(`div`,{id:`modal-area`,class:`modal-area`,children:[(0,D.jsx)(`span`,{class:`close-modal`}),(0,D.jsx)(`div`,{class:`general-save-options`,children:(0,D.jsx)(`span`,{class:`modal-button`})}),(0,D.jsx)(`table`,{id:`local-saves`})]})})}var Re=class{constructor(e){this.value=e}valueOf(){return this.value}},O=class extends Re{constructor(e=`???`){super(e)}toString(e){return`{${this.value}}`}},ze=class extends Re{constructor(e,t={}){super(e),this.opts=t}toString(e){if(e)try{return e.memoizeIntlObject(Intl.NumberFormat,this.opts).format(this.value)}catch(t){e.reportError(t)}return this.value.toString(10)}},Be=class e extends Re{static supportsValue(t){if(typeof t==`number`||t instanceof Date)return!0;if(t instanceof Re)return e.supportsValue(t.valueOf());if(`Temporal`in globalThis){let e=globalThis.Temporal;if(t instanceof e.Instant||t instanceof e.PlainDateTime||t instanceof e.PlainDate||t instanceof e.PlainMonthDay||t instanceof e.PlainTime||t instanceof e.PlainYearMonth)return!0}return!1}constructor(t,n={}){t instanceof e?(n={...t.opts,...n},t=t.value):t instanceof Re&&(t=t.valueOf()),typeof t==`object`&&`calendarId`in t&&n.calendar===void 0&&(n={...n,calendar:t.calendarId}),super(t),this.opts=n}[Symbol.toPrimitive](e){return e===`string`?this.toString():this.toNumber()}toNumber(){let e=this.value;if(typeof e==`number`)return e;if(e instanceof Date)return e.getTime();if(`epochMilliseconds`in e)return e.epochMilliseconds;if(`toZonedDateTime`in e)return e.toZonedDateTime(`UTC`).epochMilliseconds;throw TypeError(`Unwrapping a non-number value as a number`)}toString(e){if(e)try{return e.memoizeIntlObject(Intl.DateTimeFormat,this.opts).format(this.value)}catch(t){e.reportError(t)}return typeof this.value==`number`||this.value instanceof Date?new Date(this.value).toISOString():this.value.toString()}},Ve=100,He=`⁨`,Ue=`⁩`;function We(e,t,n){return n===t||n instanceof ze&&t instanceof ze&&n.value===t.value||t instanceof ze&&typeof n==`string`&&n===e.memoizeIntlObject(Intl.PluralRules,t.opts).select(t.value)}function Ge(e,t,n){return t[n]?et(e,t[n].value):(e.reportError(RangeError(`No default`)),new O)}function Ke(e,t){let n=[],r=Object.create(null);for(let i of t)i.type===`narg`?r[i.name]=qe(e,i.value):n.push(qe(e,i));return{positional:n,named:r}}function qe(e,t){switch(t.type){case`str`:return t.value;case`num`:return new ze(t.value,{minimumFractionDigits:t.precision});case`var`:return Je(e,t);case`mesg`:return Ye(e,t);case`term`:return Xe(e,t);case`func`:return Ze(e,t);case`select`:return Qe(e,t);default:return new O}}function Je(e,{name:t}){let n;if(e.params)if(Object.prototype.hasOwnProperty.call(e.params,t))n=e.params[t];else return new O(`$${t}`);else if(e.args&&Object.prototype.hasOwnProperty.call(e.args,t))n=e.args[t];else return e.reportError(ReferenceError(`Unknown variable: $${t}`)),new O(`$${t}`);if(n instanceof Re)return n;switch(typeof n){case`string`:return n;case`number`:return new ze(n);case`object`:if(Be.supportsValue(n))return new Be(n);default:return e.reportError(TypeError(`Variable type not supported: $${t}, ${typeof n}`)),new O(`$${t}`)}}function Ye(e,{name:t,attr:n}){let r=e.bundle._messages.get(t);if(!r)return e.reportError(ReferenceError(`Unknown message: ${t}`)),new O(t);if(n){let i=r.attributes[n];return i?et(e,i):(e.reportError(ReferenceError(`Unknown attribute: ${n}`)),new O(`${t}.${n}`))}return r.value?et(e,r.value):(e.reportError(ReferenceError(`No value: ${t}`)),new O(t))}function Xe(e,{name:t,attr:n,args:r}){let i=`-${t}`,a=e.bundle._terms.get(i);if(!a)return e.reportError(ReferenceError(`Unknown term: ${i}`)),new O(i);if(n){let t=a.attributes[n];if(t){e.params=Ke(e,r).named;let n=et(e,t);return e.params=null,n}return e.reportError(ReferenceError(`Unknown attribute: ${n}`)),new O(`${i}.${n}`)}e.params=Ke(e,r).named;let o=et(e,a.value);return e.params=null,o}function Ze(e,{name:t,args:n}){let r=e.bundle._functions[t];if(!r)return e.reportError(ReferenceError(`Unknown function: ${t}()`)),new O(`${t}()`);if(typeof r!=`function`)return e.reportError(TypeError(`Function ${t}() is not callable`)),new O(`${t}()`);try{let t=Ke(e,n);return r(t.positional,t.named)}catch(n){return e.reportError(n),new O(`${t}()`)}}function Qe(e,{selector:t,variants:n,star:r}){let i=qe(e,t);if(i instanceof O)return Ge(e,n,r);for(let t of n)if(We(e,i,qe(e,t.key)))return et(e,t.value);return Ge(e,n,r)}function $e(e,t){if(e.dirty.has(t))return e.reportError(RangeError(`Cyclic reference`)),new O;e.dirty.add(t);let n=[],r=e.bundle._useIsolating&&t.length>1;for(let i of t){if(typeof i==`string`){n.push(e.bundle._transform(i));continue}if(e.placeables++,e.placeables>Ve)throw e.dirty.delete(t),RangeError(`Too many placeables expanded: ${e.placeables}, max allowed is ${Ve}`);r&&n.push(He),n.push(qe(e,i).toString(e)),r&&n.push(Ue)}return e.dirty.delete(t),n.join(``)}function et(e,t){return typeof t==`string`?e.bundle._transform(t):$e(e,t)}var tt=class{constructor(e,t,n){this.dirty=new WeakSet,this.params=null,this.placeables=0,this.bundle=e,this.errors=t,this.args=n}reportError(e){if(!this.errors||!(e instanceof Error))throw e;this.errors.push(e)}memoizeIntlObject(e,t){let n=this.bundle._intls.get(e);n||(n={},this.bundle._intls.set(e,n));let r=JSON.stringify(t);return n[r]||(n[r]=new e(this.bundle.locales,t)),n[r]}};function nt(e,t){let n=Object.create(null);for(let[r,i]of Object.entries(e))t.includes(r)&&(n[r]=i.valueOf());return n}var rt=[`unitDisplay`,`currencyDisplay`,`useGrouping`,`minimumIntegerDigits`,`minimumFractionDigits`,`maximumFractionDigits`,`minimumSignificantDigits`,`maximumSignificantDigits`];function it(e,t){let n=e[0];if(n instanceof O)return new O(`NUMBER(${n.valueOf()})`);if(n instanceof ze)return new ze(n.valueOf(),{...n.opts,...nt(t,rt)});if(n instanceof Be)return new ze(n.toNumber(),{...nt(t,rt)});throw TypeError(`Invalid argument to NUMBER`)}var at=[`dateStyle`,`timeStyle`,`fractionalSecondDigits`,`dayPeriod`,`hour12`,`weekday`,`era`,`year`,`month`,`day`,`hour`,`minute`,`second`,`timeZoneName`];function ot(e,t){let n=e[0];if(n instanceof O)return new O(`DATETIME(${n.valueOf()})`);if(n instanceof Be||n instanceof ze)return new Be(n,nt(t,at));throw TypeError(`Invalid argument to DATETIME`)}var st=new Map;function ct(e){let t=Array.isArray(e)?e.join(` `):e,n=st.get(t);return n===void 0&&(n=new Map,st.set(t,n)),n}var lt=class{constructor(e,{functions:t,useIsolating:n=!0,transform:r=e=>e}={}){this._terms=new Map,this._messages=new Map,this.locales=Array.isArray(e)?e:[e],this._functions={NUMBER:it,DATETIME:ot,...t},this._useIsolating=n,this._transform=r,this._intls=ct(e)}hasMessage(e){return this._messages.has(e)}getMessage(e){return this._messages.get(e)}addResource(e,{allowOverrides:t=!1}={}){let n=[];for(let r=0;r<e.body.length;r++){let i=e.body[r];if(i.id.startsWith(`-`)){if(t===!1&&this._terms.has(i.id)){n.push(Error(`Attempt to override an existing term: "${i.id}"`));continue}this._terms.set(i.id,i)}else{if(t===!1&&this._messages.has(i.id)){n.push(Error(`Attempt to override an existing message: "${i.id}"`));continue}this._messages.set(i.id,i)}}return n}formatPattern(e,t=null,n=null){if(typeof e==`string`)return this._transform(e);let r=new tt(this,n,t);try{return $e(r,e).toString(r)}catch(e){if(r.errors&&e instanceof Error)return r.errors.push(e),new O().toString(r);throw e}}},ut=/^(-?[a-zA-Z][\w-]*) *= */gm,dt=/\.([a-zA-Z][\w-]*) *= */y,ft=/\*?\[/y,pt=/(-?[0-9]+(?:\.([0-9]+))?)/y,mt=/([a-zA-Z][\w-]*)/y,ht=/([$-])?([a-zA-Z][\w-]*)(?:\.([a-zA-Z][\w-]*))?/y,gt=/^[A-Z][A-Z0-9_-]*$/,_t=/([^{}\n\r]+)/y,vt=/([^\\"\n\r]*)/y,yt=/\\([\\"])/y,bt=/\\u([a-fA-F0-9]{4})|\\U([a-fA-F0-9]{6})/y,xt=/^\n+/,St=/ +$/,Ct=/ *\r?\n/g,wt=/( *)$/,Tt=/{\s*/y,Et=/\s*}/y,Dt=/\[\s*/y,Ot=/\s*] */y,kt=/\s*\(\s*/y,At=/\s*->\s*/y,jt=/\s*:\s*/y,Mt=/\s*,?\s*/y,Nt=/\s+/y,Pt=class{constructor(e){this.body=[],ut.lastIndex=0;let t=0;for(;;){let n=ut.exec(e);if(n===null)break;t=ut.lastIndex;try{this.body.push(s(n[1]))}catch(e){if(e instanceof SyntaxError)continue;throw e}}function n(n){return n.lastIndex=t,n.test(e)}function r(n,r){if(e[t]===n)return t++,!0;if(r)throw new r(`Expected ${n}`);return!1}function i(e,r){if(n(e))return t=e.lastIndex,!0;if(r)throw new r(`Expected ${e.toString()}`);return!1}function a(n){n.lastIndex=t;let r=n.exec(e);if(r===null)throw SyntaxError(`Expected ${n.toString()}`);return t=n.lastIndex,r}function o(e){return a(e)[1]}function s(e){let t=l(),n=c();if(t===null&&Object.keys(n).length===0)throw SyntaxError(`Expected message value or attributes`);return{id:e,value:t,attributes:n}}function c(){let e=Object.create(null);for(;n(dt);){let t=o(dt),n=l();if(n===null)throw SyntaxError(`Expected attribute value`);e[t]=n}return e}function l(){let r;if(n(_t)&&(r=o(_t)),e[t]===`{`||e[t]===`}`)return u(r?[r]:[],1/0);let i=x();return i?r?u([r,i],i.length):(i.value=ee(i.value,xt),u([i],i.length)):r?ee(r,St):null}function u(r=[],i){for(;;){if(n(_t)){r.push(o(_t));continue}if(e[t]===`{`){r.push(d());continue}if(e[t]===`}`)throw SyntaxError(`Unbalanced closing brace`);let a=x();if(a){r.push(a),i=Math.min(i,a.length);continue}break}let a=r.length-1,s=r[a];typeof s==`string`&&(r[a]=ee(s,St));let c=[];for(let e of r)e instanceof Ft&&(e=e.value.slice(0,e.value.length-i)),e&&c.push(e);return c}function d(){i(Tt,SyntaxError);let e=f();if(i(Et))return e;if(i(At)){let t=h();return i(Et,SyntaxError),{type:`select`,selector:e,...t}}throw SyntaxError(`Unclosed placeable`)}function f(){if(e[t]===`{`)return d();if(n(ht)){let[,e,t,n=null]=a(ht);if(e===`$`)return{type:`var`,name:t};if(i(kt)){let r=p();if(e===`-`)return{type:`term`,name:t,attr:n,args:r};if(gt.test(t))return{type:`func`,name:t,args:r};throw SyntaxError(`Function names must be all upper-case`)}return e===`-`?{type:`term`,name:t,attr:n,args:[]}:{type:`mesg`,name:t,attr:n}}return _()}function p(){let n=[];for(;;){switch(e[t]){case`)`:return t++,n;case void 0:throw SyntaxError(`Unclosed argument list`)}n.push(m()),i(Mt)}}function m(){let e=f();return e.type===`mesg`&&i(jt)?{type:`narg`,name:e.name,value:_()}:e}function h(){let e=[],t=0,i;for(;n(ft);){r(`*`)&&(i=t);let n=g(),a=l();if(a===null)throw SyntaxError(`Expected variant value`);e[t++]={key:n,value:a}}if(t===0)return null;if(i===void 0)throw SyntaxError(`Expected default variant`);return{variants:e,star:i}}function g(){i(Dt,SyntaxError);let e;return e=n(pt)?v():{type:`str`,value:o(mt)},i(Ot,SyntaxError),e}function _(){if(n(pt))return v();if(e[t]===`"`)return y();throw SyntaxError(`Invalid expression`)}function v(){let[,e,t=``]=a(pt),n=t.length;return{type:`num`,value:parseFloat(e),precision:n}}function y(){r(`"`,SyntaxError);let n=``;for(;;){if(n+=o(vt),e[t]===`\\`){n+=b();continue}if(r(`"`))return{type:`str`,value:n};throw SyntaxError(`Unclosed string literal`)}}function b(){if(n(yt))return o(yt);if(n(bt)){let[,e,t]=a(bt),n=parseInt(e||t,16);return n<=55295||57344<=n?String.fromCodePoint(n):`�`}throw SyntaxError(`Unknown escape sequence`)}function x(){let n=t;switch(i(Nt),e[t]){case`.`:case`[`:case`*`:case`}`:case void 0:return!1;case`{`:return S(e.slice(n,t))}return e[t-1]===` `?S(e.slice(n,t)):!1}function ee(e,t){return e.replace(t,``)}function S(e){let t=e.replace(Ct,`
`),n=wt.exec(e)[1].length;return new Ft(t,n)}}},Ft=class{constructor(e,t){this.value=e,this.length=t}},It=RegExp(`^([a-z]{2,3}|\\*)(?:-([a-z]{4}|\\*))?(?:-([a-z]{2}|\\*))?(?:-(([0-9][a-z0-9]{3}|[a-z0-9]{5,8})|\\*))?$`,`i`),Lt=class{constructor(e){let t=It.exec(e.replace(/_/g,`-`));if(!t){this.isWellFormed=!1;return}let[,n,r,i,a]=t;n&&(this.language=n.toLowerCase()),r&&(this.script=r[0].toUpperCase()+r.slice(1)),i&&(this.region=i.toUpperCase()),this.variant=a,this.isWellFormed=!0}isEqual(e){return this.language===e.language&&this.script===e.script&&this.region===e.region&&this.variant===e.variant}matches(e,t=!1,n=!1){return(this.language===e.language||t&&this.language===void 0||n&&e.language===void 0)&&(this.script===e.script||t&&this.script===void 0||n&&e.script===void 0)&&(this.region===e.region||t&&this.region===void 0||n&&e.region===void 0)&&(this.variant===e.variant||t&&this.variant===void 0||n&&e.variant===void 0)}toString(){return[this.language,this.script,this.region,this.variant].filter(e=>e!==void 0).join(`-`)}clearVariants(){this.variant=void 0}clearRegion(){this.region=void 0}addLikelySubtags(){let e=Bt(this.toString().toLowerCase());return e?(this.language=e.language,this.script=e.script,this.region=e.region,this.variant=e.variant,!0):!1}},Rt={ar:`ar-arab-eg`,"az-arab":`az-arab-ir`,"az-ir":`az-arab-ir`,be:`be-cyrl-by`,da:`da-latn-dk`,el:`el-grek-gr`,en:`en-latn-us`,fa:`fa-arab-ir`,ja:`ja-jpan-jp`,ko:`ko-kore-kr`,pt:`pt-latn-br`,sr:`sr-cyrl-rs`,"sr-ru":`sr-latn-ru`,sv:`sv-latn-se`,ta:`ta-taml-in`,uk:`uk-cyrl-ua`,zh:`zh-hans-cn`,"zh-hant":`zh-hant-tw`,"zh-hk":`zh-hant-hk`,"zh-mo":`zh-hant-mo`,"zh-tw":`zh-hant-tw`,"zh-gb":`zh-hant-gb`,"zh-us":`zh-hant-us`},zt=[`az`,`bg`,`cs`,`de`,`es`,`fi`,`fr`,`hu`,`it`,`lt`,`lv`,`nl`,`pl`,`ro`,`ru`];function Bt(e){if(Object.prototype.hasOwnProperty.call(Rt,e))return new Lt(Rt[e]);let t=new Lt(e);return t.language&&zt.includes(t.language)?(t.region=t.language.toUpperCase(),t):null}function Vt(e,t,n){let r=new Set,i=new Map;for(let e of t)new Lt(e).isWellFormed&&i.set(e,new Lt(e));outer:for(let t of e){let e=t.toLowerCase(),a=new Lt(e);if(a.language!==void 0){for(let t of i.keys())if(e===t.toLowerCase()){if(r.add(t),i.delete(t),n===`lookup`)return Array.from(r);if(n===`filtering`)continue;continue outer}for(let[e,t]of i.entries())if(t.matches(a,!0,!1)){if(r.add(e),i.delete(e),n===`lookup`)return Array.from(r);if(n===`filtering`)continue;continue outer}if(a.addLikelySubtags()){for(let[e,t]of i.entries())if(t.matches(a,!0,!1)){if(r.add(e),i.delete(e),n===`lookup`)return Array.from(r);if(n===`filtering`)continue;continue outer}}a.clearVariants();for(let[e,t]of i.entries())if(t.matches(a,!0,!0)){if(r.add(e),i.delete(e),n===`lookup`)return Array.from(r);if(n===`filtering`)continue;continue outer}if(a.clearRegion(),a.addLikelySubtags()){for(let[e,t]of i.entries())if(t.matches(a,!0,!1)){if(r.add(e),i.delete(e),n===`lookup`)return Array.from(r);if(n===`filtering`)continue;continue outer}}a.clearRegion();for(let[e,t]of i.entries())if(t.matches(a,!0,!0)){if(r.add(e),i.delete(e),n===`lookup`)return Array.from(r);if(n===`filtering`)continue;continue outer}}}return Array.from(r)}function Ht(e,t,{strategy:n=`filtering`,defaultLocale:r}={}){let i=Vt(Array.from(e??[]).map(String),Array.from(t??[]).map(String),n);if(n===`lookup`){if(r===void 0)throw Error("defaultLocale cannot be undefined for strategy `lookup`");i.length===0&&i.push(r)}else r&&!i.includes(r)&&i.push(r);return i}function Ut(){Object.defineProperty(Array.prototype,"reduce",{value(...e){if(e.length===0&&window.Prototype&&window.Prototype.Version&&window.Prototype.Version<`1.6.1`)return this.length>1?this:this[0];let t=e[0];if(this===null)throw TypeError(`Array.prototype.reduce called on null or undefined`);if(typeof t!=`function`)throw TypeError(`${t} is not a function`);let n=Object(this),r=n.length>>>0,i=0,a;if(e.length>=2)a=e[1];else{for(;i<r&&!(i in n);)i++;if(i>=r)throw TypeError(`Reduce of empty array with no initial value`);a=n[i++]}for(;i<r;)i in n&&(a=t(a,n[i],i,n)),i++;return a}})}function Wt(){typeof window.constructor!=`function`||!Jt(window.constructor)||(window.Window=window.constructor)}function Gt(){(window.Reflect===void 0||window.Reflect===null)&&(window.Reflect={}),typeof Reflect.get!=`function`&&Object.defineProperty(Reflect,"get",{value(e,t){return e[t]}}),typeof Reflect.set!=`function`&&Object.defineProperty(Reflect,"set",{value(e,t,n){e[t]=n}}),typeof Reflect.has!=`function`&&Object.defineProperty(Reflect,"has",{value(e,t){return t in e}}),typeof Reflect.ownKeys!=`function`&&Object.defineProperty(Reflect,"ownKeys",{value(e){return[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)]}})}function Kt(){if(typeof Map.prototype.set!=`function`){let e=Map,t=document.createElement(`iframe`);return t.style.display=`none`,document.documentElement.append(t),Map=t.contentWindow.Map,t.remove(),e}}function qt(e){e&&(Map=e)}function Jt(e){let t=typeof Function.prototype.toString==`function`?Function.prototype.toString():null;return typeof t==`string`&&t.indexOf(`[native code]`)>=0?Function.prototype.toString.call(e).indexOf(`[native code]`)>=0:!1}function Yt(){(typeof Array.prototype.reduce!=`function`||!Jt(Array.prototype.reduce))&&Ut(),(typeof Window!=`function`||!Jt(Window))&&Wt(),Gt()}var Xt={"ar-SA":{"context_menu.ftl":`context-menu-download-swf = حمِّل .swf
context-menu-copy-debug-info = انسخ معلومات التنقيح
context-menu-open-save-manager = افتح مدير الحفظ
context-menu-about-ruffle =
    { $flavor ->
        [extension] عن ملحق رَفل ({ $version })
       *[other] عن رَفل ({ $version })
    }
context-menu-hide = أخفِ هذه القائمة
context-menu-exit-fullscreen = اخرج من وضعية الشاشة الكاملة
context-menu-enter-fullscreen = ادخل وضعية الشاشة الكاملة
context-menu-volume-controls = عناصر التحكم بالصوت
`,"messages.ftl":`message-cant-embed =
    لم يكن رفل قادرًا على تشغيل الفلاش المضمنة في هذه الصفحة.
    يمكنك محاولة فتح الملف في علامة تبويب منفصلة لتجاوز هذه المشكلة.
message-restored-from-bfcache =
    استعاد متصفحك محتوى الفلاش هذا من جلسة سابقة.
    للبدء من جديد، أعد تحميل الصفحة.
panic-title = لقد حدث خطأ ما :(
more-info = معلومات أكثر
run-anyway = شغِّل على أي حال
continue = استمر
report-bug = بلِّغ عن علة
update-ruffle = تحديث رفل
ruffle-demo = العرض التجريبي
ruffle-desktop = برنامج سطح المكتب
ruffle-wiki = اعرض ويكي رفل
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
error-canvas-reload = تعذر إعادة التحميل مع مُصَير اللوحة عندما استُخدِم مُصَير اللوحة مسبقًا.
error-file-protocol =
    يبدو أنك تشغِّل رفل على البروتوكول "file:".
    لا يعمل هذا إذ تمنع المتصفحات الكثير من الميزات من العمل لأسباب أمنية.
    بدلًا من ذلك، ندعوك إلى إعداد خادوم محلي أو استخدام عارض الويب أو تطبيق سطح المكتب.
error-javascript-config =
    تعرض رفل إلى مشكلة كبيرة بسبب الإعدادات الخاطئة لجافا سكرِبت.
    إذا كنت مسؤول الخادوم، نحن ندعوك إلى التحقق من تفاصيل الخطأ لمعرفة سبب المشكلة.
    يمكنك أيضًا الرجوع إلى ويكي رفل للحصول على المساعدة.
error-wasm-not-found =
    فشل رفل في تحميل مكون الملف ".wasm" المطلوب.
    إذا كنت مسؤول الخادوم، يرجى التأكد من أن الملف قد رُفِع بشكل صحيح.
    إذا استمرت المشكلة، قد تحتاج إلى استخدام إعداد "publicPath": رجاءً راجع ويكي رفل للحصول على المساعدة.
error-wasm-mime-type =
    واجه رفل مشكلة كبيرة أثناء محاولة التهيئة.
    خادوم الويب هذا لا يخدم ملفات ". wasm" مع نوع MIME الصحيح.
    إذا كنت مسؤول الخادم، يرجى مراجعة ويكي رفل للحصول على المساعدة.
error-invalid-swf =
    لا يمكن لرفل تحليل الملف المطلوب.
    السبب الأكثر إحتمالاً هو أن الملف المطلوب ليس صالحًا.
error-swf-fetch =
    فشل رفل في تحميل ملف فلاش SWF.
    السبب الأكثر احتمالًا هو أن الملف لم يعد موجودًا، لذلك لا يوجد شيء ليحمله رفل.
    حاول الاتصال بمسؤول الموقع للحصول على المساعدة.
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
`},"bs-BA":{"context_menu.ftl":`context-menu-download-swf = Preuzmite SWF datoteku
context-menu-copy-debug-info = Kopiraj informacije o otklanjanju grešaka
context-menu-open-save-manager = Otvori upravitelj spremanja
context-menu-about-ruffle =
    { $flavor ->
    [extension] O ekstenziji Ruffle-a ({ $version })
    *[other] O Ruffle-u ({ $version })
    }
context-menu-hide = Sakrij ovaj meni
context-menu-exit-fullscreen = Izlaz iz režima punog ekrana
context-menu-enter-fullscreen = Pređi na cijeli ekran
context-menu-volume-controls = Kontrole jačine zvuka
`,"messages.ftl":`message-cant-embed =
    Ruffle nije mogao pokrenuti Flash ugrađen na ovoj stranici.
    Možete pokušati otvoriti datoteku u zasebnoj kartici kako biste izbjegli ovaj problem.
message-restored-from-bfcache =
    Vaš preglednik je vratio ovaj Flash sadržaj iz prethodne sesije.
    Molimo vas da ponovo učitate stranicu za novi početak.
panic-title = Nešto je pošlo po zlu :(
more-info = Dodatne informacije
run-anyway = Ipak pokreni
continue = Nastavi
report-bug = Prijavi grešku
update-ruffle = Ažuriraj Ruffle
ruffle-demo = Web probna verzija
ruffle-desktop = Desktop aplikacija
ruffle-wiki = Pogledaj Ruffle Wiki
enable-hardware-acceleration = Izgleda da je hardversko ubrzanje onemogućeno. Iako Ruffle možda radi, moguće je da je vrlo spor. Možete saznati kako omogućiti hardversko ubrzanje slijedeći link ispod:
enable-hardware-acceleration-link = Često postavljana pitanja - Hardversko ubrzanje u Chromeu
view-error-details = Prikaži detalje greške
open-in-new-tab = Otvori u novoj kartici
click-to-unmute = Kliknite da biste uključili zvuk
clipboard-message-title = Kopiranje i naljepljivanje u Ruffle-u
clipboard-message-description =
    { $variant ->
    *[unsupported] Vaš preglednik ne podržava potpuni pristup međuspremniku,
    [access-denied] Pristup međuspremniku je odbijen,
    } ali uvijek možete koristiti ove prečice:
clipboard-message-copy = { " " } za kopiranje
clipboard-message-cut = { " " } za isijecanje
clipboard-message-paste = { " " } za lijepljenje
error-canvas-reload = Nije moguće ponovo učitati renderer kada je renderer već u upotrebi.
error-file-protocol =
    Izgleda da koristite Ruffle na protokolu "file:".
    Ovo ne funkcioniše jer preglednici blokiraju mnoge funkcije iz sigurnosnih razloga.
    Umjesto toga, preporučujemo vam da postavite lokalni server ili koristite web probnu verziju ili aplikaciju.
error-javascript-config =
    Ruffle je naišao na ozbiljan problem zbog pogrešne konfiguracije JavaScript-a.
    Ako ste administrator servera, preporučujemo vam da provjerite detalje greške kako biste saznali koji parametar uzrokuje problem. Također možete konsultovati Ruffle wiki za pomoć.
error-wasm-not-found =
    Ruffle nije uspio učitati potrebnu komponentu datoteke ".wasm".
    Ako ste administrator servera, provjerite je li datoteka ispravno otpremljena.
    Ako problem i dalje postoji, možda ćete morati koristiti postavku "publicPath": obratite se Ruffle wiki stranici za pomoć.
error-wasm-mime-type =
    Ruffle je naišao na ozbiljan problem prilikom pokušaja inicijalizacije.
    Ovaj web server ne poslužuje ".wasm" datoteke s ispravnim MIME tipom.
    Ako ste administrator servera, molimo vas da se obratite Ruffle wiki stranici za pomoć.
error-invalid-swf =
    Ruffle ne može analizirati traženu datoteku.
    Najvjerovatniji razlog je taj što tražena datoteka nije važeći SWF.
error-swf-fetch =
    Ruffle nije uspio učitati Flash SWF datoteku.
    Najvjerovatniji razlog je taj što datoteka više ne postoji, tako da Ruffle nema šta učitati.
    Pokušajte kontaktirati administratora web stranice za pomoć.
error-swf-cors =
    Ruffle nije uspio učitati Flash SWF datoteku.
    Pristup za preuzimanje je vjerovatno blokiran CORS politikom.
    Ako ste administrator servera, obratite se Ruffle wiki stranici za pomoć.
error-wasm-cors =
    Ruffle nije uspio učitati potrebnu komponentu datoteke ".wasm".
    Pristup dohvatu je vjerovatno blokiran CORS politikom.
    Ako ste administrator servera, obratite se Ruffle wiki stranici za pomoć.
error-wasm-invalid =
    Ruffle je naišao na ozbiljan problem prilikom pokušaja inicijalizacije.
    Izgleda da ovoj stranici nedostaju ili su datoteke nevažeće za pokretanje Rufflea.
    Ako ste administrator servera, pogledajte Ruffle wiki za pomoć.
error-wasm-download =
    Ruffle je naišao na ozbiljan problem prilikom pokušaja inicijalizacije.
    Ovo se često može riješiti jednostavnim ponovnim učitavanjem stranice.
    U suprotnom, kontaktirajte administratora stranice.
error-wasm-disabled-on-edge =
    Ruffle nije uspio učitati potrebnu komponentu datoteke ".wasm".
    Da biste riješili ovaj problem, pokušajte otvoriti postavke preglednika, kliknuti na "Privatnost, pretraga i usluge", pomaknuti se prema dolje i isključiti "Poboljšanje web sigurnosti".
    Ovo će omogućiti vašem pregledniku da učita potrebne datoteke ".wasm".
    Ako problem i dalje postoji, možda ćete morati koristiti drugi preglednik.
error-wasm-unsupported-browser =
    Preglednik koji koristite ne podržava WebAssembly ekstenzije potrebne za rad Ruffle-a.
    Molimo vas da pređete na podržani preglednik.
    Popis podržanih preglednika možete pronaći na Wiki stranici.
error-javascript-conflict =
    Ruffle je naišao na ozbiljan problem prilikom pokušaja inicijalizacije.
    Izgleda da ova stranica koristi JavaScript kod koji je u sukobu sa Ruffleom.
    Ako ste administrator servera, pozivamo vas da pokušate otpremiti datoteku na praznu stranicu.
error-javascript-conflict-outdated = Također možete pokušati prenijeti noviju verziju Rufflea koja bi mogla riješiti problem (trenutna verzija je zastarjela: { $buildDate }).
error-csp-conflict =
    Ruffle je naišao na ozbiljan problem prilikom pokušaja inicijalizacije.
    Politike sigurnosti sadržaja ovog web servera ne dozvoljavaju pokretanje potrebne komponente ".wasm".
    Ako ste administrator servera, obratite se Ruffle wiki stranici za pomoć.
error-unknown =
    Ruffle je naišao na ozbiljan problem prilikom pokušaja prikazivanja ovog Flash sadržaja.
    { $outdated ->
    [true] Ako ste administrator servera, pokušajte prenijeti noviju verziju Rufflea (trenutna verzija je zastarjela: { $buildDate }).
    *[false] Ovo se ne bi trebalo dogoditi, pa bismo vam bili jako zahvalni ako biste prijavili grešku!
    }
`,"save-manager.ftl":`save-delete-prompt = Jeste li sigurni da želite izbrisati ovu sačuvanu datoteku?
save-reload-prompt =
    Jedini način da { $action ->
    [delete] izbrišete
    *[replace] zamijenite
    } ovu sačuvanu datoteku bez potencijalnog konflikta je da ponovo učitate ovaj sadržaj. Želite li ipak nastaviti?
save-download = Preuzmite
save-replace = Zamijeni
save-delete = Izbriši
save-backup-all = Preuzmi sve sačuvane datoteke
`,"volume-controls.ftl":`volume-controls-mute = Isključi zvuk
volume-controls-unmute = Uključi zvuk
`},"ca-ES":{"context_menu.ftl":`context-menu-download-swf = Baixa el fitxer SWF
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
enable-hardware-acceleration-link = FAQ - Acceleració per Hardware a Chrome
view-error-details = Mostra detalls de l'error
open-in-new-tab = Obre en una pestanya nova
click-to-unmute = Feu clic per activar el so
clipboard-message-title = Copiar i enganxar en Ruffle
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
`},"cs-CZ":{"context_menu.ftl":`context-menu-download-swf = Stáhnout SWF
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
`},"de-DE":{"context_menu.ftl":`context-menu-download-swf = SWF herunterladen
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
    Ruffle konnte das in diese Seite eingebettete Flash-Element nicht ausführen.
    Sie können versuchen, die Datei in einem separaten Tab zu öffnen, um dieses Problem zu umgehen.
message-restored-from-bfcache =
    Ihr Browser hat diesen Flash-Inhalt aus einer vorherigen Sitzung wiederhergestellt.
    Laden Sie die Seite neu, um neu zu starten.
panic-title = Etwas ist schiefgelaufen :(
more-info = Weitere Informationen
run-anyway = Trotzdem ausführen
continue = Fortfahren
report-bug = Fehler melden
update-ruffle = Ruffle aktualisieren
ruffle-demo = Web-Demo
ruffle-desktop = Desktop-Anwendung
ruffle-wiki = Ruffle-Wiki anzeigen
enable-hardware-acceleration = Es sieht so aus, als sei die Hardwarebeschleunigung deaktiviert. Ruffle funktioniert zwar möglicherweise, könnte aber sehr langsam sein. Unter dem folgenden Link erfahren Sie, wie Sie die Hardwarebeschleunigung aktivieren können:
enable-hardware-acceleration-link = FAQ - Chrome Hardwarebeschleunigung
view-error-details = Fehlerdetails anzeigen
open-in-new-tab = In einem neuen Tab öffnen
click-to-unmute = Zum Aktivieren des Tons klicken
clipboard-message-title = Kopieren und Einfügen in Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Ihr Browser unterstützt keinen vollständigen Zugriff auf die Zwischenablage,
        [access-denied] Der Zugriff auf die Zwischenablage wurde verweigert,
    } Sie können jedoch stattdessen jederzeit diese Tastenkombinationen verwenden:
clipboard-message-copy = { " " } zum Kopieren
clipboard-message-cut = { " " } zum Ausschneiden
clipboard-message-paste = { " " } zum Einfügen
error-canvas-reload = Das Neuladen mit dem Canvas-Renderer ist nicht möglich, wenn dieser bereits verwendet wird.
error-file-protocol =
    Es scheint, als würden Sie Ruffle über das "file:"-Protokoll ausführen.
    Dies funktioniert nicht, da Browser aus Sicherheitsgründen viele Funktionen blockieren.
    Wir empfehlen Ihnen stattdessen, einen lokalen Server einzurichten oder entweder die Web-Demo oder die Desktop-Anwendung zu nutzen.
error-javascript-config =
    Bei Ruffle ist aufgrund einer fehlerhaften JavaScript-Konfiguration ein schwerwiegendes Problem aufgetreten.
    Wenn Sie der Serveradministrator sind, bitten wir Sie, die Fehlerdetails zu überprüfen, um festzustellen, welcher Parameter die Ursache ist.
    Sie können auch im Ruffle-Wiki nach Hilfe suchen.
error-wasm-not-found =
    Ruffle konnte die erforderliche ".wasm"-Datei-Komponente nicht laden.
    Wenn Sie der Server-Administrator sind, stellen Sie bitte sicher, dass die Datei korrekt hochgeladen wurde.
    Wenn das Problem weiterhin besteht, müssen Sie unter Umständen die "publicPath"-Einstellung verwenden: Bitte konsultieren Sie das Ruffle-Wiki für Hilfe.
error-wasm-mime-type =
    Bei der Initialisierung von Ruffle ist ein schwerwiegendes Problem aufgetreten.
    Dieser Webserver stellt ".wasm"-Dateien nicht mit dem richtigen MIME-Typ bereit.
    Wenn Sie der Serveradministrator sind, finden Sie Hilfe im Ruffle-Wiki.
error-invalid-swf =
    Ruffle kann die angeforderte Datei nicht verarbeiten.
    Der wahrscheinlichste Grund dafür ist, dass die angeforderte Datei keine gültige SWF-Datei ist.
error-swf-fetch =
    Ruffle konnte die Flash-SWF-Datei nicht laden.
    Der wahrscheinlichste Grund ist, dass die Datei nicht mehr vorhanden ist und Ruffle daher nichts laden kann.
    Wenden Sie sich bitte an den Administrator der Website, um Hilfe zu erhalten.
error-swf-cors =
    Ruffle konnte die Flash-SWF-Datei nicht laden.
    Der Zugriff auf die Datei wurde wahrscheinlich durch die CORS-Richtlinie blockiert.
    Wenn Sie der Serveradministrator sind, finden Sie Hilfe im Ruffle-Wiki.
error-wasm-cors =
    Ruffle konnte die Flash-SWF-Datei nicht laden.
    Der Zugriff auf den Abruf wurde wahrscheinlich durch die CORS-Richtlinie blockiert.
    Wenn Sie der Serveradministrator sind, finden Sie Hilfe im Ruffle-Wiki.
error-wasm-invalid =
    Bei der Initialisierung von Ruffle ist ein schwerwiegendes Problem aufgetreten.
    Es scheint, als fehlten auf dieser Seite Dateien, die für die Ausführung von Ruffle erforderlich sind, oder als seien diese ungültig.
    Wenn Sie der Serveradministrator sind, finden Sie Hilfe im Ruffle-Wiki.
error-wasm-download =
    Bei der Initialisierung von Ruffle ist ein schwerwiegendes Problem aufgetreten.
    Oftmals behebt sich dieses Problem von selbst, sodass Sie versuchen können, die Seite neu zu laden.
    Andernfalls wenden Sie sich an den Website-Administrator.
error-wasm-disabled-on-edge =
    Ruffle konnte die erforderliche ".wasm"-Datei nicht laden.
    Um das Problem zu beheben, öffnen Sie die Einstellungen Ihres Browsers, klicken Sie auf "Datenschutz, Suche und Dienste", scrollen Sie nach unten und deaktivieren Sie die Option "Sicherheit im Internet verbessern".
    Dadurch kann Ihr Browser die erforderlichen ".wasm"-Dateien laden.
    Sollte das Problem weiterhin bestehen, müssen Sie möglicherweise einen anderen Browser verwenden.
error-wasm-unsupported-browser =
    Der von Ihnen verwendete Browser unterstützt die WebAssembly-Erweiterungen nicht, die Ruffle zum Ausführen benötigt.
    Bitte wechseln Sie zu einem unterstützten Browser.
    Eine Liste der unterstützten Browser finden Sie im Wiki.
error-javascript-conflict =
    Bei der Initialisierung von Ruffle ist ein schwerwiegendes Problem aufgetreten.
    Es scheint, als würde diese Seite JavaScript-Code verwenden, der mit Ruffle in Konflikt steht.
    Falls Sie der Serveradministrator sind, bitten wir Sie, die Datei auf einer leeren Seite zu laden.
error-javascript-conflict-outdated = Sie können auch versuchen, eine neuere Version von Ruffle hochzuladen, die das Problem möglicherweise behebt (der aktuelle Build ist veraltet: { $buildDate }).
error-csp-conflict =
    Bei der Initialisierung von Ruffle ist ein schwerwiegendes Problem aufgetreten.
    Die Content Security Policy dieses Webservers lässt die Ausführung der erforderlichen ".wasm"-Komponente nicht zu.
    Wenn Sie der Serveradministrator sind, finden Sie Hilfe im Ruffle-Wiki.
error-unknown =
    Bei der Anzeige dieses Flash-Inhalts ist bei Ruffle ein schwerwiegendes Problem aufgetreten.
    { $outdated ->
        [true] Wenn Sie der Serveradministrator sind, versuchen Sie bitte, eine aktuellere Version von Ruffle hochzuladen (der aktuelle Build ist veraltet: { $buildDate }).
       *[false] Das sollte eigentlich nicht passieren, daher wären wir Ihnen sehr dankbar, wenn Sie den Fehler melden könnten!
    }
`,"save-manager.ftl":`save-delete-prompt = Sind Sie sicher, dass Sie diese Speicherdatei löschen möchten?
save-reload-prompt =
    Diese Speicherdatei kann nur ohne Konflikte { $action ->
        [delete] gelöscht
       *[replace] ersetzt
    } werden, wenn der Inhalt neu geladen wird. Trotzdem fortfahren?
save-download = Herunterladen
save-replace = Ersetzen
save-delete = Löschen
save-backup-all = Alle Speicherdateien herunterladen
`,"volume-controls.ftl":`volume-controls-mute = Stummschalten
volume-controls-unmute = Stummschaltung aufheben
`},"en-US":{"context_menu.ftl":`context-menu-download-swf = Download SWF
context-menu-copy-debug-info = Copy Debug Info
context-menu-open-save-manager = Open Save Manager
context-menu-about-ruffle =
    { $flavor ->
        [extension] About Ruffle Extension ({$version})
        *[other] About Ruffle ({$version})
    }
context-menu-hide = Hide This Menu
context-menu-exit-fullscreen = Exit Full Screen
context-menu-enter-fullscreen = Enter Full Screen
context-menu-volume-controls = Volume Controls
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
`},"eo-UY":{"context_menu.ftl":``,"messages.ftl":``,"save-manager.ftl":``,"volume-controls.ftl":``},"es-ES":{"context_menu.ftl":`context-menu-download-swf = Descargar SWF
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
message-restored-from-bfcache =
    Su navegador ha recuperado este contenido Flash de una sesión anterior.
    Para empezar de cero, refresque la página.
panic-title = Algo salió mal :(
more-info = Más info
run-anyway = Ejecutar de todos modos
continue = Continuar
report-bug = Reportar un error
update-ruffle = Actualizar Ruffle
ruffle-demo = Demostración de web
ruffle-desktop = Aplicación de escritorio
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
`},"fi-FI":{"context_menu.ftl":`context-menu-download-swf = Lataa SWF
context-menu-copy-debug-info = Kopioi vianjäljitystiedot
context-menu-about-ruffle =
    { $flavor ->
        [extension] Tietoja – Ruffle-laajennus ({ $version })
       *[other] Tietoja – Ruffle ({ $version })
    }
context-menu-hide = Piilota tämä valikko
context-menu-exit-fullscreen = Poistu koko näytön tilasta
context-menu-enter-fullscreen = Siirry koko näytön tilaan
context-menu-volume-controls = Äänenvoimakkuuden säätö
`,"messages.ftl":`message-restored-from-bfcache =
    Selaimesi palautti tämän Flash-sisällön aiemmasta istunnosta.
    Aloita alusta lataamalla sivu uudelleen.
panic-title = Jokin meni pieleen :(
more-info = Lisätietoja
run-anyway = Suorita silti
continue = Jatka
report-bug = Ilmoita ongelmasta
update-ruffle = Päivitä Ruffle
ruffle-desktop = Työpöytäsovellus
ruffle-wiki = Näytä Rufflen wiki
enable-hardware-acceleration = Vaikuttaa siltä, että laitteistokiihdytys on pois käytöstä. Ruffle saattaa silti toimia, mutta hitaasti. Lisätietoja laitteistokiihdytyksen ottamisesta käyttöön on saatavilla alla olevan linkin kautta:
enable-hardware-acceleration-link = UKK - Chromen laitteistokiihdytys
view-error-details = Näytä virheen tiedot
open-in-new-tab = Avaa uudessa välilehdessä
click-to-unmute = Napsauta palauttaaksesi äänet
clipboard-message-title = Kopiointi ja liittäminen Rufflessa
clipboard-message-copy = { " " } kopioi
clipboard-message-cut = { " " } leikkaa
clipboard-message-paste = { " " } liittää
error-wasm-unsupported-browser =
    Käyttämäsi selain ei tue Rufflen vaatimia WebAssembly-laajennuksia.
    Vaihda tuettuun selaimeen.
    Lista tuetuista selaimista on koottu wikiin.
`,"save-manager.ftl":`save-delete-prompt = Haluatko varmasti poistaa tämän tallennuksen?
save-reload-prompt =
    Ainoa tapa { $action ->
        [delete] poistaa
       *[replace] korvata
    } tämä tiedosto ilman mahdollista ristiriitaa on ladata sisältö uudelleen. Haluatko jatkaa silti?
save-download = Lataa
save-replace = Korvaa
save-delete = Poista
`,"volume-controls.ftl":`volume-controls-mute = Mykistä
volume-controls-unmute = Poista mykistys
`},"fr-FR":{"context_menu.ftl":`context-menu-download-swf = Télécharger en tant que SWF
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
`},"gl-ES":{"context_menu.ftl":``,"messages.ftl":``,"save-manager.ftl":``,"volume-controls.ftl":``},"he-IL":{"context_menu.ftl":`context-menu-download-swf = הורדת קובץ הSWF
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
ruffle-wiki = ראה את ויקי של Ruffle
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
`},"hr-HR":{"context_menu.ftl":`context-menu-download-swf = Preuzmi SWF datoteku
context-menu-copy-debug-info = Kopiraj informacije o otklanjanju pogrešaka
context-menu-open-save-manager = Otvori Upravitelj spremanja
context-menu-about-ruffle =
    { $flavor ->
    [extension] O proširenju Ruffle ({ $version })
    *[other] O Ruffle ({ $version })
    }
context-menu-hide = Sakrij ovaj izbornik
context-menu-exit-fullscreen = Izađi iz cijelog zaslona
context-menu-enter-fullscreen = Uđi u cijeli zaslon
context-menu-volume-controls = Kontrole glasnoće
`,"messages.ftl":`message-cant-embed =
    Ruffle nije uspio pokrenuti Flash ugrađen na ovoj stranici.
    Možete pokušati otvoriti datoteku u zasebnoj kartici kako biste izbjegli ovaj problem.
message-restored-from-bfcache =
    Vaš je preglednik vratio ovaj Flash sadržaj iz prethodne sesije.
    Za novi početak ponovno učitajte stranicu.
panic-title = Nešto je pošlo po zlu :(
more-info = Dodatne informacije
run-anyway = Svejedno pokreni
continue = Nastavi
report-bug = Prijavi grešku
update-ruffle = Ažurirajte Ruffle
ruffle-demo = Web demo
ruffle-desktop = Aplikacija za stolna računala
ruffle-wiki = Pogledajte Ruffle Wiki
enable-hardware-acceleration = Izgleda da je hardversko ubrzanje onemogućeno. Iako Ruffle možda radi, mogao bi biti vrlo spor. Kako omogućiti hardversko ubrzanje možete saznati slijedeći donju poveznicu:
enable-hardware-acceleration-link = Često postavljana pitanja - Ubrzanje hardvera u Chromeu
view-error-details = Prikaži detalje o pogrešci
open-in-new-tab = Otvori u novoj kartici
click-to-unmute = Kliknite za uključivanje zvuka
clipboard-message-title = Kopiranje i lijepljenje u Ruffleu
clipboard-message-description =
    { $variant ->
       *[unsupported] Vaš preglednik ne podržava puni pristup međuspremniku,
        [access-denied] Pristup međuspremniku je uskraćen,
    } ali uvijek možete umjesto toga koristiti ove prečace:
clipboard-message-copy = { " " } za kopiranje
clipboard-message-cut = { " " } za izrezivanje
clipboard-message-paste = { " " } za lijepljenje
error-canvas-reload = Nije moguće ponovno učitavanje s rendererom platna kada je renderer platna već u upotrebi.
error-file-protocol =
    Čini se da koristite Ruffle na protokolu "file:".
    Ovo ne radi jer preglednici blokiraju mnoge značajke iz sigurnosnih razloga.
    Umjesto toga, pozivamo vas da postavite lokalni poslužitelj ili koristite web demo ili desktop aplikaciju.
error-javascript-config =
    Ruffle je naišao na veliki problem zbog netočne konfiguracije JavaScripta.
    Ako ste administrator poslužitelja, pozivamo vas da provjerite detalje pogreške kako biste saznali koji je parametar uzrok problema. Također možete konzultirati Ruffle wiki za pomoć.
error-wasm-not-found =
    Ruffle nije uspio učitati potrebnu komponentu datoteke ".wasm".
    Ako ste administrator poslužitelja, provjerite je li datoteka ispravno prenesena.
    Ako se problem nastavi, možda ćete morati upotrijebiti postavku "publicPath": za pomoć se obratite Ruffle wikiju.
error-wasm-mime-type =
    Ruffle je naišao na ozbiljan problem prilikom pokušaja inicijalizacije.
    Ovaj web poslužitelj ne poslužuje ".wasm" datoteke s ispravnom MIME vrstom.
    Ako ste administrator poslužitelja, obratite se Ruffle wiki stranici za pomoć.
error-invalid-swf =
    Ruffle ne može analizirati traženu datoteku.
    Najvjerojatniji razlog je taj što tražena datoteka nije valjani SWF.
error-swf-fetch =
    Ruffle nije uspio učitati Flash SWF datoteku.
    Najvjerojatniji razlog je taj što datoteka više ne postoji, pa Ruffle nema što učitati.
    Pokušajte se obratiti administratoru web-mjesta za pomoć.
error-swf-cors =
    Ruffle nije uspio učitati Flash SWF datoteku.
    Pristup dohvaćanju vjerojatno je blokiran pravilom CORS.
    Ako ste administrator poslužitelja, za pomoć se obratite Ruffle wikiju.
error-wasm-cors =
    Ruffle nije uspio učitati potrebnu komponentu datoteke ".wasm".
    Pristup dohvaćanju vjerojatno je blokiran CORS pravilom.
    Ako ste administrator poslužitelja, za pomoć se obratite Ruffle wikiju.
error-wasm-invalid =
    Ruffle je naišao na ozbiljan problem prilikom pokušaja inicijalizacije.
    Čini se da ovoj stranici nedostaju ili su datoteke nevažeće za pokretanje Rufflea.
    Ako ste administrator poslužitelja, za pomoć se obratite Ruffle wikiju.
error-wasm-download =
    Ruffle je naišao na ozbiljan problem prilikom pokušaja inicijalizacije.
    To se često može samo riješiti, pa možete pokušati ponovno učitati stranicu.
    U suprotnom, obratite se administratoru web-mjesta.
error-wasm-disabled-on-edge =
    Ruffle nije uspio učitati potrebnu komponentu datoteke ".wasm".
    Da biste to riješili, pokušajte otvoriti postavke preglednika, kliknuti "Privatnost, pretraživanje i usluge", pomaknuti se prema dolje i isključiti "Poboljšajte sigurnost na webu".
    To će omogućiti vašem pregledniku da učita potrebne datoteke ".wasm".
    Ako se problem nastavi, možda ćete morati koristiti drugi preglednik.
error-wasm-unsupported-browser =
    Preglednik koji koristite ne podržava WebAssembly ekstenzije koje su potrebne za rad Rufflea.
    Molimo prebacite se na podržani preglednik.
    Popis podržanih preglednika možete pronaći na Wiki stranici.
error-javascript-conflict =
    Ruffle je naišao na ozbiljan problem prilikom pokušaja inicijalizacije.
    Čini se da ova stranica koristi JavaScript kod koji je u sukobu s Ruffleom.
    Ako ste administrator poslužitelja, pozivamo vas da pokušate učitati datoteku na praznoj stranici.
error-javascript-conflict-outdated = Također možete pokušati prenijeti noviju verziju Rufflea koja bi mogla zaobići problem (trenutna verzija je zastarjela: { $buildDate }).
error-csp-conflict =
    Ruffle je naišao na ozbiljan problem prilikom pokušaja inicijalizacije.
    Pravila sigurnosti sadržaja ovog web poslužitelja ne dopuštaju pokretanje potrebne komponente ".wasm".
    Ako ste administrator poslužitelja, za pomoć se obratite Ruffle wikiju.
error-unknown =
    Ruffle je naišao na ozbiljan problem prilikom pokušaja prikaza ovog Flash sadržaja.
    { $outdated ->
    [true] Ako ste administrator poslužitelja, pokušajte prenijeti noviju verziju Rufflea (trenutna verzija je zastarjela: { $buildDate }).
    *[false] Ovo se ne bi trebalo događati, pa bismo vam bili jako zahvalni ako biste prijavili grešku!
    }
`,"save-manager.ftl":`save-delete-prompt = Jeste li sigurni da želite izbrisati ovu spremljenu datoteku?
save-reload-prompt =
    Jedini način da { $action ->
    [delete] izbrišete
    *[replace] zamijenite
    } ovu datoteku za spremanje bez potencijalnog sukoba jest ponovno učitavanje ovog sadržaja. Želite li ipak nastaviti?
save-download = Preuzmite
save-replace = Zamijeni
save-delete = Izbriši
save-backup-all = Preuzmi sve spremljene datoteke
`,"volume-controls.ftl":`volume-controls-mute = Isključi zvuk
volume-controls-unmute = Uključi zvuk
`},"hu-HU":{"context_menu.ftl":`context-menu-download-swf = SWF fájl letöltése
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
message-restored-from-bfcache =
    A böngésző ezt a Flash tartalmat egy korábbi munkamenetből állította vissza.
    A tiszta induláshoz frissítse az oldalt.
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
`},"id-ID":{"context_menu.ftl":`context-menu-download-swf = Unduh SWF
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
`},"it-IT":{"context_menu.ftl":`context-menu-download-swf = Scarica SWF
context-menu-copy-debug-info = Copia informazioni di debug
context-menu-open-save-manager = Apri gestione salvataggi
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
message-restored-from-bfcache =
    Il tuo browser ha ripristinato il contenuto del Flash da una sessione precedente.
    Per iniziare da capo, ricarica la pagina.
panic-title = Qualcosa è andato storto :(
more-info = Maggiori informazioni
run-anyway = Esegui comunque
continue = Continua
report-bug = Segnala un bug
update-ruffle = Aggiorna Ruffle
ruffle-demo = Demo web
ruffle-desktop = Applicazione desktop
ruffle-wiki = Visualizza la wiki di Ruffle
enable-hardware-acceleration = Sembra che l'accelerazione hardware sia disabilitata. Sebbene Ruffle possa funzionare, potrebbe essere molto lento. Puoi scoprire come abilitare l'accelerazione hardware seguendo il link seguente:
enable-hardware-acceleration-link = FAQ - Accelerazione hardware di Chrome
view-error-details = Visualizza dettagli errore
open-in-new-tab = Apri in una nuova scheda
click-to-unmute = Clicca per riattivare l'audio
clipboard-message-title = Copiando e incollando su Ruffle
clipboard-message-description =
    { $variant ->
      *[unsupported] Il tuo browser non ha supporto per accesso completo degli appunti,
       [access-denied] Accesso agli appunti e stato negato,
    } ma puoi sempre usare le scorciatoie al loro posto:
clipboard-message-copy = { " " } per copiare
clipboard-message-cut = { " " } per tagliare
clipboard-message-paste = { " " } per incollare
error-canvas-reload = Impossibile ricaricare con il canvas renderer quando è in uso.
error-file-protocol =
    Sembra che tu stia eseguendo Ruffle sul protocollo "file:".
    Questo non funziona come browser blocca molte funzionalità di lavoro per motivi di sicurezza.
    Invece, ti invitiamo a configurare un server locale o a utilizzare la demo web o l'applicazione desktop.
error-javascript-config =
    Ruffle ha incontrato un problema importante a causa di una configurazione JavaScript non corretta.
    Se sei l'amministratore del server, ti invitiamo a controllare i dettagli dell'errore per scoprire quale parametro è in errore.
    Puoi anche consultare la wiki di Ruffle per aiuto.
error-wasm-not-found =
    Ruffle non è riuscito a caricare il componente di file ".wasm".
    Se sei l'amministratore del server, assicurati che il file sia stato caricato correttamente.
    Se il problema persiste, potrebbe essere necessario utilizzare l'impostazione "publicPath": si prega di consultare la wiki di Ruffle per aiuto.
error-wasm-mime-type =
    Ruffle ha incontrato un problema importante durante il tentativo di inizializzazione.
    Questo server web non serve ".wasm" file con il tipo MIME corretto.
    Se sei l'amministratore del server, consulta la wiki di Ruffle per aiuto.
error-invalid-swf =
    Ruffle non può leggere il file richiesto.
    La ragione più probabile è che il file non è un SWF valido.
error-swf-fetch =
    Ruffle non è riuscito a caricare il file Flash SWF.
    La ragione più probabile è che il file non esiste più, quindi non c'è nulla che Ruffle possa caricare.
    Prova a contattare l'amministratore del sito web per aiuto.
error-swf-cors =
    Ruffle non è riuscito a caricare il file SWF Flash.
    L'accesso al recupero probabilmente è stato bloccato dalla politica CORS.
    Se sei l'amministratore del server, consulta la wiki di Ruffle per ricevere aiuto.
error-wasm-cors =
    Ruffle non è riuscito a caricare il componente di file ".wasm".
    L'accesso al recupero probabilmente è stato bloccato dalla politica CORS.
    Se sei l'amministratore del server, consulta la wiki di Ruffle per ricevere aiuto.
error-wasm-invalid =
    Ruffle ha incontrato un problema importante durante il tentativo di inizializzazione.
    Sembra che questa pagina abbia file mancanti o non validi per l'esecuzione di Ruffle.
    Se sei l'amministratore del server, consulta la wiki di Ruffle per ricevere aiuto.
error-wasm-download =
    Ruffle ha incontrato un problema importante durante il tentativo di inizializzazione.
    Questo può spesso risolversi da solo, quindi puoi provare a ricaricare la pagina.
    Altrimenti, contatta l'amministratore del sito.
error-wasm-disabled-on-edge =
    Ruffle non ha caricato il componente di file ".wasm" richiesto.
    Per risolvere il problema, prova ad aprire le impostazioni del tuo browser, facendo clic su "Privacy, ricerca e servizi", scorrendo verso il basso e disattivando "Migliora la tua sicurezza sul web".
    Questo permetterà al tuo browser di caricare i file ".wasm" richiesti.
    Se il problema persiste, potresti dover usare un browser diverso.
error-wasm-unsupported-browser =
    Il browser che stai usando non ha supporto per l'estensione WebAssembly che Ruffle richiede per funzionare.
    Per favore cambi con un browser supportato.
    Puoi trovare una lista di browser supportati nella Wiki.
error-javascript-conflict =
    Ruffle ha riscontrato un problema importante durante il tentativo di inizializzazione.
    Sembra che questa pagina utilizzi il codice JavaScript che è in conflitto con Ruffle.
    Se sei l'amministratore del server, ti invitiamo a provare a caricare il file su una pagina vuota.
error-javascript-conflict-outdated = Puoi anche provare a caricare una versione più recente di Ruffle che potrebbe aggirare il problema (l'attuale build è obsoleta: { $buildDate }).
error-csp-conflict =
    Ruffle ha incontrato un problema importante durante il tentativo di inizializzare.
    La Politica di Sicurezza dei Contenuti di questo server web non consente l'impostazione richiesta". asm" componente da eseguire.
    Se sei l'amministratore del server, consulta la Ruffle di wiki per aiuto.
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
volume-controls-unmute = Riattiva l'audio
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
context-menu-volume-controls = 音量調節
`,"messages.ftl":`message-cant-embed =
    Ruffleはこのページに埋め込まれた Flash を実行できませんでした。
    別のタブでファイルを開くことで、この問題を解決できるかもしれません。
message-restored-from-bfcache =
    ブラウザは、前回のセッションからFlashコンテンツを復元しました。
    最初から開始するには、ページを再読み込みしてください。
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
`},"ko-KR":{"context_menu.ftl":`context-menu-download-swf = SWF 다운로드
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
`},"nb-NO":{"context_menu.ftl":`context-menu-download-swf = Last ned SWF
context-menu-copy-debug-info = Kopier feilsøkningsinfo
context-menu-open-save-manager = Åpne lagringsadministrasjon
context-menu-about-ruffle =
    { $flavor ->
        [extension] Om Ruffle-tillegget ({ $version })
       *[other] Om Ruffle ({ $version })
    }
context-menu-hide = Skjul denne menyen
context-menu-exit-fullscreen = Avslutt fullskjermmodus
context-menu-enter-fullscreen = Fullskjermmodus
context-menu-volume-controls = Justering av lydnivå
`,"messages.ftl":``,"save-manager.ftl":`save-delete-prompt = Er du sikker på at du vil slette filen?
save-download = Last ned
save-replace = Erstatt
save-delete = Slett
`,"volume-controls.ftl":`volume-controls-mute = Demp
volume-controls-unmute = Skru på lyd
`},"nl-NL":{"context_menu.ftl":`context-menu-download-swf = SWF downloaden
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
context-menu-volume-controls = Volumeregelaars
`,"messages.ftl":`message-cant-embed =
    Ruffle kon de Flash-inhoud op de pagina niet draaien.
    Je kan proberen het bestand in een apart tabblad te openen, om hier omheen te werken.
message-restored-from-bfcache =
    Je browser heeft deze Flash-inhoud uit een eerdere sessie hersteld.
    Herlaad de pagina voor een frisse start.
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
error-canvas-reload = De canvas renderer kan niet herladen worden wanneer deze al in gebruik is.
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
error-wasm-unsupported-browser =
    De browser die je gebruikt ondersteunt de WebAssembly extensies die Ruffle nodig heeft niet.
    Gebruik alsjeblieft een ondersteunde browser.
    Je kunt een lijst aan ondersteunde browsers vinden op de Wiki.
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
`},"pl-PL":{"context_menu.ftl":`context-menu-download-swf = Pobierz SWF
context-menu-copy-debug-info = Kopiuj informacje debugowania
context-menu-open-save-manager = Otwórz menadżer zapisów
context-menu-about-ruffle =
    { $flavor ->
        [extension] O rozszerzeniu Ruffle ({ $version })
       *[other] O Ruffle ({ $version })
    }
context-menu-hide = Ukryj to menu
context-menu-exit-fullscreen = Opuść tryb pełnoekranowy
context-menu-enter-fullscreen = Tryb pełnoekranowy
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
`},"pt-BR":{"context_menu.ftl":`context-menu-download-swf = Baixar SWF
context-menu-copy-debug-info = Copiar informação de depuração
context-menu-open-save-manager = Abrir o gerenciador de salvamento
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
message-restored-from-bfcache =
    Seu navegador restaurou este conteúdo Flash de uma sessão anterior.
    Para começar do zero, recarregue a página.
panic-title = Algo deu errado :(
more-info = Mais informação
run-anyway = Executar mesmo assim
continue = Continuar
report-bug = Reportar bug
update-ruffle = Atualizar Ruffle
ruffle-demo = Demo Web
ruffle-desktop = Aplicativo de desktop
ruffle-wiki = Ver guia oficial do Ruffle
enable-hardware-acceleration = Parece que a aceleração de hardware está desabilitada. Embora o Ruffle possa funcionar, ele pode ser muito lento. Você pode descobrir como habilitar a aceleração de hardware seguindo o link abaixo:
enable-hardware-acceleration-link = FAQ — Aceleração de hardware no Chrome
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
error-canvas-reload = Não é possível recarregar com o renderizador canvas enquanto ele já está em uso.
error-file-protocol =
    Parece que você está executando o Ruffle no protocolo "file:".
    Isto não funciona como navegadores bloqueiam muitos recursos de funcionar por razões de segurança.
    Ao invés disso, convidamos você a configurar um servidor local ou a usar a demonstração da web, ou o aplicativo de desktop.
error-javascript-config =
    O Ruffle encontrou um grande problema devido a uma configuração incorreta do JavaScript.
    Se você for o administrador do servidor, convidamos você a verificar os detalhes do erro para descobrir qual parâmetro está com falha.
    Você também pode consultar o guia oficial do Ruffle para obter ajuda.
error-wasm-not-found =
    Ruffle falhou ao carregar o componente de arquivo ".wasm" necessário.
    Se você é o administrador do servidor, por favor, certifique-se de que o arquivo foi carregado corretamente.
    Se o problema persistir, você pode precisar usar a configuração "publicPath": por favor consulte o guia oficial do Ruffle para obter ajuda.
error-wasm-mime-type =
    Ruffle encontrou um grande problema ao tentar inicializar.
    Este servidor de web não está servindo ".wasm" arquivos com o tipo MIME correto.
    Se você é o administrador do servidor, por favor consulte o guia oficial do Ruffle para obter ajuda.
error-invalid-swf =
    Ruffle não pode analisar o arquivo solicitado.
    O motivo provável é que o arquivo solicitado não seja um SWF válido.
error-swf-fetch =
    Ruffle falhou ao carregar o arquivo Flash SWF.
    A razão provável é que o arquivo não existe mais, então não há nada para o Ruffle carregar.
    Tente contatar o administrador do site para obter ajuda.
error-swf-cors =
    O Ruffle não conseguiu carregar o arquivo SWF do Flash.
    O acesso à requisição provavelmente foi bloqueado pela política de CORS.
    Se você for o administrador do servidor, consulte o guia oficial do Ruffle para obter ajuda.
error-wasm-cors =
    O Ruffle não conseguiu carregar o componente obrigatório do arquivo “.wasm”.
    O acesso à busca provavelmente foi bloqueado pela política de CORS.
    Se você é o administrador do servidor, consulte o guia oficial do Ruffle para obter ajuda.
error-wasm-invalid =
    O Ruffle encontrou um erro grave ao tentar iniciar.
    Parece que esta página possui arquivos ausentes ou inválidos para executar o Ruffle.
    Se você é o administrador do servidor, consulte o guia oficial do Ruffle para obter assistência.
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
    O navegador que você está usando não oferece suporte às extensões WebAssembly necessárias para o Ruffle funcionar.
    Por favor, mude para um navegador compatível.
    Você pode encontrar uma lista de navegadores compatíveis no guia oficial.
error-javascript-conflict =
    Ruffle encontrou um grande problema ao tentar inicializar.
    Parece que esta página usa código JavaScript que entra em conflito com o Ruffle.
    Se você for o administrador do servidor, convidamos você a tentar carregar o arquivo em uma página em branco.
error-javascript-conflict-outdated = Você também pode tentar fazer o upload de uma versão mais recente do Ruffle que pode contornar o problema (a compilação atual está desatualizada: { $buildDate }).
error-csp-conflict =
    O Ruffle encontrou um problema grave ao tentar iniciar.
    A Política de Segurança de Conteúdo deste servidor não permite a execução do componente “.wasm” necessário.
    Se você for o administrador do servidor, consulte o guia oficial do Ruffle para obter ajuda.
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
context-menu-open-save-manager = Abrir gestor de gravações
context-menu-about-ruffle =
    { $flavor ->
        [extension] Sobre a extensão do Ruffle ({ $version })
       *[other] Sobre o Ruffle ({ $version })
    }
context-menu-hide = Esconder este menu
context-menu-exit-fullscreen = Fechar ecrã inteiro
context-menu-enter-fullscreen = Abrir ecrã inteiro
context-menu-volume-controls = Controlos de volume
`,"messages.ftl":`message-cant-embed =
    O Ruffle não conseguiu abrir o Flash integrado nesta página.
    Para tentar resolver o problema, pode abrir o ficheiro num novo separador.
message-restored-from-bfcache =
    O seu navegador restaurou este conteúdo Flash de uma sessão anterior.
    Para começar do zero, recarregue a página.
panic-title = Algo correu mal :(
more-info = Mais informações
run-anyway = Executar mesmo assim
continue = Continuar
report-bug = Reportar falha
update-ruffle = Atualizar o Ruffle
ruffle-demo = Demonstração web
ruffle-desktop = Aplicação para computador
ruffle-wiki = Ver a wiki do Ruffle
enable-hardware-acceleration = Parece que a aceleração de hardware está desativada. Mesmo que o Ruffle funcione, pode estar demasiado lento. Descubra como ativar a aceleração de hardware seguindo este link:
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
error-canvas-reload = Não é possível recarregar com o renderizador canvas quando este já está em uso.
error-file-protocol =
    Parece que executou o Ruffle no protocolo "file:".
    Isto não funciona porque os navegadores bloqueiam muitas funcionalidades por segurança.
    Em vez disto, experimente configurar um servidor local, ou então a usar a demonstração web ou a aplicação para computador.
error-javascript-config =
    O Ruffle encontrou um problema grave devido a uma configuração de JavaScript incorreta.
    Se é o administrador do servidor, experimente verificar os detalhes do erro para identificar o parâmetro em falha.
    Pode ainda consultar a wiki do Ruffle para obter ajuda.
error-wasm-not-found =
    O Ruffle falhou ao carregar o componente de ficheiro ".wasm" necessário.
    Se é o administrador do servidor, certifique-se de que o ficheiro foi devidamente carregado.
    Se o problema persistir, talvez queira usar a configuração "publicPath": consulte a wiki do Ruffle para obter ajuda.
error-wasm-mime-type =
    O Ruffle encontrou um problema grave ao tentar inicializar.
    Este servidor web não está a servir ficheiros “.wasm” com o tipo MIME correto.
    Se é o administrador do servidor, consulte a wiki do Ruffle para obter ajuda.
error-invalid-swf =
    O Ruffle não consegue analisar o ficheiro solicitado.
    O mais provável é que o ficheiro solicitado não seja um SWF válido.
error-swf-fetch =
    O Ruffle falhou ao carregar o ficheiro Flash SWF.
    O mais provável é que o ficheiro já não exista, daí não haver nada para o Ruffle carregar.
    Tente contactar o administrador do site para obter ajuda.
error-swf-cors =
    O Ruffle falhou ao carregar o ficheiro Flash SWF.
    Obter o ficheiro (fetch) foi provavelmente bloqueado pela política CORS.
    Se é o administrador do servidor, consulte a wiki do Ruffle para obter ajuda.
error-wasm-cors =
    O Ruffle falhou ao carregar o componente de ficheiro ".wasm" necessário.
    Obter o ficheiro (fetch) foi provavelmente bloqueado pela política CORS.
    Se é o administrador do servidor, consulte a wiki do Ruffle para obter ajuda.
error-wasm-invalid =
    O Ruffle encontrou um problema grave ao tentar inicializar.
    Parece que esta página tem ficheiros inválidos ou em falta para executar o Ruffle.
    Se é o administrador do servidor, consulte a wiki do Ruffle para obter ajuda.
error-wasm-download =
    O Ruffle encontrou um problema grave ao tentar inicializar.
    Isto costuma resolver-se sozinho, por isso experimente recarregar a página.
    Se não acontecer, contacte o administrador do site.
error-wasm-disabled-on-edge =
    O Ruffle falhou ao carregar o componente de ficheiro ".wasm" necessário.
    Tente corrigir isto nas definições do navegador; clique em "Privacidade, pesquisa e serviços", deslize para baixo e desative "Melhore a sua segurança na Web".
    Isto permitirá ao navegador carregar os ficheiros ".wasm" necessários.
    Se o problema persistir, talvez precise de um navegador diferente.
error-wasm-unsupported-browser =
    O navegador que usa não suporta as extensões WebAssembly de que o Ruffle necessita para executar.
    Deve mudar para um navegador suportado.
    Pode encontrar uma lista de navegadores suportados na Wiki.
error-javascript-conflict =
    O Ruffle encontrou um problema grave ao tentar inicializar.
    Parece que esta página usa código JavaScript que entra em conflito com o Ruffle.
    Se é o administrador do servidor, experimente carregar o ficheiro numa página em branco.
error-javascript-conflict-outdated = Pode ainda tentar carregar uma versão mais recente do Ruffle que talvez contorne o problema (a compilação atual está desatualizada: { $buildDate }).
error-csp-conflict =
    O Ruffle encontrou um problema grave ao tentar inicializar.
    A Política de Segurança de Conteúdos deste servidor web não permite executar o componente ".wasm" necessário.
    Se é o administrador do servidor, consulte a wiki do Ruffle para obter ajuda.
error-unknown =
    O Ruffle encontrou um problema grave ao tentar apresentar este conteúdo Flash.
    { $outdated ->
        [true] Se é o administrador do servidor, tente carregar uma versão mais recente do Ruffle (a versão atual está desatualizada: { $buildDate }).
       *[false] Não era suposto ter acontecido, por isso agradecíamos imenso se reportasse a falha!
    }
`,"save-manager.ftl":`save-delete-prompt = Tem a certeza de que quer eliminar esta gravação?
save-reload-prompt =
    A única forma de { $action ->
        [delete] eliminar
       *[replace] substituir
    } esta gravação sem risco de conflito é recarregando este conteúdo. Deseja continuar na mesma?
save-download = Descarregar
save-replace = Substituir
save-delete = Eliminar
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
message-restored-from-bfcache =
    Browserul dvs. a restaurat acest conținut Flash dintr-o sesiune anterioară.
    Pentru a începe de la zero, reîncărcați pagina.
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
`},"sk-SK":{"context_menu.ftl":`context-menu-download-swf = Stiahnuť SWF
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
`},"sl-SI":{"context_menu.ftl":`context-menu-download-swf = Prenesi SWF
context-menu-copy-debug-info = Kopiraj informacije o odpravljanju napak
context-menu-open-save-manager = Odpri upravitelja shranjevanja
context-menu-about-ruffle =
    { $flavor ->
        [extension] O razširitvi Ruffle ({ $version })
       *[other] O Ruffle ({ $version })
    }
context-menu-hide = Skrij ta meni
context-menu-exit-fullscreen = Izhod iz celozaslonskega načina
context-menu-enter-fullscreen = Vstopi v celozaslonski način
context-menu-volume-controls = Nadzor glasnosti
`,"messages.ftl":`message-cant-embed =
    Ruffle ni mogel zagnati Flash vsebine, vgrajene v to stran.
    Lahko poskusite odpreti datoteko v ločenem zavihku, da se izognete tej težavi.
message-restored-from-bfcache =
    Vaš brskalnik je obnovil to Flash vsebino iz prejšnje seje.
    Da bi začeli na novo, ponovno naložite stran.
panic-title = Nekaj je šlo narobe :(
more-info = Več informacij
run-anyway = Vseeno zaženi
continue = Nadaljuj
report-bug = Prijavi napako
update-ruffle = Posodobite Ruffle
ruffle-demo = Spletni demo
ruffle-desktop = Namizna aplikacija
ruffle-wiki = Oglejte si Ruffle Wiki
enable-hardware-acceleration = Zdi se, da je strojna pospešitev onemogočena. Ruffle bo sicer deloval, vendar bo lahko zelo počasen. Kako omogočiti strojno pospešitev, lahko izveste na spodnji povezavi:
enable-hardware-acceleration-link = Pogosta vprašanja – Pospeševanje strojne opreme v brskalniku Chrome
view-error-details = Poglej podrobnosti napake
open-in-new-tab = Odpri v novem zavihku
click-to-unmute = Kliknite za vklop zvoka
clipboard-message-title = Kopiranje in lepljenje v Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Vaš brskalnik ne podpira polnega dostopa do odložišča,
        [access-denied] Dostop do odložišča je bil zavrnjen,
    } vendar lahko namesto tega vedno uporabite te bližnjice:
clipboard-message-copy = { " " } za kopiranje
clipboard-message-cut = { " " } za izrez
clipboard-message-paste = { " " } za lepljenje
error-canvas-reload = Ne morem ponovno naložiti z upodabljalnikom platna, če je upodabljalnik platna že v uporabi.
error-file-protocol =
    Zdi se, da uporabljate Ruffle na protokolu "file:".
    To ne deluje, ker brskalniki iz varnostnih razlogov blokirajo delovanje mnogih funkcij.
    Namesto tega vam priporočamo, da nastavite lokalni strežnik ali uporabite spletno demo ali namizno aplikacijo.
error-javascript-config =
    Ruffle je naletel na večjo težavo zaradi nepravilne konfiguracije JavaScript.
    Če ste skrbnik strežnika, vas prosimo, da preverite podrobnosti napake in ugotovite, kateri parameter je kriv.
    Za pomoč lahko poiščete tudi wiki Ruffle.
error-wasm-not-found =
    Ruffle ni uspel naložiti potrebne datoteke ".wasm".
    Če ste skrbnik strežnika, preverite, ali je datoteka pravilno naložena.
    Če težava še vedno obstaja, boste morda morali uporabiti nastavitev "publicPath": za pomoč si oglejte wiki Ruffle.
error-wasm-mime-type =
    Ruffle je med poskusom inicializacije naletel na večjo težavo.
    Ta spletni strežnik ne servira datotek ".wasm" s pravilnim tipom MIME.
    Če ste skrbnik strežnika, poiščite pomoč v Ruffle wiki.
error-invalid-swf =
    Ruffle ne more razčleniti zahtevane datoteke.
    Najverjetnejši razlog je, da zahtevana datoteka ni veljavna datoteka SWF.
error-swf-fetch =
    Ruffle ni uspel naložiti datoteke Flash SWF.
    Najverjetnejši razlog je, da datoteka ne obstaja več, zato Ruffle nima kaj naložiti.
    Za pomoč se obrnite na skrbnika spletnega mesta.
error-swf-cors =
    Ruffle ni uspel naložiti datoteke Flash SWF.
    Dostop do prenosa je verjetno blokiran s politiko CORS.
    Če ste skrbnik strežnika, poiščite pomoč v Ruffle wiki.
error-wasm-cors =
    Ruffle ni uspel naložiti potrebne datotečne komponente datoteke ".wasm“.
    Dostop do prenosa je verjetno blokiran s politiko CORS.
    Če ste skrbnik strežnika, poiščite pomoč v Ruffle wiki.
error-wasm-invalid =
    Ruffle je med poskusom inicializacije naletel na večjo težavo.
    Zdi se, da na tej strani manjkajo datoteke ali so datoteke za zagon Ruffle neveljavne.
    Če ste skrbnik strežnika, poiščite pomoč v Ruffle wiki.
error-wasm-download =
    Ruffle je med poskusom inicializacije naletel na večjo težavo.
    Ta se pogosto reši sama, zato lahko poskusite ponovno naložiti stran.
    V nasprotnem primeru se obrnite na skrbnika spletnega mesta.
error-wasm-disabled-on-edge =
    Ruffle ni uspel naložiti potrebne datotečne komponente ".wasm".
    Da bi to popravili, odprite nastavitve brskalnika, kliknite "Zasebnost, iskanje in storitve", pomaknite se navzdol in izklopite "Izboljšajte svojo varnost na spletu".
    Tako bo brskalnik lahko naložil potrebne datoteke ".wasm".
    Če težava še vedno obstaja, boste morda morali uporabiti drug brskalnik.
error-wasm-unsupported-browser =
    Brskalnik, ki ga uporabljate, ne podpira razširitev WebAssembly, ki jih Ruffle potrebuje za delovanje.
    Preklopite na podprt brskalnik.
    Seznam podprtih brskalnikov najdete na Wiki.
error-javascript-conflict =
    Ruffle je med poskusom inicializacije naletel na večjo težavo.
    Zdi se, da ta stran uporablja JavaScript kodo, ki je v nasprotju z Ruffle.
    Če ste skrbnik strežnika, vas prosimo, da poskusite naložiti datoteko na prazno stran.
error-javascript-conflict-outdated = Lahko poskusite naložiti novejšo različico Ruffle, ki bo morda odpravila težavo (trenutna različica je zastarela: { $buildDate }).
error-csp-conflict =
    Ruffle je med poskusom inicializacije naletel na večjo težavo.
    Varnostna politika vsebine tega spletnega strežnika ne dovoljuje izvajanja potrebne komponente ".wasm".
    Če ste skrbnik strežnika, poiščite pomoč v Ruffle wiki.
error-unknown =
    Ruffle je naletel na večjo težavo pri prikazovanju te vsebine Flash.
    { $outdated ->
        [true] Če ste skrbnik strežnika, poskusite naložiti novejšo različico Ruffle (trenutna različica je zastarela: { $buildDate }).
       *[false] To se ne bi smelo zgoditi, zato bi bili zelo hvaležni, če bi prijavili napako!
    }
`,"save-manager.ftl":`save-delete-prompt = Ali ste prepričani, da želite izbrisati to shranjeno datoteko?
save-reload-prompt =
    Edini način, da { $action ->
        [delete] izbrišete
       *[replace] zamenjate
    } to shranjeno datoteko brez morebitnega konflikta, je, da ponovno naložite to vsebino. Želite vseeno nadaljevati?
save-download = Prenesi
save-replace = Zamenjaj
save-delete = Izbriši
save-backup-all = Prenesi vse shranjene datoteke
`,"volume-controls.ftl":`volume-controls-mute = Utišaj
volume-controls-unmute = Vklopi zvok
`},"sr-CS":{"context_menu.ftl":`context-menu-download-swf = Preuzmite .swf datoteku
context-menu-copy-debug-info = Kopirajte informacije za otklanjanje grešaka
context-menu-open-save-manager = Otvori menadžer skladišta
context-menu-about-ruffle =
    { $flavor ->
    [extension] O ekstenziji Ruffle ({ $version })
    *[other] O Ruffle ({ $version })
    }
context-menu-hide = Sakrij ovaj meni
context-menu-exit-fullscreen = Izađi iz režima celog ekrana
context-menu-enter-fullscreen = Pređi na ceo ekran
context-menu-volume-controls = Kontrole jačine zvuka
`,"messages.ftl":`message-cant-embed =
    Ruffle nije mogao da pokrene Fleš ugrađen na ovoj stranici.
    Možete pokušati da otvorite datoteku u posebnoj kartici da biste izbegli ovaj problem.
message-restored-from-bfcache =
    Vaš pregledač je vratio ovaj Fleš sadržaj iz prethodne sesije.
    Molimo vas da ponovo učitate stranicu za novi početak.
panic-title = Nešto je pošlo po zlu :(
more-info = Dodatne informacije
run-anyway = Ipak pokreni
continue = Nastavi
report-bug = Prijavi grešku
update-ruffle = Ažurirajte Ruffle
ruffle-demo = Veb demo
ruffle-desktop = Desktop aplikacija
ruffle-wiki = Pogledajte Ruffle Wiki
enable-hardware-acceleration = Izgleda da je hardversko ubrzanje onemogućeno. Iako Ruffle možda radi, može biti veoma spor. Možete saznati kako da omogućite hardversko ubrzanje prateći donju vezu:
enable-hardware-acceleration-link = Česta pitanja - Hardversko ubrzanje u Chrome-u
view-error-details = Prikaži detalje greške
open-in-new-tab = Otvori u novoj kartici
click-to-unmute = Kliknite da biste uključili zvuk
clipboard-message-title = Kopiranje i nalepljivanje u Ruffle-u
clipboard-message-description =
    { $variant ->
    *[unsupported] Vaš pregledač ne podržava potpun pristup međuspremniku,
    [access-denied] Pristup baferu je zabranjen,
    } ali uvek možete koristiti ove prečice:
clipboard-message-copy = { " " } za kopiju
clipboard-message-cut = { " " } za sečenje
clipboard-message-paste = { " " } za lepljenje
error-canvas-reload = Ne može se ponovo učitati renderer za platno kada je renderer za platno već u upotrebi.
error-file-protocol =
    Izgleda da koristite Ruffle na protokolu "file:".
    Ovo ne funkcioniše jer pregledači blokiraju mnoge funkcije iz bezbednosnih razloga.
    Umesto toga, preporučujemo podešavanje lokalnog servera ili korišćenje veb demo verzije ili desktop aplikacije.
error-javascript-config =
    Ruffle je naišao na ozbiljan problem zbog pogrešne konfiguracije JavaSkripta.
    Ako ste administrator servera, preporučujemo vam da proverite detalje greške kako biste saznali koji parametar uzrokuje problem. Takođe možete da konsultujete Ruffleov viki za pomoć.
error-wasm-not-found =
    Ruffle nije uspeo da učita potrebnu komponentu datoteke ".wasm".
    Ako ste administrator servera, proverite da li je datoteka ispravno otpremljena.
    Ako problem i dalje postoji, možda ćete morati da koristite podešavanje "publicPath": pogledajte Ruffleovu viki stranicu za pomoć.
error-wasm-mime-type =
    Ruffle je naišao na ozbiljan problem prilikom pokušaja inicijalizacije.
    Ovaj veb server ne služi ".wasm" datoteke sa ispravnim MIME tipom.
    Ako ste administrator servera, obratite se Ruffleovom vikiju za pomoć.
error-invalid-swf =
    Ruffle ne može da analizira traženu datoteku.
    Najverovatniji razlog je taj što tražena datoteka nije važeći SWF.
error-swf-fetch =
    Ruffle nije uspeo da učita Fleš SWF datoteku.
    Najverovatniji razlog je taj što datoteka više ne postoji, pa Ruffle nema šta da učita.
    Pokušajte da kontaktirate administratora veb stranice za pomoć.
error-swf-cors =
    Ruffle nije uspeo da učita Fleš SWF datoteku.
    Pristup preuzimanju je verovatno blokiran CORS politikom.
    Ako ste administrator servera, pogledajte Ruffleovu viki stranicu za pomoć.
error-wasm-cors =
    Ruffle nije uspeo da učita potrebnu komponentu datoteke ".wasm".
    Pristup preuzimanju je verovatno blokiran CORS politikom.
    Ako ste administrator servera, pogledajte Ruffleovu viki stranicu za pomoć.
error-wasm-invalid =
    Ruffle je naišao na ozbiljan problem prilikom pokušaja inicijalizacije.
    Izgleda da ovoj stranici nedostaju ili su nevažeće datoteke za pokretanje Rufflea.
    Ako ste administrator servera, pogledajte Ruffleov viki za pomoć.
error-wasm-download =
    Ruffle je naišao na ozbiljan problem prilikom pokušaja inicijalizacije.
    Ovo se često može rešiti jednostavnim ponovnim učitavanjem stranice.
    U suprotnom, kontaktirajte administratora sajta.
error-wasm-disabled-on-edge =
    Ruffle nije uspeo da učita potrebnu komponentnu datoteku ".wasm".
    Da biste rešili ovaj problem, pokušajte da otvorite podešavanja pregledača, kliknete na "Privatnost, pretraga i usluge", pomerite se nadole i isključite "Poboljšaj bezbednost veba".
    Ovo će omogućiti vašem pregledaču da učita potrebne ".wasm" datoteke.
    Ako problem i dalje postoji, možda ćete morati da koristite drugi pregledač.
error-wasm-unsupported-browser =
    Pregledač koji koristite ne podržava WebAssembly ekstenzije potrebne za rad Ruffle-a.
    Molimo vas da pređete na podržani pregledač.
    Lista podržanih pregledača može se naći na Viki stranici.
error-javascript-conflict =
    Ruffle je naišao na ozbiljan problem prilikom pokušaja inicijalizacije.
    Izgleda da ova stranica koristi JavaSkript kod koji je u sukobu sa Ruffleom.
    Ako ste administrator servera, pozivamo vas da pokušate da otpremite datoteku na praznu stranicu.
error-javascript-conflict-outdated = Takođe možete pokušati da otpremite noviju verziju programa Ruffle koja bi mogla da reši problem (trenutna verzija je zastarela: { $buildDate }).
error-csp-conflict =
    Ruffle je naišao na ozbiljan problem prilikom pokušaja inicijalizacije.
    Politike bezbednosti sadržaja ovog veb servera ne dozvoljavaju pokretanje potrebne komponente ".wasm".
    Ako ste administrator servera, obratite se Ruffleovom vikiju za pomoć.
error-unknown =
    Ruffle je naišao na ozbiljan problem prilikom pokušaja prikazivanja ovog Fleš sadržaja.
    { $outdated ->
    [true] Ako ste administrator servera, pokušajte da otpremite noviju verziju Rufflea (trenutna verzija je zastarela: { $buildDate }).
    *[false] Ovo ne bi trebalo da se dešava, pa bismo vam bili veoma zahvalni ako biste prijavili grešku!
    }
`,"save-manager.ftl":`save-delete-prompt = Da li ste sigurni da želite da obrišete ovu datoteku za čuvanje?
save-reload-prompt =
    Jedini način da { $action ->
        [delete] obrišete
       *[replace] zamenite
    } ovu sačuvanu datoteku bez mogućih konflikata jeste da ponovo učitate ovaj sadržaj. Da li želite da ipak nastavite?
save-download = Preuzmite
save-replace = Zameni
save-delete = Obriši
save-backup-all = Preuzmi sve sačuvane datoteke
`,"volume-controls.ftl":`volume-controls-mute = Isključi zvuk
volume-controls-unmute = Uključi zvuk
`},"sr-SP":{"context_menu.ftl":`context-menu-download-swf = Преузмите .swf датотеку
context-menu-copy-debug-info = Копирајте информације за отклањање грешака
context-menu-open-save-manager = Отвори менаџер складишта
context-menu-about-ruffle =
    { $flavor ->
    [extension] О екстензији Ruffle ({ $version })
    *[other] О Ruffle ({ $version })
    }
context-menu-hide = Сакриј овај мени
context-menu-exit-fullscreen = Изађи из режима целог екрана
context-menu-enter-fullscreen = Пређи на цео екран
context-menu-volume-controls = Контроле јачине звука
`,"messages.ftl":`message-cant-embed =
    Ruffle није могао да покрене Флеш уграђен на овој страници.
    Можете покушати да отворите датотеку у посебној картици да бисте избегли овај проблем.
message-restored-from-bfcache =
    Ваш прегледач је вратио овај Флеш садржај из претходне сесије.
    Молимо вас да поново учитате страницу за нови почетак.
panic-title = Нешто је пошло по злу :(
more-info = Додатне информације
run-anyway = Ипак покрени
continue = Настави
report-bug = Пријави грешку
update-ruffle = Ажурирајте Ruffle
ruffle-demo = Веб демо
ruffle-desktop = Десктоп апликација
ruffle-wiki = Погледајте Ruffle Wiki
enable-hardware-acceleration = Изгледа да је хардверско убрзање онемогућено. Иако Ruffle можда ради, може бити веома спор. Можете сазнати како да омогућите хардверско убрзање пратећи доњу везу:
enable-hardware-acceleration-link = Честа питања - Хардверско убрзање у Chrome-у
view-error-details = Прикажи детаље грешке
open-in-new-tab = Отвори у новој картици
click-to-unmute = Кликните да бисте укључили звук
clipboard-message-title = Копирање и налепљивање у Ruffle-у
clipboard-message-description =
    { $variant ->
    *[unsupported] Ваш прегледач не подржава потпун приступ међуспремнику,
    [access-denied] Приступ баферу је забрањен,
    } али увек можете користити ове пречице:
clipboard-message-copy = { " " } за копију
clipboard-message-cut = { " " } за сечење
clipboard-message-paste = { " " } за лепљење
error-canvas-reload = Не може се поново учитати рендерер за платно када је рендерер за платно већ у употреби.
error-file-protocol =
    Изгледа да користите Ruffle на протоколу "file:".
    Ово не функционише јер прегледачи блокирају многе функције из безбедносних разлога.
    Уместо тога, препоручујемо подешавање локалног сервера или коришћење веб демо верзије или десктоп апликације.
error-javascript-config =
    Ruffle је наишао на озбиљан проблем због погрешне конфигурације ЈаваСкрипта.
    Ако сте администратор сервера, препоручујемо вам да проверите детаље грешке како бисте сазнали који параметар узрокује проблем. Такође можете да консултујете Ruffleов вики за помоћ.
error-wasm-not-found =
    Ruffle није успео да учита потребну компоненту датотеке ".wasm".
    Ако сте администратор сервера, проверите да ли је датотека исправно отпремљена.
    Ако проблем и даље постоји, можда ћете морати да користите подешавање "publicPath": погледајте Ruffleову вики страницу за помоћ.
error-wasm-mime-type =
    Ruffle је наишао на озбиљан проблем приликом покушаја иницијализације.
    Овај веб сервер не служи ".wasm" датотеке са исправним MIME типом.
    Ако сте администратор сервера, обратите се Ruffleовом викију за помоћ.
error-invalid-swf =
    Ruffle не може да анализира тражену датотеку.
    Највероватнији разлог је тај што тражена датотека није важећи SWF.
error-swf-fetch =
    Ruffle није успео да учита Флеш SWF датотеку.
    Највероватнији разлог је тај што датотека више не постоји, па Ruffle нема шта да учита.
    Покушајте да контактирате администратора веб странице за помоћ.
error-swf-cors =
    Ruffle није успео да учита Флеш SWF датотеку.
    Приступ преузимању је вероватно блокиран CORS политиком.
    Ако сте администратор сервера, погледајте Ruffleову вики страницу за помоћ.
error-wasm-cors =
    Ruffle није успео да учита потребну компоненту датотеке ".wasm".
    Приступ преузимању је вероватно блокиран CORS политиком.
    Ако сте администратор сервера, погледајте Ruffleову вики страницу за помоћ.
error-wasm-invalid =
    Ruffle је наишао на озбиљан проблем приликом покушаја иницијализације.
    Изгледа да овој страници недостају или су неважеће датотеке за покретање Ruffleа.
    Ако сте администратор сервера, погледајте Ruffleов вики за помоћ.
error-wasm-download =
    Ruffle је наишао на озбиљан проблем приликом покушаја иницијализације.
    Ово се често може решити једноставним поновним учитавањем странице.
    У супротном, контактирајте администратора сајта.
error-wasm-disabled-on-edge =
    Ruffle није успео да учита потребну компонентну датотеку ".wasm".
    Да бисте решили овај проблем, покушајте да отворите подешавања прегледача, кликнете на "Приватност, претрага и услуге", померите се надоле и искључите "Побољшај безбедност веба".
    Ово ће омогућити вашем прегледачу да учита потребне ".wasm" датотеке.
    Ако проблем и даље постоји, можда ћете морати да користите други прегледач.
error-wasm-unsupported-browser =
    Прегледач који користите не подржава WebAssembly екстензије потребне за рад Ruffle-а.
    Молимо вас да пређете на подржани прегледач.
    Листа подржаних прегледача може се наћи на Вики страници.
error-javascript-conflict =
    Ruffle је наишао на озбиљан проблем приликом покушаја иницијализације.
    Изгледа да ова страница користи ЈаваСкрипт код који је у сукобу са Ruffleом.
    Ако сте администратор сервера, позивамо вас да покушате да отпремите датотеку на празну страницу.
error-javascript-conflict-outdated = Такође можете покушати да отпремите новију верзију програма Ruffle која би могла да реши проблем (тренутна верзија је застарела: { $buildDate }).
error-csp-conflict =
    Ruffle је наишао на озбиљан проблем приликом покушаја иницијализације.
    Политике безбедности садржаја овог веб сервера не дозвољавају покретање потребне компоненте ".wasm".
    Ако сте администратор сервера, обратите се Ruffleовом викију за помоћ.
error-unknown =
    Ruffle је наишао на озбиљан проблем приликом покушаја приказивања овог Флеш садржаја.
    { $outdated ->
    [true] Ако сте администратор сервера, покушајте да отпремите новију верзију Ruffleа (тренутна верзија је застарела: { $buildDate }).
    *[false] Ово не би требало да се дешава, па бисмо вам били веома захвални ако бисте пријавили грешку!
    }
`,"save-manager.ftl":`save-delete-prompt = Да ли сте сигурни да желите да обришете ову датотеку за чување?
save-reload-prompt =
    Једини начин да { $action ->
        [delete] обришете
       *[replace] замените
    } ову сачувану датотеку без могућих конфликата јесте да поново учитате овај садржај. Да ли желите да ипак наставите?
save-download = Преузмите
save-replace = Замени
save-delete = Обриши
save-backup-all = Преузми све сачуване датотеке
`,"volume-controls.ftl":`volume-controls-mute = Искључи звук
volume-controls-unmute = Укључи звук
`},"sv-SE":{"context_menu.ftl":`context-menu-download-swf = Ladda ner SWF
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
message-restored-from-bfcache =
    Din webbläsare återställde detta Flash-innehåll från en tidigare session.
    För att börja på nytt, ladda om sidan.
panic-title = Något gick fel :(
more-info = Mer info
run-anyway = Kör ändå
continue = Fortsätt
report-bug = Rapportera bugg
update-ruffle = Uppdatera Ruffle
ruffle-demo = Webbdemo
ruffle-desktop = Skrivbordsprogram
ruffle-wiki = Se Ruffle-wiki
enable-hardware-acceleration = Det ser ut som att hårdvaruacceleration är avstängt. På grund av det kan Ruffle fungera långsamt. Du kan ta reda på hur man sätter på hårdvaruacceleration genom länken nedan:
enable-hardware-acceleration-link = FAQ - Chrome hårdvaruacceleration
view-error-details = Visa felinformation
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
error-canvas-reload = Kan inte ladda om med canvas render:aren när den redan används.
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
error-wasm-unsupported-browser =
    Webbläsaren du använder stöder inte de WebAssembly tilläggen som Ruffle behöver för att köra.
    Vänligen byt till en webbläsare som stöds.
    Du kan hitta en lista över webbläsare som stöds på Wikin.
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
volume-controls-unmute = Sätt på ljud
`},"th-TH":{"context_menu.ftl":`context-menu-volume-controls = ปุ่มระดับเสียง
`,"messages.ftl":`ruffle-demo = เว็บตัวอย่าง
ruffle-wiki = ดูวิกิ Ruffle
`,"save-manager.ftl":`save-delete-prompt = คุณแน่ใจหรือว่าจะลบไฟล์นี้?
`,"volume-controls.ftl":`volume-controls-mute = ปิดเสียง
volume-controls-unmute = ใช้เสียง
`},"tr-TR":{"context_menu.ftl":`context-menu-download-swf = .swf'i indir
context-menu-copy-debug-info = Hata ayıklama bilgisini kopyala
context-menu-open-save-manager = Kayıt yöneticisini aç
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
report-bug = Hata bildir
update-ruffle = Ruffle'ı güncelle
ruffle-demo = Ağ Demosu
ruffle-desktop = Masaüstü uygulaması
ruffle-wiki = Ruffle wiki'yi görüntüle
enable-hardware-acceleration = Donanım hızlandırması etkin değil gibi görünüyor. Ruffle çalışabilir ancak çok yavaş olabilir. Donanım hızlandırmasını nasıl etkinleştirebileceğinizi bu linkten öğrenebilirsiniz:
enable-hardware-acceleration-link = SSS - Chrome Donanım Hızlandırması
view-error-details = Hata ayrıntılarını görüntüle
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
error-canvas-reload = Tuval oluşturucusu kullanımda olduğunda tuval oluşturucusu ile yeniden yükleme yapılamaz.
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
`},"tt-RU":{"context_menu.ftl":`context-menu-download-swf = SWF файлны йөкләү
context-menu-copy-debug-info = Дебаг мәгълүматын күчерү
context-menu-open-save-manager = Саклау менеджерын ачу
context-menu-about-ruffle =
    { $flavor ->
        [extension] Ruffle өстәмәсе турында ({ $version })
       *[other] Ruffle турында ({ $version })
    }
context-menu-hide = Бу менюны яшер
context-menu-exit-fullscreen = Тулы экраннан чыгу
context-menu-enter-fullscreen = Тулы экраннан күчү
context-menu-volume-controls = Тавыш көйләүләре
`,"messages.ftl":`panic-title = Нәрсәдер дөрес эшләмәгән :(
more-info = Тулырак
run-anyway = Барыбер эшләт
continue = Дәвам итү
report-bug = Хата турында хәбәр итү
open-in-new-tab = Яңа салынмада ачу
`,"save-manager.ftl":``,"volume-controls.ftl":`volume-controls-mute = Тавышны ябу
volume-controls-unmute = Тавышны ачу
`},"uk-UA":{"context_menu.ftl":`context-menu-download-swf = Завантажити SWF
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
`},"vi-VN":{"context_menu.ftl":`context-menu-download-swf = Tải về file SWF
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
message-restored-from-bfcache = Trình duyệt đã khôi phục lại nội dung Flash từ phiên gần nhất. Tải lại trang nếu muốn bắt đầu lại từ đầu.
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
`},"zh-CN":{"context_menu.ftl":`context-menu-download-swf = 下载 SWF
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
message-restored-from-bfcache =
    您的浏览器从之前的会话中恢复了这个Flash内容。
    若要从头开始播放，请重新加载页面。
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
error-javascript-conflict-outdated = 您也可以尝试上传可能规避此问题的较新版本的 Ruffle (当前构建版本已过时: { $buildDate })。
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
message-restored-from-bfcache =
    您的瀏覽器從之前的會話中還原了此 Flash 內容。
    若要重新開始，請重新載入頁面。
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
`}},Zt={};for(let[e,t]of Object.entries(Xt)){let n=new lt(e);if(t){let r;for(let[i,a]of Object.entries(t))if(a){r??=Kt();for(let t of n.addResource(new Pt(a)))console.error(`Error in text for ${e} ${i}: ${t}`)}qt(r)}Zt[e]=n}function Qt(e,t,n){let r=Zt[e];if(r!==void 0){let e=r.getMessage(t);if(e!==void 0&&e.value)return r.formatPattern(e.value,n)}return null}function k(e,t){let n=Kt(),r=Ht(navigator.languages,Object.keys(Zt),{defaultLocale:`en-US`});for(let n in r){let i=Qt(r[n],e,t);if(i)return i}return console.error(`Unknown text key '${e}'`),qt(n),e}function $t(e,t){let n=document.createElement(`div`);return k(e,t).split(`
`).forEach(e=>{let t=document.createElement(`p`);t.innerText=e,n.appendChild(t)}),n}function en(){return(0,D.jsx)(`div`,{id:`volume-controls-modal`,class:`modal hidden`,children:(0,D.jsx)(`div`,{class:`modal-area`,children:(0,D.jsxs)(`div`,{id:`volume-controls`,children:[(0,D.jsx)(`input`,{id:`mute-checkbox`,type:`checkbox`}),(0,D.jsx)(`label`,{id:`volume-mute`,for:`mute-checkbox`,title:k(`volume-controls-unmute`)}),(0,D.jsx)(`label`,{id:`volume-min`,for:`mute-checkbox`,title:k(`volume-controls-mute`)}),(0,D.jsx)(`label`,{id:`volume-mid`,for:`mute-checkbox`,title:k(`volume-controls-mute`)}),(0,D.jsx)(`label`,{id:`volume-max`,for:`mute-checkbox`,title:k(`volume-controls-mute`)}),(0,D.jsx)(`input`,{id:`volume-slider`,type:`range`,min:`0`,max:`100`,step:`1`}),(0,D.jsx)(`span`,{id:`volume-slider-text`}),(0,D.jsx)(`span`,{class:`close-modal`})]})})})}function tn(){return(0,D.jsx)(`div`,{id:`video-modal`,class:`modal hidden`,children:(0,D.jsxs)(`div`,{class:`modal-area`,children:[(0,D.jsx)(`span`,{class:`close-modal`}),(0,D.jsx)(`div`,{id:`video-holder`})]})})}function nn(){return(0,D.jsx)(`div`,{id:`hardware-acceleration-modal`,class:`modal hidden`,children:(0,D.jsxs)(`div`,{class:`modal-area`,children:[(0,D.jsx)(`span`,{class:`close-modal`}),(0,D.jsx)(`span`,{id:`acceleration-text`,children:k(`enable-hardware-acceleration`)}),(0,D.jsx)(`a`,{href:`https://github.com/ruffle-rs/ruffle/wiki/Frequently-Asked-Questions-For-Users#chrome-hardware-acceleration`,target:`_blank`,class:`modal-button`,children:k(`enable-hardware-acceleration-link`)})]})})}var rn=navigator.userAgent.includes(`Mac OS X`)?`Command`:`Ctrl`;function an(){return(0,D.jsx)(`div`,{id:`clipboard-modal`,class:`modal hidden`,children:(0,D.jsxs)(`div`,{class:`modal-area`,children:[(0,D.jsx)(`span`,{class:`close-modal`}),(0,D.jsx)(`h2`,{children:k(`clipboard-message-title`)}),(0,D.jsx)(`p`,{id:`clipboard-modal-description`}),(0,D.jsxs)(`p`,{children:[(0,D.jsxs)(`b`,{children:[rn,`+C`]}),(0,D.jsx)(`span`,{children:k(`clipboard-message-copy`)})]}),(0,D.jsxs)(`p`,{children:[(0,D.jsxs)(`b`,{children:[rn,`+X`]}),(0,D.jsx)(`span`,{children:k(`clipboard-message-cut`)})]}),(0,D.jsxs)(`p`,{children:[(0,D.jsxs)(`b`,{children:[rn,`+V`]}),(0,D.jsx)(`span`,{children:k(`clipboard-message-paste`)})]})]})})}function on(){return(0,D.jsx)(`div`,{id:`context-menu-overlay`,class:`hidden`,children:(0,D.jsx)(`ul`,{id:`context-menu`})})}var sn=document.createElement(`template`);sn.content.appendChild((0,D.jsx)(Ne,{})),sn.content.appendChild((0,D.jsx)(Pe,{})),sn.content.appendChild((0,D.jsx)(Fe,{})),sn.content.appendChild((0,D.jsx)(Ie,{})),sn.content.appendChild((0,D.jsx)(Le,{})),sn.content.appendChild((0,D.jsx)(en,{})),sn.content.appendChild((0,D.jsx)(tn,{})),sn.content.appendChild((0,D.jsx)(nn,{})),sn.content.appendChild((0,D.jsx)(an,{})),sn.content.appendChild((0,D.jsx)(on,{}));var cn=`application/x-shockwave-flash`,ln=`application/futuresplash`,un=`application/x-shockwave-flash2-preview`,dn=`application/vnd.adobe.flash.movie`;function fn(e){let t=``;try{t=new URL(e,`https://example.com`).pathname}catch{}if(t&&t.length>=4){let e=t.slice(-4).toLowerCase();if(e===`.swf`||e===`.spl`)return!0}return!1}function pn(e,t){switch(e=e.toLowerCase(),e){case cn.toLowerCase():case ln.toLowerCase():case un.toLowerCase():case dn.toLowerCase():return!0;default:if(t)switch(e){case`application/octet-stream`:case`binary/octet-stream`:return!0}}return!1}function mn(e,t){let n=fn(e);return t?pn(t,n):n}function hn(e){let t=e.pathname;return t.substring(t.lastIndexOf(`/`)+1)}var gn=null,_n=!1;try{if(document.currentScript instanceof HTMLScriptElement&&document.currentScript.src!==``){let e=document.currentScript.src;!e.endsWith(`.js`)&&!e.endsWith(`/`)&&(e+=`/`),gn=new URL(`.`,e),_n=gn.protocol.includes(`extension`)}}catch(e){console.warn(`Unable to get currentScript URL`,e)}var vn=`https://ruffle.rs`,yn=class extends Error{constructor(e,t){super(`Failed to fetch ${e}`),this.swfUrl=e,this.statusNotOk=t,this.swfUrl=e,this.statusNotOk=t}},bn=class extends Error{constructor(e){super(`Not a valid swf: ${e}`)}},xn=class extends Error{constructor(e){super(`Failed to load Ruffle WASM`),this.cause=e}},Sn=class extends Error{constructor(e){super(`Invalid options: ${e}`)}},Cn=o((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.createRef=e.h=void 0,e.createElement=r;var t=he(),n=ge();function r(e,r,...i){if(typeof e==`function`)return e({...r,children:i});let{finalTag:a,finalAttrs:o}=(0,n.applyTsxTag)(e,r),s=(0,n.createDomElement)(a,o);return o&&(0,t.setAttributes)(s,o),(0,n.applyChildren)(s,i),s}e.h=r,e.createRef=()=>({current:null})})),wn=o((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.defineCustomElement=n;var t=E();function n(e,n,r){return customElements.define(e,n,r),n=>(0,t.jsx)(e,n)}})),Tn=o((e=>{Object.defineProperty(e,"__esModule",{value:!0})})),En=o((e=>{var t=e&&e.__createBinding||(Object.create?(function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||(`get`in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}):(function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]})),n=e&&e.__exportStar||function(e,n){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(n,r)&&t(n,e,r)};Object.defineProperty(e,"__esModule",{value:!0}),n(Cn(),e),n(wn(),e),n(E(),e),n(Tn(),e)}))();function Dn({action:e,showDetails:t,errorArray:n,errorText:r,swfUrl:i}){if(e.type===`show_details`)return(0,D.jsx)(`li`,{children:(0,D.jsx)(`a`,{href:`#`,id:`panic-view-details`,onClick:e=>{e.preventDefault(),t()},children:k(`view-error-details`)})});if(e.type===`open_link`)return(0,D.jsx)(`li`,{children:(0,D.jsx)(`a`,{href:e.url,target:`_top`,children:e.label})});{let e;e=document.location.protocol.includes(`extension`)&&i?i.href:document.location.href,e=e.split(/[?#]/,1)[0];let t=`Error on ${e}`,a=`https://github.com/ruffle-rs/ruffle/issues/new?title=${encodeURIComponent(t)}&template=error_report.md&labels=error-report&body=`,o=encodeURIComponent(r);return n.stackIndex>-1&&String(a+o).length>8195&&(n[n.stackIndex]=null,n.avmStackIndex>-1&&(n[n.avmStackIndex]=null),o=encodeURIComponent(n.join(``))),a+=o,(0,D.jsx)(`li`,{children:(0,D.jsx)(`a`,{href:a,target:`_top`,children:k(`report-bug`)})})}}function On(){let e=new Date(ce.buildDate),t=new Date;return t.setMonth(t.getMonth()-6),t>e}var A={OpenDemo:{type:`open_link`,url:vn+`/demo`,label:k(`ruffle-demo`)},DownloadDesktop:{type:`open_link`,url:vn+`/downloads#desktop-app`,label:k(`ruffle-desktop`)},UpdateRuffle:{type:`open_link`,url:vn+`/downloads`,label:k(`update-ruffle`)},CreateReport:{type:`create_report`},ShowDetails:{type:`show_details`},createReportOrUpdate(){return On()?this.UpdateRuffle:this.CreateReport},openWiki(e,t){return{type:`open_link`,url:`https://github.com/ruffle-rs/ruffle/wiki/${e}`,label:t??k(`ruffle-wiki`)}}};function kn(e){if(e instanceof yn)return e.swfUrl&&!e.swfUrl.protocol.includes(`http`)?{body:$t(`error-file-protocol`),actions:[A.OpenDemo,A.DownloadDesktop]}:window.location.origin===e.swfUrl?.origin||e.statusNotOk||window.location.protocol.includes(`extension`)?{body:$t(`error-swf-fetch`),actions:[A.ShowDetails]}:{body:$t(`error-swf-cors`),actions:[A.openWiki(`Using-Ruffle#configure-cors-header`),A.ShowDetails]};if(e instanceof bn)return{body:$t(`error-invalid-swf`),actions:[A.ShowDetails]};if(e instanceof xn){if(window.location.protocol===`file:`)return{body:$t(`error-file-protocol`),actions:[A.OpenDemo,A.DownloadDesktop]};let t=String(e.cause.message).toLowerCase();if(t.includes(`mime`))return{body:$t(`error-wasm-mime-type`),actions:[A.openWiki(`Using-Ruffle#configure-webassembly-mime-type`),A.ShowDetails]};if(t.includes(`networkerror`)||t.includes(`failed to fetch`)||t.includes(`load failed`))return{body:$t(`error-wasm-cors`),actions:[A.openWiki(`Using-Ruffle#configure-cors-header`),A.ShowDetails]};if(t.includes(`disallowed by embedder`))return{body:$t(`error-csp-conflict`),actions:[A.openWiki(`Using-Ruffle#configure-wasm-csp`),A.ShowDetails]};if(e.cause.name===`CompileError`&&t.includes(`bad type`))return{body:$t(`error-wasm-unsupported-browser`),actions:[A.openWiki(`#web`),A.ShowDetails]};if(e.cause.name===`CompileError`||t.includes(`failed to execute 'compile' on 'webassembly'`))return{body:$t(`error-wasm-invalid`),actions:[A.openWiki(`Using-Ruffle#addressing-a-compileerror`),A.ShowDetails]};if((t.includes(`could not download wasm module`)||t.includes(`webassembly compilation aborted`))&&e.cause.name===`TypeError`)return{body:$t(`error-wasm-download`),actions:[A.ShowDetails]};if(e.cause.name===`TypeError`){let e=$t(`error-javascript-conflict`);return On()&&e.appendChild($t(`error-javascript-conflict-outdated`,{buildDate:ce.buildDate})),{body:e,actions:[A.createReportOrUpdate(),A.ShowDetails]}}return navigator.userAgent.includes(`Edg`)&&t.includes(`webassembly is not defined`)?{body:$t(`error-wasm-disabled-on-edge`),actions:[A.openWiki(`Frequently-Asked-Questions-For-Users#edge-webassembly-error`,k(`more-info`)),A.ShowDetails]}:{body:$t(`error-wasm-not-found`),actions:[A.openWiki(`Using-Ruffle#configuration-options`),A.ShowDetails]}}return e instanceof Sn?{body:$t(`error-javascript-config`),actions:[A.openWiki(`Using-Ruffle#javascript-api`),A.ShowDetails]}:{body:$t(`error-unknown`,{buildDate:ce.buildDate,outdated:String(On)}),actions:[A.createReportOrUpdate(),A.ShowDetails]}}function An(e,t,n,r){let i=n.join(``),{body:a,actions:o}=kn(t),s=(0,En.createRef)(),c=(0,En.createRef)(),l=()=>{s.current.classList.remove(`hidden`)};e.textContent=``,e.appendChild((0,D.jsxs)(`div`,{id:`panic`,children:[(0,D.jsx)(`div`,{id:`panic-title`,children:k(`panic-title`)}),(0,D.jsx)(`div`,{id:`panic-body`,children:a}),(0,D.jsx)(`div`,{id:`panic-footer`,children:(0,D.jsx)(`ul`,{children:o.map(e=>Dn({action:e,showDetails:l,errorText:i,errorArray:n,swfUrl:r}))})}),(0,D.jsx)(`div`,{id:`panic-details-modal`,class:`hidden`,ref:s,children:(0,D.jsxs)(`div`,{id:`panic-details-content`,children:[(0,D.jsx)(`span`,{class:`panic-copy-button`,title:`Copy to clipboard`,ref:c,onClick:()=>{c.current&&(navigator.clipboard?.writeText(i),c.current.classList.add(`copied`),setTimeout(()=>{c.current?.classList.remove(`copied`)},2e3))}}),(0,D.jsx)(`span`,{class:`close-modal`,onClick:()=>s.current.classList.add(`hidden`)}),(0,D.jsx)(`textarea`,{readOnly:!0,children:i})]})})]}))}var jn=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,3,1,0,1,10,14,1,12,0,65,0,65,0,65,0,252,10,0,0,11])),Mn=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,7,1,5,0,208,112,26,11])),Nn=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,12,1,10,0,67,0,0,0,0,252,0,26,11])),Pn=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,8,1,6,0,65,0,192,26,11])),Fn=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11])),In=`modulepreload`,Ln=function(e,t){return new URL(e,t).href},Rn={},zn=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,new URL(`../../../src/node/plugins/importAnalysisBuild.ts`,import.meta.url)).href}r=o(t.map(t=>{if(t=Ln(t,n),t=s(t),t in Rn)return;Rn[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:In,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};async function Bn(e){Yt();let t=(await Promise.all([jn(),Fn(),Nn(),Pn(),Mn()])).every(Boolean);t||console.log(`Some WebAssembly extensions are NOT available, falling back to the vanilla WebAssembly module`),ii.options.onFirstLoad?.(),ii.options.onFirstLoad=()=>{};let{default:n,RuffleInstanceBuilder:r,ZipWriter:i}=await zn(t?()=>import(`./ruffle_web-C-SP2psu.js`):()=>import(`./ruffle_web-wasm_mvp-BnWTB4dR.js`),__vite__mapDeps([2,1]),import.meta.url),a,o=t?new URL(``+new URL(`ruffle_web_bg-CJaCgsLk.wasm`,import.meta.url).href,``+import.meta.url):new URL(``+new URL(`ruffle_web-wasm_mvp_bg-CqjAsIxn.wasm`,import.meta.url).href,``+import.meta.url),s=await fetch(o);if(e&&typeof ReadableStreamDefaultController==`function`){let t=s?.headers?.get(`content-length`)||``,n=0,r=parseInt(t);a=new Response(new ReadableStream({async start(t){let i=s.body?.getReader();if(!i)throw`Response had no body`;for(e(n,r);;){let{done:a,value:o}=await i.read();if(a)break;o?.byteLength&&(n+=o?.byteLength),t.enqueue(o),e(n,r)}t.close()}}),s)}else a=s;return await n({module_or_path:a}),[r,i]}var Vn=null;async function Hn(e){Vn===null&&(Vn=Bn(e));let t=await Vn;return[new t[0],()=>new t[1]]}function Un(e,t,n){let r=[],i=0,a=0;for(;i<e.length&&a<t.length;){let o=e[i],s=t[a];n(o,s)<=0?(r.push(o),i++):(r.push(s),a++)}for(;i<e.length;)r.push(e[i++]);for(;a<t.length;)r.push(t[a++]);return r}function Wn(e,t){if(e===t)return 0;let n=e.compareDocumentPosition(t);return n&Node.DOCUMENT_POSITION_FOLLOWING?-1:n&Node.DOCUMENT_POSITION_PRECEDING?1:0}function Gn(e){let t=[`ruffle-embed`];for(let n=1;n<=e;n++)t.push(`ruffle-embed-${n}`);return t.join(`, `)}function Kn(e){let t=Object.getOwnPropertyDescriptor(Document.prototype,`embeds`);if(!t?.get)return;let n=Symbol(`ruffle_embeds_cache`);Object.defineProperty(Document.prototype,"embeds",{get(){let r=this,i=r[n];if(i)return i;let a=null,o=()=>{let n=t.get.call(this),r=Gn(e),i=Array.from(this.querySelectorAll(r));return Un(Array.from(n),i,Wn)},s=()=>a===null?(a=o(),queueMicrotask(()=>{a=null}),a):a,c=Object.create(HTMLCollection.prototype);Object.defineProperty(c,"length",{enumerable:!0,configurable:!0,get(){return s().length}}),c.item=function(e){return s()[e]??null},c.namedItem=function(e){let t=s();for(let n of t){let t=n;if(e&&(t.getAttribute(`name`)===e||t.id===e))return t}return null},c[Symbol.iterator]=function*(){for(let e of s())yield e};let l=new Proxy(c,{get(e,t,n){if(typeof t==`string`){let r=Number(t);if(!Number.isNaN(r)&&r>=0)return s()[r];if(Reflect.has(e,t))return Reflect.get(e,t,n);let i=e.namedItem(t);if(i)return i}return Reflect.get(e,t,n)},has(e,t){if(typeof t==`string`){let n=Number(t);return!Number.isNaN(n)&&n>=0?n<s().length:Reflect.has(e,t)?!0:e.namedItem(t)!==null}return Reflect.has(e,t)},ownKeys(){let e=s().length,t=[];for(let n=0;n<e;n++)t.push(String(n));return t},getOwnPropertyDescriptor(e,t){if(typeof t==`string`){let e=Number(t);if(!Number.isNaN(e)&&e>=0&&e<s().length)return{enumerable:!0,configurable:!0,writable:!1,value:s()[e]}}return Reflect.getOwnPropertyDescriptor(e,t)}});return l[n]=!0,r[n]=l,l},configurable:!0,enumerable:!0})}var qn=999,Jn={};function Yn(e){let t=Jn[e];return t===void 0?null:{internalName:e,name:t.name,class:t.class}}function Xn(e,t){let n=Jn[e];if(n!==void 0){if(n.class!==t)throw Error(`Internal naming conflict on `+e);return n.name}let r=0;if(window.customElements!==void 0)for(;r<qn;){let n=e;if(r>0&&(n=n+`-`+r),window.customElements.get(n)!==void 0){r+=1;continue}else window.customElements.define(n,t),e===`ruffle-embed`&&Kn(r);return Jn[e]={class:t,name:n,internalName:e},n}throw Error(`Failed to assign custom element `+e)}function j(e){return e!=null}function Zn(e,t){if(j(t.allowScriptAccess)&&e.setAllowScriptAccess(t.allowScriptAccess),j(t.backgroundColor)&&e.setBackgroundColor(Qn(t.backgroundColor)),j(t.upgradeToHttps)&&e.setUpgradeToHttps(t.upgradeToHttps),j(t.compatibilityRules)&&e.setCompatibilityRules(t.compatibilityRules),j(t.letterbox)&&e.setLetterbox(t.letterbox.toLowerCase()),j(t.base)&&e.setBaseUrl(t.base),j(t.menu)&&e.setShowMenu(t.menu),j(t.allowFullscreen)&&e.setAllowFullscreen(t.allowFullscreen),j(t.salign)&&e.setStageAlign(t.salign.toLowerCase()),j(t.forceAlign)&&e.setForceAlign(t.forceAlign),j(t.quality)?e.setQuality(t.quality.toLowerCase()):er()&&(console.log(`Running on a mobile device; defaulting to low quality`),e.setQuality(`low`)),j(t.scale)&&e.setScale(t.scale.toLowerCase()),j(t.forceScale)&&e.setForceScale(t.forceScale),j(t.frameRate)&&e.setFrameRate(t.frameRate),j(t.wmode)&&e.setWmode(t.wmode),j(t.logLevel)&&e.setLogLevel(t.logLevel),j(t.maxExecutionDuration)&&e.setMaxExecutionDuration($n(t.maxExecutionDuration)),j(t.playerVersion)&&e.setPlayerVersion(t.playerVersion),j(t.preferredRenderer)&&e.setPreferredRenderer(t.preferredRenderer),j(t.openUrlMode)&&e.setOpenUrlMode(t.openUrlMode.toLowerCase()),j(t.allowNetworking)&&e.setAllowNetworking(t.allowNetworking.toLowerCase()),j(t.credentialAllowList)&&e.setCredentialAllowList(t.credentialAllowList),j(t.playerRuntime)&&e.setPlayerRuntime(t.playerRuntime),j(t.socketProxy))for(let n of t.socketProxy)e.addSocketProxy(n.host,n.port,n.proxyUrl);if(j(t.gamepadButtonMapping))for(let[n,r]of Object.entries(t.gamepadButtonMapping))e.addGamepadButtonMapping(n,r);if(j(t.urlRewriteRules))for(let[n,r]of t.urlRewriteRules)if(n instanceof RegExp)e.addUrlRewriteRule(n,r);else{let t=n.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`),i=RegExp(`^${t}$`),a=r.replace(/\$/g,`$$$$`);e.addUrlRewriteRule(i,a)}j(t.scrollingBehavior)&&e.setScrollingBehavior(t.scrollingBehavior),j(t.deviceFontRenderer)&&e.setDeviceFontRenderer(t.deviceFontRenderer)}function Qn(e){if(e.startsWith(`#`)&&(e=e.substring(1)),e.length<6)return;let t=0;for(let n=0;n<6;n++){let r=parseInt(e[n],16);isNaN(r)?t<<=4:t=t<<4|r}return t}function $n(e){return typeof e==`number`?e:e.secs}function er(){return window.orientation!==void 0}var tr=/^\s*(\d+(\.\d+)?(%)?)/,nr=!1;function rr(e){if(e==null)return{};e instanceof URLSearchParams||(e=new URLSearchParams(e));let t={};for(let[n,r]of e)t[n]=r.toString();return t}var ir=class{constructor(e,t){this.x=e,this.y=t}distanceTo(e){let t=e.x-this.x,n=e.y-this.y;return Math.sqrt(t*t+n*n)}},ar=class e{constructor(e,t,n){this.contextMenuForceDisabled=!1,this.isTouch=!1,this.contextMenuSupported=!1,this._suppressContextMenu=!1,this.panicked=!1,this.rendererDebugInfo=``,this.longPressTimer=null,this.pointerDownPosition=null,this.pointerMoveMaxDistance=0,this.onFSCommand=[],this.config={},this.SaveRow=({rowKey:e,solName:t,solData:n})=>(0,D.jsxs)(`tr`,{children:[(0,D.jsx)(`td`,{title:e,children:t}),(0,D.jsx)(`td`,{children:(0,D.jsx)(`span`,{class:`save-option`,id:`download-save`,title:k(`save-download`),onClick:()=>dr(pr(n,`application/octet-stream`),t+`.sol`)})}),(0,D.jsxs)(`td`,{children:[(0,D.jsx)(`input`,{type:`file`,accept:`.sol`,class:`replace-save`,id:`replace-save-`+e,onChange:t=>this.replaceSOL(t,e)}),(0,D.jsx)(`label`,{for:`replace-save-`+e,class:`save-option`,id:`replace-save`,title:k(`save-replace`)})]}),(0,D.jsx)(`td`,{children:(0,D.jsx)(`span`,{class:`save-option`,id:`delete-save`,title:k(`save-delete`),onClick:()=>this.deleteSave(e)})})]}),this.element=e,this.debugPlayerInfo=t,this.onCallbackAvailable=n,this.shadow=this.element.attachShadow({mode:`open`,delegatesFocus:!0}),this.shadow.appendChild(sn.content.cloneNode(!0)),this.dynamicStyles=this.shadow.getElementById(`dynamic-styles`),this.container=this.shadow.getElementById(`container`),this.playButton=this.shadow.getElementById(`play-button`),this.playButton.addEventListener(`click`,()=>this.play()),this.unmuteOverlay=this.shadow.getElementById(`unmute-overlay`),this.splashScreen=this.shadow.getElementById(`splash-screen`),this.virtualKeyboard=this.shadow.getElementById(`virtual-keyboard`),this.virtualKeyboard.addEventListener(`input`,this.virtualKeyboardInput.bind(this)),this.saveManager=this.shadow.getElementById(`save-manager`),this.videoModal=this.shadow.getElementById(`video-modal`),this.hardwareAccelerationModal=this.shadow.getElementById(`hardware-acceleration-modal`),this.volumeControls=this.shadow.getElementById(`volume-controls-modal`),this.clipboardModal=this.shadow.getElementById(`clipboard-modal`),this.addModalJavaScript(this.saveManager),this.addModalJavaScript(this.volumeControls),this.addModalJavaScript(this.videoModal),this.addModalJavaScript(this.hardwareAccelerationModal),this.addModalJavaScript(this.clipboardModal),this.volumeSettings=new or(!1,100),this.addVolumeControlsJavaScript(this.volumeControls);let r=this.saveManager.querySelector(`.modal-button`);r&&(r.addEventListener(`click`,this.backupSaves.bind(this)),r.innerText=k(`save-backup-all`));let i=this.unmuteOverlay.querySelector(`#unmute-overlay-svg`);if(i){let e=i.querySelector(`#unmute-text`);e.textContent=k(`click-to-unmute`)}this.contextMenuOverlay=this.shadow.getElementById(`context-menu-overlay`),this.contextMenuElement=this.shadow.getElementById(`context-menu`);let a=e=>{e.preventDefault(),e.stopPropagation()};this.contextMenuElement.addEventListener(`contextmenu`,a),this.contextMenuElement.addEventListener(`click`,a),this.contextMenuElement.dir=vr(),document.documentElement.addEventListener(`pointerdown`,this.checkIfTouch.bind(this)),this.element.addEventListener(`contextmenu`,this.showContextMenu.bind(this)),this.container.addEventListener(`pointerdown`,this.pointerDown.bind(this)),this.container.addEventListener(`pointermove`,this.checkLongPressMovement.bind(this)),this.container.addEventListener(`pointerup`,this.checkLongPress.bind(this)),this.container.addEventListener(`pointercancel`,this.clearLongPressTimer.bind(this)),this.element.addEventListener(`fullscreenchange`,this.fullScreenChange.bind(this)),this.element.addEventListener(`webkitfullscreenchange`,this.fullScreenChange.bind(this)),this.instance=null,this.newZipWriter=null,this._readyState=le.HaveNothing,this.metadata=null,this.lastActivePlayingState=!1,this.backgroundWorker=null,this.setupTabVisibilityHandling()}addFSCommandHandler(e){this.onFSCommand.push(e)}callFSCommand(e,t){if(this.onFSCommand.length===0)return!1;for(let n of this.onFSCommand)n(e,t);return!0}addModalJavaScript(e){let t=e.querySelector(`#video-holder`),n=()=>{e.classList.add(`hidden`),t&&(t.textContent=``)};e.parentNode.addEventListener(`click`,n);let r=e.querySelector(`.modal-area`);r&&r.addEventListener(`click`,e=>e.stopPropagation());let i=e.querySelector(`.close-modal`);i&&i.addEventListener(`click`,n)}addVolumeControlsJavaScript(e){let t=e.querySelector(`#mute-checkbox`),n=e.querySelector(`#volume-mute`),r=[e.querySelector(`#volume-min`),e.querySelector(`#volume-mid`),e.querySelector(`#volume-max`)],i=e.querySelector(`#volume-slider`),a=e.querySelector(`#volume-slider-text`),o=()=>{if(this.volumeSettings.isMuted)n.style.display=`inline`,r.forEach(e=>{e.style.display=`none`});else{n.style.display=`none`;let e=Math.round(this.volumeSettings.volume/50);r.forEach((t,n)=>{t.style.display=n===e?`inline`:`none`})}};t.checked=this.volumeSettings.isMuted,i.disabled=t.checked,i.valueAsNumber=this.volumeSettings.volume,a.textContent=i.value+`%`,o(),t.addEventListener(`change`,()=>{i.disabled=t.checked,this.volumeSettings.isMuted=t.checked,this.instance?.set_volume(this.volumeSettings.get_volume()),o()}),i.addEventListener(`input`,()=>{a.textContent=i.value+`%`,this.volumeSettings.volume=i.valueAsNumber,this.instance?.set_volume(this.volumeSettings.get_volume()),o()})}setupTabVisibilityHandling(){document.addEventListener(`visibilitychange`,()=>{if(!this.instance)return;let e=this.loadedConfig?.backgroundExecutionMode??ke.None;document.hidden?(this.lastActivePlayingState=this.instance.is_playing(),e===ke.MainThread?(this.instance.enable_background_tick_mode(),this.lastActivePlayingState&&this.startBackgroundTick()):this.instance.pause()):(e===ke.MainThread&&(this.stopBackgroundTick(),this.instance.restart_animation_loop()),this.lastActivePlayingState&&this.instance.play(),this.instance.audio_context()?.resume())})}startBackgroundTick(){let e=`
            const intervalMs = ${1e3/(this.metadata?.frameRate||24)};
            self.onmessage = () => {
                setTimeout(() => self.postMessage("tick"), intervalMs);
            };
            setTimeout(() => self.postMessage("tick"), intervalMs);
        `;try{let t=new Blob([e],{type:`application/javascript`}),n=URL.createObjectURL(t),r=new Worker(n);URL.revokeObjectURL(n),this.backgroundWorker=r,r.onmessage=()=>{this.backgroundWorker===r&&(this.instance?.tick_for_background(performance.now()),r.postMessage(`ack`))}}catch(e){console.warn(`Unable to create background Worker:`,e),this.instance?.pause()}}stopBackgroundTick(){this.backgroundWorker?.terminate(),this.backgroundWorker=null}updateStyles(){if(this.dynamicStyles.sheet){if(this.dynamicStyles.sheet.cssRules)for(let e=this.dynamicStyles.sheet.cssRules.length-1;e>=0;e--)this.dynamicStyles.sheet.deleteRule(e);let t=this.element.attributes.getNamedItem(`align`);if(t!=null){let e=t.value.toLowerCase(),n=(()=>{switch(e){case`right`:return`vertical-align: top; float: right;`;case`left`:return`vertical-align: top; float: left;`;case`bottom`:return`vertical-align: baseline;`;case`top`:return`vertical-align: top;`;case`center`:return`vertical-align: middle; vertical-align: -moz-middle-with-baseline;`;case`middle`:return`vertical-align: middle; vertical-align: -webkit-baseline-middle; vertical-align: -moz-middle-with-baseline;`;case`absbottom`:return`vertical-align: bottom;`;case`absmiddle`:case`abscenter`:return`vertical-align: middle;`;case`texttop`:return`vertical-align: text-top;`;default:return``}})();n&&this.dynamicStyles.sheet.insertRule(`:host { ${n} }`)}let n=this.element.attributes.getNamedItem(`width`);if(n!=null){let t=e.htmlDimensionToCssDimension(n.value);t!==null&&this.dynamicStyles.sheet.insertRule(`:host { width: ${t}; }`)}let r=this.element.attributes.getNamedItem(`height`);if(r!=null){let t=e.htmlDimensionToCssDimension(r.value);t!==null&&this.dynamicStyles.sheet.insertRule(`:host { height: ${t}; }`)}}}isUnusedFallbackObject(){let e=Yn(`ruffle-object`);if(e!==null){let t=this.element.parentNode;for(;t!==document&&t!==null;){if(t.nodeName===e.name)return!0;t=t.parentNode}}return!1}async ensureFreshInstance(){this.destroy(),this.loadedConfig&&this.loadedConfig.splashScreen!==!1&&this.loadedConfig.preloader!==!1&&this.showSplashScreen(),this.loadedConfig&&this.loadedConfig.preloader===!1&&console.warn(`The configuration option preloader has been replaced with splashScreen. If you own this website, please update the configuration.`),this.loadedConfig&&this.loadedConfig.maxExecutionDuration&&typeof this.loadedConfig.maxExecutionDuration!=`number`&&console.warn(`Configuration: An obsolete format for duration for 'maxExecutionDuration' was used, please use a single number indicating seconds instead. For instance '15' instead of '{secs: 15, nanos: 0}'.`),this.loadedConfig&&typeof this.loadedConfig.contextMenu==`boolean`&&console.warn(`The configuration option contextMenu no longer takes a boolean. Use "on", "off", or "rightClickOnly".`);let[e,t]=await Hn(this.onRuffleDownloadProgress.bind(this)).catch(e=>{console.error(`Serious error loading Ruffle: ${e}`);let t=new xn(e);throw this.panic(t),t});if(this.newZipWriter=t,Zn(e,this.loadedConfig||{}),e.setVolume(this.volumeSettings.get_volume()),this.loadedConfig?.fontSources)for(let t of this.loadedConfig.fontSources)try{let n=await fetch(t);e.addFont(t,new Uint8Array(await n.arrayBuffer()))}catch(e){console.warn(`Couldn't download font source from ${t}`,e)}for(let t in this.loadedConfig?.defaultFonts){let n=this.loadedConfig.defaultFonts[t];n&&e.setDefaultFont(t,n)}this.instance=await e.build(this.container,this).catch(e=>{throw console.error(`Serious error loading Ruffle: ${e}`),this.panic(e),e}),this.rendererDebugInfo=this.instance.renderer_debug_info(),this.rendererDebugInfo.includes(`Adapter Device Type: Cpu`)&&this.container.addEventListener(`mouseover`,this.openHardwareAccelerationModal.bind(this),{once:!0});let n=this.instance.renderer_name(),r=this.instance.constructor;if(console.log(`%cNew Ruffle instance created (Version: `+ce.versionName+` | WebAssembly extensions: `+(r.is_wasm_simd_used()?`ON`:`OFF`)+` | Used renderer: `+(n??``)+`)`,`background: #37528C; color: #FFAD33`),this.audioState()!==`running`&&(this.container.style.visibility=`hidden`,await new Promise(e=>{window.setTimeout(()=>{e()},200)}),this.container.style.visibility=``),this.unmuteAudioContext(),!this.loadedConfig||this.loadedConfig.autoplay===_e.On||this.loadedConfig.autoplay!==_e.Off&&this.audioState()===`running`){if(this.play(),this.audioState()!==`running`){(!this.loadedConfig||this.loadedConfig.unmuteOverlay!==ye.Hidden)&&(this.unmuteOverlay.style.display=`block`),this.container.addEventListener(`click`,this.unmuteOverlayClicked.bind(this),{once:!0});let e=this.instance?.audio_context();e&&(e.onstatechange=()=>{e.state===`running`&&this.unmuteOverlayClicked(),e.onstatechange=null})}}else this.playButton.style.display=`block`}onRuffleDownloadProgress(e,t){let n=this.splashScreen.querySelector(`.loadbar-inner`),r=this.splashScreen.querySelector(`.loadbar`);Number.isNaN(t)?r&&(r.style.display=`none`):n.style.width=`${e/t*100}%`}destroy(){this.instance&&(this.stopBackgroundTick(),this.instance.destroy(),this.instance=null,this.metadata=null,this._readyState=le.HaveNothing,console.log(`Ruffle instance destroyed.`))}checkOptions(e){if(typeof e==`string`)return{url:e};let t=(e,t)=>{if(!e){let e=new Sn(t);throw this.panic(e),e}};return t(typeof e==`object`&&!!e,`Argument 0 must be a string or object`),t(`url`in e||`data`in e,"Argument 0 must contain a `url` or `data` key"),t(!(`url`in e)||typeof e.url==`string`,"`url` must be a string"),e}async reload(){if(this.loadedConfig)await this.load(this.loadedConfig);else throw Error(`Cannot reload if load wasn't first called`)}async reloadWithCanvasRenderer(){if(this.loadedConfig&&this.loadedConfig.preferredRenderer!==Se.Canvas){let e={...this.loadedConfig,preferredRenderer:Se.Canvas};await this.load(e)}else if(this.loadedConfig)this.panic(Error(k(`error-canvas-reload`)));else throw Error(`Cannot reload if load wasn't first called`)}async load(e,t=!1){if(e=this.checkOptions(e),!this.element.isConnected||this.isUnusedFallbackObject()){console.warn(`Ignoring attempt to play a disconnected or suspended Ruffle element`);return}if(!ur(this.element))try{this.loadedConfig={...je,...t&&`url`in e?{allowScriptAccess:_r(`samedomain`,e.url)}:{},...window.RufflePlayer?.config??{},...this.config,...e},this.loadedConfig.backgroundColor&&this.loadedConfig.wmode!==xe.Transparent&&(this.container.style.backgroundColor=this.loadedConfig.backgroundColor),await this.ensureFreshInstance(),`url`in e?(console.log(`Loading SWF file ${e.url}`),this.swfUrl=new URL(e.url,document.baseURI),this.instance.stream_from(this.swfUrl.href,rr(e.parameters))):`data`in e&&(console.log(`Loading SWF data`),delete this.swfUrl,this.instance.load_data(new Uint8Array(e.data),rr(e.parameters),e.swfFileName||`movie.swf`))}catch(e){console.error(`Serious error occurred loading SWF file: ${e}`);let t=Error(e);throw this.panic(t),t}}play(){this.instance&&(this.instance.play(),this.playButton.style.display=`none`)}get isPlaying(){return this.instance?this.instance.is_playing():!1}get volume(){return this.instance?this.instance.volume():1}set volume(e){this.instance&&this.instance.set_volume(e)}get fullscreenEnabled(){return!!(document.fullscreenEnabled||document.webkitFullscreenEnabled)}get isFullscreen(){return(document.fullscreenElement||document.webkitFullscreenElement)===this.element}setFullscreen(e){this.fullscreenEnabled&&e!==this.isFullscreen&&(e?this.enterFullscreen():this.exitFullscreen())}enterFullscreen(){let e={navigationUI:`hide`};this.element.requestFullscreen?this.element.requestFullscreen(e):this.element.webkitRequestFullscreen?this.element.webkitRequestFullscreen(e):this.element.webkitRequestFullScreen&&this.element.webkitRequestFullScreen(e)}exitFullscreen(){document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}fullScreenChange(){if(this.isFullscreen&&screen.orientation&&typeof screen.orientation.lock==`function`){let e=this.loadedConfig?.fullScreenAspectRatio?.toLowerCase()??``;[`portrait`,`landscape`,`any`].includes(e)&&screen.orientation.lock(e).catch(()=>{})}else try{screen.orientation.unlock()}catch{}this.instance?.set_fullscreen(this.isFullscreen)}checkIfTouch(e){this.isTouch=e.pointerType===`touch`||e.pointerType===`pen`}confirmReloadSave(e,t,n){if(mr(t)&&localStorage[e]){if(!n&&!confirm(k(`save-delete-prompt`)))return;let r=this.swfUrl?this.swfUrl.pathname:``,i=this.swfUrl?this.swfUrl.hostname:document.location.hostname,a=e.split(`/`).slice(1,-1).join(`/`);if(r.includes(a)&&e.startsWith(i)){confirm(k(`save-reload-prompt`,{action:n?`replace`:`delete`}))&&this.loadedConfig&&(this.destroy(),n?localStorage.setItem(e,t):localStorage.removeItem(e),this.reload(),this.populateSaves(),this.saveManager.classList.add(`hidden`));return}n?localStorage.setItem(e,t):localStorage.removeItem(e),this.populateSaves(),this.saveManager.classList.add(`hidden`)}}replaceSOL(e,t){let n=e.target,r=new FileReader;r.addEventListener(`load`,()=>{if(r.result&&typeof r.result==`string`){let e=RegExp(`data:.*;base64,`),n=r.result.replace(e,``);this.confirmReloadSave(t,n,!0)}}),n&&n.files&&n.files.length>0&&n.files[0]&&r.readAsDataURL(n.files[0])}checkSaves(){if(!this.saveManager.querySelector(`#local-saves`))return!1;try{if(localStorage===null)return!1}catch{return!1}return Object.keys(localStorage).some(e=>{let t=e.split(`/`).pop(),n=localStorage.getItem(e);return t&&n&&mr(n)})}deleteSave(e){let t=localStorage.getItem(e);t&&this.confirmReloadSave(e,t,!1)}populateSaves(){if(!this.checkSaves())return;let e=this.saveManager.querySelector(`#local-saves`);e.textContent=``,Object.keys(localStorage).forEach(t=>{let n=t.split(`/`).pop(),r=localStorage.getItem(t);n&&r&&mr(r)&&e.appendChild((0,D.jsx)(this.SaveRow,{rowKey:t,solName:n,solData:r}))})}async backupSaves(){let e=this.newZipWriter(),t=[];Object.keys(localStorage).forEach(n=>{let r=String(n.split(`/`).pop()),i=localStorage.getItem(n);if(i&&mr(i)){let n=fr(i),a=t.filter(e=>e===r).length;t.push(r),a>0&&(r+=` (${a+1})`),e.addFile(r+`.sol`,n)}}),dr(new Blob([e.save()],{type:`application/zip`}),`saves.zip`)}openHardwareAccelerationModal(){this.hardwareAccelerationModal.classList.remove(`hidden`)}async openSaveManager(){this.populateSaves(),this.saveManager.classList.remove(`hidden`)}openVolumeControls(){this.volumeControls.classList.remove(`hidden`)}async downloadSwf(){try{if(this.swfUrl){console.log(`Downloading SWF: `+this.swfUrl);let e=await fetch(this.swfUrl.href);if(!e.ok){console.error(`SWF download failed`);return}dr(await e.blob(),hn(this.swfUrl))}else console.error(`SWF download failed`)}catch{console.error(`SWF download failed`)}}virtualKeyboardInput(){let e=this.virtualKeyboard,t=e.value;for(let e of t)for(let t of[`keydown`,`keyup`])this.element.dispatchEvent(new KeyboardEvent(t,{key:e,bubbles:!0}));e.value=``}openVirtualKeyboard(){this.instance?.has_focus()?this.virtualKeyboard.focus({preventScroll:!0}):setTimeout(()=>{this.virtualKeyboard.focus({preventScroll:!0})},0)}closeVirtualKeyboard(){this.isVirtualKeyboardFocused()&&this.container.focus({preventScroll:!0})}isVirtualKeyboardFocused(){return this.shadow.activeElement===this.virtualKeyboard}contextMenuItems(){let e=[],t=()=>{e.length>0&&e[e.length-1]!==null&&e.push(null)};return this.instance&&this.isPlaying&&(this.instance.prepare_context_menu().forEach((n,r)=>{n.separatorBefore&&t(),e.push({text:n.caption,onClick:async()=>this.instance?.run_context_menu_callback(r),enabled:n.enabled,checked:n.checked})}),t()),this.fullscreenEnabled&&(this.isFullscreen?e.push({text:k(`context-menu-exit-fullscreen`),onClick:async()=>this.setFullscreen(!1)}):e.push({text:k(`context-menu-enter-fullscreen`),onClick:async()=>this.setFullscreen(!0)})),e.push({text:k(`context-menu-volume-controls`),onClick:async()=>{this.openVolumeControls()}}),this.instance&&this.swfUrl&&this.loadedConfig&&this.loadedConfig.showSwfDownload===!0&&(t(),e.push({text:k(`context-menu-download-swf`),onClick:this.downloadSwf.bind(this)})),navigator.clipboard&&window.isSecureContext&&e.push({text:k(`context-menu-copy-debug-info`),onClick:()=>navigator.clipboard.writeText(this.getPanicData())}),this.checkSaves()&&e.push({text:k(`context-menu-open-save-manager`),onClick:this.openSaveManager.bind(this)}),t(),e.push({text:k(`context-menu-about-ruffle`,{flavor:_n?`extension`:``,version:ce.versionName}),async onClick(){window.open(vn,`_blank`)}}),this.isTouch&&(t(),e.push({text:k(`context-menu-hide`),onClick:async()=>{this.contextMenuForceDisabled=!0}})),e}pointerDown(e){this.pointerDownPosition=new ir(e.pageX,e.pageY),this.pointerMoveMaxDistance=0,this.startLongPressTimer()}clearLongPressTimer(){this.longPressTimer&&=(clearTimeout(this.longPressTimer),null)}startLongPressTimer(){this.clearLongPressTimer(),this.longPressTimer=setTimeout(()=>this.clearLongPressTimer(),800)}checkLongPressMovement(e){if(this.pointerDownPosition!==null){let t=new ir(e.pageX,e.pageY),n=this.pointerDownPosition.distanceTo(t);n>this.pointerMoveMaxDistance&&(this.pointerMoveMaxDistance=n)}}checkLongPress(e){this.longPressTimer?this.clearLongPressTimer():!this.contextMenuSupported&&e.pointerType!==`mouse`&&this.pointerMoveMaxDistance<15&&this.showContextMenu(e)}suppressContextMenu(){this._suppressContextMenu=!0}showContextMenu(e){if(this.panicked)return;if(e.type===`contextmenu`&&e.shiftKey){this.hideContextMenu();return}if(e.preventDefault(),this._suppressContextMenu){this._suppressContextMenu=!1;return}if(this.shadow.querySelectorAll(`.modal:not(.hidden)`).length!==0||(e.type===`contextmenu`?(this.contextMenuSupported=!0,document.documentElement.addEventListener(`click`,this.hideContextMenu.bind(this),{once:!0})):(document.documentElement.addEventListener(`pointerup`,this.hideContextMenu.bind(this),{once:!0}),e.stopPropagation()),[!1,Ce.Off].includes(this.loadedConfig?.contextMenu??Ce.On)||this.isTouch&&this.loadedConfig?.contextMenu===Ce.RightClickOnly||this.contextMenuForceDisabled))return;for(;this.contextMenuElement.firstChild;)this.contextMenuElement.removeChild(this.contextMenuElement.firstChild);let t=this.contextMenuItems(),n=t.some(e=>e!==null&&e.checked!==void 0);this.contextMenuElement.classList.toggle(`has-checkmarks`,n);for(let e of t)if(e===null)this.contextMenuElement.appendChild((0,D.jsx)(`li`,{class:`menu-separator`,children:(0,D.jsx)(`hr`,{})}));else{let{text:t,onClick:n,enabled:r,checked:i}=e,a=(0,D.jsx)(`li`,{class:{"menu-item":!0,disabled:r===!1,checked:i===!0},"data-text":t,children:t});if(this.contextMenuElement.appendChild(a),r!==!1){let e=async e=>{e.preventDefault(),e.stopPropagation(),await n(e),this.hideContextMenu()};this.contextMenuSupported?(a.addEventListener(`click`,e),a.addEventListener(`contextmenu`,e)):a.addEventListener(`pointerup`,e)}}this.contextMenuOverlay.classList.remove(`hidden`);let r=this.element.getBoundingClientRect(),i=this.contextMenuElement.getBoundingClientRect(),a=document.scrollingElement||document.body,o=i.width,s=i.height,c=a.clientWidth,l=a.clientHeight,u=e.clientX;u+o>c&&(u=e.clientX-o>=0?e.clientX-o:c-o);let d=e.clientY;d+s>l&&(d=e.clientY-s>=0?e.clientY-s:l-s);let f=u-r.x,p=d-r.y,m=getComputedStyle(this.contextMenuElement).direction===`rtl`;this.contextMenuElement.style.top=`${p}px`,m?(this.contextMenuElement.style.right=`${r.width-f}px`,this.contextMenuElement.style.left=``):(this.contextMenuElement.style.right=``,this.contextMenuElement.style.left=`${f}px`)}hideContextMenu(){this.instance?.clear_custom_menu_items(),this.contextMenuOverlay.classList.add(`hidden`)}pause(){this.instance&&(this.instance.pause(),this.playButton.style.display=`block`)}audioState(){if(this.instance){let e=this.instance.audio_context();return e&&e.state||`running`}return`suspended`}unmuteOverlayClicked(){if(this.instance){if(this.audioState()!==`running`){let e=this.instance.audio_context();e&&e.resume()}this.unmuteOverlay.style.display=`none`}}unmuteAudioContext(){if(!nr){if(navigator.maxTouchPoints<1){nr=!0;return}`audioSession`in navigator?navigator.audioSession.type=`playback`:this.container.addEventListener(`click`,()=>{if(nr)return;let e=this.instance?.audio_context();if(!e)return;let t=new Audio;t.src=(()=>{let t=new ArrayBuffer(10),n=new DataView(t),r=e.sampleRate;return n.setUint32(0,r,!0),n.setUint32(4,r,!0),n.setUint16(8,1,!0),`data:audio/wav;base64,UklGRisAAABXQVZFZm10IBAAAAABAAEA${window.btoa(String.fromCharCode(...new Uint8Array(t))).slice(0,13)}AgAZGF0YQcAAACAgICAgICAAAA=`})(),t.load(),t.play().then(()=>{nr=!0}).catch(e=>{console.warn(`Failed to play dummy sound: ${e}`)})},{once:!0})}}static htmlDimensionToCssDimension(e){if(e){let t=e.match(tr);if(t){let e=t[1];return t[3]||(e+=`px`),e}}return null}callExternalInterface(e,t){return this.instance?.call_exposed_callback(e,t)}getObjectId(){return this.element.getAttribute(`name`)}set traceObserver(e){this.instance?.set_trace_observer(e)}getPanicData(){let e=`
# Player Info
`;if(e+=`Allows script access: ${this.loadedConfig?this.loadedConfig.allowScriptAccess:!1}\n`,e+=`${this.rendererDebugInfo}\n`,e+=this.debugPlayerInfo(),e+=`
# Page Info
`,e+=`Page URL: ${document.location.href}\n`,this.swfUrl&&(e+=`SWF URL: ${this.swfUrl}\n`),e+=`
# Browser Info
`,e+=`User Agent: ${window.navigator.userAgent}\n`,e+=`Platform: ${window.navigator.platform}\n`,e+=`Has touch support: ${window.navigator.maxTouchPoints>0}\n`,e+=`
# Ruffle Info
`,e+=`Version: ${ce.versionNumber}\n`,e+=`Name: ${ce.versionName}\n`,e+=`Channel: ${ce.versionChannel}\n`,e+=`Built: ${ce.buildDate}\n`,e+=`Commit: ${ce.commitHash}\n`,e+=`Is extension: ${_n}\n`,e+=`
# Metadata
`,this.metadata)for(let[t,n]of Object.entries(this.metadata))e+=`${t}: ${n}\n`;return e}panic(e){if(this.panicked)return;this.panicked=!0,this.hideSplashScreen();let t=e;if(e instanceof Error&&(e.name===`AbortError`||e.message.includes(`AbortError`)))return;if(e instanceof xn){let t=this.loadedConfig?.openInNewTab,n=this.loadedConfig&&`url`in this.loadedConfig?new URL(this.loadedConfig.url,document.baseURI):void 0;if(t&&n){this.addOpenInNewTabMessage(t,n);return}e=e.cause}let n=Object.assign([],{stackIndex:-1,avmStackIndex:-1});if(n.push(`# Error Info
`),e instanceof Error){if(n.push(`Error name: ${e.name}\n`),n.push(`Error message: ${e.message}\n`),e.stack){let t=n.push(`Error stack:\n\`\`\`\n${e.stack}\n\`\`\`\n`)-1;e.avmStack&&(n.avmStackIndex=n.push(`AVM2 stack:\n\`\`\`\n    ${e.avmStack.trim().replace(/\t/g,`    `)}\n\`\`\`\n`)-1),n.stackIndex=t}}else n.push(`Error: ${e}\n`);n.push(this.getPanicData()),An(this.container,t,n,this.swfUrl),this.destroy()}addOpenInNewTabMessage(e,t){let n=new URL(t);if(this.loadedConfig?.parameters){let e=rr(this.loadedConfig?.parameters);Object.entries(e).forEach(([e,t])=>{n.searchParams.set(e,t)})}this.hideSplashScreen();let r=(0,D.jsxs)(`div`,{children:[$t(`message-cant-embed`),(0,D.jsx)(`div`,{children:(0,D.jsx)(`a`,{href:`#`,onClick:()=>e(n),children:k(`open-in-new-tab`)})})]});this.displayMessageOrElement(r,!0)}displayRootMovieDownloadFailedMessage(e,t){let n=this.loadedConfig?.openInNewTab;if(n&&this.swfUrl&&window.location.origin!==this.swfUrl.origin)this.addOpenInNewTabMessage(n,this.swfUrl);else{let n=t.includes(`HTTP Status is not OK:`),r=e?new bn(this.swfUrl):new yn(this.swfUrl,n);this.panic(r)}}displayMessageOrElement(e,t){let n=(0,D.jsx)(`div`,{id:`message-overlay`,children:(0,D.jsxs)(`div`,{class:`message`,children:[e instanceof HTMLDivElement?e:(0,D.jsx)(`p`,{children:e}),t?null:(0,D.jsx)(`div`,{children:(0,D.jsx)(`button`,{id:`continue-btn`,children:k(`continue`)})})]})});if(this.container.prepend(n),!t){let e=this.container.querySelector(`#continue-btn`);e.onclick=()=>{n.parentNode.removeChild(n)}}}displayMessage(e){this.displayMessageOrElement(e)}displayRestoredFromBfcacheMessage(){if(this.container.querySelector(`#message-overlay`)!==null)return;let e=$t(`message-restored-from-bfcache`);this.displayMessageOrElement(e);let t=this.container.querySelector(`#message-overlay`);(t.scrollWidth>t.offsetWidth||t.scrollHeight>t.offsetHeight)&&t.parentNode.removeChild(t)}displayUnsupportedVideo(e){let t=this.videoModal.querySelector(`#video-holder`);if(t){let n=(0,D.jsx)(`video`,{src:e,autoplay:!0,controls:!0,onContextMenu:e=>e.stopPropagation()});t.textContent=``,t.appendChild(n),this.videoModal.classList.remove(`hidden`)}}displayClipboardModal(e){let t=this.clipboardModal.querySelector(`#clipboard-modal-description`);t&&(t.textContent=k(`clipboard-message-description`,{variant:e?`access-denied`:`unsupported`}),this.clipboardModal.classList.remove(`hidden`))}hideSplashScreen(){this.splashScreen.classList.add(`hidden`),this.container.classList.remove(`hidden`)}showSplashScreen(){this.splashScreen.classList.remove(`hidden`),this.container.classList.add(`hidden`)}setMetadata(t){this.metadata=t,this._readyState=le.Loaded,this.hideSplashScreen(),this.element.dispatchEvent(new CustomEvent(e.LOADED_METADATA)),this.element.dispatchEvent(new CustomEvent(e.LOADED_DATA))}};ar.LOADED_METADATA=`loadedmetadata`,ar.LOADED_DATA=`loadeddata`;var or=class{constructor(e,t){this.isMuted=e,this.volume=t}get_volume(){return this.isMuted?0:this.volume/100}};function sr(e,t){let n={url:e},r=t(`allowNetworking`);r!==null&&(n.allowNetworking=r);let i=_r(t(`allowScriptAccess`),e);i!==null&&(n.allowScriptAccess=i);let a=t(`bgcolor`);a!==null&&(n.backgroundColor=a);let o=t(`base`);if(o!==null)if(o===`.`){let t=new URL(e,document.baseURI);n.base=new URL(o,t).href}else n.base=o;let s=gr(t(`menu`));s!==null&&(n.menu=s);let c=gr(t(`allowFullScreen`));c!==null&&(n.allowFullscreen=c);let l=t(`flashvars`);l!==null&&(n.parameters=l);let u=t(`quality`);u!==null&&(n.quality=u);let d=t(`salign`);d!==null&&(n.salign=d);let f=t(`scale`);f!==null&&(n.scale=f);let p=t(`wmode`);p!==null&&(n.wmode=p);let m=t(`fullScreenAspectRatio`);return m!==null&&(n.fullScreenAspectRatio=m),n}function cr(e){if(e){let t=``,n=``;try{let r=new URL(e,vn);t=r.pathname,n=r.hostname}catch{}if(t.startsWith(`/v/`)&&/^(?:www\.|m\.)?youtube(?:-nocookie)?\.com|youtu\.be$/i.test(n))return!0}return!1}function lr(e,t){let n=e.getAttribute(t),r=window.RufflePlayer?.config??{};if(n)try{let i=new URL(n);i.protocol===`http:`&&window.location.protocol===`https:`&&(!(`upgradeToHttps`in r)||r.upgradeToHttps!==!1)&&(i.protocol=`https:`,e.setAttribute(t,i.toString()))}catch{}}function ur(e){let t=e.parentElement;for(;t!==null;){switch(t.tagName){case`AUDIO`:case`VIDEO`:return!0}t=t.parentElement}return!1}function dr(e,t){let n=URL.createObjectURL(e),r=document.createElement(`a`);r.href=n,r.download=t,r.click(),URL.revokeObjectURL(n)}function fr(e){let t=atob(e);return Uint8Array.from(t,e=>e.charCodeAt(0))}function pr(e,t){let n=fr(e);return new Blob([n],{type:t})}function mr(e){try{return hr(atob(e))}catch{return!1}}function hr(e){return e.charCodeAt(0)===0&&e.charCodeAt(1)===191&&e.slice(6,10)===`TCSO`&&[0,4,0,0,0,0].every((t,n)=>e.charCodeAt(10+n)===t)}function gr(e){switch(e?.toLowerCase()){case`true`:return!0;case`false`:return!1;default:return null}}function _r(e,t){switch(e?.toLowerCase()){case`always`:return!0;case`never`:return!1;case`samedomain`:try{return new URL(window.location.href).origin===new URL(t,window.location.href).origin}catch{return!1}default:return null}}function vr(){let e=new Intl.Locale(navigator.language),t=null;if(`getTextInfo`in e&&typeof e.getTextInfo==`function`)t=e.getTextInfo();else if(`textInfo`in e&&typeof e.textInfo==`object`)t=e.textInfo;else return`ltr`;return typeof t==`object`&&`direction`in t&&typeof t.direction==`string`&&t.direction||`ltr`}var yr=function(e,t,n,r,i){if(r===`m`)throw TypeError(`Private method is not writable`);if(r===`a`&&!i)throw TypeError(`Private accessor was defined without a setter`);if(typeof t==`function`?e!==t||!i:!t.has(e))throw TypeError(`Cannot write private member to an object whose class did not declare it`);return r===`a`?i.call(e,n):i?i.value=n:t.set(e,n),n},M=function(e,t,n,r){if(n===`a`&&!r)throw TypeError(`Private accessor was defined without a getter`);if(typeof t==`function`?e!==t||!r:!t.has(e))throw TypeError(`Cannot read private member from an object whose class did not declare it`);return n===`m`?r:n===`a`?r.call(e):r?r.value:t.get(e)},N,br=class{constructor(e){N.set(this,void 0),yr(this,N,e,`f`)}addFSCommandHandler(e){M(this,N,`f`).addFSCommandHandler(e)}get readyState(){return M(this,N,`f`)._readyState}get metadata(){return M(this,N,`f`).metadata}get loadedConfig(){return M(this,N,`f`).loadedConfig??null}async reload(){await M(this,N,`f`).reload()}async load(e,t=!1){await M(this,N,`f`).load(e,t)}resume(){M(this,N,`f`).play()}get isPlaying(){return M(this,N,`f`).isPlaying}get volume(){return M(this,N,`f`).volume}set volume(e){M(this,N,`f`).volume=e}get fullscreenEnabled(){return M(this,N,`f`).fullscreenEnabled}get isFullscreen(){return M(this,N,`f`).isFullscreen}setFullscreen(e){M(this,N,`f`).setFullscreen(e)}requestFullscreen(){M(this,N,`f`).enterFullscreen()}exitFullscreen(){M(this,N,`f`).exitFullscreen()}async downloadSwf(){await M(this,N,`f`).downloadSwf()}displayMessage(e){M(this,N,`f`).displayMessage(e)}suspend(){M(this,N,`f`).pause()}get suspended(){return!M(this,N,`f`).isPlaying}set traceObserver(e){M(this,N,`f`).traceObserver=e}get config(){return M(this,N,`f`).config}set config(e){M(this,N,`f`).config=e}callExternalInterface(e,...t){return M(this,N,`f`).callExternalInterface(e,t)}};N=new WeakMap;var P=function(e,t,n,r){if(n===`a`&&!r)throw TypeError(`Private accessor was defined without a getter`);if(typeof t==`function`?e!==t||!r:!t.has(e))throw TypeError(`Cannot read private member from an object whose class did not declare it`);return n===`m`?r:n===`a`?r.call(e):r?r.value:t.get(e)},xr=function(e,t,n,r,i){if(r===`m`)throw TypeError(`Private method is not writable`);if(r===`a`&&!i)throw TypeError(`Private accessor was defined without a setter`);if(typeof t==`function`?e!==t||!i:!t.has(e))throw TypeError(`Cannot write private member to an object whose class did not declare it`);return r===`a`?i.call(e,n):i?i.value=n:t.set(e,n),n},F,Sr,Cr=class e extends HTMLElement{get onFSCommand(){return P(this,Sr,`f`)}set onFSCommand(e){xr(this,Sr,e,`f`)}get readyState(){return P(this,F,`f`)._readyState}get metadata(){return P(this,F,`f`).metadata}constructor(){super(),F.set(this,void 0),Sr.set(this,null),xr(this,F,new ar(this,()=>this.debugPlayerInfo(),e=>{try{Object.defineProperty(this,e,{value:(...t)=>P(this,F,`f`).callExternalInterface(e,t),configurable:!0})}catch(t){console.warn(`Error setting ExternalInterface legacy callback for ${e}`,t)}}),`f`),P(this,F,`f`).addFSCommandHandler((e,t)=>{P(this,Sr,`f`)?.call(this,e,t)})}ruffle(e){if((e??1)===1)return new br(P(this,F,`f`));throw Error(`Version ${e} not supported.`)}get loadedConfig(){return P(this,F,`f`).loadedConfig??null}connectedCallback(){P(this,F,`f`).updateStyles()}static get observedAttributes(){return[`width`,`height`,`align`]}attributeChangedCallback(t,n,r){e.observedAttributes.includes(t)&&P(this,F,`f`).updateStyles()}disconnectedCallback(){P(this,F,`f`).destroy()}async reload(){await P(this,F,`f`).reload()}async load(e,t=!1){await P(this,F,`f`).load(e,t)}play(){P(this,F,`f`).play()}get isPlaying(){return P(this,F,`f`).isPlaying}get volume(){return P(this,F,`f`).volume}set volume(e){P(this,F,`f`).volume=e}get fullscreenEnabled(){return P(this,F,`f`).fullscreenEnabled}get isFullscreen(){return P(this,F,`f`).isFullscreen}setFullscreen(e){P(this,F,`f`).setFullscreen(e)}enterFullscreen(){P(this,F,`f`).enterFullscreen()}exitFullscreen(){P(this,F,`f`).exitFullscreen()}async downloadSwf(){await P(this,F,`f`).downloadSwf()}pause(){P(this,F,`f`).pause()}set traceObserver(e){P(this,F,`f`).traceObserver=e}debugPlayerInfo(){return``}PercentLoaded(){return P(this,F,`f`)._readyState===le.Loaded?100:0}get config(){return P(this,F,`f`).config}set config(e){P(this,F,`f`).config=e}displayMessage(e){P(this,F,`f`).displayMessage(e)}};F=new WeakMap,Sr=new WeakMap;function wr(e,t){if(e){for(let n of e.attributes)if(n.specified){if(n.name===`title`&&n.value===`Adobe Flash Player`)continue;try{t.setAttribute(n.name,n.value)}catch{console.warn(`Unable to set attribute ${n.name} on Ruffle instance`)}}for(let n of Array.from(e.children))t.appendChild(n)}}var Tr=class e extends Cr{connectedCallback(){super.connectedCallback();let e=this.attributes.getNamedItem(`src`);if(e){let t=sr(e.value,e=>this.attributes.getNamedItem(e)?.value??null);this.load(t,!0)}}get nodeName(){return`EMBED`}get src(){return this.attributes.getNamedItem(`src`)?.value}set src(e){if(e){let t=document.createAttribute(`src`);t.value=e,this.attributes.setNamedItem(t)}else this.attributes.removeNamedItem(`src`)}static get observedAttributes(){return[...Cr.observedAttributes,`src`]}attributeChangedCallback(e,t,n){if(super.attributeChangedCallback(e,t,n),this.isConnected&&e===`src`){let e=this.attributes.getNamedItem(`src`);if(e){let t=sr(e.value,e=>this.attributes.getNamedItem(e)?.value??null);this.load(t,!0)}}}static isInterdictable(e){let t=e.getAttribute(`src`),n=e.getAttribute(`type`);return!t||ur(e)?!1:cr(t)?(lr(e,`src`),!1):mn(t,n)}static fromNativeEmbedElement(t){let n=Xn(`ruffle-embed`,e),r=document.createElement(n);return wr(t,r),r}get height(){return this.getAttribute(`height`)||``}set height(e){this.setAttribute(`height`,e)}get width(){return this.getAttribute(`width`)||``}set width(e){this.setAttribute(`width`,e)}get type(){return this.getAttribute(`type`)||``}set type(e){this.setAttribute(`type`,e)}};function Er(e,t,n){t=t.toLowerCase();for(let[n,r]of Object.entries(e))if(n.toLowerCase()===t)return r;return n}function Dr(e){let t={};for(let n of e.children)if(n instanceof HTMLParamElement){let e=n.attributes.getNamedItem(`name`)?.value,r=n.attributes.getNamedItem(`value`)?.value;e&&r&&(t[e]=r)}return t}var Or=class e extends Cr{constructor(){super(...arguments),this.params={}}connectedCallback(){super.connectedCallback(),this.params=Dr(this);let e=null;if(this.attributes.getNamedItem(`data`)?e=this.attributes.getNamedItem(`data`)?.value:this.params.movie&&(e=this.params.movie),e){let t=[`allowNetworking`,`base`,`bgcolor`,`flashvars`],n=sr(e,e=>Er(this.params,e,t.includes(e)?this.getAttribute(e):null));this.load(n,!0)}}debugPlayerInfo(){let e=`Player type: Object
`,t=null;return this.attributes.getNamedItem(`data`)?t=this.attributes.getNamedItem(`data`)?.value:this.params.movie&&(t=this.params.movie),e+=`SWF URL: ${t}\n`,Object.keys(this.params).forEach(t=>{e+=`Param ${t}: ${this.params[t]}\n`}),Object.keys(this.attributes).forEach(t=>{e+=`Attribute ${t}: ${this.attributes.getNamedItem(t)?.value}\n`}),e}get nodeName(){return`OBJECT`}get data(){return this.getAttribute(`data`)}set data(e){if(e){let t=document.createAttribute(`data`);t.value=e,this.attributes.setNamedItem(t)}else this.attributes.removeNamedItem(`data`)}static isInterdictable(t){if(ur(t)||t.getElementsByTagName(`ruffle-object`).length>0||t.getElementsByTagName(`ruffle-embed`).length>0)return!1;let n=t.attributes.getNamedItem(`data`)?.value.toLowerCase(),r=t.attributes.getNamedItem(`type`)?.value??null,i=Dr(t),a;if(n){if(cr(n))return lr(t,`data`),!1;a=n}else if(i&&i.movie){if(cr(i.movie)){let e=t.querySelector(`param[name='movie']`);if(e){lr(e,`value`);let n=e.getAttribute(`value`);n&&t.setAttribute(`data`,n)}return!1}a=i.movie}else return!1;let o=t.attributes.getNamedItem(`classid`)?.value.toLowerCase();return o===`clsid:d27cdb6e-ae6d-11cf-96b8-444553540000`?!Array.from(t.getElementsByTagName(`object`)).some(e.isInterdictable)&&!Array.from(t.getElementsByTagName(`embed`)).some(Tr.isInterdictable):o?!1:mn(a,r)}static fromNativeObjectElement(t){let n=Xn(`ruffle-object`,e),r=document.createElement(n);for(let e of Array.from(t.getElementsByTagName(`embed`)))Tr.isInterdictable(e)&&e.remove();for(let n of Array.from(t.getElementsByTagName(`object`)))e.isInterdictable(n)&&n.remove();return wr(t,r),r}get height(){return this.getAttribute(`height`)||``}set height(e){this.setAttribute(`height`,e)}get width(){return this.getAttribute(`width`)||``}set width(e){this.setAttribute(`width`,e)}get type(){return this.getAttribute(`type`)||``}set type(e){this.setAttribute(`type`,e)}},kr=function(e,t,n,r,i){if(r===`m`)throw TypeError(`Private method is not writable`);if(r===`a`&&!i)throw TypeError(`Private accessor was defined without a setter`);if(typeof t==`function`?e!==t||!i:!t.has(e))throw TypeError(`Cannot write private member to an object whose class did not declare it`);return r===`a`?i.call(e,n):i?i.value=n:t.set(e,n),n},I=function(e,t,n,r){if(n===`a`&&!r)throw TypeError(`Private accessor was defined without a getter`);if(typeof t==`function`?e!==t||!r:!t.has(e))throw TypeError(`Cannot read private member from an object whose class did not declare it`);return n===`m`?r:n===`a`?r.call(e):r?r.value:t.get(e)},Ar,jr,Mr,Nr,Pr,Fr,Ir,Lr,Rr=class{constructor(e){if(Ar.set(this,void 0),jr.set(this,void 0),kr(this,Ar,[],`f`),kr(this,jr,{},`f`),e)for(let t=0;t<e.length;t++)this.install(e[t])}install(e){let t=new zr(e),n=I(this,Ar,`f`).length;I(this,Ar,`f`).push(t),I(this,jr,`f`)[e.type]=t,Object.defineProperty(this,t.type,{configurable:!0,enumerable:!1,value:t}),this[n]=t}item(e){return I(this,Ar,`f`)[e>>>0]}namedItem(e){return I(this,jr,`f`)[e]}get length(){return I(this,Ar,`f`).length}[(Ar=new WeakMap,jr=new WeakMap,Symbol.iterator)](){return I(this,Ar,`f`)[Symbol.iterator]()}get[Symbol.toStringTag](){return`MimeTypeArray`}},zr=class{constructor(e){Mr.set(this,void 0),kr(this,Mr,e,`f`)}get type(){return I(this,Mr,`f`).type}get description(){return I(this,Mr,`f`).description}get suffixes(){return I(this,Mr,`f`).suffixes}get enabledPlugin(){return I(this,Mr,`f`).enabledPlugin}get[(Mr=new WeakMap,Symbol.toStringTag)](){return`MimeType`}},Br=class extends Rr{constructor(e,t,n){super(),Nr.set(this,void 0),Pr.set(this,void 0),Fr.set(this,void 0),kr(this,Nr,e,`f`),kr(this,Pr,t,`f`),kr(this,Fr,n,`f`)}get name(){return I(this,Nr,`f`)}get description(){return I(this,Pr,`f`)}get filename(){return I(this,Fr,`f`)}get[(Nr=new WeakMap,Pr=new WeakMap,Fr=new WeakMap,Symbol.toStringTag)](){return`Plugin`}},Vr=class{constructor(e){Ir.set(this,void 0),Lr.set(this,void 0),kr(this,Ir,[],`f`),kr(this,Lr,{},`f`);for(let t=0;t<e.length;t++)this.install(e[t])}install(e){let t=I(this,Ir,`f`).length;I(this,Ir,`f`).push(e),I(this,Lr,`f`)[e.name]=e,Object.defineProperty(this,e.name,{configurable:!0,enumerable:!1,value:e}),this[t]=e}item(e){return I(this,Ir,`f`)[e>>>0]}namedItem(e){return I(this,Lr,`f`)[e]}refresh(){}[(Ir=new WeakMap,Lr=new WeakMap,Symbol.iterator)](){return I(this,Ir,`f`)[Symbol.iterator]()}get[Symbol.toStringTag](){return`PluginArray`}get length(){return I(this,Ir,`f`).length}},Hr=new Br(`Shockwave Flash`,`Shockwave Flash 32.0 r0`,`ruffle.js`);Hr.install({type:ln,description:`Shockwave Flash`,suffixes:`spl`,enabledPlugin:Hr}),Hr.install({type:cn,description:`Shockwave Flash`,suffixes:`swf`,enabledPlugin:Hr}),Hr.install({type:un,description:`Shockwave Flash`,suffixes:`swf`,enabledPlugin:Hr}),Hr.install({type:dn,description:`Shockwave Flash`,suffixes:`swf`,enabledPlugin:Hr});function Ur(e){if(navigator.plugins.namedItem(`Shockwave Flash`))return;(!(`install`in navigator.plugins)||!navigator.plugins.install)&&(Object.defineProperty(window,"PluginArray",{value:Vr}),Object.defineProperty(navigator,"plugins",{value:new Vr(navigator.plugins),writable:!1})),navigator.plugins.install(e),e.length>0&&(!(`install`in navigator.mimeTypes)||!navigator.mimeTypes.install)&&(Object.defineProperty(window,"MimeTypeArray",{value:Rr}),Object.defineProperty(window,"MimeType",{value:zr}),Object.defineProperty(navigator,"mimeTypes",{value:new Rr(navigator.mimeTypes),writable:!1}));let t=navigator.mimeTypes;for(let n=0;n<e.length;n+=1)t.install(e[n])}function Wr(e){let t=gn?.href??``;return!_n&&`publicPath`in e&&e.publicPath!==null&&e.publicPath!==void 0&&(t=e.publicPath),t!==``&&!t.endsWith(`/`)&&(t+=`/`),t}var Gr=window.RufflePlayer?.config??{},Kr=Wr(Gr)+`ruffle.js`,qr,Jr;function Yr(){return`favorFlash`in Gr&&Gr.favorFlash===!1?!1:(navigator.plugins.namedItem(`Shockwave Flash`)?.filename??`ruffle.js`)!==`ruffle.js`}function Xr(){try{qr??=document.getElementsByTagName(`object`),Jr??=document.getElementsByTagName(`embed`);for(let e of Array.from(qr))if(Or.isInterdictable(e)){let t=Or.fromNativeObjectElement(e);e.replaceWith(t)}for(let e of Array.from(Jr))if(Tr.isInterdictable(e)){let t=Tr.fromNativeEmbedElement(e);e.replaceWith(t)}}catch(e){console.error(`Serious error encountered when polyfilling native Flash elements: ${e}`)}}var Zr,Qr;function $r(){Zr??=document.getElementsByTagName(`iframe`),Qr??=document.getElementsByTagName(`frame`),[Zr,Qr].forEach(e=>{for(let t of e){if(t.dataset.rufflePolyfilled!==void 0)continue;t.dataset.rufflePolyfilled=``;let e=t.contentWindow,n=`Couldn't load Ruffle into ${t.tagName}[${t.src}]: `;try{e.document.readyState===`complete`&&ei(e,n)}catch(e){_n||console.warn(n+e)}t.addEventListener(`load`,()=>{ei(e,n)},!1)}})}async function ei(e,t){await new Promise(e=>{window.setTimeout(()=>{e()},100)});let n;try{if(n=e.document,!n)return}catch(e){_n||console.warn(t+e);return}if(!(!_n&&n.documentElement.dataset.ruffleOptout!==void 0)){if(_n)e.RufflePlayer||={},e.RufflePlayer.config={...Gr,...e.RufflePlayer.config??{}};else if(!e.RufflePlayer){let t=n.createElement(`script`);t.setAttribute(`src`,Kr),t.onload=()=>{e.RufflePlayer={},e.RufflePlayer.config=Gr},n.head.appendChild(t)}}}function ti(){new MutationObserver(function(e){e.some(e=>Array.from(e.addedNodes).some(e=>[`EMBED`,`OBJECT`].includes(e.nodeName)||e instanceof Element&&e.querySelector(`embed, object`)!==null))&&(Xr(),$r())}).observe(document,{childList:!0,subtree:!0})}function ni(){Ur(Hr)}function ri(){Yr()||(Xr(),$r(),ti())}var ii={version:ce.versionNumber+`+`+ce.buildDate.substring(0,10),polyfill(){ri()},pluginPolyfill(){ni()},createPlayer(){let e=Xn(`ruffle-player`,Cr);return document.createElement(e)},options:{}};function ai(e,t={}){let n;window.RufflePlayer instanceof se?n=window.RufflePlayer:(n=new se(window.RufflePlayer),window.RufflePlayer=n),n.sources[e]=ii,ii.options=t,(`polyfills`in n.config?n.config.polyfills:!0)!==!1&&ii.pluginPolyfill()}ai(`local`),v.createRoot(document.getElementById(`root`)).render((0,b.jsx)(_.StrictMode,{children:(0,b.jsx)(ie,{ruffleBaseConfig:{autoplay:_e.On,unmuteOverlay:ye.Hidden,logLevel:be.Warn,letterbox:ve.On,forceScale:!0,forceAlign:!0},allowSampleSwfs:!0,allowUrlLoading:!1})}));