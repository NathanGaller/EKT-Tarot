import { apiPost, handleResponse } from "../api";

export const signUp = async (email, password) => {
  const response = await apiPost('user/register', {
    email,
    password
  });

  return handleResponse(async (data) => {
    return true;
  })(response);
};
