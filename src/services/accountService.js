import { apiRequest } from "./apiClient"

export const getAccounts = async () => {

 let accounts = JSON.parse(localStorage.getItem("accounts"))

 if (!accounts) {

  accounts = [
   {
    id:1,
    type:"Checking",
    balance:5400,
    description:"Primary checking account"
   },
   {
    id:2,
    type:"Savings",
    balance:3200,
    description:"Emergency savings"
   },
   {
    id:3,
    type:"HYSA",
    balance:11800,
    description:"High yield savings"
   }
  ]

  localStorage.setItem("accounts", JSON.stringify(accounts))
 }

 return accounts

}