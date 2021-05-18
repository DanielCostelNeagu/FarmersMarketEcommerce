const baseUrl = "https://e-commerce-back-end-server.herokuapp.com";

export const api = `${baseUrl}/api`;

export const generatePublicUrl = (fileName) => {
  return `${baseUrl}/public/${fileName}`;
};