


import { apiRequest } from "./apiClient"

export const getDebts = async () => {

 let debts = JSON.parse(localStorage.getItem("debts"))

 if (!debts) {

  debts = [

   {
    id:1,
    type:"Car Loan",
    balance:8000,
    apr:4.9,
    paymentsRemaining:36,
    lender:"Chase Auto"
   },

   {
    id:2,
    type:"Credit Card",
    balance:5000,
    apr:19.9,
    paymentsRemaining:48,
    lender:"Visa"
   },

   {
    id:3,
    type:"Student Loan",
    balance:7000,
    apr:3.8,
    paymentsRemaining:60,
    lender:"Federal Loans"
   }

  ]

  localStorage.setItem("debts", JSON.stringify(debts))
 }

 return debts

}