import { Suspense } from "react";
import { Await, useRouteLoaderData } from "react-router";
import Loader from "../../../components/Loader";

const Index = () => {
  const { tipsPromise } = useRouteLoaderData("dashboard");

  return (
    <Suspense fallback={<Loader />}>
      <Await resolve={tipsPromise}>
        {(tips) => <div>All tips data is available {tips.length}</div>}
      </Await>
    </Suspense>
  );
};

export default Index;
