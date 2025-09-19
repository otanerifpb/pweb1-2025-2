export const numero = 10;
let nome = "Francisco";
let disciplina = "PWEB 1";
let ano = 2025;
let nome_disciplina = `${nome}, ${disciplina}`;
// console.log( String(ano).toUpperCase() );
// ----
let numeros = [1, 2, 3, 4, "5"];
const y = 5;
let z = 10;
// z = "a";
// console.log( typeof y);
// console.log( typeof z);
let a = 5;
// console.log( a.toUpperCase() );
let u = "teste";
// if(typeof u === 'string')
//     console.log( u.toUpperCase() );
// console.log( (u as string).toUpperCase() );
function f(x) {
    console.log(x ** 2);
}
function getArea(shape) {
    switch (shape) {
        case 'circle':
            return Math.PI * 2;
        case 'square':
            return 10 * 2;
        case 'triangle':
            return 10 * 5;
        default:
            // TypeScript knows this should never happen
            const _exhaustiveCheck = shape;
            return _exhaustiveCheck;
    }
}
// console.log( getArea('circle').toFixed(2) );
function erro() {
    let i = 0;
    while (i++ < 5) {
        console.log(i);
    }
    throw new Error('final da função alcançado');
}
/*
try {
    erro();
} catch(err) {
    console.log(`Erro lançado: ${err}`);
}
*/
// Asserções de tipo
let valor = "teste";
// console.log( valor.toUpperCase() );
let valorUnknown = "teste";
// 1a forma de verificação de unknown
// if(typeof valorUnknown === 'string')
//     console.log( valorUnknown.length );
// 2a forma de verificação de unknown
// console.log( (valorUnknown as string).length );
// 3a forma de verificação de unknown
// console.log( (<string>valorUnknown).length );
// console.log( valorUnknown.length );
function saudacao(nome) {
    console.log(nome);
    return `Olá, ${nome || 'visitante'}!`;
}
// console.log( saudacao() );
let status;
status = "ativo"; // OK
let funcionario = {
    nome: "Francisco",
    altura: 179,
    instituicao: "IFPB",
    qtdDisciplinas: 3
};
console.log(funcionario.nome);
//# sourceMappingURL=01-intro.js.map