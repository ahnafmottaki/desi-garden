import useFetch from "../hooks/useFetchHook";
import Loader from "./Loader";
import TipProfile from "./TipProfile";

export default function TipsSection() {
  const [tips, loading, error] = useFetch(
    [],
    "https://desi-gardening.vercel.app/home/featuredTips"
  );

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;
  if (tips.length === 0) return <div>No Tips Available Right Now</div>;
  return (
    <section className="mt-15 mb-10 container mx-auto px-2">
      <h1 className="primary-heading mb-10">Our Featured Tips</h1>
      <div className="grid auto-rows-fr   grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {tips.map((tip) => (
          <TipProfile key={tip._id} {...tip} />
        ))}
      </div>
    </section>
  );
}
