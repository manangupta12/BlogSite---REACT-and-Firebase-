import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyA7qkfpLU6oOsl1s3ji4nINYO3Cvj8XRdM",
    authDomain: "first-pi-project-234616.firebaseapp.com",
    databaseURL: "https://first-pi-project-234616.firebaseio.com",
    projectId: "first-pi-project-234616",
    storageBucket: "first-pi-project-234616.appspot.com",
    messagingSenderId: "94305095587",
    appId: "1:94305095587:web:f2e2808c22fe3cd280d416",
    measurementId: "G-BD4BJBBY9D"
  };
firebase.initializeApp(config);

export default firebase;