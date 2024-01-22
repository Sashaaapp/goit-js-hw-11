import{i as d,S as p}from"./assets/vendor-46aac873.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function f(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(t){if(t.ep)return;t.ep=!0;const s=f(t);fetch(t.href,s)}})();document.addEventListener("DOMContentLoaded",function(){const o=document.getElementById("loader-container");r(o);const n=document.getElementById("searchForm"),f=document.getElementById("searchInput"),l=document.getElementById("gallery"),t="41934305-8f787e974a2ef1238ff7fef77";n.addEventListener("submit",function(a){a.preventDefault(),s(o);const u=f.value.trim();if(u===""){d.error({title:"Error",message:"Please enter a search term"}),r(o);return}const e="https://pixabay.com/api/",i={key:t,q:u,image_type:"photo",safesearch:!0,orientation:"horizontal",per_page:9};fetch(`${e}?${new URLSearchParams(i)}`).then(c=>c.json()).then(c=>{c.hits.length===0?d.error({title:"Error",message:"No images found for the provided search term"}):m(c.hits)}).catch(()=>{d.error({title:"Error",message:"Failed to fetch images. Please try again later."})}).finally(()=>{r(o)})});function s(a){a&&(a.style.display="block")}function r(a){a&&(a.style.display="none")}function m(a){if(l.innerHTML="",a.length===0){d.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"}),r();return}a.forEach(e=>{const i=document.createElement("div");i.className="gallery-item",i.innerHTML=`
      <a href="${e.largeImageURL}" data-lightbox="gallery" data-title="Likes: ${e.likes}, Views: ${e.views}, Comments: ${e.comments}, Downloads: ${e.downloads}">
          <img src="${e.webformatURL}" alt="${e.tags}" data-src="${e.largeImageURL}" data-caption="Likes: ${e.likes}, Views: ${e.views}, Comments: ${e.comments}, Downloads: ${e.downloads}">
        </a>
        <div class="image-stats">
      <div class="stat-item">
        <p class="stat-label">Likes:</p>
        <p class="stat-value">${e.likes}</p>
      </div>
      <div class="stat-item">
        <p class="stat-label">Views:</p>
        <p class="stat-value">${e.views}</p>
      </div>
      <div class="stat-item">
        <p class="stat-label">Comments:</p>
        <p class="stat-value">${e.comments}</p>
      </div>
      <div class="stat-item">
        <p class="stat-label">Downloads:</p>
        <p class="stat-value">${e.downloads}</p>
      </div>
    </div>
      `,l.appendChild(i)}),new p(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}});
//# sourceMappingURL=commonHelpers.js.map
