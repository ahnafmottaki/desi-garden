import { Suspense } from "react";
import { Await, useLoaderData } from "react-router";
import Loader from "../components/Loader";
import useTitle from "../utils/useTitle";
import GardenerProfile from "../components/GardenerProfile";

export default function ExplorePage() {
  useTitle("Desi | Explore");
  const { exploreGardenerPromise } = useLoaderData();
  return (
    <Suspense fallback={<Loader />}>
      <Await
        resolve={exploreGardenerPromise}
        errorElement={<p>Something unexpected happened</p>}
      >
        {(gardeners) => {
          return (
            <section className="py-15 md:py-25 lg:py-40 container mx-auto px-2">
              <h1 className="primary-heading mb-10">Explore Our Gardeners</h1>
              <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {gardeners.map((gardener) => (
                  <GardenerProfile key={gardener._id} {...gardener} />
                ))}
              </div>
            </section>
          );
        }}
      </Await>
    </Suspense>
  );
}
