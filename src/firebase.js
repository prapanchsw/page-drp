import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC-hR-6ant0ZgyulsnkyydzunhAdd9r5FI",
    authDomain: "page-droppable.firebaseapp.com",
    projectId: "page-droppable",
    storageBucket: "page-droppable.appspot.com",
    messagingSenderId: "767765494165",
    appId: "1:767765494165:web:17b4a582f81b32fbc41e9c",
    measurementId: "G-TPSSSF2MRE"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, doc, setDoc, getDoc };
