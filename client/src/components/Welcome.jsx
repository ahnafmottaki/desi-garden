import CustomTypeWriter from "./CustomTypeWriter";
import Features from "./Features";
export default function Welcome() {
  return (
    <section className="">
      <div className="container pl-4 mx-auto  xl:pl-30 2xl:pl-0 py-8  sm:py-10 md:py-14 lg:py-20">
        <h1 className="text-3xl font-bold">Welcome to Desi Garden</h1>
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
