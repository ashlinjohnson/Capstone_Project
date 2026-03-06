import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent
} from "@mui/material";

import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SecurityIcon from "@mui/icons-material/Security";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { CardActionArea } from "@mui/material";

import { Link } from "react-router-dom";

import commerceLogo from "../assets/Commercelogo3.jpg";

function Landing() {

  const benefits = [
    {
      title: "Secure Banking",
      description: "Industry-leading fraud monitoring and account protection.",
      icon: <SecurityIcon sx={{ fontSize: 40 }} />,
      url: "https://www.commercebank.com/corporate/solutions/payments-treasury/fraud-prevention"
    },
    {
      title: "Smart Financial Tools",
      description: "Track spending, manage budgets, and grow your savings.",
      icon: <TrendingUpIcon sx={{ fontSize: 40 }} />
    },
    {
      title: "Modern Digital Banking",
      description: "Access your accounts anytime from web or mobile.",
      icon: <AccountBalanceIcon sx={{ fontSize: 40 }} />
    },
    {
      title: "24/7 Customer Support",
      description: "Our team is always ready to help when you need it.",
      icon: <SupportAgentIcon sx={{ fontSize: 40 }} />,
      url:"//www.commercebank.com/contact-us"
    }
  ];

  return (

    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >

      {/* PAGE CONTENT */}

      <Box>

        {/* HERO SECTION */}

        <Box
          sx={{
            textAlign: "center",
            py: 10,
            px: 3
          }}
        >

          <Box
            component="img"
            src={commerceLogo}
            alt="Commerce Bank"
            sx={{
              width: "340px",
              maxWidth: "90%",
              mb: 4
            }}
          />

          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Banking Built for Your Future
          </Typography>

          <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
            Commerce Bank provides secure, modern, and intelligent financial services
            designed to help you grow and manage your money with confidence.
          </Typography>

          <Button
            component={Link}
            to="/register"
            variant="contained"
            size="large"
            sx={{ mr: 2 }}
          >
            Open an Account
          </Button>

          <Button
            component={Link}
            to="/login"
            variant="outlined"
            size="large"
          >
            Login
          </Button>

        </Box>


        {/* BENEFITS SECTION */}

        <Grid
          container
          spacing={4}
          sx={{
            px: 6,
            pb: 10
          }}
        >

          {benefits.map((benefit, index) => (

            <Grid
              item
              xs={12}
              md={6}
              lg={3}
              key={index}
            >

              <Card
  elevation={2}
  sx={{
    height: "100%",
    textAlign: "center",
    transition: "all 0.3s ease",
    cursor: "pointer",

    "&:hover": {
      transform: "translateY(-8px) scale(1.03)",
      boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
      border: "1px solid #14684D"
    }
  }}
>

  <CardActionArea
    onClick={() => window.open(benefit.url, "_blank")}
    sx={{ height: "100%" }}
  >

    <CardContent sx={{ p: 4 }}>

      <Box
        sx={{
          mb: 2,
          color: "#14684D"
        }}
      >
        {benefit.icon}
      </Box>

      <Typography variant="h6" sx={{ mb: 1 }}>
        {benefit.title}
      </Typography>

      <Typography variant="body2" color="text.secondary">
        {benefit.description}
      </Typography>

    </CardContent>

  </CardActionArea>

</Card>

            </Grid>

          ))}

        </Grid>

      </Box>


      {/* FOOTER */}

      <Box
        sx={{
          backgroundColor: "#14684D",
          color: "white",
          textAlign: "center",
          py: 2
        }}
      >

        <Typography variant="body2">
          © {new Date().getFullYear()} Commerce Bank. All rights reserved.
        </Typography>

      </Box>

    </Box>

  );
}

export default Landing;