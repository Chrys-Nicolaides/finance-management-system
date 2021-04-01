// GET profile request
import { request } from "./Request";

export const FetchProfile = async (id, accessToken) => {
  const headers = new Headers();
  headers.set("Authorization", `Bearer ${accessToken}`);

  request("GET", `/profile/${id}`, "", headers)
    .then((response) => response.json())
    .then((result) => {
      console.log("GET profile result", result);
    })
    .catch((error) => console.log("GET profile error", error));
};

export default FetchProfile;
