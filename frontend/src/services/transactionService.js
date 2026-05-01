// AI was used to add createTransaction and deleteTransaction.
// Knowing the correct field names (transaction_date, category_id, account_id)
// to send to the Flask backend required cross-referencing the route and model.
import { apiRequest } from "./apiClient";

export const getTransactions = async () => {
  return apiRequest("/api/transactions");
};

export const createTransaction = async (data) => {
  return apiRequest("/api/transactions", {
    method: "POST",
    body: JSON.stringify(data)
  });
};

export const deleteTransaction = async (transactionId) => {
  return apiRequest(`/api/transactions/${transactionId}`, {
    method: "DELETE"
  });
};