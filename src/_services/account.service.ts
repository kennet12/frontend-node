import { getHttp } from "@/_api";
import { middlewareAxios } from ".";
import axios from "axios";

/**
 * @name profileApi()
 * @description Profile account
 * @param req
 * @returns Object
 */
export const profileApi = async () => {
  // CALL MIDDLEWARE
  middlewareAxios(axios);
  // SIGNIN API
  return await axios.get(getHttp.profile).finally(() => {
    // CLEAR INTERCEPRTOR (middlewareAxios)
    axios.interceptors.request.clear();
  });
};
