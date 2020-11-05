function soma (a, b) {
    return parseInt(a) + parseInt(b);
}
function subtração (a, b) {
    return a - b;
}
function multiplicação (a, b) {
    return a * b;
}
function divisão (a, b) {
    return a / b;
}
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