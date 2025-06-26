import { useSearchParams } from "react-router";
import useFetch from "../hooks/useFetchHook";
import useAuthContext from "../contexts/AuthContext/AuthContext";
import Loader from "../components/Loader";
import Wrapper from "../components/TipWrapper";

export default function MyTips() {
  const { user } = useAuthContext();
  const [tips, loading, error, setTips] = useFetch(
    [],
    "https://desi-gardening.vercel.app/user/myTips",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: user.email }),
    }
  );
  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;
  if (tips.length === 0)
    return (
      <div className="min-h-screen grid place-items-center text-3xl font-medium">
        <span>No tips created By you </span>
      </div>
    );
  return <Wrapper tips={tips} isMyTips={true} setTips={setTips} />;
}
