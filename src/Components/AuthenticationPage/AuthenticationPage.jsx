import React, { useState } from "react";
import "./AuthenticationPage.css";

function AuthenticationPage() {
  const [isAuth, setIsAuth] = useState(true);
  const [authDetails, setAuthDetails] = useState({
    email: "",
    password: "",
    auth: isAuth,
  });

  const accessDetails = () => {
    console.log(authDetails);
  };

  return (
    <div className="main-body">
      <div className="section">
        {new Array(200).fill(0).map((_, index) => (
          <span key={index}></span>
        ))}
        <div className="signin">
          <div className="content">
            <h2>{isAuth ? "Sign In" : "Sign Up"}</h2>
            <div className="form">
              <div className="inputBox">
                <input
                  type="text"
                  required
                  placeholder="E-mail"
                  onChange={(e) =>
                    setAuthDetails({ ...authDetails, email: e.target.value })
                  }
                  value={authDetails.email}
                />
              </div>
              <div className="inputBox">
                <input
                  type="password"
                  required
                  placeholder="Password"
                  onChange={(e) =>
                    setAuthDetails({ ...authDetails, password: e.target.value })
                  }
                  value={authDetails.password}
                />
              </div>
              <div className="links">
                <a href="#">Forgot Password</a>
                <a href="#" onClick={() => setIsAuth(!isAuth)}>
                  {!isAuth ? "Sign In" : "Sign Up"}
                </a>
              </div>
              <div className="inputBox">
                <input
                  onClick={() => accessDetails()}
                  type="submit"
                  value={isAuth ? "Sign In" : "Sign Up"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthenticationPage;
