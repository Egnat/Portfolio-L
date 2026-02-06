//МАСКА ФОТО В САЙДБАРЕ
gsap.registerPlugin(MorphSVGPlugin);

document.addEventListener("DOMContentLoaded", () => {
  const tl = gsap.timeline({
    repeat: -1,
    yoyo: true,
    defaults: { ease: "power1.inOut" }
  });

  tl.to("#path", {
    duration: 7,
    morphSVG: "#morphShape",
    shapeIndex: "auto" // можно добавить, если морф выглядит странно. С этой штукой волна плавнее
  });
});
//МАСКА ФОТО В САЙДБАРЕ///