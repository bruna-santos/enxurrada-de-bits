alert('Olá! Bem-vindo(a) ao Simulador Cálculo de Média.');
let quantidadeNumeros = prompt('Digite a quantidade de números que deseja calcular a média: ')
quantidadeNumeros = parseInt(quantidadeNumeros);
if (quantidadeNumeros <= 1) {
    alert('Deve haver no mínimo DOIS números para o cálculo da média.');
} else {
    let i = 1;
    let soma = 0;
    while (i <= quantidadeNumeros) {
        soma += parseInt(prompt(`Insira o ${i}° número`));
        i++;
    }
    alert(`A média é ${soma / quantidadeNumeros}.`);
}

// código anterior (errado)
/*
function ad (soma, n) {
    parseInt(soma) + parseInt(n)
}
while (i <= quantidadeNumeros) {
    a = ad(0, prompt(`Digite o ${i}° número`));
    i++;
}
let total = parseInt(a) / parseInt(quantidadeNumeros);
total = alert(`O resultado é ${total}.`);
*/
