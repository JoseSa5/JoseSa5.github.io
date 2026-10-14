const tituloRato = document.querySelector("section h2");
const textoCor = document.querySelector("#textoCor");
const caixaTexto = document.querySelector("#caixaTexto");
const contadorTexto = document.querySelector("#contador");
const incrementar = document.querySelector("#incrementar");
const decrementar = document.querySelector("#decrementar");
const reset = document.querySelector("#reset");
const nome = document.querySelector("#nome");
const idade = document.querySelector("#idade");
const mensagem = document.querySelector("#mensagem");
const formulario = document.querySelector("#formulario");
const contadorAutomatico = document.querySelector("#contadorAutomatico");
const container = document.querySelector("#container");
const imagem = document.querySelector("img");
const textoImagem = document.querySelector("#textoImagem");
const movimentos = document.querySelector("#movimentos");

const cores = ["salmon", "lightblue", "khaki", "lightgreen"];

let indiceCor = 0;
let contador = Number(localStorage.getItem("counter")) || 0;
let automatico = 0;
let imagemGrande = false;
let numeroMovimentos = 0;

contadorTexto.textContent = contador;

function passarRato() {
  tituloRato.textContent = "Estás por cima!";
  tituloRato.style.color = "blue";
}

function sairRato() {
  tituloRato.textContent = "1. Passa por aqui!";
  tituloRato.style.color = "darkgreen";
}

document.querySelectorAll("button.color").forEach((button) => {
  button.addEventListener("click", () => {
    textoCor.style.color = button.dataset.color;
  });
});

function mudarCorCaixa() {
  caixaTexto.style.backgroundColor = cores[indiceCor];
  indiceCor++;

  if (indiceCor == 4) {
    indiceCor = 0;
  }
}

function mudarFundo(elemento) {
  document.body.style.backgroundColor = elemento.value;
}

function atualizarContador() {
  contadorTexto.textContent = contador;
  localStorage.setItem("counter", contador);
}

incrementar.addEventListener("click", () => {
  contador++;
  atualizarContador();
});

decrementar.addEventListener("click", () => {
  contador--;
  atualizarContador();
});

reset.addEventListener("click", () => {
  contador = 0;
  atualizarContador();
});

formulario.onsubmit = (e) => {
  e.preventDefault();

  mensagem.textContent =
    "Olá, o " + nome.value + " tem " + idade.value + "!";
};

function contarAutomaticamente() {
  automatico++;
  contadorAutomatico.textContent = automatico;
}

function mudarDirecao(elemento) {
  container.style.flexDirection = elemento.value;
}

function mudarImagem() {
  if (imagemGrande) {
    imagem.style.width = "550px";
    textoImagem.textContent = "Faz duplo clique na fotografia.";
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

setInterval(contarAutomaticamente, 1000);
