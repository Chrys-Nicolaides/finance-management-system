// POST request

import { request } from "./Request";

const SaveTransaction = async (id, body) => {
  request("POST", `/profile/${id}/transactions`, body)
    .then((response) => response.json())
    .then((result) => {
      console.log("POST result", result);
    })
    .catch((error) => console.log("POST error", error));
};

export default SaveTransaction;
