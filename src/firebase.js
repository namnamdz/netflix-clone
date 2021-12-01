import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBXeTVoz8xy9Hir6eeje7ILm4HkYSQc7uw",
    authDomain: "netflix-clone-84031.firebaseapp.com",
    projectId: "netflix-clone-84031",
    storageBucket: "netflix-clone-84031.appspot.com",
    messagingSenderId: "763859655231",
    appId: "1:763859655231:web:3c356c9c343b87cd66f68a"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

  export { auth };
  
   