var typed = new Typed('.typing',{
    strings:["","software enginer","web developer","graphic designer","ui/ux designer"],
    typeSpeed:100,
    BackSpeed:60,
    backDelay:1000,
    loop:true
})

let menuIcon =  document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}