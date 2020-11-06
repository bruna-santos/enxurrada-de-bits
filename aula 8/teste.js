let anuncio = alert('Olá! Bem-vindo(a) ao Simulador Cálculo de Média.');
let quantidadeNumeros = prompt('Digite a quantidade de números que deseja calcular a média: ')
if (parseInt(quantidadeNumeros) === 1) {
    alert('Deve haver no mínimo DOIS números para o cálculo da média.');
}
while (parseInt(quantidadeNumeros) === 1) {
    prompt('Digite a quantidade de números que deseja calcular a média: ')
}
let i = 1;
let a, b;
function soma (a,b) {
    parseInt(a) + parseInt(b)
}
while (i <= quantidadeNumeros) {
    a = prompt(`Digite o ${i}° número`);
    i++;
    b = prompt(`Digite o ${i}° número`);
}
let total = soma(a, b);
total = parseInt(total) / parseInt(quantidadeNumeros);
let final = alert(`Seu resultado é ${total}.`)