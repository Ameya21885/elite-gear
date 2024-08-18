import { Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

const CategoryItem = ({  id, img, heading, onClick }) => {
  return (
    <Box
      component={Link}
      to={"categories"}
      sx={{
        position: "relative",
        width: { xs: "10rem", sm: "12rem", md: "14rem" },
        height: { xs: "10rem", sm: "12rem", md: "14rem" },
        margin: "auto",
        overflow: "hidden",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <img
        src={img}
        alt={heading}
        style={{
          width: "100%",
          height: "70%",
          objectFit: "cover",
          display: "block",
        }}
      />
      <Typography
        component="h3"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontSize: { xs: "0.75rem", sm: "1rem", md: "1.25rem" },
          fontWeight: "bold",
          textAlign: "center",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          whiteSpace: "nowrap",
          pointerEvents: "none",
        }}
      >
        {heading}
      </Typography>
    </Box>
  );
};

export default CategoryItem;
