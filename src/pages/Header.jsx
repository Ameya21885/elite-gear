import { AppBar, Box, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const pages = [
  {
    title: "Home",
    link: "/",
  },

  {
    title: "Categories",
    link: "categories",
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: "100%" }} role="presentation">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 20px",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: "inherit",
            textDecoration: "none",
          }}
        >
          EliteGear
        </Typography>
        <IconButton onClick={toggleDrawer(false)}>
          <CloseIcon sx={{ border: "2px solid black", borderRadius: "20px" }} />
        </IconButton>
      </Box>

      <List>
        {pages.map(({ title, link }, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              component={Link}
              to={link}
              onClick={toggleDrawer(false)}
            >
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
              <ListItemText primary={title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          width: "100%",
          height: { xs: "4rem", sm: "4.3rem" },
          display: "flex",
          justifyContent: "center",
          backgroundColor: "black",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: { xs: 2, sm: 3, md: 5 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: ".6rem", md: "4rem" },
            }}
          >
            {/* Mobile Menu Button */}
            <Box sx={{ display: { md: "none" } }}>
              <IconButton onClick={toggleDrawer(true)} sx={{ color: "white" }}>
                <MenuIcon />
              </IconButton>
              <Drawer
                open={open}
                onClose={toggleDrawer(false)}
                anchor="right"
                PaperProps={{ sx: { width: "100%" } }}
              >
                {DrawerList}
              </Drawer>
            </Box>

            {/* Heading */}
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "1rem", sm: "1.25rem" },
                color: "white",
              }}
            >
              EliteGear
            </Typography>

            {/* Navigation Links */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: { md: "1.5rem" },
              }}
            >
              {pages.map((item, index) => (
                <Typography
                  key={index}
                  component={Link}
                  to={item.link}
                  sx={{
                    textDecoration: "none",
                    color: "white",
                    fontSize: { md: "1rem" },
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "gray",
                    },
                  }}
                >
                  {item.title}
                </Typography>
              ))}
            </Box>
          </Box>

          {/* Icons and Drawer Menu */}
          <Box sx={{ display: "flex", gap: { xs: "0.5rem", sm: "1rem" } }}>
            <IconButton
              component={Link}
              to="favourite"
              sx={{
                color: "white",
                transition: "color 0.3s ease",
                "&:hover": {
                  color: "gray",
                },
              }}
            >
              <Badge badgeContent={4} color="secondary">
                <FavoriteBorderIcon />
              </Badge>
            </IconButton>
            <IconButton
              component={Link}
              to="cart"
              sx={{
                color: "white",
                transition: "color 0.3s ease",
                "&:hover": {
                  color: "gray",
                },
              }}
            >
              <Badge badgeContent={4} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Box>
        </Box>
      </AppBar>
    </Box>
  );
};

export default Header;
