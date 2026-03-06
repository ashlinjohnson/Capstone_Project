import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./Components/Layout";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Debts from "./pages/Debts";
import Transfer from "./pages/Transfer";
import Home from "./pages/Home";
import Accounts from "./pages/Accounts";

import { isAuthenticated } from "./services/authService";
import ProtectedRoute from "./Components/ProtectedRoute";
function App() {

 return (
  <Router>

   <Routes>

    {/* PUBLIC */}
    <Route path="/" element={<Landing />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />

    {/* PROTECTED */}
    <Route element={
  <ProtectedRoute>
    <Layout />
  </ProtectedRoute>
}>

     <Route path="/home" element={<Home />} />

     <Route path="/dashboard" element={<Dashboard />} />

     <Route path="/transactions" element={<Transactions />} />

     <Route path="/debts" element={<Debts />} />

     <Route path="/transfer" element={<Transfer />} />

     <Route path="/accounts" element={<Accounts />} />

    </Route>

   </Routes>

  </Router>
 );
}

export default App;