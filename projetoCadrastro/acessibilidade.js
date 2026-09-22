const acessibilidade = document.querySelector(".acessibilidade");
const botaoAcessibilidade = document.querySelector("#botaoAcessibilidade");
const painelAcessibilidade = document.querySelector("#painelAcessibilidade");

const temaClaro = document.querySelector("#temaClaro");
const temaEscuro = document.querySelector("#temaEscuro");

const aumentarFonte = document.querySelector("#aumentarFonte");
const diminuirFonte = document.querySelector("#diminuirFonte");


// =============================
// CONFIGURAÇÕES SALVAS
// =============================

let tamanhoFonte = Number(
    localStorage.getItem("tamanhoFonte")
) || 16;

const temaSalvo = localStorage.getItem("tema");

const posicaoX = localStorage.getItem("acessibilidadeX");
const posicaoY = localStorage.getItem("acessibilidadeY");


// =============================
// APLICAR CONFIGURAÇÕES
// =============================

function aplicarTamanhoFonte() {

    document.documentElement.style.fontSize =
        tamanhoFonte + "px";

    localStorage.setItem(
        "tamanhoFonte",
        tamanhoFonte
    );
}


function aplicarTema(tema) {

    document.body.classList.remove(
        "tema-claro",
        "tema-escuro"
    );

    document.body.classList.add(tema);

    localStorage.setItem("tema", tema);
}


function aplicarPosicao() {

    if (posicaoX !== null && posicaoY !== null) {

        acessibilidade.style.left =
            posicaoX + "px";

        acessibilidade.style.top =
            posicaoY + "px";
    }
}


// =============================
// CARREGAR CONFIGURAÇÕES
// =============================

aplicarTamanhoFonte();

if (temaSalvo) {
    aplicarTema(temaSalvo);
}

aplicarPosicao();


// =============================
// ABRIR / FECHAR PAINEL
// =============================

let moveu = false;

botaoAcessibilidade.addEventListener("click", function () {

    if (moveu) {
        moveu = false;
        return;
    }

    painelAcessibilidade.classList.toggle("exibir");
});


// =============================
// ARRASTAR BOTÃO
// =============================

let arrastando = false;

let deslocamentoX = 0;
let deslocamentoY = 0;

botaoAcessibilidade.addEventListener("mousedown", function (evento) {

    arrastando = true;
    moveu = false;

    const rect =
        acessibilidade.getBoundingClientRect();

    deslocamentoX =
        evento.clientX - rect.left;

    deslocamentoY =
        evento.clientY - rect.top;

    acessibilidade.classList.add("arrastando");
});


document.addEventListener("mousemove", function (evento) {

    if (!arrastando) {
        return;
    }

    moveu = true;

    let novaPosicaoX =
        evento.clientX - deslocamentoX;

    let novaPosicaoY =
        evento.clientY - deslocamentoY;


    const limiteX =
        window.innerWidth -
        acessibilidade.offsetWidth;

    const limiteY =
        window.innerHeight -
        acessibilidade.offsetHeight;


    novaPosicaoX =
        Math.max(
            0,
            Math.min(novaPosicaoX, limiteX)
        );

    novaPosicaoY =
        Math.max(
            0,
            Math.min(novaPosicaoY, limiteY)
        );


    acessibilidade.style.left =
        novaPosicaoX + "px";

    acessibilidade.style.top =
        novaPosicaoY + "px";


    localStorage.setItem(
        "acessibilidadeX",
        novaPosicaoX
    );

    localStorage.setItem(
        "acessibilidadeY",
        novaPosicaoY
    );
});


document.addEventListener("mouseup", function () {

    arrastando = false;

    acessibilidade.classList.remove("arrastando");
});


// =============================
// MANTER BOTÃO DENTRO DA TELA
// =============================

window.addEventListener("resize", function () {

    const rect =
        acessibilidade.getBoundingClientRect();


    let novaPosicaoX = rect.left;
    let novaPosicaoY = rect.top;


    const limiteX =
        window.innerWidth -
        acessibilidade.offsetWidth;

    const limiteY =
        window.innerHeight -
        acessibilidade.offsetHeight;


    novaPosicaoX =
        Math.max(
            0,
            Math.min(novaPosicaoX, limiteX)
        );

    novaPosicaoY =
        Math.max(
            0,
            Math.min(novaPosicaoY, limiteY)
        );


    acessibilidade.style.left =
        novaPosicaoX + "px";

    acessibilidade.style.top =
        novaPosicaoY + "px";


    localStorage.setItem(
        "acessibilidadeX",
        novaPosicaoX
    );

    localStorage.setItem(
        "acessibilidadeY",
        novaPosicaoY
    );
});


// =============================
// TEMA CLARO
// =============================

temaClaro.addEventListener("click", function () {

    aplicarTema("tema-claro");
});


// =============================
// TEMA ESCURO
// =============================

temaEscuro.addEventListener("click", function () {

    aplicarTema("tema-escuro");
});


// =============================
// AUMENTAR FONTE
// =============================

aumentarFonte.addEventListener("click", function () {

    if (tamanhoFonte < 24) {

        tamanhoFonte += 1;

        aplicarTamanhoFonte();
    }
});


// =============================
// DIMINUIR FONTE
// =============================

diminuirFonte.addEventListener("click", function () {

    if (tamanhoFonte > 12) {

        tamanhoFonte -= 1;

        aplicarTamanhoFonte();
    }
});