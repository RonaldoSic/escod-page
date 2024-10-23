import Hero from "../components/HeroSection/Hero.tsx";
import {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext.tsx";
import {motion, useScroll} from "framer-motion";
import Footer from "../components/Footer/Footer.tsx";
import {FaFacebook, FaSquareTwitter, FaInstagram} from "react-icons/fa6";

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
      <Footer title={'ESCOD'} description={'La mejor opción para el desarrollo de software en Guatemala.'}
              socials={[
                {icon: <FaFacebook/>, name: 'Facebook', link: 'https://www.facebook.com/escod.gt'},
                {icon: <FaSquareTwitter/>, name: 'Twitter', link: 'https://twitter.com/escod_gt'},
                {icon: <FaInstagram/>, name: 'Instagram', link: 'https://www.instagram.com/escod.gt'},
              ]}
      />
    </div>
  );
};

export default Home;