function breakText() {
var h1 = document.querySelector("h1");
var h1Text = h1.textContent;

var splitText = h1Text.split("");
var halfvalue = Math.floor(splitText.length / 2);

var clatter = ""; 

splitText.forEach(function(elem, index) {
    if(index < halfvalue) {
        clatter = clatter + `<span class="a">${elem}</span>`;
    } else {
        clatter = clatter + `<span class="b">${elem}</span>`;
    }
});

h1.innerHTML = clatter;
}

breakText();

gsap.from("h1 .a",{
    y : 50,
    opacity : 0,
    duration : 0.6,
    delay:0.5,
    stagger : 0.15
})
gsap.from("h1 .b",{
    y : 50,
    opacity : 0,
    duration : 0.6,
    delay:0.5,
    stagger : -0.15
})