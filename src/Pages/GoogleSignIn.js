import React, { useState } from "react";
import FirebaseApp from "../firebase-init";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// creating auth variable
const auth = getAuth(FirebaseApp);

const GoogleSignIn = () => {
    const [userInfo, setUserInfo] = useState({});
    // create a google Provider
    const provider = new GoogleAuthProvider();

    const handleGoogleSignInBtn = () => {
        signInWithPopup(auth, provider)
            .then((res) => {
                const user = res.user;
                const { displayName, email, photoURL, uid } = user;
                const userData = { displayName, email, photoURL, uid };
                setUserInfo(userData);
                console.log(userData);
            })
            .catch((err) => console.log(err));
    };
    return (
        <div>
            <button onClick={handleGoogleSignInBtn}>sign in with google</button>
            <div>
                <h3>Name: {userInfo.displayName}</h3>
                <p>Email: {userInfo.email}</p>
                <img src={userInfo.photoURL} alt="profile" />
            </div>
        </div>
    );
};

export default GoogleSignIn;
