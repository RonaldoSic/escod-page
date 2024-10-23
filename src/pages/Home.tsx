import Hero from "../components/HeroSection/Hero.tsx";
import {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext.tsx";
import {motion, useScroll} from "framer-motion";

const Home = (): JSX.Element => {
  const {colors} = useContext(ThemeContext);
  const title = "ESCOD";
  const description = "Nosotros somos ESCOD, una empresa de desarrollo de software, especializada en la creación de aplicaciones web y móviles.";

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
      color: colors.text100,
      minHeight: "100vh",
    }}>
      <ScrollIndicator/>
      <Hero
        title={title}
        description={description}
      />
    </div>
  );
};

export default Home;