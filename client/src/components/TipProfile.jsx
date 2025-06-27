import { useState } from "react";
import { toast } from "react-toastify";
import { AiFillLike } from "react-icons/ai";
import { JackInTheBox } from "react-awesome-reveal";
export default function TipProfile({
  _id,
  title,
  plantType,
  description,
  image_url,
  totalLikes,
  username,
}) {
  return (
    <div className=" w-full h-[350px] dark:bg-gray-900 border border-gray-300 dark:border-gray-600 relative  cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8  ring-1 ring-gray-900/5 mx-auto sm:mx-auto max-sm:max-w-sm sm:rounded-lg sm:px-10">
      <div className=" mx-auto h-full max-w-md flex flex-col">
        <div className=" w-20 aspect-square  rounded-full overflow-hidden">
          <img
            src={image_url}
            alt={title}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="space-y-6 pt-5 text-base dark:text-white leading-7 text-gray-600 transition-all duration-300">
          <p className="font-bold">{plantType}</p>
          <p className="line-clamp-3">{description}</p>
        </div>
        <div className="pt-5 text-base grow flex flex-col justify-end  font-semibold leading-7 ">
          <p className="flex  justify-between">
            <a href="#" className="text-sky-500 transition-all duration-300">
              <span> by {username}</span>{" "}
            </a>
            <span className="flex gap-3 items-center ">
              <span className="text-xl">{totalLikes}</span>
              <span>
                <AiFillLike className="text-2xl" />
              </span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
