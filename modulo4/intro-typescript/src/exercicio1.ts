function checaTriangulo(a: number, b: number, c: number): string {
    if (a !== b && b !== c) {
        return "Escaleno";
    } else if (a === b && b === c) {
        return "Equilátero";
    } else {
        return "Isósceles";
    }
}

console.log(checaTriangulo(1, 3, 1))
console.log(checaTriangulo(4, 4, 1))
console.log(checaTriangulo(3, 3, 3))