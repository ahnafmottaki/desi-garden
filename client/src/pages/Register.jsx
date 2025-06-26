import { useState } from "react";
import { Slide } from "react-awesome-reveal";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import hasMinLength from "../utils/validation/hasMinLength";
import validatePassword from "../utils/validation/passValidation";
import useAuthContext from "../contexts/AuthContext/AuthContext";
import GoogleSignIn from "../components/GoogleSignIn";
import useTitle from "../utils/useTitle";

export default function Register() {
  useTitle("Desi | Register");
  const { createUser, updateUser, setUser } = useAuthContext();
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const [isSubmitting, setIsSubmitting] = useState(false);
  if (user) {
    return navigate("/");
  }
  const toastObject = { type: "error" };

  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value.trim();
    const email = event.target.email.value.trim();
    const photoUrl = event.target.photoUrl.value.trim();
    const password = event.target.password.value.trim();
    if (!hasMinLength(name, 3)) return toast("Enter a valid name", toastObject);
    if (!hasMinLength(photoUrl, 10))
      return toast("Enter a valid photo url", toastObject);
    if (!hasMinLength(email, 10) || !email.includes("@"))
      return toast("Enter a valid email", toastObject);
    const validationArray = validatePassword(password);
    if (validationArray.length > 0)
      return toast(validationArray[0], toastObject);
    setIsSubmitting(true);
    createUser(email, password)
      .then(() => {
        toast("Register Successful", { type: "success" });
        updateUser({ displayName: name, photoURL: photoUrl })
          .then(() => {
            setIsSubmitting(false);
            toast("Profile Updated Successfully", { type: "success" });
            setUser((prev) => ({
              ...prev,
              displayName: name,
              photoURL: photoUrl,
            }));
            navigate("/");
          })
          .catch(() => {
            setIsSubmitting(false);
            toast("Profile Update Failed", { type: "error" });
          });
      })
      .catch(() => {
        setIsSubmitting(false);
        toast("Registration Failed", { type: "error" });
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen py-30">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Slide direction="left">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Register to Desi Garden to get the most out of it
            </p>
          </div>
        </Slide>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form action="" onSubmit={handleRegister}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Name"
                  name="name"
                  required
                />
                <label className="label">Photo Url</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Photo Url"
                  name="photoUrl"
                  required
                />
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
                  name="password"
                  required
                />
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="btn btn-neutral mt-4"
                >
                  Register
                </button>
                <GoogleSignIn />
                <p className="mt-2">
                  Already have an Account ?
                  <Link to="/login" className="link">
                    Login Here
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
