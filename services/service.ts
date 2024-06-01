import { useState } from "react";
import Axios, { AxiosResponse, AxiosError } from "axios";

export const UPLOADS_BASE_URL = process.env.BASE_URL;
export const BASE_URL = process.env.BASE_URL+'/api';

const useFetch = () => {
  const [data, setData] = useState<AxiosResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError | null | unknown>(null);

  const doFetch = (url: string, options?: undefined) => {
    setLoading(true);

    fetchData(url);
  };

  const fetchData = async (url: string) => {
    try {
      const response = await Axios(BASE_URL + url, {
        headers: {
          "Content-Type": "*",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_KEY}`
        },
        responseType: "json",
      });
      setData(response.data.data[0].attributes as any);
    } catch (error: unknown) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  

  return { data, loading, error, doFetch };
};

export default useFetch;