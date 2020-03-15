import { TweenLite, Power3 } from 'gsap';

export const rotateArrow = (arrow: HTMLDivElement) => {
  TweenLite.to(arrow, 0.4, {
    rotation: '360_cw',
    opacity: 0.3,
    ease: Power3.easeOut
  });
};

export const backRotateArrow = (arrow: HTMLDivElement) => {
  TweenLite.to(arrow, 0.4, {
    rotation: '180_cw',
    opacity: 0.3,
    ease: Power3.easeOut
  });
};
