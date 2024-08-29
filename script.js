let link = document.querySelector('link');
function reloadWindow(){
    window.addEventListener('resize', function () { 
        "use strict";
        window.location.reload(); 
    })
}
function updateWindow() {
    if (window.innerWidth < 768){
        link.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
        reloadWindow()
    } else {
        reloadWindow()
        link.href = '#'
    }
}

const swiperCustom = document.querySelector('.swiper');
let swiper = new Swiper(swiperCustom, {
    slidesPerView: 1.3,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1.3,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 2.5,
          spaceBetween: 40
        }
      }
  });

updateWindow();

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.vis-hiden__button');
    const content = document.querySelector('.swipper');
    const fullHeight = content.scrollHeight; // Полная высота контента
    const hiddenHeight = 176; // Высота в скрытом состоянии

    toggleButton.addEventListener('click', function() {
        if (content.style.maxHeight === `${hiddenHeight}px` || content.style.maxHeight === '') {
            content.style.maxHeight = `${fullHeight}px`;
            toggleButton.textContent = 'Скрыть';
        } else {
            content.style.maxHeight = `${hiddenHeight}px`;
            toggleButton.textContent = 'Показать еще';
        }
        toggleButton.classList.toggle('active');
    });
});