// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVmkDfY79Ia6zwTh-4s_lZ2g6HL2nnX0Q",
  authDomain: "sharkv3-50ed9.firebaseapp.com",
  projectId: "sharkv3-50ed9",
  storageBucket: "sharkv3-50ed9.firebasestorage.app",
  messagingSenderId: "187052333616",
  appId: "1:187052333616:web:780e4f542f9db11d0b6bf5",
  measurementId: "G-X54Q6L2JC3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


//inputs
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
//sumbit button

const submit = document.getElementById('submit');
submit.addEventListener("click",function (event) {
    event.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

})  