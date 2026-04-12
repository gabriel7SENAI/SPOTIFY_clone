import { salvar } from "./crud.js";

const btnEnviar = document.getElementById("btnEnviar");
const inputAudio = document.getElementById("musicaAudio");
const inputImg = document.getElementById("musicaImg");

btnEnviar.addEventListener("click", () => {
  // Pegamos o arquivo bruto (binário) que está dentro do input
  const arquivoAudio = inputAudio.files[0];
  const arquivoImg = inputImg.files[0];

  if (arquivoAudio && arquivoImg) {
    btnEnviar.innerText = "Enviando..."; // Feedback visual
    salvar(arquivoAudio, arquivoImg);
  } else {
    alert("Selecione os dois arquivos!");
  }
});
