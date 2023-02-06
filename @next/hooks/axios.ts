import axios from "axios";
import { environment } from "@next/config";

export const domain: string = environment.apiKey;

export const url: string = `${domain}api/admin/`;
export const requestUrl = axios.create({
  baseURL: url,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});
