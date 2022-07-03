enum Profissao {
    professor,
    desenvolvedora,
    jogadora
}

interface Pessoa{
nome: string,
idade: number
profissao?: Profissao

}

const maria: Pessoa = {
    nome: 'maria',
    idade: 23,
    profissao: Profissao.desenvolvedora,

}