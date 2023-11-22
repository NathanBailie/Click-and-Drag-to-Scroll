"use strict"

let slider = document.querySelector('.slider');
let items = document.querySelectorAll('.item');

paintItems(items);

function paintItems(array) {
    for (let item of array) {
        item.style.background = createRGB();
    }
}

function createRGB() {
    let red = getRandomNumber(0, 255);
    let green = getRandomNumber(0, 255);
    let blue = getRandomNumber(0, 255);

    return `rgba(${red}, ${green}, ${blue}, 0.9)`;
};

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};