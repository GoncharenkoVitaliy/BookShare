//! ============ Поиск - Крестик ===========
// let no = document.querySelector('.no');
const menuSearch = document.querySelector('.menu__search');
let input = document.querySelector('.search__input');

menuSearch.addEventListener ('mousemove', function () {
   // console.log(event);
   let btnImg1 = document.querySelector('.menu__search-btn-img-1');
   let btnImg2 = document.querySelector('.menu__search-btn-img-2');
   // btnImg1.style.backgroundColor = 'red';
   let a = '';
   if (input.value != a) {
      btnImg1.classList.add('display__no');
      btnImg2.classList.remove('display__no');
   }
   else {
      btnImg1.classList.remove('display__no');
      btnImg2.classList.add('display__no');
   }
})

//! ============ Поиск - Крестик ===========

//! =========== Swiper -- slider ===========
new Swiper('.swiper', {
   // navigation: {
   //    nextEl: '.swiper-button-next',
   //    prevEl: '.swiper-button-prev'
   // },
   // булеты - текущее положение
   pagination: {
      el: '.swiper-pagination',
      // вкл. буллеты
      clickable: true,
      // динамика булитов
      dynamicBullets: true,
      //Кастомные буллеты - цифры в буллетах
      // renderBullet: function (index, className) {
      //    return '<span class="' + className + '">' + (index + 1) + '</span>';
      // },
      // scrollbar: {
         // el: '.swiper-scrollbar',
         // возможность перетаскивать скрол
         // draggable: true,
      // },
   },
   // Курсор
   grabCursor: true,
   //Перетаскивание при клике на слайд
   slideToClickedSlide: true,
   // Управление с клавиатуры
   keyboard: {
      //включить/выключить
      enabled: true,
      //включить/выключить
      //только когда слайдер в пределах вьюпорта
      onlyInViewport: true,
      //включить/выключить
      // управление клавишами pageUP, pageDown
      pageUPDown: true,
   },
   // Управление колесом мыши
   mousewheel: {
      //Чувствительность колеса мыши
      sensitivity: 1,
      // Класс объекта на котором будет срабатывать прокрутка мышью
      // eventsTarget: ".swiper-slider__image"
   },
   //Автовысота (перекрывает автора на некоторых слайдах)
   autoHeight: false,
   //============
   //Количество слайдов для показа
   slidesPerView: 'auto',  //'auto'
   // отключение функционала если слайдев меньше чем нужно
   watchOverflow: true,
   // Расстояние между слайдами
   spaceBetween: 30,
   //Количество прокручиваемых слайдов
   slidePerGroup: 3,
   //Мультирядность  2 и более ряда
   // slidePerColumn: 2,
}); 
//! =========== Swiper -- slider ===========

//! ================ Burger ================
const burger = document?.querySelector('.burger');
const nav = document?.querySelector('.nav');
const body = document.body;
const navItems = document?.querySelectorAll('.nav__link');

burger?.addEventListener('click', () => {
   body.classList.toggle('stop-scroll');
   burger?.classList.toggle('burger--active');
   nav?.classList.toggle('nav__visible');
   // body.classList.add('')
});

navItems.forEach(el => {
   el.addEventListener('click', () => {
      body.classList.remove('stop-scroll');
      burger?.classList.remove('burger--active');
      nav?.classList.remove('nav__visible');
   });
});
//! ================ Burger ================

//! ====== Закрыти при клике вне блока =====
//! ====== Закрыти при клике вне блока =====

//! =========== Navigation - menu ==========
// плавный переход по сайту

const menuLinks = document.querySelectorAll('.nav__link[data-goto]');

if (menuLinks.length > 0) {
   menuLinks.forEach(menuLinks => {
      menuLinks.addEventListener("click", onMenuLinkClick);
   });

   function onMenuLinkClick(e) {
      const menuLink = e.target;
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
         const gotoBlock = document.querySelector(menuLink.dataset.goto);
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.container-menu').offsetHeight;
         window.scrollTo({
            top: gotoBlockValue,
            behavior: 'smooth'      //плавность прокрутки
         });
         e.preventDefault();
      }
   }
}

//! =========== Navigation - menu ==========

//! ================ Prompt ================
let links = document?.querySelectorAll('.btn-item');

for (let i = 0; i < links.length; i++) {
   links[i].onmouseover = function() {
      let prompt = document.querySelectorAll('.prompt');
      let too = prompt[i];
      too.style.opacity = '1';
      too.style.visibility = 'visible';
   }

   links[i].onmouseout = function() {
      let prompt = document.querySelectorAll('.prompt');
      let too = prompt[i];
      too.style.opacity = '0';
      too.style.visibility = 'hidden';
   }
}
//! ================ Prompt ================