// Locomotive js -smooth scrolling
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// G-sap to animate
gsap.from(".nlink", {
    Stagger: .2,
    y: 10,
    duration: 1,
    opacity: 0,
})

gsap.from(".anim2",{
    stagger: .2,
    y: 30,
    opacity: 0,
    duration: 1,
})

// shery js - animate texts and image 
Shery.textAnimate("#headings h1", {
    style: 2,
    y: 10,
    delay: 0.3,
    duration: 3,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

Shery.imageEffect("imgntext ",{
    style: 4, 
    debug: true
})
  // shery js to animate images accordingly


Shery.imageEffect("bimg",{
    style: 5,
    debug: true
})



