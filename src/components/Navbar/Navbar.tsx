import React, {useContext, useState} from "react";
import {TypeNavbar} from "../../Types/Navbar.ts";
import {motion} from "framer-motion";
import {ThemeContext} from "../../context/ThemeContext.tsx";
import {AiFillMoon, AiFillSun, AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import "./navbar.css";

const Navbar: React.FC<TypeNavbar> = ({logo, links}): JSX.Element => {
    const {theme, colors, toggleTheme} = useContext(ThemeContext);
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return (
      <motion.nav
        className="navbar"
        initial={{y: -100}}
        animate={{y: 0}}
        transition={{duration: 0.5, type: "spring", stiffness: 100}}
        style={{
          background: colors.background,
          color: colors.text,
        }}
      >
        {/* Logo */}
        <motion.div className="navbar-logo">
          <img src={logo} alt="logo"/>
        </motion.div>

        {/* Icono de menú hamburguesa (para móviles) */}
        <motion.div className="navbar-hamburger" onClick={toggleMenu}>
          {isOpen ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}
        </motion.div>

        {/* Menú completo para pantallas grandes */}
        <motion.ul
          className={`navbar-links ${isOpen ? 'active' : ''}`}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 0.3}}
        >
          {links.map((link, index) => (
            <motion.li
              key={index}
              className="navbar-item"
              whileHover={{scale: 1.1}}
              whileTap={{scale: 0.9}}
            >
              <a href={link.url}>{link.title}</a>
            </motion.li>
          ))}
        </motion.ul>

        <motion.button
          whileHover={{scale: 1.3}}
          whileTap={{scale: 0.9}}
          onClick={toggleTheme}
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            outline: "none",
            fontSize: "1.5rem",
            margin: "0 2rem",
            color: colors.iconTheme,
          }}
        >
          {theme === "light" ? <AiFillSun/> : <AiFillMoon/>}
        </motion.button>
      </motion.nav>
    );
  }
;

export default Navbar;
