import { useLoaderData, useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import TipAddForm from "../components/TipAddForm";

export default function ShareATip() {
  const navigate = useNavigate();

  const handleTipSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    let tipDetails = Object.fromEntries(formData.entries());
    fetch("https://desi-gardening.vercel.app/user/addtip", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...tipDetails, totalLikes: 0 }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed To Add Tip");
        return res.json();
      })
      .then((data) => {
        if (data?.insertedId) {
          toast(`Tip  Added successfully`, {
            type: "success",
          });
          navigate("/myTips");
        }
      })
      .catch((err) => toast(err.message, { type: "error" }));
  };
  return (
    <section className="bg-indigo-950 dark:bg-gray-800 min-h-screen pt-10 pb-20 sm:pt-20 sm:pb-25  px-2">
      <h1 className="text-white text-center mb-5 font-bold text-xl">
        Share Your Garden Tip
      </h1>
      <TipAddForm handleTipSubmit={handleTipSubmit} submitString={"Submit"} />
    </section>
  );
}
