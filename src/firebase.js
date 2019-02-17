import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCtjZ-blM6up7jdfgNAyzZ8RFScKVZ948M",
    authDomain: "campus-recruitment-system-1.firebaseapp.com",
    databaseURL: "https://campus-recruitment-system-1.firebaseio.com",
    projectId: "campus-recruitment-system-1",
    storageBucket: "campus-recruitment-system-1.appspot.com",
    messagingSenderId: "760768160970"
  };

const initializeFirebase = () => firebase.initializeApp(config);

export default initializeFirebase;
