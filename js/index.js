const swiper = new Swiper('.agreements__swiper', { 
  
  loop: true,    
  spaceBetween: 20,
  
   breakpoints: {
    380: {
      slidesPerView: 1, 
    },
    480: {
      slidesPerView: 2, 
    },
    768: {
      slidesPerView: 3, 
    },
     1100: {
      slidesPerView: 4, 
    },
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const items = document.querySelectorAll('.block__item');

items.forEach(item => {
    item.addEventListener('click', () => {       
        
        items.forEach(i => {
            if (i !== item) i.classList.remove('active__item');
        });       
        item.classList.toggle('active__item');
    });
});




document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.mobile__menu');
  const menuLinks = mobileMenu.querySelectorAll('a');

  if (burger && mobileMenu) {
    burger.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
      burger.classList.toggle('active'); 
    });

    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        burger.classList.remove('active');
      });
    });
  }
});
