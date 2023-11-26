const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ruffle_web-BDAswMzA.js","./ruffle-imports-CztXuSei.js","./ruffle_web-wasm_mvp-BWKTXYrW.js"])))=>i.map(i=>d[i]);
(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))u(f);new MutationObserver(f=>{for(const m of f)if(m.type==="childList")for(const g of m.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&u(g)}).observe(document,{childList:!0,subtree:!0});function o(f){const m={};return f.integrity&&(m.integrity=f.integrity),f.referrerPolicy&&(m.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?m.credentials="include":f.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function u(f){if(f.ep)return;f.ep=!0;const m=o(f);fetch(f.href,m)}})();function Wp(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var ss={exports:{}},ti={};var tp;function Lg(){if(tp)return ti;tp=1;var s=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function o(u,f,m){var g=null;if(m!==void 0&&(g=""+m),f.key!==void 0&&(g=""+f.key),"key"in f){m={};for(var z in f)z!=="key"&&(m[z]=f[z])}else m=f;return f=m.ref,{$$typeof:s,type:u,key:g,ref:f!==void 0?f:null,props:m}}return ti.Fragment=i,ti.jsx=o,ti.jsxs=o,ti}var ap;function Hg(){return ap||(ap=1,ss.exports=Lg()),ss.exports}var N=Hg(),cs={exports:{}},X={};var lp;function Bg(){if(lp)return X;lp=1;var s=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),g=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),M=Symbol.for("react.activity"),Z=Symbol.iterator;function Q(v){return v===null||typeof v!="object"?null:(v=Z&&v[Z]||v["@@iterator"],typeof v=="function"?v:null)}var I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,He={};function Be(v,C,U){this.props=v,this.context=C,this.refs=He,this.updater=U||I}Be.prototype.isReactComponent={},Be.prototype.setState=function(v,C){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,C,"setState")},Be.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function an(){}an.prototype=Be.prototype;function Ae(v,C,U){this.props=v,this.context=C,this.refs=He,this.updater=U||I}var re=Ae.prototype=new an;re.constructor=Ae,P(re,Be.prototype),re.isPureReactComponent=!0;var ln=Array.isArray;function $e(){}var G={H:null,A:null,T:null,S:null},Ce=Object.prototype.hasOwnProperty;function D(v,C,U){var H=U.ref;return{$$typeof:s,type:v,key:C,ref:H!==void 0?H:null,props:U}}function F(v,C){return D(v.type,C,v.props)}function oe(v){return typeof v=="object"&&v!==null&&v.$$typeof===s}function De(v){var C={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(U){return C[U]})}var gn=/\/+/g;function Fe(v,C){return typeof v=="object"&&v!==null&&v.key!=null?De(""+v.key):C.toString(36)}function Hn(v){switch(v.status){case"fulfilled":return v.value;case"rejected":throw v.reason;default:switch(typeof v.status=="string"?v.then($e,$e):(v.status="pending",v.then(function(C){v.status==="pending"&&(v.status="fulfilled",v.value=C)},function(C){v.status==="pending"&&(v.status="rejected",v.reason=C)})),v.status){case"fulfilled":return v.value;case"rejected":throw v.reason}}throw v}function E(v,C,U,H,W){var ne=typeof v;(ne==="undefined"||ne==="boolean")&&(v=null);var de=!1;if(v===null)de=!0;else switch(ne){case"bigint":case"string":case"number":de=!0;break;case"object":switch(v.$$typeof){case s:case i:de=!0;break;case _:return de=v._init,E(de(v._payload),C,U,H,W)}}if(de)return W=W(v),de=H===""?"."+Fe(v,0):H,ln(W)?(U="",de!=null&&(U=de.replace(gn,"$&/")+"/"),E(W,C,U,"",function(sl){return sl})):W!=null&&(oe(W)&&(W=F(W,U+(W.key==null||v&&v.key===W.key?"":(""+W.key).replace(gn,"$&/")+"/")+de)),C.push(W)),1;de=0;var un=H===""?".":H+":";if(ln(v))for(var qe=0;qe<v.length;qe++)H=v[qe],ne=un+Fe(H,qe),de+=E(H,C,U,ne,W);else if(qe=Q(v),typeof qe=="function")for(v=qe.call(v),qe=0;!(H=v.next()).done;)H=H.value,ne=un+Fe(H,qe++),de+=E(H,C,U,ne,W);else if(ne==="object"){if(typeof v.then=="function")return E(Hn(v),C,U,H,W);throw C=String(v),Error("Objects are not valid as a React child (found: "+(C==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":C)+"). If you meant to render a collection of children, use an array instead.")}return de}function q(v,C,U){if(v==null)return v;var H=[],W=0;return E(v,H,"","",function(ne){return C.call(U,ne,W++)}),H}function $(v){if(v._status===-1){var C=v._result;C=C(),C.then(function(U){(v._status===0||v._status===-1)&&(v._status=1,v._result=U)},function(U){(v._status===0||v._status===-1)&&(v._status=2,v._result=U)}),v._status===-1&&(v._status=0,v._result=C)}if(v._status===1)return v._result.default;throw v._result}var be=typeof reportError=="function"?reportError:function(v){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var C=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof v=="object"&&v!==null&&typeof v.message=="string"?String(v.message):String(v),error:v});if(!window.dispatchEvent(C))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",v);return}console.error(v)},Re={map:q,forEach:function(v,C,U){q(v,function(){C.apply(this,arguments)},U)},count:function(v){var C=0;return q(v,function(){C++}),C},toArray:function(v){return q(v,function(C){return C})||[]},only:function(v){if(!oe(v))throw Error("React.Children.only expected to receive a single React element child.");return v}};return X.Activity=M,X.Children=Re,X.Component=Be,X.Fragment=o,X.Profiler=f,X.PureComponent=Ae,X.StrictMode=u,X.Suspense=j,X.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,X.__COMPILER_RUNTIME={__proto__:null,c:function(v){return G.H.useMemoCache(v)}},X.cache=function(v){return function(){return v.apply(null,arguments)}},X.cacheSignal=function(){return null},X.cloneElement=function(v,C,U){if(v==null)throw Error("The argument must be a React element, but you passed "+v+".");var H=P({},v.props),W=v.key;if(C!=null)for(ne in C.key!==void 0&&(W=""+C.key),C)!Ce.call(C,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&C.ref===void 0||(H[ne]=C[ne]);var ne=arguments.length-2;if(ne===1)H.children=U;else if(1<ne){for(var de=Array(ne),un=0;un<ne;un++)de[un]=arguments[un+2];H.children=de}return D(v.type,W,H)},X.createContext=function(v){return v={$$typeof:g,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null},v.Provider=v,v.Consumer={$$typeof:m,_context:v},v},X.createElement=function(v,C,U){var H,W={},ne=null;if(C!=null)for(H in C.key!==void 0&&(ne=""+C.key),C)Ce.call(C,H)&&H!=="key"&&H!=="__self"&&H!=="__source"&&(W[H]=C[H]);var de=arguments.length-2;if(de===1)W.children=U;else if(1<de){for(var un=Array(de),qe=0;qe<de;qe++)un[qe]=arguments[qe+2];W.children=un}if(v&&v.defaultProps)for(H in de=v.defaultProps,de)W[H]===void 0&&(W[H]=de[H]);return D(v,ne,W)},X.createRef=function(){return{current:null}},X.forwardRef=function(v){return{$$typeof:z,render:v}},X.isValidElement=oe,X.lazy=function(v){return{$$typeof:_,_payload:{_status:-1,_result:v},_init:$}},X.memo=function(v,C){return{$$typeof:y,type:v,compare:C===void 0?null:C}},X.startTransition=function(v){var C=G.T,U={};G.T=U;try{var H=v(),W=G.S;W!==null&&W(U,H),typeof H=="object"&&H!==null&&typeof H.then=="function"&&H.then($e,be)}catch(ne){be(ne)}finally{C!==null&&U.types!==null&&(C.types=U.types),G.T=C}},X.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},X.use=function(v){return G.H.use(v)},X.useActionState=function(v,C,U){return G.H.useActionState(v,C,U)},X.useCallback=function(v,C){return G.H.useCallback(v,C)},X.useContext=function(v){return G.H.useContext(v)},X.useDebugValue=function(){},X.useDeferredValue=function(v,C){return G.H.useDeferredValue(v,C)},X.useEffect=function(v,C){return G.H.useEffect(v,C)},X.useEffectEvent=function(v){return G.H.useEffectEvent(v)},X.useId=function(){return G.H.useId()},X.useImperativeHandle=function(v,C,U){return G.H.useImperativeHandle(v,C,U)},X.useInsertionEffect=function(v,C){return G.H.useInsertionEffect(v,C)},X.useLayoutEffect=function(v,C){return G.H.useLayoutEffect(v,C)},X.useMemo=function(v,C){return G.H.useMemo(v,C)},X.useOptimistic=function(v,C){return G.H.useOptimistic(v,C)},X.useReducer=function(v,C,U){return G.H.useReducer(v,C,U)},X.useRef=function(v){return G.H.useRef(v)},X.useState=function(v){return G.H.useState(v)},X.useSyncExternalStore=function(v,C,U){return G.H.useSyncExternalStore(v,C,U)},X.useTransition=function(){return G.H.useTransition()},X.version="19.2.4",X}var ip;function Xs(){return ip||(ip=1,cs.exports=Bg()),cs.exports}var on=Xs();const Cs=Wp(on);var fs={exports:{}},ai={},ds={exports:{}},ms={};var rp;function Fg(){return rp||(rp=1,(function(s){function i(E,q){var $=E.length;E.push(q);e:for(;0<$;){var be=$-1>>>1,Re=E[be];if(0<f(Re,q))E[be]=q,E[$]=Re,$=be;else break e}}function o(E){return E.length===0?null:E[0]}function u(E){if(E.length===0)return null;var q=E[0],$=E.pop();if($!==q){E[0]=$;e:for(var be=0,Re=E.length,v=Re>>>1;be<v;){var C=2*(be+1)-1,U=E[C],H=C+1,W=E[H];if(0>f(U,$))H<Re&&0>f(W,U)?(E[be]=W,E[H]=$,be=H):(E[be]=U,E[C]=$,be=C);else if(H<Re&&0>f(W,$))E[be]=W,E[H]=$,be=H;else break e}}return q}function f(E,q){var $=E.sortIndex-q.sortIndex;return $!==0?$:E.id-q.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;s.unstable_now=function(){return m.now()}}else{var g=Date,z=g.now();s.unstable_now=function(){return g.now()-z}}var j=[],y=[],_=1,M=null,Z=3,Q=!1,I=!1,P=!1,He=!1,Be=typeof setTimeout=="function"?setTimeout:null,an=typeof clearTimeout=="function"?clearTimeout:null,Ae=typeof setImmediate<"u"?setImmediate:null;function re(E){for(var q=o(y);q!==null;){if(q.callback===null)u(y);else if(q.startTime<=E)u(y),q.sortIndex=q.expirationTime,i(j,q);else break;q=o(y)}}function ln(E){if(P=!1,re(E),!I)if(o(j)!==null)I=!0,$e||($e=!0,De());else{var q=o(y);q!==null&&Hn(ln,q.startTime-E)}}var $e=!1,G=-1,Ce=5,D=-1;function F(){return He?!0:!(s.unstable_now()-D<Ce)}function oe(){if(He=!1,$e){var E=s.unstable_now();D=E;var q=!0;try{e:{I=!1,P&&(P=!1,an(G),G=-1),Q=!0;var $=Z;try{n:{for(re(E),M=o(j);M!==null&&!(M.expirationTime>E&&F());){var be=M.callback;if(typeof be=="function"){M.callback=null,Z=M.priorityLevel;var Re=be(M.expirationTime<=E);if(E=s.unstable_now(),typeof Re=="function"){M.callback=Re,re(E),q=!0;break n}M===o(j)&&u(j),re(E)}else u(j);M=o(j)}if(M!==null)q=!0;else{var v=o(y);v!==null&&Hn(ln,v.startTime-E),q=!1}}break e}finally{M=null,Z=$,Q=!1}q=void 0}}finally{q?De():$e=!1}}}var De;if(typeof Ae=="function")De=function(){Ae(oe)};else if(typeof MessageChannel<"u"){var gn=new MessageChannel,Fe=gn.port2;gn.port1.onmessage=oe,De=function(){Fe.postMessage(null)}}else De=function(){Be(oe,0)};function Hn(E,q){G=Be(function(){E(s.unstable_now())},q)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(E){E.callback=null},s.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ce=0<E?Math.floor(1e3/E):5},s.unstable_getCurrentPriorityLevel=function(){return Z},s.unstable_next=function(E){switch(Z){case 1:case 2:case 3:var q=3;break;default:q=Z}var $=Z;Z=q;try{return E()}finally{Z=$}},s.unstable_requestPaint=function(){He=!0},s.unstable_runWithPriority=function(E,q){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var $=Z;Z=E;try{return q()}finally{Z=$}},s.unstable_scheduleCallback=function(E,q,$){var be=s.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?be+$:be):$=be,E){case 1:var Re=-1;break;case 2:Re=250;break;case 5:Re=1073741823;break;case 4:Re=1e4;break;default:Re=5e3}return Re=$+Re,E={id:_++,callback:q,priorityLevel:E,startTime:$,expirationTime:Re,sortIndex:-1},$>be?(E.sortIndex=$,i(y,E),o(j)===null&&E===o(y)&&(P?(an(G),G=-1):P=!0,Hn(ln,$-be))):(E.sortIndex=Re,i(j,E),I||Q||(I=!0,$e||($e=!0,De()))),E},s.unstable_shouldYield=F,s.unstable_wrapCallback=function(E){var q=Z;return function(){var $=Z;Z=q;try{return E.apply(this,arguments)}finally{Z=$}}}})(ms)),ms}var op;function Vg(){return op||(op=1,ds.exports=Fg()),ds.exports}var ps={exports:{}},rn={};var up;function Yg(){if(up)return rn;up=1;var s=Xs();function i(j){var y="https://react.dev/errors/"+j;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)y+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+j+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var u={d:{f:o,r:function(){throw Error(i(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},f=Symbol.for("react.portal");function m(j,y,_){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:M==null?null:""+M,children:j,containerInfo:y,implementation:_}}var g=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function z(j,y){if(j==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,rn.createPortal=function(j,y){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(i(299));return m(j,y,null,_)},rn.flushSync=function(j){var y=g.T,_=u.p;try{if(g.T=null,u.p=2,j)return j()}finally{g.T=y,u.p=_,u.d.f()}},rn.preconnect=function(j,y){typeof j=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,u.d.C(j,y))},rn.prefetchDNS=function(j){typeof j=="string"&&u.d.D(j)},rn.preinit=function(j,y){if(typeof j=="string"&&y&&typeof y.as=="string"){var _=y.as,M=z(_,y.crossOrigin),Z=typeof y.integrity=="string"?y.integrity:void 0,Q=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;_==="style"?u.d.S(j,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:M,integrity:Z,fetchPriority:Q}):_==="script"&&u.d.X(j,{crossOrigin:M,integrity:Z,fetchPriority:Q,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},rn.preinitModule=function(j,y){if(typeof j=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var _=z(y.as,y.crossOrigin);u.d.M(j,{crossOrigin:_,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&u.d.M(j)},rn.preload=function(j,y){if(typeof j=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var _=y.as,M=z(_,y.crossOrigin);u.d.L(j,_,{crossOrigin:M,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},rn.preloadModule=function(j,y){if(typeof j=="string")if(y){var _=z(y.as,y.crossOrigin);u.d.m(j,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:_,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else u.d.m(j)},rn.requestFormReset=function(j){u.d.r(j)},rn.unstable_batchedUpdates=function(j,y){return j(y)},rn.useFormState=function(j,y,_){return g.H.useFormState(j,y,_)},rn.useFormStatus=function(){return g.H.useHostTransitionStatus()},rn.version="19.2.4",rn}var sp;function Zg(){if(sp)return ps.exports;sp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(i){console.error(i)}}return s(),ps.exports=Yg(),ps.exports}var cp;function Gg(){if(cp)return ai;cp=1;var s=Vg(),i=Xs(),o=Zg();function u(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function g(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function z(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function j(e){if(m(e)!==e)throw Error(u(188))}function y(e){var n=e.alternate;if(!n){if(n=m(e),n===null)throw Error(u(188));return n!==e?null:e}for(var t=e,a=n;;){var l=t.return;if(l===null)break;var r=l.alternate;if(r===null){if(a=l.return,a!==null){t=a;continue}break}if(l.child===r.child){for(r=l.child;r;){if(r===t)return j(l),e;if(r===a)return j(l),n;r=r.sibling}throw Error(u(188))}if(t.return!==a.return)t=l,a=r;else{for(var c=!1,d=l.child;d;){if(d===t){c=!0,t=l,a=r;break}if(d===a){c=!0,a=l,t=r;break}d=d.sibling}if(!c){for(d=r.child;d;){if(d===t){c=!0,t=r,a=l;break}if(d===a){c=!0,a=r,t=l;break}d=d.sibling}if(!c)throw Error(u(189))}}if(t.alternate!==a)throw Error(u(190))}if(t.tag!==3)throw Error(u(188));return t.stateNode.current===t?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var M=Object.assign,Z=Symbol.for("react.element"),Q=Symbol.for("react.transitional.element"),I=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),He=Symbol.for("react.strict_mode"),Be=Symbol.for("react.profiler"),an=Symbol.for("react.consumer"),Ae=Symbol.for("react.context"),re=Symbol.for("react.forward_ref"),ln=Symbol.for("react.suspense"),$e=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),Ce=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),F=Symbol.for("react.memo_cache_sentinel"),oe=Symbol.iterator;function De(e){return e===null||typeof e!="object"?null:(e=oe&&e[oe]||e["@@iterator"],typeof e=="function"?e:null)}var gn=Symbol.for("react.client.reference");function Fe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===gn?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case P:return"Fragment";case Be:return"Profiler";case He:return"StrictMode";case ln:return"Suspense";case $e:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case I:return"Portal";case Ae:return e.displayName||"Context";case an:return(e._context.displayName||"Context")+".Consumer";case re:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case G:return n=e.displayName||null,n!==null?n:Fe(e.type)||"Memo";case Ce:n=e._payload,e=e._init;try{return Fe(e(n))}catch{}}return null}var Hn=Array.isArray,E=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},be=[],Re=-1;function v(e){return{current:e}}function C(e){0>Re||(e.current=be[Re],be[Re]=null,Re--)}function U(e,n){Re++,be[Re]=e.current,e.current=n}var H=v(null),W=v(null),ne=v(null),de=v(null);function un(e,n){switch(U(ne,n),U(W,e),U(H,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?jm(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=jm(n),e=xm(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}C(H),U(H,e)}function qe(){C(H),C(W),C(ne)}function sl(e){e.memoizedState!==null&&U(de,e);var n=H.current,t=xm(n,e.type);n!==t&&(U(W,e),U(H,t))}function mi(e){W.current===e&&(C(H),C(W)),de.current===e&&(C(de),Il._currentValue=$)}var Zr,ec;function Qt(e){if(Zr===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Zr=n&&n[1]||"",ec=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Zr+e+ec}var Gr=!1;function Qr(e,n){if(!e||Gr)return"";Gr=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(n){var O=function(){throw Error()};if(Object.defineProperty(O.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(O,[])}catch(S){var R=S}Reflect.construct(e,[],O)}else{try{O.call()}catch(S){R=S}e.call(O.prototype)}}else{try{throw Error()}catch(S){R=S}(O=e())&&typeof O.catch=="function"&&O.catch(function(){})}}catch(S){if(S&&R&&typeof S.stack=="string")return[S.stack,R.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=a.DetermineComponentFrameRoot(),c=r[0],d=r[1];if(c&&d){var p=c.split(`
`),k=d.split(`
`);for(l=a=0;a<p.length&&!p[a].includes("DetermineComponentFrameRoot");)a++;for(;l<k.length&&!k[l].includes("DetermineComponentFrameRoot");)l++;if(a===p.length||l===k.length)for(a=p.length-1,l=k.length-1;1<=a&&0<=l&&p[a]!==k[l];)l--;for(;1<=a&&0<=l;a--,l--)if(p[a]!==k[l]){if(a!==1||l!==1)do if(a--,l--,0>l||p[a]!==k[l]){var x=`
`+p[a].replace(" at new "," at ");return e.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",e.displayName)),x}while(1<=a&&0<=l);break}}}finally{Gr=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?Qt(t):""}function hh(e,n){switch(e.tag){case 26:case 27:case 5:return Qt(e.type);case 16:return Qt("Lazy");case 13:return e.child!==n&&n!==null?Qt("Suspense Fallback"):Qt("Suspense");case 19:return Qt("SuspenseList");case 0:case 15:return Qr(e.type,!1);case 11:return Qr(e.type.render,!1);case 1:return Qr(e.type,!0);case 31:return Qt("Activity");default:return""}}function nc(e){try{var n="",t=null;do n+=hh(e,t),t=e,e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var $r=Object.prototype.hasOwnProperty,Xr=s.unstable_scheduleCallback,Wr=s.unstable_cancelCallback,vh=s.unstable_shouldYield,gh=s.unstable_requestPaint,bn=s.unstable_now,bh=s.unstable_getCurrentPriorityLevel,tc=s.unstable_ImmediatePriority,ac=s.unstable_UserBlockingPriority,pi=s.unstable_NormalPriority,yh=s.unstable_LowPriority,lc=s.unstable_IdlePriority,wh=s.log,kh=s.unstable_setDisableYieldValue,cl=null,yn=null;function pt(e){if(typeof wh=="function"&&kh(e),yn&&typeof yn.setStrictMode=="function")try{yn.setStrictMode(cl,e)}catch{}}var wn=Math.clz32?Math.clz32:Sh,zh=Math.log,Rh=Math.LN2;function Sh(e){return e>>>=0,e===0?32:31-(zh(e)/Rh|0)|0}var hi=256,vi=262144,gi=4194304;function $t(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function bi(e,n,t){var a=e.pendingLanes;if(a===0)return 0;var l=0,r=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var d=a&134217727;return d!==0?(a=d&~r,a!==0?l=$t(a):(c&=d,c!==0?l=$t(c):t||(t=d&~e,t!==0&&(l=$t(t))))):(d=a&~r,d!==0?l=$t(d):c!==0?l=$t(c):t||(t=a&~e,t!==0&&(l=$t(t)))),l===0?0:n!==0&&n!==l&&(n&r)===0&&(r=l&-l,t=n&-n,r>=t||r===32&&(t&4194048)!==0)?n:l}function fl(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function jh(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ic(){var e=gi;return gi<<=1,(gi&62914560)===0&&(gi=4194304),e}function Jr(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function dl(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function xh(e,n,t,a,l,r){var c=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var d=e.entanglements,p=e.expirationTimes,k=e.hiddenUpdates;for(t=c&~t;0<t;){var x=31-wn(t),O=1<<x;d[x]=0,p[x]=-1;var R=k[x];if(R!==null)for(k[x]=null,x=0;x<R.length;x++){var S=R[x];S!==null&&(S.lane&=-536870913)}t&=~O}a!==0&&rc(e,a,0),r!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=r&~(c&~n))}function rc(e,n,t){e.pendingLanes|=n,e.suspendedLanes&=~n;var a=31-wn(n);e.entangledLanes|=n,e.entanglements[a]=e.entanglements[a]|1073741824|t&261930}function oc(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var a=31-wn(t),l=1<<a;l&n|e[a]&n&&(e[a]|=n),t&=~l}}function uc(e,n){var t=n&-n;return t=(t&42)!==0?1:Kr(t),(t&(e.suspendedLanes|n))!==0?0:t}function Kr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ir(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function sc(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:Wm(e.type))}function cc(e,n){var t=q.p;try{return q.p=e,n()}finally{q.p=t}}var ht=Math.random().toString(36).slice(2),Ie="__reactFiber$"+ht,cn="__reactProps$"+ht,pa="__reactContainer$"+ht,Pr="__reactEvents$"+ht,Eh="__reactListeners$"+ht,Ah="__reactHandles$"+ht,fc="__reactResources$"+ht,ml="__reactMarker$"+ht;function eo(e){delete e[Ie],delete e[cn],delete e[Pr],delete e[Eh],delete e[Ah]}function ha(e){var n=e[Ie];if(n)return n;for(var t=e.parentNode;t;){if(n=t[pa]||t[Ie]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Mm(e);e!==null;){if(t=e[Ie])return t;e=Mm(e)}return n}e=t,t=e.parentNode}return null}function va(e){if(e=e[Ie]||e[pa]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function pl(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(u(33))}function ga(e){var n=e[fc];return n||(n=e[fc]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Je(e){e[ml]=!0}var dc=new Set,mc={};function Xt(e,n){ba(e,n),ba(e+"Capture",n)}function ba(e,n){for(mc[e]=n,e=0;e<n.length;e++)dc.add(n[e])}var Th=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),pc={},hc={};function Oh(e){return $r.call(hc,e)?!0:$r.call(pc,e)?!1:Th.test(e)?hc[e]=!0:(pc[e]=!0,!1)}function yi(e,n,t){if(Oh(n))if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var a=n.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+t)}}function wi(e,n,t){if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+t)}}function Xn(e,n,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(n,t,""+a)}}function An(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function vc(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ch(e,n,t){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,r=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(c){t=""+c,r.call(this,c)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return t},setValue:function(c){t=""+c},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function no(e){if(!e._valueTracker){var n=vc(e)?"checked":"value";e._valueTracker=Ch(e,n,""+e[n])}}function gc(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),a="";return e&&(a=vc(e)?e.checked?"true":"false":e.value),e=a,e!==t?(n.setValue(e),!0):!1}function ki(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Dh=/[\n"\\]/g;function Tn(e){return e.replace(Dh,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function to(e,n,t,a,l,r,c,d){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),n!=null?c==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+An(n)):e.value!==""+An(n)&&(e.value=""+An(n)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),n!=null?ao(e,c,An(n)):t!=null?ao(e,c,An(t)):a!=null&&e.removeAttribute("value"),l==null&&r!=null&&(e.defaultChecked=!!r),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.name=""+An(d):e.removeAttribute("name")}function bc(e,n,t,a,l,r,c,d){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),n!=null||t!=null){if(!(r!=="submit"&&r!=="reset"||n!=null)){no(e);return}t=t!=null?""+An(t):"",n=n!=null?""+An(n):t,d||n===e.value||(e.value=n),e.defaultValue=n}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=d?e.checked:!!a,e.defaultChecked=!!a,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c),no(e)}function ao(e,n,t){n==="number"&&ki(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function ya(e,n,t,a){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&a&&(e[t].defaultSelected=!0)}else{for(t=""+An(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function yc(e,n,t){if(n!=null&&(n=""+An(n),n!==e.value&&(e.value=n),t==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=t!=null?""+An(t):""}function wc(e,n,t,a){if(n==null){if(a!=null){if(t!=null)throw Error(u(92));if(Hn(a)){if(1<a.length)throw Error(u(93));a=a[0]}t=a}t==null&&(t=""),n=t}t=An(n),e.defaultValue=t,a=e.textContent,a===t&&a!==""&&a!==null&&(e.value=a),no(e)}function wa(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Mh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function kc(e,n,t){var a=n.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?a?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":a?e.setProperty(n,t):typeof t!="number"||t===0||Mh.has(n)?n==="float"?e.cssFloat=t:e[n]=(""+t).trim():e[n]=t+"px"}function zc(e,n,t){if(n!=null&&typeof n!="object")throw Error(u(62));if(e=e.style,t!=null){for(var a in t)!t.hasOwnProperty(a)||n!=null&&n.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var l in n)a=n[l],n.hasOwnProperty(l)&&t[l]!==a&&kc(e,l,a)}else for(var r in n)n.hasOwnProperty(r)&&kc(e,r,n[r])}function lo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _h=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),qh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function zi(e){return qh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Wn(){}var io=null;function ro(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ka=null,za=null;function Rc(e){var n=va(e);if(n&&(e=n.stateNode)){var t=e[cn]||null;e:switch(e=n.stateNode,n.type){case"input":if(to(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Tn(""+n)+'"][type="radio"]'),n=0;n<t.length;n++){var a=t[n];if(a!==e&&a.form===e.form){var l=a[cn]||null;if(!l)throw Error(u(90));to(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<t.length;n++)a=t[n],a.form===e.form&&gc(a)}break e;case"textarea":yc(e,t.value,t.defaultValue);break e;case"select":n=t.value,n!=null&&ya(e,!!t.multiple,n,!1)}}}var oo=!1;function Sc(e,n,t){if(oo)return e(n,t);oo=!0;try{var a=e(n);return a}finally{if(oo=!1,(ka!==null||za!==null)&&(sr(),ka&&(n=ka,e=za,za=ka=null,Rc(n),e)))for(n=0;n<e.length;n++)Rc(e[n])}}function hl(e,n){var t=e.stateNode;if(t===null)return null;var a=t[cn]||null;if(a===null)return null;t=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(u(231,n,typeof t));return t}var Jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uo=!1;if(Jn)try{var vl={};Object.defineProperty(vl,"passive",{get:function(){uo=!0}}),window.addEventListener("test",vl,vl),window.removeEventListener("test",vl,vl)}catch{uo=!1}var vt=null,so=null,Ri=null;function jc(){if(Ri)return Ri;var e,n=so,t=n.length,a,l="value"in vt?vt.value:vt.textContent,r=l.length;for(e=0;e<t&&n[e]===l[e];e++);var c=t-e;for(a=1;a<=c&&n[t-a]===l[r-a];a++);return Ri=l.slice(e,1<a?1-a:void 0)}function Si(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ji(){return!0}function xc(){return!1}function fn(e){function n(t,a,l,r,c){this._reactName=t,this._targetInst=l,this.type=a,this.nativeEvent=r,this.target=c,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(t=e[d],this[d]=t?t(r):r[d]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?ji:xc,this.isPropagationStopped=xc,this}return M(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ji)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ji)},persist:function(){},isPersistent:ji}),n}var Wt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xi=fn(Wt),gl=M({},Wt,{view:0,detail:0}),Uh=fn(gl),co,fo,bl,Ei=M({},gl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:po,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==bl&&(bl&&e.type==="mousemove"?(co=e.screenX-bl.screenX,fo=e.screenY-bl.screenY):fo=co=0,bl=e),co)},movementY:function(e){return"movementY"in e?e.movementY:fo}}),Ec=fn(Ei),Nh=M({},Ei,{dataTransfer:0}),Lh=fn(Nh),Hh=M({},gl,{relatedTarget:0}),mo=fn(Hh),Bh=M({},Wt,{animationName:0,elapsedTime:0,pseudoElement:0}),Fh=fn(Bh),Vh=M({},Wt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Yh=fn(Vh),Zh=M({},Wt,{data:0}),Ac=fn(Zh),Gh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$h={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xh(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=$h[e])?!!n[e]:!1}function po(){return Xh}var Wh=M({},gl,{key:function(e){if(e.key){var n=Gh[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Si(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Qh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:po,charCode:function(e){return e.type==="keypress"?Si(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Si(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Jh=fn(Wh),Kh=M({},Ei,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tc=fn(Kh),Ih=M({},gl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:po}),Ph=fn(Ih),ev=M({},Wt,{propertyName:0,elapsedTime:0,pseudoElement:0}),nv=fn(ev),tv=M({},Ei,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),av=fn(tv),lv=M({},Wt,{newState:0,oldState:0}),iv=fn(lv),rv=[9,13,27,32],ho=Jn&&"CompositionEvent"in window,yl=null;Jn&&"documentMode"in document&&(yl=document.documentMode);var ov=Jn&&"TextEvent"in window&&!yl,Oc=Jn&&(!ho||yl&&8<yl&&11>=yl),Cc=" ",Dc=!1;function Mc(e,n){switch(e){case"keyup":return rv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _c(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ra=!1;function uv(e,n){switch(e){case"compositionend":return _c(n);case"keypress":return n.which!==32?null:(Dc=!0,Cc);case"textInput":return e=n.data,e===Cc&&Dc?null:e;default:return null}}function sv(e,n){if(Ra)return e==="compositionend"||!ho&&Mc(e,n)?(e=jc(),Ri=so=vt=null,Ra=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Oc&&n.locale!=="ko"?null:n.data;default:return null}}var cv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!cv[e.type]:n==="textarea"}function Uc(e,n,t,a){ka?za?za.push(a):za=[a]:ka=a,n=vr(n,"onChange"),0<n.length&&(t=new xi("onChange","change",null,t,a),e.push({event:t,listeners:n}))}var wl=null,kl=null;function fv(e){ym(e,0)}function Ai(e){var n=pl(e);if(gc(n))return e}function Nc(e,n){if(e==="change")return n}var Lc=!1;if(Jn){var vo;if(Jn){var go="oninput"in document;if(!go){var Hc=document.createElement("div");Hc.setAttribute("oninput","return;"),go=typeof Hc.oninput=="function"}vo=go}else vo=!1;Lc=vo&&(!document.documentMode||9<document.documentMode)}function Bc(){wl&&(wl.detachEvent("onpropertychange",Fc),kl=wl=null)}function Fc(e){if(e.propertyName==="value"&&Ai(kl)){var n=[];Uc(n,kl,e,ro(e)),Sc(fv,n)}}function dv(e,n,t){e==="focusin"?(Bc(),wl=n,kl=t,wl.attachEvent("onpropertychange",Fc)):e==="focusout"&&Bc()}function mv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ai(kl)}function pv(e,n){if(e==="click")return Ai(n)}function hv(e,n){if(e==="input"||e==="change")return Ai(n)}function vv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var kn=typeof Object.is=="function"?Object.is:vv;function zl(e,n){if(kn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),a=Object.keys(n);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var l=t[a];if(!$r.call(n,l)||!kn(e[l],n[l]))return!1}return!0}function Vc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Yc(e,n){var t=Vc(e);e=0;for(var a;t;){if(t.nodeType===3){if(a=e+t.textContent.length,e<=n&&a>=n)return{node:t,offset:n-e};e=a}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Vc(t)}}function Zc(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Zc(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Gc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=ki(e.document);n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=ki(e.document)}return n}function bo(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var gv=Jn&&"documentMode"in document&&11>=document.documentMode,Sa=null,yo=null,Rl=null,wo=!1;function Qc(e,n,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;wo||Sa==null||Sa!==ki(a)||(a=Sa,"selectionStart"in a&&bo(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Rl&&zl(Rl,a)||(Rl=a,a=vr(yo,"onSelect"),0<a.length&&(n=new xi("onSelect","select",null,n,t),e.push({event:n,listeners:a}),n.target=Sa)))}function Jt(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var ja={animationend:Jt("Animation","AnimationEnd"),animationiteration:Jt("Animation","AnimationIteration"),animationstart:Jt("Animation","AnimationStart"),transitionrun:Jt("Transition","TransitionRun"),transitionstart:Jt("Transition","TransitionStart"),transitioncancel:Jt("Transition","TransitionCancel"),transitionend:Jt("Transition","TransitionEnd")},ko={},$c={};Jn&&($c=document.createElement("div").style,"AnimationEvent"in window||(delete ja.animationend.animation,delete ja.animationiteration.animation,delete ja.animationstart.animation),"TransitionEvent"in window||delete ja.transitionend.transition);function Kt(e){if(ko[e])return ko[e];if(!ja[e])return e;var n=ja[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in $c)return ko[e]=n[t];return e}var Xc=Kt("animationend"),Wc=Kt("animationiteration"),Jc=Kt("animationstart"),bv=Kt("transitionrun"),yv=Kt("transitionstart"),wv=Kt("transitioncancel"),Kc=Kt("transitionend"),Ic=new Map,zo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");zo.push("scrollEnd");function Bn(e,n){Ic.set(e,n),Xt(n,[e])}var Ti=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},On=[],xa=0,Ro=0;function Oi(){for(var e=xa,n=Ro=xa=0;n<e;){var t=On[n];On[n++]=null;var a=On[n];On[n++]=null;var l=On[n];On[n++]=null;var r=On[n];if(On[n++]=null,a!==null&&l!==null){var c=a.pending;c===null?l.next=l:(l.next=c.next,c.next=l),a.pending=l}r!==0&&Pc(t,l,r)}}function Ci(e,n,t,a){On[xa++]=e,On[xa++]=n,On[xa++]=t,On[xa++]=a,Ro|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function So(e,n,t,a){return Ci(e,n,t,a),Di(e)}function It(e,n){return Ci(e,null,null,n),Di(e)}function Pc(e,n,t){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t);for(var l=!1,r=e.return;r!==null;)r.childLanes|=t,a=r.alternate,a!==null&&(a.childLanes|=t),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(l=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,l&&n!==null&&(l=31-wn(t),e=r.hiddenUpdates,a=e[l],a===null?e[l]=[n]:a.push(n),n.lane=t|536870912),r):null}function Di(e){if(50<Gl)throw Gl=0,Mu=null,Error(u(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ea={};function kv(e,n,t,a){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zn(e,n,t,a){return new kv(e,n,t,a)}function jo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Kn(e,n){var t=e.alternate;return t===null?(t=zn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function ef(e,n){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Mi(e,n,t,a,l,r){var c=0;if(a=e,typeof e=="function")jo(e)&&(c=1);else if(typeof e=="string")c=xg(e,t,H.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case D:return e=zn(31,t,n,l),e.elementType=D,e.lanes=r,e;case P:return Pt(t.children,l,r,n);case He:c=8,l|=24;break;case Be:return e=zn(12,t,n,l|2),e.elementType=Be,e.lanes=r,e;case ln:return e=zn(13,t,n,l),e.elementType=ln,e.lanes=r,e;case $e:return e=zn(19,t,n,l),e.elementType=$e,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ae:c=10;break e;case an:c=9;break e;case re:c=11;break e;case G:c=14;break e;case Ce:c=16,a=null;break e}c=29,t=Error(u(130,e===null?"null":typeof e,"")),a=null}return n=zn(c,t,n,l),n.elementType=e,n.type=a,n.lanes=r,n}function Pt(e,n,t,a){return e=zn(7,e,a,n),e.lanes=t,e}function xo(e,n,t){return e=zn(6,e,null,n),e.lanes=t,e}function nf(e){var n=zn(18,null,null,0);return n.stateNode=e,n}function Eo(e,n,t){return n=zn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var tf=new WeakMap;function Cn(e,n){if(typeof e=="object"&&e!==null){var t=tf.get(e);return t!==void 0?t:(n={value:e,source:n,stack:nc(n)},tf.set(e,n),n)}return{value:e,source:n,stack:nc(n)}}var Aa=[],Ta=0,_i=null,Sl=0,Dn=[],Mn=0,gt=null,Zn=1,Gn="";function In(e,n){Aa[Ta++]=Sl,Aa[Ta++]=_i,_i=e,Sl=n}function af(e,n,t){Dn[Mn++]=Zn,Dn[Mn++]=Gn,Dn[Mn++]=gt,gt=e;var a=Zn;e=Gn;var l=32-wn(a)-1;a&=~(1<<l),t+=1;var r=32-wn(n)+l;if(30<r){var c=l-l%5;r=(a&(1<<c)-1).toString(32),a>>=c,l-=c,Zn=1<<32-wn(n)+l|t<<l|a,Gn=r+e}else Zn=1<<r|t<<l|a,Gn=e}function Ao(e){e.return!==null&&(In(e,1),af(e,1,0))}function To(e){for(;e===_i;)_i=Aa[--Ta],Aa[Ta]=null,Sl=Aa[--Ta],Aa[Ta]=null;for(;e===gt;)gt=Dn[--Mn],Dn[Mn]=null,Gn=Dn[--Mn],Dn[Mn]=null,Zn=Dn[--Mn],Dn[Mn]=null}function lf(e,n){Dn[Mn++]=Zn,Dn[Mn++]=Gn,Dn[Mn++]=gt,Zn=n.id,Gn=n.overflow,gt=e}var Pe=null,xe=null,ue=!1,bt=null,_n=!1,Oo=Error(u(519));function yt(e){var n=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw jl(Cn(n,e)),Oo}function rf(e){var n=e.stateNode,t=e.type,a=e.memoizedProps;switch(n[Ie]=e,n[cn]=a,t){case"dialog":ae("cancel",n),ae("close",n);break;case"iframe":case"object":case"embed":ae("load",n);break;case"video":case"audio":for(t=0;t<$l.length;t++)ae($l[t],n);break;case"source":ae("error",n);break;case"img":case"image":case"link":ae("error",n),ae("load",n);break;case"details":ae("toggle",n);break;case"input":ae("invalid",n),bc(n,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":ae("invalid",n);break;case"textarea":ae("invalid",n),wc(n,a.value,a.defaultValue,a.children)}t=a.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||n.textContent===""+t||a.suppressHydrationWarning===!0||Rm(n.textContent,t)?(a.popover!=null&&(ae("beforetoggle",n),ae("toggle",n)),a.onScroll!=null&&ae("scroll",n),a.onScrollEnd!=null&&ae("scrollend",n),a.onClick!=null&&(n.onclick=Wn),n=!0):n=!1,n||yt(e,!0)}function of(e){for(Pe=e.return;Pe;)switch(Pe.tag){case 5:case 31:case 13:_n=!1;return;case 27:case 3:_n=!0;return;default:Pe=Pe.return}}function Oa(e){if(e!==Pe)return!1;if(!ue)return of(e),ue=!0,!1;var n=e.tag,t;if((t=n!==3&&n!==27)&&((t=n===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||Xu(e.type,e.memoizedProps)),t=!t),t&&xe&&yt(e),of(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));xe=Dm(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));xe=Dm(e)}else n===27?(n=xe,Mt(e.type)?(e=Pu,Pu=null,xe=e):xe=n):xe=Pe?Un(e.stateNode.nextSibling):null;return!0}function ea(){xe=Pe=null,ue=!1}function Co(){var e=bt;return e!==null&&(hn===null?hn=e:hn.push.apply(hn,e),bt=null),e}function jl(e){bt===null?bt=[e]:bt.push(e)}var Do=v(null),na=null,Pn=null;function wt(e,n,t){U(Do,n._currentValue),n._currentValue=t}function et(e){e._currentValue=Do.current,C(Do)}function Mo(e,n,t){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===t)break;e=e.return}}function _o(e,n,t,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var r=l.dependencies;if(r!==null){var c=l.child;r=r.firstContext;e:for(;r!==null;){var d=r;r=l;for(var p=0;p<n.length;p++)if(d.context===n[p]){r.lanes|=t,d=r.alternate,d!==null&&(d.lanes|=t),Mo(r.return,t,e),a||(c=null);break e}r=d.next}}else if(l.tag===18){if(c=l.return,c===null)throw Error(u(341));c.lanes|=t,r=c.alternate,r!==null&&(r.lanes|=t),Mo(c,t,e),c=null}else c=l.child;if(c!==null)c.return=l;else for(c=l;c!==null;){if(c===e){c=null;break}if(l=c.sibling,l!==null){l.return=c.return,c=l;break}c=c.return}l=c}}function Ca(e,n,t,a){e=null;for(var l=n,r=!1;l!==null;){if(!r){if((l.flags&524288)!==0)r=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var c=l.alternate;if(c===null)throw Error(u(387));if(c=c.memoizedProps,c!==null){var d=l.type;kn(l.pendingProps.value,c.value)||(e!==null?e.push(d):e=[d])}}else if(l===de.current){if(c=l.alternate,c===null)throw Error(u(387));c.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Il):e=[Il])}l=l.return}e!==null&&_o(n,e,t,a),n.flags|=262144}function qi(e){for(e=e.firstContext;e!==null;){if(!kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ta(e){na=e,Pn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function en(e){return uf(na,e)}function Ui(e,n){return na===null&&ta(e),uf(e,n)}function uf(e,n){var t=n._currentValue;if(n={context:n,memoizedValue:t,next:null},Pn===null){if(e===null)throw Error(u(308));Pn=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Pn=Pn.next=n;return t}var zv=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(t,a){e.push(a)}};this.abort=function(){n.aborted=!0,e.forEach(function(t){return t()})}},Rv=s.unstable_scheduleCallback,Sv=s.unstable_NormalPriority,Ve={$$typeof:Ae,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function qo(){return{controller:new zv,data:new Map,refCount:0}}function xl(e){e.refCount--,e.refCount===0&&Rv(Sv,function(){e.controller.abort()})}var El=null,Uo=0,Da=0,Ma=null;function jv(e,n){if(El===null){var t=El=[];Uo=0,Da=Hu(),Ma={status:"pending",value:void 0,then:function(a){t.push(a)}}}return Uo++,n.then(sf,sf),n}function sf(){if(--Uo===0&&El!==null){Ma!==null&&(Ma.status="fulfilled");var e=El;El=null,Da=0,Ma=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function xv(e,n){var t=[],a={status:"pending",value:null,reason:null,then:function(l){t.push(l)}};return e.then(function(){a.status="fulfilled",a.value=n;for(var l=0;l<t.length;l++)(0,t[l])(n)},function(l){for(a.status="rejected",a.reason=l,l=0;l<t.length;l++)(0,t[l])(void 0)}),a}var cf=E.S;E.S=function(e,n){$d=bn(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&jv(e,n),cf!==null&&cf(e,n)};var aa=v(null);function No(){var e=aa.current;return e!==null?e:Se.pooledCache}function Ni(e,n){n===null?U(aa,aa.current):U(aa,n.pool)}function ff(){var e=No();return e===null?null:{parent:Ve._currentValue,pool:e}}var _a=Error(u(460)),Lo=Error(u(474)),Li=Error(u(542)),Hi={then:function(){}};function df(e){return e=e.status,e==="fulfilled"||e==="rejected"}function mf(e,n,t){switch(t=e[t],t===void 0?e.push(n):t!==n&&(n.then(Wn,Wn),n=t),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,hf(e),e;default:if(typeof n.status=="string")n.then(Wn,Wn);else{if(e=Se,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=n,e.status="pending",e.then(function(a){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=a}},function(a){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=a}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,hf(e),e}throw ia=n,_a}}function la(e){try{var n=e._init;return n(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(ia=t,_a):t}}var ia=null;function pf(){if(ia===null)throw Error(u(459));var e=ia;return ia=null,e}function hf(e){if(e===_a||e===Li)throw Error(u(483))}var qa=null,Al=0;function Bi(e){var n=Al;return Al+=1,qa===null&&(qa=[]),mf(qa,e,n)}function Tl(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Fi(e,n){throw n.$$typeof===Z?Error(u(525)):(e=Object.prototype.toString.call(n),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function vf(e){function n(b,h){if(e){var w=b.deletions;w===null?(b.deletions=[h],b.flags|=16):w.push(h)}}function t(b,h){if(!e)return null;for(;h!==null;)n(b,h),h=h.sibling;return null}function a(b){for(var h=new Map;b!==null;)b.key!==null?h.set(b.key,b):h.set(b.index,b),b=b.sibling;return h}function l(b,h){return b=Kn(b,h),b.index=0,b.sibling=null,b}function r(b,h,w){return b.index=w,e?(w=b.alternate,w!==null?(w=w.index,w<h?(b.flags|=67108866,h):w):(b.flags|=67108866,h)):(b.flags|=1048576,h)}function c(b){return e&&b.alternate===null&&(b.flags|=67108866),b}function d(b,h,w,A){return h===null||h.tag!==6?(h=xo(w,b.mode,A),h.return=b,h):(h=l(h,w),h.return=b,h)}function p(b,h,w,A){var V=w.type;return V===P?x(b,h,w.props.children,A,w.key):h!==null&&(h.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Ce&&la(V)===h.type)?(h=l(h,w.props),Tl(h,w),h.return=b,h):(h=Mi(w.type,w.key,w.props,null,b.mode,A),Tl(h,w),h.return=b,h)}function k(b,h,w,A){return h===null||h.tag!==4||h.stateNode.containerInfo!==w.containerInfo||h.stateNode.implementation!==w.implementation?(h=Eo(w,b.mode,A),h.return=b,h):(h=l(h,w.children||[]),h.return=b,h)}function x(b,h,w,A,V){return h===null||h.tag!==7?(h=Pt(w,b.mode,A,V),h.return=b,h):(h=l(h,w),h.return=b,h)}function O(b,h,w){if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return h=xo(""+h,b.mode,w),h.return=b,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Q:return w=Mi(h.type,h.key,h.props,null,b.mode,w),Tl(w,h),w.return=b,w;case I:return h=Eo(h,b.mode,w),h.return=b,h;case Ce:return h=la(h),O(b,h,w)}if(Hn(h)||De(h))return h=Pt(h,b.mode,w,null),h.return=b,h;if(typeof h.then=="function")return O(b,Bi(h),w);if(h.$$typeof===Ae)return O(b,Ui(b,h),w);Fi(b,h)}return null}function R(b,h,w,A){var V=h!==null?h.key:null;if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return V!==null?null:d(b,h,""+w,A);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Q:return w.key===V?p(b,h,w,A):null;case I:return w.key===V?k(b,h,w,A):null;case Ce:return w=la(w),R(b,h,w,A)}if(Hn(w)||De(w))return V!==null?null:x(b,h,w,A,null);if(typeof w.then=="function")return R(b,h,Bi(w),A);if(w.$$typeof===Ae)return R(b,h,Ui(b,w),A);Fi(b,w)}return null}function S(b,h,w,A,V){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return b=b.get(w)||null,d(h,b,""+A,V);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Q:return b=b.get(A.key===null?w:A.key)||null,p(h,b,A,V);case I:return b=b.get(A.key===null?w:A.key)||null,k(h,b,A,V);case Ce:return A=la(A),S(b,h,w,A,V)}if(Hn(A)||De(A))return b=b.get(w)||null,x(h,b,A,V,null);if(typeof A.then=="function")return S(b,h,w,Bi(A),V);if(A.$$typeof===Ae)return S(b,h,w,Ui(h,A),V);Fi(h,A)}return null}function L(b,h,w,A){for(var V=null,se=null,B=h,K=h=0,ie=null;B!==null&&K<w.length;K++){B.index>K?(ie=B,B=null):ie=B.sibling;var ce=R(b,B,w[K],A);if(ce===null){B===null&&(B=ie);break}e&&B&&ce.alternate===null&&n(b,B),h=r(ce,h,K),se===null?V=ce:se.sibling=ce,se=ce,B=ie}if(K===w.length)return t(b,B),ue&&In(b,K),V;if(B===null){for(;K<w.length;K++)B=O(b,w[K],A),B!==null&&(h=r(B,h,K),se===null?V=B:se.sibling=B,se=B);return ue&&In(b,K),V}for(B=a(B);K<w.length;K++)ie=S(B,b,K,w[K],A),ie!==null&&(e&&ie.alternate!==null&&B.delete(ie.key===null?K:ie.key),h=r(ie,h,K),se===null?V=ie:se.sibling=ie,se=ie);return e&&B.forEach(function(Lt){return n(b,Lt)}),ue&&In(b,K),V}function Y(b,h,w,A){if(w==null)throw Error(u(151));for(var V=null,se=null,B=h,K=h=0,ie=null,ce=w.next();B!==null&&!ce.done;K++,ce=w.next()){B.index>K?(ie=B,B=null):ie=B.sibling;var Lt=R(b,B,ce.value,A);if(Lt===null){B===null&&(B=ie);break}e&&B&&Lt.alternate===null&&n(b,B),h=r(Lt,h,K),se===null?V=Lt:se.sibling=Lt,se=Lt,B=ie}if(ce.done)return t(b,B),ue&&In(b,K),V;if(B===null){for(;!ce.done;K++,ce=w.next())ce=O(b,ce.value,A),ce!==null&&(h=r(ce,h,K),se===null?V=ce:se.sibling=ce,se=ce);return ue&&In(b,K),V}for(B=a(B);!ce.done;K++,ce=w.next())ce=S(B,b,K,ce.value,A),ce!==null&&(e&&ce.alternate!==null&&B.delete(ce.key===null?K:ce.key),h=r(ce,h,K),se===null?V=ce:se.sibling=ce,se=ce);return e&&B.forEach(function(Ng){return n(b,Ng)}),ue&&In(b,K),V}function ke(b,h,w,A){if(typeof w=="object"&&w!==null&&w.type===P&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case Q:e:{for(var V=w.key;h!==null;){if(h.key===V){if(V=w.type,V===P){if(h.tag===7){t(b,h.sibling),A=l(h,w.props.children),A.return=b,b=A;break e}}else if(h.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Ce&&la(V)===h.type){t(b,h.sibling),A=l(h,w.props),Tl(A,w),A.return=b,b=A;break e}t(b,h);break}else n(b,h);h=h.sibling}w.type===P?(A=Pt(w.props.children,b.mode,A,w.key),A.return=b,b=A):(A=Mi(w.type,w.key,w.props,null,b.mode,A),Tl(A,w),A.return=b,b=A)}return c(b);case I:e:{for(V=w.key;h!==null;){if(h.key===V)if(h.tag===4&&h.stateNode.containerInfo===w.containerInfo&&h.stateNode.implementation===w.implementation){t(b,h.sibling),A=l(h,w.children||[]),A.return=b,b=A;break e}else{t(b,h);break}else n(b,h);h=h.sibling}A=Eo(w,b.mode,A),A.return=b,b=A}return c(b);case Ce:return w=la(w),ke(b,h,w,A)}if(Hn(w))return L(b,h,w,A);if(De(w)){if(V=De(w),typeof V!="function")throw Error(u(150));return w=V.call(w),Y(b,h,w,A)}if(typeof w.then=="function")return ke(b,h,Bi(w),A);if(w.$$typeof===Ae)return ke(b,h,Ui(b,w),A);Fi(b,w)}return typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint"?(w=""+w,h!==null&&h.tag===6?(t(b,h.sibling),A=l(h,w),A.return=b,b=A):(t(b,h),A=xo(w,b.mode,A),A.return=b,b=A),c(b)):t(b,h)}return function(b,h,w,A){try{Al=0;var V=ke(b,h,w,A);return qa=null,V}catch(B){if(B===_a||B===Li)throw B;var se=zn(29,B,null,b.mode);return se.lanes=A,se.return=b,se}}}var ra=vf(!0),gf=vf(!1),kt=!1;function Ho(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Bo(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function zt(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Rt(e,n,t){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(fe&2)!==0){var l=a.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),a.pending=n,n=Di(e),Pc(e,null,t),n}return Ci(e,a,n,t),Di(e)}function Ol(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194048)!==0)){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,oc(e,t)}}function Fo(e,n){var t=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var l=null,r=null;if(t=t.firstBaseUpdate,t!==null){do{var c={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};r===null?l=r=c:r=r.next=c,t=t.next}while(t!==null);r===null?l=r=n:r=r.next=n}else l=r=n;t={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:r,shared:a.shared,callbacks:a.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}var Vo=!1;function Cl(){if(Vo){var e=Ma;if(e!==null)throw e}}function Dl(e,n,t,a){Vo=!1;var l=e.updateQueue;kt=!1;var r=l.firstBaseUpdate,c=l.lastBaseUpdate,d=l.shared.pending;if(d!==null){l.shared.pending=null;var p=d,k=p.next;p.next=null,c===null?r=k:c.next=k,c=p;var x=e.alternate;x!==null&&(x=x.updateQueue,d=x.lastBaseUpdate,d!==c&&(d===null?x.firstBaseUpdate=k:d.next=k,x.lastBaseUpdate=p))}if(r!==null){var O=l.baseState;c=0,x=k=p=null,d=r;do{var R=d.lane&-536870913,S=R!==d.lane;if(S?(le&R)===R:(a&R)===R){R!==0&&R===Da&&(Vo=!0),x!==null&&(x=x.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});e:{var L=e,Y=d;R=n;var ke=t;switch(Y.tag){case 1:if(L=Y.payload,typeof L=="function"){O=L.call(ke,O,R);break e}O=L;break e;case 3:L.flags=L.flags&-65537|128;case 0:if(L=Y.payload,R=typeof L=="function"?L.call(ke,O,R):L,R==null)break e;O=M({},O,R);break e;case 2:kt=!0}}R=d.callback,R!==null&&(e.flags|=64,S&&(e.flags|=8192),S=l.callbacks,S===null?l.callbacks=[R]:S.push(R))}else S={lane:R,tag:d.tag,payload:d.payload,callback:d.callback,next:null},x===null?(k=x=S,p=O):x=x.next=S,c|=R;if(d=d.next,d===null){if(d=l.shared.pending,d===null)break;S=d,d=S.next,S.next=null,l.lastBaseUpdate=S,l.shared.pending=null}}while(!0);x===null&&(p=O),l.baseState=p,l.firstBaseUpdate=k,l.lastBaseUpdate=x,r===null&&(l.shared.lanes=0),At|=c,e.lanes=c,e.memoizedState=O}}function bf(e,n){if(typeof e!="function")throw Error(u(191,e));e.call(n)}function yf(e,n){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)bf(t[e],n)}var Ua=v(null),Vi=v(0);function wf(e,n){e=st,U(Vi,e),U(Ua,n),st=e|n.baseLanes}function Yo(){U(Vi,st),U(Ua,Ua.current)}function Zo(){st=Vi.current,C(Ua),C(Vi)}var Rn=v(null),qn=null;function St(e){var n=e.alternate;U(Ue,Ue.current&1),U(Rn,e),qn===null&&(n===null||Ua.current!==null||n.memoizedState!==null)&&(qn=e)}function Go(e){U(Ue,Ue.current),U(Rn,e),qn===null&&(qn=e)}function kf(e){e.tag===22?(U(Ue,Ue.current),U(Rn,e),qn===null&&(qn=e)):jt()}function jt(){U(Ue,Ue.current),U(Rn,Rn.current)}function Sn(e){C(Rn),qn===e&&(qn=null),C(Ue)}var Ue=v(0);function Yi(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||Ku(t)||Iu(t)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var nt=0,J=null,ye=null,Ye=null,Zi=!1,Na=!1,oa=!1,Gi=0,Ml=0,La=null,Ev=0;function Me(){throw Error(u(321))}function Qo(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!kn(e[t],n[t]))return!1;return!0}function $o(e,n,t,a,l,r){return nt=r,J=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,E.H=e===null||e.memoizedState===null?ld:uu,oa=!1,r=t(a,l),oa=!1,Na&&(r=Rf(n,t,a,l)),zf(e),r}function zf(e){E.H=Ul;var n=ye!==null&&ye.next!==null;if(nt=0,Ye=ye=J=null,Zi=!1,Ml=0,La=null,n)throw Error(u(300));e===null||Ze||(e=e.dependencies,e!==null&&qi(e)&&(Ze=!0))}function Rf(e,n,t,a){J=e;var l=0;do{if(Na&&(La=null),Ml=0,Na=!1,25<=l)throw Error(u(301));if(l+=1,Ye=ye=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}E.H=id,r=n(t,a)}while(Na);return r}function Av(){var e=E.H,n=e.useState()[0];return n=typeof n.then=="function"?_l(n):n,e=e.useState()[0],(ye!==null?ye.memoizedState:null)!==e&&(J.flags|=1024),n}function Xo(){var e=Gi!==0;return Gi=0,e}function Wo(e,n,t){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t}function Jo(e){if(Zi){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Zi=!1}nt=0,Ye=ye=J=null,Na=!1,Ml=Gi=0,La=null}function sn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?J.memoizedState=Ye=e:Ye=Ye.next=e,Ye}function Ne(){if(ye===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=ye.next;var n=Ye===null?J.memoizedState:Ye.next;if(n!==null)Ye=n,ye=e;else{if(e===null)throw J.alternate===null?Error(u(467)):Error(u(310));ye=e,e={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},Ye===null?J.memoizedState=Ye=e:Ye=Ye.next=e}return Ye}function Qi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function _l(e){var n=Ml;return Ml+=1,La===null&&(La=[]),e=mf(La,e,n),n=J,(Ye===null?n.memoizedState:Ye.next)===null&&(n=n.alternate,E.H=n===null||n.memoizedState===null?ld:uu),e}function $i(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return _l(e);if(e.$$typeof===Ae)return en(e)}throw Error(u(438,String(e)))}function Ko(e){var n=null,t=J.updateQueue;if(t!==null&&(n=t.memoCache),n==null){var a=J.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(n={data:a.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),t===null&&(t=Qi(),J.updateQueue=t),t.memoCache=n,t=n.data[n.index],t===void 0)for(t=n.data[n.index]=Array(e),a=0;a<e;a++)t[a]=F;return n.index++,t}function tt(e,n){return typeof n=="function"?n(e):n}function Xi(e){var n=Ne();return Io(n,ye,e)}function Io(e,n,t){var a=e.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=t;var l=e.baseQueue,r=a.pending;if(r!==null){if(l!==null){var c=l.next;l.next=r.next,r.next=c}n.baseQueue=l=r,a.pending=null}if(r=e.baseState,l===null)e.memoizedState=r;else{n=l.next;var d=c=null,p=null,k=n,x=!1;do{var O=k.lane&-536870913;if(O!==k.lane?(le&O)===O:(nt&O)===O){var R=k.revertLane;if(R===0)p!==null&&(p=p.next={lane:0,revertLane:0,gesture:null,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),O===Da&&(x=!0);else if((nt&R)===R){k=k.next,R===Da&&(x=!0);continue}else O={lane:0,revertLane:k.revertLane,gesture:null,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},p===null?(d=p=O,c=r):p=p.next=O,J.lanes|=R,At|=R;O=k.action,oa&&t(r,O),r=k.hasEagerState?k.eagerState:t(r,O)}else R={lane:O,revertLane:k.revertLane,gesture:k.gesture,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},p===null?(d=p=R,c=r):p=p.next=R,J.lanes|=O,At|=O;k=k.next}while(k!==null&&k!==n);if(p===null?c=r:p.next=d,!kn(r,e.memoizedState)&&(Ze=!0,x&&(t=Ma,t!==null)))throw t;e.memoizedState=r,e.baseState=c,e.baseQueue=p,a.lastRenderedState=r}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Po(e){var n=Ne(),t=n.queue;if(t===null)throw Error(u(311));t.lastRenderedReducer=e;var a=t.dispatch,l=t.pending,r=n.memoizedState;if(l!==null){t.pending=null;var c=l=l.next;do r=e(r,c.action),c=c.next;while(c!==l);kn(r,n.memoizedState)||(Ze=!0),n.memoizedState=r,n.baseQueue===null&&(n.baseState=r),t.lastRenderedState=r}return[r,a]}function Sf(e,n,t){var a=J,l=Ne(),r=ue;if(r){if(t===void 0)throw Error(u(407));t=t()}else t=n();var c=!kn((ye||l).memoizedState,t);if(c&&(l.memoizedState=t,Ze=!0),l=l.queue,tu(Ef.bind(null,a,l,e),[e]),l.getSnapshot!==n||c||Ye!==null&&Ye.memoizedState.tag&1){if(a.flags|=2048,Ha(9,{destroy:void 0},xf.bind(null,a,l,t,n),null),Se===null)throw Error(u(349));r||(nt&127)!==0||jf(a,n,t)}return t}function jf(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=J.updateQueue,n===null?(n=Qi(),J.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function xf(e,n,t,a){n.value=t,n.getSnapshot=a,Af(n)&&Tf(e)}function Ef(e,n,t){return t(function(){Af(n)&&Tf(e)})}function Af(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!kn(e,t)}catch{return!0}}function Tf(e){var n=It(e,2);n!==null&&vn(n,e,2)}function eu(e){var n=sn();if(typeof e=="function"){var t=e;if(e=t(),oa){pt(!0);try{t()}finally{pt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:tt,lastRenderedState:e},n}function Of(e,n,t,a){return e.baseState=t,Io(e,ye,typeof a=="function"?a:tt)}function Tv(e,n,t,a,l){if(Ki(e))throw Error(u(485));if(e=n.action,e!==null){var r={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){r.listeners.push(c)}};E.T!==null?t(!0):r.isTransition=!1,a(r),t=n.pending,t===null?(r.next=n.pending=r,Cf(n,r)):(r.next=t.next,n.pending=t.next=r)}}function Cf(e,n){var t=n.action,a=n.payload,l=e.state;if(n.isTransition){var r=E.T,c={};E.T=c;try{var d=t(l,a),p=E.S;p!==null&&p(c,d),Df(e,n,d)}catch(k){nu(e,n,k)}finally{r!==null&&c.types!==null&&(r.types=c.types),E.T=r}}else try{r=t(l,a),Df(e,n,r)}catch(k){nu(e,n,k)}}function Df(e,n,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(a){Mf(e,n,a)},function(a){return nu(e,n,a)}):Mf(e,n,t)}function Mf(e,n,t){n.status="fulfilled",n.value=t,_f(n),e.state=t,n=e.pending,n!==null&&(t=n.next,t===n?e.pending=null:(t=t.next,n.next=t,Cf(e,t)))}function nu(e,n,t){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do n.status="rejected",n.reason=t,_f(n),n=n.next;while(n!==a)}e.action=null}function _f(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function qf(e,n){return n}function Uf(e,n){if(ue){var t=Se.formState;if(t!==null){e:{var a=J;if(ue){if(xe){n:{for(var l=xe,r=_n;l.nodeType!==8;){if(!r){l=null;break n}if(l=Un(l.nextSibling),l===null){l=null;break n}}r=l.data,l=r==="F!"||r==="F"?l:null}if(l){xe=Un(l.nextSibling),a=l.data==="F!";break e}}yt(a)}a=!1}a&&(n=t[0])}}return t=sn(),t.memoizedState=t.baseState=n,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qf,lastRenderedState:n},t.queue=a,t=nd.bind(null,J,a),a.dispatch=t,a=eu(!1),r=ou.bind(null,J,!1,a.queue),a=sn(),l={state:n,dispatch:null,action:e,pending:null},a.queue=l,t=Tv.bind(null,J,l,r,t),l.dispatch=t,a.memoizedState=e,[n,t,!1]}function Nf(e){var n=Ne();return Lf(n,ye,e)}function Lf(e,n,t){if(n=Io(e,n,qf)[0],e=Xi(tt)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var a=_l(n)}catch(c){throw c===_a?Li:c}else a=n;n=Ne();var l=n.queue,r=l.dispatch;return t!==n.memoizedState&&(J.flags|=2048,Ha(9,{destroy:void 0},Ov.bind(null,l,t),null)),[a,r,e]}function Ov(e,n){e.action=n}function Hf(e){var n=Ne(),t=ye;if(t!==null)return Lf(n,t,e);Ne(),n=n.memoizedState,t=Ne();var a=t.queue.dispatch;return t.memoizedState=e,[n,a,!1]}function Ha(e,n,t,a){return e={tag:e,create:t,deps:a,inst:n,next:null},n=J.updateQueue,n===null&&(n=Qi(),J.updateQueue=n),t=n.lastEffect,t===null?n.lastEffect=e.next=e:(a=t.next,t.next=e,e.next=a,n.lastEffect=e),e}function Bf(){return Ne().memoizedState}function Wi(e,n,t,a){var l=sn();J.flags|=e,l.memoizedState=Ha(1|n,{destroy:void 0},t,a===void 0?null:a)}function Ji(e,n,t,a){var l=Ne();a=a===void 0?null:a;var r=l.memoizedState.inst;ye!==null&&a!==null&&Qo(a,ye.memoizedState.deps)?l.memoizedState=Ha(n,r,t,a):(J.flags|=e,l.memoizedState=Ha(1|n,r,t,a))}function Ff(e,n){Wi(8390656,8,e,n)}function tu(e,n){Ji(2048,8,e,n)}function Cv(e){J.flags|=4;var n=J.updateQueue;if(n===null)n=Qi(),J.updateQueue=n,n.events=[e];else{var t=n.events;t===null?n.events=[e]:t.push(e)}}function Vf(e){var n=Ne().memoizedState;return Cv({ref:n,nextImpl:e}),function(){if((fe&2)!==0)throw Error(u(440));return n.impl.apply(void 0,arguments)}}function Yf(e,n){return Ji(4,2,e,n)}function Zf(e,n){return Ji(4,4,e,n)}function Gf(e,n){if(typeof n=="function"){e=e();var t=n(e);return function(){typeof t=="function"?t():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Qf(e,n,t){t=t!=null?t.concat([e]):null,Ji(4,4,Gf.bind(null,n,e),t)}function au(){}function $f(e,n){var t=Ne();n=n===void 0?null:n;var a=t.memoizedState;return n!==null&&Qo(n,a[1])?a[0]:(t.memoizedState=[e,n],e)}function Xf(e,n){var t=Ne();n=n===void 0?null:n;var a=t.memoizedState;if(n!==null&&Qo(n,a[1]))return a[0];if(a=e(),oa){pt(!0);try{e()}finally{pt(!1)}}return t.memoizedState=[a,n],a}function lu(e,n,t){return t===void 0||(nt&1073741824)!==0&&(le&261930)===0?e.memoizedState=n:(e.memoizedState=t,e=Wd(),J.lanes|=e,At|=e,t)}function Wf(e,n,t,a){return kn(t,n)?t:Ua.current!==null?(e=lu(e,t,a),kn(e,n)||(Ze=!0),e):(nt&42)===0||(nt&1073741824)!==0&&(le&261930)===0?(Ze=!0,e.memoizedState=t):(e=Wd(),J.lanes|=e,At|=e,n)}function Jf(e,n,t,a,l){var r=q.p;q.p=r!==0&&8>r?r:8;var c=E.T,d={};E.T=d,ou(e,!1,n,t);try{var p=l(),k=E.S;if(k!==null&&k(d,p),p!==null&&typeof p=="object"&&typeof p.then=="function"){var x=xv(p,a);ql(e,n,x,En(e))}else ql(e,n,a,En(e))}catch(O){ql(e,n,{then:function(){},status:"rejected",reason:O},En())}finally{q.p=r,c!==null&&d.types!==null&&(c.types=d.types),E.T=c}}function Dv(){}function iu(e,n,t,a){if(e.tag!==5)throw Error(u(476));var l=Kf(e).queue;Jf(e,l,n,$,t===null?Dv:function(){return If(e),t(a)})}function Kf(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:tt,lastRenderedState:$},next:null};var t={};return n.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:tt,lastRenderedState:t},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function If(e){var n=Kf(e);n.next===null&&(n=e.alternate.memoizedState),ql(e,n.next.queue,{},En())}function ru(){return en(Il)}function Pf(){return Ne().memoizedState}function ed(){return Ne().memoizedState}function Mv(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var t=En();e=zt(t);var a=Rt(n,e,t);a!==null&&(vn(a,n,t),Ol(a,n,t)),n={cache:qo()},e.payload=n;return}n=n.return}}function _v(e,n,t){var a=En();t={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},Ki(e)?td(n,t):(t=So(e,n,t,a),t!==null&&(vn(t,e,a),ad(t,n,a)))}function nd(e,n,t){var a=En();ql(e,n,t,a)}function ql(e,n,t,a){var l={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ki(e))td(n,l);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=n.lastRenderedReducer,r!==null))try{var c=n.lastRenderedState,d=r(c,t);if(l.hasEagerState=!0,l.eagerState=d,kn(d,c))return Ci(e,n,l,0),Se===null&&Oi(),!1}catch{}if(t=So(e,n,l,a),t!==null)return vn(t,e,a),ad(t,n,a),!0}return!1}function ou(e,n,t,a){if(a={lane:2,revertLane:Hu(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ki(e)){if(n)throw Error(u(479))}else n=So(e,t,a,2),n!==null&&vn(n,e,2)}function Ki(e){var n=e.alternate;return e===J||n!==null&&n===J}function td(e,n){Na=Zi=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function ad(e,n,t){if((t&4194048)!==0){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,oc(e,t)}}var Ul={readContext:en,use:$i,useCallback:Me,useContext:Me,useEffect:Me,useImperativeHandle:Me,useLayoutEffect:Me,useInsertionEffect:Me,useMemo:Me,useReducer:Me,useRef:Me,useState:Me,useDebugValue:Me,useDeferredValue:Me,useTransition:Me,useSyncExternalStore:Me,useId:Me,useHostTransitionStatus:Me,useFormState:Me,useActionState:Me,useOptimistic:Me,useMemoCache:Me,useCacheRefresh:Me};Ul.useEffectEvent=Me;var ld={readContext:en,use:$i,useCallback:function(e,n){return sn().memoizedState=[e,n===void 0?null:n],e},useContext:en,useEffect:Ff,useImperativeHandle:function(e,n,t){t=t!=null?t.concat([e]):null,Wi(4194308,4,Gf.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Wi(4194308,4,e,n)},useInsertionEffect:function(e,n){Wi(4,2,e,n)},useMemo:function(e,n){var t=sn();n=n===void 0?null:n;var a=e();if(oa){pt(!0);try{e()}finally{pt(!1)}}return t.memoizedState=[a,n],a},useReducer:function(e,n,t){var a=sn();if(t!==void 0){var l=t(n);if(oa){pt(!0);try{t(n)}finally{pt(!1)}}}else l=n;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=_v.bind(null,J,e),[a.memoizedState,e]},useRef:function(e){var n=sn();return e={current:e},n.memoizedState=e},useState:function(e){e=eu(e);var n=e.queue,t=nd.bind(null,J,n);return n.dispatch=t,[e.memoizedState,t]},useDebugValue:au,useDeferredValue:function(e,n){var t=sn();return lu(t,e,n)},useTransition:function(){var e=eu(!1);return e=Jf.bind(null,J,e.queue,!0,!1),sn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,t){var a=J,l=sn();if(ue){if(t===void 0)throw Error(u(407));t=t()}else{if(t=n(),Se===null)throw Error(u(349));(le&127)!==0||jf(a,n,t)}l.memoizedState=t;var r={value:t,getSnapshot:n};return l.queue=r,Ff(Ef.bind(null,a,r,e),[e]),a.flags|=2048,Ha(9,{destroy:void 0},xf.bind(null,a,r,t,n),null),t},useId:function(){var e=sn(),n=Se.identifierPrefix;if(ue){var t=Gn,a=Zn;t=(a&~(1<<32-wn(a)-1)).toString(32)+t,n="_"+n+"R_"+t,t=Gi++,0<t&&(n+="H"+t.toString(32)),n+="_"}else t=Ev++,n="_"+n+"r_"+t.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:ru,useFormState:Uf,useActionState:Uf,useOptimistic:function(e){var n=sn();n.memoizedState=n.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=t,n=ou.bind(null,J,!0,t),t.dispatch=n,[e,n]},useMemoCache:Ko,useCacheRefresh:function(){return sn().memoizedState=Mv.bind(null,J)},useEffectEvent:function(e){var n=sn(),t={impl:e};return n.memoizedState=t,function(){if((fe&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}},uu={readContext:en,use:$i,useCallback:$f,useContext:en,useEffect:tu,useImperativeHandle:Qf,useInsertionEffect:Yf,useLayoutEffect:Zf,useMemo:Xf,useReducer:Xi,useRef:Bf,useState:function(){return Xi(tt)},useDebugValue:au,useDeferredValue:function(e,n){var t=Ne();return Wf(t,ye.memoizedState,e,n)},useTransition:function(){var e=Xi(tt)[0],n=Ne().memoizedState;return[typeof e=="boolean"?e:_l(e),n]},useSyncExternalStore:Sf,useId:Pf,useHostTransitionStatus:ru,useFormState:Nf,useActionState:Nf,useOptimistic:function(e,n){var t=Ne();return Of(t,ye,e,n)},useMemoCache:Ko,useCacheRefresh:ed};uu.useEffectEvent=Vf;var id={readContext:en,use:$i,useCallback:$f,useContext:en,useEffect:tu,useImperativeHandle:Qf,useInsertionEffect:Yf,useLayoutEffect:Zf,useMemo:Xf,useReducer:Po,useRef:Bf,useState:function(){return Po(tt)},useDebugValue:au,useDeferredValue:function(e,n){var t=Ne();return ye===null?lu(t,e,n):Wf(t,ye.memoizedState,e,n)},useTransition:function(){var e=Po(tt)[0],n=Ne().memoizedState;return[typeof e=="boolean"?e:_l(e),n]},useSyncExternalStore:Sf,useId:Pf,useHostTransitionStatus:ru,useFormState:Hf,useActionState:Hf,useOptimistic:function(e,n){var t=Ne();return ye!==null?Of(t,ye,e,n):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:Ko,useCacheRefresh:ed};id.useEffectEvent=Vf;function su(e,n,t,a){n=e.memoizedState,t=t(a,n),t=t==null?n:M({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var cu={enqueueSetState:function(e,n,t){e=e._reactInternals;var a=En(),l=zt(a);l.payload=n,t!=null&&(l.callback=t),n=Rt(e,l,a),n!==null&&(vn(n,e,a),Ol(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var a=En(),l=zt(a);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=Rt(e,l,a),n!==null&&(vn(n,e,a),Ol(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=En(),a=zt(t);a.tag=2,n!=null&&(a.callback=n),n=Rt(e,a,t),n!==null&&(vn(n,e,t),Ol(n,e,t))}};function rd(e,n,t,a,l,r,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,r,c):n.prototype&&n.prototype.isPureReactComponent?!zl(t,a)||!zl(l,r):!0}function od(e,n,t,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,a),n.state!==e&&cu.enqueueReplaceState(n,n.state,null)}function ua(e,n){var t=n;if("ref"in n){t={};for(var a in n)a!=="ref"&&(t[a]=n[a])}if(e=e.defaultProps){t===n&&(t=M({},t));for(var l in e)t[l]===void 0&&(t[l]=e[l])}return t}function ud(e){Ti(e)}function sd(e){console.error(e)}function cd(e){Ti(e)}function Ii(e,n){try{var t=e.onUncaughtError;t(n.value,{componentStack:n.stack})}catch(a){setTimeout(function(){throw a})}}function fd(e,n,t){try{var a=e.onCaughtError;a(t.value,{componentStack:t.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function fu(e,n,t){return t=zt(t),t.tag=3,t.payload={element:null},t.callback=function(){Ii(e,n)},t}function dd(e){return e=zt(e),e.tag=3,e}function md(e,n,t,a){var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var r=a.value;e.payload=function(){return l(r)},e.callback=function(){fd(n,t,a)}}var c=t.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){fd(n,t,a),typeof l!="function"&&(Tt===null?Tt=new Set([this]):Tt.add(this));var d=a.stack;this.componentDidCatch(a.value,{componentStack:d!==null?d:""})})}function qv(e,n,t,a,l){if(t.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(n=t.alternate,n!==null&&Ca(n,t,l,!0),t=Rn.current,t!==null){switch(t.tag){case 31:case 13:return qn===null?cr():t.alternate===null&&_e===0&&(_e=3),t.flags&=-257,t.flags|=65536,t.lanes=l,a===Hi?t.flags|=16384:(n=t.updateQueue,n===null?t.updateQueue=new Set([a]):n.add(a),Uu(e,a,l)),!1;case 22:return t.flags|=65536,a===Hi?t.flags|=16384:(n=t.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([a])},t.updateQueue=n):(t=n.retryQueue,t===null?n.retryQueue=new Set([a]):t.add(a)),Uu(e,a,l)),!1}throw Error(u(435,t.tag))}return Uu(e,a,l),cr(),!1}if(ue)return n=Rn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,a!==Oo&&(e=Error(u(422),{cause:a}),jl(Cn(e,t)))):(a!==Oo&&(n=Error(u(423),{cause:a}),jl(Cn(n,t))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=Cn(a,t),l=fu(e.stateNode,a,l),Fo(e,l),_e!==4&&(_e=2)),!1;var r=Error(u(520),{cause:a});if(r=Cn(r,t),Zl===null?Zl=[r]:Zl.push(r),_e!==4&&(_e=2),n===null)return!0;a=Cn(a,t),t=n;do{switch(t.tag){case 3:return t.flags|=65536,e=l&-l,t.lanes|=e,e=fu(t.stateNode,a,e),Fo(t,e),!1;case 1:if(n=t.type,r=t.stateNode,(t.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Tt===null||!Tt.has(r))))return t.flags|=65536,l&=-l,t.lanes|=l,l=dd(l),md(l,e,t,a),Fo(t,l),!1}t=t.return}while(t!==null);return!1}var du=Error(u(461)),Ze=!1;function nn(e,n,t,a){n.child=e===null?gf(n,null,t,a):ra(n,e.child,t,a)}function pd(e,n,t,a,l){t=t.render;var r=n.ref;if("ref"in a){var c={};for(var d in a)d!=="ref"&&(c[d]=a[d])}else c=a;return ta(n),a=$o(e,n,t,c,r,l),d=Xo(),e!==null&&!Ze?(Wo(e,n,l),at(e,n,l)):(ue&&d&&Ao(n),n.flags|=1,nn(e,n,a,l),n.child)}function hd(e,n,t,a,l){if(e===null){var r=t.type;return typeof r=="function"&&!jo(r)&&r.defaultProps===void 0&&t.compare===null?(n.tag=15,n.type=r,vd(e,n,r,a,l)):(e=Mi(t.type,null,a,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(r=e.child,!wu(e,l)){var c=r.memoizedProps;if(t=t.compare,t=t!==null?t:zl,t(c,a)&&e.ref===n.ref)return at(e,n,l)}return n.flags|=1,e=Kn(r,a),e.ref=n.ref,e.return=n,n.child=e}function vd(e,n,t,a,l){if(e!==null){var r=e.memoizedProps;if(zl(r,a)&&e.ref===n.ref)if(Ze=!1,n.pendingProps=a=r,wu(e,l))(e.flags&131072)!==0&&(Ze=!0);else return n.lanes=e.lanes,at(e,n,l)}return mu(e,n,t,a,l)}function gd(e,n,t,a){var l=a.children,r=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((n.flags&128)!==0){if(r=r!==null?r.baseLanes|t:t,e!==null){for(a=n.child=e.child,l=0;a!==null;)l=l|a.lanes|a.childLanes,a=a.sibling;a=l&~r}else a=0,n.child=null;return bd(e,n,r,t,a)}if((t&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ni(n,r!==null?r.cachePool:null),r!==null?wf(n,r):Yo(),kf(n);else return a=n.lanes=536870912,bd(e,n,r!==null?r.baseLanes|t:t,t,a)}else r!==null?(Ni(n,r.cachePool),wf(n,r),jt(),n.memoizedState=null):(e!==null&&Ni(n,null),Yo(),jt());return nn(e,n,l,t),n.child}function Nl(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function bd(e,n,t,a,l){var r=No();return r=r===null?null:{parent:Ve._currentValue,pool:r},n.memoizedState={baseLanes:t,cachePool:r},e!==null&&Ni(n,null),Yo(),kf(n),e!==null&&Ca(e,n,a,!0),n.childLanes=l,null}function Pi(e,n){return n=nr({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function yd(e,n,t){return ra(n,e.child,null,t),e=Pi(n,n.pendingProps),e.flags|=2,Sn(n),n.memoizedState=null,e}function Uv(e,n,t){var a=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(ue){if(a.mode==="hidden")return e=Pi(n,a),n.lanes=536870912,Nl(null,e);if(Go(n),(e=xe)?(e=Cm(e,_n),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:gt!==null?{id:Zn,overflow:Gn}:null,retryLane:536870912,hydrationErrors:null},t=nf(e),t.return=n,n.child=t,Pe=n,xe=null)):e=null,e===null)throw yt(n);return n.lanes=536870912,null}return Pi(n,a)}var r=e.memoizedState;if(r!==null){var c=r.dehydrated;if(Go(n),l)if(n.flags&256)n.flags&=-257,n=yd(e,n,t);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(u(558));else if(Ze||Ca(e,n,t,!1),l=(t&e.childLanes)!==0,Ze||l){if(a=Se,a!==null&&(c=uc(a,t),c!==0&&c!==r.retryLane))throw r.retryLane=c,It(e,c),vn(a,e,c),du;cr(),n=yd(e,n,t)}else e=r.treeContext,xe=Un(c.nextSibling),Pe=n,ue=!0,bt=null,_n=!1,e!==null&&lf(n,e),n=Pi(n,a),n.flags|=4096;return n}return e=Kn(e.child,{mode:a.mode,children:a.children}),e.ref=n.ref,n.child=e,e.return=n,e}function er(e,n){var t=n.ref;if(t===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(u(284));(e===null||e.ref!==t)&&(n.flags|=4194816)}}function mu(e,n,t,a,l){return ta(n),t=$o(e,n,t,a,void 0,l),a=Xo(),e!==null&&!Ze?(Wo(e,n,l),at(e,n,l)):(ue&&a&&Ao(n),n.flags|=1,nn(e,n,t,l),n.child)}function wd(e,n,t,a,l,r){return ta(n),n.updateQueue=null,t=Rf(n,a,t,l),zf(e),a=Xo(),e!==null&&!Ze?(Wo(e,n,r),at(e,n,r)):(ue&&a&&Ao(n),n.flags|=1,nn(e,n,t,r),n.child)}function kd(e,n,t,a,l){if(ta(n),n.stateNode===null){var r=Ea,c=t.contextType;typeof c=="object"&&c!==null&&(r=en(c)),r=new t(a,r),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=cu,n.stateNode=r,r._reactInternals=n,r=n.stateNode,r.props=a,r.state=n.memoizedState,r.refs={},Ho(n),c=t.contextType,r.context=typeof c=="object"&&c!==null?en(c):Ea,r.state=n.memoizedState,c=t.getDerivedStateFromProps,typeof c=="function"&&(su(n,t,c,a),r.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(c=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),c!==r.state&&cu.enqueueReplaceState(r,r.state,null),Dl(n,a,r,l),Cl(),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308),a=!0}else if(e===null){r=n.stateNode;var d=n.memoizedProps,p=ua(t,d);r.props=p;var k=r.context,x=t.contextType;c=Ea,typeof x=="object"&&x!==null&&(c=en(x));var O=t.getDerivedStateFromProps;x=typeof O=="function"||typeof r.getSnapshotBeforeUpdate=="function",d=n.pendingProps!==d,x||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(d||k!==c)&&od(n,r,a,c),kt=!1;var R=n.memoizedState;r.state=R,Dl(n,a,r,l),Cl(),k=n.memoizedState,d||R!==k||kt?(typeof O=="function"&&(su(n,t,O,a),k=n.memoizedState),(p=kt||rd(n,t,p,a,R,k,c))?(x||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(n.flags|=4194308)):(typeof r.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=k),r.props=a,r.state=k,r.context=c,a=p):(typeof r.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{r=n.stateNode,Bo(e,n),c=n.memoizedProps,x=ua(t,c),r.props=x,O=n.pendingProps,R=r.context,k=t.contextType,p=Ea,typeof k=="object"&&k!==null&&(p=en(k)),d=t.getDerivedStateFromProps,(k=typeof d=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(c!==O||R!==p)&&od(n,r,a,p),kt=!1,R=n.memoizedState,r.state=R,Dl(n,a,r,l),Cl();var S=n.memoizedState;c!==O||R!==S||kt||e!==null&&e.dependencies!==null&&qi(e.dependencies)?(typeof d=="function"&&(su(n,t,d,a),S=n.memoizedState),(x=kt||rd(n,t,x,a,R,S,p)||e!==null&&e.dependencies!==null&&qi(e.dependencies))?(k||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(a,S,p),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(a,S,p)),typeof r.componentDidUpdate=="function"&&(n.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof r.componentDidUpdate!="function"||c===e.memoizedProps&&R===e.memoizedState||(n.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&R===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=S),r.props=a,r.state=S,r.context=p,a=x):(typeof r.componentDidUpdate!="function"||c===e.memoizedProps&&R===e.memoizedState||(n.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&R===e.memoizedState||(n.flags|=1024),a=!1)}return r=a,er(e,n),a=(n.flags&128)!==0,r||a?(r=n.stateNode,t=a&&typeof t.getDerivedStateFromError!="function"?null:r.render(),n.flags|=1,e!==null&&a?(n.child=ra(n,e.child,null,l),n.child=ra(n,null,t,l)):nn(e,n,t,l),n.memoizedState=r.state,e=n.child):e=at(e,n,l),e}function zd(e,n,t,a){return ea(),n.flags|=256,nn(e,n,t,a),n.child}var pu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hu(e){return{baseLanes:e,cachePool:ff()}}function vu(e,n,t){return e=e!==null?e.childLanes&~t:0,n&&(e|=xn),e}function Rd(e,n,t){var a=n.pendingProps,l=!1,r=(n.flags&128)!==0,c;if((c=r)||(c=e!==null&&e.memoizedState===null?!1:(Ue.current&2)!==0),c&&(l=!0,n.flags&=-129),c=(n.flags&32)!==0,n.flags&=-33,e===null){if(ue){if(l?St(n):jt(),(e=xe)?(e=Cm(e,_n),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:gt!==null?{id:Zn,overflow:Gn}:null,retryLane:536870912,hydrationErrors:null},t=nf(e),t.return=n,n.child=t,Pe=n,xe=null)):e=null,e===null)throw yt(n);return Iu(e)?n.lanes=32:n.lanes=536870912,null}var d=a.children;return a=a.fallback,l?(jt(),l=n.mode,d=nr({mode:"hidden",children:d},l),a=Pt(a,l,t,null),d.return=n,a.return=n,d.sibling=a,n.child=d,a=n.child,a.memoizedState=hu(t),a.childLanes=vu(e,c,t),n.memoizedState=pu,Nl(null,a)):(St(n),gu(n,d))}var p=e.memoizedState;if(p!==null&&(d=p.dehydrated,d!==null)){if(r)n.flags&256?(St(n),n.flags&=-257,n=bu(e,n,t)):n.memoizedState!==null?(jt(),n.child=e.child,n.flags|=128,n=null):(jt(),d=a.fallback,l=n.mode,a=nr({mode:"visible",children:a.children},l),d=Pt(d,l,t,null),d.flags|=2,a.return=n,d.return=n,a.sibling=d,n.child=a,ra(n,e.child,null,t),a=n.child,a.memoizedState=hu(t),a.childLanes=vu(e,c,t),n.memoizedState=pu,n=Nl(null,a));else if(St(n),Iu(d)){if(c=d.nextSibling&&d.nextSibling.dataset,c)var k=c.dgst;c=k,a=Error(u(419)),a.stack="",a.digest=c,jl({value:a,source:null,stack:null}),n=bu(e,n,t)}else if(Ze||Ca(e,n,t,!1),c=(t&e.childLanes)!==0,Ze||c){if(c=Se,c!==null&&(a=uc(c,t),a!==0&&a!==p.retryLane))throw p.retryLane=a,It(e,a),vn(c,e,a),du;Ku(d)||cr(),n=bu(e,n,t)}else Ku(d)?(n.flags|=192,n.child=e.child,n=null):(e=p.treeContext,xe=Un(d.nextSibling),Pe=n,ue=!0,bt=null,_n=!1,e!==null&&lf(n,e),n=gu(n,a.children),n.flags|=4096);return n}return l?(jt(),d=a.fallback,l=n.mode,p=e.child,k=p.sibling,a=Kn(p,{mode:"hidden",children:a.children}),a.subtreeFlags=p.subtreeFlags&65011712,k!==null?d=Kn(k,d):(d=Pt(d,l,t,null),d.flags|=2),d.return=n,a.return=n,a.sibling=d,n.child=a,Nl(null,a),a=n.child,d=e.child.memoizedState,d===null?d=hu(t):(l=d.cachePool,l!==null?(p=Ve._currentValue,l=l.parent!==p?{parent:p,pool:p}:l):l=ff(),d={baseLanes:d.baseLanes|t,cachePool:l}),a.memoizedState=d,a.childLanes=vu(e,c,t),n.memoizedState=pu,Nl(e.child,a)):(St(n),t=e.child,e=t.sibling,t=Kn(t,{mode:"visible",children:a.children}),t.return=n,t.sibling=null,e!==null&&(c=n.deletions,c===null?(n.deletions=[e],n.flags|=16):c.push(e)),n.child=t,n.memoizedState=null,t)}function gu(e,n){return n=nr({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function nr(e,n){return e=zn(22,e,null,n),e.lanes=0,e}function bu(e,n,t){return ra(n,e.child,null,t),e=gu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Sd(e,n,t){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),Mo(e.return,n,t)}function yu(e,n,t,a,l,r){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:l,treeForkCount:r}:(c.isBackwards=n,c.rendering=null,c.renderingStartTime=0,c.last=a,c.tail=t,c.tailMode=l,c.treeForkCount=r)}function jd(e,n,t){var a=n.pendingProps,l=a.revealOrder,r=a.tail;a=a.children;var c=Ue.current,d=(c&2)!==0;if(d?(c=c&1|2,n.flags|=128):c&=1,U(Ue,c),nn(e,n,a,t),a=ue?Sl:0,!d&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sd(e,t,n);else if(e.tag===19)Sd(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&Yi(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),yu(n,!1,l,t,r,a);break;case"backwards":case"unstable_legacy-backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&Yi(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}yu(n,!0,t,null,r,a);break;case"together":yu(n,!1,null,null,void 0,a);break;default:n.memoizedState=null}return n.child}function at(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),At|=n.lanes,(t&n.childLanes)===0)if(e!==null){if(Ca(e,n,t,!1),(t&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(u(153));if(n.child!==null){for(e=n.child,t=Kn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Kn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function wu(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&qi(e)))}function Nv(e,n,t){switch(n.tag){case 3:un(n,n.stateNode.containerInfo),wt(n,Ve,e.memoizedState.cache),ea();break;case 27:case 5:sl(n);break;case 4:un(n,n.stateNode.containerInfo);break;case 10:wt(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Go(n),null;break;case 13:var a=n.memoizedState;if(a!==null)return a.dehydrated!==null?(St(n),n.flags|=128,null):(t&n.child.childLanes)!==0?Rd(e,n,t):(St(n),e=at(e,n,t),e!==null?e.sibling:null);St(n);break;case 19:var l=(e.flags&128)!==0;if(a=(t&n.childLanes)!==0,a||(Ca(e,n,t,!1),a=(t&n.childLanes)!==0),l){if(a)return jd(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),U(Ue,Ue.current),a)break;return null;case 22:return n.lanes=0,gd(e,n,t,n.pendingProps);case 24:wt(n,Ve,e.memoizedState.cache)}return at(e,n,t)}function xd(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps)Ze=!0;else{if(!wu(e,t)&&(n.flags&128)===0)return Ze=!1,Nv(e,n,t);Ze=(e.flags&131072)!==0}else Ze=!1,ue&&(n.flags&1048576)!==0&&af(n,Sl,n.index);switch(n.lanes=0,n.tag){case 16:e:{var a=n.pendingProps;if(e=la(n.elementType),n.type=e,typeof e=="function")jo(e)?(a=ua(e,a),n.tag=1,n=kd(null,n,e,a,t)):(n.tag=0,n=mu(null,n,e,a,t));else{if(e!=null){var l=e.$$typeof;if(l===re){n.tag=11,n=pd(null,n,e,a,t);break e}else if(l===G){n.tag=14,n=hd(null,n,e,a,t);break e}}throw n=Fe(e)||e,Error(u(306,n,""))}}return n;case 0:return mu(e,n,n.type,n.pendingProps,t);case 1:return a=n.type,l=ua(a,n.pendingProps),kd(e,n,a,l,t);case 3:e:{if(un(n,n.stateNode.containerInfo),e===null)throw Error(u(387));a=n.pendingProps;var r=n.memoizedState;l=r.element,Bo(e,n),Dl(n,a,null,t);var c=n.memoizedState;if(a=c.cache,wt(n,Ve,a),a!==r.cache&&_o(n,[Ve],t,!0),Cl(),a=c.element,r.isDehydrated)if(r={element:a,isDehydrated:!1,cache:c.cache},n.updateQueue.baseState=r,n.memoizedState=r,n.flags&256){n=zd(e,n,a,t);break e}else if(a!==l){l=Cn(Error(u(424)),n),jl(l),n=zd(e,n,a,t);break e}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,xe=Un(e.firstChild),Pe=n,ue=!0,bt=null,_n=!0,t=gf(n,null,a,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ea(),a===l){n=at(e,n,t);break e}nn(e,n,a,t)}n=n.child}return n;case 26:return er(e,n),e===null?(t=Nm(n.type,null,n.pendingProps,null))?n.memoizedState=t:ue||(t=n.type,e=n.pendingProps,a=gr(ne.current).createElement(t),a[Ie]=n,a[cn]=e,tn(a,t,e),Je(a),n.stateNode=a):n.memoizedState=Nm(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return sl(n),e===null&&ue&&(a=n.stateNode=_m(n.type,n.pendingProps,ne.current),Pe=n,_n=!0,l=xe,Mt(n.type)?(Pu=l,xe=Un(a.firstChild)):xe=l),nn(e,n,n.pendingProps.children,t),er(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&ue&&((l=a=xe)&&(a=mg(a,n.type,n.pendingProps,_n),a!==null?(n.stateNode=a,Pe=n,xe=Un(a.firstChild),_n=!1,l=!0):l=!1),l||yt(n)),sl(n),l=n.type,r=n.pendingProps,c=e!==null?e.memoizedProps:null,a=r.children,Xu(l,r)?a=null:c!==null&&Xu(l,c)&&(n.flags|=32),n.memoizedState!==null&&(l=$o(e,n,Av,null,null,t),Il._currentValue=l),er(e,n),nn(e,n,a,t),n.child;case 6:return e===null&&ue&&((e=t=xe)&&(t=pg(t,n.pendingProps,_n),t!==null?(n.stateNode=t,Pe=n,xe=null,e=!0):e=!1),e||yt(n)),null;case 13:return Rd(e,n,t);case 4:return un(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=ra(n,null,a,t):nn(e,n,a,t),n.child;case 11:return pd(e,n,n.type,n.pendingProps,t);case 7:return nn(e,n,n.pendingProps,t),n.child;case 8:return nn(e,n,n.pendingProps.children,t),n.child;case 12:return nn(e,n,n.pendingProps.children,t),n.child;case 10:return a=n.pendingProps,wt(n,n.type,a.value),nn(e,n,a.children,t),n.child;case 9:return l=n.type._context,a=n.pendingProps.children,ta(n),l=en(l),a=a(l),n.flags|=1,nn(e,n,a,t),n.child;case 14:return hd(e,n,n.type,n.pendingProps,t);case 15:return vd(e,n,n.type,n.pendingProps,t);case 19:return jd(e,n,t);case 31:return Uv(e,n,t);case 22:return gd(e,n,t,n.pendingProps);case 24:return ta(n),a=en(Ve),e===null?(l=No(),l===null&&(l=Se,r=qo(),l.pooledCache=r,r.refCount++,r!==null&&(l.pooledCacheLanes|=t),l=r),n.memoizedState={parent:a,cache:l},Ho(n),wt(n,Ve,l)):((e.lanes&t)!==0&&(Bo(e,n),Dl(n,null,null,t),Cl()),l=e.memoizedState,r=n.memoizedState,l.parent!==a?(l={parent:a,cache:a},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),wt(n,Ve,a)):(a=r.cache,wt(n,Ve,a),a!==l.cache&&_o(n,[Ve],t,!0))),nn(e,n,n.pendingProps.children,t),n.child;case 29:throw n.pendingProps}throw Error(u(156,n.tag))}function lt(e){e.flags|=4}function ku(e,n,t,a,l){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(Pd())e.flags|=8192;else throw ia=Hi,Lo}else e.flags&=-16777217}function Ed(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Vm(n))if(Pd())e.flags|=8192;else throw ia=Hi,Lo}function tr(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?ic():536870912,e.lanes|=n,Ya|=n)}function Ll(e,n){if(!ue)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Ee(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,a=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=t,n}function Lv(e,n,t){var a=n.pendingProps;switch(To(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(n),null;case 1:return Ee(n),null;case 3:return t=n.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),et(Ve),qe(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(Oa(n)?lt(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Co())),Ee(n),null;case 26:var l=n.type,r=n.memoizedState;return e===null?(lt(n),r!==null?(Ee(n),Ed(n,r)):(Ee(n),ku(n,l,null,a,t))):r?r!==e.memoizedState?(lt(n),Ee(n),Ed(n,r)):(Ee(n),n.flags&=-16777217):(e=e.memoizedProps,e!==a&&lt(n),Ee(n),ku(n,l,e,a,t)),null;case 27:if(mi(n),t=ne.current,l=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==a&&lt(n);else{if(!a){if(n.stateNode===null)throw Error(u(166));return Ee(n),null}e=H.current,Oa(n)?rf(n):(e=_m(l,a,t),n.stateNode=e,lt(n))}return Ee(n),null;case 5:if(mi(n),l=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==a&&lt(n);else{if(!a){if(n.stateNode===null)throw Error(u(166));return Ee(n),null}if(r=H.current,Oa(n))rf(n);else{var c=gr(ne.current);switch(r){case 1:r=c.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:r=c.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":r=c.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":r=c.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":r=c.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof a.is=="string"?c.createElement("select",{is:a.is}):c.createElement("select"),a.multiple?r.multiple=!0:a.size&&(r.size=a.size);break;default:r=typeof a.is=="string"?c.createElement(l,{is:a.is}):c.createElement(l)}}r[Ie]=n,r[cn]=a;e:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)r.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break e;for(;c.sibling===null;){if(c.return===null||c.return===n)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=r;e:switch(tn(r,l,a),l){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&lt(n)}}return Ee(n),ku(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,t),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==a&&lt(n);else{if(typeof a!="string"&&n.stateNode===null)throw Error(u(166));if(e=ne.current,Oa(n)){if(e=n.stateNode,t=n.memoizedProps,a=null,l=Pe,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}e[Ie]=n,e=!!(e.nodeValue===t||a!==null&&a.suppressHydrationWarning===!0||Rm(e.nodeValue,t)),e||yt(n,!0)}else e=gr(e).createTextNode(a),e[Ie]=n,n.stateNode=e}return Ee(n),null;case 31:if(t=n.memoizedState,e===null||e.memoizedState!==null){if(a=Oa(n),t!==null){if(e===null){if(!a)throw Error(u(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[Ie]=n}else ea(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ee(n),e=!1}else t=Co(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return n.flags&256?(Sn(n),n):(Sn(n),null);if((n.flags&128)!==0)throw Error(u(558))}return Ee(n),null;case 13:if(a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Oa(n),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(u(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(u(317));l[Ie]=n}else ea(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ee(n),l=!1}else l=Co(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(Sn(n),n):(Sn(n),null)}return Sn(n),(n.flags&128)!==0?(n.lanes=t,n):(t=a!==null,e=e!==null&&e.memoizedState!==null,t&&(a=n.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool),r=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(r=a.memoizedState.cachePool.pool),r!==l&&(a.flags|=2048)),t!==e&&t&&(n.child.flags|=8192),tr(n,n.updateQueue),Ee(n),null);case 4:return qe(),e===null&&Yu(n.stateNode.containerInfo),Ee(n),null;case 10:return et(n.type),Ee(n),null;case 19:if(C(Ue),a=n.memoizedState,a===null)return Ee(n),null;if(l=(n.flags&128)!==0,r=a.rendering,r===null)if(l)Ll(a,!1);else{if(_e!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(r=Yi(e),r!==null){for(n.flags|=128,Ll(a,!1),e=r.updateQueue,n.updateQueue=e,tr(n,e),n.subtreeFlags=0,e=t,t=n.child;t!==null;)ef(t,e),t=t.sibling;return U(Ue,Ue.current&1|2),ue&&In(n,a.treeForkCount),n.child}e=e.sibling}a.tail!==null&&bn()>or&&(n.flags|=128,l=!0,Ll(a,!1),n.lanes=4194304)}else{if(!l)if(e=Yi(r),e!==null){if(n.flags|=128,l=!0,e=e.updateQueue,n.updateQueue=e,tr(n,e),Ll(a,!0),a.tail===null&&a.tailMode==="hidden"&&!r.alternate&&!ue)return Ee(n),null}else 2*bn()-a.renderingStartTime>or&&t!==536870912&&(n.flags|=128,l=!0,Ll(a,!1),n.lanes=4194304);a.isBackwards?(r.sibling=n.child,n.child=r):(e=a.last,e!==null?e.sibling=r:n.child=r,a.last=r)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=bn(),e.sibling=null,t=Ue.current,U(Ue,l?t&1|2:t&1),ue&&In(n,a.treeForkCount),e):(Ee(n),null);case 22:case 23:return Sn(n),Zo(),a=n.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(n.flags|=8192):a&&(n.flags|=8192),a?(t&536870912)!==0&&(n.flags&128)===0&&(Ee(n),n.subtreeFlags&6&&(n.flags|=8192)):Ee(n),t=n.updateQueue,t!==null&&tr(n,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),a=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),a!==t&&(n.flags|=2048),e!==null&&C(aa),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),n.memoizedState.cache!==t&&(n.flags|=2048),et(Ve),Ee(n),null;case 25:return null;case 30:return null}throw Error(u(156,n.tag))}function Hv(e,n){switch(To(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return et(Ve),qe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return mi(n),null;case 31:if(n.memoizedState!==null){if(Sn(n),n.alternate===null)throw Error(u(340));ea()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Sn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(u(340));ea()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return C(Ue),null;case 4:return qe(),null;case 10:return et(n.type),null;case 22:case 23:return Sn(n),Zo(),e!==null&&C(aa),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return et(Ve),null;case 25:return null;default:return null}}function Ad(e,n){switch(To(n),n.tag){case 3:et(Ve),qe();break;case 26:case 27:case 5:mi(n);break;case 4:qe();break;case 31:n.memoizedState!==null&&Sn(n);break;case 13:Sn(n);break;case 19:C(Ue);break;case 10:et(n.type);break;case 22:case 23:Sn(n),Zo(),e!==null&&C(aa);break;case 24:et(Ve)}}function Hl(e,n){try{var t=n.updateQueue,a=t!==null?t.lastEffect:null;if(a!==null){var l=a.next;t=l;do{if((t.tag&e)===e){a=void 0;var r=t.create,c=t.inst;a=r(),c.destroy=a}t=t.next}while(t!==l)}}catch(d){he(n,n.return,d)}}function xt(e,n,t){try{var a=n.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var r=l.next;a=r;do{if((a.tag&e)===e){var c=a.inst,d=c.destroy;if(d!==void 0){c.destroy=void 0,l=n;var p=t,k=d;try{k()}catch(x){he(l,p,x)}}}a=a.next}while(a!==r)}}catch(x){he(n,n.return,x)}}function Td(e){var n=e.updateQueue;if(n!==null){var t=e.stateNode;try{yf(n,t)}catch(a){he(e,e.return,a)}}}function Od(e,n,t){t.props=ua(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(a){he(e,n,a)}}function Bl(e,n){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof t=="function"?e.refCleanup=t(a):t.current=a}}catch(l){he(e,n,l)}}function Qn(e,n){var t=e.ref,a=e.refCleanup;if(t!==null)if(typeof a=="function")try{a()}catch(l){he(e,n,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(l){he(e,n,l)}else t.current=null}function Cd(e){var n=e.type,t=e.memoizedProps,a=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":t.autoFocus&&a.focus();break e;case"img":t.src?a.src=t.src:t.srcSet&&(a.srcset=t.srcSet)}}catch(l){he(e,e.return,l)}}function zu(e,n,t){try{var a=e.stateNode;og(a,e.type,t,n),a[cn]=n}catch(l){he(e,e.return,l)}}function Dd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Mt(e.type)||e.tag===4}function Ru(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Dd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Mt(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Su(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,n):(n=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.appendChild(e),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Wn));else if(a!==4&&(a===27&&Mt(e.type)&&(t=e.stateNode,n=null),e=e.child,e!==null))for(Su(e,n,t),e=e.sibling;e!==null;)Su(e,n,t),e=e.sibling}function ar(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(a!==4&&(a===27&&Mt(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(ar(e,n,t),e=e.sibling;e!==null;)ar(e,n,t),e=e.sibling}function Md(e){var n=e.stateNode,t=e.memoizedProps;try{for(var a=e.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);tn(n,a,t),n[Ie]=e,n[cn]=t}catch(r){he(e,e.return,r)}}var it=!1,Ge=!1,ju=!1,_d=typeof WeakSet=="function"?WeakSet:Set,Ke=null;function Bv(e,n){if(e=e.containerInfo,Qu=Sr,e=Gc(e),bo(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var l=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{t.nodeType,r.nodeType}catch{t=null;break e}var c=0,d=-1,p=-1,k=0,x=0,O=e,R=null;n:for(;;){for(var S;O!==t||l!==0&&O.nodeType!==3||(d=c+l),O!==r||a!==0&&O.nodeType!==3||(p=c+a),O.nodeType===3&&(c+=O.nodeValue.length),(S=O.firstChild)!==null;)R=O,O=S;for(;;){if(O===e)break n;if(R===t&&++k===l&&(d=c),R===r&&++x===a&&(p=c),(S=O.nextSibling)!==null)break;O=R,R=O.parentNode}O=S}t=d===-1||p===-1?null:{start:d,end:p}}else t=null}t=t||{start:0,end:0}}else t=null;for($u={focusedElem:e,selectionRange:t},Sr=!1,Ke=n;Ke!==null;)if(n=Ke,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Ke=e;else for(;Ke!==null;){switch(n=Ke,r=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)l=e[t],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,t=n,l=r.memoizedProps,r=r.memoizedState,a=t.stateNode;try{var L=ua(t.type,l);e=a.getSnapshotBeforeUpdate(L,r),a.__reactInternalSnapshotBeforeUpdate=e}catch(Y){he(t,t.return,Y)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,t=e.nodeType,t===9)Ju(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ju(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=n.sibling,e!==null){e.return=n.return,Ke=e;break}Ke=n.return}}function qd(e,n,t){var a=t.flags;switch(t.tag){case 0:case 11:case 15:ot(e,t),a&4&&Hl(5,t);break;case 1:if(ot(e,t),a&4)if(e=t.stateNode,n===null)try{e.componentDidMount()}catch(c){he(t,t.return,c)}else{var l=ua(t.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(l,n,e.__reactInternalSnapshotBeforeUpdate)}catch(c){he(t,t.return,c)}}a&64&&Td(t),a&512&&Bl(t,t.return);break;case 3:if(ot(e,t),a&64&&(e=t.updateQueue,e!==null)){if(n=null,t.child!==null)switch(t.child.tag){case 27:case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}try{yf(e,n)}catch(c){he(t,t.return,c)}}break;case 27:n===null&&a&4&&Md(t);case 26:case 5:ot(e,t),n===null&&a&4&&Cd(t),a&512&&Bl(t,t.return);break;case 12:ot(e,t);break;case 31:ot(e,t),a&4&&Ld(e,t);break;case 13:ot(e,t),a&4&&Hd(e,t),a&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=Wv.bind(null,t),hg(e,t))));break;case 22:if(a=t.memoizedState!==null||it,!a){n=n!==null&&n.memoizedState!==null||Ge,l=it;var r=Ge;it=a,(Ge=n)&&!r?ut(e,t,(t.subtreeFlags&8772)!==0):ot(e,t),it=l,Ge=r}break;case 30:break;default:ot(e,t)}}function Ud(e){var n=e.alternate;n!==null&&(e.alternate=null,Ud(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&eo(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Te=null,dn=!1;function rt(e,n,t){for(t=t.child;t!==null;)Nd(e,n,t),t=t.sibling}function Nd(e,n,t){if(yn&&typeof yn.onCommitFiberUnmount=="function")try{yn.onCommitFiberUnmount(cl,t)}catch{}switch(t.tag){case 26:Ge||Qn(t,n),rt(e,n,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:Ge||Qn(t,n);var a=Te,l=dn;Mt(t.type)&&(Te=t.stateNode,dn=!1),rt(e,n,t),Wl(t.stateNode),Te=a,dn=l;break;case 5:Ge||Qn(t,n);case 6:if(a=Te,l=dn,Te=null,rt(e,n,t),Te=a,dn=l,Te!==null)if(dn)try{(Te.nodeType===9?Te.body:Te.nodeName==="HTML"?Te.ownerDocument.body:Te).removeChild(t.stateNode)}catch(r){he(t,n,r)}else try{Te.removeChild(t.stateNode)}catch(r){he(t,n,r)}break;case 18:Te!==null&&(dn?(e=Te,Tm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),Ka(e)):Tm(Te,t.stateNode));break;case 4:a=Te,l=dn,Te=t.stateNode.containerInfo,dn=!0,rt(e,n,t),Te=a,dn=l;break;case 0:case 11:case 14:case 15:xt(2,t,n),Ge||xt(4,t,n),rt(e,n,t);break;case 1:Ge||(Qn(t,n),a=t.stateNode,typeof a.componentWillUnmount=="function"&&Od(t,n,a)),rt(e,n,t);break;case 21:rt(e,n,t);break;case 22:Ge=(a=Ge)||t.memoizedState!==null,rt(e,n,t),Ge=a;break;default:rt(e,n,t)}}function Ld(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ka(e)}catch(t){he(n,n.return,t)}}}function Hd(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ka(e)}catch(t){he(n,n.return,t)}}function Fv(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new _d),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new _d),n;default:throw Error(u(435,e.tag))}}function lr(e,n){var t=Fv(e);n.forEach(function(a){if(!t.has(a)){t.add(a);var l=Jv.bind(null,e,a);a.then(l,l)}})}function mn(e,n){var t=n.deletions;if(t!==null)for(var a=0;a<t.length;a++){var l=t[a],r=e,c=n,d=c;e:for(;d!==null;){switch(d.tag){case 27:if(Mt(d.type)){Te=d.stateNode,dn=!1;break e}break;case 5:Te=d.stateNode,dn=!1;break e;case 3:case 4:Te=d.stateNode.containerInfo,dn=!0;break e}d=d.return}if(Te===null)throw Error(u(160));Nd(r,c,l),Te=null,dn=!1,r=l.alternate,r!==null&&(r.return=null),l.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Bd(n,e),n=n.sibling}var Fn=null;function Bd(e,n){var t=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:mn(n,e),pn(e),a&4&&(xt(3,e,e.return),Hl(3,e),xt(5,e,e.return));break;case 1:mn(n,e),pn(e),a&512&&(Ge||t===null||Qn(t,t.return)),a&64&&it&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?a:t.concat(a))));break;case 26:var l=Fn;if(mn(n,e),pn(e),a&512&&(Ge||t===null||Qn(t,t.return)),a&4){var r=t!==null?t.memoizedState:null;if(a=e.memoizedState,t===null)if(a===null)if(e.stateNode===null){e:{a=e.type,t=e.memoizedProps,l=l.ownerDocument||l;n:switch(a){case"title":r=l.getElementsByTagName("title")[0],(!r||r[ml]||r[Ie]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(a),l.head.insertBefore(r,l.querySelector("head > title"))),tn(r,a,t),r[Ie]=e,Je(r),a=r;break e;case"link":var c=Bm("link","href",l).get(a+(t.href||""));if(c){for(var d=0;d<c.length;d++)if(r=c[d],r.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&r.getAttribute("rel")===(t.rel==null?null:t.rel)&&r.getAttribute("title")===(t.title==null?null:t.title)&&r.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){c.splice(d,1);break n}}r=l.createElement(a),tn(r,a,t),l.head.appendChild(r);break;case"meta":if(c=Bm("meta","content",l).get(a+(t.content||""))){for(d=0;d<c.length;d++)if(r=c[d],r.getAttribute("content")===(t.content==null?null:""+t.content)&&r.getAttribute("name")===(t.name==null?null:t.name)&&r.getAttribute("property")===(t.property==null?null:t.property)&&r.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&r.getAttribute("charset")===(t.charSet==null?null:t.charSet)){c.splice(d,1);break n}}r=l.createElement(a),tn(r,a,t),l.head.appendChild(r);break;default:throw Error(u(468,a))}r[Ie]=e,Je(r),a=r}e.stateNode=a}else Fm(l,e.type,e.stateNode);else e.stateNode=Hm(l,a,e.memoizedProps);else r!==a?(r===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):r.count--,a===null?Fm(l,e.type,e.stateNode):Hm(l,a,e.memoizedProps)):a===null&&e.stateNode!==null&&zu(e,e.memoizedProps,t.memoizedProps)}break;case 27:mn(n,e),pn(e),a&512&&(Ge||t===null||Qn(t,t.return)),t!==null&&a&4&&zu(e,e.memoizedProps,t.memoizedProps);break;case 5:if(mn(n,e),pn(e),a&512&&(Ge||t===null||Qn(t,t.return)),e.flags&32){l=e.stateNode;try{wa(l,"")}catch(L){he(e,e.return,L)}}a&4&&e.stateNode!=null&&(l=e.memoizedProps,zu(e,l,t!==null?t.memoizedProps:l)),a&1024&&(ju=!0);break;case 6:if(mn(n,e),pn(e),a&4){if(e.stateNode===null)throw Error(u(162));a=e.memoizedProps,t=e.stateNode;try{t.nodeValue=a}catch(L){he(e,e.return,L)}}break;case 3:if(wr=null,l=Fn,Fn=br(n.containerInfo),mn(n,e),Fn=l,pn(e),a&4&&t!==null&&t.memoizedState.isDehydrated)try{Ka(n.containerInfo)}catch(L){he(e,e.return,L)}ju&&(ju=!1,Fd(e));break;case 4:a=Fn,Fn=br(e.stateNode.containerInfo),mn(n,e),pn(e),Fn=a;break;case 12:mn(n,e),pn(e);break;case 31:mn(n,e),pn(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,lr(e,a)));break;case 13:mn(n,e),pn(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(rr=bn()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,lr(e,a)));break;case 22:l=e.memoizedState!==null;var p=t!==null&&t.memoizedState!==null,k=it,x=Ge;if(it=k||l,Ge=x||p,mn(n,e),Ge=x,it=k,pn(e),a&8192)e:for(n=e.stateNode,n._visibility=l?n._visibility&-2:n._visibility|1,l&&(t===null||p||it||Ge||sa(e)),t=null,n=e;;){if(n.tag===5||n.tag===26){if(t===null){p=t=n;try{if(r=p.stateNode,l)c=r.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{d=p.stateNode;var O=p.memoizedProps.style,R=O!=null&&O.hasOwnProperty("display")?O.display:null;d.style.display=R==null||typeof R=="boolean"?"":(""+R).trim()}}catch(L){he(p,p.return,L)}}}else if(n.tag===6){if(t===null){p=n;try{p.stateNode.nodeValue=l?"":p.memoizedProps}catch(L){he(p,p.return,L)}}}else if(n.tag===18){if(t===null){p=n;try{var S=p.stateNode;l?Om(S,!0):Om(p.stateNode,!1)}catch(L){he(p,p.return,L)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;t===n&&(t=null),n=n.return}t===n&&(t=null),n.sibling.return=n.return,n=n.sibling}a&4&&(a=e.updateQueue,a!==null&&(t=a.retryQueue,t!==null&&(a.retryQueue=null,lr(e,t))));break;case 19:mn(n,e),pn(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,lr(e,a)));break;case 30:break;case 21:break;default:mn(n,e),pn(e)}}function pn(e){var n=e.flags;if(n&2){try{for(var t,a=e.return;a!==null;){if(Dd(a)){t=a;break}a=a.return}if(t==null)throw Error(u(160));switch(t.tag){case 27:var l=t.stateNode,r=Ru(e);ar(e,r,l);break;case 5:var c=t.stateNode;t.flags&32&&(wa(c,""),t.flags&=-33);var d=Ru(e);ar(e,d,c);break;case 3:case 4:var p=t.stateNode.containerInfo,k=Ru(e);Su(e,k,p);break;default:throw Error(u(161))}}catch(x){he(e,e.return,x)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Fd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Fd(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ot(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)qd(e,n.alternate,n),n=n.sibling}function sa(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:xt(4,n,n.return),sa(n);break;case 1:Qn(n,n.return);var t=n.stateNode;typeof t.componentWillUnmount=="function"&&Od(n,n.return,t),sa(n);break;case 27:Wl(n.stateNode);case 26:case 5:Qn(n,n.return),sa(n);break;case 22:n.memoizedState===null&&sa(n);break;case 30:sa(n);break;default:sa(n)}e=e.sibling}}function ut(e,n,t){for(t=t&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var a=n.alternate,l=e,r=n,c=r.flags;switch(r.tag){case 0:case 11:case 15:ut(l,r,t),Hl(4,r);break;case 1:if(ut(l,r,t),a=r,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(k){he(a,a.return,k)}if(a=r,l=a.updateQueue,l!==null){var d=a.stateNode;try{var p=l.shared.hiddenCallbacks;if(p!==null)for(l.shared.hiddenCallbacks=null,l=0;l<p.length;l++)bf(p[l],d)}catch(k){he(a,a.return,k)}}t&&c&64&&Td(r),Bl(r,r.return);break;case 27:Md(r);case 26:case 5:ut(l,r,t),t&&a===null&&c&4&&Cd(r),Bl(r,r.return);break;case 12:ut(l,r,t);break;case 31:ut(l,r,t),t&&c&4&&Ld(l,r);break;case 13:ut(l,r,t),t&&c&4&&Hd(l,r);break;case 22:r.memoizedState===null&&ut(l,r,t),Bl(r,r.return);break;case 30:break;default:ut(l,r,t)}n=n.sibling}}function xu(e,n){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&xl(t))}function Eu(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&xl(e))}function Vn(e,n,t,a){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Vd(e,n,t,a),n=n.sibling}function Vd(e,n,t,a){var l=n.flags;switch(n.tag){case 0:case 11:case 15:Vn(e,n,t,a),l&2048&&Hl(9,n);break;case 1:Vn(e,n,t,a);break;case 3:Vn(e,n,t,a),l&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&xl(e)));break;case 12:if(l&2048){Vn(e,n,t,a),e=n.stateNode;try{var r=n.memoizedProps,c=r.id,d=r.onPostCommit;typeof d=="function"&&d(c,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(p){he(n,n.return,p)}}else Vn(e,n,t,a);break;case 31:Vn(e,n,t,a);break;case 13:Vn(e,n,t,a);break;case 23:break;case 22:r=n.stateNode,c=n.alternate,n.memoizedState!==null?r._visibility&2?Vn(e,n,t,a):Fl(e,n):r._visibility&2?Vn(e,n,t,a):(r._visibility|=2,Ba(e,n,t,a,(n.subtreeFlags&10256)!==0||!1)),l&2048&&xu(c,n);break;case 24:Vn(e,n,t,a),l&2048&&Eu(n.alternate,n);break;default:Vn(e,n,t,a)}}function Ba(e,n,t,a,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var r=e,c=n,d=t,p=a,k=c.flags;switch(c.tag){case 0:case 11:case 15:Ba(r,c,d,p,l),Hl(8,c);break;case 23:break;case 22:var x=c.stateNode;c.memoizedState!==null?x._visibility&2?Ba(r,c,d,p,l):Fl(r,c):(x._visibility|=2,Ba(r,c,d,p,l)),l&&k&2048&&xu(c.alternate,c);break;case 24:Ba(r,c,d,p,l),l&&k&2048&&Eu(c.alternate,c);break;default:Ba(r,c,d,p,l)}n=n.sibling}}function Fl(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var t=e,a=n,l=a.flags;switch(a.tag){case 22:Fl(t,a),l&2048&&xu(a.alternate,a);break;case 24:Fl(t,a),l&2048&&Eu(a.alternate,a);break;default:Fl(t,a)}n=n.sibling}}var Vl=8192;function Fa(e,n,t){if(e.subtreeFlags&Vl)for(e=e.child;e!==null;)Yd(e,n,t),e=e.sibling}function Yd(e,n,t){switch(e.tag){case 26:Fa(e,n,t),e.flags&Vl&&e.memoizedState!==null&&Eg(t,Fn,e.memoizedState,e.memoizedProps);break;case 5:Fa(e,n,t);break;case 3:case 4:var a=Fn;Fn=br(e.stateNode.containerInfo),Fa(e,n,t),Fn=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Vl,Vl=16777216,Fa(e,n,t),Vl=a):Fa(e,n,t));break;default:Fa(e,n,t)}}function Zd(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Yl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];Ke=a,Qd(a,e)}Zd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Gd(e),e=e.sibling}function Gd(e){switch(e.tag){case 0:case 11:case 15:Yl(e),e.flags&2048&&xt(9,e,e.return);break;case 3:Yl(e);break;case 12:Yl(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,ir(e)):Yl(e);break;default:Yl(e)}}function ir(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];Ke=a,Qd(a,e)}Zd(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:xt(8,n,n.return),ir(n);break;case 22:t=n.stateNode,t._visibility&2&&(t._visibility&=-3,ir(n));break;default:ir(n)}e=e.sibling}}function Qd(e,n){for(;Ke!==null;){var t=Ke;switch(t.tag){case 0:case 11:case 15:xt(8,t,n);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var a=t.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:xl(t.memoizedState.cache)}if(a=t.child,a!==null)a.return=t,Ke=a;else e:for(t=e;Ke!==null;){a=Ke;var l=a.sibling,r=a.return;if(Ud(a),a===t){Ke=null;break e}if(l!==null){l.return=r,Ke=l;break e}Ke=r}}}var Vv={getCacheForType:function(e){var n=en(Ve),t=n.data.get(e);return t===void 0&&(t=e(),n.data.set(e,t)),t},cacheSignal:function(){return en(Ve).controller.signal}},Yv=typeof WeakMap=="function"?WeakMap:Map,fe=0,Se=null,te=null,le=0,pe=0,jn=null,Et=!1,Va=!1,Au=!1,st=0,_e=0,At=0,ca=0,Tu=0,xn=0,Ya=0,Zl=null,hn=null,Ou=!1,rr=0,$d=0,or=1/0,ur=null,Tt=null,Xe=0,Ot=null,Za=null,ct=0,Cu=0,Du=null,Xd=null,Gl=0,Mu=null;function En(){return(fe&2)!==0&&le!==0?le&-le:E.T!==null?Hu():sc()}function Wd(){if(xn===0)if((le&536870912)===0||ue){var e=vi;vi<<=1,(vi&3932160)===0&&(vi=262144),xn=e}else xn=536870912;return e=Rn.current,e!==null&&(e.flags|=32),xn}function vn(e,n,t){(e===Se&&(pe===2||pe===9)||e.cancelPendingCommit!==null)&&(Ga(e,0),Ct(e,le,xn,!1)),dl(e,t),((fe&2)===0||e!==Se)&&(e===Se&&((fe&2)===0&&(ca|=t),_e===4&&Ct(e,le,xn,!1)),$n(e))}function Jd(e,n,t){if((fe&6)!==0)throw Error(u(327));var a=!t&&(n&127)===0&&(n&e.expiredLanes)===0||fl(e,n),l=a?Qv(e,n):qu(e,n,!0),r=a;do{if(l===0){Va&&!a&&Ct(e,n,0,!1);break}else{if(t=e.current.alternate,r&&!Zv(t)){l=qu(e,n,!1),r=!1;continue}if(l===2){if(r=n,e.errorRecoveryDisabledLanes&r)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){n=c;e:{var d=e;l=Zl;var p=d.current.memoizedState.isDehydrated;if(p&&(Ga(d,c).flags|=256),c=qu(d,c,!1),c!==2){if(Au&&!p){d.errorRecoveryDisabledLanes|=r,ca|=r,l=4;break e}r=hn,hn=l,r!==null&&(hn===null?hn=r:hn.push.apply(hn,r))}l=c}if(r=!1,l!==2)continue}}if(l===1){Ga(e,0),Ct(e,n,0,!0);break}e:{switch(a=e,r=l,r){case 0:case 1:throw Error(u(345));case 4:if((n&4194048)!==n)break;case 6:Ct(a,n,xn,!Et);break e;case 2:hn=null;break;case 3:case 5:break;default:throw Error(u(329))}if((n&62914560)===n&&(l=rr+300-bn(),10<l)){if(Ct(a,n,xn,!Et),bi(a,0,!0)!==0)break e;ct=n,a.timeoutHandle=Em(Kd.bind(null,a,t,hn,ur,Ou,n,xn,ca,Ya,Et,r,"Throttled",-0,0),l);break e}Kd(a,t,hn,ur,Ou,n,xn,ca,Ya,Et,r,null,-0,0)}}break}while(!0);$n(e)}function Kd(e,n,t,a,l,r,c,d,p,k,x,O,R,S){if(e.timeoutHandle=-1,O=n.subtreeFlags,O&8192||(O&16785408)===16785408){O={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Wn},Yd(n,r,O);var L=(r&62914560)===r?rr-bn():(r&4194048)===r?$d-bn():0;if(L=Ag(O,L),L!==null){ct=r,e.cancelPendingCommit=L(im.bind(null,e,n,r,t,a,l,c,d,p,x,O,null,R,S)),Ct(e,r,c,!k);return}}im(e,n,r,t,a,l,c,d,p)}function Zv(e){for(var n=e;;){var t=n.tag;if((t===0||t===11||t===15)&&n.flags&16384&&(t=n.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var a=0;a<t.length;a++){var l=t[a],r=l.getSnapshot;l=l.value;try{if(!kn(r(),l))return!1}catch{return!1}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ct(e,n,t,a){n&=~Tu,n&=~ca,e.suspendedLanes|=n,e.pingedLanes&=~n,a&&(e.warmLanes|=n),a=e.expirationTimes;for(var l=n;0<l;){var r=31-wn(l),c=1<<r;a[r]=-1,l&=~c}t!==0&&rc(e,t,n)}function sr(){return(fe&6)===0?(Ql(0),!1):!0}function _u(){if(te!==null){if(pe===0)var e=te.return;else e=te,Pn=na=null,Jo(e),qa=null,Al=0,e=te;for(;e!==null;)Ad(e.alternate,e),e=e.return;te=null}}function Ga(e,n){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,cg(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),ct=0,_u(),Se=e,te=t=Kn(e.current,null),le=n,pe=0,jn=null,Et=!1,Va=fl(e,n),Au=!1,Ya=xn=Tu=ca=At=_e=0,hn=Zl=null,Ou=!1,(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var l=31-wn(a),r=1<<l;n|=e[l],a&=~r}return st=n,Oi(),t}function Id(e,n){J=null,E.H=Ul,n===_a||n===Li?(n=pf(),pe=3):n===Lo?(n=pf(),pe=4):pe=n===du?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,jn=n,te===null&&(_e=1,Ii(e,Cn(n,e.current)))}function Pd(){var e=Rn.current;return e===null?!0:(le&4194048)===le?qn===null:(le&62914560)===le||(le&536870912)!==0?e===qn:!1}function em(){var e=E.H;return E.H=Ul,e===null?Ul:e}function nm(){var e=E.A;return E.A=Vv,e}function cr(){_e=4,Et||(le&4194048)!==le&&Rn.current!==null||(Va=!0),(At&134217727)===0&&(ca&134217727)===0||Se===null||Ct(Se,le,xn,!1)}function qu(e,n,t){var a=fe;fe|=2;var l=em(),r=nm();(Se!==e||le!==n)&&(ur=null,Ga(e,n)),n=!1;var c=_e;e:do try{if(pe!==0&&te!==null){var d=te,p=jn;switch(pe){case 8:_u(),c=6;break e;case 3:case 2:case 9:case 6:Rn.current===null&&(n=!0);var k=pe;if(pe=0,jn=null,Qa(e,d,p,k),t&&Va){c=0;break e}break;default:k=pe,pe=0,jn=null,Qa(e,d,p,k)}}Gv(),c=_e;break}catch(x){Id(e,x)}while(!0);return n&&e.shellSuspendCounter++,Pn=na=null,fe=a,E.H=l,E.A=r,te===null&&(Se=null,le=0,Oi()),c}function Gv(){for(;te!==null;)tm(te)}function Qv(e,n){var t=fe;fe|=2;var a=em(),l=nm();Se!==e||le!==n?(ur=null,or=bn()+500,Ga(e,n)):Va=fl(e,n);e:do try{if(pe!==0&&te!==null){n=te;var r=jn;n:switch(pe){case 1:pe=0,jn=null,Qa(e,n,r,1);break;case 2:case 9:if(df(r)){pe=0,jn=null,am(n);break}n=function(){pe!==2&&pe!==9||Se!==e||(pe=7),$n(e)},r.then(n,n);break e;case 3:pe=7;break e;case 4:pe=5;break e;case 7:df(r)?(pe=0,jn=null,am(n)):(pe=0,jn=null,Qa(e,n,r,7));break;case 5:var c=null;switch(te.tag){case 26:c=te.memoizedState;case 5:case 27:var d=te;if(c?Vm(c):d.stateNode.complete){pe=0,jn=null;var p=d.sibling;if(p!==null)te=p;else{var k=d.return;k!==null?(te=k,fr(k)):te=null}break n}}pe=0,jn=null,Qa(e,n,r,5);break;case 6:pe=0,jn=null,Qa(e,n,r,6);break;case 8:_u(),_e=6;break e;default:throw Error(u(462))}}$v();break}catch(x){Id(e,x)}while(!0);return Pn=na=null,E.H=a,E.A=l,fe=t,te!==null?0:(Se=null,le=0,Oi(),_e)}function $v(){for(;te!==null&&!vh();)tm(te)}function tm(e){var n=xd(e.alternate,e,st);e.memoizedProps=e.pendingProps,n===null?fr(e):te=n}function am(e){var n=e,t=n.alternate;switch(n.tag){case 15:case 0:n=wd(t,n,n.pendingProps,n.type,void 0,le);break;case 11:n=wd(t,n,n.pendingProps,n.type.render,n.ref,le);break;case 5:Jo(n);default:Ad(t,n),n=te=ef(n,st),n=xd(t,n,st)}e.memoizedProps=e.pendingProps,n===null?fr(e):te=n}function Qa(e,n,t,a){Pn=na=null,Jo(n),qa=null,Al=0;var l=n.return;try{if(qv(e,l,n,t,le)){_e=1,Ii(e,Cn(t,e.current)),te=null;return}}catch(r){if(l!==null)throw te=l,r;_e=1,Ii(e,Cn(t,e.current)),te=null;return}n.flags&32768?(ue||a===1?e=!0:Va||(le&536870912)!==0?e=!1:(Et=e=!0,(a===2||a===9||a===3||a===6)&&(a=Rn.current,a!==null&&a.tag===13&&(a.flags|=16384))),lm(n,e)):fr(n)}function fr(e){var n=e;do{if((n.flags&32768)!==0){lm(n,Et);return}e=n.return;var t=Lv(n.alternate,n,st);if(t!==null){te=t;return}if(n=n.sibling,n!==null){te=n;return}te=n=e}while(n!==null);_e===0&&(_e=5)}function lm(e,n){do{var t=Hv(e.alternate,e);if(t!==null){t.flags&=32767,te=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!n&&(e=e.sibling,e!==null)){te=e;return}te=e=t}while(e!==null);_e=6,te=null}function im(e,n,t,a,l,r,c,d,p){e.cancelPendingCommit=null;do dr();while(Xe!==0);if((fe&6)!==0)throw Error(u(327));if(n!==null){if(n===e.current)throw Error(u(177));if(r=n.lanes|n.childLanes,r|=Ro,xh(e,t,r,c,d,p),e===Se&&(te=Se=null,le=0),Za=n,Ot=e,ct=t,Cu=r,Du=l,Xd=a,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Kv(pi,function(){return cm(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||a){a=E.T,E.T=null,l=q.p,q.p=2,c=fe,fe|=4;try{Bv(e,n,t)}finally{fe=c,q.p=l,E.T=a}}Xe=1,rm(),om(),um()}}function rm(){if(Xe===1){Xe=0;var e=Ot,n=Za,t=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||t){t=E.T,E.T=null;var a=q.p;q.p=2;var l=fe;fe|=4;try{Bd(n,e);var r=$u,c=Gc(e.containerInfo),d=r.focusedElem,p=r.selectionRange;if(c!==d&&d&&d.ownerDocument&&Zc(d.ownerDocument.documentElement,d)){if(p!==null&&bo(d)){var k=p.start,x=p.end;if(x===void 0&&(x=k),"selectionStart"in d)d.selectionStart=k,d.selectionEnd=Math.min(x,d.value.length);else{var O=d.ownerDocument||document,R=O&&O.defaultView||window;if(R.getSelection){var S=R.getSelection(),L=d.textContent.length,Y=Math.min(p.start,L),ke=p.end===void 0?Y:Math.min(p.end,L);!S.extend&&Y>ke&&(c=ke,ke=Y,Y=c);var b=Yc(d,Y),h=Yc(d,ke);if(b&&h&&(S.rangeCount!==1||S.anchorNode!==b.node||S.anchorOffset!==b.offset||S.focusNode!==h.node||S.focusOffset!==h.offset)){var w=O.createRange();w.setStart(b.node,b.offset),S.removeAllRanges(),Y>ke?(S.addRange(w),S.extend(h.node,h.offset)):(w.setEnd(h.node,h.offset),S.addRange(w))}}}}for(O=[],S=d;S=S.parentNode;)S.nodeType===1&&O.push({element:S,left:S.scrollLeft,top:S.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<O.length;d++){var A=O[d];A.element.scrollLeft=A.left,A.element.scrollTop=A.top}}Sr=!!Qu,$u=Qu=null}finally{fe=l,q.p=a,E.T=t}}e.current=n,Xe=2}}function om(){if(Xe===2){Xe=0;var e=Ot,n=Za,t=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||t){t=E.T,E.T=null;var a=q.p;q.p=2;var l=fe;fe|=4;try{qd(e,n.alternate,n)}finally{fe=l,q.p=a,E.T=t}}Xe=3}}function um(){if(Xe===4||Xe===3){Xe=0,gh();var e=Ot,n=Za,t=ct,a=Xd;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Xe=5:(Xe=0,Za=Ot=null,sm(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(Tt=null),Ir(t),n=n.stateNode,yn&&typeof yn.onCommitFiberRoot=="function")try{yn.onCommitFiberRoot(cl,n,void 0,(n.current.flags&128)===128)}catch{}if(a!==null){n=E.T,l=q.p,q.p=2,E.T=null;try{for(var r=e.onRecoverableError,c=0;c<a.length;c++){var d=a[c];r(d.value,{componentStack:d.stack})}}finally{E.T=n,q.p=l}}(ct&3)!==0&&dr(),$n(e),l=e.pendingLanes,(t&261930)!==0&&(l&42)!==0?e===Mu?Gl++:(Gl=0,Mu=e):Gl=0,Ql(0)}}function sm(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,xl(n)))}function dr(){return rm(),om(),um(),cm()}function cm(){if(Xe!==5)return!1;var e=Ot,n=Cu;Cu=0;var t=Ir(ct),a=E.T,l=q.p;try{q.p=32>t?32:t,E.T=null,t=Du,Du=null;var r=Ot,c=ct;if(Xe=0,Za=Ot=null,ct=0,(fe&6)!==0)throw Error(u(331));var d=fe;if(fe|=4,Gd(r.current),Vd(r,r.current,c,t),fe=d,Ql(0,!1),yn&&typeof yn.onPostCommitFiberRoot=="function")try{yn.onPostCommitFiberRoot(cl,r)}catch{}return!0}finally{q.p=l,E.T=a,sm(e,n)}}function fm(e,n,t){n=Cn(t,n),n=fu(e.stateNode,n,2),e=Rt(e,n,2),e!==null&&(dl(e,2),$n(e))}function he(e,n,t){if(e.tag===3)fm(e,e,t);else for(;n!==null;){if(n.tag===3){fm(n,e,t);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Tt===null||!Tt.has(a))){e=Cn(t,e),t=dd(2),a=Rt(n,t,2),a!==null&&(md(t,a,n,e),dl(a,2),$n(a));break}}n=n.return}}function Uu(e,n,t){var a=e.pingCache;if(a===null){a=e.pingCache=new Yv;var l=new Set;a.set(n,l)}else l=a.get(n),l===void 0&&(l=new Set,a.set(n,l));l.has(t)||(Au=!0,l.add(t),e=Xv.bind(null,e,n,t),n.then(e,e))}function Xv(e,n,t){var a=e.pingCache;a!==null&&a.delete(n),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,Se===e&&(le&t)===t&&(_e===4||_e===3&&(le&62914560)===le&&300>bn()-rr?(fe&2)===0&&Ga(e,0):Tu|=t,Ya===le&&(Ya=0)),$n(e)}function dm(e,n){n===0&&(n=ic()),e=It(e,n),e!==null&&(dl(e,n),$n(e))}function Wv(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),dm(e,t)}function Jv(e,n){var t=0;switch(e.tag){case 31:case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(u(314))}a!==null&&a.delete(n),dm(e,t)}function Kv(e,n){return Xr(e,n)}var mr=null,$a=null,Nu=!1,pr=!1,Lu=!1,Dt=0;function $n(e){e!==$a&&e.next===null&&($a===null?mr=$a=e:$a=$a.next=e),pr=!0,Nu||(Nu=!0,Pv())}function Ql(e,n){if(!Lu&&pr){Lu=!0;do for(var t=!1,a=mr;a!==null;){if(e!==0){var l=a.pendingLanes;if(l===0)var r=0;else{var c=a.suspendedLanes,d=a.pingedLanes;r=(1<<31-wn(42|e)+1)-1,r&=l&~(c&~d),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(t=!0,vm(a,r))}else r=le,r=bi(a,a===Se?r:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(r&3)===0||fl(a,r)||(t=!0,vm(a,r));a=a.next}while(t);Lu=!1}}function Iv(){mm()}function mm(){pr=Nu=!1;var e=0;Dt!==0&&sg()&&(e=Dt);for(var n=bn(),t=null,a=mr;a!==null;){var l=a.next,r=pm(a,n);r===0?(a.next=null,t===null?mr=l:t.next=l,l===null&&($a=t)):(t=a,(e!==0||(r&3)!==0)&&(pr=!0)),a=l}Xe!==0&&Xe!==5||Ql(e),Dt!==0&&(Dt=0)}function pm(e,n){for(var t=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var c=31-wn(r),d=1<<c,p=l[c];p===-1?((d&t)===0||(d&a)!==0)&&(l[c]=jh(d,n)):p<=n&&(e.expiredLanes|=d),r&=~d}if(n=Se,t=le,t=bi(e,e===n?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,t===0||e===n&&(pe===2||pe===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Wr(a),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||fl(e,t)){if(n=t&-t,n===e.callbackPriority)return n;switch(a!==null&&Wr(a),Ir(t)){case 2:case 8:t=ac;break;case 32:t=pi;break;case 268435456:t=lc;break;default:t=pi}return a=hm.bind(null,e),t=Xr(t,a),e.callbackPriority=n,e.callbackNode=t,n}return a!==null&&a!==null&&Wr(a),e.callbackPriority=2,e.callbackNode=null,2}function hm(e,n){if(Xe!==0&&Xe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(dr()&&e.callbackNode!==t)return null;var a=le;return a=bi(e,e===Se?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Jd(e,a,n),pm(e,bn()),e.callbackNode!=null&&e.callbackNode===t?hm.bind(null,e):null)}function vm(e,n){if(dr())return null;Jd(e,n,!0)}function Pv(){fg(function(){(fe&6)!==0?Xr(tc,Iv):mm()})}function Hu(){if(Dt===0){var e=Da;e===0&&(e=hi,hi<<=1,(hi&261888)===0&&(hi=256)),Dt=e}return Dt}function gm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:zi(""+e)}function bm(e,n){var t=n.ownerDocument.createElement("input");return t.name=n.name,t.value=n.value,e.id&&t.setAttribute("form",e.id),n.parentNode.insertBefore(t,n),e=new FormData(e),t.parentNode.removeChild(t),e}function eg(e,n,t,a,l){if(n==="submit"&&t&&t.stateNode===l){var r=gm((l[cn]||null).action),c=a.submitter;c&&(n=(n=c[cn]||null)?gm(n.formAction):c.getAttribute("formAction"),n!==null&&(r=n,c=null));var d=new xi("action","action",null,a,l);e.push({event:d,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Dt!==0){var p=c?bm(l,c):new FormData(l);iu(t,{pending:!0,data:p,method:l.method,action:r},null,p)}}else typeof r=="function"&&(d.preventDefault(),p=c?bm(l,c):new FormData(l),iu(t,{pending:!0,data:p,method:l.method,action:r},r,p))},currentTarget:l}]})}}for(var Bu=0;Bu<zo.length;Bu++){var Fu=zo[Bu],ng=Fu.toLowerCase(),tg=Fu[0].toUpperCase()+Fu.slice(1);Bn(ng,"on"+tg)}Bn(Xc,"onAnimationEnd"),Bn(Wc,"onAnimationIteration"),Bn(Jc,"onAnimationStart"),Bn("dblclick","onDoubleClick"),Bn("focusin","onFocus"),Bn("focusout","onBlur"),Bn(bv,"onTransitionRun"),Bn(yv,"onTransitionStart"),Bn(wv,"onTransitionCancel"),Bn(Kc,"onTransitionEnd"),ba("onMouseEnter",["mouseout","mouseover"]),ba("onMouseLeave",["mouseout","mouseover"]),ba("onPointerEnter",["pointerout","pointerover"]),ba("onPointerLeave",["pointerout","pointerover"]),Xt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Xt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Xt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Xt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Xt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Xt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $l="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ag=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat($l));function ym(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var a=e[t],l=a.event;a=a.listeners;e:{var r=void 0;if(n)for(var c=a.length-1;0<=c;c--){var d=a[c],p=d.instance,k=d.currentTarget;if(d=d.listener,p!==r&&l.isPropagationStopped())break e;r=d,l.currentTarget=k;try{r(l)}catch(x){Ti(x)}l.currentTarget=null,r=p}else for(c=0;c<a.length;c++){if(d=a[c],p=d.instance,k=d.currentTarget,d=d.listener,p!==r&&l.isPropagationStopped())break e;r=d,l.currentTarget=k;try{r(l)}catch(x){Ti(x)}l.currentTarget=null,r=p}}}}function ae(e,n){var t=n[Pr];t===void 0&&(t=n[Pr]=new Set);var a=e+"__bubble";t.has(a)||(wm(n,e,2,!1),t.add(a))}function Vu(e,n,t){var a=0;n&&(a|=4),wm(t,e,a,n)}var hr="_reactListening"+Math.random().toString(36).slice(2);function Yu(e){if(!e[hr]){e[hr]=!0,dc.forEach(function(t){t!=="selectionchange"&&(ag.has(t)||Vu(t,!1,e),Vu(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[hr]||(n[hr]=!0,Vu("selectionchange",!1,n))}}function wm(e,n,t,a){switch(Wm(n)){case 2:var l=Cg;break;case 8:l=Dg;break;default:l=ls}t=l.bind(null,n,t,e),l=void 0,!uo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function Zu(e,n,t,a,l){var r=a;if((n&1)===0&&(n&2)===0&&a!==null)e:for(;;){if(a===null)return;var c=a.tag;if(c===3||c===4){var d=a.stateNode.containerInfo;if(d===l)break;if(c===4)for(c=a.return;c!==null;){var p=c.tag;if((p===3||p===4)&&c.stateNode.containerInfo===l)return;c=c.return}for(;d!==null;){if(c=ha(d),c===null)return;if(p=c.tag,p===5||p===6||p===26||p===27){a=r=c;continue e}d=d.parentNode}}a=a.return}Sc(function(){var k=r,x=ro(t),O=[];e:{var R=Ic.get(e);if(R!==void 0){var S=xi,L=e;switch(e){case"keypress":if(Si(t)===0)break e;case"keydown":case"keyup":S=Jh;break;case"focusin":L="focus",S=mo;break;case"focusout":L="blur",S=mo;break;case"beforeblur":case"afterblur":S=mo;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Ec;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=Lh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=Ph;break;case Xc:case Wc:case Jc:S=Fh;break;case Kc:S=nv;break;case"scroll":case"scrollend":S=Uh;break;case"wheel":S=av;break;case"copy":case"cut":case"paste":S=Yh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=Tc;break;case"toggle":case"beforetoggle":S=iv}var Y=(n&4)!==0,ke=!Y&&(e==="scroll"||e==="scrollend"),b=Y?R!==null?R+"Capture":null:R;Y=[];for(var h=k,w;h!==null;){var A=h;if(w=A.stateNode,A=A.tag,A!==5&&A!==26&&A!==27||w===null||b===null||(A=hl(h,b),A!=null&&Y.push(Xl(h,A,w))),ke)break;h=h.return}0<Y.length&&(R=new S(R,L,null,t,x),O.push({event:R,listeners:Y}))}}if((n&7)===0){e:{if(R=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",R&&t!==io&&(L=t.relatedTarget||t.fromElement)&&(ha(L)||L[pa]))break e;if((S||R)&&(R=x.window===x?x:(R=x.ownerDocument)?R.defaultView||R.parentWindow:window,S?(L=t.relatedTarget||t.toElement,S=k,L=L?ha(L):null,L!==null&&(ke=m(L),Y=L.tag,L!==ke||Y!==5&&Y!==27&&Y!==6)&&(L=null)):(S=null,L=k),S!==L)){if(Y=Ec,A="onMouseLeave",b="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(Y=Tc,A="onPointerLeave",b="onPointerEnter",h="pointer"),ke=S==null?R:pl(S),w=L==null?R:pl(L),R=new Y(A,h+"leave",S,t,x),R.target=ke,R.relatedTarget=w,A=null,ha(x)===k&&(Y=new Y(b,h+"enter",L,t,x),Y.target=w,Y.relatedTarget=ke,A=Y),ke=A,S&&L)n:{for(Y=lg,b=S,h=L,w=0,A=b;A;A=Y(A))w++;A=0;for(var V=h;V;V=Y(V))A++;for(;0<w-A;)b=Y(b),w--;for(;0<A-w;)h=Y(h),A--;for(;w--;){if(b===h||h!==null&&b===h.alternate){Y=b;break n}b=Y(b),h=Y(h)}Y=null}else Y=null;S!==null&&km(O,R,S,Y,!1),L!==null&&ke!==null&&km(O,ke,L,Y,!0)}}e:{if(R=k?pl(k):window,S=R.nodeName&&R.nodeName.toLowerCase(),S==="select"||S==="input"&&R.type==="file")var se=Nc;else if(qc(R))if(Lc)se=hv;else{se=mv;var B=dv}else S=R.nodeName,!S||S.toLowerCase()!=="input"||R.type!=="checkbox"&&R.type!=="radio"?k&&lo(k.elementType)&&(se=Nc):se=pv;if(se&&(se=se(e,k))){Uc(O,se,t,x);break e}B&&B(e,R,k),e==="focusout"&&k&&R.type==="number"&&k.memoizedProps.value!=null&&ao(R,"number",R.value)}switch(B=k?pl(k):window,e){case"focusin":(qc(B)||B.contentEditable==="true")&&(Sa=B,yo=k,Rl=null);break;case"focusout":Rl=yo=Sa=null;break;case"mousedown":wo=!0;break;case"contextmenu":case"mouseup":case"dragend":wo=!1,Qc(O,t,x);break;case"selectionchange":if(gv)break;case"keydown":case"keyup":Qc(O,t,x)}var K;if(ho)e:{switch(e){case"compositionstart":var ie="onCompositionStart";break e;case"compositionend":ie="onCompositionEnd";break e;case"compositionupdate":ie="onCompositionUpdate";break e}ie=void 0}else Ra?Mc(e,t)&&(ie="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(ie="onCompositionStart");ie&&(Oc&&t.locale!=="ko"&&(Ra||ie!=="onCompositionStart"?ie==="onCompositionEnd"&&Ra&&(K=jc()):(vt=x,so="value"in vt?vt.value:vt.textContent,Ra=!0)),B=vr(k,ie),0<B.length&&(ie=new Ac(ie,e,null,t,x),O.push({event:ie,listeners:B}),K?ie.data=K:(K=_c(t),K!==null&&(ie.data=K)))),(K=ov?uv(e,t):sv(e,t))&&(ie=vr(k,"onBeforeInput"),0<ie.length&&(B=new Ac("onBeforeInput","beforeinput",null,t,x),O.push({event:B,listeners:ie}),B.data=K)),eg(O,e,k,t,x)}ym(O,n)})}function Xl(e,n,t){return{instance:e,listener:n,currentTarget:t}}function vr(e,n){for(var t=n+"Capture",a=[];e!==null;){var l=e,r=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||r===null||(l=hl(e,t),l!=null&&a.unshift(Xl(e,l,r)),l=hl(e,n),l!=null&&a.push(Xl(e,l,r))),e.tag===3)return a;e=e.return}return[]}function lg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function km(e,n,t,a,l){for(var r=n._reactName,c=[];t!==null&&t!==a;){var d=t,p=d.alternate,k=d.stateNode;if(d=d.tag,p!==null&&p===a)break;d!==5&&d!==26&&d!==27||k===null||(p=k,l?(k=hl(t,r),k!=null&&c.unshift(Xl(t,k,p))):l||(k=hl(t,r),k!=null&&c.push(Xl(t,k,p)))),t=t.return}c.length!==0&&e.push({event:n,listeners:c})}var ig=/\r\n?/g,rg=/\u0000|\uFFFD/g;function zm(e){return(typeof e=="string"?e:""+e).replace(ig,`
`).replace(rg,"")}function Rm(e,n){return n=zm(n),zm(e)===n}function we(e,n,t,a,l,r){switch(t){case"children":typeof a=="string"?n==="body"||n==="textarea"&&a===""||wa(e,a):(typeof a=="number"||typeof a=="bigint")&&n!=="body"&&wa(e,""+a);break;case"className":wi(e,"class",a);break;case"tabIndex":wi(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":wi(e,t,a);break;case"style":zc(e,a,r);break;case"data":if(n!=="object"){wi(e,"data",a);break}case"src":case"href":if(a===""&&(n!=="a"||t!=="href")){e.removeAttribute(t);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=zi(""+a),e.setAttribute(t,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(t==="formAction"?(n!=="input"&&we(e,n,"name",l.name,l,null),we(e,n,"formEncType",l.formEncType,l,null),we(e,n,"formMethod",l.formMethod,l,null),we(e,n,"formTarget",l.formTarget,l,null)):(we(e,n,"encType",l.encType,l,null),we(e,n,"method",l.method,l,null),we(e,n,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=zi(""+a),e.setAttribute(t,a);break;case"onClick":a!=null&&(e.onclick=Wn);break;case"onScroll":a!=null&&ae("scroll",e);break;case"onScrollEnd":a!=null&&ae("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(t=a.__html,t!=null){if(l.children!=null)throw Error(u(60));e.innerHTML=t}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}t=zi(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""+a):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":a===!0?e.setAttribute(t,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,a):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(t,a):e.removeAttribute(t);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(t):e.setAttribute(t,a);break;case"popover":ae("beforetoggle",e),ae("toggle",e),yi(e,"popover",a);break;case"xlinkActuate":Xn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Xn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Xn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Xn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Xn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Xn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Xn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Xn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Xn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":yi(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=_h.get(t)||t,yi(e,t,a))}}function Gu(e,n,t,a,l,r){switch(t){case"style":zc(e,a,r);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(t=a.__html,t!=null){if(l.children!=null)throw Error(u(60));e.innerHTML=t}}break;case"children":typeof a=="string"?wa(e,a):(typeof a=="number"||typeof a=="bigint")&&wa(e,""+a);break;case"onScroll":a!=null&&ae("scroll",e);break;case"onScrollEnd":a!=null&&ae("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Wn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!mc.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(l=t.endsWith("Capture"),n=t.slice(2,l?t.length-7:void 0),r=e[cn]||null,r=r!=null?r[t]:null,typeof r=="function"&&e.removeEventListener(n,r,l),typeof a=="function")){typeof r!="function"&&r!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(n,a,l);break e}t in e?e[t]=a:a===!0?e.setAttribute(t,""):yi(e,t,a)}}}function tn(e,n,t){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ae("error",e),ae("load",e);var a=!1,l=!1,r;for(r in t)if(t.hasOwnProperty(r)){var c=t[r];if(c!=null)switch(r){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,n));default:we(e,n,r,c,t,null)}}l&&we(e,n,"srcSet",t.srcSet,t,null),a&&we(e,n,"src",t.src,t,null);return;case"input":ae("invalid",e);var d=r=c=l=null,p=null,k=null;for(a in t)if(t.hasOwnProperty(a)){var x=t[a];if(x!=null)switch(a){case"name":l=x;break;case"type":c=x;break;case"checked":p=x;break;case"defaultChecked":k=x;break;case"value":r=x;break;case"defaultValue":d=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(u(137,n));break;default:we(e,n,a,x,t,null)}}bc(e,r,d,p,k,c,l,!1);return;case"select":ae("invalid",e),a=c=r=null;for(l in t)if(t.hasOwnProperty(l)&&(d=t[l],d!=null))switch(l){case"value":r=d;break;case"defaultValue":c=d;break;case"multiple":a=d;default:we(e,n,l,d,t,null)}n=r,t=c,e.multiple=!!a,n!=null?ya(e,!!a,n,!1):t!=null&&ya(e,!!a,t,!0);return;case"textarea":ae("invalid",e),r=l=a=null;for(c in t)if(t.hasOwnProperty(c)&&(d=t[c],d!=null))switch(c){case"value":a=d;break;case"defaultValue":l=d;break;case"children":r=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(u(91));break;default:we(e,n,c,d,t,null)}wc(e,a,l,r);return;case"option":for(p in t)t.hasOwnProperty(p)&&(a=t[p],a!=null)&&(p==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":we(e,n,p,a,t,null));return;case"dialog":ae("beforetoggle",e),ae("toggle",e),ae("cancel",e),ae("close",e);break;case"iframe":case"object":ae("load",e);break;case"video":case"audio":for(a=0;a<$l.length;a++)ae($l[a],e);break;case"image":ae("error",e),ae("load",e);break;case"details":ae("toggle",e);break;case"embed":case"source":case"link":ae("error",e),ae("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(k in t)if(t.hasOwnProperty(k)&&(a=t[k],a!=null))switch(k){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,n));default:we(e,n,k,a,t,null)}return;default:if(lo(n)){for(x in t)t.hasOwnProperty(x)&&(a=t[x],a!==void 0&&Gu(e,n,x,a,t,void 0));return}}for(d in t)t.hasOwnProperty(d)&&(a=t[d],a!=null&&we(e,n,d,a,t,null))}function og(e,n,t,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,r=null,c=null,d=null,p=null,k=null,x=null;for(S in t){var O=t[S];if(t.hasOwnProperty(S)&&O!=null)switch(S){case"checked":break;case"value":break;case"defaultValue":p=O;default:a.hasOwnProperty(S)||we(e,n,S,null,a,O)}}for(var R in a){var S=a[R];if(O=t[R],a.hasOwnProperty(R)&&(S!=null||O!=null))switch(R){case"type":r=S;break;case"name":l=S;break;case"checked":k=S;break;case"defaultChecked":x=S;break;case"value":c=S;break;case"defaultValue":d=S;break;case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(u(137,n));break;default:S!==O&&we(e,n,R,S,a,O)}}to(e,c,d,p,k,x,r,l);return;case"select":S=c=d=R=null;for(r in t)if(p=t[r],t.hasOwnProperty(r)&&p!=null)switch(r){case"value":break;case"multiple":S=p;default:a.hasOwnProperty(r)||we(e,n,r,null,a,p)}for(l in a)if(r=a[l],p=t[l],a.hasOwnProperty(l)&&(r!=null||p!=null))switch(l){case"value":R=r;break;case"defaultValue":d=r;break;case"multiple":c=r;default:r!==p&&we(e,n,l,r,a,p)}n=d,t=c,a=S,R!=null?ya(e,!!t,R,!1):!!a!=!!t&&(n!=null?ya(e,!!t,n,!0):ya(e,!!t,t?[]:"",!1));return;case"textarea":S=R=null;for(d in t)if(l=t[d],t.hasOwnProperty(d)&&l!=null&&!a.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:we(e,n,d,null,a,l)}for(c in a)if(l=a[c],r=t[c],a.hasOwnProperty(c)&&(l!=null||r!=null))switch(c){case"value":R=l;break;case"defaultValue":S=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(u(91));break;default:l!==r&&we(e,n,c,l,a,r)}yc(e,R,S);return;case"option":for(var L in t)R=t[L],t.hasOwnProperty(L)&&R!=null&&!a.hasOwnProperty(L)&&(L==="selected"?e.selected=!1:we(e,n,L,null,a,R));for(p in a)R=a[p],S=t[p],a.hasOwnProperty(p)&&R!==S&&(R!=null||S!=null)&&(p==="selected"?e.selected=R&&typeof R!="function"&&typeof R!="symbol":we(e,n,p,R,a,S));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Y in t)R=t[Y],t.hasOwnProperty(Y)&&R!=null&&!a.hasOwnProperty(Y)&&we(e,n,Y,null,a,R);for(k in a)if(R=a[k],S=t[k],a.hasOwnProperty(k)&&R!==S&&(R!=null||S!=null))switch(k){case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(u(137,n));break;default:we(e,n,k,R,a,S)}return;default:if(lo(n)){for(var ke in t)R=t[ke],t.hasOwnProperty(ke)&&R!==void 0&&!a.hasOwnProperty(ke)&&Gu(e,n,ke,void 0,a,R);for(x in a)R=a[x],S=t[x],!a.hasOwnProperty(x)||R===S||R===void 0&&S===void 0||Gu(e,n,x,R,a,S);return}}for(var b in t)R=t[b],t.hasOwnProperty(b)&&R!=null&&!a.hasOwnProperty(b)&&we(e,n,b,null,a,R);for(O in a)R=a[O],S=t[O],!a.hasOwnProperty(O)||R===S||R==null&&S==null||we(e,n,O,R,a,S)}function Sm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ug(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,t=performance.getEntriesByType("resource"),a=0;a<t.length;a++){var l=t[a],r=l.transferSize,c=l.initiatorType,d=l.duration;if(r&&d&&Sm(c)){for(c=0,d=l.responseEnd,a+=1;a<t.length;a++){var p=t[a],k=p.startTime;if(k>d)break;var x=p.transferSize,O=p.initiatorType;x&&Sm(O)&&(p=p.responseEnd,c+=x*(p<d?1:(d-k)/(p-k)))}if(--a,n+=8*(r+c)/(l.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Qu=null,$u=null;function gr(e){return e.nodeType===9?e:e.ownerDocument}function jm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function xm(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Xu(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Wu=null;function sg(){var e=window.event;return e&&e.type==="popstate"?e===Wu?!1:(Wu=e,!0):(Wu=null,!1)}var Em=typeof setTimeout=="function"?setTimeout:void 0,cg=typeof clearTimeout=="function"?clearTimeout:void 0,Am=typeof Promise=="function"?Promise:void 0,fg=typeof queueMicrotask=="function"?queueMicrotask:typeof Am<"u"?function(e){return Am.resolve(null).then(e).catch(dg)}:Em;function dg(e){setTimeout(function(){throw e})}function Mt(e){return e==="head"}function Tm(e,n){var t=n,a=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"||t==="/&"){if(a===0){e.removeChild(l),Ka(n);return}a--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")a++;else if(t==="html")Wl(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,Wl(t);for(var r=t.firstChild;r;){var c=r.nextSibling,d=r.nodeName;r[ml]||d==="SCRIPT"||d==="STYLE"||d==="LINK"&&r.rel.toLowerCase()==="stylesheet"||t.removeChild(r),r=c}}else t==="body"&&Wl(e.ownerDocument.body);t=l}while(t);Ka(n)}function Om(e,n){var t=e;e=0;do{var a=t.nextSibling;if(t.nodeType===1?n?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(n?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=a}while(t)}function Ju(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var t=n;switch(n=n.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":Ju(t),eo(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function mg(e,n,t,a){for(;e.nodeType===1;){var l=t;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[ml])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var r=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Un(e.nextSibling),e===null)break}return null}function pg(e,n,t){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Un(e.nextSibling),e===null))return null;return e}function Cm(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Un(e.nextSibling),e===null))return null;return e}function Ku(e){return e.data==="$?"||e.data==="$~"}function Iu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function hg(e,n){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||t.readyState!=="loading")n();else{var a=function(){n(),t.removeEventListener("DOMContentLoaded",a)};t.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Un(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Pu=null;function Dm(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(n===0)return Un(e.nextSibling);n--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||n++}e=e.nextSibling}return null}function Mm(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(n===0)return e;n--}else t!=="/$"&&t!=="/&"||n++}e=e.previousSibling}return null}function _m(e,n,t){switch(n=gr(t),e){case"html":if(e=n.documentElement,!e)throw Error(u(452));return e;case"head":if(e=n.head,!e)throw Error(u(453));return e;case"body":if(e=n.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function Wl(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);eo(e)}var Nn=new Map,qm=new Set;function br(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ft=q.d;q.d={f:vg,r:gg,D:bg,C:yg,L:wg,m:kg,X:Rg,S:zg,M:Sg};function vg(){var e=ft.f(),n=sr();return e||n}function gg(e){var n=va(e);n!==null&&n.tag===5&&n.type==="form"?If(n):ft.r(e)}var Xa=typeof document>"u"?null:document;function Um(e,n,t){var a=Xa;if(a&&typeof n=="string"&&n){var l=Tn(n);l='link[rel="'+e+'"][href="'+l+'"]',typeof t=="string"&&(l+='[crossorigin="'+t+'"]'),qm.has(l)||(qm.add(l),e={rel:e,crossOrigin:t,href:n},a.querySelector(l)===null&&(n=a.createElement("link"),tn(n,"link",e),Je(n),a.head.appendChild(n)))}}function bg(e){ft.D(e),Um("dns-prefetch",e,null)}function yg(e,n){ft.C(e,n),Um("preconnect",e,n)}function wg(e,n,t){ft.L(e,n,t);var a=Xa;if(a&&e&&n){var l='link[rel="preload"][as="'+Tn(n)+'"]';n==="image"&&t&&t.imageSrcSet?(l+='[imagesrcset="'+Tn(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(l+='[imagesizes="'+Tn(t.imageSizes)+'"]')):l+='[href="'+Tn(e)+'"]';var r=l;switch(n){case"style":r=Wa(e);break;case"script":r=Ja(e)}Nn.has(r)||(e=M({rel:"preload",href:n==="image"&&t&&t.imageSrcSet?void 0:e,as:n},t),Nn.set(r,e),a.querySelector(l)!==null||n==="style"&&a.querySelector(Jl(r))||n==="script"&&a.querySelector(Kl(r))||(n=a.createElement("link"),tn(n,"link",e),Je(n),a.head.appendChild(n)))}}function kg(e,n){ft.m(e,n);var t=Xa;if(t&&e){var a=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+Tn(a)+'"][href="'+Tn(e)+'"]',r=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Ja(e)}if(!Nn.has(r)&&(e=M({rel:"modulepreload",href:e},n),Nn.set(r,e),t.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Kl(r)))return}a=t.createElement("link"),tn(a,"link",e),Je(a),t.head.appendChild(a)}}}function zg(e,n,t){ft.S(e,n,t);var a=Xa;if(a&&e){var l=ga(a).hoistableStyles,r=Wa(e);n=n||"default";var c=l.get(r);if(!c){var d={loading:0,preload:null};if(c=a.querySelector(Jl(r)))d.loading=5;else{e=M({rel:"stylesheet",href:e,"data-precedence":n},t),(t=Nn.get(r))&&es(e,t);var p=c=a.createElement("link");Je(p),tn(p,"link",e),p._p=new Promise(function(k,x){p.onload=k,p.onerror=x}),p.addEventListener("load",function(){d.loading|=1}),p.addEventListener("error",function(){d.loading|=2}),d.loading|=4,yr(c,n,a)}c={type:"stylesheet",instance:c,count:1,state:d},l.set(r,c)}}}function Rg(e,n){ft.X(e,n);var t=Xa;if(t&&e){var a=ga(t).hoistableScripts,l=Ja(e),r=a.get(l);r||(r=t.querySelector(Kl(l)),r||(e=M({src:e,async:!0},n),(n=Nn.get(l))&&ns(e,n),r=t.createElement("script"),Je(r),tn(r,"link",e),t.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(l,r))}}function Sg(e,n){ft.M(e,n);var t=Xa;if(t&&e){var a=ga(t).hoistableScripts,l=Ja(e),r=a.get(l);r||(r=t.querySelector(Kl(l)),r||(e=M({src:e,async:!0,type:"module"},n),(n=Nn.get(l))&&ns(e,n),r=t.createElement("script"),Je(r),tn(r,"link",e),t.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(l,r))}}function Nm(e,n,t,a){var l=(l=ne.current)?br(l):null;if(!l)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(n=Wa(t.href),t=ga(l).hoistableStyles,a=t.get(n),a||(a={type:"style",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=Wa(t.href);var r=ga(l).hoistableStyles,c=r.get(e);if(c||(l=l.ownerDocument||l,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,c),(r=l.querySelector(Jl(e)))&&!r._p&&(c.instance=r,c.state.loading=5),Nn.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Nn.set(e,t),r||jg(l,e,t,c.state))),n&&a===null)throw Error(u(528,""));return c}if(n&&a!==null)throw Error(u(529,""));return null;case"script":return n=t.async,t=t.src,typeof t=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ja(t),t=ga(l).hoistableScripts,a=t.get(n),a||(a={type:"script",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function Wa(e){return'href="'+Tn(e)+'"'}function Jl(e){return'link[rel="stylesheet"]['+e+"]"}function Lm(e){return M({},e,{"data-precedence":e.precedence,precedence:null})}function jg(e,n,t,a){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?a.loading=1:(n=e.createElement("link"),a.preload=n,n.addEventListener("load",function(){return a.loading|=1}),n.addEventListener("error",function(){return a.loading|=2}),tn(n,"link",t),Je(n),e.head.appendChild(n))}function Ja(e){return'[src="'+Tn(e)+'"]'}function Kl(e){return"script[async]"+e}function Hm(e,n,t){if(n.count++,n.instance===null)switch(n.type){case"style":var a=e.querySelector('style[data-href~="'+Tn(t.href)+'"]');if(a)return n.instance=a,Je(a),a;var l=M({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Je(a),tn(a,"style",l),yr(a,t.precedence,e),n.instance=a;case"stylesheet":l=Wa(t.href);var r=e.querySelector(Jl(l));if(r)return n.state.loading|=4,n.instance=r,Je(r),r;a=Lm(t),(l=Nn.get(l))&&es(a,l),r=(e.ownerDocument||e).createElement("link"),Je(r);var c=r;return c._p=new Promise(function(d,p){c.onload=d,c.onerror=p}),tn(r,"link",a),n.state.loading|=4,yr(r,t.precedence,e),n.instance=r;case"script":return r=Ja(t.src),(l=e.querySelector(Kl(r)))?(n.instance=l,Je(l),l):(a=t,(l=Nn.get(r))&&(a=M({},t),ns(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),Je(l),tn(l,"link",a),e.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(u(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(a=n.instance,n.state.loading|=4,yr(a,t.precedence,e));return n.instance}function yr(e,n,t){for(var a=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,r=l,c=0;c<a.length;c++){var d=a[c];if(d.dataset.precedence===n)r=d;else if(r!==l)break}r?r.parentNode.insertBefore(e,r.nextSibling):(n=t.nodeType===9?t.head:t,n.insertBefore(e,n.firstChild))}function es(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function ns(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var wr=null;function Bm(e,n,t){if(wr===null){var a=new Map,l=wr=new Map;l.set(t,a)}else l=wr,a=l.get(t),a||(a=new Map,l.set(t,a));if(a.has(e))return a;for(a.set(e,null),t=t.getElementsByTagName(e),l=0;l<t.length;l++){var r=t[l];if(!(r[ml]||r[Ie]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var c=r.getAttribute(n)||"";c=e+c;var d=a.get(c);d?d.push(r):a.set(c,[r])}}return a}function Fm(e,n,t){e=e.ownerDocument||e,e.head.insertBefore(t,n==="title"?e.querySelector("head > title"):null)}function xg(e,n,t){if(t===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Vm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Eg(e,n,t,a){if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=Wa(a.href),r=n.querySelector(Jl(l));if(r){n=r._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=kr.bind(e),n.then(e,e)),t.state.loading|=4,t.instance=r,Je(r);return}r=n.ownerDocument||n,a=Lm(a),(l=Nn.get(l))&&es(a,l),r=r.createElement("link"),Je(r);var c=r;c._p=new Promise(function(d,p){c.onload=d,c.onerror=p}),tn(r,"link",a),t.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,n),(n=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=kr.bind(e),n.addEventListener("load",t),n.addEventListener("error",t))}}var ts=0;function Ag(e,n){return e.stylesheets&&e.count===0&&Rr(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var a=setTimeout(function(){if(e.stylesheets&&Rr(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+n);0<e.imgBytes&&ts===0&&(ts=62500*ug());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Rr(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>ts?50:800)+n);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(l)}}:null}function kr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Rr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var zr=null;function Rr(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,zr=new Map,n.forEach(Tg,e),zr=null,kr.call(e))}function Tg(e,n){if(!(n.state.loading&4)){var t=zr.get(e);if(t)var a=t.get(null);else{t=new Map,zr.set(e,t);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<l.length;r++){var c=l[r];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(t.set(c.dataset.precedence,c),a=c)}a&&t.set(null,a)}l=n.instance,c=l.getAttribute("data-precedence"),r=t.get(c)||a,r===a&&t.set(null,l),t.set(c,l),this.count++,a=kr.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),r?r.parentNode.insertBefore(l,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),n.state.loading|=4}}var Il={$$typeof:Ae,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function Og(e,n,t,a,l,r,c,d,p){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Jr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jr(0),this.hiddenUpdates=Jr(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=r,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=p,this.incompleteTransitions=new Map}function Ym(e,n,t,a,l,r,c,d,p,k,x,O){return e=new Og(e,n,t,c,p,k,x,O,d),n=1,r===!0&&(n|=24),r=zn(3,null,null,n),e.current=r,r.stateNode=e,n=qo(),n.refCount++,e.pooledCache=n,n.refCount++,r.memoizedState={element:a,isDehydrated:t,cache:n},Ho(r),e}function Zm(e){return e?(e=Ea,e):Ea}function Gm(e,n,t,a,l,r){l=Zm(l),a.context===null?a.context=l:a.pendingContext=l,a=zt(n),a.payload={element:t},r=r===void 0?null:r,r!==null&&(a.callback=r),t=Rt(e,a,n),t!==null&&(vn(t,e,n),Ol(t,e,n))}function Qm(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function as(e,n){Qm(e,n),(e=e.alternate)&&Qm(e,n)}function $m(e){if(e.tag===13||e.tag===31){var n=It(e,67108864);n!==null&&vn(n,e,67108864),as(e,67108864)}}function Xm(e){if(e.tag===13||e.tag===31){var n=En();n=Kr(n);var t=It(e,n);t!==null&&vn(t,e,n),as(e,n)}}var Sr=!0;function Cg(e,n,t,a){var l=E.T;E.T=null;var r=q.p;try{q.p=2,ls(e,n,t,a)}finally{q.p=r,E.T=l}}function Dg(e,n,t,a){var l=E.T;E.T=null;var r=q.p;try{q.p=8,ls(e,n,t,a)}finally{q.p=r,E.T=l}}function ls(e,n,t,a){if(Sr){var l=is(a);if(l===null)Zu(e,n,a,jr,t),Jm(e,a);else if(_g(l,e,n,t,a))a.stopPropagation();else if(Jm(e,a),n&4&&-1<Mg.indexOf(e)){for(;l!==null;){var r=va(l);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var c=$t(r.pendingLanes);if(c!==0){var d=r;for(d.pendingLanes|=2,d.entangledLanes|=2;c;){var p=1<<31-wn(c);d.entanglements[1]|=p,c&=~p}$n(r),(fe&6)===0&&(or=bn()+500,Ql(0))}}break;case 31:case 13:d=It(r,2),d!==null&&vn(d,r,2),sr(),as(r,2)}if(r=is(a),r===null&&Zu(e,n,a,jr,t),r===l)break;l=r}l!==null&&a.stopPropagation()}else Zu(e,n,a,null,t)}}function is(e){return e=ro(e),rs(e)}var jr=null;function rs(e){if(jr=null,e=ha(e),e!==null){var n=m(e);if(n===null)e=null;else{var t=n.tag;if(t===13){if(e=g(n),e!==null)return e;e=null}else if(t===31){if(e=z(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return jr=e,null}function Wm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(bh()){case tc:return 2;case ac:return 8;case pi:case yh:return 32;case lc:return 268435456;default:return 32}default:return 32}}var os=!1,_t=null,qt=null,Ut=null,Pl=new Map,ei=new Map,Nt=[],Mg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Jm(e,n){switch(e){case"focusin":case"focusout":_t=null;break;case"dragenter":case"dragleave":qt=null;break;case"mouseover":case"mouseout":Ut=null;break;case"pointerover":case"pointerout":Pl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ei.delete(n.pointerId)}}function ni(e,n,t,a,l,r){return e===null||e.nativeEvent!==r?(e={blockedOn:n,domEventName:t,eventSystemFlags:a,nativeEvent:r,targetContainers:[l]},n!==null&&(n=va(n),n!==null&&$m(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function _g(e,n,t,a,l){switch(n){case"focusin":return _t=ni(_t,e,n,t,a,l),!0;case"dragenter":return qt=ni(qt,e,n,t,a,l),!0;case"mouseover":return Ut=ni(Ut,e,n,t,a,l),!0;case"pointerover":var r=l.pointerId;return Pl.set(r,ni(Pl.get(r)||null,e,n,t,a,l)),!0;case"gotpointercapture":return r=l.pointerId,ei.set(r,ni(ei.get(r)||null,e,n,t,a,l)),!0}return!1}function Km(e){var n=ha(e.target);if(n!==null){var t=m(n);if(t!==null){if(n=t.tag,n===13){if(n=g(t),n!==null){e.blockedOn=n,cc(e.priority,function(){Xm(t)});return}}else if(n===31){if(n=z(t),n!==null){e.blockedOn=n,cc(e.priority,function(){Xm(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=is(e.nativeEvent);if(t===null){t=e.nativeEvent;var a=new t.constructor(t.type,t);io=a,t.target.dispatchEvent(a),io=null}else return n=va(t),n!==null&&$m(n),e.blockedOn=t,!1;n.shift()}return!0}function Im(e,n,t){xr(e)&&t.delete(n)}function qg(){os=!1,_t!==null&&xr(_t)&&(_t=null),qt!==null&&xr(qt)&&(qt=null),Ut!==null&&xr(Ut)&&(Ut=null),Pl.forEach(Im),ei.forEach(Im)}function Er(e,n){e.blockedOn===n&&(e.blockedOn=null,os||(os=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,qg)))}var Ar=null;function Pm(e){Ar!==e&&(Ar=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Ar===e&&(Ar=null);for(var n=0;n<e.length;n+=3){var t=e[n],a=e[n+1],l=e[n+2];if(typeof a!="function"){if(rs(a||t)===null)continue;break}var r=va(t);r!==null&&(e.splice(n,3),n-=3,iu(r,{pending:!0,data:l,method:t.method,action:a},a,l))}}))}function Ka(e){function n(p){return Er(p,e)}_t!==null&&Er(_t,e),qt!==null&&Er(qt,e),Ut!==null&&Er(Ut,e),Pl.forEach(n),ei.forEach(n);for(var t=0;t<Nt.length;t++){var a=Nt[t];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Nt.length&&(t=Nt[0],t.blockedOn===null);)Km(t),t.blockedOn===null&&Nt.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(a=0;a<t.length;a+=3){var l=t[a],r=t[a+1],c=l[cn]||null;if(typeof r=="function")c||Pm(t);else if(c){var d=null;if(r&&r.hasAttribute("formAction")){if(l=r,c=r[cn]||null)d=c.formAction;else if(rs(l)!==null)continue}else d=c.action;typeof d=="function"?t[a+1]=d:(t.splice(a,3),a-=3),Pm(t)}}}function ep(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(c){return l=c})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),a||setTimeout(t,20)}function t(){if(!a&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(t,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function us(e){this._internalRoot=e}Tr.prototype.render=us.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(u(409));var t=n.current,a=En();Gm(t,a,e,n,null,null)},Tr.prototype.unmount=us.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Gm(e.current,2,null,e,null,null),sr(),n[pa]=null}};function Tr(e){this._internalRoot=e}Tr.prototype.unstable_scheduleHydration=function(e){if(e){var n=sc();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Nt.length&&n!==0&&n<Nt[t].priority;t++);Nt.splice(t,0,e),t===0&&Km(e)}};var np=i.version;if(np!=="19.2.4")throw Error(u(527,np,"19.2.4"));q.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=y(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var Ug={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:E,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Or=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Or.isDisabled&&Or.supportsFiber)try{cl=Or.inject(Ug),yn=Or}catch{}}return ai.createRoot=function(e,n){if(!f(e))throw Error(u(299));var t=!1,a="",l=ud,r=sd,c=cd;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(c=n.onRecoverableError)),n=Ym(e,1,!1,null,null,t,a,null,l,r,c,ep),e[pa]=n.current,Yu(e),new us(n)},ai.hydrateRoot=function(e,n,t){if(!f(e))throw Error(u(299));var a=!1,l="",r=ud,c=sd,d=cd,p=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError),t.formState!==void 0&&(p=t.formState)),n=Ym(e,1,!0,n,t??null,a,l,p,r,c,d,ep),n.context=Zm(null),t=n.current,a=En(),a=Kr(a),l=zt(a),l.callback=null,Rt(t,l,a),t=a,n.current.lanes=t,dl(n,t),$n(n),e[pa]=n.current,Yu(e),new Tr(n)},ai.version="19.2.4",ai}var fp;function Qg(){if(fp)return fs.exports;fp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(i){console.error(i)}}return s(),fs.exports=Gg(),fs.exports}var $g=Qg();const Xg=Wp($g);class Wg extends Cs.Component{container;player=null;isLoading=!1;constructor(i){super(i),this.container=Cs.createRef()}componentDidMount(){this.player=window.RufflePlayer.newest().createPlayer(),this.player.id="player",this.player.addEventListener("loadedmetadata",()=>{this.props.onLoadedMetadata&&this.props.onLoadedMetadata(this.player.ruffle().metadata)}),this.isLoading=!1,this.container.current.appendChild(this.player)}componentWillUnmount(){this.player?.remove(),this.player=null,this.isLoading=!1}render(){return N.jsx("div",{id:this.props.id,ref:this.container,onDragEnter:this.props.onDragEnter,onDragLeave:this.props.onDragLeave,onDragOver:this.props.onDragOver,onDrop:this.props.onDragDrop,children:this.props.children})}reload(){this.isLoading||(this.isLoading=!0,this.player?.ruffle().reload().finally(()=>{this.isLoading=!1}))}loadUrl(i,o){this.isLoading||(this.isLoading=!0,this.player?.ruffle().load({url:i,...this.props.baseConfig,...o}).finally(()=>{this.isLoading=!1}))}loadFile(i){this.isLoading||(this.isLoading=!0,new Response(i).arrayBuffer().then(o=>this.player?.ruffle().load({data:o,...this.props.baseConfig})).finally(()=>{this.isLoading=!1}))}}const Jg=""+new URL("../logo.svg",import.meta.url).href,dp={Animation:"Animations",Game:"Games"};function Kg({sampleSelectionInput:s,selectedSample:i,setSelectedSample:o,setSelectedFilename:u,onSelectUrl:f}){const[m,g]=on.useState([]),z=y=>{const _=y.target,M=parseInt(_.value,10);m[M]&&(j(m[M]),window.history.replaceState(null,"",`${window.location.pathname}?file=${m[M].location}`))},j=on.useCallback(y=>{f(y.location,y.config??{}),o(y),u(null)},[f,u,o]);return on.useEffect(()=>{(async()=>{const y=await fetch("swfs.json");if(y.ok){const _=await y.json();if(g(_.swfs),_.swfs.length>0){const Z=new URLSearchParams(window.location.search).get("file");let Q=0;Z&&(Q=_.swfs.findIndex(I=>I.location===Z),Q===-1&&(Q=0)),j(_.swfs[Q]),requestAnimationFrame(()=>{s.current&&(s.current.selectedIndex=Q)})}}})()},[j,s]),N.jsxs("div",{id:"sample-swfs-container",className:m.length===0?"hidden":"",children:[N.jsx("span",{id:"sample-swfs-label",children:"Sample SWF:"}),N.jsxs("select",{id:"sample-swfs","aria-describedby":"sample-swfs-label",onChange:z,ref:s,children:[m.map((y,_)=>N.jsx(on.Fragment,{children:y.type===void 0&&N.jsx("option",{value:_,children:y.title})},_)),Object.keys(dp).map(y=>N.jsx("optgroup",{label:dp[y],children:m.map((_,M)=>N.jsx(on.Fragment,{children:_.type===y&&N.jsx("option",{value:M,children:_.title})},M))},y))]}),N.jsxs("div",{id:"author-container",className:i?.author?"":"hidden",children:[N.jsx("span",{children:"Author: "}),N.jsx("a",{href:i?.authorLink,target:"_blank",id:"author",children:i?.author})]})]})}function Ig({allowUrlLoading:s,allowSampleSwfs:i,onToggleMetadata:o,onReloadMovie:u,onSelectUrl:f,onSelectFile:m,selectedFilename:g,setSelectedFilename:z,onFileDragLeave:j,onFileDragOver:y,onFileDragDrop:_}){const M=on.useRef(null),Z=on.useRef(null),Q=on.useRef(null),[I,P]=on.useState(null),He=()=>{M.current?.click()},Be=G=>{f(G,{}),z(null),P(null),window.history.replaceState(null,"",`${window.location.pathname}${window.location.hash}`),Q.current&&(Q.current.selectedIndex=-1)},an=G=>{m(G),P(null),z(G.name),window.history.replaceState(null,"",window.location.pathname),Q.current&&(Q.current.selectedIndex=-1)},Ae=G=>{G.preventDefault(),Z.current?.value&&Be(Z.current.value)},re=G=>{const Ce=G.target;Ce?.files&&Ce?.files.length>0&&Ce.files[0]&&an(Ce.files[0])},ln=()=>{confirm("Reload the current SWF?")&&u()},$e=navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPhone/i)||navigator.platform==="MacIntel"&&typeof navigator.standalone<"u";return N.jsxs("div",{id:"nav",children:[N.jsx("a",{id:"logo-container",href:"https://ruffle.rs/",target:"_blank",children:N.jsx("img",{className:"logo",src:Jg,alt:"Ruffle"})}),N.jsxs("div",{className:"select-container",children:[N.jsxs("form",{id:"web-url-container",onSubmit:Ae,hidden:!s,children:[N.jsx("input",{id:"web-url",name:"web-url",type:"text",placeholder:"URL of a .swf file on the web",ref:Z}),N.jsx("button",{id:"web-form-submit",type:"submit",children:"Load"})]}),N.jsxs("div",{id:"local-file-container",onDragLeave:j,onDragOver:y,onDrop:_,children:[N.jsx("span",{id:"local-file-static-label",onClick:He,children:"Local SWF:"}),N.jsx("input",{type:"file",accept:$e?void 0:".swf,.spl",id:"local-file","aria-describedby":"local-file-static-label",ref:M,onChange:re}),N.jsx("button",{id:"local-file-label",onClick:He,children:"Select File"}),N.jsx("label",{id:"local-file-name",htmlFor:"local-file",children:g??"No file selected."})]}),i&&N.jsx(Kg,{onSelectUrl:f,selectedSample:I,setSelectedFilename:z,setSelectedSample:P,sampleSelectionInput:Q})]}),N.jsxs("div",{children:[N.jsx("svg",{id:"toggle-info",width:"20px",viewBox:"0 0 416.979 416.979",onClick:o,children:N.jsx("path",{fill:"white",d:"M356.004 61.156c-81.37-81.47-213.377-81.551-294.848-.182-81.47 81.371-81.552 213.379-.181 294.85 81.369 81.47 213.378 81.551 294.849.181 81.469-81.369 81.551-213.379.18-294.849zM237.6 340.786a5.821 5.821 0 0 1-5.822 5.822h-46.576a5.821 5.821 0 0 1-5.822-5.822V167.885a5.821 5.821 0 0 1 5.822-5.822h46.576a5.82 5.82 0 0 1 5.822 5.822v172.901zm-29.11-202.885c-18.618 0-33.766-15.146-33.766-33.765 0-18.617 15.147-33.766 33.766-33.766s33.766 15.148 33.766 33.766c0 18.619-15.149 33.765-33.766 33.765z"})}),N.jsx("svg",{id:"reload-swf",width:"20px",viewBox:"0 0 489.711 489.711",onClick:ln,children:N.jsx("path",{fill:"white",d:"M112.156 97.111c72.3-65.4 180.5-66.4 253.8-6.7l-58.1 2.2c-7.5.3-13.3 6.5-13 14 .3 7.3 6.3 13 13.5 13h.5l89.2-3.3c7.3-.3 13-6.2 13-13.5v-1.6l-3.3-88.2c-.3-7.5-6.6-13.3-14-13-7.5.3-13.3 6.5-13 14l2.1 55.3c-36.3-29.7-81-46.9-128.8-49.3-59.2-3-116.1 17.3-160 57.1-60.4 54.7-86 137.9-66.8 217.1 1.5 6.2 7 10.3 13.1 10.3 1.1 0 2.1-.1 3.2-.4 7.2-1.8 11.7-9.1 9.9-16.3-16.8-69.6 5.6-142.7 58.7-190.7zm350.3 98.4c-1.8-7.2-9.1-11.7-16.3-9.9-7.2 1.8-11.7 9.1-9.9 16.3 16.9 69.6-5.6 142.7-58.7 190.7-37.3 33.7-84.1 50.3-130.7 50.3-44.5 0-88.9-15.1-124.7-44.9l58.8-5.3c7.4-.7 12.9-7.2 12.2-14.7s-7.2-12.9-14.7-12.2l-88.9 8c-7.4.7-12.9 7.2-12.2 14.7l8 88.9c.6 7 6.5 12.3 13.4 12.3.4 0 .8 0 1.2-.1 7.4-.7 12.9-7.2 12.2-14.7l-4.8-54.1c36.3 29.4 80.8 46.5 128.3 48.9 3.8.2 7.6.3 11.3.3 55.1 0 107.5-20.2 148.7-57.4 60.4-54.7 86-137.8 66.8-217.1z"})})]})]})}const Pg={1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9.0",10:"10.0/10.1",11:"10.2",12:"10.3",13:"11.0",14:"11.1",15:"11.2",16:"11.3",17:"11.4",18:"11.5",19:"11.6",20:"11.7",21:"11.8",22:"11.9",23:"12",24:"13",25:"14",26:"15",27:"16",28:"17",29:"18",30:"19",31:"20",32:"21",33:"22",34:"23",35:"24",36:"25",37:"26",38:"27",39:"28",40:"29",41:"30",42:"31",43:"32"};function eb({visible:s,metadata:i}){return N.jsxs("div",{id:"info-container",className:s?"":"hidden",children:[N.jsxs("div",{children:[N.jsx("span",{children:"Uncompressed Length"}),N.jsxs("span",{id:"uncompressedLength",children:[(i?.uncompressedLength??0)>>10,"Kb"]})]}),N.jsxs("div",{children:[N.jsx("span",{children:"SWF Version"}),N.jsx("span",{id:"swfVersion",children:i?.swfVersion})]}),N.jsxs("div",{children:[N.jsx("span",{children:"FP Version"}),N.jsx("span",{id:"flashVersion",children:i?Pg[i.swfVersion]??"Unknown":""})]}),N.jsxs("div",{children:[N.jsx("span",{children:"ActionScript 3"}),N.jsx("span",{id:"isActionScript3",children:i?.isActionScript3?"true":"false"})]}),N.jsxs("div",{children:[N.jsx("span",{children:"Total Frames"}),N.jsx("span",{id:"numFrames",children:i?.numFrames})]}),N.jsxs("div",{children:[N.jsx("span",{children:"Frame Rate"}),N.jsx("span",{id:"frameRate",children:i?.frameRate})]}),N.jsxs("div",{children:[N.jsx("span",{children:"SWF Width"}),N.jsx("span",{id:"width",children:i?.width})]}),N.jsxs("div",{children:[N.jsx("span",{children:"SWF Height"}),N.jsx("span",{id:"height",children:i?.height})]}),N.jsxs("div",{children:[N.jsx("span",{children:"SWF Background Color"}),N.jsx("span",{id:"backgroundColor",style:{backgroundColor:i?.backgroundColor??void 0}})]})]})}function nb({ruffleBaseConfig:s,allowUrlLoading:i,allowSampleSwfs:o}){const[u,f]=on.useState(null),[m,g]=on.useState(!1),[z,j]=on.useState(null),[y,_]=on.useState(!1),M=on.useRef(null),Z=()=>{g(!m)},Q=()=>{M.current?.reload()},I=on.useCallback((re,ln)=>{M.current?.loadUrl(re,ln)},[]),P=re=>{M.current?.loadFile(re)},He=re=>{re.stopPropagation(),re.preventDefault()},Be=re=>{re.stopPropagation(),re.preventDefault(),_(!1)},an=re=>{re.stopPropagation(),re.preventDefault(),_(!0)},Ae=re=>{re.stopPropagation(),re.preventDefault(),_(!1),re.dataTransfer&&(j(re.dataTransfer.files[0].name),M.current?.loadFile(re.dataTransfer.files[0]))};return N.jsxs(N.Fragment,{children:[N.jsx(Ig,{allowUrlLoading:i,allowSampleSwfs:o,onToggleMetadata:Z,onReloadMovie:Q,onSelectUrl:I,onSelectFile:P,selectedFilename:z,setSelectedFilename:j,onFileDragLeave:Be,onFileDragOver:an,onFileDragDrop:Ae}),N.jsxs("div",{id:"main",className:m?"info-container-shown":"",children:[N.jsx(Wg,{id:"player-container","aria-label":"Select a demo or drag an SWF",onLoadedMetadata:f,ref:M,onDragEnter:He,onDragLeave:Be,onDragOver:an,onDragDrop:Ae,baseConfig:s,children:N.jsx("div",{id:"overlay",className:y?"drag":""})}),N.jsx(eb,{visible:m,metadata:u})]})]})}class el{constructor(i,o,u,f,m){this.major=i,this.minor=o,this.patch=u,this.prIdent=f,this.buildIdent=m}static fromSemver(i){const o=i.split("+"),u=o[0].split("-"),f=u[0].split("."),m=parseInt(f[0],10);let g=0,z=0,j=null,y=null;return f[1]!==void 0&&(g=parseInt(f[1],10)),f[2]!==void 0&&(z=parseInt(f[2],10)),u[1]!==void 0&&(j=u[1].split(".")),o[1]!==void 0&&(y=o[1].split(".")),new el(m,g,z,j,y)}isCompatibleWith(i){return this.major!==0&&this.major===i.major||this.major===0&&i.major===0&&this.minor!==0&&this.minor===i.minor||this.major===0&&i.major===0&&this.minor===0&&i.minor===0&&this.patch!==0&&this.patch===i.patch}hasPrecedenceOver(i){if(this.major>i.major)return!0;if(this.major<i.major)return!1;if(this.minor>i.minor)return!0;if(this.minor<i.minor)return!1;if(this.patch>i.patch)return!0;if(this.patch<i.patch)return!1;if(this.prIdent===null&&i.prIdent!==null)return!0;if(this.prIdent!==null&&i.prIdent===null)return!1;if(this.prIdent!==null&&i.prIdent!==null){const o=/^[0-9]*$/;for(let u=0;u<this.prIdent.length&&u<i.prIdent.length;u+=1){const f=o.test(i.prIdent[u]),m=o.test(this.prIdent[u]);if(!m&&f)return!0;if(m&&f){const g=parseInt(this.prIdent[u],10),z=parseInt(i.prIdent[u],10);if(g>z)return!0;if(g<z)return!1}else{if(m&&!f)return!1;if(!m&&!f){if(this.prIdent[u]>i.prIdent[u])return!0;if(this.prIdent[u]<i.prIdent[u])return!1}}}if(this.prIdent.length>i.prIdent.length)return!0;if(this.prIdent.length<i.prIdent.length)return!1}if(this.buildIdent!==null&&i.buildIdent===null)return!0;if(this.buildIdent===null&&i.buildIdent!==null)return!1;if(this.buildIdent!==null&&i.buildIdent!==null){const o=/^[0-9]*$/;for(let u=0;u<this.buildIdent.length&&u<i.buildIdent.length;u+=1){const f=o.test(this.buildIdent[u]),m=o.test(i.buildIdent[u]);if(!f&&m)return!0;if(f&&m){const g=parseInt(this.buildIdent[u],10),z=parseInt(i.buildIdent[u],10);if(g>z)return!0;if(g<z)return!1}else{if(f&&!m)return!1;if(!f&&!m){if(this.buildIdent[u]>i.buildIdent[u])return!0;if(this.buildIdent[u]<i.buildIdent[u])return!1}}}return this.buildIdent.length>i.buildIdent.length}return!1}isEqual(i){return this.major===i.major&&this.minor===i.minor&&this.patch===i.patch}isStableOrCompatiblePrerelease(i){return i.prIdent===null?!0:this.major===i.major&&this.minor===i.minor&&this.patch===i.patch}}class Ws{constructor(i){this.requirements=i}satisfiedBy(i){for(const o of this.requirements){let u=!0;for(const{comparator:f,version:m}of o)u=u&&m.isStableOrCompatiblePrerelease(i),f===""||f==="="?u=u&&m.isEqual(i):f===">"?u=u&&i.hasPrecedenceOver(m):f===">="?u=u&&(i.hasPrecedenceOver(m)||m.isEqual(i)):f==="<"?u=u&&m.hasPrecedenceOver(i):f==="<="?u=u&&(m.hasPrecedenceOver(i)||m.isEqual(i)):f==="^"&&(u=u&&m.isCompatibleWith(i));if(u)return!0}return!1}static fromRequirementString(i){const o=i.split(" ");let u=[];const f=[];for(const m of o)if(m==="||")u.length>0&&(f.push(u),u=[]);else if(m.length>0){const g=/[0-9]/.exec(m);if(g){const z=m.slice(0,g.index).trim(),j=el.fromSemver(m.slice(g.index).trim());u.push({comparator:z,version:j})}}return u.length>0&&f.push(u),new Ws(f)}}class mp{constructor(i){this.sources=i?.sources||{},this.config=i?.config||{},this.invoked=i?.invoked||!1,this.newestName=i?.newestName||null,i?.superseded?.(),document.readyState==="loading"?document.addEventListener("readystatechange",this.init.bind(this)):window.setTimeout(this.init.bind(this),0)}get version(){return"0.1.0"}newestSourceName(){let i=null,o=el.fromSemver("0.0.0");for(const u in this.sources)if(Object.prototype.hasOwnProperty.call(this.sources,u)){const f=el.fromSemver(this.sources[u].version);f.hasPrecedenceOver(o)&&(i=u,o=f)}return i}init(){if(!this.invoked){if(this.invoked=!0,this.newestName=this.newestSourceName(),this.newestName===null)throw new Error("No registered Ruffle source!");("polyfills"in this.config?this.config.polyfills:!0)!==!1&&this.sources[this.newestName].polyfill()}}newest(){const i=this.newestSourceName();return i!==null?this.sources[i]:null}satisfying(i){const o=Ws.fromRequirementString(i);let u=null;for(const f in this.sources)if(Object.prototype.hasOwnProperty.call(this.sources,f)){const m=el.fromSemver(this.sources[f].version);o.satisfiedBy(m)&&(u=this.sources[f])}return u}localCompatible(){return this.sources.local!==void 0?this.satisfying("^"+this.sources.local.version):this.newest()}local(){return this.sources.local!==void 0?this.satisfying("="+this.sources.local.version):this.newest()}superseded(){this.invoked=!0}}const Ln={versionNumber:"0.2.0-nightly.2026.3.1",versionName:"0.2.0-nightly.2026.3.1",versionChannel:"nightly",buildDate:"2026-03-01T00:11:43.320Z",commitHash:"54b2bc673a03f731977d5c56feae0de68c4c5707"};var nl;(function(s){s[s.HaveNothing=0]="HaveNothing",s[s.Loading=1]="Loading",s[s.Loaded=2]="Loaded"})(nl||(nl={}));var Ia={},Cr={},fa={},hs={},pp;function tb(){return pp||(pp=1,Object.defineProperty(hs,"__esModule",{value:!0})),hs}var vs={},hp;function ab(){return hp||(hp=1,Object.defineProperty(vs,"__esModule",{value:!0})),vs}var gs={},vp;function lb(){return vp||(vp=1,Object.defineProperty(gs,"__esModule",{value:!0})),gs}var bs={},gp;function ib(){return gp||(gp=1,Object.defineProperty(bs,"__esModule",{value:!0})),bs}var ys={},bp;function rb(){return bp||(bp=1,Object.defineProperty(ys,"__esModule",{value:!0})),ys}var Dr={},yp;function ob(){if(yp)return Dr;yp=1,Object.defineProperty(Dr,"__esModule",{value:!0}),Dr.classnames=m;const s=g=>Object.entries(g).map(([z,j])=>j&&z),i=g=>!!g,o=(g,z,j)=>j.indexOf(g)===z,u=[];function f(g){return g?typeof g=="string"?[g]:Array.isArray(g)?g.flatMap(f).filter(i):s(g).filter(i):u}function m(g){const z=f(g).filter(o);return z.length>0?z.join(" "):void 0}return Dr}var wp;function ub(){return wp||(wp=1,(function(s){var i=fa&&fa.__createBinding||(Object.create?(function(u,f,m,g){g===void 0&&(g=m);var z=Object.getOwnPropertyDescriptor(f,m);(!z||("get"in z?!f.__esModule:z.writable||z.configurable))&&(z={enumerable:!0,get:function(){return f[m]}}),Object.defineProperty(u,g,z)}):(function(u,f,m,g){g===void 0&&(g=m),u[g]=f[m]})),o=fa&&fa.__exportStar||function(u,f){for(var m in u)m!=="default"&&!Object.prototype.hasOwnProperty.call(f,m)&&i(f,u,m)};Object.defineProperty(s,"__esModule",{value:!0}),o(tb(),s),o(ab(),s),o(lb(),s),o(ib(),s),o(rb(),s),o(ob(),s)})(fa)),fa}var kp;function Jp(){if(kp)return Cr;kp=1,Object.defineProperty(Cr,"__esModule",{value:!0}),Cr.setAttributes=u;const s=ub();function i(f,m){for(const g of Object.keys(f))g in m&&(m[g]=f[g])}const o=new RegExp("^on\\p{Lu}","u");function u(f,m){for(const g of Object.keys(m)){if(g==="__source"||g==="__self"||g==="tsxTag")continue;const z=m[g];if(g==="class"){const j=(0,s.classnames)(z);j&&f.setAttribute(g,j)}else if(g==="ref")z.current=f;else if(o.test(g)){const j=g.replace(/Capture$/,""),y=g!==j,_=j.toLowerCase().substring(2);f.addEventListener(_,z,y)}else g==="style"&&typeof z!="string"?i(z,f.style):g==="dangerouslySetInnerHTML"?f.innerHTML=z:z===!0?f.setAttribute(g,g):(z||z===0||z==="")&&f.setAttribute(g,z.toString())}}return Cr}var Pa={},zp;function Kp(){if(zp)return Pa;zp=1,Object.defineProperty(Pa,"__esModule",{value:!0}),Pa.applyChildren=i,Pa.createDomElement=o,Pa.applyTsxTag=u;function s(f,m){m instanceof Element?f.appendChild(m):typeof m=="string"||typeof m=="number"?f.appendChild(document.createTextNode(m.toString())):console.warn("Unknown type to append: ",m)}function i(f,m){for(const g of m)!g&&g!==0||(Array.isArray(g)?i(f,g):s(f,g))}function o(f,m){const g=m?.is?{is:m.is}:void 0;return m?.xmlns?document.createElementNS(m.xmlns,f,g):document.createElement(f,g)}function u(f,m){let g=f,z=m;return z&&"tsxTag"in z&&(g=z.tsxTag,!z.is&&f.includes("-")&&(z={...z,is:f})),{finalTag:g,finalAttrs:z}}return Pa}var Rp;function Js(){if(Rp)return Ia;Rp=1,Object.defineProperty(Ia,"__esModule",{value:!0}),Ia.jsx=o,Ia.jsxs=o,Ia.jsxDEV=o;const s=Jp(),i=Kp();function o(u,f){if(typeof u=="function")return u(f);const{children:m,...g}=f,{finalTag:z,finalAttrs:j}=(0,i.applyTsxTag)(u,g),y=(0,i.createDomElement)(z,j);return(0,s.setAttributes)(y,j),(0,i.applyChildren)(y,[m]),y}return Ia}var T=Js(),il;(function(s){s.On="on",s.Off="off",s.Auto="auto"})(il||(il={}));var Br;(function(s){s.Off="off",s.Fullscreen="fullscreen",s.On="on"})(Br||(Br={}));var ci;(function(s){s.Visible="visible",s.Hidden="hidden"})(ci||(ci={}));var Fr;(function(s){s.Error="error",s.Warn="warn",s.Info="info",s.Debug="debug",s.Trace="trace"})(Fr||(Fr={}));var Vr;(function(s){s.Window="window",s.Opaque="opaque",s.Transparent="transparent",s.Direct="direct",s.Gpu="gpu"})(Vr||(Vr={}));var Yr;(function(s){s.WebGpu="webgpu",s.WgpuWebgl="wgpu-webgl",s.Webgl="webgl",s.Canvas="canvas"})(Yr||(Yr={}));var tl;(function(s){s.On="on",s.RightClickOnly="rightClickOnly",s.Off="off"})(tl||(tl={}));var Ds;(function(s){s.AIR="air",s.FlashPlayer="flashPlayer"})(Ds||(Ds={}));var Ms;(function(s){s.Allow="allow",s.Confirm="confirm",s.Deny="deny"})(Ms||(Ms={}));var _s;(function(s){s.All="all",s.Internal="internal",s.None="none"})(_s||(_s={}));var qs;(function(s){s.Always="always",s.Never="never",s.Smart="smart"})(qs||(qs={}));var Us;(function(s){s.Embedded="embedded",s.Canvas="canvas"})(Us||(Us={}));var Sp;(function(s){s.South="south",s.East="east",s.North="north",s.West="west",s.LeftTrigger="left-trigger",s.LeftTrigger2="left-trigger-2",s.RightTrigger="right-trigger",s.RightTrigger2="right-trigger-2",s.Select="select",s.Start="start",s.DPadUp="dpad-up",s.DPadDown="dpad-down",s.DPadLeft="dpad-left",s.DPadRight="dpad-right"})(Sp||(Sp={}));const sb={allowScriptAccess:!1,parameters:{},autoplay:il.Auto,backgroundColor:null,letterbox:Br.Fullscreen,unmuteOverlay:ci.Visible,upgradeToHttps:!0,compatibilityRules:!0,favorFlash:!0,warnOnUnsupportedContent:!0,logLevel:Fr.Error,showSwfDownload:!1,contextMenu:tl.On,preloader:!0,splashScreen:!0,maxExecutionDuration:15,base:null,menu:!0,allowFullscreen:!1,salign:"",fullScreenAspectRatio:"",forceAlign:!1,quality:null,scale:"showAll",forceScale:!1,frameRate:null,wmode:Vr.Window,publicPath:null,polyfills:!0,playerVersion:null,preferredRenderer:null,openUrlMode:Ms.Allow,allowNetworking:_s.All,openInNewTab:null,socketProxy:[],fontSources:[],defaultFonts:{},credentialAllowList:[],playerRuntime:Ds.FlashPlayer,gamepadButtonMapping:{},urlRewriteRules:[],scrollingBehavior:qs.Smart,deviceFontRenderer:Us.Embedded},cb=`:host{all:initial;pointer-events:inherit;--ruffle-blue:#37528c;--ruffle-orange:#ffad33;display:inline-block;font-family:Arial,sans-serif;height:400px;letter-spacing:.4px;position:relative;touch-action:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:550px;-webkit-tap-highlight-color:transparent}:host(:-webkit-full-screen){display:block;height:100%!important;width:100%!important}.hidden{display:none!important}#container,#message-overlay,#panic,#play-button,#splash-screen,#unmute-overlay,#unmute-overlay .background{inset:0;position:absolute}#container{outline:none;overflow:hidden}#container canvas{height:100%;width:100%}#play-button,#unmute-overlay{cursor:pointer;display:none}#unmute-overlay .background{background:#000;opacity:.7}#play-button .icon,#unmute-overlay .icon{height:50%;left:50%;max-height:384px;max-width:384px;opacity:.8;position:absolute;top:50%;transform:translate(-50%,-50%);width:50%}#play-button:hover .icon,#unmute-overlay:hover .icon{opacity:1}#unmute-overlay-svg{scale:.8}#panic{background:linear-gradient(180deg,#fd3a40,#fda138);color:#fff;display:flex;flex-flow:column;font-size:20px;justify-content:space-around;overflow:auto;text-align:center}#panic a{color:var(--ruffle-blue);font-weight:700}#panic-title{font-size:xxx-large;font-weight:700}#panic-body.details{flex:0.9;margin:0 10px}#panic-body textarea{height:100%;resize:none;width:100%}#panic ul{display:flex;justify-content:space-evenly;list-style-type:none;padding:0}#message-overlay{align-items:center;background:var(--ruffle-blue);color:var(--ruffle-orange);display:flex;justify-content:center;opacity:1;overflow:auto;position:absolute;z-index:2}#message-overlay .message{font-size:20px;max-height:100%;max-width:100%;padding:5%;text-align:center}#message-overlay p{margin:.5em 0}#message-overlay .message div{-moz-column-gap:1em;column-gap:1em;display:flex;flex-wrap:wrap;justify-content:center}#message-overlay a,#message-overlay button{background:var(--ruffle-blue);border:2px solid var(--ruffle-orange);border-radius:.6em;color:var(--ruffle-orange);cursor:pointer;font-size:1.25em;font-weight:700;margin:2% 0;padding:10px;text-decoration:none}#message-overlay a:hover,#message-overlay button:hover{background:#ffffff4c}#continue-btn{background:var(--ruffle-blue);border:2px solid var(--ruffle-orange);border-radius:20px;color:var(--ruffle-orange);cursor:pointer;font-size:20px;font-weight:700;padding:10px}#continue-btn:hover{background:#ffffff4c}#context-menu-overlay,.modal{height:100%;position:absolute;width:100%;z-index:1}#context-menu{background-color:var(--modal-background);border:1px solid gray;box-shadow:0 5px 10px -5px #000;color:rgb(var(--modal-foreground-rgb));font-size:14px;list-style:none;margin:0;padding:3px 0;position:absolute;text-align:start;white-space:nowrap}#context-menu .menu-item{color:rgb(var(--modal-foreground-rgb));padding:5px 10px}#context-menu .menu-item.disabled{color:rgb(var(--modal-foreground-rgb),.5);cursor:default}#context-menu .menu-item:not(.disabled):hover{background-color:rgb(var(--modal-foreground-rgb),.15)}#context-menu .menu-separator hr{border:none;border-bottom:1px solid rgb(var(--modal-foreground-rgb),.2);margin:3px}#splash-screen{align-items:center;background:var(
        --splash-screen-background,var(--preloader-background,var(--ruffle-blue))
    );display:flex;flex-direction:column;justify-content:center}.loadbar{background:#253559;height:20%;max-height:10px;max-width:316px;width:100%}.loadbar-inner{background:var(--ruffle-orange);height:100%;max-width:100%;width:0}.logo{display:var(--logo-display,block);max-height:150px;max-width:380px}.loading-animation{aspect-ratio:1;margin-bottom:2%;max-height:28px;max-width:28px;width:10%}.spinner{stroke-dasharray:180;stroke-dashoffset:135;stroke:var(--ruffle-orange);animation:a 1.5s linear infinite;transform-origin:50% 50%}@keyframes a{to{transform:rotate(1turn)}}#virtual-keyboard{height:1px;opacity:0;position:absolute;top:-100px;width:1px}.modal{background-color:#0008}.modal-area{background-color:var(--modal-background);border-radius:12px;box-shadow:0 2px 6px 0 #0008;color:rgb(var(--modal-foreground-rgb));left:50%;padding:8px 12px;position:relative;transform:translateX(-50%);width:-moz-fit-content;width:fit-content}#modal-area{height:300px;width:450px}.close-modal{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 -960 960 960'%3E%3Cpath d='M480-392 300-212q-18 18-44 18t-44-18-18-44 18-44l180-180-180-180q-18-18-18-44t18-44 44-18 44 18l180 180 180-180q18-18 44-18t44 18 18 44-18 44L568-480l180 180q18 18 18 44t-18 44-44 18-44-18z'/%3E%3C/svg%3E");cursor:pointer;filter:var(--modal-foreground-filter);height:16px;width:16px}.modal-button{background-color:rgb(var(--modal-foreground-rgb),.2);border-radius:6px;color:rgb(var(--modal-foreground-rgb));cursor:pointer;display:inline-block;padding:4px 8px;text-decoration:none}:not(#volume-controls)>.close-modal{position:absolute;right:16px;top:14px}.general-save-options{border-bottom:2px solid rgb(var(--modal-foreground-rgb),.3);padding-bottom:8px;text-align:center}#local-saves{border-collapse:collapse;color:inherit;display:block;height:calc(100% - 45px);min-height:30px;overflow-y:auto}#local-saves td{border-bottom:2px solid rgb(var(--modal-foreground-rgb),.15);height:30px}#local-saves td:first-child{width:100%;word-break:break-all}.save-option{cursor:pointer;display:inline-block;filter:var(--modal-foreground-filter);height:24px;opacity:.4;vertical-align:middle;width:24px}#local-saves>tr:hover .save-option{opacity:1}#download-save{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 -960 960 960'%3E%3Cpath d='M480-337q-8 0-15-2.5t-13-8.5L308-492q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T365-549l75 75v-286q0-17 11.5-28.5T480-800t28.5 11.5T520-760v286l75-75q12-12 28.5-11.5T652-548q11 12 11.5 28T652-492L508-348q-6 6-13 8.5t-15 2.5M240-160q-33 0-56.5-23.5T160-240v-80q0-17 11.5-28.5T200-360t28.5 11.5T240-320v80h480v-80q0-17 11.5-28.5T760-360t28.5 11.5T800-320v80q0 33-23.5 56.5T720-160z'/%3E%3C/svg%3E")}#replace-save{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 -1080 960 1200'%3E%3Cpath d='M440-367v127q0 17 11.5 28.5T480-200t28.5-11.5T520-240v-127l36 36q6 6 13.5 9t15 2.5T599-323t13-9q11-12 11.5-28T612-388L508-492q-6-6-13-8.5t-15-2.5-15 2.5-13 8.5L348-388q-12 12-11.5 28t12.5 28q12 11 28 11.5t28-11.5zM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v447q0 33-23.5 56.5T720-80zm280-560q0 17 11.5 28.5T560-600h160L520-800z'/%3E%3C/svg%3E")}#delete-save{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 -1020 960 1080'%3E%3Cpath d='M280-120q-33 0-56.5-23.5T200-200v-520q-17 0-28.5-11.5T160-760t11.5-28.5T200-800h160q0-17 11.5-28.5T400-840h160q17 0 28.5 11.5T600-800h160q17 0 28.5 11.5T800-760t-11.5 28.5T760-720v520q0 33-23.5 56.5T680-120zm120-160q17 0 28.5-11.5T440-320v-280q0-17-11.5-28.5T400-640t-28.5 11.5T360-600v280q0 17 11.5 28.5T400-280m160 0q17 0 28.5-11.5T600-320v-280q0-17-11.5-28.5T560-640t-28.5 11.5T520-600v280q0 17 11.5 28.5T560-280'/%3E%3C/svg%3E")}.replace-save{display:none}#video-modal .modal-area{box-sizing:border-box;height:95%;width:95%}#video-holder{box-sizing:border-box;height:100%;padding:36px 4px 6px}#video-holder video{background-color:#000;height:100%;width:100%}#volume-controls{align-items:center;display:flex;gap:6px}#mute-checkbox{display:none}label[for=mute-checkbox]{cursor:pointer;filter:var(--modal-foreground-filter);height:24px;line-height:0;width:24px}#volume-mute{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 -960 960 960'%3E%3Cpath d='m719.13-419.35-71.67 71.68Q634.78-335 617.13-335t-30.33-12.67q-12.67-12.68-12.67-30.33t12.67-30.33L658.48-480l-71.68-71.67q-12.67-12.68-12.67-30.33t12.67-30.33Q599.48-625 617.13-625t30.33 12.67l71.67 71.68 71.67-71.68Q803.48-625 821.13-625t30.33 12.67q12.67 12.68 12.67 30.33t-12.67 30.33L779.78-480l71.68 71.67q12.67 12.68 12.67 30.33t-12.67 30.33Q838.78-335 821.13-335t-30.33-12.67zM278-357.87H161.22q-17.66 0-30.33-12.67-12.67-12.68-12.67-30.33v-158.26q0-17.65 12.67-30.33 12.67-12.67 30.33-12.67H278l130.15-129.91q20.63-20.63 46.98-9.45 26.35 11.19 26.35 39.77v443.44q0 28.58-26.35 39.77-26.35 11.18-46.98-9.45z'/%3E%3C/svg%3E")}#volume-min{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='161 -960 960 960'%3E%3Cpath d='M438.65-357.87H321.87q-17.65 0-30.33-12.67-12.67-12.68-12.67-30.33v-158.26q0-17.65 12.67-30.33 12.68-12.67 30.33-12.67h116.78L568.8-732.04q20.63-20.63 46.98-9.45 26.35 11.19 26.35 39.77v443.44q0 28.58-26.35 39.77-26.35 11.18-46.98-9.45z'/%3E%3C/svg%3E")}#volume-mid{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='80 -960 960 960'%3E%3Cpath d='M357.98-357.87H241.2q-17.66 0-30.33-12.67-12.67-12.68-12.67-30.33v-158.26q0-17.65 12.67-30.33 12.67-12.67 30.33-12.67h116.78L487.65-731.8q20.63-20.64 47.1-9.57t26.47 39.65v443.44q0 28.58-26.47 39.65t-47.1-9.57zM741.8-480q0 42.48-20.47 80.09-20.48 37.61-54.94 60.82-10.22 5.98-20.19.25-9.98-5.73-9.98-17.44v-248.44q0-11.71 9.98-17.32 9.97-5.61 20.19.37 34.46 23.71 54.94 61.45Q741.8-522.48 741.8-480'/%3E%3C/svg%3E")}#volume-max{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='9 -960 960 960'%3E%3Cpath d='M754.22-480.5q0-78.52-41.88-143.9t-111.91-98.62q-14.47-6.74-20.47-20.96t-.53-28.93q5.74-15.72 20.34-22.46t29.58 0q92.48 42.46 147.97 127.05 55.48 84.6 55.48 187.82t-55.48 187.82q-55.49 84.59-147.97 127.05-14.98 6.74-29.58 0t-20.34-22.46q-5.47-14.71.53-28.93t20.47-20.96q70.03-33.24 111.91-98.62t41.88-143.9M286.98-357.87H170.2q-17.66 0-30.33-12.67-12.67-12.68-12.67-30.33v-158.26q0-17.65 12.67-30.33 12.67-12.67 30.33-12.67h116.78L416.65-731.8q20.63-20.64 47.1-9.57t26.47 39.65v443.44q0 28.58-26.47 39.65t-47.1-9.57zM670.8-480q0 42.48-20.47 80.09-20.48 37.61-54.94 60.82-10.22 5.98-20.19.25-9.98-5.73-9.98-17.44v-248.44q0-11.71 9.98-17.32 9.97-5.61 20.19.37 34.46 23.71 54.94 61.45Q670.8-522.48 670.8-480'/%3E%3C/svg%3E")}#volume-slider-text{text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:4.8ch}#hardware-acceleration-modal .modal-area{box-sizing:border-box;padding:16px 48px;text-align:center;width:95%}#acceleration-text{display:block;margin-bottom:8px}#clipboard-modal h2{margin-right:36px;margin-top:4px}#clipboard-modal p:last-child{margin-bottom:2px}@media (prefers-color-scheme:light){:host{--modal-background:#fafafa;--modal-foreground-rgb:0,0,0;--modal-foreground-filter:none}}@media (prefers-color-scheme:dark){:host{--modal-background:#282828;--modal-foreground-rgb:221,221,221;--modal-foreground-filter:invert(90%)}}`;function fb(){return T.jsx("style",{children:cb})}function db(){return T.jsx("style",{id:"dynamic-styles"})}function mb(){return T.jsxs("div",{id:"container",children:[T.jsx("div",{id:"play-button",children:T.jsx("div",{class:"icon",children:T.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",viewBox:"0 0 250 250",width:"100%",height:"100%",children:[T.jsxs("defs",{xmlns:"http://www.w3.org/2000/svg",children:[T.jsxs("linearGradient",{xmlns:"http://www.w3.org/2000/svg",id:"a",gradientUnits:"userSpaceOnUse",x1:"125",y1:"0",x2:"125",y2:"250",spreadMethod:"pad",children:[T.jsx("stop",{xmlns:"http://www.w3.org/2000/svg",offset:"0%","stop-color":"#FDA138"}),T.jsx("stop",{xmlns:"http://www.w3.org/2000/svg",offset:"100%","stop-color":"#FD3A40"})]}),T.jsxs("g",{xmlns:"http://www.w3.org/2000/svg",id:"b",children:[T.jsx("path",{xmlns:"http://www.w3.org/2000/svg",fill:"url(#a)",d:"M250 125q0-52-37-88-36-37-88-37T37 37Q0 73 0 125t37 88q36 37 88 37t88-37q37-36 37-88M87 195V55l100 70-100 70z"}),T.jsx("path",{xmlns:"http://www.w3.org/2000/svg",fill:"#FFF",d:"M87 55v140l100-70L87 55z"})]})]}),T.jsx("use",{xmlns:"http://www.w3.org/2000/svg",href:"#b"})]})})}),T.jsxs("div",{id:"unmute-overlay",children:[T.jsx("div",{class:"background"}),T.jsx("div",{class:"icon",children:T.jsxs("svg",{id:"unmute-overlay-svg",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",viewBox:"0 0 512 584",width:"100%",height:"100%",children:[T.jsx("path",{xmlns:"http://www.w3.org/2000/svg",fill:"#FFF",stroke:"#FFF",d:"m457.941 256 47.029-47.029c9.372-9.373 9.372-24.568 0-33.941-9.373-9.373-24.568-9.373-33.941 0l-47.029 47.029-47.029-47.029c-9.373-9.373-24.568-9.373-33.941 0-9.372 9.373-9.372 24.568 0 33.941l47.029 47.029-47.029 47.029c-9.372 9.373-9.372 24.568 0 33.941 4.686 4.687 10.827 7.03 16.97 7.03s12.284-2.343 16.971-7.029l47.029-47.03 47.029 47.029c4.687 4.687 10.828 7.03 16.971 7.03s12.284-2.343 16.971-7.029c9.372-9.373 9.372-24.568 0-33.941z"}),T.jsx("path",{xmlns:"http://www.w3.org/2000/svg",fill:"#FFF",stroke:"#FFF",d:"m99 160h-55c-24.301 0-44 19.699-44 44v104c0 24.301 19.699 44 44 44h55c2.761 0 5-2.239 5-5v-182c0-2.761-2.239-5-5-5z"}),T.jsx("path",{xmlns:"http://www.w3.org/2000/svg",fill:"#FFF",stroke:"#FFF",d:"m280 56h-24c-5.269 0-10.392 1.734-14.578 4.935l-103.459 79.116c-1.237.946-1.963 2.414-1.963 3.972v223.955c0 1.557.726 3.026 1.963 3.972l103.459 79.115c4.186 3.201 9.309 4.936 14.579 4.936h23.999c13.255 0 24-10.745 24-24v-352.001c0-13.255-10.745-24-24-24z"}),T.jsx("text",{xmlns:"http://www.w3.org/2000/svg",id:"unmute-text",x:"256",y:"560","text-anchor":"middle","font-size":"60px",fill:"#FFF",stroke:"#FFF",children:"Click to unmute"})]})})]}),T.jsx("input",{"aria-hidden":"true",id:"virtual-keyboard",type:"text",autocomplete:"off",autocorrect:"off",autocapitalize:"none"})]})}function pb(){return T.jsxs("div",{id:"splash-screen",class:"hidden",children:[T.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",class:"logo",preserveAspectRatio:"xMidYMid",viewBox:"0 0 380 150",children:T.jsxs("g",{xmlns:"http://www.w3.org/2000/svg",children:[T.jsx("path",{xmlns:"http://www.w3.org/2000/svg",fill:"#966214",d:"M58.75 85.6q.75-.1 1.5-.35.85-.25 1.65-.75.55-.35 1.05-.8.5-.45.95-1 .5-.5.75-1.2-.05.05-.15.1-.1.15-.25.25l-.1.2q-.15.05-.25.1-.4 0-.8.05-.5-.25-.9-.5-.3-.1-.55-.3l-.6-.6-4.25-6.45-1.5 11.25h3.45m83.15-.2h3.45q.75-.1 1.5-.35.25-.05.45-.15.35-.15.65-.3l.5-.3q.25-.15.5-.35.45-.35.9-.75.45-.35.75-.85l.1-.1q.1-.2.2-.35.2-.3.35-.6l-.3.4-.15.15q-.5.15-1.1.1-.25 0-.4-.05-.5-.15-.8-.4-.15-.1-.25-.25-.3-.3-.55-.6l-.05-.05v-.05l-4.25-6.4-1.5 11.25m-21.15-3.95q-.3-.3-.55-.6l-.05-.05v-.05l-4.25-6.4-1.5 11.25h3.45q.75-.1 1.5-.35.85-.25 1.6-.75.75-.5 1.4-1.1.45-.35.75-.85.35-.5.65-1.05l-.45.55q-.5.15-1.1.1-.9 0-1.45-.7m59.15.3q-.75-.5-1.4-1-3.15-2.55-3.5-6.4l-1.5 11.25h21q-3.1-.25-5.7-.75-5.6-1.05-8.9-3.1m94.2 3.85h3.45q.6-.1 1.2-.3.4-.1.75-.2.35-.15.65-.3.7-.35 1.35-.8.75-.55 1.3-1.25.1-.15.25-.3-2.55-.25-3.25-1.8l-4.2-6.3-1.5 11.25m-45.3-4.85q-.5-.4-.9-.8-2.3-2.35-2.6-5.6l-1.5 11.25h21q-11.25-.95-16-4.85m97.7 4.85q-.3-.05-.6-.05-10.8-1-15.4-4.8-3.15-2.55-3.5-6.35l-1.5 11.2h21Z"}),T.jsx("path",{xmlns:"http://www.w3.org/2000/svg",fill:"var(--ruffle-orange)",d:"M92.6 54.8q-1.95-1.4-4.5-1.4H60.35q-1.35 0-2.6.45-1.65.55-3.15 1.8-2.75 2.25-3.25 5.25l-1.65 12h.05v.3l5.85 1.15h-9.5q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45-.5.3-.95.7-.45.35-.85.8-.35.4-.65.85-.3.45-.5.9-.15.45-.3.95l-5.85 41.6H50.3l5-35.5 1.5-11.25 4.25 6.45.6.6q.25.2.55.3.4.25.9.5.4-.05.8-.05.1-.05.25-.1l.1-.2q.15-.1.25-.25.1-.05.15-.1l.3-1.05 1.75-12.3h11.15L75.8 82.6h16.5l2.3-16.25h-.05l.8-5.7q.4-2.45-1-4.2-.35-.4-.75-.8-.25-.25-.55-.5-.2-.2-.45-.35m16.2 18.1h.05l-.05.3 5.85 1.15H105.2q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45-.5.3-1 .65-.4.4-.8.85-.25.3-.55.65-.05.1-.15.2-.25.45-.4.9-.2.45-.3.95-.1.65-.2 1.25-.2 1.15-.4 2.25l-4.3 30.6q-.25 3 1.75 5.25 1.6 1.8 4 2.15.6.1 1.25.1h27.35q3.25 0 6-2.25.35-.35.7-.55l.3-.2q2-2 2.25-4.5l1.65-11.6q.05-.05.1-.05l1.65-11.35h.05l.7-5.2 1.5-11.25 4.25 6.4v.05l.05.05q.25.3.55.6.1.15.25.25.3.25.8.4.15.05.4.05.6.05 1.1-.1l.15-.15.3-.4.3-1.05 1.3-9.05h-.05l.7-5.05h-.05l.15-1.25h-.05l1.65-11.7h-16.25l-2.65 19.5h.05v.2l-.05.1h.05l5.8 1.15H132.7q-.5.05-1 .15-.5.15-1 .35-.15.05-.3.15-.3.1-.55.25-.05 0-.1.05-.5.3-1 .65-.4.35-.7.7-.55.7-.95 1.45-.35.65-.55 1.4-.15.7-.25 1.4v.05q-.15 1.05-.35 2.05l-1.2 8.75v.1l-2.1 14.7H111.4l2.25-15.55h.05l.7-5.2 1.5-11.25 4.25 6.4v.05l.05.05q.25.3.55.6.55.7 1.45.7.6.05 1.1-.1l.45-.55.3-1.05 1.3-9.05h-.05l.7-5.05h-.05l.15-1.25h-.05l1.65-11.7h-16.25l-2.65 19.5m106.5-41.75q-2.25-2.25-5.5-2.25h-27.75q-3 0-5.75 2.25-1.3.95-2.05 2.1-.45.6-.7 1.2-.2.5-.35 1-.1.45-.15.95l-4.15 29.95h-.05l-.7 5.2h-.05l-.2 1.35h.05l-.05.3 5.85 1.15h-9.45q-2.1.05-3.95 1.6-1.9 1.55-2.25 3.55l-.5 3.5h-.05l-5.3 38.1h16.25l5-35.5 1.5-11.25q.35 3.85 3.5 6.4.65.5 1.4 1 3.3 2.05 8.9 3.1 2.6.5 5.7.75l1.75-11.25h-12.2l.4-2.95h-.05l.7-5.05h-.05q.1-.9.3-1.9.1-.75.2-1.6.85-5.9 2.15-14.9 0-.15.05-.25l.1-.9q.2-1.55.45-3.15h11.25l-3.1 20.8h16.5l4.1-28.05q.15-1.7-.4-3.15-.5-1.1-1.35-2.1m46.65 44.15q-.5.3-1 .65-.4.4-.8.85-.35.4-.7.85-.25.45-.45.9-.15.45-.3.95l-5.85 41.6h16.25l5-35.5 1.5-11.25 4.2 6.3q.7 1.55 3.25 1.8l.05-.1q.25-.4.35-.85l.3-1.05 1.8-14.05v-.05l5.35-37.45h-16.25l-6.15 44.3 5.85 1.15h-9.45q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45m5.4-38.9q.15-1.7-.4-3.15-.5-1.1-1.35-2.1-2.25-2.25-5.5-2.25h-27.75q-2.3 0-4.45 1.35-.65.35-1.3.9-1.3.95-2.05 2.1-.45.6-.7 1.2-.4.9-.5 1.95l-4.15 29.95h-.05l-.7 5.2h-.05l-.2 1.35h.05l-.05.3 5.85 1.15h-9.45q-2.1.05-3.95 1.6-1.9 1.55-2.25 3.55l-.5 3.5h-.05l-1.2 8.75v.1l-4.1 29.25h16.25l5-35.5 1.5-11.25q.3 3.25 2.6 5.6.4.4.9.8 4.75 3.9 16 4.85l1.75-11.25h-12.2l.4-2.95h-.05l.7-5.05h-.05q.15-.9.3-1.9.1-.75.25-1.6.15-1.25.35-2.65v-.05q.95-6.7 2.35-16.5h11.25l-3.1 20.8h16.5l4.1-28.05M345 66.35h-.05l1.15-8.2q.5-3-1.75-5.25-1.25-1.25-3-1.75-1-.5-2.25-.5h-27.95q-.65 0-1.3.1-2.5.35-4.7 2.15-2.75 2.25-3.25 5.25l-1.95 14.7v.05l-.05.3 5.85 1.15h-9.45q-1.9.05-3.6 1.35-.2.1-.35.25-1.9 1.55-2.25 3.55l-4.85 34.1q-.25 3 1.75 5.25 1.25 1.4 3 1.95 1.05.3 2.25.3H320q3.25 0 6-2.25 2.75-2 3.25-5l2.75-18.5h-16.5l-1.75 11H302.5l2.1-14.75h.05l.85-6 1.5-11.2q.35 3.8 3.5 6.35 4.6 3.8 15.4 4.8.3 0 .6.05h15.75L345 66.35m-16.4-.95-1.25 8.95h-11.3l.4-2.95h-.05l.7-5.05h-.1l.15-.95h11.45Z"})]})}),T.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",class:"loading-animation",viewBox:"0 0 66 66",children:T.jsx("circle",{xmlns:"http://www.w3.org/2000/svg",class:"spinner",fill:"none","stroke-width":"6","stroke-linecap":"round",cx:"33",cy:"33",r:"30"})}),T.jsx("div",{class:"loadbar",children:T.jsx("div",{class:"loadbar-inner"})})]})}function hb(){return T.jsx("div",{id:"save-manager",class:"modal hidden",children:T.jsxs("div",{id:"modal-area",class:"modal-area",children:[T.jsx("span",{class:"close-modal"}),T.jsx("div",{class:"general-save-options",children:T.jsx("span",{class:"modal-button"})}),T.jsx("table",{id:"local-saves"})]})})}class al{constructor(i){this.value=i}valueOf(){return this.value}}class Qe extends al{constructor(i="???"){super(i)}toString(i){return`{${this.value}}`}}class dt extends al{constructor(i,o={}){super(i),this.opts=o}toString(i){if(i)try{return i.memoizeIntlObject(Intl.NumberFormat,this.opts).format(this.value)}catch(o){i.reportError(o)}return this.value.toString(10)}}class Gt extends al{static supportsValue(i){if(typeof i=="number"||i instanceof Date)return!0;if(i instanceof al)return Gt.supportsValue(i.valueOf());if("Temporal"in globalThis){const o=globalThis.Temporal;if(i instanceof o.Instant||i instanceof o.PlainDateTime||i instanceof o.PlainDate||i instanceof o.PlainMonthDay||i instanceof o.PlainTime||i instanceof o.PlainYearMonth)return!0}return!1}constructor(i,o={}){i instanceof Gt?(o={...i.opts,...o},i=i.value):i instanceof al&&(i=i.valueOf()),typeof i=="object"&&"calendarId"in i&&o.calendar===void 0&&(o={...o,calendar:i.calendarId}),super(i),this.opts=o}[Symbol.toPrimitive](i){return i==="string"?this.toString():this.toNumber()}toNumber(){const i=this.value;if(typeof i=="number")return i;if(i instanceof Date)return i.getTime();if("epochMilliseconds"in i)return i.epochMilliseconds;if("toZonedDateTime"in i)return i.toZonedDateTime("UTC").epochMilliseconds;throw new TypeError("Unwrapping a non-number value as a number")}toString(i){if(i)try{return i.memoizeIntlObject(Intl.DateTimeFormat,this.opts).format(this.value)}catch(o){i.reportError(o)}return typeof this.value=="number"||this.value instanceof Date?new Date(this.value).toISOString():this.value.toString()}}const jp=100,vb="⁨",gb="⁩";function bb(s,i,o){if(o===i||o instanceof dt&&i instanceof dt&&o.value===i.value)return!0;if(i instanceof dt&&typeof o=="string"){let u=s.memoizeIntlObject(Intl.PluralRules,i.opts).select(i.value);if(o===u)return!0}return!1}function xp(s,i,o){return i[o]?rl(s,i[o].value):(s.reportError(new RangeError("No default")),new Qe)}function Ns(s,i){const o=[],u=Object.create(null);for(const f of i)f.type==="narg"?u[f.name]=fi(s,f.value):o.push(fi(s,f));return{positional:o,named:u}}function fi(s,i){switch(i.type){case"str":return i.value;case"num":return new dt(i.value,{minimumFractionDigits:i.precision});case"var":return yb(s,i);case"mesg":return wb(s,i);case"term":return kb(s,i);case"func":return zb(s,i);case"select":return Rb(s,i);default:return new Qe}}function yb(s,{name:i}){let o;if(s.params)if(Object.prototype.hasOwnProperty.call(s.params,i))o=s.params[i];else return new Qe(`$${i}`);else if(s.args&&Object.prototype.hasOwnProperty.call(s.args,i))o=s.args[i];else return s.reportError(new ReferenceError(`Unknown variable: $${i}`)),new Qe(`$${i}`);if(o instanceof al)return o;switch(typeof o){case"string":return o;case"number":return new dt(o);case"object":if(Gt.supportsValue(o))return new Gt(o);default:return s.reportError(new TypeError(`Variable type not supported: $${i}, ${typeof o}`)),new Qe(`$${i}`)}}function wb(s,{name:i,attr:o}){const u=s.bundle._messages.get(i);if(!u)return s.reportError(new ReferenceError(`Unknown message: ${i}`)),new Qe(i);if(o){const f=u.attributes[o];return f?rl(s,f):(s.reportError(new ReferenceError(`Unknown attribute: ${o}`)),new Qe(`${i}.${o}`))}return u.value?rl(s,u.value):(s.reportError(new ReferenceError(`No value: ${i}`)),new Qe(i))}function kb(s,{name:i,attr:o,args:u}){const f=`-${i}`,m=s.bundle._terms.get(f);if(!m)return s.reportError(new ReferenceError(`Unknown term: ${f}`)),new Qe(f);if(o){const z=m.attributes[o];if(z){s.params=Ns(s,u).named;const j=rl(s,z);return s.params=null,j}return s.reportError(new ReferenceError(`Unknown attribute: ${o}`)),new Qe(`${f}.${o}`)}s.params=Ns(s,u).named;const g=rl(s,m.value);return s.params=null,g}function zb(s,{name:i,args:o}){let u=s.bundle._functions[i];if(!u)return s.reportError(new ReferenceError(`Unknown function: ${i}()`)),new Qe(`${i}()`);if(typeof u!="function")return s.reportError(new TypeError(`Function ${i}() is not callable`)),new Qe(`${i}()`);try{let f=Ns(s,o);return u(f.positional,f.named)}catch(f){return s.reportError(f),new Qe(`${i}()`)}}function Rb(s,{selector:i,variants:o,star:u}){let f=fi(s,i);if(f instanceof Qe)return xp(s,o,u);for(const m of o){const g=fi(s,m.key);if(bb(s,f,g))return rl(s,m.value)}return xp(s,o,u)}function Ip(s,i){if(s.dirty.has(i))return s.reportError(new RangeError("Cyclic reference")),new Qe;s.dirty.add(i);const o=[],u=s.bundle._useIsolating&&i.length>1;for(const f of i){if(typeof f=="string"){o.push(s.bundle._transform(f));continue}if(s.placeables++,s.placeables>jp)throw s.dirty.delete(i),new RangeError(`Too many placeables expanded: ${s.placeables}, max allowed is ${jp}`);u&&o.push(vb),o.push(fi(s,f).toString(s)),u&&o.push(gb)}return s.dirty.delete(i),o.join("")}function rl(s,i){return typeof i=="string"?s.bundle._transform(i):Ip(s,i)}class Sb{constructor(i,o,u){this.dirty=new WeakSet,this.params=null,this.placeables=0,this.bundle=i,this.errors=o,this.args=u}reportError(i){if(!this.errors||!(i instanceof Error))throw i;this.errors.push(i)}memoizeIntlObject(i,o){let u=this.bundle._intls.get(i);u||(u={},this.bundle._intls.set(i,u));let f=JSON.stringify(o);return u[f]||(u[f]=new i(this.bundle.locales,o)),u[f]}}function Ls(s,i){const o=Object.create(null);for(const[u,f]of Object.entries(s))i.includes(u)&&(o[u]=f.valueOf());return o}const Ep=["unitDisplay","currencyDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits"];function jb(s,i){let o=s[0];if(o instanceof Qe)return new Qe(`NUMBER(${o.valueOf()})`);if(o instanceof dt)return new dt(o.valueOf(),{...o.opts,...Ls(i,Ep)});if(o instanceof Gt)return new dt(o.toNumber(),{...Ls(i,Ep)});throw new TypeError("Invalid argument to NUMBER")}const xb=["dateStyle","timeStyle","fractionalSecondDigits","dayPeriod","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName"];function Eb(s,i){let o=s[0];if(o instanceof Qe)return new Qe(`DATETIME(${o.valueOf()})`);if(o instanceof Gt||o instanceof dt)return new Gt(o,Ls(i,xb));throw new TypeError("Invalid argument to DATETIME")}const Ap=new Map;function Ab(s){const i=Array.isArray(s)?s.join(" "):s;let o=Ap.get(i);return o===void 0&&(o=new Map,Ap.set(i,o)),o}class Tb{constructor(i,{functions:o,useIsolating:u=!0,transform:f=m=>m}={}){this._terms=new Map,this._messages=new Map,this.locales=Array.isArray(i)?i:[i],this._functions={NUMBER:jb,DATETIME:Eb,...o},this._useIsolating=u,this._transform=f,this._intls=Ab(i)}hasMessage(i){return this._messages.has(i)}getMessage(i){return this._messages.get(i)}addResource(i,{allowOverrides:o=!1}={}){const u=[];for(let f=0;f<i.body.length;f++){let m=i.body[f];if(m.id.startsWith("-")){if(o===!1&&this._terms.has(m.id)){u.push(new Error(`Attempt to override an existing term: "${m.id}"`));continue}this._terms.set(m.id,m)}else{if(o===!1&&this._messages.has(m.id)){u.push(new Error(`Attempt to override an existing message: "${m.id}"`));continue}this._messages.set(m.id,m)}}return u}formatPattern(i,o=null,u=null){if(typeof i=="string")return this._transform(i);let f=new Sb(this,u,o);try{return Ip(f,i).toString(f)}catch(m){if(f.errors&&m instanceof Error)return f.errors.push(m),new Qe().toString(f);throw m}}}const ws=/^(-?[a-zA-Z][\w-]*) *= */gm,Tp=/\.([a-zA-Z][\w-]*) *= */y,Ob=/\*?\[/y,ks=/(-?[0-9]+(?:\.([0-9]+))?)/y,Cb=/([a-zA-Z][\w-]*)/y,Op=/([$-])?([a-zA-Z][\w-]*)(?:\.([a-zA-Z][\w-]*))?/y,Db=/^[A-Z][A-Z0-9_-]*$/,Mr=/([^{}\n\r]+)/y,Mb=/([^\\"\n\r]*)/y,Cp=/\\([\\"])/y,Dp=/\\u([a-fA-F0-9]{4})|\\U([a-fA-F0-9]{6})/y,_b=/^\n+/,Mp=/ +$/,qb=/ *\r?\n/g,Ub=/( *)$/,Nb=/{\s*/y,_p=/\s*}/y,Lb=/\[\s*/y,Hb=/\s*] */y,Bb=/\s*\(\s*/y,Fb=/\s*->\s*/y,Vb=/\s*:\s*/y,Yb=/\s*,?\s*/y,Zb=/\s+/y;class Gb{constructor(i){this.body=[],ws.lastIndex=0;let o=0;for(;;){let D=ws.exec(i);if(D===null)break;o=ws.lastIndex;try{this.body.push(j(D[1]))}catch(F){if(F instanceof SyntaxError)continue;throw F}}function u(D){return D.lastIndex=o,D.test(i)}function f(D,F){if(i[o]===D)return o++,!0;if(F)throw new F(`Expected ${D}`);return!1}function m(D,F){if(u(D))return o=D.lastIndex,!0;if(F)throw new F(`Expected ${D.toString()}`);return!1}function g(D){D.lastIndex=o;let F=D.exec(i);if(F===null)throw new SyntaxError(`Expected ${D.toString()}`);return o=D.lastIndex,F}function z(D){return g(D)[1]}function j(D){let F=_(),oe=y();if(F===null&&Object.keys(oe).length===0)throw new SyntaxError("Expected message value or attributes");return{id:D,value:F,attributes:oe}}function y(){let D=Object.create(null);for(;u(Tp);){let F=z(Tp),oe=_();if(oe===null)throw new SyntaxError("Expected attribute value");D[F]=oe}return D}function _(){let D;if(u(Mr)&&(D=z(Mr)),i[o]==="{"||i[o]==="}")return M(D?[D]:[],1/0);let F=$e();return F?D?M([D,F],F.length):(F.value=G(F.value,_b),M([F],F.length)):D?G(D,Mp):null}function M(D=[],F){for(;;){if(u(Mr)){D.push(z(Mr));continue}if(i[o]==="{"){D.push(Z());continue}if(i[o]==="}")throw new SyntaxError("Unbalanced closing brace");let Fe=$e();if(Fe){D.push(Fe),F=Math.min(F,Fe.length);continue}break}let oe=D.length-1,De=D[oe];typeof De=="string"&&(D[oe]=G(De,Mp));let gn=[];for(let Fe of D)Fe instanceof qp&&(Fe=Fe.value.slice(0,Fe.value.length-F)),Fe&&gn.push(Fe);return gn}function Z(){m(Nb,SyntaxError);let D=Q();if(m(_p))return D;if(m(Fb)){let F=He();return m(_p,SyntaxError),{type:"select",selector:D,...F}}throw new SyntaxError("Unclosed placeable")}function Q(){if(i[o]==="{")return Z();if(u(Op)){let[,D,F,oe=null]=g(Op);if(D==="$")return{type:"var",name:F};if(m(Bb)){let De=I();if(D==="-")return{type:"term",name:F,attr:oe,args:De};if(Db.test(F))return{type:"func",name:F,args:De};throw new SyntaxError("Function names must be all upper-case")}return D==="-"?{type:"term",name:F,attr:oe,args:[]}:{type:"mesg",name:F,attr:oe}}return an()}function I(){let D=[];for(;;){switch(i[o]){case")":return o++,D;case void 0:throw new SyntaxError("Unclosed argument list")}D.push(P()),m(Yb)}}function P(){let D=Q();return D.type!=="mesg"?D:m(Vb)?{type:"narg",name:D.name,value:an()}:D}function He(){let D=[],F=0,oe;for(;u(Ob);){f("*")&&(oe=F);let De=Be(),gn=_();if(gn===null)throw new SyntaxError("Expected variant value");D[F++]={key:De,value:gn}}if(F===0)return null;if(oe===void 0)throw new SyntaxError("Expected default variant");return{variants:D,star:oe}}function Be(){m(Lb,SyntaxError);let D;return u(ks)?D=Ae():D={type:"str",value:z(Cb)},m(Hb,SyntaxError),D}function an(){if(u(ks))return Ae();if(i[o]==='"')return re();throw new SyntaxError("Invalid expression")}function Ae(){let[,D,F=""]=g(ks),oe=F.length;return{type:"num",value:parseFloat(D),precision:oe}}function re(){f('"',SyntaxError);let D="";for(;;){if(D+=z(Mb),i[o]==="\\"){D+=ln();continue}if(f('"'))return{type:"str",value:D};throw new SyntaxError("Unclosed string literal")}}function ln(){if(u(Cp))return z(Cp);if(u(Dp)){let[,D,F]=g(Dp),oe=parseInt(D||F,16);return oe<=55295||57344<=oe?String.fromCodePoint(oe):"�"}throw new SyntaxError("Unknown escape sequence")}function $e(){let D=o;switch(m(Zb),i[o]){case".":case"[":case"*":case"}":case void 0:return!1;case"{":return Ce(i.slice(D,o))}return i[o-1]===" "?Ce(i.slice(D,o)):!1}function G(D,F){return D.replace(F,"")}function Ce(D){let F=D.replace(qb,`
`),oe=Ub.exec(D)[1].length;return new qp(F,oe)}}}class qp{constructor(i,o){this.value=i,this.length=o}}const Qb="([a-z]{2,3}|\\*)",$b="(?:-([a-z]{4}|\\*))",Xb="(?:-([a-z]{2}|\\*))",Wb="(?:-(([0-9][a-z0-9]{3}|[a-z0-9]{5,8})|\\*))",Jb=new RegExp(`^${Qb}${$b}?${Xb}?${Wb}?$`,"i");class oi{constructor(i){const o=Jb.exec(i.replace(/_/g,"-"));if(!o){this.isWellFormed=!1;return}let[,u,f,m,g]=o;u&&(this.language=u.toLowerCase()),f&&(this.script=f[0].toUpperCase()+f.slice(1)),m&&(this.region=m.toUpperCase()),this.variant=g,this.isWellFormed=!0}isEqual(i){return this.language===i.language&&this.script===i.script&&this.region===i.region&&this.variant===i.variant}matches(i,o=!1,u=!1){return(this.language===i.language||o&&this.language===void 0||u&&i.language===void 0)&&(this.script===i.script||o&&this.script===void 0||u&&i.script===void 0)&&(this.region===i.region||o&&this.region===void 0||u&&i.region===void 0)&&(this.variant===i.variant||o&&this.variant===void 0||u&&i.variant===void 0)}toString(){return[this.language,this.script,this.region,this.variant].filter(i=>i!==void 0).join("-")}clearVariants(){this.variant=void 0}clearRegion(){this.region=void 0}addLikelySubtags(){const i=Ib(this.toString().toLowerCase());return i?(this.language=i.language,this.script=i.script,this.region=i.region,this.variant=i.variant,!0):!1}}const Up={ar:"ar-arab-eg","az-arab":"az-arab-ir","az-ir":"az-arab-ir",be:"be-cyrl-by",da:"da-latn-dk",el:"el-grek-gr",en:"en-latn-us",fa:"fa-arab-ir",ja:"ja-jpan-jp",ko:"ko-kore-kr",pt:"pt-latn-br",sr:"sr-cyrl-rs","sr-ru":"sr-latn-ru",sv:"sv-latn-se",ta:"ta-taml-in",uk:"uk-cyrl-ua",zh:"zh-hans-cn","zh-hant":"zh-hant-tw","zh-hk":"zh-hant-hk","zh-mo":"zh-hant-mo","zh-tw":"zh-hant-tw","zh-gb":"zh-hant-gb","zh-us":"zh-hant-us"},Kb=["az","bg","cs","de","es","fi","fr","hu","it","lt","lv","nl","pl","ro","ru"];function Ib(s){if(Object.prototype.hasOwnProperty.call(Up,s))return new oi(Up[s]);const i=new oi(s);return i.language&&Kb.includes(i.language)?(i.region=i.language.toUpperCase(),i):null}function Pb(s,i,o){const u=new Set,f=new Map;for(let m of i)new oi(m).isWellFormed&&f.set(m,new oi(m));e:for(const m of s){const g=m.toLowerCase(),z=new oi(g);if(z.language!==void 0){for(const j of f.keys())if(g===j.toLowerCase()){if(u.add(j),f.delete(j),o==="lookup")return Array.from(u);if(o==="filtering")continue;continue e}for(const[j,y]of f.entries())if(y.matches(z,!0,!1)){if(u.add(j),f.delete(j),o==="lookup")return Array.from(u);if(o==="filtering")continue;continue e}if(z.addLikelySubtags()){for(const[j,y]of f.entries())if(y.matches(z,!0,!1)){if(u.add(j),f.delete(j),o==="lookup")return Array.from(u);if(o==="filtering")continue;continue e}}z.clearVariants();for(const[j,y]of f.entries())if(y.matches(z,!0,!0)){if(u.add(j),f.delete(j),o==="lookup")return Array.from(u);if(o==="filtering")continue;continue e}if(z.clearRegion(),z.addLikelySubtags()){for(const[j,y]of f.entries())if(y.matches(z,!0,!1)){if(u.add(j),f.delete(j),o==="lookup")return Array.from(u);if(o==="filtering")continue;continue e}}z.clearRegion();for(const[j,y]of f.entries())if(y.matches(z,!0,!0)){if(u.add(j),f.delete(j),o==="lookup")return Array.from(u);if(o==="filtering")continue;continue e}}}return Array.from(u)}function ey(s,i,{strategy:o="filtering",defaultLocale:u}={}){const f=Pb(Array.from(s??[]).map(String),Array.from(i??[]).map(String),o);if(o==="lookup"){if(u===void 0)throw new Error("defaultLocale cannot be undefined for strategy `lookup`");f.length===0&&f.push(u)}else u&&!f.includes(u)&&f.push(u);return f}function ny(){Object.defineProperty(Array.prototype,"reduce",{value(...s){if(s.length===0&&window.Prototype&&window.Prototype.Version&&window.Prototype.Version<"1.6.1")return this.length>1?this:this[0];const i=s[0];if(this===null)throw new TypeError("Array.prototype.reduce called on null or undefined");if(typeof i!="function")throw new TypeError(`${i} is not a function`);const o=Object(this),u=o.length>>>0;let f=0,m;if(s.length>=2)m=s[1];else{for(;f<u&&!(f in o);)f++;if(f>=u)throw new TypeError("Reduce of empty array with no initial value");m=o[f++]}for(;f<u;)f in o&&(m=i(m,o[f],f,o)),f++;return m}})}function ty(){typeof window.constructor!="function"||!Hs(window.constructor)||(window.Window=window.constructor)}function ay(){(window.Reflect===void 0||window.Reflect===null)&&(window.Reflect={}),typeof Reflect.get!="function"&&Object.defineProperty(Reflect,"get",{value(s,i){return s[i]}}),typeof Reflect.set!="function"&&Object.defineProperty(Reflect,"set",{value(s,i,o){s[i]=o}}),typeof Reflect.has!="function"&&Object.defineProperty(Reflect,"has",{value(s,i){return i in s}}),typeof Reflect.ownKeys!="function"&&Object.defineProperty(Reflect,"ownKeys",{value(s){return[...Object.getOwnPropertyNames(s),...Object.getOwnPropertySymbols(s)]}})}function Pp(){if(typeof Map.prototype.set!="function"){const s=Map,i=document.createElement("iframe");return i.style.display="none",document.documentElement.append(i),Map=i.contentWindow.Map,i.remove(),s}}function eh(s){s&&(Map=s)}function Hs(s){const i=typeof Function.prototype.toString=="function"?Function.prototype.toString():null;return typeof i=="string"&&i.indexOf("[native code]")>=0?Function.prototype.toString.call(s).indexOf("[native code]")>=0:!1}function ly(){(typeof Array.prototype.reduce!="function"||!Hs(Array.prototype.reduce))&&ny(),(typeof Window!="function"||!Hs(Window))&&ty(),ay()}const iy={"ar-SA":{"context_menu.ftl":`context-menu-download-swf = حمِّل .swf
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
`},"bs-BA":{"context_menu.ftl":`context-menu-download-swf = Preuzmite .swf datoteku
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
message-restored-from-bfcache = Dein Browser hat den Flash-Inhalt aus einer vorherigen Sitzung wiederhergestellt. Um von neuem zu beginnen, lade die Seite neu.
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
`},"eo-UY":{"context_menu.ftl":"","messages.ftl":"","save-manager.ftl":"","volume-controls.ftl":""},"es-ES":{"context_menu.ftl":`context-menu-download-swf = Descargar .swf
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
ruffle-desktop = Aplicación de desktop
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
`},"fi-FI":{"context_menu.ftl":`context-menu-download-swf = Lataa .swf
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
`},"gl-ES":{"context_menu.ftl":"","messages.ftl":"","save-manager.ftl":"","volume-controls.ftl":""},"he-IL":{"context_menu.ftl":`context-menu-download-swf = הורדת קובץ הswf.
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
`},"hr-HR":{"context_menu.ftl":`context-menu-download-swf = Preuzmi .swf datoteku
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
clipboard-message-copy = { " " } per copiare
clipboard-message-cut = { " " } per tagliare
clipboard-message-paste = { " " } per incollare
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
`},"nb-NO":{"context_menu.ftl":`context-menu-download-swf = Last ned .swf
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
`,"messages.ftl":"","save-manager.ftl":"","volume-controls.ftl":`volume-controls-mute = Demp
volume-controls-unmute = Skru på lyd
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
`},"pl-PL":{"context_menu.ftl":`context-menu-download-swf = Pobierz .swf
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
`},"pt-BR":{"context_menu.ftl":`context-menu-download-swf = Baixar .swf
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
    Se o problema persistir, você pode precisar usar a configuração "publicPath": por favor consulte a wiki do Ruffle para obter ajuda.
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
    O navegador que você está usando não suporta as extensões WebAssembly necessárias para o Ruffle.
    Por favor, utilize um navegador compatível.
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
`},"sl-SI":{"context_menu.ftl":`context-menu-download-swf = Prenesi .swf
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
clipboard-message-copy = { " " } za kopiju
clipboard-message-cut = { " " } za sečenje
clipboard-message-paste = { " " } za lepljenje
error-canvas-reload = Ne može se ponovo učitati renderer za platno kada je renderer za platno već u upotrebi.
error-javascript-config =
    Ruffle je naišao na ozbiljan problem zbog pogrešne konfiguracije JavaSkripta.
    Ako ste administrator servera, preporučujemo vam da proverite detalje greške kako biste saznali koji parametar uzrokuje problem. Takođe možete da konsultujete Ruffleov viki za pomoć.
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
error-wasm-invalid =
    Ruffle je naišao na ozbiljan problem prilikom pokušaja inicijalizacije.
    Izgleda da ovoj stranici nedostaju ili su nevažeće datoteke za pokretanje Rufflea.
    Ako ste administrator servera, pogledajte Ruffleov viki za pomoć.
error-wasm-download =
    Ruffle je naišao na ozbiljan problem prilikom pokušaja inicijalizacije.
    Ovo se često može rešiti jednostavnim ponovnim učitavanjem stranice.
    U suprotnom, kontaktirajte administratora sajta.
error-wasm-unsupported-browser =
    Pregledač koji koristite ne podržava WebAssembly ekstenzije potrebne za rad Ruffle-a.
    Molimo vas da pređete na podržani pregledač.
    Lista podržanih pregledača može se naći na Viki stranici.
error-javascript-conflict =
    Ruffle je naišao na ozbiljan problem prilikom pokušaja inicijalizacije.
    Izgleda da ova stranica koristi JavaSkript kod koji je u sukobu sa Ruffleom.
    Ako ste administrator servera, pozivamo vas da pokušate da otpremite datoteku na praznu stranicu.
error-javascript-conflict-outdated = Takođe možete pokušati da otpremite noviju verziju programa Ruffle koja bi mogla da reši problem (trenutna verzija je zastarela: { $buildDate }).
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
clipboard-message-copy = { " " } за копију
clipboard-message-cut = { " " } за сечење
clipboard-message-paste = { " " } за лепљење
error-canvas-reload = Не може се поново учитати рендерер за платно када је рендерер за платно већ у употреби.
error-javascript-config =
    Ruffle је наишао на озбиљан проблем због погрешне конфигурације ЈаваСкрипта.
    Ако сте администратор сервера, препоручујемо вам да проверите детаље грешке како бисте сазнали који параметар узрокује проблем. Такође можете да консултујете Ruffleов вики за помоћ.
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
error-wasm-invalid =
    Ruffle је наишао на озбиљан проблем приликом покушаја иницијализације.
    Изгледа да овој страници недостају или су неважеће датотеке за покретање Ruffleа.
    Ако сте администратор сервера, погледајте Ruffleов вики за помоћ.
error-wasm-download =
    Ruffle је наишао на озбиљан проблем приликом покушаја иницијализације.
    Ово се често може решити једноставним поновним учитавањем странице.
    У супротном, контактирајте администратора сајта.
error-wasm-unsupported-browser =
    Прегледач који користите не подржава WebAssembly екстензије потребне за рад Ruffle-а.
    Молимо вас да пређете на подржани прегледач.
    Листа подржаних прегледача може се наћи на Вики страници.
error-javascript-conflict =
    Ruffle је наишао на озбиљан проблем приликом покушаја иницијализације.
    Изгледа да ова страница користи ЈаваСкрипт код који је у сукобу са Ruffleом.
    Ако сте администратор сервера, позивамо вас да покушате да отпремите датотеку на празну страницу.
error-javascript-conflict-outdated = Такође можете покушати да отпремите новију верзију програма Ruffle која би могла да реши проблем (тренутна верзија је застарела: { $buildDate }).
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
`},"tt-RU":{"context_menu.ftl":`context-menu-download-swf = .swf файлны йөкләү
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
`,"save-manager.ftl":"","volume-controls.ftl":`volume-controls-mute = Тавышны ябу
volume-controls-unmute = Тавышны ачу
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
`}},Ks={};for(const[s,i]of Object.entries(iy)){const o=new Tb(s);if(i){let u;for(const[f,m]of Object.entries(i))if(m){u??=Pp();for(const g of o.addResource(new Gb(m)))console.error(`Error in text for ${s} ${f}: ${g}`)}eh(u)}Ks[s]=o}function ry(s,i,o){const u=Ks[s];if(u!==void 0){const f=u.getMessage(i);if(f!==void 0&&f.value)return u.formatPattern(f.value,o)}return null}function ee(s,i){const o=Pp(),u=ey(navigator.languages,Object.keys(Ks),{defaultLocale:"en-US"});for(const f in u){const m=ry(u[f],s,i);if(m)return m}return console.error(`Unknown text key '${s}'`),eh(o),s}function We(s,i){const o=document.createElement("div");return ee(s,i).split(`
`).forEach(u=>{const f=document.createElement("p");f.innerText=u,o.appendChild(f)}),o}function oy(){return T.jsx("div",{id:"volume-controls-modal",class:"modal hidden",children:T.jsx("div",{class:"modal-area",children:T.jsxs("div",{id:"volume-controls",children:[T.jsx("input",{id:"mute-checkbox",type:"checkbox"}),T.jsx("label",{id:"volume-mute",for:"mute-checkbox",title:ee("volume-controls-unmute")}),T.jsx("label",{id:"volume-min",for:"mute-checkbox",title:ee("volume-controls-mute")}),T.jsx("label",{id:"volume-mid",for:"mute-checkbox",title:ee("volume-controls-mute")}),T.jsx("label",{id:"volume-max",for:"mute-checkbox",title:ee("volume-controls-mute")}),T.jsx("input",{id:"volume-slider",type:"range",min:"0",max:"100",step:"1"}),T.jsx("span",{id:"volume-slider-text"}),T.jsx("span",{class:"close-modal"})]})})})}function uy(){return T.jsx("div",{id:"video-modal",class:"modal hidden",children:T.jsxs("div",{class:"modal-area",children:[T.jsx("span",{class:"close-modal"}),T.jsx("div",{id:"video-holder"})]})})}function sy(){return T.jsx("div",{id:"hardware-acceleration-modal",class:"modal hidden",children:T.jsxs("div",{class:"modal-area",children:[T.jsx("span",{class:"close-modal"}),T.jsx("span",{id:"acceleration-text",children:ee("enable-hardware-acceleration")}),T.jsx("a",{href:"https://github.com/ruffle-rs/ruffle/wiki/Frequently-Asked-Questions-For-Users#chrome-hardware-acceleration",target:"_blank",class:"modal-button",children:ee("enable-hardware-acceleration-link")})]})})}const zs=navigator.userAgent.includes("Mac OS X")?"Command":"Ctrl";function cy(){return T.jsx("div",{id:"clipboard-modal",class:"modal hidden",children:T.jsxs("div",{class:"modal-area",children:[T.jsx("span",{class:"close-modal"}),T.jsx("h2",{children:ee("clipboard-message-title")}),T.jsx("p",{id:"clipboard-modal-description"}),T.jsxs("p",{children:[T.jsxs("b",{children:[zs,"+C"]}),T.jsx("span",{children:ee("clipboard-message-copy")})]}),T.jsxs("p",{children:[T.jsxs("b",{children:[zs,"+X"]}),T.jsx("span",{children:ee("clipboard-message-cut")})]}),T.jsxs("p",{children:[T.jsxs("b",{children:[zs,"+V"]}),T.jsx("span",{children:ee("clipboard-message-paste")})]})]})})}function fy(){return T.jsx("div",{id:"context-menu-overlay",class:"hidden",children:T.jsx("ul",{id:"context-menu"})})}const Yn=document.createElement("template");Yn.content.appendChild(T.jsx(fb,{}));Yn.content.appendChild(T.jsx(db,{}));Yn.content.appendChild(T.jsx(mb,{}));Yn.content.appendChild(T.jsx(pb,{}));Yn.content.appendChild(T.jsx(hb,{}));Yn.content.appendChild(T.jsx(oy,{}));Yn.content.appendChild(T.jsx(uy,{}));Yn.content.appendChild(T.jsx(sy,{}));Yn.content.appendChild(T.jsx(cy,{}));Yn.content.appendChild(T.jsx(fy,{}));const nh="application/x-shockwave-flash",th="application/futuresplash",ah="application/x-shockwave-flash2-preview",lh="application/vnd.adobe.flash.movie",dy="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";function my(s){let i="";try{i=new URL(s,"https://example.com").pathname}catch{}if(i&&i.length>=4){const o=i.slice(-4).toLowerCase();if(o===".swf"||o===".spl")return!0}return!1}function py(s,i){switch(s=s.toLowerCase(),s){case nh.toLowerCase():case th.toLowerCase():case ah.toLowerCase():case lh.toLowerCase():return!0;default:if(i)switch(s){case"application/octet-stream":case"binary/octet-stream":return!0}}return!1}function ih(s,i){const o=my(s);return i?py(i,o):o}function hy(s){const i=s.pathname;return i.substring(i.lastIndexOf("/")+1)}let Bs=null,Yt=!1;try{if(document.currentScript instanceof HTMLScriptElement&&document.currentScript.src!==""){let s=document.currentScript.src;!s.endsWith(".js")&&!s.endsWith("/")&&(s+="/"),Bs=new URL(".",s),Yt=Bs.protocol.includes("extension")}}catch(s){console.warn("Unable to get currentScript URL",s)}const ui="https://ruffle.rs";class rh extends Error{constructor(i,o){super(`Failed to fetch ${i}`),this.swfUrl=i,this.statusNotOk=o,this.swfUrl=i,this.statusNotOk=o}}class oh extends Error{constructor(i){super(`Not a valid swf: ${i}`)}}class Fs extends Error{constructor(i){super("Failed to load Ruffle WASM"),this.cause=i}}class uh extends Error{constructor(i){super(`Invalid options: ${i}`)}}var da={},Ht={},Np;function vy(){if(Np)return Ht;Np=1,Object.defineProperty(Ht,"__esModule",{value:!0}),Ht.createRef=Ht.h=void 0,Ht.createElement=o;const s=Jp(),i=Kp();function o(f,m,...g){if(typeof f=="function")return f({...m,children:g});const{finalTag:z,finalAttrs:j}=(0,i.applyTsxTag)(f,m),y=(0,i.createDomElement)(z,j);return j&&(0,s.setAttributes)(y,j),(0,i.applyChildren)(y,g),y}Ht.h=o;const u=()=>({current:null});return Ht.createRef=u,Ht}var _r={},Lp;function gy(){if(Lp)return _r;Lp=1,Object.defineProperty(_r,"__esModule",{value:!0}),_r.defineCustomElement=i;const s=Js();function i(o,u,f){return customElements.define(o,u,f),m=>(0,s.jsx)(o,m)}return _r}var Rs={},Hp;function by(){return Hp||(Hp=1,Object.defineProperty(Rs,"__esModule",{value:!0})),Rs}var Bp;function yy(){return Bp||(Bp=1,(function(s){var i=da&&da.__createBinding||(Object.create?(function(u,f,m,g){g===void 0&&(g=m);var z=Object.getOwnPropertyDescriptor(f,m);(!z||("get"in z?!f.__esModule:z.writable||z.configurable))&&(z={enumerable:!0,get:function(){return f[m]}}),Object.defineProperty(u,g,z)}):(function(u,f,m,g){g===void 0&&(g=m),u[g]=f[m]})),o=da&&da.__exportStar||function(u,f){for(var m in u)m!=="default"&&!Object.prototype.hasOwnProperty.call(f,m)&&i(f,u,m)};Object.defineProperty(s,"__esModule",{value:!0}),o(vy(),s),o(gy(),s),o(Js(),s),o(by(),s)})(da)),da}var wy=yy();function ky({action:s,showDetails:i,errorArray:o,errorText:u,swfUrl:f}){if(s.type==="show_details"){const m=()=>(i(),!1);return T.jsx("li",{children:T.jsx("a",{href:"#",id:"panic-view-details",onClick:m,children:ee("view-error-details")})})}else{if(s.type==="open_link")return T.jsx("li",{children:T.jsx("a",{href:s.url,target:"_top",children:s.label})});{let m;document.location.protocol.includes("extension")&&f?m=f.href:m=document.location.href,m=m.split(/[?#]/,1)[0];const g=`Error on ${m}`;let z=`https://github.com/ruffle-rs/ruffle/issues/new?title=${encodeURIComponent(g)}&template=error_report.md&labels=error-report&body=`,j=encodeURIComponent(u);return o.stackIndex>-1&&String(z+j).length>8195&&(o[o.stackIndex]=null,o.avmStackIndex>-1&&(o[o.avmStackIndex]=null),j=encodeURIComponent(o.join(""))),z+=j,T.jsx("li",{children:T.jsx("a",{href:z,target:"_top",children:ee("report-bug")})})}}}function Vs(){const s=new Date(Ln.buildDate),i=new Date;return i.setMonth(i.getMonth()-6),i>s}const ve={OpenDemo:{type:"open_link",url:ui+"/demo",label:ee("ruffle-demo")},DownloadDesktop:{type:"open_link",url:ui+"/downloads#desktop-app",label:ee("ruffle-desktop")},UpdateRuffle:{type:"open_link",url:ui+"/downloads",label:ee("update-ruffle")},CreateReport:{type:"create_report"},ShowDetails:{type:"show_details"},createReportOrUpdate(){return Vs()?this.UpdateRuffle:this.CreateReport},openWiki(s,i){return{type:"open_link",url:`https://github.com/ruffle-rs/ruffle/wiki/${s}`,label:i??ee("ruffle-wiki")}}};function zy(s){if(s instanceof rh)return s.swfUrl&&!s.swfUrl.protocol.includes("http")?{body:We("error-file-protocol"),actions:[ve.OpenDemo,ve.DownloadDesktop]}:window.location.origin===s.swfUrl?.origin||s.statusNotOk||window.location.protocol.includes("extension")?{body:We("error-swf-fetch"),actions:[ve.ShowDetails]}:{body:We("error-swf-cors"),actions:[ve.openWiki("Using-Ruffle#configure-cors-header"),ve.ShowDetails]};if(s instanceof oh)return{body:We("error-invalid-swf"),actions:[ve.ShowDetails]};if(s instanceof Fs){if(window.location.protocol==="file:")return{body:We("error-file-protocol"),actions:[ve.OpenDemo,ve.DownloadDesktop]};const i=String(s.cause.message).toLowerCase();if(i.includes("mime"))return{body:We("error-wasm-mime-type"),actions:[ve.openWiki("Using-Ruffle#configure-webassembly-mime-type"),ve.ShowDetails]};if(i.includes("networkerror")||i.includes("failed to fetch")||i.includes("load failed"))return{body:We("error-wasm-cors"),actions:[ve.openWiki("Using-Ruffle#configure-cors-header"),ve.ShowDetails]};if(i.includes("disallowed by embedder"))return{body:We("error-csp-conflict"),actions:[ve.openWiki("Using-Ruffle#configure-wasm-csp"),ve.ShowDetails]};if(s.cause.name==="CompileError"&&i.includes("bad type"))return{body:We("error-wasm-unsupported-browser"),actions:[ve.openWiki("#web"),ve.ShowDetails]};if(s.cause.name==="CompileError"||i.includes("failed to execute 'compile' on 'webassembly'"))return{body:We("error-wasm-invalid"),actions:[ve.openWiki("Using-Ruffle#addressing-a-compileerror"),ve.ShowDetails]};if((i.includes("could not download wasm module")||i.includes("webassembly compilation aborted"))&&s.cause.name==="TypeError")return{body:We("error-wasm-download"),actions:[ve.ShowDetails]};if(s.cause.name==="TypeError"){const o=We("error-javascript-conflict");return Vs()&&o.appendChild(We("error-javascript-conflict-outdated",{buildDate:Ln.buildDate})),{body:o,actions:[ve.createReportOrUpdate(),ve.ShowDetails]}}return navigator.userAgent.includes("Edg")&&i.includes("webassembly is not defined")?{body:We("error-wasm-disabled-on-edge"),actions:[ve.openWiki("Frequently-Asked-Questions-For-Users#edge-webassembly-error",ee("more-info")),ve.ShowDetails]}:{body:We("error-wasm-not-found"),actions:[ve.openWiki("Using-Ruffle#configuration-options"),ve.ShowDetails]}}return s instanceof uh?{body:We("error-javascript-config"),actions:[ve.openWiki("Using-Ruffle#javascript-api"),ve.ShowDetails]}:{body:We("error-unknown",{buildDate:Ln.buildDate,outdated:String(Vs)}),actions:[ve.createReportOrUpdate(),ve.ShowDetails]}}function Ry(s,i,o,u){const f=o.join(""),{body:m,actions:g}=zy(i),z=wy.createRef(),j=()=>{z.current.classList.add("details"),z.current.replaceChildren(T.jsx("textarea",{readOnly:!0,children:f}))};s.textContent="",s.appendChild(T.jsxs("div",{id:"panic",children:[T.jsx("div",{id:"panic-title",children:ee("panic-title")}),T.jsx("div",{id:"panic-body",ref:z,children:m}),T.jsx("div",{id:"panic-footer",children:T.jsx("ul",{children:g.map(y=>ky({action:y,showDetails:j,errorText:f,errorArray:o,swfUrl:u}))})})]}))}const Sy="modulepreload",jy=function(s,i){return new URL(s,i).href},Fp={},Vp=function(i,o,u){let f=Promise.resolve();if(o&&o.length>0){let y=function(_){return Promise.all(_.map(M=>Promise.resolve(M).then(Z=>({status:"fulfilled",value:Z}),Z=>({status:"rejected",reason:Z}))))};const g=document.getElementsByTagName("link"),z=document.querySelector("meta[property=csp-nonce]"),j=z?.nonce||z?.getAttribute("nonce");f=y(o.map(_=>{if(_=jy(_,u),_ in Fp)return;Fp[_]=!0;const M=_.endsWith(".css"),Z=M?'[rel="stylesheet"]':"";if(u)for(let I=g.length-1;I>=0;I--){const P=g[I];if(P.href===_&&(!M||P.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${_}"]${Z}`))return;const Q=document.createElement("link");if(Q.rel=M?"stylesheet":Sy,M||(Q.as="script"),Q.crossOrigin="",Q.href=_,j&&Q.setAttribute("nonce",j),document.head.appendChild(Q),M)return new Promise((I,P)=>{Q.addEventListener("load",I),Q.addEventListener("error",()=>P(new Error(`Unable to preload CSS for ${_}`)))})}))}function m(g){const z=new Event("vite:preloadError",{cancelable:!0});if(z.payload=g,window.dispatchEvent(z),!z.defaultPrevented)throw g}return f.then(g=>{for(const z of g||[])z.status==="rejected"&&m(z.reason);return i().catch(m)})},xy=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,3,1,0,1,10,14,1,12,0,65,0,65,0,65,0,252,10,0,0,11])),Ey=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,7,1,5,0,208,112,26,11])),Ay=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,12,1,10,0,67,0,0,0,0,252,0,26,11])),Ty=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,8,1,6,0,65,0,192,26,11])),Oy=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]));async function Cy(s){ly();const i=(await Promise.all([xy(),Oy(),Ay(),Ty(),Ey()])).every(Boolean);i||console.log("Some WebAssembly extensions are NOT available, falling back to the vanilla WebAssembly module"),si.options.onFirstLoad?.(),si.options.onFirstLoad=()=>{};const{default:o,RuffleInstanceBuilder:u,ZipWriter:f}=await(i?Vp(()=>import("./ruffle_web-BDAswMzA.js"),__vite__mapDeps([0,1]),import.meta.url):Vp(()=>import("./ruffle_web-wasm_mvp-BWKTXYrW.js"),__vite__mapDeps([2,1]),import.meta.url));let m;const g=i?new URL(""+new URL("ruffle_web_bg-CpOCO-X0.wasm",import.meta.url).href,import.meta.url):new URL(""+new URL("ruffle_web-wasm_mvp_bg-DmAkKeHv.wasm",import.meta.url).href,import.meta.url),z=await fetch(g);if(s&&typeof ReadableStreamDefaultController=="function"){const y=z?.headers?.get("content-length")||"";let _=0;const M=parseInt(y);m=new Response(new ReadableStream({async start(Z){const Q=z.body?.getReader();if(!Q)throw"Response had no body";for(s(_,M);;){const{done:I,value:P}=await Q.read();if(I)break;P?.byteLength&&(_+=P?.byteLength),Z.enqueue(P),s(_,M)}Z.close()}}),z)}else m=z;return await o({module_or_path:m}),[u,f]}let Ss=null;async function Dy(s){Ss===null&&(Ss=Cy(s));const i=await Ss;return[new i[0],()=>new i[1]]}const My=999,Ys={};function _y(s){const i=Ys[s];return i!==void 0?{internalName:s,name:i.name,class:i.class}:null}function Is(s,i){const o=Ys[s];if(o!==void 0){if(o.class!==i)throw new Error("Internal naming conflict on "+s);return o.name}let u=0;if(window.customElements!==void 0)for(;u<My;){let f=s;if(u>0&&(f=f+"-"+u),window.customElements.get(f)!==void 0){u+=1;continue}else window.customElements.define(f,i);return Ys[s]={class:i,name:f,internalName:s},f}throw new Error("Failed to assign custom element "+s)}function ze(s){return s!=null}function qy(s,i){if(ze(i.allowScriptAccess)&&s.setAllowScriptAccess(i.allowScriptAccess),ze(i.backgroundColor)&&s.setBackgroundColor(Uy(i.backgroundColor)),ze(i.upgradeToHttps)&&s.setUpgradeToHttps(i.upgradeToHttps),ze(i.compatibilityRules)&&s.setCompatibilityRules(i.compatibilityRules),ze(i.letterbox)&&s.setLetterbox(i.letterbox.toLowerCase()),ze(i.base)&&s.setBaseUrl(i.base),ze(i.menu)&&s.setShowMenu(i.menu),ze(i.allowFullscreen)&&s.setAllowFullscreen(i.allowFullscreen),ze(i.salign)&&s.setStageAlign(i.salign.toLowerCase()),ze(i.forceAlign)&&s.setForceAlign(i.forceAlign),ze(i.quality)?s.setQuality(i.quality.toLowerCase()):Ly()&&(console.log("Running on a mobile device; defaulting to low quality"),s.setQuality("low")),ze(i.scale)&&s.setScale(i.scale.toLowerCase()),ze(i.forceScale)&&s.setForceScale(i.forceScale),ze(i.frameRate)&&s.setFrameRate(i.frameRate),ze(i.wmode)&&s.setWmode(i.wmode),ze(i.logLevel)&&s.setLogLevel(i.logLevel),ze(i.maxExecutionDuration)&&s.setMaxExecutionDuration(Ny(i.maxExecutionDuration)),ze(i.playerVersion)&&s.setPlayerVersion(i.playerVersion),ze(i.preferredRenderer)&&s.setPreferredRenderer(i.preferredRenderer),ze(i.openUrlMode)&&s.setOpenUrlMode(i.openUrlMode.toLowerCase()),ze(i.allowNetworking)&&s.setAllowNetworking(i.allowNetworking.toLowerCase()),ze(i.credentialAllowList)&&s.setCredentialAllowList(i.credentialAllowList),ze(i.playerRuntime)&&s.setPlayerRuntime(i.playerRuntime),ze(i.socketProxy))for(const o of i.socketProxy)s.addSocketProxy(o.host,o.port,o.proxyUrl);if(ze(i.gamepadButtonMapping))for(const[o,u]of Object.entries(i.gamepadButtonMapping))s.addGamepadButtonMapping(o,u);if(ze(i.urlRewriteRules))for(const[o,u]of i.urlRewriteRules)if(o instanceof RegExp)s.addUrlRewriteRule(o,u);else{const f=o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),m=new RegExp(`^${f}$`),g=u.replace(/\$/g,"$$$$");s.addUrlRewriteRule(m,g)}ze(i.scrollingBehavior)&&s.setScrollingBehavior(i.scrollingBehavior),ze(i.deviceFontRenderer)&&s.setDeviceFontRenderer(i.deviceFontRenderer)}function Uy(s){if(s.startsWith("#")&&(s=s.substring(1)),s.length<6)return;let i=0;for(let o=0;o<6;o++){const u=parseInt(s[o],16);isNaN(u)?i=i<<4:i=i<<4|u}return i}function Ny(s){return typeof s=="number"?s:s.secs}function Ly(){return typeof window.orientation<"u"}const Hy=/^\s*(\d+(\.\d+)?(%)?)/;let qr=!1;function js(s){if(s==null)return{};s instanceof URLSearchParams||(s=new URLSearchParams(s));const i={};for(const[o,u]of s)i[o]=u.toString();return i}class Yp{constructor(i,o){this.x=i,this.y=o}distanceTo(i){const o=i.x-this.x,u=i.y-this.y;return Math.sqrt(o*o+u*u)}}class Vt{constructor(i,o,u){this.contextMenuForceDisabled=!1,this.isTouch=!1,this.contextMenuSupported=!1,this._suppressContextMenu=!1,this.panicked=!1,this.rendererDebugInfo="",this.longPressTimer=null,this.pointerDownPosition=null,this.pointerMoveMaxDistance=0,this.onFSCommand=[],this.config={},this.SaveRow=({rowKey:z,solName:j,solData:y})=>T.jsxs("tr",{children:[T.jsx("td",{title:z,children:j}),T.jsx("td",{children:T.jsx("span",{class:"save-option",id:"download-save",title:ee("save-download"),onClick:()=>xs(Fy(y,"application/octet-stream"),j+".sol")})}),T.jsxs("td",{children:[T.jsx("input",{type:"file",accept:".sol",class:"replace-save",id:"replace-save-"+z,onChange:_=>this.replaceSOL(_,z)}),T.jsx("label",{for:"replace-save-"+z,class:"save-option",id:"replace-save",title:ee("save-replace")})]}),T.jsx("td",{children:T.jsx("span",{class:"save-option",id:"delete-save",title:ee("save-delete"),onClick:()=>this.deleteSave(z)})})]}),this.element=i,this.debugPlayerInfo=o,this.onCallbackAvailable=u,this.shadow=this.element.attachShadow({mode:"open",delegatesFocus:!0}),this.shadow.appendChild(Yn.content.cloneNode(!0)),this.dynamicStyles=this.shadow.getElementById("dynamic-styles"),this.container=this.shadow.getElementById("container"),this.playButton=this.shadow.getElementById("play-button"),this.playButton.addEventListener("click",()=>this.play()),this.unmuteOverlay=this.shadow.getElementById("unmute-overlay"),this.splashScreen=this.shadow.getElementById("splash-screen"),this.virtualKeyboard=this.shadow.getElementById("virtual-keyboard"),this.virtualKeyboard.addEventListener("input",this.virtualKeyboardInput.bind(this)),this.saveManager=this.shadow.getElementById("save-manager"),this.videoModal=this.shadow.getElementById("video-modal"),this.hardwareAccelerationModal=this.shadow.getElementById("hardware-acceleration-modal"),this.volumeControls=this.shadow.getElementById("volume-controls-modal"),this.clipboardModal=this.shadow.getElementById("clipboard-modal"),this.addModalJavaScript(this.saveManager),this.addModalJavaScript(this.volumeControls),this.addModalJavaScript(this.videoModal),this.addModalJavaScript(this.hardwareAccelerationModal),this.addModalJavaScript(this.clipboardModal),this.volumeSettings=new By(!1,100),this.addVolumeControlsJavaScript(this.volumeControls);const f=this.saveManager.querySelector(".modal-button");f&&(f.addEventListener("click",this.backupSaves.bind(this)),f.innerText=ee("save-backup-all"));const m=this.unmuteOverlay.querySelector("#unmute-overlay-svg");if(m){const z=m.querySelector("#unmute-text");z.textContent=ee("click-to-unmute")}this.contextMenuOverlay=this.shadow.getElementById("context-menu-overlay"),this.contextMenuElement=this.shadow.getElementById("context-menu");const g=z=>{z.preventDefault(),z.stopPropagation()};this.contextMenuElement.addEventListener("contextmenu",g),this.contextMenuElement.addEventListener("click",g),this.contextMenuElement.dir=Yy(),document.documentElement.addEventListener("pointerdown",this.checkIfTouch.bind(this)),this.element.addEventListener("contextmenu",this.showContextMenu.bind(this)),this.container.addEventListener("pointerdown",this.pointerDown.bind(this)),this.container.addEventListener("pointermove",this.checkLongPressMovement.bind(this)),this.container.addEventListener("pointerup",this.checkLongPress.bind(this)),this.container.addEventListener("pointercancel",this.clearLongPressTimer.bind(this)),this.element.addEventListener("fullscreenchange",this.fullScreenChange.bind(this)),this.element.addEventListener("webkitfullscreenchange",this.fullScreenChange.bind(this)),this.instance=null,this.newZipWriter=null,this._readyState=nl.HaveNothing,this.metadata=null,this.lastActivePlayingState=!1,this.setupPauseOnTabHidden()}addFSCommandHandler(i){this.onFSCommand.push(i)}callFSCommand(i,o){if(this.onFSCommand.length===0)return!1;for(const u of this.onFSCommand)u(i,o);return!0}addModalJavaScript(i){const o=i.querySelector("#video-holder"),u=()=>{i.classList.add("hidden"),o&&(o.textContent="")};i.parentNode.addEventListener("click",u);const f=i.querySelector(".modal-area");f&&f.addEventListener("click",g=>g.stopPropagation());const m=i.querySelector(".close-modal");m&&m.addEventListener("click",u)}addVolumeControlsJavaScript(i){const o=i.querySelector("#mute-checkbox"),u=i.querySelector("#volume-mute"),f=[i.querySelector("#volume-min"),i.querySelector("#volume-mid"),i.querySelector("#volume-max")],m=i.querySelector("#volume-slider"),g=i.querySelector("#volume-slider-text"),z=()=>{if(this.volumeSettings.isMuted)u.style.display="inline",f.forEach(j=>{j.style.display="none"});else{u.style.display="none";const j=Math.round(this.volumeSettings.volume/50);f.forEach((y,_)=>{y.style.display=_===j?"inline":"none"})}};o.checked=this.volumeSettings.isMuted,m.disabled=o.checked,m.valueAsNumber=this.volumeSettings.volume,g.textContent=m.value+"%",z(),o.addEventListener("change",()=>{m.disabled=o.checked,this.volumeSettings.isMuted=o.checked,this.instance?.set_volume(this.volumeSettings.get_volume()),z()}),m.addEventListener("input",()=>{g.textContent=m.value+"%",this.volumeSettings.volume=m.valueAsNumber,this.instance?.set_volume(this.volumeSettings.get_volume()),z()})}setupPauseOnTabHidden(){document.addEventListener("visibilitychange",()=>{this.instance&&(document.hidden&&(this.lastActivePlayingState=this.instance.is_playing(),this.instance.pause()),!document.hidden&&this.lastActivePlayingState===!0&&this.instance.play())},!1)}updateStyles(){if(this.dynamicStyles.sheet){if(this.dynamicStyles.sheet.cssRules)for(let f=this.dynamicStyles.sheet.cssRules.length-1;f>=0;f--)this.dynamicStyles.sheet.deleteRule(f);const i=this.element.attributes.getNamedItem("align");if(i!=null){const f=i.value.toLowerCase(),m=(()=>{switch(f){case"right":return"vertical-align: top; float: right;";case"left":return"vertical-align: top; float: left;";case"bottom":return"vertical-align: baseline;";case"top":return"vertical-align: top;";case"center":return"vertical-align: middle; vertical-align: -moz-middle-with-baseline;";case"middle":return"vertical-align: middle; vertical-align: -webkit-baseline-middle; vertical-align: -moz-middle-with-baseline;";case"absbottom":return"vertical-align: bottom;";case"absmiddle":case"abscenter":return"vertical-align: middle;";case"texttop":return"vertical-align: text-top;";default:return""}})();m&&this.dynamicStyles.sheet.insertRule(`:host { ${m} }`)}const o=this.element.attributes.getNamedItem("width");if(o!=null){const f=Vt.htmlDimensionToCssDimension(o.value);f!==null&&this.dynamicStyles.sheet.insertRule(`:host { width: ${f}; }`)}const u=this.element.attributes.getNamedItem("height");if(u!=null){const f=Vt.htmlDimensionToCssDimension(u.value);f!==null&&this.dynamicStyles.sheet.insertRule(`:host { height: ${f}; }`)}}}isUnusedFallbackObject(){const i=_y("ruffle-object");if(i!==null){let o=this.element.parentNode;for(;o!==document&&o!==null;){if(o.nodeName===i.name)return!0;o=o.parentNode}}return!1}async ensureFreshInstance(){this.destroy(),this.loadedConfig&&this.loadedConfig.splashScreen!==!1&&this.loadedConfig.preloader!==!1&&this.showSplashScreen(),this.loadedConfig&&this.loadedConfig.preloader===!1&&console.warn("The configuration option preloader has been replaced with splashScreen. If you own this website, please update the configuration."),this.loadedConfig&&this.loadedConfig.maxExecutionDuration&&typeof this.loadedConfig.maxExecutionDuration!="number"&&console.warn("Configuration: An obsolete format for duration for 'maxExecutionDuration' was used, please use a single number indicating seconds instead. For instance '15' instead of '{secs: 15, nanos: 0}'."),this.loadedConfig&&typeof this.loadedConfig.contextMenu=="boolean"&&console.warn('The configuration option contextMenu no longer takes a boolean. Use "on", "off", or "rightClickOnly".');const[i,o]=await Dy(this.onRuffleDownloadProgress.bind(this)).catch(m=>{console.error(`Serious error loading Ruffle: ${m}`);const g=new Fs(m);throw this.panic(g),g});if(this.newZipWriter=o,qy(i,this.loadedConfig||{}),i.setVolume(this.volumeSettings.get_volume()),this.loadedConfig?.fontSources)for(const m of this.loadedConfig.fontSources)try{const g=await fetch(m);i.addFont(m,new Uint8Array(await g.arrayBuffer()))}catch(g){console.warn(`Couldn't download font source from ${m}`,g)}for(const m in this.loadedConfig?.defaultFonts){const g=this.loadedConfig.defaultFonts[m];g&&i.setDefaultFont(m,g)}this.instance=await i.build(this.container,this).catch(m=>{throw console.error(`Serious error loading Ruffle: ${m}`),this.panic(m),m}),this.rendererDebugInfo=this.instance.renderer_debug_info(),this.rendererDebugInfo.includes("Adapter Device Type: Cpu")&&this.container.addEventListener("mouseover",this.openHardwareAccelerationModal.bind(this),{once:!0});const u=this.instance.renderer_name(),f=this.instance.constructor;if(console.log("%cNew Ruffle instance created (Version: "+Ln.versionName+" | WebAssembly extensions: "+(f.is_wasm_simd_used()?"ON":"OFF")+" | Used renderer: "+(u??"")+")","background: #37528C; color: #FFAD33"),this.audioState()!=="running"&&(this.container.style.visibility="hidden",await new Promise(m=>{window.setTimeout(()=>{m()},200)}),this.container.style.visibility=""),this.unmuteAudioContext(),!this.loadedConfig||this.loadedConfig.autoplay===il.On||this.loadedConfig.autoplay!==il.Off&&this.audioState()==="running"){if(this.play(),this.audioState()!=="running"){(!this.loadedConfig||this.loadedConfig.unmuteOverlay!==ci.Hidden)&&(this.unmuteOverlay.style.display="block"),this.container.addEventListener("click",this.unmuteOverlayClicked.bind(this),{once:!0});const m=this.instance?.audio_context();m&&(m.onstatechange=()=>{m.state==="running"&&this.unmuteOverlayClicked(),m.onstatechange=null})}}else this.playButton.style.display="block"}onRuffleDownloadProgress(i,o){const u=this.splashScreen.querySelector(".loadbar-inner"),f=this.splashScreen.querySelector(".loadbar");Number.isNaN(o)?f&&(f.style.display="none"):u.style.width=`${100*(i/o)}%`}destroy(){this.instance&&(this.instance.destroy(),this.instance=null,this.metadata=null,this._readyState=nl.HaveNothing,console.log("Ruffle instance destroyed."))}checkOptions(i){if(typeof i=="string")return{url:i};const o=(u,f)=>{if(!u){const m=new uh(f);throw this.panic(m),m}};return o(i!==null&&typeof i=="object","Argument 0 must be a string or object"),o("url"in i||"data"in i,"Argument 0 must contain a `url` or `data` key"),o(!("url"in i)||typeof i.url=="string","`url` must be a string"),i}async reload(){if(this.loadedConfig)await this.load(this.loadedConfig);else throw new Error("Cannot reload if load wasn't first called")}async reloadWithCanvasRenderer(){if(this.loadedConfig&&this.loadedConfig.preferredRenderer!==Yr.Canvas){const i={...this.loadedConfig,preferredRenderer:Yr.Canvas};await this.load(i)}else if(this.loadedConfig)this.panic(new Error(ee("error-canvas-reload")));else throw new Error("Cannot reload if load wasn't first called")}async load(i,o=!1){if(i=this.checkOptions(i),!this.element.isConnected||this.isUnusedFallbackObject()){console.warn("Ignoring attempt to play a disconnected or suspended Ruffle element");return}if(!Ps(this.element))try{this.loadedConfig={...sb,...o&&"url"in i?{allowScriptAccess:ch("samedomain",i.url)}:{},...window.RufflePlayer?.config??{},...this.config,...i},this.loadedConfig.backgroundColor&&this.loadedConfig.wmode!==Vr.Transparent&&(this.container.style.backgroundColor=this.loadedConfig.backgroundColor),await this.ensureFreshInstance(),"url"in i?(console.log(`Loading SWF file ${i.url}`),this.swfUrl=new URL(i.url,document.baseURI),this.instance.stream_from(this.swfUrl.href,js(i.parameters))):"data"in i&&(console.log("Loading SWF data"),delete this.swfUrl,this.instance.load_data(new Uint8Array(i.data),js(i.parameters),i.swfFileName||"movie.swf"))}catch(u){console.error(`Serious error occurred loading SWF file: ${u}`);const f=new Error(u);throw this.panic(f),f}}play(){this.instance&&(this.instance.play(),this.playButton.style.display="none")}get isPlaying(){return this.instance?this.instance.is_playing():!1}get volume(){return this.instance?this.instance.volume():1}set volume(i){this.instance&&this.instance.set_volume(i)}get fullscreenEnabled(){return!!(document.fullscreenEnabled||document.webkitFullscreenEnabled)}get isFullscreen(){return(document.fullscreenElement||document.webkitFullscreenElement)===this.element}setFullscreen(i){this.fullscreenEnabled&&i!==this.isFullscreen&&(i?this.enterFullscreen():this.exitFullscreen())}enterFullscreen(){const i={navigationUI:"hide"};this.element.requestFullscreen?this.element.requestFullscreen(i):this.element.webkitRequestFullscreen?this.element.webkitRequestFullscreen(i):this.element.webkitRequestFullScreen&&this.element.webkitRequestFullScreen(i)}exitFullscreen(){document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}fullScreenChange(){if(this.isFullscreen&&screen.orientation&&typeof screen.orientation.lock=="function"){const i=this.loadedConfig?.fullScreenAspectRatio?.toLowerCase()??"";["portrait","landscape","any"].includes(i)&&screen.orientation.lock(i).catch(()=>{})}else try{screen.orientation.unlock()}catch{}this.instance?.set_fullscreen(this.isFullscreen)}checkIfTouch(i){this.isTouch=i.pointerType==="touch"||i.pointerType==="pen"}confirmReloadSave(i,o,u){if(Ur(o)&&localStorage[i]){if(!u&&!confirm(ee("save-delete-prompt")))return;const f=this.swfUrl?this.swfUrl.pathname:"",m=this.swfUrl?this.swfUrl.hostname:document.location.hostname,g=i.split("/").slice(1,-1).join("/");if(f.includes(g)&&i.startsWith(m)){confirm(ee("save-reload-prompt",{action:u?"replace":"delete"}))&&this.loadedConfig&&(this.destroy(),u?localStorage.setItem(i,o):localStorage.removeItem(i),this.reload(),this.populateSaves(),this.saveManager.classList.add("hidden"));return}u?localStorage.setItem(i,o):localStorage.removeItem(i),this.populateSaves(),this.saveManager.classList.add("hidden")}}replaceSOL(i,o){const u=i.target,f=new FileReader;f.addEventListener("load",()=>{if(f.result&&typeof f.result=="string"){const m=new RegExp("data:.*;base64,"),g=f.result.replace(m,"");this.confirmReloadSave(o,g,!0)}}),u&&u.files&&u.files.length>0&&u.files[0]&&f.readAsDataURL(u.files[0])}checkSaves(){if(!this.saveManager.querySelector("#local-saves"))return!1;try{if(localStorage===null)return!1}catch{return!1}return Object.keys(localStorage).some(i=>{const o=i.split("/").pop(),u=localStorage.getItem(i);return o&&u&&Ur(u)})}deleteSave(i){const o=localStorage.getItem(i);o&&this.confirmReloadSave(i,o,!1)}populateSaves(){if(!this.checkSaves())return;const i=this.saveManager.querySelector("#local-saves");i.textContent="",Object.keys(localStorage).forEach(o=>{const u=o.split("/").pop(),f=localStorage.getItem(o);u&&f&&Ur(f)&&i.appendChild(T.jsx(this.SaveRow,{rowKey:o,solName:u,solData:f}))})}async backupSaves(){const i=this.newZipWriter(),o=[];Object.keys(localStorage).forEach(f=>{let m=String(f.split("/").pop());const g=localStorage.getItem(f);if(g&&Ur(g)){const z=sh(g),j=o.filter(y=>y===m).length;o.push(m),j>0&&(m+=` (${j+1})`),i.addFile(m+".sol",z)}});const u=new Blob([i.save()],{type:"application/zip"});xs(u,"saves.zip")}openHardwareAccelerationModal(){this.hardwareAccelerationModal.classList.remove("hidden")}async openSaveManager(){this.populateSaves(),this.saveManager.classList.remove("hidden")}openVolumeControls(){this.volumeControls.classList.remove("hidden")}async downloadSwf(){try{if(this.swfUrl){console.log("Downloading SWF: "+this.swfUrl);const i=await fetch(this.swfUrl.href);if(!i.ok){console.error("SWF download failed");return}const o=await i.blob();xs(o,hy(this.swfUrl))}else console.error("SWF download failed")}catch{console.error("SWF download failed")}}virtualKeyboardInput(){const i=this.virtualKeyboard,o=i.value;for(const u of o)for(const f of["keydown","keyup"])this.element.dispatchEvent(new KeyboardEvent(f,{key:u,bubbles:!0}));i.value=""}openVirtualKeyboard(){this.instance?.has_focus()?this.virtualKeyboard.focus({preventScroll:!0}):setTimeout(()=>{this.virtualKeyboard.focus({preventScroll:!0})},0)}closeVirtualKeyboard(){this.isVirtualKeyboardFocused()&&this.container.focus({preventScroll:!0})}isVirtualKeyboardFocused(){return this.shadow.activeElement===this.virtualKeyboard}contextMenuItems(){const o=[],u=()=>{o.length>0&&o[o.length-1]!==null&&o.push(null)};return this.instance&&this.isPlaying&&(this.instance.prepare_context_menu().forEach((m,g)=>{m.separatorBefore&&u(),o.push({text:m.caption+(m.checked?" (✓)":""),onClick:async()=>this.instance?.run_context_menu_callback(g),enabled:m.enabled})}),u()),this.fullscreenEnabled&&(this.isFullscreen?o.push({text:ee("context-menu-exit-fullscreen"),onClick:async()=>this.setFullscreen(!1)}):o.push({text:ee("context-menu-enter-fullscreen"),onClick:async()=>this.setFullscreen(!0)})),o.push({text:ee("context-menu-volume-controls"),onClick:async()=>{this.openVolumeControls()}}),this.instance&&this.swfUrl&&this.loadedConfig&&this.loadedConfig.showSwfDownload===!0&&(u(),o.push({text:ee("context-menu-download-swf"),onClick:this.downloadSwf.bind(this)})),navigator.clipboard&&window.isSecureContext&&o.push({text:ee("context-menu-copy-debug-info"),onClick:()=>navigator.clipboard.writeText(this.getPanicData())}),this.checkSaves()&&o.push({text:ee("context-menu-open-save-manager"),onClick:this.openSaveManager.bind(this)}),u(),o.push({text:ee("context-menu-about-ruffle",{flavor:Yt?"extension":"",version:Ln.versionName}),async onClick(){window.open(ui,"_blank")}}),this.isTouch&&(u(),o.push({text:ee("context-menu-hide"),onClick:async()=>{this.contextMenuForceDisabled=!0}})),o}pointerDown(i){this.pointerDownPosition=new Yp(i.pageX,i.pageY),this.pointerMoveMaxDistance=0,this.startLongPressTimer()}clearLongPressTimer(){this.longPressTimer&&(clearTimeout(this.longPressTimer),this.longPressTimer=null)}startLongPressTimer(){this.clearLongPressTimer(),this.longPressTimer=setTimeout(()=>this.clearLongPressTimer(),800)}checkLongPressMovement(i){if(this.pointerDownPosition!==null){const o=new Yp(i.pageX,i.pageY),u=this.pointerDownPosition.distanceTo(o);u>this.pointerMoveMaxDistance&&(this.pointerMoveMaxDistance=u)}}checkLongPress(i){this.longPressTimer?this.clearLongPressTimer():!this.contextMenuSupported&&i.pointerType!=="mouse"&&this.pointerMoveMaxDistance<15&&this.showContextMenu(i)}suppressContextMenu(){this._suppressContextMenu=!0}showContextMenu(i){if(this.panicked)return;if(i.preventDefault(),this._suppressContextMenu){this._suppressContextMenu=!1;return}if(this.shadow.querySelectorAll(".modal:not(.hidden)").length!==0||(i.type==="contextmenu"?(this.contextMenuSupported=!0,document.documentElement.addEventListener("click",this.hideContextMenu.bind(this),{once:!0})):(document.documentElement.addEventListener("pointerup",this.hideContextMenu.bind(this),{once:!0}),i.stopPropagation()),[!1,tl.Off].includes(this.loadedConfig?.contextMenu??tl.On)||this.isTouch&&this.loadedConfig?.contextMenu===tl.RightClickOnly||this.contextMenuForceDisabled))return;for(;this.contextMenuElement.firstChild;)this.contextMenuElement.removeChild(this.contextMenuElement.firstChild);for(const _ of this.contextMenuItems())if(_===null)this.contextMenuElement.appendChild(T.jsx("li",{class:"menu-separator",children:T.jsx("hr",{})}));else{const{text:M,onClick:Z,enabled:Q}=_,I=T.jsx("li",{class:{"menu-item":!0,disabled:Q===!1},"data-text":M,children:M});if(this.contextMenuElement.appendChild(I),Q!==!1){const P=async He=>{He.preventDefault(),He.stopPropagation(),await Z(He),this.hideContextMenu()};this.contextMenuSupported?(I.addEventListener("click",P),I.addEventListener("contextmenu",P)):I.addEventListener("pointerup",P)}}this.contextMenuOverlay.classList.remove("hidden");const o=this.element.getBoundingClientRect(),u=this.contextMenuElement.getBoundingClientRect(),f=document.scrollingElement||document.body,m=Math.max(0,i.clientX+u.width-f.clientWidth),g=Math.max(0,i.clientY+u.height-f.clientHeight),z=i.clientX-o.x-m,j=i.clientY-o.y-g,y=getComputedStyle(this.contextMenuElement).direction==="rtl";this.contextMenuElement.style.top=`${j}px`,y?(this.contextMenuElement.style.right=`${o.width-z}px`,this.contextMenuElement.style.left=""):(this.contextMenuElement.style.right="",this.contextMenuElement.style.left=`${z}px`)}hideContextMenu(){this.instance?.clear_custom_menu_items(),this.contextMenuOverlay.classList.add("hidden")}pause(){this.instance&&(this.instance.pause(),this.playButton.style.display="block")}audioState(){if(this.instance){const i=this.instance.audio_context();return i&&i.state||"running"}return"suspended"}unmuteOverlayClicked(){if(this.instance){if(this.audioState()!=="running"){const i=this.instance.audio_context();i&&i.resume()}this.unmuteOverlay.style.display="none"}}unmuteAudioContext(){if(!qr){if(navigator.maxTouchPoints<1){qr=!0;return}"audioSession"in navigator?navigator.audioSession.type="playback":this.container.addEventListener("click",()=>{if(qr)return;const i=this.instance?.audio_context();if(!i)return;const o=new Audio;o.src=(()=>{const u=new ArrayBuffer(10),f=new DataView(u),m=i.sampleRate;return f.setUint32(0,m,!0),f.setUint32(4,m,!0),f.setUint16(8,1,!0),`data:audio/wav;base64,UklGRisAAABXQVZFZm10IBAAAAABAAEA${window.btoa(String.fromCharCode(...new Uint8Array(u))).slice(0,13)}AgAZGF0YQcAAACAgICAgICAAAA=`})(),o.load(),o.play().then(()=>{qr=!0}).catch(u=>{console.warn(`Failed to play dummy sound: ${u}`)})},{once:!0})}}static htmlDimensionToCssDimension(i){if(i){const o=i.match(Hy);if(o){let u=o[1];return o[3]||(u+="px"),u}}return null}callExternalInterface(i,o){return this.instance?.call_exposed_callback(i,o)}getObjectId(){return this.element.getAttribute("name")}set traceObserver(i){this.instance?.set_trace_observer(i)}getPanicData(){let i=`
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
`,i+=`Version: ${Ln.versionNumber}
`,i+=`Name: ${Ln.versionName}
`,i+=`Channel: ${Ln.versionChannel}
`,i+=`Built: ${Ln.buildDate}
`,i+=`Commit: ${Ln.commitHash}
`,i+=`Is extension: ${Yt}
`,i+=`
# Metadata
`,this.metadata)for(const[o,u]of Object.entries(this.metadata))i+=`${o}: ${u}
`;return i}panic(i){if(this.panicked)return;this.panicked=!0,this.hideSplashScreen();const o=i;if(i instanceof Error&&(i.name==="AbortError"||i.message.includes("AbortError")))return;if(i instanceof Fs){const f=this.loadedConfig?.openInNewTab,m=this.loadedConfig&&"url"in this.loadedConfig?new URL(this.loadedConfig.url,document.baseURI):void 0;if(f&&m){this.addOpenInNewTabMessage(f,m);return}i=i.cause}const u=Object.assign([],{stackIndex:-1,avmStackIndex:-1});if(u.push(`# Error Info
`),i instanceof Error){if(u.push(`Error name: ${i.name}
`),u.push(`Error message: ${i.message}
`),i.stack){const f=u.push(`Error stack:
\`\`\`
${i.stack}
\`\`\`
`)-1;if(i.avmStack){const m=u.push(`AVM2 stack:
\`\`\`
    ${i.avmStack.trim().replace(/\t/g,"    ")}
\`\`\`
`)-1;u.avmStackIndex=m}u.stackIndex=f}}else u.push(`Error: ${i}
`);u.push(this.getPanicData()),Ry(this.container,o,u,this.swfUrl),this.destroy()}addOpenInNewTabMessage(i,o){const u=new URL(o);if(this.loadedConfig?.parameters){const m=js(this.loadedConfig?.parameters);Object.entries(m).forEach(([g,z])=>{u.searchParams.set(g,z)})}this.hideSplashScreen();const f=T.jsxs("div",{children:[We("message-cant-embed"),T.jsx("div",{children:T.jsx("a",{href:"#",onClick:()=>i(u),children:ee("open-in-new-tab")})})]});this.displayMessageOrElement(f,!0)}displayRootMovieDownloadFailedMessage(i,o){const u=this.loadedConfig?.openInNewTab;if(u&&this.swfUrl&&window.location.origin!==this.swfUrl.origin)this.addOpenInNewTabMessage(u,this.swfUrl);else{const f=o.includes("HTTP Status is not OK:"),m=i?new oh(this.swfUrl):new rh(this.swfUrl,f);this.panic(m)}}displayMessageOrElement(i,o){const u=i instanceof HTMLDivElement?i:T.jsx("p",{children:i}),f=o?null:T.jsx("div",{children:T.jsx("button",{id:"continue-btn",children:ee("continue")})}),m=T.jsx("div",{id:"message-overlay",children:T.jsxs("div",{class:"message",children:[u,f]})});if(this.container.prepend(m),!o){const g=this.container.querySelector("#continue-btn");g.onclick=()=>{m.parentNode.removeChild(m)}}}displayMessage(i){this.displayMessageOrElement(i)}displayRestoredFromBfcacheMessage(){if(this.container.querySelector("#message-overlay")!==null)return;const i=We("message-restored-from-bfcache");this.displayMessageOrElement(i);const o=this.container.querySelector("#message-overlay");(o.scrollWidth>o.offsetWidth||o.scrollHeight>o.offsetHeight)&&o.parentNode.removeChild(o)}displayUnsupportedVideo(i){const o=this.videoModal.querySelector("#video-holder");if(o){const u=T.jsx("video",{src:i,autoplay:!0,controls:!0,onContextMenu:f=>f.stopPropagation()});o.textContent="",o.appendChild(u),this.videoModal.classList.remove("hidden")}}displayClipboardModal(i){const o=this.clipboardModal.querySelector("#clipboard-modal-description");o&&(o.textContent=ee("clipboard-message-description",{variant:i?"access-denied":"unsupported"}),this.clipboardModal.classList.remove("hidden"))}hideSplashScreen(){this.splashScreen.classList.add("hidden"),this.container.classList.remove("hidden")}showSplashScreen(){this.splashScreen.classList.remove("hidden"),this.container.classList.add("hidden")}setMetadata(i){this.metadata=i,this._readyState=nl.Loaded,this.hideSplashScreen(),this.element.dispatchEvent(new CustomEvent(Vt.LOADED_METADATA)),this.element.dispatchEvent(new CustomEvent(Vt.LOADED_DATA))}}Vt.LOADED_METADATA="loadedmetadata";Vt.LOADED_DATA="loadeddata";class By{constructor(i,o){this.isMuted=i,this.volume=o}get_volume(){return this.isMuted?0:this.volume/100}}function Zs(s,i){const o={url:s},u=i("allowNetworking");u!==null&&(o.allowNetworking=u);const f=ch(i("allowScriptAccess"),s);f!==null&&(o.allowScriptAccess=f);const m=i("bgcolor");m!==null&&(o.backgroundColor=m);const g=i("base");if(g!==null)if(g==="."){const P=new URL(s,document.baseURI);o.base=new URL(g,P).href}else o.base=g;const z=Zp(i("menu"));z!==null&&(o.menu=z);const j=Zp(i("allowFullScreen"));j!==null&&(o.allowFullscreen=j);const y=i("flashvars");y!==null&&(o.parameters=y);const _=i("quality");_!==null&&(o.quality=_);const M=i("salign");M!==null&&(o.salign=M);const Z=i("scale");Z!==null&&(o.scale=Z);const Q=i("wmode");Q!==null&&(o.wmode=Q);const I=i("fullScreenAspectRatio");return I!==null&&(o.fullScreenAspectRatio=I),o}function Gs(s){if(s){let i="",o="";try{const u=new URL(s,ui);i=u.pathname,o=u.hostname}catch{}if(i.startsWith("/v/")&&/^(?:(?:www\.|m\.)?youtube(?:-nocookie)?\.com)|(?:youtu\.be)$/i.test(o))return!0}return!1}function Qs(s,i){const o=s.getAttribute(i),u=window.RufflePlayer?.config??{};if(o)try{const f=new URL(o);f.protocol==="http:"&&window.location.protocol==="https:"&&(!("upgradeToHttps"in u)||u.upgradeToHttps!==!1)&&(f.protocol="https:",s.setAttribute(i,f.toString()))}catch{}}function Ps(s){let i=s.parentElement;for(;i!==null;){switch(i.tagName){case"AUDIO":case"VIDEO":return!0}i=i.parentElement}return!1}function xs(s,i){const o=URL.createObjectURL(s),u=document.createElement("a");u.href=o,u.download=i,u.click(),URL.revokeObjectURL(o)}function sh(s){const i=atob(s);return Uint8Array.from(i,o=>o.charCodeAt(0))}function Fy(s,i){const o=sh(s);return new Blob([o],{type:i})}function Ur(s){try{const i=atob(s);return Vy(i)}catch{return!1}}function Vy(s){return s.charCodeAt(0)===0&&s.charCodeAt(1)===191&&s.slice(6,10)==="TCSO"&&[0,4,0,0,0,0].every((i,o)=>s.charCodeAt(10+o)===i)}function Zp(s){switch(s?.toLowerCase()){case"true":return!0;case"false":return!1;default:return null}}function ch(s,i){switch(s?.toLowerCase()){case"always":return!0;case"never":return!1;case"samedomain":try{return new URL(window.location.href).origin===new URL(i,window.location.href).origin}catch{return!1}default:return null}}function Yy(){const s=new Intl.Locale(navigator.language);let i=null;if("getTextInfo"in s&&typeof s.getTextInfo=="function")i=s.getTextInfo();else if("textInfo"in s&&typeof s.textInfo=="object")i=s.textInfo;else return"ltr";return typeof i=="object"&&"direction"in i&&typeof i.direction=="string"&&i.direction||"ltr"}var Zy=function(s,i,o,u,f){if(u==="m")throw new TypeError("Private method is not writable");if(u==="a"&&!f)throw new TypeError("Private accessor was defined without a setter");if(typeof i=="function"?s!==i||!f:!i.has(s))throw new TypeError("Cannot write private member to an object whose class did not declare it");return u==="a"?f.call(s,o):f?f.value=o:i.set(s,o),o},Oe=function(s,i,o,u){if(o==="a"&&!u)throw new TypeError("Private accessor was defined without a getter");if(typeof i=="function"?s!==i||!u:!i.has(s))throw new TypeError("Cannot read private member from an object whose class did not declare it");return o==="m"?u:o==="a"?u.call(s):u?u.value:i.get(s)},je;class Gy{constructor(i){je.set(this,void 0),Zy(this,je,i,"f")}addFSCommandHandler(i){Oe(this,je,"f").addFSCommandHandler(i)}get readyState(){return Oe(this,je,"f")._readyState}get metadata(){return Oe(this,je,"f").metadata}get loadedConfig(){return Oe(this,je,"f").loadedConfig??null}async reload(){await Oe(this,je,"f").reload()}async load(i,o=!1){await Oe(this,je,"f").load(i,o)}resume(){Oe(this,je,"f").play()}get isPlaying(){return Oe(this,je,"f").isPlaying}get volume(){return Oe(this,je,"f").volume}set volume(i){Oe(this,je,"f").volume=i}get fullscreenEnabled(){return Oe(this,je,"f").fullscreenEnabled}get isFullscreen(){return Oe(this,je,"f").isFullscreen}setFullscreen(i){Oe(this,je,"f").setFullscreen(i)}requestFullscreen(){Oe(this,je,"f").enterFullscreen()}exitFullscreen(){Oe(this,je,"f").exitFullscreen()}async downloadSwf(){await Oe(this,je,"f").downloadSwf()}displayMessage(i){Oe(this,je,"f").displayMessage(i)}suspend(){Oe(this,je,"f").pause()}get suspended(){return!Oe(this,je,"f").isPlaying}set traceObserver(i){Oe(this,je,"f").traceObserver=i}get config(){return Oe(this,je,"f").config}set config(i){Oe(this,je,"f").config=i}callExternalInterface(i,...o){return Oe(this,je,"f").callExternalInterface(i,o)}}je=new WeakMap;var ge=function(s,i,o,u){if(o==="a"&&!u)throw new TypeError("Private accessor was defined without a getter");if(typeof i=="function"?s!==i||!u:!i.has(s))throw new TypeError("Cannot read private member from an object whose class did not declare it");return o==="m"?u:o==="a"?u.call(s):u?u.value:i.get(s)},Gp=function(s,i,o,u,f){if(u==="m")throw new TypeError("Private method is not writable");if(u==="a"&&!f)throw new TypeError("Private accessor was defined without a setter");if(typeof i=="function"?s!==i||!f:!i.has(s))throw new TypeError("Cannot write private member to an object whose class did not declare it");return u==="a"?f.call(s,o):f?f.value=o:i.set(s,o),o},me,ri;class ol extends HTMLElement{get onFSCommand(){return ge(this,ri,"f")}set onFSCommand(i){Gp(this,ri,i,"f")}get readyState(){return ge(this,me,"f")._readyState}get metadata(){return ge(this,me,"f").metadata}constructor(){super(),me.set(this,void 0),ri.set(this,null),Gp(this,me,new Vt(this,()=>this.debugPlayerInfo(),i=>{try{Object.defineProperty(this,i,{value:(...o)=>ge(this,me,"f").callExternalInterface(i,o),configurable:!0})}catch(o){console.warn(`Error setting ExternalInterface legacy callback for ${i}`,o)}}),"f"),ge(this,me,"f").addFSCommandHandler((i,o)=>{ge(this,ri,"f")?.call(this,i,o)})}ruffle(i){if((i??1)===1)return new Gy(ge(this,me,"f"));throw new Error(`Version ${i} not supported.`)}get loadedConfig(){return ge(this,me,"f").loadedConfig??null}connectedCallback(){ge(this,me,"f").updateStyles()}static get observedAttributes(){return["width","height","align"]}attributeChangedCallback(i,o,u){ol.observedAttributes.includes(i)&&ge(this,me,"f").updateStyles()}disconnectedCallback(){ge(this,me,"f").destroy()}async reload(){await ge(this,me,"f").reload()}async load(i,o=!1){await ge(this,me,"f").load(i,o)}play(){ge(this,me,"f").play()}get isPlaying(){return ge(this,me,"f").isPlaying}get volume(){return ge(this,me,"f").volume}set volume(i){ge(this,me,"f").volume=i}get fullscreenEnabled(){return ge(this,me,"f").fullscreenEnabled}get isFullscreen(){return ge(this,me,"f").isFullscreen}setFullscreen(i){ge(this,me,"f").setFullscreen(i)}enterFullscreen(){ge(this,me,"f").enterFullscreen()}exitFullscreen(){ge(this,me,"f").exitFullscreen()}async downloadSwf(){await ge(this,me,"f").downloadSwf()}pause(){ge(this,me,"f").pause()}set traceObserver(i){ge(this,me,"f").traceObserver=i}debugPlayerInfo(){return""}PercentLoaded(){return ge(this,me,"f")._readyState===nl.Loaded?100:0}get config(){return ge(this,me,"f").config}set config(i){ge(this,me,"f").config=i}displayMessage(i){ge(this,me,"f").displayMessage(i)}}me=new WeakMap,ri=new WeakMap;function fh(s,i){if(s){for(const o of s.attributes)if(o.specified){if(o.name==="title"&&o.value==="Adobe Flash Player")continue;try{i.setAttribute(o.name,o.value)}catch{console.warn(`Unable to set attribute ${o.name} on Ruffle instance`)}}for(const o of Array.from(s.children))i.appendChild(o)}}class ul extends ol{connectedCallback(){super.connectedCallback();const i=this.attributes.getNamedItem("src");if(i){const o=f=>this.attributes.getNamedItem(f)?.value??null,u=Zs(i.value,o);this.load(u,!0)}}get nodeName(){return"EMBED"}get src(){return this.attributes.getNamedItem("src")?.value}set src(i){if(i){const o=document.createAttribute("src");o.value=i,this.attributes.setNamedItem(o)}else this.attributes.removeNamedItem("src")}static get observedAttributes(){return[...ol.observedAttributes,"src"]}attributeChangedCallback(i,o,u){if(super.attributeChangedCallback(i,o,u),this.isConnected&&i==="src"){const f=this.attributes.getNamedItem("src");if(f){const m=z=>this.attributes.getNamedItem(z)?.value??null,g=Zs(f.value,m);this.load(g,!0)}}}static isInterdictable(i){const o=i.getAttribute("src"),u=i.getAttribute("type");return!o||Ps(i)?!1:Gs(o)?(Qs(i,"src"),!1):ih(o,u)}static fromNativeEmbedElement(i){const o=Is("ruffle-embed",ul),u=document.createElement(o);return fh(i,u),u}get height(){return this.getAttribute("height")||""}set height(i){this.setAttribute("height",i)}get width(){return this.getAttribute("width")||""}set width(i){this.setAttribute("width",i)}get type(){return this.getAttribute("type")||""}set type(i){this.setAttribute("type",i)}}function Qy(s,i,o){i=i.toLowerCase();for(const[u,f]of Object.entries(s))if(u.toLowerCase()===i)return f;return o}function Qp(s){const i={};for(const o of s.children)if(o instanceof HTMLParamElement){const u=o.attributes.getNamedItem("name")?.value,f=o.attributes.getNamedItem("value")?.value;u&&f&&(i[u]=f)}return i}class ll extends ol{constructor(){super(...arguments),this.params={}}connectedCallback(){super.connectedCallback(),this.params=Qp(this);let i=null;if(this.attributes.getNamedItem("data")?i=this.attributes.getNamedItem("data")?.value:this.params.movie&&(i=this.params.movie),i){const o=["allowNetworking","base","bgcolor","flashvars"],f=Zs(i,m=>Qy(this.params,m,o.includes(m)?this.getAttribute(m):null));this.load(f,!0)}}debugPlayerInfo(){let i=`Player type: Object
`,o=null;return this.attributes.getNamedItem("data")?o=this.attributes.getNamedItem("data")?.value:this.params.movie&&(o=this.params.movie),i+=`SWF URL: ${o}
`,Object.keys(this.params).forEach(u=>{i+=`Param ${u}: ${this.params[u]}
`}),Object.keys(this.attributes).forEach(u=>{i+=`Attribute ${u}: ${this.attributes.getNamedItem(u)?.value}
`}),i}get nodeName(){return"OBJECT"}get data(){return this.getAttribute("data")}set data(i){if(i){const o=document.createAttribute("data");o.value=i,this.attributes.setNamedItem(o)}else this.attributes.removeNamedItem("data")}static isInterdictable(i){if(Ps(i)||i.getElementsByTagName("ruffle-object").length>0||i.getElementsByTagName("ruffle-embed").length>0)return!1;const o=i.attributes.getNamedItem("data")?.value.toLowerCase(),u=i.attributes.getNamedItem("type")?.value??null,f=Qp(i);let m;if(o){if(Gs(o))return Qs(i,"data"),!1;m=o}else if(f&&f.movie){if(Gs(f.movie)){const z=i.querySelector("param[name='movie']");if(z){Qs(z,"value");const j=z.getAttribute("value");j&&i.setAttribute("data",j)}return!1}m=f.movie}else return!1;const g=i.attributes.getNamedItem("classid")?.value.toLowerCase();return g===dy.toLowerCase()?!Array.from(i.getElementsByTagName("object")).some(ll.isInterdictable)&&!Array.from(i.getElementsByTagName("embed")).some(ul.isInterdictable):g?!1:ih(m,u)}static fromNativeObjectElement(i){const o=Is("ruffle-object",ll),u=document.createElement(o);for(const f of Array.from(i.getElementsByTagName("embed")))ul.isInterdictable(f)&&f.remove();for(const f of Array.from(i.getElementsByTagName("object")))ll.isInterdictable(f)&&f.remove();return fh(i,u),u}get height(){return this.getAttribute("height")||""}set height(i){this.setAttribute("height",i)}get width(){return this.getAttribute("width")||""}set width(i){this.setAttribute("width",i)}get type(){return this.getAttribute("type")||""}set type(i){this.setAttribute("type",i)}}var Zt=function(s,i,o,u,f){if(u==="m")throw new TypeError("Private method is not writable");if(u==="a"&&!f)throw new TypeError("Private accessor was defined without a setter");if(typeof i=="function"?s!==i||!f:!i.has(s))throw new TypeError("Cannot write private member to an object whose class did not declare it");return u==="a"?f.call(s,o):f?f.value=o:i.set(s,o),o},Le=function(s,i,o,u){if(o==="a"&&!u)throw new TypeError("Private accessor was defined without a getter");if(typeof i=="function"?s!==i||!u:!i.has(s))throw new TypeError("Cannot read private member from an object whose class did not declare it");return o==="m"?u:o==="a"?u.call(s):u?u.value:i.get(s)},Bt,li,ma,Nr,Lr,Hr,Ft,ii;class $s{constructor(i){if(Bt.set(this,void 0),li.set(this,void 0),Zt(this,Bt,[],"f"),Zt(this,li,{},"f"),i)for(let o=0;o<i.length;o++)this.install(i[o])}install(i){const o=new dh(i),u=Le(this,Bt,"f").length;Le(this,Bt,"f").push(o),Le(this,li,"f")[i.type]=o,Object.defineProperty(this,o.type,{configurable:!0,enumerable:!1,value:o}),this[u]=o}item(i){return Le(this,Bt,"f")[i>>>0]}namedItem(i){return Le(this,li,"f")[i]}get length(){return Le(this,Bt,"f").length}[(Bt=new WeakMap,li=new WeakMap,Symbol.iterator)](){return Le(this,Bt,"f")[Symbol.iterator]()}get[Symbol.toStringTag](){return"MimeTypeArray"}}class dh{constructor(i){ma.set(this,void 0),Zt(this,ma,i,"f")}get type(){return Le(this,ma,"f").type}get description(){return Le(this,ma,"f").description}get suffixes(){return Le(this,ma,"f").suffixes}get enabledPlugin(){return Le(this,ma,"f").enabledPlugin}get[(ma=new WeakMap,Symbol.toStringTag)](){return"MimeType"}}class $y extends $s{constructor(i,o,u){super(),Nr.set(this,void 0),Lr.set(this,void 0),Hr.set(this,void 0),Zt(this,Nr,i,"f"),Zt(this,Lr,o,"f"),Zt(this,Hr,u,"f")}get name(){return Le(this,Nr,"f")}get description(){return Le(this,Lr,"f")}get filename(){return Le(this,Hr,"f")}get[(Nr=new WeakMap,Lr=new WeakMap,Hr=new WeakMap,Symbol.toStringTag)](){return"Plugin"}}class $p{constructor(i){Ft.set(this,void 0),ii.set(this,void 0),Zt(this,Ft,[],"f"),Zt(this,ii,{},"f");for(let o=0;o<i.length;o++)this.install(i[o])}install(i){const o=Le(this,Ft,"f").length;Le(this,Ft,"f").push(i),Le(this,ii,"f")[i.name]=i,Object.defineProperty(this,i.name,{configurable:!0,enumerable:!1,value:i}),this[o]=i}item(i){return Le(this,Ft,"f")[i>>>0]}namedItem(i){return Le(this,ii,"f")[i]}refresh(){}[(Ft=new WeakMap,ii=new WeakMap,Symbol.iterator)](){return Le(this,Ft,"f")[Symbol.iterator]()}get[Symbol.toStringTag](){return"PluginArray"}get length(){return Le(this,Ft,"f").length}}const mt=new $y("Shockwave Flash","Shockwave Flash 32.0 r0","ruffle.js");mt.install({type:th,description:"Shockwave Flash",suffixes:"spl",enabledPlugin:mt});mt.install({type:nh,description:"Shockwave Flash",suffixes:"swf",enabledPlugin:mt});mt.install({type:ah,description:"Shockwave Flash",suffixes:"swf",enabledPlugin:mt});mt.install({type:lh,description:"Shockwave Flash",suffixes:"swf",enabledPlugin:mt});function Xy(s){if(navigator.plugins.namedItem("Shockwave Flash"))return;(!("install"in navigator.plugins)||!navigator.plugins.install)&&(Object.defineProperty(window,"PluginArray",{value:$p}),Object.defineProperty(navigator,"plugins",{value:new $p(navigator.plugins),writable:!1})),navigator.plugins.install(s),s.length>0&&(!("install"in navigator.mimeTypes)||!navigator.mimeTypes.install)&&(Object.defineProperty(window,"MimeTypeArray",{value:$s}),Object.defineProperty(window,"MimeType",{value:dh}),Object.defineProperty(navigator,"mimeTypes",{value:new $s(navigator.mimeTypes),writable:!1}));const o=navigator.mimeTypes;for(let u=0;u<s.length;u+=1)o.install(s[u])}function Wy(s){let i=Bs?.href??"";return!Yt&&"publicPath"in s&&s.publicPath!==null&&s.publicPath!==void 0&&(i=s.publicPath),i!==""&&!i.endsWith("/")&&(i+="/"),i}const di=window.RufflePlayer?.config??{},Jy=Wy(di)+"ruffle.js";let Es,As;function Ky(){return"favorFlash"in di&&di.favorFlash===!1?!1:(navigator.plugins.namedItem("Shockwave Flash")?.filename??"ruffle.js")!=="ruffle.js"}function mh(){try{Es=Es??document.getElementsByTagName("object"),As=As??document.getElementsByTagName("embed");for(const s of Array.from(Es))if(ll.isInterdictable(s)){const i=ll.fromNativeObjectElement(s);s.replaceWith(i)}for(const s of Array.from(As))if(ul.isInterdictable(s)){const i=ul.fromNativeEmbedElement(s);s.replaceWith(i)}}catch(s){console.error(`Serious error encountered when polyfilling native Flash elements: ${s}`)}}let Ts,Os;function ph(){Ts=Ts??document.getElementsByTagName("iframe"),Os=Os??document.getElementsByTagName("frame"),[Ts,Os].forEach(s=>{for(const i of s){if(i.dataset.rufflePolyfilled!==void 0)continue;i.dataset.rufflePolyfilled="";const o=i.contentWindow,u=`Couldn't load Ruffle into ${i.tagName}[${i.src}]: `;try{o.document.readyState==="complete"&&Xp(o,u)}catch(f){Yt||console.warn(u+f)}i.addEventListener("load",()=>{Xp(o,u)},!1)}})}async function Xp(s,i){await new Promise(u=>{window.setTimeout(()=>{u()},100)});let o;try{if(o=s.document,!o)return}catch(u){Yt||console.warn(i+u);return}if(!(!Yt&&o.documentElement.dataset.ruffleOptout!==void 0)){if(Yt)s.RufflePlayer||(s.RufflePlayer={}),s.RufflePlayer.config={...di,...s.RufflePlayer.config??{}};else if(!s.RufflePlayer){const u=o.createElement("script");u.setAttribute("src",Jy),u.onload=()=>{s.RufflePlayer={},s.RufflePlayer.config=di},o.head.appendChild(u)}}}function Iy(){new MutationObserver(function(i){i.some(u=>Array.from(u.addedNodes).some(f=>["EMBED","OBJECT"].includes(f.nodeName)||f instanceof Element&&f.querySelector("embed, object")!==null))&&(mh(),ph())}).observe(document,{childList:!0,subtree:!0})}function Py(){Xy(mt)}function ew(){Ky()||(mh(),ph(),Iy())}const si={version:Ln.versionNumber+"+"+Ln.buildDate.substring(0,10),polyfill(){ew()},pluginPolyfill(){Py()},createPlayer(){const s=Is("ruffle-player",ol);return document.createElement(s)},options:{}};function nw(s,i={}){let o;window.RufflePlayer instanceof mp?o=window.RufflePlayer:(o=new mp(window.RufflePlayer),window.RufflePlayer=o),o.sources[s]=si,si.options=i,("polyfills"in o.config?o.config.polyfills:!0)!==!1&&si.pluginPolyfill()}nw("local");Xg.createRoot(document.getElementById("root")).render(N.jsx(Cs.StrictMode,{children:N.jsx(nb,{ruffleBaseConfig:{autoplay:il.On,unmuteOverlay:ci.Hidden,logLevel:Fr.Warn,letterbox:Br.On,forceScale:!0,forceAlign:!0},allowSampleSwfs:!0,allowUrlLoading:!1})}));
