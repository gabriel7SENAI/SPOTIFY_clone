import { database } from "./firebaseConfig.js";
import { storage } from "./firebaseConfig.js";
import {
  ref as sRef,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/12.11.0/firebase-storage.js";
import {
  ref,
  push,
  set,
  get,
  child,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/12.11.0/firebase-database.js";

export async function salvar(audio, img) {
  // 1. Criar os endereços no Storage
  const refAudio = sRef(storage, "musicas/" + audio.name);
  const refImg = sRef(storage, "capas/" + img.name);

  // 2. Enviar os arquivos (upload)
  await uploadBytes(refAudio, audio);
  await uploadBytes(refImg, img);

  // 3. Pegar os links dos arquivos
  const urlAudio = await getDownloadURL(refAudio);
  const urlImg = await getDownloadURL(refImg);

  // 4. Salvar os links no Banco de Dados
  const novaMusicaRef = push(ref(database, "playlist"));

  set(novaMusicaRef, {
    linkAudio: urlAudio,
    linkImagem: urlImg,
    nomeMusica: audio.name,
  });

  alert("Enviado!");
}
