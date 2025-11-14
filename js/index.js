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


const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');

burger.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

