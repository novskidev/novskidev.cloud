import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimationOptions {
  trigger?: string | Element;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  toggleActions?: string;
  markers?: boolean;
}

export const useScrollAnimation = <T extends HTMLElement = HTMLElement>(
  animationCallback: (element: T) => gsap.core.Timeline | gsap.core.Tween,
  options: ScrollAnimationOptions = {}
) => {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    const ctx = gsap.context(() => {
      const animation = animationCallback(element);

      ScrollTrigger.create({
        trigger: options.trigger || element,
        start: options.start || 'top 80%',
        end: options.end || 'bottom 20%',
        scrub: options.scrub ?? false,
        toggleActions: options.toggleActions || 'play none none reverse',
        markers: options.markers ?? false,
        animation: animation as gsap.core.Animation,
      });
    }, elementRef);

    return () => ctx.revert();
  }, [animationCallback, options]);

  return elementRef;
};

export const useFadeInUp = (options: ScrollAnimationOptions = {}) => {
  return useScrollAnimation((element) => {
    return gsap.from(element, {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    });
  }, options);
};

export const useFadeInStagger = <T extends HTMLElement = HTMLDivElement>(selector: string, options: ScrollAnimationOptions = {}) => {
  const containerRef = useRef<T>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(selector, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: options.start || 'top 75%',
          end: options.end || 'bottom 20%',
          toggleActions: options.toggleActions || 'play none none reverse',
          markers: options.markers ?? false,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [selector, options]);

  return containerRef;
};

export const useScaleIn = (options: ScrollAnimationOptions = {}) => {
  return useScrollAnimation((element) => {
    return gsap.from(element, {
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: 'back.out(1.7)',
    });
  }, options);
};

export const useSlideIn = (direction: 'left' | 'right' = 'left', options: ScrollAnimationOptions = {}) => {
  return useScrollAnimation((element) => {
    return gsap.from(element, {
      x: direction === 'left' ? -100 : 100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    });
  }, options);
};
