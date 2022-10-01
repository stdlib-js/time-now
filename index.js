// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).now=t()}(this,(function(){"use strict";var e=/./,t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,n=Object.defineProperty,o=Object.prototype,i=o.toString,u=o.__defineGetter__,f=o.__defineSetter__,c=o.__lookupGetter__,a=o.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?n:function(e,t,r){var n,l,y,p;if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((l="value"in r)&&(c.call(e,t)||a.call(e,t)?(n=e.__proto__,e.__proto__=o,delete e[t],e[t]=r.value,e.__proto__=n):e[t]=r.value),y="get"in r,p="set"in r,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(e,t,r.get),p&&f&&f.call(e,t,r.set),e};var l=r;function y(e,t,r){l(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function p(e){return"boolean"==typeof e}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return s&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;var w,_="function"==typeof Symbol?Symbol.toStringTag:"";w=b()?function(e){var t,r,n,o,i;if(null==e)return d.call(e);r=e[_],i=_,t=null!=(o=e)&&v.call(o,i);try{e[_]=void 0}catch(t){return d.call(e)}return n=d.call(e),t?e[_]=r:delete e[_],n}:function(e){return d.call(e)};var m=w,g=Boolean.prototype.toString;var j=b();function h(e){return"object"==typeof e&&(e instanceof Boolean||(j?function(e){try{return g.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===m(e)))}function S(e){return p(e)||h(e)}function O(){return new Function("return this;")()}y(S,"isPrimitive",p),y(S,"isObject",h);var A="object"==typeof self?self:null,E="object"==typeof window?window:null,T="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},B="object"==typeof T?T:null;var P=function(e){if(arguments.length){if(!p(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return O()}if(A)return A;if(E)return E;if(B)return B;throw new Error("unexpected error. Unable to resolve global object.")}(),x=P.document&&P.document.childNodes,V=Int8Array;function k(){return/^\s*function\s*([^(]*)/i}var C,D=/^\s*function\s*([^(]*)/i;y(k,"REGEXP",D),C=Array.isArray?Array.isArray:function(e){return"[object Array]"===m(e)};var G=C;function L(e){return null!==e&&"object"==typeof e}var M=function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(t){var r,n;if(!G(t))return!1;if(0===(r=t.length))return!1;for(n=0;n<r;n++)if(!1===e(t[n]))return!1;return!0}}(L);function F(e){var t,r,n,o;if(("Object"===(r=m(e).slice(8,-1))||"Error"===r)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(t=D.exec(n.toString()))return t[1]}return L(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}y(L,"isObjectLikeArray",M);var I="function"==typeof e||"object"==typeof V||"function"==typeof x?function(e){return F(e).toLowerCase()}:function(e){var t;return null===e?"null":"object"===(t=typeof e)?F(e).toLowerCase():t};var N,R=(N=Date.now,"function"===I(N)),U=Math.round;return R?function(){return 0|U(Date.now()/1e3)}:function(){var e;return e=new Date,0|U(e.getTime()/1e3)}}));
//# sourceMappingURL=index.js.map
