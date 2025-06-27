import { Slide } from "react-awesome-reveal";
import { Link, useNavigate } from "react-router";
import validatePassword from "../utils/validation/passValidation";
import hasMinLength from "../utils/validation/hasMinLength";
import { toast } from "react-toastify";
import useAuthContext from "../contexts/AuthContext/AuthContext";
import { useState } from "react";
import GoogleSignIn from "../components/GoogleSignIn";
import useTitle from "../utils/useTitle";
import styled from "styled-components";

const Login = () => {
  useTitle("Desi | Login");
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const { signInUser, user } = useAuthContext();
  if (user) {
    return navigate("/");
  }
  const toastObject = { type: "error" };
  const handleLogin = (event) => {
    event.preventDefault();
    const password = event.target.password.value.trim();
    const email = event.target.email.value.trim();
    if (!hasMinLength(email, 5))
      return toast("Enter a valid email", toastObject);
    const validationArray = validatePassword(password);
    if (validationArray.length > 0)
      return toast(validationArray[0], toastObject);
    setSubmitting(true);
    signInUser(email, password)
      .then(() => {
        toast("Login Successfully", { type: "success" });
        setSubmitting(false);
        navigate("/");
      })
      .catch((err) => {
        setSubmitting(false);
        if (err.message.includes("invalid-credential"))
          return toast("Invalid  Login or Password!", { type: "error" });
        toast("Login Failed", { type: "error" });
      });
  };
  return (
    <section className="min-h-screen container mx-auto flex justify-center items-center">
      <StyledWrapper>
        <div className="form-container">
          <p className="title">Welcome back</p>
          <form className="form" onSubmit={handleLogin}>
            <input
              type="email"
              className="input"
              name="email"
              required
              placeholder="Email"
            />
            <input
              type="password"
              className="input"
              name="password"
              required
              placeholder="Password"
            />
            <p className="page-link">
              <span className="page-link-label">Forgot Password?</span>
            </p>
            <button className="form-btn" type="submit" disabled={submitting}>
              Log in
            </button>
          </form>
          <p className="sign-up-label">
            Don't have an account?
            <Link className="sign-up-link" to={"/register"}>
              Register
            </Link>
          </p>
          <GoogleSignIn />
        </div>
      </StyledWrapper>
    </section>
  );
};

const StyledWrapper = styled.div`
  .form-container {
    width: 350px;
    height: 500px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 20px 30px;
  }

  .title {
    text-align: center;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    margin: 10px 0 30px 0;
    font-size: 28px;
    font-weight: 800;
  }

  .form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 18px;
    margin-bottom: 15px;
  }

  .input {
    border-radius: 20px;
    border: 1px solid #c0c0c0;
    outline: 0 !important;
    box-sizing: border-box;
    padding: 12px 15px;
  }

  .page-link {
    text-decoration: underline;
    margin: 0;
    text-align: end;
    color: #747474;
    text-decoration-color: #747474;
  }

  .page-link-label {
    cursor: pointer;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-size: 9px;
    font-weight: 700;
  }

  .page-link-label:hover {
    color: #000;
  }

  .form-btn {
    padding: 10px 15px;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    border-radius: 20px;
    border: 0 !important;
    outline: 0 !important;
    background: teal;
    color: white;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  .form-btn:active {
    box-shadow: none;
  }

  .sign-up-label {
    margin: 0;
    font-size: 10px;
    color: #747474;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }

  .sign-up-link {
    margin-left: 1px;
    font-size: 11px;
    text-decoration: underline;
    text-decoration-color: teal;
    color: teal;
    cursor: pointer;
    font-weight: 800;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }

  .buttons-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 20px;
    gap: 15px;
  }

  .apple-login-button,
  .google-login-button {
    border-radius: 20px;
    box-sizing: border-box;
    padding: 10px 15px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-size: 11px;
    gap: 5px;
  }

  .apple-login-button {
    background-color: #000;
    color: #fff;
    border: 2px solid #000;
  }

  .google-login-button {
    border: 2px solid #747474;
  }

  .apple-icon,
  .google-icon {
    font-size: 18px;
    margin-bottom: 1px;
  }
`;

export default Login;
