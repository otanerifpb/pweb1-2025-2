function calculadora(op1, op2, oper) {
    let resultado = '';
    switch (oper) {
        case '+': return String(op1 + op2);
        case '-': return String(op1 - op2);
        case '*': return String(op1 * op2);
        case '/': return String(op1 / op2);
        default: resultado = 'Operação não suportada';
    }
    return resultado;
}
console.log(calculadora(5, 5, '+'));
export {};
//# sourceMappingURL=02-calculadora.js.map