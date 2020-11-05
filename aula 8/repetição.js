let anuncio = alert('Olá! Bem-vindo(a) ao Simulador Cálculo de Média.');
let quantidadeNumeros = prompt('Digite a quantidade de números que deseja calcular a média: ')
if (parseInt(quantidadeNumeros) === 1) {
    alert('Deve haver no mínimo DOIS números para o cálculo da média.');
}
while (parseInt(quantidadeNumeros) === 1) {
    prompt('Digite a quantidade de números que deseja calcular a média: ')
}
let i = 1;
let soma = 0;
let n;
let total;
while (i <= quantidadeNumeros) {
    n = prompt(`Digite o ${i}° número`);
    total = soma + n;
    i++;
}
let final = parseInt(total) / parseInt(quantidadeNumeros);
final = alert(`O resultado é ${total}.`);
