import React, { useState, useRef } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function SignIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const handleClick = () => navigate("/signUp")

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      navigate("/")
    }).catch((err) => {
      switch(err.code) {
        case "auth/email-already-exists":
            setErrorMessage("This email already exists")
            break;

        case "auth/invalid-email":
            setErrorMessage("Invalid email. Your email should be like xxx@mail.com")
            break;

        case "auth/invalid-password":
            setErrorMessage("Invalid passsword. Your password should have at least 6 characters")
            break;

        case "auth/user-not-found":
            setErrorMessage("User not found.")
            break;

        case "auth/wrong-password":
        case "auth/wrong-email":
            setErrorMessage("Wrong email and (or) password")
            break;
    }
    })
  }

  const refEmail = useRef(null)
  const refPassword = useRef(null)
  const onClear = () => {
    refEmail.current.value = "";
    refPassword.current.value = "";
  }

  const goBack = () => {
    window.history.back();
  }

  return (
      <div className="log_in">
        <h1>Sign in to your account</h1>
        <form onSubmit={signIn}>
        <div className="err__message">{errorMessage}</div>
          <input
            ref={refEmail}
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            ref={refPassword}
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={onClear}
          >
            Sign in
          </button>

          <div>Didn't have an account yet? Then <button onClick={handleClick}>Sign up</button> first!</div>
        </form>
        <button className="back" onClick={goBack}>Back</button>
      </div>
  );
}
  
export default SignIn;