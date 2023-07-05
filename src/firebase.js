// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrbW0T0Y7MBmPqVQRKcWTjPOglgCkQY0g",
  authDomain: "my-project-7008a.firebaseapp.com",
  projectId: "my-project-7008a",
  storageBucket: "my-project-7008a.appspot.com",
  messagingSenderId: "618256629562",
  appId: "1:618256629562:web:76e3bcf07137e5f0149a03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth }