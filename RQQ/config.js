import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBBbbsY__9LMmGIsij-LA_ieplDoEvw3Us",
    authDomain: "risco-quimico-quiz.firebaseapp.com",
    projectId: "risco-quimico-quiz",
    storageBucket: "risco-quimico-quiz.appspot.com",
    messagingSenderId: "1078509777532",
    appId: "1:1078509777532:web:8de0653dd2c1b197528ff9",
    measurementId: "G-PGQ7HHSYTS"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export {firebase};