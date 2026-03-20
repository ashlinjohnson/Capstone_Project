import { AppBar, Toolbar, Button, Box } from "@mui/material";
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

    {/* LEFT SIDE BLANK */}
    <Box sx={{ flexGrow: 1 }} />

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

   </Toolbar>

  </AppBar>

 );

}

export default Navbar;