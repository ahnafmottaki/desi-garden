import { Suspense, useState } from "react";
import { Await, useLoaderData } from "react-router";
import Loader from "../components/Loader";
import useTitle from "../utils/useTitle";
import GardenerProfile from "../components/GardenerProfile";

function Helper({ gardeners }) {
  const [sortQuery, setSortQuery] = useState("Show All");
  return (
    <section className="py-10 container mx-auto px-2">
      <h1 className="primary-heading ">Explore Our Gardeners</h1>
      <p className=" mt-2 font-lg font-medium">Our Top Gardener in one place</p>
      <section className="grid lg:grid-cols-[300px_1fr] mt-10 items-start gap-3">
        <div className="text-black dark:text-white shadow shadow-gray-300 dark:shadow-none dark:border-gray-900 border border-transparent  rounded-lg  flex flex-col items-center gap-2 mb-7 p-4 min-h-30 sm:min-h-50">
          <label
            htmlFor="sortProfile"
            className=" font-bold text-xs sm:text-lg"
          >
            SortBy
          </label>
          <select
            id="sortProfile"
            className="bg-white text-black my-2 px-2 w-full h-8 border dark:border-none rounded-sm max-w-70 "
          >
            <option value={"no-sorting"}>No Sorting</option>
            <option value={"easy"}>Easy</option>
            <option value={"medium"}>Medium</option>
            <option value={"hard"}>Hard</option>
          </select>
        </div>
        <div className="@container">
          <div className="@[594px]:grid-cols-2 grid  @[901px]:grid-cols-3 @[1208px]:grid-cols-4 gap-5">
            {gardeners.map((gardener) => (
              <GardenerProfile key={gardener._id} {...gardener} />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}

export default function ExplorePage() {
  useTitle("Desi | Explore");
  const { exploreGardenerPromise } = useLoaderData();
  return (
    <Suspense fallback={<Loader />}>
      <Await
        resolve={exploreGardenerPromise}
        errorElement={<p>Something unexpected happened</p>}
      >
        {(gardeners) => <Helper gardeners={gardeners} />}
      </Await>
    </Suspense>
  );
}
