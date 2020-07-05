import { TweenLite, Power3 } from 'gsap';

export default (element: HTMLDivElement) => {
  TweenLite.to(element, 0.4, {
    opacity: 0,
    display: 'none',
    ease: Power3.easeInOut,
  });
};
