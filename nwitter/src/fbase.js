/* 
collection - 폴더
document - 문서
*/
import *as firebase from "firebase/app";
import { getAuth } from 'firebase/auth'; // Auth 연결
import { getFirestore } from "firebase/firestore"; // Database 연결

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
    appId: process.env.REACT_APP_APP_ID
};

const app = firebase.initializeApp(firebaseConfig);
const authService = getAuth(app);
const firebaseInstance = firebase;
const dbService = getFirestore(app); // DB 관리 
export { app, authService , firebaseInstance ,dbService};