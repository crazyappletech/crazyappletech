gsap.registerPlugin(ScrollTrigger);
// gsap.to(".youtube", {duration: 5, x: 150, ease: "elastic", rotate: 360,
//  scrollTrigger: {
//    trigger: ".youtube",
//    markers: false
//    ,
//    start:"top 110%",
//    end:"bottom 25%",
//    toggleActions: "restart pause reverse reset",
//  }
// });
//
// gsap.to(".square", {
//   duration: 1, opacity: 1, y: -200,
//   scrollTrigger: {
//     trigger: ".square",
//     markers: false,
//     start:"top 100%",
//     end:"bottom 25%",
//     toggleActions: "restart pause reverse reset",
//   }
// })
let tl = gsap.timeline({repeat: 1, yoyo: true});

tl.to(".spin", {duration: 2, y: -200, opacity: 1, stagger:0.2});
