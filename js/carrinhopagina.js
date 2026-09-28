const listaCarrinho = document.getElementById("listaCarrinho");
const subtotalElemento = document.getElementById("subtotal");
const totalElemento = document.getElementById("total");


function carregarCarrinho() {

    const carrinho = JSON.parse(
        localStorage.getItem("carrinho")
    ) || [];

    listaCarrinho.innerHTML = "";

    if (carrinho.length === 0) {

        listaCarrinho.innerHTML = `
            <div class="carrinho-vazio">

                <i class="fa-solid fa-cart-shopping"></i>

                <h2>Seu carrinho está vazio</h2>

                <p>
                    Adicione produtos para continuar sua compra.
                </p>

                <a href="produtos.html">
                    Ver produtos
                </a>

            </div>
        `;

        atualizarResumo();
        return;
    }


    // AGRUPA OS PRODUTOS IGUAIS
    const produtosAgrupados = {};

    carrinho.forEach(produto => {

        if (!produtosAgrupados[produto.id]) {

            produtosAgrupados[produto.id] = {
                produto: produto,
                quantidade: 1
            };

        } else {

            produtosAgrupados[produto.id].quantidade++;

        }

    });


    // MOSTRA OS PRODUTOS AGRUPADOS
    Object.values(produtosAgrupados).forEach(item => {

        const produto = item.produto;
        const quantidade = item.quantidade;

        listaCarrinho.innerHTML += `

            <div class="item-carrinho">

                <img
                    src="${produto.urlimagem}"
                    alt="${produto.nome}"
                >


                <div class="info-produto">

                    <h3>${produto.nome}</h3>

                    <div class="avaliacao">
                        ★★★★★
                        <span>(0 avaliações)</span>
                    </div>

                    <strong class="preco-produto">
                        R$ ${produto.preçooferta
                            .toFixed(2)
                            .replace(".", ",")}
                    </strong>

                </div>


                <div class="quantidade">

                    <button onclick="diminuirQuantidade(${produto.id})">
                        −
                    </button>

                    <span>${quantidade}</span>

                    <button onclick="aumentarQuantidade(${produto.id})">
                        +
                    </button>

                </div>


                <button
                    class="btn-remover"
                    onclick="removerDoCarrinho(${produto.id})">

                    <i class="fa-solid fa-trash"></i>

                </button>

            </div>

        `;
    });


    atualizarResumo();
}


/* =========================
   ATUALIZA TOTAL
========================= */

function atualizarResumo() {

    const carrinho = JSON.parse(
        localStorage.getItem("carrinho")
    ) || [];

    let subtotal = 0;

    carrinho.forEach(produto => {

        subtotal += produto.preçooferta;

    });


    subtotalElemento.textContent =
        `R$ ${subtotal.toFixed(2).replace(".", ",")}`;

    totalElemento.textContent =
        `R$ ${subtotal.toFixed(2).replace(".", ",")}`;
}


/* =========================
   ADICIONAR QUANTIDADE
========================= */

function aumentarQuantidade(idProduto) {

    const carrinho = JSON.parse(
        localStorage.getItem("carrinho")
    ) || [];

    const produto = carrinho.find(
        produto => produto.id === idProduto
    );

    if (produto) {

        carrinho.push(produto);

    }

    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );

    carregarCarrinho();
    atualizarContadorCarrinho();
}


/* =========================
   DIMINUIR QUANTIDADE
========================= */

function diminuirQuantidade(idProduto) {

    const carrinho = JSON.parse(
        localStorage.getItem("carrinho")
    ) || [];

    const indice = carrinho.findIndex(
        produto => produto.id === idProduto
    );

    if (indice !== -1) {

        carrinho.splice(indice, 1);

    }

    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );

    carregarCarrinho();
    atualizarContadorCarrinho();
}


/* =========================
   REMOVER PRODUTO
========================= */

function removerDoCarrinho(idProduto) {

    let carrinho = JSON.parse(
        localStorage.getItem("carrinho")
    ) || [];

    carrinho = carrinho.filter(
        produto => produto.id !== idProduto
    );

    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );

    carregarCarrinho();
    atualizarContadorCarrinho();
}


carregarCarrinho();