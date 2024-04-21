import{a as m,S as f,i as c}from"./assets/vendor-6e0bf343.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();async function d(s,r){const o="https://pixabay.com/api/",i="43059810-21766dfeafea29ca9c24ae0e2",e=new URLSearchParams({key:i,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}),t=await m(`${o}?${e}`);return console.log(t),t}const l=document.querySelector(".gallery");function y(s){return s.map(({webformatURL:r,largeImageURL:o,tags:i,likes:e,views:t,comments:a,downloads:p})=>`
        <li class="gallery-item">
        <a class="gallery-link" href="${o}">
        <img 
        class="gallery-image"
        src="${r}"
        alt="${i}" />
        </a>
        <div class="image-text">
        <p>Likes: ${e}</p>
        <p>Views: ${t}</p>
        <p>Comments: ${a}</p>
        <p>Downloads: ${p}</p>
        </div>
        </li>`).join("")}const g=new f(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt"}),u=document.querySelector(".form"),n=document.querySelector(".loader"),h=document.querySelector(".loadBtn");u.addEventListener("submit",L);h.addEventListener("click",searchMore);function L(s){s.preventDefault(),n.style.opacity=1,l.innerHTML="";const r=s.currentTarget.elements.searchImg.value;if(r===""){c.show({message:"Please search for something",position:"topRight",color:"orang"}),n.style.opacity=0;return}d(r).then(o=>{if(n.style.opacity=1,!o.hits.length){c.show({message:'❌ "Sorry, there are no images matching your search query. Please try again!"',position:"topRight",color:"red"});return}l.innerHTML=y(o.hits),g.refresh()}).catch(o=>{c.show({message:"Request completed",position:"topRight",color:"green"})}).finally(()=>{u.reset(),n.style.opacity=0})}
//# sourceMappingURL=commonHelpers.js.map
