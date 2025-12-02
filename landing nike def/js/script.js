const heroAnim = lottie.loadAnimation({
  container: document.getElementById('hero-lottie'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'animations/landing-nike-def.json'
});
gsap.registerPlugin(ScrollTrigger);

// TEXTO
gsap.fromTo(".air-text",
  { x: -200, opacity: 0 },
  {
    x: 0,
    opacity: 1,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#air-tech",
      start: "top 80%",
      end: "top 30%",   
      scrub: true,      // <--- permite que al subir se revierta
    }
  }
);

// IMAGEN
gsap.fromTo(".air-img",
  { x: 200, opacity: 0 },
  {
    x: 0,
    opacity: 1,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#air-tech",
      start: "top 80%",
      end: "top 30%",
      scrub: true,      // <--- hace efecto reversible
    }
  }
);

