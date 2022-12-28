document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.swiper-container');
  
  let mySwiper = new Swiper(slider, {
    slidesPerView: 2,
    spaceBetween: 50, 
    pagination: {
      el: '.pag',
      type: 'bullets',
      clickable: true,
    },
    breakpoints:{
      360:{
        slidesPerView: 1,
      },
      768:{
        slidesPerView: 1,
      },
      1200:{
        slidesPerView: 2,
      }
    },
    keyboard: {
      enable: true,
      onlyInViewport: true,
      pageUpDown:true,
    },
    mousewheel:{
      sensitivity: 1,
    },
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      clickable: true,
    },
    autoplay: {
      delay: 4000,
    },
    speed: 800,
  })
  })