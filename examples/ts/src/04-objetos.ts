interface Pessoa {
  nome: string;
  idade: number;
  endereco?: string;  // Propriedade opcional
}

const usuario: Pessoa = {
    nome: "Francisco",
    idade: 39
}

const u: Pessoa | undefined = {
    nome: "Francisco",
    idade: 39
};

// console.log( usuario.endereco );

interface Animal {
  nome: string;
}

interface Cachorro extends Animal {
  raca: string;
  latir(): void;
}

const cachorro: Cachorro = {
    nome: "Toto",
    raca: "Vira-lata",
    latir : () => console.log("Cachorro latindo")
}

// console.log( cachorro.latir() );

interface Empregado {
    empresa: string;
    cargo: string;
}

interface Funcionario extends Pessoa, Empregado {

}

const funcionario: Funcionario = {
    nome: "Maria",
    idade: 50,
    empresa: "Teste",
    cargo: "Analista de Sistemas"
};

interface FuncionarioPessoa {
    nome: string;
    idade: number;
}

interface FuncionarioPessoa {
    empresa: string;
    cargo: string;
}

const fp: FuncionarioPessoa = {
    nome: "Maria",
    idade: 50,
    empresa: "Teste",
    cargo: "Analista"
}

type ID = string | number;

function processarID(id: ID) {
  console.log(`Processando ID: ${id}`);
}

// processarID("a");

type Professor = {
    CH: number;
    disciplinas: string[]
};

type ProfessorIFPB = Professor & {
    campus: string;
    CHPesquisa: number;
}

const docenteIFPB: ProfessorIFPB = {
    CH: 40,
    disciplinas: ["PWEB 1", "PWEB 2"],
    campus: "João Pessoa",
    CHPesquisa: 16

}

type OptionalProfessorIFPB = Partial<ProfessorIFPB>;

const docenteIFPBOpcional: OptionalProfessorIFPB = {

}

// ---- Validador de Senha

// regex
// 1 - /^[a-zA-Z0-9]{10,15}$/
// 2 - /[0-9]/
// 3 - /[A-Z]/

interface ValidadorSenha {
    (senha: string): boolean;
    metadado: string;
}

const checarNumeros: ValidadorSenha = 
        (senha: string) => /[0-9]/.test(senha);
checarNumeros.metadado = "validar existência de números";

const checarTamanho: ValidadorSenha = 
        (senha: string) => /^[a-zA-Z0-9]{10,15}$/.test(senha);
checarTamanho.metadado = 'validar mínimo de 10 caracteres';

const checarMaiusculo: ValidadorSenha = 
        (senha: string) => /[A-Z]/.test(senha);
checarMaiusculo.metadado = "validar existência de maiúsculo";

const validadoresSenha: ValidadorSenha[] = [
    checarNumeros,
    checarTamanho,
    checarMaiusculo
];

const senha: string = "Teste123";

const validacaoSenha: {checked: boolean, message: string}[] = validadoresSenha.map(
    callback => {
        return {
            checked: callback(senha),
            message: callback.metadado
        };
    }
);

console.log( validacaoSenha );

/*
console.log( checarMaiusculo("abc123def4") )
console.log( checarTamanho("abc123def4") )
console.log( checarNumeros("abc123def4") )
*/

interface Opcoes {
  largura: number;
  altura: number;
}

const opcoes: Opcoes = { largura: 100, altura: 200, cor: "vermelho" } as Opcoes;