import { InputAdornment, TextField } from "@mui/material";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';

const Searchbar = () => {
  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        size={"small"}
        fullWidth
        InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
      />
    </div>
  );
};

export default Searchbar;
