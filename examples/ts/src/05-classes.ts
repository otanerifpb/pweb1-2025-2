class Produto {
    // private nome: string;
    // protected marca: string;
    // valor: number;

    // constructor(nome: string, marca: string, valor: number) {
    //     this.nome = nome;
    //     this.marca = marca;
    //     this.valor = valor;
    // }

    constructor(
        private nome: string,
        protected marca: string,
        public valor: number
    ){

    }

    toString() : string {
        return `Objeto produto: ${this.nome}, 
                    ${this.marca}, ${this.valor}`;
    }

    public getNome(): string {
        return this.nome;
    }
}

class Livro extends Produto {
    public static qtdInstancias: number = 0;
    constructor(nomeLivro: string, marcaLivro: string,
        valorLivro: number
    ) {
        super(nomeLivro, marcaLivro, valorLivro);
        Livro.qtdInstancias += 1;
    }

    getMarca(): string {
        return this.marca;
    }

    public static getQtdInstancias(): number {
        return Livro.qtdInstancias;
    }
}

const l1: Livro = new Livro("Angular v19", "Editora IFPB", 50);

const l2: Livro = new Livro("Spring Boot", "Editora IFPB", 80);

console.log( l1.getNome() );

// console.log( Livro.getQtdInstancias() ); // imprimir quantidade de instânicas??

// const produto: Produto = new Produto("Angular v19", "Editora IFPB", 50);

// console.log( produto.getNome() );

// console.log( livro.valor );

// -----
abstract class OperacaoMatematica {
    constructor() {

    }

    abstract resolverOperacao(): number;
}

class Soma extends OperacaoMatematica {
    constructor(
        private op1: number,
        private op2: number
    ) {
        super();
    }

    resolverOperacao(): number {
        return this.op1 + this.op2;
    }
}

class Subtracao extends OperacaoMatematica {
    constructor(private op1: number, private op2: number){
        super();
    }

    public resolverOperacao(): number {
        return this.op1 - this.op2;
    }
}

// ----
class Pessoa {
    private _nome: string = "";

    set nome(nome: string){
        this._nome = nome;
    }

    get nome(): string {
        return this._nome;
    }
}

const pessoa: Pessoa = new Pessoa();
pessoa.nome = "Maria";
console.log( pessoa.nome );