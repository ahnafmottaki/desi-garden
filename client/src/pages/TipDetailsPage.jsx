import { Suspense, useState } from "react";
import { Await, useLoaderData } from "react-router";
import Loader from "../components/Loader";
import { Slide } from "react-awesome-reveal";
import { AiFillLike } from "react-icons/ai";
import { toast } from "react-toastify";

function TipBottom({
  totalLikes,
  category,
  plantType,
  availability,
  difficultyLevel,
  username,
  email,
  title,
  description,
  _id,
}) {
  const [likes, setLikes] = useState(totalLikes);
  const handleTotalLikes = async (id) => {
    try {
      setLikes((prevLikes) => prevLikes + 1);
      const response = await fetch(
        "https://desi-gardening.vercel.app/user/addLike/" + id,
        {
          method: "PUT",
        }
      );
      if (!response.ok) {
        throw new Error("Like Update Failed");
      }
      const data = await response.json();
      if (data?.modifiedCount) {
        toast("Like Updated", { type: "success" });
      }
    } catch (err) {
      if (err) {
        setLikes((prevLikes) => prevLikes - 1);
        toast(err.message, { type: "error" });
      }
    }
  };
  return (
    <div className="card-body">
      <h2 className="card-title">
        {title}
        <div className="badge badge-secondary">{category}</div>
      </h2>
      <p>{description}</p>
      <div className="card-actions justify-end">
        <div className="badge badge-outline">{plantType}</div>
        <div className="badge badge-outline">{difficultyLevel}</div>
        <div className="badge badge-outline">{availability}</div>
        <div className="badge badge-outline">likes {likes}</div>
      </div>
      <div className="font-bold text-lg">{username}</div>
      <div className="font-bold flex justify-between items-center">
        <span>{email}</span>
        <span onClick={() => handleTotalLikes(_id)} className="cursor-pointer">
          <AiFillLike className="text-3xl" />
        </span>
      </div>
    </div>
  );
}

export default function TipDetailsPage() {
  const { tipPromise } = useLoaderData();
  return (
    <Suspense fallback={<Loader />}>
      <Await
        resolve={tipPromise}
        errorElement={<p>Something Error Happened</p>}
      >
        {(tip) => {
          return (
            <section className="bg-base-100 min-h-[95vh] flex items-center  my-12">
              <div className="card container mx-auto max-sm:py-20   shadow-sm grid grid-cols-1 sm:grid-cols-2 ">
                <Slide direction="left">
                  <figure>
                    <img
                      src={tip.image_url}
                      alt={tip.title}
                      className="max-h-70 sm:max-h-80 lg:max-h-100 w-full object-cover"
                    />
                  </figure>
                </Slide>
                <Slide direction="right">
                  <TipBottom {...tip} />
                </Slide>
              </div>
            </section>
          );
        }}
      </Await>
    </Suspense>
  );
}
