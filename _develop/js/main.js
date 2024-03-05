'use strict';

// Animation front section
const
    sectionFront_0 = document.getElementById('sectionFront_0'),
    sectionFront_1 = document.getElementById('sectionFront_1'),
    sectionFront_2 = document.getElementById('sectionFront_2'),
    sectionFront_3 = document.getElementById('sectionFront_3'),
    sectionFront_4 = document.getElementById('sectionFront_4'),
    sectionFront_5 = document.getElementById('sectionFront_5'),
    sectionFrontTopImage = document.querySelector('.section-top__image'),
    sectionFrontTopMask = document.querySelector('.section-top__mask'),
    sectionFrontTopMaskOver = document.querySelector('.section-top__mask_over'),
    sectionFrontImage_0 = document.getElementById('sectionFrontImage_0'),
    sectionFrontImage_1 = document.getElementById('sectionFrontImage_1'),
    sectionFrontImage_2 = document.getElementById('sectionFrontImage_2'),
    sectionFrontImage_3 = document.getElementById('sectionFrontImage_3'),
    sectionFrontImage_4 = document.getElementById('sectionFrontImage_4'),
    sectionTopTitle = document.querySelector('.section-top__title'),
    sectionTitle_1 = document.getElementById('sectionTitle_1'),
    sectionTitle_2 = document.getElementById('sectionTitle_2'),
    sectionTitle_3 = document.getElementById('sectionTitle_3'),
    sectionTitle_4 = document.getElementById('sectionTitle_4'),
    sectionTitleLine = document.querySelector('.section-title__line'),
    sectionTopText = document.getElementById('sectionTopText'),
    sectionParkText = document.getElementById('sectionParkText'),
    scrollMarkerTop = document.getElementById('scrollMarkerTop'),
    scrollMarkerFirst = document.getElementById('scrollMarkerFirst'),
    scrollMarkerSecond = document.getElementById('scrollMarkerSecond'),
    scrollMarkerThird = document.getElementById('scrollMarkerThird')
;

function sectionTopMove() {

    let tl = new gsap.timeline({
        scrollTrigger: {
            trigger: sectionFront_0,
            scroller: wrapper,
            scrub: true,
            // pin: true,
            start: "top 96px",
            end: "bottom top",
            toggleActions: "play none none reverse",
            // markers: {
            // 	startColor: "#ccc",
            // 	endColor: "#ccc"
            // }
        },
        onStart: () => {
            tl.set(scrollMarkerTop, {
                backgroundColor: '#f2a07c'
            })
        }
    });

    tl
        .to(sectionFrontTopImage, {
            left: "-13.5rem",
            width: "70vw",
            delay: "-0.2"
        })
        .to(sectionFrontTopMaskOver, {
            // skewX: '0deg',
            // left: "-17vw",
            autoAlpha: 0,
            duration: "1",
            delay: "-0.6",
            ease: 'power3.out'
        })
        .to(sectionFrontTopMask, {
            // width: "40vw",
            // autoAlpha: 0,
            left: "-13rem",
            duration: "1",
            delay: "-0.9",
            ease: 'power3.out'
        })
        .from(sectionTitleLine, {
            left: "100vw",
            autoAlpha: 0,
            delay: "-0.9"
        })
        .from(sectionTopText, {
            x: '5vw',
            autoAlpha: 0,
            delay: "-0.8"
        })
        .to(sectionFrontImage_0, {
            left: "-22vw",
            // autoAlpha: 0,
            duration: "1",
            delay: "-1"
        })
        .to(sectionTopTitle, {
            autoAlpha: 0,
            delay: "-1"
        })
    ;

    ScrollTrigger.refresh();
}

