import{S as l,i}from"./assets/vendor-0fc460d7.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(r){if(r.ep)return;r.ep=!0;const t=s(r);fetch(r.href,t)}})();const u=o=>o.map(e=>`
    <li class="image-card">
        <a href="${e.largeImageURL}"
          ><img src="${e.webformatURL}" alt="${e.tags}"/>
        </a>
        <ul class="img-descr">
          <li class="descr-el">Likes ${e.likes}</li>
          <li class="descr-el">Views ${e.views}</li>
          <li class="descr-el">Comments ${e.comments}</li>
          <li class="descr-el"> Downloads ${e.downloads}</li>
        </ul>
      </li>`).join("");new l(".gallery-page a",{captionsData:"alt",captionDelay:250});const f="43829548-da808e6ec6af8b5210a63f940",m="https://pixabay.com/api/",d=o=>{const e=new URLSearchParams({key:f,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${m}?${e}`).then(s=>s.ok?s.json():new Error("Oops, something went wrong 😞")).catch(s=>console.error("error"))},c=document.querySelector(".gallery-page"),p=document.querySelector(".search-form");function h(o){o.preventDefault();const e=o.currentTarget.elements.userInput.value.trim();if(console.log("searchValue: ",e),e===""){c.innerHTML="",o.currentTarget.reset(),i.warning({message:"Type your query, please!",position:"center",timeout:2e3});return}c.innerHTML="",d(e).then(s=>{const n=s.hits;n.length===0?i.error({message:"Sorry, there are no images matching your search query. Please try again!",timeout:1e3,position:"center"}):c.innerHTML=u(n)}).catch(s=>console.log(s)).finally(()=>{o.currentTarget.reset()})}p.addEventListener("submit",h);
//# sourceMappingURL=commonHelpers.js.map
