import Hero from "../components/HeroSection/Hero.tsx";
import {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext.tsx";
import escod_logo from "../../public/escod-original.svg"
import {motion, useScroll} from "framer-motion";

const Home = (): JSX.Element => {
  const {colors} = useContext(ThemeContext);
  const title = "Bienvenido a ESCOD";
  const description = "La mejor opción que tu negocio necesit para crecer y expandirse";
  const image = escod_logo;
  const alt = "Programador";
  const primaryButtonText = "Inscribete";
  const secondaryButtonText = "Conoce más";
  const primaryButtonUrl = "#";
  const secondaryButtonUrl = "#";

  const ScrollIndicator = (): JSX.Element => {
    const {scrollYProgress} = useScroll();
    return (<motion.div style={{
      position: "fixed",
      zIndex: 10,
      top: 0,
      left: 0,
      right: 0,
      height: 10,
      background: colors.accent100,
      transformOrigin: "0%",
      scaleX: scrollYProgress,
    }}/>);
  }

  return (
    <div className={"container"} style={{
      background: colors.bg100,
      color: colors.text100, minHeight: "100vh",
    }}>
      <div style={{
        // paddingTop: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <ScrollIndicator/>
        <Hero
          title={title}
          description={description}
          image={image}
          alt={alt}
          primaryButtonText={primaryButtonText}
          secondaryButtonText={secondaryButtonText}
          primaryButtonUrl={primaryButtonUrl}
          secondaryButtonUrl={secondaryButtonUrl}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            // background: colors.secondary,
          }}>
          <motion.img
            src={escod_logo}
            alt={"Logo de ESCOD"}
            style={{width: "50%"}}
            initial={{x: -100}}
            animate={{x: 0}}
            transition={{duration: 0.5}}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;