"use strict";
let button = document.getElementById('button');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
function Adicionar(number1, number2, devePrint, frase) {
    let resultado = number1 + number2;
    console.log(frase + resultado);
    return number1 + number2;
}
let devePrint = true;
let frase;
frase = "o valor é ";
if (button) {
    button.addEventListener('click', () => {
        if (input1 && input2) {
            console.log(Adicionar(Number(input1.value), Number(input2.value), devePrint, frase));
        }
    });
}
