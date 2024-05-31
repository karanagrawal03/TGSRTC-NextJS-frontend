import { useState } from "react";
import Axios, { AxiosResponse, AxiosError } from "axios";

export const UPLOADS_BASE_URL = process.env.BASE_URL+'/uploads';

const useFetch = () => {
  const [data, setData] = useState<AxiosResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError | null | unknown>(null);

  const doFetch = (url: string, options?: undefined) => {
    setLoading(true);

    fetchData(url);
  };

  const fetchData = async (url: string) => {
    console.log(`${process.env.BASE_URL}/api` + url,"in fetch")
    try {
      const response = await Axios(`${process.env.BASE_URL}/api` + url, {
        headers: {
          "Content-Type": "*",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_KEY}`
        },
        responseType: "json",
      });
      console.log(response,"in fetch")
      setData(response?.data);
    } catch (error: unknown) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  

  return { data, loading, error, doFetch };
};

export default useFetch;