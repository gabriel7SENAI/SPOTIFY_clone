import { salvar, lerTudo } from "./crud.js";

// ELEMENTOS
const btnEnviar = document.getElementById("btnEnviar");
const btnPlayer = document.getElementById("btnPlayer");
const btnUpload = document.getElementById("btnUpload");

const audioInput = document.getElementById("audioURL");
const imgInput = document.getElementById("imgURL");

const lista = document.getElementById("lista");

const telaUpload = document.getElementById("upload");
const telaPlayer = document.getElementById("player");

// CRIAR CARD
function criarMusica(m) {
  const div = document.createElement("div");
  div.classList.add("card");

  div.innerHTML = `
    <img src="${m.imgURL}">
    <audio controls src="${m.audioURL}"></audio>
  `;

  return div;
}

// CARREGAR
async function carregarMusicas() {
  lista.innerHTML = "";

  const dados = await lerTudo();

  if (!dados) return;

  for (let id in dados) {
    const musica = dados[id];
    const card = criarMusica(musica);
    lista.appendChild(card);
  }
}

// EVENTOS
btnEnviar.addEventListener("click", () => {
  const audioURL = audioInput.value;
  const imgURL = imgInput.value;

  if (!audioURL || !imgURL) {
    alert("Preencha tudo");
    return;
  }

  salvar(audioURL, imgURL);
  alert("Salvo!");
});

btnPlayer.addEventListener("click", () => {
  telaUpload.style.display = "none";
  telaPlayer.style.display = "block";
  carregarMusicas();
});

btnUpload.addEventListener("click", () => {
  telaUpload.style.display = "block";
  telaPlayer.style.display = "none";
});
