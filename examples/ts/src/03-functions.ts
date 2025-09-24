type OperacaoMatematica = (x: number, y: number) => number;

const soma: OperacaoMatematica = 
                (x: number, y: number) => {
                    return x + y;
                }

const somaRest = (...valores: number[]) => {
    let resultado = 0;
    for(const elemento of valores) {
        resultado += elemento;
    }

    return resultado;
}

// console.log( somaRest(5, 10, 15) );

// ----
function converter(valor: string): number;
function converter(valor: number): string;
function converter(valor: string | number): number | string {
  if (typeof valor === "string") {
    return Number(valor);
  } else {
    return String(valor);
  }
}

// console.log( typeof converter('abc') );

function primeiroElemento<T>(array: T[]): T | undefined {
    // array[1] = 10;
    return array[1];
}

// T = number | string | boolean

console.log( primeiroElemento([]) );  // tipo number
console.log( primeiroElemento(["Ana", "Bruno"]) );  // tipo string