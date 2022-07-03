"use strict";
var Profissao;
(function (Profissao) {
    Profissao[Profissao["professor"] = 0] = "professor";
    Profissao[Profissao["desenvolvedora"] = 1] = "desenvolvedora";
    Profissao[Profissao["jogadora"] = 2] = "jogadora";
})(Profissao || (Profissao = {}));
const maria = {
    nome: 'maria',
    idade: 23,
    profissao: Profissao.desenvolvedora,
};
const Otavio = {
    nome: 'maria',
    idade: 23,
    profissao: Profissao.desenvolvedora,
    materiais: ['Matematica']
};
function listar(lista) {
    for (const item of lista) {
        console.log('-', item);
    }
}
listar(Otavio.materiais);
