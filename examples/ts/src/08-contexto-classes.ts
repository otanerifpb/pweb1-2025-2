class Contador {
  private valor: number = 0;
  
  incrementar(): void {
    this.valor++;
  }
  
  // Problema com 'this' em callbacks
  iniciarContagem() {
    // 'this' será undefined dentro desta função callback
    setTimeout(function() {
      // this.incrementar(); // Erro: this.incrementar is not a function
    }, 1000);
  }
  
  // Solução 1: arrow function preserva 'this'
  iniciarContagemArrow() {
    setTimeout(() => {
      this.incrementar(); // Funciona corretamente
      console.log(this.valor);
    }, 1000);
  }
  
  // Solução 2: bind() para vincular 'this'
  iniciarContagemBind() {
    setTimeout(function(this: Contador) {
      this.incrementar();
      console.log(this.valor);
    }.bind(this), 1000);
  }
  
  obterValor(): number {
    return this.valor;
  }
}