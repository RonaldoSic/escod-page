import React from "react";
import {TypeNavbar} from "../../Types/Navbar.ts";
import "./navbar.css";

const Navbar: React.FC<TypeNavbar> = ({logo, links}): JSX.Element => {
  return (
    <nav>
      <img src={logo} alt="Logo"
           className={'navbar-logo'}
      />
      <ul>
        {links.map((link, index) => (
          <li key={index} className={''}>
            <a href={link.url}
               className={''}>{link.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar