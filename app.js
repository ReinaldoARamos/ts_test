"use strict";
let button = document.getElementById('button');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('button');
function Adicionar(number1, number2) {
    return number1 + number2;
}
if (button) {
    button.addEventListener('click', () => {
        if (input1 && input2) {
            Adicionar(Number(input1.value), Number(input2.value));
        }
    });
}
