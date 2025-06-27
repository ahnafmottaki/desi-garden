import { Suspense } from "react";
import Loader from "../../../components/Loader";
import { Await, useLoaderData } from "react-router";
import useTitle from "../../../utils/useTitle";

const Gardeners = () => {
  const { gardenersPromise } = useLoaderData();
  useTitle("Desi | Gardeners");
  return (
    <div className="px-4">
      <Suspense fallback={<Loader />}>
        <Await resolve={gardenersPromise}>
          {(gardeners) => {
            return (
              <div className="overflow-x-auto grow mx-4 border-1 border-transparent shadow dark:shadow-none shadow-gray-300 dark:border-gray-900 p-3">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Image</th>
                      <th>Age</th>
                      <th>Gender</th>
                      <th>Status</th>
                      <th>Tips Shared</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gardeners.map((gardener) => (
                      <tr key={gardener._id}>
                        <th>{gardener.gardenersName}</th>
                        <td>
                          <div className="flex items-center gap-3">
                            <div className="avatar">
                              <div className="mask mask-squircle h-12 w-12 cursor-pointer">
                                <img src={gardener.image} />
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>{gardener.age}</td>
                        <td>{gardener.gender}</td>
                        <td>{gardener.status}</td>
                        <td>{gardener.sharedTips.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          }}
        </Await>
      </Suspense>
    </div>
  );
};

export default Gardeners;
