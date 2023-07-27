import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCnC_OsOGk3Oap3zsBhsZdaRywz99aUXtI",
    authDomain: "react-netflix-clone-8f242.firebaseapp.com",
    projectId: "react-netflix-clone-8f242",
    storageBucket: "react-netflix-clone-8f242.appspot.com",
    messagingSenderId: "763462308798",
    appId: "1:763462308798:web:36e1254b2612fc9b571fef",
    measurementId: "G-R2MHQTPWXQ"
};
const app = initializeApp (firebaseConfig);
export const firebaseAuth = getAuth(app);//gives the current status of the user whether signin or sign out so that ui must change accordingly