import { Slide } from "react-awesome-reveal";
import { Link, useNavigate } from "react-router";
import validatePassword from "../utils/validation/passValidation";
import hasMinLength from "../utils/validation/hasMinLength";
import { toast } from "react-toastify";
import useAuthContext from "../contexts/AuthContext/AuthContext";
import { useState } from "react";
import GoogleSignIn from "../components/GoogleSignIn";
import useTitle from "../utils/useTitle";

export default function Login() {
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
        toast("Login Failed", { type: "error" });
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen py-30">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Slide direction="left">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Welcome to Desi Garden. Improve your gardening skill to the next
              level.
            </p>
          </div>
        </Slide>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form action="" onSubmit={handleLogin}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  placeholder="Email"
                  name="email"
                  required
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  required
                  name="password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button
                  disabled={submitting}
                  type="submit"
                  className="btn btn-neutral mt-4"
                >
                  Login
                </button>
                <GoogleSignIn />
                <p className="mt-2">
                  Don't have an Account ?
                  <Link to="/register" className="link">
                    Register Here
                  </Link>
                </p>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
