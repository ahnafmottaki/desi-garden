export default function Features({ children }) {
  return (
    <p className="">
      <span>
        <FaRegHandPointRight className="text-xl " />
      </span>
      {children}
    </p>
  );
}
