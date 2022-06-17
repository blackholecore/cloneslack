import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAxLNQP1wQtANxiKge84Okz-6ePtlp_U9Q",
  authDomain: "slackclone-d3bea.firebaseapp.com",
  projectId: "slackclone-d3bea",
  storageBucket: "slackclone-d3bea.appspot.com",
  messagingSenderId: "575920230609",
  appId: "1:575920230609:web:d74c57c12d8b60e40735f0",
};


const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();

const auth=firebase.auth();

const provider=new firebase.auth.GoogleAuthProvider();

export {auth,provider,db};