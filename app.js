const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');

// END SECTION
const section = document.querySelector('section');
const end = section.querySelector('h1');

// ScrollMagic
const controller = new ScrollMagic.Controller();

// Scenes

// let scene = new ScrollMagic.Scene({
//   duration: 6000,
//   triggerElement: intro,
//   triggerHook:0
// })
// .addIndicators()
// .setPin(intro)
// .addTo(controller);

let scene = new ScrollMagic.Scene({
  duration: 6000,
  triggerElement: intro,
  triggerHook: 0
})
.setPin(intro)
.addTo(controller);

// Text Animation
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1}, { opacity: 0 });

let sceneTwo = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: intro,
  triggerHook: 0
})
.setTween(textAnim)
.addTo(controller);

// Video Animation
let accelAmount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on('update', e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelAmount;
  console.log(scrollpos, delay);

  video.currentTime = delay;
}, 33.3);