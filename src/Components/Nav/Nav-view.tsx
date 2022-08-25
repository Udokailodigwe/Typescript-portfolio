import { useState } from "react";

import MenuIcon from "@material-ui/icons/Menu";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Menu,
  Container,
  IconButton,
  MenuItem,
  TypographyPropsVariantOverrides,
} from "@mui/material";

import useStyles from "./styles";

type NavbarProps = {
  banner: string;
};

const attrs: TypographyPropsVariantOverrides = {
  href: "",
  component: "a",
};

function Navbar({ banner }: NavbarProps) {
  const classes = useStyles();

  const [anchorElNav, setAnchorElNav] = useState(null);

  const openHamburgerMenu = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    const button = event.currentTarget as any;
    setAnchorElNav(button);
    console.log(event);
  };

  const closeHamburgerMenu = (): void => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      className={classes.appbar}
      sx={{ backgroundColor: "#f59794" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            aria-label="banner image"
            variant="h1"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {banner}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="Navigation links"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={openHamburgerMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={closeHamburgerMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem
                className={classes.mobile__linkitem}
                onClick={closeHamburgerMenu}
              >
                <Typography {...attrs}>Header</Typography>
                <Typography {...attrs}>Projects</Typography>
                <Typography {...attrs}>Blogs</Typography>
                <Typography {...attrs}>Contact</Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            UDOKA
          </Typography>
          <Box
            className={classes.linkbox}
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
              },
            }}
          >
            <MenuItem
              className={classes.desktop__linkitem}
              onClick={closeHamburgerMenu}
              sx={{ my: 2, color: "white", display: "flex" }}
              aria-label="navigation links"
            >
              <Typography {...attrs}>Header</Typography>
              <Typography {...attrs}>Projects</Typography>
              <Typography {...attrs}>Blogs</Typography>
              <Typography {...attrs}>Contact</Typography>
            </MenuItem>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
