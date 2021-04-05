import { request } from "./Request";

export const FetchProfile = async (id, accessToken) => {
  const headers = new Headers();

  headers.set("Authorization", `Bearer ${accessToken}`);

  return request("GET", `/profile/${id}`, {}, headers)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => console.log("GET profile error:", error));
};

export const UpdateProfile = async (id, body) => {
  request("PUT", `/profile/${id}`, body)
    .then((response) => response.json())
    .then((result) => {
      console.log("PUT profile result:", result);
    })
    .catch((error) => console.log("PUT profile error:", error));
};

export const FetchProfileEmail = async (email) => {
  request("GET", `/profile/by_email/{email}`)
    .then((response) => response.json())
    .then((result) => {
      console.log("GET profile email result:", result);
    })
    .catch((error) => console.log("GET profile email error:", error));
};
