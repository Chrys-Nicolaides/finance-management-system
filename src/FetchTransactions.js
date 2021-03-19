// GET request

import { request } from "./Request";

const FetchTransactions = async (id) => {
  request("GET", `/profile/${id}/transactions`)
    .then((response) => response.json())
    .then((result) => {
      console.log("GET transactions result", result);
    })
    .catch((error) => console.log("GET error", error));
};

export default FetchTransactions;
