let personalidade = document.querySelector('#personalidade');
let rotina = document.querySelector('#rotina');
let exercicio = document.querySelector('#exercicio');
let espaço = document.querySelector('#espaço');
let orçamento = document.querySelector('#orçamento');
let criança = document.querySelector('#criança');
let animais = document.querySelector('#animais');
let barulho = document.querySelector('#barulho');
let tamanho, temperamento, pedigree;
let grande = 0;
let pequeno = 0;
let tranquilo = 0;
let agitado = 0;
let raça = 0;
let srd = 0;
let i = 0;
let respostas = document.querySelector('#respostas');
function botaoQuiz() {
    if (personalidade.value === 'Carente'){
        agitado++;
    } else if (personalidade.value === 'Distante'){
        tranquilo++;
    } else {
        i++;
    }
    if (rotina.value === 'Calma'){
        agitado++,
        raça++;
    } else if (rotina.value === 'Agitada') {
        tranquilo++,
        srd++;
    } else {
        i++;
    }
    if (exercicio.value === 'Sim'){
        agitado++,
        grande++;
    } else if (exercicio.value === 'Não') {
        tranquilo++,
        pequeno++;
    } else {
        i++;
    }
    if (espaço.value === 'Sim'){
        agitado++,
        grande++;
    } else if(espaço.value === 'Não') {
        tranquilo++,
        pequeno++;
    } else {
        i++;
    }
    if (orçamento.value === 'Baixo'){
        srd++;
    } else if (orçamento.value === 'Alto') {
        raça++;
    } else {
        i++;
    }
    if (criança.value === 'Sim'){
        tranquilo++,
        pequeno++;
    } else if (criança.value === 'Não') {
        agitado++,
        grande++;
    } else {
        i++;
    }
    if (animais.value === 'Sim'){
        tranquilo++;
    } else if (animais.value === 'Não') {
        agitado++;
    } else {
        i++;
    }
    if (barulho.value === 'Sim'){
        tranquilo++;
    } else if (barulho.value === 'Não'){
        agitado++;
    } else {
        i++;
    }
    if (parseInt(grande) >= 2) {
        tamanho = 'grande';
    } else {
        tamanho = 'pequeno';
    }
    if (parseInt(tranquilo) >= 4) {
        temperamento = 'tranquilo';
    } else {
        temperamento = 'agitado';
    }
    if (parseInt(raça) > 1) {
        pedigree = 'de raça';
    } else {
        pedigree = 'sem raça definida ou, como o conhecemos mais, o vira-lata';
    }
    respostas.innerHTML = `De acordo com suas respostas, um cachorro ${tamanho}, ${temperamento} e ${pedigree} seria conciliável com a sua rotina e um bom companheiro para o seu estilo de vida! Se quiser, pode conferir a personalidade de diversas raças que se encaixam no seu perfil na seção "Raças" do menu e assim escolher melhor :) `
    if (parseInt(i) > 0){
        respostas.innerHTML = 'É necessário preencher TODOS os campos para realizar o quiz.'
    }
}