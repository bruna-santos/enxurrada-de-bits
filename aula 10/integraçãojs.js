let header = document.querySelector('header');
header.innerHTML = '<h1>Página integração JS e HTML</h1> <nav> <ul> <li><a href="../js.html">Atividades JS</a></li> <li><a href="../index.html">Homepage</a></li>';

let main = document.querySelector('main');
main.innerHTML = '<article> <h2>Fotos de cachorros fofinhos</h2> <p>Raças:</p> <ul><li><a href="#labrador">Labrador</a></li> <li><a href="#husky">Husky Siberiano</a></li> <li><a href="#pug">Pug</a></li></ul> <br><br><br><br> <h3>Labrador</h3> <p>O cachorro Labrador é irresistível para quem ama animais. Uma raça muito simpática, que ama agradar seus companheiros humanos e fazer a alegria da casa. Além de fiel, se bem treinado, pode dar um excelente suporte a pessoas com necessidades especiais e deficientes físicos.</p> <img src="labrador1.png" id="foto1"/> <button onclick="clicouNoBotaoLabrador()">1</button> <button onclick="clicouNoBotaoLabrador()">2</button> <button onclick="clicouNoBotaoLabrador()">3</button> </article>  <br><br><br><br> <div> <h3>Husky Siberiano</h3> <p>O Brasil é um país tropical. Apesar da sua imensa expansão, em quase todo o seu território, o calor e as altas temperaturas predominam. Essa, talvez, seja a explicação da pouca popularidade do Husky Siberiano por aqui, um cãozinho com origem no extremo nordeste da Ásia e que adora temperaturas negativas. Criados para o trabalho, esses cachorros têm toda a aparência dos lobos selvagens, mas engana-se quem pensa que eles são agressivos. Extremamente amigáveis, os Huskys são fáceis de lidar e adoram companhia — do tutor, ou de outros cãezinhos.</p> <img src="husky1.png" id="foto2"/> <button onclick="clicouNoBotaoHusky()">1</button> <button onclick="clicouNoBotaoHusky()">2</button> <button onclick="clicouNoBotaoHusky()">3</button> </div> <section><h3>Pug</h3> <p>O Pug é um cão de pequeno porte, com olhinhos expressivos e grandes, cabeça arredondada, rabinho enrolado e muitas ruguinhas pelo corpo. A raça é extremamente amigável e encanta com muita facilidade crianças e outros animais, até mesmo os gatos. Muito amorosos e apegados aos humanos, eles ficam plenamente felizes simplesmente por fazerem parte de uma família.</p> <img src="pug1.png" id="foto3"/> <button onclick="clicouNoBotaoPug()">1</button> <button onclick="clicouNoBotaoPug()">2</button> <button onclick="clicouNoBotaoPug()">3</button> </section>';

let article = document.querySelector('article');
article.id = "labrador";

let div = document.querySelector('div');
div.id = "husky";

let section = document.querySelector('section');
section.id = "pug";

let img1 = document.querySelector('img#foto1');
let imagemAtual=0;

function clicouNoBotaoLabrador () {
    if (imagemAtual === 0) {
        img1.src="labrador1.png";
        imagemAtual = 1;
    } else if (imagemAtual === 1) {
        img1.src="labrador2.png";
        imagemAtual = 2;
    } else {
        img1.src="labrador3.png";
        imagemAtual = 0;
    }
}

let img2 = document.querySelector('img#foto2');

function clicouNoBotaoHusky () {
    if (imagemAtual === 0) {
        img2.src="husky1.png";
        imagemAtual = 1;
    } else if (imagemAtual === 1) {
        img2.src="husky2.png";
        imagemAtual = 2;
    } else {
        img2.src="husky3.png";
        imagemAtual = 0;
    }
}

let img3 = document.querySelector('img#foto3');

function clicouNoBotaoPug () {
    if (imagemAtual === 0) {
        img3.src="pug1.png";
        imagemAtual = 1;
    } else if (imagemAtual === 1) {
        img3.src="pug2.png";
        imagemAtual = 2;
    } else {
        img3.src="pug3.png";
        imagemAtual = 0;
    }
}
