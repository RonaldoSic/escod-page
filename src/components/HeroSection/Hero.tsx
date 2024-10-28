import {motion} from "framer-motion";
import React, {useContext} from "react";
import {ThemeContext} from "../../context/ThemeContext.tsx";
import "./hero.css";
import EscodLogo from "../ESCOD/ESCOD_logo.tsx";
import {Typography} from "@mui/material";

type HeroProps = {
  title: string;
  description: string;
};


const Hero = ({title, description}: HeroProps) => {
  const {colors} = useContext(ThemeContext);
  return (
    <motion.section className={"hero"} style={{color: colors.text200}}>
      <motion.div className={"hero-content"}>
        <Typography
          variant="h1"
          component={motion.h1}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: 0.2
          }}
          style={{color: colors.text200}}>
          {title}
        </Typography>
        <Typography
          variant="body1"
          component={motion.p}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: 0.4
          }}
          style={{color: colors.text200}}>
          {description}
        </Typography>
      </motion.div>
      <div className={"hero-image"}>
        <EscodLogo fill={colors.primary200} width={"100%"} height={"100%"} animate={false}/>
      </div>
    </motion.section>
  );
};

export default Hero;