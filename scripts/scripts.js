"use strict"

let container = document.querySelector('.container');
let items = document.querySelectorAll('.item');

let isPressed = false;
let startX;
let scrollLeft;

paintItems(items);

container.addEventListener('mousedown', (e) => {
    isPressed = true;
    container.classList.add('active');
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
});

container.addEventListener('mouseleave', () => {
    isPressed = false;
    container.classList.remove('active');
});

container.addEventListener('mouseup', () => {
    isPressed = false;
    container.classList.remove('active');
});

container.addEventListener('mousemove', (e) => {
    if (!isPressed) return;

    e.preventDefault();

    let x = e.pageX - container.offsetLeft;
    let walk = (x - startX) * 2;
    container.scrollLeft = scrollLeft - walk;
});


function paintItems(array) {
    for (let item of array) {
        item.style.background = createRGB();
    }
}

function createRGB() {
    let red = getRandomNumber(0, 255);
    let green = getRandomNumber(0, 255);
    let blue = getRandomNumber(0, 255);

    return `rgba(${red}, ${green}, ${blue}, 0.85)`;
};

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};