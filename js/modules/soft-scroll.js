export default class SoftScroll {
  constructor(links, options) {
    this.internalLinks = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = { behavior: 'smooth', block: 'start' };
    } else {
      this.options = options;
      this.options.block = 'start';
    }
    this.scrollToSection = this.scrollToSection.bind(this);
  }

  scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    const headerHeight = 74; 
    const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
    const scrollPosition = sectionTop - headerHeight;

    window.scrollTo({
      top: scrollPosition,
      behavior: this.options.behavior,
    });
  }

  addLinkEvent() {
    this.internalLinks.forEach((link) => {
      link.addEventListener('click', this.scrollToSection);
    });
  }

  init() {
    if (this.internalLinks) {
      this.addLinkEvent();
    }
    return this;
  }
}