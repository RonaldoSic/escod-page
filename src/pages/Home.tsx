import Navbar from "../components/Navbar/Navbar.tsx";

const Home = (): JSX.Element => {
  const logo = "https://via.placeholder.com/150";
  const links = [
    {title: "Home", url: "/"},
    {title: "About", url: "/about"},
    {title: "Contact", url: "/contact"}
  ];
  return (
    <div>
      <Navbar
        logo={logo}
        links={links}
      />
      <h1>Home</h1>
    </div>
  );
};

export default Home;