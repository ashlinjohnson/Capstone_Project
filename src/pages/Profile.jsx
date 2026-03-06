import { Box,Typography } from "@mui/material"
import useUser from "../hooks/useUser"

function Profile(){

const user = useUser()

if(!user){
 return <Typography>Loading...</Typography>
}

return(
 <Box>

 <Typography variant="h4" fontWeight="bold" sx={{mb:4}}>
 User Profile
 </Typography>

 <Typography>
 First Name: {user.firstName}
 </Typography>

 <Typography>
 Last Name: {user.lastName}
 </Typography>

 <Typography>
 Email: {user.email}
 </Typography>

 <Typography>
 Country: {user.address?.country}
 </Typography>

 </Box>
)
}

export default Profile