import{i as l,S as u}from"./assets/vendor-8c59ed88.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(r){if(r.ep)return;r.ep=!0;const t=o(r);fetch(r.href,t)}})();const f=s=>s.map(e=>`
    <li class="image-card">
        <a href="${e.largeImageURL}"
          ><img src="${e.webformatURL}" alt="${e.tags}"/>
        </a>
        <ul class="img-descr">
          <li class="descr-el">Likes <span>${e.likes}</span></li>
          <li class="descr-el">Views <span>${e.views}</span></li>
          <li class="descr-el">Views <span>${e.views}</span></li>
          <li class="descr-el">Comments <span>${e.comments}</span></li>
          <li class="descr-el"> Downloads <span>${e.downloads}</span></li>
        </ul>
      </li>`).join(""),d="43829548-da808e6ec6af8b5210a63f940",p="https://pixabay.com/api/",m=s=>{const e=new URLSearchParams({key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${p}?${e}`).then(o=>o.ok?o.json():new Error("Oops, something went wrong 😞")).catch(o=>console.error("error"))},i=document.querySelector(".gallery-page"),g=document.querySelector(".search-form"),c=document.querySelector(".loader");function y(s){s.preventDefault();const e=s.currentTarget.elements.userInput.value.trim();if(e===""){i.innerHTML="",s.currentTarget.reset(),l.warning({message:"Type your query, please!",position:"center",timeout:3e3});return}i.innerHTML="",c.classList.remove("is-hidden"),m(e).then(o=>{const a=o.hits;a.length===0?l.error({message:"Sorry, there are no images matching your search query. Please try again!",timeout:3e3,position:"topRight",backgroundColor:"#ef4040",messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"1.5",iconColor:"#fafafb"}):(i.innerHTML=f(a),new u(".gallery-page a",{captionsData:"alt",captionDelay:250}).refresh())}).catch(o=>console.log(o)).finally(()=>{s.target.reset(),c.classList.add("is-hidden")})}g.addEventListener("submit",y);
//# sourceMappingURL=commonHelpers.js.map