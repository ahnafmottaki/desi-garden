import { useEffect, useState } from "react";

function useFetch(initialData, url, config = {}) {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    setError("");
    setLoading(true);
    fetch(url, config)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something unexpected happened");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  }, []);

  return [data, loading, error, setData];
}

export default useFetch;
