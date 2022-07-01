let button = document.getElementById('button');

let input1 = document.getElementById('input1' ) as HTMLInputElement
let input2 = document.getElementById('button') as HTMLInputElement;

function Adicionar(number1: number, number2: number) {
   return  number1 + number2
}


if(button){
    button.addEventListener('click', ()=>{
        if(input1 && input2){
            Adicionar(Number(input1.value), Number(input2.value))
        }
    })
}