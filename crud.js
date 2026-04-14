import { database } from "./firebaseConfig.js";
import {
  ref,
  push,
  set,
  get,
} from "https://www.gstatic.com/firebasejs/12.11.0/firebase-database.js";

const referencia = ref(database, "musicas");

// SALVAR
export function salvar(audioURL, imgURL) {
  const novo = push(referencia);

  set(novo, {
    audioURL,
    imgURL,
  });
}

// LER
export async function lerTudo() {
  const snapshot = await get(referencia);

  if (snapshot.exists()) {
    return snapshot.val();
  } else {
    return null;
  }
}
