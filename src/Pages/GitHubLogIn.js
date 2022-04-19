import React from "react";
import FirebaseApp from "../firebase-init";
import { getAuth, GithubAuthProvider, signInWithPopup } from "firebase/auth";

const auth = getAuth(FirebaseApp);

const GitHubLogIn = () => {
    const provider = new GithubAuthProvider();

    const handleSignInWithGitHub = () => {
        signInWithPopup(auth, provider)
            .then((res) => console.log(res.user))
            .catch((err) => console.log(err));
    };
    return (
        <div>
            <button onClick={handleSignInWithGitHub}>
                sign in with github
            </button>
        </div>
    );
};

export default GitHubLogIn;
