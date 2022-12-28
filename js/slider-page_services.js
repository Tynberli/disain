document.addEventListener('DOMContentLoaded', () => {
    const slider2 = document.querySelector('.swiper-container2');
    
    let mySwiper2 = new Swiper(slider2, {
      slidesPerView: 1,
      spaceBetween: 200, 
      pagination: {
        el: '.pag2',
        type: 'bullets',
        clickable: true,
        centeredSlides: true,
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
      speed: 900,
    })
    })