// EXERCÍCIOS DE INTERPRETAÇÃO

/*  1.

a.  10
    50
b.  não apareceria nada. */

/*  2.

a.  ela cria uma função que facilita que o texto digitado pelo usuário seja impresso no console.assert
b.  I. eu gosto de cenoura true
    II. cenoura é bom pra vista true
    III. cenouras crescem na terra false */

//EXERCÍCIOS DE ESCRITA

/*  1.

a.
let mensagem = "Eu sou William, tenho 23 anos, moro em Brasília e sou estudante."

function imprima() {
    console.log(mensagem)
}

imprima() */

/* b.
let nome = "William"
let idade = 23
let cidade = "Brasília"
let profissão = "Estudante"

function imprima(d1,d2,d3,d4){
    return (`Eu sou ${d1}, tenho ${d2} anos, moro em ${d3} e sou ${d4}.`)
}

console.log(imprima(nome,idade,cidade,profissão)) */

//2

/* a.
function calcular(n1,n2) {
    soma = n1 + n2
    return soma
}

console.log(calcular(3,2)) */

/* b.
function avaliar(n1,n2){
    
    return n1 >= n2
} */

/* c.
function descobrir(n1){
    resultado = n1 % 2

    return ("O resultado é par?", resultado === 0)
}

console.log(descobrir(12)) */

/* d.
function escreva (m1){
    mensagem1 = m1.toUpperCase()
    contar = m1.length

    return (contar + " - " + mensagem1)
}

console.log(escreva("Eu sou William me gosto de batata!")); */

//3

/* function somar (v1,v2){
    let soma = v1 + v2
    return (soma)
}

function subtrair (v1,v2){
    
    return (v1 - v2)
}

function multiplicar (v1,v2){
    
    return (v1 * v2)
}

function dividir (v1,v2){

    return (v1 / v2)
}

let numero1 = prompt("Digite um número!")
let valor1 = Number(numero1)
let numero2 = prompt("Digite outro número!")
let valor2 = Number(numero2)

console.log("Números inseridos: ",valor1,valor2)
console.log("Soma: ", somar(valor1,valor2));
console.log("Diferença: ", subtrair(valor1,valor2))
console.log("Multiplicação: ", multiplicar(valor1,valor2))
console.log("Divisão: ", dividir(valor1,valor2)) */