// JSON fixo por enquanto
const produtos = [

  {
    id: 1,
    nome: "Teclado Mecânico Gamer RGB",
    idcategoria: 1,
    descrição: "Teclado mecânico gamer com iluminação RGB e switches de alta precisão.",
    preço: 299.90,
    preçooferta: 249.90,
    quantidadedeestoque: 15,
    urlimagem: "assets/imagens/tecladoredragao.png",
    oferta: true,
    destaque: true
  },
  {
    "id": 2,
    "nome": "Mouse Gamer RGB",
    "idcategoria": 2,
    "descrição": "Mouse gamer ergonômico com sensor de alta precisão e iluminação RGB.",
    "preço": 159.90,
    "preçooferta": 119.90,
    "quantidade de estoque": 22,
    "urlimagem": "imagens/mouse-gamer.jpg",
    "oferta": true,
    "destaque": true
  },
  {
    "id": 3,
    "nome": "Headset Gamer 7.1",
    "idcategoria": 3,
    "descrição": "Headset gamer com áudio surround 7.1, microfone integrado e conforto para longas sessões.",
    "preço": 249.90,
    "preçooferta": 199.90,
    "quantidade de estoque": 12,
    "urlimagem": "imagens/headset-gamer.jpg",
    "oferta": true,
    "destaque": true
  },
  {
    "id": 4,
    "nome": "Mousepad Gamer XXL",
    "idcategoria": 4,
    "descrição": "Mousepad de grande dimensão com superfície otimizada para maior precisão.",
    "preço": 99.90,
    "preçooferta": 79.90,
    "quantidade de estoque": 30,
    "urlimagem": "imagens/mousepad-gamer.jpg",
    "oferta": true,
    "destaque": false
  },
  {
    "id": 5,
    "nome": "Controle Gamer Sem Fio",
    "idcategoria": 5,
    "descrição": "Controle sem fio compatível com PC, oferecendo conforto e resposta rápida.",
    "preço": 279.90,
    "preçooferta": 229.90,
    "quantidade de estoque": 10,
    "urlimagem": "imagens/controle-gamer.jpg",
    "oferta": true,
    "destaque": true
  },
  {
    "id": 6,
    "nome": "Webcam Full HD",
    "idcategoria": 6,
    "descrição": "Webcam Full HD ideal para transmissões, chamadas e criação de conteúdo.",
    "preço": 199.90,
    "preçooferta": 169.90,
    "quantidade de estoque": 18,
    "urlimagem": "imagens/webcam-fullhd.jpg",
    "oferta": true,
    "destaque": false
  },
  {
    "id": 7,
    "nome": "Cadeira Gamer",
    "idcategoria": 7,
    "descrição": "Cadeira gamer ergonômica com apoio para braços e encosto reclinável.",
    "preço": 899.90,
    "preçooferta": 749.90,
    "quantidade de estoque": 8,
    "urlimagem": "imagens/cadeira-gamer.jpg",
    "oferta": true,
    "destaque": true
  },
  {
    "id": 8,
    "nome": "Monitor Gamer 24 Polegadas",
    "idcategoria": 8,
    "descrição": "Monitor gamer de 24 polegadas com alta taxa de atualização e excelente qualidade de imagem.",
    "preço": 1199.90,
    "preçooferta": 999.90,
    "quantidade de estoque": 7,
    "urlimagem": "imagens/monitor-gamer.jpg",
    "oferta": true,
    "destaque": true
  },
  {
    "id": 9,
    "nome": "Microfone Gamer USB",
    "idcategoria": 9,
    "descrição": "Microfone USB com captação de áudio de alta qualidade para jogos e transmissões.",
    "preço": 349.90,
    "preçooferta": 299.90,
    "quantidade de estoque": 14,
    "urlimagem": "imagens/microfone-gamer.jpg",
    "oferta": true,
    "destaque": false
  },
  {
    "id": 10,
    "nome": "SSD NVMe 1TB",
    "idcategoria": 10,
    "descrição": "SSD NVMe de 1TB com alta velocidade de leitura e gravação para melhorar o desempenho do computador.",
    "preço": 499.90,
    "preçooferta": 429.90,
    "quantidade de estoque": 20,
    "urlimagem": "imagens/ssd-nvme.jpg",
    "oferta": true,
    "destaque": false
  }

];



/*
 Carrega os produtos na página
const listaProdutos =
    document.getElementById("listaProdutos");

if (listaProdutos) {

    produtos.forEach(produto => {

        listaProdutos.innerHTML += `

            <div class="produto-card">

                <img src="${produto.urlimagem}"
                     alt="${produto.nome}">

                <p>${produto.nome}</p>

            </div>

        `;

    });

}

 Abre um produto
function abrirProduto(id) {

    const produto = produtos.find(
        x => x.id === id
    );

    if (produto) {

        alert(
            "Produto selecionada: " +
            produto.nome
        );

    }
}
*/

const listaProdutos = document.getElementById("listaProdutos");

if (listaProdutos) {

    produtos.forEach(produto => {

        listaProdutos.innerHTML += `

            <div class="produto-card">

                <img src="${produto.urlimagem}" 
                     alt="${produto.nome}">

                <p>${produto.nome}</p>

            </div>

        `;

    });

}

// CARROSSEL

const btnAnterior = document.getElementById("anterior");
const btnProximo = document.getElementById("proximo");

if (btnAnterior && btnProximo && listaProdutos) {

    btnProximo.addEventListener("click", () => {

        listaProdutos.scrollBy({
            left: 250,
            behavior: "smooth"
        });

    });


    btnAnterior.addEventListener("click", () => {

        listaProdutos.scrollBy({
            left: -250,
            behavior: "smooth"
        });

    });

}