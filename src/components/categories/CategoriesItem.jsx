import { Box, Button, Typography } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Likebutton from "../like/Likebutton";
import one from "../../assets/category/headphones.jpg";
import two from "../../assets/category/wireless-earbds.jpg";
import three from "../../assets/category/bluetooth-speaker.jpg";
import four from "../../assets/category/smart-watches.jpg";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";

const imageMap = {
  "headphones.jpg": one,
  "wireless-earbds.jpg": two,
  "bluetooth-speaker.jpg": three,
  "smart-watches.jpg": four,
};

const CategoriesItem = ({ id, rating, img, heading, amount, fav }) => {
  // Check if the image exists in the imageMap, otherwise provide a fallback
  const imageSrc = imageMap[img] || ''; // Use a default/fallback image if not found

  return (
    <Box
      sx={{
        position: "relative",
        border: "1px solid #ddd",
        borderRadius: "8px",
        overflow: "hidden",
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "8px",
          right: "8px",
          zIndex: 2,
        }}
      >
        <Likebutton initialFav={fav} />
      </Box>

      {imageSrc ? (
        <img
          src={imageSrc}
          alt={img}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
        />
      ) : (
        <Typography>No Image Available</Typography>
      )}

      <Box sx={{ padding: "1rem" }}>
        <Typography
          sx={{
            fontSize: { xs: "1rem", sm: "1.25rem" },
            fontWeight: "bold",
            marginBottom: "0.5rem",
            color: "#333",
          }}
        >
          {heading}
        </Typography>
        <Rating
          name="half-rating-read"
          defaultValue={rating}
          precision={0.5}
          readOnly
        />
        <Typography
          sx={{
            fontSize: { xs: "0.9rem", sm: "1rem" },
            fontWeight: "normal",
            color: "#777",
          }}
        >
          <CurrencyRupeeIcon
            sx={{ fontSize: "inherit", marginRight: "0.25rem" }}
          />
          {amount}
        </Typography>
        <Button component={Link} to={`/categories/${id}`}>
          Read More
        </Button>
      </Box>
    </Box>
  );
};

export default CategoriesItem;
