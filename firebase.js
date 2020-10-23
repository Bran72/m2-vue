import firebase from 'firebase/app'
import 'firebase/database'

// Personal Database
/* export const db = firebase.initializeApp({
    apiKey: "AIzaSyA050nC2VykUNNAHOuRBqMyLihw467eNqk",
    authDomain: "vuejs-ecv-m2.firebaseapp.com",
    databaseURL: "https://vuejs-ecv-m2.firebaseio.com",
    projectId: "vuejs-ecv-m2",
    storageBucket: "vuejs-ecv-m2.appspot.com",
    messagingSenderId: "596160343428",
    appId: "1:596160343428:web:9be7148bac6d70cc8181d1",
    measurementId: "G-PBWHBWEV4N"
}).database();*/

// Shared Database
export const db = firebase.initializeApp({
    apiKey: "AIzaSyBZ5TwGJ2N0GFSTloGHFL4Jz1-7j61o1PA",
    authDomain: "make-a-wish-22698.firebaseapp.com",
    databaseURL: "https://make-a-wish-22698.firebaseio.com",
    projectId: "make-a-wish-22698",
    storageBucket: "make-a-wish-22698.appspot.com",
    messagingSenderId: "95777016130",
    appId: "1:95777016130:web:23a17a43919372510820db"
}).database();

// Export the database for components to use.
// If you want to get fancy, use mixins or provide / inject to avoid redundant imports.
//export const db = firebaseApp.database();