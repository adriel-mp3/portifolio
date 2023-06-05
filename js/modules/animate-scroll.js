import debounce from './debounce.js';

export default class AnimateScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.halfWindowHeight = window.innerHeight * 0.5;
    this.checkDistance = debounce(this.checkDistance.bind(this), 50);
  }

  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const sectionTop = Math.floor(section.offsetTop - this.halfWindowHeight);

      return {
        element: section,
        offset: sectionTop,
      };
    });
  }

  checkDistance() {
    this.distance.forEach((section) => {
      const isSectionActive = section.element.classList.contains('active');
      const isSectionVisible = (window.pageYOffset > section.offset);

      if (isSectionVisible) {
        section.element.classList.add('active');
      } else if (isSectionActive) {
        section.element.classList.remove('active');
      }
    });
  }

  addScrollEvent() {
    window.addEventListener('scroll', this.checkDistance);
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      this.addScrollEvent();
    }
    return this;
  }
}