import React from 'react';
import {motion} from "framer-motion";

type links = {
  icon?: JSX.Element;
  name: string;
  link: string;
};

type FooterProps = {
  title: string;
  description: string;
  socials: links[];
  // links: links[];
};


function Footer({title, description, socials}: FooterProps): JSX.Element {
  return (
    <motion.footer className={"footer"}>
      <motion.div className={"footer-content"}>
        <motion.h2>{title}</motion.h2>
        <motion.p>{description}</motion.p>
        <motion.div className={"socials"}>
          {socials.map((social, index) => (
            <motion.a key={index} href={social.link} target={"_blank"} rel={"noreferrer"}>
              {social.icon}
              {social.name}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </motion.footer>
  );
}

export default Footer;