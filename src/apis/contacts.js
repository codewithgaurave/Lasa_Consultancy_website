import http from "./http";

export const createContact = async (contactData) => {
  const { data } = await http.post("/api/contacts", contactData);
  return data;
};
