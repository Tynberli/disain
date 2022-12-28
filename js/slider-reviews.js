document.addEventListener('DOMContentLoaded', () => {
    const slider3 = document.querySelector('.swiper-container3');
    
    let mySwiper3 = new Swiper(slider3, {
      slidesPerView: 1,
      spaceBetween: 50, 
      pagination: {
        el: '.pag3',
        type: 'bullets',
        clickable: true,
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
        nextEl: ".swiper-button-next3",
        prevEl: ".swiper-button-prev3",
        clickable: true,
      },
      autoplay: {
        delay: 4000,
      },
      speed: 900,
    })
    })