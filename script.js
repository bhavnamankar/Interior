gsap.to(".image-container", {

  scrollTrigger: {
    trigger: ".image-container",
    start: "top 100%",
    scrub: 2,
    //  markers: true,
  },
  ease: Expo.easeInOut,
  width: "100%",
  duration: 2,

  stagger: 2,

})

gsap.to(".text h1", {

  scrollTrigger: {
    trigger: ".image-container",
    start: "top 85%",
    scrub: 2,
  
  },
  delay: 3,
  duration: 4.5,
  stagger: 2,
  top: "-100%",

})



gsap.from("#textone .one", {
  scrollTrigger: {
    trigger: "#nav",
    start: "0% top",
    scrub: 2,

  },
  left: "40%",
  stagger: 1,
  duration: 3
})

gsap.from("#bottomThree #left #two", {
  scrollTrigger: {
    Pin: true,
    trigger: "#bottomThree",
    start: "top 20%",
   
 scrub:1,

  },
  
  y: "-15%",
  duration: 3,
})
gsap.from("#bottomThree #left #one", {
  scrollTrigger: {
    Pin: true,
    trigger: "#bottomThree",
    start: "top top",
    scrub:1,

  },

  duration: 1,
  delay: .5,
  zIndex:444, 
})



gsap.from("#bottomsix #left img", {
  scrollTrigger: {
    Pin: true,
    trigger: "#bottomsix",
    start: "top top",
    scrub:1,

  },
 y:"10%",
  duration: 1,
  delay: 0,
  zIndex:44, 
})




gsap.from("#bottomfour #left #txt .one",{
  scrollTrigger: {
  trigger: "#bottomfour",
    start: "top top",
    // markers:true,
    scrub:2,
  },
  y:"30%",
  opacity:0.9,
  stagger:0.5,
  duration:2
})

// gsap.to("bottomsix #left img",{
//   opacity:0,
//   scrollTrigger: {
//     trigger: "#bottomsix #left ",
//       start: "-20% top",
//       markers:true,
//       scrub:2,
//     },
//   opacity:0
 
// })