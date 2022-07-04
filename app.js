"use strict";
let anyesta;
let stringtest = 'verificar';
stringtest = anyesta;
let unknowValue;
unknowValue = '4';
unknowValue = 'opa';
unknowValue = true;
unknowValue = 'vai';
let stringtest2 = 'agora vai';
if (typeof unknowValue === 'string') {
    stringtest2 = unknowValue;
}
function jogaERro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogaERro('deu erro', 500);
