// A. declaração de variáveis

const nodeInputNumero = document.querySelector("#registar input[type='number']");
const nodeInputSubmit = document.querySelector("#registar input[type='submit']");
const nodeUlColecao = document.querySelector("#colecao ul");
const nodeUlRepetidos = document.querySelector("#repetidos ul");
const nodeTotalColecao = document.querySelector("#colecao span");
const nodeTotalRepetidos = document.querySelector("#repetidos span");
const form = document.querySelector("#registar form");

const colecao = JSON.parse(localStorage.getItem("colecao")) || [];
const repetidos = JSON.parse(localStorage.getItem("repetidos")) || [];
let totalRepetidos = repetidos.length;


// B. event handlers

function guardaCarta() {
  const numero = Number(nodeInputNumero.value);

  if (colecao.includes(numero)) {
    repetidos.push(numero);
    repetidos.sort((a, b) => a - b);
  } else {
    colecao.push(numero);
    colecao.sort((a, b) => a - b);
  }

  atualizaLista(colecao, nodeUlColecao);
  atualizaLista(repetidos, nodeUlRepetidos);
  atualizaTotais();
  guardaLocalStorage();

  nodeInputNumero.value = "";
}

function atualizaLista(lista, nodeUl) {
  nodeUl.innerHTML = "";

  lista.forEach((numero, indice) => {
    const li = document.createElement("li");

    if (lista === repetidos) {
      li.innerHTML = numero + ' <button data-index="' + indice + '">Eliminar</button>';
    } else {
      li.textContent = numero;
    }

    nodeUl.append(li);
  });

  if (lista === repetidos) {
    associaEventosRepetidos();
  }
}

function atualizaTotais() {
  nodeTotalColecao.textContent = colecao.length;
  totalRepetidos = repetidos.length;
  nodeTotalRepetidos.textContent = totalRepetidos;
}

function guardaLocalStorage() {
  localStorage.setItem("colecao", JSON.stringify(colecao));
  localStorage.setItem("repetidos", JSON.stringify(repetidos));
}

function eliminaRepetido(indice) {
  repetidos.splice(indice, 1);
  atualizaLista(repetidos, nodeUlRepetidos);
  atualizaTotais();
  guardaLocalStorage();
}

function associaEventosRepetidos() {
  document.querySelectorAll("#repetidos button").forEach((button) => {
    button.addEventListener("click", () => {
      eliminaRepetido(button.dataset.index);
    });
  });
}


// C. event listeners

form.onsubmit = (event) => {
  event.preventDefault();
  guardaCarta();
};

atualizaLista(colecao, nodeUlColecao);
atualizaLista(repetidos, nodeUlRepetidos);
atualizaTotais();
