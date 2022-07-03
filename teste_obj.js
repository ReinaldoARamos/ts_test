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
