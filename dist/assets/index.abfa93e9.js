const f=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}};f();const m=document.querySelector(".dark-mode-switch");m.addEventListener("click",()=>{localStorage.theme==="dark"||document.querySelector("html").classList.contains("dark")?(localStorage.theme="light",document.querySelector("html").classList.remove("dark")):(localStorage.theme="dark",document.querySelector("html").classList.add("dark"))},!1);const g=[{fromDate:new Date("12/27/1999"),toDate:new Date("12/27/1999"),imagePath:"/images/jared/jaredBirthday.jpg"},{fromDate:new Date("12/25/1999"),toDate:new Date("12/31/1999"),imagePath:"/images/jared/jaredSanta.jpg"}],s=new Date;for(const{fromDate:o,toDate:n,imagePath:r}of g)if(o.setFullYear(s.getFullYear()),n.setFullYear(s.getFullYear()),n.setHours(23,59,59,999),o.getTime()<=s.getTime()&&s.getTime()<=n.getTime()){document.querySelector(".profile-image").src=r;break}(async()=>{const o=document.querySelector(".spotify-recent-track").children[0].children[0],n=document.querySelector(".spotify-recent-track").children[1],r=await fetch("https://api.jdf2.org/getMostRecentSpotifyTrack").then(t=>t.json());r.track&&r.artist&&(o.textContent=r.track,o.setAttribute("title",r.track),n.textContent=r.artist),o.offsetWidth>o.parentElement.offsetWidth+1&&(o.style.animationDuration=`${Number.parseInt(o.offsetWidth)/40}s`,o.classList.add("marquee"));const i=document.querySelector(".discord-status"),e=await fetch("https://discord.com/api/guilds/744420915315605564/widget.json").then(t=>t.json()).then(t=>{var c;return(c=t==null?void 0:t.members)==null?void 0:c[0]});(e==null?void 0:e.id)==="0"&&(e==null?void 0:e.username)==="Jared"&&["online","idle"].includes(e==null?void 0:e.status)?i.textContent="Online":i.textContent="Offline"})();const l=["\u{1F970}","\u{1F60D}","\u{1F60A}","\u{1F973}","\u{1F643}","\u{1F920}","\u{1F637}","\u{1F436}","\u{1F431}","\u2764\uFE0F","\uFE0F\u{1F41D}"],a=document.querySelector(".secret-emoji-container"),d=document.querySelector(".secret-emoji-face");function u(){const o=l[Math.floor(Math.random()*l.length)];a.textContent=o+a.textContent,d.textContent=o,setTimeout(()=>{a.textContent=a.textContent.slice(0,-o.length),a.textContent.length===0&&(d.textContent="")},2500)}document.querySelector(".secret-emoji-trigger").addEventListener("click",u);window.fun=u;console.log("%c\u{1F44B} Hello!","font-size: 40px;");console.log("%cWhy're you looking in here? The code is on Github! https://github.com/jdf221/me.jaredfurlow.com","font-size: 15px");console.log("%cSince you're here might as well try running %cfun()","font-size: 12px;","border-radius: 5px; border: 1px solid #BCBEC0; padding: 1.5px;");
