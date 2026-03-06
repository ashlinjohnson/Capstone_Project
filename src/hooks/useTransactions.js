import { useEffect, useState } from "react";
import { getTransactions } from "../services/transactionService";

export default function useTransactions(){

 const [transactions,setTransactions] = useState([]);

 useEffect(()=>{

  getTransactions().then(setTransactions);

 },[]);

 return transactions;

}