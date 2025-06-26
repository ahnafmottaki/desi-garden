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
    <JackInTheBox duration={500}>
      <div className="group w-full h-full dark:bg-gray-900  relative  cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 mx-auto transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto max-sm:max-w-sm sm:rounded-lg sm:px-10">
        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[15]"></span>
        <div className="relative z-10 mx-auto h-full max-w-md flex flex-col">
          <span className="grid h-20 w-20 place-items-center rounded-full overflow-hidden bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
            <img
              src={image_url}
              alt={title}
              className="h-full w-full object-cover"
            />
          </span>
          <div className="space-y-6 pt-5 text-base dark:text-white leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
            <p className="font-bold">{plantType}</p>
            <p>{description}</p>
          </div>
          <div className="pt-5 text-base grow flex flex-col justify-end  font-semibold leading-7 ">
            <p className="flex  justify-between">
              <a
                href="#"
                className="text-sky-500 transition-all duration-300 group-hover:text-white"
              >
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
    </JackInTheBox>
  );
}
