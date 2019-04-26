import React from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';
let config = {
  apiKey: "AIzaSyBhY4oZHA7hW20GZ61ullpx8ei_ixnzRjE",
  authDomain: "theethawatapp.firebaseapp.com",
  databaseURL: "https://theethawatapp.firebaseio.com",
  projectId: "theethawatapp",
  storageBucket: "theethawatapp.appspot.com",
  messagingSenderId: "657980256737"
};
firebase.initializeApp(config);

const signIn = () => {
  let provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().signInWithRedirect(provider);
}


function App() {
  return (
    <div>
        <h1>Welcome to Admin Site </h1>
        <button onClick={signIn}> Login </button>
    </div>
  );
}

export default App;
