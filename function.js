"use strict";
function printaValue(number1, number2) {
    console.log(number1 + number2);
}
function SomarValoresNumericosTratar(numero1, number2, callback) {
    let resultado = numero1 + number2;
    return callback(resultado);
}
function aoquadrado(number) {
    return number * number;
}
function dividirPorele(number) {
    return number / number;
}
console.log(SomarValoresNumericosTratar(1, 3, aoquadrado));
console.log(SomarValoresNumericosTratar(1, 3, dividirPorele));
