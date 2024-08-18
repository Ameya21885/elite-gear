import React from "react";
import { Box, Button, Rating, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../store/slice/cartSlice";
import { useParams } from "react-router-dom";
import jsonData from "../data/data.json";
import one from "../assets/category/headphones.jpg";
import two from "../assets/category/wireless-earbds.jpg";
import three from "../assets/category/bluetooth-speaker.jpg";
import four from "../assets/category/smart-watches.jpg";
import RelatedProducts from "../components/products/RelatedProducts";

const imageMap = {
  "headphones.jpg": one,
  "wireless-earbds.jpg": two,
  "bluetooth-speaker.jpg": three,
  "smart-watches.jpg": four,
};

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  if (!jsonData || !Array.isArray(jsonData.categories)) {
    return <Typography variant="h6">Data not found</Typography>;
  }

  let product = null;
  jsonData.categories.forEach((category) => {
    const foundProduct = category.products.find(
      (prod) => prod.id === parseInt(id, 10)
    );
    if (foundProduct) {
      product = foundProduct;
    }
  });

  if (!product) {
    return <Typography variant="h6">Product not found</Typography>;
  }

  const productImage = imageMap[product.images[0]];

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
          padding: 2,
          width: "80%",
          margin: "3rem auto",
        }}
      >
        <Box
          sx={{
            flex: 1,
            textAlign: "center",
            marginBottom: { xs: 2, sm: 0 },
          }}
        >
          <img
            src={productImage || ""}
            alt={product.name}
            style={{
              width: "100%",
              maxWidth: "300px",
              height: "auto",
              margin: "0 auto",
            }}
          />
        </Box>

        <Box
          sx={{
            flex: 2,
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <Box sx={{ marginBottom: 2 }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                marginBottom: 1,
                fontSize: { xs: "1.5rem", sm: "2rem" },
              }}
            >
              {product.name}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "0.9rem", sm: "1rem" },
                color: "#555",
              }}
            >
              {product.description}
            </Typography>
            <Rating
              name="half-rating-read"
              defaultValue={product.rating}
              precision={0.5}
              readOnly
            />
            <Typography
              sx={{
                fontSize: { xs: "1rem", sm: "1.2rem" },
                fontWeight: "bold",
                color: "green",
                marginBottom: 1,
              }}
            >
              ₹{product.price}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginBottom: 2,
            }}
          >
            <Button
              variant="outlined"
              sx={{ minWidth: "30px", padding: 0 }}
              onClick={() => dispatch(removeItemFromCart(product.id))}
            >
              -
            </Button>
            <Typography
              sx={{
                padding: "0 1rem",
                fontSize: "1rem",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              0
            </Typography>
            <Button
              variant="outlined"
              sx={{ minWidth: "30px", padding: 0 }}
              onClick={() => dispatch(addItemToCart(product))}
            >
              +
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{
                marginLeft: "1rem",
                padding: "0.5rem 1rem",
                fontSize: "0.875rem",
                fontWeight: "bold",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
              onClick={() => dispatch(addItemToCart(product))}
            >
              Add to Cart
            </Button>
          </Box>
        </Box>
      </Box>
      <Box sx={{ padding: { xs: 0, sm: "1rem", md: "2rem" } }}>
        <RelatedProducts />
      </Box>
    </Box>
  );
};

export default SingleProduct;
