var initialpath ="M 10 100 Q 500 100 990 100";
var finalpath = "M 10 100 Q 500 100 990 100";

var string = document.querySelector("#string")

string.addEventListener("mousemove", (dets) => {

    path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`
    gsap.to("#path", {

        attr: {
            d: path,
            duration: 0.2,
            ease : "power3.Out"
        },
})
})

string.addEventListener("mouseleave", (dets) => {

    gsap.to("#path", {  
        attr:{d:finalpath,
            duration: 0.8,
            ease :"elastic.out(1.2, 0.7)",

        },
})
}
)