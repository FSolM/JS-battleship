!function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";r.r(e);var n=(()=>{let t=[],e=[];return{getPlayerPositions:()=>t,addPlayerPositions:e=>{e.forEach(e=>{t.push(e)})},addPlayerShip:t=>{e.push(t)},getShip:t=>{for(let r=0;r<e.length;r+=1)if(e[r].getID()===t)return e[r]},addShipPositions:(t,r)=>{for(let n=0;n<e.length;n+=1)if(e[n].getID()===t)return r.forEach(t=>{e[n].addPosition(t)}),e[n].getPositions()},removeAllShipsPositions:()=>{e.forEach(t=>{t.resetPositions()}),t=[]},removePlayerPositions:e=>{e.forEach(e=>{const r=t.indexOf(e);t.splice(r,1)})},removeShipPositions:(t,r)=>{for(let n=0;n<e.length;n+=1)if(e[n].getID()===t){e[n].removePositions(r);break}},resetShipPositions:t=>{for(let r=0;r<e.length;r+=1)if(e[r].getID()===t)return e[r].resetPositions()},hasPlayerPosition:e=>t.includes(e),removeLastPlayerPosition:()=>{t.pop()},hasPlayerPositions:e=>{for(let r=0;r<e.length;r+=1)if(t.includes(e[r]))return!0;return!1}}})(),i=(()=>{let t="";const e=e=>{e.target.classList.add("drag-start"),e.dataTransfer.setData("text",e.target.id);const r=n.resetShipPositions(e.target.id);r&&n.removePlayerPositions(r),(e=>{t=e})(e.target.id),setTimeout(()=>e.target.classList.add("invisible"),0)},r=t=>{t.target.classList.remove("invisible"),t.target.classList.remove("drag-start")},i=t=>{const e=n.getShip(t.target.id),r=parseInt(e.getPositions()[0].match(/\d+/)[0]),i=e.getPositions()[0].match(/[a-j]/)[0],s=[...e.getPositions()].splice(1),a=t.target.className.match(/horizontal|vertical/)[0],l="abcdefghij".split("");let d=[];if(e.getPositions().length>1){for(let t=1;t<e.getPositions().length;t+=1)"vertical"===a?d.push(`${r}-${l[l.indexOf(i)+t]}`):"horizontal"===a&&d.push(`${r+t}-${i}`);e.overridePositions(d)}n.hasPlayerPositions(d)||(n.removePlayerPositions(s),n.addPlayerPositions(d),o(t))},s=(t,e,r)=>{t.classList.remove(e);let n="";e.includes("vertical")?n="horizontal":e.includes("horizontal")&&(n="vertical"),t.classList.add(`${n}${e.substring(r)}`)},o=t=>{t.target.classList.forEach(e=>{/^horizontal/.test(e)?s(t.target,e,10):/^vertical/.test(e)&&s(t.target,e,8)})};return{init:()=>{const t=document.querySelectorAll('*[class^="ship"]');for(const n of t)n.addEventListener("dragstart",e,!1),n.addEventListener("dragend",r,!1),n.addEventListener("click",i,!1)},getDragged:()=>t}})();const s=t=>{t.preventDefault()},o=t=>{t.preventDefault()},a=t=>{t.preventDefault()},l=t=>t.match(/battleship/)?4:t.match(/cruiser/)?3:t.match(/destroyer/)?2:t.match(/submarine/)?1:void 0,d=(t,e,r)=>{const n=parseInt(t.match(/\d+/)[0]),i=t.substring(5).match(/[a-j]/)[0],s=e.match(/horizontal|vertical/)[0],o="abcdefghij".split("");let a=[];if(r>1)for(let t=1;t<r;t+=1)"horizontal"===s?a.push(`${n}-${o[o.indexOf(i)+t]}`):"vertical"===s&&a.push(`${n+t}-${i}`);return a},c=t=>{const e=t.dataTransfer.getData("text"),r=document.getElementById(e),i=n.resetShipPositions(e);i&&n.removePlayerPositions(i),t.target.appendChild(r),((t,e,r)=>{const i=t.id.substring(5),s=l(r),o=[i,...d(t.id,e.className,s)],a=n.addShipPositions(r,o);a&&n.addPlayerPositions(a)})(t.target,r,e),r.className=(t=>{const e=t.split(" ");return e.splice(1,0,"dropped"),e.join(" ")})(r.className)},u=t=>{t.preventDefault(),(t=>{const e=i.getDragged(),r=document.getElementById(e),s=d(t.target.id,r.className,l(e)),o=[t.target.id.substring(5),...s];for(let t=0;t<o.length;t+=1)if(o[t].match(/undefined/))return!0;return n.hasPlayerPositions(o)})(t)||/^cell/.test(t.target.id)&&c(t)};var h=(t,e,r)=>{let n=[],i=[];return{getID:()=>t,getType:()=>e,getSize:()=>r,getPositions:()=>n,addPosition:t=>{n.push(t)},overridePositions:t=>{const e=n[0];n=[e,...t]},resetPositions:()=>{const t=[...n];return n=[],t},hit:t=>{i.push(t)},isSunk:()=>n.length===i.length}};var f=[{size:4,quantity:1,name:"battleship"},{size:3,quantity:2,name:"cruiser"},{size:2,quantity:3,name:"destroyer"},{size:1,quantity:4,name:"submarine"}];var g=()=>{(()=>{const t=document.getElementById("ships");let e="";f.forEach(t=>{const r=t.quantity;for(let i=0;i<r;i+=1){const r=h(`${t.name}-${i}`,t.name,t.size);n.addPlayerShip(r),e+=`<div id="${t.name}-${i}" class="ship-${t.name}-${i} horizontal-${t.name}" draggable="true"></div>`}}),t.innerHTML=e})(),i.init(),(()=>{const t=document.querySelectorAll(".cell");for(const e of t)e.addEventListener("dragover",s,!1),e.addEventListener("dragenter",o,!1),e.addEventListener("dragleave",a,!1),e.addEventListener("drop",u,!1)})()};const p=(t,e,r)=>t>=0&&t<r-1&&0===e?"first-border":t===r-1&&0===e?"bottom-right-border":t===r-1&&e>0?"last-row-inner-border":"inner-border";var m=()=>{(()=>{const t=document.getElementById("board");t.innerHTML="";const e=["a","b","c","d","e","f","g","h","i","j"];for(let r=0;r<10;r+=1){let n=`<div id="cells-${r+1}" class="cells">`;for(let t=0;t<10;t+=1)n+=`<div id="cell-${r+1}-${e[t]}" class="cell ${p(r,t,10)}"></div>`;n+="</div>",t.innerHTML+=n}})()};const v="abcdefghij".split("");let P=[];const y=t=>{for(let e=0;e<t.length;e+=1){const r=t[e].split("-");if(t[e].includes("undefined"))return!1;if(r[0]>10||r[1]>"j")return!1;for(let r=0;r<P.length;r+=1)if(P[r][1].includes(t[e]))return!1}return!0},b=(t,e,r)=>{P.push([t,[...e],r])},$=(t,e,r)=>{let n=[t];const i=t.split("-"),s=parseInt(i[0]),o=i[1];if("horizontal"===r)for(let t=0;t<e;t+=1)n.push(`${s}-${v[v.indexOf(o)+t+1]}`);else for(let t=0;t<e;t+=1)n.push(`${s+t+1}-${o}`);return n},S=()=>`${Math.floor(10*Math.random())+1}-${v[Math.floor(10*Math.random())]}`;var E,z=()=>{m(),g(),n.removeAllShipsPositions(),f.forEach(t=>{for(let e=0;e<t.quantity;e+=1){const r=S();let n="",i=[];0===Math.floor(2*Math.random())?(n="horizontal",i=$(r,t.size-1,n)):(n="vertical",i=$(r,t.size-1,n)),y(i)?b(`${t.name}-${e}`,i,n):e-=1}}),(()=>{for(let t=0;t<P.length;t+=1)n.addPlayerShip(h(P[t][0],P[t][0].split("-")[0],P[t][1].length)),n.addShipPositions(P[t][0],P[t][1])})(),(()=>{for(let t=0;t<P.length;t+=1){const e=document.getElementById(P[t][0]);document.getElementById(`cell-${P[t][1][0]}`).appendChild(e),e.className=`ship-${P[t][0]} dropped ${P[t][2]}-${P[t][0].split("-")[0]}`}})()};m(),(E=document.getElementById("user-options")).innerHTML='\n    <button id="btn-randomize" class="btn-randomize">Random</button>\n  ',(t=>{t.addEventListener("click",()=>{z()})})(E),g()}]);