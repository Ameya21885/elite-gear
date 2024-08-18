import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import newsletter from "../../assets/newsletter.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const NewsLetter = () => {
  return (
    <Box sx={{ position: "relative", textAlign: "center", color: "black" }}>
      <Box>
        <img src={newsletter} alt="newsletter" width={"100%"} height={400}/>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", sm: "80%", md: "60%" },
          textAlign: "center",
          color: "white",
        }}
      >
        <Typography variant="h4" gutterBottom>
          NEWSLETTER
        </Typography>
        <Typography variant="body1" gutterBottom>
          SIGN UP FOR LATEST UPDATES AND OFFERS
        </Typography>
        <Box sx={{ display: 'flex', gap: '1rem', mt: 2, mb: 2 }}>
          <TextField
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
            fullWidth
            size="small"
          />
          <Button variant="contained" size="large">
            Subscribe
          </Button>
        </Box>
        <Typography variant="body2" gutterBottom>
          Will be used in accordance with our Privacy Policy
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
          <FacebookIcon fontSize="large" />
          <TwitterIcon fontSize="large" />
          <InstagramIcon fontSize="large" />
          <LinkedInIcon fontSize="large" />
        </Box>
      </Box>
    </Box>
  );
};

export default NewsLetter;
