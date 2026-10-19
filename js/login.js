// ==============================
// ELEMENTOS DO HTML
// ==============================

const formulario = document.getElementById("formLogin");

const campoLogin = document.getElementById("login");
const campoSenha = document.getElementById("senha");

const erroLogin = document.getElementById("erroLogin");
const erroSenha = document.getElementById("erroSenha");

const mensagemLogin = document.getElementById("mensagemLogin");

const botaoLogin = document.querySelector(".botao-login");



// ==============================
// LIMPA AS MENSAGENS AO DIGITAR
// ==============================

campoLogin.addEventListener("input", function () {

    erroLogin.textContent = "";

    mensagemLogin.textContent = "";

    mensagemLogin.classList.remove("erro", "sucesso");

});


campoSenha.addEventListener("input", function () {

    erroSenha.textContent = "";

    mensagemLogin.textContent = "";

    mensagemLogin.classList.remove("erro", "sucesso");

});



// ==============================
// ENVIO DO FORMULÁRIO
// ==============================

formulario.addEventListener("submit", function (evento) {

    evento.preventDefault();



    // ==============================
    // PEGA OS VALORES DIGITADOS
    // ==============================

    const loginDigitado = campoLogin.value.trim();

    const senhaDigitada = campoSenha.value.trim();



    // ==============================
    // LIMPA MENSAGENS ANTERIORES
    // ==============================

    erroLogin.textContent = "";

    erroSenha.textContent = "";

    mensagemLogin.textContent = "";

    mensagemLogin.classList.remove(
        "erro",
        "sucesso"
    );



    // ==============================
    // VERIFICA LOGIN VAZIO
    // ==============================

    if (loginDigitado === "") {

        erroLogin.textContent =
            "Preenchimento obrigatório*";

        campoLogin.focus();

        return;
    }



    // ==============================
    // VERIFICA SENHA VAZIA
    // ==============================

    if (senhaDigitada === "") {

        erroSenha.textContent =
            "Preenchimento obrigatório*";

        campoSenha.focus();

        return;
    }



    // ==============================
    // FORMATO DO LOGIN
    // ==============================

    const formatoLogin =
        /^[A-Za-zÀ-ÖØ-öø-ÿ]{6}$/;



    // ==============================
    // VALIDA LOGIN
    // ==============================

    if (!formatoLogin.test(loginDigitado)) {

        erroLogin.textContent =
            "Digite exatamente 6 letras.";

        campoLogin.focus();

        return;
    }



    // ==============================
    // FORMATO DA SENHA
    // ==============================

    const formatoSenha =
        /^[A-Za-zÀ-ÖØ-öø-ÿ]{8}$/;



    // ==============================
    // VALIDA SENHA
    // ==============================

    if (!formatoSenha.test(senhaDigitada)) {

        erroSenha.textContent =
            "Digite exatamente 8 letras.";

        campoSenha.focus();

        return;
    }



    // ==============================
    // BUSCA OS USUÁRIOS
    // ==============================

    const usuarios =
        JSON.parse(
            localStorage.getItem("usuarios")
        ) || [];



    // ==============================
    // PROCURA O USUÁRIO
    // ==============================

    const usuarioEncontrado =
        usuarios.find(function (usuario) {

            return (

                usuario.login &&

                usuario.senha &&

                usuario.login.toLowerCase() ===
                    loginDigitado.toLowerCase() &&

                usuario.senha === senhaDigitada

            );

        });



    // ==============================
    // USUÁRIO NÃO ENCONTRADO
    // ==============================

    if (!usuarioEncontrado) {

        mensagemLogin.textContent =
            "Login ou senha incorretos.";

        mensagemLogin.classList.add("erro");

        return;
    }



    // ==============================
    // USUÁRIO ENCONTRADO
    // ==============================

    const usuarioLogado = {

        nome: usuarioEncontrado.nome,

        login: usuarioEncontrado.login

    };



    // ==============================
    // SALVA QUEM ESTÁ LOGADO
    // ==============================

    localStorage.setItem(

        "usuarioLogado",

        JSON.stringify(usuarioLogado)

    );



    // ==============================
    // MENSAGEM DE SUCESSO
    // ==============================

    mensagemLogin.textContent =
        "Login realizado com sucesso!";

    mensagemLogin.classList.add("sucesso");



    // ==============================
    // BLOQUEIA NOVO CLIQUE
    // ==============================

    botaoLogin.disabled = true;

    botaoLogin.textContent = "Entrando...";



    // ==============================
    // REDIRECIONAMENTO
    // ==============================

    setTimeout(function () {

        window.location.href = "index.html";

    }, 1000);

});