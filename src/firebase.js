import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBfJ58DTCxhWotR7sP1FXnKO2-A2XVSfP8",
  authDomain: "velada4-d2728.firebaseapp.com",
  projectId: "velada4-d2728",
  storageBucket: "velada4-d2728.appspot.com",
  messagingSenderId: "417395120149",
  appId: "1:417395120149:web:fe3c48909b095bd7f7961c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };