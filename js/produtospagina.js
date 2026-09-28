const listaProdutos = document.getElementById("listaProdutos");

let produtosDaLoja = [...produtos];

const produtosSalvos =
    JSON.parse(localStorage.getItem("produtos")) || [];

produtosDaLoja = [
    ...produtosDaLoja,
    ...produtosSalvos
];

// Texto que mostra qual filtro está selecionado
const filtroAtual = document.querySelector(".filtro-atual strong");


function mostrarProdutos(categoriaSelecionada = "todos") {

    listaProdutos.innerHTML = "";

    produtosDaLoja.forEach(produto => {

        if (
            categoriaSelecionada !== "todos" &&
            produto.idcategoria != categoriaSelecionada
        ) {
            return;
        }

        listaProdutos.innerHTML += `
            <div class="produto-card" onclick="abrirProduto(${produto.id})">

                <img src="${produto.urlimagem}" alt="${produto.nome}">

                <h3>${produto.nome}</h3>

                <div class="avaliacao">
                    ★★★★★
                    <span>(0 avaliações)</span>
                </div>

                

                <div class="preco">
                    <span class="preco-antigo">
                        R$ ${produto.preço.toFixed(2).replace(".", ",")}
                    </span>

                    <strong>
                        R$ ${produto.preçooferta.toFixed(2).replace(".", ",")}
                    </strong>
                </div>

                <button 
                    class="btn-carrinho"
                    onclick="event.stopPropagation(); adicionarAoCarrinho(${produto.id})">
                    🛒 Adicionar ao carrinho
                </button>

            </div>
        `;
    });
}


// Mostra todos os produtos quando a página abre
mostrarProdutos();


const botoesFiltro = document.querySelectorAll(".filtros button");


botoesFiltro.forEach(botao => {

    botao.addEventListener("click", () => {

        const categoria = botao.dataset.categoria;

        // Filtra os produtos
        mostrarProdutos(categoria);

        // Atualiza o texto do filtro
        if (filtroAtual) {
            filtroAtual.textContent =
                categoria === "todos"
                    ? "Todos os produtos"
                    : botao.textContent.trim();
        }

    });

});

function abrirProduto(id) {

    window.location.href = `produto.html?id=${id}`;

}
