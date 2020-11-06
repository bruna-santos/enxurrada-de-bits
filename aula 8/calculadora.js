function soma (a, b) {
    return parseInt(a) + parseInt(b);
}
// definição da função para soma
function subtração (a, b) {
    return a - b;
}
// definição da função para subtração
function multiplicação (a, b) {
    return a * b;
}
// definição da função para multiplicação
function divisão (a, b) {
    return a / b;
}
// definição da função para divisão
let sinal = prompt('Digite + para somar, - para subtrair, * para multiplicar e / para dividir');
let a, b;
if (sinal === '+') {
    a = soma(prompt('Digite um número: '),prompt('Digite um número: '));
    b = alert(`Seu resultado é ${a}`);
}
if (sinal === '-') {
    a = subtração(prompt('Digite um número: '),prompt('Digite um número: '));
    b = alert(`Seu resultado é ${a}`);
}
if (sinal === '*') {
    a = multiplicação(prompt('Digite um número: '),prompt('Digite um número: '));
    b = alert(`Seu resultado é ${a}`);
}
if (sinal === '/') {
    a = divisão(prompt('Digite um número: '),prompt('Digite um número: '));
    b = alert(`Seu resultado é ${a}`);
}
// parâmentros de prompt com a condição if para cada sinal inserido no prompt da variável sinal