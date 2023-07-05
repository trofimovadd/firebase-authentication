import React, {useState, useEffect } from "react";
import SignIn from "./auth/SignIn";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

function Profile() {
  const goBack = () => {
    window.history.back();
  }
  const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        });

        return () => {
            listen();
        }
    }, []);

  if (!authUser) {
    return < SignIn />
  } 
  
  return (
    <div className="profile">
      <h1 className="user__header">Your profile</h1>
      <div className="user__info">
        <img className="user__photo" src="/assets/profile/2.png" alt="userPhoto"/>
        <h2 className="user__name">John Doe</h2>
      </div>
      <div className="about">
        <ul>
          <li>Date of birth: 14/07/1996</li>
          <li>Favorite music: rock</li>
          <li>Favorite books: "the Lord of the Rings", "Harry Potter"</li>
          <li>Favorite movies: "Tenet", "10 reasons to hate you", "Dead Poets Society"</li>
          <li>Favorite meal: curry rice</li>
          <li>About:</li>
          Maecenas posuere turpis non egestas tempor. Integer rhoncus, tellus nec venenatis finibus, enim
          dolor blandit ex, at tristique est diam eget dui.Nam placerat mi nibh, ac finibus lorem scelerisque pretium. Vestibulum in
          viverra tortor. Sed quis semper metus. Duis efficitur velit necmagna scelerisque convallis.
        </ul>
      </div>

      <button className="back" onClick={goBack}>Back</button>
    </div>
  );
}
  
export default Profile;