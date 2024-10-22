import Home from "./pages/Home.tsx";
import {ThemeProvider} from "./context/ThemeContext.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";

// import escod_logo_dark from "../public/escod-dark.svg"
import escod_logo_light from "../public/escod-light.svg"


function App() {
  const logo = escod_logo_light;
  const links = [
    {title: "Inicio", url: "#"},
    {title: "Sobre ESCOD", url: "#"},
    {title: "Servicios", url: "#"},
    {title: "Portafolio", url: "#"},
    {title: "Contectanos", url: "#"}
  ];
  return (
    <ThemeProvider>
      <Navbar
        logo={logo}
        links={links}
      />
      <Home/>
    </ThemeProvider>
  )
}

export default App
