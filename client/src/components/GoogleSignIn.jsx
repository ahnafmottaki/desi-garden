import { toast } from "react-toastify";
import useAuthContext from "../contexts/AuthContext/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router";

export default function GoogleSignIn({}) {
  const navigate = useNavigate();
  const { signInWithGoogle } = useAuthContext();
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        toast("Sing In Successful", { type: "success" });
        navigate("/");
      })
      .catch(() => {
        toast("Sign In failed", { type: "error" });
      });
  };

  return (
    <button
      type="button"
      onClick={handleGoogleSignIn}
      className="btn bg-blue-700 text-white hover:bg-white hover:text-black transition-colors"
    >
      <span>
        <FcGoogle className="text-lg" />
      </span>
      <span>Google</span>
    </button>
  );
}
