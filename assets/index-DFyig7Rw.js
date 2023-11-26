const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ruffle_web-wasm_extensions-Bks4oJKl.js","./ruffle-imports-CztXuSei.js","./ruffle_web-CCpmjeeG.js"])))=>i.map(i=>d[i]);
var um=Object.defineProperty;var cm=(s,i,o)=>i in s?um(s,i,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[i]=o;var ha=(s,i,o)=>cm(s,typeof i!="symbol"?i+"":i,o);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))u(d);new MutationObserver(d=>{for(const f of d)if(f.type==="childList")for(const v of f.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&u(v)}).observe(document,{childList:!0,subtree:!0});function o(d){const f={};return d.integrity&&(f.integrity=d.integrity),d.referrerPolicy&&(f.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?f.credentials="include":d.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function u(d){if(d.ep)return;d.ep=!0;const f=o(d);fetch(d.href,f)}})();function Kd(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var yl={exports:{}},Hr={},kl={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ed;function dm(){if(ed)return Y;ed=1;var s=Symbol.for("react.element"),i=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),v=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),R=Symbol.for("react.memo"),O=Symbol.for("react.lazy"),q=Symbol.iterator;function K(w){return w===null||typeof w!="object"?null:(w=q&&w[q]||w["@@iterator"],typeof w=="function"?w:null)}var Q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ne=Object.assign,H={};function Z(w,j,G){this.props=w,this.context=j,this.refs=H,this.updater=G||Q}Z.prototype.isReactComponent={},Z.prototype.setState=function(w,j){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,j,"setState")},Z.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function Ie(){}Ie.prototype=Z.prototype;function De(w,j,G){this.props=w,this.context=j,this.refs=H,this.updater=G||Q}var fe=De.prototype=new Ie;fe.constructor=De,ne(fe,Z.prototype),fe.isPureReactComponent=!0;var J=Array.isArray,Se=Object.prototype.hasOwnProperty,Re={current:null},le={key:!0,ref:!0,__self:!0,__source:!0};function pe(w,j,G){var X,ie={},ae=null,he=null;if(j!=null)for(X in j.ref!==void 0&&(he=j.ref),j.key!==void 0&&(ae=""+j.key),j)Se.call(j,X)&&!le.hasOwnProperty(X)&&(ie[X]=j[X]);var ue=arguments.length-2;if(ue===1)ie.children=G;else if(1<ue){for(var ke=Array(ue),sn=0;sn<ue;sn++)ke[sn]=arguments[sn+2];ie.children=ke}if(w&&w.defaultProps)for(X in ue=w.defaultProps,ue)ie[X]===void 0&&(ie[X]=ue[X]);return{$$typeof:s,type:w,key:ae,ref:he,props:ie,_owner:Re.current}}function _(w,j){return{$$typeof:s,type:w.type,key:j,ref:w.ref,props:w.props,_owner:w._owner}}function $(w){return typeof w=="object"&&w!==null&&w.$$typeof===s}function re(w){var j={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(G){return j[G]})}var $e=/\/+/g;function Me(w,j){return typeof w=="object"&&w!==null&&w.key!=null?re(""+w.key):j.toString(36)}function Ce(w,j,G,X,ie){var ae=typeof w;(ae==="undefined"||ae==="boolean")&&(w=null);var he=!1;if(w===null)he=!0;else switch(ae){case"string":case"number":he=!0;break;case"object":switch(w.$$typeof){case s:case i:he=!0}}if(he)return he=w,ie=ie(he),w=X===""?"."+Me(he,0):X,J(ie)?(G="",w!=null&&(G=w.replace($e,"$&/")+"/"),Ce(ie,j,G,"",function(sn){return sn})):ie!=null&&($(ie)&&(ie=_(ie,G+(!ie.key||he&&he.key===ie.key?"":(""+ie.key).replace($e,"$&/")+"/")+w)),j.push(ie)),1;if(he=0,X=X===""?".":X+":",J(w))for(var ue=0;ue<w.length;ue++){ae=w[ue];var ke=X+Me(ae,ue);he+=Ce(ae,j,G,ke,ie)}else if(ke=K(w),typeof ke=="function")for(w=ke.call(w),ue=0;!(ae=w.next()).done;)ae=ae.value,ke=X+Me(ae,ue++),he+=Ce(ae,j,G,ke,ie);else if(ae==="object")throw j=String(w),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.");return he}function Cn(w,j,G){if(w==null)return w;var X=[],ie=0;return Ce(w,X,"","",function(ae){return j.call(G,ae,ie++)}),X}function en(w){if(w._status===-1){var j=w._result;j=j(),j.then(function(G){(w._status===0||w._status===-1)&&(w._status=1,w._result=G)},function(G){(w._status===0||w._status===-1)&&(w._status=2,w._result=G)}),w._status===-1&&(w._status=0,w._result=j)}if(w._status===1)return w._result.default;throw w._result}var Pe={current:null},A={transition:null},B={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:A,ReactCurrentOwner:Re};function I(){throw Error("act(...) is not supported in production builds of React.")}return Y.Children={map:Cn,forEach:function(w,j,G){Cn(w,function(){j.apply(this,arguments)},G)},count:function(w){var j=0;return Cn(w,function(){j++}),j},toArray:function(w){return Cn(w,function(j){return j})||[]},only:function(w){if(!$(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},Y.Component=Z,Y.Fragment=o,Y.Profiler=d,Y.PureComponent=De,Y.StrictMode=u,Y.Suspense=x,Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B,Y.act=I,Y.cloneElement=function(w,j,G){if(w==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+w+".");var X=ne({},w.props),ie=w.key,ae=w.ref,he=w._owner;if(j!=null){if(j.ref!==void 0&&(ae=j.ref,he=Re.current),j.key!==void 0&&(ie=""+j.key),w.type&&w.type.defaultProps)var ue=w.type.defaultProps;for(ke in j)Se.call(j,ke)&&!le.hasOwnProperty(ke)&&(X[ke]=j[ke]===void 0&&ue!==void 0?ue[ke]:j[ke])}var ke=arguments.length-2;if(ke===1)X.children=G;else if(1<ke){ue=Array(ke);for(var sn=0;sn<ke;sn++)ue[sn]=arguments[sn+2];X.children=ue}return{$$typeof:s,type:w.type,key:ie,ref:ae,props:X,_owner:he}},Y.createContext=function(w){return w={$$typeof:v,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},w.Provider={$$typeof:f,_context:w},w.Consumer=w},Y.createElement=pe,Y.createFactory=function(w){var j=pe.bind(null,w);return j.type=w,j},Y.createRef=function(){return{current:null}},Y.forwardRef=function(w){return{$$typeof:g,render:w}},Y.isValidElement=$,Y.lazy=function(w){return{$$typeof:O,_payload:{_status:-1,_result:w},_init:en}},Y.memo=function(w,j){return{$$typeof:R,type:w,compare:j===void 0?null:j}},Y.startTransition=function(w){var j=A.transition;A.transition={};try{w()}finally{A.transition=j}},Y.unstable_act=I,Y.useCallback=function(w,j){return Pe.current.useCallback(w,j)},Y.useContext=function(w){return Pe.current.useContext(w)},Y.useDebugValue=function(){},Y.useDeferredValue=function(w){return Pe.current.useDeferredValue(w)},Y.useEffect=function(w,j){return Pe.current.useEffect(w,j)},Y.useId=function(){return Pe.current.useId()},Y.useImperativeHandle=function(w,j,G){return Pe.current.useImperativeHandle(w,j,G)},Y.useInsertionEffect=function(w,j){return Pe.current.useInsertionEffect(w,j)},Y.useLayoutEffect=function(w,j){return Pe.current.useLayoutEffect(w,j)},Y.useMemo=function(w,j){return Pe.current.useMemo(w,j)},Y.useReducer=function(w,j,G){return Pe.current.useReducer(w,j,G)},Y.useRef=function(w){return Pe.current.useRef(w)},Y.useState=function(w){return Pe.current.useState(w)},Y.useSyncExternalStore=function(w,j,G){return Pe.current.useSyncExternalStore(w,j,G)},Y.useTransition=function(){return Pe.current.useTransition()},Y.version="18.3.1",Y}var nd;function Xl(){return nd||(nd=1,kl.exports=dm()),kl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var td;function fm(){if(td)return Hr;td=1;var s=Xl(),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,d=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function v(g,x,R){var O,q={},K=null,Q=null;R!==void 0&&(K=""+R),x.key!==void 0&&(K=""+x.key),x.ref!==void 0&&(Q=x.ref);for(O in x)u.call(x,O)&&!f.hasOwnProperty(O)&&(q[O]=x[O]);if(g&&g.defaultProps)for(O in x=g.defaultProps,x)q[O]===void 0&&(q[O]=x[O]);return{$$typeof:i,type:g,key:K,ref:Q,props:q,_owner:d.current}}return Hr.Fragment=o,Hr.jsx=v,Hr.jsxs=v,Hr}var rd;function pm(){return rd||(rd=1,yl.exports=fm()),yl.exports}var D=pm(),Qe=Xl();const $l=Kd(Qe);var va={},bl={exports:{}},ln={},xl={exports:{}},Sl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var id;function mm(){return id||(id=1,function(s){function i(A,B){var I=A.length;A.push(B);e:for(;0<I;){var w=I-1>>>1,j=A[w];if(0<d(j,B))A[w]=B,A[I]=j,I=w;else break e}}function o(A){return A.length===0?null:A[0]}function u(A){if(A.length===0)return null;var B=A[0],I=A.pop();if(I!==B){A[0]=I;e:for(var w=0,j=A.length,G=j>>>1;w<G;){var X=2*(w+1)-1,ie=A[X],ae=X+1,he=A[ae];if(0>d(ie,I))ae<j&&0>d(he,ie)?(A[w]=he,A[ae]=I,w=ae):(A[w]=ie,A[X]=I,w=X);else if(ae<j&&0>d(he,I))A[w]=he,A[ae]=I,w=ae;else break e}}return B}function d(A,B){var I=A.sortIndex-B.sortIndex;return I!==0?I:A.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var f=performance;s.unstable_now=function(){return f.now()}}else{var v=Date,g=v.now();s.unstable_now=function(){return v.now()-g}}var x=[],R=[],O=1,q=null,K=3,Q=!1,ne=!1,H=!1,Z=typeof setTimeout=="function"?setTimeout:null,Ie=typeof clearTimeout=="function"?clearTimeout:null,De=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function fe(A){for(var B=o(R);B!==null;){if(B.callback===null)u(R);else if(B.startTime<=A)u(R),B.sortIndex=B.expirationTime,i(x,B);else break;B=o(R)}}function J(A){if(H=!1,fe(A),!ne)if(o(x)!==null)ne=!0,en(Se);else{var B=o(R);B!==null&&Pe(J,B.startTime-A)}}function Se(A,B){ne=!1,H&&(H=!1,Ie(pe),pe=-1),Q=!0;var I=K;try{for(fe(B),q=o(x);q!==null&&(!(q.expirationTime>B)||A&&!re());){var w=q.callback;if(typeof w=="function"){q.callback=null,K=q.priorityLevel;var j=w(q.expirationTime<=B);B=s.unstable_now(),typeof j=="function"?q.callback=j:q===o(x)&&u(x),fe(B)}else u(x);q=o(x)}if(q!==null)var G=!0;else{var X=o(R);X!==null&&Pe(J,X.startTime-B),G=!1}return G}finally{q=null,K=I,Q=!1}}var Re=!1,le=null,pe=-1,_=5,$=-1;function re(){return!(s.unstable_now()-$<_)}function $e(){if(le!==null){var A=s.unstable_now();$=A;var B=!0;try{B=le(!0,A)}finally{B?Me():(Re=!1,le=null)}}else Re=!1}var Me;if(typeof De=="function")Me=function(){De($e)};else if(typeof MessageChannel<"u"){var Ce=new MessageChannel,Cn=Ce.port2;Ce.port1.onmessage=$e,Me=function(){Cn.postMessage(null)}}else Me=function(){Z($e,0)};function en(A){le=A,Re||(Re=!0,Me())}function Pe(A,B){pe=Z(function(){A(s.unstable_now())},B)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(A){A.callback=null},s.unstable_continueExecution=function(){ne||Q||(ne=!0,en(Se))},s.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<A?Math.floor(1e3/A):5},s.unstable_getCurrentPriorityLevel=function(){return K},s.unstable_getFirstCallbackNode=function(){return o(x)},s.unstable_next=function(A){switch(K){case 1:case 2:case 3:var B=3;break;default:B=K}var I=K;K=B;try{return A()}finally{K=I}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(A,B){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var I=K;K=A;try{return B()}finally{K=I}},s.unstable_scheduleCallback=function(A,B,I){var w=s.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?w+I:w):I=w,A){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=I+j,A={id:O++,callback:B,priorityLevel:A,startTime:I,expirationTime:j,sortIndex:-1},I>w?(A.sortIndex=I,i(R,A),o(x)===null&&A===o(R)&&(H?(Ie(pe),pe=-1):H=!0,Pe(J,I-w))):(A.sortIndex=j,i(x,A),ne||Q||(ne=!0,en(Se))),A},s.unstable_shouldYield=re,s.unstable_wrapCallback=function(A){var B=K;return function(){var I=K;K=B;try{return A.apply(this,arguments)}finally{K=I}}}}(Sl)),Sl}var ad;function hm(){return ad||(ad=1,xl.exports=mm()),xl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var od;function vm(){if(od)return ln;od=1;var s=Xl(),i=hm();function o(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=new Set,d={};function f(e,n){v(e,n),v(e+"Capture",n)}function v(e,n){for(d[e]=n,e=0;e<n.length;e++)u.add(n[e])}var g=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),x=Object.prototype.hasOwnProperty,R=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,O={},q={};function K(e){return x.call(q,e)?!0:x.call(O,e)?!1:R.test(e)?q[e]=!0:(O[e]=!0,!1)}function Q(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ne(e,n,t,r){if(n===null||typeof n>"u"||Q(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function H(e,n,t,r,a,l,c){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=c}var Z={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Z[e]=new H(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Z[n]=new H(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){Z[e]=new H(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Z[e]=new H(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Z[e]=new H(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){Z[e]=new H(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){Z[e]=new H(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){Z[e]=new H(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){Z[e]=new H(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ie=/[\-:]([a-z])/g;function De(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Ie,De);Z[n]=new H(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Ie,De);Z[n]=new H(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Ie,De);Z[n]=new H(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){Z[e]=new H(e,1,!1,e.toLowerCase(),null,!1,!1)}),Z.xlinkHref=new H("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){Z[e]=new H(e,1,!1,e.toLowerCase(),null,!0,!0)});function fe(e,n,t,r){var a=Z.hasOwnProperty(n)?Z[n]:null;(a!==null?a.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(ne(n,t,a,r)&&(t=null),r||a===null?K(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):a.mustUseProperty?e[a.propertyName]=t===null?a.type===3?!1:"":t:(n=a.attributeName,r=a.attributeNamespace,t===null?e.removeAttribute(n):(a=a.type,t=a===3||a===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var J=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Se=Symbol.for("react.element"),Re=Symbol.for("react.portal"),le=Symbol.for("react.fragment"),pe=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),$=Symbol.for("react.provider"),re=Symbol.for("react.context"),$e=Symbol.for("react.forward_ref"),Me=Symbol.for("react.suspense"),Ce=Symbol.for("react.suspense_list"),Cn=Symbol.for("react.memo"),en=Symbol.for("react.lazy"),Pe=Symbol.for("react.offscreen"),A=Symbol.iterator;function B(e){return e===null||typeof e!="object"?null:(e=A&&e[A]||e["@@iterator"],typeof e=="function"?e:null)}var I=Object.assign,w;function j(e){if(w===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);w=n&&n[1]||""}return`
`+w+e}var G=!1;function X(e,n){if(!e||G)return"";G=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(b){var r=b}Reflect.construct(e,[],n)}else{try{n.call()}catch(b){r=b}e.call(n.prototype)}else{try{throw Error()}catch(b){r=b}e()}}catch(b){if(b&&r&&typeof b.stack=="string"){for(var a=b.stack.split(`
`),l=r.stack.split(`
`),c=a.length-1,p=l.length-1;1<=c&&0<=p&&a[c]!==l[p];)p--;for(;1<=c&&0<=p;c--,p--)if(a[c]!==l[p]){if(c!==1||p!==1)do if(c--,p--,0>p||a[c]!==l[p]){var m=`
`+a[c].replace(" at new "," at ");return e.displayName&&m.includes("<anonymous>")&&(m=m.replace("<anonymous>",e.displayName)),m}while(1<=c&&0<=p);break}}}finally{G=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?j(e):""}function ie(e){switch(e.tag){case 5:return j(e.type);case 16:return j("Lazy");case 13:return j("Suspense");case 19:return j("SuspenseList");case 0:case 2:case 15:return e=X(e.type,!1),e;case 11:return e=X(e.type.render,!1),e;case 1:return e=X(e.type,!0),e;default:return""}}function ae(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case le:return"Fragment";case Re:return"Portal";case _:return"Profiler";case pe:return"StrictMode";case Me:return"Suspense";case Ce:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case re:return(e.displayName||"Context")+".Consumer";case $:return(e._context.displayName||"Context")+".Provider";case $e:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Cn:return n=e.displayName||null,n!==null?n:ae(e.type)||"Memo";case en:n=e._payload,e=e._init;try{return ae(e(n))}catch{}}return null}function he(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ae(n);case 8:return n===pe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function ue(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ke(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function sn(e){var n=ke(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var a=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return a.call(this)},set:function(c){r=""+c,l.call(this,c)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(c){r=""+c},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ai(e){e._valueTracker||(e._valueTracker=sn(e))}function os(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=ke(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function oi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function za(e,n){var t=n.checked;return I({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function ls(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=ue(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function ss(e,n){n=n.checked,n!=null&&fe(e,"checked",n,!1)}function ja(e,n){ss(e,n);var t=ue(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Ea(e,n.type,t):n.hasOwnProperty("defaultValue")&&Ea(e,n.type,ue(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function us(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Ea(e,n,t){(n!=="number"||oi(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var lr=Array.isArray;function Pt(e,n,t,r){if(e=e.options,n){n={};for(var a=0;a<t.length;a++)n["$"+t[a]]=!0;for(t=0;t<e.length;t++)a=n.hasOwnProperty("$"+e[t].value),e[t].selected!==a&&(e[t].selected=a),a&&r&&(e[t].defaultSelected=!0)}else{for(t=""+ue(t),n=null,a=0;a<e.length;a++){if(e[a].value===t){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}n!==null||e[a].disabled||(n=e[a])}n!==null&&(n.selected=!0)}}function Ca(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(o(91));return I({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function cs(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(o(92));if(lr(t)){if(1<t.length)throw Error(o(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:ue(t)}}function ds(e,n){var t=ue(n.value),r=ue(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function fs(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function ps(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pa(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?ps(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var li,ms=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,a){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,a)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(li=li||document.createElement("div"),li.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=li.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function sr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var ur={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pf=["Webkit","ms","Moz","O"];Object.keys(ur).forEach(function(e){pf.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),ur[n]=ur[e]})});function hs(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||ur.hasOwnProperty(e)&&ur[e]?(""+n).trim():n+"px"}function vs(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,a=hs(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,a):e[t]=a}}var mf=I({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _a(e,n){if(n){if(mf[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(o(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(o(61))}if(n.style!=null&&typeof n.style!="object")throw Error(o(62))}}function Aa(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fa=null;function Da(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ta=null,_t=null,At=null;function gs(e){if(e=Ar(e)){if(typeof Ta!="function")throw Error(o(280));var n=e.stateNode;n&&(n=_i(n),Ta(e.stateNode,e.type,n))}}function ws(e){_t?At?At.push(e):At=[e]:_t=e}function ys(){if(_t){var e=_t,n=At;if(At=_t=null,gs(e),n)for(e=0;e<n.length;e++)gs(n[e])}}function ks(e,n){return e(n)}function bs(){}var Oa=!1;function xs(e,n,t){if(Oa)return e(n,t);Oa=!0;try{return ks(e,n,t)}finally{Oa=!1,(_t!==null||At!==null)&&(bs(),ys())}}function cr(e,n){var t=e.stateNode;if(t===null)return null;var r=_i(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(o(231,n,typeof t));return t}var Ia=!1;if(g)try{var dr={};Object.defineProperty(dr,"passive",{get:function(){Ia=!0}}),window.addEventListener("test",dr,dr),window.removeEventListener("test",dr,dr)}catch{Ia=!1}function hf(e,n,t,r,a,l,c,p,m){var b=Array.prototype.slice.call(arguments,3);try{n.apply(t,b)}catch(E){this.onError(E)}}var fr=!1,si=null,ui=!1,Ma=null,vf={onError:function(e){fr=!0,si=e}};function gf(e,n,t,r,a,l,c,p,m){fr=!1,si=null,hf.apply(vf,arguments)}function wf(e,n,t,r,a,l,c,p,m){if(gf.apply(this,arguments),fr){if(fr){var b=si;fr=!1,si=null}else throw Error(o(198));ui||(ui=!0,Ma=b)}}function mt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Ss(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Rs(e){if(mt(e)!==e)throw Error(o(188))}function yf(e){var n=e.alternate;if(!n){if(n=mt(e),n===null)throw Error(o(188));return n!==e?null:e}for(var t=e,r=n;;){var a=t.return;if(a===null)break;var l=a.alternate;if(l===null){if(r=a.return,r!==null){t=r;continue}break}if(a.child===l.child){for(l=a.child;l;){if(l===t)return Rs(a),e;if(l===r)return Rs(a),n;l=l.sibling}throw Error(o(188))}if(t.return!==r.return)t=a,r=l;else{for(var c=!1,p=a.child;p;){if(p===t){c=!0,t=a,r=l;break}if(p===r){c=!0,r=a,t=l;break}p=p.sibling}if(!c){for(p=l.child;p;){if(p===t){c=!0,t=l,r=a;break}if(p===r){c=!0,r=l,t=a;break}p=p.sibling}if(!c)throw Error(o(189))}}if(t.alternate!==r)throw Error(o(190))}if(t.tag!==3)throw Error(o(188));return t.stateNode.current===t?e:n}function zs(e){return e=yf(e),e!==null?js(e):null}function js(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=js(e);if(n!==null)return n;e=e.sibling}return null}var Es=i.unstable_scheduleCallback,Cs=i.unstable_cancelCallback,kf=i.unstable_shouldYield,bf=i.unstable_requestPaint,Ae=i.unstable_now,xf=i.unstable_getCurrentPriorityLevel,La=i.unstable_ImmediatePriority,Ps=i.unstable_UserBlockingPriority,ci=i.unstable_NormalPriority,Sf=i.unstable_LowPriority,_s=i.unstable_IdlePriority,di=null,Pn=null;function Rf(e){if(Pn&&typeof Pn.onCommitFiberRoot=="function")try{Pn.onCommitFiberRoot(di,e,void 0,(e.current.flags&128)===128)}catch{}}var kn=Math.clz32?Math.clz32:Ef,zf=Math.log,jf=Math.LN2;function Ef(e){return e>>>=0,e===0?32:31-(zf(e)/jf|0)|0}var fi=64,pi=4194304;function pr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function mi(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,a=e.suspendedLanes,l=e.pingedLanes,c=t&268435455;if(c!==0){var p=c&~a;p!==0?r=pr(p):(l&=c,l!==0&&(r=pr(l)))}else c=t&~a,c!==0?r=pr(c):l!==0&&(r=pr(l));if(r===0)return 0;if(n!==0&&n!==r&&!(n&a)&&(a=r&-r,l=n&-n,a>=l||a===16&&(l&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-kn(n),a=1<<t,r|=e[t],n&=~a;return r}function Cf(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pf(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,l=e.pendingLanes;0<l;){var c=31-kn(l),p=1<<c,m=a[c];m===-1?(!(p&t)||p&r)&&(a[c]=Cf(p,n)):m<=n&&(e.expiredLanes|=p),l&=~p}}function Na(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function As(){var e=fi;return fi<<=1,!(fi&4194240)&&(fi=64),e}function $a(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function mr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-kn(n),e[n]=t}function _f(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var a=31-kn(t),l=1<<a;n[a]=0,r[a]=-1,e[a]=-1,t&=~l}}function qa(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-kn(t),a=1<<r;a&n|e[r]&n&&(e[r]|=n),t&=~a}}var ce=0;function Fs(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ds,Wa,Ts,Os,Is,Ua=!1,hi=[],Qn=null,Kn=null,Jn=null,hr=new Map,vr=new Map,Zn=[],Af="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ms(e,n){switch(e){case"focusin":case"focusout":Qn=null;break;case"dragenter":case"dragleave":Kn=null;break;case"mouseover":case"mouseout":Jn=null;break;case"pointerover":case"pointerout":hr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":vr.delete(n.pointerId)}}function gr(e,n,t,r,a,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[a]},n!==null&&(n=Ar(n),n!==null&&Wa(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,a!==null&&n.indexOf(a)===-1&&n.push(a),e)}function Ff(e,n,t,r,a){switch(n){case"focusin":return Qn=gr(Qn,e,n,t,r,a),!0;case"dragenter":return Kn=gr(Kn,e,n,t,r,a),!0;case"mouseover":return Jn=gr(Jn,e,n,t,r,a),!0;case"pointerover":var l=a.pointerId;return hr.set(l,gr(hr.get(l)||null,e,n,t,r,a)),!0;case"gotpointercapture":return l=a.pointerId,vr.set(l,gr(vr.get(l)||null,e,n,t,r,a)),!0}return!1}function Ls(e){var n=ht(e.target);if(n!==null){var t=mt(n);if(t!==null){if(n=t.tag,n===13){if(n=Ss(t),n!==null){e.blockedOn=n,Is(e.priority,function(){Ts(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vi(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Va(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Fa=r,t.target.dispatchEvent(r),Fa=null}else return n=Ar(t),n!==null&&Wa(n),e.blockedOn=t,!1;n.shift()}return!0}function Ns(e,n,t){vi(e)&&t.delete(n)}function Df(){Ua=!1,Qn!==null&&vi(Qn)&&(Qn=null),Kn!==null&&vi(Kn)&&(Kn=null),Jn!==null&&vi(Jn)&&(Jn=null),hr.forEach(Ns),vr.forEach(Ns)}function wr(e,n){e.blockedOn===n&&(e.blockedOn=null,Ua||(Ua=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Df)))}function yr(e){function n(a){return wr(a,e)}if(0<hi.length){wr(hi[0],e);for(var t=1;t<hi.length;t++){var r=hi[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Qn!==null&&wr(Qn,e),Kn!==null&&wr(Kn,e),Jn!==null&&wr(Jn,e),hr.forEach(n),vr.forEach(n),t=0;t<Zn.length;t++)r=Zn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Zn.length&&(t=Zn[0],t.blockedOn===null);)Ls(t),t.blockedOn===null&&Zn.shift()}var Ft=J.ReactCurrentBatchConfig,gi=!0;function Tf(e,n,t,r){var a=ce,l=Ft.transition;Ft.transition=null;try{ce=1,Ba(e,n,t,r)}finally{ce=a,Ft.transition=l}}function Of(e,n,t,r){var a=ce,l=Ft.transition;Ft.transition=null;try{ce=4,Ba(e,n,t,r)}finally{ce=a,Ft.transition=l}}function Ba(e,n,t,r){if(gi){var a=Va(e,n,t,r);if(a===null)so(e,n,r,wi,t),Ms(e,r);else if(Ff(a,e,n,t,r))r.stopPropagation();else if(Ms(e,r),n&4&&-1<Af.indexOf(e)){for(;a!==null;){var l=Ar(a);if(l!==null&&Ds(l),l=Va(e,n,t,r),l===null&&so(e,n,r,wi,t),l===a)break;a=l}a!==null&&r.stopPropagation()}else so(e,n,r,null,t)}}var wi=null;function Va(e,n,t,r){if(wi=null,e=Da(r),e=ht(e),e!==null)if(n=mt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Ss(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return wi=e,null}function $s(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xf()){case La:return 1;case Ps:return 4;case ci:case Sf:return 16;case _s:return 536870912;default:return 16}default:return 16}}var Gn=null,Ha=null,yi=null;function qs(){if(yi)return yi;var e,n=Ha,t=n.length,r,a="value"in Gn?Gn.value:Gn.textContent,l=a.length;for(e=0;e<t&&n[e]===a[e];e++);var c=t-e;for(r=1;r<=c&&n[t-r]===a[l-r];r++);return yi=a.slice(e,1<r?1-r:void 0)}function ki(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function bi(){return!0}function Ws(){return!1}function un(e){function n(t,r,a,l,c){this._reactName=t,this._targetInst=a,this.type=r,this.nativeEvent=l,this.target=c,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(t=e[p],this[p]=t?t(l):l[p]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?bi:Ws,this.isPropagationStopped=Ws,this}return I(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=bi)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=bi)},persist:function(){},isPersistent:bi}),n}var Dt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qa=un(Dt),kr=I({},Dt,{view:0,detail:0}),If=un(kr),Ka,Ja,br,xi=I({},kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ga,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==br&&(br&&e.type==="mousemove"?(Ka=e.screenX-br.screenX,Ja=e.screenY-br.screenY):Ja=Ka=0,br=e),Ka)},movementY:function(e){return"movementY"in e?e.movementY:Ja}}),Us=un(xi),Mf=I({},xi,{dataTransfer:0}),Lf=un(Mf),Nf=I({},kr,{relatedTarget:0}),Za=un(Nf),$f=I({},Dt,{animationName:0,elapsedTime:0,pseudoElement:0}),qf=un($f),Wf=I({},Dt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Uf=un(Wf),Bf=I({},Dt,{data:0}),Bs=un(Bf),Vf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kf(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Qf[e])?!!n[e]:!1}function Ga(){return Kf}var Jf=I({},kr,{key:function(e){if(e.key){var n=Vf[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ki(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Hf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ga,charCode:function(e){return e.type==="keypress"?ki(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ki(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zf=un(Jf),Gf=I({},xi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vs=un(Gf),Yf=I({},kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ga}),Xf=un(Yf),ep=I({},Dt,{propertyName:0,elapsedTime:0,pseudoElement:0}),np=un(ep),tp=I({},xi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),rp=un(tp),ip=[9,13,27,32],Ya=g&&"CompositionEvent"in window,xr=null;g&&"documentMode"in document&&(xr=document.documentMode);var ap=g&&"TextEvent"in window&&!xr,Hs=g&&(!Ya||xr&&8<xr&&11>=xr),Qs=" ",Ks=!1;function Js(e,n){switch(e){case"keyup":return ip.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Tt=!1;function op(e,n){switch(e){case"compositionend":return Zs(n);case"keypress":return n.which!==32?null:(Ks=!0,Qs);case"textInput":return e=n.data,e===Qs&&Ks?null:e;default:return null}}function lp(e,n){if(Tt)return e==="compositionend"||!Ya&&Js(e,n)?(e=qs(),yi=Ha=Gn=null,Tt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Hs&&n.locale!=="ko"?null:n.data;default:return null}}var sp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gs(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!sp[e.type]:n==="textarea"}function Ys(e,n,t,r){ws(r),n=Ei(n,"onChange"),0<n.length&&(t=new Qa("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Sr=null,Rr=null;function up(e){vu(e,0)}function Si(e){var n=Nt(e);if(os(n))return e}function cp(e,n){if(e==="change")return n}var Xs=!1;if(g){var Xa;if(g){var eo="oninput"in document;if(!eo){var eu=document.createElement("div");eu.setAttribute("oninput","return;"),eo=typeof eu.oninput=="function"}Xa=eo}else Xa=!1;Xs=Xa&&(!document.documentMode||9<document.documentMode)}function nu(){Sr&&(Sr.detachEvent("onpropertychange",tu),Rr=Sr=null)}function tu(e){if(e.propertyName==="value"&&Si(Rr)){var n=[];Ys(n,Rr,e,Da(e)),xs(up,n)}}function dp(e,n,t){e==="focusin"?(nu(),Sr=n,Rr=t,Sr.attachEvent("onpropertychange",tu)):e==="focusout"&&nu()}function fp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Si(Rr)}function pp(e,n){if(e==="click")return Si(n)}function mp(e,n){if(e==="input"||e==="change")return Si(n)}function hp(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var bn=typeof Object.is=="function"?Object.is:hp;function zr(e,n){if(bn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var a=t[r];if(!x.call(n,a)||!bn(e[a],n[a]))return!1}return!0}function ru(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function iu(e,n){var t=ru(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=ru(t)}}function au(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?au(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function ou(){for(var e=window,n=oi();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=oi(e.document)}return n}function no(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function vp(e){var n=ou(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&au(t.ownerDocument.documentElement,t)){if(r!==null&&no(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var a=t.textContent.length,l=Math.min(r.start,a);r=r.end===void 0?l:Math.min(r.end,a),!e.extend&&l>r&&(a=r,r=l,l=a),a=iu(t,l);var c=iu(t,r);a&&c&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==c.node||e.focusOffset!==c.offset)&&(n=n.createRange(),n.setStart(a.node,a.offset),e.removeAllRanges(),l>r?(e.addRange(n),e.extend(c.node,c.offset)):(n.setEnd(c.node,c.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var gp=g&&"documentMode"in document&&11>=document.documentMode,Ot=null,to=null,jr=null,ro=!1;function lu(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ro||Ot==null||Ot!==oi(r)||(r=Ot,"selectionStart"in r&&no(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),jr&&zr(jr,r)||(jr=r,r=Ei(to,"onSelect"),0<r.length&&(n=new Qa("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Ot)))}function Ri(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var It={animationend:Ri("Animation","AnimationEnd"),animationiteration:Ri("Animation","AnimationIteration"),animationstart:Ri("Animation","AnimationStart"),transitionend:Ri("Transition","TransitionEnd")},io={},su={};g&&(su=document.createElement("div").style,"AnimationEvent"in window||(delete It.animationend.animation,delete It.animationiteration.animation,delete It.animationstart.animation),"TransitionEvent"in window||delete It.transitionend.transition);function zi(e){if(io[e])return io[e];if(!It[e])return e;var n=It[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in su)return io[e]=n[t];return e}var uu=zi("animationend"),cu=zi("animationiteration"),du=zi("animationstart"),fu=zi("transitionend"),pu=new Map,mu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yn(e,n){pu.set(e,n),f(n,[e])}for(var ao=0;ao<mu.length;ao++){var oo=mu[ao],wp=oo.toLowerCase(),yp=oo[0].toUpperCase()+oo.slice(1);Yn(wp,"on"+yp)}Yn(uu,"onAnimationEnd"),Yn(cu,"onAnimationIteration"),Yn(du,"onAnimationStart"),Yn("dblclick","onDoubleClick"),Yn("focusin","onFocus"),Yn("focusout","onBlur"),Yn(fu,"onTransitionEnd"),v("onMouseEnter",["mouseout","mouseover"]),v("onMouseLeave",["mouseout","mouseover"]),v("onPointerEnter",["pointerout","pointerover"]),v("onPointerLeave",["pointerout","pointerover"]),f("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),f("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),f("onBeforeInput",["compositionend","keypress","textInput","paste"]),f("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Er="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Er));function hu(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,wf(r,n,void 0,e),e.currentTarget=null}function vu(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],a=r.event;r=r.listeners;e:{var l=void 0;if(n)for(var c=r.length-1;0<=c;c--){var p=r[c],m=p.instance,b=p.currentTarget;if(p=p.listener,m!==l&&a.isPropagationStopped())break e;hu(a,p,b),l=m}else for(c=0;c<r.length;c++){if(p=r[c],m=p.instance,b=p.currentTarget,p=p.listener,m!==l&&a.isPropagationStopped())break e;hu(a,p,b),l=m}}}if(ui)throw e=Ma,ui=!1,Ma=null,e}function we(e,n){var t=n[ho];t===void 0&&(t=n[ho]=new Set);var r=e+"__bubble";t.has(r)||(gu(n,e,2,!1),t.add(r))}function lo(e,n,t){var r=0;n&&(r|=4),gu(t,e,r,n)}var ji="_reactListening"+Math.random().toString(36).slice(2);function Cr(e){if(!e[ji]){e[ji]=!0,u.forEach(function(t){t!=="selectionchange"&&(kp.has(t)||lo(t,!1,e),lo(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ji]||(n[ji]=!0,lo("selectionchange",!1,n))}}function gu(e,n,t,r){switch($s(n)){case 1:var a=Tf;break;case 4:a=Of;break;default:a=Ba}t=a.bind(null,n,t,e),a=void 0,!Ia||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(n,t,{capture:!0,passive:a}):e.addEventListener(n,t,!0):a!==void 0?e.addEventListener(n,t,{passive:a}):e.addEventListener(n,t,!1)}function so(e,n,t,r,a){var l=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var c=r.tag;if(c===3||c===4){var p=r.stateNode.containerInfo;if(p===a||p.nodeType===8&&p.parentNode===a)break;if(c===4)for(c=r.return;c!==null;){var m=c.tag;if((m===3||m===4)&&(m=c.stateNode.containerInfo,m===a||m.nodeType===8&&m.parentNode===a))return;c=c.return}for(;p!==null;){if(c=ht(p),c===null)return;if(m=c.tag,m===5||m===6){r=l=c;continue e}p=p.parentNode}}r=r.return}xs(function(){var b=l,E=Da(t),C=[];e:{var z=pu.get(e);if(z!==void 0){var F=Qa,M=e;switch(e){case"keypress":if(ki(t)===0)break e;case"keydown":case"keyup":F=Zf;break;case"focusin":M="focus",F=Za;break;case"focusout":M="blur",F=Za;break;case"beforeblur":case"afterblur":F=Za;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":F=Us;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":F=Lf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":F=Xf;break;case uu:case cu:case du:F=qf;break;case fu:F=np;break;case"scroll":F=If;break;case"wheel":F=rp;break;case"copy":case"cut":case"paste":F=Uf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":F=Vs}var L=(n&4)!==0,Fe=!L&&e==="scroll",y=L?z!==null?z+"Capture":null:z;L=[];for(var h=b,k;h!==null;){k=h;var P=k.stateNode;if(k.tag===5&&P!==null&&(k=P,y!==null&&(P=cr(h,y),P!=null&&L.push(Pr(h,P,k)))),Fe)break;h=h.return}0<L.length&&(z=new F(z,M,null,t,E),C.push({event:z,listeners:L}))}}if(!(n&7)){e:{if(z=e==="mouseover"||e==="pointerover",F=e==="mouseout"||e==="pointerout",z&&t!==Fa&&(M=t.relatedTarget||t.fromElement)&&(ht(M)||M[Tn]))break e;if((F||z)&&(z=E.window===E?E:(z=E.ownerDocument)?z.defaultView||z.parentWindow:window,F?(M=t.relatedTarget||t.toElement,F=b,M=M?ht(M):null,M!==null&&(Fe=mt(M),M!==Fe||M.tag!==5&&M.tag!==6)&&(M=null)):(F=null,M=b),F!==M)){if(L=Us,P="onMouseLeave",y="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(L=Vs,P="onPointerLeave",y="onPointerEnter",h="pointer"),Fe=F==null?z:Nt(F),k=M==null?z:Nt(M),z=new L(P,h+"leave",F,t,E),z.target=Fe,z.relatedTarget=k,P=null,ht(E)===b&&(L=new L(y,h+"enter",M,t,E),L.target=k,L.relatedTarget=Fe,P=L),Fe=P,F&&M)n:{for(L=F,y=M,h=0,k=L;k;k=Mt(k))h++;for(k=0,P=y;P;P=Mt(P))k++;for(;0<h-k;)L=Mt(L),h--;for(;0<k-h;)y=Mt(y),k--;for(;h--;){if(L===y||y!==null&&L===y.alternate)break n;L=Mt(L),y=Mt(y)}L=null}else L=null;F!==null&&wu(C,z,F,L,!1),M!==null&&Fe!==null&&wu(C,Fe,M,L,!0)}}e:{if(z=b?Nt(b):window,F=z.nodeName&&z.nodeName.toLowerCase(),F==="select"||F==="input"&&z.type==="file")var N=cp;else if(Gs(z))if(Xs)N=mp;else{N=fp;var W=dp}else(F=z.nodeName)&&F.toLowerCase()==="input"&&(z.type==="checkbox"||z.type==="radio")&&(N=pp);if(N&&(N=N(e,b))){Ys(C,N,t,E);break e}W&&W(e,z,b),e==="focusout"&&(W=z._wrapperState)&&W.controlled&&z.type==="number"&&Ea(z,"number",z.value)}switch(W=b?Nt(b):window,e){case"focusin":(Gs(W)||W.contentEditable==="true")&&(Ot=W,to=b,jr=null);break;case"focusout":jr=to=Ot=null;break;case"mousedown":ro=!0;break;case"contextmenu":case"mouseup":case"dragend":ro=!1,lu(C,t,E);break;case"selectionchange":if(gp)break;case"keydown":case"keyup":lu(C,t,E)}var U;if(Ya)e:{switch(e){case"compositionstart":var V="onCompositionStart";break e;case"compositionend":V="onCompositionEnd";break e;case"compositionupdate":V="onCompositionUpdate";break e}V=void 0}else Tt?Js(e,t)&&(V="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(V="onCompositionStart");V&&(Hs&&t.locale!=="ko"&&(Tt||V!=="onCompositionStart"?V==="onCompositionEnd"&&Tt&&(U=qs()):(Gn=E,Ha="value"in Gn?Gn.value:Gn.textContent,Tt=!0)),W=Ei(b,V),0<W.length&&(V=new Bs(V,e,null,t,E),C.push({event:V,listeners:W}),U?V.data=U:(U=Zs(t),U!==null&&(V.data=U)))),(U=ap?op(e,t):lp(e,t))&&(b=Ei(b,"onBeforeInput"),0<b.length&&(E=new Bs("onBeforeInput","beforeinput",null,t,E),C.push({event:E,listeners:b}),E.data=U))}vu(C,n)})}function Pr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Ei(e,n){for(var t=n+"Capture",r=[];e!==null;){var a=e,l=a.stateNode;a.tag===5&&l!==null&&(a=l,l=cr(e,t),l!=null&&r.unshift(Pr(e,l,a)),l=cr(e,n),l!=null&&r.push(Pr(e,l,a))),e=e.return}return r}function Mt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function wu(e,n,t,r,a){for(var l=n._reactName,c=[];t!==null&&t!==r;){var p=t,m=p.alternate,b=p.stateNode;if(m!==null&&m===r)break;p.tag===5&&b!==null&&(p=b,a?(m=cr(t,l),m!=null&&c.unshift(Pr(t,m,p))):a||(m=cr(t,l),m!=null&&c.push(Pr(t,m,p)))),t=t.return}c.length!==0&&e.push({event:n,listeners:c})}var bp=/\r\n?/g,xp=/\u0000|\uFFFD/g;function yu(e){return(typeof e=="string"?e:""+e).replace(bp,`
`).replace(xp,"")}function Ci(e,n,t){if(n=yu(n),yu(e)!==n&&t)throw Error(o(425))}function Pi(){}var uo=null,co=null;function fo(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var po=typeof setTimeout=="function"?setTimeout:void 0,Sp=typeof clearTimeout=="function"?clearTimeout:void 0,ku=typeof Promise=="function"?Promise:void 0,Rp=typeof queueMicrotask=="function"?queueMicrotask:typeof ku<"u"?function(e){return ku.resolve(null).then(e).catch(zp)}:po;function zp(e){setTimeout(function(){throw e})}function mo(e,n){var t=n,r=0;do{var a=t.nextSibling;if(e.removeChild(t),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(r===0){e.removeChild(a),yr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=a}while(t);yr(n)}function Xn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function bu(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Lt=Math.random().toString(36).slice(2),_n="__reactFiber$"+Lt,_r="__reactProps$"+Lt,Tn="__reactContainer$"+Lt,ho="__reactEvents$"+Lt,jp="__reactListeners$"+Lt,Ep="__reactHandles$"+Lt;function ht(e){var n=e[_n];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Tn]||t[_n]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=bu(e);e!==null;){if(t=e[_n])return t;e=bu(e)}return n}e=t,t=e.parentNode}return null}function Ar(e){return e=e[_n]||e[Tn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Nt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function _i(e){return e[_r]||null}var vo=[],$t=-1;function et(e){return{current:e}}function ye(e){0>$t||(e.current=vo[$t],vo[$t]=null,$t--)}function ve(e,n){$t++,vo[$t]=e.current,e.current=n}var nt={},Ke=et(nt),nn=et(!1),vt=nt;function qt(e,n){var t=e.type.contextTypes;if(!t)return nt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var a={},l;for(l in t)a[l]=n[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=a),a}function tn(e){return e=e.childContextTypes,e!=null}function Ai(){ye(nn),ye(Ke)}function xu(e,n,t){if(Ke.current!==nt)throw Error(o(168));ve(Ke,n),ve(nn,t)}function Su(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var a in r)if(!(a in n))throw Error(o(108,he(e)||"Unknown",a));return I({},t,r)}function Fi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||nt,vt=Ke.current,ve(Ke,e),ve(nn,nn.current),!0}function Ru(e,n,t){var r=e.stateNode;if(!r)throw Error(o(169));t?(e=Su(e,n,vt),r.__reactInternalMemoizedMergedChildContext=e,ye(nn),ye(Ke),ve(Ke,e)):ye(nn),ve(nn,t)}var On=null,Di=!1,go=!1;function zu(e){On===null?On=[e]:On.push(e)}function Cp(e){Di=!0,zu(e)}function tt(){if(!go&&On!==null){go=!0;var e=0,n=ce;try{var t=On;for(ce=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}On=null,Di=!1}catch(a){throw On!==null&&(On=On.slice(e+1)),Es(La,tt),a}finally{ce=n,go=!1}}return null}var Wt=[],Ut=0,Ti=null,Oi=0,pn=[],mn=0,gt=null,In=1,Mn="";function wt(e,n){Wt[Ut++]=Oi,Wt[Ut++]=Ti,Ti=e,Oi=n}function ju(e,n,t){pn[mn++]=In,pn[mn++]=Mn,pn[mn++]=gt,gt=e;var r=In;e=Mn;var a=32-kn(r)-1;r&=~(1<<a),t+=1;var l=32-kn(n)+a;if(30<l){var c=a-a%5;l=(r&(1<<c)-1).toString(32),r>>=c,a-=c,In=1<<32-kn(n)+a|t<<a|r,Mn=l+e}else In=1<<l|t<<a|r,Mn=e}function wo(e){e.return!==null&&(wt(e,1),ju(e,1,0))}function yo(e){for(;e===Ti;)Ti=Wt[--Ut],Wt[Ut]=null,Oi=Wt[--Ut],Wt[Ut]=null;for(;e===gt;)gt=pn[--mn],pn[mn]=null,Mn=pn[--mn],pn[mn]=null,In=pn[--mn],pn[mn]=null}var cn=null,dn=null,be=!1,xn=null;function Eu(e,n){var t=wn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Cu(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,cn=e,dn=Xn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,cn=e,dn=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=gt!==null?{id:In,overflow:Mn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=wn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,cn=e,dn=null,!0):!1;default:return!1}}function ko(e){return(e.mode&1)!==0&&(e.flags&128)===0}function bo(e){if(be){var n=dn;if(n){var t=n;if(!Cu(e,n)){if(ko(e))throw Error(o(418));n=Xn(t.nextSibling);var r=cn;n&&Cu(e,n)?Eu(r,t):(e.flags=e.flags&-4097|2,be=!1,cn=e)}}else{if(ko(e))throw Error(o(418));e.flags=e.flags&-4097|2,be=!1,cn=e}}}function Pu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;cn=e}function Ii(e){if(e!==cn)return!1;if(!be)return Pu(e),be=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!fo(e.type,e.memoizedProps)),n&&(n=dn)){if(ko(e))throw _u(),Error(o(418));for(;n;)Eu(e,n),n=Xn(n.nextSibling)}if(Pu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){dn=Xn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}dn=null}}else dn=cn?Xn(e.stateNode.nextSibling):null;return!0}function _u(){for(var e=dn;e;)e=Xn(e.nextSibling)}function Bt(){dn=cn=null,be=!1}function xo(e){xn===null?xn=[e]:xn.push(e)}var Pp=J.ReactCurrentBatchConfig;function Fr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(o(309));var r=t.stateNode}if(!r)throw Error(o(147,e));var a=r,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(c){var p=a.refs;c===null?delete p[l]:p[l]=c},n._stringRef=l,n)}if(typeof e!="string")throw Error(o(284));if(!t._owner)throw Error(o(290,e))}return e}function Mi(e,n){throw e=Object.prototype.toString.call(n),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Au(e){var n=e._init;return n(e._payload)}function Fu(e){function n(y,h){if(e){var k=y.deletions;k===null?(y.deletions=[h],y.flags|=16):k.push(h)}}function t(y,h){if(!e)return null;for(;h!==null;)n(y,h),h=h.sibling;return null}function r(y,h){for(y=new Map;h!==null;)h.key!==null?y.set(h.key,h):y.set(h.index,h),h=h.sibling;return y}function a(y,h){return y=ct(y,h),y.index=0,y.sibling=null,y}function l(y,h,k){return y.index=k,e?(k=y.alternate,k!==null?(k=k.index,k<h?(y.flags|=2,h):k):(y.flags|=2,h)):(y.flags|=1048576,h)}function c(y){return e&&y.alternate===null&&(y.flags|=2),y}function p(y,h,k,P){return h===null||h.tag!==6?(h=pl(k,y.mode,P),h.return=y,h):(h=a(h,k),h.return=y,h)}function m(y,h,k,P){var N=k.type;return N===le?E(y,h,k.props.children,P,k.key):h!==null&&(h.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===en&&Au(N)===h.type)?(P=a(h,k.props),P.ref=Fr(y,h,k),P.return=y,P):(P=la(k.type,k.key,k.props,null,y.mode,P),P.ref=Fr(y,h,k),P.return=y,P)}function b(y,h,k,P){return h===null||h.tag!==4||h.stateNode.containerInfo!==k.containerInfo||h.stateNode.implementation!==k.implementation?(h=ml(k,y.mode,P),h.return=y,h):(h=a(h,k.children||[]),h.return=y,h)}function E(y,h,k,P,N){return h===null||h.tag!==7?(h=jt(k,y.mode,P,N),h.return=y,h):(h=a(h,k),h.return=y,h)}function C(y,h,k){if(typeof h=="string"&&h!==""||typeof h=="number")return h=pl(""+h,y.mode,k),h.return=y,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Se:return k=la(h.type,h.key,h.props,null,y.mode,k),k.ref=Fr(y,null,h),k.return=y,k;case Re:return h=ml(h,y.mode,k),h.return=y,h;case en:var P=h._init;return C(y,P(h._payload),k)}if(lr(h)||B(h))return h=jt(h,y.mode,k,null),h.return=y,h;Mi(y,h)}return null}function z(y,h,k,P){var N=h!==null?h.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return N!==null?null:p(y,h,""+k,P);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Se:return k.key===N?m(y,h,k,P):null;case Re:return k.key===N?b(y,h,k,P):null;case en:return N=k._init,z(y,h,N(k._payload),P)}if(lr(k)||B(k))return N!==null?null:E(y,h,k,P,null);Mi(y,k)}return null}function F(y,h,k,P,N){if(typeof P=="string"&&P!==""||typeof P=="number")return y=y.get(k)||null,p(h,y,""+P,N);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case Se:return y=y.get(P.key===null?k:P.key)||null,m(h,y,P,N);case Re:return y=y.get(P.key===null?k:P.key)||null,b(h,y,P,N);case en:var W=P._init;return F(y,h,k,W(P._payload),N)}if(lr(P)||B(P))return y=y.get(k)||null,E(h,y,P,N,null);Mi(h,P)}return null}function M(y,h,k,P){for(var N=null,W=null,U=h,V=h=0,Ue=null;U!==null&&V<k.length;V++){U.index>V?(Ue=U,U=null):Ue=U.sibling;var oe=z(y,U,k[V],P);if(oe===null){U===null&&(U=Ue);break}e&&U&&oe.alternate===null&&n(y,U),h=l(oe,h,V),W===null?N=oe:W.sibling=oe,W=oe,U=Ue}if(V===k.length)return t(y,U),be&&wt(y,V),N;if(U===null){for(;V<k.length;V++)U=C(y,k[V],P),U!==null&&(h=l(U,h,V),W===null?N=U:W.sibling=U,W=U);return be&&wt(y,V),N}for(U=r(y,U);V<k.length;V++)Ue=F(U,y,V,k[V],P),Ue!==null&&(e&&Ue.alternate!==null&&U.delete(Ue.key===null?V:Ue.key),h=l(Ue,h,V),W===null?N=Ue:W.sibling=Ue,W=Ue);return e&&U.forEach(function(dt){return n(y,dt)}),be&&wt(y,V),N}function L(y,h,k,P){var N=B(k);if(typeof N!="function")throw Error(o(150));if(k=N.call(k),k==null)throw Error(o(151));for(var W=N=null,U=h,V=h=0,Ue=null,oe=k.next();U!==null&&!oe.done;V++,oe=k.next()){U.index>V?(Ue=U,U=null):Ue=U.sibling;var dt=z(y,U,oe.value,P);if(dt===null){U===null&&(U=Ue);break}e&&U&&dt.alternate===null&&n(y,U),h=l(dt,h,V),W===null?N=dt:W.sibling=dt,W=dt,U=Ue}if(oe.done)return t(y,U),be&&wt(y,V),N;if(U===null){for(;!oe.done;V++,oe=k.next())oe=C(y,oe.value,P),oe!==null&&(h=l(oe,h,V),W===null?N=oe:W.sibling=oe,W=oe);return be&&wt(y,V),N}for(U=r(y,U);!oe.done;V++,oe=k.next())oe=F(U,y,V,oe.value,P),oe!==null&&(e&&oe.alternate!==null&&U.delete(oe.key===null?V:oe.key),h=l(oe,h,V),W===null?N=oe:W.sibling=oe,W=oe);return e&&U.forEach(function(sm){return n(y,sm)}),be&&wt(y,V),N}function Fe(y,h,k,P){if(typeof k=="object"&&k!==null&&k.type===le&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case Se:e:{for(var N=k.key,W=h;W!==null;){if(W.key===N){if(N=k.type,N===le){if(W.tag===7){t(y,W.sibling),h=a(W,k.props.children),h.return=y,y=h;break e}}else if(W.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===en&&Au(N)===W.type){t(y,W.sibling),h=a(W,k.props),h.ref=Fr(y,W,k),h.return=y,y=h;break e}t(y,W);break}else n(y,W);W=W.sibling}k.type===le?(h=jt(k.props.children,y.mode,P,k.key),h.return=y,y=h):(P=la(k.type,k.key,k.props,null,y.mode,P),P.ref=Fr(y,h,k),P.return=y,y=P)}return c(y);case Re:e:{for(W=k.key;h!==null;){if(h.key===W)if(h.tag===4&&h.stateNode.containerInfo===k.containerInfo&&h.stateNode.implementation===k.implementation){t(y,h.sibling),h=a(h,k.children||[]),h.return=y,y=h;break e}else{t(y,h);break}else n(y,h);h=h.sibling}h=ml(k,y.mode,P),h.return=y,y=h}return c(y);case en:return W=k._init,Fe(y,h,W(k._payload),P)}if(lr(k))return M(y,h,k,P);if(B(k))return L(y,h,k,P);Mi(y,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,h!==null&&h.tag===6?(t(y,h.sibling),h=a(h,k),h.return=y,y=h):(t(y,h),h=pl(k,y.mode,P),h.return=y,y=h),c(y)):t(y,h)}return Fe}var Vt=Fu(!0),Du=Fu(!1),Li=et(null),Ni=null,Ht=null,So=null;function Ro(){So=Ht=Ni=null}function zo(e){var n=Li.current;ye(Li),e._currentValue=n}function jo(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Qt(e,n){Ni=e,So=Ht=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(rn=!0),e.firstContext=null)}function hn(e){var n=e._currentValue;if(So!==e)if(e={context:e,memoizedValue:n,next:null},Ht===null){if(Ni===null)throw Error(o(308));Ht=e,Ni.dependencies={lanes:0,firstContext:e}}else Ht=Ht.next=e;return n}var yt=null;function Eo(e){yt===null?yt=[e]:yt.push(e)}function Tu(e,n,t,r){var a=n.interleaved;return a===null?(t.next=t,Eo(n)):(t.next=a.next,a.next=t),n.interleaved=t,Ln(e,r)}function Ln(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var rt=!1;function Co(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ou(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Nn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function it(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,te&2){var a=r.pending;return a===null?n.next=n:(n.next=a.next,a.next=n),r.pending=n,Ln(e,t)}return a=r.interleaved,a===null?(n.next=n,Eo(r)):(n.next=a.next,a.next=n),r.interleaved=n,Ln(e,t)}function $i(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,qa(e,t)}}function Iu(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var a=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var c={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?a=l=c:l=l.next=c,t=t.next}while(t!==null);l===null?a=l=n:l=l.next=n}else a=l=n;t={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function qi(e,n,t,r){var a=e.updateQueue;rt=!1;var l=a.firstBaseUpdate,c=a.lastBaseUpdate,p=a.shared.pending;if(p!==null){a.shared.pending=null;var m=p,b=m.next;m.next=null,c===null?l=b:c.next=b,c=m;var E=e.alternate;E!==null&&(E=E.updateQueue,p=E.lastBaseUpdate,p!==c&&(p===null?E.firstBaseUpdate=b:p.next=b,E.lastBaseUpdate=m))}if(l!==null){var C=a.baseState;c=0,E=b=m=null,p=l;do{var z=p.lane,F=p.eventTime;if((r&z)===z){E!==null&&(E=E.next={eventTime:F,lane:0,tag:p.tag,payload:p.payload,callback:p.callback,next:null});e:{var M=e,L=p;switch(z=n,F=t,L.tag){case 1:if(M=L.payload,typeof M=="function"){C=M.call(F,C,z);break e}C=M;break e;case 3:M.flags=M.flags&-65537|128;case 0:if(M=L.payload,z=typeof M=="function"?M.call(F,C,z):M,z==null)break e;C=I({},C,z);break e;case 2:rt=!0}}p.callback!==null&&p.lane!==0&&(e.flags|=64,z=a.effects,z===null?a.effects=[p]:z.push(p))}else F={eventTime:F,lane:z,tag:p.tag,payload:p.payload,callback:p.callback,next:null},E===null?(b=E=F,m=C):E=E.next=F,c|=z;if(p=p.next,p===null){if(p=a.shared.pending,p===null)break;z=p,p=z.next,z.next=null,a.lastBaseUpdate=z,a.shared.pending=null}}while(!0);if(E===null&&(m=C),a.baseState=m,a.firstBaseUpdate=b,a.lastBaseUpdate=E,n=a.shared.interleaved,n!==null){a=n;do c|=a.lane,a=a.next;while(a!==n)}else l===null&&(a.shared.lanes=0);xt|=c,e.lanes=c,e.memoizedState=C}}function Mu(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],a=r.callback;if(a!==null){if(r.callback=null,r=t,typeof a!="function")throw Error(o(191,a));a.call(r)}}}var Dr={},An=et(Dr),Tr=et(Dr),Or=et(Dr);function kt(e){if(e===Dr)throw Error(o(174));return e}function Po(e,n){switch(ve(Or,n),ve(Tr,e),ve(An,Dr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Pa(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Pa(n,e)}ye(An),ve(An,n)}function Kt(){ye(An),ye(Tr),ye(Or)}function Lu(e){kt(Or.current);var n=kt(An.current),t=Pa(n,e.type);n!==t&&(ve(Tr,e),ve(An,t))}function _o(e){Tr.current===e&&(ye(An),ye(Tr))}var ze=et(0);function Wi(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ao=[];function Fo(){for(var e=0;e<Ao.length;e++)Ao[e]._workInProgressVersionPrimary=null;Ao.length=0}var Ui=J.ReactCurrentDispatcher,Do=J.ReactCurrentBatchConfig,bt=0,je=null,Le=null,qe=null,Bi=!1,Ir=!1,Mr=0,_p=0;function Je(){throw Error(o(321))}function To(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!bn(e[t],n[t]))return!1;return!0}function Oo(e,n,t,r,a,l){if(bt=l,je=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Ui.current=e===null||e.memoizedState===null?Tp:Op,e=t(r,a),Ir){l=0;do{if(Ir=!1,Mr=0,25<=l)throw Error(o(301));l+=1,qe=Le=null,n.updateQueue=null,Ui.current=Ip,e=t(r,a)}while(Ir)}if(Ui.current=Qi,n=Le!==null&&Le.next!==null,bt=0,qe=Le=je=null,Bi=!1,n)throw Error(o(300));return e}function Io(){var e=Mr!==0;return Mr=0,e}function Fn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?je.memoizedState=qe=e:qe=qe.next=e,qe}function vn(){if(Le===null){var e=je.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var n=qe===null?je.memoizedState:qe.next;if(n!==null)qe=n,Le=e;else{if(e===null)throw Error(o(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},qe===null?je.memoizedState=qe=e:qe=qe.next=e}return qe}function Lr(e,n){return typeof n=="function"?n(e):n}function Mo(e){var n=vn(),t=n.queue;if(t===null)throw Error(o(311));t.lastRenderedReducer=e;var r=Le,a=r.baseQueue,l=t.pending;if(l!==null){if(a!==null){var c=a.next;a.next=l.next,l.next=c}r.baseQueue=a=l,t.pending=null}if(a!==null){l=a.next,r=r.baseState;var p=c=null,m=null,b=l;do{var E=b.lane;if((bt&E)===E)m!==null&&(m=m.next={lane:0,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null}),r=b.hasEagerState?b.eagerState:e(r,b.action);else{var C={lane:E,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null};m===null?(p=m=C,c=r):m=m.next=C,je.lanes|=E,xt|=E}b=b.next}while(b!==null&&b!==l);m===null?c=r:m.next=p,bn(r,n.memoizedState)||(rn=!0),n.memoizedState=r,n.baseState=c,n.baseQueue=m,t.lastRenderedState=r}if(e=t.interleaved,e!==null){a=e;do l=a.lane,je.lanes|=l,xt|=l,a=a.next;while(a!==e)}else a===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Lo(e){var n=vn(),t=n.queue;if(t===null)throw Error(o(311));t.lastRenderedReducer=e;var r=t.dispatch,a=t.pending,l=n.memoizedState;if(a!==null){t.pending=null;var c=a=a.next;do l=e(l,c.action),c=c.next;while(c!==a);bn(l,n.memoizedState)||(rn=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,r]}function Nu(){}function $u(e,n){var t=je,r=vn(),a=n(),l=!bn(r.memoizedState,a);if(l&&(r.memoizedState=a,rn=!0),r=r.queue,No(Uu.bind(null,t,r,e),[e]),r.getSnapshot!==n||l||qe!==null&&qe.memoizedState.tag&1){if(t.flags|=2048,Nr(9,Wu.bind(null,t,r,a,n),void 0,null),We===null)throw Error(o(349));bt&30||qu(t,n,a)}return a}function qu(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=je.updateQueue,n===null?(n={lastEffect:null,stores:null},je.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Wu(e,n,t,r){n.value=t,n.getSnapshot=r,Bu(n)&&Vu(e)}function Uu(e,n,t){return t(function(){Bu(n)&&Vu(e)})}function Bu(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!bn(e,t)}catch{return!0}}function Vu(e){var n=Ln(e,1);n!==null&&jn(n,e,1,-1)}function Hu(e){var n=Fn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Lr,lastRenderedState:e},n.queue=e,e=e.dispatch=Dp.bind(null,je,e),[n.memoizedState,e]}function Nr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=je.updateQueue,n===null?(n={lastEffect:null,stores:null},je.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Qu(){return vn().memoizedState}function Vi(e,n,t,r){var a=Fn();je.flags|=e,a.memoizedState=Nr(1|n,t,void 0,r===void 0?null:r)}function Hi(e,n,t,r){var a=vn();r=r===void 0?null:r;var l=void 0;if(Le!==null){var c=Le.memoizedState;if(l=c.destroy,r!==null&&To(r,c.deps)){a.memoizedState=Nr(n,t,l,r);return}}je.flags|=e,a.memoizedState=Nr(1|n,t,l,r)}function Ku(e,n){return Vi(8390656,8,e,n)}function No(e,n){return Hi(2048,8,e,n)}function Ju(e,n){return Hi(4,2,e,n)}function Zu(e,n){return Hi(4,4,e,n)}function Gu(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Yu(e,n,t){return t=t!=null?t.concat([e]):null,Hi(4,4,Gu.bind(null,n,e),t)}function $o(){}function Xu(e,n){var t=vn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&To(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function ec(e,n){var t=vn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&To(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function nc(e,n,t){return bt&21?(bn(t,n)||(t=As(),je.lanes|=t,xt|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,rn=!0),e.memoizedState=t)}function Ap(e,n){var t=ce;ce=t!==0&&4>t?t:4,e(!0);var r=Do.transition;Do.transition={};try{e(!1),n()}finally{ce=t,Do.transition=r}}function tc(){return vn().memoizedState}function Fp(e,n,t){var r=st(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},rc(e))ic(n,t);else if(t=Tu(e,n,t,r),t!==null){var a=Xe();jn(t,e,r,a),ac(t,n,r)}}function Dp(e,n,t){var r=st(e),a={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(rc(e))ic(n,a);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var c=n.lastRenderedState,p=l(c,t);if(a.hasEagerState=!0,a.eagerState=p,bn(p,c)){var m=n.interleaved;m===null?(a.next=a,Eo(n)):(a.next=m.next,m.next=a),n.interleaved=a;return}}catch{}finally{}t=Tu(e,n,a,r),t!==null&&(a=Xe(),jn(t,e,r,a),ac(t,n,r))}}function rc(e){var n=e.alternate;return e===je||n!==null&&n===je}function ic(e,n){Ir=Bi=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function ac(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,qa(e,t)}}var Qi={readContext:hn,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useInsertionEffect:Je,useLayoutEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useMutableSource:Je,useSyncExternalStore:Je,useId:Je,unstable_isNewReconciler:!1},Tp={readContext:hn,useCallback:function(e,n){return Fn().memoizedState=[e,n===void 0?null:n],e},useContext:hn,useEffect:Ku,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Vi(4194308,4,Gu.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Vi(4194308,4,e,n)},useInsertionEffect:function(e,n){return Vi(4,2,e,n)},useMemo:function(e,n){var t=Fn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Fn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Fp.bind(null,je,e),[r.memoizedState,e]},useRef:function(e){var n=Fn();return e={current:e},n.memoizedState=e},useState:Hu,useDebugValue:$o,useDeferredValue:function(e){return Fn().memoizedState=e},useTransition:function(){var e=Hu(!1),n=e[0];return e=Ap.bind(null,e[1]),Fn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=je,a=Fn();if(be){if(t===void 0)throw Error(o(407));t=t()}else{if(t=n(),We===null)throw Error(o(349));bt&30||qu(r,n,t)}a.memoizedState=t;var l={value:t,getSnapshot:n};return a.queue=l,Ku(Uu.bind(null,r,l,e),[e]),r.flags|=2048,Nr(9,Wu.bind(null,r,l,t,n),void 0,null),t},useId:function(){var e=Fn(),n=We.identifierPrefix;if(be){var t=Mn,r=In;t=(r&~(1<<32-kn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Mr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=_p++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Op={readContext:hn,useCallback:Xu,useContext:hn,useEffect:No,useImperativeHandle:Yu,useInsertionEffect:Ju,useLayoutEffect:Zu,useMemo:ec,useReducer:Mo,useRef:Qu,useState:function(){return Mo(Lr)},useDebugValue:$o,useDeferredValue:function(e){var n=vn();return nc(n,Le.memoizedState,e)},useTransition:function(){var e=Mo(Lr)[0],n=vn().memoizedState;return[e,n]},useMutableSource:Nu,useSyncExternalStore:$u,useId:tc,unstable_isNewReconciler:!1},Ip={readContext:hn,useCallback:Xu,useContext:hn,useEffect:No,useImperativeHandle:Yu,useInsertionEffect:Ju,useLayoutEffect:Zu,useMemo:ec,useReducer:Lo,useRef:Qu,useState:function(){return Lo(Lr)},useDebugValue:$o,useDeferredValue:function(e){var n=vn();return Le===null?n.memoizedState=e:nc(n,Le.memoizedState,e)},useTransition:function(){var e=Lo(Lr)[0],n=vn().memoizedState;return[e,n]},useMutableSource:Nu,useSyncExternalStore:$u,useId:tc,unstable_isNewReconciler:!1};function Sn(e,n){if(e&&e.defaultProps){n=I({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function qo(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:I({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Ki={isMounted:function(e){return(e=e._reactInternals)?mt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Xe(),a=st(e),l=Nn(r,a);l.payload=n,t!=null&&(l.callback=t),n=it(e,l,a),n!==null&&(jn(n,e,a,r),$i(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Xe(),a=st(e),l=Nn(r,a);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=it(e,l,a),n!==null&&(jn(n,e,a,r),$i(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Xe(),r=st(e),a=Nn(t,r);a.tag=2,n!=null&&(a.callback=n),n=it(e,a,r),n!==null&&(jn(n,e,r,t),$i(n,e,r))}};function oc(e,n,t,r,a,l,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,c):n.prototype&&n.prototype.isPureReactComponent?!zr(t,r)||!zr(a,l):!0}function lc(e,n,t){var r=!1,a=nt,l=n.contextType;return typeof l=="object"&&l!==null?l=hn(l):(a=tn(n)?vt:Ke.current,r=n.contextTypes,l=(r=r!=null)?qt(e,a):nt),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ki,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=l),n}function sc(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Ki.enqueueReplaceState(n,n.state,null)}function Wo(e,n,t,r){var a=e.stateNode;a.props=t,a.state=e.memoizedState,a.refs={},Co(e);var l=n.contextType;typeof l=="object"&&l!==null?a.context=hn(l):(l=tn(n)?vt:Ke.current,a.context=qt(e,l)),a.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(qo(e,n,l,t),a.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(n=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),n!==a.state&&Ki.enqueueReplaceState(a,a.state,null),qi(e,t,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Jt(e,n){try{var t="",r=n;do t+=ie(r),r=r.return;while(r);var a=t}catch(l){a=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:a,digest:null}}function Uo(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Bo(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Mp=typeof WeakMap=="function"?WeakMap:Map;function uc(e,n,t){t=Nn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){na||(na=!0,al=r),Bo(e,n)},t}function cc(e,n,t){t=Nn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=n.value;t.payload=function(){return r(a)},t.callback=function(){Bo(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){Bo(e,n),typeof r!="function"&&(ot===null?ot=new Set([this]):ot.add(this));var c=n.stack;this.componentDidCatch(n.value,{componentStack:c!==null?c:""})}),t}function dc(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Mp;var a=new Set;r.set(n,a)}else a=r.get(n),a===void 0&&(a=new Set,r.set(n,a));a.has(t)||(a.add(t),e=Gp.bind(null,e,n,t),n.then(e,e))}function fc(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function pc(e,n,t,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Nn(-1,1),n.tag=2,it(t,n,1))),t.lanes|=1),e)}var Lp=J.ReactCurrentOwner,rn=!1;function Ye(e,n,t,r){n.child=e===null?Du(n,null,t,r):Vt(n,e.child,t,r)}function mc(e,n,t,r,a){t=t.render;var l=n.ref;return Qt(n,a),r=Oo(e,n,t,r,l,a),t=Io(),e!==null&&!rn?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,$n(e,n,a)):(be&&t&&wo(n),n.flags|=1,Ye(e,n,r,a),n.child)}function hc(e,n,t,r,a){if(e===null){var l=t.type;return typeof l=="function"&&!fl(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,vc(e,n,l,r,a)):(e=la(t.type,null,r,n,n.mode,a),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!(e.lanes&a)){var c=l.memoizedProps;if(t=t.compare,t=t!==null?t:zr,t(c,r)&&e.ref===n.ref)return $n(e,n,a)}return n.flags|=1,e=ct(l,r),e.ref=n.ref,e.return=n,n.child=e}function vc(e,n,t,r,a){if(e!==null){var l=e.memoizedProps;if(zr(l,r)&&e.ref===n.ref)if(rn=!1,n.pendingProps=r=l,(e.lanes&a)!==0)e.flags&131072&&(rn=!0);else return n.lanes=e.lanes,$n(e,n,a)}return Vo(e,n,t,r,a)}function gc(e,n,t){var r=n.pendingProps,a=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(Gt,fn),fn|=t;else{if(!(t&1073741824))return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,ve(Gt,fn),fn|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,ve(Gt,fn),fn|=r}else l!==null?(r=l.baseLanes|t,n.memoizedState=null):r=t,ve(Gt,fn),fn|=r;return Ye(e,n,a,t),n.child}function wc(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Vo(e,n,t,r,a){var l=tn(t)?vt:Ke.current;return l=qt(n,l),Qt(n,a),t=Oo(e,n,t,r,l,a),r=Io(),e!==null&&!rn?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,$n(e,n,a)):(be&&r&&wo(n),n.flags|=1,Ye(e,n,t,a),n.child)}function yc(e,n,t,r,a){if(tn(t)){var l=!0;Fi(n)}else l=!1;if(Qt(n,a),n.stateNode===null)Zi(e,n),lc(n,t,r),Wo(n,t,r,a),r=!0;else if(e===null){var c=n.stateNode,p=n.memoizedProps;c.props=p;var m=c.context,b=t.contextType;typeof b=="object"&&b!==null?b=hn(b):(b=tn(t)?vt:Ke.current,b=qt(n,b));var E=t.getDerivedStateFromProps,C=typeof E=="function"||typeof c.getSnapshotBeforeUpdate=="function";C||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p!==r||m!==b)&&sc(n,c,r,b),rt=!1;var z=n.memoizedState;c.state=z,qi(n,r,c,a),m=n.memoizedState,p!==r||z!==m||nn.current||rt?(typeof E=="function"&&(qo(n,t,E,r),m=n.memoizedState),(p=rt||oc(n,t,p,r,z,m,b))?(C||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=m),c.props=r,c.state=m,c.context=b,r=p):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{c=n.stateNode,Ou(e,n),p=n.memoizedProps,b=n.type===n.elementType?p:Sn(n.type,p),c.props=b,C=n.pendingProps,z=c.context,m=t.contextType,typeof m=="object"&&m!==null?m=hn(m):(m=tn(t)?vt:Ke.current,m=qt(n,m));var F=t.getDerivedStateFromProps;(E=typeof F=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p!==C||z!==m)&&sc(n,c,r,m),rt=!1,z=n.memoizedState,c.state=z,qi(n,r,c,a);var M=n.memoizedState;p!==C||z!==M||nn.current||rt?(typeof F=="function"&&(qo(n,t,F,r),M=n.memoizedState),(b=rt||oc(n,t,b,r,z,M,m)||!1)?(E||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,M,m),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,M,m)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&z===e.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&z===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=M),c.props=r,c.state=M,c.context=m,r=b):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&z===e.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&z===e.memoizedState||(n.flags|=1024),r=!1)}return Ho(e,n,t,r,l,a)}function Ho(e,n,t,r,a,l){wc(e,n);var c=(n.flags&128)!==0;if(!r&&!c)return a&&Ru(n,t,!1),$n(e,n,l);r=n.stateNode,Lp.current=n;var p=c&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&c?(n.child=Vt(n,e.child,null,l),n.child=Vt(n,null,p,l)):Ye(e,n,p,l),n.memoizedState=r.state,a&&Ru(n,t,!0),n.child}function kc(e){var n=e.stateNode;n.pendingContext?xu(e,n.pendingContext,n.pendingContext!==n.context):n.context&&xu(e,n.context,!1),Po(e,n.containerInfo)}function bc(e,n,t,r,a){return Bt(),xo(a),n.flags|=256,Ye(e,n,t,r),n.child}var Qo={dehydrated:null,treeContext:null,retryLane:0};function Ko(e){return{baseLanes:e,cachePool:null,transitions:null}}function xc(e,n,t){var r=n.pendingProps,a=ze.current,l=!1,c=(n.flags&128)!==0,p;if((p=c)||(p=e!==null&&e.memoizedState===null?!1:(a&2)!==0),p?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),ve(ze,a&1),e===null)return bo(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(c=r.children,e=r.fallback,l?(r=n.mode,l=n.child,c={mode:"hidden",children:c},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=c):l=sa(c,r,0,null),e=jt(e,r,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=Ko(t),n.memoizedState=Qo,e):Jo(n,c));if(a=e.memoizedState,a!==null&&(p=a.dehydrated,p!==null))return Np(e,n,c,r,p,a,t);if(l){l=r.fallback,c=n.mode,a=e.child,p=a.sibling;var m={mode:"hidden",children:r.children};return!(c&1)&&n.child!==a?(r=n.child,r.childLanes=0,r.pendingProps=m,n.deletions=null):(r=ct(a,m),r.subtreeFlags=a.subtreeFlags&14680064),p!==null?l=ct(p,l):(l=jt(l,c,t,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,r=l,l=n.child,c=e.child.memoizedState,c=c===null?Ko(t):{baseLanes:c.baseLanes|t,cachePool:null,transitions:c.transitions},l.memoizedState=c,l.childLanes=e.childLanes&~t,n.memoizedState=Qo,r}return l=e.child,e=l.sibling,r=ct(l,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Jo(e,n){return n=sa({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Ji(e,n,t,r){return r!==null&&xo(r),Vt(n,e.child,null,t),e=Jo(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Np(e,n,t,r,a,l,c){if(t)return n.flags&256?(n.flags&=-257,r=Uo(Error(o(422))),Ji(e,n,c,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=r.fallback,a=n.mode,r=sa({mode:"visible",children:r.children},a,0,null),l=jt(l,a,c,null),l.flags|=2,r.return=n,l.return=n,r.sibling=l,n.child=r,n.mode&1&&Vt(n,e.child,null,c),n.child.memoizedState=Ko(c),n.memoizedState=Qo,l);if(!(n.mode&1))return Ji(e,n,c,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var p=r.dgst;return r=p,l=Error(o(419)),r=Uo(l,r,void 0),Ji(e,n,c,r)}if(p=(c&e.childLanes)!==0,rn||p){if(r=We,r!==null){switch(c&-c){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|c)?0:a,a!==0&&a!==l.retryLane&&(l.retryLane=a,Ln(e,a),jn(r,e,a,-1))}return dl(),r=Uo(Error(o(421))),Ji(e,n,c,r)}return a.data==="$?"?(n.flags|=128,n.child=e.child,n=Yp.bind(null,e),a._reactRetry=n,null):(e=l.treeContext,dn=Xn(a.nextSibling),cn=n,be=!0,xn=null,e!==null&&(pn[mn++]=In,pn[mn++]=Mn,pn[mn++]=gt,In=e.id,Mn=e.overflow,gt=n),n=Jo(n,r.children),n.flags|=4096,n)}function Sc(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),jo(e.return,n,t)}function Zo(e,n,t,r,a){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:a}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=a)}function Rc(e,n,t){var r=n.pendingProps,a=r.revealOrder,l=r.tail;if(Ye(e,n,r.children,t),r=ze.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sc(e,t,n);else if(e.tag===19)Sc(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ve(ze,r),!(n.mode&1))n.memoizedState=null;else switch(a){case"forwards":for(t=n.child,a=null;t!==null;)e=t.alternate,e!==null&&Wi(e)===null&&(a=t),t=t.sibling;t=a,t===null?(a=n.child,n.child=null):(a=t.sibling,t.sibling=null),Zo(n,!1,a,t,l);break;case"backwards":for(t=null,a=n.child,n.child=null;a!==null;){if(e=a.alternate,e!==null&&Wi(e)===null){n.child=a;break}e=a.sibling,a.sibling=t,t=a,a=e}Zo(n,!0,t,null,l);break;case"together":Zo(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Zi(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function $n(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),xt|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(o(153));if(n.child!==null){for(e=n.child,t=ct(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=ct(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function $p(e,n,t){switch(n.tag){case 3:kc(n),Bt();break;case 5:Lu(n);break;case 1:tn(n.type)&&Fi(n);break;case 4:Po(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,a=n.memoizedProps.value;ve(Li,r._currentValue),r._currentValue=a;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(ve(ze,ze.current&1),n.flags|=128,null):t&n.child.childLanes?xc(e,n,t):(ve(ze,ze.current&1),e=$n(e,n,t),e!==null?e.sibling:null);ve(ze,ze.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Rc(e,n,t);n.flags|=128}if(a=n.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),ve(ze,ze.current),r)break;return null;case 22:case 23:return n.lanes=0,gc(e,n,t)}return $n(e,n,t)}var zc,Go,jc,Ec;zc=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},Go=function(){},jc=function(e,n,t,r){var a=e.memoizedProps;if(a!==r){e=n.stateNode,kt(An.current);var l=null;switch(t){case"input":a=za(e,a),r=za(e,r),l=[];break;case"select":a=I({},a,{value:void 0}),r=I({},r,{value:void 0}),l=[];break;case"textarea":a=Ca(e,a),r=Ca(e,r),l=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Pi)}_a(t,r);var c;t=null;for(b in a)if(!r.hasOwnProperty(b)&&a.hasOwnProperty(b)&&a[b]!=null)if(b==="style"){var p=a[b];for(c in p)p.hasOwnProperty(c)&&(t||(t={}),t[c]="")}else b!=="dangerouslySetInnerHTML"&&b!=="children"&&b!=="suppressContentEditableWarning"&&b!=="suppressHydrationWarning"&&b!=="autoFocus"&&(d.hasOwnProperty(b)?l||(l=[]):(l=l||[]).push(b,null));for(b in r){var m=r[b];if(p=a!=null?a[b]:void 0,r.hasOwnProperty(b)&&m!==p&&(m!=null||p!=null))if(b==="style")if(p){for(c in p)!p.hasOwnProperty(c)||m&&m.hasOwnProperty(c)||(t||(t={}),t[c]="");for(c in m)m.hasOwnProperty(c)&&p[c]!==m[c]&&(t||(t={}),t[c]=m[c])}else t||(l||(l=[]),l.push(b,t)),t=m;else b==="dangerouslySetInnerHTML"?(m=m?m.__html:void 0,p=p?p.__html:void 0,m!=null&&p!==m&&(l=l||[]).push(b,m)):b==="children"?typeof m!="string"&&typeof m!="number"||(l=l||[]).push(b,""+m):b!=="suppressContentEditableWarning"&&b!=="suppressHydrationWarning"&&(d.hasOwnProperty(b)?(m!=null&&b==="onScroll"&&we("scroll",e),l||p===m||(l=[])):(l=l||[]).push(b,m))}t&&(l=l||[]).push("style",t);var b=l;(n.updateQueue=b)&&(n.flags|=4)}},Ec=function(e,n,t,r){t!==r&&(n.flags|=4)};function $r(e,n){if(!be)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ze(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var a=e.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function qp(e,n,t){var r=n.pendingProps;switch(yo(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(n),null;case 1:return tn(n.type)&&Ai(),Ze(n),null;case 3:return r=n.stateNode,Kt(),ye(nn),ye(Ke),Fo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ii(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,xn!==null&&(sl(xn),xn=null))),Go(e,n),Ze(n),null;case 5:_o(n);var a=kt(Or.current);if(t=n.type,e!==null&&n.stateNode!=null)jc(e,n,t,r,a),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(o(166));return Ze(n),null}if(e=kt(An.current),Ii(n)){r=n.stateNode,t=n.type;var l=n.memoizedProps;switch(r[_n]=n,r[_r]=l,e=(n.mode&1)!==0,t){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(a=0;a<Er.length;a++)we(Er[a],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":ls(r,l),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},we("invalid",r);break;case"textarea":cs(r,l),we("invalid",r)}_a(t,l),a=null;for(var c in l)if(l.hasOwnProperty(c)){var p=l[c];c==="children"?typeof p=="string"?r.textContent!==p&&(l.suppressHydrationWarning!==!0&&Ci(r.textContent,p,e),a=["children",p]):typeof p=="number"&&r.textContent!==""+p&&(l.suppressHydrationWarning!==!0&&Ci(r.textContent,p,e),a=["children",""+p]):d.hasOwnProperty(c)&&p!=null&&c==="onScroll"&&we("scroll",r)}switch(t){case"input":ai(r),us(r,l,!0);break;case"textarea":ai(r),fs(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Pi)}r=a,n.updateQueue=r,r!==null&&(n.flags|=4)}else{c=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ps(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=c.createElement(t,{is:r.is}):(e=c.createElement(t),t==="select"&&(c=e,r.multiple?c.multiple=!0:r.size&&(c.size=r.size))):e=c.createElementNS(e,t),e[_n]=n,e[_r]=r,zc(e,n,!1,!1),n.stateNode=e;e:{switch(c=Aa(t,r),t){case"dialog":we("cancel",e),we("close",e),a=r;break;case"iframe":case"object":case"embed":we("load",e),a=r;break;case"video":case"audio":for(a=0;a<Er.length;a++)we(Er[a],e);a=r;break;case"source":we("error",e),a=r;break;case"img":case"image":case"link":we("error",e),we("load",e),a=r;break;case"details":we("toggle",e),a=r;break;case"input":ls(e,r),a=za(e,r),we("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=I({},r,{value:void 0}),we("invalid",e);break;case"textarea":cs(e,r),a=Ca(e,r),we("invalid",e);break;default:a=r}_a(t,a),p=a;for(l in p)if(p.hasOwnProperty(l)){var m=p[l];l==="style"?vs(e,m):l==="dangerouslySetInnerHTML"?(m=m?m.__html:void 0,m!=null&&ms(e,m)):l==="children"?typeof m=="string"?(t!=="textarea"||m!=="")&&sr(e,m):typeof m=="number"&&sr(e,""+m):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(d.hasOwnProperty(l)?m!=null&&l==="onScroll"&&we("scroll",e):m!=null&&fe(e,l,m,c))}switch(t){case"input":ai(e),us(e,r,!1);break;case"textarea":ai(e),fs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ue(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Pt(e,!!r.multiple,l,!1):r.defaultValue!=null&&Pt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Pi)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Ze(n),null;case 6:if(e&&n.stateNode!=null)Ec(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(o(166));if(t=kt(Or.current),kt(An.current),Ii(n)){if(r=n.stateNode,t=n.memoizedProps,r[_n]=n,(l=r.nodeValue!==t)&&(e=cn,e!==null))switch(e.tag){case 3:Ci(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ci(r.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[_n]=n,n.stateNode=r}return Ze(n),null;case 13:if(ye(ze),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(be&&dn!==null&&n.mode&1&&!(n.flags&128))_u(),Bt(),n.flags|=98560,l=!1;else if(l=Ii(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(o(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(o(317));l[_n]=n}else Bt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Ze(n),l=!1}else xn!==null&&(sl(xn),xn=null),l=!0;if(!l)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||ze.current&1?Ne===0&&(Ne=3):dl())),n.updateQueue!==null&&(n.flags|=4),Ze(n),null);case 4:return Kt(),Go(e,n),e===null&&Cr(n.stateNode.containerInfo),Ze(n),null;case 10:return zo(n.type._context),Ze(n),null;case 17:return tn(n.type)&&Ai(),Ze(n),null;case 19:if(ye(ze),l=n.memoizedState,l===null)return Ze(n),null;if(r=(n.flags&128)!==0,c=l.rendering,c===null)if(r)$r(l,!1);else{if(Ne!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(c=Wi(e),c!==null){for(n.flags|=128,$r(l,!1),r=c.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)l=t,e=r,l.flags&=14680066,c=l.alternate,c===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=c.childLanes,l.lanes=c.lanes,l.child=c.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=c.memoizedProps,l.memoizedState=c.memoizedState,l.updateQueue=c.updateQueue,l.type=c.type,e=c.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return ve(ze,ze.current&1|2),n.child}e=e.sibling}l.tail!==null&&Ae()>Yt&&(n.flags|=128,r=!0,$r(l,!1),n.lanes=4194304)}else{if(!r)if(e=Wi(c),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),$r(l,!0),l.tail===null&&l.tailMode==="hidden"&&!c.alternate&&!be)return Ze(n),null}else 2*Ae()-l.renderingStartTime>Yt&&t!==1073741824&&(n.flags|=128,r=!0,$r(l,!1),n.lanes=4194304);l.isBackwards?(c.sibling=n.child,n.child=c):(t=l.last,t!==null?t.sibling=c:n.child=c,l.last=c)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=Ae(),n.sibling=null,t=ze.current,ve(ze,r?t&1|2:t&1),n):(Ze(n),null);case 22:case 23:return cl(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?fn&1073741824&&(Ze(n),n.subtreeFlags&6&&(n.flags|=8192)):Ze(n),null;case 24:return null;case 25:return null}throw Error(o(156,n.tag))}function Wp(e,n){switch(yo(n),n.tag){case 1:return tn(n.type)&&Ai(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Kt(),ye(nn),ye(Ke),Fo(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return _o(n),null;case 13:if(ye(ze),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(o(340));Bt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ye(ze),null;case 4:return Kt(),null;case 10:return zo(n.type._context),null;case 22:case 23:return cl(),null;case 24:return null;default:return null}}var Gi=!1,Ge=!1,Up=typeof WeakSet=="function"?WeakSet:Set,T=null;function Zt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){_e(e,n,r)}else t.current=null}function Yo(e,n,t){try{t()}catch(r){_e(e,n,r)}}var Cc=!1;function Bp(e,n){if(uo=gi,e=ou(),no(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var a=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var c=0,p=-1,m=-1,b=0,E=0,C=e,z=null;n:for(;;){for(var F;C!==t||a!==0&&C.nodeType!==3||(p=c+a),C!==l||r!==0&&C.nodeType!==3||(m=c+r),C.nodeType===3&&(c+=C.nodeValue.length),(F=C.firstChild)!==null;)z=C,C=F;for(;;){if(C===e)break n;if(z===t&&++b===a&&(p=c),z===l&&++E===r&&(m=c),(F=C.nextSibling)!==null)break;C=z,z=C.parentNode}C=F}t=p===-1||m===-1?null:{start:p,end:m}}else t=null}t=t||{start:0,end:0}}else t=null;for(co={focusedElem:e,selectionRange:t},gi=!1,T=n;T!==null;)if(n=T,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,T=e;else for(;T!==null;){n=T;try{var M=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(M!==null){var L=M.memoizedProps,Fe=M.memoizedState,y=n.stateNode,h=y.getSnapshotBeforeUpdate(n.elementType===n.type?L:Sn(n.type,L),Fe);y.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var k=n.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(P){_e(n,n.return,P)}if(e=n.sibling,e!==null){e.return=n.return,T=e;break}T=n.return}return M=Cc,Cc=!1,M}function qr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var l=a.destroy;a.destroy=void 0,l!==void 0&&Yo(n,t,l)}a=a.next}while(a!==r)}}function Yi(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Xo(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Pc(e){var n=e.alternate;n!==null&&(e.alternate=null,Pc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[_n],delete n[_r],delete n[ho],delete n[jp],delete n[Ep])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _c(e){return e.tag===5||e.tag===3||e.tag===4}function Ac(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_c(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function el(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Pi));else if(r!==4&&(e=e.child,e!==null))for(el(e,n,t),e=e.sibling;e!==null;)el(e,n,t),e=e.sibling}function nl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(nl(e,n,t),e=e.sibling;e!==null;)nl(e,n,t),e=e.sibling}var Be=null,Rn=!1;function at(e,n,t){for(t=t.child;t!==null;)Fc(e,n,t),t=t.sibling}function Fc(e,n,t){if(Pn&&typeof Pn.onCommitFiberUnmount=="function")try{Pn.onCommitFiberUnmount(di,t)}catch{}switch(t.tag){case 5:Ge||Zt(t,n);case 6:var r=Be,a=Rn;Be=null,at(e,n,t),Be=r,Rn=a,Be!==null&&(Rn?(e=Be,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Be.removeChild(t.stateNode));break;case 18:Be!==null&&(Rn?(e=Be,t=t.stateNode,e.nodeType===8?mo(e.parentNode,t):e.nodeType===1&&mo(e,t),yr(e)):mo(Be,t.stateNode));break;case 4:r=Be,a=Rn,Be=t.stateNode.containerInfo,Rn=!0,at(e,n,t),Be=r,Rn=a;break;case 0:case 11:case 14:case 15:if(!Ge&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var l=a,c=l.destroy;l=l.tag,c!==void 0&&(l&2||l&4)&&Yo(t,n,c),a=a.next}while(a!==r)}at(e,n,t);break;case 1:if(!Ge&&(Zt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(p){_e(t,n,p)}at(e,n,t);break;case 21:at(e,n,t);break;case 22:t.mode&1?(Ge=(r=Ge)||t.memoizedState!==null,at(e,n,t),Ge=r):at(e,n,t);break;default:at(e,n,t)}}function Dc(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Up),n.forEach(function(r){var a=Xp.bind(null,e,r);t.has(r)||(t.add(r),r.then(a,a))})}}function zn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var a=t[r];try{var l=e,c=n,p=c;e:for(;p!==null;){switch(p.tag){case 5:Be=p.stateNode,Rn=!1;break e;case 3:Be=p.stateNode.containerInfo,Rn=!0;break e;case 4:Be=p.stateNode.containerInfo,Rn=!0;break e}p=p.return}if(Be===null)throw Error(o(160));Fc(l,c,a),Be=null,Rn=!1;var m=a.alternate;m!==null&&(m.return=null),a.return=null}catch(b){_e(a,n,b)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Tc(n,e),n=n.sibling}function Tc(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(zn(n,e),Dn(e),r&4){try{qr(3,e,e.return),Yi(3,e)}catch(L){_e(e,e.return,L)}try{qr(5,e,e.return)}catch(L){_e(e,e.return,L)}}break;case 1:zn(n,e),Dn(e),r&512&&t!==null&&Zt(t,t.return);break;case 5:if(zn(n,e),Dn(e),r&512&&t!==null&&Zt(t,t.return),e.flags&32){var a=e.stateNode;try{sr(a,"")}catch(L){_e(e,e.return,L)}}if(r&4&&(a=e.stateNode,a!=null)){var l=e.memoizedProps,c=t!==null?t.memoizedProps:l,p=e.type,m=e.updateQueue;if(e.updateQueue=null,m!==null)try{p==="input"&&l.type==="radio"&&l.name!=null&&ss(a,l),Aa(p,c);var b=Aa(p,l);for(c=0;c<m.length;c+=2){var E=m[c],C=m[c+1];E==="style"?vs(a,C):E==="dangerouslySetInnerHTML"?ms(a,C):E==="children"?sr(a,C):fe(a,E,C,b)}switch(p){case"input":ja(a,l);break;case"textarea":ds(a,l);break;case"select":var z=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!l.multiple;var F=l.value;F!=null?Pt(a,!!l.multiple,F,!1):z!==!!l.multiple&&(l.defaultValue!=null?Pt(a,!!l.multiple,l.defaultValue,!0):Pt(a,!!l.multiple,l.multiple?[]:"",!1))}a[_r]=l}catch(L){_e(e,e.return,L)}}break;case 6:if(zn(n,e),Dn(e),r&4){if(e.stateNode===null)throw Error(o(162));a=e.stateNode,l=e.memoizedProps;try{a.nodeValue=l}catch(L){_e(e,e.return,L)}}break;case 3:if(zn(n,e),Dn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{yr(n.containerInfo)}catch(L){_e(e,e.return,L)}break;case 4:zn(n,e),Dn(e);break;case 13:zn(n,e),Dn(e),a=e.child,a.flags&8192&&(l=a.memoizedState!==null,a.stateNode.isHidden=l,!l||a.alternate!==null&&a.alternate.memoizedState!==null||(il=Ae())),r&4&&Dc(e);break;case 22:if(E=t!==null&&t.memoizedState!==null,e.mode&1?(Ge=(b=Ge)||E,zn(n,e),Ge=b):zn(n,e),Dn(e),r&8192){if(b=e.memoizedState!==null,(e.stateNode.isHidden=b)&&!E&&e.mode&1)for(T=e,E=e.child;E!==null;){for(C=T=E;T!==null;){switch(z=T,F=z.child,z.tag){case 0:case 11:case 14:case 15:qr(4,z,z.return);break;case 1:Zt(z,z.return);var M=z.stateNode;if(typeof M.componentWillUnmount=="function"){r=z,t=z.return;try{n=r,M.props=n.memoizedProps,M.state=n.memoizedState,M.componentWillUnmount()}catch(L){_e(r,t,L)}}break;case 5:Zt(z,z.return);break;case 22:if(z.memoizedState!==null){Mc(C);continue}}F!==null?(F.return=z,T=F):Mc(C)}E=E.sibling}e:for(E=null,C=e;;){if(C.tag===5){if(E===null){E=C;try{a=C.stateNode,b?(l=a.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(p=C.stateNode,m=C.memoizedProps.style,c=m!=null&&m.hasOwnProperty("display")?m.display:null,p.style.display=hs("display",c))}catch(L){_e(e,e.return,L)}}}else if(C.tag===6){if(E===null)try{C.stateNode.nodeValue=b?"":C.memoizedProps}catch(L){_e(e,e.return,L)}}else if((C.tag!==22&&C.tag!==23||C.memoizedState===null||C===e)&&C.child!==null){C.child.return=C,C=C.child;continue}if(C===e)break e;for(;C.sibling===null;){if(C.return===null||C.return===e)break e;E===C&&(E=null),C=C.return}E===C&&(E=null),C.sibling.return=C.return,C=C.sibling}}break;case 19:zn(n,e),Dn(e),r&4&&Dc(e);break;case 21:break;default:zn(n,e),Dn(e)}}function Dn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(_c(t)){var r=t;break e}t=t.return}throw Error(o(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(sr(a,""),r.flags&=-33);var l=Ac(e);nl(e,l,a);break;case 3:case 4:var c=r.stateNode.containerInfo,p=Ac(e);el(e,p,c);break;default:throw Error(o(161))}}catch(m){_e(e,e.return,m)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Vp(e,n,t){T=e,Oc(e)}function Oc(e,n,t){for(var r=(e.mode&1)!==0;T!==null;){var a=T,l=a.child;if(a.tag===22&&r){var c=a.memoizedState!==null||Gi;if(!c){var p=a.alternate,m=p!==null&&p.memoizedState!==null||Ge;p=Gi;var b=Ge;if(Gi=c,(Ge=m)&&!b)for(T=a;T!==null;)c=T,m=c.child,c.tag===22&&c.memoizedState!==null?Lc(a):m!==null?(m.return=c,T=m):Lc(a);for(;l!==null;)T=l,Oc(l),l=l.sibling;T=a,Gi=p,Ge=b}Ic(e)}else a.subtreeFlags&8772&&l!==null?(l.return=a,T=l):Ic(e)}}function Ic(e){for(;T!==null;){var n=T;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Ge||Yi(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Ge)if(t===null)r.componentDidMount();else{var a=n.elementType===n.type?t.memoizedProps:Sn(n.type,t.memoizedProps);r.componentDidUpdate(a,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&Mu(n,l,r);break;case 3:var c=n.updateQueue;if(c!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Mu(n,c,t)}break;case 5:var p=n.stateNode;if(t===null&&n.flags&4){t=p;var m=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":m.autoFocus&&t.focus();break;case"img":m.src&&(t.src=m.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var b=n.alternate;if(b!==null){var E=b.memoizedState;if(E!==null){var C=E.dehydrated;C!==null&&yr(C)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}Ge||n.flags&512&&Xo(n)}catch(z){_e(n,n.return,z)}}if(n===e){T=null;break}if(t=n.sibling,t!==null){t.return=n.return,T=t;break}T=n.return}}function Mc(e){for(;T!==null;){var n=T;if(n===e){T=null;break}var t=n.sibling;if(t!==null){t.return=n.return,T=t;break}T=n.return}}function Lc(e){for(;T!==null;){var n=T;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Yi(4,n)}catch(m){_e(n,t,m)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var a=n.return;try{r.componentDidMount()}catch(m){_e(n,a,m)}}var l=n.return;try{Xo(n)}catch(m){_e(n,l,m)}break;case 5:var c=n.return;try{Xo(n)}catch(m){_e(n,c,m)}}}catch(m){_e(n,n.return,m)}if(n===e){T=null;break}var p=n.sibling;if(p!==null){p.return=n.return,T=p;break}T=n.return}}var Hp=Math.ceil,Xi=J.ReactCurrentDispatcher,tl=J.ReactCurrentOwner,gn=J.ReactCurrentBatchConfig,te=0,We=null,Te=null,Ve=0,fn=0,Gt=et(0),Ne=0,Wr=null,xt=0,ea=0,rl=0,Ur=null,an=null,il=0,Yt=1/0,qn=null,na=!1,al=null,ot=null,ta=!1,lt=null,ra=0,Br=0,ol=null,ia=-1,aa=0;function Xe(){return te&6?Ae():ia!==-1?ia:ia=Ae()}function st(e){return e.mode&1?te&2&&Ve!==0?Ve&-Ve:Pp.transition!==null?(aa===0&&(aa=As()),aa):(e=ce,e!==0||(e=window.event,e=e===void 0?16:$s(e.type)),e):1}function jn(e,n,t,r){if(50<Br)throw Br=0,ol=null,Error(o(185));mr(e,t,r),(!(te&2)||e!==We)&&(e===We&&(!(te&2)&&(ea|=t),Ne===4&&ut(e,Ve)),on(e,r),t===1&&te===0&&!(n.mode&1)&&(Yt=Ae()+500,Di&&tt()))}function on(e,n){var t=e.callbackNode;Pf(e,n);var r=mi(e,e===We?Ve:0);if(r===0)t!==null&&Cs(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Cs(t),n===1)e.tag===0?Cp($c.bind(null,e)):zu($c.bind(null,e)),Rp(function(){!(te&6)&&tt()}),t=null;else{switch(Fs(r)){case 1:t=La;break;case 4:t=Ps;break;case 16:t=ci;break;case 536870912:t=_s;break;default:t=ci}t=Kc(t,Nc.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Nc(e,n){if(ia=-1,aa=0,te&6)throw Error(o(327));var t=e.callbackNode;if(Xt()&&e.callbackNode!==t)return null;var r=mi(e,e===We?Ve:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=oa(e,r);else{n=r;var a=te;te|=2;var l=Wc();(We!==e||Ve!==n)&&(qn=null,Yt=Ae()+500,Rt(e,n));do try{Jp();break}catch(p){qc(e,p)}while(!0);Ro(),Xi.current=l,te=a,Te!==null?n=0:(We=null,Ve=0,n=Ne)}if(n!==0){if(n===2&&(a=Na(e),a!==0&&(r=a,n=ll(e,a))),n===1)throw t=Wr,Rt(e,0),ut(e,r),on(e,Ae()),t;if(n===6)ut(e,r);else{if(a=e.current.alternate,!(r&30)&&!Qp(a)&&(n=oa(e,r),n===2&&(l=Na(e),l!==0&&(r=l,n=ll(e,l))),n===1))throw t=Wr,Rt(e,0),ut(e,r),on(e,Ae()),t;switch(e.finishedWork=a,e.finishedLanes=r,n){case 0:case 1:throw Error(o(345));case 2:zt(e,an,qn);break;case 3:if(ut(e,r),(r&130023424)===r&&(n=il+500-Ae(),10<n)){if(mi(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){Xe(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=po(zt.bind(null,e,an,qn),n);break}zt(e,an,qn);break;case 4:if(ut(e,r),(r&4194240)===r)break;for(n=e.eventTimes,a=-1;0<r;){var c=31-kn(r);l=1<<c,c=n[c],c>a&&(a=c),r&=~l}if(r=a,r=Ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Hp(r/1960))-r,10<r){e.timeoutHandle=po(zt.bind(null,e,an,qn),r);break}zt(e,an,qn);break;case 5:zt(e,an,qn);break;default:throw Error(o(329))}}}return on(e,Ae()),e.callbackNode===t?Nc.bind(null,e):null}function ll(e,n){var t=Ur;return e.current.memoizedState.isDehydrated&&(Rt(e,n).flags|=256),e=oa(e,n),e!==2&&(n=an,an=t,n!==null&&sl(n)),e}function sl(e){an===null?an=e:an.push.apply(an,e)}function Qp(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var a=t[r],l=a.getSnapshot;a=a.value;try{if(!bn(l(),a))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ut(e,n){for(n&=~rl,n&=~ea,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-kn(n),r=1<<t;e[t]=-1,n&=~r}}function $c(e){if(te&6)throw Error(o(327));Xt();var n=mi(e,0);if(!(n&1))return on(e,Ae()),null;var t=oa(e,n);if(e.tag!==0&&t===2){var r=Na(e);r!==0&&(n=r,t=ll(e,r))}if(t===1)throw t=Wr,Rt(e,0),ut(e,n),on(e,Ae()),t;if(t===6)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,zt(e,an,qn),on(e,Ae()),null}function ul(e,n){var t=te;te|=1;try{return e(n)}finally{te=t,te===0&&(Yt=Ae()+500,Di&&tt())}}function St(e){lt!==null&&lt.tag===0&&!(te&6)&&Xt();var n=te;te|=1;var t=gn.transition,r=ce;try{if(gn.transition=null,ce=1,e)return e()}finally{ce=r,gn.transition=t,te=n,!(te&6)&&tt()}}function cl(){fn=Gt.current,ye(Gt)}function Rt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Sp(t)),Te!==null)for(t=Te.return;t!==null;){var r=t;switch(yo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ai();break;case 3:Kt(),ye(nn),ye(Ke),Fo();break;case 5:_o(r);break;case 4:Kt();break;case 13:ye(ze);break;case 19:ye(ze);break;case 10:zo(r.type._context);break;case 22:case 23:cl()}t=t.return}if(We=e,Te=e=ct(e.current,null),Ve=fn=n,Ne=0,Wr=null,rl=ea=xt=0,an=Ur=null,yt!==null){for(n=0;n<yt.length;n++)if(t=yt[n],r=t.interleaved,r!==null){t.interleaved=null;var a=r.next,l=t.pending;if(l!==null){var c=l.next;l.next=a,r.next=c}t.pending=r}yt=null}return e}function qc(e,n){do{var t=Te;try{if(Ro(),Ui.current=Qi,Bi){for(var r=je.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}Bi=!1}if(bt=0,qe=Le=je=null,Ir=!1,Mr=0,tl.current=null,t===null||t.return===null){Ne=1,Wr=n,Te=null;break}e:{var l=e,c=t.return,p=t,m=n;if(n=Ve,p.flags|=32768,m!==null&&typeof m=="object"&&typeof m.then=="function"){var b=m,E=p,C=E.tag;if(!(E.mode&1)&&(C===0||C===11||C===15)){var z=E.alternate;z?(E.updateQueue=z.updateQueue,E.memoizedState=z.memoizedState,E.lanes=z.lanes):(E.updateQueue=null,E.memoizedState=null)}var F=fc(c);if(F!==null){F.flags&=-257,pc(F,c,p,l,n),F.mode&1&&dc(l,b,n),n=F,m=b;var M=n.updateQueue;if(M===null){var L=new Set;L.add(m),n.updateQueue=L}else M.add(m);break e}else{if(!(n&1)){dc(l,b,n),dl();break e}m=Error(o(426))}}else if(be&&p.mode&1){var Fe=fc(c);if(Fe!==null){!(Fe.flags&65536)&&(Fe.flags|=256),pc(Fe,c,p,l,n),xo(Jt(m,p));break e}}l=m=Jt(m,p),Ne!==4&&(Ne=2),Ur===null?Ur=[l]:Ur.push(l),l=c;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var y=uc(l,m,n);Iu(l,y);break e;case 1:p=m;var h=l.type,k=l.stateNode;if(!(l.flags&128)&&(typeof h.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(ot===null||!ot.has(k)))){l.flags|=65536,n&=-n,l.lanes|=n;var P=cc(l,p,n);Iu(l,P);break e}}l=l.return}while(l!==null)}Bc(t)}catch(N){n=N,Te===t&&t!==null&&(Te=t=t.return);continue}break}while(!0)}function Wc(){var e=Xi.current;return Xi.current=Qi,e===null?Qi:e}function dl(){(Ne===0||Ne===3||Ne===2)&&(Ne=4),We===null||!(xt&268435455)&&!(ea&268435455)||ut(We,Ve)}function oa(e,n){var t=te;te|=2;var r=Wc();(We!==e||Ve!==n)&&(qn=null,Rt(e,n));do try{Kp();break}catch(a){qc(e,a)}while(!0);if(Ro(),te=t,Xi.current=r,Te!==null)throw Error(o(261));return We=null,Ve=0,Ne}function Kp(){for(;Te!==null;)Uc(Te)}function Jp(){for(;Te!==null&&!kf();)Uc(Te)}function Uc(e){var n=Qc(e.alternate,e,fn);e.memoizedProps=e.pendingProps,n===null?Bc(e):Te=n,tl.current=null}function Bc(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Wp(t,n),t!==null){t.flags&=32767,Te=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ne=6,Te=null;return}}else if(t=qp(t,n,fn),t!==null){Te=t;return}if(n=n.sibling,n!==null){Te=n;return}Te=n=e}while(n!==null);Ne===0&&(Ne=5)}function zt(e,n,t){var r=ce,a=gn.transition;try{gn.transition=null,ce=1,Zp(e,n,t,r)}finally{gn.transition=a,ce=r}return null}function Zp(e,n,t,r){do Xt();while(lt!==null);if(te&6)throw Error(o(327));t=e.finishedWork;var a=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(_f(e,l),e===We&&(Te=We=null,Ve=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||ta||(ta=!0,Kc(ci,function(){return Xt(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=gn.transition,gn.transition=null;var c=ce;ce=1;var p=te;te|=4,tl.current=null,Bp(e,t),Tc(t,e),vp(co),gi=!!uo,co=uo=null,e.current=t,Vp(t),bf(),te=p,ce=c,gn.transition=l}else e.current=t;if(ta&&(ta=!1,lt=e,ra=a),l=e.pendingLanes,l===0&&(ot=null),Rf(t.stateNode),on(e,Ae()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)a=n[t],r(a.value,{componentStack:a.stack,digest:a.digest});if(na)throw na=!1,e=al,al=null,e;return ra&1&&e.tag!==0&&Xt(),l=e.pendingLanes,l&1?e===ol?Br++:(Br=0,ol=e):Br=0,tt(),null}function Xt(){if(lt!==null){var e=Fs(ra),n=gn.transition,t=ce;try{if(gn.transition=null,ce=16>e?16:e,lt===null)var r=!1;else{if(e=lt,lt=null,ra=0,te&6)throw Error(o(331));var a=te;for(te|=4,T=e.current;T!==null;){var l=T,c=l.child;if(T.flags&16){var p=l.deletions;if(p!==null){for(var m=0;m<p.length;m++){var b=p[m];for(T=b;T!==null;){var E=T;switch(E.tag){case 0:case 11:case 15:qr(8,E,l)}var C=E.child;if(C!==null)C.return=E,T=C;else for(;T!==null;){E=T;var z=E.sibling,F=E.return;if(Pc(E),E===b){T=null;break}if(z!==null){z.return=F,T=z;break}T=F}}}var M=l.alternate;if(M!==null){var L=M.child;if(L!==null){M.child=null;do{var Fe=L.sibling;L.sibling=null,L=Fe}while(L!==null)}}T=l}}if(l.subtreeFlags&2064&&c!==null)c.return=l,T=c;else e:for(;T!==null;){if(l=T,l.flags&2048)switch(l.tag){case 0:case 11:case 15:qr(9,l,l.return)}var y=l.sibling;if(y!==null){y.return=l.return,T=y;break e}T=l.return}}var h=e.current;for(T=h;T!==null;){c=T;var k=c.child;if(c.subtreeFlags&2064&&k!==null)k.return=c,T=k;else e:for(c=h;T!==null;){if(p=T,p.flags&2048)try{switch(p.tag){case 0:case 11:case 15:Yi(9,p)}}catch(N){_e(p,p.return,N)}if(p===c){T=null;break e}var P=p.sibling;if(P!==null){P.return=p.return,T=P;break e}T=p.return}}if(te=a,tt(),Pn&&typeof Pn.onPostCommitFiberRoot=="function")try{Pn.onPostCommitFiberRoot(di,e)}catch{}r=!0}return r}finally{ce=t,gn.transition=n}}return!1}function Vc(e,n,t){n=Jt(t,n),n=uc(e,n,1),e=it(e,n,1),n=Xe(),e!==null&&(mr(e,1,n),on(e,n))}function _e(e,n,t){if(e.tag===3)Vc(e,e,t);else for(;n!==null;){if(n.tag===3){Vc(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ot===null||!ot.has(r))){e=Jt(t,e),e=cc(n,e,1),n=it(n,e,1),e=Xe(),n!==null&&(mr(n,1,e),on(n,e));break}}n=n.return}}function Gp(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Xe(),e.pingedLanes|=e.suspendedLanes&t,We===e&&(Ve&t)===t&&(Ne===4||Ne===3&&(Ve&130023424)===Ve&&500>Ae()-il?Rt(e,0):rl|=t),on(e,n)}function Hc(e,n){n===0&&(e.mode&1?(n=pi,pi<<=1,!(pi&130023424)&&(pi=4194304)):n=1);var t=Xe();e=Ln(e,n),e!==null&&(mr(e,n,t),on(e,t))}function Yp(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Hc(e,t)}function Xp(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(t=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(o(314))}r!==null&&r.delete(n),Hc(e,t)}var Qc;Qc=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||nn.current)rn=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return rn=!1,$p(e,n,t);rn=!!(e.flags&131072)}else rn=!1,be&&n.flags&1048576&&ju(n,Oi,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Zi(e,n),e=n.pendingProps;var a=qt(n,Ke.current);Qt(n,t),a=Oo(null,n,r,e,a,t);var l=Io();return n.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,tn(r)?(l=!0,Fi(n)):l=!1,n.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Co(n),a.updater=Ki,n.stateNode=a,a._reactInternals=n,Wo(n,r,e,t),n=Ho(null,n,r,!0,l,t)):(n.tag=0,be&&l&&wo(n),Ye(null,n,a,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Zi(e,n),e=n.pendingProps,a=r._init,r=a(r._payload),n.type=r,a=n.tag=nm(r),e=Sn(r,e),a){case 0:n=Vo(null,n,r,e,t);break e;case 1:n=yc(null,n,r,e,t);break e;case 11:n=mc(null,n,r,e,t);break e;case 14:n=hc(null,n,r,Sn(r.type,e),t);break e}throw Error(o(306,r,""))}return n;case 0:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:Sn(r,a),Vo(e,n,r,a,t);case 1:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:Sn(r,a),yc(e,n,r,a,t);case 3:e:{if(kc(n),e===null)throw Error(o(387));r=n.pendingProps,l=n.memoizedState,a=l.element,Ou(e,n),qi(n,r,null,t);var c=n.memoizedState;if(r=c.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:c.cache,pendingSuspenseBoundaries:c.pendingSuspenseBoundaries,transitions:c.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){a=Jt(Error(o(423)),n),n=bc(e,n,r,t,a);break e}else if(r!==a){a=Jt(Error(o(424)),n),n=bc(e,n,r,t,a);break e}else for(dn=Xn(n.stateNode.containerInfo.firstChild),cn=n,be=!0,xn=null,t=Du(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Bt(),r===a){n=$n(e,n,t);break e}Ye(e,n,r,t)}n=n.child}return n;case 5:return Lu(n),e===null&&bo(n),r=n.type,a=n.pendingProps,l=e!==null?e.memoizedProps:null,c=a.children,fo(r,a)?c=null:l!==null&&fo(r,l)&&(n.flags|=32),wc(e,n),Ye(e,n,c,t),n.child;case 6:return e===null&&bo(n),null;case 13:return xc(e,n,t);case 4:return Po(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Vt(n,null,r,t):Ye(e,n,r,t),n.child;case 11:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:Sn(r,a),mc(e,n,r,a,t);case 7:return Ye(e,n,n.pendingProps,t),n.child;case 8:return Ye(e,n,n.pendingProps.children,t),n.child;case 12:return Ye(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,a=n.pendingProps,l=n.memoizedProps,c=a.value,ve(Li,r._currentValue),r._currentValue=c,l!==null)if(bn(l.value,c)){if(l.children===a.children&&!nn.current){n=$n(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var p=l.dependencies;if(p!==null){c=l.child;for(var m=p.firstContext;m!==null;){if(m.context===r){if(l.tag===1){m=Nn(-1,t&-t),m.tag=2;var b=l.updateQueue;if(b!==null){b=b.shared;var E=b.pending;E===null?m.next=m:(m.next=E.next,E.next=m),b.pending=m}}l.lanes|=t,m=l.alternate,m!==null&&(m.lanes|=t),jo(l.return,t,n),p.lanes|=t;break}m=m.next}}else if(l.tag===10)c=l.type===n.type?null:l.child;else if(l.tag===18){if(c=l.return,c===null)throw Error(o(341));c.lanes|=t,p=c.alternate,p!==null&&(p.lanes|=t),jo(c,t,n),c=l.sibling}else c=l.child;if(c!==null)c.return=l;else for(c=l;c!==null;){if(c===n){c=null;break}if(l=c.sibling,l!==null){l.return=c.return,c=l;break}c=c.return}l=c}Ye(e,n,a.children,t),n=n.child}return n;case 9:return a=n.type,r=n.pendingProps.children,Qt(n,t),a=hn(a),r=r(a),n.flags|=1,Ye(e,n,r,t),n.child;case 14:return r=n.type,a=Sn(r,n.pendingProps),a=Sn(r.type,a),hc(e,n,r,a,t);case 15:return vc(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:Sn(r,a),Zi(e,n),n.tag=1,tn(r)?(e=!0,Fi(n)):e=!1,Qt(n,t),lc(n,r,a),Wo(n,r,a,t),Ho(null,n,r,!0,e,t);case 19:return Rc(e,n,t);case 22:return gc(e,n,t)}throw Error(o(156,n.tag))};function Kc(e,n){return Es(e,n)}function em(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wn(e,n,t,r){return new em(e,n,t,r)}function fl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function nm(e){if(typeof e=="function")return fl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===$e)return 11;if(e===Cn)return 14}return 2}function ct(e,n){var t=e.alternate;return t===null?(t=wn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function la(e,n,t,r,a,l){var c=2;if(r=e,typeof e=="function")fl(e)&&(c=1);else if(typeof e=="string")c=5;else e:switch(e){case le:return jt(t.children,a,l,n);case pe:c=8,a|=8;break;case _:return e=wn(12,t,n,a|2),e.elementType=_,e.lanes=l,e;case Me:return e=wn(13,t,n,a),e.elementType=Me,e.lanes=l,e;case Ce:return e=wn(19,t,n,a),e.elementType=Ce,e.lanes=l,e;case Pe:return sa(t,a,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case $:c=10;break e;case re:c=9;break e;case $e:c=11;break e;case Cn:c=14;break e;case en:c=16,r=null;break e}throw Error(o(130,e==null?e:typeof e,""))}return n=wn(c,t,n,a),n.elementType=e,n.type=r,n.lanes=l,n}function jt(e,n,t,r){return e=wn(7,e,r,n),e.lanes=t,e}function sa(e,n,t,r){return e=wn(22,e,r,n),e.elementType=Pe,e.lanes=t,e.stateNode={isHidden:!1},e}function pl(e,n,t){return e=wn(6,e,null,n),e.lanes=t,e}function ml(e,n,t){return n=wn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function tm(e,n,t,r,a){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$a(0),this.expirationTimes=$a(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$a(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function hl(e,n,t,r,a,l,c,p,m){return e=new tm(e,n,t,p,m),n===1?(n=1,l===!0&&(n|=8)):n=0,l=wn(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Co(l),e}function rm(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Re,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Jc(e){if(!e)return nt;e=e._reactInternals;e:{if(mt(e)!==e||e.tag!==1)throw Error(o(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(tn(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(o(171))}if(e.tag===1){var t=e.type;if(tn(t))return Su(e,t,n)}return n}function Zc(e,n,t,r,a,l,c,p,m){return e=hl(t,r,!0,e,a,l,c,p,m),e.context=Jc(null),t=e.current,r=Xe(),a=st(t),l=Nn(r,a),l.callback=n??null,it(t,l,a),e.current.lanes=a,mr(e,a,r),on(e,r),e}function ua(e,n,t,r){var a=n.current,l=Xe(),c=st(a);return t=Jc(t),n.context===null?n.context=t:n.pendingContext=t,n=Nn(l,c),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=it(a,n,c),e!==null&&(jn(e,a,c,l),$i(e,a,c)),c}function ca(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Gc(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function vl(e,n){Gc(e,n),(e=e.alternate)&&Gc(e,n)}function im(){return null}var Yc=typeof reportError=="function"?reportError:function(e){console.error(e)};function gl(e){this._internalRoot=e}da.prototype.render=gl.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(o(409));ua(e,n,null,null)},da.prototype.unmount=gl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;St(function(){ua(null,e,null,null)}),n[Tn]=null}};function da(e){this._internalRoot=e}da.prototype.unstable_scheduleHydration=function(e){if(e){var n=Os();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Zn.length&&n!==0&&n<Zn[t].priority;t++);Zn.splice(t,0,e),t===0&&Ls(e)}};function wl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function fa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Xc(){}function am(e,n,t,r,a){if(a){if(typeof r=="function"){var l=r;r=function(){var b=ca(c);l.call(b)}}var c=Zc(n,r,e,0,null,!1,!1,"",Xc);return e._reactRootContainer=c,e[Tn]=c.current,Cr(e.nodeType===8?e.parentNode:e),St(),c}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var p=r;r=function(){var b=ca(m);p.call(b)}}var m=hl(e,0,!1,null,null,!1,!1,"",Xc);return e._reactRootContainer=m,e[Tn]=m.current,Cr(e.nodeType===8?e.parentNode:e),St(function(){ua(n,m,t,r)}),m}function pa(e,n,t,r,a){var l=t._reactRootContainer;if(l){var c=l;if(typeof a=="function"){var p=a;a=function(){var m=ca(c);p.call(m)}}ua(n,c,e,a)}else c=am(t,n,e,a,r);return ca(c)}Ds=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=pr(n.pendingLanes);t!==0&&(qa(n,t|1),on(n,Ae()),!(te&6)&&(Yt=Ae()+500,tt()))}break;case 13:St(function(){var r=Ln(e,1);if(r!==null){var a=Xe();jn(r,e,1,a)}}),vl(e,1)}},Wa=function(e){if(e.tag===13){var n=Ln(e,134217728);if(n!==null){var t=Xe();jn(n,e,134217728,t)}vl(e,134217728)}},Ts=function(e){if(e.tag===13){var n=st(e),t=Ln(e,n);if(t!==null){var r=Xe();jn(t,e,n,r)}vl(e,n)}},Os=function(){return ce},Is=function(e,n){var t=ce;try{return ce=e,n()}finally{ce=t}},Ta=function(e,n,t){switch(n){case"input":if(ja(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var a=_i(r);if(!a)throw Error(o(90));os(r),ja(r,a)}}}break;case"textarea":ds(e,t);break;case"select":n=t.value,n!=null&&Pt(e,!!t.multiple,n,!1)}},ks=ul,bs=St;var om={usingClientEntryPoint:!1,Events:[Ar,Nt,_i,ws,ys,ul]},Vr={findFiberByHostInstance:ht,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lm={bundleType:Vr.bundleType,version:Vr.version,rendererPackageName:Vr.rendererPackageName,rendererConfig:Vr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:J.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=zs(e),e===null?null:e.stateNode},findFiberByHostInstance:Vr.findFiberByHostInstance||im,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ma=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ma.isDisabled&&ma.supportsFiber)try{di=ma.inject(lm),Pn=ma}catch{}}return ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=om,ln.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wl(n))throw Error(o(200));return rm(e,n,null,t)},ln.createRoot=function(e,n){if(!wl(e))throw Error(o(299));var t=!1,r="",a=Yc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),n=hl(e,1,!1,null,null,t,!1,r,a),e[Tn]=n.current,Cr(e.nodeType===8?e.parentNode:e),new gl(n)},ln.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=zs(n),e=e===null?null:e.stateNode,e},ln.flushSync=function(e){return St(e)},ln.hydrate=function(e,n,t){if(!fa(n))throw Error(o(200));return pa(null,e,n,!0,t)},ln.hydrateRoot=function(e,n,t){if(!wl(e))throw Error(o(405));var r=t!=null&&t.hydratedSources||null,a=!1,l="",c=Yc;if(t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),n=Zc(n,null,e,1,t??null,a,!1,l,c),e[Tn]=n.current,Cr(e),r)for(e=0;e<r.length;e++)t=r[e],a=t._getVersion,a=a(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,a]:n.mutableSourceEagerHydrationData.push(t,a);return new da(n)},ln.render=function(e,n,t){if(!fa(n))throw Error(o(200));return pa(null,e,n,!1,t)},ln.unmountComponentAtNode=function(e){if(!fa(e))throw Error(o(40));return e._reactRootContainer?(St(function(){pa(null,null,e,!1,function(){e._reactRootContainer=null,e[Tn]=null})}),!0):!1},ln.unstable_batchedUpdates=ul,ln.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!fa(t))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return pa(e,n,t,!1,r)},ln.version="18.3.1-next-f1338f8080-20240426",ln}var ld;function gm(){if(ld)return bl.exports;ld=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(i){console.error(i)}}return s(),bl.exports=vm(),bl.exports}var sd;function wm(){if(sd)return va;sd=1;var s=gm();return va.createRoot=s.createRoot,va.hydrateRoot=s.hydrateRoot,va}var ym=wm();const km=Kd(ym);class bm extends $l.Component{constructor(o){super(o);ha(this,"container");ha(this,"player",null);ha(this,"isLoading",!1);this.container=$l.createRef()}componentDidMount(){this.player=window.RufflePlayer.newest().createPlayer(),this.player.id="player",this.player.addEventListener("loadedmetadata",()=>{this.props.onLoadedMetadata&&this.props.onLoadedMetadata(this.player.ruffle().metadata)}),this.isLoading=!1,this.container.current.appendChild(this.player)}componentWillUnmount(){var o;(o=this.player)==null||o.remove(),this.player=null,this.isLoading=!1}render(){return D.jsx("div",{id:this.props.id,ref:this.container,onDragEnter:this.props.onDragEnter,onDragLeave:this.props.onDragLeave,onDragOver:this.props.onDragOver,onDrop:this.props.onDragDrop,children:this.props.children})}reload(){var o;this.isLoading||(this.isLoading=!0,(o=this.player)==null||o.ruffle().reload().finally(()=>{this.isLoading=!1}))}loadUrl(o,u){var d;this.isLoading||(this.isLoading=!0,(d=this.player)==null||d.ruffle().load({url:o,...this.props.baseConfig,...u}).finally(()=>{this.isLoading=!1}))}loadFile(o){this.isLoading||(this.isLoading=!0,new Response(o).arrayBuffer().then(u=>{var d;return(d=this.player)==null?void 0:d.ruffle().load({data:u,...this.props.baseConfig})}).finally(()=>{this.isLoading=!1}))}}const xm=""+new URL("../logo.svg",import.meta.url).href,ud={Animation:"Animations",Game:"Games"};function Sm({sampleSelectionInput:s,selectedSample:i,setSelectedSample:o,setSelectedFilename:u,onSelectUrl:d}){const[f,v]=Qe.useState([]),g=R=>{const O=R.target,q=parseInt(O.value,10);f[q]&&x(f[q])},x=Qe.useCallback(R=>{d(R.location,R.config??{}),o(R),u(null)},[d,u,o]);return Qe.useEffect(()=>{(async()=>{const R=await fetch("swfs.json");if(R.ok){const O=await R.json();v(O.swfs),O.swfs.length>0&&x(O.swfs[0])}})()},[x]),D.jsxs("div",{id:"sample-swfs-container",className:f.length==0?"hidden":"",children:[D.jsx("span",{id:"sample-swfs-label",children:"Sample SWF:"}),D.jsxs("select",{id:"sample-swfs","aria-describedby":"sample-swfs-label",onChange:g,ref:s,children:[f.map((R,O)=>D.jsx(Qe.Fragment,{children:R.type==null&&D.jsx("option",{value:O,children:R.title})},O)),Object.keys(ud).map(R=>D.jsx("optgroup",{label:ud[R],children:f.map((O,q)=>D.jsx(Qe.Fragment,{children:O.type==R&&D.jsx("option",{value:q,children:O.title})},q))},R))]}),D.jsxs("div",{id:"author-container",className:i!=null&&i.author?"":"hidden",children:[D.jsx("span",{children:"Author: "}),D.jsx("a",{href:i==null?void 0:i.authorLink,target:"_blank",id:"author",children:i==null?void 0:i.author})]})]})}function Rm({allowUrlLoading:s,allowSampleSwfs:i,onToggleMetadata:o,onReloadMovie:u,onSelectUrl:d,onSelectFile:f,selectedFilename:v,setSelectedFilename:g,onFileDragLeave:x,onFileDragOver:R,onFileDragDrop:O}){const q=Qe.useRef(null),K=Qe.useRef(null),Q=Qe.useRef(null),[ne,H]=Qe.useState(null),Z=()=>{var le;(le=q.current)==null||le.click()},Ie=le=>{d(le,{}),g(null),H(null),Q.current&&(Q.current.selectedIndex=-1)},De=le=>{f(le),H(null),g(le.name),Q.current&&(Q.current.selectedIndex=-1)},fe=le=>{var pe;le.preventDefault(),(pe=K.current)!=null&&pe.value&&Ie(K.current.value)},J=le=>{const pe=le.target;pe!=null&&pe.files&&(pe==null?void 0:pe.files.length)>0&&pe.files[0]&&De(pe.files[0])},Se=()=>{confirm("Reload the current SWF?")&&u()},Re=navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPhone/i)||navigator.platform==="MacIntel"&&typeof navigator.standalone<"u";return Qe.useEffect(()=>{v!=null&&(H(null),Q.current&&(Q.current.selectedIndex=-1))},[v]),D.jsxs("div",{id:"nav",children:[D.jsx("a",{id:"logo-container",href:"https://ruffle.rs/",target:"_blank",children:D.jsx("img",{className:"logo",src:xm,alt:"Ruffle"})}),D.jsxs("div",{className:"select-container",children:[D.jsxs("form",{id:"web-url-container",onSubmit:fe,hidden:!s,children:[D.jsx("input",{id:"web-url",name:"web-url",type:"text",placeholder:"URL of a .swf file on the web",ref:K}),D.jsx("button",{id:"web-form-submit",type:"submit",children:"Load"})]}),D.jsxs("div",{id:"local-file-container",onDragLeave:x,onDragOver:R,onDrop:O,children:[D.jsx("span",{id:"local-file-static-label",onClick:Z,children:"Local SWF:"}),D.jsx("input",{type:"file",accept:Re?void 0:".swf,.spl",id:"local-file","aria-describedby":"local-file-static-label",ref:q,onChange:J}),D.jsx("button",{id:"local-file-label",onClick:Z,children:"Select File"}),D.jsx("label",{id:"local-file-name",htmlFor:"local-file",children:v??"No file selected."})]}),i&&D.jsx(Sm,{onSelectUrl:d,selectedSample:ne,setSelectedFilename:g,setSelectedSample:H,sampleSelectionInput:Q})]}),D.jsxs("div",{children:[D.jsx("svg",{id:"toggle-info",width:"20px",viewBox:"0 0 416.979 416.979",onClick:o,children:D.jsx("path",{fill:"white",d:"M356.004 61.156c-81.37-81.47-213.377-81.551-294.848-.182-81.47 81.371-81.552 213.379-.181 294.85 81.369 81.47 213.378 81.551 294.849.181 81.469-81.369 81.551-213.379.18-294.849zM237.6 340.786a5.821 5.821 0 0 1-5.822 5.822h-46.576a5.821 5.821 0 0 1-5.822-5.822V167.885a5.821 5.821 0 0 1 5.822-5.822h46.576a5.82 5.82 0 0 1 5.822 5.822v172.901zm-29.11-202.885c-18.618 0-33.766-15.146-33.766-33.765 0-18.617 15.147-33.766 33.766-33.766s33.766 15.148 33.766 33.766c0 18.619-15.149 33.765-33.766 33.765z"})}),D.jsx("svg",{id:"reload-swf",width:"20px",viewBox:"0 0 489.711 489.711",onClick:Se,children:D.jsx("path",{fill:"white",d:"M112.156 97.111c72.3-65.4 180.5-66.4 253.8-6.7l-58.1 2.2c-7.5.3-13.3 6.5-13 14 .3 7.3 6.3 13 13.5 13h.5l89.2-3.3c7.3-.3 13-6.2 13-13.5v-1.6l-3.3-88.2c-.3-7.5-6.6-13.3-14-13-7.5.3-13.3 6.5-13 14l2.1 55.3c-36.3-29.7-81-46.9-128.8-49.3-59.2-3-116.1 17.3-160 57.1-60.4 54.7-86 137.9-66.8 217.1 1.5 6.2 7 10.3 13.1 10.3 1.1 0 2.1-.1 3.2-.4 7.2-1.8 11.7-9.1 9.9-16.3-16.8-69.6 5.6-142.7 58.7-190.7zm350.3 98.4c-1.8-7.2-9.1-11.7-16.3-9.9-7.2 1.8-11.7 9.1-9.9 16.3 16.9 69.6-5.6 142.7-58.7 190.7-37.3 33.7-84.1 50.3-130.7 50.3-44.5 0-88.9-15.1-124.7-44.9l58.8-5.3c7.4-.7 12.9-7.2 12.2-14.7s-7.2-12.9-14.7-12.2l-88.9 8c-7.4.7-12.9 7.2-12.2 14.7l8 88.9c.6 7 6.5 12.3 13.4 12.3.4 0 .8 0 1.2-.1 7.4-.7 12.9-7.2 12.2-14.7l-4.8-54.1c36.3 29.4 80.8 46.5 128.3 48.9 3.8.2 7.6.3 11.3.3 55.1 0 107.5-20.2 148.7-57.4 60.4-54.7 86-137.8 66.8-217.1z"})})]})]})}const zm={1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9.0",10:"10.0/10.1",11:"10.2",12:"10.3",13:"11.0",14:"11.1",15:"11.2",16:"11.3",17:"11.4",18:"11.5",19:"11.6",20:"11.7",21:"11.8",22:"11.9",23:"12",24:"13",25:"14",26:"15",27:"16",28:"17",29:"18",30:"19",31:"20",32:"21",33:"22",34:"23",35:"24",36:"25",37:"26",38:"27",39:"28",40:"29",41:"30",42:"31",43:"32"};function jm({visible:s,metadata:i}){return D.jsxs("div",{id:"info-container",className:s?"":"hidden",children:[D.jsxs("div",{children:[D.jsx("span",{children:"Uncompressed Length"}),D.jsxs("span",{id:"uncompressedLength",children:[((i==null?void 0:i.uncompressedLength)??0)>>10,"Kb"]})]}),D.jsxs("div",{children:[D.jsx("span",{children:"SWF Version"}),D.jsx("span",{id:"swfVersion",children:i==null?void 0:i.swfVersion})]}),D.jsxs("div",{children:[D.jsx("span",{children:"FP Version"}),D.jsx("span",{id:"flashVersion",children:i?zm[i.swfVersion]??"Unknown":""})]}),D.jsxs("div",{children:[D.jsx("span",{children:"ActionScript 3"}),D.jsx("span",{id:"isActionScript3",children:i!=null&&i.isActionScript3?"true":"false"})]}),D.jsxs("div",{children:[D.jsx("span",{children:"Total Frames"}),D.jsx("span",{id:"numFrames",children:i==null?void 0:i.numFrames})]}),D.jsxs("div",{children:[D.jsx("span",{children:"Frame Rate"}),D.jsx("span",{id:"frameRate",children:i==null?void 0:i.frameRate})]}),D.jsxs("div",{children:[D.jsx("span",{children:"SWF Width"}),D.jsx("span",{id:"width",children:i==null?void 0:i.width})]}),D.jsxs("div",{children:[D.jsx("span",{children:"SWF Height"}),D.jsx("span",{id:"height",children:i==null?void 0:i.height})]}),D.jsxs("div",{children:[D.jsx("span",{children:"SWF Background Color"}),D.jsx("span",{id:"backgroundColor",style:{backgroundColor:(i==null?void 0:i.backgroundColor)??void 0}})]})]})}function Em({ruffleBaseConfig:s,allowUrlLoading:i,allowSampleSwfs:o}){const[u,d]=Qe.useState(null),[f,v]=Qe.useState(!1),[g,x]=Qe.useState(null),[R,O]=Qe.useState(!1),q=Qe.useRef(null),K=()=>{v(!f)},Q=()=>{var J;(J=q.current)==null||J.reload()},ne=Qe.useCallback((J,Se)=>{var Re;(Re=q.current)==null||Re.loadUrl(J,Se)},[]),H=J=>{var Se;(Se=q.current)==null||Se.loadFile(J)},Z=J=>{J.stopPropagation(),J.preventDefault()},Ie=J=>{J.stopPropagation(),J.preventDefault(),O(!1)},De=J=>{J.stopPropagation(),J.preventDefault(),O(!0)},fe=J=>{var Se;J.stopPropagation(),J.preventDefault(),O(!1),J.dataTransfer&&(x(J.dataTransfer.files[0].name),(Se=q.current)==null||Se.loadFile(J.dataTransfer.files[0]))};return D.jsxs(D.Fragment,{children:[D.jsx(Rm,{allowUrlLoading:i,allowSampleSwfs:o,onToggleMetadata:K,onReloadMovie:Q,onSelectUrl:ne,onSelectFile:H,selectedFilename:g,setSelectedFilename:x,onFileDragLeave:Ie,onFileDragOver:De,onFileDragDrop:fe}),D.jsxs("div",{id:"main",className:f?"info-container-shown":"",children:[D.jsx(bm,{id:"player-container","aria-label":"Select a demo or drag an SWF",onLoadedMetadata:d,ref:q,onDragEnter:Z,onDragLeave:Ie,onDragOver:De,onDragDrop:fe,baseConfig:s,children:D.jsx("div",{id:"overlay",className:R?"drag":""})}),D.jsx(jm,{visible:f,metadata:u})]})]})}class er{constructor(i,o,u,d,f){this.major=i,this.minor=o,this.patch=u,this.prIdent=d,this.buildIdent=f}static fromSemver(i){const o=i.split("+"),u=o[0].split("-"),d=u[0].split("."),f=parseInt(d[0],10);let v=0,g=0,x=null,R=null;return d[1]!==void 0&&(v=parseInt(d[1],10)),d[2]!==void 0&&(g=parseInt(d[2],10)),u[1]!==void 0&&(x=u[1].split(".")),o[1]!==void 0&&(R=o[1].split(".")),new er(f,v,g,x,R)}isCompatibleWith(i){return this.major!==0&&this.major===i.major||this.major===0&&i.major===0&&this.minor!==0&&this.minor===i.minor||this.major===0&&i.major===0&&this.minor===0&&i.minor===0&&this.patch!==0&&this.patch===i.patch}hasPrecedenceOver(i){if(this.major>i.major)return!0;if(this.major<i.major)return!1;if(this.minor>i.minor)return!0;if(this.minor<i.minor)return!1;if(this.patch>i.patch)return!0;if(this.patch<i.patch)return!1;if(this.prIdent===null&&i.prIdent!==null)return!0;if(this.prIdent!==null&&i.prIdent===null)return!1;if(this.prIdent!==null&&i.prIdent!==null){const o=/^[0-9]*$/;for(let u=0;u<this.prIdent.length&&u<i.prIdent.length;u+=1){const d=o.test(i.prIdent[u]),f=o.test(this.prIdent[u]);if(!f&&d)return!0;if(f&&d){const v=parseInt(this.prIdent[u],10),g=parseInt(i.prIdent[u],10);if(v>g)return!0;if(v<g)return!1}else{if(f&&!d)return!1;if(!f&&!d){if(this.prIdent[u]>i.prIdent[u])return!0;if(this.prIdent[u]<i.prIdent[u])return!1}}}if(this.prIdent.length>i.prIdent.length)return!0;if(this.prIdent.length<i.prIdent.length)return!1}if(this.buildIdent!==null&&i.buildIdent===null)return!0;if(this.buildIdent===null&&i.buildIdent!==null)return!1;if(this.buildIdent!==null&&i.buildIdent!==null){const o=/^[0-9]*$/;for(let u=0;u<this.buildIdent.length&&u<i.buildIdent.length;u+=1){const d=o.test(this.buildIdent[u]),f=o.test(i.buildIdent[u]);if(!d&&f)return!0;if(d&&f){const v=parseInt(this.buildIdent[u],10),g=parseInt(i.buildIdent[u],10);if(v>g)return!0;if(v<g)return!1}else{if(d&&!f)return!1;if(!d&&!f){if(this.buildIdent[u]>i.buildIdent[u])return!0;if(this.buildIdent[u]<i.buildIdent[u])return!1}}}return this.buildIdent.length>i.buildIdent.length}return!1}isEqual(i){return this.major===i.major&&this.minor===i.minor&&this.patch===i.patch}isStableOrCompatiblePrerelease(i){return i.prIdent===null?!0:this.major===i.major&&this.minor===i.minor&&this.patch===i.patch}}class es{constructor(i){this.requirements=i}satisfiedBy(i){for(const o of this.requirements){let u=!0;for(const{comparator:d,version:f}of o)u=u&&f.isStableOrCompatiblePrerelease(i),d===""||d==="="?u=u&&f.isEqual(i):d===">"?u=u&&i.hasPrecedenceOver(f):d===">="?u=u&&(i.hasPrecedenceOver(f)||f.isEqual(i)):d==="<"?u=u&&f.hasPrecedenceOver(i):d==="<="?u=u&&(f.hasPrecedenceOver(i)||f.isEqual(i)):d==="^"&&(u=u&&f.isCompatibleWith(i));if(u)return!0}return!1}static fromRequirementString(i){const o=i.split(" ");let u=[];const d=[];for(const f of o)if(f==="||")u.length>0&&(d.push(u),u=[]);else if(f.length>0){const v=/[0-9]/.exec(f);if(v){const g=f.slice(0,v.index).trim(),x=er.fromSemver(f.slice(v.index).trim());u.push({comparator:g,version:x})}}return u.length>0&&d.push(u),new es(d)}}class cd{constructor(i){var o;this.sources=(i==null?void 0:i.sources)||{},this.config=(i==null?void 0:i.config)||{},this.invoked=(i==null?void 0:i.invoked)||!1,this.newestName=(i==null?void 0:i.newestName)||null,(o=i==null?void 0:i.superseded)==null||o.call(i),document.readyState==="loading"?document.addEventListener("readystatechange",this.init.bind(this)):window.setTimeout(this.init.bind(this),0)}get version(){return"0.1.0"}newestSourceName(){let i=null,o=er.fromSemver("0.0.0");for(const u in this.sources)if(Object.prototype.hasOwnProperty.call(this.sources,u)){const d=er.fromSemver(this.sources[u].version);d.hasPrecedenceOver(o)&&(i=u,o=d)}return i}init(){if(!this.invoked){if(this.invoked=!0,this.newestName=this.newestSourceName(),this.newestName===null)throw new Error("No registered Ruffle source!");("polyfills"in this.config?this.config.polyfills:!0)!==!1&&this.sources[this.newestName].polyfill()}}newest(){const i=this.newestSourceName();return i!==null?this.sources[i]:null}satisfying(i){const o=es.fromRequirementString(i);let u=null;for(const d in this.sources)if(Object.prototype.hasOwnProperty.call(this.sources,d)){const f=er.fromSemver(this.sources[d].version);o.satisfiedBy(f)&&(u=this.sources[d])}return u}localCompatible(){return this.sources.local!==void 0?this.satisfying("^"+this.sources.local.version):this.newest()}local(){return this.sources.local!==void 0?this.satisfying("="+this.sources.local.version):this.newest()}superseded(){this.invoked=!0}}const yn={versionNumber:"0.1.0",versionName:"nightly 2024-12-09",versionChannel:"nightly",buildDate:"2024-12-09T00:06:54.238Z",commitHash:"51a6254f1dcc64c8913ecfafb31be7c44a7cc95b"};var nr;(function(s){s[s.HaveNothing=0]="HaveNothing",s[s.Loading=1]="Loading",s[s.Loaded=2]="Loaded"})(nr||(nr={}));var Wn={},Qr={},Et={},Rl={},dd;function Cm(){return dd||(dd=1,Object.defineProperty(Rl,"__esModule",{value:!0})),Rl}var zl={},fd;function Pm(){return fd||(fd=1,Object.defineProperty(zl,"__esModule",{value:!0})),zl}var jl={},pd;function _m(){return pd||(pd=1,Object.defineProperty(jl,"__esModule",{value:!0})),jl}var El={},md;function Am(){return md||(md=1,Object.defineProperty(El,"__esModule",{value:!0})),El}var Cl={},hd;function Fm(){return hd||(hd=1,Object.defineProperty(Cl,"__esModule",{value:!0})),Cl}var Kr={},vd;function Dm(){if(vd)return Kr;vd=1,Object.defineProperty(Kr,"__esModule",{value:!0}),Kr.classnames=void 0;const s=v=>Object.entries(v).map(([g,x])=>x&&g),i=v=>!!v,o=(v,g,x)=>x.indexOf(v)===g,u=[];function d(v){return v?typeof v=="string"?[v]:Array.isArray(v)?v.flatMap(d).filter(i):s(v).filter(i):u}function f(v){const g=d(v).filter(o);return g.length>0?g.join(" "):void 0}return Kr.classnames=f,Kr}var gd;function Tm(){return gd||(gd=1,function(s){var i=Et&&Et.__createBinding||(Object.create?function(u,d,f,v){v===void 0&&(v=f);var g=Object.getOwnPropertyDescriptor(d,f);(!g||("get"in g?!d.__esModule:g.writable||g.configurable))&&(g={enumerable:!0,get:function(){return d[f]}}),Object.defineProperty(u,v,g)}:function(u,d,f,v){v===void 0&&(v=f),u[v]=d[f]}),o=Et&&Et.__exportStar||function(u,d){for(var f in u)f!=="default"&&!Object.prototype.hasOwnProperty.call(d,f)&&i(d,u,f)};Object.defineProperty(s,"__esModule",{value:!0}),o(Cm(),s),o(Pm(),s),o(_m(),s),o(Am(),s),o(Fm(),s),o(Dm(),s)}(Et)),Et}var wd;function Jd(){if(wd)return Qr;wd=1,Object.defineProperty(Qr,"__esModule",{value:!0}),Qr.setAttributes=void 0;const s=Tm();function i(d,f){for(const v of Object.keys(d))v in f&&(f[v]=d[v])}const o=new RegExp("^on\\p{Lu}","u");function u(d,f){for(const v of Object.keys(f)){if(v==="__source"||v==="__self"||v==="tsxTag")continue;const g=f[v];if(v==="class"){const x=(0,s.classnames)(g);x&&d.setAttribute(v,x)}else if(v==="ref")g.current=d;else if(o.test(v)){const x=v.replace(/Capture$/,""),R=v!==x,O=x.toLowerCase().substring(2);d.addEventListener(O,g,R)}else v==="style"&&typeof g!="string"?i(g,d.style):v==="dangerouslySetInnerHTML"?d.innerHTML=g:g===!0?d.setAttribute(v,v):(g||g===0)&&d.setAttribute(v,g.toString())}}return Qr.setAttributes=u,Qr}var Un={},yd;function Zd(){if(yd)return Un;yd=1,Object.defineProperty(Un,"__esModule",{value:!0}),Un.applyTsxTag=Un.createDomElement=Un.applyChildren=void 0;function s(d,f){f instanceof Element?d.appendChild(f):typeof f=="string"||typeof f=="number"?d.appendChild(document.createTextNode(f.toString())):console.warn("Unknown type to append: ",f)}function i(d,f){for(const v of f)!v&&v!==0||(Array.isArray(v)?i(d,v):s(d,v))}Un.applyChildren=i;function o(d,f){const v=f!=null&&f.is?{is:f.is}:void 0;return f!=null&&f.xmlns?document.createElementNS(f.xmlns,d,v):document.createElement(d,v)}Un.createDomElement=o;function u(d,f){let v=d,g=f;return g&&"tsxTag"in g&&(v=g.tsxTag,!g.is&&d.includes("-")&&(g={...g,is:d})),{finalTag:v,finalAttrs:g}}return Un.applyTsxTag=u,Un}var kd;function ns(){if(kd)return Wn;kd=1,Object.defineProperty(Wn,"__esModule",{value:!0}),Wn.jsxDEV=Wn.jsxs=Wn.jsx=void 0;const s=Jd(),i=Zd();function o(u,d){if(typeof u=="function")return u(d);const{children:f,...v}=d,{finalTag:g,finalAttrs:x}=(0,i.applyTsxTag)(u,v),R=(0,i.createDomElement)(g,x);return(0,s.setAttributes)(R,x),(0,i.applyChildren)(R,[f]),R}return Wn.jsx=o,Wn.jsxs=o,Wn.jsxDEV=o,Wn}var S=ns(),ir;(function(s){s.On="on",s.Off="off",s.Auto="auto"})(ir||(ir={}));var ka;(function(s){s.Off="off",s.Fullscreen="fullscreen",s.On="on"})(ka||(ka={}));var ti;(function(s){s.Visible="visible",s.Hidden="hidden"})(ti||(ti={}));var ba;(function(s){s.Error="error",s.Warn="warn",s.Info="info",s.Debug="debug",s.Trace="trace"})(ba||(ba={}));var xa;(function(s){s.Window="window",s.Opaque="opaque",s.Transparent="transparent",s.Direct="direct",s.Gpu="gpu"})(xa||(xa={}));var bd;(function(s){s.WebGpu="webgpu",s.WgpuWebgl="wgpu-webgl",s.Webgl="webgl",s.Canvas="canvas"})(bd||(bd={}));var tr;(function(s){s.On="on",s.RightClickOnly="rightClickOnly",s.Off="off"})(tr||(tr={}));var ql;(function(s){s.AIR="air",s.FlashPlayer="flashPlayer"})(ql||(ql={}));var Wl;(function(s){s.Allow="allow",s.Confirm="confirm",s.Deny="deny"})(Wl||(Wl={}));var Ul;(function(s){s.All="all",s.Internal="internal",s.None="none"})(Ul||(Ul={}));const Om={allowScriptAccess:!1,parameters:{},autoplay:ir.Auto,backgroundColor:null,letterbox:ka.Fullscreen,unmuteOverlay:ti.Visible,upgradeToHttps:!0,compatibilityRules:!0,favorFlash:!0,warnOnUnsupportedContent:!0,logLevel:ba.Error,showSwfDownload:!1,contextMenu:tr.On,preloader:!0,splashScreen:!0,maxExecutionDuration:15,base:null,menu:!0,allowFullscreen:!1,salign:"",forceAlign:!1,quality:"high",scale:"showAll",forceScale:!1,frameRate:null,wmode:xa.Window,publicPath:null,polyfills:!0,playerVersion:null,preferredRenderer:null,openUrlMode:Wl.Allow,allowNetworking:Ul.All,openInNewTab:null,socketProxy:[],fontSources:[],defaultFonts:{},credentialAllowList:[],playerRuntime:ql.FlashPlayer},Im=`:host{all:initial;pointer-events:inherit;--ruffle-blue:#37528c;--ruffle-orange:#ffad33;display:inline-block;font-family:Arial,sans-serif;height:400px;letter-spacing:.4px;position:relative;touch-action:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:550px;-webkit-tap-highlight-color:transparent}:host(:-webkit-full-screen){display:block;height:100%!important;width:100%!important}.hidden{display:none!important}#container,#message-overlay,#panic,#play-button,#splash-screen,#unmute-overlay,#unmute-overlay .background{inset:0;position:absolute}#container{outline:none;overflow:hidden}#container canvas{height:100%;width:100%}#play-button,#unmute-overlay{cursor:pointer;display:none}#unmute-overlay .background{background:#000;opacity:.7}#play-button .icon,#unmute-overlay .icon{height:50%;left:50%;max-height:384px;max-width:384px;opacity:.8;position:absolute;top:50%;transform:translate(-50%,-50%);width:50%}#play-button:hover .icon,#unmute-overlay:hover .icon{opacity:1}#unmute-overlay-svg{scale:.8}#panic{background:linear-gradient(180deg,#fd3a40,#fda138);color:#fff;display:flex;flex-flow:column;font-size:20px;justify-content:space-around;text-align:center}#panic a{color:var(--ruffle-blue);font-weight:700}#panic-title{font-size:xxx-large;font-weight:700}#panic-body.details{flex:0.9;margin:0 10px}#panic-body textarea{height:100%;resize:none;width:100%}#panic ul{display:flex;justify-content:space-evenly;list-style-type:none;padding:0}#message-overlay{align-items:center;background:var(--ruffle-blue);color:var(--ruffle-orange);display:flex;justify-content:center;opacity:1;overflow:auto;position:absolute;z-index:2}#message-overlay .message{font-size:20px;max-height:100%;max-width:100%;padding:5%;text-align:center}#message-overlay p{margin:.5em 0}#message-overlay .message div{-moz-column-gap:1em;column-gap:1em;display:flex;flex-wrap:wrap;justify-content:center}#message-overlay a,#message-overlay button{background:var(--ruffle-blue);border:2px solid var(--ruffle-orange);border-radius:.6em;color:var(--ruffle-orange);cursor:pointer;font-size:1.25em;font-weight:700;margin:2% 0;padding:10px;text-decoration:none}#message-overlay a:hover,#message-overlay button:hover{background:#ffffff4c}#continue-btn{background:var(--ruffle-blue);border:2px solid var(--ruffle-orange);border-radius:20px;color:var(--ruffle-orange);cursor:pointer;font-size:20px;font-weight:700;padding:10px}#continue-btn:hover{background:#ffffff4c}#context-menu-overlay,.modal{height:100%;position:absolute;width:100%;z-index:1}#context-menu{background-color:var(--modal-background);border:1px solid gray;box-shadow:0 5px 10px -5px #000;color:rgb(var(--modal-foreground-rgb));font-size:14px;list-style:none;margin:0;padding:3px 0;position:absolute;text-align:left;white-space:nowrap}#context-menu .menu-item{color:rgb(var(--modal-foreground-rgb));padding:5px 10px}#context-menu .menu-item.disabled{color:rgba(var(--modal-foreground-rgb),.5);cursor:default}#context-menu .menu-item:not(.disabled):hover{background-color:rgba(var(--modal-foreground-rgb),.15)}#context-menu .menu-separator hr{border:none;border-bottom:1px solid rgba(var(--modal-foreground-rgb),.2);margin:3px}#splash-screen{align-items:center;background:var(
        --splash-screen-background,var(--preloader-background,var(--ruffle-blue))
    );display:flex;flex-direction:column;justify-content:center}.loadbar{background:#253559;height:20%;max-height:10px;max-width:316px;width:100%}.loadbar-inner{background:var(--ruffle-orange);height:100%;max-width:100%;width:0}.logo{display:var(--logo-display,block);max-height:150px;max-width:380px}.loading-animation{aspect-ratio:1;margin-bottom:2%;max-height:28px;max-width:28px;width:10%}.spinner{stroke-dasharray:180;stroke-dashoffset:135;stroke:var(--ruffle-orange);animation:a 1.5s linear infinite;transform-origin:50% 50%}@keyframes a{to{transform:rotate(1turn)}}#virtual-keyboard{height:1px;opacity:0;position:absolute;top:-100px;width:1px}.modal{background-color:#0008}.modal-area{background-color:var(--modal-background);border-radius:12px;box-shadow:0 2px 6px 0 #0008;color:rgb(var(--modal-foreground-rgb));left:50%;padding:8px 12px;position:relative;transform:translateX(-50%);width:-moz-fit-content;width:fit-content}#modal-area{height:300px;width:450px}.close-modal{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 -960 960 960'%3E%3Cpath d='M480-392 300-212q-18 18-44 18t-44-18-18-44 18-44l180-180-180-180q-18-18-18-44t18-44 44-18 44 18l180 180 180-180q18-18 44-18t44 18 18 44-18 44L568-480l180 180q18 18 18 44t-18 44-44 18-44-18z'/%3E%3C/svg%3E");cursor:pointer;filter:var(--modal-foreground-filter);height:16px;width:16px}.modal-button{background-color:rgba(var(--modal-foreground-rgb),.2);border-radius:6px;color:rgb(var(--modal-foreground-rgb));cursor:pointer;display:inline-block;padding:4px 8px;text-decoration:none}:not(#volume-controls)>.close-modal{position:absolute;right:16px;top:14px}.general-save-options{border-bottom:2px solid rgba(var(--modal-foreground-rgb),.3);padding-bottom:8px;text-align:center}#local-saves{border-collapse:collapse;color:inherit;display:block;height:calc(100% - 45px);min-height:30px;overflow-y:auto}#local-saves td{border-bottom:2px solid rgba(var(--modal-foreground-rgb),.15);height:30px}#local-saves td:first-child{width:100%;word-break:break-all}.save-option{cursor:pointer;display:inline-block;filter:var(--modal-foreground-filter);height:24px;opacity:.4;vertical-align:middle;width:24px}#local-saves>tr:hover .save-option{opacity:1}#download-save{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 -960 960 960'%3E%3Cpath d='M480-337q-8 0-15-2.5t-13-8.5L308-492q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T365-549l75 75v-286q0-17 11.5-28.5T480-800t28.5 11.5T520-760v286l75-75q12-12 28.5-11.5T652-548q11 12 11.5 28T652-492L508-348q-6 6-13 8.5t-15 2.5M240-160q-33 0-56.5-23.5T160-240v-80q0-17 11.5-28.5T200-360t28.5 11.5T240-320v80h480v-80q0-17 11.5-28.5T760-360t28.5 11.5T800-320v80q0 33-23.5 56.5T720-160z'/%3E%3C/svg%3E")}#replace-save{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 -1080 960 1200'%3E%3Cpath d='M440-367v127q0 17 11.5 28.5T480-200t28.5-11.5T520-240v-127l36 36q6 6 13.5 9t15 2.5T599-323t13-9q11-12 11.5-28T612-388L508-492q-6-6-13-8.5t-15-2.5-15 2.5-13 8.5L348-388q-12 12-11.5 28t12.5 28q12 11 28 11.5t28-11.5zM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v447q0 33-23.5 56.5T720-80zm280-560q0 17 11.5 28.5T560-600h160L520-800z'/%3E%3C/svg%3E")}#delete-save{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 -1020 960 1080'%3E%3Cpath d='M280-120q-33 0-56.5-23.5T200-200v-520q-17 0-28.5-11.5T160-760t11.5-28.5T200-800h160q0-17 11.5-28.5T400-840h160q17 0 28.5 11.5T600-800h160q17 0 28.5 11.5T800-760t-11.5 28.5T760-720v520q0 33-23.5 56.5T680-120zm120-160q17 0 28.5-11.5T440-320v-280q0-17-11.5-28.5T400-640t-28.5 11.5T360-600v280q0 17 11.5 28.5T400-280m160 0q17 0 28.5-11.5T600-320v-280q0-17-11.5-28.5T560-640t-28.5 11.5T520-600v280q0 17 11.5 28.5T560-280'/%3E%3C/svg%3E")}.replace-save{display:none}#video-modal .modal-area{box-sizing:border-box;height:95%;width:95%}#video-holder{box-sizing:border-box;height:100%;padding:36px 4px 6px}#video-holder video{background-color:#000;height:100%;width:100%}#volume-controls{align-items:center;display:flex;gap:6px}#mute-checkbox{display:none}label[for=mute-checkbox]{cursor:pointer;filter:var(--modal-foreground-filter);height:24px;line-height:0;width:24px}#volume-mute{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 -960 960 960'%3E%3Cpath d='m719.13-419.35-71.67 71.68Q634.78-335 617.13-335t-30.33-12.67q-12.67-12.68-12.67-30.33t12.67-30.33L658.48-480l-71.68-71.67q-12.67-12.68-12.67-30.33t12.67-30.33Q599.48-625 617.13-625t30.33 12.67l71.67 71.68 71.67-71.68Q803.48-625 821.13-625t30.33 12.67q12.67 12.68 12.67 30.33t-12.67 30.33L779.78-480l71.68 71.67q12.67 12.68 12.67 30.33t-12.67 30.33Q838.78-335 821.13-335t-30.33-12.67zM278-357.87H161.22q-17.66 0-30.33-12.67-12.67-12.68-12.67-30.33v-158.26q0-17.65 12.67-30.33 12.67-12.67 30.33-12.67H278l130.15-129.91q20.63-20.63 46.98-9.45 26.35 11.19 26.35 39.77v443.44q0 28.58-26.35 39.77-26.35 11.18-46.98-9.45z'/%3E%3C/svg%3E")}#volume-min{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='161 -960 960 960'%3E%3Cpath d='M438.65-357.87H321.87q-17.65 0-30.33-12.67-12.67-12.68-12.67-30.33v-158.26q0-17.65 12.67-30.33 12.68-12.67 30.33-12.67h116.78L568.8-732.04q20.63-20.63 46.98-9.45 26.35 11.19 26.35 39.77v443.44q0 28.58-26.35 39.77-26.35 11.18-46.98-9.45z'/%3E%3C/svg%3E")}#volume-mid{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='80 -960 960 960'%3E%3Cpath d='M357.98-357.87H241.2q-17.66 0-30.33-12.67-12.67-12.68-12.67-30.33v-158.26q0-17.65 12.67-30.33 12.67-12.67 30.33-12.67h116.78L487.65-731.8q20.63-20.64 47.1-9.57t26.47 39.65v443.44q0 28.58-26.47 39.65t-47.1-9.57zM741.8-480q0 42.48-20.47 80.09-20.48 37.61-54.94 60.82-10.22 5.98-20.19.25-9.98-5.73-9.98-17.44v-248.44q0-11.71 9.98-17.32 9.97-5.61 20.19.37 34.46 23.71 54.94 61.45Q741.8-522.48 741.8-480'/%3E%3C/svg%3E")}#volume-max{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='9 -960 960 960'%3E%3Cpath d='M754.22-480.5q0-78.52-41.88-143.9t-111.91-98.62q-14.47-6.74-20.47-20.96t-.53-28.93q5.74-15.72 20.34-22.46t29.58 0q92.48 42.46 147.97 127.05 55.48 84.6 55.48 187.82t-55.48 187.82q-55.49 84.59-147.97 127.05-14.98 6.74-29.58 0t-20.34-22.46q-5.47-14.71.53-28.93t20.47-20.96q70.03-33.24 111.91-98.62t41.88-143.9M286.98-357.87H170.2q-17.66 0-30.33-12.67-12.67-12.68-12.67-30.33v-158.26q0-17.65 12.67-30.33 12.67-12.67 30.33-12.67h116.78L416.65-731.8q20.63-20.64 47.1-9.57t26.47 39.65v443.44q0 28.58-26.47 39.65t-47.1-9.57zM670.8-480q0 42.48-20.47 80.09-20.48 37.61-54.94 60.82-10.22 5.98-20.19.25-9.98-5.73-9.98-17.44v-248.44q0-11.71 9.98-17.32 9.97-5.61 20.19.37 34.46 23.71 54.94 61.45Q670.8-522.48 670.8-480'/%3E%3C/svg%3E")}#volume-slider-text{text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:4.8ch}#hardware-acceleration-modal .modal-area{box-sizing:border-box;padding:16px 48px;text-align:center;width:95%}#acceleration-text{display:block;margin-bottom:8px}#clipboard-modal h2{margin-right:36px;margin-top:4px}#clipboard-modal p:last-child{margin-bottom:2px}@media (prefers-color-scheme:light){:host{--modal-background:#fafafa;--modal-foreground-rgb:0,0,0;--modal-foreground-filter:none}}@media (prefers-color-scheme:dark){:host{--modal-background:#282828;--modal-foreground-rgb:221,221,221;--modal-foreground-filter:invert(90%)}}`;function Mm(){return S.jsx("style",{children:Im})}function Lm(){return S.jsx("style",{id:"dynamic-styles"})}function Nm(){return S.jsxs("div",{id:"container",children:[S.jsx("div",{id:"play-button",children:S.jsx("div",{class:"icon",children:S.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",viewBox:"0 0 250 250",width:"100%",height:"100%",children:[S.jsxs("defs",{xmlns:"http://www.w3.org/2000/svg",children:[S.jsxs("linearGradient",{xmlns:"http://www.w3.org/2000/svg",id:"a",gradientUnits:"userSpaceOnUse",x1:"125",y1:"0",x2:"125",y2:"250",spreadMethod:"pad",children:[S.jsx("stop",{xmlns:"http://www.w3.org/2000/svg",offset:"0%","stop-color":"#FDA138"}),S.jsx("stop",{xmlns:"http://www.w3.org/2000/svg",offset:"100%","stop-color":"#FD3A40"})]}),S.jsxs("g",{xmlns:"http://www.w3.org/2000/svg",id:"b",children:[S.jsx("path",{xmlns:"http://www.w3.org/2000/svg",fill:"url(#a)",d:"M250 125q0-52-37-88-36-37-88-37T37 37Q0 73 0 125t37 88q36 37 88 37t88-37q37-36 37-88M87 195V55l100 70-100 70z"}),S.jsx("path",{xmlns:"http://www.w3.org/2000/svg",fill:"#FFF",d:"M87 55v140l100-70L87 55z"})]})]}),S.jsx("use",{xmlns:"http://www.w3.org/2000/svg",href:"#b"})]})})}),S.jsxs("div",{id:"unmute-overlay",children:[S.jsx("div",{class:"background"}),S.jsx("div",{class:"icon",children:S.jsxs("svg",{id:"unmute-overlay-svg",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",viewBox:"0 0 512 584",width:"100%",height:"100%",children:[S.jsx("path",{xmlns:"http://www.w3.org/2000/svg",fill:"#FFF",stroke:"#FFF",d:"m457.941 256 47.029-47.029c9.372-9.373 9.372-24.568 0-33.941-9.373-9.373-24.568-9.373-33.941 0l-47.029 47.029-47.029-47.029c-9.373-9.373-24.568-9.373-33.941 0-9.372 9.373-9.372 24.568 0 33.941l47.029 47.029-47.029 47.029c-9.372 9.373-9.372 24.568 0 33.941 4.686 4.687 10.827 7.03 16.97 7.03s12.284-2.343 16.971-7.029l47.029-47.03 47.029 47.029c4.687 4.687 10.828 7.03 16.971 7.03s12.284-2.343 16.971-7.029c9.372-9.373 9.372-24.568 0-33.941z"}),S.jsx("path",{xmlns:"http://www.w3.org/2000/svg",fill:"#FFF",stroke:"#FFF",d:"m99 160h-55c-24.301 0-44 19.699-44 44v104c0 24.301 19.699 44 44 44h55c2.761 0 5-2.239 5-5v-182c0-2.761-2.239-5-5-5z"}),S.jsx("path",{xmlns:"http://www.w3.org/2000/svg",fill:"#FFF",stroke:"#FFF",d:"m280 56h-24c-5.269 0-10.392 1.734-14.578 4.935l-103.459 79.116c-1.237.946-1.963 2.414-1.963 3.972v223.955c0 1.557.726 3.026 1.963 3.972l103.459 79.115c4.186 3.201 9.309 4.936 14.579 4.936h23.999c13.255 0 24-10.745 24-24v-352.001c0-13.255-10.745-24-24-24z"}),S.jsx("text",{xmlns:"http://www.w3.org/2000/svg",id:"unmute-text",x:"256",y:"560","text-anchor":"middle","font-size":"60px",fill:"#FFF",stroke:"#FFF",children:"Click to unmute"})]})})]}),S.jsx("input",{"aria-hidden":"true",id:"virtual-keyboard",type:"text",autocomplete:"off",autocorrect:"off",autocapitalize:"none"})]})}function $m(){return S.jsxs("div",{id:"splash-screen",class:"hidden",children:[S.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",class:"logo",preserveAspectRatio:"xMidYMid",viewBox:"0 0 380 150",children:S.jsxs("g",{xmlns:"http://www.w3.org/2000/svg",children:[S.jsx("path",{xmlns:"http://www.w3.org/2000/svg",fill:"#966214",d:"M58.75 85.6q.75-.1 1.5-.35.85-.25 1.65-.75.55-.35 1.05-.8.5-.45.95-1 .5-.5.75-1.2-.05.05-.15.1-.1.15-.25.25l-.1.2q-.15.05-.25.1-.4 0-.8.05-.5-.25-.9-.5-.3-.1-.55-.3l-.6-.6-4.25-6.45-1.5 11.25h3.45m83.15-.2h3.45q.75-.1 1.5-.35.25-.05.45-.15.35-.15.65-.3l.5-.3q.25-.15.5-.35.45-.35.9-.75.45-.35.75-.85l.1-.1q.1-.2.2-.35.2-.3.35-.6l-.3.4-.15.15q-.5.15-1.1.1-.25 0-.4-.05-.5-.15-.8-.4-.15-.1-.25-.25-.3-.3-.55-.6l-.05-.05v-.05l-4.25-6.4-1.5 11.25m-21.15-3.95q-.3-.3-.55-.6l-.05-.05v-.05l-4.25-6.4-1.5 11.25h3.45q.75-.1 1.5-.35.85-.25 1.6-.75.75-.5 1.4-1.1.45-.35.75-.85.35-.5.65-1.05l-.45.55q-.5.15-1.1.1-.9 0-1.45-.7m59.15.3q-.75-.5-1.4-1-3.15-2.55-3.5-6.4l-1.5 11.25h21q-3.1-.25-5.7-.75-5.6-1.05-8.9-3.1m94.2 3.85h3.45q.6-.1 1.2-.3.4-.1.75-.2.35-.15.65-.3.7-.35 1.35-.8.75-.55 1.3-1.25.1-.15.25-.3-2.55-.25-3.25-1.8l-4.2-6.3-1.5 11.25m-45.3-4.85q-.5-.4-.9-.8-2.3-2.35-2.6-5.6l-1.5 11.25h21q-11.25-.95-16-4.85m97.7 4.85q-.3-.05-.6-.05-10.8-1-15.4-4.8-3.15-2.55-3.5-6.35l-1.5 11.2h21Z"}),S.jsx("path",{xmlns:"http://www.w3.org/2000/svg",fill:"var(--ruffle-orange)",d:"M92.6 54.8q-1.95-1.4-4.5-1.4H60.35q-1.35 0-2.6.45-1.65.55-3.15 1.8-2.75 2.25-3.25 5.25l-1.65 12h.05v.3l5.85 1.15h-9.5q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45-.5.3-.95.7-.45.35-.85.8-.35.4-.65.85-.3.45-.5.9-.15.45-.3.95l-5.85 41.6H50.3l5-35.5 1.5-11.25 4.25 6.45.6.6q.25.2.55.3.4.25.9.5.4-.05.8-.05.1-.05.25-.1l.1-.2q.15-.1.25-.25.1-.05.15-.1l.3-1.05 1.75-12.3h11.15L75.8 82.6h16.5l2.3-16.25h-.05l.8-5.7q.4-2.45-1-4.2-.35-.4-.75-.8-.25-.25-.55-.5-.2-.2-.45-.35m16.2 18.1h.05l-.05.3 5.85 1.15H105.2q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45-.5.3-1 .65-.4.4-.8.85-.25.3-.55.65-.05.1-.15.2-.25.45-.4.9-.2.45-.3.95-.1.65-.2 1.25-.2 1.15-.4 2.25l-4.3 30.6q-.25 3 1.75 5.25 1.6 1.8 4 2.15.6.1 1.25.1h27.35q3.25 0 6-2.25.35-.35.7-.55l.3-.2q2-2 2.25-4.5l1.65-11.6q.05-.05.1-.05l1.65-11.35h.05l.7-5.2 1.5-11.25 4.25 6.4v.05l.05.05q.25.3.55.6.1.15.25.25.3.25.8.4.15.05.4.05.6.05 1.1-.1l.15-.15.3-.4.3-1.05 1.3-9.05h-.05l.7-5.05h-.05l.15-1.25h-.05l1.65-11.7h-16.25l-2.65 19.5h.05v.2l-.05.1h.05l5.8 1.15H132.7q-.5.05-1 .15-.5.15-1 .35-.15.05-.3.15-.3.1-.55.25-.05 0-.1.05-.5.3-1 .65-.4.35-.7.7-.55.7-.95 1.45-.35.65-.55 1.4-.15.7-.25 1.4v.05q-.15 1.05-.35 2.05l-1.2 8.75v.1l-2.1 14.7H111.4l2.25-15.55h.05l.7-5.2 1.5-11.25 4.25 6.4v.05l.05.05q.25.3.55.6.55.7 1.45.7.6.05 1.1-.1l.45-.55.3-1.05 1.3-9.05h-.05l.7-5.05h-.05l.15-1.25h-.05l1.65-11.7h-16.25l-2.65 19.5m106.5-41.75q-2.25-2.25-5.5-2.25h-27.75q-3 0-5.75 2.25-1.3.95-2.05 2.1-.45.6-.7 1.2-.2.5-.35 1-.1.45-.15.95l-4.15 29.95h-.05l-.7 5.2h-.05l-.2 1.35h.05l-.05.3 5.85 1.15h-9.45q-2.1.05-3.95 1.6-1.9 1.55-2.25 3.55l-.5 3.5h-.05l-5.3 38.1h16.25l5-35.5 1.5-11.25q.35 3.85 3.5 6.4.65.5 1.4 1 3.3 2.05 8.9 3.1 2.6.5 5.7.75l1.75-11.25h-12.2l.4-2.95h-.05l.7-5.05h-.05q.1-.9.3-1.9.1-.75.2-1.6.85-5.9 2.15-14.9 0-.15.05-.25l.1-.9q.2-1.55.45-3.15h11.25l-3.1 20.8h16.5l4.1-28.05q.15-1.7-.4-3.15-.5-1.1-1.35-2.1m46.65 44.15q-.5.3-1 .65-.4.4-.8.85-.35.4-.7.85-.25.45-.45.9-.15.45-.3.95l-5.85 41.6h16.25l5-35.5 1.5-11.25 4.2 6.3q.7 1.55 3.25 1.8l.05-.1q.25-.4.35-.85l.3-1.05 1.8-14.05v-.05l5.35-37.45h-16.25l-6.15 44.3 5.85 1.15h-9.45q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45m5.4-38.9q.15-1.7-.4-3.15-.5-1.1-1.35-2.1-2.25-2.25-5.5-2.25h-27.75q-2.3 0-4.45 1.35-.65.35-1.3.9-1.3.95-2.05 2.1-.45.6-.7 1.2-.4.9-.5 1.95l-4.15 29.95h-.05l-.7 5.2h-.05l-.2 1.35h.05l-.05.3 5.85 1.15h-9.45q-2.1.05-3.95 1.6-1.9 1.55-2.25 3.55l-.5 3.5h-.05l-1.2 8.75v.1l-4.1 29.25h16.25l5-35.5 1.5-11.25q.3 3.25 2.6 5.6.4.4.9.8 4.75 3.9 16 4.85l1.75-11.25h-12.2l.4-2.95h-.05l.7-5.05h-.05q.15-.9.3-1.9.1-.75.25-1.6.15-1.25.35-2.65v-.05q.95-6.7 2.35-16.5h11.25l-3.1 20.8h16.5l4.1-28.05M345 66.35h-.05l1.15-8.2q.5-3-1.75-5.25-1.25-1.25-3-1.75-1-.5-2.25-.5h-27.95q-.65 0-1.3.1-2.5.35-4.7 2.15-2.75 2.25-3.25 5.25l-1.95 14.7v.05l-.05.3 5.85 1.15h-9.45q-1.9.05-3.6 1.35-.2.1-.35.25-1.9 1.55-2.25 3.55l-4.85 34.1q-.25 3 1.75 5.25 1.25 1.4 3 1.95 1.05.3 2.25.3H320q3.25 0 6-2.25 2.75-2 3.25-5l2.75-18.5h-16.5l-1.75 11H302.5l2.1-14.75h.05l.85-6 1.5-11.2q.35 3.8 3.5 6.35 4.6 3.8 15.4 4.8.3 0 .6.05h15.75L345 66.35m-16.4-.95-1.25 8.95h-11.3l.4-2.95h-.05l.7-5.05h-.1l.15-.95h11.45Z"})]})}),S.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",class:"loading-animation",viewBox:"0 0 66 66",children:S.jsx("circle",{xmlns:"http://www.w3.org/2000/svg",class:"spinner",fill:"none","stroke-width":"6","stroke-linecap":"round",cx:"33",cy:"33",r:"30"})}),S.jsx("div",{class:"loadbar",children:S.jsx("div",{class:"loadbar-inner"})})]})}function qm(){return S.jsx("div",{id:"save-manager",class:"modal hidden",children:S.jsxs("div",{id:"modal-area",class:"modal-area",children:[S.jsx("span",{class:"close-modal"}),S.jsx("div",{class:"general-save-options",children:S.jsx("span",{class:"modal-button"})}),S.jsx("table",{id:"local-saves"})]})})}class Ra{constructor(i){this.value=i}valueOf(){return this.value}}class Oe extends Ra{constructor(i="???"){super(i)}toString(i){return`{${this.value}}`}}class Vn extends Ra{constructor(i,o={}){super(i),this.opts=o}toString(i){try{return i.memoizeIntlObject(Intl.NumberFormat,this.opts).format(this.value)}catch(o){return i.reportError(o),this.value.toString(10)}}}class Gr extends Ra{constructor(i,o={}){super(i),this.opts=o}toString(i){try{return i.memoizeIntlObject(Intl.DateTimeFormat,this.opts).format(this.value)}catch(o){return i.reportError(o),new Date(this.value).toISOString()}}}const xd=100,Wm="⁨",Um="⁩";function Bm(s,i,o){if(o===i||o instanceof Vn&&i instanceof Vn&&o.value===i.value)return!0;if(i instanceof Vn&&typeof o=="string"){let u=s.memoizeIntlObject(Intl.PluralRules,i.opts).select(i.value);if(o===u)return!0}return!1}function Sd(s,i,o){return i[o]?ar(s,i[o].value):(s.reportError(new RangeError("No default")),new Oe)}function Bl(s,i){const o=[],u=Object.create(null);for(const d of i)d.type==="narg"?u[d.name]=ri(s,d.value):o.push(ri(s,d));return{positional:o,named:u}}function ri(s,i){switch(i.type){case"str":return i.value;case"num":return new Vn(i.value,{minimumFractionDigits:i.precision});case"var":return Vm(s,i);case"mesg":return Hm(s,i);case"term":return Qm(s,i);case"func":return Km(s,i);case"select":return Jm(s,i);default:return new Oe}}function Vm(s,{name:i}){let o;if(s.params)if(Object.prototype.hasOwnProperty.call(s.params,i))o=s.params[i];else return new Oe(`$${i}`);else if(s.args&&Object.prototype.hasOwnProperty.call(s.args,i))o=s.args[i];else return s.reportError(new ReferenceError(`Unknown variable: $${i}`)),new Oe(`$${i}`);if(o instanceof Ra)return o;switch(typeof o){case"string":return o;case"number":return new Vn(o);case"object":if(o instanceof Date)return new Gr(o.getTime());default:return s.reportError(new TypeError(`Variable type not supported: $${i}, ${typeof o}`)),new Oe(`$${i}`)}}function Hm(s,{name:i,attr:o}){const u=s.bundle._messages.get(i);if(!u)return s.reportError(new ReferenceError(`Unknown message: ${i}`)),new Oe(i);if(o){const d=u.attributes[o];return d?ar(s,d):(s.reportError(new ReferenceError(`Unknown attribute: ${o}`)),new Oe(`${i}.${o}`))}return u.value?ar(s,u.value):(s.reportError(new ReferenceError(`No value: ${i}`)),new Oe(i))}function Qm(s,{name:i,attr:o,args:u}){const d=`-${i}`,f=s.bundle._terms.get(d);if(!f)return s.reportError(new ReferenceError(`Unknown term: ${d}`)),new Oe(d);if(o){const g=f.attributes[o];if(g){s.params=Bl(s,u).named;const x=ar(s,g);return s.params=null,x}return s.reportError(new ReferenceError(`Unknown attribute: ${o}`)),new Oe(`${d}.${o}`)}s.params=Bl(s,u).named;const v=ar(s,f.value);return s.params=null,v}function Km(s,{name:i,args:o}){let u=s.bundle._functions[i];if(!u)return s.reportError(new ReferenceError(`Unknown function: ${i}()`)),new Oe(`${i}()`);if(typeof u!="function")return s.reportError(new TypeError(`Function ${i}() is not callable`)),new Oe(`${i}()`);try{let d=Bl(s,o);return u(d.positional,d.named)}catch(d){return s.reportError(d),new Oe(`${i}()`)}}function Jm(s,{selector:i,variants:o,star:u}){let d=ri(s,i);if(d instanceof Oe)return Sd(s,o,u);for(const f of o){const v=ri(s,f.key);if(Bm(s,d,v))return ar(s,f.value)}return Sd(s,o,u)}function Gd(s,i){if(s.dirty.has(i))return s.reportError(new RangeError("Cyclic reference")),new Oe;s.dirty.add(i);const o=[],u=s.bundle._useIsolating&&i.length>1;for(const d of i){if(typeof d=="string"){o.push(s.bundle._transform(d));continue}if(s.placeables++,s.placeables>xd)throw s.dirty.delete(i),new RangeError(`Too many placeables expanded: ${s.placeables}, max allowed is ${xd}`);u&&o.push(Wm),o.push(ri(s,d).toString(s)),u&&o.push(Um)}return s.dirty.delete(i),o.join("")}function ar(s,i){return typeof i=="string"?s.bundle._transform(i):Gd(s,i)}class Zm{constructor(i,o,u){this.dirty=new WeakSet,this.params=null,this.placeables=0,this.bundle=i,this.errors=o,this.args=u}reportError(i){if(!this.errors||!(i instanceof Error))throw i;this.errors.push(i)}memoizeIntlObject(i,o){let u=this.bundle._intls.get(i);u||(u={},this.bundle._intls.set(i,u));let d=JSON.stringify(o);return u[d]||(u[d]=new i(this.bundle.locales,o)),u[d]}}function Sa(s,i){const o=Object.create(null);for(const[u,d]of Object.entries(s))i.includes(u)&&(o[u]=d.valueOf());return o}const Rd=["unitDisplay","currencyDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits"];function Gm(s,i){let o=s[0];if(o instanceof Oe)return new Oe(`NUMBER(${o.valueOf()})`);if(o instanceof Vn)return new Vn(o.valueOf(),{...o.opts,...Sa(i,Rd)});if(o instanceof Gr)return new Vn(o.valueOf(),{...Sa(i,Rd)});throw new TypeError("Invalid argument to NUMBER")}const zd=["dateStyle","timeStyle","fractionalSecondDigits","dayPeriod","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName"];function Ym(s,i){let o=s[0];if(o instanceof Oe)return new Oe(`DATETIME(${o.valueOf()})`);if(o instanceof Gr)return new Gr(o.valueOf(),{...o.opts,...Sa(i,zd)});if(o instanceof Vn)return new Gr(o.valueOf(),{...Sa(i,zd)});throw new TypeError("Invalid argument to DATETIME")}const jd=new Map;function Xm(s){const i=Array.isArray(s)?s.join(" "):s;let o=jd.get(i);return o===void 0&&(o=new Map,jd.set(i,o)),o}class eh{constructor(i,{functions:o,useIsolating:u=!0,transform:d=f=>f}={}){this._terms=new Map,this._messages=new Map,this.locales=Array.isArray(i)?i:[i],this._functions={NUMBER:Gm,DATETIME:Ym,...o},this._useIsolating=u,this._transform=d,this._intls=Xm(i)}hasMessage(i){return this._messages.has(i)}getMessage(i){return this._messages.get(i)}addResource(i,{allowOverrides:o=!1}={}){const u=[];for(let d=0;d<i.body.length;d++){let f=i.body[d];if(f.id.startsWith("-")){if(o===!1&&this._terms.has(f.id)){u.push(new Error(`Attempt to override an existing term: "${f.id}"`));continue}this._terms.set(f.id,f)}else{if(o===!1&&this._messages.has(f.id)){u.push(new Error(`Attempt to override an existing message: "${f.id}"`));continue}this._messages.set(f.id,f)}}return u}formatPattern(i,o=null,u=null){if(typeof i=="string")return this._transform(i);let d=new Zm(this,u,o);try{return Gd(d,i).toString(d)}catch(f){if(d.errors&&f instanceof Error)return d.errors.push(f),new Oe().toString(d);throw f}}}const Pl=/^(-?[a-zA-Z][\w-]*) *= */gm,Ed=/\.([a-zA-Z][\w-]*) *= */y,nh=/\*?\[/y,_l=/(-?[0-9]+(?:\.([0-9]+))?)/y,th=/([a-zA-Z][\w-]*)/y,Cd=/([$-])?([a-zA-Z][\w-]*)(?:\.([a-zA-Z][\w-]*))?/y,rh=/^[A-Z][A-Z0-9_-]*$/,ga=/([^{}\n\r]+)/y,ih=/([^\\"\n\r]*)/y,Pd=/\\([\\"])/y,_d=/\\u([a-fA-F0-9]{4})|\\U([a-fA-F0-9]{6})/y,ah=/^\n+/,Ad=/ +$/,oh=/ *\r?\n/g,lh=/( *)$/,sh=/{\s*/y,Fd=/\s*}/y,uh=/\[\s*/y,ch=/\s*] */y,dh=/\s*\(\s*/y,fh=/\s*->\s*/y,ph=/\s*:\s*/y,mh=/\s*,?\s*/y,hh=/\s+/y;class vh{constructor(i){this.body=[],Pl.lastIndex=0;let o=0;for(;;){let _=Pl.exec(i);if(_===null)break;o=Pl.lastIndex;try{this.body.push(x(_[1]))}catch($){if($ instanceof SyntaxError)continue;throw $}}function u(_){return _.lastIndex=o,_.test(i)}function d(_,$){if(i[o]===_)return o++,!0;if($)throw new $(`Expected ${_}`);return!1}function f(_,$){if(u(_))return o=_.lastIndex,!0;if($)throw new $(`Expected ${_.toString()}`);return!1}function v(_){_.lastIndex=o;let $=_.exec(i);if($===null)throw new SyntaxError(`Expected ${_.toString()}`);return o=_.lastIndex,$}function g(_){return v(_)[1]}function x(_){let $=O(),re=R();if($===null&&Object.keys(re).length===0)throw new SyntaxError("Expected message value or attributes");return{id:_,value:$,attributes:re}}function R(){let _=Object.create(null);for(;u(Ed);){let $=g(Ed),re=O();if(re===null)throw new SyntaxError("Expected attribute value");_[$]=re}return _}function O(){let _;if(u(ga)&&(_=g(ga)),i[o]==="{"||i[o]==="}")return q(_?[_]:[],1/0);let $=Re();return $?_?q([_,$],$.length):($.value=le($.value,ah),q([$],$.length)):_?le(_,Ad):null}function q(_=[],$){for(;;){if(u(ga)){_.push(g(ga));continue}if(i[o]==="{"){_.push(K());continue}if(i[o]==="}")throw new SyntaxError("Unbalanced closing brace");let Ce=Re();if(Ce){_.push(Ce),$=Math.min($,Ce.length);continue}break}let re=_.length-1,$e=_[re];typeof $e=="string"&&(_[re]=le($e,Ad));let Me=[];for(let Ce of _)Ce instanceof Dd&&(Ce=Ce.value.slice(0,Ce.value.length-$)),Ce&&Me.push(Ce);return Me}function K(){f(sh,SyntaxError);let _=Q();if(f(Fd))return _;if(f(fh)){let $=Z();return f(Fd,SyntaxError),{type:"select",selector:_,...$}}throw new SyntaxError("Unclosed placeable")}function Q(){if(i[o]==="{")return K();if(u(Cd)){let[,_,$,re=null]=v(Cd);if(_==="$")return{type:"var",name:$};if(f(dh)){let $e=ne();if(_==="-")return{type:"term",name:$,attr:re,args:$e};if(rh.test($))return{type:"func",name:$,args:$e};throw new SyntaxError("Function names must be all upper-case")}return _==="-"?{type:"term",name:$,attr:re,args:[]}:{type:"mesg",name:$,attr:re}}return De()}function ne(){let _=[];for(;;){switch(i[o]){case")":return o++,_;case void 0:throw new SyntaxError("Unclosed argument list")}_.push(H()),f(mh)}}function H(){let _=Q();return _.type!=="mesg"?_:f(ph)?{type:"narg",name:_.name,value:De()}:_}function Z(){let _=[],$=0,re;for(;u(nh);){d("*")&&(re=$);let $e=Ie(),Me=O();if(Me===null)throw new SyntaxError("Expected variant value");_[$++]={key:$e,value:Me}}if($===0)return null;if(re===void 0)throw new SyntaxError("Expected default variant");return{variants:_,star:re}}function Ie(){f(uh,SyntaxError);let _;return u(_l)?_=fe():_={type:"str",value:g(th)},f(ch,SyntaxError),_}function De(){if(u(_l))return fe();if(i[o]==='"')return J();throw new SyntaxError("Invalid expression")}function fe(){let[,_,$=""]=v(_l),re=$.length;return{type:"num",value:parseFloat(_),precision:re}}function J(){d('"',SyntaxError);let _="";for(;;){if(_+=g(ih),i[o]==="\\"){_+=Se();continue}if(d('"'))return{type:"str",value:_};throw new SyntaxError("Unclosed string literal")}}function Se(){if(u(Pd))return g(Pd);if(u(_d)){let[,_,$]=v(_d),re=parseInt(_||$,16);return re<=55295||57344<=re?String.fromCodePoint(re):"�"}throw new SyntaxError("Unknown escape sequence")}function Re(){let _=o;switch(f(hh),i[o]){case".":case"[":case"*":case"}":case void 0:return!1;case"{":return pe(i.slice(_,o))}return i[o-1]===" "?pe(i.slice(_,o)):!1}function le(_,$){return _.replace($,"")}function pe(_){let $=_.replace(oh,`
`),re=lh.exec(_)[1].length;return new Dd($,re)}}}class Dd{constructor(i,o){this.value=i,this.length=o}}const gh="([a-z]{2,3}|\\*)",wh="(?:-([a-z]{4}|\\*))",yh="(?:-([a-z]{2}|\\*))",kh="(?:-(([0-9][a-z0-9]{3}|[a-z0-9]{5,8})|\\*))",bh=new RegExp(`^${gh}${wh}?${yh}?${kh}?$`,"i");class Yr{constructor(i){const o=bh.exec(i.replace(/_/g,"-"));if(!o){this.isWellFormed=!1;return}let[,u,d,f,v]=o;u&&(this.language=u.toLowerCase()),d&&(this.script=d[0].toUpperCase()+d.slice(1)),f&&(this.region=f.toUpperCase()),this.variant=v,this.isWellFormed=!0}isEqual(i){return this.language===i.language&&this.script===i.script&&this.region===i.region&&this.variant===i.variant}matches(i,o=!1,u=!1){return(this.language===i.language||o&&this.language===void 0||u&&i.language===void 0)&&(this.script===i.script||o&&this.script===void 0||u&&i.script===void 0)&&(this.region===i.region||o&&this.region===void 0||u&&i.region===void 0)&&(this.variant===i.variant||o&&this.variant===void 0||u&&i.variant===void 0)}toString(){return[this.language,this.script,this.region,this.variant].filter(i=>i!==void 0).join("-")}clearVariants(){this.variant=void 0}clearRegion(){this.region=void 0}addLikelySubtags(){const i=Sh(this.toString().toLowerCase());return i?(this.language=i.language,this.script=i.script,this.region=i.region,this.variant=i.variant,!0):!1}}const Td={ar:"ar-arab-eg","az-arab":"az-arab-ir","az-ir":"az-arab-ir",be:"be-cyrl-by",da:"da-latn-dk",el:"el-grek-gr",en:"en-latn-us",fa:"fa-arab-ir",ja:"ja-jpan-jp",ko:"ko-kore-kr",pt:"pt-latn-br",sr:"sr-cyrl-rs","sr-ru":"sr-latn-ru",sv:"sv-latn-se",ta:"ta-taml-in",uk:"uk-cyrl-ua",zh:"zh-hans-cn","zh-hant":"zh-hant-tw","zh-hk":"zh-hant-hk","zh-mo":"zh-hant-mo","zh-tw":"zh-hant-tw","zh-gb":"zh-hant-gb","zh-us":"zh-hant-us"},xh=["az","bg","cs","de","es","fi","fr","hu","it","lt","lv","nl","pl","ro","ru"];function Sh(s){if(Object.prototype.hasOwnProperty.call(Td,s))return new Yr(Td[s]);const i=new Yr(s);return i.language&&xh.includes(i.language)?(i.region=i.language.toUpperCase(),i):null}function Rh(s,i,o){const u=new Set,d=new Map;for(let f of i)new Yr(f).isWellFormed&&d.set(f,new Yr(f));e:for(const f of s){const v=f.toLowerCase(),g=new Yr(v);if(g.language!==void 0){for(const x of d.keys())if(v===x.toLowerCase()){if(u.add(x),d.delete(x),o==="lookup")return Array.from(u);if(o==="filtering")continue;continue e}for(const[x,R]of d.entries())if(R.matches(g,!0,!1)){if(u.add(x),d.delete(x),o==="lookup")return Array.from(u);if(o==="filtering")continue;continue e}if(g.addLikelySubtags()){for(const[x,R]of d.entries())if(R.matches(g,!0,!1)){if(u.add(x),d.delete(x),o==="lookup")return Array.from(u);if(o==="filtering")continue;continue e}}g.clearVariants();for(const[x,R]of d.entries())if(R.matches(g,!0,!0)){if(u.add(x),d.delete(x),o==="lookup")return Array.from(u);if(o==="filtering")continue;continue e}if(g.clearRegion(),g.addLikelySubtags()){for(const[x,R]of d.entries())if(R.matches(g,!0,!1)){if(u.add(x),d.delete(x),o==="lookup")return Array.from(u);if(o==="filtering")continue;continue e}}g.clearRegion();for(const[x,R]of d.entries())if(R.matches(g,!0,!0)){if(u.add(x),d.delete(x),o==="lookup")return Array.from(u);if(o==="filtering")continue;continue e}}}return Array.from(u)}function zh(s,i,{strategy:o="filtering",defaultLocale:u}={}){const d=Rh(Array.from(s??[]).map(String),Array.from(i??[]).map(String),o);if(o==="lookup"){if(u===void 0)throw new Error("defaultLocale cannot be undefined for strategy `lookup`");d.length===0&&d.push(u)}else u&&!d.includes(u)&&d.push(u);return d}const jh={"ar-SA":{"context_menu.ftl":`context-menu-download-swf = حمِّل .swf
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
`}},ts={};for(const[s,i]of Object.entries(jh)){const o=new eh(s);if(i){for(const[u,d]of Object.entries(i))if(d)for(const f of o.addResource(new vh(d)))console.error(`Error in text for ${s} ${u}: ${f}`)}ts[s]=o}function Eh(s,i,o){const u=ts[s];if(u!==void 0){const d=u.getMessage(i);if(d!==void 0&&d.value)return u.formatPattern(d.value,o)}return null}function ee(s,i){const o=zh(navigator.languages,Object.keys(ts),{defaultLocale:"en-US"});for(const u in o){const d=Eh(o[u],s,i);if(d)return d}return console.error(`Unknown text key '${s}'`),s}function He(s,i){const o=document.createElement("div");return ee(s,i).split(`
`).forEach(u=>{const d=document.createElement("p");d.innerText=u,o.appendChild(d)}),o}function Ch(){return S.jsx("div",{id:"volume-controls-modal",class:"modal hidden",children:S.jsx("div",{class:"modal-area",children:S.jsxs("div",{id:"volume-controls",children:[S.jsx("input",{id:"mute-checkbox",type:"checkbox"}),S.jsx("label",{id:"volume-mute",for:"mute-checkbox",title:ee("volume-controls-unmute")}),S.jsx("label",{id:"volume-min",for:"mute-checkbox",title:ee("volume-controls-mute")}),S.jsx("label",{id:"volume-mid",for:"mute-checkbox",title:ee("volume-controls-mute")}),S.jsx("label",{id:"volume-max",for:"mute-checkbox",title:ee("volume-controls-mute")}),S.jsx("input",{id:"volume-slider",type:"range",min:"0",max:"100",step:"1"}),S.jsx("span",{id:"volume-slider-text"}),S.jsx("span",{class:"close-modal"})]})})})}function Ph(){return S.jsx("div",{id:"video-modal",class:"modal hidden",children:S.jsxs("div",{class:"modal-area",children:[S.jsx("span",{class:"close-modal"}),S.jsx("div",{id:"video-holder"})]})})}function _h(){return S.jsx("div",{id:"hardware-acceleration-modal",class:"modal hidden",children:S.jsxs("div",{class:"modal-area",children:[S.jsx("span",{class:"close-modal"}),S.jsx("span",{id:"acceleration-text",children:ee("enable-hardware-acceleration")}),S.jsx("a",{href:"https://github.com/ruffle-rs/ruffle/wiki/Frequently-Asked-Questions-For-Users#chrome-hardware-acceleration",target:"_blank",class:"modal-button",children:ee("enable-hardware-acceleration-link")})]})})}const Al=navigator.userAgent.includes("Mac OS X")?"Command":"Ctrl";function Ah(){return S.jsx("div",{id:"clipboard-modal",class:"modal hidden",children:S.jsxs("div",{class:"modal-area",children:[S.jsx("span",{class:"close-modal"}),S.jsx("h2",{children:ee("clipboard-message-title")}),S.jsx("p",{id:"clipboard-modal-description"}),S.jsxs("p",{children:[S.jsxs("b",{children:[Al,"+C"]}),S.jsx("span",{children:ee("clipboard-message-copy")})]}),S.jsxs("p",{children:[S.jsxs("b",{children:[Al,"+X"]}),S.jsx("span",{children:ee("clipboard-message-cut")})]}),S.jsxs("p",{children:[S.jsxs("b",{children:[Al,"+V"]}),S.jsx("span",{children:ee("clipboard-message-paste")})]})]})})}function Fh(){return S.jsx("div",{id:"context-menu-overlay",class:"hidden",children:S.jsx("ul",{id:"context-menu"})})}const En=document.createElement("template");En.content.appendChild(S.jsx(Mm,{}));En.content.appendChild(S.jsx(Lm,{}));En.content.appendChild(S.jsx(Nm,{}));En.content.appendChild(S.jsx($m,{}));En.content.appendChild(S.jsx(qm,{}));En.content.appendChild(S.jsx(Ch,{}));En.content.appendChild(S.jsx(Ph,{}));En.content.appendChild(S.jsx(_h,{}));En.content.appendChild(S.jsx(Ah,{}));En.content.appendChild(S.jsx(Fh,{}));const Yd="application/x-shockwave-flash",Xd="application/futuresplash",ef="application/x-shockwave-flash2-preview",nf="application/vnd.adobe.flash.movie",Dh="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";function Th(s){let i="";try{i=new URL(s,"https://example.com").pathname}catch{}if(i&&i.length>=4){const o=i.slice(-4).toLowerCase();if(o===".swf"||o===".spl")return!0}return!1}function Oh(s,i){switch(s=s.toLowerCase(),s){case Yd.toLowerCase():case Xd.toLowerCase():case ef.toLowerCase():case nf.toLowerCase():return!0;default:if(i)switch(s){case"application/octet-stream":case"binary/octet-stream":return!0}}return!1}function tf(s,i){const o=Th(s);return i?Oh(i,o):o}function Ih(s){const i=s.pathname;return i.substring(i.lastIndexOf("/")+1)}let Xr=null,pt=!1;try{if(document.currentScript!==void 0&&document.currentScript!==null&&"src"in document.currentScript&&document.currentScript.src!==""){let s=document.currentScript.src;!s.endsWith(".js")&&!s.endsWith("/")&&(s+="/"),Xr=new URL(".",s),pt=Xr.protocol.includes("extension")}}catch{console.warn("Unable to get currentScript URL")}const ei="https://ruffle.rs";class rf extends Error{constructor(i){super(`Failed to fetch ${i}`),this.swfUrl=i,this.swfUrl=i}}class af extends Error{constructor(i){super(`Not a valid swf: ${i}`)}}class Vl extends Error{constructor(i){super("Failed to load Ruffle WASM"),this.cause=i}}class of extends Error{constructor(i){super(`Invalid options: ${i}`)}}var Ct={},Bn={},Od;function Mh(){if(Od)return Bn;Od=1,Object.defineProperty(Bn,"__esModule",{value:!0}),Bn.createRef=Bn.h=Bn.createElement=void 0;const s=Jd(),i=Zd();function o(d,f,...v){if(typeof d=="function")return d({...f,children:v});const{finalTag:g,finalAttrs:x}=(0,i.applyTsxTag)(d,f),R=(0,i.createDomElement)(g,x);return x&&(0,s.setAttributes)(R,x),(0,i.applyChildren)(R,v),R}Bn.createElement=o,Bn.h=o;const u=()=>({current:null});return Bn.createRef=u,Bn}var Jr={},Id;function Lh(){if(Id)return Jr;Id=1,Object.defineProperty(Jr,"__esModule",{value:!0}),Jr.defineCustomElement=void 0;const s=ns();function i(o,u,d){return customElements.define(o,u,d),f=>(0,s.jsx)(o,f)}return Jr.defineCustomElement=i,Jr}var Fl={},Md;function Nh(){return Md||(Md=1,Object.defineProperty(Fl,"__esModule",{value:!0})),Fl}var Ld;function $h(){return Ld||(Ld=1,function(s){var i=Ct&&Ct.__createBinding||(Object.create?function(u,d,f,v){v===void 0&&(v=f);var g=Object.getOwnPropertyDescriptor(d,f);(!g||("get"in g?!d.__esModule:g.writable||g.configurable))&&(g={enumerable:!0,get:function(){return d[f]}}),Object.defineProperty(u,v,g)}:function(u,d,f,v){v===void 0&&(v=f),u[v]=d[f]}),o=Ct&&Ct.__exportStar||function(u,d){for(var f in u)f!=="default"&&!Object.prototype.hasOwnProperty.call(d,f)&&i(d,u,f)};Object.defineProperty(s,"__esModule",{value:!0}),o(Mh(),s),o(Lh(),s),o(ns(),s),o(Nh(),s)}(Ct)),Ct}var qh=$h();function Wh({action:s,showDetails:i,errorArray:o,errorText:u,swfUrl:d}){if(s.type=="show_details"){const f=()=>(i(),!1);return S.jsx("li",{children:S.jsx("a",{href:"#",id:"panic-view-details",onClick:f,children:ee("view-error-details")})})}else{if(s.type=="open_link")return S.jsx("li",{children:S.jsx("a",{href:s.url,target:"_top",children:s.label})});{let f;document.location.protocol.includes("extension")&&d?f=d.href:f=document.location.href,f=f.split(/[?#]/,1)[0];const v=`Error on ${f}`;let g=`https://github.com/ruffle-rs/ruffle/issues/new?title=${encodeURIComponent(v)}&template=error_report.md&labels=error-report&body=`,x=encodeURIComponent(u);return o.stackIndex>-1&&String(g+x).length>8195&&(o[o.stackIndex]=null,o.avmStackIndex>-1&&(o[o.avmStackIndex]=null),x=encodeURIComponent(o.join(""))),g+=x,S.jsx("li",{children:S.jsx("a",{href:g,target:"_top",children:ee("report-bug")})})}}}function Hl(){const s=new Date(yn.buildDate),i=new Date;return i.setMonth(i.getMonth()-6),i>s}const me={OpenDemo:{type:"open_link",url:ei+"/demo",label:ee("ruffle-demo")},DownloadDesktop:{type:"open_link",url:ei+"/downloads#desktop-app",label:ee("ruffle-desktop")},UpdateRuffle:{type:"open_link",url:ei+"/downloads",label:ee("update-ruffle")},CreateReport:{type:"create_report"},ShowDetails:{type:"show_details"},createReportOrUpdate(){return Hl()?this.UpdateRuffle:this.CreateReport},openWiki(s,i){return{type:"open_link",url:`https://github.com/ruffle-rs/ruffle/wiki/${s}`,label:i??ee("ruffle-wiki")}}};function Uh(s){var i;if(s instanceof rf)return s.swfUrl&&!s.swfUrl.protocol.includes("http")?{body:He("error-file-protocol"),actions:[me.OpenDemo,me.DownloadDesktop]}:window.location.origin===((i=s.swfUrl)==null?void 0:i.origin)||window.location.protocol.includes("extension")?{body:He("error-swf-fetch"),actions:[me.ShowDetails]}:{body:He("error-swf-cors"),actions:[me.openWiki("Using-Ruffle#configure-cors-header"),me.ShowDetails]};if(s instanceof af)return{body:He("error-invalid-swf"),actions:[me.ShowDetails]};if(s instanceof Vl){if(window.location.protocol==="file:")return{body:He("error-file-protocol"),actions:[me.OpenDemo,me.DownloadDesktop]};const o=String(s.cause.message).toLowerCase();if(o.includes("mime"))return{body:He("error-wasm-mime-type"),actions:[me.openWiki("Using-Ruffle#configure-webassembly-mime-type"),me.ShowDetails]};if(o.includes("networkerror")||o.includes("failed to fetch"))return{body:He("error-wasm-cors"),actions:[me.openWiki("Using-Ruffle#configure-cors-header"),me.ShowDetails]};if(o.includes("disallowed by embedder"))return{body:He("error-csp-conflict"),actions:[me.openWiki("Using-Ruffle#configure-wasm-csp"),me.ShowDetails]};if(s.cause.name==="CompileError")return{body:He("error-wasm-invalid"),actions:[me.openWiki("Using-Ruffle#addressing-a-compileerror"),me.ShowDetails]};if((o.includes("could not download wasm module")||o.includes("webassembly compilation aborted"))&&s.cause.name==="TypeError")return{body:He("error-wasm-download"),actions:[me.ShowDetails]};if(s.cause.name==="TypeError"){const u=He("error-javascript-conflict");return Hl()&&u.appendChild(He("error-javascript-conflict-outdated",{buildDate:yn.buildDate})),{body:u,actions:[me.createReportOrUpdate(),me.ShowDetails]}}return navigator.userAgent.includes("Edg")&&o.includes("webassembly is not defined")?{body:He("error-wasm-disabled-on-edge"),actions:[me.openWiki("Frequently-Asked-Questions-For-Users#edge-webassembly-error",ee("more-info")),me.ShowDetails]}:{body:He("error-wasm-not-found"),actions:[me.openWiki("Using-Ruffle#configuration-options"),me.ShowDetails]}}return s instanceof of?{body:He("error-javascript-config"),actions:[me.openWiki("Using-Ruffle#javascript-api"),me.ShowDetails]}:{body:He("error-unknown",{buildDate:yn.buildDate,outdated:String(Hl)}),actions:[me.createReportOrUpdate(),me.ShowDetails]}}function Bh(s,i,o,u){const d=o.join("");let{body:f,actions:v}=Uh(i);const g=qh.createRef(),x=()=>{g.current.classList.add("details"),g.current.replaceChildren(S.jsx("textarea",{readOnly:!0,children:d}))};s.textContent="",s.appendChild(S.jsxs("div",{id:"panic",children:[S.jsx("div",{id:"panic-title",children:ee("panic-title")}),S.jsx("div",{id:"panic-body",ref:g,children:f}),S.jsx("div",{id:"panic-footer",children:S.jsx("ul",{children:v.map(R=>Wh({action:R,showDetails:x,errorText:d,errorArray:o,swfUrl:u}))})})]}))}const Vh="modulepreload",Hh=function(s,i){return new URL(s,i).href},Nd={},$d=function(i,o,u){let d=Promise.resolve();if(o&&o.length>0){const v=document.getElementsByTagName("link"),g=document.querySelector("meta[property=csp-nonce]"),x=(g==null?void 0:g.nonce)||(g==null?void 0:g.getAttribute("nonce"));d=Promise.allSettled(o.map(R=>{if(R=Hh(R,u),R in Nd)return;Nd[R]=!0;const O=R.endsWith(".css"),q=O?'[rel="stylesheet"]':"";if(!!u)for(let ne=v.length-1;ne>=0;ne--){const H=v[ne];if(H.href===R&&(!O||H.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${R}"]${q}`))return;const Q=document.createElement("link");if(Q.rel=O?"stylesheet":Vh,O||(Q.as="script"),Q.crossOrigin="",Q.href=R,x&&Q.setAttribute("nonce",x),document.head.appendChild(Q),O)return new Promise((ne,H)=>{Q.addEventListener("load",ne),Q.addEventListener("error",()=>H(new Error(`Unable to preload CSS for ${R}`)))})}))}function f(v){const g=new Event("vite:preloadError",{cancelable:!0});if(g.payload=v,window.dispatchEvent(g),!g.defaultPrevented)throw v}return d.then(v=>{for(const g of v||[])g.status==="rejected"&&f(g.reason);return i().catch(f)})},Qh=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,3,1,0,1,10,14,1,12,0,65,0,65,0,65,0,252,10,0,0,11])),Kh=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,7,1,5,0,208,112,26,11])),Jh=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,12,1,10,0,67,0,0,0,0,252,0,26,11])),Zh=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,8,1,6,0,65,0,192,26,11])),Gh=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]));function Yh(){Object.defineProperty(Array.prototype,"reduce",{value(...s){if(s.length===0&&window.Prototype&&window.Prototype.Version&&window.Prototype.Version<"1.6.1")return this.length>1?this:this[0];const i=s[0];if(this===null)throw new TypeError("Array.prototype.reduce called on null or undefined");if(typeof i!="function")throw new TypeError(`${i} is not a function`);const o=Object(this),u=o.length>>>0;let d=0,f;if(s.length>=2)f=s[1];else{for(;d<u&&!(d in o);)d++;if(d>=u)throw new TypeError("Reduce of empty array with no initial value");f=o[d++]}for(;d<u;)d in o&&(f=i(f,o[d],d,o)),d++;return f}})}function Xh(){typeof window.constructor!="function"||!Ql(window.constructor)||(window.Window=window.constructor)}function ev(){(window.Reflect===void 0||window.Reflect===null)&&(window.Reflect={}),typeof Reflect.get!="function"&&Object.defineProperty(Reflect,"get",{value(s,i){return s[i]}}),typeof Reflect.set!="function"&&Object.defineProperty(Reflect,"set",{value(s,i,o){s[i]=o}}),typeof Reflect.has!="function"&&Object.defineProperty(Reflect,"has",{value(s,i){return i in s}}),typeof Reflect.ownKeys!="function"&&Object.defineProperty(Reflect,"ownKeys",{value(s){return[...Object.getOwnPropertyNames(s),...Object.getOwnPropertySymbols(s)]}})}function Ql(s){const i=typeof Function.prototype.toString=="function"?Function.prototype.toString():null;return typeof i=="string"&&i.indexOf("[native code]")>=0?Function.prototype.toString.call(s).indexOf("[native code]")>=0:!1}function nv(){(typeof Array.prototype.reduce!="function"||!Ql(Array.prototype.reduce))&&Yh(),(typeof Window!="function"||!Ql(Window))&&Xh(),ev()}async function tv(s){var R,O,q;nv();const i=(await Promise.all([Qh(),Gh(),Jh(),Zh(),Kh()])).every(Boolean);i||console.log("Some WebAssembly extensions are NOT available, falling back to the vanilla WebAssembly module"),(O=(R=ni.options).onFirstLoad)==null||O.call(R),ni.options.onFirstLoad=()=>{};const{default:o,RuffleInstanceBuilder:u,ZipWriter:d}=await(i?$d(()=>import("./ruffle_web-wasm_extensions-Bks4oJKl.js"),__vite__mapDeps([0,1]),import.meta.url):$d(()=>import("./ruffle_web-CCpmjeeG.js"),__vite__mapDeps([2,1]),import.meta.url));let f;const v=i?new URL(""+new URL("ruffle_web-wasm_extensions_bg-DIKyopDT.wasm",import.meta.url).href,import.meta.url):new URL(""+new URL("ruffle_web_bg-GKu5OixD.wasm",import.meta.url).href,import.meta.url),g=await fetch(v);if(s&&typeof ReadableStreamDefaultController=="function"){const K=((q=g==null?void 0:g.headers)==null?void 0:q.get("content-length"))||"";let Q=0;const ne=parseInt(K);f=new Response(new ReadableStream({async start(H){var Ie;const Z=(Ie=g.body)==null?void 0:Ie.getReader();if(!Z)throw"Response had no body";for(s(Q,ne);;){const{done:De,value:fe}=await Z.read();if(De)break;fe!=null&&fe.byteLength&&(Q+=fe==null?void 0:fe.byteLength),H.enqueue(fe),s(Q,ne)}H.close()}}),g)}else f=g;return await o(f),[u,d]}let Dl=null;async function rv(s){Dl===null&&(Dl=tv(s));const i=await Dl;return[new i[0],()=>new i[1]]}const iv=999,Kl={};function av(s){const i=Kl[s];return i!==void 0?{internalName:s,name:i.name,class:i.class}:null}function rs(s,i){const o=Kl[s];if(o!==void 0){if(o.class!==i)throw new Error("Internal naming conflict on "+s);return o.name}let u=0;if(window.customElements!==void 0)for(;u<iv;){let d=s;if(u>0&&(d=d+"-"+u),window.customElements.get(d)!==void 0){u+=1;continue}else window.customElements.define(d,i);return Kl[s]={class:i,name:d,internalName:s},d}throw new Error("Failed to assign custom element "+s)}function xe(s){return s!=null}function ov(s,i){if(xe(i.allowScriptAccess)&&s.setAllowScriptAccess(i.allowScriptAccess),xe(i.backgroundColor)&&s.setBackgroundColor(lv(i.backgroundColor)),xe(i.upgradeToHttps)&&s.setUpgradeToHttps(i.upgradeToHttps),xe(i.compatibilityRules)&&s.setCompatibilityRules(i.compatibilityRules),xe(i.letterbox)&&s.setLetterbox(i.letterbox.toLowerCase()),xe(i.base)&&s.setBaseUrl(i.base),xe(i.menu)&&s.setShowMenu(i.menu),xe(i.allowFullscreen)&&s.setAllowFullscreen(i.allowFullscreen),xe(i.salign)&&s.setStageAlign(i.salign.toLowerCase()),xe(i.forceAlign)&&s.setForceAlign(i.forceAlign),xe(i.quality)?s.setQuality(i.quality.toLowerCase()):uv()&&(console.log("Running on a mobile device; defaulting to low quality"),s.setQuality("low")),xe(i.scale)&&s.setScale(i.scale.toLowerCase()),xe(i.forceScale)&&s.setForceScale(i.forceScale),xe(i.frameRate)&&s.setFrameRate(i.frameRate),xe(i.wmode)&&s.setWmode(i.wmode),xe(i.logLevel)&&s.setLogLevel(i.logLevel),xe(i.maxExecutionDuration)&&s.setMaxExecutionDuration(sv(i.maxExecutionDuration)),xe(i.playerVersion)&&s.setPlayerVersion(i.playerVersion),xe(i.preferredRenderer)&&s.setPreferredRenderer(i.preferredRenderer),xe(i.openUrlMode)&&s.setOpenUrlMode(i.openUrlMode.toLowerCase()),xe(i.allowNetworking)&&s.setAllowNetworking(i.allowNetworking.toLowerCase()),xe(i.credentialAllowList)&&s.setCredentialAllowList(i.credentialAllowList),xe(i.playerRuntime)&&s.setPlayerRuntime(i.playerRuntime),xe(i.socketProxy))for(const o of i.socketProxy)s.addSocketProxy(o.host,o.port,o.proxyUrl)}function lv(s){if(s.startsWith("#")&&(s=s.substring(1)),s.length<6)return;let i=0;for(let o=0;o<6;o++){const u=parseInt(s[o],16);isNaN(u)?i=i<<4:i=i<<4|u}return i}function sv(s){return typeof s=="number"?s:s.secs}function uv(){return typeof window.orientation<"u"}const cv=/^\s*(\d+(\.\d+)?(%)?)/;let wa=!1;function Tl(s){if(s==null)return{};s instanceof URLSearchParams||(s=new URLSearchParams(s));const i={};for(const[o,u]of s)i[o]=u.toString();return i}class qd{constructor(i,o){this.x=i,this.y=o}distanceTo(i){const o=i.x-this.x,u=i.y-this.y;return Math.sqrt(o*o+u*u)}}class ft{constructor(i,o,u){this.contextMenuForceDisabled=!1,this.isTouch=!1,this.contextMenuSupported=!1,this._suppressContextMenu=!1,this.panicked=!1,this.rendererDebugInfo="",this.longPressTimer=null,this.pointerDownPosition=null,this.pointerMoveMaxDistance=0,this.onFSCommand=[],this.config={},this.SaveRow=({rowKey:g,solName:x,solData:R})=>S.jsxs("tr",{children:[S.jsx("td",{title:g,children:x}),S.jsx("td",{children:S.jsx("span",{class:"save-option",id:"download-save",title:ee("save-download"),onClick:()=>Ol(fv(R,"application/octet-stream"),x+".sol")})}),S.jsxs("td",{children:[S.jsx("input",{type:"file",accept:".sol",class:"replace-save",id:"replace-save-"+g,onChange:O=>this.replaceSOL(O,g)}),S.jsx("label",{for:"replace-save-"+g,class:"save-option",id:"replace-save",title:ee("save-replace")})]}),S.jsx("td",{children:S.jsx("span",{class:"save-option",id:"delete-save",title:ee("save-delete"),onClick:()=>this.deleteSave(g)})})]}),this.element=i,this.debugPlayerInfo=o,this.onCallbackAvailable=u,this.shadow=this.element.attachShadow({mode:"open",delegatesFocus:!0}),this.shadow.appendChild(En.content.cloneNode(!0)),this.dynamicStyles=this.shadow.getElementById("dynamic-styles"),this.container=this.shadow.getElementById("container"),this.playButton=this.shadow.getElementById("play-button"),this.playButton.addEventListener("click",()=>this.play()),this.unmuteOverlay=this.shadow.getElementById("unmute-overlay"),this.splashScreen=this.shadow.getElementById("splash-screen"),this.virtualKeyboard=this.shadow.getElementById("virtual-keyboard"),this.virtualKeyboard.addEventListener("input",this.virtualKeyboardInput.bind(this)),this.saveManager=this.shadow.getElementById("save-manager"),this.videoModal=this.shadow.getElementById("video-modal"),this.hardwareAccelerationModal=this.shadow.getElementById("hardware-acceleration-modal"),this.volumeControls=this.shadow.getElementById("volume-controls-modal"),this.clipboardModal=this.shadow.getElementById("clipboard-modal"),this.addModalJavaScript(this.saveManager),this.addModalJavaScript(this.volumeControls),this.addModalJavaScript(this.videoModal),this.addModalJavaScript(this.hardwareAccelerationModal),this.addModalJavaScript(this.clipboardModal),this.volumeSettings=new dv(!1,100),this.addVolumeControlsJavaScript(this.volumeControls);const d=this.saveManager.querySelector(".modal-button");d&&(d.addEventListener("click",this.backupSaves.bind(this)),d.innerText=ee("save-backup-all"));const f=this.unmuteOverlay.querySelector("#unmute-overlay-svg");if(f){const g=f.querySelector("#unmute-text");g.textContent=ee("click-to-unmute")}this.contextMenuOverlay=this.shadow.getElementById("context-menu-overlay"),this.contextMenuElement=this.shadow.getElementById("context-menu");const v=g=>{g.preventDefault(),g.stopPropagation()};this.contextMenuElement.addEventListener("contextmenu",v),this.contextMenuElement.addEventListener("click",v),document.documentElement.addEventListener("pointerdown",this.checkIfTouch.bind(this)),this.element.addEventListener("contextmenu",this.showContextMenu.bind(this)),this.container.addEventListener("pointerdown",this.pointerDown.bind(this)),this.container.addEventListener("pointermove",this.checkLongPressMovement.bind(this)),this.container.addEventListener("pointerup",this.checkLongPress.bind(this)),this.container.addEventListener("pointercancel",this.clearLongPressTimer.bind(this)),this.element.addEventListener("fullscreenchange",this.fullScreenChange.bind(this)),this.element.addEventListener("webkitfullscreenchange",this.fullScreenChange.bind(this)),this.instance=null,this.newZipWriter=null,this._readyState=nr.HaveNothing,this.metadata=null,this.lastActivePlayingState=!1,this.setupPauseOnTabHidden()}addFSCommandHandler(i){this.onFSCommand.push(i)}callFSCommand(i,o){if(this.onFSCommand.length==0)return!1;for(const u of this.onFSCommand)u(i,o);return!0}addModalJavaScript(i){const o=i.querySelector("#video-holder"),u=()=>{i.classList.add("hidden"),o&&(o.textContent="")};i.parentNode.addEventListener("click",u);const d=i.querySelector(".modal-area");d&&d.addEventListener("click",v=>v.stopPropagation());const f=i.querySelector(".close-modal");f&&f.addEventListener("click",u)}addVolumeControlsJavaScript(i){const o=i.querySelector("#mute-checkbox"),u=i.querySelector("#volume-mute"),d=[i.querySelector("#volume-min"),i.querySelector("#volume-mid"),i.querySelector("#volume-max")],f=i.querySelector("#volume-slider"),v=i.querySelector("#volume-slider-text"),g=()=>{if(this.volumeSettings.isMuted)u.style.display="inline",d.forEach(x=>{x.style.display="none"});else{u.style.display="none";const x=Math.round(this.volumeSettings.volume/50);d.forEach((R,O)=>{R.style.display=O===x?"inline":"none"})}};o.checked=this.volumeSettings.isMuted,f.disabled=o.checked,f.valueAsNumber=this.volumeSettings.volume,v.textContent=f.value+"%",g(),o.addEventListener("change",()=>{var x;f.disabled=o.checked,this.volumeSettings.isMuted=o.checked,(x=this.instance)==null||x.set_volume(this.volumeSettings.get_volume()),g()}),f.addEventListener("input",()=>{var x;v.textContent=f.value+"%",this.volumeSettings.volume=f.valueAsNumber,(x=this.instance)==null||x.set_volume(this.volumeSettings.get_volume()),g()})}setupPauseOnTabHidden(){document.addEventListener("visibilitychange",()=>{this.instance&&(document.hidden&&(this.lastActivePlayingState=this.instance.is_playing(),this.instance.pause()),!document.hidden&&this.lastActivePlayingState===!0&&this.instance.play())},!1)}updateStyles(){if(this.dynamicStyles.sheet){if(this.dynamicStyles.sheet.cssRules)for(let u=this.dynamicStyles.sheet.cssRules.length-1;u>=0;u--)this.dynamicStyles.sheet.deleteRule(u);const i=this.element.attributes.getNamedItem("width");if(i!=null){const u=ft.htmlDimensionToCssDimension(i.value);u!==null&&this.dynamicStyles.sheet.insertRule(`:host { width: ${u}; }`)}const o=this.element.attributes.getNamedItem("height");if(o!=null){const u=ft.htmlDimensionToCssDimension(o.value);u!==null&&this.dynamicStyles.sheet.insertRule(`:host { height: ${u}; }`)}}}isUnusedFallbackObject(){const i=av("ruffle-object");if(i!==null){let o=this.element.parentNode;for(;o!==document&&o!==null;){if(o.nodeName===i.name)return!0;o=o.parentNode}}return!1}async ensureFreshInstance(){var f,v,g;this.destroy(),this.loadedConfig&&this.loadedConfig.splashScreen!==!1&&this.loadedConfig.preloader!==!1&&this.showSplashScreen(),this.loadedConfig&&this.loadedConfig.preloader===!1&&console.warn("The configuration option preloader has been replaced with splashScreen. If you own this website, please update the configuration."),this.loadedConfig&&this.loadedConfig.maxExecutionDuration&&typeof this.loadedConfig.maxExecutionDuration!="number"&&console.warn("Configuration: An obsolete format for duration for 'maxExecutionDuration' was used, please use a single number indicating seconds instead. For instance '15' instead of '{secs: 15, nanos: 0}'."),this.loadedConfig&&typeof this.loadedConfig.contextMenu=="boolean"&&console.warn('The configuration option contextMenu no longer takes a boolean. Use "on", "off", or "rightClickOnly".');const[i,o]=await rv(this.onRuffleDownloadProgress.bind(this)).catch(x=>{console.error(`Serious error loading Ruffle: ${x}`);const R=new Vl(x);throw this.panic(R),R});if(this.newZipWriter=o,ov(i,this.loadedConfig||{}),i.setVolume(this.volumeSettings.get_volume()),(f=this.loadedConfig)!=null&&f.fontSources)for(const x of this.loadedConfig.fontSources)try{const R=await fetch(x);i.addFont(x,new Uint8Array(await R.arrayBuffer()))}catch(R){console.warn(`Couldn't download font source from ${x}`,R)}for(const x in(v=this.loadedConfig)==null?void 0:v.defaultFonts){const R=this.loadedConfig.defaultFonts[x];R&&i.setDefaultFont(x,R)}this.instance=await i.build(this.container,this).catch(x=>{throw console.error(`Serious error loading Ruffle: ${x}`),this.panic(x),x}),this.rendererDebugInfo=this.instance.renderer_debug_info(),this.rendererDebugInfo.includes("Adapter Device Type: Cpu")&&this.container.addEventListener("mouseover",this.openHardwareAccelerationModal.bind(this),{once:!0});const u=this.instance.renderer_name(),d=this.instance.constructor;if(console.log("%cNew Ruffle instance created (Version: "+yn.versionName+" | WebAssembly extensions: "+(d.is_wasm_simd_used()?"ON":"OFF")+" | Used renderer: "+(u??"")+")","background: #37528C; color: #FFAD33"),this.audioState()!=="running"&&(this.container.style.visibility="hidden",await new Promise(x=>{window.setTimeout(()=>{x()},200)}),this.container.style.visibility=""),this.unmuteAudioContext(),!this.loadedConfig||this.loadedConfig.autoplay===ir.On||this.loadedConfig.autoplay!==ir.Off&&this.audioState()==="running"){if(this.play(),this.audioState()!=="running"){(!this.loadedConfig||this.loadedConfig.unmuteOverlay!==ti.Hidden)&&(this.unmuteOverlay.style.display="block"),this.container.addEventListener("click",this.unmuteOverlayClicked.bind(this),{once:!0});const x=(g=this.instance)==null?void 0:g.audio_context();x&&(x.onstatechange=()=>{x.state==="running"&&this.unmuteOverlayClicked(),x.onstatechange=null})}}else this.playButton.style.display="block"}onRuffleDownloadProgress(i,o){const u=this.splashScreen.querySelector(".loadbar-inner"),d=this.splashScreen.querySelector(".loadbar");Number.isNaN(o)?d&&(d.style.display="none"):u.style.width=`${100*(i/o)}%`}destroy(){this.instance&&(this.instance.destroy(),this.instance=null,this.metadata=null,this._readyState=nr.HaveNothing,console.log("Ruffle instance destroyed."))}checkOptions(i){if(typeof i=="string")return{url:i};const o=(u,d)=>{if(!u){const f=new of(d);throw this.panic(f),f}};return o(i!==null&&typeof i=="object","Argument 0 must be a string or object"),o("url"in i||"data"in i,"Argument 0 must contain a `url` or `data` key"),o(!("url"in i)||typeof i.url=="string","`url` must be a string"),i}async reload(){if(this.loadedConfig)await this.load(this.loadedConfig);else throw new Error("Cannot reload if load wasn't first called")}async load(i,o=!1){var u;if(i=this.checkOptions(i),!this.element.isConnected||this.isUnusedFallbackObject()){console.warn("Ignoring attempt to play a disconnected or suspended Ruffle element");return}if(!is(this.element))try{this.loadedConfig={...Om,...o&&"url"in i?{allowScriptAccess:sf("samedomain",i.url)}:{},...((u=window.RufflePlayer)==null?void 0:u.config)??{},...this.config,...i},this.loadedConfig.backgroundColor&&this.loadedConfig.wmode!==xa.Transparent&&(this.container.style.backgroundColor=this.loadedConfig.backgroundColor),await this.ensureFreshInstance(),"url"in i?(console.log(`Loading SWF file ${i.url}`),this.swfUrl=new URL(i.url,document.baseURI),this.instance.stream_from(this.swfUrl.href,Tl(i.parameters))):"data"in i&&(console.log("Loading SWF data"),delete this.swfUrl,this.instance.load_data(new Uint8Array(i.data),Tl(i.parameters),i.swfFileName||"movie.swf"))}catch(d){console.error(`Serious error occurred loading SWF file: ${d}`);const f=new Error(d);throw this.panic(f),f}}play(){this.instance&&(this.instance.play(),this.playButton.style.display="none")}get isPlaying(){return this.instance?this.instance.is_playing():!1}get volume(){return this.instance?this.instance.volume():1}set volume(i){this.instance&&this.instance.set_volume(i)}get fullscreenEnabled(){return!!(document.fullscreenEnabled||document.webkitFullscreenEnabled)}get isFullscreen(){return(document.fullscreenElement||document.webkitFullscreenElement)===this.element}setFullscreen(i){this.fullscreenEnabled&&i!==this.isFullscreen&&(i?this.enterFullscreen():this.exitFullscreen())}enterFullscreen(){const i={navigationUI:"hide"};this.element.requestFullscreen?this.element.requestFullscreen(i):this.element.webkitRequestFullscreen?this.element.webkitRequestFullscreen(i):this.element.webkitRequestFullScreen&&this.element.webkitRequestFullScreen(i)}exitFullscreen(){document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}fullScreenChange(){var i;(i=this.instance)==null||i.set_fullscreen(this.isFullscreen)}checkIfTouch(i){this.isTouch=i.pointerType==="touch"||i.pointerType==="pen"}confirmReloadSave(i,o,u){if(ya(o)&&localStorage[i]){if(!u&&!confirm(ee("save-delete-prompt")))return;const d=this.swfUrl?this.swfUrl.pathname:"",f=this.swfUrl?this.swfUrl.hostname:document.location.hostname,v=i.split("/").slice(1,-1).join("/");if(d.includes(v)&&i.startsWith(f)){confirm(ee("save-reload-prompt",{action:u?"replace":"delete"}))&&this.loadedConfig&&(this.destroy(),u?localStorage.setItem(i,o):localStorage.removeItem(i),this.reload(),this.populateSaves(),this.saveManager.classList.add("hidden"));return}u?localStorage.setItem(i,o):localStorage.removeItem(i),this.populateSaves(),this.saveManager.classList.add("hidden")}}replaceSOL(i,o){const u=i.target,d=new FileReader;d.addEventListener("load",()=>{if(d.result&&typeof d.result=="string"){const f=new RegExp("data:.*;base64,"),v=d.result.replace(f,"");this.confirmReloadSave(o,v,!0)}}),u&&u.files&&u.files.length>0&&u.files[0]&&d.readAsDataURL(u.files[0])}checkSaves(){if(!this.saveManager.querySelector("#local-saves"))return!1;try{if(localStorage===null)return!1}catch{return!1}return Object.keys(localStorage).some(i=>{const o=i.split("/").pop(),u=localStorage.getItem(i);return o&&u&&ya(u)})}deleteSave(i){const o=localStorage.getItem(i);o&&this.confirmReloadSave(i,o,!1)}populateSaves(){if(!this.checkSaves())return;const i=this.saveManager.querySelector("#local-saves");i.textContent="",Object.keys(localStorage).forEach(o=>{const u=o.split("/").pop(),d=localStorage.getItem(o);u&&d&&ya(d)&&i.appendChild(S.jsx(this.SaveRow,{rowKey:o,solName:u,solData:d}))})}async backupSaves(){const i=this.newZipWriter(),o=[];Object.keys(localStorage).forEach(d=>{let f=String(d.split("/").pop());const v=localStorage.getItem(d);if(v&&ya(v)){const g=lf(v),x=o.filter(R=>R===f).length;o.push(f),x>0&&(f+=` (${x+1})`),i.addFile(f+".sol",g)}});const u=new Blob([i.save()],{type:"application/zip"});Ol(u,"saves.zip")}openHardwareAccelerationModal(){this.hardwareAccelerationModal.classList.remove("hidden")}async openSaveManager(){this.populateSaves(),this.saveManager.classList.remove("hidden")}openVolumeControls(){this.volumeControls.classList.remove("hidden")}async downloadSwf(){try{if(this.swfUrl){console.log("Downloading SWF: "+this.swfUrl);const i=await fetch(this.swfUrl.href);if(!i.ok){console.error("SWF download failed");return}const o=await i.blob();Ol(o,Ih(this.swfUrl))}else console.error("SWF download failed")}catch{console.error("SWF download failed")}}virtualKeyboardInput(){const i=this.virtualKeyboard,o=i.value;for(const u of o)for(const d of["keydown","keyup"])this.element.dispatchEvent(new KeyboardEvent(d,{key:u,bubbles:!0}));i.value=""}openVirtualKeyboard(){var i;(i=this.instance)!=null&&i.has_focus()?this.virtualKeyboard.focus({preventScroll:!0}):setTimeout(()=>{this.virtualKeyboard.focus({preventScroll:!0})},0)}closeVirtualKeyboard(){this.isVirtualKeyboardFocused()&&this.container.focus({preventScroll:!0})}isVirtualKeyboardFocused(){return this.shadow.activeElement===this.virtualKeyboard}contextMenuItems(){const i="✓",o=[],u=()=>{o.length>0&&o[o.length-1]!==null&&o.push(null)};return this.instance&&this.isPlaying&&(this.instance.prepare_context_menu().forEach((f,v)=>{f.separatorBefore&&u(),o.push({text:f.caption+(f.checked?` (${i})`:""),onClick:async()=>{var g;return(g=this.instance)==null?void 0:g.run_context_menu_callback(v)},enabled:f.enabled})}),u()),this.fullscreenEnabled&&(this.isFullscreen?o.push({text:ee("context-menu-exit-fullscreen"),onClick:async()=>this.setFullscreen(!1)}):o.push({text:ee("context-menu-enter-fullscreen"),onClick:async()=>this.setFullscreen(!0)})),o.push({text:ee("context-menu-volume-controls"),onClick:async()=>{this.openVolumeControls()}}),this.instance&&this.swfUrl&&this.loadedConfig&&this.loadedConfig.showSwfDownload===!0&&(u(),o.push({text:ee("context-menu-download-swf"),onClick:this.downloadSwf.bind(this)})),navigator.clipboard&&window.isSecureContext&&o.push({text:ee("context-menu-copy-debug-info"),onClick:()=>navigator.clipboard.writeText(this.getPanicData())}),this.checkSaves()&&o.push({text:ee("context-menu-open-save-manager"),onClick:this.openSaveManager.bind(this)}),u(),o.push({text:ee("context-menu-about-ruffle",{flavor:pt?"extension":"",version:yn.versionName}),async onClick(){window.open(ei,"_blank")}}),this.isTouch&&(u(),o.push({text:ee("context-menu-hide"),onClick:async()=>{this.contextMenuForceDisabled=!0}})),o}pointerDown(i){this.pointerDownPosition=new qd(i.pageX,i.pageY),this.pointerMoveMaxDistance=0,this.startLongPressTimer()}clearLongPressTimer(){this.longPressTimer&&(clearTimeout(this.longPressTimer),this.longPressTimer=null)}startLongPressTimer(){this.clearLongPressTimer(),this.longPressTimer=setTimeout(()=>this.clearLongPressTimer(),800)}checkLongPressMovement(i){if(this.pointerDownPosition!==null){const o=new qd(i.pageX,i.pageY),u=this.pointerDownPosition.distanceTo(o);u>this.pointerMoveMaxDistance&&(this.pointerMoveMaxDistance=u)}}checkLongPress(i){this.longPressTimer?this.clearLongPressTimer():!this.contextMenuSupported&&i.pointerType!=="mouse"&&this.pointerMoveMaxDistance<15&&this.showContextMenu(i)}suppressContextMenu(){this._suppressContextMenu=!0}showContextMenu(i){var x,R;if(this.panicked)return;if(i.preventDefault(),this._suppressContextMenu){this._suppressContextMenu=!1;return}if(this.shadow.querySelectorAll(".modal:not(.hidden)").length!==0||(i.type==="contextmenu"?(this.contextMenuSupported=!0,document.documentElement.addEventListener("click",this.hideContextMenu.bind(this),{once:!0})):(document.documentElement.addEventListener("pointerup",this.hideContextMenu.bind(this),{once:!0}),i.stopPropagation()),[!1,tr.Off].includes(((x=this.loadedConfig)==null?void 0:x.contextMenu)??tr.On)||this.isTouch&&((R=this.loadedConfig)==null?void 0:R.contextMenu)===tr.RightClickOnly||this.contextMenuForceDisabled))return;for(;this.contextMenuElement.firstChild;)this.contextMenuElement.removeChild(this.contextMenuElement.firstChild);for(const O of this.contextMenuItems())if(O===null)this.contextMenuElement.appendChild(S.jsx("li",{class:"menu-separator",children:S.jsx("hr",{})}));else{const{text:q,onClick:K,enabled:Q}=O,ne=S.jsx("li",{class:{"menu-item":!0,disabled:Q===!1},"data-text":q,children:q});if(this.contextMenuElement.appendChild(ne),Q!==!1){const H=async Z=>{Z.preventDefault(),Z.stopPropagation(),await K(Z),this.hideContextMenu()};this.contextMenuSupported?(ne.addEventListener("click",H),ne.addEventListener("contextmenu",H)):ne.addEventListener("pointerup",H)}}this.contextMenuOverlay.classList.remove("hidden");const o=this.element.getBoundingClientRect(),u=this.contextMenuElement.getBoundingClientRect(),d=Math.max(0,i.clientX+u.width-document.documentElement.clientWidth),f=Math.max(0,i.clientY+u.height-document.documentElement.clientHeight),v=i.clientX-o.x-d,g=i.clientY-o.y-f;this.contextMenuElement.style.transform=`translate(${v}px, ${g}px)`}hideContextMenu(){var i;(i=this.instance)==null||i.clear_custom_menu_items(),this.contextMenuOverlay.classList.add("hidden")}pause(){this.instance&&(this.instance.pause(),this.playButton.style.display="block")}audioState(){if(this.instance){const i=this.instance.audio_context();return i&&i.state||"running"}return"suspended"}unmuteOverlayClicked(){if(this.instance){if(this.audioState()!=="running"){const i=this.instance.audio_context();i&&i.resume()}this.unmuteOverlay.style.display="none"}}unmuteAudioContext(){if(!wa){if(navigator.maxTouchPoints<1){wa=!0;return}"audioSession"in navigator?navigator.audioSession.type="playback":this.container.addEventListener("click",()=>{var u;if(wa)return;const i=(u=this.instance)==null?void 0:u.audio_context();if(!i)return;const o=new Audio;o.src=(()=>{const d=new ArrayBuffer(10),f=new DataView(d),v=i.sampleRate;return f.setUint32(0,v,!0),f.setUint32(4,v,!0),f.setUint16(8,1,!0),`data:audio/wav;base64,UklGRisAAABXQVZFZm10IBAAAAABAAEA${window.btoa(String.fromCharCode(...new Uint8Array(d))).slice(0,13)}AgAZGF0YQcAAACAgICAgICAAAA=`})(),o.load(),o.play().then(()=>{wa=!0}).catch(d=>{console.warn(`Failed to play dummy sound: ${d}`)})},{once:!0})}}static htmlDimensionToCssDimension(i){if(i){const o=i.match(cv);if(o){let u=o[1];return o[3]||(u+="px"),u}}return null}callExternalInterface(i,o){var u;return(u=this.instance)==null?void 0:u.call_exposed_callback(i,o)}getObjectId(){return this.element.getAttribute("name")}set traceObserver(i){var o;(o=this.instance)==null||o.set_trace_observer(i)}getPanicData(){let i=`
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
`,i+=`Version: ${yn.versionNumber}
`,i+=`Name: ${yn.versionName}
`,i+=`Channel: ${yn.versionChannel}
`,i+=`Built: ${yn.buildDate}
`,i+=`Commit: ${yn.commitHash}
`,i+=`Is extension: ${pt}
`,i+=`
# Metadata
`,this.metadata)for(const[o,u]of Object.entries(this.metadata))i+=`${o}: ${u}
`;return i}panic(i){var d;if(this.panicked)return;this.panicked=!0,this.hideSplashScreen();const o=i;if(i instanceof Error&&(i.name==="AbortError"||i.message.includes("AbortError")))return;if(i instanceof Vl){const f=(d=this.loadedConfig)==null?void 0:d.openInNewTab,v=this.loadedConfig&&"url"in this.loadedConfig?new URL(this.loadedConfig.url,document.baseURI):void 0;if(f&&v){this.addOpenInNewTabMessage(f,v);return}i=i.cause}const u=Object.assign([],{stackIndex:-1,avmStackIndex:-1});if(u.push(`# Error Info
`),i instanceof Error){if(u.push(`Error name: ${i.name}
`),u.push(`Error message: ${i.message}
`),i.stack){const f=u.push(`Error stack:
\`\`\`
${i.stack}
\`\`\`
`)-1;if(i.avmStack){const v=u.push(`AVM2 stack:
\`\`\`
    ${i.avmStack.trim().replace(/\t/g,"    ")}
\`\`\`
`)-1;u.avmStackIndex=v}u.stackIndex=f}}else u.push(`Error: ${i}
`);u.push(this.getPanicData()),Bh(this.container,o,u,this.swfUrl),this.destroy()}addOpenInNewTabMessage(i,o){var x,R;const u=new URL(o);if((x=this.loadedConfig)!=null&&x.parameters){const O=Tl((R=this.loadedConfig)==null?void 0:R.parameters);Object.entries(O).forEach(([q,K])=>{u.searchParams.set(q,K)})}this.hideSplashScreen();const d=document.createElement("div");d.id="message-overlay";const f=document.createElement("div");f.className="message",f.appendChild(He("message-cant-embed"));const v=document.createElement("div"),g=document.createElement("a");g.innerText=ee("open-in-new-tab"),g.onclick=()=>i(u),v.appendChild(g),f.appendChild(v),d.appendChild(f),this.container.prepend(d)}displayRootMovieDownloadFailedMessage(i){var u;const o=(u=this.loadedConfig)==null?void 0:u.openInNewTab;if(o&&this.swfUrl&&window.location.origin!==this.swfUrl.origin)this.addOpenInNewTabMessage(o,this.swfUrl);else{const d=i?new af(this.swfUrl):new rf(this.swfUrl);this.panic(d)}}displayMessage(i){const o=document.createElement("div");o.id="message-overlay";const u=document.createElement("div");u.className="message";const d=document.createElement("p");d.textContent=i,u.appendChild(d);const f=document.createElement("div"),v=document.createElement("button");v.id="continue-btn",v.textContent=ee("continue"),f.appendChild(v),u.appendChild(f),o.appendChild(u),this.container.prepend(o),this.container.querySelector("#continue-btn").onclick=()=>{o.parentNode.removeChild(o)}}displayUnsupportedVideo(i){const o=this.videoModal.querySelector("#video-holder");if(o){const u=document.createElement("video");u.addEventListener("contextmenu",d=>d.stopPropagation()),u.src=i,u.autoplay=!0,u.controls=!0,o.textContent="",o.appendChild(u),this.videoModal.classList.remove("hidden")}}displayClipboardModal(i){const o=this.clipboardModal.querySelector("#clipboard-modal-description");o&&(o.textContent=ee("clipboard-message-description",{variant:i?"access-denied":"unsupported"}),this.clipboardModal.classList.remove("hidden"))}hideSplashScreen(){this.splashScreen.classList.add("hidden"),this.container.classList.remove("hidden")}showSplashScreen(){this.splashScreen.classList.remove("hidden"),this.container.classList.add("hidden")}setMetadata(i){this.metadata=i,this._readyState=nr.Loaded,this.hideSplashScreen(),this.element.dispatchEvent(new CustomEvent(ft.LOADED_METADATA)),this.element.dispatchEvent(new CustomEvent(ft.LOADED_DATA))}}ft.LOADED_METADATA="loadedmetadata";ft.LOADED_DATA="loadeddata";class dv{constructor(i,o){this.isMuted=i,this.volume=o}get_volume(){return this.isMuted?0:this.volume/100}}function Jl(s,i){const o={url:s},u=i("allowNetworking");u!==null&&(o.allowNetworking=u);const d=sf(i("allowScriptAccess"),s);d!==null&&(o.allowScriptAccess=d);const f=i("bgcolor");f!==null&&(o.backgroundColor=f);const v=i("base");if(v!==null)if(v==="."){const ne=new URL(s,document.baseURI);o.base=new URL(v,ne).href}else o.base=v;const g=Wd(i("menu"));g!==null&&(o.menu=g);const x=Wd(i("allowFullScreen"));x!==null&&(o.allowFullscreen=x);const R=i("flashvars");R!==null&&(o.parameters=R);const O=i("quality");O!==null&&(o.quality=O);const q=i("salign");q!==null&&(o.salign=q);const K=i("scale");K!==null&&(o.scale=K);const Q=i("wmode");return Q!==null&&(o.wmode=Q),o}function Zl(s){if(s){let i="",o="";try{const u=new URL(s,ei);i=u.pathname,o=u.hostname}catch{}if(i.startsWith("/v/")&&/^(?:(?:www\.|m\.)?youtube(?:-nocookie)?\.com)|(?:youtu\.be)$/i.test(o))return!0}return!1}function Gl(s,i){var d;const o=s.getAttribute(i),u=((d=window.RufflePlayer)==null?void 0:d.config)??{};if(o)try{const f=new URL(o);f.protocol==="http:"&&window.location.protocol==="https:"&&(!("upgradeToHttps"in u)||u.upgradeToHttps!==!1)&&(f.protocol="https:",s.setAttribute(i,f.toString()))}catch{}}function is(s){let i=s.parentElement;for(;i!==null;){switch(i.tagName){case"AUDIO":case"VIDEO":return!0}i=i.parentElement}return!1}function Ol(s,i){const o=URL.createObjectURL(s),u=document.createElement("a");u.href=o,u.download=i,u.click(),URL.revokeObjectURL(o)}function lf(s){const i=atob(s);return Uint8Array.from(i,o=>o.charCodeAt(0))}function fv(s,i){const o=lf(s);return new Blob([o],{type:i})}function ya(s){try{const i=atob(s);return pv(i)}catch{return!1}}function pv(s){return s.charCodeAt(0)===0&&s.charCodeAt(1)===191&&s.slice(6,10)==="TCSO"&&[0,4,0,0,0,0].every((i,o)=>s.charCodeAt(10+o)===i)}function Wd(s){switch(s==null?void 0:s.toLowerCase()){case"true":return!0;case"false":return!1;default:return null}}function sf(s,i){switch(s==null?void 0:s.toLowerCase()){case"always":return!0;case"never":return!1;case"samedomain":try{return new URL(window.location.href).origin===new URL(i,window.location.href).origin}catch{return!1}default:return null}}var mv=function(s,i,o,u,d){if(u==="m")throw new TypeError("Private method is not writable");if(u==="a"&&!d)throw new TypeError("Private accessor was defined without a setter");if(typeof i=="function"?s!==i||!d:!i.has(s))throw new TypeError("Cannot write private member to an object whose class did not declare it");return u==="a"?d.call(s,o):d?d.value=o:i.set(s,o),o},Ee=function(s,i,o,u){if(o==="a"&&!u)throw new TypeError("Private accessor was defined without a getter");if(typeof i=="function"?s!==i||!u:!i.has(s))throw new TypeError("Cannot read private member from an object whose class did not declare it");return o==="m"?u:o==="a"?u.call(s):u?u.value:i.get(s)},ge;class hv{constructor(i){ge.set(this,void 0),mv(this,ge,i,"f")}addFSCommandHandler(i){Ee(this,ge,"f").addFSCommandHandler(i)}get readyState(){return Ee(this,ge,"f")._readyState}get metadata(){return Ee(this,ge,"f").metadata}get loadedConfig(){return Ee(this,ge,"f").loadedConfig??null}async reload(){await Ee(this,ge,"f").reload()}async load(i,o=!1){await Ee(this,ge,"f").load(i,o)}resume(){Ee(this,ge,"f").play()}get isPlaying(){return Ee(this,ge,"f").isPlaying}get volume(){return Ee(this,ge,"f").volume}set volume(i){Ee(this,ge,"f").volume=i}get fullscreenEnabled(){return Ee(this,ge,"f").fullscreenEnabled}get isFullscreen(){return Ee(this,ge,"f").isFullscreen}setFullscreen(i){Ee(this,ge,"f").setFullscreen(i)}requestFullscreen(){Ee(this,ge,"f").enterFullscreen()}exitFullscreen(){Ee(this,ge,"f").exitFullscreen()}async downloadSwf(){await Ee(this,ge,"f").downloadSwf()}displayMessage(i){Ee(this,ge,"f").displayMessage(i)}suspend(){Ee(this,ge,"f").pause()}get suspended(){return!Ee(this,ge,"f").isPlaying}set traceObserver(i){Ee(this,ge,"f").traceObserver=i}get config(){return Ee(this,ge,"f").config}set config(i){Ee(this,ge,"f").config=i}callExternalInterface(i,...o){return Ee(this,ge,"f").callExternalInterface(i,o)}}ge=new WeakMap;var de=function(s,i,o,u){if(o==="a"&&!u)throw new TypeError("Private accessor was defined without a getter");if(typeof i=="function"?s!==i||!u:!i.has(s))throw new TypeError("Cannot read private member from an object whose class did not declare it");return o==="m"?u:o==="a"?u.call(s):u?u.value:i.get(s)},Ud=function(s,i,o,u,d){if(u==="m")throw new TypeError("Private method is not writable");if(u==="a"&&!d)throw new TypeError("Private accessor was defined without a setter");if(typeof i=="function"?s!==i||!d:!i.has(s))throw new TypeError("Cannot write private member to an object whose class did not declare it");return u==="a"?d.call(s,o):d?d.value=o:i.set(s,o),o},se,Zr;class as extends HTMLElement{get onFSCommand(){return de(this,Zr,"f")}set onFSCommand(i){Ud(this,Zr,i,"f")}get readyState(){return de(this,se,"f")._readyState}get metadata(){return de(this,se,"f").metadata}constructor(){super(),se.set(this,void 0),Zr.set(this,null),Ud(this,se,new ft(this,()=>this.debugPlayerInfo(),i=>{try{Object.defineProperty(this,i,{value:(...o)=>de(this,se,"f").callExternalInterface(i,o),configurable:!0})}catch(o){console.warn(`Error setting ExternalInterface legacy callback for ${i}`,o)}}),"f"),de(this,se,"f").addFSCommandHandler((i,o)=>{var u;(u=de(this,Zr,"f"))==null||u.call(this,i,o)})}ruffle(i){if((i??1)===1)return new hv(de(this,se,"f"));throw new Error(`Version ${i} not supported.`)}get loadedConfig(){return de(this,se,"f").loadedConfig??null}connectedCallback(){de(this,se,"f").updateStyles()}static get observedAttributes(){return["width","height"]}attributeChangedCallback(i,o,u){(i==="width"||i==="height")&&de(this,se,"f").updateStyles()}disconnectedCallback(){de(this,se,"f").destroy()}async reload(){await de(this,se,"f").reload()}async load(i,o=!1){await de(this,se,"f").load(i,o)}play(){de(this,se,"f").play()}get isPlaying(){return de(this,se,"f").isPlaying}get volume(){return de(this,se,"f").volume}set volume(i){de(this,se,"f").volume=i}get fullscreenEnabled(){return de(this,se,"f").fullscreenEnabled}get isFullscreen(){return de(this,se,"f").isFullscreen}setFullscreen(i){de(this,se,"f").setFullscreen(i)}enterFullscreen(){de(this,se,"f").enterFullscreen()}exitFullscreen(){de(this,se,"f").exitFullscreen()}async downloadSwf(){await de(this,se,"f").downloadSwf()}pause(){de(this,se,"f").pause()}set traceObserver(i){de(this,se,"f").traceObserver=i}debugPlayerInfo(){return""}PercentLoaded(){return de(this,se,"f")._readyState===nr.Loaded?100:0}get config(){return de(this,se,"f").config}set config(i){de(this,se,"f").config=i}displayMessage(i){de(this,se,"f").displayMessage(i)}}se=new WeakMap,Zr=new WeakMap;function uf(s,i){if(s){for(const o of s.attributes)if(o.specified){if(o.name==="title"&&o.value==="Adobe Flash Player")continue;try{i.setAttribute(o.name,o.value)}catch{console.warn(`Unable to set attribute ${o.name} on Ruffle instance`)}}for(const o of Array.from(s.children))i.appendChild(o)}}class or extends as{connectedCallback(){super.connectedCallback();const i=this.attributes.getNamedItem("src");if(i){const o=d=>{var f;return((f=this.attributes.getNamedItem(d))==null?void 0:f.value)??null},u=Jl(i.value,o);this.load(u,!0)}}get nodeName(){return"EMBED"}get src(){var i;return(i=this.attributes.getNamedItem("src"))==null?void 0:i.value}set src(i){if(i){const o=document.createAttribute("src");o.value=i,this.attributes.setNamedItem(o)}else this.attributes.removeNamedItem("src")}static get observedAttributes(){return["src","width","height"]}attributeChangedCallback(i,o,u){if(super.attributeChangedCallback(i,o,u),this.isConnected&&i==="src"){const d=this.attributes.getNamedItem("src");if(d){const f=g=>{var x;return((x=this.attributes.getNamedItem(g))==null?void 0:x.value)??null},v=Jl(d.value,f);this.load(v,!0)}}}static isInterdictable(i){const o=i.getAttribute("src"),u=i.getAttribute("type");return!o||is(i)?!1:Zl(o)?(Gl(i,"src"),!1):tf(o,u)}static fromNativeEmbedElement(i){const o=rs("ruffle-embed",or),u=document.createElement(o);return uf(i,u),u}get height(){return this.getAttribute("height")||""}set height(i){this.setAttribute("height",i)}get width(){return this.getAttribute("width")||""}set width(i){this.setAttribute("width",i)}get type(){return this.getAttribute("type")||""}set type(i){this.setAttribute("type",i)}}function vv(s,i,o){i=i.toLowerCase();for(const[u,d]of Object.entries(s))if(u.toLowerCase()===i)return d;return o}function Bd(s){var o,u;const i={};for(const d of s.children)if(d instanceof HTMLParamElement){const f=(o=d.attributes.getNamedItem("name"))==null?void 0:o.value,v=(u=d.attributes.getNamedItem("value"))==null?void 0:u.value;f&&v&&(i[f]=v)}return i}class rr extends as{constructor(){super(...arguments),this.params={}}connectedCallback(){var o;super.connectedCallback(),this.params=Bd(this);let i=null;if(this.attributes.getNamedItem("data")?i=(o=this.attributes.getNamedItem("data"))==null?void 0:o.value:this.params.movie&&(i=this.params.movie),i){const u=["allowNetworking","base","bgcolor","flashvars"],f=Jl(i,v=>vv(this.params,v,u.includes(v)?this.getAttribute(v):null));this.load(f,!0)}}debugPlayerInfo(){var u;let i=`Player type: Object
`,o=null;return this.attributes.getNamedItem("data")?o=(u=this.attributes.getNamedItem("data"))==null?void 0:u.value:this.params.movie&&(o=this.params.movie),i+=`SWF URL: ${o}
`,Object.keys(this.params).forEach(d=>{i+=`Param ${d}: ${this.params[d]}
`}),Object.keys(this.attributes).forEach(d=>{var f;i+=`Attribute ${d}: ${(f=this.attributes.getNamedItem(d))==null?void 0:f.value}
`}),i}get nodeName(){return"OBJECT"}get data(){return this.getAttribute("data")}set data(i){if(i){const o=document.createAttribute("data");o.value=i,this.attributes.setNamedItem(o)}else this.attributes.removeNamedItem("data")}static isInterdictable(i){var g,x,R;if(is(i)||i.getElementsByTagName("ruffle-object").length>0||i.getElementsByTagName("ruffle-embed").length>0)return!1;const o=(g=i.attributes.getNamedItem("data"))==null?void 0:g.value.toLowerCase(),u=((x=i.attributes.getNamedItem("type"))==null?void 0:x.value)??null,d=Bd(i);let f;if(o){if(Zl(o))return Gl(i,"data"),!1;f=o}else if(d&&d.movie){if(Zl(d.movie)){const O=i.querySelector("param[name='movie']");if(O){Gl(O,"value");const q=O.getAttribute("value");q&&i.setAttribute("data",q)}return!1}f=d.movie}else return!1;const v=(R=i.attributes.getNamedItem("classid"))==null?void 0:R.value.toLowerCase();return v===Dh.toLowerCase()?!Array.from(i.getElementsByTagName("object")).some(rr.isInterdictable)&&!Array.from(i.getElementsByTagName("embed")).some(or.isInterdictable):v?!1:tf(f,u)}static fromNativeObjectElement(i){const o=rs("ruffle-object",rr),u=document.createElement(o);for(const d of Array.from(i.getElementsByTagName("embed")))or.isInterdictable(d)&&d.remove();for(const d of Array.from(i.getElementsByTagName("object")))rr.isInterdictable(d)&&d.remove();return uf(i,u),u}get height(){return this.getAttribute("height")||""}set height(i){this.setAttribute("height",i)}get width(){return this.getAttribute("width")||""}set width(i){this.setAttribute("width",i)}get type(){return this.getAttribute("type")||""}set type(i){this.setAttribute("type",i)}}class Yl{constructor(i){if(this.__mimeTypes=[],this.__namedMimeTypes={},i)for(let o=0;o<i.length;o++)this.install(i[o])}install(i){const o=new cf(i),u=this.__mimeTypes.length;this.__mimeTypes.push(o),this.__namedMimeTypes[i.type]=o,this[o.type]=o,this[u]=o}item(i){return this.__mimeTypes[i>>>0]}namedItem(i){return this.__namedMimeTypes[i]}get length(){return this.__mimeTypes.length}[Symbol.iterator](){return this.__mimeTypes[Symbol.iterator]()}get[Symbol.toStringTag](){return"MimeTypeArray"}}class cf{constructor(i){this.__mimeType=i}get type(){return this.__mimeType.type}get description(){return this.__mimeType.description}get suffixes(){return this.__mimeType.suffixes}get enabledPlugin(){return this.__mimeType.enabledPlugin}get[Symbol.toStringTag](){return"MimeType"}}class gv extends Yl{constructor(i,o,u){super(),this.name=i,this.description=o,this.filename=u}}class Vd{constructor(i){this.__plugins=[],this.__namedPlugins={};for(let o=0;o<i.length;o++)this.install(i[o])}install(i){const o=this.__plugins.length;this.__plugins.push(i),this.__namedPlugins[i.name]=i,this[i.name]=i,this[o]=i}item(i){return this.__plugins[i>>>0]}namedItem(i){return this.__namedPlugins[i]}refresh(){}[Symbol.iterator](){return this.__plugins[Symbol.iterator]()}get[Symbol.toStringTag](){return"PluginArray"}get length(){return this.__plugins.length}}const Hn=new gv("Shockwave Flash","Shockwave Flash 32.0 r0","ruffle.js");Hn.install({type:Xd,description:"Shockwave Flash",suffixes:"spl",enabledPlugin:Hn});Hn.install({type:Yd,description:"Shockwave Flash",suffixes:"swf",enabledPlugin:Hn});Hn.install({type:ef,description:"Shockwave Flash",suffixes:"swf",enabledPlugin:Hn});Hn.install({type:nf,description:"Shockwave Flash",suffixes:"swf",enabledPlugin:Hn});function wv(s){if(navigator.plugins.namedItem("Shockwave Flash"))return;(!("install"in navigator.plugins)||!navigator.plugins.install)&&(Object.defineProperty(window,"PluginArray",{value:Vd}),Object.defineProperty(navigator,"plugins",{value:new Vd(navigator.plugins),writable:!1})),navigator.plugins.install(s),s.length>0&&(!("install"in navigator.mimeTypes)||!navigator.mimeTypes.install)&&(Object.defineProperty(window,"MimeTypeArray",{value:Yl}),Object.defineProperty(window,"MimeType",{value:cf}),Object.defineProperty(navigator,"mimeTypes",{value:new Yl(navigator.mimeTypes),writable:!1}));const o=navigator.mimeTypes;for(let u=0;u<s.length;u+=1)o.install(s[u])}function yv(s){let i=(Xr==null?void 0:Xr.href)??"";return!pt&&"publicPath"in s&&s.publicPath!==null&&s.publicPath!==void 0&&(i=s.publicPath),i!==""&&!i.endsWith("/")&&(i+="/"),i}var Qd;const ii=((Qd=window.RufflePlayer)==null?void 0:Qd.config)??{},kv=yv(ii)+"ruffle.js";let Il,Ml;function bv(){var s;return"favorFlash"in ii&&ii.favorFlash===!1?!1:(((s=navigator.plugins.namedItem("Shockwave Flash"))==null?void 0:s.filename)??"ruffle.js")!=="ruffle.js"}function df(){try{Il=Il??document.getElementsByTagName("object"),Ml=Ml??document.getElementsByTagName("embed");for(const s of Array.from(Il))if(rr.isInterdictable(s)){const i=rr.fromNativeObjectElement(s);s.replaceWith(i)}for(const s of Array.from(Ml))if(or.isInterdictable(s)){const i=or.fromNativeEmbedElement(s);s.replaceWith(i)}}catch(s){console.error(`Serious error encountered when polyfilling native Flash elements: ${s}`)}}let Ll,Nl;function ff(){Ll=Ll??document.getElementsByTagName("iframe"),Nl=Nl??document.getElementsByTagName("frame"),[Ll,Nl].forEach(s=>{for(const i of s){if(i.dataset.rufflePolyfilled!==void 0)continue;i.dataset.rufflePolyfilled="";const o=i.contentWindow,u=`Couldn't load Ruffle into ${i.tagName}[${i.src}]: `;try{o.document.readyState==="complete"&&Hd(o,u)}catch(d){pt||console.warn(u+d)}i.addEventListener("load",()=>{Hd(o,u)},!1)}})}async function Hd(s,i){await new Promise(u=>{window.setTimeout(()=>{u()},100)});let o;try{if(o=s.document,!o)return}catch(u){pt||console.warn(i+u);return}if(!(!pt&&o.documentElement.dataset.ruffleOptout!==void 0)){if(pt)s.RufflePlayer||(s.RufflePlayer={}),s.RufflePlayer.config={...ii,...s.RufflePlayer.config??{}};else if(!s.RufflePlayer){const u=o.createElement("script");u.setAttribute("src",kv),u.onload=()=>{s.RufflePlayer={},s.RufflePlayer.config=ii},o.head.appendChild(u)}}}function xv(){new MutationObserver(function(i){i.some(u=>Array.from(u.addedNodes).some(d=>["EMBED","OBJECT"].includes(d.nodeName)||d instanceof Element&&d.querySelector("embed, object")!==null))&&(df(),ff())}).observe(document,{childList:!0,subtree:!0})}function Sv(){wv(Hn)}function Rv(){bv()||(df(),ff(),xv())}const ni={version:yn.versionNumber+"+"+yn.buildDate.substring(0,10),polyfill(){Rv()},pluginPolyfill(){Sv()},createPlayer(){const s=rs("ruffle-player",as);return document.createElement(s)},options:{}};function zv(s,i={}){let o;window.RufflePlayer instanceof cd?o=window.RufflePlayer:(o=new cd(window.RufflePlayer),window.RufflePlayer=o),o.sources[s]=ni,ni.options=i,("polyfills"in o.config?o.config.polyfills:!0)!==!1&&ni.pluginPolyfill()}zv("local");km.createRoot(document.getElementById("root")).render(D.jsx($l.StrictMode,{children:D.jsx(Em,{ruffleBaseConfig:{autoplay:ir.On,unmuteOverlay:ti.Hidden,logLevel:ba.Warn,letterbox:ka.On,forceScale:!0,forceAlign:!0},allowSampleSwfs:!0,allowUrlLoading:!1})}));
