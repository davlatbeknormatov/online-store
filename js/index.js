
const bar = document.querySelector("#bar");
const nav = document.querySelector("#navbar");
const close = document.querySelector("#close");

bar.addEventListener("click", (e) =>{
    nav.classList.toggle("active");
})

close.addEventListener("click", (e) =>{
    nav.classList.toggle("active");
})