'use strict';
AOS.init({
    duration: 1000, // Длительность анимации в миллисекундах
    delay: 200, // Задержка перед началом анимации
    once: true, // Анимация срабатывает только один раз
    offset: 120, // Смещение (в пикселях) от точки срабатывания
});

// Примеры анимаций
// fade-up, fade-down, fade-left, fade-right
// slide-up, slide-down
// zoom-in, zoom-out
// flip-left, flip-right

/*
    <div data-aos="fade-up">Элемент с анимацией</div>
    <div data-aos="slide-right" data-aos-delay="100">Другой элемент</div>
*/
document.addEventListener('DOMContentLoaded', (e) => {
    const btn = document.querySelector('.hamburger'),
        text = document.querySelector('.navbar .text');

    btn.addEventListener('click', (e) => {
        btn.classList.toggle('hamburger-active');
        text.classList.toggle('text-active');
    });
});
