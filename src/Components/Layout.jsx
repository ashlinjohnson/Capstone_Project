import Navbar from "./Navbar";
import Footer from "./Footer";
import {
 Drawer,
 List,
 ListItemButton,
 ListItemText,
 Box,
 Divider,
 Typography
} from "@mui/material";

import { Link, Outlet } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

import { isAuthenticated } from "../services/authService";

const drawerWidth = 220;

function Layout() {
 const authenticated = isAuthenticated();

 return (
  <Box sx={{ display: "flex", width: "100%" }}>

   {authenticated && (
    <Drawer
     variant="permanent"
     sx={{
      width: drawerWidth,
      "& .MuiDrawer-paper": {
       width: drawerWidth,
       boxSizing: "border-box",
       background: "#FFFFFF",
       borderRight: "1px solid #E0E0E0"
      }
     }}
    >
     <List sx={{ mt: 2 }}>

      <Typography sx={{ pl: 3, pb: 1, fontSize: "11px", letterSpacing: "1px", color: "#7A7A7A" }}>
       OVERVIEW
      </Typography>

      <ListItemButton component={Link} to="/home">
       <HomeIcon sx={{ mr: 2 }} />
       <ListItemText primary="Home" />
      </ListItemButton>

      <ListItemButton component={Link} to="/dashboard">
       <DashboardIcon sx={{ mr: 2 }} />
       <ListItemText primary="Dashboard" />
      </ListItemButton>

      <Divider sx={{ my: 2 }} />

      <Typography sx={{ pl: 3, pb: 1, fontSize: "11px", letterSpacing: "1px", color: "#7A7A7A" }}>
       FINANCES
      </Typography>

      <ListItemButton component={Link} to="/transactions">
       <ReceiptLongIcon sx={{ mr: 2 }} />
       <ListItemText primary="Transactions" />
      </ListItemButton>

      <ListItemButton component={Link} to="/transfer">
       <SwapHorizIcon sx={{ mr: 2 }} />
       <ListItemText primary="Transfer" />
      </ListItemButton>

      <ListItemButton component={Link} to="/debts">
       <AccountBalanceWalletIcon sx={{ mr: 2 }} />
       <ListItemText primary="Debts" />
      </ListItemButton>

      <ListItemButton component={Link} to="/accounts">
       <AccountBalanceIcon sx={{ mr: 2 }} />
       <ListItemText primary="Accounts" />
      </ListItemButton>

     </List>
    </Drawer>
   )}

   <Box
    sx={{
     flexGrow: 1,
     display: "flex",
     flexDirection: "column",
     minHeight: "100vh"
    }}
   >

    <Navbar />

    <Box
     sx={{
      flexGrow: 1,
      padding: 3,
      backgroundColor: "#F4F7F5"
     }}
    >
     <Outlet />
    </Box>

    <Footer />

   </Box>

  </Box>
 );
}

export default Layout;