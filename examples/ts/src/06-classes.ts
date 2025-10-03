interface Printavel {
  imprimir(): string;
}

interface Salvavel {
  salvar(): void;
  recuperar(id: string): boolean;
}

class Documento implements Printavel, Salvavel {
  constructor(
    private titulo: string,
    private conteudo: string,
    private id?: string
  ) {}
  
  imprimir(): string {
    return `DOCUMENTO: ${this.titulo}\n${this.conteudo}`;
  }
  
  salvar(): void {
    this.id = `doc_${Date.now()}`;
    console.log(`Documento salvo com ID: ${this.id}`);
  }
  
  recuperar(id: string): boolean {
    console.log(`Tentando recuperar documento ${id}`);
    return id === this.id;
  }
}

class Foto implements Printavel {
  constructor(private url: string, private descricao: string) {}
  
  imprimir(): string {
    return `FOTO: ${this.descricao}\nURL: ${this.url}`;
  }
}

// Função que trabalha com qualquer objeto Printavel
function imprimirItem(item: Printavel): void {
  console.log(item.imprimir());
}

const documento = new Documento("Relatório", "Conteúdo do relatório...");
const foto = new Foto("https://exemplo.com/foto.jpg", "Paisagem");

imprimirItem(documento); // Funciona porque Documento implementa Printavel
imprimirItem(foto); // Funciona porque Foto implementa Printavel

documento.salvar();
console.log(documento.recuperar("doc_12345")); // Provavelmente false

const printDocs: Printavel = new Documento("Artigo", "Conteúdo do relatório...");

console.log( printDocs.imprimir() );