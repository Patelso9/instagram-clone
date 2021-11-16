import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyCGBvZ6T2AyT055OMt5X71mPxTRqjQf-08",
        authDomain: "instagram-clone-b0d4a.firebaseapp.com",
        // databaseURL: "https://instagram-clone-b0d4a.firebaseio.com",
        projectId: "instagram-clone-b0d4a",
        storageBucket: "instagram-clone-b0d4a.appspot.com",
        messagingSenderId: "788175064402",
        appId: "1:788175064402:web:5573600728cbde9e743e8b",
        // measurementId: "G-SF426W1D80"      
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };