!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){(function(e){function n(e,t){for(var n=0,r=e.length-1;r>=0;r--){var i=e[r];"."===i?e.splice(r,1):".."===i?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function r(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}t.resolve=function(){for(var t="",i=!1,o=arguments.length-1;o>=-1&&!i;o--){var s=o>=0?arguments[o]:e.cwd();if("string"!=typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(t=s+"/"+t,i="/"===s.charAt(0))}return(i?"/":"")+(t=n(r(t.split("/"),(function(e){return!!e})),!i).join("/"))||"."},t.normalize=function(e){var o=t.isAbsolute(e),s="/"===i(e,-1);return(e=n(r(e.split("/"),(function(e){return!!e})),!o).join("/"))||o||(e="."),e&&s&&(e+="/"),(o?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(r(e,(function(e,t){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,n){function r(e){for(var t=0;t<e.length&&""===e[t];t++);for(var n=e.length-1;n>=0&&""===e[n];n--);return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var i=r(e.split("/")),o=r(n.split("/")),s=Math.min(i.length,o.length),a=s,l=0;l<s;l++)if(i[l]!==o[l]){a=l;break}var c=[];for(l=a;l<i.length;l++)c.push("..");return(c=c.concat(o.slice(a))).join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!=typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,r=-1,i=!0,o=e.length-1;o>=1;--o)if(47===(t=e.charCodeAt(o))){if(!i){r=o;break}}else i=!1;return-1===r?n?"/":".":n&&1===r?"/":e.slice(0,r)},t.basename=function(e,t){var n=function(e){"string"!=typeof e&&(e+="");var t,n=0,r=-1,i=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!i){n=t+1;break}}else-1===r&&(i=!1,r=t+1);return-1===r?"":e.slice(n,r)}(e);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){"string"!=typeof e&&(e+="");for(var t=-1,n=0,r=-1,i=!0,o=0,s=e.length-1;s>=0;--s){var a=e.charCodeAt(s);if(47!==a)-1===r&&(i=!1,r=s+1),46===a?-1===t?t=s:1!==o&&(o=1):-1!==t&&(o=-1);else if(!i){n=s+1;break}}return-1===t||-1===r||0===o||1===o&&t===r-1&&t===n+1?"":e.slice(t,r)};var i="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n(1))},function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var l,c=[],d=!1,u=-1;function h(){d&&l&&(d=!1,l.length?c=l.concat(c):u=-1,c.length&&m())}function m(){if(!d){var e=a(h);d=!0;for(var t=c.length;t;){for(l=c,c=[];++u<t;)l&&l[u].run();u=-1,t=c.length}l=null,d=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function g(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new f(e,t)),1!==c.length||d||a(m)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=g,i.addListener=g,i.once=g,i.off=g,i.removeListener=g,i.removeAllListeners=g,i.emit=g,i.prependListener=g,i.prependOnceListener=g,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(e,t,n){"use strict";n.r(t);n(0);var r=(()=>{let e=[],t=[],n=[],r=[];const i=(e,t)=>{for(let n=0;n<t.length;n+=1)if(t[n].getID()===e)return t[n]},o=()=>{20===e.length?document.getElementById("btn-game-start").disabled=!1:document.getElementById("btn-game-start").disabled=!0};return{getPositions:(t=!0)=>t?e:n,addPositions:(t,r=!0)=>{r?(t.forEach(t=>{e.push(t)}),o()):t.forEach(e=>{n.push(e)})},addPosition:(t,r=!0)=>r?e.push(t):n.push(t),addShip:(e,n=!0)=>{n?t.push(e):r.push(e)},getShip:(e,n=!0)=>{const i=n?t:r;for(let t=0;t<i.length;t+=1)if(i[t].getID()===e)return i[t]},addShipPositions:(e,n,o=!0)=>{const s=i(e,o?t:r);return n.forEach(e=>{s.addPosition(e)}),s.getPositions()},isInvalidPosition:(o,s,a=!0)=>{let l=i(s,a?t:r);const c=a?e:n,d=l.getPositions();for(let e=0;e<o.length;e+=1)if(c.includes(o[e])&&!d.includes(o[e]))return!0;return!1},removePosition:(t,r=!0)=>{r?e.splice(e.indexOf(t),1):n.splice(n.indexOf(t),1)},removeAllShipsPositions:(i=!0)=>{i?(t.forEach(e=>{e.resetPositions()}),t=[],e=[]):(r.forEach(e=>{e.resetPositions()}),r=[],n=[]),o()},removePositions:(t,r=!0)=>{r?t.forEach(t=>{const n=e.indexOf(t);e.splice(n,1)}):t.forEach(e=>{const t=n.indexOf(e);n.splice(t,1)})},removeShipPositions:(e,n,s=!0)=>{let a=i(e,s?t:r);return o(),a.removePositions(n)},resetShipPositions:(e,n=!0)=>{return i(e,n?t:r).resetPositions()},hasPosition:(t,r=!0)=>r?e.includes(t):n.includes(t),removeLastPosition:(t=!0)=>{t?e.pop():n.pop(),o()},hasPositions:(t,r=!0)=>{const i=r?e:n;for(let e=0;e<t.length;e+=1)if(i.includes(t[e]))return!0;return!1},reinitialize:()=>{e=[],t=[],n=[],r=[]}}})(),i=(()=>{let e="";const t=()=>e,n=e=>e.match(/battleship/)?4:e.match(/cruiser/)?3:e.match(/destroyer/)?2:e.match(/submarine/)?1:void 0,i=(e,t,n)=>{const r=parseInt(e.match(/\d+/)[0]),i=e.substring(5).match(/[a-j]/)[0],o=t.match(/horizontal|vertical/)[0],s="abcdefghij".split("");let a=[];if(n>1)for(let e=1;e<n;e+=1)"horizontal"===o?a.push(`${r}-${s[s.indexOf(i)+e]}`):"vertical"===o&&a.push(`${r+e}-${i}`);return a},o=e=>{const t=e.dataTransfer.getData("text"),o=document.getElementById(t),s=r.resetShipPositions(t);s&&r.removePositions(s),e.target.appendChild(o),((e,t,o)=>{const s=e.id.substring(5),a=n(o),l=[s,...i(e.id,t.className,a)],c=r.addShipPositions(o,l);c&&r.addPositions(c)})(e.target,o,t),o.className=(e=>{const t=e.split(" ");return t.splice(1,0,"dropped"),t.join(" ")})(o.className)},s=(e,t,n)=>{e.classList.remove(t);let r="";t.includes("vertical")?r="horizontal":t.includes("horizontal")&&(r="vertical"),e.classList.add(`${r}${t.substring(n)}`)};return{dragOver:e=>{e.preventDefault()},dragEnter:e=>{e.preventDefault()},dragLeave:e=>{e.preventDefault()},drop:e=>{e.preventDefault(),(e=>{const o=t(),s=document.getElementById(o),a=i(e.target.id,s.className,n(o)),l=[e.target.id.substring(5),...a];for(let e=0;e<l.length;e+=1)if(l[e].match(/undefined/)||parseInt(l[e].match(/\d+/)[0])>10)return!0;return r.isInvalidPosition(l,o)})(e)||/^cell/.test(e.target.id)&&o(e)},dragStart:t=>{t.target.classList.add("drag-start"),t.dataTransfer.setData("text",t.target.id),(t=>{e=t})(t.target.id),setTimeout(()=>t.target.classList.add("invisible"),0)},dragEnd:e=>{e.target.classList.remove("invisible"),e.target.classList.remove("drag-start")},rotate:e=>{const t=r.getShip(e.target.id),n=parseInt(t.getPositions()[0].match(/\d+/)[0]),i=t.getPositions()[0].match(/[a-j]/)[0],o=e.target.className.match(/horizontal|vertical/)[0],a="abcdefghij".split("");let l=[];if(t.getPositions().length>1)for(let e=1;e<t.getPositions().length;e+=1)"vertical"===o?l.push(`${n}-${a[a.indexOf(i)+e]}`):"horizontal"===o&&l.push(`${n+e}-${i}`);for(let e=0;e<l.length;e+=1)if(l[e].match(/undefined/)||parseInt(l[e].match(/\d+/)[0])>10)return;if(!r.isInvalidPosition(l,e.target.id)){const n=t.overridePositions(l);r.removePositions(n),r.addPositions(l),(e=>{e.target.classList.forEach(t=>{/^horizontal/.test(t)?s(e.target,t,10):/^vertical/.test(t)&&s(e.target,t,8)})})(e)}},getDragged:t}})(),o=(e,t,n)=>{let r=[],i=[];return{getID:()=>e,getType:()=>t,getSize:()=>n,getPositions:()=>r,addPosition:e=>{r.push(e)},overridePositions:e=>{const t=r[0],n=[...r].splice(1);return r=[t,...e],n},resetPositions:()=>{const e=[...r];return r=[],e},hit:e=>{i.push(e)},isSunk:()=>r.length===i.length}};var s=[{size:4,quantity:1,name:"battleship"},{size:3,quantity:2,name:"cruiser"},{size:2,quantity:3,name:"destroyer"},{size:1,quantity:4,name:"submarine"}];var a=()=>{(()=>{const e=document.getElementById("ships");let t="";s.forEach(e=>{const n=e.quantity;for(let i=0;i<n;i+=1){const n=o(`${e.name}-${i}`,e.name,e.size);r.addShip(n),t+=`<div id="${e.name}-${i}" class="ship-${e.name}-${i} horizontal-${e.name}" draggable="true"></div>`}}),e.innerHTML=t})(),document.querySelectorAll('*[class^="ship"]').forEach(e=>{e.addEventListener("dragstart",i.dragStart,!1),e.addEventListener("dragend",i.dragEnd,!1),e.addEventListener("click",i.rotate,!1)}),(()=>{const e=document.querySelectorAll(".cell");for(const t of e)t.addEventListener("dragover",i.dragOver,!1),t.addEventListener("dragenter",i.dragEnter,!1),t.addEventListener("dragleave",i.dragLeave,!1),t.addEventListener("drop",i.drop,!1)})()};const l=(e,t,n)=>e>=0&&e<n-1&&0===t?"first-border":e===n-1&&0===t?"bottom-right-border":e===n-1&&t>0?"last-row-inner-border":"inner-border",c=()=>{const e=document.createElement("div");e.classList.add("number-index");let t='<div class="number-index-item number-index-item-special"></div>';for(let e=1;e<=10;e+=1)t+=`<div class="number-index-item">${e}</div>`;return e.innerHTML=t,e};var d=e=>{((e="board")=>{const t=document.getElementById(e);t.innerHTML="";let n='<div class="letters-index">';const r=["a","b","c","d","e","f","g","h","i","j"];for(let e=0;e<10;e+=1)n+=`<div class="board-letters"> ${r[e]} </div>`;n+="</div>",t.innerHTML+=n;for(let e=0;e<10;e+=1){let n=`<div id="cells-${e+1}" class="cells">`;for(let t=0;t<10;t+=1)n+=`<div id="cell-${e+1}-${r[t]}" class="cell ${l(e,t,10)}"></div>`;n+="</div>",t.innerHTML+=n}if("board"==e){const e=document.getElementsByClassName("number-index")[0];if(!document.getElementsByClassName("container")[0].contains(e)){const e=document.getElementsByClassName("container")[0];e.insertBefore(c(),e.children[1])}}else{const e=document.getElementsByClassName("container")[1];e.insertBefore(c(),e.children[1])}})(e)};const u="abcdefghij".split("");let h=[];const m=e=>{for(let t=0;t<e.length;t+=1){const n=e[t].split("-");if(e[t].includes("undefined"))return!1;if(n[0]>10||n[1]>"j")return!1;for(let n=0;n<h.length;n+=1)if(h[n][1].includes(e[t]))return!1}return!0},f=(e,t,n)=>{h.push([e,[...t],n])},g=(e,t,n)=>{let r=[e];const i=e.split("-"),o=parseInt(i[0]),s=i[1];if("horizontal"===n)for(let e=0;e<t;e+=1)r.push(`${o}-${u[u.indexOf(s)+e+1]}`);else for(let e=0;e<t;e+=1)r.push(`${o+e+1}-${s}`);return r},p=()=>`${Math.floor(10*Math.random())+1}-${u[Math.floor(10*Math.random())]}`,v=()=>{s.forEach(e=>{for(let t=0;t<e.quantity;t+=1){const n=p();let r="",i=[];0===Math.floor(2*Math.random())?(r="horizontal",i=g(n,e.size-1,r)):(r="vertical",i=g(n,e.size-1,r)),m(i)?f(`${e.name}-${t}`,i,r):t-=1}})},b=e=>{for(let t=0;t<h.length;t+=1)r.addShip(o(h[t][0],h[t][0].split("-")[0],h[t][1].length),e),r.addShipPositions(h[t][0],h[t][1],e),r.addPositions(h[t][1],e)};var y=(e=!0)=>{e?(d(),a(),r.removeAllShipsPositions(),h=[],v(),b(e),(()=>{for(let e=0;e<h.length;e+=1){const t=document.getElementById(h[e][0]);document.getElementById(`cell-${h[e][1][0]}`).appendChild(t),t.className=`ship-${h[e][0]} dropped ${h[e][2]}-${h[e][0].split("-")[0]}`}})()):(v(),b(e),console.log(r.getPositions(!1))),h=[]};var E=(e,t)=>(r.removePosition(e,!t),(e=>0===r.getPositions(!e).length)(t)),L=(()=>{let e=[];const t="abcdefghij".split(""),n=()=>Math.floor(10*Math.random()+1),r=()=>t[Math.floor(10*Math.random())];return{play:()=>{const t=(()=>{let t="";do{t=`cell-${n()}-${r()}`}while(e.includes(t));return console.log(`Movement: ${t}`),t})();e.push(t),console.log(e),T(!1,t)},restartMovements:()=>{e=[]}}})();const P=()=>{document.getElementById("restart").addEventListener("click",()=>{document.querySelector(".winner").classList.toggle("set-hidden"),(()=>{L.restartMovements(),r.reinitialize(),document.getElementById("user-options").classList.remove("set-hidden"),document.getElementById("ships").classList.remove("set-hidden"),document.getElementsByClassName("container")[0].classList.add("full-size");const e=document.getElementById("b-board");e.innerHTML="";const t=document.getElementsByClassName("container")[1];t.innerHTML="",t.appendChild(e),document.getElementById("btn-game-start").disabled=!0,d(),a()})()})};var $=e=>{((e,t)=>{let n=(e=>e?"Player Won!":"AI won!")(t);e.classList.toggle("set-hidden"),e.innerHTML=`<h1>${n}</h1>\n                         <button id="restart">Resart</button>`})(document.querySelector(".winner"),e),(()=>{const e=document.getElementById("b-board");for(let t=0;t<e.children.length;t+=1)for(let n=0;n<e.children[t].children.length;n+=1)e.children[t].children[n].classList.add("pointer"),e.children[t].children[n].removeEventListener("click",B.eventFunction)})(),P()};const I=(e,t)=>{const n=(e=>e?document.getElementById("b-board"):document.getElementById("board"))(t);for(let t=0;t<n.children.length;t+=1)for(let r=0;r<n.children[t].children.length;r+=1)if(n.children[t].children[r].id===e)return n.children[t].children[r]};var T=(e,t)=>{const n=t.replace("cell-","");r.getPositions(!e).includes(n)?(I(t,e).classList.add("hit"),E(n,e)&&(console.log("Game Over"),$(e)),e||L.play()):(I(t,e).classList.add("missed"),e&&L.play())},B=(()=>{const e=t=>{const n=t.target.id;T(!0,n),t.target.classList.remove("pointer"),t.target.removeEventListener("click",e)};return{init:()=>{(()=>{const t=document.getElementById("b-board");for(let n=1;n<t.children.length;n+=1)for(let r=0;r<t.children[n].children.length;r+=1)t.children[n].children[r].classList.add("pointer"),t.children[n].children[r].addEventListener("click",e)})()},eventFunction:e}})();var S=()=>{(()=>{const e=document.querySelectorAll('*[class^="ship"]');document.querySelectorAll('*[class^="cell"]').forEach(e=>{e.removeEventListener("dragover",i.dragOver),e.removeEventListener("dragenter",i.dragEnter),e.removeEventListener("dragleave",i.dragLeave),e.removeEventListener("drop",i.drop)}),e.forEach(e=>{e.draggable=!1,e.removeEventListener("dragstart",i.dragStart,!1),e.removeEventListener("dragend",i.dragEnd,!1),e.removeEventListener("click",i.rotate,!1)})})(),document.getElementById("user-options").classList.add("set-hidden"),document.getElementById("ships").classList.add("set-hidden"),document.getElementsByClassName("container")[0].classList.remove("full-size"),(()=>{const e=document.getElementsByClassName("dropped");for(let t=0;t<e.length;t+=1)e[t].classList.add("downgrade")})(),d("b-board"),y(!1),B.init()};d(),document.getElementById("user-options").innerHTML='\n    <button id="btn-randomize" class="btn-randomize">Random</button><br>\n    <button id="btn-game-start" class="btn-game-start">Start Game</button>\n  ',(e=>{e.addEventListener("click",()=>{y()})})(document.getElementById("btn-randomize")),(e=>{e.disabled=!0,e.addEventListener("click",()=>{S()})})(document.getElementById("btn-game-start")),a()}]);