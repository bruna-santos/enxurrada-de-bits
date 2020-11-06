let anoAtual = '2020';
let nome, texto, anoNascimento;
nome = prompt('Digite seu nome: ');
function idade (anoAtual, anoNascimento) {
    return anoAtual-anoNascimento;
}
// função para cálculo da idade
let a = idade(2020, prompt('Digite seu ano de nascimento: '));
// usando o parâmentro fixo do ano atual e um prompt para o ano de nascimento do usuário
texto = alert(`Olá, seu nome é ${nome} e você tem ${a} anos`);
