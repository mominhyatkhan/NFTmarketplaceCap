/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable indent */
import { useState } from "react";

import { useRouter } from "next/router";
import { AxiosResponse } from "axios";

type fetchDataProps = (
  url: (...props: any) => Promise<AxiosResponse<unknown, any>>,
  handleErrorResponse?: () => void,
  shouldHandleError?: boolean
) => any;
export const useAxiosFetch = (): any => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState<any>(null);
  const [data, setData] = useState<any>();

  const router = useRouter();

  const fetchData: fetchDataProps = async (
    url,
    handleErrorResponse,
    shouldHandleError
  ) => {
    setIsLoading(true);
    setFetchError(null);
    setData(null);
    try {
      const res: any = await url();
      const statusCode = res?.data?.statusCode;
      if (!shouldHandleError) return setData(res.data);
      switch (statusCode) {
        case 1000:
        case 2876:
          setData(res.data);
          setFetchError(null);
          break;
        case 1003:
        case 1002:
          break;
        case 1001: {
          break;
        }
        default:
          setData(null);
          setFetchError(res?.data);
          if (handleErrorResponse) {
            handleErrorResponse();
          }
          break;
      }
    } catch (err: any) {
      console.log("error in axios: ", err.response.data);
      if (!err.response.data) {
        setFetchError({ data: { statusCode: 500, message: "Network Error" } });
        setData(null);
        return;
      }
      setFetchError(err.response);
      setData(null);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, fetchError, isLoading, fetchData };
};
