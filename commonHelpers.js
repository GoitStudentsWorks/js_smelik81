import{a as F,S as V,N as W,P as z,A as K,K as G,M as J,i as U}from"./assets/vendor-b78c2430.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(t){if(t.ep)return;t.ep=!0;const e=n(t);fetch(t.href,e)}})();const X="/js_smelik81/assets/My-projects-finacec-mob-@1x-7181ed85.jpg",Q="/js_smelik81/assets/My-projects-finacec-mob-@2x-16cd040b.jpg",Y="/js_smelik81/assets/My-projects-finacec-tab-@1x-38c67f93.jpg",Z="/js_smelik81/assets/My-projects-finacec-tab@2x-71d97678.jpg",ee="/js_smelik81/assets/My-projects-finacec-desck@1x-461ec1ac.jpg",te="/js_smelik81/assets/My-projects-finacec-desck@2x-a8284659.jpg",se="/js_smelik81/assets/My-projects-vegetables-mob-@1x-4991822b.jpg",ne="/js_smelik81/assets/My-projects-vegetables-mob-@2x-5ee524b9.jpg",ae="/js_smelik81/assets/My-projects-vegetables-tab-@1x-80767004.jpg",oe="/js_smelik81/assets/My-projects-vegetables-tab-@2x-367d187f.jpg",re="/js_smelik81/assets/My-projects-vegetables-desck-@1x-67e11d98.jpg",ie="/js_smelik81/assets/My-projects-vegetables-desck-@2x-e4de57fb.jpg",ce="/js_smelik81/assets/My-projects-english-mob@1x-cc418ae4.jpg",le="/js_smelik81/assets/My-projects-english-mob@2x-8b31b76c.jpg",de="/js_smelik81/assets/My-projects-english-tab@1x-5e9dfd93.jpg",pe="/js_smelik81/assets/My-projects-english-tab@2x-df9b7d0a.jpg",me="/js_smelik81/assets/My-projects-english-desck@1x-66eaec52.jpg",ue="/js_smelik81/assets/My-projects-english-desck@2x-52c6a06c.jpg",h="/js_smelik81/assets/my-project-business@1x-453dc1a7.jpg",k="/js_smelik81/assets/my-project-business@2x-dcb3564d.jpg",w="/js_smelik81/assets/my-project-artisty@1x-e1966ce6.jpg",M="/js_smelik81/assets/my-project-artisty@2x-f865a371.jpg",E="/js_smelik81/assets/my-project-fresh@1x-c88d3a45.jpg",L="/js_smelik81/assets/my-project-fresh@2x-7c3cc483.jpg",S="/js_smelik81/assets/my-project-mimino@1x-5120051c.jpg",x="/js_smelik81/assets/my-project-mimino@2x-2bd02bb8.jpg",T="/js_smelik81/assets/my-project-nature@1x-7a40e5ec.jpg",_="/js_smelik81/assets/my-project-nature@2x-6d61de72.jpg",D="/js_smelik81/assets/my-project-PowerPlus@1x-a0ceb6ad.jpg",P="/js_smelik81/assets/my-project-PowerPlus@2x-0ab9547c.jpg",R="/js_smelik81/assets/my-project-stayHealhty@1x-3915d0f2.jpg",C="/js_smelik81/assets/my-project-stayHealhty@2x-7bb29976.jpg",be="/js_smelik81/assets/sprite_icon_opt-a290974e.svg",ge=[{standartMob:X,retinaMob:Q,standartTab:Y,retinaTab:Z,standartDesk:ee,retinaDesk:te,description:"Wallet webservice",title:"Wallet webservice"},{standartMob:se,retinaMob:ne,standartTab:ae,retinaTab:oe,standartDesk:re,retinaDesk:ie,description:"Green harvest webservice",title:"Green harvest webservice"},{standartMob:ce,retinaMob:le,standartTab:de,retinaTab:pe,standartDesk:me,retinaDesk:ue,description:"English Exellence webservice",title:"English Exellence webservice"},{standartMob:h,retinaMob:k,standartTab:h,retinaTab:k,standartDesk:h,retinaDesk:k,description:"Starlight studio landing page",title:"starlight studio landing page"},{standartMob:w,retinaMob:M,standartTab:w,retinaTab:M,standartDesk:w,retinaDesk:M,description:"Vyshyvanka vibes Landing Page",title:"vyshyvanka vibes Landing Page"},{standartMob:E,retinaMob:L,standartTab:E,retinaTab:L,standartDesk:E,retinaDesk:L,description:"Fruitbox online store",title:"fruitbox online store"},{standartMob:S,retinaMob:x,standartTab:S,retinaTab:x,standartDesk:S,retinaDesk:x,description:"Mimino website",title:"mimino website"},{standartMob:T,retinaMob:_,standartTab:T,retinaTab:_,standartDesk:T,retinaDesk:_,description:"CHEGO jewelry website",title:"chego jewelry website"},{standartMob:D,retinaMob:P,standartTab:D,retinaTab:P,standartDesk:D,retinaDesk:P,description:"Power pulse webservice",title:"power pulse webservice "},{standartMob:R,retinaMob:C,standartTab:R,retinaTab:C,standartDesk:R,retinaDesk:C,description:"Energy flow webservice ",title:"energy flow webservice "}];document.querySelector(".my-project-item-btn-visit");const u=document.querySelector(".js-my-project-list"),b=document.querySelector(".js-my-project-btn-load-more"),p=screen.availWidth;let v=0;const A=ge.map(({standartMob:o,retinaMob:s,standartTab:n,retinaTab:a,standartDesk:t,retinaDesk:e,title:r,description:d,technologyStack:l="React, JavaScript, Node JS, Git"})=>{const g=window.devicePixelRatio<2?p<768?o:p>=768&&p<1280?n:t:p<768?s:p>=768&&p<1280?a:e;return`
      <li class="my-project-item">
        <a class="my-project-link" href="${g}">
          <img class="my-project-image" src="${g}" alt="${d}"  width="320" height="194">
          </a>
          <p class="my-project-tech">${l}</p>
         <div class="my-project-div" > <h3 class="my-project-item-title">${r}</h3>
          </svg>
      <button onclick="window.open('https://github.com/smelik81/teamproject-js-08', '_blank')" class="my-project-item-btn-visit">VISIT
    <svg width="18" height="18" class="my-project-item-btn-visit-svg">
        <use href="${be}#icon-Arrow_visit_up"></use>
