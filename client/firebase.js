// /app imports only the base features rather than all features from the firebase library
import firebase from 'firebase/app'

//import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig ={
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
}

 
  // Initialize Firebase allows this react project to connect to the firebase project
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export const authRef = firebaseApp.auth()
  
  //firebase.firestore.settings({timestampsInSnapshots:true})

  export default firebase;
  



 // Your web app's Firebase configuration
//  var firebaseConfig = {
//     apiKey: "AIzaSyCAhzPewvB8uFrGIt97A3-xuqx7Wj1fotY",
//     authDomain: "quiz-me-25fce.firebaseapp.com",
//     projectId: "quiz-me-25fce",
//     storageBucket: "quiz-me-25fce.appspot.com",
//     messagingSenderId: "593572213930",
//     appId: "1:593572213930:web:87d35fa3ad356dbe6eccd3"
//   };