const Tt=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))f(p);new MutationObserver(p=>{for(const c of p)if(c.type==="childList")for(const o of c.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&f(o)}).observe(document,{childList:!0,subtree:!0});function s(p){const c={};return p.integrity&&(c.integrity=p.integrity),p.referrerpolicy&&(c.referrerPolicy=p.referrerpolicy),p.crossorigin==="use-credentials"?c.credentials="include":p.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function f(p){if(p.ep)return;p.ep=!0;const c=s(p);fetch(p.href,c)}};Tt();var te=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function X(t,i,s,f,p,c){return{tag:t,key:i,attrs:s,children:f,text:p,dom:c,domSize:void 0,state:void 0,events:void 0,instance:void 0}}X.normalize=function(t){return Array.isArray(t)?X("[",void 0,void 0,X.normalizeChildren(t),void 0,void 0):t==null||typeof t=="boolean"?null:typeof t=="object"?t:X("#",void 0,void 0,String(t),void 0,void 0)};X.normalizeChildren=function(t){var i=[];if(t.length){for(var s=t[0]!=null&&t[0].key!=null,f=1;f<t.length;f++)if((t[f]!=null&&t[f].key!=null)!==s)throw new TypeError(s&&(t[f]!=null||typeof t[f]=="boolean")?"In fragments, vnodes must either all have keys or none have keys. You may wish to consider using an explicit keyed empty fragment, m.fragment({key: ...}), instead of a hole.":"In fragments, vnodes must either all have keys or none have keys.");for(var f=0;f<t.length;f++)i[f]=X.normalize(t[f])}return i};var Y=X,At=Y,nt=function(){var t=arguments[this],i=this+1,s;if(t==null?t={}:(typeof t!="object"||t.tag!=null||Array.isArray(t))&&(t={},i=this),arguments.length===i+1)s=arguments[i],Array.isArray(s)||(s=[s]);else for(s=[];i<arguments.length;)s.push(arguments[i++]);return At("",t.key,t,s)},we={}.hasOwnProperty,Rt=Y,It=nt,re=we,zt=/(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g,it={};function Ve(t){for(var i in t)if(re.call(t,i))return!1;return!0}function jt(t){for(var i,s="div",f=[],p={};i=zt.exec(t);){var c=i[1],o=i[2];if(c===""&&o!=="")s=o;else if(c==="#")p.id=o;else if(c===".")f.push(o);else if(i[3][0]==="["){var m=i[6];m&&(m=m.replace(/\\(["'])/g,"$1").replace(/\\\\/g,"\\")),i[4]==="class"?f.push(m):p[i[4]]=m===""?m:m||!0}}return f.length>0&&(p.className=f.join(" ")),it[t]={tag:s,attrs:p}}function St(t,i){var s=i.attrs,f=re.call(s,"class"),p=f?s.class:s.className;if(i.tag=t.tag,i.attrs={},!Ve(t.attrs)&&!Ve(s)){var c={};for(var o in s)re.call(s,o)&&(c[o]=s[o]);s=c}for(var o in t.attrs)re.call(t.attrs,o)&&o!=="className"&&!re.call(s,o)&&(s[o]=t.attrs[o]);(p!=null||t.attrs.className!=null)&&(s.className=p!=null?t.attrs.className!=null?String(t.attrs.className)+" "+String(p):p:t.attrs.className!=null?t.attrs.className:null),f&&(s.class=null);for(var o in s)if(re.call(s,o)&&o!=="key"){i.attrs=s;break}return i}function kt(t){if(t==null||typeof t!="string"&&typeof t!="function"&&typeof t.view!="function")throw Error("The selector must be either a string or a component.");var i=It.apply(1,arguments);return typeof t=="string"&&(i.children=Rt.normalizeChildren(i.children),t!=="[")?St(it[t]||jt(t),i):(i.tag=t,i)}var at=kt,$t=Y,_t=function(t){return t==null&&(t=""),$t("<",void 0,void 0,t,void 0,void 0)},Mt=Y,qt=nt,Ft=function(){var t=qt.apply(0,arguments);return t.tag="[",t.children=Mt.normalizeChildren(t.children),t},Se=at;Se.trust=_t;Se.fragment=Ft;var Dt=Se,ue={exports:{}},F=function(t){if(!(this instanceof F))throw new Error("Promise must be called with 'new'.");if(typeof t!="function")throw new TypeError("executor must be a function.");var i=this,s=[],f=[],p=u(s,!0),c=u(f,!1),o=i._instance={resolvers:s,rejectors:f},m=typeof setImmediate=="function"?setImmediate:setTimeout;function u(x,d){return function P(C){var T;try{if(d&&C!=null&&(typeof C=="object"||typeof C=="function")&&typeof(T=C.then)=="function"){if(C===i)throw new TypeError("Promise can't be resolved with itself.");y(T.bind(C))}else m(function(){!d&&x.length===0&&console.error("Possible unhandled promise rejection:",C);for(var v=0;v<x.length;v++)x[v](C);s.length=0,f.length=0,o.state=d,o.retry=function(){P(C)}})}catch(v){c(v)}}}function y(x){var d=0;function P(T){return function(v){d++>0||T(v)}}var C=P(c);try{x(P(p),C)}catch(T){C(T)}}y(t)};F.prototype.then=function(t,i){var s=this,f=s._instance;function p(u,y,x,d){y.push(function(P){if(typeof u!="function")x(P);else try{c(u(P))}catch(C){o&&o(C)}}),typeof f.retry=="function"&&d===f.state&&f.retry()}var c,o,m=new F(function(u,y){c=u,o=y});return p(t,f.resolvers,c,!0),p(i,f.rejectors,o,!1),m};F.prototype.catch=function(t){return this.then(null,t)};F.prototype.finally=function(t){return this.then(function(i){return F.resolve(t()).then(function(){return i})},function(i){return F.resolve(t()).then(function(){return F.reject(i)})})};F.resolve=function(t){return t instanceof F?t:new F(function(i){i(t)})};F.reject=function(t){return new F(function(i,s){s(t)})};F.all=function(t){return new F(function(i,s){var f=t.length,p=0,c=[];if(t.length===0)i([]);else for(var o=0;o<t.length;o++)(function(m){function u(y){p++,c[m]=y,p===f&&i(c)}t[m]!=null&&(typeof t[m]=="object"||typeof t[m]=="function")&&typeof t[m].then=="function"?t[m].then(u,s):u(t[m])})(o)})};F.race=function(t){return new F(function(i,s){for(var f=0;f<t.length;f++)t[f].then(i,s)})};var st=F,fe=st;typeof window!="undefined"?(typeof window.Promise=="undefined"?window.Promise=fe:window.Promise.prototype.finally||(window.Promise.prototype.finally=fe.prototype.finally),ue.exports=window.Promise):typeof te!="undefined"?(typeof te.Promise=="undefined"?te.Promise=fe:te.Promise.prototype.finally||(te.Promise.prototype.finally=fe.prototype.finally),ue.exports=te.Promise):ue.exports=fe;var Ie=Y,Ht=function(t){var i=t&&t.document,s,f={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"};function p(r){return r.attrs&&r.attrs.xmlns||f[r.tag]}function c(r,e){if(r.state!==e)throw new Error("'vnode.state' must not be modified.")}function o(r){var e=r.state;try{return this.apply(e,arguments)}finally{c(r,e)}}function m(){try{return i.activeElement}catch{return null}}function u(r,e,n,a,l,h,b){for(var L=n;L<a;L++){var w=e[L];w!=null&&y(r,w,l,b,h)}}function y(r,e,n,a,l){var h=e.tag;if(typeof h=="string")switch(e.state={},e.attrs!=null&&Ce(e.attrs,e,n),h){case"#":x(r,e,l);break;case"<":P(r,e,a,l);break;case"[":C(r,e,n,a,l);break;default:T(r,e,n,a,l)}else z(r,e,n,a,l)}function x(r,e,n){e.dom=i.createTextNode(e.children),Q(r,e.dom,n)}var d={caption:"table",thead:"table",tbody:"table",tfoot:"table",tr:"tbody",th:"tr",td:"tr",colgroup:"table",col:"colgroup"};function P(r,e,n,a){var l=e.children.match(/^\s*?<(\w+)/im)||[],h=i.createElement(d[l[1]]||"div");n==="http://www.w3.org/2000/svg"?(h.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e.children+"</svg>",h=h.firstChild):h.innerHTML=e.children,e.dom=h.firstChild,e.domSize=h.childNodes.length,e.instance=[];for(var b=i.createDocumentFragment(),L;L=h.firstChild;)e.instance.push(L),b.appendChild(L);Q(r,b,a)}function C(r,e,n,a,l){var h=i.createDocumentFragment();if(e.children!=null){var b=e.children;u(h,b,0,b.length,n,null,a)}e.dom=h.firstChild,e.domSize=h.childNodes.length,Q(r,h,l)}function T(r,e,n,a,l){var h=e.tag,b=e.attrs,L=b&&b.is;a=p(e)||a;var w=a?L?i.createElementNS(a,h,{is:L}):i.createElementNS(a,h):L?i.createElement(h,{is:L}):i.createElement(h);if(e.dom=w,b!=null&&dt(e,b,a),Q(r,w,l),!He(e)&&e.children!=null){var R=e.children;u(w,R,0,R.length,n,null,a),e.tag==="select"&&b!=null&&xt(e,b)}}function v(r,e){var n;if(typeof r.tag.view=="function"){if(r.state=Object.create(r.tag),n=r.state.view,n.$$reentrantLock$$!=null)return;n.$$reentrantLock$$=!0}else{if(r.state=void 0,n=r.tag,n.$$reentrantLock$$!=null)return;n.$$reentrantLock$$=!0,r.state=r.tag.prototype!=null&&typeof r.tag.prototype.view=="function"?new r.tag(r):r.tag(r)}if(Ce(r.state,r,e),r.attrs!=null&&Ce(r.attrs,r,e),r.instance=Ie.normalize(o.call(r.state.view,r)),r.instance===r)throw Error("A view cannot return the vnode it received as argument");n.$$reentrantLock$$=null}function z(r,e,n,a,l){v(e,n),e.instance!=null?(y(r,e.instance,n,a,l),e.dom=e.instance.dom,e.domSize=e.dom!=null?e.instance.domSize:0):e.domSize=0}function M(r,e,n,a,l,h){if(!(e===n||e==null&&n==null))if(e==null||e.length===0)u(r,n,0,n.length,a,l,h);else if(n==null||n.length===0)ie(r,e,0,e.length);else{var b=e[0]!=null&&e[0].key!=null,L=n[0]!=null&&n[0].key!=null,w=0,R=0;if(!b)for(;R<e.length&&e[R]==null;)R++;if(!L)for(;w<n.length&&n[w]==null;)w++;if(b!==L)ie(r,e,R,e.length),u(r,n,w,n.length,a,l,h);else if(L){for(var J=e.length-1,q=n.length-1,pe,B,_,U,j,Oe;J>=R&&q>=w&&(U=e[J],j=n[q],U.key===j.key);)U!==j&&K(r,U,j,a,l,h),j.dom!=null&&(l=j.dom),J--,q--;for(;J>=R&&q>=w&&(B=e[R],_=n[w],B.key===_.key);)R++,w++,B!==_&&K(r,B,_,a,W(e,R,l),h);for(;J>=R&&q>=w&&!(w===q||B.key!==j.key||U.key!==_.key);)Oe=W(e,R,l),Z(r,U,Oe),U!==_&&K(r,U,_,a,Oe,h),++w<=--q&&Z(r,B,l),B!==j&&K(r,B,j,a,l,h),j.dom!=null&&(l=j.dom),R++,J--,U=e[J],j=n[q],B=e[R],_=n[w];for(;J>=R&&q>=w&&U.key===j.key;)U!==j&&K(r,U,j,a,l,h),j.dom!=null&&(l=j.dom),J--,q--,U=e[J],j=n[q];if(w>q)ie(r,e,R,J+1);else if(R>J)u(r,n,w,q+1,a,l,h);else{var Lt=l,Qe=q-w+1,se=new Array(Qe),Le=0,k=0,Te=2147483647,Ae=0,pe,Re;for(k=0;k<Qe;k++)se[k]=-1;for(k=q;k>=w;k--){pe==null&&(pe=A(e,R,J+1)),j=n[k];var ee=pe[j.key];ee!=null&&(Te=ee<Te?ee:-1,se[k-w]=ee,U=e[ee],e[ee]=null,U!==j&&K(r,U,j,a,l,h),j.dom!=null&&(l=j.dom),Ae++)}if(l=Lt,Ae!==J-R+1&&ie(r,e,R,J+1),Ae===0)u(r,n,w,q+1,a,l,h);else if(Te===-1)for(Re=H(se),Le=Re.length-1,k=q;k>=w;k--)_=n[k],se[k-w]===-1?y(r,_,a,h,l):Re[Le]===k-w?Le--:Z(r,_,l),_.dom!=null&&(l=n[k].dom);else for(k=q;k>=w;k--)_=n[k],se[k-w]===-1&&y(r,_,a,h,l),_.dom!=null&&(l=n[k].dom)}}else{var Ne=e.length<n.length?e.length:n.length;for(w=w<R?w:R;w<Ne;w++)B=e[w],_=n[w],!(B===_||B==null&&_==null)&&(B==null?y(r,_,a,h,W(e,w+1,l)):_==null?ce(r,B):K(r,B,_,a,W(e,w+1,l),h));e.length>Ne&&ie(r,e,w,e.length),n.length>Ne&&u(r,n,w,n.length,a,l,h)}}}function K(r,e,n,a,l,h){var b=e.tag,L=n.tag;if(b===L){if(n.state=e.state,n.events=e.events,Ot(n,e))return;if(typeof b=="string")switch(n.attrs!=null&&Ee(n.attrs,n,a),b){case"#":$(e,n);break;case"<":N(r,e,n,h,l);break;case"[":I(r,e,n,a,l,h);break;default:E(e,n,a,h)}else S(r,e,n,a,l,h)}else ce(r,e),y(r,n,a,h,l)}function $(r,e){r.children.toString()!==e.children.toString()&&(r.dom.nodeValue=e.children),e.dom=r.dom}function N(r,e,n,a,l){e.children!==n.children?(Ue(r,e),P(r,n,a,l)):(n.dom=e.dom,n.domSize=e.domSize,n.instance=e.instance)}function I(r,e,n,a,l,h){M(r,e.children,n.children,a,l,h);var b=0,L=n.children;if(n.dom=null,L!=null){for(var w=0;w<L.length;w++){var R=L[w];R!=null&&R.dom!=null&&(n.dom==null&&(n.dom=R.dom),b+=R.domSize||1)}b!==1&&(n.domSize=b)}}function E(r,e,n,a){var l=e.dom=r.dom;a=p(e)||a,e.tag==="textarea"&&e.attrs==null&&(e.attrs={}),Pt(e,r.attrs,e.attrs,a),He(e)||M(l,r.children,e.children,n,null,a)}function S(r,e,n,a,l,h){if(n.instance=Ie.normalize(o.call(n.state.view,n)),n.instance===n)throw Error("A view cannot return the vnode it received as argument");Ee(n.state,n,a),n.attrs!=null&&Ee(n.attrs,n,a),n.instance!=null?(e.instance==null?y(r,n.instance,a,h,l):K(r,e.instance,n.instance,a,l,h),n.dom=n.instance.dom,n.domSize=n.instance.domSize):e.instance!=null?(ce(r,e.instance),n.dom=void 0,n.domSize=0):(n.dom=e.dom,n.domSize=e.domSize)}function A(r,e,n){for(var a=Object.create(null);e<n;e++){var l=r[e];if(l!=null){var h=l.key;h!=null&&(a[h]=e)}}return a}var O=[];function H(r){for(var e=[0],n=0,a=0,l=0,h=O.length=r.length,l=0;l<h;l++)O[l]=r[l];for(var l=0;l<h;++l)if(r[l]!==-1){var b=e[e.length-1];if(r[b]<r[l]){O[l]=b,e.push(l);continue}for(n=0,a=e.length-1;n<a;){var L=(n>>>1)+(a>>>1)+(n&a&1);r[e[L]]<r[l]?n=L+1:a=L}r[l]<r[e[n]]&&(n>0&&(O[l]=e[n-1]),e[n]=l)}for(n=e.length,a=e[n-1];n-- >0;)e[n]=a,a=O[a];return O.length=0,e}function W(r,e,n){for(;e<r.length;e++)if(r[e]!=null&&r[e].dom!=null)return r[e].dom;return n}function Z(r,e,n){var a=i.createDocumentFragment();G(r,a,e),Q(r,a,n)}function G(r,e,n){for(;n.dom!=null&&n.dom.parentNode===r;){if(typeof n.tag!="string"){if(n=n.instance,n!=null)continue}else if(n.tag==="<")for(var a=0;a<n.instance.length;a++)e.appendChild(n.instance[a]);else if(n.tag!=="[")e.appendChild(n.dom);else if(n.children.length===1){if(n=n.children[0],n!=null)continue}else for(var a=0;a<n.children.length;a++){var l=n.children[a];l!=null&&G(r,e,l)}break}}function Q(r,e,n){n!=null?r.insertBefore(e,n):r.appendChild(e)}function He(r){if(r.attrs==null||r.attrs.contenteditable==null&&r.attrs.contentEditable==null)return!1;var e=r.children;if(e!=null&&e.length===1&&e[0].tag==="<"){var n=e[0].children;r.dom.innerHTML!==n&&(r.dom.innerHTML=n)}else if(e!=null&&e.length!==0)throw new Error("Child node of a contenteditable must be trusted.");return!0}function ie(r,e,n,a){for(var l=n;l<a;l++){var h=e[l];h!=null&&ce(r,h)}}function ce(r,e){var n=0,a=e.state,l,h;if(typeof e.tag!="string"&&typeof e.state.onbeforeremove=="function"){var b=o.call(e.state.onbeforeremove,e);b!=null&&typeof b.then=="function"&&(n=1,l=b)}if(e.attrs&&typeof e.attrs.onbeforeremove=="function"){var b=o.call(e.attrs.onbeforeremove,e);b!=null&&typeof b.then=="function"&&(n|=2,h=b)}if(c(e,a),!n)he(e),de(r,e);else{if(l!=null){var L=function(){n&1&&(n&=2,n||w())};l.then(L,L)}if(h!=null){var L=function(){n&2&&(n&=1,n||w())};h.then(L,L)}}function w(){c(e,a),he(e),de(r,e)}}function Ue(r,e){for(var n=0;n<e.instance.length;n++)r.removeChild(e.instance[n])}function de(r,e){for(;e.dom!=null&&e.dom.parentNode===r;){if(typeof e.tag!="string"){if(e=e.instance,e!=null)continue}else if(e.tag==="<")Ue(r,e);else{if(e.tag!=="["&&(r.removeChild(e.dom),!Array.isArray(e.children)))break;if(e.children.length===1){if(e=e.children[0],e!=null)continue}else for(var n=0;n<e.children.length;n++){var a=e.children[n];a!=null&&de(r,a)}}break}}function he(r){if(typeof r.tag!="string"&&typeof r.state.onremove=="function"&&o.call(r.state.onremove,r),r.attrs&&typeof r.attrs.onremove=="function"&&o.call(r.attrs.onremove,r),typeof r.tag!="string")r.instance!=null&&he(r.instance);else{var e=r.children;if(Array.isArray(e))for(var n=0;n<e.length;n++){var a=e[n];a!=null&&he(a)}}}function dt(r,e,n){r.tag==="input"&&e.type!=null&&r.dom.setAttribute("type",e.type);var a=e!=null&&r.tag==="input"&&e.type==="file";for(var l in e)ve(r,l,null,e[l],n,a)}function ve(r,e,n,a,l,h){if(!(e==="key"||e==="is"||a==null||Je(e)||n===a&&!Ct(r,e)&&typeof a!="object"||e==="type"&&r.tag==="input")){if(e[0]==="o"&&e[1]==="n")return We(r,e,a);if(e.slice(0,6)==="xlink:")r.dom.setAttributeNS("http://www.w3.org/1999/xlink",e.slice(6),a);else if(e==="style")Ke(r.dom,n,a);else if(Be(r,e,l)){if(e==="value"){if((r.tag==="input"||r.tag==="textarea")&&r.dom.value===""+a&&(h||r.dom===m())||r.tag==="select"&&n!==null&&r.dom.value===""+a||r.tag==="option"&&n!==null&&r.dom.value===""+a)return;if(h&&""+a!=""){console.error("`value` is read-only on file inputs!");return}}r.dom[e]=a}else typeof a=="boolean"?a?r.dom.setAttribute(e,""):r.dom.removeAttribute(e):r.dom.setAttribute(e==="className"?"class":e,a)}}function vt(r,e,n,a){if(!(e==="key"||e==="is"||n==null||Je(e)))if(e[0]==="o"&&e[1]==="n")We(r,e,void 0);else if(e==="style")Ke(r.dom,n,null);else if(Be(r,e,a)&&e!=="className"&&e!=="title"&&!(e==="value"&&(r.tag==="option"||r.tag==="select"&&r.dom.selectedIndex===-1&&r.dom===m()))&&!(r.tag==="input"&&e==="type"))r.dom[e]=null;else{var l=e.indexOf(":");l!==-1&&(e=e.slice(l+1)),n!==!1&&r.dom.removeAttribute(e==="className"?"class":e)}}function xt(r,e){if("value"in e)if(e.value===null)r.dom.selectedIndex!==-1&&(r.dom.value=null);else{var n=""+e.value;(r.dom.value!==n||r.dom.selectedIndex===-1)&&(r.dom.value=n)}"selectedIndex"in e&&ve(r,"selectedIndex",null,e.selectedIndex,void 0)}function Pt(r,e,n,a){if(e&&e===n&&console.warn("Don't reuse attrs object, use new object for every redraw, this will throw in next major"),n!=null){r.tag==="input"&&n.type!=null&&r.dom.setAttribute("type",n.type);var l=r.tag==="input"&&n.type==="file";for(var h in n)ve(r,h,e&&e[h],n[h],a,l)}var b;if(e!=null)for(var h in e)(b=e[h])!=null&&(n==null||n[h]==null)&&vt(r,h,b,a)}function Ct(r,e){return e==="value"||e==="checked"||e==="selectedIndex"||e==="selected"&&r.dom===m()||r.tag==="option"&&r.dom.parentNode===i.activeElement}function Je(r){return r==="oninit"||r==="oncreate"||r==="onupdate"||r==="onremove"||r==="onbeforeremove"||r==="onbeforeupdate"}function Be(r,e,n){return n===void 0&&(r.tag.indexOf("-")>-1||r.attrs!=null&&r.attrs.is||e!=="href"&&e!=="list"&&e!=="form"&&e!=="width"&&e!=="height")&&e in r.dom}var Et=/[A-Z]/g;function Nt(r){return"-"+r.toLowerCase()}function xe(r){return r[0]==="-"&&r[1]==="-"?r:r==="cssFloat"?"float":r.replace(Et,Nt)}function Ke(r,e,n){if(e!==n)if(n==null)r.style.cssText="";else if(typeof n!="object")r.style.cssText=n;else if(e==null||typeof e!="object"){r.style.cssText="";for(var a in n){var l=n[a];l!=null&&r.style.setProperty(xe(a),String(l))}}else{for(var a in n){var l=n[a];l!=null&&(l=String(l))!==String(e[a])&&r.style.setProperty(xe(a),l)}for(var a in e)e[a]!=null&&n[a]==null&&r.style.removeProperty(xe(a))}}function Pe(){this._=s}Pe.prototype=Object.create(null),Pe.prototype.handleEvent=function(r){var e=this["on"+r.type],n;typeof e=="function"?n=e.call(r.currentTarget,r):typeof e.handleEvent=="function"&&e.handleEvent(r),this._&&r.redraw!==!1&&(0,this._)(),n===!1&&(r.preventDefault(),r.stopPropagation())};function We(r,e,n){if(r.events!=null){if(r.events._=s,r.events[e]===n)return;n!=null&&(typeof n=="function"||typeof n=="object")?(r.events[e]==null&&r.dom.addEventListener(e.slice(2),r.events,!1),r.events[e]=n):(r.events[e]!=null&&r.dom.removeEventListener(e.slice(2),r.events,!1),r.events[e]=void 0)}else n!=null&&(typeof n=="function"||typeof n=="object")&&(r.events=new Pe,r.dom.addEventListener(e.slice(2),r.events,!1),r.events[e]=n)}function Ce(r,e,n){typeof r.oninit=="function"&&o.call(r.oninit,e),typeof r.oncreate=="function"&&n.push(o.bind(r.oncreate,e))}function Ee(r,e,n){typeof r.onupdate=="function"&&n.push(o.bind(r.onupdate,e))}function Ot(r,e){do{if(r.attrs!=null&&typeof r.attrs.onbeforeupdate=="function"){var n=o.call(r.attrs.onbeforeupdate,r,e);if(n!==void 0&&!n)break}if(typeof r.tag!="string"&&typeof r.state.onbeforeupdate=="function"){var n=o.call(r.state.onbeforeupdate,r,e);if(n!==void 0&&!n)break}return!1}while(!1);return r.dom=e.dom,r.domSize=e.domSize,r.instance=e.instance,r.attrs=e.attrs,r.children=e.children,r.text=e.text,!0}var ae;return function(r,e,n){if(!r)throw new TypeError("DOM element being rendered to does not exist.");if(ae!=null&&r.contains(ae))throw new TypeError("Node is currently being rendered to and thus is locked.");var a=s,l=ae,h=[],b=m(),L=r.namespaceURI;ae=r,s=typeof n=="function"?n:void 0;try{r.vnodes==null&&(r.textContent=""),e=Ie.normalizeChildren(Array.isArray(e)?e:[e]),M(r,r.vnodes,e,h,null,L==="http://www.w3.org/1999/xhtml"?void 0:L),r.vnodes=e,b!=null&&m()!==b&&typeof b.focus=="function"&&b.focus();for(var w=0;w<h.length;w++)h[w]()}finally{s=a,ae=l}}},ft=Ht(typeof window!="undefined"?window:null),Ye=Y,Ut=function(t,i,s){var f=[],p=!1,c=-1;function o(){for(c=0;c<f.length;c+=2)try{t(f[c],Ye(f[c+1]),m)}catch(y){s.error(y)}c=-1}function m(){p||(p=!0,i(function(){p=!1,o()}))}m.sync=o;function u(y,x){if(x!=null&&x.view==null&&typeof x!="function")throw new TypeError("m.mount expects a component, not a vnode.");var d=f.indexOf(y);d>=0&&(f.splice(d,2),d<=c&&(c-=2),t(y,[])),x!=null&&(f.push(y,x),t(y,Ye(x),m))}return{mount:u,redraw:m}},Jt=ft,ke=Ut(Jt,typeof requestAnimationFrame!="undefined"?requestAnimationFrame:null,typeof console!="undefined"?console:null),lt=function(t){if(Object.prototype.toString.call(t)!=="[object Object]")return"";var i=[];for(var s in t)f(s,t[s]);return i.join("&");function f(p,c){if(Array.isArray(c))for(var o=0;o<c.length;o++)f(p+"["+o+"]",c[o]);else if(Object.prototype.toString.call(c)==="[object Object]")for(var o in c)f(p+"["+o+"]",c[o]);else i.push(encodeURIComponent(p)+(c!=null&&c!==""?"="+encodeURIComponent(c):""))}},Bt=we,ot=Object.assign||function(t,i){for(var s in i)Bt.call(i,s)&&(t[s]=i[s])},Kt=lt,Wt=ot,$e=function(t,i){if(/:([^\/\.-]+)(\.{3})?:/.test(t))throw new SyntaxError("Template parameter names must be separated by either a '/', '-', or '.'.");if(i==null)return t;var s=t.indexOf("?"),f=t.indexOf("#"),p=f<0?t.length:f,c=s<0?p:s,o=t.slice(0,c),m={};Wt(m,i);var u=o.replace(/:([^\/\.-]+)(\.{3})?/g,function(v,z,M){return delete m[z],i[z]==null?v:M?i[z]:encodeURIComponent(String(i[z]))}),y=u.indexOf("?"),x=u.indexOf("#"),d=x<0?u.length:x,P=y<0?d:y,C=u.slice(0,P);s>=0&&(C+=t.slice(s,p)),y>=0&&(C+=(s<0?"?":"&")+u.slice(y,d));var T=Kt(m);return T&&(C+=(s<0&&y<0?"?":"&")+T),f>=0&&(C+=t.slice(f)),x>=0&&(C+=(f<0?"":"&")+u.slice(x)),C},Qt=$e,Ge=we,Vt=function(t,i,s){var f=0;function p(m){return new i(m)}p.prototype=i.prototype,p.__proto__=i;function c(m){return function(u,y){typeof u!="string"?(y=u,u=u.url):y==null&&(y={});var x=new i(function(T,v){m(Qt(u,y.params),y,function(z){if(typeof y.type=="function")if(Array.isArray(z))for(var M=0;M<z.length;M++)z[M]=new y.type(z[M]);else z=new y.type(z);T(z)},v)});if(y.background===!0)return x;var d=0;function P(){--d===0&&typeof s=="function"&&s()}return C(x);function C(T){var v=T.then;return T.constructor=p,T.then=function(){d++;var z=v.apply(T,arguments);return z.then(P,function(M){if(P(),d===0)throw M}),C(z)},T}}}function o(m,u){for(var y in m.headers)if(Ge.call(m.headers,y)&&y.toLowerCase()===u)return!0;return!1}return{request:c(function(m,u,y,x){var d=u.method!=null?u.method.toUpperCase():"GET",P=u.body,C=(u.serialize==null||u.serialize===JSON.serialize)&&!(P instanceof t.FormData||P instanceof t.URLSearchParams),T=u.responseType||(typeof u.extract=="function"?"":"json"),v=new t.XMLHttpRequest,z=!1,M=!1,K=v,$,N=v.abort;v.abort=function(){z=!0,N.call(this)},v.open(d,m,u.async!==!1,typeof u.user=="string"?u.user:void 0,typeof u.password=="string"?u.password:void 0),C&&P!=null&&!o(u,"content-type")&&v.setRequestHeader("Content-Type","application/json; charset=utf-8"),typeof u.deserialize!="function"&&!o(u,"accept")&&v.setRequestHeader("Accept","application/json, text/*"),u.withCredentials&&(v.withCredentials=u.withCredentials),u.timeout&&(v.timeout=u.timeout),v.responseType=T;for(var I in u.headers)Ge.call(u.headers,I)&&v.setRequestHeader(I,u.headers[I]);v.onreadystatechange=function(E){if(!z&&E.target.readyState===4)try{var S=E.target.status>=200&&E.target.status<300||E.target.status===304||/^file:\/\//i.test(m),A=E.target.response,O;if(T==="json"){if(!E.target.responseType&&typeof u.extract!="function")try{A=JSON.parse(E.target.responseText)}catch{A=null}}else(!T||T==="text")&&A==null&&(A=E.target.responseText);if(typeof u.extract=="function"?(A=u.extract(E.target,u),S=!0):typeof u.deserialize=="function"&&(A=u.deserialize(A)),S)y(A);else{var H=function(){try{O=E.target.responseText}catch{O=A}var W=new Error(O);W.code=E.target.status,W.response=A,x(W)};v.status===0?setTimeout(function(){M||H()}):H()}}catch(W){x(W)}},v.ontimeout=function(E){M=!0;var S=new Error("Request timed out");S.code=E.target.status,x(S)},typeof u.config=="function"&&(v=u.config(v,u,m)||v,v!==K&&($=v.abort,v.abort=function(){z=!0,$.call(this)})),P==null?v.send():typeof u.serialize=="function"?v.send(u.serialize(P)):P instanceof t.FormData||P instanceof t.URLSearchParams?v.send(P):v.send(JSON.stringify(P))}),jsonp:c(function(m,u,y,x){var d=u.callbackName||"_mithril_"+Math.round(Math.random()*1e16)+"_"+f++,P=t.document.createElement("script");t[d]=function(C){delete t[d],P.parentNode.removeChild(P),y(C)},P.onerror=function(){delete t[d],P.parentNode.removeChild(P),x(new Error("JSONP request failed"))},P.src=m+(m.indexOf("?")<0?"?":"&")+encodeURIComponent(u.callbackKey||"callback")+"="+encodeURIComponent(d),t.document.documentElement.appendChild(P)})}},Yt=ue.exports,Gt=ke,Xt=Vt(typeof window!="undefined"?window:null,Yt,Gt.redraw);function Xe(t){try{return decodeURIComponent(t)}catch{return t}}var ut=function(t){if(t===""||t==null)return{};t.charAt(0)==="?"&&(t=t.slice(1));for(var i=t.split("&"),s={},f={},p=0;p<i.length;p++){var c=i[p].split("="),o=Xe(c[0]),m=c.length===2?Xe(c[1]):"";m==="true"?m=!0:m==="false"&&(m=!1);var u=o.split(/\]\[?|\[/),y=f;o.indexOf("[")>-1&&u.pop();for(var x=0;x<u.length;x++){var d=u[x],P=u[x+1],C=P==""||!isNaN(parseInt(P,10));if(d===""){var o=u.slice(0,x).join();s[o]==null&&(s[o]=Array.isArray(y)?y.length:0),d=s[o]++}else if(d==="__proto__")break;if(x===u.length-1)y[d]=m;else{var T=Object.getOwnPropertyDescriptor(y,d);T!=null&&(T=T.value),T==null&&(y[d]=T=C?[]:{}),y=T}}}return f},Zt=ut,_e=function(t){var i=t.indexOf("?"),s=t.indexOf("#"),f=s<0?t.length:s,p=i<0?f:i,c=t.slice(0,p).replace(/\/{2,}/g,"/");return c?(c[0]!=="/"&&(c="/"+c),c.length>1&&c[c.length-1]==="/"&&(c=c.slice(0,-1))):c="/",{path:c,params:i<0?{}:Zt(t.slice(i+1,f))}},er=_e,tr=function(t){var i=er(t),s=Object.keys(i.params),f=[],p=new RegExp("^"+i.path.replace(/:([^\/.-]+)(\.{3}|\.(?!\.)|-)?|[\\^$*+.()|\[\]{}]/g,function(c,o,m){return o==null?"\\"+c:(f.push({k:o,r:m==="..."}),m==="..."?"(.*)":m==="."?"([^/]+)\\.":"([^/]+)"+(m||""))})+"$");return function(c){for(var o=0;o<s.length;o++)if(i.params[s[o]]!==c.params[s[o]])return!1;if(!f.length)return p.test(c.path);var m=p.exec(c.path);if(m==null)return!1;for(var o=0;o<f.length;o++)c.params[f[o].k]=f[o].r?m[o+1]:decodeURIComponent(m[o+1]);return!0}},Ze=we,et=new RegExp("^(?:key|oninit|oncreate|onbeforeupdate|onupdate|onbeforeremove|onremove)$"),ct=function(t,i){var s={};if(i!=null)for(var f in t)Ze.call(t,f)&&!et.test(f)&&i.indexOf(f)<0&&(s[f]=t[f]);else for(var f in t)Ze.call(t,f)&&!et.test(f)&&(s[f]=t[f]);return s},rr=Y,nr=at,ir=ue.exports,tt=$e,rt=_e,ar=tr,sr=ot,fr=ct,ze={};function lr(t){try{return decodeURIComponent(t)}catch{return t}}var or=function(t,i){var s=t==null?null:typeof t.setImmediate=="function"?t.setImmediate:t.setTimeout,f=ir.resolve(),p=!1,c=!1,o=0,m,u,y=ze,x,d,P,C,T={onbeforeupdate:function(){return o=o?2:1,!(!o||ze===y)},onremove:function(){t.removeEventListener("popstate",M,!1),t.removeEventListener("hashchange",z,!1)},view:function(){if(!(!o||ze===y)){var N=[rr(x,d.key,d)];return y&&(N=y.render(N[0])),N}}},v=$.SKIP={};function z(){p=!1;var N=t.location.hash;$.prefix[0]!=="#"&&(N=t.location.search+N,$.prefix[0]!=="?"&&(N=t.location.pathname+N,N[0]!=="/"&&(N="/"+N)));var I=N.concat().replace(/(?:%[a-f89][a-f0-9])+/gim,lr).slice($.prefix.length),E=rt(I);sr(E.params,t.history.state);function S(O){console.error(O),K(u,null,{replace:!0})}A(0);function A(O){for(;O<m.length;O++)if(m[O].check(E)){var H=m[O].component,W=m[O].route,Z=H,G=C=function(Q){if(G===C){if(Q===v)return A(O+1);x=Q!=null&&(typeof Q.view=="function"||typeof Q=="function")?Q:"div",d=E.params,P=I,C=null,y=H.render?H:null,o===2?i.redraw():(o=2,i.redraw.sync())}};H.view||typeof H=="function"?(H={},G(Z)):H.onmatch?f.then(function(){return H.onmatch(E.params,I,W)}).then(G,I===u?null:S):G("div");return}if(I===u)throw new Error("Could not resolve default route "+u+".");K(u,null,{replace:!0})}}function M(){p||(p=!0,s(z))}function K(N,I,E){if(N=tt(N,I),c){M();var S=E?E.state:null,A=E?E.title:null;E&&E.replace?t.history.replaceState(S,A,$.prefix+N):t.history.pushState(S,A,$.prefix+N)}else t.location.href=$.prefix+N}function $(N,I,E){if(!N)throw new TypeError("DOM element being rendered to does not exist.");if(m=Object.keys(E).map(function(A){if(A[0]!=="/")throw new SyntaxError("Routes must start with a '/'.");if(/:([^\/\.-]+)(\.{3})?:/.test(A))throw new SyntaxError("Route parameter names must be separated with either '/', '.', or '-'.");return{route:A,component:E[A],check:ar(A)}}),u=I,I!=null){var S=rt(I);if(!m.some(function(A){return A.check(S)}))throw new ReferenceError("Default route doesn't match any known routes.")}typeof t.history.pushState=="function"?t.addEventListener("popstate",M,!1):$.prefix[0]==="#"&&t.addEventListener("hashchange",z,!1),c=!0,i.mount(N,T),z()}return $.set=function(N,I,E){C!=null&&(E=E||{},E.replace=!0),C=null,K(N,I,E)},$.get=function(){return P},$.prefix="#!",$.Link={view:function(N){var I=nr(N.attrs.selector||"a",fr(N.attrs,["options","params","selector","onclick"]),N.children),E,S,A;return(I.attrs.disabled=Boolean(I.attrs.disabled))?(I.attrs.href=null,I.attrs["aria-disabled"]="true"):(E=N.attrs.options,S=N.attrs.onclick,A=tt(I.attrs.href,N.attrs.params),I.attrs.href=$.prefix+A,I.attrs.onclick=function(O){var H;typeof S=="function"?H=S.call(O.currentTarget,O):S==null||typeof S!="object"||typeof S.handleEvent=="function"&&S.handleEvent(O),H!==!1&&!O.defaultPrevented&&(O.button===0||O.which===0||O.which===1)&&(!O.currentTarget.target||O.currentTarget.target==="_self")&&!O.ctrlKey&&!O.metaKey&&!O.shiftKey&&!O.altKey&&(O.preventDefault(),O.redraw=!1,$.set(A,null,E))}),I}},$.param=function(N){return d&&N!=null?d[N]:d},$},ur=ke,cr=or(typeof window!="undefined"?window:null,ur),be=Dt,ht=Xt,pt=ke,D=function(){return be.apply(this,arguments)};D.m=be;D.trust=be.trust;D.fragment=be.fragment;D.Fragment="[";D.mount=pt.mount;D.route=cr;D.render=ft;D.redraw=pt.redraw;D.request=ht.request;D.jsonp=ht.jsonp;D.parseQueryString=ut;D.buildQueryString=lt;D.parsePathname=_e;D.buildPathname=$e;D.vnode=Y;D.PromisePolyfill=st;D.censor=ct;var g=D;const Me=()=>Math.random()*1e3,hr=t=>()=>t*1e3,pr=()=>{},mt=t=>t.split("/")[1].toUpperCase(),je=t=>t.settings.profile!=="desktop"&&t.status.sidebar,mr={view:({attrs:{mdl:t}})=>g("button#asterisk.w3-left.w3-button.w3-circle",{class:je(t)?"w3-black":"w3-white",onclick:i=>{t.status.sidebar=!t.status.sidebar}},g(".blob.red.pulse-red"))},gr=[{transform:"scale(0)",opacity:1},{transform:"scale(1)",opacity:1},{transform:"scale(0.8)",opacity:1},{transform:"scale(1)",opacity:1}],yr=[{opacity:0,transform:"translate3d(0, 40%, 0)"},{opacity:1,transform:"translate3d(0, 0, 0)"}],le=[{transform:"translate3d(-50%, 0, 0)"},{transform:"translate3d(0, 0, 0)",visibility:"visible"}],oe=[{transform:"translate3d(80%, 0, 0)",visibility:"visible"},{transform:"translate3d(0, 0, 0)"}],wr=[{transform:"translate3d(0, -50%, 0)"},{transform:"translate3d(0, 0, 0)",visibility:"visible"}],br=()=>{let t=Object.assign(le);return t[1].color="white",t};const dr={duration:700,easing:"ease-in-out",fill:"forwards"};function vr(t){const i=s=>{s.target===t&&t.removeEventListener("transitionend",i)};return new Promise(()=>t.addEventListener("transitionend",i))}const V=t=>({dom:i})=>{qe(t)({dom:i})},qe=(t,i=pr)=>({dom:s})=>setTimeout(()=>s.animate(t,dr).finished.then(vr(s)),i()),ye=(t,i)=>({dom:s})=>{[...s.children].map((p,c)=>{p.style.opacity=0,setTimeout(()=>{p.style.opacity=1,qe(t)({dom:p})},i())})},xr={view:({attrs:{mdl:t}})=>g("header.w3-bar",{style:{transitionDuration:2e3,backgroundColor:je(t)?"black":"white"}},g(g.route.Link,{href:"/home",id:"logo-header",class:"w3-left"},g("h1.typewriter type-writer",{style:{color:je(t)?"white":"black"},oncreate:({dom:i})=>i.onanimationend=()=>setTimeout(()=>i.classList.remove("type-writer"))},g("code","{Boaz Blake}"))),t.settings.profile==="desktop"?g("nav.w3-right",{oncreate:ye(wr,Me)},t.routes.filter(i=>i!==g.route.get()).map(i=>g(g.route.Link,{class:"w3-bar-item",href:i},mt(i)))):g(mr,{mdl:t}))},Pr=()=>({view:({attrs:{mdl:t}})=>g("ul.sidebar.w3-black",{oncreate:ye(br(),Me),onbeforeremove:ye(oe)},t.routes.filter(i=>i!==g.route.get()).map(i=>g(g.route.Link,{class:"sidebar-item",href:i,selector:"li"},mt(i))))}),me=()=>({view:({attrs:{mdl:t},children:i})=>g("#app",g(xr,{mdl:t}),i,t.status.sidebar&&t.settings.profile!=="desktop"&&g(Pr,{mdl:t}))}),ge=(t,i)=>Math.floor(Math.random()*(i-t+1)+t),gt=()=>({n:ge(0,1),x:ge(0,1),y:ge(0,1),deg:ge(0,360)}),Cr={pos:gt()},Er=t=>i=>(console.log("handlers",t,i[0].isIntersecting),i[0].isIntersecting?t.pos=gt():{});new IntersectionObserver(Er(Cr),{});const Nr=[{href:"https://github.com/boazblake",src:"images/github.svg",target:"_blank"},{href:"https://www.linkedin.com/in/boazblake/",src:"images/linkedin.svg",target:"_blank"},{href:"/resume",src:"images/cv.webp"},{href:"/portfolio",src:"images/applications.svg"}],Or=()=>{let t={hover:!1};return{view:({attrs:{href:i,src:s,target:f}})=>g(f?"a":g.route.Link,{onmouseenter:()=>t.hover=!0,onmouseleave:()=>t.hover=!1,oncreate:qe(gr,Me),target:f?"_blank":"",href:i},g("img",{style:{margin:"2px",height:"50px",width:"50px",transition:"transform .1s ease-in",...t.hover&&{transform:"skewY(10deg)"}},src:s}))}},Lr=({settings:{profile:t}})=>{switch(t){case"phone":return{width:"200px",height:"200px"};case"tablet":return{width:"250px",height:"250px"};case"desktop":return{width:"300px",height:"300px"}}},Tr={view:({attrs:{mdl:t}})=>g(".w3-container",{style:{maxHeight:"80vh"},oncreate:ye(yr,hr(.05))},g(".w3-row",g(".w3-half",g("img#me",{style:{...Lr(t),transition:" all 1s ease-out;"},src:"images/me.webp"})),g("p.w3-half",{style:{color:"black",fontSize:"1.4rem"}},"Front-End developer with half a decade of industry experience building a variety of different applications using a multitude of different frameworks and languages.")),g("a",{href:"mailto:boazblake@protonMail.com",style:{color:"black",padding:"4px",margin:"4px",fontSize:"1rem"}},"BoazBlake @ protonMail dot com"),g(".column-end",Nr.map(({href:i,src:s,target:f})=>g(Or,{href:i,src:s,target:f}))))},Fe=()=>{let t=parseInt(localStorage.getItem("repos-date"));return(Date.now()-t)/1e3>=3600?(localStorage.clear("repos"),null):localStorage.getItem("repos")},Ar=t=>(t.portfolio.reposList=JSON.parse(Fe()),t.portfolio.reposList),Rr=t=>(localStorage.setItem("repos-date",JSON.stringify(Date.now())),localStorage.setItem("repos",JSON.stringify(t)),t),De=t=>localStorage.getItem(t),Ir=t=>JSON.parse(De(t)),zr=t=>i=>(localStorage.setItem(t,JSON.stringify(i)),i),jr=t=>t.forEach(i=>i.target.style.opacity=i.isIntersecting?1:0),Sr=new IntersectionObserver(jr),kr=t=>Fe()?Promise.resolve(Ar(t)):g.request({url:"https://api.github.com/users/boazblake/repos?sort=asc&per_page=100",headers:{Accept:"application/vnd.github.v3+json"}}).then(Rr),$r=t=>De(t.name)?Promise.resolve(Ir(t.name)):g.request({url:`https://api.github.com/repos/boazblake/${t.name}`}).then(zr(t.name)),_r=()=>{const t={name:"",status:"loading"};return{oninit:({attrs:{mdl:i,url:s}})=>{t.name=s.split("/")[3],$r(t).then(({description:f})=>{t.errors=null,t.info=f&&f.split("~")[0],t.src=f&&f.split("~")[1],t.status="loaded",i.portfolio.repos[t.name]={description:f},De(t.name)&&g.redraw()},f=>{t.status="failed",t.errors=f})},view:()=>(t.status=="loading",t.status=="failed",t.status=="loaded"&&g("a.w3-col s12 m6 l4",{href:`https://boazblake.github.io/${t.name}`,target:"_blank",oncreate:({dom:i})=>t.status=="loaded"&&Sr.observe(i),style:{opacity:1}},g(".w3-cell.w3-padding-small",g("h2",t.name),g("img",{width:"200px",src:t.src}),g(".info",t.info))))}},Mr=()=>{const t={status:"loading",errors:{}};return{oninit:({attrs:{mdl:i}})=>kr(i).then(s=>s.filter(f=>f.homepage&&f.homepage.includes("boazblake")&&f.description&&f.description.split("~")[1]).map(f=>f.homepage)).then(s=>{i.portfolio.reposList=s,t.status="loaded",Fe()&&g.redraw()},s=>{t.status="failed",t.errors=s}),view:({attrs:{mdl:i}})=>g(".w3-container",t.status=="failed"&&"Error fetching Repos ...",t.status=="loading"&&g(".w3-panel","Loading Repos ..."),t.status=="loaded"&&g(".w3-row.w3-grid.overflow",{style:{height:"80vh"}},i.portfolio.reposList.map(s=>g(_r,{url:s,mdl:i}))))}},qr={view:()=>g("embed.w3-container.overflow",{src:"files/resume.pdf",style:{height:"80vh",width:"100%"}})},Fr={view:()=>g("section.container",g("code.intro-text","After serving as a paratrooper in the IDF I spent the next decade in Academia studying the effects of changes in environment on Human Performance, from pregancy to sports-injuries to space-flight."),g("br"),g("code.intro-text",["My background in programming started at a 3 month boot-camp at the Iron Yard in Houston (since closed) supplemented with various online courses ",g("a.intro-text",{href:"https://online-learning.harvard.edu/course/cs50-introduction-computer-science",target:"_blank"},"from the Harvard CS50 course")," to ",g("a.intro-text",{href:"https://www.youtube.com/watch?v=I8LbkfSSR58",target:"_blank"},"Bartosz Milewski's Category Theory,")," as well as working through An Introduction to Functional Programming Through Lambda Calculus,",g("a.intro-text",{href:"https://egghead.io/courses/professor-frisby-introduces-composable-functional-javascript",target:"_blank"}," and Brian Lonsdorf's Professor Frisbies Egghead Course on FP in JS,"),g("a.intro-text",{href:"https://github.com/boazblake?tab=repositories",target:"_blank"}," and lots of time spent on personal projects,"),"and on-the-job training (Agile, SCRUM). "]),g("br"),g("code.intro-text","My current personal interests lie in the nexus of true object oriented programming - as per Alan Kay, and functional programming in JavaScript. I am also a fan of Douglas Crockford and Kyle Simpson\u2019s philosophy of JavaScripts behavior delegation / Objects linked to other Objects and I favour composition over hierarchy."))},Dr=t=>({"/home":{onmatch:(i,s)=>{t.slug=s,t.status.sidebar=!1,window.scrollTo(0,0)},render:()=>g(me,{mdl:t},g(Tr,{oncreate:V(le),onscroll:i=>console.log(i),onbeforeremove:V(oe),mdl:t}))},"/portfolio":{onmatch:(i,s)=>{t.slug=s,t.status.sidebar=!1,window.scrollTo(0,0)},render:()=>g(me,{mdl:t},g(Mr,{oncreate:V(le),onscroll:i=>console.log(i),onbeforeremove:V(oe),mdl:t}))},"/resume":{onmatch:(i,s)=>{t.slug=s,t.status.sidebar=!1,window.scrollTo(0,0)},render:()=>g(me,{mdl:t},g(qr,{oncreate:V(le),onscroll:i=>console.log(i),onbeforeremove:V(oe),mdl:t}))},"/about":{onmatch:(i,s)=>{t.slug=s,t.status.sidebar=!1,window.scrollTo(0,0)},render:()=>g(me,{mdl:t},g(Fr,{oncreate:V(le),onscroll:i=>console.log(i),onbeforeremove:V(oe),mdl:t}))}}),ne={state:{isLoading:!1,loadingProgress:{max:0,value:0},isLoggedIn:()=>sessionStorage.getItem("token")},routes:["/home","/portfolio","/resume"],portfolio:{reposList:[],repos:{}},status:{sidebar:!1},settings:{width:"",profile:"",inspector:""},snippets:[],slug:""},Hr=document.body;let yt=window.innerWidth;"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").then(t=>{console.log("\u2699\uFE0F SW registered: ",t)}).catch(t=>{console.log("\u{1F9DF} SW registration failed: ",t)})});const wt=t=>t<668?"phone":t<920?"tablet":"desktop",bt=t=>{const i=window.innerWidth;if(t!==i){t=i;var s=ne.settings.profile;ne.settings.width=i,ne.settings.profile=wt(i),s!=ne.settings.profile&&g.redraw()}return requestAnimationFrame(bt)};ne.settings.profile=wt(yt);bt(yt);g.route(Hr,"/home",Dr(ne));
