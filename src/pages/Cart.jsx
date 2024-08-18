import { Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import prod1 from "../assets/product/prod-1.jpg";
import CloseIcon from "@mui/icons-material/Close";

const carts = [
  {
    image: prod1,
    heading: "Name of the product 1",
    amount: "4499",
    count: 1,
  },
  {
    image: prod1,
    heading: "Name of the product 2",
    amount: "4499",
    count: 1,
  },
  {
    image: prod1,
    heading: "Name of the product 3",
    amount: "4499",
    count: 1,
  },
  {
    image: prod1,
    heading: "Name of the product 4",
    amount: "4499",
    count: 1,
  },
];

const Cart = () => {
  // Calculate the subtotal amount
  const subtotal = carts.reduce((total, item) => total + Number(item.amount) * item.count, 0);

  return (
    <Box sx={{ padding: "1rem" }}>
      <Typography
        variant="h4"
        sx={{ marginBottom: "1rem", fontWeight: "bold" }}
      >
        Shopping Cart
      </Typography>
      <hr />

      <Box>
        {/* If there are no products in the cart */}
        {carts.length === 0 && (
          <Box sx={{ textAlign: "center", padding: "2rem 0" }}>
            <ProductionQuantityLimitsIcon
              sx={{ fontSize: "4rem", color: "gray", marginBottom: "1rem" }}
            />
            <Typography variant="h6" sx={{ marginBottom: "1rem" }}>
              No products in the cart.
            </Typography>
            <Button variant="contained" color="primary">
              Return to Shop
            </Button>
          </Box>
        )}

        {/* If there are products in the cart */}
        {carts.map((item, index) => {
          const { image, heading, amount, count } = item;
          return (
            <Box
              key={index}
              sx={{
                position: "relative", // Added to position the CloseIcon
                display: "flex",
                alignItems: "center",
                border: "1px solid #e0e0e0",
                borderRadius: "8px",
                padding: "1rem",
                marginBottom: "1rem",
                backgroundColor: "#f9f9f9",
                transition: "background-color 0.3s",
                "&:hover": {
                  backgroundColor: "#f1f1f1",
                },
              }}
            >
              <Box
                sx={{
                  flex: "1",
                  marginRight: "1rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src={image}
                  alt={heading}
                  style={{
                    maxWidth: "100px",
                    maxHeight: "100px",
                    borderRadius: "8px",
                  }}
                />
              </Box>

              <Box sx={{ flex: "2" }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    marginBottom: "0.5rem",
                  }}
                >
                  {heading}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "0.5rem",
                  }}
                >
                  <Button
                    variant="outlined"
                    sx={{
                      minWidth: "30px",
                      padding: "2px 5px", // Adjusted padding
                      marginRight: "0.5rem",
                    }}
                  >
                    -
                  </Button>
                  <Typography
                    sx={{
                      fontSize: "1rem",
                      fontWeight: "bold",
                      textAlign: "center",
                      margin: "0 0.5rem", // Adjusted margin
                    }}
                  >
                    {count}
                  </Typography>
                  <Button
                    variant="outlined"
                    sx={{
                      minWidth: "30px",
                      padding: "2px 5px", // Adjusted padding
                      marginLeft: "0.5rem",
                    }}
                  >
                    +
                  </Button>
                </Box>

                <Typography sx={{ fontWeight: "bold", color: "#555" }}>
                  ₹{amount}
                </Typography>
              </Box>

              <IconButton
                sx={{
                  position: "absolute",
                  top: "8px",
                  right: "8px",
                }}
              >
                <CloseIcon />
              </IconButton>
            </Box>
          );
        })}
      </Box>

      {/* Subtotal and Checkout */}
      <Box
        sx={{
          paddingTop: "1rem",
          borderTop: "1px solid #e0e0e0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Subtotal: ₹{subtotal}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ padding: "0.75rem 1.5rem", fontSize: "1rem", fontWeight: "bold" }}
        >
          Checkout
        </Button>
      </Box>
    </Box>
  );
};

export default Cart;
