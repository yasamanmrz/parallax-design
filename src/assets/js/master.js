


// =============================
// SWIPER
// =============================

const cubeSwiper = new Swiper(".cubeSwiper", {
  effect: "cube",
  loop: true,
  speed: 1000,
  grabCursor: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
});

const cardSwiper = new Swiper(".cardSwiper", {
  effect: "cards",
  speed: 1000,
  grabCursor: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  cardsEffect: {
    slideShadows: true,
  },
});

const flipSwiper = new Swiper(".flipSwiper", {
  effect: "flip",
  loop: true,
  speed: 1000,
  grabCursor: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  flipEffect: {
    slideShadows: true,
  },
});



console.clear();

gsap.registerPlugin(ScrollTrigger, TextPlugin);

window.addEventListener("load", () => {

  // ==============================
  // ELEMENTS
  // ==============================

  const wrapper = document.querySelector(".wrapper");
  const homeImage = document.querySelector(".image-container");

  const title = document.querySelector("#heroTitle");

  const cards = [
    document.querySelector(".card-1"),
    document.querySelector(".card-2"),
    document.querySelector(".card-3"),
    document.querySelector(".card-4")
  ];

  const cardTitles = document.querySelectorAll(".card-title");

  const finalSection = document.querySelector(".image-text-section");
  const finalImage = document.querySelector(".final-image");
  const finalText = document.querySelector(".text-reveal");


  // ==============================
  // TEXTS
  // ==============================

  const mainText = "PARALLAX DESIGN";

  const texts = [
    "CREATIVE",
    "MOTION",
    "DIGITAL",
    "EXPERIENCE"
  ];


  // ==============================
  // INITIAL STATES
  // ==============================

  // Home image
  gsap.set(homeImage, {
    scale: 1,
    opacity: 1,
    transformOrigin: "center center",
    zIndex: 20
  });


  // Main title
  gsap.set(title, {
    text: ""
  });


  // Cards
  gsap.set(cards, {
    opacity: 0
  });


  // Card titles
  gsap.set(cardTitles, {
    text: ""
  });


  // ==============================
  // FINAL SECTION
  // ==============================

  gsap.set(finalSection, {
    opacity: 0,
    zIndex: 60
  });


  // Final image
  gsap.set(finalImage, {
    x: 0,
    opacity: 1
  });


  // Final text container
  gsap.set(".home-text", {
    x: 0,
    opacity: 1
  });


  // ==============================
  // SPLIT TEXT INTO WORDS
  // ==============================

  const words = finalText.textContent
    .trim()
    .split(/\s+/);


  finalText.innerHTML = words
    .map(word => `<span class="word">${word}</span>`)
    .join(" ");


  // Hide all words initially
  gsap.set(".word", {
    opacity: 0,
    y: 25
  });


  // ==============================
  // MAIN SCROLL TIMELINE
  // ==============================

  const tl = gsap.timeline({

    scrollTrigger: {

      trigger: wrapper,

      start: "top top",

      end: "+=9000",

      pin: wrapper,

      pinSpacing: true,

      scrub: 1,

      anticipatePin: 1,

      markers: false

    }

  });


  // ==============================
  // HOME IMAGE ZOOM
  // ==============================

  tl.to(homeImage, {

    scale: 1.8,

    duration: 3,

    transformOrigin: "center center",

    ease: "power2.inOut"

  });


  // ==============================
  // HOME IMAGE FADE
  // ==============================

  tl.to(homeImage, {

    opacity: 0,

    duration: 1

  });


  // ==============================
  // MAIN TITLE
  // ==============================

  tl.to(title, {

    text: mainText,

    duration: 5,

    ease: "none"

  });


  // ==============================
  // PAUSE
  // ==============================

  tl.to({}, {

    duration: 2

  });


  // ==============================
  // CARD 1
  // ==============================

  tl.fromTo(
    cards[0],

    {
      x: "-120vw",
      opacity: 0
    },

    {
      x: "0vw",
      opacity: 1,
      duration: 2,
      ease: "power3.out"
    }
  );


  tl.to(cardTitles[0], {

    text: texts[0],

    duration: 3,

    ease: "none"

  });


  tl.to(cards[0], {

    x: "-120vw",
    opacity: 0,

    duration: 1.5,

    ease: "power3.in"

  });


  // ==============================
  // CARD 2
  // ==============================

  tl.fromTo(
    cards[1],

    {
      x: "120vw",
      opacity: 0
    },

    {
      x: "0vw",
      opacity: 1,
      duration: 2,
      ease: "power3.out"
    }
  );


  tl.to(cardTitles[1], {

    text: texts[1],

    duration: 3,

    ease: "none"

  });


  tl.to(cards[1], {

    x: "120vw",
    opacity: 0,

    duration: 1.5,

    ease: "power3.in"

  });


  // ==============================
  // CARD 3
  // ==============================

  tl.fromTo(
    cards[2],

    {
      x: "-120vw",
      opacity: 0
    },

    {
      x: "0vw",
      opacity: 1,
      duration: 2,
      ease: "power3.out"
    }
  );


  tl.to(cardTitles[2], {

    text: texts[2],

    duration: 3,

    ease: "none"

  });


  tl.to(cards[2], {

    x: "-120vw",
    opacity: 0,

    duration: 1.5,

    ease: "power3.in"

  });


  // ==============================
  // CARD 4
  // ==============================

  tl.fromTo(
    cards[3],

    {
      x: "120vw",
      opacity: 0
    },

    {
      x: "0vw",
      opacity: 1,
      duration: 2,
      ease: "power3.out"
    }
  );


  tl.to(cardTitles[3], {

    text: texts[3],

    duration: 3,

    ease: "none"

  });


  // ==============================
  // FINAL SECTION APPEARS
  // ==============================

  tl.to(finalSection, {

    opacity: 1,

    duration: 1,

    ease: "none"

  });


  // ==============================
  // WORD BY WORD TEXT
  // ==============================

  tl.to(".word", {

    opacity: 1,

    y: 0,

    duration: 0.7,

    stagger: 0.3,

    ease: "none"

  });


  // ==============================
  // FINAL PAUSE
  // ==============================

  tl.to({}, {

    duration: 3

  });


  ScrollTrigger.refresh()

});








