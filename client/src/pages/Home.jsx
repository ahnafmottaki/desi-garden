import FeaturedGardeners from "../components/FeaturedGardeners";
import MySwiper from "../components/MySwiper";
import TipsSection from "../components/TipsSection";
import Welcome from "../components/Welcome";
import NewsLetter from "../components/NewsLetter";
import useTitle from "../utils/useTitle";

export default function Home() {
  useTitle("Desi | Home");
  return (
    <>
      <Welcome />
      <FeaturedGardeners />
      <MySwiper />
      <TipsSection />
      <NewsLetter />
    </>
  );
}
