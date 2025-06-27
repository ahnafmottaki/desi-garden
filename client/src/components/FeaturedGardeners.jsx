import Loader from "./Loader";
import useFetch from "../hooks/useFetchHook";
import { Fade } from "react-awesome-reveal";
import Slider from "react-slick";

export default function FeaturedGardeners() {
  const [gardeners, loading, error] = useFetch(
    [],
    "https://desi-gardening.vercel.app/home/featuredGardeners"
  );
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
        },
      },
    ],
  };

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;
  if (gardeners.length === 0) return <div>No Active Gardeners</div>;
  return (
    <section className=" pt-10  pb-16 sm:pb-24 lg:pb-32 ">
      <div className="container mx-auto px-2">
        <h1 className="primary-heading  mb-10">Our Active Gardeners</h1>
        <div className="px-2 sm:px-0">
          <Slider {...settings}>
            {gardeners.map((gardener) => (
              // dark:shadow-gray-800 shadow-lg
              <div className=" w-full mx-auto bg-white  dark:bg-gray-900 rounded-lg  overflow-hidden border border-gray-300 dark:border-gray-600 pt-2 pb-6">
                <div className="text-center my-4">
                  <img
                    className="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4 object-cover"
                    src={gardener.image}
                    alt=""
                  />
                  <div className="">
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
                {/* <div className="flex  justify-center  px-2">
                  <button className=" px-7 py-2  cursor-pointer rounded-lg bg-blue-600 dark:bg-blue-800 text-white dark:text-white antialiased font-bold hover:bg-blue-800 dark:hover:bg-blue-900  ">
                    Follow
                  </button>
                </div> */}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
