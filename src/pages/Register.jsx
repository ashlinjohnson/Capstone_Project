import {
 Box,
 Typography,
 TextField,
 Button,
 MenuItem
} from "@mui/material";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import background from "../assets/GPTGeneratedBackground.png";
import commerceLogo from "../assets/commercelogo2.png";

import { registerUser } from "../services/authService";

const countries = [
 "United States",
 "Canada",
 "Mexico",
 "United Kingdom",
 "Germany",
 "France",
 "Spain",
 "Italy",
 "Brazil",
 "India",
 "China",
 "Japan",
 "South Korea",
 "Australia",
 "South Africa"
];

function Register(){

 const navigate = useNavigate();

 const [formData,setFormData] = useState({
  firstName:"",
  lastName:"",
  email:"",
  password:"",
  confirmPassword:"",
  securityQuestion:"",
  securityAnswer:"",
  street1:"",
  street2:"",
  city:"",
  county:"",
  zip:"",
  country:"United States"
 });

 const securityQuestions=[
  "What city were you born in?",
  "What is the name of your favorite pet?",
  "Who is your favorite artist?",
  "What is the name of your best friend?"
 ];

 const handleChange=(e)=>{

  setFormData({
   ...formData,
   [e.target.name]:e.target.value
  });

 };



const handleRegister = (e)=>{

  e.preventDefault()

  if(formData.password !== formData.confirmPassword){
    alert("Passwords do not match")
    return
  }

  registerUser(formData)

  navigate("/login")
}

 return(

  <Box
   sx={{
    minHeight:"100vh",
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
    backgroundImage:`url(${background})`,
    backgroundSize:"cover",
    backgroundPosition:"center"
   }}
  >

   {/* LOGO */}

   <Box
 component="img"
 src={commerceLogo}
 alt="Commerce Bank"
 onClick={() => navigate("/")}
 sx={{
  width:180,
  cursor:"pointer"
 }}
/>

   {/* CENTER FORM */}

   <Box
    sx={{
     display:"flex",
     justifyContent:"center",
     alignItems:"center",
     flexGrow:1
    }}
   >

    <Box
     sx={{
      width:480,
      p:5,
      borderRadius:"16px",
      backdropFilter:"blur(14px)",
      background:"rgba(20,104,77,0.18)",
      border:"1px solid rgba(255,255,255,0.25)",
      boxShadow:"0 10px 30px rgba(0,0,0,0.25)"
     }}
    >

     <Typography
      variant="h4"
      mb={3}
      fontWeight="bold"
      textAlign="center"
     >
      Create Account
     </Typography>

     <form onSubmit={handleRegister}>

      {/* NAME ROW */}

      <Box sx={{ display:"flex", gap:2 }}>

       <TextField
        fullWidth
        label="First Name"
        name="firstName"
        margin="normal"
        onChange={handleChange}
        variant="filled"
       />

       <TextField
        fullWidth
        label="Last Name"
        name="lastName"
        margin="normal"
        onChange={handleChange}
        variant="filled"
       />

      </Box>

      <TextField
       fullWidth
       label="Email"
       name="email"
       margin="normal"
       onChange={handleChange}
       variant="filled"
      />

      <TextField
       fullWidth
       label="Password"
       type="password"
       name="password"
       margin="normal"
       onChange={handleChange}
       variant="filled"
      />

      <TextField
       fullWidth
       label="Verify Password"
       type="password"
       name="confirmPassword"
       margin="normal"
       onChange={handleChange}
       variant="filled"
      />

      <TextField
       select
       fullWidth
       label="Security Question"
       name="securityQuestion"
       margin="normal"
       onChange={handleChange}
       variant="filled"
      >

       {securityQuestions.map((q,index)=>(

        <MenuItem key={index} value={q}>
         {q}
        </MenuItem>

       ))}

      </TextField>

      <TextField
       fullWidth
       label="Security Answer"
       name="securityAnswer"
       margin="normal"
       onChange={handleChange}
       variant="filled"
      />

      <TextField
       fullWidth
       label="Street Address 1"
       name="street1"
       margin="normal"
       onChange={handleChange}
       variant="filled"
      />

      <TextField
       fullWidth
       label="Street Address 2"
       name="street2"
       margin="normal"
       onChange={handleChange}
       variant="filled"
      />

      <TextField
       fullWidth
       label="City"
       name="city"
       margin="normal"
       onChange={handleChange}
       variant="filled"
      />

      <TextField
       fullWidth
       label="County"
       name="county"
       margin="normal"
       onChange={handleChange}
       variant="filled"
      />

      <TextField
       fullWidth
       label="Zip Code"
       name="zip"
       margin="normal"
       onChange={handleChange}
       variant="filled"
      />

      {/* COUNTRY DROPDOWN */}

      <TextField
       select
       fullWidth
       label="Country"
       name="country"
       margin="normal"
       value={formData.country}
       onChange={handleChange}
       variant="filled"
      >

       {countries.map((country,index)=>(
        <MenuItem key={index} value={country}>
         {country}
        </MenuItem>
       ))}

      </TextField>

      <Button
       fullWidth
       type="submit"
       variant="contained"
       sx={{
        mt:3,
        backgroundColor:"#14684D",
        fontWeight:"bold",
        height:50
       }}
      >
       Register
      </Button>

     </form>

    </Box>

   </Box>

   {/* FOOTER */}

   <Box
    sx={{
     backgroundColor:"#14684D",
     color:"white",
     textAlign:"center",
     py:2
    }}
   >

    <Typography variant="body2">
     © {new Date().getFullYear()} Commerce Bank. All rights reserved.
    </Typography>

   </Box>

  </Box>

 );

}

export default Register;