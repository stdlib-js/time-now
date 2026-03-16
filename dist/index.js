"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=t(function(m,i){
var c=require('@stdlib/assert-is-function/dist'),l=c(Date.now);i.exports=l
});var s=t(function(g,u){
var q=require('@stdlib/math-base-special-round/dist');function w(){var e=q(Date.now()/1e3);return e|0}u.exports=w
});var v=t(function(y,a){
var p=require('@stdlib/math-base-special-round/dist');function f(){var e,r;return r=new Date,e=p(r.getTime()/1e3),e|0}a.exports=f
});var x=n(),d=s(),D=v(),o;x?o=d:o=D;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
