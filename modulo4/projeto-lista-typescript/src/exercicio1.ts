function imprimeMensagem(nome: string, data: string): string {

    let arr1 = data.split(' ');
    let arr2 = arr1[1].split(',');

    let dia: string = arr1[0]
    let mes: string = arr2[0]
    let ano: string = arr2[1]

    return (`Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${mes} do ano de ${ano}`)
}

console.log(imprimeMensagem("Rafael", "23 Fevereiro,2000"))
console.log(imprimeMensagem("William", "02 Abril,1998"))
console.log(imprimeMensagem("Daniel", "23 Dezembro,1998"))

//Só consegui fazer rodar o código com esse modelo de data acima (DIA MES,ANO)