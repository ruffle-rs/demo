const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ruffle_web-wasm_extensions-DXBWZI8q.js","./ruffle-imports-CztXuSei.js","./ruffle_web-DgoJDNFc.js"])))=>i.map(i=>d[i]);
var hf=Object.defineProperty;var vf=(e,n,t)=>n in e?hf(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var Or=(e,n,t)=>vf(e,typeof n!="symbol"?n+"":n,t);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();var yn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function gf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var _u={exports:{}},Wo={},Au={exports:{}},T={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jr=Symbol.for("react.element"),wf=Symbol.for("react.portal"),yf=Symbol.for("react.fragment"),kf=Symbol.for("react.strict_mode"),bf=Symbol.for("react.profiler"),Rf=Symbol.for("react.provider"),Sf=Symbol.for("react.context"),xf=Symbol.for("react.forward_ref"),zf=Symbol.for("react.suspense"),Ef=Symbol.for("react.memo"),jf=Symbol.for("react.lazy"),Gl=Symbol.iterator;function Cf(e){return e===null||typeof e!="object"?null:(e=Gl&&e[Gl]||e["@@iterator"],typeof e=="function"?e:null)}var Du={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Fu=Object.assign,Tu={};function Dt(e,n,t){this.props=e,this.context=n,this.refs=Tu,this.updater=t||Du}Dt.prototype.isReactComponent={};Dt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Dt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ou(){}Ou.prototype=Dt.prototype;function Ya(e,n,t){this.props=e,this.context=n,this.refs=Tu,this.updater=t||Du}var Xa=Ya.prototype=new Ou;Xa.constructor=Ya;Fu(Xa,Dt.prototype);Xa.isPureReactComponent=!0;var Yl=Array.isArray,Lu=Object.prototype.hasOwnProperty,el={current:null},Iu={key:!0,ref:!0,__self:!0,__source:!0};function Mu(e,n,t){var r,o={},i=null,a=null;if(n!=null)for(r in n.ref!==void 0&&(a=n.ref),n.key!==void 0&&(i=""+n.key),n)Lu.call(n,r)&&!Iu.hasOwnProperty(r)&&(o[r]=n[r]);var l=arguments.length-2;if(l===1)o.children=t;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:jr,type:e,key:i,ref:a,props:o,_owner:el.current}}function Pf(e,n){return{$$typeof:jr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function nl(e){return typeof e=="object"&&e!==null&&e.$$typeof===jr}function _f(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Xl=/\/+/g;function ci(e,n){return typeof e=="object"&&e!==null&&e.key!=null?_f(""+e.key):n.toString(36)}function no(e,n,t,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case jr:case wf:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+ci(a,0):r,Yl(o)?(t="",e!=null&&(t=e.replace(Xl,"$&/")+"/"),no(o,n,t,"",function(u){return u})):o!=null&&(nl(o)&&(o=Pf(o,t+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(Xl,"$&/")+"/")+e)),n.push(o)),1;if(a=0,r=r===""?".":r+":",Yl(e))for(var l=0;l<e.length;l++){i=e[l];var s=r+ci(i,l);a+=no(i,n,t,s,o)}else if(s=Cf(e),typeof s=="function")for(e=s.call(e),l=0;!(i=e.next()).done;)i=i.value,s=r+ci(i,l++),a+=no(i,n,t,s,o);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function Lr(e,n,t){if(e==null)return e;var r=[],o=0;return no(e,r,"","",function(i){return n.call(t,i,o++)}),r}function Af(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ve={current:null},to={transition:null},Df={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:to,ReactCurrentOwner:el};function Nu(){throw Error("act(...) is not supported in production builds of React.")}T.Children={map:Lr,forEach:function(e,n,t){Lr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Lr(e,function(){n++}),n},toArray:function(e){return Lr(e,function(n){return n})||[]},only:function(e){if(!nl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};T.Component=Dt;T.Fragment=yf;T.Profiler=bf;T.PureComponent=Ya;T.StrictMode=kf;T.Suspense=zf;T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Df;T.act=Nu;T.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Fu({},e.props),o=e.key,i=e.ref,a=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,a=el.current),n.key!==void 0&&(o=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in n)Lu.call(n,s)&&!Iu.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&l!==void 0?l[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:jr,type:e.type,key:o,ref:i,props:r,_owner:a}};T.createContext=function(e){return e={$$typeof:Sf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Rf,_context:e},e.Consumer=e};T.createElement=Mu;T.createFactory=function(e){var n=Mu.bind(null,e);return n.type=e,n};T.createRef=function(){return{current:null}};T.forwardRef=function(e){return{$$typeof:xf,render:e}};T.isValidElement=nl;T.lazy=function(e){return{$$typeof:jf,_payload:{_status:-1,_result:e},_init:Af}};T.memo=function(e,n){return{$$typeof:Ef,type:e,compare:n===void 0?null:n}};T.startTransition=function(e){var n=to.transition;to.transition={};try{e()}finally{to.transition=n}};T.unstable_act=Nu;T.useCallback=function(e,n){return ve.current.useCallback(e,n)};T.useContext=function(e){return ve.current.useContext(e)};T.useDebugValue=function(){};T.useDeferredValue=function(e){return ve.current.useDeferredValue(e)};T.useEffect=function(e,n){return ve.current.useEffect(e,n)};T.useId=function(){return ve.current.useId()};T.useImperativeHandle=function(e,n,t){return ve.current.useImperativeHandle(e,n,t)};T.useInsertionEffect=function(e,n){return ve.current.useInsertionEffect(e,n)};T.useLayoutEffect=function(e,n){return ve.current.useLayoutEffect(e,n)};T.useMemo=function(e,n){return ve.current.useMemo(e,n)};T.useReducer=function(e,n,t){return ve.current.useReducer(e,n,t)};T.useRef=function(e){return ve.current.useRef(e)};T.useState=function(e){return ve.current.useState(e)};T.useSyncExternalStore=function(e,n,t){return ve.current.useSyncExternalStore(e,n,t)};T.useTransition=function(){return ve.current.useTransition()};T.version="18.3.1";Au.exports=T;var ne=Au.exports;const Qi=gf(ne);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ff=ne,Tf=Symbol.for("react.element"),Of=Symbol.for("react.fragment"),Lf=Object.prototype.hasOwnProperty,If=Ff.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Mf={key:!0,ref:!0,__self:!0,__source:!0};function $u(e,n,t){var r,o={},i=null,a=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(a=n.ref);for(r in n)Lf.call(n,r)&&!Mf.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)o[r]===void 0&&(o[r]=n[r]);return{$$typeof:Tf,type:e,key:i,ref:a,props:o,_owner:If.current}}Wo.Fragment=Of;Wo.jsx=$u;Wo.jsxs=$u;_u.exports=Wo;var j=_u.exports,Ki={},qu={exports:{}},Pe={},Wu={exports:{}},Uu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(_,A){var D=_.length;_.push(A);e:for(;0<D;){var Z=D-1>>>1,re=_[Z];if(0<o(re,A))_[Z]=A,_[D]=re,D=Z;else break e}}function t(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var A=_[0],D=_.pop();if(D!==A){_[0]=D;e:for(var Z=0,re=_.length,Fr=re>>>1;Z<Fr;){var In=2*(Z+1)-1,ui=_[In],Mn=In+1,Tr=_[Mn];if(0>o(ui,D))Mn<re&&0>o(Tr,ui)?(_[Z]=Tr,_[Mn]=D,Z=Mn):(_[Z]=ui,_[In]=D,Z=In);else if(Mn<re&&0>o(Tr,D))_[Z]=Tr,_[Mn]=D,Z=Mn;else break e}}return A}function o(_,A){var D=_.sortIndex-A.sortIndex;return D!==0?D:_.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],p=1,h=null,m=3,g=!1,y=!1,R=!1,L=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(_){for(var A=t(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=_)r(u),A.sortIndex=A.expirationTime,n(s,A);else break;A=t(u)}}function v(_){if(R=!1,f(_),!y)if(t(s)!==null)y=!0,li(x);else{var A=t(u);A!==null&&si(v,A.startTime-_)}}function x(_,A){y=!1,R&&(R=!1,d(E),E=-1),g=!0;var D=m;try{for(f(A),h=t(s);h!==null&&(!(h.expirationTime>A)||_&&!O());){var Z=h.callback;if(typeof Z=="function"){h.callback=null,m=h.priorityLevel;var re=Z(h.expirationTime<=A);A=e.unstable_now(),typeof re=="function"?h.callback=re:h===t(s)&&r(s),f(A)}else r(s);h=t(s)}if(h!==null)var Fr=!0;else{var In=t(u);In!==null&&si(v,In.startTime-A),Fr=!1}return Fr}finally{h=null,m=D,g=!1}}var P=!1,z=null,E=-1,w=5,b=-1;function O(){return!(e.unstable_now()-b<w)}function Se(){if(z!==null){var _=e.unstable_now();b=_;var A=!0;try{A=z(!0,_)}finally{A?Me():(P=!1,z=null)}}else P=!1}var Me;if(typeof c=="function")Me=function(){c(Se)};else if(typeof MessageChannel<"u"){var xe=new MessageChannel,mf=xe.port2;xe.port1.onmessage=Se,Me=function(){mf.postMessage(null)}}else Me=function(){L(Se,0)};function li(_){z=_,P||(P=!0,Me())}function si(_,A){E=L(function(){_(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){y||g||(y=!0,li(x))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(_){switch(m){case 1:case 2:case 3:var A=3;break;default:A=m}var D=m;m=A;try{return _()}finally{m=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,A){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var D=m;m=_;try{return A()}finally{m=D}},e.unstable_scheduleCallback=function(_,A,D){var Z=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?Z+D:Z):D=Z,_){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=D+re,_={id:p++,callback:A,priorityLevel:_,startTime:D,expirationTime:re,sortIndex:-1},D>Z?(_.sortIndex=D,n(u,_),t(s)===null&&_===t(u)&&(R?(d(E),E=-1):R=!0,si(v,D-Z))):(_.sortIndex=re,n(s,_),y||g||(y=!0,li(x))),_},e.unstable_shouldYield=O,e.unstable_wrapCallback=function(_){var A=m;return function(){var D=m;m=A;try{return _.apply(this,arguments)}finally{m=D}}}})(Uu);Wu.exports=Uu;var Nf=Wu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $f=ne,Ce=Nf;function k(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Bu=new Set,lr={};function Gn(e,n){Rt(e,n),Rt(e+"Capture",n)}function Rt(e,n){for(lr[e]=n,e=0;e<n.length;e++)Bu.add(n[e])}var sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ji=Object.prototype.hasOwnProperty,qf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,es={},ns={};function Wf(e){return Ji.call(ns,e)?!0:Ji.call(es,e)?!1:qf.test(e)?ns[e]=!0:(es[e]=!0,!1)}function Uf(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Bf(e,n,t,r){if(n===null||typeof n>"u"||Uf(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ge(e,n,t,r,o,i,a){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=a}var ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ue[e]=new ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ue[n]=new ge(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ue[e]=new ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ue[e]=new ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ue[e]=new ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ue[e]=new ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ue[e]=new ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ue[e]=new ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ue[e]=new ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var tl=/[\-:]([a-z])/g;function rl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(tl,rl);ue[n]=new ge(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(tl,rl);ue[n]=new ge(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(tl,rl);ue[n]=new ge(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ue[e]=new ge(e,1,!1,e.toLowerCase(),null,!1,!1)});ue.xlinkHref=new ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ue[e]=new ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function ol(e,n,t,r){var o=ue.hasOwnProperty(n)?ue[n]:null;(o!==null?o.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Bf(n,t,o,r)&&(t=null),r||o===null?Wf(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):o.mustUseProperty?e[o.propertyName]=t===null?o.type===3?!1:"":t:(n=o.attributeName,r=o.attributeNamespace,t===null?e.removeAttribute(n):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var pn=$f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ir=Symbol.for("react.element"),et=Symbol.for("react.portal"),nt=Symbol.for("react.fragment"),il=Symbol.for("react.strict_mode"),Zi=Symbol.for("react.profiler"),Vu=Symbol.for("react.provider"),Hu=Symbol.for("react.context"),al=Symbol.for("react.forward_ref"),Gi=Symbol.for("react.suspense"),Yi=Symbol.for("react.suspense_list"),ll=Symbol.for("react.memo"),hn=Symbol.for("react.lazy"),Qu=Symbol.for("react.offscreen"),ts=Symbol.iterator;function Ot(e){return e===null||typeof e!="object"?null:(e=ts&&e[ts]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,di;function Ut(e){if(di===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);di=n&&n[1]||""}return`
`+di+e}var fi=!1;function pi(e,n){if(!e||fi)return"";fi=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,l=i.length-1;1<=a&&0<=l&&o[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||o[a]!==i[l]){var s=`
`+o[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{fi=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Ut(e):""}function Vf(e){switch(e.tag){case 5:return Ut(e.type);case 16:return Ut("Lazy");case 13:return Ut("Suspense");case 19:return Ut("SuspenseList");case 0:case 2:case 15:return e=pi(e.type,!1),e;case 11:return e=pi(e.type.render,!1),e;case 1:return e=pi(e.type,!0),e;default:return""}}function Xi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case nt:return"Fragment";case et:return"Portal";case Zi:return"Profiler";case il:return"StrictMode";case Gi:return"Suspense";case Yi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Hu:return(e.displayName||"Context")+".Consumer";case Vu:return(e._context.displayName||"Context")+".Provider";case al:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ll:return n=e.displayName||null,n!==null?n:Xi(e.type)||"Memo";case hn:n=e._payload,e=e._init;try{return Xi(e(n))}catch{}}return null}function Hf(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xi(n);case 8:return n===il?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Dn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ku(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qf(e){var n=Ku(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Mr(e){e._valueTracker||(e._valueTracker=Qf(e))}function Ju(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Ku(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function mo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ea(e,n){var t=n.checked;return Q({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function rs(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Dn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Zu(e,n){n=n.checked,n!=null&&ol(e,"checked",n,!1)}function na(e,n){Zu(e,n);var t=Dn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?ta(e,n.type,t):n.hasOwnProperty("defaultValue")&&ta(e,n.type,Dn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function os(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function ta(e,n,t){(n!=="number"||mo(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Bt=Array.isArray;function pt(e,n,t,r){if(e=e.options,n){n={};for(var o=0;o<t.length;o++)n["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=n.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Dn(t),n=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function ra(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(k(91));return Q({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function is(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(k(92));if(Bt(t)){if(1<t.length)throw Error(k(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Dn(t)}}function Gu(e,n){var t=Dn(n.value),r=Dn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function as(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Yu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function oa(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Yu(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Nr,Xu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,o){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,o)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Nr=Nr||document.createElement("div"),Nr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Nr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function sr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Qt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Kf=["Webkit","ms","Moz","O"];Object.keys(Qt).forEach(function(e){Kf.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Qt[n]=Qt[e]})});function ec(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Qt.hasOwnProperty(e)&&Qt[e]?(""+n).trim():n+"px"}function nc(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,o=ec(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,o):e[t]=o}}var Jf=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ia(e,n){if(n){if(Jf[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(k(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(k(61))}if(n.style!=null&&typeof n.style!="object")throw Error(k(62))}}function aa(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var la=null;function sl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var sa=null,mt=null,ht=null;function ls(e){if(e=_r(e)){if(typeof sa!="function")throw Error(k(280));var n=e.stateNode;n&&(n=Qo(n),sa(e.stateNode,e.type,n))}}function tc(e){mt?ht?ht.push(e):ht=[e]:mt=e}function rc(){if(mt){var e=mt,n=ht;if(ht=mt=null,ls(e),n)for(e=0;e<n.length;e++)ls(n[e])}}function oc(e,n){return e(n)}function ic(){}var mi=!1;function ac(e,n,t){if(mi)return e(n,t);mi=!0;try{return oc(e,n,t)}finally{mi=!1,(mt!==null||ht!==null)&&(ic(),rc())}}function ur(e,n){var t=e.stateNode;if(t===null)return null;var r=Qo(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(k(231,n,typeof t));return t}var ua=!1;if(sn)try{var Lt={};Object.defineProperty(Lt,"passive",{get:function(){ua=!0}}),window.addEventListener("test",Lt,Lt),window.removeEventListener("test",Lt,Lt)}catch{ua=!1}function Zf(e,n,t,r,o,i,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(p){this.onError(p)}}var Kt=!1,ho=null,vo=!1,ca=null,Gf={onError:function(e){Kt=!0,ho=e}};function Yf(e,n,t,r,o,i,a,l,s){Kt=!1,ho=null,Zf.apply(Gf,arguments)}function Xf(e,n,t,r,o,i,a,l,s){if(Yf.apply(this,arguments),Kt){if(Kt){var u=ho;Kt=!1,ho=null}else throw Error(k(198));vo||(vo=!0,ca=u)}}function Yn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function lc(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function ss(e){if(Yn(e)!==e)throw Error(k(188))}function ep(e){var n=e.alternate;if(!n){if(n=Yn(e),n===null)throw Error(k(188));return n!==e?null:e}for(var t=e,r=n;;){var o=t.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){t=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===t)return ss(o),e;if(i===r)return ss(o),n;i=i.sibling}throw Error(k(188))}if(t.return!==r.return)t=o,r=i;else{for(var a=!1,l=o.child;l;){if(l===t){a=!0,t=o,r=i;break}if(l===r){a=!0,r=o,t=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===t){a=!0,t=i,r=o;break}if(l===r){a=!0,r=i,t=o;break}l=l.sibling}if(!a)throw Error(k(189))}}if(t.alternate!==r)throw Error(k(190))}if(t.tag!==3)throw Error(k(188));return t.stateNode.current===t?e:n}function sc(e){return e=ep(e),e!==null?uc(e):null}function uc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=uc(e);if(n!==null)return n;e=e.sibling}return null}var cc=Ce.unstable_scheduleCallback,us=Ce.unstable_cancelCallback,np=Ce.unstable_shouldYield,tp=Ce.unstable_requestPaint,G=Ce.unstable_now,rp=Ce.unstable_getCurrentPriorityLevel,ul=Ce.unstable_ImmediatePriority,dc=Ce.unstable_UserBlockingPriority,go=Ce.unstable_NormalPriority,op=Ce.unstable_LowPriority,fc=Ce.unstable_IdlePriority,Uo=null,Ge=null;function ip(e){if(Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(Uo,e,void 0,(e.current.flags&128)===128)}catch{}}var Ue=Math.clz32?Math.clz32:sp,ap=Math.log,lp=Math.LN2;function sp(e){return e>>>=0,e===0?32:31-(ap(e)/lp|0)|0}var $r=64,qr=4194304;function Vt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function wo(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=t&268435455;if(a!==0){var l=a&~o;l!==0?r=Vt(l):(i&=a,i!==0&&(r=Vt(i)))}else a=t&~o,a!==0?r=Vt(a):i!==0&&(r=Vt(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&o)&&(o=r&-r,i=n&-n,o>=i||o===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Ue(n),o=1<<t,r|=e[t],n&=~o;return r}function up(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cp(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Ue(i),l=1<<a,s=o[a];s===-1?(!(l&t)||l&r)&&(o[a]=up(l,n)):s<=n&&(e.expiredLanes|=l),i&=~l}}function da(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function pc(){var e=$r;return $r<<=1,!($r&4194240)&&($r=64),e}function hi(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Cr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ue(n),e[n]=t}function dp(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var o=31-Ue(t),i=1<<o;n[o]=0,r[o]=-1,e[o]=-1,t&=~i}}function cl(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Ue(t),o=1<<r;o&n|e[r]&n&&(e[r]|=n),t&=~o}}var M=0;function mc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var hc,dl,vc,gc,wc,fa=!1,Wr=[],Rn=null,Sn=null,xn=null,cr=new Map,dr=new Map,gn=[],fp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cs(e,n){switch(e){case"focusin":case"focusout":Rn=null;break;case"dragenter":case"dragleave":Sn=null;break;case"mouseover":case"mouseout":xn=null;break;case"pointerover":case"pointerout":cr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":dr.delete(n.pointerId)}}function It(e,n,t,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},n!==null&&(n=_r(n),n!==null&&dl(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function pp(e,n,t,r,o){switch(n){case"focusin":return Rn=It(Rn,e,n,t,r,o),!0;case"dragenter":return Sn=It(Sn,e,n,t,r,o),!0;case"mouseover":return xn=It(xn,e,n,t,r,o),!0;case"pointerover":var i=o.pointerId;return cr.set(i,It(cr.get(i)||null,e,n,t,r,o)),!0;case"gotpointercapture":return i=o.pointerId,dr.set(i,It(dr.get(i)||null,e,n,t,r,o)),!0}return!1}function yc(e){var n=qn(e.target);if(n!==null){var t=Yn(n);if(t!==null){if(n=t.tag,n===13){if(n=lc(t),n!==null){e.blockedOn=n,wc(e.priority,function(){vc(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ro(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=pa(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);la=r,t.target.dispatchEvent(r),la=null}else return n=_r(t),n!==null&&dl(n),e.blockedOn=t,!1;n.shift()}return!0}function ds(e,n,t){ro(e)&&t.delete(n)}function mp(){fa=!1,Rn!==null&&ro(Rn)&&(Rn=null),Sn!==null&&ro(Sn)&&(Sn=null),xn!==null&&ro(xn)&&(xn=null),cr.forEach(ds),dr.forEach(ds)}function Mt(e,n){e.blockedOn===n&&(e.blockedOn=null,fa||(fa=!0,Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority,mp)))}function fr(e){function n(o){return Mt(o,e)}if(0<Wr.length){Mt(Wr[0],e);for(var t=1;t<Wr.length;t++){var r=Wr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Rn!==null&&Mt(Rn,e),Sn!==null&&Mt(Sn,e),xn!==null&&Mt(xn,e),cr.forEach(n),dr.forEach(n),t=0;t<gn.length;t++)r=gn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<gn.length&&(t=gn[0],t.blockedOn===null);)yc(t),t.blockedOn===null&&gn.shift()}var vt=pn.ReactCurrentBatchConfig,yo=!0;function hp(e,n,t,r){var o=M,i=vt.transition;vt.transition=null;try{M=1,fl(e,n,t,r)}finally{M=o,vt.transition=i}}function vp(e,n,t,r){var o=M,i=vt.transition;vt.transition=null;try{M=4,fl(e,n,t,r)}finally{M=o,vt.transition=i}}function fl(e,n,t,r){if(yo){var o=pa(e,n,t,r);if(o===null)zi(e,n,r,ko,t),cs(e,r);else if(pp(o,e,n,t,r))r.stopPropagation();else if(cs(e,r),n&4&&-1<fp.indexOf(e)){for(;o!==null;){var i=_r(o);if(i!==null&&hc(i),i=pa(e,n,t,r),i===null&&zi(e,n,r,ko,t),i===o)break;o=i}o!==null&&r.stopPropagation()}else zi(e,n,r,null,t)}}var ko=null;function pa(e,n,t,r){if(ko=null,e=sl(r),e=qn(e),e!==null)if(n=Yn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=lc(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return ko=e,null}function kc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(rp()){case ul:return 1;case dc:return 4;case go:case op:return 16;case fc:return 536870912;default:return 16}default:return 16}}var kn=null,pl=null,oo=null;function bc(){if(oo)return oo;var e,n=pl,t=n.length,r,o="value"in kn?kn.value:kn.textContent,i=o.length;for(e=0;e<t&&n[e]===o[e];e++);var a=t-e;for(r=1;r<=a&&n[t-r]===o[i-r];r++);return oo=o.slice(e,1<r?1-r:void 0)}function io(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ur(){return!0}function fs(){return!1}function _e(e){function n(t,r,o,i,a){this._reactName=t,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ur:fs,this.isPropagationStopped=fs,this}return Q(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ur)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ur)},persist:function(){},isPersistent:Ur}),n}var Ft={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ml=_e(Ft),Pr=Q({},Ft,{view:0,detail:0}),gp=_e(Pr),vi,gi,Nt,Bo=Q({},Pr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Nt&&(Nt&&e.type==="mousemove"?(vi=e.screenX-Nt.screenX,gi=e.screenY-Nt.screenY):gi=vi=0,Nt=e),vi)},movementY:function(e){return"movementY"in e?e.movementY:gi}}),ps=_e(Bo),wp=Q({},Bo,{dataTransfer:0}),yp=_e(wp),kp=Q({},Pr,{relatedTarget:0}),wi=_e(kp),bp=Q({},Ft,{animationName:0,elapsedTime:0,pseudoElement:0}),Rp=_e(bp),Sp=Q({},Ft,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xp=_e(Sp),zp=Q({},Ft,{data:0}),ms=_e(zp),Ep={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pp(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Cp[e])?!!n[e]:!1}function hl(){return Pp}var _p=Q({},Pr,{key:function(e){if(e.key){var n=Ep[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=io(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?jp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hl,charCode:function(e){return e.type==="keypress"?io(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?io(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ap=_e(_p),Dp=Q({},Bo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hs=_e(Dp),Fp=Q({},Pr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hl}),Tp=_e(Fp),Op=Q({},Ft,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lp=_e(Op),Ip=Q({},Bo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Mp=_e(Ip),Np=[9,13,27,32],vl=sn&&"CompositionEvent"in window,Jt=null;sn&&"documentMode"in document&&(Jt=document.documentMode);var $p=sn&&"TextEvent"in window&&!Jt,Rc=sn&&(!vl||Jt&&8<Jt&&11>=Jt),vs=" ",gs=!1;function Sc(e,n){switch(e){case"keyup":return Np.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var tt=!1;function qp(e,n){switch(e){case"compositionend":return xc(n);case"keypress":return n.which!==32?null:(gs=!0,vs);case"textInput":return e=n.data,e===vs&&gs?null:e;default:return null}}function Wp(e,n){if(tt)return e==="compositionend"||!vl&&Sc(e,n)?(e=bc(),oo=pl=kn=null,tt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Rc&&n.locale!=="ko"?null:n.data;default:return null}}var Up={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ws(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Up[e.type]:n==="textarea"}function zc(e,n,t,r){tc(r),n=bo(n,"onChange"),0<n.length&&(t=new ml("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Zt=null,pr=null;function Bp(e){Lc(e,0)}function Vo(e){var n=it(e);if(Ju(n))return e}function Vp(e,n){if(e==="change")return n}var Ec=!1;if(sn){var yi;if(sn){var ki="oninput"in document;if(!ki){var ys=document.createElement("div");ys.setAttribute("oninput","return;"),ki=typeof ys.oninput=="function"}yi=ki}else yi=!1;Ec=yi&&(!document.documentMode||9<document.documentMode)}function ks(){Zt&&(Zt.detachEvent("onpropertychange",jc),pr=Zt=null)}function jc(e){if(e.propertyName==="value"&&Vo(pr)){var n=[];zc(n,pr,e,sl(e)),ac(Bp,n)}}function Hp(e,n,t){e==="focusin"?(ks(),Zt=n,pr=t,Zt.attachEvent("onpropertychange",jc)):e==="focusout"&&ks()}function Qp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Vo(pr)}function Kp(e,n){if(e==="click")return Vo(n)}function Jp(e,n){if(e==="input"||e==="change")return Vo(n)}function Zp(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ve=typeof Object.is=="function"?Object.is:Zp;function mr(e,n){if(Ve(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var o=t[r];if(!Ji.call(n,o)||!Ve(e[o],n[o]))return!1}return!0}function bs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Rs(e,n){var t=bs(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=bs(t)}}function Cc(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Cc(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Pc(){for(var e=window,n=mo();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=mo(e.document)}return n}function gl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Gp(e){var n=Pc(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Cc(t.ownerDocument.documentElement,t)){if(r!==null&&gl(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var o=t.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Rs(t,i);var a=Rs(t,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(n=n.createRange(),n.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(a.node,a.offset)):(n.setEnd(a.node,a.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Yp=sn&&"documentMode"in document&&11>=document.documentMode,rt=null,ma=null,Gt=null,ha=!1;function Ss(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ha||rt==null||rt!==mo(r)||(r=rt,"selectionStart"in r&&gl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gt&&mr(Gt,r)||(Gt=r,r=bo(ma,"onSelect"),0<r.length&&(n=new ml("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=rt)))}function Br(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var ot={animationend:Br("Animation","AnimationEnd"),animationiteration:Br("Animation","AnimationIteration"),animationstart:Br("Animation","AnimationStart"),transitionend:Br("Transition","TransitionEnd")},bi={},_c={};sn&&(_c=document.createElement("div").style,"AnimationEvent"in window||(delete ot.animationend.animation,delete ot.animationiteration.animation,delete ot.animationstart.animation),"TransitionEvent"in window||delete ot.transitionend.transition);function Ho(e){if(bi[e])return bi[e];if(!ot[e])return e;var n=ot[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in _c)return bi[e]=n[t];return e}var Ac=Ho("animationend"),Dc=Ho("animationiteration"),Fc=Ho("animationstart"),Tc=Ho("transitionend"),Oc=new Map,xs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tn(e,n){Oc.set(e,n),Gn(n,[e])}for(var Ri=0;Ri<xs.length;Ri++){var Si=xs[Ri],Xp=Si.toLowerCase(),em=Si[0].toUpperCase()+Si.slice(1);Tn(Xp,"on"+em)}Tn(Ac,"onAnimationEnd");Tn(Dc,"onAnimationIteration");Tn(Fc,"onAnimationStart");Tn("dblclick","onDoubleClick");Tn("focusin","onFocus");Tn("focusout","onBlur");Tn(Tc,"onTransitionEnd");Rt("onMouseEnter",["mouseout","mouseover"]);Rt("onMouseLeave",["mouseout","mouseover"]);Rt("onPointerEnter",["pointerout","pointerover"]);Rt("onPointerLeave",["pointerout","pointerover"]);Gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ht="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ht));function zs(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Xf(r,n,void 0,e),e.currentTarget=null}function Lc(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],o=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==i&&o.isPropagationStopped())break e;zs(o,l,u),i=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==i&&o.isPropagationStopped())break e;zs(o,l,u),i=s}}}if(vo)throw e=ca,vo=!1,ca=null,e}function q(e,n){var t=n[ka];t===void 0&&(t=n[ka]=new Set);var r=e+"__bubble";t.has(r)||(Ic(n,e,2,!1),t.add(r))}function xi(e,n,t){var r=0;n&&(r|=4),Ic(t,e,r,n)}var Vr="_reactListening"+Math.random().toString(36).slice(2);function hr(e){if(!e[Vr]){e[Vr]=!0,Bu.forEach(function(t){t!=="selectionchange"&&(nm.has(t)||xi(t,!1,e),xi(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Vr]||(n[Vr]=!0,xi("selectionchange",!1,n))}}function Ic(e,n,t,r){switch(kc(n)){case 1:var o=hp;break;case 4:o=vp;break;default:o=fl}t=o.bind(null,n,t,e),o=void 0,!ua||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(n,t,{capture:!0,passive:o}):e.addEventListener(n,t,!0):o!==void 0?e.addEventListener(n,t,{passive:o}):e.addEventListener(n,t,!1)}function zi(e,n,t,r,o){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;a=a.return}for(;l!==null;){if(a=qn(l),a===null)return;if(s=a.tag,s===5||s===6){r=i=a;continue e}l=l.parentNode}}r=r.return}ac(function(){var u=i,p=sl(t),h=[];e:{var m=Oc.get(e);if(m!==void 0){var g=ml,y=e;switch(e){case"keypress":if(io(t)===0)break e;case"keydown":case"keyup":g=Ap;break;case"focusin":y="focus",g=wi;break;case"focusout":y="blur",g=wi;break;case"beforeblur":case"afterblur":g=wi;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=ps;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=yp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Tp;break;case Ac:case Dc:case Fc:g=Rp;break;case Tc:g=Lp;break;case"scroll":g=gp;break;case"wheel":g=Mp;break;case"copy":case"cut":case"paste":g=xp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=hs}var R=(n&4)!==0,L=!R&&e==="scroll",d=R?m!==null?m+"Capture":null:m;R=[];for(var c=u,f;c!==null;){f=c;var v=f.stateNode;if(f.tag===5&&v!==null&&(f=v,d!==null&&(v=ur(c,d),v!=null&&R.push(vr(c,v,f)))),L)break;c=c.return}0<R.length&&(m=new g(m,y,null,t,p),h.push({event:m,listeners:R}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",m&&t!==la&&(y=t.relatedTarget||t.fromElement)&&(qn(y)||y[un]))break e;if((g||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,g?(y=t.relatedTarget||t.toElement,g=u,y=y?qn(y):null,y!==null&&(L=Yn(y),y!==L||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(R=ps,v="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(R=hs,v="onPointerLeave",d="onPointerEnter",c="pointer"),L=g==null?m:it(g),f=y==null?m:it(y),m=new R(v,c+"leave",g,t,p),m.target=L,m.relatedTarget=f,v=null,qn(p)===u&&(R=new R(d,c+"enter",y,t,p),R.target=f,R.relatedTarget=L,v=R),L=v,g&&y)n:{for(R=g,d=y,c=0,f=R;f;f=Xn(f))c++;for(f=0,v=d;v;v=Xn(v))f++;for(;0<c-f;)R=Xn(R),c--;for(;0<f-c;)d=Xn(d),f--;for(;c--;){if(R===d||d!==null&&R===d.alternate)break n;R=Xn(R),d=Xn(d)}R=null}else R=null;g!==null&&Es(h,m,g,R,!1),y!==null&&L!==null&&Es(h,L,y,R,!0)}}e:{if(m=u?it(u):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var x=Vp;else if(ws(m))if(Ec)x=Jp;else{x=Qp;var P=Hp}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(x=Kp);if(x&&(x=x(e,u))){zc(h,x,t,p);break e}P&&P(e,m,u),e==="focusout"&&(P=m._wrapperState)&&P.controlled&&m.type==="number"&&ta(m,"number",m.value)}switch(P=u?it(u):window,e){case"focusin":(ws(P)||P.contentEditable==="true")&&(rt=P,ma=u,Gt=null);break;case"focusout":Gt=ma=rt=null;break;case"mousedown":ha=!0;break;case"contextmenu":case"mouseup":case"dragend":ha=!1,Ss(h,t,p);break;case"selectionchange":if(Yp)break;case"keydown":case"keyup":Ss(h,t,p)}var z;if(vl)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else tt?Sc(e,t)&&(E="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(E="onCompositionStart");E&&(Rc&&t.locale!=="ko"&&(tt||E!=="onCompositionStart"?E==="onCompositionEnd"&&tt&&(z=bc()):(kn=p,pl="value"in kn?kn.value:kn.textContent,tt=!0)),P=bo(u,E),0<P.length&&(E=new ms(E,e,null,t,p),h.push({event:E,listeners:P}),z?E.data=z:(z=xc(t),z!==null&&(E.data=z)))),(z=$p?qp(e,t):Wp(e,t))&&(u=bo(u,"onBeforeInput"),0<u.length&&(p=new ms("onBeforeInput","beforeinput",null,t,p),h.push({event:p,listeners:u}),p.data=z))}Lc(h,n)})}function vr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function bo(e,n){for(var t=n+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=ur(e,t),i!=null&&r.unshift(vr(e,i,o)),i=ur(e,n),i!=null&&r.push(vr(e,i,o))),e=e.return}return r}function Xn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Es(e,n,t,r,o){for(var i=n._reactName,a=[];t!==null&&t!==r;){var l=t,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,o?(s=ur(t,i),s!=null&&a.unshift(vr(t,s,l))):o||(s=ur(t,i),s!=null&&a.push(vr(t,s,l)))),t=t.return}a.length!==0&&e.push({event:n,listeners:a})}var tm=/\r\n?/g,rm=/\u0000|\uFFFD/g;function js(e){return(typeof e=="string"?e:""+e).replace(tm,`
`).replace(rm,"")}function Hr(e,n,t){if(n=js(n),js(e)!==n&&t)throw Error(k(425))}function Ro(){}var va=null,ga=null;function wa(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ya=typeof setTimeout=="function"?setTimeout:void 0,om=typeof clearTimeout=="function"?clearTimeout:void 0,Cs=typeof Promise=="function"?Promise:void 0,im=typeof queueMicrotask=="function"?queueMicrotask:typeof Cs<"u"?function(e){return Cs.resolve(null).then(e).catch(am)}:ya;function am(e){setTimeout(function(){throw e})}function Ei(e,n){var t=n,r=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(r===0){e.removeChild(o),fr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=o}while(t);fr(n)}function zn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Ps(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Tt=Math.random().toString(36).slice(2),Je="__reactFiber$"+Tt,gr="__reactProps$"+Tt,un="__reactContainer$"+Tt,ka="__reactEvents$"+Tt,lm="__reactListeners$"+Tt,sm="__reactHandles$"+Tt;function qn(e){var n=e[Je];if(n)return n;for(var t=e.parentNode;t;){if(n=t[un]||t[Je]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Ps(e);e!==null;){if(t=e[Je])return t;e=Ps(e)}return n}e=t,t=e.parentNode}return null}function _r(e){return e=e[Je]||e[un],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function it(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Qo(e){return e[gr]||null}var ba=[],at=-1;function On(e){return{current:e}}function W(e){0>at||(e.current=ba[at],ba[at]=null,at--)}function $(e,n){at++,ba[at]=e.current,e.current=n}var Fn={},pe=On(Fn),ke=On(!1),Hn=Fn;function St(e,n){var t=e.type.contextTypes;if(!t)return Fn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in t)o[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=o),o}function be(e){return e=e.childContextTypes,e!=null}function So(){W(ke),W(pe)}function _s(e,n,t){if(pe.current!==Fn)throw Error(k(168));$(pe,n),$(ke,t)}function Mc(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var o in r)if(!(o in n))throw Error(k(108,Hf(e)||"Unknown",o));return Q({},t,r)}function xo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Fn,Hn=pe.current,$(pe,e),$(ke,ke.current),!0}function As(e,n,t){var r=e.stateNode;if(!r)throw Error(k(169));t?(e=Mc(e,n,Hn),r.__reactInternalMemoizedMergedChildContext=e,W(ke),W(pe),$(pe,e)):W(ke),$(ke,t)}var en=null,Ko=!1,ji=!1;function Nc(e){en===null?en=[e]:en.push(e)}function um(e){Ko=!0,Nc(e)}function Ln(){if(!ji&&en!==null){ji=!0;var e=0,n=M;try{var t=en;for(M=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}en=null,Ko=!1}catch(o){throw en!==null&&(en=en.slice(e+1)),cc(ul,Ln),o}finally{M=n,ji=!1}}return null}var lt=[],st=0,zo=null,Eo=0,De=[],Fe=0,Qn=null,nn=1,tn="";function Nn(e,n){lt[st++]=Eo,lt[st++]=zo,zo=e,Eo=n}function $c(e,n,t){De[Fe++]=nn,De[Fe++]=tn,De[Fe++]=Qn,Qn=e;var r=nn;e=tn;var o=32-Ue(r)-1;r&=~(1<<o),t+=1;var i=32-Ue(n)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,nn=1<<32-Ue(n)+o|t<<o|r,tn=i+e}else nn=1<<i|t<<o|r,tn=e}function wl(e){e.return!==null&&(Nn(e,1),$c(e,1,0))}function yl(e){for(;e===zo;)zo=lt[--st],lt[st]=null,Eo=lt[--st],lt[st]=null;for(;e===Qn;)Qn=De[--Fe],De[Fe]=null,tn=De[--Fe],De[Fe]=null,nn=De[--Fe],De[Fe]=null}var je=null,Ee=null,B=!1,We=null;function qc(e,n){var t=Te(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Ds(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,je=e,Ee=zn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,je=e,Ee=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Qn!==null?{id:nn,overflow:tn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Te(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,je=e,Ee=null,!0):!1;default:return!1}}function Ra(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Sa(e){if(B){var n=Ee;if(n){var t=n;if(!Ds(e,n)){if(Ra(e))throw Error(k(418));n=zn(t.nextSibling);var r=je;n&&Ds(e,n)?qc(r,t):(e.flags=e.flags&-4097|2,B=!1,je=e)}}else{if(Ra(e))throw Error(k(418));e.flags=e.flags&-4097|2,B=!1,je=e}}}function Fs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;je=e}function Qr(e){if(e!==je)return!1;if(!B)return Fs(e),B=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!wa(e.type,e.memoizedProps)),n&&(n=Ee)){if(Ra(e))throw Wc(),Error(k(418));for(;n;)qc(e,n),n=zn(n.nextSibling)}if(Fs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ee=zn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ee=null}}else Ee=je?zn(e.stateNode.nextSibling):null;return!0}function Wc(){for(var e=Ee;e;)e=zn(e.nextSibling)}function xt(){Ee=je=null,B=!1}function kl(e){We===null?We=[e]:We.push(e)}var cm=pn.ReactCurrentBatchConfig;function $t(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(k(309));var r=t.stateNode}if(!r)throw Error(k(147,e));var o=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(a){var l=o.refs;a===null?delete l[i]:l[i]=a},n._stringRef=i,n)}if(typeof e!="string")throw Error(k(284));if(!t._owner)throw Error(k(290,e))}return e}function Kr(e,n){throw e=Object.prototype.toString.call(n),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Ts(e){var n=e._init;return n(e._payload)}function Uc(e){function n(d,c){if(e){var f=d.deletions;f===null?(d.deletions=[c],d.flags|=16):f.push(c)}}function t(d,c){if(!e)return null;for(;c!==null;)n(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function o(d,c){return d=Pn(d,c),d.index=0,d.sibling=null,d}function i(d,c,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<c?(d.flags|=2,c):f):(d.flags|=2,c)):(d.flags|=1048576,c)}function a(d){return e&&d.alternate===null&&(d.flags|=2),d}function l(d,c,f,v){return c===null||c.tag!==6?(c=Ti(f,d.mode,v),c.return=d,c):(c=o(c,f),c.return=d,c)}function s(d,c,f,v){var x=f.type;return x===nt?p(d,c,f.props.children,v,f.key):c!==null&&(c.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===hn&&Ts(x)===c.type)?(v=o(c,f.props),v.ref=$t(d,c,f),v.return=d,v):(v=po(f.type,f.key,f.props,null,d.mode,v),v.ref=$t(d,c,f),v.return=d,v)}function u(d,c,f,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=Oi(f,d.mode,v),c.return=d,c):(c=o(c,f.children||[]),c.return=d,c)}function p(d,c,f,v,x){return c===null||c.tag!==7?(c=Vn(f,d.mode,v,x),c.return=d,c):(c=o(c,f),c.return=d,c)}function h(d,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Ti(""+c,d.mode,f),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Ir:return f=po(c.type,c.key,c.props,null,d.mode,f),f.ref=$t(d,null,c),f.return=d,f;case et:return c=Oi(c,d.mode,f),c.return=d,c;case hn:var v=c._init;return h(d,v(c._payload),f)}if(Bt(c)||Ot(c))return c=Vn(c,d.mode,f,null),c.return=d,c;Kr(d,c)}return null}function m(d,c,f,v){var x=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return x!==null?null:l(d,c,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ir:return f.key===x?s(d,c,f,v):null;case et:return f.key===x?u(d,c,f,v):null;case hn:return x=f._init,m(d,c,x(f._payload),v)}if(Bt(f)||Ot(f))return x!==null?null:p(d,c,f,v,null);Kr(d,f)}return null}function g(d,c,f,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return d=d.get(f)||null,l(c,d,""+v,x);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ir:return d=d.get(v.key===null?f:v.key)||null,s(c,d,v,x);case et:return d=d.get(v.key===null?f:v.key)||null,u(c,d,v,x);case hn:var P=v._init;return g(d,c,f,P(v._payload),x)}if(Bt(v)||Ot(v))return d=d.get(f)||null,p(c,d,v,x,null);Kr(c,v)}return null}function y(d,c,f,v){for(var x=null,P=null,z=c,E=c=0,w=null;z!==null&&E<f.length;E++){z.index>E?(w=z,z=null):w=z.sibling;var b=m(d,z,f[E],v);if(b===null){z===null&&(z=w);break}e&&z&&b.alternate===null&&n(d,z),c=i(b,c,E),P===null?x=b:P.sibling=b,P=b,z=w}if(E===f.length)return t(d,z),B&&Nn(d,E),x;if(z===null){for(;E<f.length;E++)z=h(d,f[E],v),z!==null&&(c=i(z,c,E),P===null?x=z:P.sibling=z,P=z);return B&&Nn(d,E),x}for(z=r(d,z);E<f.length;E++)w=g(z,d,E,f[E],v),w!==null&&(e&&w.alternate!==null&&z.delete(w.key===null?E:w.key),c=i(w,c,E),P===null?x=w:P.sibling=w,P=w);return e&&z.forEach(function(O){return n(d,O)}),B&&Nn(d,E),x}function R(d,c,f,v){var x=Ot(f);if(typeof x!="function")throw Error(k(150));if(f=x.call(f),f==null)throw Error(k(151));for(var P=x=null,z=c,E=c=0,w=null,b=f.next();z!==null&&!b.done;E++,b=f.next()){z.index>E?(w=z,z=null):w=z.sibling;var O=m(d,z,b.value,v);if(O===null){z===null&&(z=w);break}e&&z&&O.alternate===null&&n(d,z),c=i(O,c,E),P===null?x=O:P.sibling=O,P=O,z=w}if(b.done)return t(d,z),B&&Nn(d,E),x;if(z===null){for(;!b.done;E++,b=f.next())b=h(d,b.value,v),b!==null&&(c=i(b,c,E),P===null?x=b:P.sibling=b,P=b);return B&&Nn(d,E),x}for(z=r(d,z);!b.done;E++,b=f.next())b=g(z,d,E,b.value,v),b!==null&&(e&&b.alternate!==null&&z.delete(b.key===null?E:b.key),c=i(b,c,E),P===null?x=b:P.sibling=b,P=b);return e&&z.forEach(function(Se){return n(d,Se)}),B&&Nn(d,E),x}function L(d,c,f,v){if(typeof f=="object"&&f!==null&&f.type===nt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Ir:e:{for(var x=f.key,P=c;P!==null;){if(P.key===x){if(x=f.type,x===nt){if(P.tag===7){t(d,P.sibling),c=o(P,f.props.children),c.return=d,d=c;break e}}else if(P.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===hn&&Ts(x)===P.type){t(d,P.sibling),c=o(P,f.props),c.ref=$t(d,P,f),c.return=d,d=c;break e}t(d,P);break}else n(d,P);P=P.sibling}f.type===nt?(c=Vn(f.props.children,d.mode,v,f.key),c.return=d,d=c):(v=po(f.type,f.key,f.props,null,d.mode,v),v.ref=$t(d,c,f),v.return=d,d=v)}return a(d);case et:e:{for(P=f.key;c!==null;){if(c.key===P)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){t(d,c.sibling),c=o(c,f.children||[]),c.return=d,d=c;break e}else{t(d,c);break}else n(d,c);c=c.sibling}c=Oi(f,d.mode,v),c.return=d,d=c}return a(d);case hn:return P=f._init,L(d,c,P(f._payload),v)}if(Bt(f))return y(d,c,f,v);if(Ot(f))return R(d,c,f,v);Kr(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(t(d,c.sibling),c=o(c,f),c.return=d,d=c):(t(d,c),c=Ti(f,d.mode,v),c.return=d,d=c),a(d)):t(d,c)}return L}var zt=Uc(!0),Bc=Uc(!1),jo=On(null),Co=null,ut=null,bl=null;function Rl(){bl=ut=Co=null}function Sl(e){var n=jo.current;W(jo),e._currentValue=n}function xa(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function gt(e,n){Co=e,bl=ut=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(ye=!0),e.firstContext=null)}function Le(e){var n=e._currentValue;if(bl!==e)if(e={context:e,memoizedValue:n,next:null},ut===null){if(Co===null)throw Error(k(308));ut=e,Co.dependencies={lanes:0,firstContext:e}}else ut=ut.next=e;return n}var Wn=null;function xl(e){Wn===null?Wn=[e]:Wn.push(e)}function Vc(e,n,t,r){var o=n.interleaved;return o===null?(t.next=t,xl(n)):(t.next=o.next,o.next=t),n.interleaved=t,cn(e,r)}function cn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var vn=!1;function zl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function rn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function En(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var o=r.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),r.pending=n,cn(e,t)}return o=r.interleaved,o===null?(n.next=n,xl(r)):(n.next=o.next,o.next=n),r.interleaved=n,cn(e,t)}function ao(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,cl(e,t)}}function Os(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var o=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?o=i=a:i=i.next=a,t=t.next}while(t!==null);i===null?o=i=n:i=i.next=n}else o=i=n;t={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Po(e,n,t,r){var o=e.updateQueue;vn=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?i=u:a.next=u,a=s;var p=e.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==a&&(l===null?p.firstBaseUpdate=u:l.next=u,p.lastBaseUpdate=s))}if(i!==null){var h=o.baseState;a=0,p=u=s=null,l=i;do{var m=l.lane,g=l.eventTime;if((r&m)===m){p!==null&&(p=p.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,R=l;switch(m=n,g=t,R.tag){case 1:if(y=R.payload,typeof y=="function"){h=y.call(g,h,m);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=R.payload,m=typeof y=="function"?y.call(g,h,m):y,m==null)break e;h=Q({},h,m);break e;case 2:vn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[l]:m.push(l))}else g={eventTime:g,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(u=p=g,s=h):p=p.next=g,a|=m;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;m=l,l=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(p===null&&(s=h),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=p,n=o.shared.interleaved,n!==null){o=n;do a|=o.lane,o=o.next;while(o!==n)}else i===null&&(o.shared.lanes=0);Jn|=a,e.lanes=a,e.memoizedState=h}}function Ls(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],o=r.callback;if(o!==null){if(r.callback=null,r=t,typeof o!="function")throw Error(k(191,o));o.call(r)}}}var Ar={},Ye=On(Ar),wr=On(Ar),yr=On(Ar);function Un(e){if(e===Ar)throw Error(k(174));return e}function El(e,n){switch($(yr,n),$(wr,e),$(Ye,Ar),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:oa(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=oa(n,e)}W(Ye),$(Ye,n)}function Et(){W(Ye),W(wr),W(yr)}function Qc(e){Un(yr.current);var n=Un(Ye.current),t=oa(n,e.type);n!==t&&($(wr,e),$(Ye,t))}function jl(e){wr.current===e&&(W(Ye),W(wr))}var V=On(0);function _o(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ci=[];function Cl(){for(var e=0;e<Ci.length;e++)Ci[e]._workInProgressVersionPrimary=null;Ci.length=0}var lo=pn.ReactCurrentDispatcher,Pi=pn.ReactCurrentBatchConfig,Kn=0,H=null,ee=null,oe=null,Ao=!1,Yt=!1,kr=0,dm=0;function ce(){throw Error(k(321))}function Pl(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Ve(e[t],n[t]))return!1;return!0}function _l(e,n,t,r,o,i){if(Kn=i,H=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,lo.current=e===null||e.memoizedState===null?hm:vm,e=t(r,o),Yt){i=0;do{if(Yt=!1,kr=0,25<=i)throw Error(k(301));i+=1,oe=ee=null,n.updateQueue=null,lo.current=gm,e=t(r,o)}while(Yt)}if(lo.current=Do,n=ee!==null&&ee.next!==null,Kn=0,oe=ee=H=null,Ao=!1,n)throw Error(k(300));return e}function Al(){var e=kr!==0;return kr=0,e}function Ke(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oe===null?H.memoizedState=oe=e:oe=oe.next=e,oe}function Ie(){if(ee===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var n=oe===null?H.memoizedState:oe.next;if(n!==null)oe=n,ee=e;else{if(e===null)throw Error(k(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},oe===null?H.memoizedState=oe=e:oe=oe.next=e}return oe}function br(e,n){return typeof n=="function"?n(e):n}function _i(e){var n=Ie(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var r=ee,o=r.baseQueue,i=t.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,t.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=a=null,s=null,u=i;do{var p=u.lane;if((Kn&p)===p)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=h,a=r):s=s.next=h,H.lanes|=p,Jn|=p}u=u.next}while(u!==null&&u!==i);s===null?a=r:s.next=l,Ve(r,n.memoizedState)||(ye=!0),n.memoizedState=r,n.baseState=a,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){o=e;do i=o.lane,H.lanes|=i,Jn|=i,o=o.next;while(o!==e)}else o===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Ai(e){var n=Ie(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var r=t.dispatch,o=t.pending,i=n.memoizedState;if(o!==null){t.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);Ve(i,n.memoizedState)||(ye=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function Kc(){}function Jc(e,n){var t=H,r=Ie(),o=n(),i=!Ve(r.memoizedState,o);if(i&&(r.memoizedState=o,ye=!0),r=r.queue,Dl(Yc.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||oe!==null&&oe.memoizedState.tag&1){if(t.flags|=2048,Rr(9,Gc.bind(null,t,r,o,n),void 0,null),ie===null)throw Error(k(349));Kn&30||Zc(t,n,o)}return o}function Zc(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=H.updateQueue,n===null?(n={lastEffect:null,stores:null},H.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Gc(e,n,t,r){n.value=t,n.getSnapshot=r,Xc(n)&&ed(e)}function Yc(e,n,t){return t(function(){Xc(n)&&ed(e)})}function Xc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Ve(e,t)}catch{return!0}}function ed(e){var n=cn(e,1);n!==null&&Be(n,e,1,-1)}function Is(e){var n=Ke();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:br,lastRenderedState:e},n.queue=e,e=e.dispatch=mm.bind(null,H,e),[n.memoizedState,e]}function Rr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=H.updateQueue,n===null?(n={lastEffect:null,stores:null},H.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function nd(){return Ie().memoizedState}function so(e,n,t,r){var o=Ke();H.flags|=e,o.memoizedState=Rr(1|n,t,void 0,r===void 0?null:r)}function Jo(e,n,t,r){var o=Ie();r=r===void 0?null:r;var i=void 0;if(ee!==null){var a=ee.memoizedState;if(i=a.destroy,r!==null&&Pl(r,a.deps)){o.memoizedState=Rr(n,t,i,r);return}}H.flags|=e,o.memoizedState=Rr(1|n,t,i,r)}function Ms(e,n){return so(8390656,8,e,n)}function Dl(e,n){return Jo(2048,8,e,n)}function td(e,n){return Jo(4,2,e,n)}function rd(e,n){return Jo(4,4,e,n)}function od(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function id(e,n,t){return t=t!=null?t.concat([e]):null,Jo(4,4,od.bind(null,n,e),t)}function Fl(){}function ad(e,n){var t=Ie();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Pl(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function ld(e,n){var t=Ie();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Pl(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function sd(e,n,t){return Kn&21?(Ve(t,n)||(t=pc(),H.lanes|=t,Jn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,ye=!0),e.memoizedState=t)}function fm(e,n){var t=M;M=t!==0&&4>t?t:4,e(!0);var r=Pi.transition;Pi.transition={};try{e(!1),n()}finally{M=t,Pi.transition=r}}function ud(){return Ie().memoizedState}function pm(e,n,t){var r=Cn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},cd(e))dd(n,t);else if(t=Vc(e,n,t,r),t!==null){var o=he();Be(t,e,r,o),fd(t,n,r)}}function mm(e,n,t){var r=Cn(e),o={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(cd(e))dd(n,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var a=n.lastRenderedState,l=i(a,t);if(o.hasEagerState=!0,o.eagerState=l,Ve(l,a)){var s=n.interleaved;s===null?(o.next=o,xl(n)):(o.next=s.next,s.next=o),n.interleaved=o;return}}catch{}finally{}t=Vc(e,n,o,r),t!==null&&(o=he(),Be(t,e,r,o),fd(t,n,r))}}function cd(e){var n=e.alternate;return e===H||n!==null&&n===H}function dd(e,n){Yt=Ao=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function fd(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,cl(e,t)}}var Do={readContext:Le,useCallback:ce,useContext:ce,useEffect:ce,useImperativeHandle:ce,useInsertionEffect:ce,useLayoutEffect:ce,useMemo:ce,useReducer:ce,useRef:ce,useState:ce,useDebugValue:ce,useDeferredValue:ce,useTransition:ce,useMutableSource:ce,useSyncExternalStore:ce,useId:ce,unstable_isNewReconciler:!1},hm={readContext:Le,useCallback:function(e,n){return Ke().memoizedState=[e,n===void 0?null:n],e},useContext:Le,useEffect:Ms,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,so(4194308,4,od.bind(null,n,e),t)},useLayoutEffect:function(e,n){return so(4194308,4,e,n)},useInsertionEffect:function(e,n){return so(4,2,e,n)},useMemo:function(e,n){var t=Ke();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Ke();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=pm.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var n=Ke();return e={current:e},n.memoizedState=e},useState:Is,useDebugValue:Fl,useDeferredValue:function(e){return Ke().memoizedState=e},useTransition:function(){var e=Is(!1),n=e[0];return e=fm.bind(null,e[1]),Ke().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=H,o=Ke();if(B){if(t===void 0)throw Error(k(407));t=t()}else{if(t=n(),ie===null)throw Error(k(349));Kn&30||Zc(r,n,t)}o.memoizedState=t;var i={value:t,getSnapshot:n};return o.queue=i,Ms(Yc.bind(null,r,i,e),[e]),r.flags|=2048,Rr(9,Gc.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=Ke(),n=ie.identifierPrefix;if(B){var t=tn,r=nn;t=(r&~(1<<32-Ue(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=kr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=dm++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},vm={readContext:Le,useCallback:ad,useContext:Le,useEffect:Dl,useImperativeHandle:id,useInsertionEffect:td,useLayoutEffect:rd,useMemo:ld,useReducer:_i,useRef:nd,useState:function(){return _i(br)},useDebugValue:Fl,useDeferredValue:function(e){var n=Ie();return sd(n,ee.memoizedState,e)},useTransition:function(){var e=_i(br)[0],n=Ie().memoizedState;return[e,n]},useMutableSource:Kc,useSyncExternalStore:Jc,useId:ud,unstable_isNewReconciler:!1},gm={readContext:Le,useCallback:ad,useContext:Le,useEffect:Dl,useImperativeHandle:id,useInsertionEffect:td,useLayoutEffect:rd,useMemo:ld,useReducer:Ai,useRef:nd,useState:function(){return Ai(br)},useDebugValue:Fl,useDeferredValue:function(e){var n=Ie();return ee===null?n.memoizedState=e:sd(n,ee.memoizedState,e)},useTransition:function(){var e=Ai(br)[0],n=Ie().memoizedState;return[e,n]},useMutableSource:Kc,useSyncExternalStore:Jc,useId:ud,unstable_isNewReconciler:!1};function $e(e,n){if(e&&e.defaultProps){n=Q({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function za(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:Q({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Zo={isMounted:function(e){return(e=e._reactInternals)?Yn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=he(),o=Cn(e),i=rn(r,o);i.payload=n,t!=null&&(i.callback=t),n=En(e,i,o),n!==null&&(Be(n,e,o,r),ao(n,e,o))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=he(),o=Cn(e),i=rn(r,o);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=En(e,i,o),n!==null&&(Be(n,e,o,r),ao(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=he(),r=Cn(e),o=rn(t,r);o.tag=2,n!=null&&(o.callback=n),n=En(e,o,r),n!==null&&(Be(n,e,r,t),ao(n,e,r))}};function Ns(e,n,t,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):n.prototype&&n.prototype.isPureReactComponent?!mr(t,r)||!mr(o,i):!0}function pd(e,n,t){var r=!1,o=Fn,i=n.contextType;return typeof i=="object"&&i!==null?i=Le(i):(o=be(n)?Hn:pe.current,r=n.contextTypes,i=(r=r!=null)?St(e,o):Fn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Zo,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),n}function $s(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Zo.enqueueReplaceState(n,n.state,null)}function Ea(e,n,t,r){var o=e.stateNode;o.props=t,o.state=e.memoizedState,o.refs={},zl(e);var i=n.contextType;typeof i=="object"&&i!==null?o.context=Le(i):(i=be(n)?Hn:pe.current,o.context=St(e,i)),o.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(za(e,n,i,t),o.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(n=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),n!==o.state&&Zo.enqueueReplaceState(o,o.state,null),Po(e,t,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function jt(e,n){try{var t="",r=n;do t+=Vf(r),r=r.return;while(r);var o=t}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:o,digest:null}}function Di(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function ja(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var wm=typeof WeakMap=="function"?WeakMap:Map;function md(e,n,t){t=rn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){To||(To=!0,Ia=r),ja(e,n)},t}function hd(e,n,t){t=rn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=n.value;t.payload=function(){return r(o)},t.callback=function(){ja(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){ja(e,n),typeof r!="function"&&(jn===null?jn=new Set([this]):jn.add(this));var a=n.stack;this.componentDidCatch(n.value,{componentStack:a!==null?a:""})}),t}function qs(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new wm;var o=new Set;r.set(n,o)}else o=r.get(n),o===void 0&&(o=new Set,r.set(n,o));o.has(t)||(o.add(t),e=Dm.bind(null,e,n,t),n.then(e,e))}function Ws(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Us(e,n,t,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=rn(-1,1),n.tag=2,En(t,n,1))),t.lanes|=1),e)}var ym=pn.ReactCurrentOwner,ye=!1;function me(e,n,t,r){n.child=e===null?Bc(n,null,t,r):zt(n,e.child,t,r)}function Bs(e,n,t,r,o){t=t.render;var i=n.ref;return gt(n,o),r=_l(e,n,t,r,i,o),t=Al(),e!==null&&!ye?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,dn(e,n,o)):(B&&t&&wl(n),n.flags|=1,me(e,n,r,o),n.child)}function Vs(e,n,t,r,o){if(e===null){var i=t.type;return typeof i=="function"&&!ql(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,vd(e,n,i,r,o)):(e=po(t.type,null,r,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(t=t.compare,t=t!==null?t:mr,t(a,r)&&e.ref===n.ref)return dn(e,n,o)}return n.flags|=1,e=Pn(i,r),e.ref=n.ref,e.return=n,n.child=e}function vd(e,n,t,r,o){if(e!==null){var i=e.memoizedProps;if(mr(i,r)&&e.ref===n.ref)if(ye=!1,n.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(ye=!0);else return n.lanes=e.lanes,dn(e,n,o)}return Ca(e,n,t,r,o)}function gd(e,n,t){var r=n.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},$(dt,ze),ze|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,$(dt,ze),ze|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,$(dt,ze),ze|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,$(dt,ze),ze|=r;return me(e,n,o,t),n.child}function wd(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Ca(e,n,t,r,o){var i=be(t)?Hn:pe.current;return i=St(n,i),gt(n,o),t=_l(e,n,t,r,i,o),r=Al(),e!==null&&!ye?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,dn(e,n,o)):(B&&r&&wl(n),n.flags|=1,me(e,n,t,o),n.child)}function Hs(e,n,t,r,o){if(be(t)){var i=!0;xo(n)}else i=!1;if(gt(n,o),n.stateNode===null)uo(e,n),pd(n,t,r),Ea(n,t,r,o),r=!0;else if(e===null){var a=n.stateNode,l=n.memoizedProps;a.props=l;var s=a.context,u=t.contextType;typeof u=="object"&&u!==null?u=Le(u):(u=be(t)?Hn:pe.current,u=St(n,u));var p=t.getDerivedStateFromProps,h=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&$s(n,a,r,u),vn=!1;var m=n.memoizedState;a.state=m,Po(n,r,a,o),s=n.memoizedState,l!==r||m!==s||ke.current||vn?(typeof p=="function"&&(za(n,t,p,r),s=n.memoizedState),(l=vn||Ns(n,t,l,r,m,s,u))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{a=n.stateNode,Hc(e,n),l=n.memoizedProps,u=n.type===n.elementType?l:$e(n.type,l),a.props=u,h=n.pendingProps,m=a.context,s=t.contextType,typeof s=="object"&&s!==null?s=Le(s):(s=be(t)?Hn:pe.current,s=St(n,s));var g=t.getDerivedStateFromProps;(p=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==h||m!==s)&&$s(n,a,r,s),vn=!1,m=n.memoizedState,a.state=m,Po(n,r,a,o);var y=n.memoizedState;l!==h||m!==y||ke.current||vn?(typeof g=="function"&&(za(n,t,g,r),y=n.memoizedState),(u=vn||Ns(n,t,u,r,m,y,s)||!1)?(p||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,y,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,y,s)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=y),a.props=r,a.state=y,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),r=!1)}return Pa(e,n,t,r,i,o)}function Pa(e,n,t,r,o,i){wd(e,n);var a=(n.flags&128)!==0;if(!r&&!a)return o&&As(n,t,!1),dn(e,n,i);r=n.stateNode,ym.current=n;var l=a&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&a?(n.child=zt(n,e.child,null,i),n.child=zt(n,null,l,i)):me(e,n,l,i),n.memoizedState=r.state,o&&As(n,t,!0),n.child}function yd(e){var n=e.stateNode;n.pendingContext?_s(e,n.pendingContext,n.pendingContext!==n.context):n.context&&_s(e,n.context,!1),El(e,n.containerInfo)}function Qs(e,n,t,r,o){return xt(),kl(o),n.flags|=256,me(e,n,t,r),n.child}var _a={dehydrated:null,treeContext:null,retryLane:0};function Aa(e){return{baseLanes:e,cachePool:null,transitions:null}}function kd(e,n,t){var r=n.pendingProps,o=V.current,i=!1,a=(n.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),$(V,o&1),e===null)return Sa(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(a=r.children,e=r.fallback,i?(r=n.mode,i=n.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Xo(a,r,0,null),e=Vn(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=Aa(t),n.memoizedState=_a,e):Tl(n,a));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return km(e,n,a,r,l,o,t);if(i){i=r.fallback,a=n.mode,o=e.child,l=o.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&n.child!==o?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=Pn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=Pn(l,i):(i=Vn(i,a,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,a=e.child.memoizedState,a=a===null?Aa(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~t,n.memoizedState=_a,r}return i=e.child,e=i.sibling,r=Pn(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Tl(e,n){return n=Xo({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Jr(e,n,t,r){return r!==null&&kl(r),zt(n,e.child,null,t),e=Tl(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function km(e,n,t,r,o,i,a){if(t)return n.flags&256?(n.flags&=-257,r=Di(Error(k(422))),Jr(e,n,a,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,o=n.mode,r=Xo({mode:"visible",children:r.children},o,0,null),i=Vn(i,o,a,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&zt(n,e.child,null,a),n.child.memoizedState=Aa(a),n.memoizedState=_a,i);if(!(n.mode&1))return Jr(e,n,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(k(419)),r=Di(i,r,void 0),Jr(e,n,a,r)}if(l=(a&e.childLanes)!==0,ye||l){if(r=ie,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,cn(e,o),Be(r,e,o,-1))}return $l(),r=Di(Error(k(421))),Jr(e,n,a,r)}return o.data==="$?"?(n.flags|=128,n.child=e.child,n=Fm.bind(null,e),o._reactRetry=n,null):(e=i.treeContext,Ee=zn(o.nextSibling),je=n,B=!0,We=null,e!==null&&(De[Fe++]=nn,De[Fe++]=tn,De[Fe++]=Qn,nn=e.id,tn=e.overflow,Qn=n),n=Tl(n,r.children),n.flags|=4096,n)}function Ks(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),xa(e.return,n,t)}function Fi(e,n,t,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:o}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=o)}function bd(e,n,t){var r=n.pendingProps,o=r.revealOrder,i=r.tail;if(me(e,n,r.children,t),r=V.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ks(e,t,n);else if(e.tag===19)Ks(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if($(V,r),!(n.mode&1))n.memoizedState=null;else switch(o){case"forwards":for(t=n.child,o=null;t!==null;)e=t.alternate,e!==null&&_o(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=n.child,n.child=null):(o=t.sibling,t.sibling=null),Fi(n,!1,o,t,i);break;case"backwards":for(t=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&_o(e)===null){n.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}Fi(n,!0,t,null,i);break;case"together":Fi(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function uo(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function dn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Jn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(k(153));if(n.child!==null){for(e=n.child,t=Pn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Pn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function bm(e,n,t){switch(n.tag){case 3:yd(n),xt();break;case 5:Qc(n);break;case 1:be(n.type)&&xo(n);break;case 4:El(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,o=n.memoizedProps.value;$(jo,r._currentValue),r._currentValue=o;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?($(V,V.current&1),n.flags|=128,null):t&n.child.childLanes?kd(e,n,t):($(V,V.current&1),e=dn(e,n,t),e!==null?e.sibling:null);$(V,V.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return bd(e,n,t);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),$(V,V.current),r)break;return null;case 22:case 23:return n.lanes=0,gd(e,n,t)}return dn(e,n,t)}var Rd,Da,Sd,xd;Rd=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Da=function(){};Sd=function(e,n,t,r){var o=e.memoizedProps;if(o!==r){e=n.stateNode,Un(Ye.current);var i=null;switch(t){case"input":o=ea(e,o),r=ea(e,r),i=[];break;case"select":o=Q({},o,{value:void 0}),r=Q({},r,{value:void 0}),i=[];break;case"textarea":o=ra(e,o),r=ra(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ro)}ia(t,r);var a;t=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(a in l)l.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(lr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(l=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(t||(t={}),t[a]=s[a])}else t||(i||(i=[]),i.push(u,t)),t=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(lr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&q("scroll",e),i||l===s||(i=[])):(i=i||[]).push(u,s))}t&&(i=i||[]).push("style",t);var u=i;(n.updateQueue=u)&&(n.flags|=4)}};xd=function(e,n,t,r){t!==r&&(n.flags|=4)};function qt(e,n){if(!B)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function de(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Rm(e,n,t){var r=n.pendingProps;switch(yl(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(n),null;case 1:return be(n.type)&&So(),de(n),null;case 3:return r=n.stateNode,Et(),W(ke),W(pe),Cl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Qr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,We!==null&&($a(We),We=null))),Da(e,n),de(n),null;case 5:jl(n);var o=Un(yr.current);if(t=n.type,e!==null&&n.stateNode!=null)Sd(e,n,t,r,o),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(k(166));return de(n),null}if(e=Un(Ye.current),Qr(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[Je]=n,r[gr]=i,e=(n.mode&1)!==0,t){case"dialog":q("cancel",r),q("close",r);break;case"iframe":case"object":case"embed":q("load",r);break;case"video":case"audio":for(o=0;o<Ht.length;o++)q(Ht[o],r);break;case"source":q("error",r);break;case"img":case"image":case"link":q("error",r),q("load",r);break;case"details":q("toggle",r);break;case"input":rs(r,i),q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},q("invalid",r);break;case"textarea":is(r,i),q("invalid",r)}ia(t,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Hr(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Hr(r.textContent,l,e),o=["children",""+l]):lr.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&q("scroll",r)}switch(t){case"input":Mr(r),os(r,i,!0);break;case"textarea":Mr(r),as(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ro)}r=o,n.updateQueue=r,r!==null&&(n.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Yu(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(t,{is:r.is}):(e=a.createElement(t),t==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,t),e[Je]=n,e[gr]=r,Rd(e,n,!1,!1),n.stateNode=e;e:{switch(a=aa(t,r),t){case"dialog":q("cancel",e),q("close",e),o=r;break;case"iframe":case"object":case"embed":q("load",e),o=r;break;case"video":case"audio":for(o=0;o<Ht.length;o++)q(Ht[o],e);o=r;break;case"source":q("error",e),o=r;break;case"img":case"image":case"link":q("error",e),q("load",e),o=r;break;case"details":q("toggle",e),o=r;break;case"input":rs(e,r),o=ea(e,r),q("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Q({},r,{value:void 0}),q("invalid",e);break;case"textarea":is(e,r),o=ra(e,r),q("invalid",e);break;default:o=r}ia(t,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="style"?nc(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Xu(e,s)):i==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&sr(e,s):typeof s=="number"&&sr(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(lr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&q("scroll",e):s!=null&&ol(e,i,s,a))}switch(t){case"input":Mr(e),os(e,r,!1);break;case"textarea":Mr(e),as(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Dn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?pt(e,!!r.multiple,i,!1):r.defaultValue!=null&&pt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Ro)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return de(n),null;case 6:if(e&&n.stateNode!=null)xd(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(k(166));if(t=Un(yr.current),Un(Ye.current),Qr(n)){if(r=n.stateNode,t=n.memoizedProps,r[Je]=n,(i=r.nodeValue!==t)&&(e=je,e!==null))switch(e.tag){case 3:Hr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Hr(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Je]=n,n.stateNode=r}return de(n),null;case 13:if(W(V),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&Ee!==null&&n.mode&1&&!(n.flags&128))Wc(),xt(),n.flags|=98560,i=!1;else if(i=Qr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(k(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(k(317));i[Je]=n}else xt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;de(n),i=!1}else We!==null&&($a(We),We=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||V.current&1?te===0&&(te=3):$l())),n.updateQueue!==null&&(n.flags|=4),de(n),null);case 4:return Et(),Da(e,n),e===null&&hr(n.stateNode.containerInfo),de(n),null;case 10:return Sl(n.type._context),de(n),null;case 17:return be(n.type)&&So(),de(n),null;case 19:if(W(V),i=n.memoizedState,i===null)return de(n),null;if(r=(n.flags&128)!==0,a=i.rendering,a===null)if(r)qt(i,!1);else{if(te!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(a=_o(e),a!==null){for(n.flags|=128,qt(i,!1),r=a.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return $(V,V.current&1|2),n.child}e=e.sibling}i.tail!==null&&G()>Ct&&(n.flags|=128,r=!0,qt(i,!1),n.lanes=4194304)}else{if(!r)if(e=_o(a),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),qt(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!B)return de(n),null}else 2*G()-i.renderingStartTime>Ct&&t!==1073741824&&(n.flags|=128,r=!0,qt(i,!1),n.lanes=4194304);i.isBackwards?(a.sibling=n.child,n.child=a):(t=i.last,t!==null?t.sibling=a:n.child=a,i.last=a)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=G(),n.sibling=null,t=V.current,$(V,r?t&1|2:t&1),n):(de(n),null);case 22:case 23:return Nl(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?ze&1073741824&&(de(n),n.subtreeFlags&6&&(n.flags|=8192)):de(n),null;case 24:return null;case 25:return null}throw Error(k(156,n.tag))}function Sm(e,n){switch(yl(n),n.tag){case 1:return be(n.type)&&So(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Et(),W(ke),W(pe),Cl(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return jl(n),null;case 13:if(W(V),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(k(340));xt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return W(V),null;case 4:return Et(),null;case 10:return Sl(n.type._context),null;case 22:case 23:return Nl(),null;case 24:return null;default:return null}}var Zr=!1,fe=!1,xm=typeof WeakSet=="function"?WeakSet:Set,C=null;function ct(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){K(e,n,r)}else t.current=null}function Fa(e,n,t){try{t()}catch(r){K(e,n,r)}}var Js=!1;function zm(e,n){if(va=yo,e=Pc(),gl(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var a=0,l=-1,s=-1,u=0,p=0,h=e,m=null;n:for(;;){for(var g;h!==t||o!==0&&h.nodeType!==3||(l=a+o),h!==i||r!==0&&h.nodeType!==3||(s=a+r),h.nodeType===3&&(a+=h.nodeValue.length),(g=h.firstChild)!==null;)m=h,h=g;for(;;){if(h===e)break n;if(m===t&&++u===o&&(l=a),m===i&&++p===r&&(s=a),(g=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=g}t=l===-1||s===-1?null:{start:l,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(ga={focusedElem:e,selectionRange:t},yo=!1,C=n;C!==null;)if(n=C,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,C=e;else for(;C!==null;){n=C;try{var y=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var R=y.memoizedProps,L=y.memoizedState,d=n.stateNode,c=d.getSnapshotBeforeUpdate(n.elementType===n.type?R:$e(n.type,R),L);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=n.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(v){K(n,n.return,v)}if(e=n.sibling,e!==null){e.return=n.return,C=e;break}C=n.return}return y=Js,Js=!1,y}function Xt(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Fa(n,t,i)}o=o.next}while(o!==r)}}function Go(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Ta(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function zd(e){var n=e.alternate;n!==null&&(e.alternate=null,zd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Je],delete n[gr],delete n[ka],delete n[lm],delete n[sm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ed(e){return e.tag===5||e.tag===3||e.tag===4}function Zs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ed(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Oa(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Ro));else if(r!==4&&(e=e.child,e!==null))for(Oa(e,n,t),e=e.sibling;e!==null;)Oa(e,n,t),e=e.sibling}function La(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(La(e,n,t),e=e.sibling;e!==null;)La(e,n,t),e=e.sibling}var le=null,qe=!1;function mn(e,n,t){for(t=t.child;t!==null;)jd(e,n,t),t=t.sibling}function jd(e,n,t){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(Uo,t)}catch{}switch(t.tag){case 5:fe||ct(t,n);case 6:var r=le,o=qe;le=null,mn(e,n,t),le=r,qe=o,le!==null&&(qe?(e=le,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):le.removeChild(t.stateNode));break;case 18:le!==null&&(qe?(e=le,t=t.stateNode,e.nodeType===8?Ei(e.parentNode,t):e.nodeType===1&&Ei(e,t),fr(e)):Ei(le,t.stateNode));break;case 4:r=le,o=qe,le=t.stateNode.containerInfo,qe=!0,mn(e,n,t),le=r,qe=o;break;case 0:case 11:case 14:case 15:if(!fe&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Fa(t,n,a),o=o.next}while(o!==r)}mn(e,n,t);break;case 1:if(!fe&&(ct(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(l){K(t,n,l)}mn(e,n,t);break;case 21:mn(e,n,t);break;case 22:t.mode&1?(fe=(r=fe)||t.memoizedState!==null,mn(e,n,t),fe=r):mn(e,n,t);break;default:mn(e,n,t)}}function Gs(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new xm),n.forEach(function(r){var o=Tm.bind(null,e,r);t.has(r)||(t.add(r),r.then(o,o))})}}function Ne(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var o=t[r];try{var i=e,a=n,l=a;e:for(;l!==null;){switch(l.tag){case 5:le=l.stateNode,qe=!1;break e;case 3:le=l.stateNode.containerInfo,qe=!0;break e;case 4:le=l.stateNode.containerInfo,qe=!0;break e}l=l.return}if(le===null)throw Error(k(160));jd(i,a,o),le=null,qe=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){K(o,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Cd(n,e),n=n.sibling}function Cd(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ne(n,e),Qe(e),r&4){try{Xt(3,e,e.return),Go(3,e)}catch(R){K(e,e.return,R)}try{Xt(5,e,e.return)}catch(R){K(e,e.return,R)}}break;case 1:Ne(n,e),Qe(e),r&512&&t!==null&&ct(t,t.return);break;case 5:if(Ne(n,e),Qe(e),r&512&&t!==null&&ct(t,t.return),e.flags&32){var o=e.stateNode;try{sr(o,"")}catch(R){K(e,e.return,R)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=t!==null?t.memoizedProps:i,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Zu(o,i),aa(l,a);var u=aa(l,i);for(a=0;a<s.length;a+=2){var p=s[a],h=s[a+1];p==="style"?nc(o,h):p==="dangerouslySetInnerHTML"?Xu(o,h):p==="children"?sr(o,h):ol(o,p,h,u)}switch(l){case"input":na(o,i);break;case"textarea":Gu(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?pt(o,!!i.multiple,g,!1):m!==!!i.multiple&&(i.defaultValue!=null?pt(o,!!i.multiple,i.defaultValue,!0):pt(o,!!i.multiple,i.multiple?[]:"",!1))}o[gr]=i}catch(R){K(e,e.return,R)}}break;case 6:if(Ne(n,e),Qe(e),r&4){if(e.stateNode===null)throw Error(k(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(R){K(e,e.return,R)}}break;case 3:if(Ne(n,e),Qe(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{fr(n.containerInfo)}catch(R){K(e,e.return,R)}break;case 4:Ne(n,e),Qe(e);break;case 13:Ne(n,e),Qe(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Il=G())),r&4&&Gs(e);break;case 22:if(p=t!==null&&t.memoizedState!==null,e.mode&1?(fe=(u=fe)||p,Ne(n,e),fe=u):Ne(n,e),Qe(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(C=e,p=e.child;p!==null;){for(h=C=p;C!==null;){switch(m=C,g=m.child,m.tag){case 0:case 11:case 14:case 15:Xt(4,m,m.return);break;case 1:ct(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,t=m.return;try{n=r,y.props=n.memoizedProps,y.state=n.memoizedState,y.componentWillUnmount()}catch(R){K(r,t,R)}}break;case 5:ct(m,m.return);break;case 22:if(m.memoizedState!==null){Xs(h);continue}}g!==null?(g.return=m,C=g):Xs(h)}p=p.sibling}e:for(p=null,h=e;;){if(h.tag===5){if(p===null){p=h;try{o=h.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=h.stateNode,s=h.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=ec("display",a))}catch(R){K(e,e.return,R)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(R){K(e,e.return,R)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ne(n,e),Qe(e),r&4&&Gs(e);break;case 21:break;default:Ne(n,e),Qe(e)}}function Qe(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Ed(t)){var r=t;break e}t=t.return}throw Error(k(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(sr(o,""),r.flags&=-33);var i=Zs(e);La(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Zs(e);Oa(e,l,a);break;default:throw Error(k(161))}}catch(s){K(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Em(e,n,t){C=e,Pd(e)}function Pd(e,n,t){for(var r=(e.mode&1)!==0;C!==null;){var o=C,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||Zr;if(!a){var l=o.alternate,s=l!==null&&l.memoizedState!==null||fe;l=Zr;var u=fe;if(Zr=a,(fe=s)&&!u)for(C=o;C!==null;)a=C,s=a.child,a.tag===22&&a.memoizedState!==null?eu(o):s!==null?(s.return=a,C=s):eu(o);for(;i!==null;)C=i,Pd(i),i=i.sibling;C=o,Zr=l,fe=u}Ys(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,C=i):Ys(e)}}function Ys(e){for(;C!==null;){var n=C;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:fe||Go(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!fe)if(t===null)r.componentDidMount();else{var o=n.elementType===n.type?t.memoizedProps:$e(n.type,t.memoizedProps);r.componentDidUpdate(o,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&Ls(n,i,r);break;case 3:var a=n.updateQueue;if(a!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Ls(n,a,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&fr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}fe||n.flags&512&&Ta(n)}catch(m){K(n,n.return,m)}}if(n===e){C=null;break}if(t=n.sibling,t!==null){t.return=n.return,C=t;break}C=n.return}}function Xs(e){for(;C!==null;){var n=C;if(n===e){C=null;break}var t=n.sibling;if(t!==null){t.return=n.return,C=t;break}C=n.return}}function eu(e){for(;C!==null;){var n=C;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Go(4,n)}catch(s){K(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var o=n.return;try{r.componentDidMount()}catch(s){K(n,o,s)}}var i=n.return;try{Ta(n)}catch(s){K(n,i,s)}break;case 5:var a=n.return;try{Ta(n)}catch(s){K(n,a,s)}}}catch(s){K(n,n.return,s)}if(n===e){C=null;break}var l=n.sibling;if(l!==null){l.return=n.return,C=l;break}C=n.return}}var jm=Math.ceil,Fo=pn.ReactCurrentDispatcher,Ol=pn.ReactCurrentOwner,Oe=pn.ReactCurrentBatchConfig,I=0,ie=null,Y=null,se=0,ze=0,dt=On(0),te=0,Sr=null,Jn=0,Yo=0,Ll=0,er=null,we=null,Il=0,Ct=1/0,Xe=null,To=!1,Ia=null,jn=null,Gr=!1,bn=null,Oo=0,nr=0,Ma=null,co=-1,fo=0;function he(){return I&6?G():co!==-1?co:co=G()}function Cn(e){return e.mode&1?I&2&&se!==0?se&-se:cm.transition!==null?(fo===0&&(fo=pc()),fo):(e=M,e!==0||(e=window.event,e=e===void 0?16:kc(e.type)),e):1}function Be(e,n,t,r){if(50<nr)throw nr=0,Ma=null,Error(k(185));Cr(e,t,r),(!(I&2)||e!==ie)&&(e===ie&&(!(I&2)&&(Yo|=t),te===4&&wn(e,se)),Re(e,r),t===1&&I===0&&!(n.mode&1)&&(Ct=G()+500,Ko&&Ln()))}function Re(e,n){var t=e.callbackNode;cp(e,n);var r=wo(e,e===ie?se:0);if(r===0)t!==null&&us(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&us(t),n===1)e.tag===0?um(nu.bind(null,e)):Nc(nu.bind(null,e)),im(function(){!(I&6)&&Ln()}),t=null;else{switch(mc(r)){case 1:t=ul;break;case 4:t=dc;break;case 16:t=go;break;case 536870912:t=fc;break;default:t=go}t=Id(t,_d.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function _d(e,n){if(co=-1,fo=0,I&6)throw Error(k(327));var t=e.callbackNode;if(wt()&&e.callbackNode!==t)return null;var r=wo(e,e===ie?se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Lo(e,r);else{n=r;var o=I;I|=2;var i=Dd();(ie!==e||se!==n)&&(Xe=null,Ct=G()+500,Bn(e,n));do try{_m();break}catch(l){Ad(e,l)}while(!0);Rl(),Fo.current=i,I=o,Y!==null?n=0:(ie=null,se=0,n=te)}if(n!==0){if(n===2&&(o=da(e),o!==0&&(r=o,n=Na(e,o))),n===1)throw t=Sr,Bn(e,0),wn(e,r),Re(e,G()),t;if(n===6)wn(e,r);else{if(o=e.current.alternate,!(r&30)&&!Cm(o)&&(n=Lo(e,r),n===2&&(i=da(e),i!==0&&(r=i,n=Na(e,i))),n===1))throw t=Sr,Bn(e,0),wn(e,r),Re(e,G()),t;switch(e.finishedWork=o,e.finishedLanes=r,n){case 0:case 1:throw Error(k(345));case 2:$n(e,we,Xe);break;case 3:if(wn(e,r),(r&130023424)===r&&(n=Il+500-G(),10<n)){if(wo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){he(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ya($n.bind(null,e,we,Xe),n);break}$n(e,we,Xe);break;case 4:if(wn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,o=-1;0<r;){var a=31-Ue(r);i=1<<a,a=n[a],a>o&&(o=a),r&=~i}if(r=o,r=G()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*jm(r/1960))-r,10<r){e.timeoutHandle=ya($n.bind(null,e,we,Xe),r);break}$n(e,we,Xe);break;case 5:$n(e,we,Xe);break;default:throw Error(k(329))}}}return Re(e,G()),e.callbackNode===t?_d.bind(null,e):null}function Na(e,n){var t=er;return e.current.memoizedState.isDehydrated&&(Bn(e,n).flags|=256),e=Lo(e,n),e!==2&&(n=we,we=t,n!==null&&$a(n)),e}function $a(e){we===null?we=e:we.push.apply(we,e)}function Cm(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var o=t[r],i=o.getSnapshot;o=o.value;try{if(!Ve(i(),o))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function wn(e,n){for(n&=~Ll,n&=~Yo,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Ue(n),r=1<<t;e[t]=-1,n&=~r}}function nu(e){if(I&6)throw Error(k(327));wt();var n=wo(e,0);if(!(n&1))return Re(e,G()),null;var t=Lo(e,n);if(e.tag!==0&&t===2){var r=da(e);r!==0&&(n=r,t=Na(e,r))}if(t===1)throw t=Sr,Bn(e,0),wn(e,n),Re(e,G()),t;if(t===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,$n(e,we,Xe),Re(e,G()),null}function Ml(e,n){var t=I;I|=1;try{return e(n)}finally{I=t,I===0&&(Ct=G()+500,Ko&&Ln())}}function Zn(e){bn!==null&&bn.tag===0&&!(I&6)&&wt();var n=I;I|=1;var t=Oe.transition,r=M;try{if(Oe.transition=null,M=1,e)return e()}finally{M=r,Oe.transition=t,I=n,!(I&6)&&Ln()}}function Nl(){ze=dt.current,W(dt)}function Bn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,om(t)),Y!==null)for(t=Y.return;t!==null;){var r=t;switch(yl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&So();break;case 3:Et(),W(ke),W(pe),Cl();break;case 5:jl(r);break;case 4:Et();break;case 13:W(V);break;case 19:W(V);break;case 10:Sl(r.type._context);break;case 22:case 23:Nl()}t=t.return}if(ie=e,Y=e=Pn(e.current,null),se=ze=n,te=0,Sr=null,Ll=Yo=Jn=0,we=er=null,Wn!==null){for(n=0;n<Wn.length;n++)if(t=Wn[n],r=t.interleaved,r!==null){t.interleaved=null;var o=r.next,i=t.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}t.pending=r}Wn=null}return e}function Ad(e,n){do{var t=Y;try{if(Rl(),lo.current=Do,Ao){for(var r=H.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Ao=!1}if(Kn=0,oe=ee=H=null,Yt=!1,kr=0,Ol.current=null,t===null||t.return===null){te=1,Sr=n,Y=null;break}e:{var i=e,a=t.return,l=t,s=n;if(n=se,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,p=l,h=p.tag;if(!(p.mode&1)&&(h===0||h===11||h===15)){var m=p.alternate;m?(p.updateQueue=m.updateQueue,p.memoizedState=m.memoizedState,p.lanes=m.lanes):(p.updateQueue=null,p.memoizedState=null)}var g=Ws(a);if(g!==null){g.flags&=-257,Us(g,a,l,i,n),g.mode&1&&qs(i,u,n),n=g,s=u;var y=n.updateQueue;if(y===null){var R=new Set;R.add(s),n.updateQueue=R}else y.add(s);break e}else{if(!(n&1)){qs(i,u,n),$l();break e}s=Error(k(426))}}else if(B&&l.mode&1){var L=Ws(a);if(L!==null){!(L.flags&65536)&&(L.flags|=256),Us(L,a,l,i,n),kl(jt(s,l));break e}}i=s=jt(s,l),te!==4&&(te=2),er===null?er=[i]:er.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var d=md(i,s,n);Os(i,d);break e;case 1:l=s;var c=i.type,f=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(jn===null||!jn.has(f)))){i.flags|=65536,n&=-n,i.lanes|=n;var v=hd(i,l,n);Os(i,v);break e}}i=i.return}while(i!==null)}Td(t)}catch(x){n=x,Y===t&&t!==null&&(Y=t=t.return);continue}break}while(!0)}function Dd(){var e=Fo.current;return Fo.current=Do,e===null?Do:e}function $l(){(te===0||te===3||te===2)&&(te=4),ie===null||!(Jn&268435455)&&!(Yo&268435455)||wn(ie,se)}function Lo(e,n){var t=I;I|=2;var r=Dd();(ie!==e||se!==n)&&(Xe=null,Bn(e,n));do try{Pm();break}catch(o){Ad(e,o)}while(!0);if(Rl(),I=t,Fo.current=r,Y!==null)throw Error(k(261));return ie=null,se=0,te}function Pm(){for(;Y!==null;)Fd(Y)}function _m(){for(;Y!==null&&!np();)Fd(Y)}function Fd(e){var n=Ld(e.alternate,e,ze);e.memoizedProps=e.pendingProps,n===null?Td(e):Y=n,Ol.current=null}function Td(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Sm(t,n),t!==null){t.flags&=32767,Y=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{te=6,Y=null;return}}else if(t=Rm(t,n,ze),t!==null){Y=t;return}if(n=n.sibling,n!==null){Y=n;return}Y=n=e}while(n!==null);te===0&&(te=5)}function $n(e,n,t){var r=M,o=Oe.transition;try{Oe.transition=null,M=1,Am(e,n,t,r)}finally{Oe.transition=o,M=r}return null}function Am(e,n,t,r){do wt();while(bn!==null);if(I&6)throw Error(k(327));t=e.finishedWork;var o=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(dp(e,i),e===ie&&(Y=ie=null,se=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Gr||(Gr=!0,Id(go,function(){return wt(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=Oe.transition,Oe.transition=null;var a=M;M=1;var l=I;I|=4,Ol.current=null,zm(e,t),Cd(t,e),Gp(ga),yo=!!va,ga=va=null,e.current=t,Em(t),tp(),I=l,M=a,Oe.transition=i}else e.current=t;if(Gr&&(Gr=!1,bn=e,Oo=o),i=e.pendingLanes,i===0&&(jn=null),ip(t.stateNode),Re(e,G()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)o=n[t],r(o.value,{componentStack:o.stack,digest:o.digest});if(To)throw To=!1,e=Ia,Ia=null,e;return Oo&1&&e.tag!==0&&wt(),i=e.pendingLanes,i&1?e===Ma?nr++:(nr=0,Ma=e):nr=0,Ln(),null}function wt(){if(bn!==null){var e=mc(Oo),n=Oe.transition,t=M;try{if(Oe.transition=null,M=16>e?16:e,bn===null)var r=!1;else{if(e=bn,bn=null,Oo=0,I&6)throw Error(k(331));var o=I;for(I|=4,C=e.current;C!==null;){var i=C,a=i.child;if(C.flags&16){var l=i.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(C=u;C!==null;){var p=C;switch(p.tag){case 0:case 11:case 15:Xt(8,p,i)}var h=p.child;if(h!==null)h.return=p,C=h;else for(;C!==null;){p=C;var m=p.sibling,g=p.return;if(zd(p),p===u){C=null;break}if(m!==null){m.return=g,C=m;break}C=g}}}var y=i.alternate;if(y!==null){var R=y.child;if(R!==null){y.child=null;do{var L=R.sibling;R.sibling=null,R=L}while(R!==null)}}C=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,C=a;else e:for(;C!==null;){if(i=C,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Xt(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,C=d;break e}C=i.return}}var c=e.current;for(C=c;C!==null;){a=C;var f=a.child;if(a.subtreeFlags&2064&&f!==null)f.return=a,C=f;else e:for(a=c;C!==null;){if(l=C,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Go(9,l)}}catch(x){K(l,l.return,x)}if(l===a){C=null;break e}var v=l.sibling;if(v!==null){v.return=l.return,C=v;break e}C=l.return}}if(I=o,Ln(),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(Uo,e)}catch{}r=!0}return r}finally{M=t,Oe.transition=n}}return!1}function tu(e,n,t){n=jt(t,n),n=md(e,n,1),e=En(e,n,1),n=he(),e!==null&&(Cr(e,1,n),Re(e,n))}function K(e,n,t){if(e.tag===3)tu(e,e,t);else for(;n!==null;){if(n.tag===3){tu(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jn===null||!jn.has(r))){e=jt(t,e),e=hd(n,e,1),n=En(n,e,1),e=he(),n!==null&&(Cr(n,1,e),Re(n,e));break}}n=n.return}}function Dm(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=he(),e.pingedLanes|=e.suspendedLanes&t,ie===e&&(se&t)===t&&(te===4||te===3&&(se&130023424)===se&&500>G()-Il?Bn(e,0):Ll|=t),Re(e,n)}function Od(e,n){n===0&&(e.mode&1?(n=qr,qr<<=1,!(qr&130023424)&&(qr=4194304)):n=1);var t=he();e=cn(e,n),e!==null&&(Cr(e,n,t),Re(e,t))}function Fm(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Od(e,t)}function Tm(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(n),Od(e,t)}var Ld;Ld=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||ke.current)ye=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return ye=!1,bm(e,n,t);ye=!!(e.flags&131072)}else ye=!1,B&&n.flags&1048576&&$c(n,Eo,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;uo(e,n),e=n.pendingProps;var o=St(n,pe.current);gt(n,t),o=_l(null,n,r,e,o,t);var i=Al();return n.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,be(r)?(i=!0,xo(n)):i=!1,n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,zl(n),o.updater=Zo,n.stateNode=o,o._reactInternals=n,Ea(n,r,e,t),n=Pa(null,n,r,!0,i,t)):(n.tag=0,B&&i&&wl(n),me(null,n,o,t),n=n.child),n;case 16:r=n.elementType;e:{switch(uo(e,n),e=n.pendingProps,o=r._init,r=o(r._payload),n.type=r,o=n.tag=Lm(r),e=$e(r,e),o){case 0:n=Ca(null,n,r,e,t);break e;case 1:n=Hs(null,n,r,e,t);break e;case 11:n=Bs(null,n,r,e,t);break e;case 14:n=Vs(null,n,r,$e(r.type,e),t);break e}throw Error(k(306,r,""))}return n;case 0:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:$e(r,o),Ca(e,n,r,o,t);case 1:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:$e(r,o),Hs(e,n,r,o,t);case 3:e:{if(yd(n),e===null)throw Error(k(387));r=n.pendingProps,i=n.memoizedState,o=i.element,Hc(e,n),Po(n,r,null,t);var a=n.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){o=jt(Error(k(423)),n),n=Qs(e,n,r,t,o);break e}else if(r!==o){o=jt(Error(k(424)),n),n=Qs(e,n,r,t,o);break e}else for(Ee=zn(n.stateNode.containerInfo.firstChild),je=n,B=!0,We=null,t=Bc(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(xt(),r===o){n=dn(e,n,t);break e}me(e,n,r,t)}n=n.child}return n;case 5:return Qc(n),e===null&&Sa(n),r=n.type,o=n.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,wa(r,o)?a=null:i!==null&&wa(r,i)&&(n.flags|=32),wd(e,n),me(e,n,a,t),n.child;case 6:return e===null&&Sa(n),null;case 13:return kd(e,n,t);case 4:return El(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=zt(n,null,r,t):me(e,n,r,t),n.child;case 11:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:$e(r,o),Bs(e,n,r,o,t);case 7:return me(e,n,n.pendingProps,t),n.child;case 8:return me(e,n,n.pendingProps.children,t),n.child;case 12:return me(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,o=n.pendingProps,i=n.memoizedProps,a=o.value,$(jo,r._currentValue),r._currentValue=a,i!==null)if(Ve(i.value,a)){if(i.children===o.children&&!ke.current){n=dn(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=rn(-1,t&-t),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?s.next=s:(s.next=p.next,p.next=s),u.pending=s}}i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),xa(i.return,t,n),l.lanes|=t;break}s=s.next}}else if(i.tag===10)a=i.type===n.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(k(341));a.lanes|=t,l=a.alternate,l!==null&&(l.lanes|=t),xa(a,t,n),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===n){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}me(e,n,o.children,t),n=n.child}return n;case 9:return o=n.type,r=n.pendingProps.children,gt(n,t),o=Le(o),r=r(o),n.flags|=1,me(e,n,r,t),n.child;case 14:return r=n.type,o=$e(r,n.pendingProps),o=$e(r.type,o),Vs(e,n,r,o,t);case 15:return vd(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:$e(r,o),uo(e,n),n.tag=1,be(r)?(e=!0,xo(n)):e=!1,gt(n,t),pd(n,r,o),Ea(n,r,o,t),Pa(null,n,r,!0,e,t);case 19:return bd(e,n,t);case 22:return gd(e,n,t)}throw Error(k(156,n.tag))};function Id(e,n){return cc(e,n)}function Om(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Te(e,n,t,r){return new Om(e,n,t,r)}function ql(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Lm(e){if(typeof e=="function")return ql(e)?1:0;if(e!=null){if(e=e.$$typeof,e===al)return 11;if(e===ll)return 14}return 2}function Pn(e,n){var t=e.alternate;return t===null?(t=Te(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function po(e,n,t,r,o,i){var a=2;if(r=e,typeof e=="function")ql(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case nt:return Vn(t.children,o,i,n);case il:a=8,o|=8;break;case Zi:return e=Te(12,t,n,o|2),e.elementType=Zi,e.lanes=i,e;case Gi:return e=Te(13,t,n,o),e.elementType=Gi,e.lanes=i,e;case Yi:return e=Te(19,t,n,o),e.elementType=Yi,e.lanes=i,e;case Qu:return Xo(t,o,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Vu:a=10;break e;case Hu:a=9;break e;case al:a=11;break e;case ll:a=14;break e;case hn:a=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return n=Te(a,t,n,o),n.elementType=e,n.type=r,n.lanes=i,n}function Vn(e,n,t,r){return e=Te(7,e,r,n),e.lanes=t,e}function Xo(e,n,t,r){return e=Te(22,e,r,n),e.elementType=Qu,e.lanes=t,e.stateNode={isHidden:!1},e}function Ti(e,n,t){return e=Te(6,e,null,n),e.lanes=t,e}function Oi(e,n,t){return n=Te(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Im(e,n,t,r,o){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hi(0),this.expirationTimes=hi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hi(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Wl(e,n,t,r,o,i,a,l,s){return e=new Im(e,n,t,l,s),n===1?(n=1,i===!0&&(n|=8)):n=0,i=Te(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},zl(i),e}function Mm(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:et,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Md(e){if(!e)return Fn;e=e._reactInternals;e:{if(Yn(e)!==e||e.tag!==1)throw Error(k(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(be(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(k(171))}if(e.tag===1){var t=e.type;if(be(t))return Mc(e,t,n)}return n}function Nd(e,n,t,r,o,i,a,l,s){return e=Wl(t,r,!0,e,o,i,a,l,s),e.context=Md(null),t=e.current,r=he(),o=Cn(t),i=rn(r,o),i.callback=n??null,En(t,i,o),e.current.lanes=o,Cr(e,o,r),Re(e,r),e}function ei(e,n,t,r){var o=n.current,i=he(),a=Cn(o);return t=Md(t),n.context===null?n.context=t:n.pendingContext=t,n=rn(i,a),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=En(o,n,a),e!==null&&(Be(e,o,a,i),ao(e,o,a)),a}function Io(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ru(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Ul(e,n){ru(e,n),(e=e.alternate)&&ru(e,n)}function Nm(){return null}var $d=typeof reportError=="function"?reportError:function(e){console.error(e)};function Bl(e){this._internalRoot=e}ni.prototype.render=Bl.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(k(409));ei(e,n,null,null)};ni.prototype.unmount=Bl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Zn(function(){ei(null,e,null,null)}),n[un]=null}};function ni(e){this._internalRoot=e}ni.prototype.unstable_scheduleHydration=function(e){if(e){var n=gc();e={blockedOn:null,target:e,priority:n};for(var t=0;t<gn.length&&n!==0&&n<gn[t].priority;t++);gn.splice(t,0,e),t===0&&yc(e)}};function Vl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ti(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ou(){}function $m(e,n,t,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Io(a);i.call(u)}}var a=Nd(n,r,e,0,null,!1,!1,"",ou);return e._reactRootContainer=a,e[un]=a.current,hr(e.nodeType===8?e.parentNode:e),Zn(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var u=Io(s);l.call(u)}}var s=Wl(e,0,!1,null,null,!1,!1,"",ou);return e._reactRootContainer=s,e[un]=s.current,hr(e.nodeType===8?e.parentNode:e),Zn(function(){ei(n,s,t,r)}),s}function ri(e,n,t,r,o){var i=t._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var l=o;o=function(){var s=Io(a);l.call(s)}}ei(n,a,e,o)}else a=$m(t,n,e,o,r);return Io(a)}hc=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Vt(n.pendingLanes);t!==0&&(cl(n,t|1),Re(n,G()),!(I&6)&&(Ct=G()+500,Ln()))}break;case 13:Zn(function(){var r=cn(e,1);if(r!==null){var o=he();Be(r,e,1,o)}}),Ul(e,1)}};dl=function(e){if(e.tag===13){var n=cn(e,134217728);if(n!==null){var t=he();Be(n,e,134217728,t)}Ul(e,134217728)}};vc=function(e){if(e.tag===13){var n=Cn(e),t=cn(e,n);if(t!==null){var r=he();Be(t,e,n,r)}Ul(e,n)}};gc=function(){return M};wc=function(e,n){var t=M;try{return M=e,n()}finally{M=t}};sa=function(e,n,t){switch(n){case"input":if(na(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var o=Qo(r);if(!o)throw Error(k(90));Ju(r),na(r,o)}}}break;case"textarea":Gu(e,t);break;case"select":n=t.value,n!=null&&pt(e,!!t.multiple,n,!1)}};oc=Ml;ic=Zn;var qm={usingClientEntryPoint:!1,Events:[_r,it,Qo,tc,rc,Ml]},Wt={findFiberByHostInstance:qn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Wm={bundleType:Wt.bundleType,version:Wt.version,rendererPackageName:Wt.rendererPackageName,rendererConfig:Wt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=sc(e),e===null?null:e.stateNode},findFiberByHostInstance:Wt.findFiberByHostInstance||Nm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yr.isDisabled&&Yr.supportsFiber)try{Uo=Yr.inject(Wm),Ge=Yr}catch{}}Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qm;Pe.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vl(n))throw Error(k(200));return Mm(e,n,null,t)};Pe.createRoot=function(e,n){if(!Vl(e))throw Error(k(299));var t=!1,r="",o=$d;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),n=Wl(e,1,!1,null,null,t,!1,r,o),e[un]=n.current,hr(e.nodeType===8?e.parentNode:e),new Bl(n)};Pe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=sc(n),e=e===null?null:e.stateNode,e};Pe.flushSync=function(e){return Zn(e)};Pe.hydrate=function(e,n,t){if(!ti(n))throw Error(k(200));return ri(null,e,n,!0,t)};Pe.hydrateRoot=function(e,n,t){if(!Vl(e))throw Error(k(405));var r=t!=null&&t.hydratedSources||null,o=!1,i="",a=$d;if(t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),n=Nd(n,null,e,1,t??null,o,!1,i,a),e[un]=n.current,hr(e),r)for(e=0;e<r.length;e++)t=r[e],o=t._getVersion,o=o(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,o]:n.mutableSourceEagerHydrationData.push(t,o);return new ni(n)};Pe.render=function(e,n,t){if(!ti(n))throw Error(k(200));return ri(null,e,n,!1,t)};Pe.unmountComponentAtNode=function(e){if(!ti(e))throw Error(k(40));return e._reactRootContainer?(Zn(function(){ri(null,null,e,!1,function(){e._reactRootContainer=null,e[un]=null})}),!0):!1};Pe.unstable_batchedUpdates=Ml;Pe.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!ti(t))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return ri(e,n,t,!1,r)};Pe.version="18.3.1-next-f1338f8080-20240426";function qd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qd)}catch(e){console.error(e)}}qd(),qu.exports=Pe;var Um=qu.exports,iu=Um;Ki.createRoot=iu.createRoot,Ki.hydrateRoot=iu.hydrateRoot;class Bm extends Qi.Component{constructor(t){super(t);Or(this,"container");Or(this,"player",null);Or(this,"isLoading",!1);this.container=Qi.createRef()}componentDidMount(){this.player=window.RufflePlayer.newest().createPlayer(),this.player.id="player",this.player.addEventListener("loadedmetadata",()=>{this.props.onLoadedMetadata&&this.props.onLoadedMetadata(this.player.metadata)}),this.isLoading=!1,this.container.current.appendChild(this.player)}componentWillUnmount(){var t;(t=this.player)==null||t.remove(),this.player=null,this.isLoading=!1}render(){return j.jsx("div",{id:this.props.id,ref:this.container,onDragEnter:this.props.onDragEnter,onDragLeave:this.props.onDragLeave,onDragOver:this.props.onDragOver,onDrop:this.props.onDragDrop,children:this.props.children})}reload(){var t;this.isLoading||(this.isLoading=!0,(t=this.player)==null||t.reload().finally(()=>{this.isLoading=!1}))}loadUrl(t,r){var o;this.isLoading||(this.isLoading=!0,(o=this.player)==null||o.load({url:t,...this.props.baseConfig,...r},!1).finally(()=>{this.isLoading=!1}))}loadFile(t){this.isLoading||(this.isLoading=!0,new Response(t).arrayBuffer().then(r=>{var o;return(o=this.player)==null?void 0:o.load({data:r,...this.props.baseConfig},!1)}).finally(()=>{this.isLoading=!1}))}}const Vm=""+new URL("../logo.svg",import.meta.url).href,au={Animation:"Animations",Game:"Games"};function Hm({sampleSelectionInput:e,selectedSample:n,setSelectedSample:t,setSelectedFilename:r,onSelectUrl:o}){const[i,a]=ne.useState([]),l=u=>{const p=u.target,h=parseInt(p.value,10);i[h]&&s(i[h])},s=ne.useCallback(u=>{o(u.location,u.config??{}),t(u),r(null)},[o,r,t]);return ne.useEffect(()=>{(async()=>{const u=await fetch("swfs.json");if(u.ok){const p=await u.json();a(p.swfs),p.swfs.length>0&&s(p.swfs[0])}})()},[s]),j.jsxs("div",{id:"sample-swfs-container",className:i.length==0?"hidden":"",children:[j.jsx("span",{id:"sample-swfs-label",children:"Sample SWF:"}),j.jsxs("select",{id:"sample-swfs","aria-describedby":"sample-swfs-label",onChange:l,ref:e,children:[i.map((u,p)=>j.jsx(ne.Fragment,{children:u.type==null&&j.jsx("option",{value:p,children:u.title})},p)),Object.keys(au).map(u=>j.jsx("optgroup",{label:au[u],children:i.map((p,h)=>j.jsx(ne.Fragment,{children:p.type==u&&j.jsx("option",{value:h,children:p.title})},h))},u))]}),j.jsxs("div",{id:"author-container",className:n!=null&&n.author?"":"hidden",children:[j.jsx("span",{children:"Author: "}),j.jsx("a",{href:n==null?void 0:n.authorLink,target:"_blank",id:"author",children:n==null?void 0:n.author})]})]})}function Qm({allowUrlLoading:e,allowSampleSwfs:n,onToggleMetadata:t,onReloadMovie:r,onSelectUrl:o,onSelectFile:i,selectedFilename:a,setSelectedFilename:l,onFileDragLeave:s,onFileDragOver:u,onFileDragDrop:p}){const h=ne.useRef(null),m=ne.useRef(null),g=ne.useRef(null),[y,R]=ne.useState(null),L=()=>{var z;(z=h.current)==null||z.click()},d=z=>{o(z,{}),l(null),R(null),g.current&&(g.current.selectedIndex=-1)},c=z=>{i(z),R(null),l(z.name),g.current&&(g.current.selectedIndex=-1)},f=z=>{var E;z.preventDefault(),(E=m.current)!=null&&E.value&&d(m.current.value)},v=z=>{const E=z.target;E!=null&&E.files&&(E==null?void 0:E.files.length)>0&&E.files[0]&&c(E.files[0])},x=()=>{confirm("Reload the current SWF?")&&r()},P=navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPhone/i)||navigator.platform==="MacIntel"&&typeof navigator.standalone<"u";return ne.useEffect(()=>{a!=null&&(R(null),g.current&&(g.current.selectedIndex=-1))},[a]),j.jsxs("div",{id:"nav",children:[j.jsx("a",{id:"logo-container",href:"https://ruffle.rs/",target:"_blank",children:j.jsx("img",{className:"logo",src:Vm,alt:"Ruffle"})}),j.jsxs("div",{className:"select-container",children:[j.jsxs("form",{id:"web-url-container",onSubmit:f,hidden:!e,children:[j.jsx("input",{id:"web-url",name:"web-url",type:"text",placeholder:"URL of a .swf file on the web",ref:m}),j.jsx("button",{id:"web-form-submit",type:"submit",children:"Load"})]}),j.jsxs("div",{id:"local-file-container",onDragLeave:s,onDragOver:u,onDrop:p,children:[j.jsx("span",{id:"local-file-static-label",onClick:L,children:"Local SWF:"}),j.jsx("input",{type:"file",accept:P?void 0:".swf,.spl",id:"local-file","aria-describedby":"local-file-static-label",ref:h,onChange:v}),j.jsx("button",{id:"local-file-label",onClick:L,children:"Select File"}),j.jsx("label",{id:"local-file-name",htmlFor:"local-file",children:a??"No file selected."})]}),n&&j.jsx(Hm,{onSelectUrl:o,selectedSample:y,setSelectedFilename:l,setSelectedSample:R,sampleSelectionInput:g})]}),j.jsxs("div",{children:[j.jsx("svg",{id:"toggle-info",width:"20px",viewBox:"0 0 416.979 416.979",onClick:t,children:j.jsx("path",{fill:"white",d:"M356.004 61.156c-81.37-81.47-213.377-81.551-294.848-.182-81.47 81.371-81.552 213.379-.181 294.85 81.369 81.47 213.378 81.551 294.849.181 81.469-81.369 81.551-213.379.18-294.849zM237.6 340.786a5.821 5.821 0 0 1-5.822 5.822h-46.576a5.821 5.821 0 0 1-5.822-5.822V167.885a5.821 5.821 0 0 1 5.822-5.822h46.576a5.82 5.82 0 0 1 5.822 5.822v172.901zm-29.11-202.885c-18.618 0-33.766-15.146-33.766-33.765 0-18.617 15.147-33.766 33.766-33.766s33.766 15.148 33.766 33.766c0 18.619-15.149 33.765-33.766 33.765z"})}),j.jsx("svg",{id:"reload-swf",width:"20px",viewBox:"0 0 489.711 489.711",onClick:x,children:j.jsx("path",{fill:"white",d:"M112.156 97.111c72.3-65.4 180.5-66.4 253.8-6.7l-58.1 2.2c-7.5.3-13.3 6.5-13 14 .3 7.3 6.3 13 13.5 13h.5l89.2-3.3c7.3-.3 13-6.2 13-13.5v-1.6l-3.3-88.2c-.3-7.5-6.6-13.3-14-13-7.5.3-13.3 6.5-13 14l2.1 55.3c-36.3-29.7-81-46.9-128.8-49.3-59.2-3-116.1 17.3-160 57.1-60.4 54.7-86 137.9-66.8 217.1 1.5 6.2 7 10.3 13.1 10.3 1.1 0 2.1-.1 3.2-.4 7.2-1.8 11.7-9.1 9.9-16.3-16.8-69.6 5.6-142.7 58.7-190.7zm350.3 98.4c-1.8-7.2-9.1-11.7-16.3-9.9-7.2 1.8-11.7 9.1-9.9 16.3 16.9 69.6-5.6 142.7-58.7 190.7-37.3 33.7-84.1 50.3-130.7 50.3-44.5 0-88.9-15.1-124.7-44.9l58.8-5.3c7.4-.7 12.9-7.2 12.2-14.7s-7.2-12.9-14.7-12.2l-88.9 8c-7.4.7-12.9 7.2-12.2 14.7l8 88.9c.6 7 6.5 12.3 13.4 12.3.4 0 .8 0 1.2-.1 7.4-.7 12.9-7.2 12.2-14.7l-4.8-54.1c36.3 29.4 80.8 46.5 128.3 48.9 3.8.2 7.6.3 11.3.3 55.1 0 107.5-20.2 148.7-57.4 60.4-54.7 86-137.8 66.8-217.1z"})})]})]})}const Km={1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9.0",10:"10.0/10.1",11:"10.2",12:"10.3",13:"11.0",14:"11.1",15:"11.2",16:"11.3",17:"11.4",18:"11.5",19:"11.6",20:"11.7",21:"11.8",22:"11.9",23:"12",24:"13",25:"14",26:"15",27:"16",28:"17",29:"18",30:"19",31:"20",32:"21",33:"22",34:"23",35:"24",36:"25",37:"26",38:"27",39:"28",40:"29",41:"30",42:"31",43:"32"};function Jm({visible:e,metadata:n}){return j.jsxs("div",{id:"info-container",className:e?"":"hidden",children:[j.jsxs("div",{children:[j.jsx("span",{children:"Uncompressed Length"}),j.jsxs("span",{id:"uncompressedLength",children:[((n==null?void 0:n.uncompressedLength)??0)>>10,"Kb"]})]}),j.jsxs("div",{children:[j.jsx("span",{children:"SWF Version"}),j.jsx("span",{id:"swfVersion",children:n==null?void 0:n.swfVersion})]}),j.jsxs("div",{children:[j.jsx("span",{children:"FP Version"}),j.jsx("span",{id:"flashVersion",children:n?Km[n.swfVersion]??"Unknown":""})]}),j.jsxs("div",{children:[j.jsx("span",{children:"ActionScript 3"}),j.jsx("span",{id:"isActionScript3",children:n!=null&&n.isActionScript3?"true":"false"})]}),j.jsxs("div",{children:[j.jsx("span",{children:"Total Frames"}),j.jsx("span",{id:"numFrames",children:n==null?void 0:n.numFrames})]}),j.jsxs("div",{children:[j.jsx("span",{children:"Frame Rate"}),j.jsx("span",{id:"frameRate",children:n==null?void 0:n.frameRate})]}),j.jsxs("div",{children:[j.jsx("span",{children:"SWF Width"}),j.jsx("span",{id:"width",children:n==null?void 0:n.width})]}),j.jsxs("div",{children:[j.jsx("span",{children:"SWF Height"}),j.jsx("span",{id:"height",children:n==null?void 0:n.height})]}),j.jsxs("div",{children:[j.jsx("span",{children:"SWF Background Color"}),j.jsx("span",{id:"backgroundColor",style:{backgroundColor:(n==null?void 0:n.backgroundColor)??void 0}})]})]})}function Zm({ruffleBaseConfig:e,allowUrlLoading:n,allowSampleSwfs:t}){const[r,o]=ne.useState(null),[i,a]=ne.useState(!1),[l,s]=ne.useState(null),[u,p]=ne.useState(!1),h=ne.useRef(null),m=()=>{a(!i)},g=()=>{var v;(v=h.current)==null||v.reload()},y=ne.useCallback((v,x)=>{var P;(P=h.current)==null||P.loadUrl(v,x)},[]),R=v=>{var x;(x=h.current)==null||x.loadFile(v)},L=v=>{v.stopPropagation(),v.preventDefault()},d=v=>{v.stopPropagation(),v.preventDefault(),p(!1)},c=v=>{v.stopPropagation(),v.preventDefault(),p(!0)},f=v=>{var x;v.stopPropagation(),v.preventDefault(),p(!1),v.dataTransfer&&(s(v.dataTransfer.files[0].name),(x=h.current)==null||x.loadFile(v.dataTransfer.files[0]))};return j.jsxs(j.Fragment,{children:[j.jsx(Qm,{allowUrlLoading:n,allowSampleSwfs:t,onToggleMetadata:m,onReloadMovie:g,onSelectUrl:y,onSelectFile:R,selectedFilename:l,setSelectedFilename:s,onFileDragLeave:d,onFileDragOver:c,onFileDragDrop:f}),j.jsxs("div",{id:"main",className:i?"info-container-shown":"",children:[j.jsx(Bm,{id:"player-container","aria-label":"Select a demo or drag an SWF",onLoadedMetadata:o,ref:h,onDragEnter:L,onDragLeave:d,onDragOver:c,onDragDrop:f,baseConfig:e,children:j.jsx("div",{id:"overlay",className:u?"drag":""})}),j.jsx(Jm,{visible:i,metadata:r})]})]})}var on={},Dr={},Wd={},Ud={};Object.defineProperty(Ud,"__esModule",{value:!0});var Bd={};Object.defineProperty(Bd,"__esModule",{value:!0});var Vd={};Object.defineProperty(Vd,"__esModule",{value:!0});var Hd={};Object.defineProperty(Hd,"__esModule",{value:!0});var Qd={};Object.defineProperty(Qd,"__esModule",{value:!0});var oi={};Object.defineProperty(oi,"__esModule",{value:!0});oi.classnames=void 0;const Gm=e=>Object.entries(e).map(([n,t])=>t&&n),lu=e=>!!e,Ym=(e,n,t)=>t.indexOf(e)===n,Xm=[];function Kd(e){return e?typeof e=="string"?[e]:Array.isArray(e)?e.flatMap(Kd).filter(lu):Gm(e).filter(lu):Xm}function eh(e){const n=Kd(e).filter(Ym);return n.length>0?n.join(" "):void 0}oi.classnames=eh;(function(e){var n=yn&&yn.__createBinding||(Object.create?function(r,o,i,a){a===void 0&&(a=i);var l=Object.getOwnPropertyDescriptor(o,i);(!l||("get"in l?!o.__esModule:l.writable||l.configurable))&&(l={enumerable:!0,get:function(){return o[i]}}),Object.defineProperty(r,a,l)}:function(r,o,i,a){a===void 0&&(a=i),r[a]=o[i]}),t=yn&&yn.__exportStar||function(r,o){for(var i in r)i!=="default"&&!Object.prototype.hasOwnProperty.call(o,i)&&n(o,r,i)};Object.defineProperty(e,"__esModule",{value:!0}),t(Ud,e),t(Bd,e),t(Vd,e),t(Hd,e),t(Qd,e),t(oi,e)})(Wd);Object.defineProperty(Dr,"__esModule",{value:!0});Dr.setAttributes=void 0;const nh=Wd;function th(e,n){for(const t of Object.keys(e))t in n&&(n[t]=e[t])}const rh=new RegExp("^on\\p{Lu}","u");function oh(e,n){for(const t of Object.keys(n)){if(t==="__source"||t==="__self"||t==="tsxTag")continue;const r=n[t];if(t==="class"){const o=(0,nh.classnames)(r);o&&e.setAttribute(t,o)}else if(t==="ref")r.current=e;else if(rh.test(t)){const o=t.replace(/Capture$/,""),i=t!==o,a=o.toLowerCase().substring(2);e.addEventListener(a,r,i)}else t==="style"&&typeof r!="string"?th(r,e.style):t==="dangerouslySetInnerHTML"?e.innerHTML=r:r===!0?e.setAttribute(t,t):(r||r===0)&&e.setAttribute(t,r.toString())}}Dr.setAttributes=oh;var an={};Object.defineProperty(an,"__esModule",{value:!0});an.applyTsxTag=an.createDomElement=an.applyChildren=void 0;function ih(e,n){n instanceof Element?e.appendChild(n):typeof n=="string"||typeof n=="number"?e.appendChild(document.createTextNode(n.toString())):console.warn("Unknown type to append: ",n)}function Jd(e,n){for(const t of n)!t&&t!==0||(Array.isArray(t)?Jd(e,t):ih(e,t))}an.applyChildren=Jd;function ah(e,n){const t=n!=null&&n.is?{is:n.is}:void 0;return n!=null&&n.xmlns?document.createElementNS(n.xmlns,e,t):document.createElement(e,t)}an.createDomElement=ah;function lh(e,n){let t=e,r=n;return r&&"tsxTag"in r&&(t=r.tsxTag,!r.is&&e.includes("-")&&(r={...r,is:e})),{finalTag:t,finalAttrs:r}}an.applyTsxTag=lh;Object.defineProperty(on,"__esModule",{value:!0});on.jsxDEV=J=on.jsxs=S=on.jsx=void 0;const sh=Dr,Li=an;function Hl(e,n){if(typeof e=="function")return e(n);const{children:t,...r}=n,{finalTag:o,finalAttrs:i}=(0,Li.applyTsxTag)(e,r),a=(0,Li.createDomElement)(o,i);return(0,sh.setAttributes)(a,i),(0,Li.applyChildren)(a,[t]),a}var S=on.jsx=Hl,J=on.jsxs=Hl;on.jsxDEV=Hl;const uh="modulepreload",ch=function(e,n){return new URL(e,n).href},su={},uu=function(n,t,r){let o=Promise.resolve();if(t&&t.length>0){const i=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));o=Promise.all(t.map(s=>{if(s=ch(s,r),s in su)return;su[s]=!0;const u=s.endsWith(".css"),p=u?'[rel="stylesheet"]':"";if(!!r)for(let g=i.length-1;g>=0;g--){const y=i[g];if(y.href===s&&(!u||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${p}`))return;const m=document.createElement("link");if(m.rel=u?"stylesheet":uh,u||(m.as="script",m.crossOrigin=""),m.href=s,l&&m.setAttribute("nonce",l),document.head.appendChild(m),u)return new Promise((g,y)=>{m.addEventListener("load",g),m.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${s}`)))})}))}return o.then(()=>n()).catch(i=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i})},dh=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,3,1,0,1,10,14,1,12,0,65,0,65,0,65,0,252,10,0,0,11])),fh=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,7,1,5,0,208,112,26,11])),ph=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,12,1,10,0,67,0,0,0,0,252,0,26,11])),mh=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,8,1,6,0,65,0,192,26,11])),hh=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]));function vh(){Object.defineProperty(Array.prototype,"reduce",{value(...e){if(e.length===0&&window.Prototype&&window.Prototype.Version&&window.Prototype.Version<"1.6.1")return this.length>1?this:this[0];const n=e[0];if(this===null)throw new TypeError("Array.prototype.reduce called on null or undefined");if(typeof n!="function")throw new TypeError(`${n} is not a function`);const t=Object(this),r=t.length>>>0;let o=0,i;if(e.length>=2)i=e[1];else{for(;o<r&&!(o in t);)o++;if(o>=r)throw new TypeError("Reduce of empty array with no initial value");i=t[o++]}for(;o<r;)o in t&&(i=n(i,t[o],o,t)),o++;return i}})}function gh(){typeof window.constructor!="function"||!qa(window.constructor)||(window.Window=window.constructor)}function wh(){(window.Reflect===void 0||window.Reflect===null)&&(window.Reflect={}),typeof Reflect.get!="function"&&Object.defineProperty(Reflect,"get",{value(e,n){return e[n]}}),typeof Reflect.set!="function"&&Object.defineProperty(Reflect,"set",{value(e,n,t){e[n]=t}}),typeof Reflect.has!="function"&&Object.defineProperty(Reflect,"has",{value(e,n){return n in e}}),typeof Reflect.ownKeys!="function"&&Object.defineProperty(Reflect,"ownKeys",{value(e){return[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)]}})}function qa(e){const n=typeof Function.prototype.toString=="function"?Function.prototype.toString():null;return typeof n=="string"&&n.indexOf("[native code]")>=0?Function.prototype.toString.call(e).indexOf("[native code]")>=0:!1}function yh(){(typeof Array.prototype.reduce!="function"||!qa(Array.prototype.reduce))&&vh(),(typeof Window!="function"||!qa(Window))&&gh(),wh()}const kh=999,Wa={};function bh(e){const n=Wa[e];return n!==void 0?{internalName:e,name:n.name,class:n.class}:null}function Ql(e,n){const t=Wa[e];if(t!==void 0){if(t.class!==n)throw new Error("Internal naming conflict on "+e);return t.name}let r=0;if(window.customElements!==void 0)for(;r<kh;){let o=e;if(r>0&&(o=o+"-"+r),window.customElements.get(o)!==void 0){r+=1;continue}else window.customElements.define(o,n);return Wa[e]={class:n,name:o,internalName:e},o}throw new Error("Failed to assign custom element "+e)}const Ae={versionNumber:"0.1.0",versionName:"nightly 2024-07-25",versionChannel:"nightly",buildDate:"2024-07-25T00:05:27.695Z",commitHash:"9065ce3a03bad8193d13542481bacc0caef170de"},tr={version:Ae.versionNumber+"+"+Ae.buildDate.substring(0,10),polyfill(){Qv()},pluginPolyfill(){Hv()},createPlayer(){const e=Ql("ruffle-player",Ze);return document.createElement(e)},options:{}};async function Rh(e){var u,p,h;yh();const n=(await Promise.all([dh(),hh(),ph(),mh(),fh()])).every(Boolean);n||console.log("Some WebAssembly extensions are NOT available, falling back to the vanilla WebAssembly module"),(p=(u=tr.options).onFirstLoad)==null||p.call(u),tr.options.onFirstLoad=()=>{};const{default:t,RuffleInstanceBuilder:r,ZipWriter:o}=await(n?uu(()=>import("./ruffle_web-wasm_extensions-DXBWZI8q.js"),__vite__mapDeps([0,1]),import.meta.url):uu(()=>import("./ruffle_web-DgoJDNFc.js"),__vite__mapDeps([2,1]),import.meta.url));let i;const a=n?new URL(""+new URL("ruffle_web-wasm_extensions_bg-CO0lObff.wasm",import.meta.url).href,import.meta.url):new URL(""+new URL("ruffle_web_bg-CvWRDwRb.wasm",import.meta.url).href,import.meta.url),l=await fetch(a);if(e&&typeof ReadableStreamDefaultController=="function"){const m=((h=l==null?void 0:l.headers)==null?void 0:h.get("content-length"))||"";let g=0;const y=parseInt(m);i=new Response(new ReadableStream({async start(R){var d;const L=(d=l.body)==null?void 0:d.getReader();if(!L)throw"Response had no body";for(e(g,y);;){const{done:c,value:f}=await L.read();if(c)break;f!=null&&f.byteLength&&(g+=f==null?void 0:f.byteLength),R.enqueue(f),e(g,y)}R.close()}}),l)}else i=l;return await t(i),[r,o]}let Ii=null;async function Sh(e){Ii===null&&(Ii=Rh(e));const n=await Ii;return[new n[0],()=>new n[1]]}const xh=`:host{all:initial;pointer-events:inherit;--ruffle-blue:#37528c;--ruffle-orange:#ffad33;display:inline-block;font-family:Arial,sans-serif;height:400px;letter-spacing:.4px;position:relative;touch-action:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:550px;-webkit-tap-highlight-color:transparent}:host(:-webkit-full-screen){display:block;height:100%!important;width:100%!important}.hidden{display:none!important}#container,#message-overlay,#panic,#play-button,#splash-screen,#unmute-overlay,#unmute-overlay .background{inset:0;position:absolute}#container{overflow:hidden}#container canvas{height:100%;width:100%}#play-button,#unmute-overlay{cursor:pointer;display:none}#unmute-overlay .background{background:#000;opacity:.7}#play-button .icon,#unmute-overlay .icon{height:50%;left:50%;max-height:384px;max-width:384px;opacity:.8;position:absolute;top:50%;transform:translate(-50%,-50%);width:50%}#play-button:hover .icon,#unmute-overlay:hover .icon{opacity:1}#unmute-overlay-svg{scale:.8}#panic{background:linear-gradient(180deg,#fd3a40,#fda138);color:#fff;display:flex;flex-flow:column;font-size:20px;justify-content:space-around;text-align:center}#panic a{color:var(--ruffle-blue);font-weight:700}#panic-title{font-size:xxx-large;font-weight:700}#panic-body .details{flex:0.9;margin:0 10px}#panic-body textarea{height:100%;resize:none;width:100%}#panic ul{display:flex;justify-content:space-evenly;list-style-type:none;padding:0}#message-overlay{align-items:center;background:var(--ruffle-blue);color:var(--ruffle-orange);display:flex;justify-content:center;opacity:1;overflow:auto;position:absolute;z-index:2}#message-overlay .message{font-size:20px;max-height:100%;max-width:100%;padding:5%;text-align:center}#message-overlay p{margin:.5em 0}#message-overlay .message div{-moz-column-gap:1em;column-gap:1em;display:flex;flex-wrap:wrap;justify-content:center}#message-overlay a,#message-overlay button{background:var(--ruffle-blue);border:2px solid var(--ruffle-orange);border-radius:.6em;color:var(--ruffle-orange);cursor:pointer;font-size:1.25em;font-weight:700;margin:2% 0;padding:10px;text-decoration:none}#message-overlay a:hover,#message-overlay button:hover{background:#ffffff4c}#continue-btn{background:var(--ruffle-blue);border:2px solid var(--ruffle-orange);border-radius:20px;color:var(--ruffle-orange);cursor:pointer;font-size:20px;font-weight:700;padding:10px}#continue-btn:hover{background:#ffffff4c}#context-menu-overlay,.modal{height:100%;position:absolute;width:100%;z-index:1}#context-menu{background-color:var(--modal-background);border:1px solid gray;box-shadow:0 5px 10px -5px #000;color:rgb(var(--modal-foreground-rgb));font-size:14px;list-style:none;margin:0;padding:3px 0;position:absolute;text-align:left;white-space:nowrap}#context-menu .menu-item{color:rgb(var(--modal-foreground-rgb));padding:5px 10px}#context-menu .menu-item.disabled{color:rgba(var(--modal-foreground-rgb),.5);cursor:default}#context-menu .menu-item:not(.disabled):hover{background-color:rgba(var(--modal-foreground-rgb),.15)}#context-menu .menu-separator hr{border:none;border-bottom:1px solid rgba(var(--modal-foreground-rgb),.2);margin:3px}#splash-screen{align-items:center;background:var(
        --splash-screen-background,var(--preloader-background,var(--ruffle-blue))
    );display:flex;flex-direction:column;justify-content:center}.loadbar{background:#253559;height:20%;max-height:10px;max-width:316px;width:100%}.loadbar-inner{background:var(--ruffle-orange);height:100%;max-width:100%;width:0}.logo{display:var(--logo-display,block);max-height:150px;max-width:380px}.loading-animation{aspect-ratio:1;margin-bottom:2%;max-height:28px;max-width:28px;width:10%}.spinner{stroke-dasharray:180;stroke-dashoffset:135;stroke:var(--ruffle-orange);animation:a 1.5s linear infinite;transform-origin:50% 50%}@keyframes a{to{transform:rotate(1turn)}}#virtual-keyboard{height:1px;opacity:0;position:absolute;top:-100px;width:1px}.modal{background-color:#0008}.modal-area{background-color:var(--modal-background);border-radius:12px;box-shadow:0 2px 6px 0 #0008;color:rgb(var(--modal-foreground-rgb));left:50%;padding:8px 12px;position:relative;transform:translateX(-50%);width:-moz-fit-content;width:fit-content}#modal-area{height:300px;width:450px}.close-modal{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 -960 960 960'%3E%3Cpath d='M480-392 300-212q-18 18-44 18t-44-18-18-44 18-44l180-180-180-180q-18-18-18-44t18-44 44-18 44 18l180 180 180-180q18-18 44-18t44 18 18 44-18 44L568-480l180 180q18 18 18 44t-18 44-44 18-44-18z'/%3E%3C/svg%3E");cursor:pointer;filter:var(--modal-foreground-filter);height:16px;width:16px}.modal-button{background-color:rgba(var(--modal-foreground-rgb),.2);border-radius:6px;color:rgb(var(--modal-foreground-rgb));cursor:pointer;display:inline-block;padding:4px 8px;text-decoration:none}:not(#volume-controls)>.close-modal{position:absolute;right:16px;top:14px}.general-save-options{border-bottom:2px solid rgba(var(--modal-foreground-rgb),.3);padding-bottom:8px;text-align:center}#local-saves{border-collapse:collapse;color:inherit;display:block;height:calc(100% - 45px);min-height:30px;overflow-y:auto}#local-saves td{border-bottom:2px solid rgba(var(--modal-foreground-rgb),.15);height:30px}#local-saves td:first-child{width:100%;word-break:break-all}.save-option{cursor:pointer;display:inline-block;filter:var(--modal-foreground-filter);height:24px;opacity:.4;vertical-align:middle;width:24px}#local-saves>tr:hover .save-option{opacity:1}#download-save{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 -960 960 960'%3E%3Cpath d='M480-337q-8 0-15-2.5t-13-8.5L308-492q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T365-549l75 75v-286q0-17 11.5-28.5T480-800t28.5 11.5T520-760v286l75-75q12-12 28.5-11.5T652-548q11 12 11.5 28T652-492L508-348q-6 6-13 8.5t-15 2.5M240-160q-33 0-56.5-23.5T160-240v-80q0-17 11.5-28.5T200-360t28.5 11.5T240-320v80h480v-80q0-17 11.5-28.5T760-360t28.5 11.5T800-320v80q0 33-23.5 56.5T720-160z'/%3E%3C/svg%3E")}#replace-save{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 -1080 960 1200'%3E%3Cpath d='M440-367v127q0 17 11.5 28.5T480-200t28.5-11.5T520-240v-127l36 36q6 6 13.5 9t15 2.5T599-323t13-9q11-12 11.5-28T612-388L508-492q-6-6-13-8.5t-15-2.5-15 2.5-13 8.5L348-388q-12 12-11.5 28t12.5 28q12 11 28 11.5t28-11.5zM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v447q0 33-23.5 56.5T720-80zm280-560q0 17 11.5 28.5T560-600h160L520-800z'/%3E%3C/svg%3E")}#delete-save{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 -1020 960 1080'%3E%3Cpath d='M280-120q-33 0-56.5-23.5T200-200v-520q-17 0-28.5-11.5T160-760t11.5-28.5T200-800h160q0-17 11.5-28.5T400-840h160q17 0 28.5 11.5T600-800h160q17 0 28.5 11.5T800-760t-11.5 28.5T760-720v520q0 33-23.5 56.5T680-120zm120-160q17 0 28.5-11.5T440-320v-280q0-17-11.5-28.5T400-640t-28.5 11.5T360-600v280q0 17 11.5 28.5T400-280m160 0q17 0 28.5-11.5T600-320v-280q0-17-11.5-28.5T560-640t-28.5 11.5T520-600v280q0 17 11.5 28.5T560-280'/%3E%3C/svg%3E")}.replace-save{display:none}#video-modal .modal-area{box-sizing:border-box;height:95%;width:95%}#video-holder{box-sizing:border-box;height:100%;padding:36px 4px 6px}#video-holder video{background-color:#000;height:100%;width:100%}#volume-controls{align-items:center;display:flex;gap:6px}#mute-checkbox{display:none}label[for=mute-checkbox]{cursor:pointer;filter:var(--modal-foreground-filter);height:24px;line-height:0;width:24px}#volume-mute{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 -960 960 960'%3E%3Cpath d='m719.13-419.35-71.67 71.68Q634.78-335 617.13-335t-30.33-12.67q-12.67-12.68-12.67-30.33t12.67-30.33L658.48-480l-71.68-71.67q-12.67-12.68-12.67-30.33t12.67-30.33Q599.48-625 617.13-625t30.33 12.67l71.67 71.68 71.67-71.68Q803.48-625 821.13-625t30.33 12.67q12.67 12.68 12.67 30.33t-12.67 30.33L779.78-480l71.68 71.67q12.67 12.68 12.67 30.33t-12.67 30.33Q838.78-335 821.13-335t-30.33-12.67zM278-357.87H161.22q-17.66 0-30.33-12.67-12.67-12.68-12.67-30.33v-158.26q0-17.65 12.67-30.33 12.67-12.67 30.33-12.67H278l130.15-129.91q20.63-20.63 46.98-9.45 26.35 11.19 26.35 39.77v443.44q0 28.58-26.35 39.77-26.35 11.18-46.98-9.45z'/%3E%3C/svg%3E")}#volume-min{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='161 -960 960 960'%3E%3Cpath d='M438.65-357.87H321.87q-17.65 0-30.33-12.67-12.67-12.68-12.67-30.33v-158.26q0-17.65 12.67-30.33 12.68-12.67 30.33-12.67h116.78L568.8-732.04q20.63-20.63 46.98-9.45 26.35 11.19 26.35 39.77v443.44q0 28.58-26.35 39.77-26.35 11.18-46.98-9.45z'/%3E%3C/svg%3E")}#volume-mid{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='80 -960 960 960'%3E%3Cpath d='M357.98-357.87H241.2q-17.66 0-30.33-12.67-12.67-12.68-12.67-30.33v-158.26q0-17.65 12.67-30.33 12.67-12.67 30.33-12.67h116.78L487.65-731.8q20.63-20.64 47.1-9.57t26.47 39.65v443.44q0 28.58-26.47 39.65t-47.1-9.57zM741.8-480q0 42.48-20.47 80.09-20.48 37.61-54.94 60.82-10.22 5.98-20.19.25-9.98-5.73-9.98-17.44v-248.44q0-11.71 9.98-17.32 9.97-5.61 20.19.37 34.46 23.71 54.94 61.45Q741.8-522.48 741.8-480'/%3E%3C/svg%3E")}#volume-max{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='9 -960 960 960'%3E%3Cpath d='M754.22-480.5q0-78.52-41.88-143.9t-111.91-98.62q-14.47-6.74-20.47-20.96t-.53-28.93q5.74-15.72 20.34-22.46t29.58 0q92.48 42.46 147.97 127.05 55.48 84.6 55.48 187.82t-55.48 187.82q-55.49 84.59-147.97 127.05-14.98 6.74-29.58 0t-20.34-22.46q-5.47-14.71.53-28.93t20.47-20.96q70.03-33.24 111.91-98.62t41.88-143.9M286.98-357.87H170.2q-17.66 0-30.33-12.67-12.67-12.68-12.67-30.33v-158.26q0-17.65 12.67-30.33 12.67-12.67 30.33-12.67h116.78L416.65-731.8q20.63-20.64 47.1-9.57t26.47 39.65v443.44q0 28.58-26.47 39.65t-47.1-9.57zM670.8-480q0 42.48-20.47 80.09-20.48 37.61-54.94 60.82-10.22 5.98-20.19.25-9.98-5.73-9.98-17.44v-248.44q0-11.71 9.98-17.32 9.97-5.61 20.19.37 34.46 23.71 54.94 61.45Q670.8-522.48 670.8-480'/%3E%3C/svg%3E")}#volume-slider-text{text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:4.8ch}#hardware-acceleration-modal .modal-area{box-sizing:border-box;padding:16px 48px;text-align:center;width:95%}#acceleration-text{display:block;margin-bottom:8px}#clipboard-modal h2{margin-right:36px;margin-top:4px}#clipboard-modal p:last-child{margin-bottom:2px}@media (prefers-color-scheme:light){:host{--modal-background:#fafafa;--modal-foreground-rgb:0,0,0;--modal-foreground-filter:none}}@media (prefers-color-scheme:dark){:host{--modal-background:#282828;--modal-foreground-rgb:221,221,221;--modal-foreground-filter:invert(90%)}}`;function zh(){return S("style",{children:xh})}function Eh(){return S("style",{id:"dynamic-styles"})}function jh(){return J("div",{id:"container",children:[S("div",{id:"play-button",children:S("div",{class:"icon",children:J("svg",{xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",viewBox:"0 0 250 250",width:"100%",height:"100%",children:[J("defs",{xmlns:"http://www.w3.org/2000/svg",children:[J("linearGradient",{xmlns:"http://www.w3.org/2000/svg",id:"a",gradientUnits:"userSpaceOnUse",x1:"125",y1:"0",x2:"125",y2:"250",spreadMethod:"pad",children:[S("stop",{xmlns:"http://www.w3.org/2000/svg",offset:"0%","stop-color":"#FDA138"}),S("stop",{xmlns:"http://www.w3.org/2000/svg",offset:"100%","stop-color":"#FD3A40"})]}),J("g",{xmlns:"http://www.w3.org/2000/svg",id:"b",children:[S("path",{xmlns:"http://www.w3.org/2000/svg",fill:"url(#a)",d:"M250 125q0-52-37-88-36-37-88-37T37 37Q0 73 0 125t37 88q36 37 88 37t88-37q37-36 37-88M87 195V55l100 70-100 70z"}),S("path",{xmlns:"http://www.w3.org/2000/svg",fill:"#FFF",d:"M87 55v140l100-70L87 55z"})]})]}),S("use",{xmlns:"http://www.w3.org/2000/svg",href:"#b"})]})})}),J("div",{id:"unmute-overlay",children:[S("div",{class:"background"}),S("div",{class:"icon",children:J("svg",{id:"unmute-overlay-svg",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",viewBox:"0 0 512 584",width:"100%",height:"100%",children:[S("path",{xmlns:"http://www.w3.org/2000/svg",fill:"#FFF",stroke:"#FFF",d:"m457.941 256 47.029-47.029c9.372-9.373 9.372-24.568 0-33.941-9.373-9.373-24.568-9.373-33.941 0l-47.029 47.029-47.029-47.029c-9.373-9.373-24.568-9.373-33.941 0-9.372 9.373-9.372 24.568 0 33.941l47.029 47.029-47.029 47.029c-9.372 9.373-9.372 24.568 0 33.941 4.686 4.687 10.827 7.03 16.97 7.03s12.284-2.343 16.971-7.029l47.029-47.03 47.029 47.029c4.687 4.687 10.828 7.03 16.971 7.03s12.284-2.343 16.971-7.029c9.372-9.373 9.372-24.568 0-33.941z"}),S("path",{xmlns:"http://www.w3.org/2000/svg",fill:"#FFF",stroke:"#FFF",d:"m99 160h-55c-24.301 0-44 19.699-44 44v104c0 24.301 19.699 44 44 44h55c2.761 0 5-2.239 5-5v-182c0-2.761-2.239-5-5-5z"}),S("path",{xmlns:"http://www.w3.org/2000/svg",fill:"#FFF",stroke:"#FFF",d:"m280 56h-24c-5.269 0-10.392 1.734-14.578 4.935l-103.459 79.116c-1.237.946-1.963 2.414-1.963 3.972v223.955c0 1.557.726 3.026 1.963 3.972l103.459 79.115c4.186 3.201 9.309 4.936 14.579 4.936h23.999c13.255 0 24-10.745 24-24v-352.001c0-13.255-10.745-24-24-24z"}),S("text",{xmlns:"http://www.w3.org/2000/svg",id:"unmute-text",x:"256",y:"560","text-anchor":"middle","font-size":"60px",fill:"#FFF",stroke:"#FFF",children:"Click to unmute"})]})})]}),S("input",{"aria-hidden":"true",id:"virtual-keyboard",type:"text",autocomplete:"off",autocorrect:"off",autocapitalize:"none"})]})}function Ch(){return J("div",{id:"splash-screen",class:"hidden",children:[S("svg",{xmlns:"http://www.w3.org/2000/svg",class:"logo",preserveAspectRatio:"xMidYMid",viewBox:"0 0 380 150",children:J("g",{xmlns:"http://www.w3.org/2000/svg",children:[S("path",{xmlns:"http://www.w3.org/2000/svg",fill:"#966214",d:"M58.75 85.6q.75-.1 1.5-.35.85-.25 1.65-.75.55-.35 1.05-.8.5-.45.95-1 .5-.5.75-1.2-.05.05-.15.1-.1.15-.25.25l-.1.2q-.15.05-.25.1-.4 0-.8.05-.5-.25-.9-.5-.3-.1-.55-.3l-.6-.6-4.25-6.45-1.5 11.25h3.45m83.15-.2h3.45q.75-.1 1.5-.35.25-.05.45-.15.35-.15.65-.3l.5-.3q.25-.15.5-.35.45-.35.9-.75.45-.35.75-.85l.1-.1q.1-.2.2-.35.2-.3.35-.6l-.3.4-.15.15q-.5.15-1.1.1-.25 0-.4-.05-.5-.15-.8-.4-.15-.1-.25-.25-.3-.3-.55-.6l-.05-.05v-.05l-4.25-6.4-1.5 11.25m-21.15-3.95q-.3-.3-.55-.6l-.05-.05v-.05l-4.25-6.4-1.5 11.25h3.45q.75-.1 1.5-.35.85-.25 1.6-.75.75-.5 1.4-1.1.45-.35.75-.85.35-.5.65-1.05l-.45.55q-.5.15-1.1.1-.9 0-1.45-.7m59.15.3q-.75-.5-1.4-1-3.15-2.55-3.5-6.4l-1.5 11.25h21q-3.1-.25-5.7-.75-5.6-1.05-8.9-3.1m94.2 3.85h3.45q.6-.1 1.2-.3.4-.1.75-.2.35-.15.65-.3.7-.35 1.35-.8.75-.55 1.3-1.25.1-.15.25-.3-2.55-.25-3.25-1.8l-4.2-6.3-1.5 11.25m-45.3-4.85q-.5-.4-.9-.8-2.3-2.35-2.6-5.6l-1.5 11.25h21q-11.25-.95-16-4.85m97.7 4.85q-.3-.05-.6-.05-10.8-1-15.4-4.8-3.15-2.55-3.5-6.35l-1.5 11.2h21Z"}),S("path",{xmlns:"http://www.w3.org/2000/svg",fill:"var(--ruffle-orange)",d:"M92.6 54.8q-1.95-1.4-4.5-1.4H60.35q-1.35 0-2.6.45-1.65.55-3.15 1.8-2.75 2.25-3.25 5.25l-1.65 12h.05v.3l5.85 1.15h-9.5q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45-.5.3-.95.7-.45.35-.85.8-.35.4-.65.85-.3.45-.5.9-.15.45-.3.95l-5.85 41.6H50.3l5-35.5 1.5-11.25 4.25 6.45.6.6q.25.2.55.3.4.25.9.5.4-.05.8-.05.1-.05.25-.1l.1-.2q.15-.1.25-.25.1-.05.15-.1l.3-1.05 1.75-12.3h11.15L75.8 82.6h16.5l2.3-16.25h-.05l.8-5.7q.4-2.45-1-4.2-.35-.4-.75-.8-.25-.25-.55-.5-.2-.2-.45-.35m16.2 18.1h.05l-.05.3 5.85 1.15H105.2q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45-.5.3-1 .65-.4.4-.8.85-.25.3-.55.65-.05.1-.15.2-.25.45-.4.9-.2.45-.3.95-.1.65-.2 1.25-.2 1.15-.4 2.25l-4.3 30.6q-.25 3 1.75 5.25 1.6 1.8 4 2.15.6.1 1.25.1h27.35q3.25 0 6-2.25.35-.35.7-.55l.3-.2q2-2 2.25-4.5l1.65-11.6q.05-.05.1-.05l1.65-11.35h.05l.7-5.2 1.5-11.25 4.25 6.4v.05l.05.05q.25.3.55.6.1.15.25.25.3.25.8.4.15.05.4.05.6.05 1.1-.1l.15-.15.3-.4.3-1.05 1.3-9.05h-.05l.7-5.05h-.05l.15-1.25h-.05l1.65-11.7h-16.25l-2.65 19.5h.05v.2l-.05.1h.05l5.8 1.15H132.7q-.5.05-1 .15-.5.15-1 .35-.15.05-.3.15-.3.1-.55.25-.05 0-.1.05-.5.3-1 .65-.4.35-.7.7-.55.7-.95 1.45-.35.65-.55 1.4-.15.7-.25 1.4v.05q-.15 1.05-.35 2.05l-1.2 8.75v.1l-2.1 14.7H111.4l2.25-15.55h.05l.7-5.2 1.5-11.25 4.25 6.4v.05l.05.05q.25.3.55.6.55.7 1.45.7.6.05 1.1-.1l.45-.55.3-1.05 1.3-9.05h-.05l.7-5.05h-.05l.15-1.25h-.05l1.65-11.7h-16.25l-2.65 19.5m106.5-41.75q-2.25-2.25-5.5-2.25h-27.75q-3 0-5.75 2.25-1.3.95-2.05 2.1-.45.6-.7 1.2-.2.5-.35 1-.1.45-.15.95l-4.15 29.95h-.05l-.7 5.2h-.05l-.2 1.35h.05l-.05.3 5.85 1.15h-9.45q-2.1.05-3.95 1.6-1.9 1.55-2.25 3.55l-.5 3.5h-.05l-5.3 38.1h16.25l5-35.5 1.5-11.25q.35 3.85 3.5 6.4.65.5 1.4 1 3.3 2.05 8.9 3.1 2.6.5 5.7.75l1.75-11.25h-12.2l.4-2.95h-.05l.7-5.05h-.05q.1-.9.3-1.9.1-.75.2-1.6.85-5.9 2.15-14.9 0-.15.05-.25l.1-.9q.2-1.55.45-3.15h11.25l-3.1 20.8h16.5l4.1-28.05q.15-1.7-.4-3.15-.5-1.1-1.35-2.1m46.65 44.15q-.5.3-1 .65-.4.4-.8.85-.35.4-.7.85-.25.45-.45.9-.15.45-.3.95l-5.85 41.6h16.25l5-35.5 1.5-11.25 4.2 6.3q.7 1.55 3.25 1.8l.05-.1q.25-.4.35-.85l.3-1.05 1.8-14.05v-.05l5.35-37.45h-16.25l-6.15 44.3 5.85 1.15h-9.45q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45m5.4-38.9q.15-1.7-.4-3.15-.5-1.1-1.35-2.1-2.25-2.25-5.5-2.25h-27.75q-2.3 0-4.45 1.35-.65.35-1.3.9-1.3.95-2.05 2.1-.45.6-.7 1.2-.4.9-.5 1.95l-4.15 29.95h-.05l-.7 5.2h-.05l-.2 1.35h.05l-.05.3 5.85 1.15h-9.45q-2.1.05-3.95 1.6-1.9 1.55-2.25 3.55l-.5 3.5h-.05l-1.2 8.75v.1l-4.1 29.25h16.25l5-35.5 1.5-11.25q.3 3.25 2.6 5.6.4.4.9.8 4.75 3.9 16 4.85l1.75-11.25h-12.2l.4-2.95h-.05l.7-5.05h-.05q.15-.9.3-1.9.1-.75.25-1.6.15-1.25.35-2.65v-.05q.95-6.7 2.35-16.5h11.25l-3.1 20.8h16.5l4.1-28.05M345 66.35h-.05l1.15-8.2q.5-3-1.75-5.25-1.25-1.25-3-1.75-1-.5-2.25-.5h-27.95q-.65 0-1.3.1-2.5.35-4.7 2.15-2.75 2.25-3.25 5.25l-1.95 14.7v.05l-.05.3 5.85 1.15h-9.45q-1.9.05-3.6 1.35-.2.1-.35.25-1.9 1.55-2.25 3.55l-4.85 34.1q-.25 3 1.75 5.25 1.25 1.4 3 1.95 1.05.3 2.25.3H320q3.25 0 6-2.25 2.75-2 3.25-5l2.75-18.5h-16.5l-1.75 11H302.5l2.1-14.75h.05l.85-6 1.5-11.2q.35 3.8 3.5 6.35 4.6 3.8 15.4 4.8.3 0 .6.05h15.75L345 66.35m-16.4-.95-1.25 8.95h-11.3l.4-2.95h-.05l.7-5.05h-.1l.15-.95h11.45Z"})]})}),S("svg",{xmlns:"http://www.w3.org/2000/svg",class:"loading-animation",viewBox:"0 0 66 66",children:S("circle",{xmlns:"http://www.w3.org/2000/svg",class:"spinner",fill:"none","stroke-width":"6","stroke-linecap":"round",cx:"33",cy:"33",r:"30"})}),S("div",{class:"loadbar",children:S("div",{class:"loadbar-inner"})})]})}function Ph(){return S("div",{id:"save-manager",class:"modal hidden",children:J("div",{id:"modal-area",class:"modal-area",children:[S("span",{class:"close-modal"}),S("div",{class:"general-save-options",children:S("span",{class:"modal-button"})}),S("table",{id:"local-saves"})]})})}class ii{constructor(n){this.value=n}valueOf(){return this.value}}class X extends ii{constructor(n="???"){super(n)}toString(n){return`{${this.value}}`}}class ln extends ii{constructor(n,t={}){super(n),this.opts=t}toString(n){try{return n.memoizeIntlObject(Intl.NumberFormat,this.opts).format(this.value)}catch(t){return n.reportError(t),this.value.toString(10)}}}class rr extends ii{constructor(n,t={}){super(n),this.opts=t}toString(n){try{return n.memoizeIntlObject(Intl.DateTimeFormat,this.opts).format(this.value)}catch(t){return n.reportError(t),new Date(this.value).toISOString()}}}const cu=100,_h="⁨",Ah="⁩";function Dh(e,n,t){if(t===n||t instanceof ln&&n instanceof ln&&t.value===n.value)return!0;if(n instanceof ln&&typeof t=="string"){let r=e.memoizeIntlObject(Intl.PluralRules,n.opts).select(n.value);if(t===r)return!0}return!1}function du(e,n,t){return n[t]?Pt(e,n[t].value):(e.reportError(new RangeError("No default")),new X)}function Ua(e,n){const t=[],r=Object.create(null);for(const o of n)o.type==="narg"?r[o.name]=xr(e,o.value):t.push(xr(e,o));return{positional:t,named:r}}function xr(e,n){switch(n.type){case"str":return n.value;case"num":return new ln(n.value,{minimumFractionDigits:n.precision});case"var":return Fh(e,n);case"mesg":return Th(e,n);case"term":return Oh(e,n);case"func":return Lh(e,n);case"select":return Ih(e,n);default:return new X}}function Fh(e,{name:n}){let t;if(e.params)if(Object.prototype.hasOwnProperty.call(e.params,n))t=e.params[n];else return new X(`$${n}`);else if(e.args&&Object.prototype.hasOwnProperty.call(e.args,n))t=e.args[n];else return e.reportError(new ReferenceError(`Unknown variable: $${n}`)),new X(`$${n}`);if(t instanceof ii)return t;switch(typeof t){case"string":return t;case"number":return new ln(t);case"object":if(t instanceof Date)return new rr(t.getTime());default:return e.reportError(new TypeError(`Variable type not supported: $${n}, ${typeof t}`)),new X(`$${n}`)}}function Th(e,{name:n,attr:t}){const r=e.bundle._messages.get(n);if(!r)return e.reportError(new ReferenceError(`Unknown message: ${n}`)),new X(n);if(t){const o=r.attributes[t];return o?Pt(e,o):(e.reportError(new ReferenceError(`Unknown attribute: ${t}`)),new X(`${n}.${t}`))}return r.value?Pt(e,r.value):(e.reportError(new ReferenceError(`No value: ${n}`)),new X(n))}function Oh(e,{name:n,attr:t,args:r}){const o=`-${n}`,i=e.bundle._terms.get(o);if(!i)return e.reportError(new ReferenceError(`Unknown term: ${o}`)),new X(o);if(t){const l=i.attributes[t];if(l){e.params=Ua(e,r).named;const s=Pt(e,l);return e.params=null,s}return e.reportError(new ReferenceError(`Unknown attribute: ${t}`)),new X(`${o}.${t}`)}e.params=Ua(e,r).named;const a=Pt(e,i.value);return e.params=null,a}function Lh(e,{name:n,args:t}){let r=e.bundle._functions[n];if(!r)return e.reportError(new ReferenceError(`Unknown function: ${n}()`)),new X(`${n}()`);if(typeof r!="function")return e.reportError(new TypeError(`Function ${n}() is not callable`)),new X(`${n}()`);try{let o=Ua(e,t);return r(o.positional,o.named)}catch(o){return e.reportError(o),new X(`${n}()`)}}function Ih(e,{selector:n,variants:t,star:r}){let o=xr(e,n);if(o instanceof X)return du(e,t,r);for(const i of t){const a=xr(e,i.key);if(Dh(e,o,a))return Pt(e,i.value)}return du(e,t,r)}function Zd(e,n){if(e.dirty.has(n))return e.reportError(new RangeError("Cyclic reference")),new X;e.dirty.add(n);const t=[],r=e.bundle._useIsolating&&n.length>1;for(const o of n){if(typeof o=="string"){t.push(e.bundle._transform(o));continue}if(e.placeables++,e.placeables>cu)throw e.dirty.delete(n),new RangeError(`Too many placeables expanded: ${e.placeables}, max allowed is ${cu}`);r&&t.push(_h),t.push(xr(e,o).toString(e)),r&&t.push(Ah)}return e.dirty.delete(n),t.join("")}function Pt(e,n){return typeof n=="string"?e.bundle._transform(n):Zd(e,n)}class Mh{constructor(n,t,r){this.dirty=new WeakSet,this.params=null,this.placeables=0,this.bundle=n,this.errors=t,this.args=r}reportError(n){if(!this.errors||!(n instanceof Error))throw n;this.errors.push(n)}memoizeIntlObject(n,t){let r=this.bundle._intls.get(n);r||(r={},this.bundle._intls.set(n,r));let o=JSON.stringify(t);return r[o]||(r[o]=new n(this.bundle.locales,t)),r[o]}}function Mo(e,n){const t=Object.create(null);for(const[r,o]of Object.entries(e))n.includes(r)&&(t[r]=o.valueOf());return t}const fu=["unitDisplay","currencyDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits"];function Nh(e,n){let t=e[0];if(t instanceof X)return new X(`NUMBER(${t.valueOf()})`);if(t instanceof ln)return new ln(t.valueOf(),{...t.opts,...Mo(n,fu)});if(t instanceof rr)return new ln(t.valueOf(),{...Mo(n,fu)});throw new TypeError("Invalid argument to NUMBER")}const pu=["dateStyle","timeStyle","fractionalSecondDigits","dayPeriod","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName"];function $h(e,n){let t=e[0];if(t instanceof X)return new X(`DATETIME(${t.valueOf()})`);if(t instanceof rr)return new rr(t.valueOf(),{...t.opts,...Mo(n,pu)});if(t instanceof ln)return new rr(t.valueOf(),{...Mo(n,pu)});throw new TypeError("Invalid argument to DATETIME")}const mu=new Map;function qh(e){const n=Array.isArray(e)?e.join(" "):e;let t=mu.get(n);return t===void 0&&(t=new Map,mu.set(n,t)),t}class Wh{constructor(n,{functions:t,useIsolating:r=!0,transform:o=i=>i}={}){this._terms=new Map,this._messages=new Map,this.locales=Array.isArray(n)?n:[n],this._functions={NUMBER:Nh,DATETIME:$h,...t},this._useIsolating=r,this._transform=o,this._intls=qh(n)}hasMessage(n){return this._messages.has(n)}getMessage(n){return this._messages.get(n)}addResource(n,{allowOverrides:t=!1}={}){const r=[];for(let o=0;o<n.body.length;o++){let i=n.body[o];if(i.id.startsWith("-")){if(t===!1&&this._terms.has(i.id)){r.push(new Error(`Attempt to override an existing term: "${i.id}"`));continue}this._terms.set(i.id,i)}else{if(t===!1&&this._messages.has(i.id)){r.push(new Error(`Attempt to override an existing message: "${i.id}"`));continue}this._messages.set(i.id,i)}}return r}formatPattern(n,t=null,r=null){if(typeof n=="string")return this._transform(n);let o=new Mh(this,r,t);try{return Zd(o,n).toString(o)}catch(i){if(o.errors&&i instanceof Error)return o.errors.push(i),new X().toString(o);throw i}}}const Mi=/^(-?[a-zA-Z][\w-]*) *= */gm,hu=/\.([a-zA-Z][\w-]*) *= */y,Uh=/\*?\[/y,Ni=/(-?[0-9]+(?:\.([0-9]+))?)/y,Bh=/([a-zA-Z][\w-]*)/y,vu=/([$-])?([a-zA-Z][\w-]*)(?:\.([a-zA-Z][\w-]*))?/y,Vh=/^[A-Z][A-Z0-9_-]*$/,Xr=/([^{}\n\r]+)/y,Hh=/([^\\"\n\r]*)/y,gu=/\\([\\"])/y,wu=/\\u([a-fA-F0-9]{4})|\\U([a-fA-F0-9]{6})/y,Qh=/^\n+/,yu=/ +$/,Kh=/ *\r?\n/g,Jh=/( *)$/,Zh=/{\s*/y,ku=/\s*}/y,Gh=/\[\s*/y,Yh=/\s*] */y,Xh=/\s*\(\s*/y,ev=/\s*->\s*/y,nv=/\s*:\s*/y,tv=/\s*,?\s*/y,rv=/\s+/y;class ov{constructor(n){this.body=[],Mi.lastIndex=0;let t=0;for(;;){let w=Mi.exec(n);if(w===null)break;t=Mi.lastIndex;try{this.body.push(s(w[1]))}catch(b){if(b instanceof SyntaxError)continue;throw b}}function r(w){return w.lastIndex=t,w.test(n)}function o(w,b){if(n[t]===w)return t++,!0;if(b)throw new b(`Expected ${w}`);return!1}function i(w,b){if(r(w))return t=w.lastIndex,!0;if(b)throw new b(`Expected ${w.toString()}`);return!1}function a(w){w.lastIndex=t;let b=w.exec(n);if(b===null)throw new SyntaxError(`Expected ${w.toString()}`);return t=w.lastIndex,b}function l(w){return a(w)[1]}function s(w){let b=p(),O=u();if(b===null&&Object.keys(O).length===0)throw new SyntaxError("Expected message value or attributes");return{id:w,value:b,attributes:O}}function u(){let w=Object.create(null);for(;r(hu);){let b=l(hu),O=p();if(O===null)throw new SyntaxError("Expected attribute value");w[b]=O}return w}function p(){let w;if(r(Xr)&&(w=l(Xr)),n[t]==="{"||n[t]==="}")return h(w?[w]:[],1/0);let b=P();return b?w?h([w,b],b.length):(b.value=z(b.value,Qh),h([b],b.length)):w?z(w,yu):null}function h(w=[],b){for(;;){if(r(Xr)){w.push(l(Xr));continue}if(n[t]==="{"){w.push(m());continue}if(n[t]==="}")throw new SyntaxError("Unbalanced closing brace");let xe=P();if(xe){w.push(xe),b=Math.min(b,xe.length);continue}break}let O=w.length-1,Se=w[O];typeof Se=="string"&&(w[O]=z(Se,yu));let Me=[];for(let xe of w)xe instanceof bu&&(xe=xe.value.slice(0,xe.value.length-b)),xe&&Me.push(xe);return Me}function m(){i(Zh,SyntaxError);let w=g();if(i(ku))return w;if(i(ev)){let b=L();return i(ku,SyntaxError),{type:"select",selector:w,...b}}throw new SyntaxError("Unclosed placeable")}function g(){if(n[t]==="{")return m();if(r(vu)){let[,w,b,O=null]=a(vu);if(w==="$")return{type:"var",name:b};if(i(Xh)){let Se=y();if(w==="-")return{type:"term",name:b,attr:O,args:Se};if(Vh.test(b))return{type:"func",name:b,args:Se};throw new SyntaxError("Function names must be all upper-case")}return w==="-"?{type:"term",name:b,attr:O,args:[]}:{type:"mesg",name:b,attr:O}}return c()}function y(){let w=[];for(;;){switch(n[t]){case")":return t++,w;case void 0:throw new SyntaxError("Unclosed argument list")}w.push(R()),i(tv)}}function R(){let w=g();return w.type!=="mesg"?w:i(nv)?{type:"narg",name:w.name,value:c()}:w}function L(){let w=[],b=0,O;for(;r(Uh);){o("*")&&(O=b);let Se=d(),Me=p();if(Me===null)throw new SyntaxError("Expected variant value");w[b++]={key:Se,value:Me}}if(b===0)return null;if(O===void 0)throw new SyntaxError("Expected default variant");return{variants:w,star:O}}function d(){i(Gh,SyntaxError);let w;return r(Ni)?w=f():w={type:"str",value:l(Bh)},i(Yh,SyntaxError),w}function c(){if(r(Ni))return f();if(n[t]==='"')return v();throw new SyntaxError("Invalid expression")}function f(){let[,w,b=""]=a(Ni),O=b.length;return{type:"num",value:parseFloat(w),precision:O}}function v(){o('"',SyntaxError);let w="";for(;;){if(w+=l(Hh),n[t]==="\\"){w+=x();continue}if(o('"'))return{type:"str",value:w};throw new SyntaxError("Unclosed string literal")}}function x(){if(r(gu))return l(gu);if(r(wu)){let[,w,b]=a(wu),O=parseInt(w||b,16);return O<=55295||57344<=O?String.fromCodePoint(O):"�"}throw new SyntaxError("Unknown escape sequence")}function P(){let w=t;switch(i(rv),n[t]){case".":case"[":case"*":case"}":case void 0:return!1;case"{":return E(n.slice(w,t))}return n[t-1]===" "?E(n.slice(w,t)):!1}function z(w,b){return w.replace(b,"")}function E(w){let b=w.replace(Kh,`
`),O=Jh.exec(w)[1].length;return new bu(b,O)}}}class bu{constructor(n,t){this.value=n,this.length=t}}const iv="([a-z]{2,3}|\\*)",av="(?:-([a-z]{4}|\\*))",lv="(?:-([a-z]{2}|\\*))",sv="(?:-(([0-9][a-z0-9]{3}|[a-z0-9]{5,8})|\\*))",uv=new RegExp(`^${iv}${av}?${lv}?${sv}?$`,"i");class or{constructor(n){const t=uv.exec(n.replace(/_/g,"-"));if(!t){this.isWellFormed=!1;return}let[,r,o,i,a]=t;r&&(this.language=r.toLowerCase()),o&&(this.script=o[0].toUpperCase()+o.slice(1)),i&&(this.region=i.toUpperCase()),this.variant=a,this.isWellFormed=!0}isEqual(n){return this.language===n.language&&this.script===n.script&&this.region===n.region&&this.variant===n.variant}matches(n,t=!1,r=!1){return(this.language===n.language||t&&this.language===void 0||r&&n.language===void 0)&&(this.script===n.script||t&&this.script===void 0||r&&n.script===void 0)&&(this.region===n.region||t&&this.region===void 0||r&&n.region===void 0)&&(this.variant===n.variant||t&&this.variant===void 0||r&&n.variant===void 0)}toString(){return[this.language,this.script,this.region,this.variant].filter(n=>n!==void 0).join("-")}clearVariants(){this.variant=void 0}clearRegion(){this.region=void 0}addLikelySubtags(){const n=dv(this.toString().toLowerCase());return n?(this.language=n.language,this.script=n.script,this.region=n.region,this.variant=n.variant,!0):!1}}const Ru={ar:"ar-arab-eg","az-arab":"az-arab-ir","az-ir":"az-arab-ir",be:"be-cyrl-by",da:"da-latn-dk",el:"el-grek-gr",en:"en-latn-us",fa:"fa-arab-ir",ja:"ja-jpan-jp",ko:"ko-kore-kr",pt:"pt-latn-br",sr:"sr-cyrl-rs","sr-ru":"sr-latn-ru",sv:"sv-latn-se",ta:"ta-taml-in",uk:"uk-cyrl-ua",zh:"zh-hans-cn","zh-hant":"zh-hant-tw","zh-hk":"zh-hant-hk","zh-mo":"zh-hant-mo","zh-tw":"zh-hant-tw","zh-gb":"zh-hant-gb","zh-us":"zh-hant-us"},cv=["az","bg","cs","de","es","fi","fr","hu","it","lt","lv","nl","pl","ro","ru"];function dv(e){if(Object.prototype.hasOwnProperty.call(Ru,e))return new or(Ru[e]);const n=new or(e);return n.language&&cv.includes(n.language)?(n.region=n.language.toUpperCase(),n):null}function fv(e,n,t){const r=new Set,o=new Map;for(let i of n)new or(i).isWellFormed&&o.set(i,new or(i));e:for(const i of e){const a=i.toLowerCase(),l=new or(a);if(l.language!==void 0){for(const s of o.keys())if(a===s.toLowerCase()){if(r.add(s),o.delete(s),t==="lookup")return Array.from(r);if(t==="filtering")continue;continue e}for(const[s,u]of o.entries())if(u.matches(l,!0,!1)){if(r.add(s),o.delete(s),t==="lookup")return Array.from(r);if(t==="filtering")continue;continue e}if(l.addLikelySubtags()){for(const[s,u]of o.entries())if(u.matches(l,!0,!1)){if(r.add(s),o.delete(s),t==="lookup")return Array.from(r);if(t==="filtering")continue;continue e}}l.clearVariants();for(const[s,u]of o.entries())if(u.matches(l,!0,!0)){if(r.add(s),o.delete(s),t==="lookup")return Array.from(r);if(t==="filtering")continue;continue e}if(l.clearRegion(),l.addLikelySubtags()){for(const[s,u]of o.entries())if(u.matches(l,!0,!1)){if(r.add(s),o.delete(s),t==="lookup")return Array.from(r);if(t==="filtering")continue;continue e}}l.clearRegion();for(const[s,u]of o.entries())if(u.matches(l,!0,!0)){if(r.add(s),o.delete(s),t==="lookup")return Array.from(r);if(t==="filtering")continue;continue e}}}return Array.from(r)}function pv(e,n,{strategy:t="filtering",defaultLocale:r}={}){const o=fv(Array.from(e??[]).map(String),Array.from(n??[]).map(String),t);if(t==="lookup"){if(r===void 0)throw new Error("defaultLocale cannot be undefined for strategy `lookup`");o.length===0&&o.push(r)}else r&&!o.includes(r)&&o.push(r);return o}const mv={"ar-SA":{"context_menu.ftl":`context-menu-download-swf = تحميل .swf
context-menu-copy-debug-info = نسخ معلومات التصحيح
context-menu-open-save-manager = فتح مدير الحفظ
context-menu-about-ruffle =
    { $flavor ->
        [extension] حول ملحق Ruffle ({ $version })
       *[other] حول Ruffle ({ $version })
    }
context-menu-hide = إخفاء هذه القائمة
context-menu-exit-fullscreen = الخروج من وضعية الشاشة الكاملة
context-menu-enter-fullscreen = تفعيل وضعية الشاشة الكاملة
context-menu-volume-controls = التحكم بالصوت
`,"messages.ftl":`message-cant-embed =
    لم يكن Ruffle قادر على تشغيل الفلاش المضمنة في هذه الصفحة.
    يمكنك محاولة فتح الملف في علامة تبويب منفصلة لتجاوز هذه المشكلة.
panic-title = لقد حدث خطأ ما :(
more-info = معلومات أكثر
run-anyway = التشغيل على أي حال
continue = الاستمرار
report-bug = إبلاغ عن خلل
update-ruffle = تحديث رفل
ruffle-demo = ويب التجريبي
ruffle-desktop = برنامج سطح المكتب
ruffle-wiki = عرض ويكي Ruffle
enable-hardware-acceleration = يبدو أن تسريع الجهاز معطل. على الرغم من أن Ruffle قد يعمل، إلا أنه قد يكون بطيئًا جدًا. يمكنك معرفة كيفية تمكين تسريع الأجهزة باتباع الرابط أدناه:
enable-hardware-acceleration-link = الأسئلة الشائعة - تسريع أجهزة Chrome
view-error-details = عرض تفاصيل الخطأ
open-in-new-tab = فتح في علامة تبويب جديدة
click-to-unmute = انقر لإلغاء الكتم
clipboard-message-title = النسخ واللصق في Ruffle
clipboard-message-description =
    {$variant ->
       *[unsupported] متصفحك لا يدعم الوصول للحافظة الكاملة،
        [access-denied] تم رفض الوصول للحافظة،
    } لكن يمكنك إستخدام هذه الاختصارات دائمًا:
clipboard-message-copy = { " " } للنسخ
clipboard-message-cut = { " " } للقص
clipboard-message-paste = { " " } للصق
error-file-protocol =
    يبدو أنك تقوم بتشغيل Ruffle على بروتوكول "الملف:".
    هذا لن يعمل لأن المتصفحات تمنع العديد من الميزات من العمل لأسباب أمنية.
    بدلاً من ذلك، ندعوك إلى إعداد خادم محلي أو استخدام عرض الويب أو تطبيق سطح المكتب.
error-javascript-config =
    تعرض Ruffle إلى مشكلة كبيرة بسبب الإعدادات الخاطئة للجافا سكريبت.
    إذا كنت مسؤول الخادم، نحن ندعوك إلى التحقق من تفاصيل الخطأ لمعرفة سبب المشكلة.
    يمكنك أيضا الرجوع إلى ويكي Ruffle للحصول على المساعدة.
error-wasm-not-found =
    فشل Ruffle في تحميل مكون الملف ".wasm" المطلوب.
    إذا كنت مسؤول الخادم، يرجى التأكد من أن الملف قد تم تحميله بشكل صحيح.
    إذا استمرت المشكلة، قد تحتاج إلى استخدام إعدادات "المسار العام": الرجاء مراجعة ويكي Ruffle للحصول على المساعدة.
error-wasm-mime-type =
    واجه Ruffle مشكلة كبيرة أثناء محاولة التهيئة.
    خادم الويب هذا لا يخدم ملفات ". wasm" مع نوع MIME الصحيح.
    إذا كنت مسؤول الخادم، يرجى مراجعة ويكي Ruffle للحصول على المساعدة.
error-invalid-swf =
    لا يمكن لـ Ruffle تحليل الملف المطلوب.
    السبب الأكثر إحتمالاً هو أن الملف المطلوب ليس صالحا.
error-swf-fetch =
    فشل Ruffle في تحميل ملف فلاش SWF.
    السبب الأكثر احتمالاً هو أن الملف لم يعد موجود، لذلك لا يوجد شيء ليحمله رفل.
    حاول الاتصال بمسؤول الموقع للحصول على المساعدة.
error-swf-cors =
    فشل Ruffle في تحميل ملف فلاش SWF.
    من المحتمل أن تم حظر إحضار الملف بواسطة سياسة CORS.
    إذا كنت مسؤول الخادم، يرجى مراجعة رفل ويكي للحصول على المساعدة.
error-wasm-cors =
    فشل Ruffle في تحميل مكون ملف ".wasm" المطلوب.
    من المحتمل أن تم حظر إحضار الملف بواسطة سياسة CORS.
    إذا كنت مسؤول الخادم، يرجى مراجعة رفل ويكي للحصول على المساعدة.
error-wasm-invalid =
    واجه Ruffle مشكلة كبيرة أثناء محاولة التهيئة.
    يبدو أن هذه الصفحة تحتوي على ملفات مفقودة أو غير صالحة لتشغيل Ruffle.
    إذا كنت مسؤول الخادم، يرجى مراجعة ويكي Ruffle للحصول على المساعدة.
error-wasm-download =
    واجه Ruffle مشكلة كبيرة أثناء محاولتها التهيئة.
    هذا يمكن أن يحل نفسه في كثير من الأحيان، لذلك يمكنك محاولة إعادة تحميل الصفحة.
    وإلا يرجى الاتصال بمدير الموقع.
error-wasm-disabled-on-edge =
    فشل Ruffle في تحميل مكون الملف ".wasm" المطلوب.
    لإصلاح هذه المشكلة، حاول فتح إعدادات المتصفح الخاص بك، انقر فوق "الخصوصية، البحث، الخدمات"، والتمرير لأسفل، وإيقاف "تعزيز أمانك على الويب".
    هذا سيسمح للمتصفح الخاص بك بتحميل الملفات ".wasm" المطلوبة.
    إذا استمرت المشكلة، قد تحتاج إلى استخدام متصفح أخر.
error-javascript-conflict =
    واجه Ruffle مشكلة كبيرة أثناء محاولة التهيئة.
    يبدو أن هذه الصفحة تستخدم كود JavaScript الذي يتعارض مع Ruffle.
    إذا كنت مسؤول الخادم، فإننا ندعوك إلى محاولة تحميل الملف على صفحة فارغة.
error-javascript-conflict-outdated = يمكنك أيضًا محاولة تحميل نسخة أحدث من رفل التي قد تحل المشكلة (النسخة الحالية قديمة: { $buildDate }).
error-csp-conflict =
    واجه Ruffle مشكلة كبيرة أثناء محاولة التهيئة.
    لا تسمح سياسة أمان المحتوى لخادم الويب هذا بتشغيل مكون ".wasm" المطلوب.
    إذا كنت مسؤول الخادم، يرجى الرجوع إلى ويكي Ruffle للحصول على المساعدة.
error-unknown =
    واجه Ruffle مشكلة كبيرة أثناء محاولة عرض محتوى الفلاش هذا.
    { $outdated ->
        [true] إذا كنت مسؤول الخادم، الرجاء محاولة تحميل إصدار أحدث من Ruffle (النسخة الحالية قديمة: { $buildDate }).
       *[false] ليس من المفترض أن يحدث هذا، لذلك نحن نقدر حقًا إذا قمت بالتبليغ عن الخطأ!
    }
`,"save-manager.ftl":`save-delete-prompt = هل أنت متأكد أنك تريد حذف ملف الحفظ هذا؟
save-reload-prompt =
    الطريقة الوحيدة ل{ $action ->
        [delete] حذف
       *[replace] إستبدال
    } هذا الملف الحفظ دون تعارض محتمل هي لإعادة تحميل هذا المحتوى. هل ترغب في المتابعة على أي حال؟
save-download = تحميل
save-replace = استبدال
save-delete = حذف
save-backup-all = تحميل جميع ملفات الحفظ
`,"volume-controls.ftl":`volume-controls-mute = كتم
volume-controls-unmute = إلغاء الكتم
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
view-error-details = Fehlerdetails anzeigen
open-in-new-tab = In einem neuen Tab öffnen
click-to-unmute = Klicke zum Entmuten
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
volume-controls-unmute = Desenmudecer
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
view-error-details = Détails de l'erreur
open-in-new-tab = Ouvrir dans un nouvel onglet
click-to-unmute = Cliquez pour activer le son
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
`,"volume-controls.ftl":`volume-controls-mute = Muet
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
ruffle-desktop = デスクトップアプリケーション
ruffle-wiki = Ruffle Wikiを表示
view-error-details = エラーの詳細を表示
open-in-new-tab = 新しいタブで開く
click-to-unmute = クリックでミュートを解除
error-file-protocol =
    Ruffleを"file:"プロトコルで使用しているようです。
    ブラウザはセキュリティ上の理由から殆どの機能を制限しているため、正しく動作しません。
    ローカルサーバーをセットアップするか、ウェブデモまたはデスクトップアプリをご利用ください。
error-javascript-config =
    JavaScriptの設定が正しくないため、Ruffleで問題が発生しました。
    サーバー管理者の方は、エラーの詳細から、どのパラメーターに問題があるのかを確認してください。
    Ruffleのwikiを参照することで、解決方法が見つかるかもしれません。
error-wasm-not-found =
    Ruffleの初期化時に重大な問題が発生しました。
    このWebサーバーのコンテンツセキュリティポリシーが、実行に必要となる「.wasm」コンポーネントの実行を許可していません。サーバーの管理者の場合は、ファイルが正しくアップロードされているか確認をしてください。この問題が解決しない場合は、「publicPath」の設定を使用する必要があります。
    サーバーの管理者は、Ruffleのwikiを参照してください。
error-wasm-mime-type =
    Ruffleの初期化に失敗する大きな問題が発生しました。
    このWebサーバーは正しいMIMEタイプの「.wasm」ファイルを提供していません。
    サーバーの管理者は、Ruffleのwikiを参照してください。
error-invalid-swf =
    Ruffle は要求されたファイルを解析できません。
    最も考えられる原因は、要求されたファイルが有効な SWF でないことです。
error-swf-fetch =
    RuffleがFlash SWFファイルの読み込みに失敗しました。
    最も考えられる原因は、SWFファイルが既に存在しない事でRuffleが読み込みに失敗するという問題です。
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
    この問題はページを再読み込みする事で大抵は解決するはずなので行なってみてください。
    もしも解決しない場合は、Webサイトの管理者にお問い合わせください。
error-wasm-disabled-on-edge =
    Ruffleに必要となる「.wasm」ファイルコンポーネントの読み込みに失敗しました。
    この問題を解決するにはブラウザーの設定を開き、「プライバシー、検索、サービス」をクリックし、下にスクロールで「Web上のセキュリティを強化する」をオフにしてみてください。
    これで必要となる「.wasm」ファイルが読み込まれるようになります。
    それでも問題が解決しない場合、別のブラウザーを使用する必要があるかもしれません。
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
`,"volume-controls.ftl":`volume-controls-mute = 消音
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
view-error-details = Foutdetails tonen
open-in-new-tab = Openen in een nieuw tabblad
click-to-unmute = Klik om te ontdempen
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
ruffle-desktop = Aplikacja na komputer
ruffle-wiki = Zobacz Wiki Ruffle
view-error-details = Zobacz szczegóły błędu
open-in-new-tab = Otwórz w nowej karcie
click-to-unmute = Kliknij aby wyłączyć wyciszenie
error-file-protocol =
    Wygląda na to, że używasz Ruffle w protokole "plik:".
    To nie działa ponieważ przeglądarka blokuje wiele funkcji przed działaniem ze względów bezpieczeństwa.
    Zamiast tego zapraszamy do konfiguracji serwera lokalnego lub użycia aplikacji demo lub desktopowej.
error-javascript-config =
    Ruffle napotkał poważny problem z powodu nieprawidłowej konfiguracji JavaScript.
    Jeśli jesteś administratorem serwera, prosimy o sprawdzenie szczegółów błędu, aby dowiedzieć się, który parametr jest błędny.
    Możesz również zapoznać się z wiki Ruffle po pomoc.
error-wasm-not-found =
    Ruffle nie udało się załadować wymaganego komponentu pliku ".wasm".
    Jeśli jesteś administratorem serwera, upewnij się, że plik został poprawnie przesłany.
    Jeśli problem będzie się powtarzał, być może będziesz musiał użyć ustawienia "publicPath": zapoznaj się z wiki Ruffle aby uzyskać pomoc.
error-wasm-mime-type =
    Ruffle napotkał poważny problem podczas próby zainicjowania.
    Ten serwer internetowy nie obsługuje ". asm" pliki z poprawnym typem MIME.
    Jeśli jesteś administratorem serwera, zapoznaj się z wiki Ruffle aby uzyskać pomoc.
error-invalid-swf =
    Ruffle nie może przetworzyć żądanego pliku.
    Prawdopodobnie to nie jest poprawny plik SWF.
error-swf-fetch =
    Ruffle nie udało się załadować pliku Flash SWF.
    Najbardziej prawdopodobnym powodem jest to, że plik już nie istnieje, więc Ruffle nie ma nic do załadowania.
    Spróbuj skontaktować się z administratorem witryny, aby uzyskać pomoc.
error-swf-cors =
    Ruffle nie udało się załadować pliku Flash SWF.
    Dostęp do pobierania został prawdopodobnie zablokowany przez politykę CORS.
    Jeśli jesteś administratorem serwera, prosimy o pomoc z wiki Ruffle.
error-wasm-cors =
    Ruffle nie udało się załadować wymaganego komponentu pliku ".wasm".
    Dostęp do pobierania został prawdopodobnie zablokowany przez politykę CORS.
    Jeśli jesteś administratorem serwera, prosimy o pomoc z wiki Ruffle.
error-wasm-invalid =
    Ruffle napotkał poważny problem podczas próby zainicjowania.
    Wygląda na to, że ta strona ma brakujące lub nieprawidłowe pliki do uruchomienia Ruffle.
    Jeśli jesteś administratorem serwera, prosimy o pomoc z wiki Ruffle.
error-wasm-download =
    Ruffle napotkał poważny problem podczas próby zainicjowania.
    Może to często rozwiązać siebie, więc możesz spróbować odświeżyć stronę.
    W przeciwnym razie skontaktuj się z administratorem witryny.
error-wasm-disabled-on-edge =
    Ruffle nie udało się załadować wymaganego komponentu pliku ".wasm".
    Aby to naprawić, spróbuj otworzyć ustawienia przeglądarki, klikając "Prywatność, wyszukiwanie i usługi", przewijając w dół i wyłączając "Zwiększ bezpieczeństwo w sieci".
    Pozwoli to przeglądarce załadować wymagane pliki ".wasm".
    Jeśli problem będzie się powtarzał, być może będziesz musiał użyć innej przeglądarki.
error-javascript-conflict =
    Ruffle napotkał poważny problem podczas próby zainicjowania.
    Wygląda na to, że ta strona używa kodu JavaScript, który koliduje z Ruffle.
    Jeśli jesteś administratorem serwera, zapraszamy Cię do ładowania pliku na pustej stronie.
error-javascript-conflict-outdated = Możesz również spróbować przesłać nowszą wersję Ruffle, która może ominąć problem (obecna wersja jest przestarzała: { $buildDate }).
error-csp-conflict =
    Ruffle napotkał poważny problem podczas próby zainicjowania.
    Polityka bezpieczeństwa zawartości tego serwera nie zezwala na wymagany ". wasm" komponent do uruchomienia.
    Jeśli jesteś administratorem serwera, zapoznaj się z wiki Ruffle po pomoc.
error-unknown =
    Ruffle napotkał poważny problem podczas próby wyświetlenia tej zawartości Flash.
    { $outdated ->
        [true] Jeśli jesteś administratorem serwera, spróbuj przesłać nowszą wersję Ruffle (obecna wersja jest przestarzała: { $buildDate }).
       *[false] To nie powinno się wydarzyć, więc bylibyśmy wdzięczni, gdybyś mógł zgłosić błąd!
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
view-error-details = Ver detalhes do erro
open-in-new-tab = Abrir em uma nova guia
click-to-unmute = Clique para ativar o som
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
view-error-details = Ver detalhes do erro
open-in-new-tab = Abrir num novo separador
click-to-unmute = Clique para ativar o som
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
view-error-details = Visa Felinformation
open-in-new-tab = Öppna i en ny flik
click-to-unmute = Klicka för ljud
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
    目前Ruffle沒辦法執行嵌入式Flash。
    你可以在新分頁中開啟來解決這個問題。
panic-title = 完蛋，出問題了 :(
more-info = 更多資訊
run-anyway = 直接執行
continue = 繼續
report-bug = 回報BUG
update-ruffle = 更新Ruffle
ruffle-demo = 網頁展示
ruffle-desktop = 桌面應用程式
ruffle-wiki = 查看Ruffle Wiki
enable-hardware-acceleration =
    看起來你的硬體加速沒有開啟，雖然Ruffle還可以執行，但是你會感覺到會很慢。
    你可以在下方連結找到如何開啟硬體加速。
enable-hardware-acceleration-link = FAQ - Chrome硬體加速
view-error-details = 檢視錯誤詳細資料
open-in-new-tab = 開啟新增分頁
click-to-unmute = 點擊以取消靜音
clipboard-message-title = 在Ruffle執行複製、貼上。
clipboard-message-description =
    { $variant ->
       *[unsupported] 你的瀏覽器不支援完整剪貼簿使用,
        [access-denied] 剪貼簿使用權被拒絕訪問,
    } 你可以直接使用快捷鍵:
clipboard-message-copy = { " " } 複製
clipboard-message-cut = { " " } 剪下
clipboard-message-paste = { " " } 貼上
error-file-protocol =
    看起來你想要用Ruffle來執行"file:"的協議。
    因為瀏覽器禁了很多功能以資安的理由來講。
    我們建議你建立本地伺服器或著直接使用網頁展示或桌面應用程式。
error-javascript-config =
    目前Ruffle遇到不正確的JavaScript配置。
    如果你是伺服器管理員，我們建議你檢查哪個環節出錯。
    或著你可以查詢Ruffle wiki得到需求幫助。
error-wasm-not-found =
    目前Ruffle找不到".wasm"檔案。
    如果你是伺服器管理員，確保檔案是否放對位置。
    如果還是有問題的話，你要用"publicPath"來設定: 或著查詢Ruffle wiki得到需求幫助。
error-wasm-mime-type =
    目前Ruffle初始化時遇到重大問題。
    這網頁伺服器並沒有服務".wasm"檔案或正確的網際網路媒體類型。
    如果你是伺服器管理員，請查詢Ruffle wiki得到需求幫助。
error-invalid-swf =
    目前Ruffle無法讀取Flash的SWF檔案。
    很有可能要讀取的檔案並一個不是有效的SWF。
error-swf-fetch =
    目前Ruffle無法讀取Flash的SWF檔案。
    很有可能要讀取的檔案不存在，所以Ruffle讀不到東西。
    請嘗試溝通伺服器管理員得到需求幫助。
error-swf-cors =
    目前Ruffle無法讀取Flash的SWF檔案。
    看起來是使用權被跨來源資源共用機制被擋到了。
    如果你是伺服器管理員，請查詢Ruffle wiki得到需求幫助。
error-wasm-cors =
    目前Ruffle無法讀取".wasm"檔案。
    看起來是使用權被跨來源資源共用機制被擋到了。
    如果你是伺服器管理員，請查詢Ruffle wiki得到需求幫助。
error-wasm-invalid =
    目前Ruffle初始化時遇到重大問題。
    看起來這網頁有缺失檔案導致Ruffle無法運行。
    如果你是伺服器管理員，請查詢Ruffle wiki得到需求幫助。
error-wasm-download =
    目前Ruffle初始化時遇到重大問題。
    這可以你自己解決，你只要重新整理就好了。
    否則，請嘗試溝通伺服器管理員得到需求幫助。
error-wasm-disabled-on-edge =
    目前Ruffle無法讀取".wasm"檔案。
    要修正的話，打開你的瀏覽器設定，點選"隱私權、搜尋與服務"，把"防止追蹤"給關掉。
    這樣一來你的瀏覽器會讀取需要的".wasm"檔案。
    如果問題一直還在的話，你必須要換瀏覽器了。
error-javascript-conflict =
    目前Ruffle初始化時遇到重大問題。
    看起來這網頁使用的JavaScript會跟Ruffle起衝突。
    如果你是伺服器管理員，我們建議你開個空白頁來測試。
error-javascript-conflict-outdated = 你也可以上傳最新版的Ruffle，說不定你要說的的問題已經不見了(現在使用的版本已經過時: { $buildDate })。
error-csp-conflict =
    目前Ruffle初始化時遇到重大問題。
    這網頁伺服器被跨來源資源共用機制禁止讀取".wasm"檔案。
    如果你是伺服器管理員，請查詢Ruffle wiki得到需求幫助。
error-unknown =
    目前Ruffle初始化要讀取Flash內容時遇到重大問題
    { $outdated ->
        [true] 如果你是伺服器管理員， 請上傳最新版的Ruffle(現在使用的版本已經過時: { $buildDate }).
       *[false] 這不應該發生的，我們也很高興你告知bug!
    }
`,"save-manager.ftl":`save-delete-prompt = 你確定要刪除這個存檔嗎？
save-reload-prompt =
    唯一方法只有 { $action ->
        [delete] 刪除
       *[replace] 取代
    } 這個存檔不會完全取代直到重新啟動. 你需要繼續嗎?
save-download = 下載
save-replace = 取代
save-delete = 刪除
save-backup-all = 下載所有存檔檔案。
`,"volume-controls.ftl":`volume-controls-mute = 靜音
volume-controls-unmute = 取消靜音
`}},Kl={};for(const[e,n]of Object.entries(mv)){const t=new Wh(e);if(n){for(const[r,o]of Object.entries(n))if(o)for(const i of t.addResource(new ov(o)))console.error(`Error in text for ${e} ${r}: ${i}`)}Kl[e]=t}function hv(e,n,t){const r=Kl[e];if(r!==void 0){const o=r.getMessage(n);if(o!==void 0&&o.value)return r.formatPattern(o.value,t)}return null}function F(e,n){const t=pv(navigator.languages,Object.keys(Kl),{defaultLocale:"en-US"});for(const r in t){const o=hv(t[r],e,n);if(o)return o}return console.error(`Unknown text key '${e}'`),e}function ae(e,n){const t=document.createElement("div");return F(e,n).split(`
`).forEach(r=>{const o=document.createElement("p");o.innerText=r,t.appendChild(o)}),t}function vv(){return S("div",{id:"volume-controls-modal",class:"modal hidden",children:S("div",{class:"modal-area",children:J("div",{id:"volume-controls",children:[S("input",{id:"mute-checkbox",type:"checkbox"}),S("label",{id:"volume-mute",for:"mute-checkbox",title:F("volume-controls-unmute")}),S("label",{id:"volume-min",for:"mute-checkbox",title:F("volume-controls-mute")}),S("label",{id:"volume-mid",for:"mute-checkbox",title:F("volume-controls-mute")}),S("label",{id:"volume-max",for:"mute-checkbox",title:F("volume-controls-mute")}),S("input",{id:"volume-slider",type:"range",min:"0",max:"100",step:"1"}),S("span",{id:"volume-slider-text"}),S("span",{class:"close-modal"})]})})})}function gv(){return S("div",{id:"video-modal",class:"modal hidden",children:J("div",{class:"modal-area",children:[S("span",{class:"close-modal"}),S("div",{id:"video-holder"})]})})}function wv(){return S("div",{id:"hardware-acceleration-modal",class:"modal hidden",children:J("div",{class:"modal-area",children:[S("span",{class:"close-modal"}),S("span",{id:"acceleration-text",children:F("enable-hardware-acceleration")}),S("a",{href:"https://github.com/ruffle-rs/ruffle/wiki/Frequently-Asked-Questions-For-Users#chrome-hardware-acceleration",target:"_blank",class:"modal-button",children:F("enable-hardware-acceleration-link")})]})})}const $i=navigator.userAgent.includes("Mac OS X")?"Command":"Ctrl";function yv(){return S("div",{id:"clipboard-modal",class:"modal hidden",children:J("div",{class:"modal-area",children:[S("span",{class:"close-modal"}),S("h2",{children:F("clipboard-message-title")}),S("p",{id:"clipboard-modal-description"}),J("p",{children:[J("b",{children:[$i,"+C"]}),S("span",{children:F("clipboard-message-copy")})]}),J("p",{children:[J("b",{children:[$i,"+X"]}),S("span",{children:F("clipboard-message-cut")})]}),J("p",{children:[J("b",{children:[$i,"+V"]}),S("span",{children:F("clipboard-message-paste")})]})]})})}function kv(){return S("div",{id:"context-menu-overlay",class:"hidden",children:S("ul",{id:"context-menu"})})}const He=document.createElement("template");He.content.appendChild(S(zh,{}));He.content.appendChild(S(Eh,{}));He.content.appendChild(S(jh,{}));He.content.appendChild(S(Ch,{}));He.content.appendChild(S(Ph,{}));He.content.appendChild(S(vv,{}));He.content.appendChild(S(gv,{}));He.content.appendChild(S(wv,{}));He.content.appendChild(S(yv,{}));He.content.appendChild(S(kv,{}));var _t;(function(e){e.On="on",e.Off="off",e.Auto="auto"})(_t||(_t={}));var No;(function(e){e.Off="off",e.Fullscreen="fullscreen",e.On="on"})(No||(No={}));var zr;(function(e){e.Visible="visible",e.Hidden="hidden"})(zr||(zr={}));var $o;(function(e){e.Error="error",e.Warn="warn",e.Info="info",e.Debug="debug",e.Trace="trace"})($o||($o={}));var qo;(function(e){e.Window="window",e.Opaque="opaque",e.Transparent="transparent",e.Direct="direct",e.Gpu="gpu"})(qo||(qo={}));var Su;(function(e){e.WebGpu="webgpu",e.WgpuWebgl="wgpu-webgl",e.Webgl="webgl",e.Canvas="canvas"})(Su||(Su={}));var yt;(function(e){e.On="on",e.RightClickOnly="rightClickOnly",e.Off="off"})(yt||(yt={}));var Ba;(function(e){e.AIR="air",e.FlashPlayer="flashPlayer"})(Ba||(Ba={}));var Va;(function(e){e.Allow="allow",e.Confirm="confirm",e.Deny="deny"})(Va||(Va={}));var Ha;(function(e){e.All="all",e.Internal="internal",e.None="none"})(Ha||(Ha={}));const bv={allowScriptAccess:!1,parameters:{},autoplay:_t.Auto,backgroundColor:null,letterbox:No.Fullscreen,unmuteOverlay:zr.Visible,upgradeToHttps:!0,compatibilityRules:!0,favorFlash:!0,warnOnUnsupportedContent:!0,logLevel:$o.Error,showSwfDownload:!1,contextMenu:yt.On,preloader:!0,splashScreen:!0,maxExecutionDuration:15,base:null,menu:!0,allowFullscreen:!1,salign:"",forceAlign:!1,quality:"high",scale:"showAll",forceScale:!1,frameRate:null,wmode:qo.Window,publicPath:null,polyfills:!0,playerVersion:null,preferredRenderer:null,openUrlMode:Va.Allow,allowNetworking:Ha.All,openInNewTab:null,socketProxy:[],fontSources:[],defaultFonts:{},credentialAllowList:[],playerRuntime:Ba.FlashPlayer},Gd="application/x-shockwave-flash",Yd="application/futuresplash",Xd="application/x-shockwave-flash2-preview",ef="application/vnd.adobe.flash.movie",Rv="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";function Sv(e){let n="";try{n=new URL(e,"https://example.com").pathname}catch{}if(n&&n.length>=4){const t=n.slice(-4).toLowerCase();if(t===".swf"||t===".spl")return!0}return!1}function xv(e,n){switch(e=e.toLowerCase(),e){case Gd.toLowerCase():case Yd.toLowerCase():case Xd.toLowerCase():case ef.toLowerCase():return!0;default:if(n)switch(e){case"application/octet-stream":case"binary/octet-stream":return!0}}return!1}function nf(e,n){const t=Sv(e);return n?xv(n,t):t}function zv(e){const n=e.pathname;return n.substring(n.lastIndexOf("/")+1)}let ir=null,_n=!1;try{if(document.currentScript!==void 0&&document.currentScript!==null&&"src"in document.currentScript&&document.currentScript.src!==""){let e=document.currentScript.src;!e.endsWith(".js")&&!e.endsWith("/")&&(e+="/"),ir=new URL(".",e),_n=ir.protocol.includes("extension")}}catch{console.warn("Unable to get currentScript URL")}function U(e){return e!=null}function Ev(e,n){if(U(n.allowScriptAccess)&&e.setAllowScriptAccess(n.allowScriptAccess),U(n.backgroundColor)&&e.setBackgroundColor(jv(n.backgroundColor)),U(n.upgradeToHttps)&&e.setUpgradeToHttps(n.upgradeToHttps),U(n.compatibilityRules)&&e.setCompatibilityRules(n.compatibilityRules),U(n.letterbox)&&e.setLetterbox(n.letterbox.toLowerCase()),U(n.base)&&e.setBaseUrl(n.base),U(n.menu)&&e.setShowMenu(n.menu),U(n.allowFullscreen)&&e.setAllowFullscreen(n.allowFullscreen),U(n.salign)&&e.setStageAlign(n.salign.toLowerCase()),U(n.forceAlign)&&e.setForceAlign(n.forceAlign),U(n.quality)?e.setQuality(n.quality.toLowerCase()):Pv()&&(console.log("Running on a mobile device; defaulting to low quality"),e.setQuality("low")),U(n.scale)&&e.setScale(n.scale.toLowerCase()),U(n.forceScale)&&e.setForceScale(n.forceScale),U(n.frameRate)&&e.setFrameRate(n.frameRate),U(n.wmode)&&e.setWmode(n.wmode),U(n.logLevel)&&e.setLogLevel(n.logLevel),U(n.maxExecutionDuration)&&e.setMaxExecutionDuration(Cv(n.maxExecutionDuration)),U(n.playerVersion)&&e.setPlayerVersion(n.playerVersion),U(n.preferredRenderer)&&e.setPreferredRenderer(n.preferredRenderer),U(n.openUrlMode)&&e.setOpenUrlMode(n.openUrlMode.toLowerCase()),U(n.allowNetworking)&&e.setAllowNetworking(n.allowNetworking.toLowerCase()),U(n.credentialAllowList)&&e.setCredentialAllowList(n.credentialAllowList),U(n.playerRuntime)&&e.setPlayerRuntime(n.playerRuntime),U(n.socketProxy))for(const t of n.socketProxy)e.addSocketProxy(t.host,t.port,t.proxyUrl)}function jv(e){if(e.startsWith("#")&&(e=e.substring(1)),e.length<6)return;let n=0;for(let t=0;t<6;t++){const r=parseInt(e[t],16);isNaN(r)?n=n<<4:n=n<<4|r}return n}function Cv(e){return typeof e=="number"?e:e.secs}function Pv(){return typeof window.orientation<"u"}var tf={},An={};Object.defineProperty(An,"__esModule",{value:!0});An.createRef=An.h=An.createElement=void 0;const _v=Dr,qi=an;function rf(e,n,...t){if(typeof e=="function")return e({...n,children:t});const{finalTag:r,finalAttrs:o}=(0,qi.applyTsxTag)(e,n),i=(0,qi.createDomElement)(r,o);return o&&(0,_v.setAttributes)(i,o),(0,qi.applyChildren)(i,t),i}An.createElement=rf;An.h=rf;const Av=()=>({current:null});An.createRef=Av;var ai={};Object.defineProperty(ai,"__esModule",{value:!0});ai.defineCustomElement=void 0;const Dv=on;function Fv(e,n,t){return customElements.define(e,n,t),r=>(0,Dv.jsx)(e,r)}ai.defineCustomElement=Fv;var of={};Object.defineProperty(of,"__esModule",{value:!0});(function(e){var n=yn&&yn.__createBinding||(Object.create?function(r,o,i,a){a===void 0&&(a=i);var l=Object.getOwnPropertyDescriptor(o,i);(!l||("get"in l?!o.__esModule:l.writable||l.configurable))&&(l={enumerable:!0,get:function(){return o[i]}}),Object.defineProperty(r,a,l)}:function(r,o,i,a){a===void 0&&(a=i),r[a]=o[i]}),t=yn&&yn.__exportStar||function(r,o){for(var i in r)i!=="default"&&!Object.prototype.hasOwnProperty.call(o,i)&&n(o,r,i)};Object.defineProperty(e,"__esModule",{value:!0}),t(An,e),t(ai,e),t(on,e),t(of,e)})(tf);const ar="https://ruffle.rs";class af extends Error{constructor(n){super(`Failed to fetch ${n}`),this.swfUrl=n,this.swfUrl=n}}class lf extends Error{constructor(n){super(`Not a valid swf: ${n}`)}}class Qa extends Error{constructor(n){super("Failed to load Ruffle WASM"),this.cause=n}}class sf extends Error{constructor(n){super(`Invalid options: ${n}`)}}function Tv({action:e,showDetails:n,errorArray:t,errorText:r,swfUrl:o}){if(e.type=="show_details")return S("li",{children:S("a",{href:"#",id:"panic-view-details",onClick:()=>(n(),!1),children:F("view-error-details")})});if(e.type=="open_link")return S("li",{children:S("a",{href:e.url,target:"_top",children:e.label})});{let i;document.location.protocol.includes("extension")&&o?i=o.href:i=document.location.href,i=i.split(/[?#]/,1)[0];const a=`Error on ${i}`;let l=`https://github.com/ruffle-rs/ruffle/issues/new?title=${encodeURIComponent(a)}&template=error_report.md&labels=error-report&body=`,s=encodeURIComponent(r);return t.stackIndex>-1&&String(l+s).length>8195&&(t[t.stackIndex]=null,t.avmStackIndex>-1&&(t[t.avmStackIndex]=null),s=encodeURIComponent(t.join(""))),l+=s,S("li",{children:S("a",{href:l,target:"_top",children:F("report-bug")})})}}function Ka(){const e=new Date(Ae.buildDate),n=new Date;return n.setMonth(n.getMonth()-6),n>e}const N={OpenDemo:{type:"open_link",url:ar+"/demo",label:F("ruffle-demo")},DownloadDesktop:{type:"open_link",url:ar+"/downloads#desktop-app",label:F("ruffle-desktop")},UpdateRuffle:{type:"open_link",url:ar+"/downloads",label:F("update-ruffle")},CreateReport:{type:"create_report"},ShowDetails:{type:"show_details"},createReportOrUpdate(){return Ka()?this.UpdateRuffle:this.CreateReport},openWiki(e,n){return{type:"open_link",url:`https://github.com/ruffle-rs/ruffle/wiki/${e}`,label:n??F("ruffle-wiki")}}};function Ov(e){var n;if(e instanceof af)return e.swfUrl&&!e.swfUrl.protocol.includes("http")?{body:ae("error-file-protocol"),actions:[N.OpenDemo,N.DownloadDesktop]}:window.location.origin===((n=e.swfUrl)==null?void 0:n.origin)||window.location.protocol.includes("extension")?{body:ae("error-swf-fetch"),actions:[N.ShowDetails]}:{body:ae("error-swf-cors"),actions:[N.openWiki("Using-Ruffle#configure-cors-header"),N.ShowDetails]};if(e instanceof lf)return{body:ae("error-invalid-swf"),actions:[N.ShowDetails]};if(e instanceof Qa){if(window.location.protocol==="file:")return{body:ae("error-file-protocol"),actions:[N.OpenDemo,N.DownloadDesktop]};const t=String(e.cause.message).toLowerCase();if(t.includes("mime"))return{body:ae("error-wasm-mime-type"),actions:[N.openWiki("Using-Ruffle#configure-webassembly-mime-type"),N.ShowDetails]};if(t.includes("networkerror")||t.includes("failed to fetch"))return{body:ae("error-wasm-cors"),actions:[N.openWiki("Using-Ruffle#configure-cors-header"),N.ShowDetails]};if(t.includes("disallowed by embedder"))return{body:ae("error-csp-conflict"),actions:[N.openWiki("Using-Ruffle#configure-wasm-csp"),N.ShowDetails]};if(e.cause.name==="CompileError")return{body:ae("error-wasm-invalid"),actions:[N.openWiki("Using-Ruffle#addressing-a-compileerror"),N.ShowDetails]};if(t.includes("could not download wasm module")&&e.cause.name==="TypeError")return{body:ae("error-wasm-download"),actions:[N.ShowDetails]};if(e.cause.name==="TypeError"){const r=ae("error-javascript-conflict");return Ka()&&r.appendChild(ae("error-javascript-conflict-outdated",{buildDate:Ae.buildDate})),{body:r,actions:[N.createReportOrUpdate(),N.ShowDetails]}}return navigator.userAgent.includes("Edg")&&t.includes("webassembly is not defined")?{body:ae("error-wasm-disabled-on-edge"),actions:[N.openWiki("Frequently-Asked-Questions-For-Users#edge-webassembly-error",F("more-info")),N.ShowDetails]}:{body:ae("error-wasm-not-found"),actions:[N.openWiki("Using-Ruffle#configuration-options"),N.ShowDetails]}}return e instanceof sf?{body:ae("error-javascript-config"),actions:[N.openWiki("Using-Ruffle#javascript-api"),N.ShowDetails]}:{body:ae("error-unknown",{buildDate:Ae.buildDate,outdated:String(Ka)}),actions:[N.createReportOrUpdate(),N.ShowDetails]}}function Lv(e,n,t,r){const o=t.join("");let{body:i,actions:a}=Ov(n);const l=tf.createRef(),s=()=>{l.current.classList.add("details"),l.current.replaceChildren(S("textarea",{readOnly:!0,children:o}))};e.textContent="",e.appendChild(J("div",{id:"panic",children:[S("div",{id:"panic-title",children:F("panic-title")}),S("div",{id:"panic-body",ref:l,children:i}),S("div",{id:"panic-footer",children:S("ul",{children:a.map(u=>Tv({action:u,showDetails:s,errorText:o,errorArray:t,swfUrl:r}))})})]}))}const Iv=/^\s*(\d+(\.\d+)?(%)?)/;let eo=!1;function Wi(e){if(e==null)return{};e instanceof URLSearchParams||(e=new URLSearchParams(e));const n={};for(const[t,r]of e)n[t]=r.toString();return n}class xu{constructor(n,t){this.x=n,this.y=t}distanceTo(n){const t=n.x-this.x,r=n.y-this.y;return Math.sqrt(t*t+r*r)}}class Ze extends HTMLElement{get readyState(){return this._readyState}get metadata(){return this._metadata}constructor(){super(),this.contextMenuForceDisabled=!1,this.isTouch=!1,this.contextMenuSupported=!1,this._suppressContextMenu=!1,this.panicked=!1,this.rendererDebugInfo="",this.longPressTimer=null,this.pointerDownPosition=null,this.pointerMoveMaxDistance=0,this.config={},this.shadow=this.attachShadow({mode:"open"}),this.shadow.appendChild(He.content.cloneNode(!0)),this.dynamicStyles=this.shadow.getElementById("dynamic-styles"),this.container=this.shadow.getElementById("container"),this.playButton=this.shadow.getElementById("play-button"),this.playButton.addEventListener("click",()=>this.play()),this.unmuteOverlay=this.shadow.getElementById("unmute-overlay"),this.splashScreen=this.shadow.getElementById("splash-screen"),this.virtualKeyboard=this.shadow.getElementById("virtual-keyboard"),this.virtualKeyboard.addEventListener("input",this.virtualKeyboardInput.bind(this)),this.saveManager=this.shadow.getElementById("save-manager"),this.videoModal=this.shadow.getElementById("video-modal"),this.hardwareAccelerationModal=this.shadow.getElementById("hardware-acceleration-modal"),this.volumeControls=this.shadow.getElementById("volume-controls-modal"),this.clipboardModal=this.shadow.getElementById("clipboard-modal"),this.addModalJavaScript(this.saveManager),this.addModalJavaScript(this.volumeControls),this.addModalJavaScript(this.videoModal),this.addModalJavaScript(this.hardwareAccelerationModal),this.addModalJavaScript(this.clipboardModal),this.volumeSettings=new Mv(!1,100),this.addVolumeControlsJavaScript(this.volumeControls);const n=this.saveManager.querySelector(".modal-button");n&&(n.addEventListener("click",this.backupSaves.bind(this)),n.innerText=F("save-backup-all"));const t=this.unmuteOverlay.querySelector("#unmute-overlay-svg");if(t){const r=t.querySelector("#unmute-text");r.textContent=F("click-to-unmute")}this.contextMenuOverlay=this.shadow.getElementById("context-menu-overlay"),this.contextMenuElement=this.shadow.getElementById("context-menu"),document.documentElement.addEventListener("pointerdown",this.checkIfTouch.bind(this)),this.addEventListener("contextmenu",this.showContextMenu.bind(this)),this.container.addEventListener("pointerdown",this.pointerDown.bind(this)),this.container.addEventListener("pointermove",this.checkLongPressMovement.bind(this)),this.container.addEventListener("pointerup",this.checkLongPress.bind(this)),this.container.addEventListener("pointercancel",this.clearLongPressTimer.bind(this)),this.addEventListener("fullscreenchange",this.fullScreenChange.bind(this)),this.addEventListener("webkitfullscreenchange",this.fullScreenChange.bind(this)),this.instance=null,this.newZipWriter=null,this.onFSCommand=null,this._readyState=ft.HaveNothing,this._metadata=null,this.lastActivePlayingState=!1,this.setupPauseOnTabHidden()}addModalJavaScript(n){const t=n.querySelector("#video-holder"),r=()=>{n.classList.add("hidden"),t&&(t.textContent="")};n.parentNode.addEventListener("click",r);const o=n.querySelector(".modal-area");o&&o.addEventListener("click",a=>a.stopPropagation());const i=n.querySelector(".close-modal");i&&i.addEventListener("click",r)}addVolumeControlsJavaScript(n){const t=n.querySelector("#mute-checkbox"),r=n.querySelector("#volume-mute"),o=[n.querySelector("#volume-min"),n.querySelector("#volume-mid"),n.querySelector("#volume-max")],i=n.querySelector("#volume-slider"),a=n.querySelector("#volume-slider-text"),l=()=>{if(this.volumeSettings.isMuted)r.style.display="inline",o.forEach(s=>{s.style.display="none"});else{r.style.display="none";const s=Math.round(this.volumeSettings.volume/50);o.forEach((u,p)=>{u.style.display=p===s?"inline":"none"})}};t.checked=this.volumeSettings.isMuted,i.disabled=t.checked,i.valueAsNumber=this.volumeSettings.volume,a.textContent=i.value+"%",l(),t.addEventListener("change",()=>{var s;i.disabled=t.checked,this.volumeSettings.isMuted=t.checked,(s=this.instance)==null||s.set_volume(this.volumeSettings.get_volume()),l()}),i.addEventListener("input",()=>{var s;a.textContent=i.value+"%",this.volumeSettings.volume=i.valueAsNumber,(s=this.instance)==null||s.set_volume(this.volumeSettings.get_volume()),l()})}setupPauseOnTabHidden(){document.addEventListener("visibilitychange",()=>{this.instance&&(document.hidden&&(this.lastActivePlayingState=this.instance.is_playing(),this.instance.pause()),!document.hidden&&this.lastActivePlayingState===!0&&this.instance.play())},!1)}get height(){return this.getAttribute("height")||""}set height(n){this.setAttribute("height",n)}get width(){return this.getAttribute("width")||""}set width(n){this.setAttribute("width",n)}get type(){return this.getAttribute("type")||""}set type(n){this.setAttribute("type",n)}connectedCallback(){this.updateStyles()}static get observedAttributes(){return["width","height"]}attributeChangedCallback(n,t,r){(n==="width"||n==="height")&&this.updateStyles()}disconnectedCallback(){this.destroy()}updateStyles(){if(this.dynamicStyles.sheet){if(this.dynamicStyles.sheet.cssRules)for(let r=this.dynamicStyles.sheet.cssRules.length-1;r>=0;r--)this.dynamicStyles.sheet.deleteRule(r);const n=this.attributes.getNamedItem("width");if(n!=null){const r=Ze.htmlDimensionToCssDimension(n.value);r!==null&&this.dynamicStyles.sheet.insertRule(`:host { width: ${r}; }`)}const t=this.attributes.getNamedItem("height");if(t!=null){const r=Ze.htmlDimensionToCssDimension(t.value);r!==null&&this.dynamicStyles.sheet.insertRule(`:host { height: ${r}; }`)}}}isUnusedFallbackObject(){const n=bh("ruffle-object");if(n!==null){let t=this.parentNode;for(;t!==document&&t!==null;){if(t.nodeName===n.name)return!0;t=t.parentNode}}return!1}async ensureFreshInstance(){var i,a,l;this.destroy(),this.loadedConfig&&this.loadedConfig.splashScreen!==!1&&this.loadedConfig.preloader!==!1&&this.showSplashScreen(),this.loadedConfig&&this.loadedConfig.preloader===!1&&console.warn("The configuration option preloader has been replaced with splashScreen. If you own this website, please update the configuration."),this.loadedConfig&&this.loadedConfig.maxExecutionDuration&&typeof this.loadedConfig.maxExecutionDuration!="number"&&console.warn("Configuration: An obsolete format for duration for 'maxExecutionDuration' was used, please use a single number indicating seconds instead. For instance '15' instead of '{secs: 15, nanos: 0}'."),this.loadedConfig&&typeof this.loadedConfig.contextMenu=="boolean"&&console.warn('The configuration option contextMenu no longer takes a boolean. Use "on", "off", or "rightClickOnly".');const[n,t]=await Sh(this.onRuffleDownloadProgress.bind(this)).catch(s=>{console.error(`Serious error loading Ruffle: ${s}`);const u=new Qa(s);throw this.panic(u),u});if(this.newZipWriter=t,Ev(n,this.loadedConfig||{}),n.setVolume(this.volumeSettings.get_volume()),(i=this.loadedConfig)!=null&&i.fontSources)for(const s of this.loadedConfig.fontSources)try{const u=await fetch(s);n.addFont(s,new Uint8Array(await u.arrayBuffer()))}catch(u){console.warn(`Couldn't download font source from ${s}`,u)}for(const s in(a=this.loadedConfig)==null?void 0:a.defaultFonts){const u=this.loadedConfig.defaultFonts[s];u&&n.setDefaultFont(s,u)}this.instance=await n.build(this.container,this).catch(s=>{throw console.error(`Serious error loading Ruffle: ${s}`),this.panic(s),s}),this.rendererDebugInfo=this.instance.renderer_debug_info(),this.rendererDebugInfo.includes("Adapter Device Type: Cpu")&&this.container.addEventListener("mouseover",this.openHardwareAccelerationModal.bind(this),{once:!0});const r=this.instance.renderer_name(),o=this.instance.constructor;if(console.log("%cNew Ruffle instance created (Version: "+Ae.versionName+" | WebAssembly extensions: "+(o.is_wasm_simd_used()?"ON":"OFF")+" | Used renderer: "+(r??"")+")","background: #37528C; color: #FFAD33"),this.audioState()!=="running"&&(this.container.style.visibility="hidden",await new Promise(s=>{window.setTimeout(()=>{s()},200)}),this.container.style.visibility=""),this.unmuteAudioContext(),navigator.userAgent.toLowerCase().includes("android")&&this.container.addEventListener("click",()=>this.virtualKeyboard.blur()),!this.loadedConfig||this.loadedConfig.autoplay===_t.On||this.loadedConfig.autoplay!==_t.Off&&this.audioState()==="running"){if(this.play(),this.audioState()!=="running"){(!this.loadedConfig||this.loadedConfig.unmuteOverlay!==zr.Hidden)&&(this.unmuteOverlay.style.display="block"),this.container.addEventListener("click",this.unmuteOverlayClicked.bind(this),{once:!0});const s=(l=this.instance)==null?void 0:l.audio_context();s&&(s.onstatechange=()=>{s.state==="running"&&this.unmuteOverlayClicked(),s.onstatechange=null})}}else this.playButton.style.display="block"}onRuffleDownloadProgress(n,t){const r=this.splashScreen.querySelector(".loadbar-inner"),o=this.splashScreen.querySelector(".loadbar");Number.isNaN(t)?o&&(o.style.display="none"):r.style.width=`${100*(n/t)}%`}destroy(){this.instance&&(this.instance.destroy(),this.instance=null,this._metadata=null,this._readyState=ft.HaveNothing,console.log("Ruffle instance destroyed."))}checkOptions(n){if(typeof n=="string")return{url:n};const t=(r,o)=>{if(!r){const i=new sf(o);throw this.panic(i),i}};return t(n!==null&&typeof n=="object","Argument 0 must be a string or object"),t("url"in n||"data"in n,"Argument 0 must contain a `url` or `data` key"),t(!("url"in n)||typeof n.url=="string","`url` must be a string"),n}async reload(){if(this.loadedConfig)await this.load(this.loadedConfig);else throw new Error("Cannot reload if load wasn't first called")}async load(n,t=!1){var r;if(n=this.checkOptions(n),!this.isConnected||this.isUnusedFallbackObject()){console.warn("Ignoring attempt to play a disconnected or suspended Ruffle element");return}if(!Jl(this))try{this.loadedConfig={...bv,...t&&"url"in n?{allowScriptAccess:uf("samedomain",n.url)}:{},...((r=window.RufflePlayer)==null?void 0:r.config)??{},...this.config,...n},this.loadedConfig.backgroundColor&&this.loadedConfig.wmode!==qo.Transparent&&(this.container.style.backgroundColor=this.loadedConfig.backgroundColor),await this.ensureFreshInstance(),"url"in n?(console.log(`Loading SWF file ${n.url}`),this.swfUrl=new URL(n.url,document.baseURI),this.instance.stream_from(this.swfUrl.href,Wi(n.parameters))):"data"in n&&(console.log("Loading SWF data"),delete this.swfUrl,this.instance.load_data(new Uint8Array(n.data),Wi(n.parameters),n.swfFileName||"movie.swf"))}catch(o){console.error(`Serious error occurred loading SWF file: ${o}`);const i=new Error(o);throw this.panic(i),i}}play(){this.instance&&(this.instance.play(),this.playButton.style.display="none")}get isPlaying(){return this.instance?this.instance.is_playing():!1}get volume(){return this.instance?this.instance.volume():1}set volume(n){this.instance&&this.instance.set_volume(n)}get fullscreenEnabled(){return!!(document.fullscreenEnabled||document.webkitFullscreenEnabled)}get isFullscreen(){return(document.fullscreenElement||document.webkitFullscreenElement)===this}setFullscreen(n){this.fullscreenEnabled&&n!==this.isFullscreen&&(n?this.enterFullscreen():this.exitFullscreen())}enterFullscreen(){const n={navigationUI:"hide"};this.requestFullscreen?this.requestFullscreen(n):this.webkitRequestFullscreen?this.webkitRequestFullscreen(n):this.webkitRequestFullScreen&&this.webkitRequestFullScreen(n)}exitFullscreen(){document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}fullScreenChange(){var n;(n=this.instance)==null||n.set_fullscreen(this.isFullscreen)}saveFile(n,t){const r=URL.createObjectURL(n),o=document.createElement("a");o.href=r,o.download=t,o.click(),URL.revokeObjectURL(r)}checkIfTouch(n){this.isTouch=n.pointerType==="touch"||n.pointerType==="pen"}base64ToArray(n){const t=atob(n),r=new Uint8Array(t.length);for(let o=0;o<t.length;o++)r[o]=t.charCodeAt(o);return r}base64ToBlob(n,t){const r=this.base64ToArray(n);return new Blob([r],{type:t})}isB64SOL(n){try{return atob(n).slice(6,10)==="TCSO"}catch{return!1}}confirmReloadSave(n,t,r){if(this.isB64SOL(t)&&localStorage[n]){if(!r&&!confirm(F("save-delete-prompt")))return;const o=this.swfUrl?this.swfUrl.pathname:"",i=this.swfUrl?this.swfUrl.hostname:document.location.hostname,a=n.split("/").slice(1,-1).join("/");if(o.includes(a)&&n.startsWith(i)){confirm(F("save-reload-prompt",{action:r?"replace":"delete"}))&&this.loadedConfig&&(this.destroy(),r?localStorage.setItem(n,t):localStorage.removeItem(n),this.reload(),this.populateSaves(),this.saveManager.classList.add("hidden"));return}r?localStorage.setItem(n,t):localStorage.removeItem(n),this.populateSaves(),this.saveManager.classList.add("hidden")}}replaceSOL(n,t){const r=n.target,o=new FileReader;o.addEventListener("load",()=>{if(o.result&&typeof o.result=="string"){const i=new RegExp("data:.*;base64,"),a=o.result.replace(i,"");this.confirmReloadSave(t,a,!0)}}),r&&r.files&&r.files.length>0&&r.files[0]&&o.readAsDataURL(r.files[0])}checkSaves(){if(!this.saveManager.querySelector("#local-saves"))return!1;try{if(localStorage===null)return!1}catch{return!1}return Object.keys(localStorage).some(n=>{const t=n.split("/").pop(),r=localStorage.getItem(n);return t&&r&&this.isB64SOL(r)})}deleteSave(n){const t=localStorage.getItem(n);t&&this.confirmReloadSave(n,t,!1)}populateSaves(){if(!this.checkSaves())return;const n=this.saveManager.querySelector("#local-saves");n.textContent="",Object.keys(localStorage).forEach(t=>{const r=t.split("/").pop(),o=localStorage.getItem(t);if(r&&o&&this.isB64SOL(o)){const i=document.createElement("TR"),a=document.createElement("TD");a.textContent=r,a.title=t;const l=document.createElement("TD"),s=document.createElement("SPAN");s.className="save-option",s.id="download-save",s.title=F("save-download"),s.addEventListener("click",()=>{const y=this.base64ToBlob(o,"application/octet-stream");this.saveFile(y,r+".sol")}),l.appendChild(s);const u=document.createElement("TD"),p=document.createElement("INPUT");p.type="file",p.accept=".sol",p.className="replace-save",p.id="replace-save-"+t;const h=document.createElement("LABEL");h.htmlFor="replace-save-"+t,h.className="save-option",h.id="replace-save",h.title=F("save-replace"),p.addEventListener("change",y=>this.replaceSOL(y,t)),u.appendChild(p),u.appendChild(h);const m=document.createElement("TD"),g=document.createElement("SPAN");g.className="save-option",g.id="delete-save",g.title=F("save-delete"),g.addEventListener("click",()=>this.deleteSave(t)),m.appendChild(g),i.appendChild(a),i.appendChild(l),i.appendChild(u),i.appendChild(m),n.appendChild(i)}})}async backupSaves(){const n=this.newZipWriter(),t=[];Object.keys(localStorage).forEach(o=>{let i=String(o.split("/").pop());const a=localStorage.getItem(o);if(a&&this.isB64SOL(a)){const l=this.base64ToArray(a),s=t.filter(u=>u===i).length;t.push(i),s>0&&(i+=` (${s+1})`),n.addFile(i+".sol",l)}});const r=new Blob([n.save()],{type:"application/zip"});this.saveFile(r,"saves.zip")}openHardwareAccelerationModal(){this.hardwareAccelerationModal.classList.remove("hidden")}async openSaveManager(){this.populateSaves(),this.saveManager.classList.remove("hidden")}openVolumeControls(){this.volumeControls.classList.remove("hidden")}async downloadSwf(){try{if(this.swfUrl){console.log("Downloading SWF: "+this.swfUrl);const n=await fetch(this.swfUrl.href);if(!n.ok){console.error("SWF download failed");return}const t=await n.blob();this.saveFile(t,zv(this.swfUrl))}else console.error("SWF download failed")}catch{console.error("SWF download failed")}}virtualKeyboardInput(){const n=this.virtualKeyboard,t=n.value;for(const r of t)for(const o of["keydown","keyup"])this.dispatchEvent(new KeyboardEvent(o,{key:r,bubbles:!0}));n.value=""}openVirtualKeyboard(){navigator.userAgent.toLowerCase().includes("android")?setTimeout(()=>{this.virtualKeyboard.focus({preventScroll:!0})},100):this.virtualKeyboard.focus({preventScroll:!0})}isVirtualKeyboardFocused(){return this.shadow.activeElement===this.virtualKeyboard}contextMenuItems(){const n="✓",t=[],r=()=>{t.length>0&&t[t.length-1]!==null&&t.push(null)};return this.instance&&this.isPlaying&&(this.instance.prepare_context_menu().forEach((i,a)=>{i.separatorBefore&&r(),t.push({text:i.caption+(i.checked?` (${n})`:""),onClick:async()=>{var l;return(l=this.instance)==null?void 0:l.run_context_menu_callback(a)},enabled:i.enabled})}),r()),this.fullscreenEnabled&&(this.isFullscreen?t.push({text:F("context-menu-exit-fullscreen"),onClick:async()=>this.setFullscreen(!1)}):t.push({text:F("context-menu-enter-fullscreen"),onClick:async()=>this.setFullscreen(!0)})),t.push({text:F("context-menu-volume-controls"),onClick:async()=>{this.openVolumeControls()}}),this.instance&&this.swfUrl&&this.loadedConfig&&this.loadedConfig.showSwfDownload===!0&&(r(),t.push({text:F("context-menu-download-swf"),onClick:this.downloadSwf.bind(this)})),navigator.clipboard&&window.isSecureContext&&t.push({text:F("context-menu-copy-debug-info"),onClick:()=>navigator.clipboard.writeText(this.getPanicData())}),this.checkSaves()&&t.push({text:F("context-menu-open-save-manager"),onClick:this.openSaveManager.bind(this)}),r(),t.push({text:F("context-menu-about-ruffle",{flavor:_n?"extension":"",version:Ae.versionName}),async onClick(){window.open(ar,"_blank")}}),this.isTouch&&(r(),t.push({text:F("context-menu-hide"),onClick:async()=>{this.contextMenuForceDisabled=!0}})),t}pointerDown(n){this.pointerDownPosition=new xu(n.pageX,n.pageY),this.pointerMoveMaxDistance=0,this.startLongPressTimer()}clearLongPressTimer(){this.longPressTimer&&(clearTimeout(this.longPressTimer),this.longPressTimer=null)}startLongPressTimer(){this.clearLongPressTimer(),this.longPressTimer=setTimeout(()=>this.clearLongPressTimer(),800)}checkLongPressMovement(n){if(this.pointerDownPosition!==null){const t=new xu(n.pageX,n.pageY),r=this.pointerDownPosition.distanceTo(t);r>this.pointerMoveMaxDistance&&(this.pointerMoveMaxDistance=r)}}checkLongPress(n){this.longPressTimer?this.clearLongPressTimer():!this.contextMenuSupported&&n.pointerType!=="mouse"&&this.pointerMoveMaxDistance<15&&this.showContextMenu(n)}suppressContextMenu(){this._suppressContextMenu=!0}showContextMenu(n){var s,u;if(this.panicked)return;if(n.preventDefault(),this._suppressContextMenu){this._suppressContextMenu=!1;return}if(this.shadow.querySelectorAll(".modal:not(.hidden)").length!==0||(n.type==="contextmenu"?(this.contextMenuSupported=!0,document.documentElement.addEventListener("click",this.hideContextMenu.bind(this),{once:!0})):(document.documentElement.addEventListener("pointerup",this.hideContextMenu.bind(this),{once:!0}),n.stopPropagation()),[!1,yt.Off].includes(((s=this.loadedConfig)==null?void 0:s.contextMenu)??yt.On)||this.isTouch&&((u=this.loadedConfig)==null?void 0:u.contextMenu)===yt.RightClickOnly||this.contextMenuForceDisabled))return;for(;this.contextMenuElement.firstChild;)this.contextMenuElement.removeChild(this.contextMenuElement.firstChild);for(const p of this.contextMenuItems())if(p===null)this.contextMenuElement.appendChild(S("li",{class:"menu-separator",children:S("hr",{})}));else{const{text:h,onClick:m,enabled:g}=p,y=S("li",{class:{"menu-item":!0,disabled:g===!1},children:h});this.contextMenuElement.appendChild(y),g!==!1&&y.addEventListener(this.contextMenuSupported?"click":"pointerup",async R=>{R.stopPropagation(),await m(R),this.hideContextMenu()})}this.contextMenuOverlay.classList.remove("hidden");const t=this.getBoundingClientRect(),r=this.contextMenuElement.getBoundingClientRect(),o=Math.max(0,n.clientX+r.width-document.documentElement.clientWidth),i=Math.max(0,n.clientY+r.height-document.documentElement.clientHeight),a=n.clientX-t.x-o,l=n.clientY-t.y-i;this.contextMenuElement.style.transform=`translate(${a}px, ${l}px)`}hideContextMenu(){var n;(n=this.instance)==null||n.clear_custom_menu_items(),this.contextMenuOverlay.classList.add("hidden")}pause(){this.instance&&(this.instance.pause(),this.playButton.style.display="block")}audioState(){if(this.instance){const n=this.instance.audio_context();return n&&n.state||"running"}return"suspended"}unmuteOverlayClicked(){if(this.instance){if(this.audioState()!=="running"){const n=this.instance.audio_context();n&&n.resume()}this.unmuteOverlay.style.display="none"}}unmuteAudioContext(){if(!eo){if(navigator.maxTouchPoints<1){eo=!0;return}this.container.addEventListener("click",()=>{var r;if(eo)return;const n=(r=this.instance)==null?void 0:r.audio_context();if(!n)return;const t=new Audio;t.src=(()=>{const o=new ArrayBuffer(10),i=new DataView(o),a=n.sampleRate;return i.setUint32(0,a,!0),i.setUint32(4,a,!0),i.setUint16(8,1,!0),`data:audio/wav;base64,UklGRisAAABXQVZFZm10IBAAAAABAAEA${window.btoa(String.fromCharCode(...new Uint8Array(o))).slice(0,13)}AgAZGF0YQcAAACAgICAgICAAAA=`})(),t.load(),t.play().then(()=>{eo=!0}).catch(o=>{console.warn(`Failed to play dummy sound: ${o}`)})},{once:!0})}}copyElement(n){if(n){for(const t of n.attributes)if(t.specified){if(t.name==="title"&&t.value==="Adobe Flash Player")continue;try{this.setAttribute(t.name,t.value)}catch{console.warn(`Unable to set attribute ${t.name} on Ruffle instance`)}}for(const t of Array.from(n.children))this.appendChild(t)}}static htmlDimensionToCssDimension(n){if(n){const t=n.match(Iv);if(t){let r=t[1];return t[3]||(r+="px"),r}}return null}onCallbackAvailable(n){const t=this.instance;this[n]=(...r)=>t==null?void 0:t.call_exposed_callback(n,r)}getObjectId(){return this.getAttribute("name")}set traceObserver(n){var t;(t=this.instance)==null||t.set_trace_observer(n)}getPanicData(){let n=`
# Player Info
`;if(n+=`Allows script access: ${this.loadedConfig?this.loadedConfig.allowScriptAccess:!1}
`,n+=`${this.rendererDebugInfo}
`,n+=this.debugPlayerInfo(),n+=`
# Page Info
`,n+=`Page URL: ${document.location.href}
`,this.swfUrl&&(n+=`SWF URL: ${this.swfUrl}
`),n+=`
# Browser Info
`,n+=`User Agent: ${window.navigator.userAgent}
`,n+=`Platform: ${window.navigator.platform}
`,n+=`Has touch support: ${window.navigator.maxTouchPoints>0}
`,n+=`
# Ruffle Info
`,n+=`Version: ${Ae.versionNumber}
`,n+=`Name: ${Ae.versionName}
`,n+=`Channel: ${Ae.versionChannel}
`,n+=`Built: ${Ae.buildDate}
`,n+=`Commit: ${Ae.commitHash}
`,n+=`Is extension: ${_n}
`,n+=`
# Metadata
`,this.metadata)for(const[t,r]of Object.entries(this.metadata))n+=`${t}: ${r}
`;return n}panic(n){var r;if(this.panicked||(this.panicked=!0,this.hideSplashScreen(),n instanceof Error&&(n.name==="AbortError"||n.message.includes("AbortError"))))return;if(n instanceof Qa){const o=(r=this.loadedConfig)==null?void 0:r.openInNewTab,i=this.loadedConfig&&"url"in this.loadedConfig?new URL(this.loadedConfig.url,document.baseURI):void 0;if(o&&i){this.addOpenInNewTabMessage(o,i);return}}const t=Object.assign([],{stackIndex:-1,avmStackIndex:-1});if(t.push(`# Error Info
`),n instanceof Error){if(t.push(`Error name: ${n.name}
`),t.push(`Error message: ${n.message}
`),n.stack){const o=t.push(`Error stack:
\`\`\`
${n.stack}
\`\`\`
`)-1;if(n.avmStack){const i=t.push(`AVM2 stack:
\`\`\`
    ${n.avmStack.trim().replace(/\t/g,"    ")}
\`\`\`
`)-1;t.avmStackIndex=i}t.stackIndex=o}}else t.push(`Error: ${n}
`);t.push(this.getPanicData()),Lv(this.container,n,t,this.swfUrl),this.destroy()}addOpenInNewTabMessage(n,t){var s,u;const r=new URL(t);if((s=this.loadedConfig)!=null&&s.parameters){const p=Wi((u=this.loadedConfig)==null?void 0:u.parameters);Object.entries(p).forEach(([h,m])=>{r.searchParams.set(h,m)})}this.hideSplashScreen();const o=document.createElement("div");o.id="message-overlay";const i=document.createElement("div");i.className="message",i.appendChild(ae("message-cant-embed"));const a=document.createElement("div"),l=document.createElement("a");l.innerText=F("open-in-new-tab"),l.onclick=()=>n(r),a.appendChild(l),i.appendChild(a),o.appendChild(i),this.container.prepend(o)}displayRootMovieDownloadFailedMessage(n){var r;const t=(r=this.loadedConfig)==null?void 0:r.openInNewTab;if(t&&this.swfUrl&&window.location.origin!==this.swfUrl.origin)this.addOpenInNewTabMessage(t,this.swfUrl);else{const o=n?new lf(this.swfUrl):new af(this.swfUrl);this.panic(o)}}displayMessage(n){const t=document.createElement("div");t.id="message-overlay";const r=document.createElement("div");r.className="message";const o=document.createElement("p");o.textContent=n,r.appendChild(o);const i=document.createElement("div"),a=document.createElement("button");a.id="continue-btn",a.textContent=F("continue"),i.appendChild(a),r.appendChild(i),t.appendChild(r),this.container.prepend(t),this.container.querySelector("#continue-btn").onclick=()=>{t.parentNode.removeChild(t)}}displayUnsupportedVideo(n){const t=this.videoModal.querySelector("#video-holder");if(t){const r=document.createElement("video");r.addEventListener("contextmenu",o=>o.stopPropagation()),r.src=n,r.autoplay=!0,r.controls=!0,t.textContent="",t.appendChild(r),this.videoModal.classList.remove("hidden")}}displayClipboardModal(n){const t=this.clipboardModal.querySelector("#clipboard-modal-description");t&&(t.textContent=F("clipboard-message-description",{variant:n?"access-denied":"unsupported"}),this.clipboardModal.classList.remove("hidden"))}debugPlayerInfo(){return""}hideSplashScreen(){this.splashScreen.classList.add("hidden"),this.container.classList.remove("hidden")}showSplashScreen(){this.splashScreen.classList.remove("hidden"),this.container.classList.add("hidden")}setMetadata(n){this._metadata=n,this._readyState=ft.Loaded,this.hideSplashScreen(),this.dispatchEvent(new CustomEvent(Ze.LOADED_METADATA)),this.dispatchEvent(new CustomEvent(Ze.LOADED_DATA))}PercentLoaded(){return this._readyState===ft.Loaded?100:0}}Ze.LOADED_METADATA="loadedmetadata";Ze.LOADED_DATA="loadeddata";var ft;(function(e){e[e.HaveNothing=0]="HaveNothing",e[e.Loading=1]="Loading",e[e.Loaded=2]="Loaded"})(ft||(ft={}));function zu(e){switch(e==null?void 0:e.toLowerCase()){case"true":return!0;case"false":return!1;default:return null}}function uf(e,n){switch(e==null?void 0:e.toLowerCase()){case"always":return!0;case"never":return!1;case"samedomain":try{return new URL(window.location.href).origin===new URL(n,window.location.href).origin}catch{return!1}default:return null}}function Ja(e,n){const t={url:e},r=n("allowNetworking");r!==null&&(t.allowNetworking=r);const o=uf(n("allowScriptAccess"),e);o!==null&&(t.allowScriptAccess=o);const i=n("bgcolor");i!==null&&(t.backgroundColor=i);const a=n("base");if(a!==null)if(a==="."){const y=new URL(e,document.baseURI);t.base=new URL(a,y).href}else t.base=a;const l=zu(n("menu"));l!==null&&(t.menu=l);const s=zu(n("allowFullScreen"));s!==null&&(t.allowFullscreen=s);const u=n("flashvars");u!==null&&(t.parameters=u);const p=n("quality");p!==null&&(t.quality=p);const h=n("salign");h!==null&&(t.salign=h);const m=n("scale");m!==null&&(t.scale=m);const g=n("wmode");return g!==null&&(t.wmode=g),t}function Za(e){if(e){let n="",t="";try{const r=new URL(e,ar);n=r.pathname,t=r.hostname}catch{}if(n.startsWith("/v/")&&/^(?:(?:www\.|m\.)?youtube(?:-nocookie)?\.com)|(?:youtu\.be)$/i.test(t))return!0}return!1}function Ga(e,n){var o;const t=e.getAttribute(n),r=((o=window.RufflePlayer)==null?void 0:o.config)??{};if(t)try{const i=new URL(t);i.protocol==="http:"&&window.location.protocol==="https:"&&(!("upgradeToHttps"in r)||r.upgradeToHttps!==!1)&&(i.protocol="https:",e.setAttribute(n,i.toString()))}catch{}}function Jl(e){let n=e.parentElement;for(;n!==null;){switch(n.tagName){case"AUDIO":case"VIDEO":return!0}n=n.parentElement}return!1}class Mv{constructor(n,t){this.isMuted=n,this.volume=t}get_volume(){return this.isMuted?0:this.volume/100}}class At extends Ze{connectedCallback(){super.connectedCallback();const n=this.attributes.getNamedItem("src");if(n){const t=o=>{var i;return((i=this.attributes.getNamedItem(o))==null?void 0:i.value)??null},r=Ja(n.value,t);this.load(r,!0)}}get nodeName(){return"EMBED"}get src(){var n;return(n=this.attributes.getNamedItem("src"))==null?void 0:n.value}set src(n){if(n){const t=document.createAttribute("src");t.value=n,this.attributes.setNamedItem(t)}else this.attributes.removeNamedItem("src")}static get observedAttributes(){return["src","width","height"]}attributeChangedCallback(n,t,r){if(super.attributeChangedCallback(n,t,r),this.isConnected&&n==="src"){const o=this.attributes.getNamedItem("src");if(o){const i=l=>{var s;return((s=this.attributes.getNamedItem(l))==null?void 0:s.value)??null},a=Ja(o.value,i);this.load(a,!0)}}}static isInterdictable(n){const t=n.getAttribute("src"),r=n.getAttribute("type");return!t||Jl(n)?!1:Za(t)?(Ga(n,"src"),!1):nf(t,r)}static fromNativeEmbedElement(n){const t=Ql("ruffle-embed",At),r=document.createElement(t);return r.copyElement(n),r}}function Nv(e,n,t){n=n.toLowerCase();for(const[r,o]of Object.entries(e))if(r.toLowerCase()===n)return o;return t}function Eu(e){var t,r;const n={};for(const o of e.children)if(o instanceof HTMLParamElement){const i=(t=o.attributes.getNamedItem("name"))==null?void 0:t.value,a=(r=o.attributes.getNamedItem("value"))==null?void 0:r.value;i&&a&&(n[i]=a)}return n}class kt extends Ze{constructor(){super(...arguments),this.params={}}connectedCallback(){var t;super.connectedCallback(),this.params=Eu(this);let n=null;if(this.attributes.getNamedItem("data")?n=(t=this.attributes.getNamedItem("data"))==null?void 0:t.value:this.params.movie&&(n=this.params.movie),n){const r=["allowNetworking","base","bgcolor","flashvars"],i=Ja(n,a=>Nv(this.params,a,r.includes(a)?this.getAttribute(a):null));this.load(i,!0)}}debugPlayerInfo(){var r;let n=`Player type: Object
`,t=null;return this.attributes.getNamedItem("data")?t=(r=this.attributes.getNamedItem("data"))==null?void 0:r.value:this.params.movie&&(t=this.params.movie),n+=`SWF URL: ${t}
`,Object.keys(this.params).forEach(o=>{n+=`Param ${o}: ${this.params[o]}
`}),Object.keys(this.attributes).forEach(o=>{var i;n+=`Attribute ${o}: ${(i=this.attributes.getNamedItem(o))==null?void 0:i.value}
`}),n}get nodeName(){return"OBJECT"}get data(){return this.getAttribute("data")}set data(n){if(n){const t=document.createAttribute("data");t.value=n,this.attributes.setNamedItem(t)}else this.attributes.removeNamedItem("data")}static isInterdictable(n){var l,s,u;if(Jl(n)||n.getElementsByTagName("ruffle-object").length>0||n.getElementsByTagName("ruffle-embed").length>0)return!1;const t=(l=n.attributes.getNamedItem("data"))==null?void 0:l.value.toLowerCase(),r=((s=n.attributes.getNamedItem("type"))==null?void 0:s.value)??null,o=Eu(n);let i;if(t){if(Za(t))return Ga(n,"data"),!1;i=t}else if(o&&o.movie){if(Za(o.movie)){const p=n.querySelector("param[name='movie']");if(p){Ga(p,"value");const h=p.getAttribute("value");h&&n.setAttribute("data",h)}return!1}i=o.movie}else return!1;const a=(u=n.attributes.getNamedItem("classid"))==null?void 0:u.value.toLowerCase();return a===Rv.toLowerCase()?!Array.from(n.getElementsByTagName("object")).some(kt.isInterdictable)&&!Array.from(n.getElementsByTagName("embed")).some(At.isInterdictable):a?!1:nf(i,r)}static fromNativeObjectElement(n){const t=Ql("ruffle-object",kt),r=document.createElement(t);for(const o of Array.from(n.getElementsByTagName("embed")))At.isInterdictable(o)&&o.remove();for(const o of Array.from(n.getElementsByTagName("object")))kt.isInterdictable(o)&&o.remove();return r.copyElement(n),r}}class cf{constructor(n){if(this.__mimeTypes=[],this.__namedMimeTypes={},n)for(let t=0;t<n.length;t++)this.install(n[t])}install(n){const t=this.__mimeTypes.length;this.__mimeTypes.push(n),this.__namedMimeTypes[n.type]=n,this[n.type]=n,this[t]=n}item(n){return this.__mimeTypes[n>>>0]}namedItem(n){return this.__namedMimeTypes[n]}get length(){return this.__mimeTypes.length}[Symbol.iterator](){return this.__mimeTypes[Symbol.iterator]()}}class $v extends cf{constructor(n,t,r){super(),this.name=n,this.description=t,this.filename=r}}class qv{constructor(n){this.__plugins=[],this.__namedPlugins={};for(let t=0;t<n.length;t++)this.install(n[t])}install(n){const t=this.__plugins.length;this.__plugins.push(n),this.__namedPlugins[n.name]=n,this[n.name]=n,this[t]=n}item(n){return this.__plugins[n>>>0]}namedItem(n){return this.__namedPlugins[n]}refresh(){}[Symbol.iterator](){return this.__plugins[Symbol.iterator]()}get length(){return this.__plugins.length}}const fn=new $v("Shockwave Flash","Shockwave Flash 32.0 r0","ruffle.js");fn.install({type:Yd,description:"Shockwave Flash",suffixes:"spl",enabledPlugin:fn});fn.install({type:Gd,description:"Shockwave Flash",suffixes:"swf",enabledPlugin:fn});fn.install({type:Xd,description:"Shockwave Flash",suffixes:"swf",enabledPlugin:fn});fn.install({type:ef,description:"Shockwave Flash",suffixes:"swf",enabledPlugin:fn});function Wv(e){(!("install"in navigator.plugins)||!navigator.plugins.install)&&Object.defineProperty(navigator,"plugins",{value:new qv(navigator.plugins),writable:!1}),navigator.plugins.install(e),e.length>0&&(!("install"in navigator.mimeTypes)||!navigator.mimeTypes.install)&&Object.defineProperty(navigator,"mimeTypes",{value:new cf(navigator.mimeTypes),writable:!1});const t=navigator.mimeTypes;for(let r=0;r<e.length;r+=1)t.install(e[r])}function Uv(e){let n=(ir==null?void 0:ir.href)??"";return!_n&&"publicPath"in e&&e.publicPath!==null&&e.publicPath!==void 0&&(n=e.publicPath),n!==""&&!n.endsWith("/")&&(n+="/"),n}var Pu;const Er=((Pu=window.RufflePlayer)==null?void 0:Pu.config)??{},Bv=Uv(Er)+"ruffle.js";let Ui,Bi;function df(){var e;return"favorFlash"in Er&&Er.favorFlash===!1?!1:(((e=navigator.plugins.namedItem("Shockwave Flash"))==null?void 0:e.filename)??"ruffle.js")!=="ruffle.js"}function ff(){try{Ui=Ui??document.getElementsByTagName("object"),Bi=Bi??document.getElementsByTagName("embed");for(const e of Array.from(Ui))if(kt.isInterdictable(e)){const n=kt.fromNativeObjectElement(e);e.replaceWith(n)}for(const e of Array.from(Bi))if(At.isInterdictable(e)){const n=At.fromNativeEmbedElement(e);e.replaceWith(n)}}catch(e){console.error(`Serious error encountered when polyfilling native Flash elements: ${e}`)}}let Vi,Hi;function pf(){Vi=Vi??document.getElementsByTagName("iframe"),Hi=Hi??document.getElementsByTagName("frame"),[Vi,Hi].forEach(e=>{for(const n of e){if(n.dataset.rufflePolyfilled!==void 0)continue;n.dataset.rufflePolyfilled="";const t=n.contentWindow,r=`Couldn't load Ruffle into ${n.tagName}[${n.src}]: `;try{t.document.readyState==="complete"&&ju(t,r)}catch(o){_n||console.warn(r+o)}n.addEventListener("load",()=>{ju(t,r)},!1)}})}async function ju(e,n){await new Promise(r=>{window.setTimeout(()=>{r()},100)});let t;try{if(t=e.document,!t)return}catch(r){_n||console.warn(n+r);return}if(!(!_n&&t.documentElement.dataset.ruffleOptout!==void 0)){if(_n)e.RufflePlayer||(e.RufflePlayer={}),e.RufflePlayer.config={...Er,...e.RufflePlayer.config??{}};else if(!e.RufflePlayer){const r=t.createElement("script");r.setAttribute("src",Bv),r.onload=()=>{e.RufflePlayer={},e.RufflePlayer.config=Er},t.head.appendChild(r)}}}function Vv(){new MutationObserver(function(n){n.some(r=>Array.from(r.addedNodes).some(o=>["EMBED","OBJECT"].includes(o.nodeName)||o instanceof Element&&o.querySelector("embed, object")!==null))&&(ff(),pf())}).observe(document,{childList:!0,subtree:!0})}function Hv(){df()||Wv(fn)}function Qv(){df()||(ff(),pf(),Vv())}class bt{constructor(n,t,r,o,i){this.major=n,this.minor=t,this.patch=r,this.prIdent=o,this.buildIdent=i}static fromSemver(n){const t=n.split("+"),r=t[0].split("-"),o=r[0].split("."),i=parseInt(o[0],10);let a=0,l=0,s=null,u=null;return o[1]!==void 0&&(a=parseInt(o[1],10)),o[2]!==void 0&&(l=parseInt(o[2],10)),r[1]!==void 0&&(s=r[1].split(".")),t[1]!==void 0&&(u=t[1].split(".")),new bt(i,a,l,s,u)}isCompatibleWith(n){return this.major!==0&&this.major===n.major||this.major===0&&n.major===0&&this.minor!==0&&this.minor===n.minor||this.major===0&&n.major===0&&this.minor===0&&n.minor===0&&this.patch!==0&&this.patch===n.patch}hasPrecedenceOver(n){if(this.major>n.major)return!0;if(this.major<n.major)return!1;if(this.minor>n.minor)return!0;if(this.minor<n.minor)return!1;if(this.patch>n.patch)return!0;if(this.patch<n.patch)return!1;if(this.prIdent===null&&n.prIdent!==null)return!0;if(this.prIdent!==null&&n.prIdent===null)return!1;if(this.prIdent!==null&&n.prIdent!==null){const t=/^[0-9]*$/;for(let r=0;r<this.prIdent.length&&r<n.prIdent.length;r+=1){const o=t.test(n.prIdent[r]),i=t.test(this.prIdent[r]);if(!i&&o)return!0;if(i&&o){const a=parseInt(this.prIdent[r],10),l=parseInt(n.prIdent[r],10);if(a>l)return!0;if(a<l)return!1}else{if(i&&!o)return!1;if(!i&&!o){if(this.prIdent[r]>n.prIdent[r])return!0;if(this.prIdent[r]<n.prIdent[r])return!1}}}if(this.prIdent.length>n.prIdent.length)return!0;if(this.prIdent.length<n.prIdent.length)return!1}if(this.buildIdent!==null&&n.buildIdent===null)return!0;if(this.buildIdent===null&&n.buildIdent!==null)return!1;if(this.buildIdent!==null&&n.buildIdent!==null){const t=/^[0-9]*$/;for(let r=0;r<this.buildIdent.length&&r<n.buildIdent.length;r+=1){const o=t.test(this.buildIdent[r]),i=t.test(n.buildIdent[r]);if(!o&&i)return!0;if(o&&i){const a=parseInt(this.buildIdent[r],10),l=parseInt(n.buildIdent[r],10);if(a>l)return!0;if(a<l)return!1}else{if(o&&!i)return!1;if(!o&&!i){if(this.buildIdent[r]>n.buildIdent[r])return!0;if(this.buildIdent[r]<n.buildIdent[r])return!1}}}return this.buildIdent.length>n.buildIdent.length}return!1}isEqual(n){return this.major===n.major&&this.minor===n.minor&&this.patch===n.patch}isStableOrCompatiblePrerelease(n){return n.prIdent===null?!0:this.major===n.major&&this.minor===n.minor&&this.patch===n.patch}}class Zl{constructor(n){this.requirements=n}satisfiedBy(n){for(const t of this.requirements){let r=!0;for(const{comparator:o,version:i}of t)r=r&&i.isStableOrCompatiblePrerelease(n),o===""||o==="="?r=r&&i.isEqual(n):o===">"?r=r&&n.hasPrecedenceOver(i):o===">="?r=r&&(n.hasPrecedenceOver(i)||i.isEqual(n)):o==="<"?r=r&&i.hasPrecedenceOver(n):o==="<="?r=r&&(i.hasPrecedenceOver(n)||i.isEqual(n)):o==="^"&&(r=r&&i.isCompatibleWith(n));if(r)return!0}return!1}static fromRequirementString(n){const t=n.split(" ");let r=[];const o=[];for(const i of t)if(i==="||")r.length>0&&(o.push(r),r=[]);else if(i.length>0){const a=/[0-9]/.exec(i);if(a){const l=i.slice(0,a.index).trim(),s=bt.fromSemver(i.slice(a.index).trim());r.push({comparator:l,version:s})}}return r.length>0&&o.push(r),new Zl(o)}}class Cu{constructor(n){var t;this.sources=(n==null?void 0:n.sources)||{},this.config=(n==null?void 0:n.config)||{},this.invoked=(n==null?void 0:n.invoked)||!1,this.newestName=(n==null?void 0:n.newestName)||null,(t=n==null?void 0:n.superseded)==null||t.call(n),document.readyState==="loading"?document.addEventListener("readystatechange",this.init.bind(this)):window.setTimeout(this.init.bind(this),0)}get version(){return"0.1.0"}newestSourceName(){let n=null,t=bt.fromSemver("0.0.0");for(const r in this.sources)if(Object.prototype.hasOwnProperty.call(this.sources,r)){const o=bt.fromSemver(this.sources[r].version);o.hasPrecedenceOver(t)&&(n=r,t=o)}return n}init(){if(!this.invoked){if(this.invoked=!0,this.newestName=this.newestSourceName(),this.newestName===null)throw new Error("No registered Ruffle source!");("polyfills"in this.config?this.config.polyfills:!0)!==!1&&this.sources[this.newestName].polyfill()}}newest(){const n=this.newestSourceName();return n!==null?this.sources[n]:null}satisfying(n){const t=Zl.fromRequirementString(n);let r=null;for(const o in this.sources)if(Object.prototype.hasOwnProperty.call(this.sources,o)){const i=bt.fromSemver(this.sources[o].version);t.satisfiedBy(i)&&(r=this.sources[o])}return r}localCompatible(){return this.sources.local!==void 0?this.satisfying("^"+this.sources.local.version):this.newest()}local(){return this.sources.local!==void 0?this.satisfying("="+this.sources.local.version):this.newest()}superseded(){this.invoked=!0}}function Kv(e,n={}){let t;window.RufflePlayer instanceof Cu?t=window.RufflePlayer:(t=new Cu(window.RufflePlayer),window.RufflePlayer=t),t.sources[e]=tr,tr.options=n,("polyfills"in t.config?t.config.polyfills:!0)!==!1&&tr.pluginPolyfill()}Kv("local");Ki.createRoot(document.getElementById("root")).render(j.jsx(Qi.StrictMode,{children:j.jsx(Zm,{ruffleBaseConfig:{autoplay:_t.On,unmuteOverlay:zr.Hidden,logLevel:$o.Warn,letterbox:No.On,forceScale:!0,forceAlign:!0},allowSampleSwfs:!0,allowUrlLoading:!1})}));
