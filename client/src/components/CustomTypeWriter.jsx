import { Cursor, useTypewriter } from "react-simple-typewriter";
import { FaRegHandPointRight } from "react-icons/fa";
export default function CustomTypeWriter() {
  const [text] = useTypewriter({
    delaySpeed: 1000,
    loop: 0,
    typeSpeed: 75,
    words: [
      "Garden Tips",
      "Join Events",
      "Get Experiences",
      "Connect With Neighbour",
    ],
  });
  return (
    <div className=" text-lg sm:text-xl text-violet-text font-medium  tracking-wide uppercase flex gap-3 items-center">
      <FaRegHandPointRight className="text-2xl" />
      <span>{text}</span>
      <Cursor cursor={true} cursorBlinking={true} />
    </div>
  );
}
