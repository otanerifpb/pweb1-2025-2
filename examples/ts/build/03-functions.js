const soma = (x, y) => {
    return x + y;
};
const somaRest = (...valores) => {
    let resultado = 0;
    for (const elemento of valores) {
        resultado += elemento;
    }
    return resultado;
};
function converter(valor) {
    if (typeof valor === "string") {
        return Number(valor);
    }
    else {
        return String(valor);
    }
}
// console.log( typeof converter('abc') );
function primeiroElemento(array) {
    return array[1];
}
// T = number | string | boolean
console.log(primeiroElemento([1, "2", 3, true])); // tipo number
console.log(primeiroElemento(["Ana", "Bruno"])); // tipo string
export {};
//# sourceMappingURL=03-functions.js.map