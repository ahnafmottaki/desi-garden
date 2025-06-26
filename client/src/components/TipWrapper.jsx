import { Link } from "react-router";
import Tip from "./Tip";
import { FaEye } from "react-icons/fa";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { RiEdit2Fill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";

export default function Wrapper({ tips, isMyTips = false, setTips }) {
  const [sortString, setSortString] = useState("no-sorting");
  let sortedTips = [...tips];
  if (sortString !== "all") {
    sortedTips = sortedTips.sort((a, b) => {
      if (a.difficultyLevel === sortString) return -1;
      if (b.difficultyLevel === sortString) return 1;
      return 0;
    });
  }

  const handleOnChange = (e) => {
    setSortString(e.target.value);
  };

  const handleTipDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch("https://desi-gardening.vercel.app/user/deleteTip/" + id, {
          method: "DELETE",
        })
          .then((res) => {
            if (!res.ok) throw new Error("Failed to Delete Tip");
            return res.json();
          })
          .then((data) => {
            if (data?.deletedCount) {
              setTips((prevTips) =>
                prevTips.filter((prevTip) => prevTip._id !== id)
              );
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((err) => {
            Swal.fire({
              title: "!Error",
              text: err.message,
              icon: "error",
            });
          });
      }
    });
  };
  return (
    <div className="py-10 ">
      <h1 className="text-center font-bold text-xl mt-5">
        {isMyTips ? "Your Shared Tips" : "Browse All the Tips"}
      </h1>
      <p className="text-center my-1">
        {isMyTips
          ? "All the tips you shared in one place"
          : "Here You can find all the tips"}
      </p>

      <section className="min-h-screen mx-auto container px-2 flex sm:flex-row flex-col  sm:items-start mt-10 gap-4">
        {!isMyTips && (
          <div className="text-black dark:text-white shadow shadow-gray-300 dark:shadow-none dark:border-gray-900 border border-transparent  rounded-lg  flex flex-col items-center gap-2 mb-7 p-4 min-h-30 sm:min-h-50">
            <label htmlFor="sortTip" className=" font-bold text-xs sm:text-lg">
              SortBy Difficulty Level
            </label>
            <select
              onChange={handleOnChange}
              id="sortTip"
              value={sortString}
              className="bg-white text-black my-2 px-2 w-full h-8 border dark:border-none rounded-sm max-w-70 "
            >
              <option value={"no-sorting"}>No Sorting</option>
              <option value={"easy"}>Easy</option>
              <option value={"medium"}>Medium</option>
              <option value={"hard"}>Hard</option>
            </select>
          </div>
        )}
        <div className="overflow-x-auto grow border-1 border-transparent shadow dark:shadow-none shadow-gray-300 dark:border-gray-900 p-3">
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Image</th>
                <th>Category</th>
                <th>Extras</th>
              </tr>
            </thead>
            <tbody>
              {sortedTips.map((tip) => (
                <Tip key={tip._id} {...tip}>
                  {isMyTips ? (
                    <div className="flex flex-wrap gap-3 items-center">
                      <Link
                        className="btn btn-secondary"
                        to={"/editTip/" + tip._id}
                      >
                        <RiEdit2Fill />
                      </Link>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleTipDelete(tip._id)}
                      >
                        <MdDelete />
                      </button>
                    </div>
                  ) : (
                    <Link to={"/tipDetail/" + tip._id}>
                      <button className="cursor-pointer btn btn-primary">
                        <FaEye className="text-xl" />
                      </button>
                    </Link>
                  )}
                </Tip>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
