const tituloRato = document.querySelector("section h2");
const textoCor = document.querySelector("#textoCor");
const imagem = document.querySelector("img");
const textoImagem = document.querySelector("#textoImagem");
const movimentos = document.querySelector("#movimentos");
const corEscolhida = document.querySelector("#corEscolhida");
const textoEscolhido = document.querySelector("#textoEscolhido");
const contadorTexto = document.querySelector("#contador");

let numeroMovimentos = 0;
let contador = 0;
let imagemGrande = false;

function passarRato() {
  tituloRato.textContent = "Estás por cima!";
  tituloRato.style.color = "blue";
}

function sairRato() {
  tituloRato.textContent = "1. Passa por aqui!";
  tituloRato.style.color = "darkgreen";
}

function pintar(cor) {
  textoCor.style.color = cor;
}

function mudarImagem() {
  if (imagemGrande) {
    imagem.style.width = "550px";
    textoImagem.textContent = "A imagem está no tamanho normal.";
    imagemGrande = false;
  } else {
    imagem.style.width = "700px";
    textoImagem.textContent = "A imagem ficou maior!";
    imagemGrande = true;
  }
}

function mexerRato() {
  numeroMovimentos++;
  movimentos.textContent = "Movimentos: " + numeroMovimentos;
}

function aplicarCor() {
  textoEscolhido.style.color = corEscolhida.value;
  textoEscolhido.textContent = "Escolheste a cor " + corEscolhida.value;
}

function contar() {
  contador++;
  contadorTexto.textContent = contador;
}
