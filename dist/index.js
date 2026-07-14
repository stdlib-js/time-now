"use strict";var t=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(c){throw (r=0, c)}};};var n=t(function(g,i){
var l=require('@stdlib/assert-is-function/dist'),q=l(Date.now);i.exports=q
});var s=t(function(y,u){
var w=require('@stdlib/math-base-special-round/dist');function p(){var e=w(Date.now()/1e3);return e|0}u.exports=p
});var v=t(function(F,a){
var f=require('@stdlib/math-base-special-round/dist');function x(){var e,r;return r=new Date,e=f(r.getTime()/1e3),e|0}a.exports=x
});var d=n(),D=s(),b=v(),o;d?o=D:o=b;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
