import { Box, Button, Typography } from "@mui/material";
import React from "react";
import banner from "../../assets/banner-img.png";

const Hero = () => {
  return (
    <Box
      sx={{
        backgroundImage: "linear-gradient(to right, #8e2de2, #4a00e0)",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        flexDirection: { xs: "column-reverse", sm: "row" },
        overflowX: "hidden",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "29%" },
          textAlign: { xs: "center", sm: "left" },
          padding: { xs: "0 1rem", sm: "0" },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "2.5rem", sm: "4rem", md: "6rem" }, // Responsive font size
            fontWeight: "600",
            lineHeight: 1.2, // Adjust line height for better readability
          }}
        >
          SALES
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginBottom: "1.5rem",
            fontSize: { xs: "0.8rem", sm: "1rem" }, // Responsive font size
            lineHeight: 1.5, // Adjust line height for readability
            width: { xs: "70%", sm: "auto" }, // 70% width on mobile, auto on larger screens
            margin: { xs: "0 auto", sm: "0" }, // Center horizontally on mobile, default margin on larger screens
            textAlign: { xs: "center", sm: "left" }, // Center text on mobile, align left on larger screens
          }}
        >
          Don’t miss out on our exclusive summer deals! Enjoy massive discounts
          on all products for a limited time only.
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", sm: "flex-start" },
            gap: 1,
            flexWrap: "wrap",
            marginBottom: { xs: "2rem" },
          }}
        >
          <Button
            variant="outlined"
            sx={{ color: "white", borderColor: "white" }}
          >
            READ MORE
          </Button>
          <Button variant="contained" sx={{ backgroundColor: "#4a00e0" }}>
            SHOP NOW
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          width: { xs: "90%", sm: "60%" }, // Adjust image container width
          mb: { xs: 2, sm: 0 },
          padding: { xs: "0 1rem", sm: "0" }, // Padding to prevent overflow
          display: "flex",
          justifyContent: "center", // Center the image container horizontally
          alignItems: "center", // Center the image container vertically
        }}
      >
        <img
          src={banner}
          alt="hero section"
          style={{ width: "85%", objectFit: "cover" }}
        />
      </Box>
    </Box>
  );
};

export default Hero;
