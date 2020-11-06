let saldoUsuario, valorCompra;
function compra (saldoUsuario, valorCompra) {
    return saldoUsuario - valorCompra
}
// função de subtração entre o saldo do usuário e o valor de compra que deseja realizar
let a = compra(prompt('Digite seu saldo: '), prompt('Digite o valor da sua compra: '));
// uso dos parâmetros como prompt para que o usuário possa inserir o seu saldo e valor de su compra
if (saldoUsuario > valorCompra) {
    alert(`A compra foi realizada com sucesso! Seu saldo atual é ${a}.`);
} else if (a < 0) {   
    alert('Saldo insuficiente.');
} else {
    alert(`A compra foi realizada com sucesso! Seu saldo atual é ${a}.`);
}
// uso de condições para determinar se é possível ou não executar a compra
