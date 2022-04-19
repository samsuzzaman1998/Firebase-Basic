import React from "react";
import FirebaseApp from "../firebase-init";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// creating auth variable
const auth = getAuth(FirebaseApp);

const GoogleSignIn = () => {
    // create a google Provider
    const provider = new GoogleAuthProvider();

    const handleGoogleSignInBtn = () => {
        signInWithPopup(auth, provider)
            .then((res) => console.log(res.user))
            .catch((err) => console.log(err));
    };
    return (
        <div>
            <button onClick={handleGoogleSignInBtn}>sign in with google</button>
        </div>
    );
};

export default GoogleSignIn;
