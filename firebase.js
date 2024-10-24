import { initializeApp } from "firebase/app"
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyA1ZCHh1L4LzyQr79QWb0kRODRlRsRsV7Q",
    authDomain: "react-notes-5b45d.firebaseapp.com",
    projectId: "react-notes-5b45d",
    storageBucket: "react-notes-5b45d.appspot.com",
    messagingSenderId: "674530494669",
    appId: "1:674530494669:web:7952d2643d5583029d8184"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const notesCollection = collection(db)