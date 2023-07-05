import React from "react";
import { Link } from "react-router-dom";
import AuthDetails from "../auth/AuthDetails";

function Header() {
    return (
      <div className="header">
        <img className="logo" src="/assets/logo.png" alt="logo"/>
        <div className="right">
          <div className="navbar">
            <Link to="/" className="navItem">Home</Link>
            <Link to="profile" className="navItem">Profile</Link>
            <Link to="news" className="navItem">News</Link>
            <Link to="signIn" className="navItem">Sign in</Link>
            <Link to="signUp" className="signUp">Sign up</Link>
          </div>
          <div className="auth__info">
            <AuthDetails />
          </div>
        </div>
      </div>
    )
}

export default Header