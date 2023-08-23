import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";

function Login() {
  const hardcodedCredentials = [
    { email: "user1@example.com", password: "password1" },
    { email: "user2@example.com", password: "password2" },
    { email: "user3@example.com", password: "password3" },
    { email: "user4@example.com", password: "password4" },
    { email: "user5@example.com", password: "password5" },
  ];

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [invalidInput, setInvalidInput] = useState(false);
  const [emailFormatError, setEmailFormatError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailregisterederror, setemailregisterederror] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    // const validUser = hardcodedCredentials.find(
    //   (cred) => cred.email === email && cred.password === password
    // );

    // if (email === "" || password === "") {
    //   setInvalidInput(true);
    //   setEmailFormatError(false);
    //   setPasswordError(false);
    // } else if (validUser) {
    //   setInvalidInput(false);
    //   setEmailFormatError(false);
    //   setPasswordError(false);
    //   dispatch(authActions.login());

    //   navigate("/home");
    // } else {
    //   setInvalidInput(true);
    //   setEmailFormatError(false);
    //   setPasswordError(true);
    // }
    setEmailFormatError(false);
    setPasswordError(false);
    setemailregisterederror(false);
    if (email !== "" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailFormatError(true);
      return;
    }

    const creds = hardcodedCredentials.find((obj) => obj.email === email);
    if (!creds) {
      setemailregisterederror(true);
      return;
    }
    if (password != creds.password) {
      setPasswordError(true);
      return;
    }
    dispatch(authActions.login());
    navigate("/home");
  };

  return (
    <div>
      <div
        className="container"
        style={{ borderRadius: "15px", border: "1px solid rgba(0, 0, 0, 0.2)" }}
      >
        <h1>Seller Log in</h1>
        <div className="form-group">
          <div className={`mb-3 ${invalidInput && "invalid"}`}>
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label"
              style={{ display: "flex", justifyContent: "left" }}
            >
              Email ID<span className="ast">*</span>
            </label>
            {emailFormatError && (
              <div
                className="error-message red-text"
                style={{ display: "flex", textAlign: "left", color: "red" }}
              >
                Incorrect email format
              </div>
            )}
            {emailregisterederror && (
              <div
                className="error-message red-text"
                style={{ display: "flex", textAlign: "left", color: "red" }}
              >
                Email not Registered
              </div>
            )}
            <input
              type="email"
              className={`form-control ${invalidInput && "is-invalid"} ${
                emailFormatError && "is-invalid"
              }`}
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <label
            htmlFor="inputPassword5"
            className="form-label"
            style={{ display: "flex", justifyContent: "left" }}
          >
            Password<span className="ast">*</span>
          </label>
          {passwordError && (
            <div
              className="error-message red-text"
              style={{ display: "flex", textAlign: "left", color: "red" }}
            >
              Your password is incorrect.
            </div>
          )}
        </div>
        <div className={`password-input ${invalidInput && "invalid"}`}>
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              id="inputPassword5"
              className={`form-control ${invalidInput && "is-invalid"} ${
                passwordError && "is-invalid"
              }`}
              aria-describedby="passwordHelpBlock"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className={`toggle-password ${showPassword ? "visible" : ""}`}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </span>
          </div>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="gridCheck" />
          <label className="form-check-label" htmlFor="gridCheck">
            Stay signed in
          </label>
          <div className="forgot">Forgot Password?</div>
        </div>
        <div className="d-grid gap-2">
          <span>
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleLogin}
              style={{ width: "400px" }}
            >
              Log in
            </button>
          </span>
        </div>
        <div className="create-account">
          Don't Have an Account?
          <Link className="create" to="/">
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
