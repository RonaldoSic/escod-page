type colors = {
  primary: string;
  secondary: string;
  tertiary: string;
  background: string;
  text: string;
  textSecondary: string;
  textTertiary: string;
  accent: string;
  iconTheme: string;
};

type TypeTheme = {
  light: colors;
  dark: colors;
};

export const ThemeColors: TypeTheme = {
  light: {
    primary: '#ffffff',
    secondary: '#008000',
    tertiary: '#0000ff',
    background: '#f0f0f0',
    text: '#000000',
    textSecondary: "#987999",
    textTertiary: "#000000",
    accent: '#007acc',
    iconTheme: '#666666'
  },
  dark: {
    primary: '#000023',
    secondary: '#090832',
    tertiary: '#131041',
    background: '#090832',
    text: '#ffffff',
    textSecondary: "#fff",
    textTertiary: "#fff",
    accent: '#00ff00',
    iconTheme: '#dcdcdc'
  },
};