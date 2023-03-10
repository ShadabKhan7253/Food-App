const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});

///////////////////////////////////////
//      SMOOTH SCROLLING ANIMATION
//////////////////////////////////////
const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = link.getAttribute('href');

    // SCROLL BACK TO TOP
    if (href === '#')
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    // SCROLL TO OTHER LINK
    if (href !== '#' && href.startsWith('#')) {
      const selectionEl = document.querySelector(href);
      selectionEl.scrollIntoView({ behavior: 'smooth' });
    }

    // CLOSE MOBILE NAVIGATION
    if (link.classList.contains('main-nav-link')) headerEl.classList.toggle('nav-open');
  });
});
