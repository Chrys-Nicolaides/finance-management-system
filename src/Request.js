// headers
import { useAuth0 } from "@auth0/auth0-react";

export const request = async (method, path, body, headers) => {
  // const { getAccessTokenSilently } = useAuth0();

  headers.set("Content-Type", "application/json");

  // const accessToken = await getAccessTokenSilently({
  //   audience: `https://finanzer.normans.co.za`,
  //   scope: "read:current_user",
  // });

  const baseUrl = "https://finanzer.normans.co.za";
  const fetchOptions = { method, headers, body: JSON.stringify(body) };
  const url = `${baseUrl}${path}`;
  const response = await fetch(url, {
    ...fetchOptions,
    headers: {
      ...fetchOptions.headers,
      // Authorization: `Bearer ${accessToken}`,
    },
  });

  const validStatuses = [200, 204, 304];
  const invalidStatuses = [400, 404];

  if (validStatuses.includes(response.status)) {
    return response;
  } else if (invalidStatuses.includes(response.status)) {
    // throw new error
    console.log(
      `Error fetching ${url}: ${response.status} (${response.statusCode}) ${response.body}`
    );
  }

  return response;
};
