function printaValue(number1:number, number2:number):void{
    console.log(number1+number2)
}

function SomarValoresNumericosTratar(numero1:number, number2:number, callback:(numero:number)=> number) {
    let resultado  = numero1 + number2
    return callback(resultado)
}

function aoquadrado(number:number) : number{
    return number * number
}

function dividirPorele(number:number) {
    return number / number
}

console.log(SomarValoresNumericosTratar(1, 3, aoquadrado))

console.log(SomarValoresNumericosTratar(1,3, dividirPorele))