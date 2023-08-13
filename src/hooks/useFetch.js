import { useState, useEffect } from "react";

export const useFetch = (apiPath) => {
  const [data, setData] = useState([]);
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}`;
  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);
      setData(json.results);
    }
    fetchMovie();
  }, [url]);

  return { data };
};
