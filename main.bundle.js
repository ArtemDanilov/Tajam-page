!function(e){var n={};function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(r,a,function(n){return e[n]}.bind(null,a));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);var r={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},a={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},o=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],i={CSS:{},springs:{}};function u(e,n,t){return Math.min(Math.max(e,n),t)}function c(e,n){return e.indexOf(n)>-1}function s(e,n){return e.apply(null,n)}var l={arr:function(e){return Array.isArray(e)},obj:function(e){return c(Object.prototype.toString.call(e),"Object")},pth:function(e){return l.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||l.svg(e)},str:function(e){return"string"==typeof e},fnc:function(e){return"function"==typeof e},und:function(e){return void 0===e},nil:function(e){return l.und(e)||null===e},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return l.hex(e)||l.rgb(e)||l.hsl(e)},key:function(e){return!r.hasOwnProperty(e)&&!a.hasOwnProperty(e)&&"targets"!==e&&"keyframes"!==e}};function f(e){var n=/\(([^)]+)\)/.exec(e);return n?n[1].split(",").map((function(e){return parseFloat(e)})):[]}function d(e,n){var t=f(e),r=u(l.und(t[0])?1:t[0],.1,100),a=u(l.und(t[1])?100:t[1],.1,100),o=u(l.und(t[2])?10:t[2],.1,100),c=u(l.und(t[3])?0:t[3],.1,100),s=Math.sqrt(a/r),d=o/(2*Math.sqrt(a*r)),p=d<1?s*Math.sqrt(1-d*d):0,v=d<1?(d*s-c)/p:-c+s;function m(e){var t=n?n*e/1e3:e;return t=d<1?Math.exp(-t*d*s)*(1*Math.cos(p*t)+v*Math.sin(p*t)):(1+v*t)*Math.exp(-t*s),0===e||1===e?e:1-t}return n?m:function(){var n=i.springs[e];if(n)return n;for(var t=0,r=0;;)if(1===m(t+=1/6)){if(++r>=16)break}else r=0;var a=t*(1/6)*1e3;return i.springs[e]=a,a}}function p(e){return void 0===e&&(e=10),function(n){return Math.ceil(u(n,1e-6,1)*e)*(1/e)}}var v,m,g=function(){function e(e,n){return 1-3*n+3*e}function n(e,n){return 3*n-6*e}function t(e){return 3*e}function r(r,a,o){return((e(a,o)*r+n(a,o))*r+t(a))*r}function a(r,a,o){return 3*e(a,o)*r*r+2*n(a,o)*r+t(a)}return function(e,n,t,o){if(0<=e&&e<=1&&0<=t&&t<=1){var i=new Float32Array(11);if(e!==n||t!==o)for(var u=0;u<11;++u)i[u]=r(.1*u,e,t);return function(a){return e===n&&t===o||0===a||1===a?a:r(c(a),n,o)}}function c(n){for(var o=0,u=1;10!==u&&i[u]<=n;++u)o+=.1;--u;var c=o+.1*((n-i[u])/(i[u+1]-i[u])),s=a(c,e,t);return s>=.001?function(e,n,t,o){for(var i=0;i<4;++i){var u=a(n,t,o);if(0===u)return n;n-=(r(n,t,o)-e)/u}return n}(n,c,e,t):0===s?c:function(e,n,t,a,o){var i,u,c=0;do{(i=r(u=n+(t-n)/2,a,o)-e)>0?t=u:n=u}while(Math.abs(i)>1e-7&&++c<10);return u}(n,o,o+.1,e,t)}}}(),h=(v={linear:function(){return function(e){return e}}},m={Sine:function(){return function(e){return 1-Math.cos(e*Math.PI/2)}},Circ:function(){return function(e){return 1-Math.sqrt(1-e*e)}},Back:function(){return function(e){return e*e*(3*e-2)}},Bounce:function(){return function(e){for(var n,t=4;e<((n=Math.pow(2,--t))-1)/11;);return 1/Math.pow(4,3-t)-7.5625*Math.pow((3*n-2)/22-e,2)}},Elastic:function(e,n){void 0===e&&(e=1),void 0===n&&(n=.5);var t=u(e,1,10),r=u(n,.1,2);return function(e){return 0===e||1===e?e:-t*Math.pow(2,10*(e-1))*Math.sin((e-1-r/(2*Math.PI)*Math.asin(1/t))*(2*Math.PI)/r)}}},["Quad","Cubic","Quart","Quint","Expo"].forEach((function(e,n){m[e]=function(){return function(e){return Math.pow(e,n+2)}}})),Object.keys(m).forEach((function(e){var n=m[e];v["easeIn"+e]=n,v["easeOut"+e]=function(e,t){return function(r){return 1-n(e,t)(1-r)}},v["easeInOut"+e]=function(e,t){return function(r){return r<.5?n(e,t)(2*r)/2:1-n(e,t)(-2*r+2)/2}},v["easeOutIn"+e]=function(e,t){return function(r){return r<.5?(1-n(e,t)(1-2*r))/2:(n(e,t)(2*r-1)+1)/2}}})),v);function y(e,n){if(l.fnc(e))return e;var t=e.split("(")[0],r=h[t],a=f(e);switch(t){case"spring":return d(e,n);case"cubicBezier":return s(g,a);case"steps":return s(p,a);default:return s(r,a)}}function b(e){try{return document.querySelectorAll(e)}catch(e){return}}function w(e,n){for(var t=e.length,r=arguments.length>=2?arguments[1]:void 0,a=[],o=0;o<t;o++)if(o in e){var i=e[o];n.call(r,i,o,e)&&a.push(i)}return a}function M(e){return e.reduce((function(e,n){return e.concat(l.arr(n)?M(n):n)}),[])}function x(e){return l.arr(e)?e:(l.str(e)&&(e=b(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function I(e,n){return e.some((function(e){return e===n}))}function S(e){var n={};for(var t in e)n[t]=e[t];return n}function O(e,n){var t=S(e);for(var r in e)t[r]=n.hasOwnProperty(r)?n[r]:e[r];return t}function A(e,n){var t=S(e);for(var r in n)t[r]=l.und(e[r])?n[r]:e[r];return t}function k(e){return l.rgb(e)?(t=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(n=e))?"rgba("+t[1]+",1)":n:l.hex(e)?function(e){var n=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,n,t,r){return n+n+t+t+r+r})),t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n);return"rgba("+parseInt(t[1],16)+","+parseInt(t[2],16)+","+parseInt(t[3],16)+",1)"}(e):l.hsl(e)?function(e){var n,t,r,a=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),o=parseInt(a[1],10)/360,i=parseInt(a[2],10)/100,u=parseInt(a[3],10)/100,c=a[4]||1;function s(e,n,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?e+6*(n-e)*t:t<.5?n:t<2/3?e+(n-e)*(2/3-t)*6:e}if(0==i)n=t=r=u;else{var l=u<.5?u*(1+i):u+i-u*i,f=2*u-l;n=s(f,l,o+1/3),t=s(f,l,o),r=s(f,l,o-1/3)}return"rgba("+255*n+","+255*t+","+255*r+","+c+")"}(e):void 0;var n,t}function E(e){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(n)return n[1]}function L(e,n){return l.fnc(e)?e(n.target,n.id,n.total):e}function j(e,n){return e.getAttribute(n)}function _(e,n,t){if(I([t,"deg","rad","turn"],E(n)))return n;var r=i.CSS[n+t];if(!l.und(r))return r;var a=document.createElement(e.tagName),o=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;o.appendChild(a),a.style.position="absolute",a.style.width=100+t;var u=100/a.offsetWidth;o.removeChild(a);var c=u*parseFloat(n);return i.CSS[n+t]=c,c}function P(e,n,t){if(n in e.style){var r=n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=e.style[n]||getComputedStyle(e).getPropertyValue(r)||"0";return t?_(e,a,t):a}}function B(e,n){return l.dom(e)&&!l.inp(e)&&(!l.nil(j(e,n))||l.svg(e)&&e[n])?"attribute":l.dom(e)&&I(o,n)?"transform":l.dom(e)&&"transform"!==n&&P(e,n)?"css":null!=e[n]?"object":void 0}function T(e){if(l.dom(e)){for(var n,t=e.style.transform||"",r=/(\w+)\(([^)]*)\)/g,a=new Map;n=r.exec(t);)a.set(n[1],n[2]);return a}}function C(e,n,t,r){var a=c(n,"scale")?1:0+function(e){return c(e,"translate")||"perspective"===e?"px":c(e,"rotate")||c(e,"skew")?"deg":void 0}(n),o=T(e).get(n)||a;return t&&(t.transforms.list.set(n,o),t.transforms.last=n),r?_(e,o,r):o}function D(e,n,t,r){switch(B(e,n)){case"transform":return C(e,n,r,t);case"css":return P(e,n,t);case"attribute":return j(e,n);default:return e[n]||0}}function N(e,n){var t=/^(\*=|\+=|-=)/.exec(e);if(!t)return e;var r=E(e)||0,a=parseFloat(n),o=parseFloat(e.replace(t[0],""));switch(t[0][0]){case"+":return a+o+r;case"-":return a-o+r;case"*":return a*o+r}}function q(e,n){if(l.col(e))return k(e);if(/\s/g.test(e))return e;var t=E(e),r=t?e.substr(0,e.length-t.length):e;return n?r+n:r}function F(e,n){return Math.sqrt(Math.pow(n.x-e.x,2)+Math.pow(n.y-e.y,2))}function $(e){for(var n,t=e.points,r=0,a=0;a<t.numberOfItems;a++){var o=t.getItem(a);a>0&&(r+=F(n,o)),n=o}return r}function H(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return function(e){return 2*Math.PI*j(e,"r")}(e);case"rect":return function(e){return 2*j(e,"width")+2*j(e,"height")}(e);case"line":return function(e){return F({x:j(e,"x1"),y:j(e,"y1")},{x:j(e,"x2"),y:j(e,"y2")})}(e);case"polyline":return $(e);case"polygon":return function(e){var n=e.points;return $(e)+F(n.getItem(n.numberOfItems-1),n.getItem(0))}(e)}}function V(e,n){var t=n||{},r=t.el||function(e){for(var n=e.parentNode;l.svg(n)&&l.svg(n.parentNode);)n=n.parentNode;return n}(e),a=r.getBoundingClientRect(),o=j(r,"viewBox"),i=a.width,u=a.height,c=t.viewBox||(o?o.split(" "):[0,0,i,u]);return{el:r,viewBox:c,x:c[0]/1,y:c[1]/1,w:i,h:u,vW:c[2],vH:c[3]}}function W(e,n,t){function r(t){void 0===t&&(t=0);var r=n+t>=1?n+t:0;return e.el.getPointAtLength(r)}var a=V(e.el,e.svg),o=r(),i=r(-1),u=r(1),c=t?1:a.w/a.vW,s=t?1:a.h/a.vH;switch(e.property){case"x":return(o.x-a.x)*c;case"y":return(o.y-a.y)*s;case"angle":return 180*Math.atan2(u.y-i.y,u.x-i.x)/Math.PI}}function Y(e,n){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=q(l.pth(e)?e.totalLength:e,n)+"";return{original:r,numbers:r.match(t)?r.match(t).map(Number):[0],strings:l.str(e)||n?r.split(t):[]}}function X(e){return w(e?M(l.arr(e)?e.map(x):x(e)):[],(function(e,n,t){return t.indexOf(e)===n}))}function G(e){var n=X(e);return n.map((function(e,t){return{target:e,id:t,total:n.length,transforms:{list:T(e)}}}))}function Z(e,n){var t=S(n);if(/^spring/.test(t.easing)&&(t.duration=d(t.easing)),l.arr(e)){var r=e.length;2===r&&!l.obj(e[0])?e={value:e}:l.fnc(n.duration)||(t.duration=n.duration/r)}var a=l.arr(e)?e:[e];return a.map((function(e,t){var r=l.obj(e)&&!l.pth(e)?e:{value:e};return l.und(r.delay)&&(r.delay=t?0:n.delay),l.und(r.endDelay)&&(r.endDelay=t===a.length-1?n.endDelay:0),r})).map((function(e){return A(e,t)}))}function Q(e,n){var t=[],r=n.keyframes;for(var a in r&&(n=A(function(e){for(var n=w(M(e.map((function(e){return Object.keys(e)}))),(function(e){return l.key(e)})).reduce((function(e,n){return e.indexOf(n)<0&&e.push(n),e}),[]),t={},r=function(r){var a=n[r];t[a]=e.map((function(e){var n={};for(var t in e)l.key(t)?t==a&&(n.value=e[t]):n[t]=e[t];return n}))},a=0;a<n.length;a++)r(a);return t}(r),n)),n)l.key(a)&&t.push({name:a,tweens:Z(n[a],e)});return t}function U(e,n){var t;return e.tweens.map((function(r){var a=function(e,n){var t={};for(var r in e){var a=L(e[r],n);l.arr(a)&&1===(a=a.map((function(e){return L(e,n)}))).length&&(a=a[0]),t[r]=a}return t.duration=parseFloat(t.duration),t.delay=parseFloat(t.delay),t}(r,n),o=a.value,i=l.arr(o)?o[1]:o,u=E(i),c=D(n.target,e.name,u,n),s=t?t.to.original:c,f=l.arr(o)?o[0]:s,d=E(f)||E(c),p=u||d;return l.und(i)&&(i=s),a.from=Y(f,p),a.to=Y(N(i,f),p),a.start=t?t.end:0,a.end=a.start+a.delay+a.duration+a.endDelay,a.easing=y(a.easing,a.duration),a.isPath=l.pth(o),a.isPathTargetInsideSVG=a.isPath&&l.svg(n.target),a.isColor=l.col(a.from.original),a.isColor&&(a.round=1),t=a,a}))}var z={css:function(e,n,t){return e.style[n]=t},attribute:function(e,n,t){return e.setAttribute(n,t)},object:function(e,n,t){return e[n]=t},transform:function(e,n,t,r,a){if(r.list.set(n,t),n===r.last||a){var o="";r.list.forEach((function(e,n){o+=n+"("+e+") "})),e.style.transform=o}}};function J(e,n){G(e).forEach((function(e){for(var t in n){var r=L(n[t],e),a=e.target,o=E(r),i=D(a,t,o,e),u=N(q(r,o||E(i)),i),c=B(a,t);z[c](a,t,u,e.transforms,!0)}}))}function R(e,n){return w(M(e.map((function(e){return n.map((function(n){return function(e,n){var t=B(e.target,n.name);if(t){var r=U(n,e),a=r[r.length-1];return{type:t,property:n.name,animatable:e,tweens:r,duration:a.end,delay:r[0].delay,endDelay:a.endDelay}}}(e,n)}))}))),(function(e){return!l.und(e)}))}function K(e,n){var t=e.length,r=function(e){return e.timelineOffset?e.timelineOffset:0},a={};return a.duration=t?Math.max.apply(Math,e.map((function(e){return r(e)+e.duration}))):n.duration,a.delay=t?Math.min.apply(Math,e.map((function(e){return r(e)+e.delay}))):n.delay,a.endDelay=t?a.duration-Math.max.apply(Math,e.map((function(e){return r(e)+e.duration-e.endDelay}))):n.endDelay,a}var ee=0;var ne=[],te=function(){var e;function n(t){for(var r=ne.length,a=0;a<r;){var o=ne[a];o.paused?(ne.splice(a,1),r--):(o.tick(t),a++)}e=a>0?requestAnimationFrame(n):void 0}return"undefined"!=typeof document&&document.addEventListener("visibilitychange",(function(){ae.suspendWhenDocumentHidden&&(re()?e=cancelAnimationFrame(e):(ne.forEach((function(e){return e._onDocumentVisibility()})),te()))})),function(){e||re()&&ae.suspendWhenDocumentHidden||!(ne.length>0)||(e=requestAnimationFrame(n))}}();function re(){return!!document&&document.hidden}function ae(e){void 0===e&&(e={});var n,t=0,o=0,i=0,c=0,s=null;function l(e){var n=window.Promise&&new Promise((function(e){return s=e}));return e.finished=n,n}var f=function(e){var n=O(r,e),t=O(a,e),o=Q(t,e),i=G(e.targets),u=R(i,o),c=K(u,t),s=ee;return ee++,A(n,{id:s,children:[],animatables:i,animations:u,duration:c.duration,delay:c.delay,endDelay:c.endDelay})}(e);l(f);function d(){var e=f.direction;"alternate"!==e&&(f.direction="normal"!==e?"normal":"reverse"),f.reversed=!f.reversed,n.forEach((function(e){return e.reversed=f.reversed}))}function p(e){return f.reversed?f.duration-e:e}function v(){t=0,o=p(f.currentTime)*(1/ae.speed)}function m(e,n){n&&n.seek(e-n.timelineOffset)}function g(e){for(var n=0,t=f.animations,r=t.length;n<r;){var a=t[n],o=a.animatable,i=a.tweens,c=i.length-1,s=i[c];c&&(s=w(i,(function(n){return e<n.end}))[0]||s);for(var l=u(e-s.start-s.delay,0,s.duration)/s.duration,d=isNaN(l)?1:s.easing(l),p=s.to.strings,v=s.round,m=[],g=s.to.numbers.length,h=void 0,y=0;y<g;y++){var b=void 0,M=s.to.numbers[y],x=s.from.numbers[y]||0;b=s.isPath?W(s.value,d*M,s.isPathTargetInsideSVG):x+d*(M-x),v&&(s.isColor&&y>2||(b=Math.round(b*v)/v)),m.push(b)}var I=p.length;if(I){h=p[0];for(var S=0;S<I;S++){p[S];var O=p[S+1],A=m[S];isNaN(A)||(h+=O?A+O:A+" ")}}else h=m[0];z[a.type](o.target,a.property,h,o.transforms),a.currentValue=h,n++}}function h(e){f[e]&&!f.passThrough&&f[e](f)}function y(e){var r=f.duration,a=f.delay,v=r-f.endDelay,y=p(e);f.progress=u(y/r*100,0,100),f.reversePlayback=y<f.currentTime,n&&function(e){if(f.reversePlayback)for(var t=c;t--;)m(e,n[t]);else for(var r=0;r<c;r++)m(e,n[r])}(y),!f.began&&f.currentTime>0&&(f.began=!0,h("begin")),!f.loopBegan&&f.currentTime>0&&(f.loopBegan=!0,h("loopBegin")),y<=a&&0!==f.currentTime&&g(0),(y>=v&&f.currentTime!==r||!r)&&g(r),y>a&&y<v?(f.changeBegan||(f.changeBegan=!0,f.changeCompleted=!1,h("changeBegin")),h("change"),g(y)):f.changeBegan&&(f.changeCompleted=!0,f.changeBegan=!1,h("changeComplete")),f.currentTime=u(y,0,r),f.began&&h("update"),e>=r&&(o=0,f.remaining&&!0!==f.remaining&&f.remaining--,f.remaining?(t=i,h("loopComplete"),f.loopBegan=!1,"alternate"===f.direction&&d()):(f.paused=!0,f.completed||(f.completed=!0,h("loopComplete"),h("complete"),!f.passThrough&&"Promise"in window&&(s(),l(f)))))}return f.reset=function(){var e=f.direction;f.passThrough=!1,f.currentTime=0,f.progress=0,f.paused=!0,f.began=!1,f.loopBegan=!1,f.changeBegan=!1,f.completed=!1,f.changeCompleted=!1,f.reversePlayback=!1,f.reversed="reverse"===e,f.remaining=f.loop,n=f.children;for(var t=c=n.length;t--;)f.children[t].reset();(f.reversed&&!0!==f.loop||"alternate"===e&&1===f.loop)&&f.remaining++,g(f.reversed?f.duration:0)},f._onDocumentVisibility=v,f.set=function(e,n){return J(e,n),f},f.tick=function(e){i=e,t||(t=i),y((i+(o-t))*ae.speed)},f.seek=function(e){y(p(e))},f.pause=function(){f.paused=!0,v()},f.play=function(){f.paused&&(f.completed&&f.reset(),f.paused=!1,ne.push(f),v(),te())},f.reverse=function(){d(),f.completed=!f.reversed,v()},f.restart=function(){f.reset(),f.play()},f.remove=function(e){ie(X(e),f)},f.reset(),f.autoplay&&f.play(),f}function oe(e,n){for(var t=n.length;t--;)I(e,n[t].animatable.target)&&n.splice(t,1)}function ie(e,n){var t=n.animations,r=n.children;oe(e,t);for(var a=r.length;a--;){var o=r[a],i=o.animations;oe(e,i),i.length||o.children.length||r.splice(a,1)}t.length||r.length||n.pause()}ae.version="3.2.1",ae.speed=1,ae.suspendWhenDocumentHidden=!0,ae.running=ne,ae.remove=function(e){for(var n=X(e),t=ne.length;t--;){ie(n,ne[t])}},ae.get=D,ae.set=J,ae.convertPx=_,ae.path=function(e,n){var t=l.str(e)?b(e)[0]:e,r=n||100;return function(e){return{property:e,el:t,svg:V(t),totalLength:H(t)*(r/100)}}},ae.setDashoffset=function(e){var n=H(e);return e.setAttribute("stroke-dasharray",n),n},ae.stagger=function(e,n){void 0===n&&(n={});var t=n.direction||"normal",r=n.easing?y(n.easing):null,a=n.grid,o=n.axis,i=n.from||0,u="first"===i,c="center"===i,s="last"===i,f=l.arr(e),d=f?parseFloat(e[0]):parseFloat(e),p=f?parseFloat(e[1]):0,v=E(f?e[1]:e)||0,m=n.start||0+(f?d:0),g=[],h=0;return function(e,n,l){if(u&&(i=0),c&&(i=(l-1)/2),s&&(i=l-1),!g.length){for(var y=0;y<l;y++){if(a){var b=c?(a[0]-1)/2:i%a[0],w=c?(a[1]-1)/2:Math.floor(i/a[0]),M=b-y%a[0],x=w-Math.floor(y/a[0]),I=Math.sqrt(M*M+x*x);"x"===o&&(I=-M),"y"===o&&(I=-x),g.push(I)}else g.push(Math.abs(i-y));h=Math.max.apply(Math,g)}r&&(g=g.map((function(e){return r(e/h)*h}))),"reverse"===t&&(g=g.map((function(e){return o?e<0?-1*e:-e:Math.abs(h-e)})))}return m+(f?(p-d)/h:d)*(Math.round(100*g[n])/100)+v}},ae.timeline=function(e){void 0===e&&(e={});var n=ae(e);return n.duration=0,n.add=function(t,r){var o=ne.indexOf(n),i=n.children;function u(e){e.passThrough=!0}o>-1&&ne.splice(o,1);for(var c=0;c<i.length;c++)u(i[c]);var s=A(t,O(a,e));s.targets=s.targets||e.targets;var f=n.duration;s.autoplay=!1,s.direction=n.direction,s.timelineOffset=l.und(r)?f:N(r,f),u(n),n.seek(s.timelineOffset);var d=ae(s);u(d),i.push(d);var p=K(i,e);return n.delay=p.delay,n.endDelay=p.endDelay,n.duration=p.duration,n.seek(0),n.reset(),n.autoplay&&n.play(),n},n},ae.easing=y,ae.penner=h,ae.random=function(e,n){return Math.floor(Math.random()*(n-e+1))+e};var ue=ae;function ce(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var se,le=document.querySelector(".header__photo-slider"),fe=function(e){if(Array.isArray(e))return ce(e)}(se=document.querySelectorAll(".slide-nav__item"))||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(se)||function(e,n){if(e){if("string"==typeof e)return ce(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?ce(e,n):void 0}}(se)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),de=0,pe=["./images/forest.jpg","./images/forest-2.jpg","./images/forest-3.jpg"],ve=function(e){ue({targets:e,opacity:[.9,1],duration:2e3,easing:"easeOutExpo"})};function me(){++de===pe.length&&(de=0),le.style.backgroundImage="linear-gradient(to right bottom, rgba(9, 5, 47, .8), rgba(49, 29, 94, .8)), url(".concat(pe[de],")"),ve(".header__photo-slider")}function ge(){var e=fe.findIndex((function(e){return e.classList.contains("active-img")}));fe[e].classList.remove("active-img"),fe[de].classList.add("active-img")}var he=setInterval(me,5e3),ye=setInterval(ge,5e3);fe.forEach((function(e,n){return e.addEventListener("click",(function(){de=n,le.style.backgroundImage="linear-gradient(to right bottom, rgba(9, 5, 47, .8), rgba(49, 29, 94, .8)), url(".concat(pe[de],")"),ge(),clearInterval(he),he=setInterval(me,5e3),clearInterval(ye),ye=setInterval(ge,5e3),ve(".header__photo-slider")}))}));var be=document.getElementById("hamburger"),we=document.querySelector(".nav"),Me=document.querySelector(".nav-bg"),xe=document.querySelector(".nav__list");function Ie(e){e.preventDefault();var n=e.target.getAttribute("href");window.scrollTo({top:document.querySelector(n).offsetTop-50,behavior:"smooth"}),be.click()}function Se(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}be.addEventListener("click",(function(){Me.classList.toggle("nav-bg-active"),xe.classList.toggle("nav-list-active")}));var Oe=function(e){return function(e){if(Array.isArray(e))return Se(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return Se(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Se(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(document.querySelectorAll(".people__img-container--img")),Ae=document.getElementById("prevBtn"),ke=document.getElementById("nextBtn"),Ee=(document.getElementById("targetName"),document.getElementById("targetProfession"),[{fullName:"Mark Ford",profession:"sale specialist"},{fullName:"Geneva Yakovlevna",profession:"project manager"},{fullName:"Joe Hook",profession:"graphic designer"}]),Le=document.createElement("div"),je=1;function _e(){Le.innerHTML='\n    <h4 class="heading-4 u-margin-top--m people__name" id="targetName">'.concat(Ee[je].fullName,'</h4>\n    <p class="paragraph people__profession" id="targetProfession">').concat(Ee[je].profession,"</p> "),document.querySelector(".people__slider").before(Le),Le.classList.add("people__present"),ue({targets:".people__present",translateX:[-30,0],opacity:[0,1],easing:"easeOutExpo"})}Ae.addEventListener("click",(function(){Oe[je].classList.remove("img-active"),0===je&&(je=Oe.length),je--,Oe[je].classList.add("img-active"),_e()})),ke.addEventListener("click",(function(){Oe[je].classList.remove("img-active"),je===Oe.length-1&&(je=-1),je++,Oe[je].classList.add("img-active"),_e()})),Oe.forEach((function(e,n){e.addEventListener("click",(function(){Oe[je].classList.remove("img-active"),je=n,e.classList.add("img-active"),_e()}))}));var Pe=_e;function Be(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var Te,Ce=function(e,n){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"==typeof e)return Be(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Be(e,n)}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,u=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return i=e.done,e},e:function(e){u=!0,o=e},f:function(){try{i||null==t.return||t.return()}finally{if(u)throw o}}}}(document.querySelectorAll(".nav__list--item"));try{for(Ce.s();!(Te=Ce.n()).done;){Te.value.addEventListener("click",Ie)}}catch(e){Ce.e(e)}finally{Ce.f()}window.addEventListener("scroll",(function(){window.pageYOffset>=50?we.classList.add("scroll-bg"):we.classList.remove("scroll-bg")})),Pe()}]);