import firebase from "firebase/compat/app"
import "firebase/compat/storage"


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "netflix-75843.firebaseapp.com",
    projectId: "netflix-75843",
    storageBucket: "netflix-75843.appspot.com",
    messagingSenderId: "997778993399",
    appId: "1:997778993399:web:2d17e0af7346ebae6ea3f2"
  };

  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();
  export default storage;