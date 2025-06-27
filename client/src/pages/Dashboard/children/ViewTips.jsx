import { Suspense } from "react";
import Loader from "../../../components/Loader";
import { Await, useLoaderData } from "react-router";
import Tip from "../../../components/Tip";
import useTitle from "../../../utils/useTitle";

const ViewTips = () => {
  const { tipsPromise } = useLoaderData();
  useTitle("Desi | All Tips");
  return (
    <Suspense fallback={<Loader />}>
      <Await resolve={tipsPromise}>
        {(tips) => {
          return (
            <div className="overflow-x-auto grow mx-4 border-1 border-transparent shadow dark:shadow-none shadow-gray-300 dark:border-gray-900 p-3">
              <table className="table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Image</th>
                    <th>Category</th>
                    <th>Plant Type</th>
                    <th>Total Like</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {tips.map((tip) => (
                    <Tip key={tip._id} {...tip}>
                      <td>{tip.plantType}</td>
                      <td>{tip.totalLikes}</td>
                      <td>{tip.email}</td>
                    </Tip>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }}
      </Await>
    </Suspense>
  );
};

export default ViewTips;
