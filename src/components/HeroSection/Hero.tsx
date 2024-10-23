import {motion} from "framer-motion";
import {useContext} from "react";
import {ThemeContext} from "../../context/ThemeContext.tsx";
import "./hero.css";
import EscodLogo from "../ESCOD/ESCOD_logo.tsx";

type HeroProps = {
  title: string;
  description: string;
};

const Hero = ({title, description}: HeroProps) => {
  const {colors} = useContext(ThemeContext);
  return (
    <motion.section className={"hero"} style={{color: colors.text200}}>
      <div className={"hero-content"}
           style={{color: colors.text200}}>
        <h1 style={{color: colors.text100}}>{title}</h1>
        <p style={{color: colors.text200}}>{description}</p>
      </div>
      <div className={"hero-image"}>
        <EscodLogo fill={colors.primary200} width={"100%"} height={"100%"} animate={false}/>
      </div>
    </motion.section>
  );
};

export default Hero;