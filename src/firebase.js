import firebase  from "firebase/compat";
const firebaseConfig = {
    apiKey: "AIzaSyAp5K8zMIgJ2kRRTDNrG8OqdJn3f91YCEw",
    authDomain: "onli-e84a9.firebaseapp.com",
    projectId: "onli-e84a9",
    storageBucket: "onli-e84a9.appspot.com",
    messagingSenderId: "28447256262",
    appId: "1:28447256262:web:d5d64b7bec81ea4432f1c7",
    measurementId: "G-Q4VWSV3RRT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firebase();
const auth = firebase.auth();

export {db,auth};

