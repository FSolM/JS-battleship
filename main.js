!function(t){var e={};function r(a){if(e[a])return e[a].exports;var n=e[a]={i:a,l:!1,exports:{}};return t[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=e,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e){let r=[];const a=t=>{t.target.classList.add("drag-start"),t.dataTransfer.setData("text",t.target.id),setTimeout(()=>t.target.classList.add("invisible"),0)},n=t=>{t.target.classList.remove("invisible"),t.target.classList.remove("drag-start")},s=t=>{t.target.classList.forEach(e=>{if(/^horizontal/.test(e)){t.target.classList.remove(e);const r="vertical"+e.substring(10);t.target.classList.add(r)}else if(/^vertical/.test(e)){t.target.classList.remove(e);const r="horizontal"+e.substring(8);t.target.classList.add(r)}else;}),t.target.classList.contains("horizontal")?(t.target.classList.remove("horizontal"),t.target.classList.add("vertical")):t.target.classList.contains("vertical")&&(t.target.classList.remove("vertical"),t.target.classList.add("horizontal"))},o=t=>{t.preventDefault()},l=t=>{t.preventDefault(),r.includes(t.target.id)},d=t=>{t.preventDefault(),r.includes(t.target.id)},c=t=>{t.preventDefault(),r.includes(t.target.id)||/^cell/.test(t.target.id)&&(t=>{const e=t.dataTransfer.getData("text"),a=document.getElementById(e);t.target.appendChild(a),r.pop(),r.push(t.target.id),a.classList.add("dropped")})(t)};(()=>{let t=(t,e,r)=>{let a="";return a=t>=0&&t<r-1&&0===e?"first-border":t===r-1&&0===e?"bottom-right-border":t===r-1&&e>0?"last-row-inner-border":"inner-border"};(()=>{const t=[{size:4,quantity:1,name:"battleship"},{size:3,quantity:2,name:"cruiser"},{size:2,quantity:3,name:"destroyer"},{size:1,quantity:4,name:"submarine"}],e=document.getElementById("ships");let r="";t.forEach(t=>{const e=t.quantity;for(i=0;i<e;i+=1)r+=`<div id="${t.name}-${i}" class="ship-${t.name}-${i} horizontal-${t.name}" draggable="true"></div>`}),e.innerHTML=r})(),(()=>{const e=document.getElementById("board");e.innerHTML="";const r=["a","b","c","d","e","f","g","h","i","j"];for(let a=0;a<10;a+=1){let n=`<div id="cells-${a+1}" class="cells">`;for(let e=0;e<10;e+=1){const s=t(a,e,10);n+=`<div id="cell-${a+1}-${r[e]}" class="cell ${s}"></div>`}n+="</div>",e.innerHTML+=n}})(),(()=>{const t=document.querySelectorAll('*[class^="ship"]');for(const e of t)e.addEventListener("dragstart",a,!1),e.addEventListener("dragend",n,!1),e.addEventListener("click",s,!1)})(),(()=>{const t=document.querySelectorAll(".cell");for(const e of t)e.addEventListener("dragover",o,!1),e.addEventListener("dragenter",l,!1),e.addEventListener("dragleave",d,!1),e.addEventListener("drop",c,!1)})()})()}]);