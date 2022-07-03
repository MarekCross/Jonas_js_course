'use strict';

/////////////////////////////////////
//Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav = document.querySelector('.nav');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
///186
const allSections = document.querySelectorAll('.section');
const allButtons = document.getElementsByTagName('button');

//console.log(allButtons);

const header = document.querySelector('.header');
const message = document.createElement('div'); //tworzenie elementu
message.classList.add('cookie-message'); //dodawanie klasy do elementu
message.innerHTML =
  'We are using cookies for same analytics. <button class="btn btn--close--cookie">Got it </button>'; //wew. tekst html elementu
header.append(message); //dodanie kodu do DOM

document
  .querySelector('.btn--close--cookie')
  .addEventListener(`click`, function () {
    message.remove();
  });
//187

//console.log(getComputedStyle(message));

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + `px`;

//document.documentElement.style.setProperty('--color-primary', `royalblue`);

const logo = document.querySelector(`.nav__logo`);
logo.alt;
//console.log(logo.src);
//console.log(logo.getAttribute('src'));

const link = document.querySelector('.twitter-link');
//188
const btnScrollTo = document.querySelector(`.btn--scroll-to`);
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function () {
  const s1coords = section1.getBoundingClientRect();
  console.log(
    s1coords.left + window.pageXOffset,
    s1coords.top + window.pageYOffset
  );
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: `smooth`,
  // });
  section1.scrollIntoView({ behavior: `smooth` });
});
//189
const h1 = document.querySelector(`h1`);

const consolelogH1 = function (e) {
  // console.log(`eventlistener: you are reading h1`);
  h1.removeEventListener(`mouseenter`, consolelogH1);
};
h1.addEventListener(`mouseenter`, consolelogH1);
//191
const randomInt = (min, max) =>
  Math.floor(Math.random() * (min + max + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

//198
//const allSections = document.querySelectorAll(`.section`);

const revealSection = function (enteries, observer) {
  const [entry] = enteries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove(`section--hidden`);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  //section.classList.add('section--hidden');
});

//////////////////////////////////////////////////////////////////////

// document.querySelector(`.nav__links`).addEventListener(`click`, function (e) {
//   this.style.backgroundColor = randomColor();
// });

// document.querySelector(`.nav__link`).addEventListener(`click`, function (e) {
//   this.style.backgroundColor = randomColor();
// });
// document.querySelector(`.nav`).addEventListener(`click`, function (e) {
//   this.style.backgroundColor = randomColor();
// });
//                                        //192
//Rozwiązanie nr 1
// document.querySelectorAll(`.nav__link`).forEach(function (el) {
//   el.addEventListener(`click`, function (e) {
//     e.preventDefault();
//     //console.log(`link`);
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({  behavior: `smooth`});
//        //NOTATKA
//   });
// });
//Rozwiązanie nr2
// document.querySelector(`.nav__links`).addEventListener('click', function (e) {
//   e.preventDefault();
//   console.log(e.target); //NOTATKA
//   //matching strategy
//   if (e.target.classList.contains('nav__link')) {
//     //czy target zawiera klasę navlink
//     console.log(`link`);
//     const id2 = e.target.getAttribute(`href`);
//     document.querySelector(id2).scrollIntoView({ behavior: `smooth` });
//   }
// });
// //Zrobić notatkę!!!!!!!!!!!!!
// //193 selecting element on another element

// console.log(h1.querySelectorAll(`.highlight`)); //tylko dzieci h1 z klasą highlight
// console.log(h1.children); //właściwość elemenu który zwraca tylko dzieci
// console.log(h1.childNodes); //wzraca cały NODE
// h1.firstElementChild.style.color = `royalblue`; //ustawienie na 1 dziecku h1 koloru, może też być last
// console.log(h1.parentNode); //podaje rodzica z node
// console.log(h1.parentElement); //podaje element rodzica

// h1.closest(`.header`).style.background = `royalblue`; //znajduję nabliższy element rodzić z podaną klasą i zmienia jego tło

// //siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling); //znajduje rodzeństwo elementu w postaci innych elementów

// console.log(h1.previousSibling); //znajduje rodzeństwo w postaci elementów Node

// h1.parentElement.children; //najpierw przejście do elementu rodzic i potem wywołanie jego wszytkich dzieci

//194
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

//tabs.forEach(t => t.addEventListener(`click`, () => console.log('tab')));
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest(`.operations__tab`);

  //guard class if
  if (!clicked) return;
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  clicked.classList.add('operations__tab--active');
  console.log(clicked.dataset.tab);

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});
//195
nav.addEventListener(`mouseover`, function (e) {
  if (e.target.classList.contains('nav__link')) {
    const siblings = e.target.closest('.nav').querySelectorAll('.nav__link');
    const logo = e.target.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== e.target) el.style.opacity = 0.3;
    });
    logo.style.opacity = 0.3;
  }
});

nav.addEventListener(`mouseout`, function (e) {
  if (e.target.classList.contains('nav__link')) {
    const siblings = e.target.closest('.nav').querySelectorAll('.nav__link');
    const logo = e.target.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== e.target) el.style.opacity = 1;
    });
    logo.style.opacity = 1;
  }
});
//196
// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords.top);

// window.addEventListener('scroll', function () {
//   if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

//197
// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => console.log(entry));
// };
// const obsOptions = {
//   root: null,
//   threshold: 0 ,
// };
// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

//const header = document.querySelector.('.header');
const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: '90px',
});
headerObserver.observe(header);
//199
const imgTargets = document.querySelectorAll('img[data-src]');
//console.log(imgTargets);

const loadIMG = function (enteries, observer) {
  const [entry] = enteries;
  // console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove(`lazy-img`);
  });
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadIMG, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));
//200 slider
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
let crtSlide = 0;
const maxSlide = slides.length;
const dotContainer = document.querySelector('.dots');

const slider = document.querySelector('.slider');
slider.style.transform = 'scale(0.5)';
slider.style.overflow = 'hidden';

const createDots = function () {
  slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `
    <button class="dots__dot" data-slide="${i}"></button>
    `
    );
  });
};
createDots();
const goToSlides = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};
goToSlides(0);
const nextSlide = function () {
  if (crtSlide === maxSlide - 1) {
    crtSlide = 0;
  } else {
    crtSlide++;
  }

  goToSlides(crtSlide);
};
const prevSlide = function () {
  if (crtSlide === 0) {
    crtSlide = maxSlide - 1;
  } else {
    crtSlide--;
  }
  goToSlides(crtSlide);
};
btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

document.addEventListener('keydown', function (e) {
  console.log(e);
});

dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    const { slide } = e.target.dataset;
    goToSlides(slide);
  }
});
