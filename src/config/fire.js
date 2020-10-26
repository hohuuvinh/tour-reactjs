import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBk08WVXZdbvq4slyDX9i94JfZzCzET0G8",
    authDomain: "react-firebase-auth-42019.firebaseapp.com",
    databaseURL: "https://react-firebase-auth-42019.firebaseio.com",
    projectId: "react-firebase-auth-42019",
    storageBucket: "react-firebase-auth-42019.appspot.com",
    messagingSenderId: "79902902684",
    appId: "1:79902902684:web:b67791777b2ce5b8bda059"
};
const fire = firebase.initializeApp(firebaseConfig);
export default fire;