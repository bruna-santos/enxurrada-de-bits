let x = prompt('1- Digite um número: ');
let sinal = prompt('Digite + para somar, - para subtrair, * para multiplicar e / para dividir');
let y = prompt('2- Digite um número: ');
let resultado;
if (sinal === '+') {
    resultado = parseInt(x) + parseInt(y)
    alert(`O resultado é ${resultado}`);
} if (sinal === '-') {
    resultado = parseInt(x) - parseInt(y)
    alert(`O resultado é ${resultado}`);
} else if (sinal === '*') {
    resultado = parseInt(x) * parseInt(y)
    alert(`O resultado é ${resultado}`);
} else if (sinal === '/') {
    resultado = parseInt(x) / parseInt(y)
    alert(`O resultado é ${resultado}`);
}