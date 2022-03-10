ˋˋˋfunction calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
  let somaNotas = ((ex*1) + (p1*2) + (p2*3)) / (1+2+3)
  
  if (somaNotas >= 9) {
    return "A"
  } else if (somaNotas < 9 && somaNotas >= 7.5) {
    return "B"
  } else if (somaNotas < 7.5 && somaNotas >= 6) {
    return "C"
  } else if (somaNotas < 6){
    return "D"
  } return
}
