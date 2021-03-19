// import { request } from "./Request";

// export const getTransactions = async (id) => {
//   const response = await fetch(
//     `https://finanzer.normans.co.za/profile/${id}/transactions`,
//     {
//       method: "GET",
//     }
//   );
//   const data = await response.json();
//   console.log("id:", id);
//   return data;
// };

// POST request

// export const saveTransaction = async (id, body) => {
//   request("POST", "/profile/1/transactions", body)
//     .then((response) => response.json())
//     .then((result) => {
//       console.log("POST result", result);
//     })
//     .catch((error) => console.log("POST error", error));
// };

// GET profile request

// export const getProfile = async (id) => {
//   fetch(`https://finanzer.normans.co.za/profile/${id}`, {
//     method: "GET",
//   })
//     .then((response) => response.json())
//     .then((result) => {
//       console.log("GET 2 result", result);
//     })
//     .catch((error) => console.log("GET profile error", error));
// };

// PUT profile request

// export const updateProfile = async (id) => {
//   request("PUT", "/profile/1", {
//     balance: 200,
//     currency: "euros",
//   })
//     .then((response) => response.json())
//     .then((result) => {
//       console.log("PUT result", result);
//     })
//     .catch((error) => console.log("PUT profile error", error));
// };
