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

///////////////////////////////////////////
//           STICKY NAVIGATION
//////////////////////////////////////////

const sectionHeroEl = document.querySelector('.section-hero');

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      document.body.classList.add('sticky');
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove('sticky');
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0, // we observed as soon as hero-section move out of the viewport that why 0 if it is set to 1 then it will perform action when hero section is inside the viewport
    rootMargin: '-80px',
  }
);
obs.observe(sectionHeroEl);
