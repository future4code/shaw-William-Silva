//MENSAGENS DE BOAS VINDAS

console.log("Boas vindas ao jogo de Blackjack!")

if (confirm("Quer iniciar uma nova rodada?")) {
} else {
   console.log("O jogo acabou")
}

//VARIÁVEIS

const primeiraCartaUsuario = comprarCarta();
const segundaCartaUsuario = comprarCarta()
const primeiraCartaComputador = comprarCarta()
const segundaCartaComputador = comprarCarta()

const somaUsuario = primeiraCartaUsuario.valor + segundaCartaUsuario.valor
const somaComputador = primeiraCartaComputador.valor + segundaCartaComputador.valor

//FUNÇÕES QUE IMPRIMEM AS LINHAS

function linhaUsuario(c1, c2, s1) {
   console.log(`Usuário - cartas: ${c1} ${c2} - ${s1}`);
}

function linhaComputador(c1, c2, s1) {
   console.log(`Computador - cartas: ${c1} ${c2} - ${s1}`);
}

//INVOCAÇÕES DAS FUNÇÕES QUE IMPRIMEM AS LINHAS

linhaUsuario(primeiraCartaUsuario.texto, segundaCartaUsuario.texto, somaUsuario)
linhaComputador(primeiraCartaComputador.texto, segundaCartaComputador.texto, somaComputador)

//FUNÇÃO QUE MOSTRA O RESULTADO DA MÃO DOS 2 JOGADORES

function quemVenceu(somaUsuario, somaComputador) {
   if (somaUsuario > somaComputador && somaUsuario <= 21) {
      console.log("O usuário ganhou!");
   } else if (somaComputador > somaUsuario && somaComputador <= 21) {
      console.log("O computador ganhou!");
   } else if (somaUsuario === somaComputador && somaUsuario, somaComputador <= 21) {
      console.log("Empate!");
   } else if (somaUsuario === 22 && somaComputador <= 21) {
      console.log("O computador ganhou!");
   } else if (somaComputador === 22 && somaUsuario <= 21) {
      console.log("O usuário ganhou!");
   } else if (somaUsuario === somaComputador && somaUsuario, somaComputador === 22) {
      console.log("Empate!");
}
}

//INVOCAÇÃO DA FUNÇÃO QUE MOSTRA O RESULTADO DA MÃO DOS 2 JOGADORES

quemVenceu(somaUsuario, somaComputador)