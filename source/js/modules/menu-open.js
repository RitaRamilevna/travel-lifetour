const menuOpen = () => {
  const mainHeader = document.querySelector('.nav');
  const navToggle = document.querySelector('.nav__toggle');

  mainHeader.classList.remove('nav--nojs');

  navToggle.addEventListener('click', () => {
    if (mainHeader.classList.contains('nav--closed')) {
      mainHeader.classList.remove('nav--closed');
      mainHeader.classList.add('nav--opened');
    } else {
      mainHeader.classList.add('nav--closed');
      mainHeader.classList.remove('nav--opened');
    }
  });
};

export { menuOpen };
