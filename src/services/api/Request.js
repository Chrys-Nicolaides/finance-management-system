export const request = async (method, path, body, headers) => {
  headers?.set("Content-Type", "application/json");

  const baseUrl = "https://finanzer-api.normans.co.za";
  let fetchOptions = {};

  if (method === "GET") {
    fetchOptions = { method, headers };
  } else {
    fetchOptions = {
      method,
      headers,
      body: JSON.stringify(body),
    };
  }

  const url = `${baseUrl}${path}`;
  let response;

  response = await fetch(url, fetchOptions);

  const validStatuses = [200, 204, 304];
  const invalidStatuses = [400, 404];

  if (validStatuses.includes(response.status)) {
    return response;
  } else if (invalidStatuses.includes(response.status)) {
    // throw new error
    if (response.status === 404) {
      throw "not found";
    }
    console.log(
      `Error fetching ${url}: ${response.status} (${response.statusCode}) ${response.body}`
    );
  }

  return response;
};
