import FeaturedGardeners from "../components/FeaturedGardeners";
import MySwiper from "../components/MySwiper";
import TipsSection from "../components/TipsSection";
import Welcome from "../components/Welcome";
import NewsLetter from "../components/NewsLetter";
import useTitle from "../utils/useTitle";
import Banner from "../components/Banner";

export default function Home() {
  useTitle("Desi | Home");
  return (
    <>
      <Welcome />
      <TipsSection />
      <Banner />
      <FeaturedGardeners />
      <MySwiper />
      <NewsLetter />
    </>
  );
}
