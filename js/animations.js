const mobileScreen = window.matchMedia('(min-width: 480px');
const tabletScreen = window.matchMedia('(min-width: 768px');
const desctopScreen = window.matchMedia('(min-width: 1280px');

// if (mobileScreen.matches) {
// }

gsap.registerPlugin(ScrollTrigger);

//Initial values
gsap.set('.hero-section-button', { opacity: 0, y: 20 });

// Header (nav & button) animation
gsap.fromTo(
  '.header-container',
  { opacity: 0 },
  {
    opacity: 1,
  }
);
function mobileNavAmimation() {
  gsap.from('.mobile-menu-list li', {
    duration: 0.5,
    opacity: 0,
    y: 50,
    stagger: 0.1,
  });
}
// Hero title animation
const tlHero = gsap.timeline();
tlHero
  .fromTo('.hero-title', { opacity: 0 }, { opacity: 1, duration: 1 }, 0.3)
  .to('.hero-section-button', { opacity: 1, y: 0, duration: 0.7 });

// Sections on scroll appearence
let sections = gsap.utils.toArray('.section');
sections.forEach((item) =>
  gsap.fromTo(
    item,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: item,
        start: 'top+=96 bottom',
        end: '+=500',
        scrub: true,
      },
    }
  )
);

/*
    TRADITIONS
  */
// Tradition image (baker) animations
gsap.fromTo(
  '.traditions-image',
  { x: +80, y: +200 },
  {
    x: 0,
    y: 0,
    scrollTrigger: {
      trigger: '.traditions-section',
      start: 'start+=50 bottom-=50',
      end: 'center center',
      scrub: true,
    },
  }
);
var tlTraditions = gsap.timeline({
  scrollTrigger: {
    trigger: '.traditions-title',
    start: 'start bottom',
    // markers: true,
  },
});
//traditions title
tlTraditions.fromTo(
  '.traditions-title',
  { opacity: 0, x: -20 },
  {
    opacity: 1,
    x: 0,
  }
);
//traditions text
let traditionsText = gsap.utils.toArray('.traditions-text');
traditionsText.forEach((item, index) =>
  tlTraditions.fromTo(
    item,
    { opacity: 0, x: 30 },
    {
      opacity: 1,
      x: 0,
      duration: 0.5,
    }
  )
);

/*
    CHEFS
  */
let chefs = gsap.utils.toArray('.chefs-item');

var tlChef = gsap.timeline({
  scrollTrigger: {
    trigger: '.chef-title',
    start: 'start+=100 bottom',
    // Delete for prevent repeat
    toggleActions: 'restart none none none',
  },
});
tlChef.fromTo(
  '.chef-title',
  { opacity: 0, x: -50 },
  {
    opacity: 1,
    x: 0,
  }
);

chefs.forEach((item) => tlChef.fromTo(item, { opacity: 0 }, { opacity: 1 }));

/*
    FORMATS
  */

var tlformats = gsap.timeline({
  scrollTrigger: {
    trigger: '.format-section',
    start: 'start bottom',
    // Delete for prevent repeat
    toggleActions: 'restart none none none',
  },
  delay: 0.4,
});
tlformats
  .fromTo(
    '.format-title',
    { opacity: 0, x: -50 },
    {
      opacity: 1,
      x: 0,
    }
  )
  .fromTo('.swiper-slide', { opacity: 0 }, { opacity: 1, stagger: 0.4 })
  .fromTo(
    '.format-card__text',
    { opacity: 0, scale: 0.6 },
    {
      opacity: 1,
      scale: 1,
      stagger: 0.4,
      delay: !desctopScreen.matches ? -1.6 : -2,
    }
  );
