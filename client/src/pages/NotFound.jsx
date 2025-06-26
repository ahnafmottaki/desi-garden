import { Link, useNavigate } from "react-router";
import useTitle from "../utils/useTitle";

export default function NotFound() {
  useTitle("Desi | Not Found");
  const navigate = useNavigate();
  return (
    <div className="bg-white dark:bg-gray-900">
      <main className="container mx-auto grid min-h-screen place-items-center  px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base  font-semibold text-indigo-600 dark:text-indigo-300">
            404
          </p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 dark:text-white sm:text-7xl">
            Page not found
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty text-gray-500 dark:text-gray-300 sm:text-xl/8">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              onClick={() => navigate(-1)}
              className="cursor-pointer rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back
            </button>
            <Link
              to={"/"}
              className="text-sm font-semibold text-gray-900 dark:text-gray-300"
            >
              Go Home <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
