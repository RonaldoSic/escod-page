type NavbarLink = {
  title: string;
  url: string;
}

export type TypeNavbar = {
  logo: string;
  links: NavbarLink[];
  window?: () => Window;
  drawerWidth: 240;
}
