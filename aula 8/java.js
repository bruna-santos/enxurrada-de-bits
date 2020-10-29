let saldoUsuario = prompt('Digite seu saldo: ')
let valorCompra = prompt('Digite o valor da sua compra: ')
if (saldoUsuario > valorCompra) {
    let saldoAtual = saldoUsuario - valorCompra
    alert(`A compra foi realizada com sucesso! Seu saldo atual é ${saldoAtual}.`)
} else if (saldoUsuario < valorCompra) {
    alert ('Saldo insuficiente.')
}