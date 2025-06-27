import { Link } from "react-router";
import SlideContent from "./SlideContent";
import useFetch from "../hooks/useFetchHook";
import Slider from "react-slick";
import Loader from "./Loader";

const MySwiper = () => {
  const [tips, loading, error] = useFetch(
    [],
    "https://desi-gardening.vercel.app/home/featuredTips"
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };
  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;
  if (tips.length === 0) return <div>No Tips Available Right Now</div>;
  return (
    <div className=" container mx-auto   text-gray-900 dark:text-white transition-colors duration-300 lg:px-4 ">
      {/* <h1 className="primary-heading  mb-10">Top Rated Tips</h1> */}
      <Slider {...settings}>
        {tips.slice(0, 3).map((tip) => (
          <SlideContent
            key={tip._id}
            title={tip.title}
            para={tip.description}
            src={tip.image_url}
            id={tip._id}
          />
        ))}
      </Slider>
    </div>
  );
};

export default MySwiper;
