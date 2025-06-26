import CustomTypeWriter from "./CustomTypeWriter";
import Features from "./Features";
export default function Welcome() {
  return (
    <section className="bg-mild-violet dark:bg-gray-900 text-white">
      <div className="container pl-4 mx-auto  xl:pl-30 2xl:pl-0 py-15  sm:py-25 md:py-30 lg:py-40">
        <h1 className="primary-heading text-violet-text ">
          Welcome to Desi Garden
        </h1>
        <p className="primary-para">
          Welcome to our awesome gardening website! Here you can get tips from
          experienced gardener and also you can contact them. Everything you see
          here is free. You can get various tips and tricks from your near
          gardener
        </p>

        <CustomTypeWriter />
      </div>
    </section>
  );
}
