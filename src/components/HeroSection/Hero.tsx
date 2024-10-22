import {motion} from "framer-motion";
import {useContext} from "react";
import {ThemeContext} from "../../context/ThemeContext.tsx";
import "./hero.css";

type HeroProps = {
  title: string;
  description: string;
  image: string;
  alt: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  primaryButtonUrl: string;
  secondaryButtonUrl: string;
};

const Hero = ({
                title,
                description,
                image,
                alt,
                primaryButtonText,
                secondaryButtonText,
                primaryButtonUrl,
                secondaryButtonUrl
              }: HeroProps) => {
  const {colors} = useContext(ThemeContext);
  return (
    <motion.section className={"hero"} style={{color: colors.text200, border: '1px solid red'}}>
      <div className={"hero-content"}
           style={{
             color: colors.text200,
             background: colors.bg100,
             // boxShadow: `0 0 20px ${colors.textSecondary}`,
             display: "flex",
             flexDirection: "column",
             justifyContent: "center",
             // padding: "2rem",
           }}
      >
        <h1 style={{color: colors.text100}}>{title}</h1>
        <p style={{color: colors.text200}}>{description}</p>
        <div className={"hero-buttons"}>
          <a href={primaryButtonUrl} className={"hero-button primary"}
             style={{
               color: colors.text200,
               // background: colors.primary,
               border: `2px solid ${colors.accent100}`,
             }}

          >{primaryButtonText}</a>
          <a href={secondaryButtonUrl} style={{
            color: colors.text200,
            border: `2px solid ${colors.accent100}`
          }} className={"hero-button secondary"}>{secondaryButtonText}</a>
        </div>
      </div>
      <div className={"hero-image"}>
        <img src={image} alt={alt}/>
      </div>
    </motion.section>
  );
};

export default Hero;