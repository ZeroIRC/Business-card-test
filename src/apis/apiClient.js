const baseURL = "http://localhost:3000";

export const apiClient = {
  get: async (URL, params = "") => {
    return await fetch(baseURL + URL + (params ? `/${params}` : ""));
  },
  post: async (URL, data) => {
    return await fetch(baseURL + URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        dataType: "json",
      },
      body: JSON.stringify(data),
    });
  },
};
