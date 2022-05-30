export class HamburgerService {
  constructor() {
    this.nav = document.querySelector('.primary-navigation');
    this.mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  }

  setAriaExpanded(isVisible) {
    if (isVisible) {
      this.mobileNavToggle.setAttribute('aria-expanded', 'true');
    } else {
      this.mobileNavToggle.setAttribute('aria-expanded', 'false');
    }
  }

  toggle() {
    this.mobileNavToggle.addEventListener('click', () => {
      const visibility = this.nav.getAttribute('data-is-visible');
      // if the menu is closed, open it
      if (visibility === 'false') {
        this.nav.setAttribute('data-is-visible', 'true');
        this.setAriaExpanded(true);
      } else {
        this.nav.setAttribute('data-is-visible', 'false');
        this.setAriaExpanded(false);
      }
    });
  }
}
