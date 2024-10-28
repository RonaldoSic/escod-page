import React, {useContext, useState, useEffect} from "react";
import {TypeNavbar} from "../../Types/Navbar.ts";
import {motion} from "framer-motion";
import {ThemeContext} from "../../context/ThemeContext.tsx";
import {AiFillMoon, AiFillSun, AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import "./navbar.css";
import EscodLogo from "../ESCOD/ESCOD_logo.tsx";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider, Drawer,
  IconButton,
  List,
  ListItem, ListItemButton, ListItemText,
  Toolbar,
  Typography
} from "@mui/material";

const Navbar: React.FC<TypeNavbar> = ({links, drawerWidth, window}) => {
  const {theme, colors, toggleTheme} = useContext(ThemeContext);
  const [mobileOpen, setMobileOpen] = React.useState(false);


  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>
      <EscodLogo fill={colors.primary200} width={"50px"} height={"50px"} animate={false}/>
      <Divider/>
      <List>
        {links.map((link, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{textAlign: 'center'}}>
              <ListItemText primary={link.title}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;


  return (
    <Box sx={{display: 'flex'}}>
      <CssBaseline/>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{mr: 2, display: {sm: 'none'}}}
          >
            <AiOutlineMenu/>
          </IconButton>

          <EscodLogo fill={colors.primary200} width={"50px"} height={"50px"} animate={false}/>


          <Box sx={{display: {xs: 'none', sm: 'block'}}}>
            {links.map((link, index) => (
              <ListItemText primary={link.title}/>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: {xs: 'block', sm: 'none'},
            '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>)
};

export default Navbar;
