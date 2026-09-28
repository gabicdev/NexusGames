const inputImagem = document.getElementById("imagem");
const previewImagem = document.getElementById("previewImagem");
const btnSalvar = document.getElementById("btnSalvar");


// ================================
// PREVIEW DA IMAGEM
// ================================

inputImagem.addEventListener("change", () => {

    const arquivo = inputImagem.files[0];

    if (!arquivo) {
        return;
    }

    const leitor = new FileReader();

    leitor.onload = function (evento) {

        previewImagem.src = evento.target.result;

        previewImagem.style.display = "block";
    };

    leitor.readAsDataURL(arquivo);
});


// ================================
// SALVAR PRODUTO
// ================================

btnSalvar.addEventListener("click", () => {

    const nome = document.getElementById("nome").value.trim();

    const descricao =
        document.getElementById("descricao").value.trim();

    const categoria =
        document.getElementById("categoria").value;

    const preco =
        parseFloat(document.getElementById("preco").value);

    const precoOferta =
        parseFloat(document.getElementById("precoOferta").value);

    const estoque =
        parseInt(document.getElementById("estoque").value);

    const oferta =
        document.getElementById("oferta").checked;

    const destaque =
        document.getElementById("destaque").checked;


    // ================================
    // VALIDAÇÃO
    // ================================

    if (
        !nome ||
        !descricao ||
        !categoria ||
        isNaN(preco) ||
        isNaN(precoOferta) ||
        isNaN(estoque)
    ) {

        alert("Preencha todos os campos.");

        return;
    }


    // ================================
    // IMAGEM
    // ================================

    const imagem =
        previewImagem.src || "";


    // ================================
    // BUSCA PRODUTOS SALVOS
    // ================================

  let produtosSalvos =
    JSON.parse(localStorage.getItem("produtos")) || [];

const maiorIdExistente = Math.max(
    0,
    ...produtos.map(produto => produto.id),
    ...produtosSalvos.map(produto => produto.id)
);

const novoId = maiorIdExistente + 1;


    // ================================
    // CRIA PRODUTO
    // ================================

    const novoProduto = {

        id: novoId,

        nome: nome,

        idcategoria: Number(categoria),

        descrição: descricao,

        preço: preco,

        preçooferta: precoOferta,

        quantidadedeestoque: estoque,

        urlimagem: imagem,

        oferta: oferta,

        destaque: destaque
    };


    // ================================
    // SALVA
    // ================================

    produtosSalvos.push(novoProduto);

    localStorage.setItem(
        "produtos",
        JSON.stringify(produtosSalvos)
    );


    alert("Produto cadastrado com sucesso!");


    // LIMPA FORMULÁRIO

    document.getElementById("nome").value = "";
    document.getElementById("descricao").value = "";
    document.getElementById("categoria").value = "";
    document.getElementById("preco").value = "";
    document.getElementById("precoOferta").value = "";
    document.getElementById("estoque").value = "";

    document.getElementById("oferta").checked = false;
    document.getElementById("destaque").checked = false;

    inputImagem.value = "";

    previewImagem.src = "";
    previewImagem.style.display = "none";

});