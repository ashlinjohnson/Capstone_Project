import { useEffect, useState } from "react";
import { getDebts } from "../services/debtService";

export default function useDebts(){

 const [debts,setDebts] = useState([]);

 useEffect(()=>{

  getDebts().then(setDebts);

 },[]);

 return debts;

}