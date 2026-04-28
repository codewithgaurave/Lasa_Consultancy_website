import http from "./http";

export const createConsultation = async (consultationData) => {
  const { data } = await http.post("/api/consultations", consultationData);
  return data;
};
