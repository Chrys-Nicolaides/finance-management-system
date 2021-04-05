import { request } from "./Request";

export const FetchTransactions = async (id) => {
  request("GET", `/profile/${id}/transactions`)
    .then((response) => response.json())
    .then((result) => {
      console.log("GET transactions result:", result);
    })
    .catch((error) => console.log("GET transactions error:", error));
};

export const CreateTransaction = async (id, body) => {
  request("POST", `/profile/${id}/transactions`, body)
    .then((response) => response.json())
    .then((result) => {
      console.log("POST transactions result:", result);
    })
    .catch((error) => console.log("POST transactions error:", error));
};

//

export const BulkCreateTransactions = async (id) => {
  request("POST", `/profile/${id}/transactions/bulk`)
    .then((response) => response.json())
    .then((result) => {
      console.log("POST bulk create transactions result:", result);
    })
    .catch((error) =>
      console.log("POST bulk create transactions error:", error)
    );
};
