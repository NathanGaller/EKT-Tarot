import { API_URL } from '@env';

export class ComplexError extends Error {
  constructor(body) {
    super("");
    this.body = body;
  }
}

export const apiGet = async (endpoint, token) => {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': token
    },
  };

  return await fetch(`${API_URL}/${endpoint}`, requestOptions);
};

export const apiPost = async (endpoint, json) => {
  const response = await fetch(API_URL + endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(json)
  });
  
  return await response;
}

export const handleResponse = (callback) => {
  return async (response) => {
    const body = await response.json();
    if (response.status === 200) {
      return await callback(body);
    } else {
      throw new ComplexError(body);
    }
  };
};