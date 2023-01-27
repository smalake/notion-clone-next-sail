import axiosClient from "../../libs/axiosClient";

export const memoApi = {
  create: () => axiosClient.post("/api/memo"),
  getAll: () => axiosClient.get("/api/memo"),
  getOne: (id: string) => axiosClient.get(`/api/memo/${id}`),
  update: (id: string, params: object) =>
    axiosClient.put(`/api/memo/${id}`, params),
  delete: (id: string) => axiosClient.delete(`/api/memo/${id}`),
};
