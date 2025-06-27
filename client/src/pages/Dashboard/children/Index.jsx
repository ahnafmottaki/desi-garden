import { Suspense } from "react";
import { Await, useRouteLoaderData } from "react-router";
import Loader from "../../../components/Loader";
import useTitle from "../../../utils/useTitle";

const Index = () => {
  const { allDataPromise } = useRouteLoaderData("dashboard");
  useTitle("Desi | Dashboard");

  return (
    <Suspense fallback={<Loader />}>
      <Await resolve={allDataPromise}>
        {(data) => {
          return (
            <section className="mx-4 @container ">
              <div className="grid grid-cols-1 gap-5 @[518px]:grid-cols-2 @[787px]:grid-cols-3 @[1056px]:grid-cols-4 @[1325px]:grid-cols-5">
                {Object.entries(data)
                  .map(([key, value]) => [
                    key
                      .split("_")
                      .map((j) => j.replace(j.at(0), j.at(0).toUpperCase()))
                      .join(" "),
                    value,
                  ])
                  // .slice(0, 1)
                  .map(([key, value]) => (
                    <div
                      key={key}
                      className="stats  shadow h-50 hover:bg-indigo-400 transition-colors hover:text-slate-200 cursor-pointer"
                    >
                      <div className="stat justify-items-center">
                        <div className="stat-title ">{key}</div>
                        <div className="stat-value">{value}</div>
                        <div className="stat-desc">Jan 1st - Feb 1st</div>
                      </div>
                    </div>
                  ))}
              </div>
            </section>
          );
        }}
      </Await>
    </Suspense>
  );
};

export default Index;
