import Loader from "./Loader";
import useFetch from "../hooks/useFetchHook";
import { Fade } from "react-awesome-reveal";

export default function FeaturedGardeners() {
  const [gardeners, loading, error] = useFetch(
    [],
    "https://desi-gardening.vercel.app/home/featuredGardeners"
  );

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;
  if (gardeners.length === 0) return <div>No Active Gardeners</div>;
  return (
    <section className="py-15 md:py-25 lg:py-40 container mx-auto px-2">
      <h1 className="primary-heading mb-10">Our Active Gardeners</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {gardeners.map((gardener) => (
          <Fade duration={1500} key={gardener._id}>
            <div className=" w-full mx-auto bg-white  dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg py-7 px-5">
              <div className=" pb-6">
                <div className="text-center my-4">
                  <img
                    className="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4 object-cover"
                    src={gardener.image}
                    alt=""
                  />
                  <div className="py-2">
                    <h3 className="relative w-fit mx-auto font-bold text-2xl text-gray-800 dark:text-white mb-1">
                      {gardener.gardenersName}
                      <div
                        className={`w-3 aspect-square rounded-full absolute ${
                          gardener.status === "active"
                            ? "bg-green-400"
                            : "bg-red-500"
                        } top-1/2 -translate-y-1/2 z-20 -right-5`}
                      ></div>
                    </h3>
                    <p className="primary-para">
                      Age: {gardener.age} &nbsp; Gender: {gardener.gender}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 justify-center  px-2">
                  <button className=" px-7 py-2  cursor-pointer rounded-lg bg-blue-600 dark:bg-blue-800 text-white dark:text-white antialiased font-bold hover:bg-blue-800 dark:hover:bg-blue-900  ">
                    Follow
                  </button>
                </div>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
}
