'use strict'

let cookies = document.querySelector("#cookies, .cookiesHead")
let close1 = document.querySelector(".close1");
const burger=document.getElementById("burger");
let flg=true;
burger.addEventListener('click',()=>{
   if(flg===true)
   {
    document.getElementById("head").classList.remove("header");
    document.getElementById("head").classList.add("hide-and-show");
    flg=false;
   }
   else
   {
    flg=true;
    document.getElementById("head").classList.remove("hide-and-show");
    document.getElementById("head").classList.add("header");
   }
});

setTimeout(()=>{
   cookies.style.display="flex";
  

   },5000);

   close1.addEventListener("click",()=>{
      cookies.style.display="none"; 
   })