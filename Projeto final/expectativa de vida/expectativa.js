let nome = document.querySelector('#nome');
let b = document.querySelector('#genero');
let c = document.querySelector('#idade');
let d = document.querySelector('#tamanho');
const pequeno = 16;
const medio = 14;
const grande = 12;
let a, idadeTotal;
let resultado = document.querySelector('#dadosFinais');
let i = 0;
function clicouNoBotao(){
        if (b.value === 'macho') {
            a = 'o';
        } else if (b.value === 'femea'){
            a = 'a';
        } else {
            i++;
        }
        if (b.value === 'macho') {
            x = 'e';
        } else if (b.value === 'femea'){
            x = 'a';
        } else {
            i++;
        }
       if (d.value === 'pequeno') {
        idadeTotal = parseInt(pequeno) - parseInt(c.value);
        resultado.innerHTML = (`Como ${a} ${nome.value} é de porte ${d.value}, sua expectativa de vida é de 16 anos e por isso seu pet provavelmente viverá mais ${parseInt(idadeTotal)} anos.`);
    }   if (d.value === 'grande') {
        idadeTotal = parseInt(grande) - parseInt(c.value);
        resultado.innerHTML = (`Como ${a} ${nome.value} é de porte ${d.value}, sua expectativa de vida é de 12 anos e por isso seu pet provavelmente viverá mais ${parseInt(idadeTotal)} anos.`);
    } else if (d.value === 'médio') {
        idadeTotal = parseInt(medio) - parseInt(c.value);
        resultado.innerHTML = (`Como ${a} ${nome.value} é de porte ${d.value}, sua expectativa de vida é de 14 anos e por isso seu pet provavelmente viverá mais ${parseInt(idadeTotal)} anos.`);
    }   else {
        i++;
    }
        if (parseInt(idadeTotal) < 3) {
        triste.innerHTML = (`Infelizmente ${a} ${nome.value} tem apenas alguns aninhos restantes :( <br> Aproveite ao máximo seu tempo com el${x}!`)
    }
        if (parseInt(i) > 0){
            resultado.innerHTML = 'É necessário preencher TODOS os campos para realizar a consulta.'
        }
}