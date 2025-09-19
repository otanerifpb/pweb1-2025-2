export const numero: number = 10;

let nome: string = "Francisco";
let disciplina: string = "PWEB 1";
let ano = 2025;
let nome_disciplina = `${nome}, ${disciplina}`;

// console.log( String(ano).toUpperCase() );

// ----
let numeros: (number | string)[] = [1, 2, 3, 4, "5"];

const y: number = 5;
let z = 10;

// z = "a";

// console.log( typeof y);
// console.log( typeof z);

let a: any = 5;
// console.log( a.toUpperCase() );

let u: unknown = "teste";
// if(typeof u === 'string')
//     console.log( u.toUpperCase() );

// console.log( (u as string).toUpperCase() );

function f(x: number): void {
    console.log( x ** 2)
}

// console.log( typeof f(5) === "undefined");

// ------
type Shape = 'circle' | 'square' | 'triangle';

function getArea(shape: Shape): number {
  switch (shape) {
    case 'circle':
      return Math.PI * 2;
    case 'square':
      return 10 * 2;
    case 'triangle':
      return 10 * 5;
    default:
      // TypeScript knows this should never happen
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}

// console.log( getArea('circle').toFixed(2) );

function erro(): never {
  let i: number = 0;
  
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
let valor: any = "teste";

// console.log( valor.toUpperCase() );

let valorUnknown: unknown = "teste";

// 1a forma de verificação de unknown
// if(typeof valorUnknown === 'string')
//     console.log( valorUnknown.length );

// 2a forma de verificação de unknown
// console.log( (valorUnknown as string).length );

// 3a forma de verificação de unknown
// console.log( (<string>valorUnknown).length );

// console.log( valorUnknown.length );

function saudacao(nome?: string): string {
  console.log(nome);
  return `Olá, ${nome || 'visitante'}!`;
}

// console.log( saudacao() );

let status: "ativo" | "inativo" | "pendente";
status = "ativo";  // OK
// status = "suspenso";

type Pessoa = { nome: string; altura: number };
type Docente = { instituicao: string; qtdDisciplinas: number};

let funcionario: Pessoa & Docente = {
  nome: "Francisco",
  altura: 179,
  instituicao: "IFPB",
  qtdDisciplinas: 3
};

console.log( funcionario.nome );

// funcionario.email = "teste";

interface Usuario {
  nome: string;
  idade: number;
  saudacao(): string;
}

class Aluno implements Usuario {
    nome: string;
    idade: number;

    
    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }
    

    saudacao(): string {
        return 'Saudação';
    }

}

interface User {
  readonly id: number;
  nome: string;
}

const user: Readonly<User> = {
    id: 1,
    nome: "Maria"
};

// user.nome = "Alice"; // Erro!

interface Produto {
    id: number;
    nome: string;
    marca?: string;
};

let produto: Required<Produto> = {
    id: 1,
    nome: "cafeteira",
    marca: "Bialetti"
    
};

function calculadora(operando: string, ...valores: number[]) {

}

calculadora('+', 1, 2);
calculadora('+', 1, 2, 5, 10, 30);