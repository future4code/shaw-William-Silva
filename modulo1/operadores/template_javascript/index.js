/* EXERCÍCIOS DE INTERPRETAÇÃO

1.
false
false
true
boolean

2.
O programa não irá efetuar o cálculo como deveria porquê quando os resultados digitados na prompt saem dela, eles 
saem como string, logo ele precisa fazer a conversão do resultado para Number.

3.
let primeiroNumero = prompt("Digite um numero!")
let n1 = Number(primeiroNumero)
let segundoNumero = prompt("Digite outro numero!")
let n2 = Number(segundoNumero)

const soma = n1 + n2

console.log(soma)


EXERCÍCIOS DE ESCRITA

1. */

let idade = prompt("Quantos anos você tem?")
let valor1 = Number(idade)
let idadeMA = prompt("Quantos anos tem o seu melhor amigo?")
let valor2 = Number(idadeMA)

comparativo = valor1 > valor2

console.log("Sua idade é maior que a do seu amigo", comparativo)

2.

let nPar = prompt("Insira um número par aqui!")
let nPar1 = Number(nPar)

console.log(nPar1 % 2) //todo resultado com números pares tem o valor 0.
                       //todo resultado com números ímpares tem o valor 1.

3.

let idadeEmAnos = prompt("Quantos anos você tem?")
let idadeEA = Number(idadeEmAnos)

mesesDeIdade = idadeEA * 12
diasDeIdade = idadeEA * 365
horasDeIdade = idadeEA * 8760

console.log("Você tem:", mesesDeIdade,"meses de idade!")
console.log("Você tem:", diasDeIdade,"dias de idade!")
console.log("Você tem:", horasDeIdade,"horas de idade!")

4.

let primeiroNumero = prompt("Digite um número!")
let priNum = Number(primeiroNumero)
let segundoNumero = prompt ("Digite mais um número!")
let segNum = Number(segundoNumero)

resultado1 = priNum % segNum
resultado2 = segNum % priNum

console.log("O primeiro numero é maior que o segundo?", priNum > segNum)
console.log("O primeiro numero é igual ao segundo?", priNum === segNum)
console.log("O primeiro numero é divisível pelo segundo?", resultado1 === 0)
console.log("O segundo numero é divisível pelo primeiro?", resultado2 === 0)