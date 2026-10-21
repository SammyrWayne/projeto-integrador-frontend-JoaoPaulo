let produtos = [
    { nome: "Camiseta Preta Básica", descricao: "Camiseta masculina em algodão.", preco: 79.90, imagem: "imagens/camiseta.jpg" },
    { nome: "Calça Jeans", descricao: "Calça jeans moderna.", preco: 149.90, imagem: "imagens/calca.jpg" },
    { nome: "Moletom", descricao: "Moletom confortável para o dia a dia.", preco: 129.90, imagem: "imagens/moletom.jpg" },
    { nome: "Tênis", descricao: "Tênis casual para completar seu look.", preco: 199.90, imagem: "imagens/tenis.jpg" }
];

let quantidade = 0;
let total = 0;

function mostrarProdutos() {
    let lista = document.getElementById("lista-produtos");

    for (let i = 0; i < produtos.length; i++) {
        lista.innerHTML += `
            <article class="produto">
                <figure>
                    <img src="${produtos[i].imagem}" alt="${produtos[i].nome}">
                </figure>
                <div class="produto-info">
                    <h3>${produtos[i].nome}</h3>
                    <p>${produtos[i].descricao}</p>
                    <strong>R$ ${produtos[i].preco.toFixed(2).replace(".", ",")}</strong>
                    <button type="button" onclick="adicionarAoCarrinho(${i})">Adicionar ao carrinho</button>
                </div>
            </article>
        `;
    }
}

function adicionarAoCarrinho(posicao) {
    quantidade++;
    total = total + produtos[posicao].preco;

    document.getElementById("qtd-carrinho").textContent = quantidade;
    document.getElementById("total-carrinho").textContent = total.toFixed(2).replace(".", ",");

    if (total >= 299) {
        alert("Parabéns! Você ganhou frete grátis!");
    }
}

document.getElementById("form-newsletter").addEventListener("submit", function (evento) {
    evento.preventDefault();

    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem");

    if (email.includes("@")) {
        mensagem.textContent = "Obrigado por se cadastrar, " + email + "!";
    } else {
        mensagem.textContent = "E-mail inválido.";
    }
});

function desenharEtiqueta() {
    let canvas = document.getElementById("etiqueta");
    let ctx = canvas.getContext("2d");

    ctx.fillStyle = "#1f3d36";
    ctx.beginPath();
    ctx.arc(100, 100, 90, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = "#d9a79a";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(100, 100, 80, 0, Math.PI * 2);
    ctx.stroke();

    ctx.fillStyle = "#f6e3dc";
    ctx.font = "bold 40px Georgia";
    ctx.textAlign = "center";
    ctx.fillText("30%", 100, 95);
    ctx.font = "22px Georgia";
    ctx.fillText("OFF", 100, 125);
}

mostrarProdutos();
desenharEtiqueta();
