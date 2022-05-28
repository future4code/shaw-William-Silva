typeof 0 === "number";
typeof "" === "string";
typeof true === "boolean";

function tipoDeVar(a: any): void {
    if (typeof a === "string") {
        console.log(`${a} é do tipo string`);
    } else if (typeof a === "number") {
        console.log(`${a} é do tipo number`);
    } else if (typeof a === "boolean") {
        console.log(`${a} é do tipo boolean`);
    } else {
        console.log("Tipo de variável não encontrado!")
    }
}

tipoDeVar("Oi")
tipoDeVar(1)
tipoDeVar(false)