// Como podemos melhorar o esse código usando TS? 

//let pessoa1 = {};
//pessoa1.nome = "maria";
//pessoa1.idade = 29;
//pessoa1.profissao = "atriz"

//let pessoa2 = {}
//pessoa2.nome = "roberto";
//pessoa2.idade = 19;
//pessoa2.profissao = "Padeiro";

//let pessoa3 = {
//    nome: "laura",
//    idade: "32",
//    profissao: "Atriz"
//};

//let pessoa4 = {
//    nome = "carlos",
//    idade = 19,
//    profissao = "padeiro"
//}

enum Trabalho {
    Programador,
    Analista,
    Designer
}

interface Pessoa {
    nome: string,
    idade: number,
    Profissao: Trabalho
};

let pessoa1: Pessoa = {
    nome: "Vanessa",
    idade: 41,
    Profissao: Trabalho.Programador
};


let pessoa2: Pessoa = {
    nome: "Washington",
    idade: 58,
    Profissao: Trabalho.Analista
};


let pessoa3: Pessoa  = {
    nome: "Caio",
    idade: 29,
    Profissao: Trabalho.Designer
};

let pessoa4: Pessoa = {
    nome: "Bruno",
    idade: 34,
    Profissao: Trabalho.Analista
};