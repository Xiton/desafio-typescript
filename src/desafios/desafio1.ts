// Como podemos rodar isso em um arquivo .ts sem causar erros? 

//let funcionario = {};
//funcionario.codigo = 10;
//funcionario.nome = "Washington";

// 
const funcionario = {
    codigo: 1,
    nome: 'Washington'
};

// 
const funcionario2: {codigo: number, nome: string} = {
    codigo: 1,
    nome: 'Washington'
}

// 
interface Funcionario {  
    codigo: number,
    nome: string
};

const funcionarioObj = {} as Funcionario;
funcionarioObj.codigo = 1;
funcionarioObj.nome = 'Washington';

const funcionarioObj2: Funcionario = {
    codigo: 1,
    nome: 'Washington'
}