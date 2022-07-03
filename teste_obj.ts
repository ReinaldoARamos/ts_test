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

interface Estudante extends Pessoa {
    materiais: string[];
}
const maria: Pessoa = {
    nome: 'maria',
    idade: 23,
    profissao: Profissao.desenvolvedora,
    
}

const Otavio: Estudante = {
    nome: 'maria',
    idade: 23,
    profissao: Profissao.desenvolvedora,
    materiais: ['Matematica']
}

function listar(lista:string[]) {
    for (const item of lista) {
        console.log('-', item)
    }
}

listar(Otavio.materiais)