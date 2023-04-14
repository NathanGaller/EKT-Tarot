import { apiPost, apiGet, handleResponse } from "../api";

export const getTarotReading = async (user, cards, question) => {
  return await apiPost('tarot', {
    email: user.email,
    numCards: cards,
    question: question,
    token: user.token
  })
    .then(handleResponse((response) => {
      return {cards: response.cards, reading: response.reading}
    }))
}

export const getUserTarotReadings = async (user) => {
  return await apiGet('tarot/readings', user.token)
    .then(handleResponse((response) => {
      return response.readings;
    }));
};
