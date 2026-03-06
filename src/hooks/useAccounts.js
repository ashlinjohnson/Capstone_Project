import { useEffect, useState } from "react";
import { getAccounts } from "../services/accountService";

export default function useAccounts(){

 const [accounts,setAccounts] = useState([]);

 useEffect(()=>{

  getAccounts().then(setAccounts);

 },[]);

 return accounts;

}