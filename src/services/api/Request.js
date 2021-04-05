export const request = async (method, path, body, headers, email) => {
  headers.set("Content-Type", "application/json");

  const baseUrl = "https://finanzer.normans.co.za";
  let fetchOptions = {};

  if (method === "GET") {
    fetchOptions = { method, headers };
  } else {
    fetchOptions = {
      method,
      headers,
      body: JSON.stringify(body),
      // email: JSON.stringify(email),
      email: toString(email),
    };
  }

  const url = `${baseUrl}${path}`;
  let response;

  try {
    response = await fetch(url, fetchOptions);
  } catch (error) {
    window.location.href = "/502";
  }

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
