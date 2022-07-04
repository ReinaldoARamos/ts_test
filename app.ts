let anyesta : any
let stringtest : string  = 'verificar';

stringtest = anyesta;

let unknowValue : unknown;

unknowValue = '4'
unknowValue = 'opa'
unknowValue = true
unknowValue =  'vai'

let stringtest2: string = 'agora vai'

if(typeof unknowValue === 'string'){
    stringtest2 = unknowValue
}


function jogaERro(erro:string, codigo: number) : never {
    throw {error: erro, code : codigo}

}

jogaERro('deu erro', 500)