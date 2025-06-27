import { FaCalendarAlt } from "react-icons/fa";
import { HiOutlineHandRaised } from "react-icons/hi2";
export default function NewsLetter() {
  return (
    <div className="relative isolate overflow-hidden py-16 sm:py-24 lg:py-32">
      <div className=" container mx-auto  px-4 grid grid-cols-1 gap-x-8 gap-y-16  lg:grid-cols-2">
        <div className="max-w-xl lg:max-w-lg">
          <h2 className="text-4xl font-semibold tracking-tight dark:text-white text-black">
            Subscribe to our newsletter
          </h2>
          <p className="mt-4 text-lg dark:text-gray-300 text-gray-600">
            Get everything in one place. Our Desi Garden website let's you share
            tips , gain experiences from experienced gardeners in one place
          </p>
          <div className="mt-6 flex max-w-md gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              autoComplete="email"
              className="min-w-0 flex-auto rounded-md dark:bg-white/5 bg-black/5 px-3.5 py-2 text-base  dark:text-white text-black outline-1 -outline-offset-1 dark:outline-white/10 outline-black/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white  shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Subscribe
            </button>
          </div>
        </div>
        <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
          <div className="flex flex-col items-start">
            <div className="rounded-md dark:bg-white/5  p-2 ring-1 dark:ring-white/10 ring-transparent ">
              <FaCalendarAlt
                aria-hidden="true"
                className="size-6 dark:text-white text-black"
              />
            </div>
            <dt className="mt-4 text-base font-semibold text-black dark:text-white">
              Weekly articles
            </dt>
            <dd className="mt-2 text-base/7 dark:text-gray-400 text-gary-500">
              Join our newsLetter to get Weekly articles based on the best tips
              of the month
            </dd>
          </div>
          <div className="flex flex-col items-start">
            <div className="rounded-md dark:bg-white/5  p-2 ring-1 dark:ring-white/10 ring-transparent ">
              <HiOutlineHandRaised
                aria-hidden="true"
                className="size-6 dark:text-white text-black"
              />
            </div>
            <dt className="mt-4 text-base font-semibold text-black dark:text-white">
              No spam
            </dt>
            <dd className="mt-2 text-base/7 dark:text-gray-400 text-gary-500">
              Avoid spamming and becoming someone's headache . Be polite to
              everyone
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
