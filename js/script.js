'use strict';

document.addEventListener('DOMContentLoaded', (e) => {
    const btn = document.querySelector('.hamburger'),
        text = document.querySelector('.navbar .text');

    btn.addEventListener('click', (e) => {
        btn.classList.toggle('hamburger-active');
        text.classList.toggle('text-active');
    });
});
