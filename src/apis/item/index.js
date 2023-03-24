import { apiClient } from "../apiClient";

export const ITEM_API_BASE_URL = "/items";

export const getAll = async () => {
  return await apiClient.get(ITEM_API_BASE_URL);
};

export const get = async (id) => {
  return await apiClient.get(ITEM_API_BASE_URL, id);
};

/*
http://localhost:8080/api/items

GET -> 목록 조회

http://localhost:8080/api/items/1

GET -> 단건 조회

*/
