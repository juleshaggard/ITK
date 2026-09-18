import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initDirectionalNavigation = () => {
  const navbar = document.querySelector('.navbar-new');
  const menuButton = navbar?.querySelector('.menu-button-new');

  if (!navbar || navbar.dataset.directionalNavigation === 'ready') return;

  navbar.dataset.directionalNavigation = 'ready';

  const topThreshold = 32;
  let currentState = '';

  const setState = (state) => {
    if (state === currentState) return;

    currentState = state;
    navbar.classList.toggle('is-scroll-hidden', state === 'hidden');
    navbar.classList.toggle('is-scroll-revealed', state === 'revealed');
  };

  const menuIsOpen = () => menuButton?.getAttribute('aria-expanded') === 'true';
  const syncForPosition = (scrollPosition = window.scrollY) => {
    setState(scrollPosition <= topThreshold ? 'top' : 'revealed');
  };

  syncForPosition();

  const navigationTrigger = ScrollTrigger.create({
    id: 'directional-navigation',
    start: 0,
    end: () => ScrollTrigger.maxScroll(window),
    onUpdate: (self) => {
      const scrollPosition = self.scroll();

      if (scrollPosition <= topThreshold) {
        setState('top');
        return;
      }

      if (menuIsOpen()) {
        setState('revealed');
        return;
      }

      if (self.direction > 0 && scrollPosition > navbar.offsetHeight) {
        setState('hidden');
      } else if (self.direction < 0) {
        setState('revealed');
      }
    },
  });

  const menuObserver = menuButton
    ? new MutationObserver(() => {
        if (menuIsOpen()) setState('revealed');
      })
    : null;

  menuObserver?.observe(menuButton, {
    attributes: true,
    attributeFilter: ['aria-expanded'],
  });

  const handlePageShow = () => syncForPosition();
  window.addEventListener('pageshow', handlePageShow);

  return () => {
    navigationTrigger.kill();
    menuObserver?.disconnect();
    window.removeEventListener('pageshow', handlePageShow);
  };
};
