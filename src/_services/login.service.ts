import { postHttp } from "@/_api";
import { middlewareAxios } from ".";
import axios from "axios";
import { signInType, signUpType } from "@/_type/login";

/**
 * @name signInApi()
 * @description Login account
 * @param req
 * @returns Object
 */
export const signInApi = async (req: signInType) => {
  // CALL MIDDLEWARE
  middlewareAxios(axios);

  // SIGNIN API
  return await axios
    .post(postHttp.signIn, {
      username: req.username,
      password: req.password,
    })
    .finally(() => {
      // CLEAR INTERCEPRTOR (middlewareAxios)
      axios.interceptors.request.clear();
    });
};

/**
 * @name signUpApi()
 * @description Register account
 * @param req
 * @returns Object
 */
export const signUpApi = async (req: signUpType) => {
  // CALL MIDDLEWARE
  middlewareAxios(axios);

  // SIGNUP API
  return await axios
    .post(postHttp.signUp, {
      fullName: req.fullName,
      email: req.email,
      phone: req.phone,
      password: req.password,
    })
    .finally(() => {
      // CLEAR INTERCEPRTOR (MIDDLEWARE)
      axios.interceptors.request.clear();
    });
};
