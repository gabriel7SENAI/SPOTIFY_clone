import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-database.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCV8wF35rjLM-ENo2GZfUysmkjmj4CiGBM",
  authDomain: "spotify-clone-d1b4a.firebaseapp.com",
  projectId: "spotify-clone-d1b4a",
  storageBucket: "spotify-clone-d1b4a.firebasestorage.app",
  messagingSenderId: "547951112671",
  appId: "1:547951112671:web:b996a35946c61aa8b5d46a",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const storage = getStorage(app);

export { database, storage };
