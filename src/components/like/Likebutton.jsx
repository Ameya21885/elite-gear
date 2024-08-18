import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

const Likebutton = ({ initialFav }) => {
  // State to manage the favorite status
  const [fav, setFav] = useState(initialFav);

  // Function to toggle the favorite status
  const handleToggle = () => {
    setFav((prevFav) => !prevFav);
  };

  return (
    <Checkbox
      icon={<FavoriteBorder />}
      checkedIcon={<Favorite />}
      checked={fav} // Checked state based on fav
      onChange={handleToggle} // Toggle the fav state on change
      sx={{
        color: fav ? "red" : "gray", // Color based on fav state
        "&.Mui-checked": {
          color: "red", // Ensure the color is red when checked
        },
        "&:hover": {
          backgroundColor: fav
            ? "rgba(255, 0, 0, 0.1)"
            : "rgba(128, 128, 128, 0.1)", // Slight background color on hover
        },
      }}
    />
  );
};

export default Likebutton;
