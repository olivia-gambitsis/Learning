
import firebase from "firebase/app"

import StyledFirebaseAuth from 'react-firebaseui'


import "firebase/firestore"

const firebaseConfig ={
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
}

export const app = firebase.initializeApp(firebaseConfig)
export const auth = app.auth()



REACT_APP_FIREBASE_API_KEY = AIzaSyCAhzPewvB8uFrGIt97A3-xuqx7Wj1fotY
REACT_APP_FIREBASE_AUTH_DOMAIN = quiz-me-25fce.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID =quiz-me-25fce
REACT_APP_FIREBASE_STORAGE_BUCKET =quiz-me-25fce.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID =593572213930
REACT_APP_FIREBASE_APP_ID = 1:593572213930:web:87d35fa3ad356dbe6eccd3