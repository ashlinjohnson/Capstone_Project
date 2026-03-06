import { apiRequest } from "./apiClient"

export const getTransactions = async () => {

 let transactions = JSON.parse(localStorage.getItem("transactions"))

 if (!transactions || transactions.length < 40) {


  transactions = [

   { id:1,date:"Mar 1",description:"Payroll Deposit",amount:2600,category:"Income",merchant:"Employer Payroll"},
   { id:2,date:"Feb 28",description:"Electric Bill",amount:-120,category:"Utilities",merchant:"City Power"},
   { id:3,date:"Feb 26",description:"Amazon Purchase",amount:-89,category:"Shopping",merchant:"Amazon"},
   { id:4,date:"Feb 25",description:"Gas Station",amount:-54,category:"Transportation",merchant:"Shell"},
   { id:5,date:"Feb 22",description:"Restaurant",amount:-72,category:"Food",merchant:"Chipotle"},
   { id:6,date:"Feb 20",description:"Groceries",amount:-140,category:"Food",merchant:"Walmart"},
   { id:7,date:"Feb 19",description:"Internet Bill",amount:-80,category:"Utilities",merchant:"Spectrum"},
   { id:8,date:"Feb 18",description:"Coffee Shop",amount:-12,category:"Food",merchant:"Starbucks"},
   { id:9,date:"Feb 17",description:"Uber Ride",amount:-26,category:"Transportation",merchant:"Uber"},
   { id:10,date:"Feb 16",description:"Target Purchase",amount:-64,category:"Shopping",merchant:"Target"},
   { id:11,date:"Feb 15",description:"Netflix Subscription",amount:-16,category:"Subscriptions",merchant:"Netflix"},
   { id:12,date:"Feb 14",description:"Gym Membership",amount:-45,category:"Membership",merchant:"Planet Fitness"},
   { id:13,date:"Feb 12",description:"Freelance Payment",amount:450,category:"Income",merchant:"Client Payment"},
   { id:14,date:"Feb 10",description:"Amazon Purchase",amount:-35,category:"Shopping",merchant:"Amazon"},
   { id:15,date:"Feb 8",description:"Spotify Subscription",amount:-12,category:"Subscriptions",merchant:"Spotify"},
   { id:16,date:"Feb 7",description:"Water Bill",amount:-48,category:"Utilities",merchant:"City Water"},
   { id:17,date:"Feb 5",description:"Car Insurance",amount:-135,category:"Bills",merchant:"State Farm"},
   { id:18,date:"Feb 3",description:"Gas Station",amount:-49,category:"Transportation",merchant:"Chevron"},
   { id:19,date:"Feb 1",description:"Payroll Deposit",amount:2600,category:"Income",merchant:"Employer Payroll"},
   { id:20,date:"Jan 30",description:"Restaurant",amount:-60,category:"Food",merchant:"Olive Garden"},
   { id:21,date:"Jan 28",description:"Amazon Purchase",amount:-52,category:"Shopping",merchant:"Amazon"},
   { id:22,date:"Jan 26",description:"Electric Bill",amount:-118,category:"Utilities",merchant:"City Power"},
   { id:23,date:"Jan 24",description:"Coffee Shop",amount:-9,category:"Food",merchant:"Starbucks"},
   { id:24,date:"Jan 23",description:"Groceries",amount:-135,category:"Food",merchant:"Costco"},
   { id:25,date:"Jan 21",description:"Gym Membership",amount:-45,category:"Membership",merchant:"Planet Fitness"},
   { id:26,date:"Jan 20",description:"Netflix Subscription",amount:-16,category:"Subscriptions",merchant:"Netflix"},
   { id:27,date:"Jan 18",description:"Internet Bill",amount:-80,category:"Utilities",merchant:"Spectrum"},
   { id:28,date:"Jan 16",description:"Gas Station",amount:-57,category:"Transportation",merchant:"Shell"},
   { id:29,date:"Jan 15",description:"Payroll Deposit",amount:2600,category:"Income",merchant:"Employer Payroll"},
   { id:30,date:"Jan 14",description:"Spotify Subscription",amount:-12,category:"Subscriptions",merchant:"Spotify"},
   { id:31,date:"Jan 12",description:"Target Purchase",amount:-72,category:"Shopping",merchant:"Target"},
   { id:32,date:"Jan 10",description:"Restaurant",amount:-55,category:"Food",merchant:"Chipotle"},
   { id:33,date:"Jan 8",description:"Water Bill",amount:-48,category:"Utilities",merchant:"City Water"},
   { id:34,date:"Jan 7",description:"Uber Ride",amount:-23,category:"Transportation",merchant:"Uber"},
   { id:35,date:"Jan 5",description:"Amazon Purchase",amount:-41,category:"Shopping",merchant:"Amazon"},
   { id:36,date:"Jan 4",description:"Coffee Shop",amount:-11,category:"Food",merchant:"Starbucks"},
   { id:37,date:"Jan 3",description:"Car Insurance",amount:-135,category:"Bills",merchant:"State Farm"},
   { id:38,date:"Jan 2",description:"Groceries",amount:-128,category:"Food",merchant:"Walmart"},
   { id:39,date:"Jan 1",description:"Payroll Deposit",amount:2600,category:"Income",merchant:"Employer Payroll"},
   { id:40,date:"Jan 1",description:"Rent Payment",amount:-1200,category:"Bills",merchant:"Apartment Leasing"}

  ];
   localStorage.setItem("transactions", JSON.stringify(transactions))

 }

 return transactions

}