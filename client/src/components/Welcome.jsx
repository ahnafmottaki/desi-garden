import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useAuthContext from "../contexts/AuthContext/AuthContext";
import { Link } from "react-router";

export default function Welcome() {
  const { user } = useAuthContext();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    className: "lg:w-1/2 lg:mb-0",
    fade: true,
    arrows: false,
  };
  return (
    <div className=" container mx-auto   text-gray-900 dark:text-white transition-colors duration-300 lg:px-4">
      <main className="flex flex-col-reverse max-sm:gap-3 md:max-lg:gap-8 lg:flex-row lg:items-center justify-between pb-8  lg:py-33 xl:py-40">
        <div className=" lg:w-1/2 space-y-2 sm:space-y-4 text-center md:text-left md:max-lg:pl-3">
          <h2 className="text-3xl  sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Connect, Grow, and Bloom Together 🌱
          </h2>
          <p className="text-lg xl:text-xl text-gray-700 dark:text-gray-300">
            Join our community of passionate gardeners. Share tips, post your
            garden photos, and connect with fellow green thumbs.
          </p>
          <Link to={user ? "/shareTip" : "/login"}>
            <button className="mt-4 px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition cursor-pointer">
              {user ? "Share Thought" : "Join the Community"}
            </button>
          </Link>
        </div>
        <Slider {...settings}>
          <div>
            <img
              src="https://images.unsplash.com/photo-1591086633860-92ac941bb0e8?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Garden"
              className="rounded-sm h-full  w-full"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1652616506164-8db5ab08b8b1?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Garden"
              className="rounded-sm h-full  w-full"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1656272671798-2d093d4ef917?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Garden"
              className="rounded-sm h-full  w-full"
            />
          </div>
        </Slider>
      </main>
    </div>
  );
}
