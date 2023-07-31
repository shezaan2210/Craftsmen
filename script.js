function init(){
    gsap.registerPlugin(ScrollTrigger);
  
//   Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
  }
  init();

//   gsap.from(`#page1`,{
//     opacity:0,
//     scale:0,
//     delay:.5,
//     duration:.8
//   })
// var tl = gsap.timeline()
//   tl.from(`#page1>.inner1`,{
//     opacity:.5,
//     scale:0,
//     delay:.5,
//     duration:.8
//   })
//   .from(`#page1>.inner2`,{
//     opacity:0,
//     scale:0,
//     delay:.5,
//     duration:.8
//   })
//   .from(`#page1>.inner3`,{
//     opacity:0,
//     scale:0,
//     delay:.5,
//     duration:.8
//   })
//   .from(`#page1>.inner4`,{
//     opacity:0,
//     scale:0,
//     delay:.5,
//     duration:.8
//   })

  gsap.to(`#page2>svg`,{
   rotation: 360,
   transform: `translate3d(0px, 0px, 0px) rotate3d(0, 0, 0, 360deg)` ,

    scrollTrigger:{
        trigger:`#page2`,
        scroller:`#main`,
        start:`top bottom`,
        end:`200% top`,
        // markers:true,
        scrub:true
    },
  

  })

  gsap.to(`#contact>svg`,{
    rotation: 360,
    transform: `translate3d(0px, 0px, 0px) rotate3d(0, 0, 0, 360deg)` ,
 
     scrollTrigger:{
         trigger:`#contact`,
         scroller:`#main`,
         start:`top bottom`,
         end:`200% top`,
        //  markers:true,
         scrub:true
     },
   
 
   })

gsap.to(`#page3>#dark`,{
    scrollTrigger:{
        trigger:`#page3`,
        scroller:`#main`,
        start:`top bottom`,
        end:`90% top`,
        // markers:true,
        scrub:.5,
       
    },
    transform: `translateX(0%)`,
    stagger:.2
})

gsap.to(`#page3>#light`,{
    scrollTrigger:{
        trigger:`#page3`,
        scroller:`#main`,
        start:`top bottom`,
        end:`90% top`,
        // markers:true,
        scrub:.5,
       
    },
    transform: `translateX(-10%)`,
    stagger:.2
})

gsap.to(`#page5>.tilt`,{
    scrollTrigger:{
        trigger:`#page5`,
        scroller:`#main`,
        start:`top bottom`,
        end:`bottom top`,
        // markers:true,
        scrub:true,
    },
    transform: `translate3d(-300px,0px,0px) rotate(-30deg)`
})

gsap.to(`#page5>.tilt2`,{
    scrollTrigger:{
        trigger:`#page5`,
        scroller:`#main`,
        start:`top bottom`,
        end:`bottom top`,
        // markers:true,
        scrub:true,
    },
    transform: `translate3d(300px,0px,0px) rotate(-30deg)`
})