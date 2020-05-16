class ExternalLinks {
  constructor() {
    this.initLinks();
  }

  initLinks() {
    // Sets target="_blank" rel="noopener noreferrer" on external links
    const allLinks = Array.from(document.querySelectorAll('a'));

    if (allLinks.length > 0) {
      allLinks.forEach(link => {
        if (link.host !== window.location.host) {
          link.setAttribute('rel', 'noopener noreferrer');
          link.setAttribute('target', '_blank');
        }
      });
    }
  }
}

export default ExternalLinks;
