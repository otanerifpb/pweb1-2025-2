class Caixa<T> {
  private conteudo: T;
  
  constructor(conteudo: T) {
    this.conteudo = conteudo;
  }
  
  obterConteudo(): T {
    return this.conteudo;
  }
  
  definirConteudo(novoConteudo: T): void {
    this.conteudo = novoConteudo;
  }
}

const container: Caixa<number> = new Caixa(50);
console.log( typeof(container.obterConteudo()) );

const containerString: Caixa<string> = new Caixa("50");
console.log( typeof(containerString.obterConteudo()) );

class Pessoa {
    nome = "";
}

const pessoa: Pessoa = new Pessoa();
pessoa.nome = '50';