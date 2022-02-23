//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

//1.
/* 
10 //os números < 5 vão se somar, ou seja: 1+2+3+4 = 10
 */
//2.

//a.
/* 
19
21
23 
25
27
30
 */
//b.
/* 
Sim. O seguinte código seria necessário:

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]

for (let numero of lista) {
    console.log(numero);
}
 */
//3
/* 
*
**
***
****
 */
//EXERCÍCIOS DE ESCRITA DE CÓDIGO

//1.
/* 
const bichinhos = Number(prompt("Quantos animais de estimação você tem?"))
let bichos = []

function listarBichinhos(bichinhos) {
    if (bichinhos === 0) {
        console.log("Que pena! Você pode adotar um pet!");
    } else if (bichinhos > 0) {
        for (let i = 0; i < bichinhos; i++) {
            bichos[i] = prompt("Digite o nome de cada um dos seus pets!");
        }
    }
    return bichos
}

console.log(listarBichinhos(bichinhos));
 */
//2
/* 
let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let numeroPar = []
let maiorNumero
let menorNumero
 */
//a.
/* 
function imprimeArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
imprimeArray(arrayOriginal)
 */
//b.
/* 
function imprimeDividido(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i] = array[i] / 10);
    }
}
imprimeDividido(arrayOriginal)
 */
//c.
/* 
function apenasPares(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            numeroPar.push(array[i])
        }
    }
return(numeroPar);
}

console.log(apenasPares(arrayOriginal))
 */
//d.
/* 
function informaElemento(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`O elemento do ${i} é ${array[i]}`)
    }
}
informaElemento(arrayOriginal)
 */
//e
/* 
function maiorEMenor(array) {
    maiorNumero = array[0]
    menorNumero = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maiorNumero) {
            maiorNumero = array[i]
        }
        if (array[i] < menorNumero) {
            menorNumero = array[i]
        }
    }
    console.log(`O maior número é ${maiorNumero} e o menor é ${menorNumero}`);
}

maiorEMenor(arrayOriginal)
 */