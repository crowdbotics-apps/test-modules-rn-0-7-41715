import axios from "axios";

const articlesAPI = axios.create({
  baseURL: "https://b684-39-53-104-113.ngrok-free.app/modules/articles",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export function articleList() {
  return articlesAPI.get("/article/");
}

export function articleRead(id) {
  return articlesAPI.get(`/article/${id}/`);
}

export const api = {
  articleList,
  articleRead
};
