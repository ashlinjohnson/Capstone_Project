// AI was used to add createAccount and deleteAccount.
// These functions needed to match the exact request format expected
// by the Flask backend, including HTTP methods and JSON body structure.
import { apiRequest } from "./apiClient";

export const getAccounts = async () => {
  return apiRequest("/api/accounts");
};

export const createAccount = async (data) => {
  return apiRequest("/api/accounts", {
    method: "POST",
    body: JSON.stringify(data),
  });
};

export const deleteAccount = async (accountId) => {
  return apiRequest(`/api/accounts/${accountId}`, {
    method: "DELETE",
  });
};
