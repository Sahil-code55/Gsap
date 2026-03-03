var main = document.querySelector(".main");
var cursor = document.querySelector(".cursor");
var container = document.querySelector(".container");

main.addEventListener("mousemove",(dets)=>{
    
gsap.to(cursor,{
    x:dets.x,
    y:dets.y,
    duration:0.5,
    ease:"back.out"

})
});

container.addEventListener("mouseenter",(e)=>{
    cursor.innerHTML = 'view more';
    cursor.style.backgroundColor = "rgba(255, 255, 255, 0.386)";

    gsap.to(cursor,{
   scale:4,
        duration:0.3
    })
     
    })


container.addEventListener("mouseleave",(e)=>{
    cursor.innerHTML = '';
    cursor.style.backgroundColor = "white";
    gsap.to(cursor,{
   scale:1,
        duration:0.3
    })
} );  