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
  const handleDrawerToggle = () => setMobileOpen((prevState) => !prevState)
  /* El Drawer solo se muestra en pantallas pequeñas*/
  const drawer = (<Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>
    {/*Espacio para colocar el logo*/}
    <Box sx={{display: 'flex', justifyContent: 'center', mt: 2, mb: 2}}>
      <EscodLogo fill={colors.primary200} width={"50px"} height={"50px"} animate={false}/>
    </Box>
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
  </Box>);
  const container = window !== undefined ? () => window().document.body : undefined;


  return (
    <Box>
      <CssBaseline/>
      <AppBar component="nav" style={{background: colors.bg100}}>
        <Toolbar>
          {/*Espacio para el logo*/}
          <Box sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}>
            <EscodLogo fill={colors.primary200} width={"50px"} height={"50px"} animate={false}/>
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{mr: 2, display: {sm: 'none'}}}>
            <AiOutlineMenu/>
          </IconButton>

          <Box sx={{display: {xs: 'none', sm: 'block'}}}>
            {links.map((link, index) => (
              <Button
                component="motion.button"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                  delay: 0.2
                }}
                key={index} color="inherit" style={{color: colors.text100}}>{link.title}</Button>
            ))}
          </Box>

          {/*Espacio para el boton de cambio de tema*/}
          <IconButton
            color="inherit"
            aria-label="toggle theme"
            edge="end"
            onClick={toggleTheme}
            sx={{ml: 2}}>
            {theme === 'light' ? <AiFillMoon color={colors.accent100}/> : <AiFillSun color={colors.accent100}/>}
          </IconButton>


        </Toolbar>
      </AppBar>
      <nav>
        {/*El Drawer solo se muestra en pantallas pequeñas*/}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{keepMounted: true}}
          sx={{
            display: {xs: 'block', sm: 'none'},
            '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
          }}>
          {drawer}
        </Drawer>
      </nav>
    </Box>)
};

export default Navbar;
