import { TweenLite, Power3 } from 'gsap';

export default (banner: HTMLDivElement) => {
  TweenLite.from(banner, 0.7, {
    bottom: -150,
    ease: Power3.easeInOut,
  });
};
