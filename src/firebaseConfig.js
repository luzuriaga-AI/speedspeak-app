// src/firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'; // ⬅️ NUEVO

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAcEuC6uLtyESS1nBl5q9rhAkZ1eXxCxwA",
  authDomain: "speedspeak-web.firebaseapp.com",
  projectId: "speedspeak-web",
  storageBucket: "speedspeak-web.appspot.com", // ⬅️ Revisa que esté bien
  messagingSenderId: "786302960258",
  appId: "1:786302960258:web:b8389258b29c7f536a9b"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar los servicios
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app); // ⬅️ NUEVO

// Exportar servicios
export { auth, db, storage }; // ⬅️ AHORA TAMBIÉN EXPORTA STORAGE