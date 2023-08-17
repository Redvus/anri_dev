class SectionAnimation{sectionChange(e,t,o,n,c,r,i,s,l,a){document.querySelector(".section-top__image");let g=new gsap.timeline({scrollTrigger:{trigger:e,scroller:wrapper,scrub:!1,start:"top top",end:"100% top",toggleActions:"play none none reverse"},delay:"-1.3",onStart:()=>{g.set(n,{backgroundColor:"#f2a07c",delay:"-0.3"})}});g.fromTo(o,{left:"3vw",autoAlpha:0},{left:"0",autoAlpha:1,ease:"sine.inOut"}).to(t,{left:"-=3vw",autoAlpha:0,ease:"sine.inOut",delay:"-0.6"}).fromTo(r,{right:"-5vw",autoAlpha:0},{right:"-2.5vw",autoAlpha:1,ease:"sine.inOut",delay:"-0.6"}).to(c,{right:"+=2.5vw",autoAlpha:0,ease:"sine.inOut",delay:"-0.6"}).fromTo(s,{right:"-5vw",autoAlpha:0},{right:"-2.5vw",autoAlpha:1,ease:"sine.inOut",delay:"-0.6"}).to(i,{right:"+=2.5vw",autoAlpha:0,ease:"sine.inOut",delay:"-0.6"}).fromTo(a,{right:"0",autoAlpha:0},{right:"2.5vw",autoAlpha:1,ease:"sine.inOut",delay:"-0.6"}).to(l,{right:"+=2.5vw",autoAlpha:0,ease:"sine.inOut",delay:"-0.6"}),ScrollTrigger.refresh()}sectionSimpleInfoChange(e,t,o,n,c,r){let i=new gsap.timeline({scrollTrigger:{trigger:e,scroller:wrapper,scrub:!1,start:"top top",end:"100% top",toggleActions:"play none none reverse"},delay:"-1.3",onStart:()=>{i.set(n,{backgroundColor:"#f2a07c",delay:"-0.3"})}});i.fromTo(o,{left:"-3vw",autoAlpha:0},{left:"-6vw",autoAlpha:1,ease:"sine.inOut"}).to(t,{left:"-=3vw",autoAlpha:0,ease:"sine.inOut",delay:"-0.6"}).fromTo(r,{right:"0",autoAlpha:0},{right:"2.5vw",autoAlpha:1,ease:"sine.inOut",delay:"-0.6"}).to(c,{right:"+=2.5vw",autoAlpha:0,ease:"sine.inOut",delay:"-0.6"}),ScrollTrigger.refresh()}}class SectionTopAnimation{sectionTopChange(e,t,o){const n=document.querySelector(".section-top__mask_red"),c=document.querySelector(".section-top__mask"),r=document.querySelector(".section-top__image");new gsap.timeline({scrollTrigger:{trigger:e,scroller:wrapper,scrub:!0,start:"top 104px",end:"100% top",toggleActions:"play none none reverse"}}).to(r,{left:"-7vw",width:"127vw",delay:"-0.2"}).to(n,{autoAlpha:0,duration:"1",delay:"-0.6",ease:"power3.out"}).to(c,{left:"-17vw",duration:1,delay:"-0.9",ease:"power3.out"}).to(t,{duration:"1",delay:"-1"}).to(o,{autoAlpha:0,delay:"-1"}),ScrollTrigger.refresh()}sectionTopWithMask(e,t,o){const n=document.querySelector(".section-top__mask_red");document.querySelector(".section-top__mask"),document.querySelector(".section-top__image");new gsap.timeline({scrollTrigger:{trigger:e,scroller:wrapper,scrub:!0,start:"top 104px",end:"100% top",toggleActions:"play none none reverse"}}).to(n,{autoAlpha:0,duration:"1",delay:"-0.6",ease:"power3.out"}).to(t,{duration:"1",delay:"-1"}).to(o,{autoAlpha:0,delay:"-1",right:"0"}),ScrollTrigger.refresh()}}function reloadWindowResize(){window.onresize=function(){location.reload()}}function scrollSmooth(){const e=document.getElementById("scrollLine"),t=document.querySelector(".wrapper"),o=new LocomotiveScroll({el:t,smooth:!0,multiplier:.3});o.on("scroll",ScrollTrigger.update),ScrollTrigger.scrollerProxy(t,{scrollTop(e){return arguments.length?o.scrollTo(e,0,0):o.scroll.instance.scroll.y},getBoundingClientRect:()=>({top:0,left:0,width:window.innerWidth,height:window.innerHeight})}),gsap.from(e,{scrollTrigger:{trigger:e,scroller:t,scrub:!0,start:"0 0",end:()=>"+="+(t.offsetHeight-window.innerHeight)},scaleX:0,transformOrigin:"0 0",ease:"none"}),ScrollTrigger.addEventListener("refreshInit",(()=>o.update())),ScrollTrigger.refresh()}gsap.registerPlugin(ScrollTrigger);const wrapper=document.querySelector(".wrapper"),sectionChangeContent=new SectionAnimation,sectionTopChangeContent=new SectionTopAnimation,sectionTopTitle=document.querySelector(".section-top__title"),sectionProject_0=document.getElementById("sectionProject_0"),sectionProject_1=document.getElementById("sectionProject_1"),sectionProject_2=document.getElementById("sectionProject_2"),sectionProject_3=document.getElementById("sectionProject_3"),sectionProject_4=document.getElementById("sectionProject_4"),sectionProject_5=document.getElementById("sectionProject_5"),sectionProject_6=document.getElementById("sectionProject_6"),sectionProject_7=document.getElementById("sectionProject_7"),sectionProject_8=document.getElementById("sectionProject_8"),sectionProject_9=document.getElementById("sectionProject_9"),sectionProject_10=document.getElementById("sectionProject_10"),sectionProject_11=document.getElementById("sectionProject_11"),sectionProject_12=document.getElementById("sectionProject_12"),sectionProject_13=document.getElementById("sectionProject_13"),sectionProjectImage_0=document.getElementById("sectionProjectImage_0"),sectionProjectImage_1=document.getElementById("sectionProjectImage_1"),sectionProjectImage_2=document.getElementById("sectionProjectImage_2"),sectionProjectImage_3=document.getElementById("sectionProjectImage_3"),sectionProjectImage_4=document.getElementById("sectionProjectImage_4"),sectionProjectImage_5=document.getElementById("sectionProjectImage_5"),sectionProjectImage_6=document.getElementById("sectionProjectImage_6"),sectionProjectImage_7=document.getElementById("sectionProjectImage_7"),sectionProjectImage_8=document.getElementById("sectionProjectImage_8"),sectionProjectImage_9=document.getElementById("sectionProjectImage_9"),sectionProjectImage_10=document.getElementById("sectionProjectImage_10"),sectionProjectImage_11=document.getElementById("sectionProjectImage_11"),sectionProjectImage_12=document.getElementById("sectionProjectImage_12"),sectionProjectImage_13=document.getElementById("sectionProjectImage_13"),scrollMarkerProject_0=document.getElementById("scrollMarkerProject_0"),scrollMarkerProject_1=document.getElementById("scrollMarkerProject_1"),scrollMarkerProject_2=document.getElementById("scrollMarkerProject_2"),scrollMarkerProject_3=document.getElementById("scrollMarkerProject_3"),scrollMarkerProject_4=document.getElementById("scrollMarkerProject_4"),scrollMarkerProject_5=document.getElementById("scrollMarkerProject_5"),scrollMarkerProject_6=document.getElementById("scrollMarkerProject_6"),scrollMarkerProject_7=document.getElementById("scrollMarkerProject_7"),scrollMarkerProject_8=document.getElementById("scrollMarkerProject_8"),scrollMarkerProject_9=document.getElementById("scrollMarkerProject_9"),scrollMarkerProject_10=document.getElementById("scrollMarkerProject_10"),scrollMarkerProject_11=document.getElementById("scrollMarkerProject_11"),scrollMarkerProject_12=document.getElementById("scrollMarkerProject_12"),scrollMarkerProject_13=document.getElementById("scrollMarkerProject_13"),sectionProjectInfoDescription_0=document.getElementById("sectionProjectInfoDescription_0"),sectionProjectInfoDescription_1=document.getElementById("sectionProjectInfoDescription_1"),sectionProjectInfoDescription_2=document.getElementById("sectionProjectInfoDescription_2"),sectionProjectInfoDescription_3=document.getElementById("sectionProjectInfoDescription_3"),sectionProjectInfoDescription_4=document.getElementById("sectionProjectInfoDescription_4"),sectionProjectInfoDescription_5=document.getElementById("sectionProjectInfoDescription_5"),sectionProjectInfoDescription_6=document.getElementById("sectionProjectInfoDescription_6"),sectionProjectInfoDescription_7=document.getElementById("sectionProjectInfoDescription_7"),sectionProjectInfoDescription_8=document.getElementById("sectionProjectInfoDescription_8"),sectionProjectInfoDescription_9=document.getElementById("sectionProjectInfoDescription_9"),sectionProjectInfoDescription_10=document.getElementById("sectionProjectInfoDescription_10"),sectionProjectInfoDescription_11=document.getElementById("sectionProjectInfoDescription_11"),sectionProjectInfoDescription_12=document.getElementById("sectionProjectInfoDescription_12"),sectionProjectInfoDescription_13=document.getElementById("sectionProjectInfoDescription_13");function sectionProjectsAnimLoad(){sectionTopChangeContent.sectionTopWithMask(sectionProject_0,sectionProjectImage_0,sectionTopTitle),sectionChangeContent.sectionSimpleInfoChange(sectionProject_0,sectionProjectImage_0,sectionProjectImage_1,scrollMarkerProject_0,sectionProjectInfoDescription_0,sectionProjectInfoDescription_1),sectionChangeContent.sectionSimpleInfoChange(sectionProject_1,sectionProjectImage_1,sectionProjectImage_2,scrollMarkerProject_1,sectionProjectInfoDescription_1,sectionProjectInfoDescription_2),sectionChangeContent.sectionSimpleInfoChange(sectionProject_2,sectionProjectImage_2,sectionProjectImage_3,scrollMarkerProject_2,sectionProjectInfoDescription_2,sectionProjectInfoDescription_3),sectionChangeContent.sectionSimpleInfoChange(sectionProject_3,sectionProjectImage_3,sectionProjectImage_4,scrollMarkerProject_3,sectionProjectInfoDescription_3,sectionProjectInfoDescription_4),sectionChangeContent.sectionSimpleInfoChange(sectionProject_4,sectionProjectImage_4,sectionProjectImage_5,scrollMarkerProject_4,sectionProjectInfoDescription_4,sectionProjectInfoDescription_5),sectionChangeContent.sectionSimpleInfoChange(sectionProject_5,sectionProjectImage_5,sectionProjectImage_6,scrollMarkerProject_5,sectionProjectInfoDescription_5,sectionProjectInfoDescription_6),sectionChangeContent.sectionSimpleInfoChange(sectionProject_6,sectionProjectImage_6,sectionProjectImage_7,scrollMarkerProject_6,sectionProjectInfoDescription_6,sectionProjectInfoDescription_7),sectionChangeContent.sectionSimpleInfoChange(sectionProject_7,sectionProjectImage_7,sectionProjectImage_8,scrollMarkerProject_7,sectionProjectInfoDescription_7,sectionProjectInfoDescription_8),sectionChangeContent.sectionSimpleInfoChange(sectionProject_8,sectionProjectImage_8,sectionProjectImage_9,scrollMarkerProject_8,sectionProjectInfoDescription_8,sectionProjectInfoDescription_9),sectionChangeContent.sectionSimpleInfoChange(sectionProject_9,sectionProjectImage_9,sectionProjectImage_10,scrollMarkerProject_9,sectionProjectInfoDescription_9,sectionProjectInfoDescription_10),sectionChangeContent.sectionSimpleInfoChange(sectionProject_10,sectionProjectImage_10,sectionProjectImage_11,scrollMarkerProject_10,sectionProjectInfoDescription_10,sectionProjectInfoDescription_11),sectionChangeContent.sectionSimpleInfoChange(sectionProject_11,sectionProjectImage_11,sectionProjectImage_12,scrollMarkerProject_11,sectionProjectInfoDescription_11,sectionProjectInfoDescription_12)}function keyLock(){document.addEventListener("keydown",(e=>{"PageDown"!==e.key&&"PageUp"!==e.key&&"Home"!==e.key&&"End"!==e.key||location.reload()}),!0)}function initPage(){keyLock(),scrollSmooth(),reloadWindowResize(),sectionProjectsAnimLoad()}function initPageMobile(){}document.body.clientWidth>820||screen.width>820?initPage():initPageMobile();