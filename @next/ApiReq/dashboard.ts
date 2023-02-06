import { requestUrl } from "@next/hooks";
import { AxiosResponse } from "axios";
export const AnyApi = async (
  startDate?: number,
  endDate?: number
): Promise<AxiosResponse<unknown, any>> => {
  return await requestUrl.get("api url");
};