function sectionTwoMove() {

    let tl = new gsap.timeline({
        scrollTrigger: {
            trigger: sectionFront_1,
            scroller: wrapper,
            scrub: false,
            // pin: true,
            start: "top top",
            end: "100% top",
            toggleActions: "play none none reverse",
            // markers: {
            //     startColor: "#ccc",
            //     endColor: "#ccc"
            // }
        },
        delay: "-1.3"
    });

    tl
        .to(sectionTopText, {
            x: '-2vw',
            autoAlpha: 0,
            delay: "-0.1"
        })
        // .fromTo(sectionParkText,
        //     {
        //         x: '2vw',
        //         autoAlpha: 0
        //     },
        //     {
        //         x: '0',
        //         autoAlpha: 1,
        //         delay: "-0.4"
        //     }
        // )
        .fromTo(sectionFrontImage_1,
            {
                left: "2vw",
                autoAlpha: 0
            },
            {
                left: "0",
                autoAlpha: 1,
                ease: "sine.inOut"
            }
        )
        .to(sectionFrontImage_0, {
            // left: "-=3vw",
            ease: "sine.inOut",
            delay: "-0.8"
        })
        .fromTo(sectionTitle_1,
            {
                right: '0',
                autoAlpha: 0
            },
            {
                right: '11vw',
                autoAlpha: 1,
                duration: "0.6",
                delay: "-0.4"
            }
        )
    ;

    ScrollTrigger.refresh();
}

function sectionThreeMove() {

    let tl = new gsap.timeline({
        scrollTrigger: {
            trigger: sectionFront_2,
            scroller: wrapper,
            scrub: false,
            // pin: true,
            start: "top top",
            end: "100% top",
            toggleActions: "play none none reverse",
            // markers: {
            //     startColor: "#ccc",
            //     endColor: "#ccc"
            // }
        },
        delay: "-1.3",
        onStart: () => {
            tl.set(scrollMarkerFirst, {
                backgroundColor: '#f2a07c'
            })
        }
    });

    tl
        // .to(sectionParkText, {
        //     x: '-2vw',
        //     autoAlpha: 0,
        //     delay: "-0.1"
        // })
        .fromTo(sectionFrontImage_2,
            {
                left: "3vw",
                autoAlpha: 0
            },
            {
                left: "0",
                autoAlpha: 1,
                ease: "sine.inOut"
            }
        )
        .to(sectionFrontImage_1, {
            left: "-=3vw",
            ease: "sine.inOut",
            delay: "-0.6"
        })
        .to(sectionTitle_1,
            {
                right: '15vw',
                autoAlpha: 0,
                duration: "0.4",
                delay: "-0.4",
                ease: "sine.inOut"
            }
        )
        .fromTo(sectionTitle_2,
            {
                right: '0',
                autoAlpha: 0,
                delay: "-0.4"
            },
            {
                right: '11vw',
                autoAlpha: 1,
                duration: "0.3",
                delay: "-0.4"
            }
        )
    ;

    ScrollTrigger.refresh();
}

function sectionFourMove() {

    let tl = new gsap.timeline({
        scrollTrigger: {
            trigger: sectionFront_3,
            scroller: wrapper,
            scrub: false,
            // pin: true,
            start: "top top",
            end: "100% top",
            toggleActions: "play none none reverse",
            // markers: {
            //     startColor: "#ccc",
            //     endColor: "#ccc"
            // }
        },
        delay: "-1.3",
        onStart: () => {
            tl.set(scrollMarkerSecond, {
                backgroundColor: '#f2a07c'
            })
        }
    });

    tl
        .fromTo(sectionFrontImage_3,
            {
                left: "3vw",
                autoAlpha: 0
            },
            {
                left: "0",
                autoAlpha: 1
            }
        )
        .to(sectionFrontImage_2, {
            left: "-=3vw",
            ease: "sine.inOut",
            delay: "-0.6"
        })
        .to(sectionTitle_2, {
                right: '15vw',
                autoAlpha: 0,
                duration: "0.2",
                delay: "-0.4"
            }
        )
        .fromTo(sectionTitle_3, {
                right: '0',
                autoAlpha: 0
            },
            {
                right: '11vw',
                autoAlpha: 1,
                duration: "0.3",
                delay: "-0.4"
            }
        )
    ;

    ScrollTrigger.refresh();
}

