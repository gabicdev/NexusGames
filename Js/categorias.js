// JSON fixo por enquanto
const categorias = [
    {
        id: 1,
        nome: "Mouses",
        descricao: "Celulares, televisores e eletrônicos em geral",
        imagem: "assets/imagens/Mouse Logitech.png"
    },
    {
        id: 2,
        nome: "Monitores",
        descricao: "Monitores, Notebooks, computadores e acessórios",
        imagem: "assets/imagens/monitor.png"
    },
    {
        id: 3,
        nome: "Fones",
        descricao: "Smartphones e acessórios",
        imagem: "assets/imagens/Fone razer.png"
    },
    {
        id: 4,
        nome: "Teclados",
        descricao: "Móveis para casa e escritório",
        imagem: "assets/imagens/tecladoredragao.png"
    },
    {
        id: 5,
        nome: "Controles",
        descricao: "Jogos, consoles e acessórios",
        imagem: "assets/imagens/Controleps5.png"
    }
];


// Carrega as categorias na página
const listaCategorias =
    document.getElementById("listaCategorias");

if (listaCategorias) {

    categorias.forEach(categoria => {

        listaCategorias.innerHTML += `

            <div class="categoria-card">

                <img src="${categoria.imagem}"
                     alt="${categoria.nome}">

                <p>${categoria.nome}</p>

            </div>

        `;

    });

}


// Abre uma categoria
function abrirCategoria(id) {

    const categoria = categorias.find(
        x => x.id === id
    );

    if (categoria) {

        alert(
            "Categoria selecionada: " +
            categoria.nome
        );

    }
}