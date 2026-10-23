const nodeProdutos = document.querySelector("#produtos div");
const nodeCesto = document.querySelector("#cesto div");
const nodeTotal = document.querySelector("#cesto span");

if (localStorage.getItem("produtos-selecionados") === null) {
  localStorage.setItem("produtos-selecionados", JSON.stringify([]));
}


function criarProduto(produto) {
  const article = document.createElement("article");

  const titulo = document.createElement("h2");
  titulo.textContent = produto.title;

  const imagem = document.createElement("img");
  imagem.src = produto.image;
  imagem.alt = produto.title;

  const preco = document.createElement("p");
  preco.textContent = "Preço: " + produto.price + " €";

  const categoria = document.createElement("p");
  categoria.textContent = "Categoria: " + produto.category;

  const descricao = document.createElement("p");
  descricao.textContent = produto.description;

  const rating = document.createElement("p");
  rating.textContent = "Rating: " + produto.rating.rate;

  const botao = document.createElement("button");
  botao.textContent = "+ Adicionar ao cesto";

  botao.addEventListener("click", () => {
    const produtosSelecionados = JSON.parse(
      localStorage.getItem("produtos-selecionados")
    );

    produtosSelecionados.push(produto);

    localStorage.setItem(
      "produtos-selecionados",
      JSON.stringify(produtosSelecionados)
    );

    atualizaCesto();
  });

  article.append(
    titulo,
    imagem,
    preco,
    categoria,
    descricao,
    rating,
    botao
  );

  return article;
}

function criaProdutoCesto(produto) {
  const article = document.createElement("article");

  const titulo = document.createElement("h2");
  titulo.textContent = produto.title;

  const imagem = document.createElement("img");
  imagem.src = produto.image;
  imagem.alt = produto.title;

  const preco = document.createElement("p");
  preco.textContent = "Preço: " + produto.price + " €";

  const botao = document.createElement("button");
  botao.textContent = "- Remover do Cesto";

  botao.addEventListener("click", () => {
    const produtosSelecionados = JSON.parse(
      localStorage.getItem("produtos-selecionados")
    );

    let indice = -1;

    for (const i in produtosSelecionados) {
      if (produtosSelecionados[i].id === produto.id) {
        indice = i;
        break;
      }
    }

    if (indice !== -1) {
      produtosSelecionados.splice(indice, 1);
    }

    localStorage.setItem(
      "produtos-selecionados",
      JSON.stringify(produtosSelecionados)
    );

    atualizaCesto();
  });

  article.append(titulo, imagem, preco, botao);

  return article;
}



function renderizarProdutos(produtos) {
  nodeProdutos.innerHTML = "";

  produtos.forEach(produto => {
    const article = criarProduto(produto);
    nodeProdutos.append(article);
  });
}

function atualizaCesto() {
  const produtosSelecionados = JSON.parse(
    localStorage.getItem("produtos-selecionados")
  );

  nodeCesto.innerHTML = "";

  produtosSelecionados.forEach(produto => {
    const article = criaProdutoCesto(produto);
    nodeCesto.append(article);
  });

  const total = produtosSelecionados.reduce(
    (acumulador, produto) => acumulador + produto.price,
    0
  );

  nodeTotal.textContent = total;
}


renderizarProdutos(produtos);
atualizaCesto();
