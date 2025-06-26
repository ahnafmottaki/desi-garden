export default function GardenerProfile({
  gender,
  gardenersName,
  experiences,
  sharedTips,
  age,
  image,
  status,
}) {
  return (
    <div className=" max-sm:max-w-[366px] w-full mx-auto bg-white hover:scale-105 flex flex-col justify-between  dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg py-3 px-5 transition-transform  shadow-gray-300 dark:shadow-base-100">
      <div className="text-center my-2">
        <img
          className="h-25 w-25 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-2 object-cover"
          src={image}
        />
        <div className="py-2">
          <h3 className="w-fit mx-auto font-bold text-xl text-gray-800 dark:text-white  relative">
            {gardenersName}
            <div
              className={`w-2 aspect-square rounded-full absolute ${
                status === "active" ? "bg-green-400" : "bg-red-500"
              } top-1/2 -translate-y-1/2 z-20 -right-5`}
            ></div>
          </h3>
        </div>
        <p className="text-lg">{experiences}</p>
        <p className="primary-para">
          Age: {age} &nbsp; Gender: {gender}
        </p>
      </div>
      <div className="flex justify-between   text-lg ">
        <span>Tips Shared</span> <span>{sharedTips.total}</span>
      </div>
    </div>
  );
}
