import { request } from "./Request";
import dayjs from "dayjs";

export const FetchTransactions = async (
  id,
  accessToken,
  page,
  perPage,
  start_date,
  end_date
) => {
  const headers = new Headers();

  headers.set("Authorization", `Bearer ${accessToken}`);

  return request(
    "GET",
    `/profile/${id}/transactions?page=${page || 0}&per_page=${perPage || 5}${
      start_date && end_date
        ? `&start_date=${start_date}&end_date=${dayjs(end_date)
            .add(1, "day")
            .format("YYYY-MM-DD")}`
        : ""
    }`,
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
  return request("POST", `/profile/${id}/transactions`, body, headers)
    .then((response) => response.json())
    .then((result) => {
      console.log("POST transactions result:", result);
      return result;
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
