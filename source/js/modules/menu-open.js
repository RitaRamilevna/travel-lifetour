const menuOpen = () => {
  const mainHeader = document.querySelector('.nav');
  const navToggle = document.querySelector('.nav__toggle');
  const body = document.body;

  mainHeader.classList.remove('nav--nojs');

  navToggle.addEventListener('click', () => {
    if (mainHeader.classList.contains('nav--closed')) {
      mainHeader.classList.remove('nav--closed');
      mainHeader.classList.add('nav--opened');
      body.classList.add('body--scroll-lock');
    } else {
      mainHeader.classList.add('nav--closed');
      mainHeader.classList.remove('nav--opened');
      body.classList.remove('body--scroll-lock');
    }
  });


  document.addEventListener('click', (event) => {
    const target = event.target;
    const isNavLink = target.classList.contains('nav__link');

    if (isNavLink) {
      mainHeader.classList.remove('nav--opened');
      mainHeader.classList.add('nav--closed');
      body.classList.remove('body--scroll-lock');
    }
  });
};

export { menuOpen };
