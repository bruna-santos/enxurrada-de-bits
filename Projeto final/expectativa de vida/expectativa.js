let nome = document.querySelector('#nome');
let genero = document.querySelector('#genero');
let c = document.querySelector('#idade');
let d = document.querySelector('#tamanho');
const pequeno = 16;
const medio = 14;
const grande = 12;
let a, idadeTotal, x, y, z, s;
let resultado = document.querySelector('#resultadoFinal');
let text = document.createElement('p');
let i = 0;
function clicouNoBotao(){
        if (genero.value === 'macho') {
            a = 'o';
            x = 'e';
            z = 'O';
            s = 'seu';
        } else if (genero.value === 'femea'){
            a = 'a';
            x = 'a';
            z = 'A';
            s = 'sua';
        } else if (genero.value === 'none'){
            i++;
        }
       if (d.value === 'pequeno') {
        idadeTotal = parseInt(pequeno) - parseInt(c.value);
        resultado.innerHTML = (`Como ${a} ${nome.value} é de porte ${d.value}, sua expectativa de vida é de 16 anos e por isso seu pet provavelmente viverá mais ${parseInt(idadeTotal)} anos.`);
        y = 16;
    }   if (d.value === 'grande') {
        idadeTotal = parseInt(grande) - parseInt(c.value);
        resultado.innerHTML = (`Como ${a} ${nome.value} é de porte ${d.value}, sua expectativa de vida é de 12 anos e por isso seu pet provavelmente viverá mais ${parseInt(idadeTotal)} anos.`);
        y = 12;
    } else if (d.value === 'médio') {
        idadeTotal = parseInt(medio) - parseInt(c.value);
        resultado.innerHTML = (`Como ${a} ${nome.value} é de porte ${d.value}, sua expectativa de vida é de 14 anos e por isso seu pet provavelmente viverá mais ${parseInt(idadeTotal)} anos.`);
        y = 14;
    } else if (d.value === 'none') {
        i++;
    }
        if (parseInt(idadeTotal) < 3) {
        triste.innerHTML = (`Infelizmente ${a} ${nome.value} tem apenas alguns aninhos restantes :( <br> Aproveite ao máximo seu tempo com el${x}!`)
    }
        if (parseInt(i) > 0){
            text.innerHTML = ('É necessário preencher <strong>TODOS</strong> os campos para realizar a consulta.');
            text.innerHTML = "";
            resultado.appendChild(text);
    }
        if (parseInt(idadeTotal) < 0){
            text.innerHTML = (`A expectativa de vida de cães de porte ${d.value} geralmente é ${y} anos. ${z} ${nome.value} já ultrapassou essa média. Isso mostra que el${x} é um pet muito saudável, mas que provavelmente não tem mais muito tempo :( <br> Por isso, aproveite ao máximo seu tempo com ${a} ${s} companheir${a}!`);
            text.innerHTML = "";
            resultado.appendChild(text);
        }
        if (parseInt(idadeTotal) === 0){
            text.innerHTML = (`A expectativa de vida de cães de porte ${d.value} geralmente é ${y} anos. ${z} ${nome.value} já alcançou essa faixa etária. Isso mostra que el${x} é um pet saudável, mas que provavelmente não tem mais muito tempo :( <br> Por isso, aproveite ao máximo seu tempo com ${a} ${s} companheir${a}!`);
            text.innerHTML = "";
            resultado.appendChild(text);
        }
}