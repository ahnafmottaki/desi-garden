import { MdEventNote } from "react-icons/md";

export default function SlideContent({ title, location, para, src }) {
  return (
    <div className="max-h-[90vh] max-sm:h-[80vh]  rounded-sm sm:rounded-lg overflow-hidden relative">
      <div className="absolute max-sm:py-20 inset-0 z-10  bg-mild-green-three flex flex-col justify-center items-center">
        <h1 className="font-ancizar  text-2xl sm:text-5xl font-bold  bg-mild-green text-white px-6 py-3 text-center">
          {title}
        </h1>
        <p className="primary-para font-bold text-center text-black bg-white px-3 py-3 rounded-sm">
          Location: {location}
        </p>
        <p className="primary-para text-white font-bold text-center">{para}</p>
        <button className="primary-btn flex items-center gap-1">
          Join
          <MdEventNote className="text-2xl" />
        </button>
      </div>
      <img src={src} className="h-full object-cover" />
    </div>
  );
}
