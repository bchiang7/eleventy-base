class Menu {
  constructor() {
    this.toggleBtn = document.querySelector('.js-menu-toggle');
    this.menu = document.querySelector('.js-menu');
    this.isMenuOpen = false;

    this.init();
  }

  init() {
    this.toggleBtn.addEventListener('click', () => this.onToggleClick());
  }

  onToggleClick() {
    this.isMenuOpen = !this.isMenuOpen;
    this.toggleBtn.classList.toggle('active', this.isMenuOpen);
    this.menu.classList.toggle('active', this.isMenuOpen);
    this.menu.setAttribute('aria-hidden', !this.isMenuOpen);
  }
}

export default Menu;
