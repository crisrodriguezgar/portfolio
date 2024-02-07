const t=document.querySelector(".js-hamburger"),e=document.querySelector(".js-menuH"),n=document.querySelectorAll(".headerH__textH"),r=document.querySelector(".js-hamburger"),s=()=>{e.classList.toggle("hidden")};t.addEventListener("click",s);n.forEach(c=>{c.addEventListener("click",()=>{e.classList.add("hidden"),r.checked=!1})});
//# sourceMappingURL=main.js.map
