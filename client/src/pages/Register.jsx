import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import hasMinLength from "../utils/validation/hasMinLength";
import validatePassword from "../utils/validation/passValidation";
import useAuthContext from "../contexts/AuthContext/AuthContext";
import GoogleSignIn from "../components/GoogleSignIn";
import useTitle from "../utils/useTitle";
import styled from "styled-components";

const Register = () => {
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
    <section className="min-h-screen container mx-auto flex justify-center items-center">
      <StyledWrapper>
        <div className="form-container">
          <p className="title">Create Account</p>
          <form className="form" onSubmit={handleRegister}>
            <input
              type="text"
              className="input"
              name="name"
              required
              placeholder="Name"
            />
            <input
              type="url"
              className="input"
              name="photoUrl"
              required
              placeholder="Photo Url"
            />
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
            <button className="form-btn" type="submit" disabled={isSubmitting}>
              Register
            </button>
          </form>
          <p className="sign-up-label">
            Already have an account
            <Link className="sign-up-link" to={"/login"}>
              Login
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

export default Register;

// export default function Register() {
//   useTitle("Desi | Register");
//   const { createUser, updateUser, setUser } = useAuthContext();
//   const navigate = useNavigate();
//   const { user } = useAuthContext();
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   if (user) {
//     return navigate("/");
//   }
//   const toastObject = { type: "error" };

//   const handleRegister = (event) => {
//     event.preventDefault();
//     const name = event.target.name.value.trim();
//     const email = event.target.email.value.trim();
//     const photoUrl = event.target.photoUrl.value.trim();
//     const password = event.target.password.value.trim();
//     if (!hasMinLength(name, 3)) return toast("Enter a valid name", toastObject);
//     if (!hasMinLength(photoUrl, 10))
//       return toast("Enter a valid photo url", toastObject);
//     if (!hasMinLength(email, 10) || !email.includes("@"))
//       return toast("Enter a valid email", toastObject);
//     const validationArray = validatePassword(password);
//     if (validationArray.length > 0)
//       return toast(validationArray[0], toastObject);
//     setIsSubmitting(true);
//     createUser(email, password)
//       .then(() => {
//         toast("Register Successful", { type: "success" });
//         updateUser({ displayName: name, photoURL: photoUrl })
//           .then(() => {
//             setIsSubmitting(false);
//             toast("Profile Updated Successfully", { type: "success" });
//             setUser((prev) => ({
//               ...prev,
//               displayName: name,
//               photoURL: photoUrl,
//             }));
//             navigate("/");
//           })
//           .catch(() => {
//             setIsSubmitting(false);
//             toast("Profile Update Failed", { type: "error" });
//           });
//       })
//       .catch(() => {
//         setIsSubmitting(false);
//         toast("Registration Failed", { type: "error" });
//       });
//   };

//   return (
//     <div className="hero bg-base-200 min-h-screen py-30">
//       <div className="hero-content flex-col lg:flex-row-reverse">
//         <Slide direction="left">
//           <div className="text-center lg:text-left">
//             <h1 className="text-5xl font-bold">Register now!</h1>
//             <p className="py-6">
//               Register to Desi Garden to get the most out of it
//             </p>
//           </div>
//         </Slide>
//         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//           <div className="card-body">
//             <form action="" onSubmit={handleRegister}>
//               <fieldset className="fieldset">
//                 <label className="label">Name</label>
//                 <input
//                   type="text"
//                   className="input"
//                   placeholder="Name"
//                   name="name"
//                   required
//                 />
//                 <label className="label">Photo Url</label>
//                 <input
//                   type="text"
//                   className="input"
//                   placeholder="Photo Url"
//                   name="photoUrl"
//                   required
//                 />
//                 <label className="label">Email</label>
//                 <input
//                   type="email"
//                   className="input"
//                   placeholder="Email"
//                   name="email"
//                   required
//                 />
//                 <label className="label">Password</label>
//                 <input
//                   type="password"
//                   className="input"
//                   placeholder="Password"
//                   name="password"
//                   required
//                 />
//                 <button
//                   disabled={isSubmitting}
//                   type="submit"
//                   className="btn btn-neutral mt-4"
//                 >
//                   Register
//                 </button>
//                 <GoogleSignIn />
//                 <p className="mt-2">
//                   Already have an Account ?
//                   <Link to="/login" className="link">
//                     Login Here
//                   </Link>
//                 </p>
//               </fieldset>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
