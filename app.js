var input=document.querySelector("input");
var btn=document.querySelector("button");
var strong=document.querySelector("strong");

btn.addEventListener("click",()=>{
    var leng = input.value.length;
    var ran = input.value.charAt(Math.floor(Math.random()*leng+1));
    strong.innerText=ran.toUpperCase();
});

