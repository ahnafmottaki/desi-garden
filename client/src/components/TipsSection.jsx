import useFetch from "../hooks/useFetchHook";
import Loader from "./Loader";
import TipProfile from "./TipProfile";
import Slider from "react-slick";
export default function TipsSection() {
  const [tips, loading, error] = useFetch(
    [],
    "https://desi-gardening.vercel.app/home/featuredTips"
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
  if (tips.length === 0) return <div>No Tips Available Right Now</div>;
  return (
    <section className="pt-20  pb-16 sm:pb-24 lg:pb-32 ">
      <div className=" container mx-auto px-2">
        <h1 className="primary-heading  mb-10">Our Featured Tips</h1>
        <div className="px-2 sm:px-0">
          <Slider {...settings}>
            {tips.map((tip) => (
              <TipProfile key={tip._id} {...tip} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
