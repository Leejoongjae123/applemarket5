import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import 'firebase/database'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAWelhigl-LTubC0235SIQOpv6Amz4iZT0",
  authDomain: "carrot-52f64.firebaseapp.com",
  projectId: "carrot-52f64",
  storageBucket: "carrot-52f64.appspot.com",
  messagingSenderId: "677389289098",
  appId: "1:677389289098:web:8dfd4c5280875dd68acf73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authService = getAuth();
export const dbService = getFirestore();
export const storageService=getStorage();