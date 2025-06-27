import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router";

export default function LandingPage() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const slides = [
    {
      title: "Share Gardening Tips",
      description:
        "Connect with fellow gardeners and exchange valuable tips for a thriving garden.",
      image:
        "https://images.unsplash.com/photo-1612806527197-42af2b64884a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      path: "/shareTip",
    },
    {
      title: "Get Valuable Tips",
      description:
        "Connect and explore beautiful gardens tips shared by our vibrant community.",
      image:
        "https://images.unsplash.com/photo-1655929299728-93ee15ed7967?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      path: "/browseTips",
    },
    {
      title: "Find Gardening Buddies",
      description:
        "Discover people near you who love gardening just as much as you do.",
      image:
        "https://images.unsplash.com/photo-1610104054454-fa17848c8301?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      path: "/explore",
    },
  ];

  return (
    <section className="h-[60vh] md:h-[70vh] w-full relative overflow-hidden">
      <Slider {...sliderSettings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-[60vh] md:h-[70vh]">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-10 bg-[rgba(0,0,0,.4)]"></div>
            <div className="absolute inset-0 z-20  flex items-center justify-center">
              <div className="text-center px-6 md:px-20 text-white space-y-4 max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-bold">
                  {slide.title}
                </h2>
                <p className="text-md md:text-lg">{slide.description}</p>
                <Link to={slide.path}>
                  <button className="mt-4 px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
