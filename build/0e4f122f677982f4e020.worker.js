!function(n){var r={};function t(e){if(r[e])return r[e].exports;var u=r[e]={i:e,l:!1,exports:{}};return n[e].call(u.exports,u,u.exports,t),u.l=!0,u.exports}t.m=n,t.c=r,t.d=function(n,r,e){t.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:e})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,r){if(1&r&&(n=t(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(t.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var u in n)t.d(e,u,function(r){return n[r]}.bind(null,u));return e},t.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(r,"a",r),r},t.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},t.p="build/",t(t.s=0)}([function(n,r,t){"use strict";var e=o(t(1)),u=o(t(2));function o(n){return n&&n.__esModule?n:{default:n}}function a(n){if((0,e.default)(n)&&!(n.length<1)){for(var r=[],t=n[0],o=0;o<t.length;o++){var a=t[o];r.push(a.slice())}for(var f=1;f<n.length;f++){var i=n[f],c=i[0],l=r[0].length;r[0]=r[0].concat(c);for(var s=new Array(c.length),p=1;p<r.length;p++)r[p]=r[p].concat(s);for(var v=new Array(l),d=1;d<i.length;d++){var g=i[d];r.push(v.concat(g))}}return r=function(n){for(var r=new Array(n.length),t=0;t<r.length;t++)r[t]=[n[t][0]];for(var e=1;e<n[0].length;e++)if(n[0][e]===n[0][e-1])for(var u=r[0].length-1,o=0;o<r.length;o++)void 0===r[o][u]&&(r[o][u]=n[o][e]);else for(var a=0;a<r.length;a++)r[a].push(n[a][e]);return r}(r=function(n){var r=n[0],t=(0,u.default)(r);return n.map((function(n){return t.map((function(r){return n[r]}))}))}(r))}}onmessage=function(n){var r=n.data.values.map((function(n){return n.map((function(n){return Array.prototype.slice.call(n)}))})),t=n.data.names,e=function(n,r){if(!(n.length<1)){var t=n[0].map((function(r,t){return n.map((function(n){return n[t]}))}));return t.unshift(r),t}}(a(r),t).map((function(n){return n.join(",")})).join("\n");postMessage(e)}},function(n,r,t){"use strict";t.r(r),r.default=function(n){return null!=n}},function(n,r,t){"use strict";n.exports=function(n,r){for(var t=n.length,e=new Array(t),u=0;u<t;u++)e[u]=u;return r||(r=function(n,r){return n<r?-1:n>r?1:0}),e.sort((function(t,e){return r(n[t],n[e])})),e}}]);
//# sourceMappingURL=0e4f122f677982f4e020.worker.js.map