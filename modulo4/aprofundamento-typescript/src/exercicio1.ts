let minhaString: string = "String"
//com um número o código informa o erro no tipo da variável que só suporta string.

let meuNumero: number = 10
//com a utilização de Union Type.

let pessoa: { nome: string, idade: number, corFavorita: string } = {
    nome: "William",
    idade: 24,
    corFavorita: "Preto"
}

enum cores {
    VERMELHO = "vermelho",
    LARANJA = "laranja",
    AMARELO = "amarelo",
    VERDE = "verde",
    AZUL = "azul",
    ANIL = "anil",
    VIOLETA = "violeta"
}

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: cores
}

let pessoaUm: pessoa = {
    nome: "William",
    idade: 24,
    corFavorita: cores.VIOLETA,
}

let pessoaDois: pessoa = {
    nome: "Thiago",
    idade: 21,
    corFavorita: cores.AMARELO,
}

let pessoaTres: pessoa = {
    nome: "Daniel",
    idade: 20,
    corFavorita: cores.AZUL,
}