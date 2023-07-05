import React, { useRef, useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function SignUp() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate()

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      navigate("/")
    }).catch((err) => {
      switch(err.code) {
        case "auth/email-already-exists":
            setErrorMessage("This email already exists")
            break;

        case "auth/invalid-email":
            setErrorMessage("Invalid email. Enter in the format: xxx@mail.com")
            break;

        case "auth/invalid-password":
            setErrorMessage("Invalid passsword. Your password should have at least 6 characters")
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
        <h1>Create an account</h1>
        <form onSubmit={signUp}>
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
            className="button"
            onClick={onClear}
          >
            Sign Up!
          </button>
        </form>
        <button className="back" onClick={goBack}>Back</button>
      </div>
  );
}
  
export default SignUp;