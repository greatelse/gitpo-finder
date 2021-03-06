import { useEffect, useState } from "react";
import { instance as axios } from "../config/request";
import UseFetch from "../interfaces/useFetch.interface";

const useFetch = ({ url, username, additionalPath }: UseFetch) => {
  const [response, setResponse] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      additionalPath = additionalPath !== "" ? `/${additionalPath}` : "";
      setIsLoading(true);
      await axios
        .get(`${url}/${username}${additionalPath}`)
        .then((res) => {
          setResponse(res.data);
          setError("");
        })
        .catch((err) => {
          console.log(err.message, " Show err");
          setError(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

    fetchData();
  }, [url, username, additionalPath]);

  return { response, isLoading, error };
};

export default useFetch;
