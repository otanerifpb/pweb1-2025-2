class Company {
    // Paramiters Propieties, vai instanciar ao chamar o construtor
    constructor(
        private name: string,
        private foundet: number,
        private industry: string,
        private kind: string
    ){

    }

    getName(): string {
        return this.name; 
    }

    getFoundet(): number {
        return this.foundet; 
    }


    //colocar uma mascra para que todos na impressão fique na mesma largura
    // função ".padEnd(espaço, 'preencimento se nõ ocupar o espaço')"
    show(): string {
        //return '${this,name.padEnd(15, '.')}...${this.founded}'; 
        return "${this, name.padEnd(15, '.')}...${tis.founded}";
    }

    
}

const companie: Company[] =[
    new Company("Amazon", 1994, "E-Commerce, Clound", "Internet")
]


console.log(companie[0]?.show());

//função ".map" faz um mapeamento e repete 
console.log(
    companie.map(
        (company) => company.show()
    ).join('\n')
)

