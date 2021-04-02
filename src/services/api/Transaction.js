import { request } from "./Request";

export const FetchTransactions = async (id) => {
  request("GET", `/profile/${id}/transactions`)
    .then((response) => response.json())
    .then((result) => {
      console.log("GET transactions result", result);
    })
    .catch((error) => console.log("GET error", error));
};

export const SaveTransaction = async (id, body) => {
  request("POST", `/profile/${id}/transactions`, body)
    .then((response) => response.json())
    .then((result) => {
      console.log("POST result", result);
    })
    .catch((error) => console.log("POST error", error));
};
