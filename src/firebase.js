import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyAEkxCgekZRZ9RxWEFbDO01by4f7_Q-NzE",
    authDomain: "auth-c7744.firebaseapp.com",
    projectId: "auth-c7744",
    storageBucket: "auth-c7744.appspot.com",
    messagingSenderId: "862666226929",
    appId: "1:862666226929:web:d33a160974a545386e3d50",
    measurementId: "G-VQ8NLKECTE"
});

const auth = app.auth();
export { auth };
export default app;
