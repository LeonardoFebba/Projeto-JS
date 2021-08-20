(()=>{"use strict";!function(){function t(t){const e=t.currentTarget.getAttribute("href"),n=document.querySelector(e);t.preventDefault(),n.scrollIntoView({behavior:"smooth",block:"start"})}document.querySelectorAll('.js-menu a[href^="#"]').forEach((e=>{e.addEventListener("click",t)}))}(),function(){const t=document.querySelectorAll(".js-scroll");if(t.length){const e=.6*window.innerHeight;function n(){t.forEach((t=>{(t.getBoundingClientRect().top-e<0||t.classList.contains("ativo"))&&t.classList.add("ativo")}))}window.addEventListener("scroll",n)}}(),function(){const t=document.querySelectorAll(".faq-lista dt"),e="ativo";function n(){this.classList.toggle(e),this.nextElementSibling.classList.toggle(e)}t[0].classList.add(e),t[0].nextElementSibling.classList.add(e),t.forEach((t=>{t.addEventListener("click",n)}))}(),function(){const t=document.querySelectorAll(".js-tabmenu li"),e=document.querySelectorAll(".js-tabcontent section"),n="ativo";if(e[0].classList.add(n),t.length&&e.length){function o(t){e.forEach((t=>{t.classList.remove(n)})),e[t].classList.add(n)}t.forEach(((t,e)=>{t.addEventListener("click",(()=>{o(e)}))}))}}(),function(){const t=document.querySelector('[data-modal="abrir"'),e=document.querySelector('[data-modal="fechar"'),n=document.querySelector('[data-modal="container"');if(t&&e&&n){function o(t){t.preventDefault(),n.classList.toggle("ativo")}function c(t){t.target===this&&o(t)}t.addEventListener("click",o),e.addEventListener("click",o),n.addEventListener("click",c)}}(),function(){function t(t){const o=function(t){const e=document.createElement("div"),n=t.getAttribute("aria-label");return e.classList.add("tooltip"),e.innerText=n,document.body.appendChild(e),e}(this);n.tooltipBox=o,e.tooltipBox=o,e.element=this,this.addEventListener("mouseleave",e),this.addEventListener("mousemove",n)}document.querySelectorAll("[data-tooltip]").forEach((e=>{e.addEventListener("mouseover",t)}));const e={tooltipBox:"",element:"",handleEvent(){this.tooltipBox.remove(),this.element.removeEventListener("mouseleave",e),this.element.removeEventListener("mousemove",n)}},n={handleEvent(t){this.tooltipBox.style.top=`${t.pageY+20}px`,this.tooltipBox.style.left=`${t.pageX+20}px`}}}(),function(){function t(t){t.preventDefault(),this.classList.toggle("active"),function(t,e,n){const o=document.documentElement,c="data-outside";function i(a){t.contains(a.target)||(t.removeAttribute(c),e.forEach((t=>{o.removeEventListener(t,i)})),n())}t.hasAttribute(c)||(e.forEach((t=>{o.addEventListener(t,i)})),t.setAttribute(c,""))}(this,["touchstart","click"],(()=>{this.classList.remove("active")}))}document.querySelectorAll("[data-dropdown]").forEach((e=>{["touchsatar","click"].forEach((n=>{e.addEventListener(n,t)}))}))}(),function(){const t=document.querySelector('[data-menu="button"]'),e=document.querySelector('[data-menu="list"]');t.addEventListener("click",(function(){t.classList.toggle("active"),e.classList.toggle("active")}))}(),function(){const t=document.querySelector("[data-semana]"),e=t.dataset.semana.split(",").map(Number),n=t.dataset.horario.split(",").map(Number),o=new Date,c=o.getDay(),i=o.getHours(),a=-1!==e.indexOf(c);i>=n[0]&&i<n[1]&&a&&t.classList.add("aberto")}(),async function(t){const e=await fetch("./js/luminariasapi.json"),n=await e.json(),o=document.querySelector(".numeros-grid");n.forEach((t=>{const e=function(t){const e=document.createElement("div");return e.classList.add("numero-luminaria"),e.innerHTML=`<h3>${t.desenho}</h3><span data-numero>${t.total}</span>`,e}(t);o.appendChild(e)})),function(){document.querySelectorAll("[data-numero]").forEach((t=>{const e=+t.innerText,n=Math.floor(e/100);let o=0;const c=setInterval((()=>{o+=n,t.innerText=o,o>e&&(t.innerHTML=e,clearInterval(c))}),100)}));const t=document.querySelector(".numeros"),e=new MutationObserver((function(t){t[0].target.classList.contains("ativo")||(e.disconnect(),initAnima())}));e.observe(t,{attributes:!0})}()}(),fetch("https://blockchain.info/ticker").then((t=>t.json())).then((t=>{document.querySelector(".btc-preco").innerText=(100/t.BRL.sell).toFixed(4)}))})();