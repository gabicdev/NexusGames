function adicionarAoCarrinho(idProduto) {

    const produto = produtos.find(
        produto => produto.id === idProduto
    );

    if (!produto) {
        return;
    }

    let carrinho = JSON.parse(
        localStorage.getItem("carrinho")
    ) || [];

    carrinho.push(produto);

    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );

    atualizarContadorCarrinho();

    alert(`${produto.nome} foi adicionado ao carrinho!`);
}


function atualizarContadorCarrinho() {

    const carrinho = JSON.parse(
        localStorage.getItem("carrinho")
    ) || [];

    const contador = document.getElementById(
        "contadorCarrinho"
    );

    if (contador) {
        contador.textContent = carrinho.length;
    }
}


atualizarContadorCarrinho();