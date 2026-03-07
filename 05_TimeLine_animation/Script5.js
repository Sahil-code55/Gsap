var menu =document.querySelector(".nav i");
var cross =document.querySelector(".slide i");

var tl = gsap.timeline();
tl.to(".slide",{
    right: 0, 
    duration: 0.6,
    stagger: 0.27
});

tl.from(".slide h4",{
    opacity: 0,
x: 150,
duration: 0.37,
stagger: 0.27
})

tl.from(".slide i",{
    opacity: 0,
    duration: 0.37,
    stagger: 0.27
})
tl.pause();

menu.addEventListener("click",()=>{
    tl.play();
});
cross.addEventListener("click",()=>{
    tl.reverse();
});
