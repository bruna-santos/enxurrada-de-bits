let saldoUsuario, valorCompra;
function compra (saldoUsuario, valorCompra) {
    return saldoUsuario - valorCompra
}
let a = compra(prompt('Digite seu saldo: '), prompt('Digite o valor da sua compra: '));
if (saldoUsuario > valorCompra) {
    alert(`A compra foi realizada com sucesso! Seu saldo atual é ${a}.`);
} else if (a < 0) {   
    alert('Saldo insuficiente.');
} else {
    alert(`A compra foi realizada com sucesso! Seu saldo atual é ${a}.`);
}
