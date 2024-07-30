import React, { useEffect, useState } from "react";
import "./AuthenticationPage.css";
import conf from "../../Appwrite/conf/conf";
import { Client, Account, ID } from "appwrite";

function AuthenticationPage() {
  const [isAuth, setIsAuth] = useState(true);
  const [authDetails, setAuthDetails] = useState({
    email: "",
    password: "",
    userName: "",
  });

  const client = new Client()
    .setEndpoint(conf.appWriteUrl)
    .setProject(conf.appwriteprojectId);

  const account = new Account(client);

  const handleAuth = async (e) => {
    e.preventDefault();
    if (authDetails.email && authDetails.password) {
      try {
        if (isAuth) {
          // Sign In
          const response = await account.createEmailPasswordSession(
            authDetails.email,
            authDetails.password
          );
          console.log("Sign In successful:", response);
        } else {
          // Sign Up
          const response = await account.create(
            ID.unique(),
            authDetails.email,
            authDetails.password,
            authDetails.userName
          );
          console.log("Sign Up successful:", response);
        }
      } catch (error) {
        console.error("Authentication error:", error);
      }
    }
  };

  const UserNameInput = () => (
    <div className="inputBox">
      <input
        type="text"
        required
        placeholder="User Name"
        onChange={(e) =>
          setAuthDetails({ ...authDetails, userName: e.target.value })
        }
        value={authDetails.userName}
      />
    </div>
  );

  return (
    <div className="main-body">
      <div className="section">
        {new Array(200).fill(0).map((_, index) => (
          <span key={index}></span>
        ))}
        <div className="signin">
          <div className="content">
            <h2>{isAuth ? "Sign In" : "Sign Up"}</h2>
            <form className="form" onSubmit={handleAuth}>
              {!isAuth && <UserNameInput />}
              <div className="inputBox">
                <input
                  type="email"
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
                <input type="submit" value={isAuth ? "Sign In" : "Sign Up"} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthenticationPage;
