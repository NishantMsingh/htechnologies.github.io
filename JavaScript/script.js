const clo=document.getElementById("close");

clo.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("Closed");
document.getElementById("nav").style.display="none";
});
const open=document.getElementById("open");

open.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("Closed");
document.getElementById("nav").style.display="block";
});

setInterval(()=>{
    const mediaQuery = window.matchMedia("(min-width: 760px)");

if (mediaQuery.matches) {
    document.getElementById("nav").style.display="block";
} 
},1000);