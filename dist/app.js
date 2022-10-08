"use strict";
let buttonEl = document.querySelector(".btn");
let divEl = document.querySelector(".mydiv");
let colors = ["red", "blue", "green", "black"];
let i = 0;
const changeColor = () => {
    divEl.style.backgroundColor = colors[i];
    i++;
    if (i == 4) {
        i = 0;
    }
};
buttonEl.addEventListener("click", changeColor);
