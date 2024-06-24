// gsap.to("#box1", {
//   x: 1000,
//   duration: 2,
//   delay: 1,
//   rotate: 360,
//   backgroundColor: "blue",
//   borderRadius: "50%",
//   scale: 0.5,
//   repeat: -1,
//   yoyo: true,
// });

// gsap.to("#box2", {
//   x: 1000,
//   duration: 2,
//   delay: 1,
//   rotate: 360,
//   backgroundColor: "yellow",
//   borderRadius: "50%",
//   scale: 0.5,
//   repeat: -1,
//   yoyo: true,
// });

// gsap.to("#box3", {
//   x: 1000,
//   duration: 2,
//   delay: 1,
//   rotate: 360,
//   backgroundColor: "red",
//   borderRadius: "50%",
//   scale: 0.5,
//   repeat: -1,
//   yoyo: true,
// });

// gsap.to("h1", {
//   opacity: 0,
//   duration: 1,
//   delay: 1,
//   stagger: 0.3,
// });

let tl = gsap.timeline();
tl.to("#box1", {
  x: 1000,
  y: 500,
  duration: 2,
  delay: 1,
  rotate: 360,
  backgroundColor: "cyan",
  borderRadius: "50%",
  scale: 0.5,
  repeat: -1,
  yoyo: true,
});

tl.to("#box2", {
  x: 1350,
  y: 125,
  duration: 2,
  rotate: 360,
  backgroundColor: "yellow",
  borderRadius: "50%",
  scale: 0.5,
  repeat: -1,
  yoyo: true,
});
tl.to("#box3", {
  x: 1000,
  y: -500,
  duration: 2,
  rotate: 360,
  backgroundColor: "purple",
  borderRadius: "50%",
  scale: 0.5,
  repeat: -1,
  yoyo: true,
});
