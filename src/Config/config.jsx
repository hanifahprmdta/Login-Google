// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth ,GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbrWmW0Id6_7unJ59g6dRIef3pfJYcVb8",
  authDomain: "login-hanifah.firebaseapp.com",
  projectId: "login-hanifah",
  storageBucket: "login-hanifah.appspot.com",
  messagingSenderId: "885656287167",
  appId: "1:885656287167:web:0d91fca3da2f8f4b8f930a",
  measurementId: "G-660FE3BW0Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt:'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);