function sectionFiveMove() {

    let tl = new gsap.timeline({
        scrollTrigger: {
            trigger: sectionFront_4,
            scroller: wrapper,
            scrub: false,
            // pin: true,
            start: "top top",
            end: "100% top",
            toggleActions: "play none none reverse",
            // markers: {
            //     startColor: "#ccc",
            //     endColor: "#ccc"
            // }
        },
        delay: "-1.3",
        onStart: () => {
            tl.set(scrollMarkerThird, {
                backgroundColor: '#f2a07c'
            })
        }
    });

    tl
        .fromTo(sectionFrontImage_4,
            {
                left: "3vw",
                autoAlpha: 0
            },
            {
                left: "0",
                autoAlpha: 1
            }
        )
        .to(sectionFrontImage_3, {
            left: "-=3vw",
            ease: "sine.inOut",
            delay: "-0.6"
        })
        .to(sectionTitle_3, {
                right: '15vw',
                autoAlpha: 0,
                duration: "0.2",
                delay: "-0.4"
            }
        )
        .fromTo(sectionTitle_4, {
                right: '0',
                autoAlpha: 0
            },
            {
                right: '11vw',
                autoAlpha: 1,
                duration: "0.3",
                delay: "-0.4"
            }
        )
    ;

    ScrollTrigger.refresh();
}

function sectionSixMove() {

    let tl = new gsap.timeline({
        scrollTrigger: {
            trigger: sectionFront_5,
            scroller: wrapper,
            scrub: true,
            // pin: true,
            start: "top top",
            end: "50% top",
            toggleActions: "play none none reverse",
            // markers: {
            //     startColor: "#ccc",
            //     endColor: "#ccc"
            // }
        },
        delay: "-1.3",
        onStart: () => {
            tl.set(scrollMarkerThird, {
                backgroundColor: '#f2a07c'
            })
        }
    });

    tl
        .to(sectionTitleLine, {
            left: "100vw",
            autoAlpha: 0,
            delay: "-0.6"
        })
        .to(sectionTitle_4, {
                right: '0',
                autoAlpha: 0,
                duration: "0.2",
                delay: "-0.6"
            }
        )
        .to(sectionFrontImage_4, {
                left: "0",
                width: "118vw",
                delay: "-0.6"
            }
        )
        .to(sectionFrontTopImage, {
                left: "-10.5rem",
                width: "127vw",
                // height: "70vh",
                delay: "-0.6"
            }
        )
    ;

    ScrollTrigger.refresh();
}

function sectionScrollTo() {
    scrollMarkerTop.addEventListener('click', () => {
        locoScroll.scrollTo(sectionFront_1);
    });
    scrollMarkerFirst.addEventListener('click', () => {
        locoScroll.scrollTo(sectionFront_2);
    });
    scrollMarkerSecond.addEventListener('click', () => {
        locoScroll.scrollTo(sectionFront_3);
    });
    scrollMarkerThird.addEventListener('click', () => {
        locoScroll.scrollTo(sectionFront_4);
    });
}

/*==================================================
=                   Mobile Section                 =
==================================================*/

function scrollSmoothMobile() {
    const wrapperMobile = document.querySelector('.wrapper-mobile');
    const locoScroll = new LocomotiveScroll({
        el: wrapperMobile,
        smooth: true,
        multiplier: 0.3
    });
}

/*===========  End of Mobile Section  ============*/

function initMain() {
    sectionTopMove();
    sectionTwoMove();
    sectionThreeMove();
    sectionFourMove();
    sectionFiveMove();
    sectionSixMove();
    // sectionScrollTo();
}

function initMainMobile() {
    // scrollSmoothMobile();
}

if (document.body.clientWidth > 820 || screen.width > 820) {
    initMain();
} else {
    initMainMobile();
}