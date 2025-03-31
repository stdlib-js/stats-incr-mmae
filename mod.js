// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var s=Math.abs,l=String.prototype.toLowerCase,u=String.prototype.toUpperCase,p=String.prototype.replace,f=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,v=/\.0$/,y=/\.0*e/,b=/(\..*[^0])0*e/;function w(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":s(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,b,"$1e"),n=p.call(n,y,"e"),n=p.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,f,"e+0$1"),n=p.call(n,g,"e-0$1"),r.alternate&&(n=p.call(n,d,"$1."),n=p.call(n,h,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===u.call(r.specifier)?u.call(n):l.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var _=String.fromCharCode,E=Array.isArray;function S(r){return r!=r}function k(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function F(r){var e,t,n,a,o,s,l,u,p,f,g,d,h;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(s="",l=1,u=0;u<r.length;u++)if(n=r[u],"string"==typeof n)s+=n;else{if(e=void 0!==n.precision,!(n=k(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,S(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!S(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(o)?String(n.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(f=n.arg,g=n.width,d=n.padRight,h=void 0,(h=g-f.length)<0?f:f=d?f+m(h):m(h)+f)),s+=n.arg||"",l+=1}return s}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function j(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function x(r){var e,t,n,i;for(t=[],i=0,n=I.exec(r);n;)(e=r.slice(i,I.lastIndex-n[0].length)).length&&t.push(e),t.push(j(n)),i=I.lastIndex,n=I.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function T(r){var e,t;if("string"!=typeof r)throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[x(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return F.apply(null,e)}var A=Object.prototype,N=A.toString,O=A.__defineGetter__,V=A.__defineSetter__,P=A.__lookupGetter__,$=A.__lookupSetter__;var C=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(P.call(r,e)||$.call(r,e)?(n=r.__proto__,r.__proto__=A,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&O&&O.call(r,e,t.get),o&&V&&V.call(r,e,t.set),r};function R(r,e,t){C(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function G(r){return"number"==typeof r}var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function M(){return Z&&"symbol"==typeof Symbol.toStringTag}var W=Object.prototype.toString;var L=Object.prototype.hasOwnProperty;var U="function"==typeof Symbol?Symbol:void 0,X="function"==typeof U?U.toStringTag:"";var Y=M()?function(r){var e,t,n,i,a;if(null==r)return W.call(r);t=r[X],a=X,e=null!=(i=r)&&L.call(i,a);try{r[X]=void 0}catch(e){return W.call(r)}return n=W.call(r),e?r[X]=t:delete r[X],n}:function(r){return W.call(r)},z=Number,B=z.prototype.toString;var q=M();function D(r){return"object"==typeof r&&(r instanceof z||(q?function(r){try{return B.call(r),!0}catch(r){return!1}}(r):"[object Number]"===Y(r)))}function H(r){return G(r)||D(r)}R(H,"isPrimitive",G),R(H,"isObject",D);var J=Number.POSITIVE_INFINITY,K=z.NEGATIVE_INFINITY,Q=Math.floor;function rr(r){return r<J&&r>K&&Q(e=r)===e;var e}function er(r){return G(r)&&rr(r)}function tr(r){return D(r)&&rr(r.valueOf())}function nr(r){return er(r)||tr(r)}function ir(r){return er(r)&&r>0}function ar(r){return tr(r)&&r.valueOf()>0}function or(r){return ir(r)||ar(r)}function cr(r){return r!=r}R(nr,"isPrimitive",er),R(nr,"isObject",tr),R(or,"isPrimitive",ir),R(or,"isObject",ar);var sr="function"==typeof Float64Array;var lr="function"==typeof Float64Array?Float64Array:null;var ur="function"==typeof Float64Array?Float64Array:void 0;var pr=function(){var r,e,t;if("function"!=typeof lr)return!1;try{e=new lr([1,3.14,-3.14,NaN]),t=e,r=(sr&&t instanceof Float64Array||"[object Float64Array]"===Y(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?ur:function(){throw new Error("not implemented")};function fr(r){var e;if(!ir(r))throw new TypeError(function(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}("1IF8B",r));return e=function(r){var e,t,n,i,a;if(!ir(r))throw new TypeError(T("invalid argument. Must provide a positive integer. Value: `%s`.",r));return t=new pr(r),n=0,a=-1,i=0,function(o){var c;if(0===arguments.length)return 0===i?null:n;if(a=(a+1)%r,cr(o))i=r,n=NaN;else if(i<r)n+=(e=o-n)/(i+=1);else if(cr(t[a])){for(i=1,n=o,c=0;c<r;c++)if(c!==a){if(cr(t[c])){i=r,n=NaN;break}i+=1,e=t[c]-n,n+=e/i}}else!1===cr(n)&&(e=o-t[a],n+=e/r);return t[a]=o,n}}(r),function(r,t){if(0===arguments.length)return e();return e(function(r){return Math.abs(r)}(t-r))}}export{fr as default};
//# sourceMappingURL=mod.js.map
