import { Navigate, useLoaderData, useNavigate } from "react-router";
import TipAddForm from "../components/TipAddForm";
import { toast } from "react-toastify";
import useTitle from "../utils/useTitle";

export default function EditTipPage() {
  useTitle("Desi | Edit");
  const navigate = useNavigate();

  const tipDetail = useLoaderData();
  if (tipDetail?.error) {
    toast(tipDetail?.message || "An error occurred");
    return <Navigate to={"/"}></Navigate>;
  }
  const handleTipSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    let tipDetails = Object.fromEntries(formData.entries());
    fetch("https://desi-gardening.vercel.app/user/editTip/" + tipDetail._id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tipDetails),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed To Add Tip");
        return res.json();
      })
      .then((data) => {
        if (data?.modifiedCount) {
          navigate("/myTips");
          toast(`Tip Edited successfully`, {
            type: "success",
          });
        }
      })
      .catch((err) => toast(err.message, { type: "error" }));
  };

  return (
    <section className="dark:bg-gray-800 bg-indigo-950 pt-10 pb-20 sm:pt-20 sm:pb-25 min-h-screen px-3">
      <h1 className="text-white text-center mb-5 font-bold text-xl">
        Edit Your Garden Tip
      </h1>
      <TipAddForm
        handleTipSubmit={handleTipSubmit}
        tipDetail={tipDetail}
        submitString={"Update"}
      />
    </section>
  );
}
