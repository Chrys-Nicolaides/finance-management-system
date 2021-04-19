import { request } from "./Request";

export const FetchTransactions = async (id, accessToken, page, perPage) => {
  const headers = new Headers();

  headers.set("Authorization", `Bearer ${accessToken}`);

  return request(
    "GET",
    `/profile/${id}/transactions?page=${page || 0}&per_page=${perPage || 5}`,
    {},
    headers
  )
    .then((response) => response.json())
    .then((result) => {
      console.log("GET transactions result:", result);
      return result;
    })
    .catch((error) => console.log("GET transactions error:", error));
};

export const CreateTransaction = async (id, body, accessToken) => {
  const headers = new Headers();

  headers.set("Authorization", `Bearer ${accessToken}`);
  request("POST", `/profile/${id}/transactions`, body, headers)
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
