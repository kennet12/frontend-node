const v1 = "/api/v1";

const endPoint = process.env.HTTP_ENPOINT;

const httpEndPoint = "http://localhost:8000";

export const getHttp = {
  profile: httpEndPoint + v1 + "/account/profile", // thông tin cá nhân
};

export const postHttp = {
  signUp: httpEndPoint + v1 + "/signUp", // đăng ký
  signIn: httpEndPoint + v1 + "/signIn", // đăng nhập
};
