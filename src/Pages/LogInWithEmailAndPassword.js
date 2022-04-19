import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import FirebaseAppForEmailAndPassword from "../firebase-init-for-email&password-logIn";

const EmailAuth = getAuth(FirebaseAppForEmailAndPassword);

const LogInWithEmailAndPassword = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailOnBlur = (e) => {
        const emailValue = e.target.value;
        setEmail(emailValue);
    };

    const handlePasswordOnBlur = (e) => {
        const passwordValue = e.target.value;
        setPassword(passwordValue);
    };

    const handleFormSubmit = (e) => {
        createUserWithEmailAndPassword(EmailAuth, email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((err) => {
                console.log("error code: " + err.code);
                console.log("error message: " + err.message);
            });
        console.log("submitted");
        e.preventDefault();
    };

    return (
        <div>
            <h2 className="text-center text-primary fs-1 my-3 ">
                Register First
            </h2>
            <div className="row justify-content-center mt-5">
                <div className="col-md-4 col-sm-9 col-10">
                    <form onSubmit={handleFormSubmit}>
                        <div className="mb-3">
                            <label
                                htmlFor="exampleInputEmail1"
                                className="form-label"
                            >
                                Email address
                            </label>
                            <input
                                onBlur={handleEmailOnBlur}
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                            />
                            <div id="emailHelp" className="form-text">
                                We'll never share your email with anyone else.
                            </div>
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="exampleInputPassword1"
                                className="form-label"
                            >
                                Password
                            </label>
                            <input
                                onBlur={handlePasswordOnBlur}
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary ">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LogInWithEmailAndPassword;
