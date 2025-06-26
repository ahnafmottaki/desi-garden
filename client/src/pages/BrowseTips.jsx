import { Await, useLoaderData } from "react-router";
import Loader from "../components/Loader";
import { Suspense } from "react";
import TipWrapper from "../components/TipWrapper";
import useTitle from "../utils/useTitle";

export default function BrowseTips() {
  useTitle("Desi | Browse");
  const { tipsPromise } = useLoaderData();

  return (
    <Suspense fallback={<Loader />}>
      <Await resolve={tipsPromise} errorElement={<p>Something Happened</p>}>
        {(tips) => <TipWrapper tips={tips} />}
      </Await>
    </Suspense>
  );
}
