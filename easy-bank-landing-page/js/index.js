function init() {
  const menuToggle = document.querySelector('[data-menu="close"]');
  const allHidden = document.querySelectorAll('.is-not-visible');

  let menuIsOpen = false;

  function handleMenuToggle(event) {
    let menu = event.target;

    const setAttributes = (src, alt) => {
      menu.setAttribute('src', src);
      menu.setAttribute('alt', alt);
    };

    if (!menuIsOpen) {
      setAttributes('images/icon-close.svg', 'icon close');
      [...allHidden].forEach(elem => elem.classList.remove('is-not-visible'));
      document.body.style.overflow = 'hidden';
      menuIsOpen = true;
    } else {
      setAttributes('images/icon-hamburger.svg', 'icon hamburger');
      [...allHidden].forEach(elem => elem.classList.add('is-not-visible'));
      document.body.style.overflow = '';
      menuIsOpen = false;
    }
  }

  menuToggle.addEventListener('click', handleMenuToggle);
}

window.addEventListener('DOMContentLoaded', init);
