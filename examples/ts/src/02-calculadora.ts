function calculadora(
    op1: number, 
    op2: number, 
    oper: '+'|'-'|'*'|'/'): string 
    {
    let resultado = '';

    switch(oper){
        case '+' : return String(op1 + op2);
        case '-' : return String(op1 - op2);
        case '*' : return String(op1 * op2);
        case '/' : return String(op1 / op2);
        default: resultado = 'Operação não suportada';
    }

    return resultado;
}

console.log( calculadora(5, 5, '+') );