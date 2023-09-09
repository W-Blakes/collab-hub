import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/firebase-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCQJlcwI8PIkMENa5_tLKLWrGc-eKWZTTI',
  authDomain: 'thecollabsite-456f4.firebaseapp.com',
  projectId: 'thecollabsite-456f4',
  storageBucket: 'thecollabsite-456f4.appspot.com',
  messagingSenderId: '89641997381',
  appId: '1:89641997381:web:d34b0e19e952a32c8d3f2c',
};

//init firebase

firebase.initializeApp(firebaseConfig);

//init service;

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

//timestamp

const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
