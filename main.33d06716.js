parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=10,t=10,u=document.querySelector(".calculate__increase-result");u.innerText="$ ".concat(0);var l=document.querySelector("#form"),r=document.querySelector("#returnVolume"),a=document.querySelector("#numberOfReturns"),n=document.querySelector("#shipping"),v=document.querySelector("#returns");a.addEventListener("input",function(e){var t=e.target;r.innerText=t.value,r.style.left=100*+t.value/25e3-2+"%",t.value<1e3&&(r.style.left=100*+t.value/25e3-2+"%"),t.value>1e3&&t.value<5e3&&(r.style.left=100*+t.value/25e3-3+"%"),t.value>5e3&&t.value<1e4&&(r.style.left=100*+t.value/25e3-4+"%"),t.value>1e4&&(r.style.left=100*+t.value/25e3-7+"%")});var c=document.querySelector("#averageVolume"),o=document.querySelector("#average");o.addEventListener("input",function(e){var t=e.target;c.innerText=t.value,c.style.left=100*+t.value/300-3+"%",t.value>100&&(c.style.left=100*+t.value/300-5+"%")}),l.addEventListener("click",function(l){if(l.preventDefault(),l.target.closest("button")){var r=o.value,c=.9*r,s=0,i=0;"yes"===v.value&&(s=10),"yes"===n.value&&(i=10);var y=e+c-t-(r-(s+i+(7+.15*r))),f=a.value*y*.4,m=new Intl.NumberFormat("ru-RU").format(f);u.innerText="$ ".concat(m)}});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.33d06716.js.map