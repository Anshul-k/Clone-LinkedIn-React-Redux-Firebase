import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import "firebase/compat/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCVUbJDEZAbr0-KqwOPC2ODDLls8DmRRag",
    authDomain: "linkedin-clone-react-red-372ab.firebaseapp.com",
    projectId: "linkedin-clone-react-red-372ab",
    storageBucket: "linkedin-clone-react-red-372ab.appspot.com",
    messagingSenderId: "560789502775",
    appId: "1:560789502775:web:51768da71dece061d3f8b2",
    measurementId: "G-5HQMZRL46T"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage()

export { auth, provider, storage }
export default db