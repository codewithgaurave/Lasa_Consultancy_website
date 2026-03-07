import http from "./http";

export const getBlogs = async (page = 1, limit = 10) => {
  const { data } = await http.get(`/api/blogs?page=${page}&limit=${limit}`);
  return data;
};

export const getBlogBySlug = async (slug) => {
  const { data } = await http.get(`/api/blogs/${slug}`);
  return data;
};

export const likeBlog = async (slug) => {
  const { data } = await http.post(`/api/blogs/${slug}/like`);
  return data;
};
