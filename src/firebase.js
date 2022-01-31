import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCqGHybSRL7F9cHQMSN9fKoAZIvlAYrd98',
  authDomain: 'clone-d5352.firebaseapp.com',
  projectId: 'clone-d5352',
  storageBucket: 'clone-d5352.appspot.com',
  messagingSenderId: '766824994808',
  appId: '1:766824994808:web:2da9f5de56483a9598e80d',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
