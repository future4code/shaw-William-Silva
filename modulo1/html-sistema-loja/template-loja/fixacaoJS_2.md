ˋˋˋfunction calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
  let precoDuzia = 1.00
  let precoUnindade = 1.30
  
  if (quantidade < 12) {
    return quantidade * precoUnindade
  } else if (quantidade >= 12) {
    return quantidade * precoDuzia
  }
}ˋˋˋ