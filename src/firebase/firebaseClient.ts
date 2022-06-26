import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyALnbkEm13HNu-r-cEb1omNDzelTOAVrsM",
  authDomain: "disaster-management-96b2e.firebaseapp.com",
  projectId: "disaster-management-96b2e",
  storageBucket: "disaster-management-96b2e.appspot.com",
  messagingSenderId: "241631095763",
  appId: "1:241631095763:web:d1a1c793168602515ddd26"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);