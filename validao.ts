let button = document.getElementById('button');

let input1 = document.getElementById('input1' ) as HTMLInputElement
let input2 = document.getElementById('input2') as HTMLInputElement;

function Adicionar(number1: number, number2: number, devePrint:boolean, frase:string) {
let resultado = number1 + number2;
    console.log(frase + resultado)

    return  number1 + number2
   }

let devePrint = true
let frase : string
frase = "o valor é "
if(button){
    button.addEventListener('click', ()=>{
        if(input1 && input2){
            console.log(Adicionar(Number(input1.value), Number(input2.value), devePrint, frase))
        }
    })
}