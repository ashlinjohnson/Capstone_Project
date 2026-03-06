import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
Box,
Typography,
TextField,
Button,
Card,
CardContent
} from "@mui/material"

import commerceLogo from "../assets/commercelogo2.png"
import background from "../assets/GPTGeneratedBackground.png"

import { loginUser } from "../services/authService"

function Login() {

const navigate = useNavigate()

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const handleLogin = () => {

  if(!email || !password){
    alert("Please enter email and password")
    return
  }

  const user = loginUser(email,password)

  if(!user){
    alert("Invalid email or password")
    return
  }

  navigate("/dashboard")
}

return(

<Box
 sx={{
  minHeight:"100vh",
  backgroundImage:`url(${background})`,
  backgroundSize:"cover",
  backgroundPosition:"center",
  display:"flex",
  flexDirection:"column",
  justifyContent:"space-between"
 }}
>

<Box
 sx={{
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  flexGrow:1
 }}
>

<Card
 sx={{
  width:400,
  backdropFilter:"blur(14px)",
  background:"rgba(255,255,255,0.18)",
  border:"1px solid rgba(255,255,255,0.35)",
  boxShadow:"0 10px 30px rgba(0,0,0,0.25)"
 }}
>

<CardContent>
<Box
 component="img"
 src={commerceLogo}
 alt="Commerce Bank"
 onClick={() => navigate("/")}
 sx={{
  width:180,
  display:"block",
  margin:"0 auto 20px auto",
  cursor:"pointer"
 }}
/>

<Typography variant="h5" align="center" sx={{mb:3}}>
 Login
</Typography>

<TextField
 label="Email"
 fullWidth
 margin="normal"
 value={email}
 onChange={(e)=>setEmail(e.target.value)}
/>

<TextField
 label="Password"
 type="password"
 fullWidth
 margin="normal"
 value={password}
 onChange={(e)=>setPassword(e.target.value)}
/>

<Button
 variant="contained"
 fullWidth
 sx={{
  mt:3,
  backgroundColor:"#14684D",
  "&:hover":{backgroundColor:"#0f4f3a"}
 }}
 onClick={handleLogin}
>
 Login
</Button>

</CardContent>
</Card>

</Box>

<Box
 sx={{
  backgroundColor:"#14684D",
  color:"white",
  textAlign:"center",
  py:2
 }}
>
<Typography variant="body2">
 © {new Date().getFullYear()} Commerce Bank
</Typography>
</Box>

</Box>

)
}

export default Login