import Loader from "../../../components/Loader";
import Tip from "../../../components/Tip";
import useAuthContext from "../../../contexts/AuthContext/AuthContext";
import useFetch from "../../../hooks/useFetchHook";
import useTitle from "../../../utils/useTitle";

const MyGardenTips = () => {
  const { user } = useAuthContext();
  useTitle("Desi | My Tips");
  const [tips, loading, error, setTips] = useFetch(
    [],
    "https://desi-gardening.vercel.app/user/myTips",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: user.email }),
    }
  );
  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;
  if (tips.length === 0)
    return (
      <div className="min-h-screen grid place-items-center text-2xl font-medium">
        <span>No tips created By you </span>
      </div>
    );
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
};

export default MyGardenTips;
