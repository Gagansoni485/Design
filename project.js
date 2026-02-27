function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}
init();

/* ── Custom cursor (desktop only) ── */
var crsr = document.querySelector(".cursor");

document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + 20 + "px";
    crsr.style.top  = dets.y + 80 + "px";
});

/* ── Page 1 scroll animation ── */
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        start: "top 27%",
        end: "top 0",
        scrub: 3
    }
});
tl.to(".page1 h1",    { x: -100 }, "anim");
tl.to(".page1 h2",    { x:  100 }, "anim");
tl.to(".page1 video", { width: "90%" }, "anim");

/* ── Background colour transitions ── */
var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        start: "top -115%",
        end:   "top -120%",
        scrub: 3
    }
});
tl2.to(".main", { backgroundColor: "#fff" });

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        start: "top -280%",
        end:   "top -300%",
        scrub: 3
    }
});
tl3.to(".main", { backgroundColor: "#0F0D0D" });

/* ── Page 5 cursor image on box hover ── */
var boxes = document.querySelectorAll(".box");
boxes.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        var att = elem.getAttribute("data-image");
        crsr.style.width           = "450px";
        crsr.style.height          = "370px";
        crsr.style.borderRadius    = "0";
        crsr.style.backgroundImage = `url(${att})`;
    });
    elem.addEventListener("mouseleave", function () {
        crsr.style.width           = "20px";
        crsr.style.height          = "20px";
        crsr.style.borderRadius    = "50%";
        crsr.style.backgroundImage = "none";
    });
});

/* ── Nav purple overlay (typo fixed: stylr → style) ── */
var h4elems = document.querySelectorAll("#nav h4");
var purple  = document.querySelector("#purple");

h4elems.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        purple.style.display = "block";
        purple.style.opacity = "1";
    });
    elem.addEventListener("mouseleave", function () {
        purple.style.display = "none";
        purple.style.opacity = "0";
    });
});