import { Box, Typography } from "@mui/material";
import React from "react";
import NearMeIcon from "@mui/icons-material/NearMe";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import payment from "../assets/payments.png";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#f8f9fa", color: "#343a40" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: "80%",
          margin: "auto",
          gap: { xs: 4, md: 8 },
          py: 4,
        }}
      >
        {/* 1 - About and Contact Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 4, md: 8 },
            width: { xs: "100%", md: "50%" },
          }}
        >
          {/* a - About */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              About
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              maxime dolores a doloremque ratione nam? Nisi suscipit iure
              numquam, debitis perspiciatis sequi beatae quas ad, molestias
              reiciendis amet id! Quos.
            </Typography>
          </Box>
          {/* b - Contact */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Contact
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <NearMeIcon sx={{ mr: 1, color: "#6c757d" }} />
              <Typography variant="body2">
                Kayaloram Rd, Punnamada, kottankulangara, Alappuzha, Kerala,
                688066
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <PhoneIphoneIcon sx={{ mr: 1, color: "#6c757d" }} />
              <Typography variant="body2">Phone: 04712720261</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <EmailIcon sx={{ mr: 1, color: "#6c757d" }} />
              <Typography variant="body2">Email: store@jsdev.com</Typography>
            </Box>
          </Box>
        </Box>

        {/* 2 - Categories and Pages Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: { xs: 4, md: 8 },
            width: { xs: "100%", md: "50%" },
          }}
        >
          {/* a - Categories */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Category
            </Typography>
            <Typography variant="body2" gutterBottom>
              Headphones
            </Typography>
            <Typography variant="body2" gutterBottom>
              Smart Watches
            </Typography>
            <Typography variant="body2" gutterBottom>
              Bluetooth Speaker
            </Typography>
            <Typography variant="body2" gutterBottom>
              Wireless Earbuds
            </Typography>
            <Typography variant="body2" gutterBottom>
              Home Theatre
            </Typography>
            <Typography variant="body2" gutterBottom>
              Projectors
            </Typography>
          </Box>
          {/* b - Pages */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Pages
            </Typography>
            <Typography variant="body2" gutterBottom>
              Home
            </Typography>
            <Typography variant="body2" gutterBottom>
              About
            </Typography>
            <Typography variant="body2" gutterBottom>
              Privacy Policy
            </Typography>
            <Typography variant="body2" gutterBottom>
              Returns
            </Typography>
            <Typography variant="body2" gutterBottom>
              Terms & Conditions
            </Typography>
            <Typography variant="body2" gutterBottom>
              Contact Us
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#343a40",
          color: "#f8f9fa",
          py: 2,
          px: 4,
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Typography variant="body2">
          © 2024 EliteGear Store. Premium E-commerce Solutions.
        </Typography>
        <Box sx={{ mt: { xs: 2, md: 0 } }}>
          <img src={payment} alt="Payment Methods" />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
