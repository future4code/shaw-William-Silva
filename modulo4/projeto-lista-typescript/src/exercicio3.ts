enum GENERO {
    ACAO = "ação",
    DRAMA = "drama",
    COMEDIA = "comédia",
    ROMANCE = "romance",
    TERROR = "terror"
}

type filme = {
    nome: string,
    anoLancamento: number,
    genero: string,
    nota?: number
}

function catalogoFilmes(nome: string, anoLancamento: number, genero: GENERO, nota?: number): filme {

    let descricaoComNota: any = `Nome: ${nome}, Ano de lancamento: ${anoLancamento}, Gênero: ${genero}, Nota: ${nota}`

    let descricaoSemNota: any = `Nome: ${nome}, Ano de lancamento: ${anoLancamento}, Gênero: ${genero}, Nota: não avaliado`

    if (nota !== undefined) {
        return descricaoComNota
    } else if (nota === undefined) {
        return descricaoSemNota
    }
}

console.log(catalogoFilmes("Duna", 2021, GENERO.ACAO, 74))
console.log(catalogoFilmes("Rogai por Nós", 2021, GENERO.TERROR))