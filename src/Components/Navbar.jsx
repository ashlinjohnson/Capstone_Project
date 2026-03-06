import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Navbar() {

 const navigate = useNavigate();

 const currentUser = JSON.parse(localStorage.getItem("currentUser"));
 const name = currentUser?.firstName || "User";

 const logout = () => {
  localStorage.removeItem("currentUser");
  navigate("/login");
 };

 return (

  <AppBar position="static" sx={{ backgroundColor: "#14684D" }}>

   <Toolbar>

    <Typography
     variant="h6"
     sx={{ flexGrow: 1, fontWeight: "bold" }}
    >
     Commerce Bank
    </Typography>

    <Box sx={{ display: "flex", gap: 2 }}>

     <Button
      color="inherit"
      onClick={() => navigate("/profile")}
      sx={{ textTransform: "none", fontWeight: "bold" }}
     >
      Welcome, {name}!
     </Button>

     <Button
      color="inherit"
      onClick={logout}
      sx={{ fontWeight: "bold" }}
     >
      Logout
     </Button>

    </Box>

   </Toolbar>

  </AppBar>

 );

}

export default Navbar;