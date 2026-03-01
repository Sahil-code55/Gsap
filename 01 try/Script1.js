
var tl = gsap.timeline({defaults:{duration: 1}})

tl.to('h1',{
   
    duration: 3,
    delay: 1,
   y: 100,
   opacity: 0,
    yoyo: true,
    repeat: -1
})

