import { apiPost, handleResponse } from "../api";

export const getLoginTokenWithGoogle = async (googleId, googleToken) => {
  return await apiPost('user/login', {
    googleId,
    googleToken,
  })
    .then(handleResponse(async (response) => {
      return response.user
    }))
    .catch(error => {
      throw new Error(`Failed to log-in with Google ${error}`)
    });
}