const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ruffle_web-wasm_extensions-COPzF4kW.js","./ruffle-imports-CztXuSei.js","./ruffle_web-_XFV5WkM.js"])))=>i.map(i=>d[i]);
var kf=Object.defineProperty;var bf=(e,n,t)=>n in e?kf(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var Ir=(e,n,t)=>bf(e,typeof n!="symbol"?n+"":n,t);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();var kn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Sf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ou={exports:{}},Ui={},Lu={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pr=Symbol.for("react.element"),Rf=Symbol.for("react.portal"),xf=Symbol.for("react.fragment"),zf=Symbol.for("react.strict_mode"),Ef=Symbol.for("react.profiler"),jf=Symbol.for("react.provider"),Cf=Symbol.for("react.context"),Pf=Symbol.for("react.forward_ref"),_f=Symbol.for("react.suspense"),Af=Symbol.for("react.memo"),Ff=Symbol.for("react.lazy"),ns=Symbol.iterator;function Df(e){return e===null||typeof e!="object"?null:(e=ns&&e[ns]||e["@@iterator"],typeof e=="function"?e:null)}var Iu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mu=Object.assign,Nu={};function Tt(e,n,t){this.props=e,this.context=n,this.refs=Nu,this.updater=t||Iu}Tt.prototype.isReactComponent={};Tt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Tt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function $u(){}$u.prototype=Tt.prototype;function nl(e,n,t){this.props=e,this.context=n,this.refs=Nu,this.updater=t||Iu}var tl=nl.prototype=new $u;tl.constructor=nl;Mu(tl,Tt.prototype);tl.isPureReactComponent=!0;var ts=Array.isArray,qu=Object.prototype.hasOwnProperty,rl={current:null},Wu={key:!0,ref:!0,__self:!0,__source:!0};function Uu(e,n,t){var r,i={},o=null,a=null;if(n!=null)for(r in n.ref!==void 0&&(a=n.ref),n.key!==void 0&&(o=""+n.key),n)qu.call(n,r)&&!Wu.hasOwnProperty(r)&&(i[r]=n[r]);var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Pr,type:e,key:o,ref:a,props:i,_owner:rl.current}}function Tf(e,n){return{$$typeof:Pr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function il(e){return typeof e=="object"&&e!==null&&e.$$typeof===Pr}function Of(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var rs=/\/+/g;function fo(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Of(""+e.key):n.toString(36)}function ri(e,n,t,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Pr:case Rf:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+fo(a,0):r,ts(i)?(t="",e!=null&&(t=e.replace(rs,"$&/")+"/"),ri(i,n,t,"",function(u){return u})):i!=null&&(il(i)&&(i=Tf(i,t+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(rs,"$&/")+"/")+e)),n.push(i)),1;if(a=0,r=r===""?".":r+":",ts(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+fo(o,l);a+=ri(o,n,t,s,i)}else if(s=Df(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+fo(o,l++),a+=ri(o,n,t,s,i);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function Mr(e,n,t){if(e==null)return e;var r=[],i=0;return ri(e,r,"","",function(o){return n.call(t,o,i++)}),r}function Lf(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var we={current:null},ii={transition:null},If={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:ii,ReactCurrentOwner:rl};function Bu(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:Mr,forEach:function(e,n,t){Mr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Mr(e,function(){n++}),n},toArray:function(e){return Mr(e,function(n){return n})||[]},only:function(e){if(!il(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=Tt;O.Fragment=xf;O.Profiler=Ef;O.PureComponent=nl;O.StrictMode=zf;O.Suspense=_f;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=If;O.act=Bu;O.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Mu({},e.props),i=e.key,o=e.ref,a=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,a=rl.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in n)qu.call(n,s)&&!Wu.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&l!==void 0?l[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Pr,type:e.type,key:i,ref:o,props:r,_owner:a}};O.createContext=function(e){return e={$$typeof:Cf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:jf,_context:e},e.Consumer=e};O.createElement=Uu;O.createFactory=function(e){var n=Uu.bind(null,e);return n.type=e,n};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:Pf,render:e}};O.isValidElement=il;O.lazy=function(e){return{$$typeof:Ff,_payload:{_status:-1,_result:e},_init:Lf}};O.memo=function(e,n){return{$$typeof:Af,type:e,compare:n===void 0?null:n}};O.startTransition=function(e){var n=ii.transition;ii.transition={};try{e()}finally{ii.transition=n}};O.unstable_act=Bu;O.useCallback=function(e,n){return we.current.useCallback(e,n)};O.useContext=function(e){return we.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return we.current.useDeferredValue(e)};O.useEffect=function(e,n){return we.current.useEffect(e,n)};O.useId=function(){return we.current.useId()};O.useImperativeHandle=function(e,n,t){return we.current.useImperativeHandle(e,n,t)};O.useInsertionEffect=function(e,n){return we.current.useInsertionEffect(e,n)};O.useLayoutEffect=function(e,n){return we.current.useLayoutEffect(e,n)};O.useMemo=function(e,n){return we.current.useMemo(e,n)};O.useReducer=function(e,n,t){return we.current.useReducer(e,n,t)};O.useRef=function(e){return we.current.useRef(e)};O.useState=function(e){return we.current.useState(e)};O.useSyncExternalStore=function(e,n,t){return we.current.useSyncExternalStore(e,n,t)};O.useTransition=function(){return we.current.useTransition()};O.version="18.3.1";Lu.exports=O;var re=Lu.exports;const Jo=Sf(re);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mf=re,Nf=Symbol.for("react.element"),$f=Symbol.for("react.fragment"),qf=Object.prototype.hasOwnProperty,Wf=Mf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Uf={key:!0,ref:!0,__self:!0,__source:!0};function Vu(e,n,t){var r,i={},o=null,a=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(a=n.ref);for(r in n)qf.call(n,r)&&!Uf.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:Nf,type:e,key:o,ref:a,props:i,_owner:Wf.current}}Ui.Fragment=$f;Ui.jsx=Vu;Ui.jsxs=Vu;Ou.exports=Ui;var j=Ou.exports,Zo={},Hu={exports:{}},Ae={},Qu={exports:{}},Ku={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(_,A){var D=_.length;_.push(A);e:for(;0<D;){var Y=D-1>>>1,oe=_[Y];if(0<i(oe,A))_[Y]=A,_[D]=oe,D=Y;else break e}}function t(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var A=_[0],D=_.pop();if(D!==A){_[0]=D;e:for(var Y=0,oe=_.length,Or=oe>>>1;Y<Or;){var Nn=2*(Y+1)-1,co=_[Nn],$n=Nn+1,Lr=_[$n];if(0>i(co,D))$n<oe&&0>i(Lr,co)?(_[Y]=Lr,_[$n]=D,Y=$n):(_[Y]=co,_[Nn]=D,Y=Nn);else if($n<oe&&0>i(Lr,D))_[Y]=Lr,_[$n]=D,Y=$n;else break e}}return A}function i(_,A){var D=_.sortIndex-A.sortIndex;return D!==0?D:_.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],p=1,m=null,h=3,g=!1,y=!1,b=!1,F=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(_){for(var A=t(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=_)r(u),A.sortIndex=A.expirationTime,n(s,A);else break;A=t(u)}}function v(_){if(b=!1,f(_),!y)if(t(s)!==null)y=!0,so(x);else{var A=t(u);A!==null&&uo(v,A.startTime-_)}}function x(_,A){y=!1,b&&(b=!1,d(E),E=-1),g=!0;var D=h;try{for(f(A),m=t(s);m!==null&&(!(m.expirationTime>A)||_&&!L());){var Y=m.callback;if(typeof Y=="function"){m.callback=null,h=m.priorityLevel;var oe=Y(m.expirationTime<=A);A=e.unstable_now(),typeof oe=="function"?m.callback=oe:m===t(s)&&r(s),f(A)}else r(s);m=t(s)}if(m!==null)var Or=!0;else{var Nn=t(u);Nn!==null&&uo(v,Nn.startTime-A),Or=!1}return Or}finally{m=null,h=D,g=!1}}var P=!1,z=null,E=-1,w=5,S=-1;function L(){return!(e.unstable_now()-S<w)}function ze(){if(z!==null){var _=e.unstable_now();S=_;var A=!0;try{A=z(!0,_)}finally{A?$e():(P=!1,z=null)}}else P=!1}var $e;if(typeof c=="function")$e=function(){c(ze)};else if(typeof MessageChannel<"u"){var Ee=new MessageChannel,yf=Ee.port2;Ee.port1.onmessage=ze,$e=function(){yf.postMessage(null)}}else $e=function(){F(ze,0)};function so(_){z=_,P||(P=!0,$e())}function uo(_,A){E=F(function(){_(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){y||g||(y=!0,so(x))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(_){switch(h){case 1:case 2:case 3:var A=3;break;default:A=h}var D=h;h=A;try{return _()}finally{h=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,A){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var D=h;h=_;try{return A()}finally{h=D}},e.unstable_scheduleCallback=function(_,A,D){var Y=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?Y+D:Y):D=Y,_){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=D+oe,_={id:p++,callback:A,priorityLevel:_,startTime:D,expirationTime:oe,sortIndex:-1},D>Y?(_.sortIndex=D,n(u,_),t(s)===null&&_===t(u)&&(b?(d(E),E=-1):b=!0,uo(v,D-Y))):(_.sortIndex=oe,n(s,_),y||g||(y=!0,so(x))),_},e.unstable_shouldYield=L,e.unstable_wrapCallback=function(_){var A=h;return function(){var D=h;h=A;try{return _.apply(this,arguments)}finally{h=D}}}})(Ku);Qu.exports=Ku;var Bf=Qu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vf=re,_e=Bf;function k(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ju=new Set,ur={};function Xn(e,n){xt(e,n),xt(e+"Capture",n)}function xt(e,n){for(ur[e]=n,e=0;e<n.length;e++)Ju.add(n[e])}var un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Go=Object.prototype.hasOwnProperty,Hf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,is={},os={};function Qf(e){return Go.call(os,e)?!0:Go.call(is,e)?!1:Hf.test(e)?os[e]=!0:(is[e]=!0,!1)}function Kf(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Jf(e,n,t,r){if(n===null||typeof n>"u"||Kf(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ye(e,n,t,r,i,o,a){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=a}var de={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){de[e]=new ye(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];de[n]=new ye(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){de[e]=new ye(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){de[e]=new ye(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){de[e]=new ye(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){de[e]=new ye(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){de[e]=new ye(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){de[e]=new ye(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){de[e]=new ye(e,5,!1,e.toLowerCase(),null,!1,!1)});var ol=/[\-:]([a-z])/g;function al(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(ol,al);de[n]=new ye(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(ol,al);de[n]=new ye(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(ol,al);de[n]=new ye(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){de[e]=new ye(e,1,!1,e.toLowerCase(),null,!1,!1)});de.xlinkHref=new ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){de[e]=new ye(e,1,!1,e.toLowerCase(),null,!0,!0)});function ll(e,n,t,r){var i=de.hasOwnProperty(n)?de[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Jf(n,t,i,r)&&(t=null),r||i===null?Qf(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var mn=Vf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Nr=Symbol.for("react.element"),tt=Symbol.for("react.portal"),rt=Symbol.for("react.fragment"),sl=Symbol.for("react.strict_mode"),Yo=Symbol.for("react.profiler"),Zu=Symbol.for("react.provider"),Gu=Symbol.for("react.context"),ul=Symbol.for("react.forward_ref"),Xo=Symbol.for("react.suspense"),ea=Symbol.for("react.suspense_list"),cl=Symbol.for("react.memo"),vn=Symbol.for("react.lazy"),Yu=Symbol.for("react.offscreen"),as=Symbol.iterator;function It(e){return e===null||typeof e!="object"?null:(e=as&&e[as]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,po;function Vt(e){if(po===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);po=n&&n[1]||""}return`
`+po+e}var mo=!1;function ho(e,n){if(!e||mo)return"";mo=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{mo=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Vt(e):""}function Zf(e){switch(e.tag){case 5:return Vt(e.type);case 16:return Vt("Lazy");case 13:return Vt("Suspense");case 19:return Vt("SuspenseList");case 0:case 2:case 15:return e=ho(e.type,!1),e;case 11:return e=ho(e.type.render,!1),e;case 1:return e=ho(e.type,!0),e;default:return""}}function na(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case rt:return"Fragment";case tt:return"Portal";case Yo:return"Profiler";case sl:return"StrictMode";case Xo:return"Suspense";case ea:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Gu:return(e.displayName||"Context")+".Consumer";case Zu:return(e._context.displayName||"Context")+".Provider";case ul:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case cl:return n=e.displayName||null,n!==null?n:na(e.type)||"Memo";case vn:n=e._payload,e=e._init;try{return na(e(n))}catch{}}return null}function Gf(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return na(n);case 8:return n===sl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Tn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Xu(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Yf(e){var n=Xu(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function $r(e){e._valueTracker||(e._valueTracker=Yf(e))}function ec(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Xu(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function hi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ta(e,n){var t=n.checked;return J({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function ls(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Tn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function nc(e,n){n=n.checked,n!=null&&ll(e,"checked",n,!1)}function ra(e,n){nc(e,n);var t=Tn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?ia(e,n.type,t):n.hasOwnProperty("defaultValue")&&ia(e,n.type,Tn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function ss(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function ia(e,n,t){(n!=="number"||hi(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Ht=Array.isArray;function mt(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Tn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function oa(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(k(91));return J({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function us(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(k(92));if(Ht(t)){if(1<t.length)throw Error(k(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Tn(t)}}function tc(e,n){var t=Tn(n.value),r=Tn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function cs(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function rc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function aa(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?rc(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var qr,ic=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(qr=qr||document.createElement("div"),qr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=qr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function cr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Jt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xf=["Webkit","ms","Moz","O"];Object.keys(Jt).forEach(function(e){Xf.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Jt[n]=Jt[e]})});function oc(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Jt.hasOwnProperty(e)&&Jt[e]?(""+n).trim():n+"px"}function ac(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=oc(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var ep=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function la(e,n){if(n){if(ep[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(k(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(k(61))}if(n.style!=null&&typeof n.style!="object")throw Error(k(62))}}function sa(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ua=null;function dl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ca=null,ht=null,vt=null;function ds(e){if(e=Fr(e)){if(typeof ca!="function")throw Error(k(280));var n=e.stateNode;n&&(n=Ki(n),ca(e.stateNode,e.type,n))}}function lc(e){ht?vt?vt.push(e):vt=[e]:ht=e}function sc(){if(ht){var e=ht,n=vt;if(vt=ht=null,ds(e),n)for(e=0;e<n.length;e++)ds(n[e])}}function uc(e,n){return e(n)}function cc(){}var vo=!1;function dc(e,n,t){if(vo)return e(n,t);vo=!0;try{return uc(e,n,t)}finally{vo=!1,(ht!==null||vt!==null)&&(cc(),sc())}}function dr(e,n){var t=e.stateNode;if(t===null)return null;var r=Ki(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(k(231,n,typeof t));return t}var da=!1;if(un)try{var Mt={};Object.defineProperty(Mt,"passive",{get:function(){da=!0}}),window.addEventListener("test",Mt,Mt),window.removeEventListener("test",Mt,Mt)}catch{da=!1}function np(e,n,t,r,i,o,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(p){this.onError(p)}}var Zt=!1,vi=null,gi=!1,fa=null,tp={onError:function(e){Zt=!0,vi=e}};function rp(e,n,t,r,i,o,a,l,s){Zt=!1,vi=null,np.apply(tp,arguments)}function ip(e,n,t,r,i,o,a,l,s){if(rp.apply(this,arguments),Zt){if(Zt){var u=vi;Zt=!1,vi=null}else throw Error(k(198));gi||(gi=!0,fa=u)}}function et(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function fc(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function fs(e){if(et(e)!==e)throw Error(k(188))}function op(e){var n=e.alternate;if(!n){if(n=et(e),n===null)throw Error(k(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===t)return fs(i),e;if(o===r)return fs(i),n;o=o.sibling}throw Error(k(188))}if(t.return!==r.return)t=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===t){a=!0,t=i,r=o;break}if(l===r){a=!0,r=i,t=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===t){a=!0,t=o,r=i;break}if(l===r){a=!0,r=o,t=i;break}l=l.sibling}if(!a)throw Error(k(189))}}if(t.alternate!==r)throw Error(k(190))}if(t.tag!==3)throw Error(k(188));return t.stateNode.current===t?e:n}function pc(e){return e=op(e),e!==null?mc(e):null}function mc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=mc(e);if(n!==null)return n;e=e.sibling}return null}var hc=_e.unstable_scheduleCallback,ps=_e.unstable_cancelCallback,ap=_e.unstable_shouldYield,lp=_e.unstable_requestPaint,X=_e.unstable_now,sp=_e.unstable_getCurrentPriorityLevel,fl=_e.unstable_ImmediatePriority,vc=_e.unstable_UserBlockingPriority,wi=_e.unstable_NormalPriority,up=_e.unstable_LowPriority,gc=_e.unstable_IdlePriority,Bi=null,Ye=null;function cp(e){if(Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(Bi,e,void 0,(e.current.flags&128)===128)}catch{}}var Ve=Math.clz32?Math.clz32:pp,dp=Math.log,fp=Math.LN2;function pp(e){return e>>>=0,e===0?32:31-(dp(e)/fp|0)|0}var Wr=64,Ur=4194304;function Qt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function yi(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=t&268435455;if(a!==0){var l=a&~i;l!==0?r=Qt(l):(o&=a,o!==0&&(r=Qt(o)))}else a=t&~i,a!==0?r=Qt(a):o!==0&&(r=Qt(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,o=n&-n,i>=o||i===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Ve(n),i=1<<t,r|=e[t],n&=~i;return r}function mp(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hp(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Ve(o),l=1<<a,s=i[a];s===-1?(!(l&t)||l&r)&&(i[a]=mp(l,n)):s<=n&&(e.expiredLanes|=l),o&=~l}}function pa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function wc(){var e=Wr;return Wr<<=1,!(Wr&4194240)&&(Wr=64),e}function go(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function _r(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ve(n),e[n]=t}function vp(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-Ve(t),o=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~o}}function pl(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Ve(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var N=0;function yc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var kc,ml,bc,Sc,Rc,ma=!1,Br=[],xn=null,zn=null,En=null,fr=new Map,pr=new Map,wn=[],gp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ms(e,n){switch(e){case"focusin":case"focusout":xn=null;break;case"dragenter":case"dragleave":zn=null;break;case"mouseover":case"mouseout":En=null;break;case"pointerover":case"pointerout":fr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":pr.delete(n.pointerId)}}function Nt(e,n,t,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},n!==null&&(n=Fr(n),n!==null&&ml(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function wp(e,n,t,r,i){switch(n){case"focusin":return xn=Nt(xn,e,n,t,r,i),!0;case"dragenter":return zn=Nt(zn,e,n,t,r,i),!0;case"mouseover":return En=Nt(En,e,n,t,r,i),!0;case"pointerover":var o=i.pointerId;return fr.set(o,Nt(fr.get(o)||null,e,n,t,r,i)),!0;case"gotpointercapture":return o=i.pointerId,pr.set(o,Nt(pr.get(o)||null,e,n,t,r,i)),!0}return!1}function xc(e){var n=Un(e.target);if(n!==null){var t=et(n);if(t!==null){if(n=t.tag,n===13){if(n=fc(t),n!==null){e.blockedOn=n,Rc(e.priority,function(){bc(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function oi(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=ha(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);ua=r,t.target.dispatchEvent(r),ua=null}else return n=Fr(t),n!==null&&ml(n),e.blockedOn=t,!1;n.shift()}return!0}function hs(e,n,t){oi(e)&&t.delete(n)}function yp(){ma=!1,xn!==null&&oi(xn)&&(xn=null),zn!==null&&oi(zn)&&(zn=null),En!==null&&oi(En)&&(En=null),fr.forEach(hs),pr.forEach(hs)}function $t(e,n){e.blockedOn===n&&(e.blockedOn=null,ma||(ma=!0,_e.unstable_scheduleCallback(_e.unstable_NormalPriority,yp)))}function mr(e){function n(i){return $t(i,e)}if(0<Br.length){$t(Br[0],e);for(var t=1;t<Br.length;t++){var r=Br[t];r.blockedOn===e&&(r.blockedOn=null)}}for(xn!==null&&$t(xn,e),zn!==null&&$t(zn,e),En!==null&&$t(En,e),fr.forEach(n),pr.forEach(n),t=0;t<wn.length;t++)r=wn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<wn.length&&(t=wn[0],t.blockedOn===null);)xc(t),t.blockedOn===null&&wn.shift()}var gt=mn.ReactCurrentBatchConfig,ki=!0;function kp(e,n,t,r){var i=N,o=gt.transition;gt.transition=null;try{N=1,hl(e,n,t,r)}finally{N=i,gt.transition=o}}function bp(e,n,t,r){var i=N,o=gt.transition;gt.transition=null;try{N=4,hl(e,n,t,r)}finally{N=i,gt.transition=o}}function hl(e,n,t,r){if(ki){var i=ha(e,n,t,r);if(i===null)jo(e,n,r,bi,t),ms(e,r);else if(wp(i,e,n,t,r))r.stopPropagation();else if(ms(e,r),n&4&&-1<gp.indexOf(e)){for(;i!==null;){var o=Fr(i);if(o!==null&&kc(o),o=ha(e,n,t,r),o===null&&jo(e,n,r,bi,t),o===i)break;i=o}i!==null&&r.stopPropagation()}else jo(e,n,r,null,t)}}var bi=null;function ha(e,n,t,r){if(bi=null,e=dl(r),e=Un(e),e!==null)if(n=et(e),n===null)e=null;else if(t=n.tag,t===13){if(e=fc(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return bi=e,null}function zc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sp()){case fl:return 1;case vc:return 4;case wi:case up:return 16;case gc:return 536870912;default:return 16}default:return 16}}var bn=null,vl=null,ai=null;function Ec(){if(ai)return ai;var e,n=vl,t=n.length,r,i="value"in bn?bn.value:bn.textContent,o=i.length;for(e=0;e<t&&n[e]===i[e];e++);var a=t-e;for(r=1;r<=a&&n[t-r]===i[o-r];r++);return ai=i.slice(e,1<r?1-r:void 0)}function li(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Vr(){return!0}function vs(){return!1}function Fe(e){function n(t,r,i,o,a){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Vr:vs,this.isPropagationStopped=vs,this}return J(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Vr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Vr)},persist:function(){},isPersistent:Vr}),n}var Ot={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gl=Fe(Ot),Ar=J({},Ot,{view:0,detail:0}),Sp=Fe(Ar),wo,yo,qt,Vi=J({},Ar,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==qt&&(qt&&e.type==="mousemove"?(wo=e.screenX-qt.screenX,yo=e.screenY-qt.screenY):yo=wo=0,qt=e),wo)},movementY:function(e){return"movementY"in e?e.movementY:yo}}),gs=Fe(Vi),Rp=J({},Vi,{dataTransfer:0}),xp=Fe(Rp),zp=J({},Ar,{relatedTarget:0}),ko=Fe(zp),Ep=J({},Ot,{animationName:0,elapsedTime:0,pseudoElement:0}),jp=Fe(Ep),Cp=J({},Ot,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pp=Fe(Cp),_p=J({},Ot,{data:0}),ws=Fe(_p),Ap={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tp(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Dp[e])?!!n[e]:!1}function wl(){return Tp}var Op=J({},Ar,{key:function(e){if(e.key){var n=Ap[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=li(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Fp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wl,charCode:function(e){return e.type==="keypress"?li(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?li(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Lp=Fe(Op),Ip=J({},Vi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ys=Fe(Ip),Mp=J({},Ar,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wl}),Np=Fe(Mp),$p=J({},Ot,{propertyName:0,elapsedTime:0,pseudoElement:0}),qp=Fe($p),Wp=J({},Vi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Up=Fe(Wp),Bp=[9,13,27,32],yl=un&&"CompositionEvent"in window,Gt=null;un&&"documentMode"in document&&(Gt=document.documentMode);var Vp=un&&"TextEvent"in window&&!Gt,jc=un&&(!yl||Gt&&8<Gt&&11>=Gt),ks=" ",bs=!1;function Cc(e,n){switch(e){case"keyup":return Bp.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var it=!1;function Hp(e,n){switch(e){case"compositionend":return Pc(n);case"keypress":return n.which!==32?null:(bs=!0,ks);case"textInput":return e=n.data,e===ks&&bs?null:e;default:return null}}function Qp(e,n){if(it)return e==="compositionend"||!yl&&Cc(e,n)?(e=Ec(),ai=vl=bn=null,it=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return jc&&n.locale!=="ko"?null:n.data;default:return null}}var Kp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ss(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Kp[e.type]:n==="textarea"}function _c(e,n,t,r){lc(r),n=Si(n,"onChange"),0<n.length&&(t=new gl("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Yt=null,hr=null;function Jp(e){qc(e,0)}function Hi(e){var n=lt(e);if(ec(n))return e}function Zp(e,n){if(e==="change")return n}var Ac=!1;if(un){var bo;if(un){var So="oninput"in document;if(!So){var Rs=document.createElement("div");Rs.setAttribute("oninput","return;"),So=typeof Rs.oninput=="function"}bo=So}else bo=!1;Ac=bo&&(!document.documentMode||9<document.documentMode)}function xs(){Yt&&(Yt.detachEvent("onpropertychange",Fc),hr=Yt=null)}function Fc(e){if(e.propertyName==="value"&&Hi(hr)){var n=[];_c(n,hr,e,dl(e)),dc(Jp,n)}}function Gp(e,n,t){e==="focusin"?(xs(),Yt=n,hr=t,Yt.attachEvent("onpropertychange",Fc)):e==="focusout"&&xs()}function Yp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Hi(hr)}function Xp(e,n){if(e==="click")return Hi(n)}function em(e,n){if(e==="input"||e==="change")return Hi(n)}function nm(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Qe=typeof Object.is=="function"?Object.is:nm;function vr(e,n){if(Qe(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!Go.call(n,i)||!Qe(e[i],n[i]))return!1}return!0}function zs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Es(e,n){var t=zs(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=zs(t)}}function Dc(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Dc(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Tc(){for(var e=window,n=hi();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=hi(e.document)}return n}function kl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function tm(e){var n=Tc(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Dc(t.ownerDocument.documentElement,t)){if(r!==null&&kl(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Es(t,o);var a=Es(t,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(a.node,a.offset)):(n.setEnd(a.node,a.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var rm=un&&"documentMode"in document&&11>=document.documentMode,ot=null,va=null,Xt=null,ga=!1;function js(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ga||ot==null||ot!==hi(r)||(r=ot,"selectionStart"in r&&kl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xt&&vr(Xt,r)||(Xt=r,r=Si(va,"onSelect"),0<r.length&&(n=new gl("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=ot)))}function Hr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var at={animationend:Hr("Animation","AnimationEnd"),animationiteration:Hr("Animation","AnimationIteration"),animationstart:Hr("Animation","AnimationStart"),transitionend:Hr("Transition","TransitionEnd")},Ro={},Oc={};un&&(Oc=document.createElement("div").style,"AnimationEvent"in window||(delete at.animationend.animation,delete at.animationiteration.animation,delete at.animationstart.animation),"TransitionEvent"in window||delete at.transitionend.transition);function Qi(e){if(Ro[e])return Ro[e];if(!at[e])return e;var n=at[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Oc)return Ro[e]=n[t];return e}var Lc=Qi("animationend"),Ic=Qi("animationiteration"),Mc=Qi("animationstart"),Nc=Qi("transitionend"),$c=new Map,Cs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ln(e,n){$c.set(e,n),Xn(n,[e])}for(var xo=0;xo<Cs.length;xo++){var zo=Cs[xo],im=zo.toLowerCase(),om=zo[0].toUpperCase()+zo.slice(1);Ln(im,"on"+om)}Ln(Lc,"onAnimationEnd");Ln(Ic,"onAnimationIteration");Ln(Mc,"onAnimationStart");Ln("dblclick","onDoubleClick");Ln("focusin","onFocus");Ln("focusout","onBlur");Ln(Nc,"onTransitionEnd");xt("onMouseEnter",["mouseout","mouseover"]);xt("onMouseLeave",["mouseout","mouseover"]);xt("onPointerEnter",["pointerout","pointerover"]);xt("onPointerLeave",["pointerout","pointerover"]);Xn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Kt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),am=new Set("cancel close invalid load scroll toggle".split(" ").concat(Kt));function Ps(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,ip(r,n,void 0,e),e.currentTarget=null}function qc(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;Ps(i,l,u),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;Ps(i,l,u),o=s}}}if(gi)throw e=fa,gi=!1,fa=null,e}function U(e,n){var t=n[Sa];t===void 0&&(t=n[Sa]=new Set);var r=e+"__bubble";t.has(r)||(Wc(n,e,2,!1),t.add(r))}function Eo(e,n,t){var r=0;n&&(r|=4),Wc(t,e,r,n)}var Qr="_reactListening"+Math.random().toString(36).slice(2);function gr(e){if(!e[Qr]){e[Qr]=!0,Ju.forEach(function(t){t!=="selectionchange"&&(am.has(t)||Eo(t,!1,e),Eo(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Qr]||(n[Qr]=!0,Eo("selectionchange",!1,n))}}function Wc(e,n,t,r){switch(zc(n)){case 1:var i=kp;break;case 4:i=bp;break;default:i=hl}t=i.bind(null,n,t,e),i=void 0,!da||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function jo(e,n,t,r,i){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Un(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}dc(function(){var u=o,p=dl(t),m=[];e:{var h=$c.get(e);if(h!==void 0){var g=gl,y=e;switch(e){case"keypress":if(li(t)===0)break e;case"keydown":case"keyup":g=Lp;break;case"focusin":y="focus",g=ko;break;case"focusout":y="blur",g=ko;break;case"beforeblur":case"afterblur":g=ko;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=gs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=xp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Np;break;case Lc:case Ic:case Mc:g=jp;break;case Nc:g=qp;break;case"scroll":g=Sp;break;case"wheel":g=Up;break;case"copy":case"cut":case"paste":g=Pp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=ys}var b=(n&4)!==0,F=!b&&e==="scroll",d=b?h!==null?h+"Capture":null:h;b=[];for(var c=u,f;c!==null;){f=c;var v=f.stateNode;if(f.tag===5&&v!==null&&(f=v,d!==null&&(v=dr(c,d),v!=null&&b.push(wr(c,v,f)))),F)break;c=c.return}0<b.length&&(h=new g(h,y,null,t,p),m.push({event:h,listeners:b}))}}if(!(n&7)){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&t!==ua&&(y=t.relatedTarget||t.fromElement)&&(Un(y)||y[cn]))break e;if((g||h)&&(h=p.window===p?p:(h=p.ownerDocument)?h.defaultView||h.parentWindow:window,g?(y=t.relatedTarget||t.toElement,g=u,y=y?Un(y):null,y!==null&&(F=et(y),y!==F||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(b=gs,v="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(b=ys,v="onPointerLeave",d="onPointerEnter",c="pointer"),F=g==null?h:lt(g),f=y==null?h:lt(y),h=new b(v,c+"leave",g,t,p),h.target=F,h.relatedTarget=f,v=null,Un(p)===u&&(b=new b(d,c+"enter",y,t,p),b.target=f,b.relatedTarget=F,v=b),F=v,g&&y)n:{for(b=g,d=y,c=0,f=b;f;f=nt(f))c++;for(f=0,v=d;v;v=nt(v))f++;for(;0<c-f;)b=nt(b),c--;for(;0<f-c;)d=nt(d),f--;for(;c--;){if(b===d||d!==null&&b===d.alternate)break n;b=nt(b),d=nt(d)}b=null}else b=null;g!==null&&_s(m,h,g,b,!1),y!==null&&F!==null&&_s(m,F,y,b,!0)}}e:{if(h=u?lt(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var x=Zp;else if(Ss(h))if(Ac)x=em;else{x=Yp;var P=Gp}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(x=Xp);if(x&&(x=x(e,u))){_c(m,x,t,p);break e}P&&P(e,h,u),e==="focusout"&&(P=h._wrapperState)&&P.controlled&&h.type==="number"&&ia(h,"number",h.value)}switch(P=u?lt(u):window,e){case"focusin":(Ss(P)||P.contentEditable==="true")&&(ot=P,va=u,Xt=null);break;case"focusout":Xt=va=ot=null;break;case"mousedown":ga=!0;break;case"contextmenu":case"mouseup":case"dragend":ga=!1,js(m,t,p);break;case"selectionchange":if(rm)break;case"keydown":case"keyup":js(m,t,p)}var z;if(yl)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else it?Cc(e,t)&&(E="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(E="onCompositionStart");E&&(jc&&t.locale!=="ko"&&(it||E!=="onCompositionStart"?E==="onCompositionEnd"&&it&&(z=Ec()):(bn=p,vl="value"in bn?bn.value:bn.textContent,it=!0)),P=Si(u,E),0<P.length&&(E=new ws(E,e,null,t,p),m.push({event:E,listeners:P}),z?E.data=z:(z=Pc(t),z!==null&&(E.data=z)))),(z=Vp?Hp(e,t):Qp(e,t))&&(u=Si(u,"onBeforeInput"),0<u.length&&(p=new ws("onBeforeInput","beforeinput",null,t,p),m.push({event:p,listeners:u}),p.data=z))}qc(m,n)})}function wr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Si(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=dr(e,t),o!=null&&r.unshift(wr(e,o,i)),o=dr(e,n),o!=null&&r.push(wr(e,o,i))),e=e.return}return r}function nt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function _s(e,n,t,r,i){for(var o=n._reactName,a=[];t!==null&&t!==r;){var l=t,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,i?(s=dr(t,o),s!=null&&a.unshift(wr(t,s,l))):i||(s=dr(t,o),s!=null&&a.push(wr(t,s,l)))),t=t.return}a.length!==0&&e.push({event:n,listeners:a})}var lm=/\r\n?/g,sm=/\u0000|\uFFFD/g;function As(e){return(typeof e=="string"?e:""+e).replace(lm,`
`).replace(sm,"")}function Kr(e,n,t){if(n=As(n),As(e)!==n&&t)throw Error(k(425))}function Ri(){}var wa=null,ya=null;function ka(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ba=typeof setTimeout=="function"?setTimeout:void 0,um=typeof clearTimeout=="function"?clearTimeout:void 0,Fs=typeof Promise=="function"?Promise:void 0,cm=typeof queueMicrotask=="function"?queueMicrotask:typeof Fs<"u"?function(e){return Fs.resolve(null).then(e).catch(dm)}:ba;function dm(e){setTimeout(function(){throw e})}function Co(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),mr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);mr(n)}function jn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Ds(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Lt=Math.random().toString(36).slice(2),Ge="__reactFiber$"+Lt,yr="__reactProps$"+Lt,cn="__reactContainer$"+Lt,Sa="__reactEvents$"+Lt,fm="__reactListeners$"+Lt,pm="__reactHandles$"+Lt;function Un(e){var n=e[Ge];if(n)return n;for(var t=e.parentNode;t;){if(n=t[cn]||t[Ge]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Ds(e);e!==null;){if(t=e[Ge])return t;e=Ds(e)}return n}e=t,t=e.parentNode}return null}function Fr(e){return e=e[Ge]||e[cn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function lt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Ki(e){return e[yr]||null}var Ra=[],st=-1;function In(e){return{current:e}}function B(e){0>st||(e.current=Ra[st],Ra[st]=null,st--)}function W(e,n){st++,Ra[st]=e.current,e.current=n}var On={},he=In(On),Se=In(!1),Kn=On;function zt(e,n){var t=e.type.contextTypes;if(!t)return On;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in t)i[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function Re(e){return e=e.childContextTypes,e!=null}function xi(){B(Se),B(he)}function Ts(e,n,t){if(he.current!==On)throw Error(k(168));W(he,n),W(Se,t)}function Uc(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(k(108,Gf(e)||"Unknown",i));return J({},t,r)}function zi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||On,Kn=he.current,W(he,e),W(Se,Se.current),!0}function Os(e,n,t){var r=e.stateNode;if(!r)throw Error(k(169));t?(e=Uc(e,n,Kn),r.__reactInternalMemoizedMergedChildContext=e,B(Se),B(he),W(he,e)):B(Se),W(Se,t)}var nn=null,Ji=!1,Po=!1;function Bc(e){nn===null?nn=[e]:nn.push(e)}function mm(e){Ji=!0,Bc(e)}function Mn(){if(!Po&&nn!==null){Po=!0;var e=0,n=N;try{var t=nn;for(N=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}nn=null,Ji=!1}catch(i){throw nn!==null&&(nn=nn.slice(e+1)),hc(fl,Mn),i}finally{N=n,Po=!1}}return null}var ut=[],ct=0,Ei=null,ji=0,Te=[],Oe=0,Jn=null,tn=1,rn="";function qn(e,n){ut[ct++]=ji,ut[ct++]=Ei,Ei=e,ji=n}function Vc(e,n,t){Te[Oe++]=tn,Te[Oe++]=rn,Te[Oe++]=Jn,Jn=e;var r=tn;e=rn;var i=32-Ve(r)-1;r&=~(1<<i),t+=1;var o=32-Ve(n)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,tn=1<<32-Ve(n)+i|t<<i|r,rn=o+e}else tn=1<<o|t<<i|r,rn=e}function bl(e){e.return!==null&&(qn(e,1),Vc(e,1,0))}function Sl(e){for(;e===Ei;)Ei=ut[--ct],ut[ct]=null,ji=ut[--ct],ut[ct]=null;for(;e===Jn;)Jn=Te[--Oe],Te[Oe]=null,rn=Te[--Oe],Te[Oe]=null,tn=Te[--Oe],Te[Oe]=null}var Pe=null,Ce=null,H=!1,Be=null;function Hc(e,n){var t=Le(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Ls(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Pe=e,Ce=jn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Pe=e,Ce=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Jn!==null?{id:tn,overflow:rn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Le(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Pe=e,Ce=null,!0):!1;default:return!1}}function xa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function za(e){if(H){var n=Ce;if(n){var t=n;if(!Ls(e,n)){if(xa(e))throw Error(k(418));n=jn(t.nextSibling);var r=Pe;n&&Ls(e,n)?Hc(r,t):(e.flags=e.flags&-4097|2,H=!1,Pe=e)}}else{if(xa(e))throw Error(k(418));e.flags=e.flags&-4097|2,H=!1,Pe=e}}}function Is(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Pe=e}function Jr(e){if(e!==Pe)return!1;if(!H)return Is(e),H=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!ka(e.type,e.memoizedProps)),n&&(n=Ce)){if(xa(e))throw Qc(),Error(k(418));for(;n;)Hc(e,n),n=jn(n.nextSibling)}if(Is(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ce=jn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ce=null}}else Ce=Pe?jn(e.stateNode.nextSibling):null;return!0}function Qc(){for(var e=Ce;e;)e=jn(e.nextSibling)}function Et(){Ce=Pe=null,H=!1}function Rl(e){Be===null?Be=[e]:Be.push(e)}var hm=mn.ReactCurrentBatchConfig;function Wt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(k(309));var r=t.stateNode}if(!r)throw Error(k(147,e));var i=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(a){var l=i.refs;a===null?delete l[o]:l[o]=a},n._stringRef=o,n)}if(typeof e!="string")throw Error(k(284));if(!t._owner)throw Error(k(290,e))}return e}function Zr(e,n){throw e=Object.prototype.toString.call(n),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Ms(e){var n=e._init;return n(e._payload)}function Kc(e){function n(d,c){if(e){var f=d.deletions;f===null?(d.deletions=[c],d.flags|=16):f.push(c)}}function t(d,c){if(!e)return null;for(;c!==null;)n(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function i(d,c){return d=An(d,c),d.index=0,d.sibling=null,d}function o(d,c,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<c?(d.flags|=2,c):f):(d.flags|=2,c)):(d.flags|=1048576,c)}function a(d){return e&&d.alternate===null&&(d.flags|=2),d}function l(d,c,f,v){return c===null||c.tag!==6?(c=Lo(f,d.mode,v),c.return=d,c):(c=i(c,f),c.return=d,c)}function s(d,c,f,v){var x=f.type;return x===rt?p(d,c,f.props.children,v,f.key):c!==null&&(c.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===vn&&Ms(x)===c.type)?(v=i(c,f.props),v.ref=Wt(d,c,f),v.return=d,v):(v=mi(f.type,f.key,f.props,null,d.mode,v),v.ref=Wt(d,c,f),v.return=d,v)}function u(d,c,f,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=Io(f,d.mode,v),c.return=d,c):(c=i(c,f.children||[]),c.return=d,c)}function p(d,c,f,v,x){return c===null||c.tag!==7?(c=Qn(f,d.mode,v,x),c.return=d,c):(c=i(c,f),c.return=d,c)}function m(d,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Lo(""+c,d.mode,f),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Nr:return f=mi(c.type,c.key,c.props,null,d.mode,f),f.ref=Wt(d,null,c),f.return=d,f;case tt:return c=Io(c,d.mode,f),c.return=d,c;case vn:var v=c._init;return m(d,v(c._payload),f)}if(Ht(c)||It(c))return c=Qn(c,d.mode,f,null),c.return=d,c;Zr(d,c)}return null}function h(d,c,f,v){var x=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return x!==null?null:l(d,c,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Nr:return f.key===x?s(d,c,f,v):null;case tt:return f.key===x?u(d,c,f,v):null;case vn:return x=f._init,h(d,c,x(f._payload),v)}if(Ht(f)||It(f))return x!==null?null:p(d,c,f,v,null);Zr(d,f)}return null}function g(d,c,f,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return d=d.get(f)||null,l(c,d,""+v,x);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Nr:return d=d.get(v.key===null?f:v.key)||null,s(c,d,v,x);case tt:return d=d.get(v.key===null?f:v.key)||null,u(c,d,v,x);case vn:var P=v._init;return g(d,c,f,P(v._payload),x)}if(Ht(v)||It(v))return d=d.get(f)||null,p(c,d,v,x,null);Zr(c,v)}return null}function y(d,c,f,v){for(var x=null,P=null,z=c,E=c=0,w=null;z!==null&&E<f.length;E++){z.index>E?(w=z,z=null):w=z.sibling;var S=h(d,z,f[E],v);if(S===null){z===null&&(z=w);break}e&&z&&S.alternate===null&&n(d,z),c=o(S,c,E),P===null?x=S:P.sibling=S,P=S,z=w}if(E===f.length)return t(d,z),H&&qn(d,E),x;if(z===null){for(;E<f.length;E++)z=m(d,f[E],v),z!==null&&(c=o(z,c,E),P===null?x=z:P.sibling=z,P=z);return H&&qn(d,E),x}for(z=r(d,z);E<f.length;E++)w=g(z,d,E,f[E],v),w!==null&&(e&&w.alternate!==null&&z.delete(w.key===null?E:w.key),c=o(w,c,E),P===null?x=w:P.sibling=w,P=w);return e&&z.forEach(function(L){return n(d,L)}),H&&qn(d,E),x}function b(d,c,f,v){var x=It(f);if(typeof x!="function")throw Error(k(150));if(f=x.call(f),f==null)throw Error(k(151));for(var P=x=null,z=c,E=c=0,w=null,S=f.next();z!==null&&!S.done;E++,S=f.next()){z.index>E?(w=z,z=null):w=z.sibling;var L=h(d,z,S.value,v);if(L===null){z===null&&(z=w);break}e&&z&&L.alternate===null&&n(d,z),c=o(L,c,E),P===null?x=L:P.sibling=L,P=L,z=w}if(S.done)return t(d,z),H&&qn(d,E),x;if(z===null){for(;!S.done;E++,S=f.next())S=m(d,S.value,v),S!==null&&(c=o(S,c,E),P===null?x=S:P.sibling=S,P=S);return H&&qn(d,E),x}for(z=r(d,z);!S.done;E++,S=f.next())S=g(z,d,E,S.value,v),S!==null&&(e&&S.alternate!==null&&z.delete(S.key===null?E:S.key),c=o(S,c,E),P===null?x=S:P.sibling=S,P=S);return e&&z.forEach(function(ze){return n(d,ze)}),H&&qn(d,E),x}function F(d,c,f,v){if(typeof f=="object"&&f!==null&&f.type===rt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Nr:e:{for(var x=f.key,P=c;P!==null;){if(P.key===x){if(x=f.type,x===rt){if(P.tag===7){t(d,P.sibling),c=i(P,f.props.children),c.return=d,d=c;break e}}else if(P.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===vn&&Ms(x)===P.type){t(d,P.sibling),c=i(P,f.props),c.ref=Wt(d,P,f),c.return=d,d=c;break e}t(d,P);break}else n(d,P);P=P.sibling}f.type===rt?(c=Qn(f.props.children,d.mode,v,f.key),c.return=d,d=c):(v=mi(f.type,f.key,f.props,null,d.mode,v),v.ref=Wt(d,c,f),v.return=d,d=v)}return a(d);case tt:e:{for(P=f.key;c!==null;){if(c.key===P)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){t(d,c.sibling),c=i(c,f.children||[]),c.return=d,d=c;break e}else{t(d,c);break}else n(d,c);c=c.sibling}c=Io(f,d.mode,v),c.return=d,d=c}return a(d);case vn:return P=f._init,F(d,c,P(f._payload),v)}if(Ht(f))return y(d,c,f,v);if(It(f))return b(d,c,f,v);Zr(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(t(d,c.sibling),c=i(c,f),c.return=d,d=c):(t(d,c),c=Lo(f,d.mode,v),c.return=d,d=c),a(d)):t(d,c)}return F}var jt=Kc(!0),Jc=Kc(!1),Ci=In(null),Pi=null,dt=null,xl=null;function zl(){xl=dt=Pi=null}function El(e){var n=Ci.current;B(Ci),e._currentValue=n}function Ea(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function wt(e,n){Pi=e,xl=dt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(be=!0),e.firstContext=null)}function Me(e){var n=e._currentValue;if(xl!==e)if(e={context:e,memoizedValue:n,next:null},dt===null){if(Pi===null)throw Error(k(308));dt=e,Pi.dependencies={lanes:0,firstContext:e}}else dt=dt.next=e;return n}var Bn=null;function jl(e){Bn===null?Bn=[e]:Bn.push(e)}function Zc(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,jl(n)):(t.next=i.next,i.next=t),n.interleaved=t,dn(e,r)}function dn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var gn=!1;function Cl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function on(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Cn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,dn(e,t)}return i=r.interleaved,i===null?(n.next=n,jl(r)):(n.next=i.next,i.next=n),r.interleaved=n,dn(e,t)}function si(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,pl(e,t)}}function Ns(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?i=o=a:o=o.next=a,t=t.next}while(t!==null);o===null?i=o=n:o=o.next=n}else i=o=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function _i(e,n,t,r){var i=e.updateQueue;gn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?o=u:a.next=u,a=s;var p=e.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==a&&(l===null?p.firstBaseUpdate=u:l.next=u,p.lastBaseUpdate=s))}if(o!==null){var m=i.baseState;a=0,p=u=s=null,l=o;do{var h=l.lane,g=l.eventTime;if((r&h)===h){p!==null&&(p=p.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,b=l;switch(h=n,g=t,b.tag){case 1:if(y=b.payload,typeof y=="function"){m=y.call(g,m,h);break e}m=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=b.payload,h=typeof y=="function"?y.call(g,m,h):y,h==null)break e;m=J({},m,h);break e;case 2:gn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else g={eventTime:g,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(u=p=g,s=m):p=p.next=g,a|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(p===null&&(s=m),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=p,n=i.shared.interleaved,n!==null){i=n;do a|=i.lane,i=i.next;while(i!==n)}else o===null&&(i.shared.lanes=0);Gn|=a,e.lanes=a,e.memoizedState=m}}function $s(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var Dr={},Xe=In(Dr),kr=In(Dr),br=In(Dr);function Vn(e){if(e===Dr)throw Error(k(174));return e}function Pl(e,n){switch(W(br,n),W(kr,e),W(Xe,Dr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:aa(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=aa(n,e)}B(Xe),W(Xe,n)}function Ct(){B(Xe),B(kr),B(br)}function Yc(e){Vn(br.current);var n=Vn(Xe.current),t=aa(n,e.type);n!==t&&(W(kr,e),W(Xe,t))}function _l(e){kr.current===e&&(B(Xe),B(kr))}var Q=In(0);function Ai(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var _o=[];function Al(){for(var e=0;e<_o.length;e++)_o[e]._workInProgressVersionPrimary=null;_o.length=0}var ui=mn.ReactCurrentDispatcher,Ao=mn.ReactCurrentBatchConfig,Zn=0,K=null,te=null,ae=null,Fi=!1,er=!1,Sr=0,vm=0;function fe(){throw Error(k(321))}function Fl(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Qe(e[t],n[t]))return!1;return!0}function Dl(e,n,t,r,i,o){if(Zn=o,K=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,ui.current=e===null||e.memoizedState===null?km:bm,e=t(r,i),er){o=0;do{if(er=!1,Sr=0,25<=o)throw Error(k(301));o+=1,ae=te=null,n.updateQueue=null,ui.current=Sm,e=t(r,i)}while(er)}if(ui.current=Di,n=te!==null&&te.next!==null,Zn=0,ae=te=K=null,Fi=!1,n)throw Error(k(300));return e}function Tl(){var e=Sr!==0;return Sr=0,e}function Ze(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ae===null?K.memoizedState=ae=e:ae=ae.next=e,ae}function Ne(){if(te===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var n=ae===null?K.memoizedState:ae.next;if(n!==null)ae=n,te=e;else{if(e===null)throw Error(k(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},ae===null?K.memoizedState=ae=e:ae=ae.next=e}return ae}function Rr(e,n){return typeof n=="function"?n(e):n}function Fo(e){var n=Ne(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var r=te,i=r.baseQueue,o=t.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,t.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,u=o;do{var p=u.lane;if((Zn&p)===p)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var m={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=m,a=r):s=s.next=m,K.lanes|=p,Gn|=p}u=u.next}while(u!==null&&u!==o);s===null?a=r:s.next=l,Qe(r,n.memoizedState)||(be=!0),n.memoizedState=r,n.baseState=a,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do o=i.lane,K.lanes|=o,Gn|=o,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Do(e){var n=Ne(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,o=n.memoizedState;if(i!==null){t.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Qe(o,n.memoizedState)||(be=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function Xc(){}function ed(e,n){var t=K,r=Ne(),i=n(),o=!Qe(r.memoizedState,i);if(o&&(r.memoizedState=i,be=!0),r=r.queue,Ol(rd.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||ae!==null&&ae.memoizedState.tag&1){if(t.flags|=2048,xr(9,td.bind(null,t,r,i,n),void 0,null),le===null)throw Error(k(349));Zn&30||nd(t,n,i)}return i}function nd(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=K.updateQueue,n===null?(n={lastEffect:null,stores:null},K.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function td(e,n,t,r){n.value=t,n.getSnapshot=r,id(n)&&od(e)}function rd(e,n,t){return t(function(){id(n)&&od(e)})}function id(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Qe(e,t)}catch{return!0}}function od(e){var n=dn(e,1);n!==null&&He(n,e,1,-1)}function qs(e){var n=Ze();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Rr,lastRenderedState:e},n.queue=e,e=e.dispatch=ym.bind(null,K,e),[n.memoizedState,e]}function xr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=K.updateQueue,n===null?(n={lastEffect:null,stores:null},K.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function ad(){return Ne().memoizedState}function ci(e,n,t,r){var i=Ze();K.flags|=e,i.memoizedState=xr(1|n,t,void 0,r===void 0?null:r)}function Zi(e,n,t,r){var i=Ne();r=r===void 0?null:r;var o=void 0;if(te!==null){var a=te.memoizedState;if(o=a.destroy,r!==null&&Fl(r,a.deps)){i.memoizedState=xr(n,t,o,r);return}}K.flags|=e,i.memoizedState=xr(1|n,t,o,r)}function Ws(e,n){return ci(8390656,8,e,n)}function Ol(e,n){return Zi(2048,8,e,n)}function ld(e,n){return Zi(4,2,e,n)}function sd(e,n){return Zi(4,4,e,n)}function ud(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function cd(e,n,t){return t=t!=null?t.concat([e]):null,Zi(4,4,ud.bind(null,n,e),t)}function Ll(){}function dd(e,n){var t=Ne();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Fl(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function fd(e,n){var t=Ne();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Fl(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function pd(e,n,t){return Zn&21?(Qe(t,n)||(t=wc(),K.lanes|=t,Gn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,be=!0),e.memoizedState=t)}function gm(e,n){var t=N;N=t!==0&&4>t?t:4,e(!0);var r=Ao.transition;Ao.transition={};try{e(!1),n()}finally{N=t,Ao.transition=r}}function md(){return Ne().memoizedState}function wm(e,n,t){var r=_n(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},hd(e))vd(n,t);else if(t=Zc(e,n,t,r),t!==null){var i=ge();He(t,e,r,i),gd(t,n,r)}}function ym(e,n,t){var r=_n(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(hd(e))vd(n,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var a=n.lastRenderedState,l=o(a,t);if(i.hasEagerState=!0,i.eagerState=l,Qe(l,a)){var s=n.interleaved;s===null?(i.next=i,jl(n)):(i.next=s.next,s.next=i),n.interleaved=i;return}}catch{}finally{}t=Zc(e,n,i,r),t!==null&&(i=ge(),He(t,e,r,i),gd(t,n,r))}}function hd(e){var n=e.alternate;return e===K||n!==null&&n===K}function vd(e,n){er=Fi=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function gd(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,pl(e,t)}}var Di={readContext:Me,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},km={readContext:Me,useCallback:function(e,n){return Ze().memoizedState=[e,n===void 0?null:n],e},useContext:Me,useEffect:Ws,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,ci(4194308,4,ud.bind(null,n,e),t)},useLayoutEffect:function(e,n){return ci(4194308,4,e,n)},useInsertionEffect:function(e,n){return ci(4,2,e,n)},useMemo:function(e,n){var t=Ze();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Ze();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=wm.bind(null,K,e),[r.memoizedState,e]},useRef:function(e){var n=Ze();return e={current:e},n.memoizedState=e},useState:qs,useDebugValue:Ll,useDeferredValue:function(e){return Ze().memoizedState=e},useTransition:function(){var e=qs(!1),n=e[0];return e=gm.bind(null,e[1]),Ze().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=K,i=Ze();if(H){if(t===void 0)throw Error(k(407));t=t()}else{if(t=n(),le===null)throw Error(k(349));Zn&30||nd(r,n,t)}i.memoizedState=t;var o={value:t,getSnapshot:n};return i.queue=o,Ws(rd.bind(null,r,o,e),[e]),r.flags|=2048,xr(9,td.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=Ze(),n=le.identifierPrefix;if(H){var t=rn,r=tn;t=(r&~(1<<32-Ve(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Sr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=vm++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},bm={readContext:Me,useCallback:dd,useContext:Me,useEffect:Ol,useImperativeHandle:cd,useInsertionEffect:ld,useLayoutEffect:sd,useMemo:fd,useReducer:Fo,useRef:ad,useState:function(){return Fo(Rr)},useDebugValue:Ll,useDeferredValue:function(e){var n=Ne();return pd(n,te.memoizedState,e)},useTransition:function(){var e=Fo(Rr)[0],n=Ne().memoizedState;return[e,n]},useMutableSource:Xc,useSyncExternalStore:ed,useId:md,unstable_isNewReconciler:!1},Sm={readContext:Me,useCallback:dd,useContext:Me,useEffect:Ol,useImperativeHandle:cd,useInsertionEffect:ld,useLayoutEffect:sd,useMemo:fd,useReducer:Do,useRef:ad,useState:function(){return Do(Rr)},useDebugValue:Ll,useDeferredValue:function(e){var n=Ne();return te===null?n.memoizedState=e:pd(n,te.memoizedState,e)},useTransition:function(){var e=Do(Rr)[0],n=Ne().memoizedState;return[e,n]},useMutableSource:Xc,useSyncExternalStore:ed,useId:md,unstable_isNewReconciler:!1};function We(e,n){if(e&&e.defaultProps){n=J({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function ja(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:J({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Gi={isMounted:function(e){return(e=e._reactInternals)?et(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=ge(),i=_n(e),o=on(r,i);o.payload=n,t!=null&&(o.callback=t),n=Cn(e,o,i),n!==null&&(He(n,e,i,r),si(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=ge(),i=_n(e),o=on(r,i);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=Cn(e,o,i),n!==null&&(He(n,e,i,r),si(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ge(),r=_n(e),i=on(t,r);i.tag=2,n!=null&&(i.callback=n),n=Cn(e,i,r),n!==null&&(He(n,e,r,t),si(n,e,r))}};function Us(e,n,t,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):n.prototype&&n.prototype.isPureReactComponent?!vr(t,r)||!vr(i,o):!0}function wd(e,n,t){var r=!1,i=On,o=n.contextType;return typeof o=="object"&&o!==null?o=Me(o):(i=Re(n)?Kn:he.current,r=n.contextTypes,o=(r=r!=null)?zt(e,i):On),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Gi,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),n}function Bs(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Gi.enqueueReplaceState(n,n.state,null)}function Ca(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},Cl(e);var o=n.contextType;typeof o=="object"&&o!==null?i.context=Me(o):(o=Re(n)?Kn:he.current,i.context=zt(e,o)),i.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(ja(e,n,o,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&Gi.enqueueReplaceState(i,i.state,null),_i(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Pt(e,n){try{var t="",r=n;do t+=Zf(r),r=r.return;while(r);var i=t}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:i,digest:null}}function To(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Pa(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Rm=typeof WeakMap=="function"?WeakMap:Map;function yd(e,n,t){t=on(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Oi||(Oi=!0,Na=r),Pa(e,n)},t}function kd(e,n,t){t=on(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){Pa(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){Pa(e,n),typeof r!="function"&&(Pn===null?Pn=new Set([this]):Pn.add(this));var a=n.stack;this.componentDidCatch(n.value,{componentStack:a!==null?a:""})}),t}function Vs(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Rm;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=Im.bind(null,e,n,t),n.then(e,e))}function Hs(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Qs(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=on(-1,1),n.tag=2,Cn(t,n,1))),t.lanes|=1),e)}var xm=mn.ReactCurrentOwner,be=!1;function ve(e,n,t,r){n.child=e===null?Jc(n,null,t,r):jt(n,e.child,t,r)}function Ks(e,n,t,r,i){t=t.render;var o=n.ref;return wt(n,i),r=Dl(e,n,t,r,o,i),t=Tl(),e!==null&&!be?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,fn(e,n,i)):(H&&t&&bl(n),n.flags|=1,ve(e,n,r,i),n.child)}function Js(e,n,t,r,i){if(e===null){var o=t.type;return typeof o=="function"&&!Bl(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,bd(e,n,o,r,i)):(e=mi(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(t=t.compare,t=t!==null?t:vr,t(a,r)&&e.ref===n.ref)return fn(e,n,i)}return n.flags|=1,e=An(o,r),e.ref=n.ref,e.return=n,n.child=e}function bd(e,n,t,r,i){if(e!==null){var o=e.memoizedProps;if(vr(o,r)&&e.ref===n.ref)if(be=!1,n.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(be=!0);else return n.lanes=e.lanes,fn(e,n,i)}return _a(e,n,t,r,i)}function Sd(e,n,t){var r=n.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(pt,je),je|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,W(pt,je),je|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,W(pt,je),je|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,W(pt,je),je|=r;return ve(e,n,i,t),n.child}function Rd(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function _a(e,n,t,r,i){var o=Re(t)?Kn:he.current;return o=zt(n,o),wt(n,i),t=Dl(e,n,t,r,o,i),r=Tl(),e!==null&&!be?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,fn(e,n,i)):(H&&r&&bl(n),n.flags|=1,ve(e,n,t,i),n.child)}function Zs(e,n,t,r,i){if(Re(t)){var o=!0;zi(n)}else o=!1;if(wt(n,i),n.stateNode===null)di(e,n),wd(n,t,r),Ca(n,t,r,i),r=!0;else if(e===null){var a=n.stateNode,l=n.memoizedProps;a.props=l;var s=a.context,u=t.contextType;typeof u=="object"&&u!==null?u=Me(u):(u=Re(t)?Kn:he.current,u=zt(n,u));var p=t.getDerivedStateFromProps,m=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function";m||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&Bs(n,a,r,u),gn=!1;var h=n.memoizedState;a.state=h,_i(n,r,a,i),s=n.memoizedState,l!==r||h!==s||Se.current||gn?(typeof p=="function"&&(ja(n,t,p,r),s=n.memoizedState),(l=gn||Us(n,t,l,r,h,s,u))?(m||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{a=n.stateNode,Gc(e,n),l=n.memoizedProps,u=n.type===n.elementType?l:We(n.type,l),a.props=u,m=n.pendingProps,h=a.context,s=t.contextType,typeof s=="object"&&s!==null?s=Me(s):(s=Re(t)?Kn:he.current,s=zt(n,s));var g=t.getDerivedStateFromProps;(p=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==m||h!==s)&&Bs(n,a,r,s),gn=!1,h=n.memoizedState,a.state=h,_i(n,r,a,i);var y=n.memoizedState;l!==m||h!==y||Se.current||gn?(typeof g=="function"&&(ja(n,t,g,r),y=n.memoizedState),(u=gn||Us(n,t,u,r,h,y,s)||!1)?(p||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,y,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,y,s)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=y),a.props=r,a.state=y,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),r=!1)}return Aa(e,n,t,r,o,i)}function Aa(e,n,t,r,i,o){Rd(e,n);var a=(n.flags&128)!==0;if(!r&&!a)return i&&Os(n,t,!1),fn(e,n,o);r=n.stateNode,xm.current=n;var l=a&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&a?(n.child=jt(n,e.child,null,o),n.child=jt(n,null,l,o)):ve(e,n,l,o),n.memoizedState=r.state,i&&Os(n,t,!0),n.child}function xd(e){var n=e.stateNode;n.pendingContext?Ts(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Ts(e,n.context,!1),Pl(e,n.containerInfo)}function Gs(e,n,t,r,i){return Et(),Rl(i),n.flags|=256,ve(e,n,t,r),n.child}var Fa={dehydrated:null,treeContext:null,retryLane:0};function Da(e){return{baseLanes:e,cachePool:null,transitions:null}}function zd(e,n,t){var r=n.pendingProps,i=Q.current,o=!1,a=(n.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),W(Q,i&1),e===null)return za(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(a=r.children,e=r.fallback,o?(r=n.mode,o=n.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=eo(a,r,0,null),e=Qn(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=Da(t),n.memoizedState=Fa,e):Il(n,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return zm(e,n,a,r,l,i,t);if(o){o=r.fallback,a=n.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=An(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=An(l,o):(o=Qn(o,a,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,a=e.child.memoizedState,a=a===null?Da(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~t,n.memoizedState=Fa,r}return o=e.child,e=o.sibling,r=An(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Il(e,n){return n=eo({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Gr(e,n,t,r){return r!==null&&Rl(r),jt(n,e.child,null,t),e=Il(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function zm(e,n,t,r,i,o,a){if(t)return n.flags&256?(n.flags&=-257,r=To(Error(k(422))),Gr(e,n,a,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,i=n.mode,r=eo({mode:"visible",children:r.children},i,0,null),o=Qn(o,i,a,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&jt(n,e.child,null,a),n.child.memoizedState=Da(a),n.memoizedState=Fa,o);if(!(n.mode&1))return Gr(e,n,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(k(419)),r=To(o,r,void 0),Gr(e,n,a,r)}if(l=(a&e.childLanes)!==0,be||l){if(r=le,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,dn(e,i),He(r,e,i,-1))}return Ul(),r=To(Error(k(421))),Gr(e,n,a,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=Mm.bind(null,e),i._reactRetry=n,null):(e=o.treeContext,Ce=jn(i.nextSibling),Pe=n,H=!0,Be=null,e!==null&&(Te[Oe++]=tn,Te[Oe++]=rn,Te[Oe++]=Jn,tn=e.id,rn=e.overflow,Jn=n),n=Il(n,r.children),n.flags|=4096,n)}function Ys(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Ea(e.return,n,t)}function Oo(e,n,t,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=i)}function Ed(e,n,t){var r=n.pendingProps,i=r.revealOrder,o=r.tail;if(ve(e,n,r.children,t),r=Q.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ys(e,t,n);else if(e.tag===19)Ys(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(Q,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&Ai(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),Oo(n,!1,i,t,o);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&Ai(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}Oo(n,!0,t,null,o);break;case"together":Oo(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function di(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function fn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Gn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(k(153));if(n.child!==null){for(e=n.child,t=An(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=An(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Em(e,n,t){switch(n.tag){case 3:xd(n),Et();break;case 5:Yc(n);break;case 1:Re(n.type)&&zi(n);break;case 4:Pl(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;W(Ci,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(W(Q,Q.current&1),n.flags|=128,null):t&n.child.childLanes?zd(e,n,t):(W(Q,Q.current&1),e=fn(e,n,t),e!==null?e.sibling:null);W(Q,Q.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Ed(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),W(Q,Q.current),r)break;return null;case 22:case 23:return n.lanes=0,Sd(e,n,t)}return fn(e,n,t)}var jd,Ta,Cd,Pd;jd=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Ta=function(){};Cd=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,Vn(Xe.current);var o=null;switch(t){case"input":i=ta(e,i),r=ta(e,r),o=[];break;case"select":i=J({},i,{value:void 0}),r=J({},r,{value:void 0}),o=[];break;case"textarea":i=oa(e,i),r=oa(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ri)}la(t,r);var a;t=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ur.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(t||(t={}),t[a]=s[a])}else t||(o||(o=[]),o.push(u,t)),t=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ur.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&U("scroll",e),o||l===s||(o=[])):(o=o||[]).push(u,s))}t&&(o=o||[]).push("style",t);var u=o;(n.updateQueue=u)&&(n.flags|=4)}};Pd=function(e,n,t,r){t!==r&&(n.flags|=4)};function Ut(e,n){if(!H)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function pe(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function jm(e,n,t){var r=n.pendingProps;switch(Sl(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(n),null;case 1:return Re(n.type)&&xi(),pe(n),null;case 3:return r=n.stateNode,Ct(),B(Se),B(he),Al(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Jr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Be!==null&&(Wa(Be),Be=null))),Ta(e,n),pe(n),null;case 5:_l(n);var i=Vn(br.current);if(t=n.type,e!==null&&n.stateNode!=null)Cd(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(k(166));return pe(n),null}if(e=Vn(Xe.current),Jr(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[Ge]=n,r[yr]=o,e=(n.mode&1)!==0,t){case"dialog":U("cancel",r),U("close",r);break;case"iframe":case"object":case"embed":U("load",r);break;case"video":case"audio":for(i=0;i<Kt.length;i++)U(Kt[i],r);break;case"source":U("error",r);break;case"img":case"image":case"link":U("error",r),U("load",r);break;case"details":U("toggle",r);break;case"input":ls(r,o),U("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},U("invalid",r);break;case"textarea":us(r,o),U("invalid",r)}la(t,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Kr(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Kr(r.textContent,l,e),i=["children",""+l]):ur.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&U("scroll",r)}switch(t){case"input":$r(r),ss(r,o,!0);break;case"textarea":$r(r),cs(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ri)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=rc(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(t,{is:r.is}):(e=a.createElement(t),t==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,t),e[Ge]=n,e[yr]=r,jd(e,n,!1,!1),n.stateNode=e;e:{switch(a=sa(t,r),t){case"dialog":U("cancel",e),U("close",e),i=r;break;case"iframe":case"object":case"embed":U("load",e),i=r;break;case"video":case"audio":for(i=0;i<Kt.length;i++)U(Kt[i],e);i=r;break;case"source":U("error",e),i=r;break;case"img":case"image":case"link":U("error",e),U("load",e),i=r;break;case"details":U("toggle",e),i=r;break;case"input":ls(e,r),i=ta(e,r),U("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=J({},r,{value:void 0}),U("invalid",e);break;case"textarea":us(e,r),i=oa(e,r),U("invalid",e);break;default:i=r}la(t,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?ac(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&ic(e,s)):o==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&cr(e,s):typeof s=="number"&&cr(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ur.hasOwnProperty(o)?s!=null&&o==="onScroll"&&U("scroll",e):s!=null&&ll(e,o,s,a))}switch(t){case"input":$r(e),ss(e,r,!1);break;case"textarea":$r(e),cs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Tn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?mt(e,!!r.multiple,o,!1):r.defaultValue!=null&&mt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ri)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return pe(n),null;case 6:if(e&&n.stateNode!=null)Pd(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(k(166));if(t=Vn(br.current),Vn(Xe.current),Jr(n)){if(r=n.stateNode,t=n.memoizedProps,r[Ge]=n,(o=r.nodeValue!==t)&&(e=Pe,e!==null))switch(e.tag){case 3:Kr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Kr(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Ge]=n,n.stateNode=r}return pe(n),null;case 13:if(B(Q),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(H&&Ce!==null&&n.mode&1&&!(n.flags&128))Qc(),Et(),n.flags|=98560,o=!1;else if(o=Jr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(k(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(k(317));o[Ge]=n}else Et(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;pe(n),o=!1}else Be!==null&&(Wa(Be),Be=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||Q.current&1?ie===0&&(ie=3):Ul())),n.updateQueue!==null&&(n.flags|=4),pe(n),null);case 4:return Ct(),Ta(e,n),e===null&&gr(n.stateNode.containerInfo),pe(n),null;case 10:return El(n.type._context),pe(n),null;case 17:return Re(n.type)&&xi(),pe(n),null;case 19:if(B(Q),o=n.memoizedState,o===null)return pe(n),null;if(r=(n.flags&128)!==0,a=o.rendering,a===null)if(r)Ut(o,!1);else{if(ie!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(a=Ai(e),a!==null){for(n.flags|=128,Ut(o,!1),r=a.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return W(Q,Q.current&1|2),n.child}e=e.sibling}o.tail!==null&&X()>_t&&(n.flags|=128,r=!0,Ut(o,!1),n.lanes=4194304)}else{if(!r)if(e=Ai(a),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Ut(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!H)return pe(n),null}else 2*X()-o.renderingStartTime>_t&&t!==1073741824&&(n.flags|=128,r=!0,Ut(o,!1),n.lanes=4194304);o.isBackwards?(a.sibling=n.child,n.child=a):(t=o.last,t!==null?t.sibling=a:n.child=a,o.last=a)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=X(),n.sibling=null,t=Q.current,W(Q,r?t&1|2:t&1),n):(pe(n),null);case 22:case 23:return Wl(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?je&1073741824&&(pe(n),n.subtreeFlags&6&&(n.flags|=8192)):pe(n),null;case 24:return null;case 25:return null}throw Error(k(156,n.tag))}function Cm(e,n){switch(Sl(n),n.tag){case 1:return Re(n.type)&&xi(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ct(),B(Se),B(he),Al(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return _l(n),null;case 13:if(B(Q),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(k(340));Et()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return B(Q),null;case 4:return Ct(),null;case 10:return El(n.type._context),null;case 22:case 23:return Wl(),null;case 24:return null;default:return null}}var Yr=!1,me=!1,Pm=typeof WeakSet=="function"?WeakSet:Set,C=null;function ft(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){Z(e,n,r)}else t.current=null}function Oa(e,n,t){try{t()}catch(r){Z(e,n,r)}}var Xs=!1;function _m(e,n){if(wa=ki,e=Tc(),kl(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var a=0,l=-1,s=-1,u=0,p=0,m=e,h=null;n:for(;;){for(var g;m!==t||i!==0&&m.nodeType!==3||(l=a+i),m!==o||r!==0&&m.nodeType!==3||(s=a+r),m.nodeType===3&&(a+=m.nodeValue.length),(g=m.firstChild)!==null;)h=m,m=g;for(;;){if(m===e)break n;if(h===t&&++u===i&&(l=a),h===o&&++p===r&&(s=a),(g=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=g}t=l===-1||s===-1?null:{start:l,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(ya={focusedElem:e,selectionRange:t},ki=!1,C=n;C!==null;)if(n=C,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,C=e;else for(;C!==null;){n=C;try{var y=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var b=y.memoizedProps,F=y.memoizedState,d=n.stateNode,c=d.getSnapshotBeforeUpdate(n.elementType===n.type?b:We(n.type,b),F);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=n.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(v){Z(n,n.return,v)}if(e=n.sibling,e!==null){e.return=n.return,C=e;break}C=n.return}return y=Xs,Xs=!1,y}function nr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Oa(n,t,o)}i=i.next}while(i!==r)}}function Yi(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function La(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function _d(e){var n=e.alternate;n!==null&&(e.alternate=null,_d(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ge],delete n[yr],delete n[Sa],delete n[fm],delete n[pm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ad(e){return e.tag===5||e.tag===3||e.tag===4}function eu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ad(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ia(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Ri));else if(r!==4&&(e=e.child,e!==null))for(Ia(e,n,t),e=e.sibling;e!==null;)Ia(e,n,t),e=e.sibling}function Ma(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ma(e,n,t),e=e.sibling;e!==null;)Ma(e,n,t),e=e.sibling}var ue=null,Ue=!1;function hn(e,n,t){for(t=t.child;t!==null;)Fd(e,n,t),t=t.sibling}function Fd(e,n,t){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(Bi,t)}catch{}switch(t.tag){case 5:me||ft(t,n);case 6:var r=ue,i=Ue;ue=null,hn(e,n,t),ue=r,Ue=i,ue!==null&&(Ue?(e=ue,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ue.removeChild(t.stateNode));break;case 18:ue!==null&&(Ue?(e=ue,t=t.stateNode,e.nodeType===8?Co(e.parentNode,t):e.nodeType===1&&Co(e,t),mr(e)):Co(ue,t.stateNode));break;case 4:r=ue,i=Ue,ue=t.stateNode.containerInfo,Ue=!0,hn(e,n,t),ue=r,Ue=i;break;case 0:case 11:case 14:case 15:if(!me&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Oa(t,n,a),i=i.next}while(i!==r)}hn(e,n,t);break;case 1:if(!me&&(ft(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(l){Z(t,n,l)}hn(e,n,t);break;case 21:hn(e,n,t);break;case 22:t.mode&1?(me=(r=me)||t.memoizedState!==null,hn(e,n,t),me=r):hn(e,n,t);break;default:hn(e,n,t)}}function nu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Pm),n.forEach(function(r){var i=Nm.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function qe(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var o=e,a=n,l=a;e:for(;l!==null;){switch(l.tag){case 5:ue=l.stateNode,Ue=!1;break e;case 3:ue=l.stateNode.containerInfo,Ue=!0;break e;case 4:ue=l.stateNode.containerInfo,Ue=!0;break e}l=l.return}if(ue===null)throw Error(k(160));Fd(o,a,i),ue=null,Ue=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){Z(i,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Dd(n,e),n=n.sibling}function Dd(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(qe(n,e),Je(e),r&4){try{nr(3,e,e.return),Yi(3,e)}catch(b){Z(e,e.return,b)}try{nr(5,e,e.return)}catch(b){Z(e,e.return,b)}}break;case 1:qe(n,e),Je(e),r&512&&t!==null&&ft(t,t.return);break;case 5:if(qe(n,e),Je(e),r&512&&t!==null&&ft(t,t.return),e.flags&32){var i=e.stateNode;try{cr(i,"")}catch(b){Z(e,e.return,b)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=t!==null?t.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&nc(i,o),sa(l,a);var u=sa(l,o);for(a=0;a<s.length;a+=2){var p=s[a],m=s[a+1];p==="style"?ac(i,m):p==="dangerouslySetInnerHTML"?ic(i,m):p==="children"?cr(i,m):ll(i,p,m,u)}switch(l){case"input":ra(i,o);break;case"textarea":tc(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?mt(i,!!o.multiple,g,!1):h!==!!o.multiple&&(o.defaultValue!=null?mt(i,!!o.multiple,o.defaultValue,!0):mt(i,!!o.multiple,o.multiple?[]:"",!1))}i[yr]=o}catch(b){Z(e,e.return,b)}}break;case 6:if(qe(n,e),Je(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(b){Z(e,e.return,b)}}break;case 3:if(qe(n,e),Je(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{mr(n.containerInfo)}catch(b){Z(e,e.return,b)}break;case 4:qe(n,e),Je(e);break;case 13:qe(n,e),Je(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||($l=X())),r&4&&nu(e);break;case 22:if(p=t!==null&&t.memoizedState!==null,e.mode&1?(me=(u=me)||p,qe(n,e),me=u):qe(n,e),Je(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(C=e,p=e.child;p!==null;){for(m=C=p;C!==null;){switch(h=C,g=h.child,h.tag){case 0:case 11:case 14:case 15:nr(4,h,h.return);break;case 1:ft(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,t=h.return;try{n=r,y.props=n.memoizedProps,y.state=n.memoizedState,y.componentWillUnmount()}catch(b){Z(r,t,b)}}break;case 5:ft(h,h.return);break;case 22:if(h.memoizedState!==null){ru(m);continue}}g!==null?(g.return=h,C=g):ru(m)}p=p.sibling}e:for(p=null,m=e;;){if(m.tag===5){if(p===null){p=m;try{i=m.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=m.stateNode,s=m.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=oc("display",a))}catch(b){Z(e,e.return,b)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(b){Z(e,e.return,b)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:qe(n,e),Je(e),r&4&&nu(e);break;case 21:break;default:qe(n,e),Je(e)}}function Je(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Ad(t)){var r=t;break e}t=t.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(cr(i,""),r.flags&=-33);var o=eu(e);Ma(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=eu(e);Ia(e,l,a);break;default:throw Error(k(161))}}catch(s){Z(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Am(e,n,t){C=e,Td(e)}function Td(e,n,t){for(var r=(e.mode&1)!==0;C!==null;){var i=C,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Yr;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||me;l=Yr;var u=me;if(Yr=a,(me=s)&&!u)for(C=i;C!==null;)a=C,s=a.child,a.tag===22&&a.memoizedState!==null?iu(i):s!==null?(s.return=a,C=s):iu(i);for(;o!==null;)C=o,Td(o),o=o.sibling;C=i,Yr=l,me=u}tu(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,C=o):tu(e)}}function tu(e){for(;C!==null;){var n=C;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:me||Yi(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!me)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:We(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&$s(n,o,r);break;case 3:var a=n.updateQueue;if(a!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}$s(n,a,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&mr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}me||n.flags&512&&La(n)}catch(h){Z(n,n.return,h)}}if(n===e){C=null;break}if(t=n.sibling,t!==null){t.return=n.return,C=t;break}C=n.return}}function ru(e){for(;C!==null;){var n=C;if(n===e){C=null;break}var t=n.sibling;if(t!==null){t.return=n.return,C=t;break}C=n.return}}function iu(e){for(;C!==null;){var n=C;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Yi(4,n)}catch(s){Z(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(s){Z(n,i,s)}}var o=n.return;try{La(n)}catch(s){Z(n,o,s)}break;case 5:var a=n.return;try{La(n)}catch(s){Z(n,a,s)}}}catch(s){Z(n,n.return,s)}if(n===e){C=null;break}var l=n.sibling;if(l!==null){l.return=n.return,C=l;break}C=n.return}}var Fm=Math.ceil,Ti=mn.ReactCurrentDispatcher,Ml=mn.ReactCurrentOwner,Ie=mn.ReactCurrentBatchConfig,I=0,le=null,ee=null,ce=0,je=0,pt=In(0),ie=0,zr=null,Gn=0,Xi=0,Nl=0,tr=null,ke=null,$l=0,_t=1/0,en=null,Oi=!1,Na=null,Pn=null,Xr=!1,Sn=null,Li=0,rr=0,$a=null,fi=-1,pi=0;function ge(){return I&6?X():fi!==-1?fi:fi=X()}function _n(e){return e.mode&1?I&2&&ce!==0?ce&-ce:hm.transition!==null?(pi===0&&(pi=wc()),pi):(e=N,e!==0||(e=window.event,e=e===void 0?16:zc(e.type)),e):1}function He(e,n,t,r){if(50<rr)throw rr=0,$a=null,Error(k(185));_r(e,t,r),(!(I&2)||e!==le)&&(e===le&&(!(I&2)&&(Xi|=t),ie===4&&yn(e,ce)),xe(e,r),t===1&&I===0&&!(n.mode&1)&&(_t=X()+500,Ji&&Mn()))}function xe(e,n){var t=e.callbackNode;hp(e,n);var r=yi(e,e===le?ce:0);if(r===0)t!==null&&ps(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&ps(t),n===1)e.tag===0?mm(ou.bind(null,e)):Bc(ou.bind(null,e)),cm(function(){!(I&6)&&Mn()}),t=null;else{switch(yc(r)){case 1:t=fl;break;case 4:t=vc;break;case 16:t=wi;break;case 536870912:t=gc;break;default:t=wi}t=Wd(t,Od.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Od(e,n){if(fi=-1,pi=0,I&6)throw Error(k(327));var t=e.callbackNode;if(yt()&&e.callbackNode!==t)return null;var r=yi(e,e===le?ce:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Ii(e,r);else{n=r;var i=I;I|=2;var o=Id();(le!==e||ce!==n)&&(en=null,_t=X()+500,Hn(e,n));do try{Om();break}catch(l){Ld(e,l)}while(!0);zl(),Ti.current=o,I=i,ee!==null?n=0:(le=null,ce=0,n=ie)}if(n!==0){if(n===2&&(i=pa(e),i!==0&&(r=i,n=qa(e,i))),n===1)throw t=zr,Hn(e,0),yn(e,r),xe(e,X()),t;if(n===6)yn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Dm(i)&&(n=Ii(e,r),n===2&&(o=pa(e),o!==0&&(r=o,n=qa(e,o))),n===1))throw t=zr,Hn(e,0),yn(e,r),xe(e,X()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(k(345));case 2:Wn(e,ke,en);break;case 3:if(yn(e,r),(r&130023424)===r&&(n=$l+500-X(),10<n)){if(yi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ge(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ba(Wn.bind(null,e,ke,en),n);break}Wn(e,ke,en);break;case 4:if(yn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var a=31-Ve(r);o=1<<a,a=n[a],a>i&&(i=a),r&=~o}if(r=i,r=X()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Fm(r/1960))-r,10<r){e.timeoutHandle=ba(Wn.bind(null,e,ke,en),r);break}Wn(e,ke,en);break;case 5:Wn(e,ke,en);break;default:throw Error(k(329))}}}return xe(e,X()),e.callbackNode===t?Od.bind(null,e):null}function qa(e,n){var t=tr;return e.current.memoizedState.isDehydrated&&(Hn(e,n).flags|=256),e=Ii(e,n),e!==2&&(n=ke,ke=t,n!==null&&Wa(n)),e}function Wa(e){ke===null?ke=e:ke.push.apply(ke,e)}function Dm(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],o=i.getSnapshot;i=i.value;try{if(!Qe(o(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function yn(e,n){for(n&=~Nl,n&=~Xi,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Ve(n),r=1<<t;e[t]=-1,n&=~r}}function ou(e){if(I&6)throw Error(k(327));yt();var n=yi(e,0);if(!(n&1))return xe(e,X()),null;var t=Ii(e,n);if(e.tag!==0&&t===2){var r=pa(e);r!==0&&(n=r,t=qa(e,r))}if(t===1)throw t=zr,Hn(e,0),yn(e,n),xe(e,X()),t;if(t===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Wn(e,ke,en),xe(e,X()),null}function ql(e,n){var t=I;I|=1;try{return e(n)}finally{I=t,I===0&&(_t=X()+500,Ji&&Mn())}}function Yn(e){Sn!==null&&Sn.tag===0&&!(I&6)&&yt();var n=I;I|=1;var t=Ie.transition,r=N;try{if(Ie.transition=null,N=1,e)return e()}finally{N=r,Ie.transition=t,I=n,!(I&6)&&Mn()}}function Wl(){je=pt.current,B(pt)}function Hn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,um(t)),ee!==null)for(t=ee.return;t!==null;){var r=t;switch(Sl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&xi();break;case 3:Ct(),B(Se),B(he),Al();break;case 5:_l(r);break;case 4:Ct();break;case 13:B(Q);break;case 19:B(Q);break;case 10:El(r.type._context);break;case 22:case 23:Wl()}t=t.return}if(le=e,ee=e=An(e.current,null),ce=je=n,ie=0,zr=null,Nl=Xi=Gn=0,ke=tr=null,Bn!==null){for(n=0;n<Bn.length;n++)if(t=Bn[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,o=t.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}t.pending=r}Bn=null}return e}function Ld(e,n){do{var t=ee;try{if(zl(),ui.current=Di,Fi){for(var r=K.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Fi=!1}if(Zn=0,ae=te=K=null,er=!1,Sr=0,Ml.current=null,t===null||t.return===null){ie=1,zr=n,ee=null;break}e:{var o=e,a=t.return,l=t,s=n;if(n=ce,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,p=l,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var h=p.alternate;h?(p.updateQueue=h.updateQueue,p.memoizedState=h.memoizedState,p.lanes=h.lanes):(p.updateQueue=null,p.memoizedState=null)}var g=Hs(a);if(g!==null){g.flags&=-257,Qs(g,a,l,o,n),g.mode&1&&Vs(o,u,n),n=g,s=u;var y=n.updateQueue;if(y===null){var b=new Set;b.add(s),n.updateQueue=b}else y.add(s);break e}else{if(!(n&1)){Vs(o,u,n),Ul();break e}s=Error(k(426))}}else if(H&&l.mode&1){var F=Hs(a);if(F!==null){!(F.flags&65536)&&(F.flags|=256),Qs(F,a,l,o,n),Rl(Pt(s,l));break e}}o=s=Pt(s,l),ie!==4&&(ie=2),tr===null?tr=[o]:tr.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var d=yd(o,s,n);Ns(o,d);break e;case 1:l=s;var c=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Pn===null||!Pn.has(f)))){o.flags|=65536,n&=-n,o.lanes|=n;var v=kd(o,l,n);Ns(o,v);break e}}o=o.return}while(o!==null)}Nd(t)}catch(x){n=x,ee===t&&t!==null&&(ee=t=t.return);continue}break}while(!0)}function Id(){var e=Ti.current;return Ti.current=Di,e===null?Di:e}function Ul(){(ie===0||ie===3||ie===2)&&(ie=4),le===null||!(Gn&268435455)&&!(Xi&268435455)||yn(le,ce)}function Ii(e,n){var t=I;I|=2;var r=Id();(le!==e||ce!==n)&&(en=null,Hn(e,n));do try{Tm();break}catch(i){Ld(e,i)}while(!0);if(zl(),I=t,Ti.current=r,ee!==null)throw Error(k(261));return le=null,ce=0,ie}function Tm(){for(;ee!==null;)Md(ee)}function Om(){for(;ee!==null&&!ap();)Md(ee)}function Md(e){var n=qd(e.alternate,e,je);e.memoizedProps=e.pendingProps,n===null?Nd(e):ee=n,Ml.current=null}function Nd(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Cm(t,n),t!==null){t.flags&=32767,ee=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ie=6,ee=null;return}}else if(t=jm(t,n,je),t!==null){ee=t;return}if(n=n.sibling,n!==null){ee=n;return}ee=n=e}while(n!==null);ie===0&&(ie=5)}function Wn(e,n,t){var r=N,i=Ie.transition;try{Ie.transition=null,N=1,Lm(e,n,t,r)}finally{Ie.transition=i,N=r}return null}function Lm(e,n,t,r){do yt();while(Sn!==null);if(I&6)throw Error(k(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(vp(e,o),e===le&&(ee=le=null,ce=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Xr||(Xr=!0,Wd(wi,function(){return yt(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=Ie.transition,Ie.transition=null;var a=N;N=1;var l=I;I|=4,Ml.current=null,_m(e,t),Dd(t,e),tm(ya),ki=!!wa,ya=wa=null,e.current=t,Am(t),lp(),I=l,N=a,Ie.transition=o}else e.current=t;if(Xr&&(Xr=!1,Sn=e,Li=i),o=e.pendingLanes,o===0&&(Pn=null),cp(t.stateNode),xe(e,X()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(Oi)throw Oi=!1,e=Na,Na=null,e;return Li&1&&e.tag!==0&&yt(),o=e.pendingLanes,o&1?e===$a?rr++:(rr=0,$a=e):rr=0,Mn(),null}function yt(){if(Sn!==null){var e=yc(Li),n=Ie.transition,t=N;try{if(Ie.transition=null,N=16>e?16:e,Sn===null)var r=!1;else{if(e=Sn,Sn=null,Li=0,I&6)throw Error(k(331));var i=I;for(I|=4,C=e.current;C!==null;){var o=C,a=o.child;if(C.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(C=u;C!==null;){var p=C;switch(p.tag){case 0:case 11:case 15:nr(8,p,o)}var m=p.child;if(m!==null)m.return=p,C=m;else for(;C!==null;){p=C;var h=p.sibling,g=p.return;if(_d(p),p===u){C=null;break}if(h!==null){h.return=g,C=h;break}C=g}}}var y=o.alternate;if(y!==null){var b=y.child;if(b!==null){y.child=null;do{var F=b.sibling;b.sibling=null,b=F}while(b!==null)}}C=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,C=a;else e:for(;C!==null;){if(o=C,o.flags&2048)switch(o.tag){case 0:case 11:case 15:nr(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,C=d;break e}C=o.return}}var c=e.current;for(C=c;C!==null;){a=C;var f=a.child;if(a.subtreeFlags&2064&&f!==null)f.return=a,C=f;else e:for(a=c;C!==null;){if(l=C,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Yi(9,l)}}catch(x){Z(l,l.return,x)}if(l===a){C=null;break e}var v=l.sibling;if(v!==null){v.return=l.return,C=v;break e}C=l.return}}if(I=i,Mn(),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(Bi,e)}catch{}r=!0}return r}finally{N=t,Ie.transition=n}}return!1}function au(e,n,t){n=Pt(t,n),n=yd(e,n,1),e=Cn(e,n,1),n=ge(),e!==null&&(_r(e,1,n),xe(e,n))}function Z(e,n,t){if(e.tag===3)au(e,e,t);else for(;n!==null;){if(n.tag===3){au(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pn===null||!Pn.has(r))){e=Pt(t,e),e=kd(n,e,1),n=Cn(n,e,1),e=ge(),n!==null&&(_r(n,1,e),xe(n,e));break}}n=n.return}}function Im(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=ge(),e.pingedLanes|=e.suspendedLanes&t,le===e&&(ce&t)===t&&(ie===4||ie===3&&(ce&130023424)===ce&&500>X()-$l?Hn(e,0):Nl|=t),xe(e,n)}function $d(e,n){n===0&&(e.mode&1?(n=Ur,Ur<<=1,!(Ur&130023424)&&(Ur=4194304)):n=1);var t=ge();e=dn(e,n),e!==null&&(_r(e,n,t),xe(e,t))}function Mm(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),$d(e,t)}function Nm(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(n),$d(e,t)}var qd;qd=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Se.current)be=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return be=!1,Em(e,n,t);be=!!(e.flags&131072)}else be=!1,H&&n.flags&1048576&&Vc(n,ji,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;di(e,n),e=n.pendingProps;var i=zt(n,he.current);wt(n,t),i=Dl(null,n,r,e,i,t);var o=Tl();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Re(r)?(o=!0,zi(n)):o=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Cl(n),i.updater=Gi,n.stateNode=i,i._reactInternals=n,Ca(n,r,e,t),n=Aa(null,n,r,!0,o,t)):(n.tag=0,H&&o&&bl(n),ve(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(di(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=qm(r),e=We(r,e),i){case 0:n=_a(null,n,r,e,t);break e;case 1:n=Zs(null,n,r,e,t);break e;case 11:n=Ks(null,n,r,e,t);break e;case 14:n=Js(null,n,r,We(r.type,e),t);break e}throw Error(k(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:We(r,i),_a(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:We(r,i),Zs(e,n,r,i,t);case 3:e:{if(xd(n),e===null)throw Error(k(387));r=n.pendingProps,o=n.memoizedState,i=o.element,Gc(e,n),_i(n,r,null,t);var a=n.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){i=Pt(Error(k(423)),n),n=Gs(e,n,r,t,i);break e}else if(r!==i){i=Pt(Error(k(424)),n),n=Gs(e,n,r,t,i);break e}else for(Ce=jn(n.stateNode.containerInfo.firstChild),Pe=n,H=!0,Be=null,t=Jc(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Et(),r===i){n=fn(e,n,t);break e}ve(e,n,r,t)}n=n.child}return n;case 5:return Yc(n),e===null&&za(n),r=n.type,i=n.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,ka(r,i)?a=null:o!==null&&ka(r,o)&&(n.flags|=32),Rd(e,n),ve(e,n,a,t),n.child;case 6:return e===null&&za(n),null;case 13:return zd(e,n,t);case 4:return Pl(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=jt(n,null,r,t):ve(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:We(r,i),Ks(e,n,r,i,t);case 7:return ve(e,n,n.pendingProps,t),n.child;case 8:return ve(e,n,n.pendingProps.children,t),n.child;case 12:return ve(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,o=n.memoizedProps,a=i.value,W(Ci,r._currentValue),r._currentValue=a,o!==null)if(Qe(o.value,a)){if(o.children===i.children&&!Se.current){n=fn(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=on(-1,t&-t),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?s.next=s:(s.next=p.next,p.next=s),u.pending=s}}o.lanes|=t,s=o.alternate,s!==null&&(s.lanes|=t),Ea(o.return,t,n),l.lanes|=t;break}s=s.next}}else if(o.tag===10)a=o.type===n.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(k(341));a.lanes|=t,l=a.alternate,l!==null&&(l.lanes|=t),Ea(a,t,n),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===n){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}ve(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,wt(n,t),i=Me(i),r=r(i),n.flags|=1,ve(e,n,r,t),n.child;case 14:return r=n.type,i=We(r,n.pendingProps),i=We(r.type,i),Js(e,n,r,i,t);case 15:return bd(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:We(r,i),di(e,n),n.tag=1,Re(r)?(e=!0,zi(n)):e=!1,wt(n,t),wd(n,r,i),Ca(n,r,i,t),Aa(null,n,r,!0,e,t);case 19:return Ed(e,n,t);case 22:return Sd(e,n,t)}throw Error(k(156,n.tag))};function Wd(e,n){return hc(e,n)}function $m(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Le(e,n,t,r){return new $m(e,n,t,r)}function Bl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qm(e){if(typeof e=="function")return Bl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ul)return 11;if(e===cl)return 14}return 2}function An(e,n){var t=e.alternate;return t===null?(t=Le(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function mi(e,n,t,r,i,o){var a=2;if(r=e,typeof e=="function")Bl(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case rt:return Qn(t.children,i,o,n);case sl:a=8,i|=8;break;case Yo:return e=Le(12,t,n,i|2),e.elementType=Yo,e.lanes=o,e;case Xo:return e=Le(13,t,n,i),e.elementType=Xo,e.lanes=o,e;case ea:return e=Le(19,t,n,i),e.elementType=ea,e.lanes=o,e;case Yu:return eo(t,i,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Zu:a=10;break e;case Gu:a=9;break e;case ul:a=11;break e;case cl:a=14;break e;case vn:a=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return n=Le(a,t,n,i),n.elementType=e,n.type=r,n.lanes=o,n}function Qn(e,n,t,r){return e=Le(7,e,r,n),e.lanes=t,e}function eo(e,n,t,r){return e=Le(22,e,r,n),e.elementType=Yu,e.lanes=t,e.stateNode={isHidden:!1},e}function Lo(e,n,t){return e=Le(6,e,null,n),e.lanes=t,e}function Io(e,n,t){return n=Le(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Wm(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=go(0),this.expirationTimes=go(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=go(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Vl(e,n,t,r,i,o,a,l,s){return e=new Wm(e,n,t,l,s),n===1?(n=1,o===!0&&(n|=8)):n=0,o=Le(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cl(o),e}function Um(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:tt,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Ud(e){if(!e)return On;e=e._reactInternals;e:{if(et(e)!==e||e.tag!==1)throw Error(k(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Re(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(k(171))}if(e.tag===1){var t=e.type;if(Re(t))return Uc(e,t,n)}return n}function Bd(e,n,t,r,i,o,a,l,s){return e=Vl(t,r,!0,e,i,o,a,l,s),e.context=Ud(null),t=e.current,r=ge(),i=_n(t),o=on(r,i),o.callback=n??null,Cn(t,o,i),e.current.lanes=i,_r(e,i,r),xe(e,r),e}function no(e,n,t,r){var i=n.current,o=ge(),a=_n(i);return t=Ud(t),n.context===null?n.context=t:n.pendingContext=t,n=on(o,a),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Cn(i,n,a),e!==null&&(He(e,i,a,o),si(e,i,a)),a}function Mi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function lu(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Hl(e,n){lu(e,n),(e=e.alternate)&&lu(e,n)}function Bm(){return null}var Vd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ql(e){this._internalRoot=e}to.prototype.render=Ql.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(k(409));no(e,n,null,null)};to.prototype.unmount=Ql.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Yn(function(){no(null,e,null,null)}),n[cn]=null}};function to(e){this._internalRoot=e}to.prototype.unstable_scheduleHydration=function(e){if(e){var n=Sc();e={blockedOn:null,target:e,priority:n};for(var t=0;t<wn.length&&n!==0&&n<wn[t].priority;t++);wn.splice(t,0,e),t===0&&xc(e)}};function Kl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ro(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function su(){}function Vm(e,n,t,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Mi(a);o.call(u)}}var a=Bd(n,r,e,0,null,!1,!1,"",su);return e._reactRootContainer=a,e[cn]=a.current,gr(e.nodeType===8?e.parentNode:e),Yn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Mi(s);l.call(u)}}var s=Vl(e,0,!1,null,null,!1,!1,"",su);return e._reactRootContainer=s,e[cn]=s.current,gr(e.nodeType===8?e.parentNode:e),Yn(function(){no(n,s,t,r)}),s}function io(e,n,t,r,i){var o=t._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=Mi(a);l.call(s)}}no(n,a,e,i)}else a=Vm(t,n,e,i,r);return Mi(a)}kc=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Qt(n.pendingLanes);t!==0&&(pl(n,t|1),xe(n,X()),!(I&6)&&(_t=X()+500,Mn()))}break;case 13:Yn(function(){var r=dn(e,1);if(r!==null){var i=ge();He(r,e,1,i)}}),Hl(e,1)}};ml=function(e){if(e.tag===13){var n=dn(e,134217728);if(n!==null){var t=ge();He(n,e,134217728,t)}Hl(e,134217728)}};bc=function(e){if(e.tag===13){var n=_n(e),t=dn(e,n);if(t!==null){var r=ge();He(t,e,n,r)}Hl(e,n)}};Sc=function(){return N};Rc=function(e,n){var t=N;try{return N=e,n()}finally{N=t}};ca=function(e,n,t){switch(n){case"input":if(ra(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=Ki(r);if(!i)throw Error(k(90));ec(r),ra(r,i)}}}break;case"textarea":tc(e,t);break;case"select":n=t.value,n!=null&&mt(e,!!t.multiple,n,!1)}};uc=ql;cc=Yn;var Hm={usingClientEntryPoint:!1,Events:[Fr,lt,Ki,lc,sc,ql]},Bt={findFiberByHostInstance:Un,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Qm={bundleType:Bt.bundleType,version:Bt.version,rendererPackageName:Bt.rendererPackageName,rendererConfig:Bt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=pc(e),e===null?null:e.stateNode},findFiberByHostInstance:Bt.findFiberByHostInstance||Bm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ei=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ei.isDisabled&&ei.supportsFiber)try{Bi=ei.inject(Qm),Ye=ei}catch{}}Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hm;Ae.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Kl(n))throw Error(k(200));return Um(e,n,null,t)};Ae.createRoot=function(e,n){if(!Kl(e))throw Error(k(299));var t=!1,r="",i=Vd;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=Vl(e,1,!1,null,null,t,!1,r,i),e[cn]=n.current,gr(e.nodeType===8?e.parentNode:e),new Ql(n)};Ae.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=pc(n),e=e===null?null:e.stateNode,e};Ae.flushSync=function(e){return Yn(e)};Ae.hydrate=function(e,n,t){if(!ro(n))throw Error(k(200));return io(null,e,n,!0,t)};Ae.hydrateRoot=function(e,n,t){if(!Kl(e))throw Error(k(405));var r=t!=null&&t.hydratedSources||null,i=!1,o="",a=Vd;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),n=Bd(n,null,e,1,t??null,i,!1,o,a),e[cn]=n.current,gr(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new to(n)};Ae.render=function(e,n,t){if(!ro(n))throw Error(k(200));return io(null,e,n,!1,t)};Ae.unmountComponentAtNode=function(e){if(!ro(e))throw Error(k(40));return e._reactRootContainer?(Yn(function(){io(null,null,e,!1,function(){e._reactRootContainer=null,e[cn]=null})}),!0):!1};Ae.unstable_batchedUpdates=ql;Ae.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!ro(t))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return io(e,n,t,!1,r)};Ae.version="18.3.1-next-f1338f8080-20240426";function Hd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hd)}catch(e){console.error(e)}}Hd(),Hu.exports=Ae;var Km=Hu.exports,uu=Km;Zo.createRoot=uu.createRoot,Zo.hydrateRoot=uu.hydrateRoot;class Jm extends Jo.Component{constructor(t){super(t);Ir(this,"container");Ir(this,"player",null);Ir(this,"isLoading",!1);this.container=Jo.createRef()}componentDidMount(){this.player=window.RufflePlayer.newest().createPlayer(),this.player.id="player",this.player.addEventListener("loadedmetadata",()=>{this.props.onLoadedMetadata&&this.props.onLoadedMetadata(this.player.metadata)}),this.isLoading=!1,this.container.current.appendChild(this.player)}componentWillUnmount(){var t;(t=this.player)==null||t.remove(),this.player=null,this.isLoading=!1}render(){return j.jsx("div",{id:this.props.id,ref:this.container,onDragEnter:this.props.onDragEnter,onDragLeave:this.props.onDragLeave,onDragOver:this.props.onDragOver,onDrop:this.props.onDragDrop,children:this.props.children})}reload(){var t;this.isLoading||(this.isLoading=!0,(t=this.player)==null||t.reload().finally(()=>{this.isLoading=!1}))}loadUrl(t,r){var i;this.isLoading||(this.isLoading=!0,(i=this.player)==null||i.load({url:t,...this.props.baseConfig,...r}).finally(()=>{this.isLoading=!1}))}loadFile(t){this.isLoading||(this.isLoading=!0,new Response(t).arrayBuffer().then(r=>{var i;return(i=this.player)==null?void 0:i.load({data:r,...this.props.baseConfig})}).finally(()=>{this.isLoading=!1}))}}const Zm=""+new URL("../logo.svg",import.meta.url).href,cu={Animation:"Animations",Game:"Games"};function Gm({sampleSelectionInput:e,selectedSample:n,setSelectedSample:t,setSelectedFilename:r,onSelectUrl:i}){const[o,a]=re.useState([]),l=u=>{const p=u.target,m=parseInt(p.value,10);o[m]&&s(o[m])},s=re.useCallback(u=>{i(u.location,u.config??{}),t(u),r(null)},[i,r,t]);return re.useEffect(()=>{(async()=>{const u=await fetch("swfs.json");if(u.ok){const p=await u.json();a(p.swfs),p.swfs.length>0&&s(p.swfs[0])}})()},[s]),j.jsxs("div",{id:"sample-swfs-container",className:o.length==0?"hidden":"",children:[j.jsx("span",{id:"sample-swfs-label",children:"Sample SWF:"}),j.jsxs("select",{id:"sample-swfs","aria-describedby":"sample-swfs-label",onChange:l,ref:e,children:[o.map((u,p)=>j.jsx(re.Fragment,{children:u.type==null&&j.jsx("option",{value:p,children:u.title})},p)),Object.keys(cu).map(u=>j.jsx("optgroup",{label:cu[u],children:o.map((p,m)=>j.jsx(re.Fragment,{children:p.type==u&&j.jsx("option",{value:m,children:p.title})},m))},u))]}),j.jsxs("div",{id:"author-container",className:n!=null&&n.author?"":"hidden",children:[j.jsx("span",{children:"Author: "}),j.jsx("a",{href:n==null?void 0:n.authorLink,target:"_blank",id:"author",children:n==null?void 0:n.author})]})]})}function Ym({allowUrlLoading:e,allowSampleSwfs:n,onToggleMetadata:t,onReloadMovie:r,onSelectUrl:i,onSelectFile:o,selectedFilename:a,setSelectedFilename:l,onFileDragLeave:s,onFileDragOver:u,onFileDragDrop:p}){const m=re.useRef(null),h=re.useRef(null),g=re.useRef(null),[y,b]=re.useState(null),F=()=>{var z;(z=m.current)==null||z.click()},d=z=>{i(z,{}),l(null),b(null),g.current&&(g.current.selectedIndex=-1)},c=z=>{o(z),b(null),l(z.name),g.current&&(g.current.selectedIndex=-1)},f=z=>{var E;z.preventDefault(),(E=h.current)!=null&&E.value&&d(h.current.value)},v=z=>{const E=z.target;E!=null&&E.files&&(E==null?void 0:E.files.length)>0&&E.files[0]&&c(E.files[0])},x=()=>{confirm("Reload the current SWF?")&&r()},P=navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPhone/i)||navigator.platform==="MacIntel"&&typeof navigator.standalone<"u";return re.useEffect(()=>{a!=null&&(b(null),g.current&&(g.current.selectedIndex=-1))},[a]),j.jsxs("div",{id:"nav",children:[j.jsx("a",{id:"logo-container",href:"https://ruffle.rs/",target:"_blank",children:j.jsx("img",{className:"logo",src:Zm,alt:"Ruffle"})}),j.jsxs("div",{className:"select-container",children:[j.jsxs("form",{id:"web-url-container",onSubmit:f,hidden:!e,children:[j.jsx("input",{id:"web-url",name:"web-url",type:"text",placeholder:"URL of a .swf file on the web",ref:h}),j.jsx("button",{id:"web-form-submit",type:"submit",children:"Load"})]}),j.jsxs("div",{id:"local-file-container",onDragLeave:s,onDragOver:u,onDrop:p,children:[j.jsx("span",{id:"local-file-static-label",onClick:F,children:"Local SWF:"}),j.jsx("input",{type:"file",accept:P?void 0:".swf,.spl",id:"local-file","aria-describedby":"local-file-static-label",ref:m,onChange:v}),j.jsx("button",{id:"local-file-label",onClick:F,children:"Select File"}),j.jsx("label",{id:"local-file-name",htmlFor:"local-file",children:a??"No file selected."})]}),n&&j.jsx(Gm,{onSelectUrl:i,selectedSample:y,setSelectedFilename:l,setSelectedSample:b,sampleSelectionInput:g})]}),j.jsxs("div",{children:[j.jsx("svg",{id:"toggle-info",width:"20px",viewBox:"0 0 416.979 416.979",onClick:t,children:j.jsx("path",{fill:"white",d:"M356.004 61.156c-81.37-81.47-213.377-81.551-294.848-.182-81.47 81.371-81.552 213.379-.181 294.85 81.369 81.47 213.378 81.551 294.849.181 81.469-81.369 81.551-213.379.18-294.849zM237.6 340.786a5.821 5.821 0 0 1-5.822 5.822h-46.576a5.821 5.821 0 0 1-5.822-5.822V167.885a5.821 5.821 0 0 1 5.822-5.822h46.576a5.82 5.82 0 0 1 5.822 5.822v172.901zm-29.11-202.885c-18.618 0-33.766-15.146-33.766-33.765 0-18.617 15.147-33.766 33.766-33.766s33.766 15.148 33.766 33.766c0 18.619-15.149 33.765-33.766 33.765z"})}),j.jsx("svg",{id:"reload-swf",width:"20px",viewBox:"0 0 489.711 489.711",onClick:x,children:j.jsx("path",{fill:"white",d:"M112.156 97.111c72.3-65.4 180.5-66.4 253.8-6.7l-58.1 2.2c-7.5.3-13.3 6.5-13 14 .3 7.3 6.3 13 13.5 13h.5l89.2-3.3c7.3-.3 13-6.2 13-13.5v-1.6l-3.3-88.2c-.3-7.5-6.6-13.3-14-13-7.5.3-13.3 6.5-13 14l2.1 55.3c-36.3-29.7-81-46.9-128.8-49.3-59.2-3-116.1 17.3-160 57.1-60.4 54.7-86 137.9-66.8 217.1 1.5 6.2 7 10.3 13.1 10.3 1.1 0 2.1-.1 3.2-.4 7.2-1.8 11.7-9.1 9.9-16.3-16.8-69.6 5.6-142.7 58.7-190.7zm350.3 98.4c-1.8-7.2-9.1-11.7-16.3-9.9-7.2 1.8-11.7 9.1-9.9 16.3 16.9 69.6-5.6 142.7-58.7 190.7-37.3 33.7-84.1 50.3-130.7 50.3-44.5 0-88.9-15.1-124.7-44.9l58.8-5.3c7.4-.7 12.9-7.2 12.2-14.7s-7.2-12.9-14.7-12.2l-88.9 8c-7.4.7-12.9 7.2-12.2 14.7l8 88.9c.6 7 6.5 12.3 13.4 12.3.4 0 .8 0 1.2-.1 7.4-.7 12.9-7.2 12.2-14.7l-4.8-54.1c36.3 29.4 80.8 46.5 128.3 48.9 3.8.2 7.6.3 11.3.3 55.1 0 107.5-20.2 148.7-57.4 60.4-54.7 86-137.8 66.8-217.1z"})})]})]})}const Xm={1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9.0",10:"10.0/10.1",11:"10.2",12:"10.3",13:"11.0",14:"11.1",15:"11.2",16:"11.3",17:"11.4",18:"11.5",19:"11.6",20:"11.7",21:"11.8",22:"11.9",23:"12",24:"13",25:"14",26:"15",27:"16",28:"17",29:"18",30:"19",31:"20",32:"21",33:"22",34:"23",35:"24",36:"25",37:"26",38:"27",39:"28",40:"29",41:"30",42:"31",43:"32"};function eh({visible:e,metadata:n}){return j.jsxs("div",{id:"info-container",className:e?"":"hidden",children:[j.jsxs("div",{children:[j.jsx("span",{children:"Uncompressed Length"}),j.jsxs("span",{id:"uncompressedLength",children:[((n==null?void 0:n.uncompressedLength)??0)>>10,"Kb"]})]}),j.jsxs("div",{children:[j.jsx("span",{children:"SWF Version"}),j.jsx("span",{id:"swfVersion",children:n==null?void 0:n.swfVersion})]}),j.jsxs("div",{children:[j.jsx("span",{children:"FP Version"}),j.jsx("span",{id:"flashVersion",children:n?Xm[n.swfVersion]??"Unknown":""})]}),j.jsxs("div",{children:[j.jsx("span",{children:"ActionScript 3"}),j.jsx("span",{id:"isActionScript3",children:n!=null&&n.isActionScript3?"true":"false"})]}),j.jsxs("div",{children:[j.jsx("span",{children:"Total Frames"}),j.jsx("span",{id:"numFrames",children:n==null?void 0:n.numFrames})]}),j.jsxs("div",{children:[j.jsx("span",{children:"Frame Rate"}),j.jsx("span",{id:"frameRate",children:n==null?void 0:n.frameRate})]}),j.jsxs("div",{children:[j.jsx("span",{children:"SWF Width"}),j.jsx("span",{id:"width",children:n==null?void 0:n.width})]}),j.jsxs("div",{children:[j.jsx("span",{children:"SWF Height"}),j.jsx("span",{id:"height",children:n==null?void 0:n.height})]}),j.jsxs("div",{children:[j.jsx("span",{children:"SWF Background Color"}),j.jsx("span",{id:"backgroundColor",style:{backgroundColor:(n==null?void 0:n.backgroundColor)??void 0}})]})]})}function nh({ruffleBaseConfig:e,allowUrlLoading:n,allowSampleSwfs:t}){const[r,i]=re.useState(null),[o,a]=re.useState(!1),[l,s]=re.useState(null),[u,p]=re.useState(!1),m=re.useRef(null),h=()=>{a(!o)},g=()=>{var v;(v=m.current)==null||v.reload()},y=re.useCallback((v,x)=>{var P;(P=m.current)==null||P.loadUrl(v,x)},[]),b=v=>{var x;(x=m.current)==null||x.loadFile(v)},F=v=>{v.stopPropagation(),v.preventDefault()},d=v=>{v.stopPropagation(),v.preventDefault(),p(!1)},c=v=>{v.stopPropagation(),v.preventDefault(),p(!0)},f=v=>{var x;v.stopPropagation(),v.preventDefault(),p(!1),v.dataTransfer&&(s(v.dataTransfer.files[0].name),(x=m.current)==null||x.loadFile(v.dataTransfer.files[0]))};return j.jsxs(j.Fragment,{children:[j.jsx(Ym,{allowUrlLoading:n,allowSampleSwfs:t,onToggleMetadata:h,onReloadMovie:g,onSelectUrl:y,onSelectFile:b,selectedFilename:l,setSelectedFilename:s,onFileDragLeave:d,onFileDragOver:c,onFileDragDrop:f}),j.jsxs("div",{id:"main",className:o?"info-container-shown":"",children:[j.jsx(Jm,{id:"player-container","aria-label":"Select a demo or drag an SWF",onLoadedMetadata:i,ref:m,onDragEnter:F,onDragLeave:d,onDragOver:c,onDragDrop:f,baseConfig:e,children:j.jsx("div",{id:"overlay",className:u?"drag":""})}),j.jsx(eh,{visible:o,metadata:r})]})]})}class kt{constructor(n,t,r,i,o){this.major=n,this.minor=t,this.patch=r,this.prIdent=i,this.buildIdent=o}static fromSemver(n){const t=n.split("+"),r=t[0].split("-"),i=r[0].split("."),o=parseInt(i[0],10);let a=0,l=0,s=null,u=null;return i[1]!==void 0&&(a=parseInt(i[1],10)),i[2]!==void 0&&(l=parseInt(i[2],10)),r[1]!==void 0&&(s=r[1].split(".")),t[1]!==void 0&&(u=t[1].split(".")),new kt(o,a,l,s,u)}isCompatibleWith(n){return this.major!==0&&this.major===n.major||this.major===0&&n.major===0&&this.minor!==0&&this.minor===n.minor||this.major===0&&n.major===0&&this.minor===0&&n.minor===0&&this.patch!==0&&this.patch===n.patch}hasPrecedenceOver(n){if(this.major>n.major)return!0;if(this.major<n.major)return!1;if(this.minor>n.minor)return!0;if(this.minor<n.minor)return!1;if(this.patch>n.patch)return!0;if(this.patch<n.patch)return!1;if(this.prIdent===null&&n.prIdent!==null)return!0;if(this.prIdent!==null&&n.prIdent===null)return!1;if(this.prIdent!==null&&n.prIdent!==null){const t=/^[0-9]*$/;for(let r=0;r<this.prIdent.length&&r<n.prIdent.length;r+=1){const i=t.test(n.prIdent[r]),o=t.test(this.prIdent[r]);if(!o&&i)return!0;if(o&&i){const a=parseInt(this.prIdent[r],10),l=parseInt(n.prIdent[r],10);if(a>l)return!0;if(a<l)return!1}else{if(o&&!i)return!1;if(!o&&!i){if(this.prIdent[r]>n.prIdent[r])return!0;if(this.prIdent[r]<n.prIdent[r])return!1}}}if(this.prIdent.length>n.prIdent.length)return!0;if(this.prIdent.length<n.prIdent.length)return!1}if(this.buildIdent!==null&&n.buildIdent===null)return!0;if(this.buildIdent===null&&n.buildIdent!==null)return!1;if(this.buildIdent!==null&&n.buildIdent!==null){const t=/^[0-9]*$/;for(let r=0;r<this.buildIdent.length&&r<n.buildIdent.length;r+=1){const i=t.test(this.buildIdent[r]),o=t.test(n.buildIdent[r]);if(!i&&o)return!0;if(i&&o){const a=parseInt(this.buildIdent[r],10),l=parseInt(n.buildIdent[r],10);if(a>l)return!0;if(a<l)return!1}else{if(i&&!o)return!1;if(!i&&!o){if(this.buildIdent[r]>n.buildIdent[r])return!0;if(this.buildIdent[r]<n.buildIdent[r])return!1}}}return this.buildIdent.length>n.buildIdent.length}return!1}isEqual(n){return this.major===n.major&&this.minor===n.minor&&this.patch===n.patch}isStableOrCompatiblePrerelease(n){return n.prIdent===null?!0:this.major===n.major&&this.minor===n.minor&&this.patch===n.patch}}class Jl{constructor(n){this.requirements=n}satisfiedBy(n){for(const t of this.requirements){let r=!0;for(const{comparator:i,version:o}of t)r=r&&o.isStableOrCompatiblePrerelease(n),i===""||i==="="?r=r&&o.isEqual(n):i===">"?r=r&&n.hasPrecedenceOver(o):i===">="?r=r&&(n.hasPrecedenceOver(o)||o.isEqual(n)):i==="<"?r=r&&o.hasPrecedenceOver(n):i==="<="?r=r&&(o.hasPrecedenceOver(n)||o.isEqual(n)):i==="^"&&(r=r&&o.isCompatibleWith(n));if(r)return!0}return!1}static fromRequirementString(n){const t=n.split(" ");let r=[];const i=[];for(const o of t)if(o==="||")r.length>0&&(i.push(r),r=[]);else if(o.length>0){const a=/[0-9]/.exec(o);if(a){const l=o.slice(0,a.index).trim(),s=kt.fromSemver(o.slice(a.index).trim());r.push({comparator:l,version:s})}}return r.length>0&&i.push(r),new Jl(i)}}class du{constructor(n){var t;this.sources=(n==null?void 0:n.sources)||{},this.config=(n==null?void 0:n.config)||{},this.invoked=(n==null?void 0:n.invoked)||!1,this.newestName=(n==null?void 0:n.newestName)||null,(t=n==null?void 0:n.superseded)==null||t.call(n),document.readyState==="loading"?document.addEventListener("readystatechange",this.init.bind(this)):window.setTimeout(this.init.bind(this),0)}get version(){return"0.1.0"}newestSourceName(){let n=null,t=kt.fromSemver("0.0.0");for(const r in this.sources)if(Object.prototype.hasOwnProperty.call(this.sources,r)){const i=kt.fromSemver(this.sources[r].version);i.hasPrecedenceOver(t)&&(n=r,t=i)}return n}init(){if(!this.invoked){if(this.invoked=!0,this.newestName=this.newestSourceName(),this.newestName===null)throw new Error("No registered Ruffle source!");("polyfills"in this.config?this.config.polyfills:!0)!==!1&&this.sources[this.newestName].polyfill()}}newest(){const n=this.newestSourceName();return n!==null?this.sources[n]:null}satisfying(n){const t=Jl.fromRequirementString(n);let r=null;for(const i in this.sources)if(Object.prototype.hasOwnProperty.call(this.sources,i)){const o=kt.fromSemver(this.sources[i].version);t.satisfiedBy(o)&&(r=this.sources[i])}return r}localCompatible(){return this.sources.local!==void 0?this.satisfying("^"+this.sources.local.version):this.newest()}local(){return this.sources.local!==void 0?this.satisfying("="+this.sources.local.version):this.newest()}superseded(){this.invoked=!0}}const De={versionNumber:"0.1.0",versionName:"nightly 2024-11-07",versionChannel:"nightly",buildDate:"2024-11-07T00:06:22.842Z",commitHash:"99f6b222850f59868c7fae3e20230ddce65edfb8"};var an={},Tr={},Qd={},Kd={};Object.defineProperty(Kd,"__esModule",{value:!0});var Jd={};Object.defineProperty(Jd,"__esModule",{value:!0});var Zd={};Object.defineProperty(Zd,"__esModule",{value:!0});var Gd={};Object.defineProperty(Gd,"__esModule",{value:!0});var Yd={};Object.defineProperty(Yd,"__esModule",{value:!0});var oo={};Object.defineProperty(oo,"__esModule",{value:!0});oo.classnames=void 0;const th=e=>Object.entries(e).map(([n,t])=>t&&n),fu=e=>!!e,rh=(e,n,t)=>t.indexOf(e)===n,ih=[];function Xd(e){return e?typeof e=="string"?[e]:Array.isArray(e)?e.flatMap(Xd).filter(fu):th(e).filter(fu):ih}function oh(e){const n=Xd(e).filter(rh);return n.length>0?n.join(" "):void 0}oo.classnames=oh;(function(e){var n=kn&&kn.__createBinding||(Object.create?function(r,i,o,a){a===void 0&&(a=o);var l=Object.getOwnPropertyDescriptor(i,o);(!l||("get"in l?!i.__esModule:l.writable||l.configurable))&&(l={enumerable:!0,get:function(){return i[o]}}),Object.defineProperty(r,a,l)}:function(r,i,o,a){a===void 0&&(a=o),r[a]=i[o]}),t=kn&&kn.__exportStar||function(r,i){for(var o in r)o!=="default"&&!Object.prototype.hasOwnProperty.call(i,o)&&n(i,r,o)};Object.defineProperty(e,"__esModule",{value:!0}),t(Kd,e),t(Jd,e),t(Zd,e),t(Gd,e),t(Yd,e),t(oo,e)})(Qd);Object.defineProperty(Tr,"__esModule",{value:!0});Tr.setAttributes=void 0;const ah=Qd;function lh(e,n){for(const t of Object.keys(e))t in n&&(n[t]=e[t])}const sh=new RegExp("^on\\p{Lu}","u");function uh(e,n){for(const t of Object.keys(n)){if(t==="__source"||t==="__self"||t==="tsxTag")continue;const r=n[t];if(t==="class"){const i=(0,ah.classnames)(r);i&&e.setAttribute(t,i)}else if(t==="ref")r.current=e;else if(sh.test(t)){const i=t.replace(/Capture$/,""),o=t!==i,a=i.toLowerCase().substring(2);e.addEventListener(a,r,o)}else t==="style"&&typeof r!="string"?lh(r,e.style):t==="dangerouslySetInnerHTML"?e.innerHTML=r:r===!0?e.setAttribute(t,t):(r||r===0)&&e.setAttribute(t,r.toString())}}Tr.setAttributes=uh;var ln={};Object.defineProperty(ln,"__esModule",{value:!0});ln.applyTsxTag=ln.createDomElement=ln.applyChildren=void 0;function ch(e,n){n instanceof Element?e.appendChild(n):typeof n=="string"||typeof n=="number"?e.appendChild(document.createTextNode(n.toString())):console.warn("Unknown type to append: ",n)}function ef(e,n){for(const t of n)!t&&t!==0||(Array.isArray(t)?ef(e,t):ch(e,t))}ln.applyChildren=ef;function dh(e,n){const t=n!=null&&n.is?{is:n.is}:void 0;return n!=null&&n.xmlns?document.createElementNS(n.xmlns,e,t):document.createElement(e,t)}ln.createDomElement=dh;function fh(e,n){let t=e,r=n;return r&&"tsxTag"in r&&(t=r.tsxTag,!r.is&&e.includes("-")&&(r={...r,is:e})),{finalTag:t,finalAttrs:r}}ln.applyTsxTag=fh;Object.defineProperty(an,"__esModule",{value:!0});an.jsxDEV=G=an.jsxs=R=an.jsx=void 0;const ph=Tr,Mo=ln;function Zl(e,n){if(typeof e=="function")return e(n);const{children:t,...r}=n,{finalTag:i,finalAttrs:o}=(0,Mo.applyTsxTag)(e,r),a=(0,Mo.createDomElement)(i,o);return(0,ph.setAttributes)(a,o),(0,Mo.applyChildren)(a,[t]),a}var R=an.jsx=Zl,G=an.jsxs=Zl;an.jsxDEV=Zl;var At;(function(e){e.On="on",e.Off="off",e.Auto="auto"})(At||(At={}));var Ni;(function(e){e.Off="off",e.Fullscreen="fullscreen",e.On="on"})(Ni||(Ni={}));var Er;(function(e){e.Visible="visible",e.Hidden="hidden"})(Er||(Er={}));var $i;(function(e){e.Error="error",e.Warn="warn",e.Info="info",e.Debug="debug",e.Trace="trace"})($i||($i={}));var qi;(function(e){e.Window="window",e.Opaque="opaque",e.Transparent="transparent",e.Direct="direct",e.Gpu="gpu"})(qi||(qi={}));var pu;(function(e){e.WebGpu="webgpu",e.WgpuWebgl="wgpu-webgl",e.Webgl="webgl",e.Canvas="canvas"})(pu||(pu={}));var bt;(function(e){e.On="on",e.RightClickOnly="rightClickOnly",e.Off="off"})(bt||(bt={}));var Ua;(function(e){e.AIR="air",e.FlashPlayer="flashPlayer"})(Ua||(Ua={}));var Ba;(function(e){e.Allow="allow",e.Confirm="confirm",e.Deny="deny"})(Ba||(Ba={}));var Va;(function(e){e.All="all",e.Internal="internal",e.None="none"})(Va||(Va={}));const mh={allowScriptAccess:!1,parameters:{},autoplay:At.Auto,backgroundColor:null,letterbox:Ni.Fullscreen,unmuteOverlay:Er.Visible,upgradeToHttps:!0,compatibilityRules:!0,favorFlash:!0,warnOnUnsupportedContent:!0,logLevel:$i.Error,showSwfDownload:!1,contextMenu:bt.On,preloader:!0,splashScreen:!0,maxExecutionDuration:15,base:null,menu:!0,allowFullscreen:!1,salign:"",forceAlign:!1,quality:"high",scale:"showAll",forceScale:!1,frameRate:null,wmode:qi.Window,publicPath:null,polyfills:!0,playerVersion:null,preferredRenderer:null,openUrlMode:Ba.Allow,allowNetworking:Va.All,openInNewTab:null,socketProxy:[],fontSources:[],defaultFonts:{},credentialAllowList:[],playerRuntime:Ua.FlashPlayer},hh=`:host{all:initial;pointer-events:inherit;--ruffle-blue:#37528c;--ruffle-orange:#ffad33;display:inline-block;font-family:Arial,sans-serif;height:400px;letter-spacing:.4px;position:relative;touch-action:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:550px;-webkit-tap-highlight-color:transparent}:host(:-webkit-full-screen){display:block;height:100%!important;width:100%!important}.hidden{display:none!important}#container,#message-overlay,#panic,#play-button,#splash-screen,#unmute-overlay,#unmute-overlay .background{inset:0;position:absolute}#container{outline:none;overflow:hidden}#container canvas{height:100%;width:100%}#play-button,#unmute-overlay{cursor:pointer;display:none}#unmute-overlay .background{background:#000;opacity:.7}#play-button .icon,#unmute-overlay .icon{height:50%;left:50%;max-height:384px;max-width:384px;opacity:.8;position:absolute;top:50%;transform:translate(-50%,-50%);width:50%}#play-button:hover .icon,#unmute-overlay:hover .icon{opacity:1}#unmute-overlay-svg{scale:.8}#panic{background:linear-gradient(180deg,#fd3a40,#fda138);color:#fff;display:flex;flex-flow:column;font-size:20px;justify-content:space-around;text-align:center}#panic a{color:var(--ruffle-blue);font-weight:700}#panic-title{font-size:xxx-large;font-weight:700}#panic-body.details{flex:0.9;margin:0 10px}#panic-body textarea{height:100%;resize:none;width:100%}#panic ul{display:flex;justify-content:space-evenly;list-style-type:none;padding:0}#message-overlay{align-items:center;background:var(--ruffle-blue);color:var(--ruffle-orange);display:flex;justify-content:center;opacity:1;overflow:auto;position:absolute;z-index:2}#message-overlay .message{font-size:20px;max-height:100%;max-width:100%;padding:5%;text-align:center}#message-overlay p{margin:.5em 0}#message-overlay .message div{-moz-column-gap:1em;column-gap:1em;display:flex;flex-wrap:wrap;justify-content:center}#message-overlay a,#message-overlay button{background:var(--ruffle-blue);border:2px solid var(--ruffle-orange);border-radius:.6em;color:var(--ruffle-orange);cursor:pointer;font-size:1.25em;font-weight:700;margin:2% 0;padding:10px;text-decoration:none}#message-overlay a:hover,#message-overlay button:hover{background:#ffffff4c}#continue-btn{background:var(--ruffle-blue);border:2px solid var(--ruffle-orange);border-radius:20px;color:var(--ruffle-orange);cursor:pointer;font-size:20px;font-weight:700;padding:10px}#continue-btn:hover{background:#ffffff4c}#context-menu-overlay,.modal{height:100%;position:absolute;width:100%;z-index:1}#context-menu{background-color:var(--modal-background);border:1px solid gray;box-shadow:0 5px 10px -5px #000;color:rgb(var(--modal-foreground-rgb));font-size:14px;list-style:none;margin:0;padding:3px 0;position:absolute;text-align:left;white-space:nowrap}#context-menu .menu-item{color:rgb(var(--modal-foreground-rgb));padding:5px 10px}#context-menu .menu-item.disabled{color:rgba(var(--modal-foreground-rgb),.5);cursor:default}#context-menu .menu-item:not(.disabled):hover{background-color:rgba(var(--modal-foreground-rgb),.15)}#context-menu .menu-separator hr{border:none;border-bottom:1px solid rgba(var(--modal-foreground-rgb),.2);margin:3px}#splash-screen{align-items:center;background:var(
        --splash-screen-background,var(--preloader-background,var(--ruffle-blue))
    );display:flex;flex-direction:column;justify-content:center}.loadbar{background:#253559;height:20%;max-height:10px;max-width:316px;width:100%}.loadbar-inner{background:var(--ruffle-orange);height:100%;max-width:100%;width:0}.logo{display:var(--logo-display,block);max-height:150px;max-width:380px}.loading-animation{aspect-ratio:1;margin-bottom:2%;max-height:28px;max-width:28px;width:10%}.spinner{stroke-dasharray:180;stroke-dashoffset:135;stroke:var(--ruffle-orange);animation:a 1.5s linear infinite;transform-origin:50% 50%}@keyframes a{to{transform:rotate(1turn)}}#virtual-keyboard{height:1px;opacity:0;position:absolute;top:-100px;width:1px}.modal{background-color:#0008}.modal-area{background-color:var(--modal-background);border-radius:12px;box-shadow:0 2px 6px 0 #0008;color:rgb(var(--modal-foreground-rgb));left:50%;padding:8px 12px;position:relative;transform:translateX(-50%);width:-moz-fit-content;width:fit-content}#modal-area{height:300px;width:450px}.close-modal{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 -960 960 960'%3E%3Cpath d='M480-392 300-212q-18 18-44 18t-44-18-18-44 18-44l180-180-180-180q-18-18-18-44t18-44 44-18 44 18l180 180 180-180q18-18 44-18t44 18 18 44-18 44L568-480l180 180q18 18 18 44t-18 44-44 18-44-18z'/%3E%3C/svg%3E");cursor:pointer;filter:var(--modal-foreground-filter);height:16px;width:16px}.modal-button{background-color:rgba(var(--modal-foreground-rgb),.2);border-radius:6px;color:rgb(var(--modal-foreground-rgb));cursor:pointer;display:inline-block;padding:4px 8px;text-decoration:none}:not(#volume-controls)>.close-modal{position:absolute;right:16px;top:14px}.general-save-options{border-bottom:2px solid rgba(var(--modal-foreground-rgb),.3);padding-bottom:8px;text-align:center}#local-saves{border-collapse:collapse;color:inherit;display:block;height:calc(100% - 45px);min-height:30px;overflow-y:auto}#local-saves td{border-bottom:2px solid rgba(var(--modal-foreground-rgb),.15);height:30px}#local-saves td:first-child{width:100%;word-break:break-all}.save-option{cursor:pointer;display:inline-block;filter:var(--modal-foreground-filter);height:24px;opacity:.4;vertical-align:middle;width:24px}#local-saves>tr:hover .save-option{opacity:1}#download-save{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 -960 960 960'%3E%3Cpath d='M480-337q-8 0-15-2.5t-13-8.5L308-492q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T365-549l75 75v-286q0-17 11.5-28.5T480-800t28.5 11.5T520-760v286l75-75q12-12 28.5-11.5T652-548q11 12 11.5 28T652-492L508-348q-6 6-13 8.5t-15 2.5M240-160q-33 0-56.5-23.5T160-240v-80q0-17 11.5-28.5T200-360t28.5 11.5T240-320v80h480v-80q0-17 11.5-28.5T760-360t28.5 11.5T800-320v80q0 33-23.5 56.5T720-160z'/%3E%3C/svg%3E")}#replace-save{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 -1080 960 1200'%3E%3Cpath d='M440-367v127q0 17 11.5 28.5T480-200t28.5-11.5T520-240v-127l36 36q6 6 13.5 9t15 2.5T599-323t13-9q11-12 11.5-28T612-388L508-492q-6-6-13-8.5t-15-2.5-15 2.5-13 8.5L348-388q-12 12-11.5 28t12.5 28q12 11 28 11.5t28-11.5zM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v447q0 33-23.5 56.5T720-80zm280-560q0 17 11.5 28.5T560-600h160L520-800z'/%3E%3C/svg%3E")}#delete-save{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 -1020 960 1080'%3E%3Cpath d='M280-120q-33 0-56.5-23.5T200-200v-520q-17 0-28.5-11.5T160-760t11.5-28.5T200-800h160q0-17 11.5-28.5T400-840h160q17 0 28.5 11.5T600-800h160q17 0 28.5 11.5T800-760t-11.5 28.5T760-720v520q0 33-23.5 56.5T680-120zm120-160q17 0 28.5-11.5T440-320v-280q0-17-11.5-28.5T400-640t-28.5 11.5T360-600v280q0 17 11.5 28.5T400-280m160 0q17 0 28.5-11.5T600-320v-280q0-17-11.5-28.5T560-640t-28.5 11.5T520-600v280q0 17 11.5 28.5T560-280'/%3E%3C/svg%3E")}.replace-save{display:none}#video-modal .modal-area{box-sizing:border-box;height:95%;width:95%}#video-holder{box-sizing:border-box;height:100%;padding:36px 4px 6px}#video-holder video{background-color:#000;height:100%;width:100%}#volume-controls{align-items:center;display:flex;gap:6px}#mute-checkbox{display:none}label[for=mute-checkbox]{cursor:pointer;filter:var(--modal-foreground-filter);height:24px;line-height:0;width:24px}#volume-mute{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 -960 960 960'%3E%3Cpath d='m719.13-419.35-71.67 71.68Q634.78-335 617.13-335t-30.33-12.67q-12.67-12.68-12.67-30.33t12.67-30.33L658.48-480l-71.68-71.67q-12.67-12.68-12.67-30.33t12.67-30.33Q599.48-625 617.13-625t30.33 12.67l71.67 71.68 71.67-71.68Q803.48-625 821.13-625t30.33 12.67q12.67 12.68 12.67 30.33t-12.67 30.33L779.78-480l71.68 71.67q12.67 12.68 12.67 30.33t-12.67 30.33Q838.78-335 821.13-335t-30.33-12.67zM278-357.87H161.22q-17.66 0-30.33-12.67-12.67-12.68-12.67-30.33v-158.26q0-17.65 12.67-30.33 12.67-12.67 30.33-12.67H278l130.15-129.91q20.63-20.63 46.98-9.45 26.35 11.19 26.35 39.77v443.44q0 28.58-26.35 39.77-26.35 11.18-46.98-9.45z'/%3E%3C/svg%3E")}#volume-min{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='161 -960 960 960'%3E%3Cpath d='M438.65-357.87H321.87q-17.65 0-30.33-12.67-12.67-12.68-12.67-30.33v-158.26q0-17.65 12.67-30.33 12.68-12.67 30.33-12.67h116.78L568.8-732.04q20.63-20.63 46.98-9.45 26.35 11.19 26.35 39.77v443.44q0 28.58-26.35 39.77-26.35 11.18-46.98-9.45z'/%3E%3C/svg%3E")}#volume-mid{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='80 -960 960 960'%3E%3Cpath d='M357.98-357.87H241.2q-17.66 0-30.33-12.67-12.67-12.68-12.67-30.33v-158.26q0-17.65 12.67-30.33 12.67-12.67 30.33-12.67h116.78L487.65-731.8q20.63-20.64 47.1-9.57t26.47 39.65v443.44q0 28.58-26.47 39.65t-47.1-9.57zM741.8-480q0 42.48-20.47 80.09-20.48 37.61-54.94 60.82-10.22 5.98-20.19.25-9.98-5.73-9.98-17.44v-248.44q0-11.71 9.98-17.32 9.97-5.61 20.19.37 34.46 23.71 54.94 61.45Q741.8-522.48 741.8-480'/%3E%3C/svg%3E")}#volume-max{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='9 -960 960 960'%3E%3Cpath d='M754.22-480.5q0-78.52-41.88-143.9t-111.91-98.62q-14.47-6.74-20.47-20.96t-.53-28.93q5.74-15.72 20.34-22.46t29.58 0q92.48 42.46 147.97 127.05 55.48 84.6 55.48 187.82t-55.48 187.82q-55.49 84.59-147.97 127.05-14.98 6.74-29.58 0t-20.34-22.46q-5.47-14.71.53-28.93t20.47-20.96q70.03-33.24 111.91-98.62t41.88-143.9M286.98-357.87H170.2q-17.66 0-30.33-12.67-12.67-12.68-12.67-30.33v-158.26q0-17.65 12.67-30.33 12.67-12.67 30.33-12.67h116.78L416.65-731.8q20.63-20.64 47.1-9.57t26.47 39.65v443.44q0 28.58-26.47 39.65t-47.1-9.57zM670.8-480q0 42.48-20.47 80.09-20.48 37.61-54.94 60.82-10.22 5.98-20.19.25-9.98-5.73-9.98-17.44v-248.44q0-11.71 9.98-17.32 9.97-5.61 20.19.37 34.46 23.71 54.94 61.45Q670.8-522.48 670.8-480'/%3E%3C/svg%3E")}#volume-slider-text{text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:4.8ch}#hardware-acceleration-modal .modal-area{box-sizing:border-box;padding:16px 48px;text-align:center;width:95%}#acceleration-text{display:block;margin-bottom:8px}#clipboard-modal h2{margin-right:36px;margin-top:4px}#clipboard-modal p:last-child{margin-bottom:2px}@media (prefers-color-scheme:light){:host{--modal-background:#fafafa;--modal-foreground-rgb:0,0,0;--modal-foreground-filter:none}}@media (prefers-color-scheme:dark){:host{--modal-background:#282828;--modal-foreground-rgb:221,221,221;--modal-foreground-filter:invert(90%)}}`;function vh(){return R("style",{children:hh})}function gh(){return R("style",{id:"dynamic-styles"})}function wh(){return G("div",{id:"container",children:[R("div",{id:"play-button",children:R("div",{class:"icon",children:G("svg",{xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",viewBox:"0 0 250 250",width:"100%",height:"100%",children:[G("defs",{xmlns:"http://www.w3.org/2000/svg",children:[G("linearGradient",{xmlns:"http://www.w3.org/2000/svg",id:"a",gradientUnits:"userSpaceOnUse",x1:"125",y1:"0",x2:"125",y2:"250",spreadMethod:"pad",children:[R("stop",{xmlns:"http://www.w3.org/2000/svg",offset:"0%","stop-color":"#FDA138"}),R("stop",{xmlns:"http://www.w3.org/2000/svg",offset:"100%","stop-color":"#FD3A40"})]}),G("g",{xmlns:"http://www.w3.org/2000/svg",id:"b",children:[R("path",{xmlns:"http://www.w3.org/2000/svg",fill:"url(#a)",d:"M250 125q0-52-37-88-36-37-88-37T37 37Q0 73 0 125t37 88q36 37 88 37t88-37q37-36 37-88M87 195V55l100 70-100 70z"}),R("path",{xmlns:"http://www.w3.org/2000/svg",fill:"#FFF",d:"M87 55v140l100-70L87 55z"})]})]}),R("use",{xmlns:"http://www.w3.org/2000/svg",href:"#b"})]})})}),G("div",{id:"unmute-overlay",children:[R("div",{class:"background"}),R("div",{class:"icon",children:G("svg",{id:"unmute-overlay-svg",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",viewBox:"0 0 512 584",width:"100%",height:"100%",children:[R("path",{xmlns:"http://www.w3.org/2000/svg",fill:"#FFF",stroke:"#FFF",d:"m457.941 256 47.029-47.029c9.372-9.373 9.372-24.568 0-33.941-9.373-9.373-24.568-9.373-33.941 0l-47.029 47.029-47.029-47.029c-9.373-9.373-24.568-9.373-33.941 0-9.372 9.373-9.372 24.568 0 33.941l47.029 47.029-47.029 47.029c-9.372 9.373-9.372 24.568 0 33.941 4.686 4.687 10.827 7.03 16.97 7.03s12.284-2.343 16.971-7.029l47.029-47.03 47.029 47.029c4.687 4.687 10.828 7.03 16.971 7.03s12.284-2.343 16.971-7.029c9.372-9.373 9.372-24.568 0-33.941z"}),R("path",{xmlns:"http://www.w3.org/2000/svg",fill:"#FFF",stroke:"#FFF",d:"m99 160h-55c-24.301 0-44 19.699-44 44v104c0 24.301 19.699 44 44 44h55c2.761 0 5-2.239 5-5v-182c0-2.761-2.239-5-5-5z"}),R("path",{xmlns:"http://www.w3.org/2000/svg",fill:"#FFF",stroke:"#FFF",d:"m280 56h-24c-5.269 0-10.392 1.734-14.578 4.935l-103.459 79.116c-1.237.946-1.963 2.414-1.963 3.972v223.955c0 1.557.726 3.026 1.963 3.972l103.459 79.115c4.186 3.201 9.309 4.936 14.579 4.936h23.999c13.255 0 24-10.745 24-24v-352.001c0-13.255-10.745-24-24-24z"}),R("text",{xmlns:"http://www.w3.org/2000/svg",id:"unmute-text",x:"256",y:"560","text-anchor":"middle","font-size":"60px",fill:"#FFF",stroke:"#FFF",children:"Click to unmute"})]})})]}),R("input",{"aria-hidden":"true",id:"virtual-keyboard",type:"text",autocomplete:"off",autocorrect:"off",autocapitalize:"none"})]})}function yh(){return G("div",{id:"splash-screen",class:"hidden",children:[R("svg",{xmlns:"http://www.w3.org/2000/svg",class:"logo",preserveAspectRatio:"xMidYMid",viewBox:"0 0 380 150",children:G("g",{xmlns:"http://www.w3.org/2000/svg",children:[R("path",{xmlns:"http://www.w3.org/2000/svg",fill:"#966214",d:"M58.75 85.6q.75-.1 1.5-.35.85-.25 1.65-.75.55-.35 1.05-.8.5-.45.95-1 .5-.5.75-1.2-.05.05-.15.1-.1.15-.25.25l-.1.2q-.15.05-.25.1-.4 0-.8.05-.5-.25-.9-.5-.3-.1-.55-.3l-.6-.6-4.25-6.45-1.5 11.25h3.45m83.15-.2h3.45q.75-.1 1.5-.35.25-.05.45-.15.35-.15.65-.3l.5-.3q.25-.15.5-.35.45-.35.9-.75.45-.35.75-.85l.1-.1q.1-.2.2-.35.2-.3.35-.6l-.3.4-.15.15q-.5.15-1.1.1-.25 0-.4-.05-.5-.15-.8-.4-.15-.1-.25-.25-.3-.3-.55-.6l-.05-.05v-.05l-4.25-6.4-1.5 11.25m-21.15-3.95q-.3-.3-.55-.6l-.05-.05v-.05l-4.25-6.4-1.5 11.25h3.45q.75-.1 1.5-.35.85-.25 1.6-.75.75-.5 1.4-1.1.45-.35.75-.85.35-.5.65-1.05l-.45.55q-.5.15-1.1.1-.9 0-1.45-.7m59.15.3q-.75-.5-1.4-1-3.15-2.55-3.5-6.4l-1.5 11.25h21q-3.1-.25-5.7-.75-5.6-1.05-8.9-3.1m94.2 3.85h3.45q.6-.1 1.2-.3.4-.1.75-.2.35-.15.65-.3.7-.35 1.35-.8.75-.55 1.3-1.25.1-.15.25-.3-2.55-.25-3.25-1.8l-4.2-6.3-1.5 11.25m-45.3-4.85q-.5-.4-.9-.8-2.3-2.35-2.6-5.6l-1.5 11.25h21q-11.25-.95-16-4.85m97.7 4.85q-.3-.05-.6-.05-10.8-1-15.4-4.8-3.15-2.55-3.5-6.35l-1.5 11.2h21Z"}),R("path",{xmlns:"http://www.w3.org/2000/svg",fill:"var(--ruffle-orange)",d:"M92.6 54.8q-1.95-1.4-4.5-1.4H60.35q-1.35 0-2.6.45-1.65.55-3.15 1.8-2.75 2.25-3.25 5.25l-1.65 12h.05v.3l5.85 1.15h-9.5q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45-.5.3-.95.7-.45.35-.85.8-.35.4-.65.85-.3.45-.5.9-.15.45-.3.95l-5.85 41.6H50.3l5-35.5 1.5-11.25 4.25 6.45.6.6q.25.2.55.3.4.25.9.5.4-.05.8-.05.1-.05.25-.1l.1-.2q.15-.1.25-.25.1-.05.15-.1l.3-1.05 1.75-12.3h11.15L75.8 82.6h16.5l2.3-16.25h-.05l.8-5.7q.4-2.45-1-4.2-.35-.4-.75-.8-.25-.25-.55-.5-.2-.2-.45-.35m16.2 18.1h.05l-.05.3 5.85 1.15H105.2q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45-.5.3-1 .65-.4.4-.8.85-.25.3-.55.65-.05.1-.15.2-.25.45-.4.9-.2.45-.3.95-.1.65-.2 1.25-.2 1.15-.4 2.25l-4.3 30.6q-.25 3 1.75 5.25 1.6 1.8 4 2.15.6.1 1.25.1h27.35q3.25 0 6-2.25.35-.35.7-.55l.3-.2q2-2 2.25-4.5l1.65-11.6q.05-.05.1-.05l1.65-11.35h.05l.7-5.2 1.5-11.25 4.25 6.4v.05l.05.05q.25.3.55.6.1.15.25.25.3.25.8.4.15.05.4.05.6.05 1.1-.1l.15-.15.3-.4.3-1.05 1.3-9.05h-.05l.7-5.05h-.05l.15-1.25h-.05l1.65-11.7h-16.25l-2.65 19.5h.05v.2l-.05.1h.05l5.8 1.15H132.7q-.5.05-1 .15-.5.15-1 .35-.15.05-.3.15-.3.1-.55.25-.05 0-.1.05-.5.3-1 .65-.4.35-.7.7-.55.7-.95 1.45-.35.65-.55 1.4-.15.7-.25 1.4v.05q-.15 1.05-.35 2.05l-1.2 8.75v.1l-2.1 14.7H111.4l2.25-15.55h.05l.7-5.2 1.5-11.25 4.25 6.4v.05l.05.05q.25.3.55.6.55.7 1.45.7.6.05 1.1-.1l.45-.55.3-1.05 1.3-9.05h-.05l.7-5.05h-.05l.15-1.25h-.05l1.65-11.7h-16.25l-2.65 19.5m106.5-41.75q-2.25-2.25-5.5-2.25h-27.75q-3 0-5.75 2.25-1.3.95-2.05 2.1-.45.6-.7 1.2-.2.5-.35 1-.1.45-.15.95l-4.15 29.95h-.05l-.7 5.2h-.05l-.2 1.35h.05l-.05.3 5.85 1.15h-9.45q-2.1.05-3.95 1.6-1.9 1.55-2.25 3.55l-.5 3.5h-.05l-5.3 38.1h16.25l5-35.5 1.5-11.25q.35 3.85 3.5 6.4.65.5 1.4 1 3.3 2.05 8.9 3.1 2.6.5 5.7.75l1.75-11.25h-12.2l.4-2.95h-.05l.7-5.05h-.05q.1-.9.3-1.9.1-.75.2-1.6.85-5.9 2.15-14.9 0-.15.05-.25l.1-.9q.2-1.55.45-3.15h11.25l-3.1 20.8h16.5l4.1-28.05q.15-1.7-.4-3.15-.5-1.1-1.35-2.1m46.65 44.15q-.5.3-1 .65-.4.4-.8.85-.35.4-.7.85-.25.45-.45.9-.15.45-.3.95l-5.85 41.6h16.25l5-35.5 1.5-11.25 4.2 6.3q.7 1.55 3.25 1.8l.05-.1q.25-.4.35-.85l.3-1.05 1.8-14.05v-.05l5.35-37.45h-16.25l-6.15 44.3 5.85 1.15h-9.45q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45m5.4-38.9q.15-1.7-.4-3.15-.5-1.1-1.35-2.1-2.25-2.25-5.5-2.25h-27.75q-2.3 0-4.45 1.35-.65.35-1.3.9-1.3.95-2.05 2.1-.45.6-.7 1.2-.4.9-.5 1.95l-4.15 29.95h-.05l-.7 5.2h-.05l-.2 1.35h.05l-.05.3 5.85 1.15h-9.45q-2.1.05-3.95 1.6-1.9 1.55-2.25 3.55l-.5 3.5h-.05l-1.2 8.75v.1l-4.1 29.25h16.25l5-35.5 1.5-11.25q.3 3.25 2.6 5.6.4.4.9.8 4.75 3.9 16 4.85l1.75-11.25h-12.2l.4-2.95h-.05l.7-5.05h-.05q.15-.9.3-1.9.1-.75.25-1.6.15-1.25.35-2.65v-.05q.95-6.7 2.35-16.5h11.25l-3.1 20.8h16.5l4.1-28.05M345 66.35h-.05l1.15-8.2q.5-3-1.75-5.25-1.25-1.25-3-1.75-1-.5-2.25-.5h-27.95q-.65 0-1.3.1-2.5.35-4.7 2.15-2.75 2.25-3.25 5.25l-1.95 14.7v.05l-.05.3 5.85 1.15h-9.45q-1.9.05-3.6 1.35-.2.1-.35.25-1.9 1.55-2.25 3.55l-4.85 34.1q-.25 3 1.75 5.25 1.25 1.4 3 1.95 1.05.3 2.25.3H320q3.25 0 6-2.25 2.75-2 3.25-5l2.75-18.5h-16.5l-1.75 11H302.5l2.1-14.75h.05l.85-6 1.5-11.2q.35 3.8 3.5 6.35 4.6 3.8 15.4 4.8.3 0 .6.05h15.75L345 66.35m-16.4-.95-1.25 8.95h-11.3l.4-2.95h-.05l.7-5.05h-.1l.15-.95h11.45Z"})]})}),R("svg",{xmlns:"http://www.w3.org/2000/svg",class:"loading-animation",viewBox:"0 0 66 66",children:R("circle",{xmlns:"http://www.w3.org/2000/svg",class:"spinner",fill:"none","stroke-width":"6","stroke-linecap":"round",cx:"33",cy:"33",r:"30"})}),R("div",{class:"loadbar",children:R("div",{class:"loadbar-inner"})})]})}function kh(){return R("div",{id:"save-manager",class:"modal hidden",children:G("div",{id:"modal-area",class:"modal-area",children:[R("span",{class:"close-modal"}),R("div",{class:"general-save-options",children:R("span",{class:"modal-button"})}),R("table",{id:"local-saves"})]})})}class ao{constructor(n){this.value=n}valueOf(){return this.value}}class ne extends ao{constructor(n="???"){super(n)}toString(n){return`{${this.value}}`}}class sn extends ao{constructor(n,t={}){super(n),this.opts=t}toString(n){try{return n.memoizeIntlObject(Intl.NumberFormat,this.opts).format(this.value)}catch(t){return n.reportError(t),this.value.toString(10)}}}class ir extends ao{constructor(n,t={}){super(n),this.opts=t}toString(n){try{return n.memoizeIntlObject(Intl.DateTimeFormat,this.opts).format(this.value)}catch(t){return n.reportError(t),new Date(this.value).toISOString()}}}const mu=100,bh="⁨",Sh="⁩";function Rh(e,n,t){if(t===n||t instanceof sn&&n instanceof sn&&t.value===n.value)return!0;if(n instanceof sn&&typeof t=="string"){let r=e.memoizeIntlObject(Intl.PluralRules,n.opts).select(n.value);if(t===r)return!0}return!1}function hu(e,n,t){return n[t]?Ft(e,n[t].value):(e.reportError(new RangeError("No default")),new ne)}function Ha(e,n){const t=[],r=Object.create(null);for(const i of n)i.type==="narg"?r[i.name]=jr(e,i.value):t.push(jr(e,i));return{positional:t,named:r}}function jr(e,n){switch(n.type){case"str":return n.value;case"num":return new sn(n.value,{minimumFractionDigits:n.precision});case"var":return xh(e,n);case"mesg":return zh(e,n);case"term":return Eh(e,n);case"func":return jh(e,n);case"select":return Ch(e,n);default:return new ne}}function xh(e,{name:n}){let t;if(e.params)if(Object.prototype.hasOwnProperty.call(e.params,n))t=e.params[n];else return new ne(`$${n}`);else if(e.args&&Object.prototype.hasOwnProperty.call(e.args,n))t=e.args[n];else return e.reportError(new ReferenceError(`Unknown variable: $${n}`)),new ne(`$${n}`);if(t instanceof ao)return t;switch(typeof t){case"string":return t;case"number":return new sn(t);case"object":if(t instanceof Date)return new ir(t.getTime());default:return e.reportError(new TypeError(`Variable type not supported: $${n}, ${typeof t}`)),new ne(`$${n}`)}}function zh(e,{name:n,attr:t}){const r=e.bundle._messages.get(n);if(!r)return e.reportError(new ReferenceError(`Unknown message: ${n}`)),new ne(n);if(t){const i=r.attributes[t];return i?Ft(e,i):(e.reportError(new ReferenceError(`Unknown attribute: ${t}`)),new ne(`${n}.${t}`))}return r.value?Ft(e,r.value):(e.reportError(new ReferenceError(`No value: ${n}`)),new ne(n))}function Eh(e,{name:n,attr:t,args:r}){const i=`-${n}`,o=e.bundle._terms.get(i);if(!o)return e.reportError(new ReferenceError(`Unknown term: ${i}`)),new ne(i);if(t){const l=o.attributes[t];if(l){e.params=Ha(e,r).named;const s=Ft(e,l);return e.params=null,s}return e.reportError(new ReferenceError(`Unknown attribute: ${t}`)),new ne(`${i}.${t}`)}e.params=Ha(e,r).named;const a=Ft(e,o.value);return e.params=null,a}function jh(e,{name:n,args:t}){let r=e.bundle._functions[n];if(!r)return e.reportError(new ReferenceError(`Unknown function: ${n}()`)),new ne(`${n}()`);if(typeof r!="function")return e.reportError(new TypeError(`Function ${n}() is not callable`)),new ne(`${n}()`);try{let i=Ha(e,t);return r(i.positional,i.named)}catch(i){return e.reportError(i),new ne(`${n}()`)}}function Ch(e,{selector:n,variants:t,star:r}){let i=jr(e,n);if(i instanceof ne)return hu(e,t,r);for(const o of t){const a=jr(e,o.key);if(Rh(e,i,a))return Ft(e,o.value)}return hu(e,t,r)}function nf(e,n){if(e.dirty.has(n))return e.reportError(new RangeError("Cyclic reference")),new ne;e.dirty.add(n);const t=[],r=e.bundle._useIsolating&&n.length>1;for(const i of n){if(typeof i=="string"){t.push(e.bundle._transform(i));continue}if(e.placeables++,e.placeables>mu)throw e.dirty.delete(n),new RangeError(`Too many placeables expanded: ${e.placeables}, max allowed is ${mu}`);r&&t.push(bh),t.push(jr(e,i).toString(e)),r&&t.push(Sh)}return e.dirty.delete(n),t.join("")}function Ft(e,n){return typeof n=="string"?e.bundle._transform(n):nf(e,n)}class Ph{constructor(n,t,r){this.dirty=new WeakSet,this.params=null,this.placeables=0,this.bundle=n,this.errors=t,this.args=r}reportError(n){if(!this.errors||!(n instanceof Error))throw n;this.errors.push(n)}memoizeIntlObject(n,t){let r=this.bundle._intls.get(n);r||(r={},this.bundle._intls.set(n,r));let i=JSON.stringify(t);return r[i]||(r[i]=new n(this.bundle.locales,t)),r[i]}}function Wi(e,n){const t=Object.create(null);for(const[r,i]of Object.entries(e))n.includes(r)&&(t[r]=i.valueOf());return t}const vu=["unitDisplay","currencyDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits"];function _h(e,n){let t=e[0];if(t instanceof ne)return new ne(`NUMBER(${t.valueOf()})`);if(t instanceof sn)return new sn(t.valueOf(),{...t.opts,...Wi(n,vu)});if(t instanceof ir)return new sn(t.valueOf(),{...Wi(n,vu)});throw new TypeError("Invalid argument to NUMBER")}const gu=["dateStyle","timeStyle","fractionalSecondDigits","dayPeriod","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName"];function Ah(e,n){let t=e[0];if(t instanceof ne)return new ne(`DATETIME(${t.valueOf()})`);if(t instanceof ir)return new ir(t.valueOf(),{...t.opts,...Wi(n,gu)});if(t instanceof sn)return new ir(t.valueOf(),{...Wi(n,gu)});throw new TypeError("Invalid argument to DATETIME")}const wu=new Map;function Fh(e){const n=Array.isArray(e)?e.join(" "):e;let t=wu.get(n);return t===void 0&&(t=new Map,wu.set(n,t)),t}class Dh{constructor(n,{functions:t,useIsolating:r=!0,transform:i=o=>o}={}){this._terms=new Map,this._messages=new Map,this.locales=Array.isArray(n)?n:[n],this._functions={NUMBER:_h,DATETIME:Ah,...t},this._useIsolating=r,this._transform=i,this._intls=Fh(n)}hasMessage(n){return this._messages.has(n)}getMessage(n){return this._messages.get(n)}addResource(n,{allowOverrides:t=!1}={}){const r=[];for(let i=0;i<n.body.length;i++){let o=n.body[i];if(o.id.startsWith("-")){if(t===!1&&this._terms.has(o.id)){r.push(new Error(`Attempt to override an existing term: "${o.id}"`));continue}this._terms.set(o.id,o)}else{if(t===!1&&this._messages.has(o.id)){r.push(new Error(`Attempt to override an existing message: "${o.id}"`));continue}this._messages.set(o.id,o)}}return r}formatPattern(n,t=null,r=null){if(typeof n=="string")return this._transform(n);let i=new Ph(this,r,t);try{return nf(i,n).toString(i)}catch(o){if(i.errors&&o instanceof Error)return i.errors.push(o),new ne().toString(i);throw o}}}const No=/^(-?[a-zA-Z][\w-]*) *= */gm,yu=/\.([a-zA-Z][\w-]*) *= */y,Th=/\*?\[/y,$o=/(-?[0-9]+(?:\.([0-9]+))?)/y,Oh=/([a-zA-Z][\w-]*)/y,ku=/([$-])?([a-zA-Z][\w-]*)(?:\.([a-zA-Z][\w-]*))?/y,Lh=/^[A-Z][A-Z0-9_-]*$/,ni=/([^{}\n\r]+)/y,Ih=/([^\\"\n\r]*)/y,bu=/\\([\\"])/y,Su=/\\u([a-fA-F0-9]{4})|\\U([a-fA-F0-9]{6})/y,Mh=/^\n+/,Ru=/ +$/,Nh=/ *\r?\n/g,$h=/( *)$/,qh=/{\s*/y,xu=/\s*}/y,Wh=/\[\s*/y,Uh=/\s*] */y,Bh=/\s*\(\s*/y,Vh=/\s*->\s*/y,Hh=/\s*:\s*/y,Qh=/\s*,?\s*/y,Kh=/\s+/y;class Jh{constructor(n){this.body=[],No.lastIndex=0;let t=0;for(;;){let w=No.exec(n);if(w===null)break;t=No.lastIndex;try{this.body.push(s(w[1]))}catch(S){if(S instanceof SyntaxError)continue;throw S}}function r(w){return w.lastIndex=t,w.test(n)}function i(w,S){if(n[t]===w)return t++,!0;if(S)throw new S(`Expected ${w}`);return!1}function o(w,S){if(r(w))return t=w.lastIndex,!0;if(S)throw new S(`Expected ${w.toString()}`);return!1}function a(w){w.lastIndex=t;let S=w.exec(n);if(S===null)throw new SyntaxError(`Expected ${w.toString()}`);return t=w.lastIndex,S}function l(w){return a(w)[1]}function s(w){let S=p(),L=u();if(S===null&&Object.keys(L).length===0)throw new SyntaxError("Expected message value or attributes");return{id:w,value:S,attributes:L}}function u(){let w=Object.create(null);for(;r(yu);){let S=l(yu),L=p();if(L===null)throw new SyntaxError("Expected attribute value");w[S]=L}return w}function p(){let w;if(r(ni)&&(w=l(ni)),n[t]==="{"||n[t]==="}")return m(w?[w]:[],1/0);let S=P();return S?w?m([w,S],S.length):(S.value=z(S.value,Mh),m([S],S.length)):w?z(w,Ru):null}function m(w=[],S){for(;;){if(r(ni)){w.push(l(ni));continue}if(n[t]==="{"){w.push(h());continue}if(n[t]==="}")throw new SyntaxError("Unbalanced closing brace");let Ee=P();if(Ee){w.push(Ee),S=Math.min(S,Ee.length);continue}break}let L=w.length-1,ze=w[L];typeof ze=="string"&&(w[L]=z(ze,Ru));let $e=[];for(let Ee of w)Ee instanceof zu&&(Ee=Ee.value.slice(0,Ee.value.length-S)),Ee&&$e.push(Ee);return $e}function h(){o(qh,SyntaxError);let w=g();if(o(xu))return w;if(o(Vh)){let S=F();return o(xu,SyntaxError),{type:"select",selector:w,...S}}throw new SyntaxError("Unclosed placeable")}function g(){if(n[t]==="{")return h();if(r(ku)){let[,w,S,L=null]=a(ku);if(w==="$")return{type:"var",name:S};if(o(Bh)){let ze=y();if(w==="-")return{type:"term",name:S,attr:L,args:ze};if(Lh.test(S))return{type:"func",name:S,args:ze};throw new SyntaxError("Function names must be all upper-case")}return w==="-"?{type:"term",name:S,attr:L,args:[]}:{type:"mesg",name:S,attr:L}}return c()}function y(){let w=[];for(;;){switch(n[t]){case")":return t++,w;case void 0:throw new SyntaxError("Unclosed argument list")}w.push(b()),o(Qh)}}function b(){let w=g();return w.type!=="mesg"?w:o(Hh)?{type:"narg",name:w.name,value:c()}:w}function F(){let w=[],S=0,L;for(;r(Th);){i("*")&&(L=S);let ze=d(),$e=p();if($e===null)throw new SyntaxError("Expected variant value");w[S++]={key:ze,value:$e}}if(S===0)return null;if(L===void 0)throw new SyntaxError("Expected default variant");return{variants:w,star:L}}function d(){o(Wh,SyntaxError);let w;return r($o)?w=f():w={type:"str",value:l(Oh)},o(Uh,SyntaxError),w}function c(){if(r($o))return f();if(n[t]==='"')return v();throw new SyntaxError("Invalid expression")}function f(){let[,w,S=""]=a($o),L=S.length;return{type:"num",value:parseFloat(w),precision:L}}function v(){i('"',SyntaxError);let w="";for(;;){if(w+=l(Ih),n[t]==="\\"){w+=x();continue}if(i('"'))return{type:"str",value:w};throw new SyntaxError("Unclosed string literal")}}function x(){if(r(bu))return l(bu);if(r(Su)){let[,w,S]=a(Su),L=parseInt(w||S,16);return L<=55295||57344<=L?String.fromCodePoint(L):"�"}throw new SyntaxError("Unknown escape sequence")}function P(){let w=t;switch(o(Kh),n[t]){case".":case"[":case"*":case"}":case void 0:return!1;case"{":return E(n.slice(w,t))}return n[t-1]===" "?E(n.slice(w,t)):!1}function z(w,S){return w.replace(S,"")}function E(w){let S=w.replace(Nh,`
`),L=$h.exec(w)[1].length;return new zu(S,L)}}}class zu{constructor(n,t){this.value=n,this.length=t}}const Zh="([a-z]{2,3}|\\*)",Gh="(?:-([a-z]{4}|\\*))",Yh="(?:-([a-z]{2}|\\*))",Xh="(?:-(([0-9][a-z0-9]{3}|[a-z0-9]{5,8})|\\*))",ev=new RegExp(`^${Zh}${Gh}?${Yh}?${Xh}?$`,"i");class or{constructor(n){const t=ev.exec(n.replace(/_/g,"-"));if(!t){this.isWellFormed=!1;return}let[,r,i,o,a]=t;r&&(this.language=r.toLowerCase()),i&&(this.script=i[0].toUpperCase()+i.slice(1)),o&&(this.region=o.toUpperCase()),this.variant=a,this.isWellFormed=!0}isEqual(n){return this.language===n.language&&this.script===n.script&&this.region===n.region&&this.variant===n.variant}matches(n,t=!1,r=!1){return(this.language===n.language||t&&this.language===void 0||r&&n.language===void 0)&&(this.script===n.script||t&&this.script===void 0||r&&n.script===void 0)&&(this.region===n.region||t&&this.region===void 0||r&&n.region===void 0)&&(this.variant===n.variant||t&&this.variant===void 0||r&&n.variant===void 0)}toString(){return[this.language,this.script,this.region,this.variant].filter(n=>n!==void 0).join("-")}clearVariants(){this.variant=void 0}clearRegion(){this.region=void 0}addLikelySubtags(){const n=tv(this.toString().toLowerCase());return n?(this.language=n.language,this.script=n.script,this.region=n.region,this.variant=n.variant,!0):!1}}const Eu={ar:"ar-arab-eg","az-arab":"az-arab-ir","az-ir":"az-arab-ir",be:"be-cyrl-by",da:"da-latn-dk",el:"el-grek-gr",en:"en-latn-us",fa:"fa-arab-ir",ja:"ja-jpan-jp",ko:"ko-kore-kr",pt:"pt-latn-br",sr:"sr-cyrl-rs","sr-ru":"sr-latn-ru",sv:"sv-latn-se",ta:"ta-taml-in",uk:"uk-cyrl-ua",zh:"zh-hans-cn","zh-hant":"zh-hant-tw","zh-hk":"zh-hant-hk","zh-mo":"zh-hant-mo","zh-tw":"zh-hant-tw","zh-gb":"zh-hant-gb","zh-us":"zh-hant-us"},nv=["az","bg","cs","de","es","fi","fr","hu","it","lt","lv","nl","pl","ro","ru"];function tv(e){if(Object.prototype.hasOwnProperty.call(Eu,e))return new or(Eu[e]);const n=new or(e);return n.language&&nv.includes(n.language)?(n.region=n.language.toUpperCase(),n):null}function rv(e,n,t){const r=new Set,i=new Map;for(let o of n)new or(o).isWellFormed&&i.set(o,new or(o));e:for(const o of e){const a=o.toLowerCase(),l=new or(a);if(l.language!==void 0){for(const s of i.keys())if(a===s.toLowerCase()){if(r.add(s),i.delete(s),t==="lookup")return Array.from(r);if(t==="filtering")continue;continue e}for(const[s,u]of i.entries())if(u.matches(l,!0,!1)){if(r.add(s),i.delete(s),t==="lookup")return Array.from(r);if(t==="filtering")continue;continue e}if(l.addLikelySubtags()){for(const[s,u]of i.entries())if(u.matches(l,!0,!1)){if(r.add(s),i.delete(s),t==="lookup")return Array.from(r);if(t==="filtering")continue;continue e}}l.clearVariants();for(const[s,u]of i.entries())if(u.matches(l,!0,!0)){if(r.add(s),i.delete(s),t==="lookup")return Array.from(r);if(t==="filtering")continue;continue e}if(l.clearRegion(),l.addLikelySubtags()){for(const[s,u]of i.entries())if(u.matches(l,!0,!1)){if(r.add(s),i.delete(s),t==="lookup")return Array.from(r);if(t==="filtering")continue;continue e}}l.clearRegion();for(const[s,u]of i.entries())if(u.matches(l,!0,!0)){if(r.add(s),i.delete(s),t==="lookup")return Array.from(r);if(t==="filtering")continue;continue e}}}return Array.from(r)}function iv(e,n,{strategy:t="filtering",defaultLocale:r}={}){const i=rv(Array.from(e??[]).map(String),Array.from(n??[]).map(String),t);if(t==="lookup"){if(r===void 0)throw new Error("defaultLocale cannot be undefined for strategy `lookup`");i.length===0&&i.push(r)}else r&&!i.includes(r)&&i.push(r);return i}const ov={"ar-SA":{"context_menu.ftl":`context-menu-download-swf = حمِّل .swf
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
        [true] إذا كنت مسؤول الخادم، يرجى محاولة تحميل إصدار أحدث من Ruffle (النسخة الحالية قديمة: { $buildDate }).
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
enable-hardware-acceleration = ハードウェア アクセラレーションが無効になっているようです。Ruffle は動作するかもしれませんが、非常に遅くなる可能性があります。ハードウェア アクセラレーションを有効にする方法については、以下のリンクを参照してください。
enable-hardware-acceleration-link = よくある質問 - Chromeのハードウェア アクセラレーション
view-error-details = エラーの詳細を表示
open-in-new-tab = 新しいタブで開く
click-to-unmute = クリックでミュートを解除
clipboard-message-title = コピーしてRuffleに貼り付け
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
volume-controls-unmute = 消音をやめる
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
`}},Gl={};for(const[e,n]of Object.entries(ov)){const t=new Dh(e);if(n){for(const[r,i]of Object.entries(n))if(i)for(const o of t.addResource(new Jh(i)))console.error(`Error in text for ${e} ${r}: ${o}`)}Gl[e]=t}function av(e,n,t){const r=Gl[e];if(r!==void 0){const i=r.getMessage(n);if(i!==void 0&&i.value)return r.formatPattern(i.value,t)}return null}function T(e,n){const t=iv(navigator.languages,Object.keys(Gl),{defaultLocale:"en-US"});for(const r in t){const i=av(t[r],e,n);if(i)return i}return console.error(`Unknown text key '${e}'`),e}function se(e,n){const t=document.createElement("div");return T(e,n).split(`
`).forEach(r=>{const i=document.createElement("p");i.innerText=r,t.appendChild(i)}),t}function lv(){return R("div",{id:"volume-controls-modal",class:"modal hidden",children:R("div",{class:"modal-area",children:G("div",{id:"volume-controls",children:[R("input",{id:"mute-checkbox",type:"checkbox"}),R("label",{id:"volume-mute",for:"mute-checkbox",title:T("volume-controls-unmute")}),R("label",{id:"volume-min",for:"mute-checkbox",title:T("volume-controls-mute")}),R("label",{id:"volume-mid",for:"mute-checkbox",title:T("volume-controls-mute")}),R("label",{id:"volume-max",for:"mute-checkbox",title:T("volume-controls-mute")}),R("input",{id:"volume-slider",type:"range",min:"0",max:"100",step:"1"}),R("span",{id:"volume-slider-text"}),R("span",{class:"close-modal"})]})})})}function sv(){return R("div",{id:"video-modal",class:"modal hidden",children:G("div",{class:"modal-area",children:[R("span",{class:"close-modal"}),R("div",{id:"video-holder"})]})})}function uv(){return R("div",{id:"hardware-acceleration-modal",class:"modal hidden",children:G("div",{class:"modal-area",children:[R("span",{class:"close-modal"}),R("span",{id:"acceleration-text",children:T("enable-hardware-acceleration")}),R("a",{href:"https://github.com/ruffle-rs/ruffle/wiki/Frequently-Asked-Questions-For-Users#chrome-hardware-acceleration",target:"_blank",class:"modal-button",children:T("enable-hardware-acceleration-link")})]})})}const qo=navigator.userAgent.includes("Mac OS X")?"Command":"Ctrl";function cv(){return R("div",{id:"clipboard-modal",class:"modal hidden",children:G("div",{class:"modal-area",children:[R("span",{class:"close-modal"}),R("h2",{children:T("clipboard-message-title")}),R("p",{id:"clipboard-modal-description"}),G("p",{children:[G("b",{children:[qo,"+C"]}),R("span",{children:T("clipboard-message-copy")})]}),G("p",{children:[G("b",{children:[qo,"+X"]}),R("span",{children:T("clipboard-message-cut")})]}),G("p",{children:[G("b",{children:[qo,"+V"]}),R("span",{children:T("clipboard-message-paste")})]})]})})}function dv(){return R("div",{id:"context-menu-overlay",class:"hidden",children:R("ul",{id:"context-menu"})})}const Ke=document.createElement("template");Ke.content.appendChild(R(vh,{}));Ke.content.appendChild(R(gh,{}));Ke.content.appendChild(R(wh,{}));Ke.content.appendChild(R(yh,{}));Ke.content.appendChild(R(kh,{}));Ke.content.appendChild(R(lv,{}));Ke.content.appendChild(R(sv,{}));Ke.content.appendChild(R(uv,{}));Ke.content.appendChild(R(cv,{}));Ke.content.appendChild(R(dv,{}));const tf="application/x-shockwave-flash",rf="application/futuresplash",of="application/x-shockwave-flash2-preview",af="application/vnd.adobe.flash.movie",fv="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";function pv(e){let n="";try{n=new URL(e,"https://example.com").pathname}catch{}if(n&&n.length>=4){const t=n.slice(-4).toLowerCase();if(t===".swf"||t===".spl")return!0}return!1}function mv(e,n){switch(e=e.toLowerCase(),e){case tf.toLowerCase():case rf.toLowerCase():case of.toLowerCase():case af.toLowerCase():return!0;default:if(n)switch(e){case"application/octet-stream":case"binary/octet-stream":return!0}}return!1}function lf(e,n){const t=pv(e);return n?mv(n,t):t}function hv(e){const n=e.pathname;return n.substring(n.lastIndexOf("/")+1)}let ar=null,Fn=!1;try{if(document.currentScript!==void 0&&document.currentScript!==null&&"src"in document.currentScript&&document.currentScript.src!==""){let e=document.currentScript.src;!e.endsWith(".js")&&!e.endsWith("/")&&(e+="/"),ar=new URL(".",e),Fn=ar.protocol.includes("extension")}}catch{console.warn("Unable to get currentScript URL")}const lr="https://ruffle.rs";class sf extends Error{constructor(n){super(`Failed to fetch ${n}`),this.swfUrl=n,this.swfUrl=n}}class uf extends Error{constructor(n){super(`Not a valid swf: ${n}`)}}class Qa extends Error{constructor(n){super("Failed to load Ruffle WASM"),this.cause=n}}class cf extends Error{constructor(n){super(`Invalid options: ${n}`)}}var df={},Dn={};Object.defineProperty(Dn,"__esModule",{value:!0});Dn.createRef=Dn.h=Dn.createElement=void 0;const vv=Tr,Wo=ln;function ff(e,n,...t){if(typeof e=="function")return e({...n,children:t});const{finalTag:r,finalAttrs:i}=(0,Wo.applyTsxTag)(e,n),o=(0,Wo.createDomElement)(r,i);return i&&(0,vv.setAttributes)(o,i),(0,Wo.applyChildren)(o,t),o}Dn.createElement=ff;Dn.h=ff;const gv=()=>({current:null});Dn.createRef=gv;var lo={};Object.defineProperty(lo,"__esModule",{value:!0});lo.defineCustomElement=void 0;const wv=an;function yv(e,n,t){return customElements.define(e,n,t),r=>(0,wv.jsx)(e,r)}lo.defineCustomElement=yv;var pf={};Object.defineProperty(pf,"__esModule",{value:!0});(function(e){var n=kn&&kn.__createBinding||(Object.create?function(r,i,o,a){a===void 0&&(a=o);var l=Object.getOwnPropertyDescriptor(i,o);(!l||("get"in l?!i.__esModule:l.writable||l.configurable))&&(l={enumerable:!0,get:function(){return i[o]}}),Object.defineProperty(r,a,l)}:function(r,i,o,a){a===void 0&&(a=o),r[a]=i[o]}),t=kn&&kn.__exportStar||function(r,i){for(var o in r)o!=="default"&&!Object.prototype.hasOwnProperty.call(i,o)&&n(i,r,o)};Object.defineProperty(e,"__esModule",{value:!0}),t(Dn,e),t(lo,e),t(an,e),t(pf,e)})(df);function kv({action:e,showDetails:n,errorArray:t,errorText:r,swfUrl:i}){if(e.type=="show_details")return R("li",{children:R("a",{href:"#",id:"panic-view-details",onClick:()=>(n(),!1),children:T("view-error-details")})});if(e.type=="open_link")return R("li",{children:R("a",{href:e.url,target:"_top",children:e.label})});{let o;document.location.protocol.includes("extension")&&i?o=i.href:o=document.location.href,o=o.split(/[?#]/,1)[0];const a=`Error on ${o}`;let l=`https://github.com/ruffle-rs/ruffle/issues/new?title=${encodeURIComponent(a)}&template=error_report.md&labels=error-report&body=`,s=encodeURIComponent(r);return t.stackIndex>-1&&String(l+s).length>8195&&(t[t.stackIndex]=null,t.avmStackIndex>-1&&(t[t.avmStackIndex]=null),s=encodeURIComponent(t.join(""))),l+=s,R("li",{children:R("a",{href:l,target:"_top",children:T("report-bug")})})}}function Ka(){const e=new Date(De.buildDate),n=new Date;return n.setMonth(n.getMonth()-6),n>e}const $={OpenDemo:{type:"open_link",url:lr+"/demo",label:T("ruffle-demo")},DownloadDesktop:{type:"open_link",url:lr+"/downloads#desktop-app",label:T("ruffle-desktop")},UpdateRuffle:{type:"open_link",url:lr+"/downloads",label:T("update-ruffle")},CreateReport:{type:"create_report"},ShowDetails:{type:"show_details"},createReportOrUpdate(){return Ka()?this.UpdateRuffle:this.CreateReport},openWiki(e,n){return{type:"open_link",url:`https://github.com/ruffle-rs/ruffle/wiki/${e}`,label:n??T("ruffle-wiki")}}};function bv(e){var n;if(e instanceof sf)return e.swfUrl&&!e.swfUrl.protocol.includes("http")?{body:se("error-file-protocol"),actions:[$.OpenDemo,$.DownloadDesktop]}:window.location.origin===((n=e.swfUrl)==null?void 0:n.origin)||window.location.protocol.includes("extension")?{body:se("error-swf-fetch"),actions:[$.ShowDetails]}:{body:se("error-swf-cors"),actions:[$.openWiki("Using-Ruffle#configure-cors-header"),$.ShowDetails]};if(e instanceof uf)return{body:se("error-invalid-swf"),actions:[$.ShowDetails]};if(e instanceof Qa){if(window.location.protocol==="file:")return{body:se("error-file-protocol"),actions:[$.OpenDemo,$.DownloadDesktop]};const t=String(e.cause.message).toLowerCase();if(t.includes("mime"))return{body:se("error-wasm-mime-type"),actions:[$.openWiki("Using-Ruffle#configure-webassembly-mime-type"),$.ShowDetails]};if(t.includes("networkerror")||t.includes("failed to fetch"))return{body:se("error-wasm-cors"),actions:[$.openWiki("Using-Ruffle#configure-cors-header"),$.ShowDetails]};if(t.includes("disallowed by embedder"))return{body:se("error-csp-conflict"),actions:[$.openWiki("Using-Ruffle#configure-wasm-csp"),$.ShowDetails]};if(e.cause.name==="CompileError")return{body:se("error-wasm-invalid"),actions:[$.openWiki("Using-Ruffle#addressing-a-compileerror"),$.ShowDetails]};if((t.includes("could not download wasm module")||t.includes("webassembly compilation aborted"))&&e.cause.name==="TypeError")return{body:se("error-wasm-download"),actions:[$.ShowDetails]};if(e.cause.name==="TypeError"){const r=se("error-javascript-conflict");return Ka()&&r.appendChild(se("error-javascript-conflict-outdated",{buildDate:De.buildDate})),{body:r,actions:[$.createReportOrUpdate(),$.ShowDetails]}}return navigator.userAgent.includes("Edg")&&t.includes("webassembly is not defined")?{body:se("error-wasm-disabled-on-edge"),actions:[$.openWiki("Frequently-Asked-Questions-For-Users#edge-webassembly-error",T("more-info")),$.ShowDetails]}:{body:se("error-wasm-not-found"),actions:[$.openWiki("Using-Ruffle#configuration-options"),$.ShowDetails]}}return e instanceof cf?{body:se("error-javascript-config"),actions:[$.openWiki("Using-Ruffle#javascript-api"),$.ShowDetails]}:{body:se("error-unknown",{buildDate:De.buildDate,outdated:String(Ka)}),actions:[$.createReportOrUpdate(),$.ShowDetails]}}function Sv(e,n,t,r){const i=t.join("");let{body:o,actions:a}=bv(n);const l=df.createRef(),s=()=>{l.current.classList.add("details"),l.current.replaceChildren(R("textarea",{readOnly:!0,children:i}))};e.textContent="",e.appendChild(G("div",{id:"panic",children:[R("div",{id:"panic-title",children:T("panic-title")}),R("div",{id:"panic-body",ref:l,children:o}),R("div",{id:"panic-footer",children:R("ul",{children:a.map(u=>kv({action:u,showDetails:s,errorText:i,errorArray:t,swfUrl:r}))})})]}))}const Rv="modulepreload",xv=function(e,n){return new URL(e,n).href},ju={},Cu=function(n,t,r){let i=Promise.resolve();if(t&&t.length>0){const a=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),s=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));i=Promise.allSettled(t.map(u=>{if(u=xv(u,r),u in ju)return;ju[u]=!0;const p=u.endsWith(".css"),m=p?'[rel="stylesheet"]':"";if(!!r)for(let y=a.length-1;y>=0;y--){const b=a[y];if(b.href===u&&(!p||b.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${m}`))return;const g=document.createElement("link");if(g.rel=p?"stylesheet":Rv,p||(g.as="script"),g.crossOrigin="",g.href=u,s&&g.setAttribute("nonce",s),document.head.appendChild(g),p)return new Promise((y,b)=>{g.addEventListener("load",y),g.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${u}`)))})}))}function o(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return i.then(a=>{for(const l of a||[])l.status==="rejected"&&o(l.reason);return n().catch(o)})},zv=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,3,1,0,1,10,14,1,12,0,65,0,65,0,65,0,252,10,0,0,11])),Ev=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,7,1,5,0,208,112,26,11])),jv=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,12,1,10,0,67,0,0,0,0,252,0,26,11])),Cv=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,8,1,6,0,65,0,192,26,11])),Pv=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]));function _v(){Object.defineProperty(Array.prototype,"reduce",{value(...e){if(e.length===0&&window.Prototype&&window.Prototype.Version&&window.Prototype.Version<"1.6.1")return this.length>1?this:this[0];const n=e[0];if(this===null)throw new TypeError("Array.prototype.reduce called on null or undefined");if(typeof n!="function")throw new TypeError(`${n} is not a function`);const t=Object(this),r=t.length>>>0;let i=0,o;if(e.length>=2)o=e[1];else{for(;i<r&&!(i in t);)i++;if(i>=r)throw new TypeError("Reduce of empty array with no initial value");o=t[i++]}for(;i<r;)i in t&&(o=n(o,t[i],i,t)),i++;return o}})}function Av(){typeof window.constructor!="function"||!Ja(window.constructor)||(window.Window=window.constructor)}function Fv(){(window.Reflect===void 0||window.Reflect===null)&&(window.Reflect={}),typeof Reflect.get!="function"&&Object.defineProperty(Reflect,"get",{value(e,n){return e[n]}}),typeof Reflect.set!="function"&&Object.defineProperty(Reflect,"set",{value(e,n,t){e[n]=t}}),typeof Reflect.has!="function"&&Object.defineProperty(Reflect,"has",{value(e,n){return n in e}}),typeof Reflect.ownKeys!="function"&&Object.defineProperty(Reflect,"ownKeys",{value(e){return[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)]}})}function Ja(e){const n=typeof Function.prototype.toString=="function"?Function.prototype.toString():null;return typeof n=="string"&&n.indexOf("[native code]")>=0?Function.prototype.toString.call(e).indexOf("[native code]")>=0:!1}function Dv(){(typeof Array.prototype.reduce!="function"||!Ja(Array.prototype.reduce))&&_v(),(typeof Window!="function"||!Ja(Window))&&Av(),Fv()}async function Tv(e){var u,p,m;Dv();const n=(await Promise.all([zv(),Pv(),jv(),Cv(),Ev()])).every(Boolean);n||console.log("Some WebAssembly extensions are NOT available, falling back to the vanilla WebAssembly module"),(p=(u=sr.options).onFirstLoad)==null||p.call(u),sr.options.onFirstLoad=()=>{};const{default:t,RuffleInstanceBuilder:r,ZipWriter:i}=await(n?Cu(()=>import("./ruffle_web-wasm_extensions-COPzF4kW.js"),__vite__mapDeps([0,1]),import.meta.url):Cu(()=>import("./ruffle_web-_XFV5WkM.js"),__vite__mapDeps([2,1]),import.meta.url));let o;const a=n?new URL(""+new URL("ruffle_web-wasm_extensions_bg-CEbtCBto.wasm",import.meta.url).href,import.meta.url):new URL(""+new URL("ruffle_web_bg-Czb0tL4N.wasm",import.meta.url).href,import.meta.url),l=await fetch(a);if(e&&typeof ReadableStreamDefaultController=="function"){const h=((m=l==null?void 0:l.headers)==null?void 0:m.get("content-length"))||"";let g=0;const y=parseInt(h);o=new Response(new ReadableStream({async start(b){var d;const F=(d=l.body)==null?void 0:d.getReader();if(!F)throw"Response had no body";for(e(g,y);;){const{done:c,value:f}=await F.read();if(c)break;f!=null&&f.byteLength&&(g+=f==null?void 0:f.byteLength),b.enqueue(f),e(g,y)}b.close()}}),l)}else o=l;return await t(o),[r,i]}let Uo=null;async function Ov(e){Uo===null&&(Uo=Tv(e));const n=await Uo;return[new n[0],()=>new n[1]]}const Lv=999,Za={};function Iv(e){const n=Za[e];return n!==void 0?{internalName:e,name:n.name,class:n.class}:null}function Yl(e,n){const t=Za[e];if(t!==void 0){if(t.class!==n)throw new Error("Internal naming conflict on "+e);return t.name}let r=0;if(window.customElements!==void 0)for(;r<Lv;){let i=e;if(r>0&&(i=i+"-"+r),window.customElements.get(i)!==void 0){r+=1;continue}else window.customElements.define(i,n);return Za[e]={class:n,name:i,internalName:e},i}throw new Error("Failed to assign custom element "+e)}function V(e){return e!=null}function Mv(e,n){if(V(n.allowScriptAccess)&&e.setAllowScriptAccess(n.allowScriptAccess),V(n.backgroundColor)&&e.setBackgroundColor(Nv(n.backgroundColor)),V(n.upgradeToHttps)&&e.setUpgradeToHttps(n.upgradeToHttps),V(n.compatibilityRules)&&e.setCompatibilityRules(n.compatibilityRules),V(n.letterbox)&&e.setLetterbox(n.letterbox.toLowerCase()),V(n.base)&&e.setBaseUrl(n.base),V(n.menu)&&e.setShowMenu(n.menu),V(n.allowFullscreen)&&e.setAllowFullscreen(n.allowFullscreen),V(n.salign)&&e.setStageAlign(n.salign.toLowerCase()),V(n.forceAlign)&&e.setForceAlign(n.forceAlign),V(n.quality)?e.setQuality(n.quality.toLowerCase()):qv()&&(console.log("Running on a mobile device; defaulting to low quality"),e.setQuality("low")),V(n.scale)&&e.setScale(n.scale.toLowerCase()),V(n.forceScale)&&e.setForceScale(n.forceScale),V(n.frameRate)&&e.setFrameRate(n.frameRate),V(n.wmode)&&e.setWmode(n.wmode),V(n.logLevel)&&e.setLogLevel(n.logLevel),V(n.maxExecutionDuration)&&e.setMaxExecutionDuration($v(n.maxExecutionDuration)),V(n.playerVersion)&&e.setPlayerVersion(n.playerVersion),V(n.preferredRenderer)&&e.setPreferredRenderer(n.preferredRenderer),V(n.openUrlMode)&&e.setOpenUrlMode(n.openUrlMode.toLowerCase()),V(n.allowNetworking)&&e.setAllowNetworking(n.allowNetworking.toLowerCase()),V(n.credentialAllowList)&&e.setCredentialAllowList(n.credentialAllowList),V(n.playerRuntime)&&e.setPlayerRuntime(n.playerRuntime),V(n.socketProxy))for(const t of n.socketProxy)e.addSocketProxy(t.host,t.port,t.proxyUrl)}function Nv(e){if(e.startsWith("#")&&(e=e.substring(1)),e.length<6)return;let n=0;for(let t=0;t<6;t++){const r=parseInt(e[t],16);isNaN(r)?n=n<<4:n=n<<4|r}return n}function $v(e){return typeof e=="number"?e:e.secs}function qv(){return typeof window.orientation<"u"}const Wv=/^\s*(\d+(\.\d+)?(%)?)/;let ti=!1;function Bo(e){if(e==null)return{};e instanceof URLSearchParams||(e=new URLSearchParams(e));const n={};for(const[t,r]of e)n[t]=r.toString();return n}class Pu{constructor(n,t){this.x=n,this.y=t}distanceTo(n){const t=n.x-this.x,r=n.y-this.y;return Math.sqrt(t*t+r*r)}}class Rn{constructor(n,t,r){this.contextMenuForceDisabled=!1,this.isTouch=!1,this.contextMenuSupported=!1,this._suppressContextMenu=!1,this.panicked=!1,this.rendererDebugInfo="",this.longPressTimer=null,this.pointerDownPosition=null,this.pointerMoveMaxDistance=0,this.config={},this.element=n,this.debugPlayerInfo=t,this.onCallbackAvailable=r,this.shadow=this.element.attachShadow({mode:"open",delegatesFocus:!0}),this.shadow.appendChild(Ke.content.cloneNode(!0)),this.dynamicStyles=this.shadow.getElementById("dynamic-styles"),this.container=this.shadow.getElementById("container"),this.playButton=this.shadow.getElementById("play-button"),this.playButton.addEventListener("click",()=>this.play()),this.unmuteOverlay=this.shadow.getElementById("unmute-overlay"),this.splashScreen=this.shadow.getElementById("splash-screen"),this.virtualKeyboard=this.shadow.getElementById("virtual-keyboard"),this.virtualKeyboard.addEventListener("input",this.virtualKeyboardInput.bind(this)),this.saveManager=this.shadow.getElementById("save-manager"),this.videoModal=this.shadow.getElementById("video-modal"),this.hardwareAccelerationModal=this.shadow.getElementById("hardware-acceleration-modal"),this.volumeControls=this.shadow.getElementById("volume-controls-modal"),this.clipboardModal=this.shadow.getElementById("clipboard-modal"),this.addModalJavaScript(this.saveManager),this.addModalJavaScript(this.volumeControls),this.addModalJavaScript(this.videoModal),this.addModalJavaScript(this.hardwareAccelerationModal),this.addModalJavaScript(this.clipboardModal),this.volumeSettings=new Uv(!1,100),this.addVolumeControlsJavaScript(this.volumeControls);const i=this.saveManager.querySelector(".modal-button");i&&(i.addEventListener("click",this.backupSaves.bind(this)),i.innerText=T("save-backup-all"));const o=this.unmuteOverlay.querySelector("#unmute-overlay-svg");if(o){const l=o.querySelector("#unmute-text");l.textContent=T("click-to-unmute")}this.contextMenuOverlay=this.shadow.getElementById("context-menu-overlay"),this.contextMenuElement=this.shadow.getElementById("context-menu");const a=l=>{l.preventDefault(),l.stopPropagation()};this.contextMenuElement.addEventListener("contextmenu",a),this.contextMenuElement.addEventListener("click",a),document.documentElement.addEventListener("pointerdown",this.checkIfTouch.bind(this)),this.element.addEventListener("contextmenu",this.showContextMenu.bind(this)),this.container.addEventListener("pointerdown",this.pointerDown.bind(this)),this.container.addEventListener("pointermove",this.checkLongPressMovement.bind(this)),this.container.addEventListener("pointerup",this.checkLongPress.bind(this)),this.container.addEventListener("pointercancel",this.clearLongPressTimer.bind(this)),this.element.addEventListener("fullscreenchange",this.fullScreenChange.bind(this)),this.element.addEventListener("webkitfullscreenchange",this.fullScreenChange.bind(this)),this.instance=null,this.newZipWriter=null,this.onFSCommand=null,this._readyState=St.HaveNothing,this.metadata=null,this.lastActivePlayingState=!1,this.setupPauseOnTabHidden()}addModalJavaScript(n){const t=n.querySelector("#video-holder"),r=()=>{n.classList.add("hidden"),t&&(t.textContent="")};n.parentNode.addEventListener("click",r);const i=n.querySelector(".modal-area");i&&i.addEventListener("click",a=>a.stopPropagation());const o=n.querySelector(".close-modal");o&&o.addEventListener("click",r)}addVolumeControlsJavaScript(n){const t=n.querySelector("#mute-checkbox"),r=n.querySelector("#volume-mute"),i=[n.querySelector("#volume-min"),n.querySelector("#volume-mid"),n.querySelector("#volume-max")],o=n.querySelector("#volume-slider"),a=n.querySelector("#volume-slider-text"),l=()=>{if(this.volumeSettings.isMuted)r.style.display="inline",i.forEach(s=>{s.style.display="none"});else{r.style.display="none";const s=Math.round(this.volumeSettings.volume/50);i.forEach((u,p)=>{u.style.display=p===s?"inline":"none"})}};t.checked=this.volumeSettings.isMuted,o.disabled=t.checked,o.valueAsNumber=this.volumeSettings.volume,a.textContent=o.value+"%",l(),t.addEventListener("change",()=>{var s;o.disabled=t.checked,this.volumeSettings.isMuted=t.checked,(s=this.instance)==null||s.set_volume(this.volumeSettings.get_volume()),l()}),o.addEventListener("input",()=>{var s;a.textContent=o.value+"%",this.volumeSettings.volume=o.valueAsNumber,(s=this.instance)==null||s.set_volume(this.volumeSettings.get_volume()),l()})}setupPauseOnTabHidden(){document.addEventListener("visibilitychange",()=>{this.instance&&(document.hidden&&(this.lastActivePlayingState=this.instance.is_playing(),this.instance.pause()),!document.hidden&&this.lastActivePlayingState===!0&&this.instance.play())},!1)}updateStyles(){if(this.dynamicStyles.sheet){if(this.dynamicStyles.sheet.cssRules)for(let r=this.dynamicStyles.sheet.cssRules.length-1;r>=0;r--)this.dynamicStyles.sheet.deleteRule(r);const n=this.element.attributes.getNamedItem("width");if(n!=null){const r=Rn.htmlDimensionToCssDimension(n.value);r!==null&&this.dynamicStyles.sheet.insertRule(`:host { width: ${r}; }`)}const t=this.element.attributes.getNamedItem("height");if(t!=null){const r=Rn.htmlDimensionToCssDimension(t.value);r!==null&&this.dynamicStyles.sheet.insertRule(`:host { height: ${r}; }`)}}}isUnusedFallbackObject(){const n=Iv("ruffle-object");if(n!==null){let t=this.element.parentNode;for(;t!==document&&t!==null;){if(t.nodeName===n.name)return!0;t=t.parentNode}}return!1}async ensureFreshInstance(){var o,a,l;this.destroy(),this.loadedConfig&&this.loadedConfig.splashScreen!==!1&&this.loadedConfig.preloader!==!1&&this.showSplashScreen(),this.loadedConfig&&this.loadedConfig.preloader===!1&&console.warn("The configuration option preloader has been replaced with splashScreen. If you own this website, please update the configuration."),this.loadedConfig&&this.loadedConfig.maxExecutionDuration&&typeof this.loadedConfig.maxExecutionDuration!="number"&&console.warn("Configuration: An obsolete format for duration for 'maxExecutionDuration' was used, please use a single number indicating seconds instead. For instance '15' instead of '{secs: 15, nanos: 0}'."),this.loadedConfig&&typeof this.loadedConfig.contextMenu=="boolean"&&console.warn('The configuration option contextMenu no longer takes a boolean. Use "on", "off", or "rightClickOnly".');const[n,t]=await Ov(this.onRuffleDownloadProgress.bind(this)).catch(s=>{console.error(`Serious error loading Ruffle: ${s}`);const u=new Qa(s);throw this.panic(u),u});if(this.newZipWriter=t,Mv(n,this.loadedConfig||{}),n.setVolume(this.volumeSettings.get_volume()),(o=this.loadedConfig)!=null&&o.fontSources)for(const s of this.loadedConfig.fontSources)try{const u=await fetch(s);n.addFont(s,new Uint8Array(await u.arrayBuffer()))}catch(u){console.warn(`Couldn't download font source from ${s}`,u)}for(const s in(a=this.loadedConfig)==null?void 0:a.defaultFonts){const u=this.loadedConfig.defaultFonts[s];u&&n.setDefaultFont(s,u)}this.instance=await n.build(this.container,this).catch(s=>{throw console.error(`Serious error loading Ruffle: ${s}`),this.panic(s),s}),this.rendererDebugInfo=this.instance.renderer_debug_info(),this.rendererDebugInfo.includes("Adapter Device Type: Cpu")&&this.container.addEventListener("mouseover",this.openHardwareAccelerationModal.bind(this),{once:!0});const r=this.instance.renderer_name(),i=this.instance.constructor;if(console.log("%cNew Ruffle instance created (Version: "+De.versionName+" | WebAssembly extensions: "+(i.is_wasm_simd_used()?"ON":"OFF")+" | Used renderer: "+(r??"")+")","background: #37528C; color: #FFAD33"),this.audioState()!=="running"&&(this.container.style.visibility="hidden",await new Promise(s=>{window.setTimeout(()=>{s()},200)}),this.container.style.visibility=""),this.unmuteAudioContext(),!this.loadedConfig||this.loadedConfig.autoplay===At.On||this.loadedConfig.autoplay!==At.Off&&this.audioState()==="running"){if(this.play(),this.audioState()!=="running"){(!this.loadedConfig||this.loadedConfig.unmuteOverlay!==Er.Hidden)&&(this.unmuteOverlay.style.display="block"),this.container.addEventListener("click",this.unmuteOverlayClicked.bind(this),{once:!0});const s=(l=this.instance)==null?void 0:l.audio_context();s&&(s.onstatechange=()=>{s.state==="running"&&this.unmuteOverlayClicked(),s.onstatechange=null})}}else this.playButton.style.display="block"}onRuffleDownloadProgress(n,t){const r=this.splashScreen.querySelector(".loadbar-inner"),i=this.splashScreen.querySelector(".loadbar");Number.isNaN(t)?i&&(i.style.display="none"):r.style.width=`${100*(n/t)}%`}destroy(){this.instance&&(this.instance.destroy(),this.instance=null,this.metadata=null,this._readyState=St.HaveNothing,console.log("Ruffle instance destroyed."))}checkOptions(n){if(typeof n=="string")return{url:n};const t=(r,i)=>{if(!r){const o=new cf(i);throw this.panic(o),o}};return t(n!==null&&typeof n=="object","Argument 0 must be a string or object"),t("url"in n||"data"in n,"Argument 0 must contain a `url` or `data` key"),t(!("url"in n)||typeof n.url=="string","`url` must be a string"),n}async reload(){if(this.loadedConfig)await this.load(this.loadedConfig);else throw new Error("Cannot reload if load wasn't first called")}async load(n,t=!1){var r;if(n=this.checkOptions(n),!this.element.isConnected||this.isUnusedFallbackObject()){console.warn("Ignoring attempt to play a disconnected or suspended Ruffle element");return}if(!Xl(this.element))try{this.loadedConfig={...mh,...t&&"url"in n?{allowScriptAccess:mf("samedomain",n.url)}:{},...((r=window.RufflePlayer)==null?void 0:r.config)??{},...this.config,...n},this.loadedConfig.backgroundColor&&this.loadedConfig.wmode!==qi.Transparent&&(this.container.style.backgroundColor=this.loadedConfig.backgroundColor),await this.ensureFreshInstance(),"url"in n?(console.log(`Loading SWF file ${n.url}`),this.swfUrl=new URL(n.url,document.baseURI),this.instance.stream_from(this.swfUrl.href,Bo(n.parameters))):"data"in n&&(console.log("Loading SWF data"),delete this.swfUrl,this.instance.load_data(new Uint8Array(n.data),Bo(n.parameters),n.swfFileName||"movie.swf"))}catch(i){console.error(`Serious error occurred loading SWF file: ${i}`);const o=new Error(i);throw this.panic(o),o}}play(){this.instance&&(this.instance.play(),this.playButton.style.display="none")}get isPlaying(){return this.instance?this.instance.is_playing():!1}get volume(){return this.instance?this.instance.volume():1}set volume(n){this.instance&&this.instance.set_volume(n)}get fullscreenEnabled(){return!!(document.fullscreenEnabled||document.webkitFullscreenEnabled)}get isFullscreen(){return(document.fullscreenElement||document.webkitFullscreenElement)===this.element}setFullscreen(n){this.fullscreenEnabled&&n!==this.isFullscreen&&(n?this.enterFullscreen():this.exitFullscreen())}enterFullscreen(){const n={navigationUI:"hide"};this.element.requestFullscreen?this.element.requestFullscreen(n):this.element.webkitRequestFullscreen?this.element.webkitRequestFullscreen(n):this.element.webkitRequestFullScreen&&this.element.webkitRequestFullScreen(n)}exitFullscreen(){document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}fullScreenChange(){var n;(n=this.instance)==null||n.set_fullscreen(this.isFullscreen)}saveFile(n,t){const r=URL.createObjectURL(n),i=document.createElement("a");i.href=r,i.download=t,i.click(),URL.revokeObjectURL(r)}checkIfTouch(n){this.isTouch=n.pointerType==="touch"||n.pointerType==="pen"}base64ToArray(n){const t=atob(n),r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}base64ToBlob(n,t){const r=this.base64ToArray(n);return new Blob([r],{type:t})}isB64SOL(n){try{return atob(n).slice(6,10)==="TCSO"}catch{return!1}}confirmReloadSave(n,t,r){if(this.isB64SOL(t)&&localStorage[n]){if(!r&&!confirm(T("save-delete-prompt")))return;const i=this.swfUrl?this.swfUrl.pathname:"",o=this.swfUrl?this.swfUrl.hostname:document.location.hostname,a=n.split("/").slice(1,-1).join("/");if(i.includes(a)&&n.startsWith(o)){confirm(T("save-reload-prompt",{action:r?"replace":"delete"}))&&this.loadedConfig&&(this.destroy(),r?localStorage.setItem(n,t):localStorage.removeItem(n),this.reload(),this.populateSaves(),this.saveManager.classList.add("hidden"));return}r?localStorage.setItem(n,t):localStorage.removeItem(n),this.populateSaves(),this.saveManager.classList.add("hidden")}}replaceSOL(n,t){const r=n.target,i=new FileReader;i.addEventListener("load",()=>{if(i.result&&typeof i.result=="string"){const o=new RegExp("data:.*;base64,"),a=i.result.replace(o,"");this.confirmReloadSave(t,a,!0)}}),r&&r.files&&r.files.length>0&&r.files[0]&&i.readAsDataURL(r.files[0])}checkSaves(){if(!this.saveManager.querySelector("#local-saves"))return!1;try{if(localStorage===null)return!1}catch{return!1}return Object.keys(localStorage).some(n=>{const t=n.split("/").pop(),r=localStorage.getItem(n);return t&&r&&this.isB64SOL(r)})}deleteSave(n){const t=localStorage.getItem(n);t&&this.confirmReloadSave(n,t,!1)}populateSaves(){if(!this.checkSaves())return;const n=this.saveManager.querySelector("#local-saves");n.textContent="",Object.keys(localStorage).forEach(t=>{const r=t.split("/").pop(),i=localStorage.getItem(t);if(r&&i&&this.isB64SOL(i)){const o=document.createElement("TR"),a=document.createElement("TD");a.textContent=r,a.title=t;const l=document.createElement("TD"),s=document.createElement("SPAN");s.className="save-option",s.id="download-save",s.title=T("save-download"),s.addEventListener("click",()=>{const y=this.base64ToBlob(i,"application/octet-stream");this.saveFile(y,r+".sol")}),l.appendChild(s);const u=document.createElement("TD"),p=document.createElement("INPUT");p.type="file",p.accept=".sol",p.className="replace-save",p.id="replace-save-"+t;const m=document.createElement("LABEL");m.htmlFor="replace-save-"+t,m.className="save-option",m.id="replace-save",m.title=T("save-replace"),p.addEventListener("change",y=>this.replaceSOL(y,t)),u.appendChild(p),u.appendChild(m);const h=document.createElement("TD"),g=document.createElement("SPAN");g.className="save-option",g.id="delete-save",g.title=T("save-delete"),g.addEventListener("click",()=>this.deleteSave(t)),h.appendChild(g),o.appendChild(a),o.appendChild(l),o.appendChild(u),o.appendChild(h),n.appendChild(o)}})}async backupSaves(){const n=this.newZipWriter(),t=[];Object.keys(localStorage).forEach(i=>{let o=String(i.split("/").pop());const a=localStorage.getItem(i);if(a&&this.isB64SOL(a)){const l=this.base64ToArray(a),s=t.filter(u=>u===o).length;t.push(o),s>0&&(o+=` (${s+1})`),n.addFile(o+".sol",l)}});const r=new Blob([n.save()],{type:"application/zip"});this.saveFile(r,"saves.zip")}openHardwareAccelerationModal(){this.hardwareAccelerationModal.classList.remove("hidden")}async openSaveManager(){this.populateSaves(),this.saveManager.classList.remove("hidden")}openVolumeControls(){this.volumeControls.classList.remove("hidden")}async downloadSwf(){try{if(this.swfUrl){console.log("Downloading SWF: "+this.swfUrl);const n=await fetch(this.swfUrl.href);if(!n.ok){console.error("SWF download failed");return}const t=await n.blob();this.saveFile(t,hv(this.swfUrl))}else console.error("SWF download failed")}catch{console.error("SWF download failed")}}virtualKeyboardInput(){const n=this.virtualKeyboard,t=n.value;for(const r of t)for(const i of["keydown","keyup"])this.element.dispatchEvent(new KeyboardEvent(i,{key:r,bubbles:!0}));n.value=""}openVirtualKeyboard(){var n;(n=this.instance)!=null&&n.has_focus()?this.virtualKeyboard.focus({preventScroll:!0}):setTimeout(()=>{this.virtualKeyboard.focus({preventScroll:!0})},0)}closeVirtualKeyboard(){this.isVirtualKeyboardFocused()&&this.container.focus({preventScroll:!0})}isVirtualKeyboardFocused(){return this.shadow.activeElement===this.virtualKeyboard}contextMenuItems(){const n="✓",t=[],r=()=>{t.length>0&&t[t.length-1]!==null&&t.push(null)};return this.instance&&this.isPlaying&&(this.instance.prepare_context_menu().forEach((o,a)=>{o.separatorBefore&&r(),t.push({text:o.caption+(o.checked?` (${n})`:""),onClick:async()=>{var l;return(l=this.instance)==null?void 0:l.run_context_menu_callback(a)},enabled:o.enabled})}),r()),this.fullscreenEnabled&&(this.isFullscreen?t.push({text:T("context-menu-exit-fullscreen"),onClick:async()=>this.setFullscreen(!1)}):t.push({text:T("context-menu-enter-fullscreen"),onClick:async()=>this.setFullscreen(!0)})),t.push({text:T("context-menu-volume-controls"),onClick:async()=>{this.openVolumeControls()}}),this.instance&&this.swfUrl&&this.loadedConfig&&this.loadedConfig.showSwfDownload===!0&&(r(),t.push({text:T("context-menu-download-swf"),onClick:this.downloadSwf.bind(this)})),navigator.clipboard&&window.isSecureContext&&t.push({text:T("context-menu-copy-debug-info"),onClick:()=>navigator.clipboard.writeText(this.getPanicData())}),this.checkSaves()&&t.push({text:T("context-menu-open-save-manager"),onClick:this.openSaveManager.bind(this)}),r(),t.push({text:T("context-menu-about-ruffle",{flavor:Fn?"extension":"",version:De.versionName}),async onClick(){window.open(lr,"_blank")}}),this.isTouch&&(r(),t.push({text:T("context-menu-hide"),onClick:async()=>{this.contextMenuForceDisabled=!0}})),t}pointerDown(n){this.pointerDownPosition=new Pu(n.pageX,n.pageY),this.pointerMoveMaxDistance=0,this.startLongPressTimer()}clearLongPressTimer(){this.longPressTimer&&(clearTimeout(this.longPressTimer),this.longPressTimer=null)}startLongPressTimer(){this.clearLongPressTimer(),this.longPressTimer=setTimeout(()=>this.clearLongPressTimer(),800)}checkLongPressMovement(n){if(this.pointerDownPosition!==null){const t=new Pu(n.pageX,n.pageY),r=this.pointerDownPosition.distanceTo(t);r>this.pointerMoveMaxDistance&&(this.pointerMoveMaxDistance=r)}}checkLongPress(n){this.longPressTimer?this.clearLongPressTimer():!this.contextMenuSupported&&n.pointerType!=="mouse"&&this.pointerMoveMaxDistance<15&&this.showContextMenu(n)}suppressContextMenu(){this._suppressContextMenu=!0}showContextMenu(n){var s,u;if(this.panicked)return;if(n.preventDefault(),this._suppressContextMenu){this._suppressContextMenu=!1;return}if(this.shadow.querySelectorAll(".modal:not(.hidden)").length!==0||(n.type==="contextmenu"?(this.contextMenuSupported=!0,document.documentElement.addEventListener("click",this.hideContextMenu.bind(this),{once:!0})):(document.documentElement.addEventListener("pointerup",this.hideContextMenu.bind(this),{once:!0}),n.stopPropagation()),[!1,bt.Off].includes(((s=this.loadedConfig)==null?void 0:s.contextMenu)??bt.On)||this.isTouch&&((u=this.loadedConfig)==null?void 0:u.contextMenu)===bt.RightClickOnly||this.contextMenuForceDisabled))return;for(;this.contextMenuElement.firstChild;)this.contextMenuElement.removeChild(this.contextMenuElement.firstChild);for(const p of this.contextMenuItems())if(p===null)this.contextMenuElement.appendChild(R("li",{class:"menu-separator",children:R("hr",{})}));else{const{text:m,onClick:h,enabled:g}=p,y=R("li",{class:{"menu-item":!0,disabled:g===!1},"data-text":m,children:m});if(this.contextMenuElement.appendChild(y),g!==!1){const b=async F=>{F.preventDefault(),F.stopPropagation(),await h(F),this.hideContextMenu()};this.contextMenuSupported?(y.addEventListener("click",b),y.addEventListener("contextmenu",b)):y.addEventListener("pointerup",b)}}this.contextMenuOverlay.classList.remove("hidden");const t=this.element.getBoundingClientRect(),r=this.contextMenuElement.getBoundingClientRect(),i=Math.max(0,n.clientX+r.width-document.documentElement.clientWidth),o=Math.max(0,n.clientY+r.height-document.documentElement.clientHeight),a=n.clientX-t.x-i,l=n.clientY-t.y-o;this.contextMenuElement.style.transform=`translate(${a}px, ${l}px)`}hideContextMenu(){var n;(n=this.instance)==null||n.clear_custom_menu_items(),this.contextMenuOverlay.classList.add("hidden")}pause(){this.instance&&(this.instance.pause(),this.playButton.style.display="block")}audioState(){if(this.instance){const n=this.instance.audio_context();return n&&n.state||"running"}return"suspended"}unmuteOverlayClicked(){if(this.instance){if(this.audioState()!=="running"){const n=this.instance.audio_context();n&&n.resume()}this.unmuteOverlay.style.display="none"}}unmuteAudioContext(){if(!ti){if(navigator.maxTouchPoints<1){ti=!0;return}this.container.addEventListener("click",()=>{var r;if(ti)return;const n=(r=this.instance)==null?void 0:r.audio_context();if(!n)return;const t=new Audio;t.src=(()=>{const i=new ArrayBuffer(10),o=new DataView(i),a=n.sampleRate;return o.setUint32(0,a,!0),o.setUint32(4,a,!0),o.setUint16(8,1,!0),`data:audio/wav;base64,UklGRisAAABXQVZFZm10IBAAAAABAAEA${window.btoa(String.fromCharCode(...new Uint8Array(i))).slice(0,13)}AgAZGF0YQcAAACAgICAgICAAAA=`})(),t.load(),t.play().then(()=>{ti=!0}).catch(i=>{console.warn(`Failed to play dummy sound: ${i}`)})},{once:!0})}}static htmlDimensionToCssDimension(n){if(n){const t=n.match(Wv);if(t){let r=t[1];return t[3]||(r+="px"),r}}return null}callExternalInterface(n,t){var r;return(r=this.instance)==null?void 0:r.call_exposed_callback(n,t)}getObjectId(){return this.element.getAttribute("name")}set traceObserver(n){var t;(t=this.instance)==null||t.set_trace_observer(n)}getPanicData(){let n=`
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
`,n+=`Version: ${De.versionNumber}
`,n+=`Name: ${De.versionName}
`,n+=`Channel: ${De.versionChannel}
`,n+=`Built: ${De.buildDate}
`,n+=`Commit: ${De.commitHash}
`,n+=`Is extension: ${Fn}
`,n+=`
# Metadata
`,this.metadata)for(const[t,r]of Object.entries(this.metadata))n+=`${t}: ${r}
`;return n}panic(n){var i;if(this.panicked)return;this.panicked=!0,this.hideSplashScreen();const t=n;if(n instanceof Error&&(n.name==="AbortError"||n.message.includes("AbortError")))return;if(n instanceof Qa){const o=(i=this.loadedConfig)==null?void 0:i.openInNewTab,a=this.loadedConfig&&"url"in this.loadedConfig?new URL(this.loadedConfig.url,document.baseURI):void 0;if(o&&a){this.addOpenInNewTabMessage(o,a);return}n=n.cause}const r=Object.assign([],{stackIndex:-1,avmStackIndex:-1});if(r.push(`# Error Info
`),n instanceof Error){if(r.push(`Error name: ${n.name}
`),r.push(`Error message: ${n.message}
`),n.stack){const o=r.push(`Error stack:
\`\`\`
${n.stack}
\`\`\`
`)-1;if(n.avmStack){const a=r.push(`AVM2 stack:
\`\`\`
    ${n.avmStack.trim().replace(/\t/g,"    ")}
\`\`\`
`)-1;r.avmStackIndex=a}r.stackIndex=o}}else r.push(`Error: ${n}
`);r.push(this.getPanicData()),Sv(this.container,t,r,this.swfUrl),this.destroy()}addOpenInNewTabMessage(n,t){var s,u;const r=new URL(t);if((s=this.loadedConfig)!=null&&s.parameters){const p=Bo((u=this.loadedConfig)==null?void 0:u.parameters);Object.entries(p).forEach(([m,h])=>{r.searchParams.set(m,h)})}this.hideSplashScreen();const i=document.createElement("div");i.id="message-overlay";const o=document.createElement("div");o.className="message",o.appendChild(se("message-cant-embed"));const a=document.createElement("div"),l=document.createElement("a");l.innerText=T("open-in-new-tab"),l.onclick=()=>n(r),a.appendChild(l),o.appendChild(a),i.appendChild(o),this.container.prepend(i)}displayRootMovieDownloadFailedMessage(n){var r;const t=(r=this.loadedConfig)==null?void 0:r.openInNewTab;if(t&&this.swfUrl&&window.location.origin!==this.swfUrl.origin)this.addOpenInNewTabMessage(t,this.swfUrl);else{const i=n?new uf(this.swfUrl):new sf(this.swfUrl);this.panic(i)}}displayMessage(n){const t=document.createElement("div");t.id="message-overlay";const r=document.createElement("div");r.className="message";const i=document.createElement("p");i.textContent=n,r.appendChild(i);const o=document.createElement("div"),a=document.createElement("button");a.id="continue-btn",a.textContent=T("continue"),o.appendChild(a),r.appendChild(o),t.appendChild(r),this.container.prepend(t),this.container.querySelector("#continue-btn").onclick=()=>{t.parentNode.removeChild(t)}}displayUnsupportedVideo(n){const t=this.videoModal.querySelector("#video-holder");if(t){const r=document.createElement("video");r.addEventListener("contextmenu",i=>i.stopPropagation()),r.src=n,r.autoplay=!0,r.controls=!0,t.textContent="",t.appendChild(r),this.videoModal.classList.remove("hidden")}}displayClipboardModal(n){const t=this.clipboardModal.querySelector("#clipboard-modal-description");t&&(t.textContent=T("clipboard-message-description",{variant:n?"access-denied":"unsupported"}),this.clipboardModal.classList.remove("hidden"))}hideSplashScreen(){this.splashScreen.classList.add("hidden"),this.container.classList.remove("hidden")}showSplashScreen(){this.splashScreen.classList.remove("hidden"),this.container.classList.add("hidden")}setMetadata(n){this.metadata=n,this._readyState=St.Loaded,this.hideSplashScreen(),this.element.dispatchEvent(new CustomEvent(Rn.LOADED_METADATA)),this.element.dispatchEvent(new CustomEvent(Rn.LOADED_DATA))}}Rn.LOADED_METADATA="loadedmetadata";Rn.LOADED_DATA="loadeddata";var St;(function(e){e[e.HaveNothing=0]="HaveNothing",e[e.Loading=1]="Loading",e[e.Loaded=2]="Loaded"})(St||(St={}));class Uv{constructor(n,t){this.isMuted=n,this.volume=t}get_volume(){return this.isMuted?0:this.volume/100}}function Ga(e,n){const t={url:e},r=n("allowNetworking");r!==null&&(t.allowNetworking=r);const i=mf(n("allowScriptAccess"),e);i!==null&&(t.allowScriptAccess=i);const o=n("bgcolor");o!==null&&(t.backgroundColor=o);const a=n("base");if(a!==null)if(a==="."){const y=new URL(e,document.baseURI);t.base=new URL(a,y).href}else t.base=a;const l=_u(n("menu"));l!==null&&(t.menu=l);const s=_u(n("allowFullScreen"));s!==null&&(t.allowFullscreen=s);const u=n("flashvars");u!==null&&(t.parameters=u);const p=n("quality");p!==null&&(t.quality=p);const m=n("salign");m!==null&&(t.salign=m);const h=n("scale");h!==null&&(t.scale=h);const g=n("wmode");return g!==null&&(t.wmode=g),t}function Ya(e){if(e){let n="",t="";try{const r=new URL(e,lr);n=r.pathname,t=r.hostname}catch{}if(n.startsWith("/v/")&&/^(?:(?:www\.|m\.)?youtube(?:-nocookie)?\.com)|(?:youtu\.be)$/i.test(t))return!0}return!1}function Xa(e,n){var i;const t=e.getAttribute(n),r=((i=window.RufflePlayer)==null?void 0:i.config)??{};if(t)try{const o=new URL(t);o.protocol==="http:"&&window.location.protocol==="https:"&&(!("upgradeToHttps"in r)||r.upgradeToHttps!==!1)&&(o.protocol="https:",e.setAttribute(n,o.toString()))}catch{}}function Xl(e){let n=e.parentElement;for(;n!==null;){switch(n.tagName){case"AUDIO":case"VIDEO":return!0}n=n.parentElement}return!1}function _u(e){switch(e==null?void 0:e.toLowerCase()){case"true":return!0;case"false":return!1;default:return null}}function mf(e,n){switch(e==null?void 0:e.toLowerCase()){case"always":return!0;case"never":return!1;case"samedomain":try{return new URL(window.location.href).origin===new URL(n,window.location.href).origin}catch{return!1}default:return null}}var q=function(e,n,t,r){if(t==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof n=="function"?e!==n||!r:!n.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?r:t==="a"?r.call(e):r?r.value:n.get(e)},Bv=function(e,n,t,r,i){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof n=="function"?e!==n||!i:!n.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?i.call(e,t):i?i.value=t:n.set(e,t),t},M;class es extends HTMLElement{get onFSCommand(){return q(this,M,"f").onFSCommand}set onFSCommand(n){q(this,M,"f").onFSCommand=n}get readyState(){return q(this,M,"f")._readyState}get metadata(){return q(this,M,"f").metadata}constructor(){super(),M.set(this,void 0),Bv(this,M,new Rn(this,()=>this.debugPlayerInfo(),n=>{try{Object.defineProperty(this,n,{value:(...t)=>q(this,M,"f").callExternalInterface(n,t),configurable:!0})}catch(t){console.warn(`Error setting ExternalInterface legacy callback for ${n}`,t)}}),"f")}get loadedConfig(){return q(this,M,"f").loadedConfig??null}connectedCallback(){q(this,M,"f").updateStyles()}static get observedAttributes(){return["width","height"]}attributeChangedCallback(n,t,r){(n==="width"||n==="height")&&q(this,M,"f").updateStyles()}disconnectedCallback(){q(this,M,"f").destroy()}async reload(){await q(this,M,"f").reload()}async load(n,t=!1){await q(this,M,"f").load(n,t)}play(){q(this,M,"f").play()}get isPlaying(){return q(this,M,"f").isPlaying}get volume(){return q(this,M,"f").volume}set volume(n){q(this,M,"f").volume=n}get fullscreenEnabled(){return q(this,M,"f").fullscreenEnabled}get isFullscreen(){return q(this,M,"f").isFullscreen}setFullscreen(n){q(this,M,"f").setFullscreen(n)}enterFullscreen(){q(this,M,"f").enterFullscreen()}exitFullscreen(){q(this,M,"f").exitFullscreen()}async downloadSwf(){await q(this,M,"f").downloadSwf()}pause(){q(this,M,"f").pause()}set traceObserver(n){q(this,M,"f").traceObserver=n}debugPlayerInfo(){return""}PercentLoaded(){return this.readyState===St.Loaded?100:0}get config(){return q(this,M,"f").config}set config(n){q(this,M,"f").config=n}displayMessage(n){q(this,M,"f").displayMessage(n)}}M=new WeakMap;function hf(e,n){if(e){for(const t of e.attributes)if(t.specified){if(t.name==="title"&&t.value==="Adobe Flash Player")continue;try{n.setAttribute(t.name,t.value)}catch{console.warn(`Unable to set attribute ${t.name} on Ruffle instance`)}}for(const t of Array.from(e.children))n.appendChild(t)}}class Dt extends es{connectedCallback(){super.connectedCallback();const n=this.attributes.getNamedItem("src");if(n){const t=i=>{var o;return((o=this.attributes.getNamedItem(i))==null?void 0:o.value)??null},r=Ga(n.value,t);this.load(r,!0)}}get nodeName(){return"EMBED"}get src(){var n;return(n=this.attributes.getNamedItem("src"))==null?void 0:n.value}set src(n){if(n){const t=document.createAttribute("src");t.value=n,this.attributes.setNamedItem(t)}else this.attributes.removeNamedItem("src")}static get observedAttributes(){return["src","width","height"]}attributeChangedCallback(n,t,r){if(super.attributeChangedCallback(n,t,r),this.isConnected&&n==="src"){const i=this.attributes.getNamedItem("src");if(i){const o=l=>{var s;return((s=this.attributes.getNamedItem(l))==null?void 0:s.value)??null},a=Ga(i.value,o);this.load(a,!0)}}}static isInterdictable(n){const t=n.getAttribute("src"),r=n.getAttribute("type");return!t||Xl(n)?!1:Ya(t)?(Xa(n,"src"),!1):lf(t,r)}static fromNativeEmbedElement(n){const t=Yl("ruffle-embed",Dt),r=document.createElement(t);return hf(n,r),r}get height(){return this.getAttribute("height")||""}set height(n){this.setAttribute("height",n)}get width(){return this.getAttribute("width")||""}set width(n){this.setAttribute("width",n)}get type(){return this.getAttribute("type")||""}set type(n){this.setAttribute("type",n)}}function Vv(e,n,t){n=n.toLowerCase();for(const[r,i]of Object.entries(e))if(r.toLowerCase()===n)return i;return t}function Au(e){var t,r;const n={};for(const i of e.children)if(i instanceof HTMLParamElement){const o=(t=i.attributes.getNamedItem("name"))==null?void 0:t.value,a=(r=i.attributes.getNamedItem("value"))==null?void 0:r.value;o&&a&&(n[o]=a)}return n}class Rt extends es{constructor(){super(...arguments),this.params={}}connectedCallback(){var t;super.connectedCallback(),this.params=Au(this);let n=null;if(this.attributes.getNamedItem("data")?n=(t=this.attributes.getNamedItem("data"))==null?void 0:t.value:this.params.movie&&(n=this.params.movie),n){const r=["allowNetworking","base","bgcolor","flashvars"],o=Ga(n,a=>Vv(this.params,a,r.includes(a)?this.getAttribute(a):null));this.load(o,!0)}}debugPlayerInfo(){var r;let n=`Player type: Object
`,t=null;return this.attributes.getNamedItem("data")?t=(r=this.attributes.getNamedItem("data"))==null?void 0:r.value:this.params.movie&&(t=this.params.movie),n+=`SWF URL: ${t}
`,Object.keys(this.params).forEach(i=>{n+=`Param ${i}: ${this.params[i]}
`}),Object.keys(this.attributes).forEach(i=>{var o;n+=`Attribute ${i}: ${(o=this.attributes.getNamedItem(i))==null?void 0:o.value}
`}),n}get nodeName(){return"OBJECT"}get data(){return this.getAttribute("data")}set data(n){if(n){const t=document.createAttribute("data");t.value=n,this.attributes.setNamedItem(t)}else this.attributes.removeNamedItem("data")}static isInterdictable(n){var l,s,u;if(Xl(n)||n.getElementsByTagName("ruffle-object").length>0||n.getElementsByTagName("ruffle-embed").length>0)return!1;const t=(l=n.attributes.getNamedItem("data"))==null?void 0:l.value.toLowerCase(),r=((s=n.attributes.getNamedItem("type"))==null?void 0:s.value)??null,i=Au(n);let o;if(t){if(Ya(t))return Xa(n,"data"),!1;o=t}else if(i&&i.movie){if(Ya(i.movie)){const p=n.querySelector("param[name='movie']");if(p){Xa(p,"value");const m=p.getAttribute("value");m&&n.setAttribute("data",m)}return!1}o=i.movie}else return!1;const a=(u=n.attributes.getNamedItem("classid"))==null?void 0:u.value.toLowerCase();return a===fv.toLowerCase()?!Array.from(n.getElementsByTagName("object")).some(Rt.isInterdictable)&&!Array.from(n.getElementsByTagName("embed")).some(Dt.isInterdictable):a?!1:lf(o,r)}static fromNativeObjectElement(n){const t=Yl("ruffle-object",Rt),r=document.createElement(t);for(const i of Array.from(n.getElementsByTagName("embed")))Dt.isInterdictable(i)&&i.remove();for(const i of Array.from(n.getElementsByTagName("object")))Rt.isInterdictable(i)&&i.remove();return hf(n,r),r}get height(){return this.getAttribute("height")||""}set height(n){this.setAttribute("height",n)}get width(){return this.getAttribute("width")||""}set width(n){this.setAttribute("width",n)}get type(){return this.getAttribute("type")||""}set type(n){this.setAttribute("type",n)}}class el{constructor(n){if(this.__mimeTypes=[],this.__namedMimeTypes={},n)for(let t=0;t<n.length;t++)this.install(n[t])}install(n){const t=new vf(n),r=this.__mimeTypes.length;this.__mimeTypes.push(t),this.__namedMimeTypes[n.type]=t,this[t.type]=t,this[r]=t}item(n){return this.__mimeTypes[n>>>0]}namedItem(n){return this.__namedMimeTypes[n]}get length(){return this.__mimeTypes.length}[Symbol.iterator](){return this.__mimeTypes[Symbol.iterator]()}get[Symbol.toStringTag](){return"MimeTypeArray"}}class vf{constructor(n){this.__mimeType=n}get type(){return this.__mimeType.type}get description(){return this.__mimeType.description}get suffixes(){return this.__mimeType.suffixes}get enabledPlugin(){return this.__mimeType.enabledPlugin}get[Symbol.toStringTag](){return"MimeType"}}class Hv extends el{constructor(n,t,r){super(),this.name=n,this.description=t,this.filename=r}}class Fu{constructor(n){this.__plugins=[],this.__namedPlugins={};for(let t=0;t<n.length;t++)this.install(n[t])}install(n){const t=this.__plugins.length;this.__plugins.push(n),this.__namedPlugins[n.name]=n,this[n.name]=n,this[t]=n}item(n){return this.__plugins[n>>>0]}namedItem(n){return this.__namedPlugins[n]}refresh(){}[Symbol.iterator](){return this.__plugins[Symbol.iterator]()}get[Symbol.toStringTag](){return"PluginArray"}get length(){return this.__plugins.length}}const pn=new Hv("Shockwave Flash","Shockwave Flash 32.0 r0","ruffle.js");pn.install({type:rf,description:"Shockwave Flash",suffixes:"spl",enabledPlugin:pn});pn.install({type:tf,description:"Shockwave Flash",suffixes:"swf",enabledPlugin:pn});pn.install({type:of,description:"Shockwave Flash",suffixes:"swf",enabledPlugin:pn});pn.install({type:af,description:"Shockwave Flash",suffixes:"swf",enabledPlugin:pn});function Qv(e){if(navigator.plugins.namedItem("Shockwave Flash"))return;(!("install"in navigator.plugins)||!navigator.plugins.install)&&(Object.defineProperty(window,"PluginArray",{value:Fu}),Object.defineProperty(navigator,"plugins",{value:new Fu(navigator.plugins),writable:!1})),navigator.plugins.install(e),e.length>0&&(!("install"in navigator.mimeTypes)||!navigator.mimeTypes.install)&&(Object.defineProperty(window,"MimeTypeArray",{value:el}),Object.defineProperty(window,"MimeType",{value:vf}),Object.defineProperty(navigator,"mimeTypes",{value:new el(navigator.mimeTypes),writable:!1}));const t=navigator.mimeTypes;for(let r=0;r<e.length;r+=1)t.install(e[r])}function Kv(e){let n=(ar==null?void 0:ar.href)??"";return!Fn&&"publicPath"in e&&e.publicPath!==null&&e.publicPath!==void 0&&(n=e.publicPath),n!==""&&!n.endsWith("/")&&(n+="/"),n}var Tu;const Cr=((Tu=window.RufflePlayer)==null?void 0:Tu.config)??{},Jv=Kv(Cr)+"ruffle.js";let Vo,Ho;function Zv(){var e;return"favorFlash"in Cr&&Cr.favorFlash===!1?!1:(((e=navigator.plugins.namedItem("Shockwave Flash"))==null?void 0:e.filename)??"ruffle.js")!=="ruffle.js"}function gf(){try{Vo=Vo??document.getElementsByTagName("object"),Ho=Ho??document.getElementsByTagName("embed");for(const e of Array.from(Vo))if(Rt.isInterdictable(e)){const n=Rt.fromNativeObjectElement(e);e.replaceWith(n)}for(const e of Array.from(Ho))if(Dt.isInterdictable(e)){const n=Dt.fromNativeEmbedElement(e);e.replaceWith(n)}}catch(e){console.error(`Serious error encountered when polyfilling native Flash elements: ${e}`)}}let Qo,Ko;function wf(){Qo=Qo??document.getElementsByTagName("iframe"),Ko=Ko??document.getElementsByTagName("frame"),[Qo,Ko].forEach(e=>{for(const n of e){if(n.dataset.rufflePolyfilled!==void 0)continue;n.dataset.rufflePolyfilled="";const t=n.contentWindow,r=`Couldn't load Ruffle into ${n.tagName}[${n.src}]: `;try{t.document.readyState==="complete"&&Du(t,r)}catch(i){Fn||console.warn(r+i)}n.addEventListener("load",()=>{Du(t,r)},!1)}})}async function Du(e,n){await new Promise(r=>{window.setTimeout(()=>{r()},100)});let t;try{if(t=e.document,!t)return}catch(r){Fn||console.warn(n+r);return}if(!(!Fn&&t.documentElement.dataset.ruffleOptout!==void 0)){if(Fn)e.RufflePlayer||(e.RufflePlayer={}),e.RufflePlayer.config={...Cr,...e.RufflePlayer.config??{}};else if(!e.RufflePlayer){const r=t.createElement("script");r.setAttribute("src",Jv),r.onload=()=>{e.RufflePlayer={},e.RufflePlayer.config=Cr},t.head.appendChild(r)}}}function Gv(){new MutationObserver(function(n){n.some(r=>Array.from(r.addedNodes).some(i=>["EMBED","OBJECT"].includes(i.nodeName)||i instanceof Element&&i.querySelector("embed, object")!==null))&&(gf(),wf())}).observe(document,{childList:!0,subtree:!0})}function Yv(){Qv(pn)}function Xv(){Zv()||(gf(),wf(),Gv())}const sr={version:De.versionNumber+"+"+De.buildDate.substring(0,10),polyfill(){Xv()},pluginPolyfill(){Yv()},createPlayer(){const e=Yl("ruffle-player",es);return document.createElement(e)},options:{}};function eg(e,n={}){let t;window.RufflePlayer instanceof du?t=window.RufflePlayer:(t=new du(window.RufflePlayer),window.RufflePlayer=t),t.sources[e]=sr,sr.options=n,("polyfills"in t.config?t.config.polyfills:!0)!==!1&&sr.pluginPolyfill()}eg("local");Zo.createRoot(document.getElementById("root")).render(j.jsx(Jo.StrictMode,{children:j.jsx(nh,{ruffleBaseConfig:{autoplay:At.On,unmuteOverlay:Er.Hidden,logLevel:$i.Warn,letterbox:Ni.On,forceScale:!0,forceAlign:!0},allowSampleSwfs:!0,allowUrlLoading:!1})}));
