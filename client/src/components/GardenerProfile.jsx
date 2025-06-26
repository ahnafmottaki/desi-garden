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
    <div className=" w-full mx-auto bg-white hover:scale-105  dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg py-7 px-5 transition-transform border-2 border-sky-500">
      <div className=" pb-6">
        <div className="text-center my-4">
          <img
            className="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4 object-cover"
            src={image}
          />
          <div className="py-2">
            <h3 className="w-fit mx-auto font-bold text-2xl text-gray-800 dark:text-white mb-1 relative">
              {gardenersName}
              <div
                className={`w-3 aspect-square rounded-full absolute ${
                  status === "active" ? "bg-green-400" : "bg-red-500"
                } top-1/2 -translate-y-1/2 z-20 -right-5`}
              ></div>
            </h3>
          </div>
          <p className="text-lg sm:text-xl ">{experiences}</p>
          <p className="primary-para">
            Age: {age} &nbsp; Gender: {gender}
          </p>
        </div>
        <div className="flex justify-between  text-lg sm:text-xl ">
          <span>Tips Shared</span> <span>{sharedTips.total}</span>
        </div>
      </div>
    </div>
  );
}
