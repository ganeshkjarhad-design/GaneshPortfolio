console.log("Welcome to Ganesh's Portfolio!");
document.querySelectorAll("nav a").forEach(link=>{
link.addEventListener("click",()=>console.log("Navigation: "+link.textContent));
});
