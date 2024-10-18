import Home from "./pages/Home.tsx";
import {ThemeProvider} from "./context/ThemeContext.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";


function App() {
  const logo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmfJFx5ng75eM4CHmTDlRP0cEm9I4P_XhIAw&s";
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
