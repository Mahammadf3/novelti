
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCKgxW-Ib01Zs61jP1TyKfaaAUgyz1VLBY",
  authDomain: "novelti-form-3b122.firebaseapp.com",
  projectId: "novelti-form-3b122",
  storageBucket: "novelti-form-3b122.appspot.com",
  messagingSenderId: "482064908544",
  appId: "1:482064908544:web:9e324cd9daf40670d8b3e5",
  measurementId: "G-886371TH3S"
};


const app = initializeApp(firebaseConfig);

export const db=getFirestore(app)