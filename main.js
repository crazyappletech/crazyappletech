gsap.registerPlugin(ScrollTrigger);
gsap.set(".youtube", {transformOrigin: "50% 50%"});
gsap.to(".youtube", {duration: 5, x: 150, ease: "elastic", rotate: 360,
 scrollTrigger: {
   trigger: ".youtube",
   markers: false,
   start:"top 110%",
   end:"bottom 25%",
   toggleActions: "restart pause reverse reset",
 }
});

gsap.to(".square", {
  duration: 1, opacity: 1, y: -200,
  scrollTrigger: {
    trigger: ".square",
    markers: false,
    start:"top 100%",
    end:"bottom 25%",
    toggleActions: "restart pause reverse reset",
  }
})

// 
//
// let tl = gsap.timeline({repeat: -1, yoyo: true});
// tl.to(".store", {
//   duration: 2,
//   backgroundColor: "#4d88ff",
//   ease: "power1"
// });
