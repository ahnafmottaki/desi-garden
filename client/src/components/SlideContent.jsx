import { Link } from "react-router";

export default function SlideContent({
  title,
  src,
  para,
  btnText = "Detail",
  id,
}) {
  return (
    <main className="flex w-full flex-col-reverse  lg:flex-row-reverse justify-between ">
      <div className="lg:pl-6 max-sm:h-[300px] pl-8 py-10 lg:py-0 lg:w-1/2 space-y-2 flex flex-col justify-center items-start bg-gray-100 sm:space-y-4 text-center md:text-left md:max-lg:pl-3 border-2 border-gray-400/20 rounded-sm">
        <h2 className="text-3xl  sm:text-4xl lg:text-5xl font-extrabold leading-tight">
          {title}
        </h2>
        <p className="text-lg xl:text-xl text-gray-700 dark:text-gray-300 line-clamp-3">
          {para}
        </p>
        <div className="">
          <Link to={"/tipDetail/" + id}>
            <button className="mt-4 px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition cursor-pointer">
              {btnText}
            </button>
          </Link>
        </div>
      </div>
      <div className="lg:w-1/2 lg:mb-0 max-sm:h-[300px] h-[350px] overflow-hidden">
        <img
          src={src}
          alt="slide Image"
          className="rounded-sm h-full object-cover w-full"
        />
      </div>
    </main>
  );
}
