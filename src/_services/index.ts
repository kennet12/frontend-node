export * from "./login.service";
export * from "./account.service";

/**
 * @name middlewareAxios()
 * @description Set header
 * @param axios
 * @returns axios
 */
export const middlewareAxios = async (axios: any) => {
  axios.interceptors.request.use(
    function (request: any) {
      // SET HEADER
      const newHeaders: any = { "Content-Type": "application/json" };

      // ADD JWT FOR HEADER
      if (
        request.url.includes("/api/v1/account") ||
        request.url.includes("/api/v1/adminSysTem")
      ) {
        newHeaders.Authorization = document.cookie.replace(
          "accessToken=",
          "Bearer "
        );
      }

      request = {
        ...request,
        headers: newHeaders,
      };

      return request;
    },
    function (error: any) {
      // ERROR PROCESS
      return Promise.reject(error);
    }
  );
  axios.interceptors.response.use(
    function (response: any) {
      // PROCESS CODE BEFORE RESPONSE
      return response;
    },
    function (error: any) {
      // PROCESS ERROR
      // STATUS CODE: 4xx, 5xx.
      return Promise.reject(error);
    }
  );
};
