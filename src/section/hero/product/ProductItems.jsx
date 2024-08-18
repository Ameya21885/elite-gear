import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Likebutton from "../../../components/like/Likebutton";

const ProductItems = ({ data }) => {
  return (
    <Box
      sx={{
        padding: "2rem", // Padding around the grid container
        backgroundColor: "#f5f5f5", // Light gray background color for the section
      }}
    >
      <Grid
        container
        spacing={4} // Spacing between grid items (cards)
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {data.map((item, index) => {
          const { image, heading, amount } = item;
          return (
            <Grid item xs={2} sm={4} md={3} key={index}>
              <Box
                sx={{
                  position: "relative", // Allows the like button to be positioned absolutely within this box
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "1rem", // Padding inside each card
                  borderRadius: "12px", // Rounded corners
                  backgroundColor: "#fff", // White background color for the card
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
                  transition: "transform 0.3s ease-in-out", // Smooth hover effect
                  "&:hover": {
                    transform: "scale(1.05)", // Slightly enlarge on hover
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)", // Enhanced shadow on hover
                  },
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "200px", // Fixed height for the image container
                    overflow: "hidden", // Hide overflow
                    borderRadius: "12px", // Same border radius as the card
                    marginBottom: "1rem", // Space between image and text
                    position: "relative", // Allows the like button to be positioned absolutely within this box
                  }}
                >
                  <img
                    src={image}
                    alt={heading}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover", // Ensure the image covers the entire area
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute", // Absolutely position the like button
                      top: "0.5rem", // Position it slightly away from the top
                      right: "0.5rem", // Position it slightly away from the right edge
                      zIndex: 1, // Ensure the like button is above the image
                    }}
                  >
                    <Likebutton />
                  </Box>
                </Box>
                <Typography
                  sx={{
                    fontSize: "1.1rem", // Slightly larger font size for the heading
                    fontWeight: "bold", // Bold heading
                    color: "#333", // Darker text color
                    textAlign: "center", // Center align text
                  }}
                >
                  {heading}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1rem", // Font size for the amount
                    color: "#777", // Lighter color for amount
                    marginTop: "0.5rem", // Small space between heading and amount
                    textAlign: "center", // Center align text
                  }}
                >
                  ₹{amount}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ProductItems;
