import React, {useContext, useState, useEffect} from "react";
import {TypeNavbar} from "../../Types/Navbar.ts";
import {motion} from "framer-motion";
import {ThemeContext} from "../../context/ThemeContext.tsx";
import {AiFillMoon, AiFillSun, AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import "./navbar.css";

const Navbar: React.FC<TypeNavbar> = ({logo, links}): JSX.Element => {
  const {theme, colors, toggleTheme} = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 768px)").matches);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const NavbarMobile = () => {
    return (
      <motion.div className={"navbar-mobile"}>
        {/*Boton de Hamburguesa*/}
        <motion.div className={"menu-icon"}>
          <motion.button
            className={"menu-icon-button"}
            whileHover={{scale: 1.5}}
            whileTap={{scale: 0.9}}
            onClick={toggleMenu}
            style={{color: colors.accent100}}>
            {isOpen ? <AiOutlineClose/> : <AiOutlineMenu/>}
          </motion.button>
        </motion.div>
        {/* Menu */}
        <motion.ul
          className={"menu-mobile"}
          style={{background: colors.bg100, display: isOpen ? "flex" : "none"}}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 0.3}}>
          {links.map((link, index) => (
            <motion.li
              key={index}
              className={"menu-mobile-item"}
              style={{color: colors.text100}}
              whileHover={{scale: 1.1}}
              whileTap={{scale: 0.9}}>
              <a style={{color: colors.text200}} href={link.url}>{link.title}</a>
            </motion.li>
          ))}
        </motion.ul>
        {/* Boton de manejo del tema */}
        <motion.button
          whileHover={{scale: 1.3}}
          whileTap={{scale: 0.9}}
          onClick={toggleTheme}
          className={"theme-button"}
          style={{color: colors.accent100}}>
          {theme === "light" ? <AiFillSun/> : <AiFillMoon/>}
        </motion.button>
      </motion.div>
    );
  };

  const NavbarDesktop = () => {
    return (
      <motion.div className={"navbar-desktop"}>
        {/* Menu */}
        <motion.ul className={"menu-desktop"}>
          {links.map((link, index) => (
            <motion.li className={"menu-desktop-item"}
                       key={index}
                       style={{color: colors.text200}}
                       whileHover={{scale: 1.1}}
                       whileTap={{scale: 0.9}}>
              <a className={"menu-desktop-link"}
                 style={{color: colors.text100}}
                 href={link.url}>{link.title}</a>
            </motion.li>
          ))}
        </motion.ul>
        {/* Boton de manejo del tema */}
        <motion.button
          whileHover={{scale: 1.3}}
          whileTap={{scale: 0.9}}
          onClick={toggleTheme}
          className={"theme-button"}
          style={{color: colors.accent100}}>
          {theme === "light" ? <AiFillSun/> : <AiFillMoon/>}
        </motion.button>
      </motion.div>
    );
  }
  return (
    <motion.nav
      initial={{y: -100}}
      animate={{y: 0}}
      transition={{duration: 0.5, type: "spring", stiffness: 100}}
      style={{background: colors.bg100}}>
      {/* Logo */}
      <motion.div className={"logo"}>
        <img className={"logo-image"} src={logo} alt="logo"/>
      </motion.div>
      {/*  */}
      {isMobile ? <NavbarMobile/> : <NavbarDesktop/>}
    </motion.nav>
  );
};

export default Navbar;