</button></div>
         </li>`});function I(){const o=A.slice(v,v+3);v+=3,o.forEach(n=>{const a=document.createElement("div");a.textContent=n.name,u.appendChild(a)});const s=["TEXT","DIV"];for(let n=u.childNodes.length-1;n>=0;n--){const a=u.childNodes[n];s.includes(a.nodeName)&&u.removeChild(a)}o.forEach(n=>{u.insertAdjacentHTML("beforeend",n)}),v>=A.length&&(b.style.display="none",b.removeEventListener("click",N))}function N(){b.scrollIntoView({behavior:"smooth"})}b.addEventListener("click",N);b.addEventListener("click",I);I();document.addEventListener("DOMContentLoaded",function(){const o=document.getElementById("mobileMenuBtn"),s=document.getElementById("modaleClose"),n=document.getElementById("mobileWindow");function a(){n.classList.add("is-open")}function t(){n.classList.remove("is-open")}o.addEventListener("click",a),s.addEventListener("click",t),document.querySelectorAll('.modale-item a[href^="#"]').forEach(e=>{e.addEventListener("click",function(r){r.preventDefault();const d=document.querySelector(this.getAttribute("href"));d&&(d.scrollIntoView({behavior:"smooth"}),t())})}),document.querySelectorAll("#mobileWindow a").forEach(e=>{e.addEventListener("click",function(r){t()})})});const ye=o=>o.map(({_id:s,avatar_url:n,author:a,review:t})=>`<li class="reviews-list-item swiper-slide id="${s}">
                <div class="reviews-container">
                    <p class="list-text">${t.trim()}</p>
                    <div class="user-info">
                        <img class="avatar" src="${n}" alt="${a}" width="40px" height="40px">
                        <p class="reviews-username">${a}</p>
                    </div>

                </div>
            </li>`).join(""),je="https://portfolio-js.b.goit.study/api/reviews",q=document.querySelector(".reviews-list"),fe=async()=>{try{let t=function(){const e=document.querySelector(".swiper-button-prev"),r=document.querySelector(".swiper-button-next");a.isBeginning?e.disabled=!0:e.disabled=!1,a.isEnd?r.disabled=!0:r.disabled=!1};const s=(await F.get(je)).data;if(s.length===0){q.innerHTML="<p>Not found</p>";return}const n=ye(s);q.insertAdjacentHTML("beforeend",n);const a=new V(".swiper",{modules:[W,z,K,G,J],direction:"horizontal",loop:!1,keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{invert:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{360:{slidesPerView:1,spaceBetween:10},768:{slidesPerView:1,spaceBetween:20},1280:{slidesPerView:2,spaceBetween:32}}})}catch(o){console.error("error fetching data",o),alert`Sorry, reviews not found.`,q.innerHTML="<p>Not found</p>"}};document.addEventListener("DOMContentLoaded",function(){const o=document.querySelectorAll(".ac-header"),s=document.querySelectorAll(".ac-panel"),n=document.querySelectorAll(".ac-svg"),a=document.querySelectorAll(".ac");a[0].classList.add("open"),n[0].classList.add("rotate"),o[0].style.backgroundColor="rgba(20, 197, 124, 0.2)",s[0].style.backgroundColor="rgba(20, 197, 124, 0.2)",s[0].style.maxHeight=s[0].scrollHeight+"px",o.forEach((t,e)=>{t.addEventListener("click",function(){const r=a[e].classList.contains("open");a.forEach((d,l)=>{d.classList.remove("open"),n[l].classList.remove("rotate"),s[l].classList.remove("open"),s[l].style.maxHeight=null,o[l].style.backgroundColor="#1e2023",s[l].style.backgroundColor="transparent"}),r||(a[e].classList.add("open"),n[e].classList.add("rotate"),s[e].classList.add("open"),s[e].style.maxHeight=s[e].scrollHeight+"px",o[e].style.backgroundColor="rgba(20, 197, 124, 0.2)",s[e].style.backgroundColor="rgba(20, 197, 124, 0.2)")})})});document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector(".contact-form"),s=document.getElementById("modal"),n=document.getElementById("backdrop"),a=document.querySelector(".close-button"),t=o.querySelector("#email"),e=o.querySelector("#message");t.addEventListener("focus",r),t.addEventListener("blur",d),e.addEventListener("focus",r),e.addEventListener("blur",l);function r(i){i.target.classList.remove("invalid")}function d(i){const c=i.target;c.checkValidity()||(c.classList.add("invalid"),m("Please enter a valid email address"))}function l(i){const c=i.target;c.value.trim()||(c.classList.add("invalid"),m("Please enter a message"))}o.addEventListener("submit",async i=>{i.preventDefault();const c=t.value.trim(),j=e.value.trim();if(!t.checkValidity()){m("Please enter a valid email address.","Error");return}if(!j){m("Please enter a message.","Error");return}const H={email:c,comment:j};console.log("Sending payload:",H);try{const f=await fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(H)});if(!f.ok){const $=await f.json();throw console.error("Server response:",$),new Error("Network response was not ok")}g(),o.reset()}catch(f){m("Failed to send the message. Please try again later.","Error"),console.error("Error fetching data:",f)}}),a.addEventListener("click",()=>{y()}),window.addEventListener("click",i=>{i.target===s&&y()});function g(){s.style.display="block",n.classList.add("show"),document.body.style.overflow="hidden",document.addEventListener("keydown",B)}function y(){s.style.display="none",n.classList.remove("show"),document.body.style.overflow="auto",document.removeEventListener("keydown",B)}function B(i){console.log("Key pressed:",i.key),i.key==="Escape"&&y()}n.addEventListener("click",y);const O={position:"topRight",titleColor:"#FFF",titleSize:"16",titleLineHeight:"24",messageColor:"#FFF",messageSize:"16",messageLineHeight:"24"};function m(i,c,j="#EF4040"){U.error({...O,title:c||"",message:`(${i}, ${c})`,backgroundColor:j})}});fe();
//# sourceMappingURL=commonHelpers.js.map