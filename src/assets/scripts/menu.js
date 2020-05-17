import { getFocusables } from './utils';

const KEY_CODES = {
  ARROW_LEFT: 37,
  ARROW_RIGHT: 39,
  ESCAPE: 27,
  TAB: 9,
  SPACE: 32,
  ENTER: 13,
};

class Menu {
  constructor() {
    this.toggleBtn = document.querySelector('.js-menu-toggle');
    this.menu = document.querySelector('.js-menu');
    this.isMenuOpen = false;
    this.init();
  }

  get focusables() {
    return [this.toggleBtn, ...getFocusables(this.menu)];
  }

  get firstFocusable() {
    return this.focusables[0];
  }

  get lastFocusable() {
    return this.focusables[this.focusables.length - 1];
  }

  init() {
    this.toggleBtn.addEventListener('click', () => this.onToggleClick());
    this.menu.addEventListener('keydown', e => this.onKeydown(e));
  }

  onToggleClick() {
    if (!this.isMenuOpen) {
      this.open();
    } else {
      this.close();
    }
  }

  open() {
    this.isMenuOpen = true;
    this.toggleBtn.classList.add('active');
    this.menu.classList.add('active');
    this.menu.setAttribute('aria-hidden', false);
    this.toggleBtn.focus();
  }

  close() {
    this.isMenuOpen = false;
    this.toggleBtn.classList.remove('active');
    this.menu.classList.remove('active');
    this.menu.setAttribute('aria-hidden', true);
  }

  handleBackwardTab(evt) {
    if (document.activeElement === this.firstFocusable) {
      evt.preventDefault();
      this.lastFocusable.focus();
    }
  }

  handleForwardTab(evt) {
    if (document.activeElement === this.lastFocusable) {
      evt.preventDefault();
      this.firstFocusable.focus();
    }
  }

  onKeydown(e) {
    switch (e.keyCode) {
      case KEY_CODES.ESCAPE: {
        this.close();
        break;
      }

      case KEY_CODES.TAB: {
        if (e.shiftKey) {
          this.handleBackwardTab(e);
        } else {
          this.handleForwardTab(e);
        }
        break;
      }

      default: {
        break;
      }
    }
  }
}

export default Menu;
