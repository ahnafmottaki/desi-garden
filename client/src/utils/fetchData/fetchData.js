const fetchData = (name, url, config = {}) => ({
  [name]: fetch(url, config)
    .then((res) => {
      if (!res.ok) throw new Error("Something happened");
      return res.json();
    })
    .catch((err) => {
      throw new Error(err.message);
    }),
});

export default fetchData;
