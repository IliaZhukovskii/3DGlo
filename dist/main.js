(()=>{"use strict";let e=document.querySelectorAll(".calc-block > input"),t=document.querySelectorAll('input[placeholder="Ваше имя"]'),n=document.querySelectorAll('input[placeholder="Ваше сообщение"]'),l=document.querySelectorAll('input[type="email"]'),o=document.querySelectorAll('input[type="tel"]');(e=>{let t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),l=document.getElementById("timer-seconds");const o=()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3;return{timeRemaining:t,hours:Math.floor(t/60/60),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}};o().timeRemaining>0&&setInterval((()=>{let e=o();1==String(e.hours).length&&(e.hours="0"+e.hours),1==String(e.minutes).length&&(e.minutes="0"+e.minutes),1==String(e.seconds).length&&(e.seconds="0"+e.seconds),t.textContent=e.hours,n.textContent=e.minutes,l.textContent=e.seconds}),1e3)})("30 april 2022"),(()=>{let e=document.querySelector("menu");document.addEventListener("click",(t=>{(t.target.closest(".menu")||t.target.classList.contains("close-btn")||t.target.closest("menu>ul>li>a"))&&e.classList.toggle("active-menu")}));let t=document.querySelectorAll('a[href^="#"]');for(let e of t)e.addEventListener("click",(t=>{t.preventDefault();let n=e.getAttribute("href");document.querySelector(n).scrollIntoView({behavior:"smooth",block:"start"})}))})(),(()=>{let e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),n=e.querySelector(".popup-content"),l=window.matchMedia("(min-width: 768px)"),o=0;n.style.top="0px";const r=()=>{o++,n.style.top=o+"px",o<60&&setTimeout(r,5)};for(let n of t)n.addEventListener("click",(()=>{e.style.display="block",l.matches&&r()}));const s=()=>{e.style.display="none",o=0};e.addEventListener("click",(e=>{(e.target.classList.contains("popup")||e.target.classList.contains("popup-close"))&&s()})),document.addEventListener("keydown",(e=>{"Escape"===e.key&&s()}))})(),(()=>{for(let t of e)t.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^\d]/g,"")}));const r=e=>{e.target.value=e.target.value.replace(/[^а-яА-Я\s-]/g,"")},s=e=>{e.target.value=e.target.value.replace(/[^\w-@.!~*']/g,"")},c=e=>{e.target.value=e.target.value.replace(/[^\d()-]/g,"")};for(let e of t)e.addEventListener("input",r);for(let e of n)e.addEventListener("input",r);for(let e of l)e.addEventListener("input",s);for(let e of o)e.addEventListener("input",c)})(),(()=>{let e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),n=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){let l=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===l?(e.classList.add("active"),n[t].classList.remove("d-none")):(e.classList.remove("active"),n[t].classList.add("d-none"))}))}}))})()})();