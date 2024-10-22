type colors = {
  iconTheme: string;
  primary100: string;
  primary200: string;
  primary300: string;
  accent100: string;
  accent200: string;
  text100: string;
  text200: string;
  bg100: string;
  bg200: string;
  bg300: string;
};

type TypeTheme = {
  light: colors;
  dark: colors;
};

export const ThemeColors: TypeTheme = {
  light: {
    primary100: '#1E2022',
    primary200: '#34373b',
    primary300: '#F0F5F9',
    accent100: '#788189',
    accent200: '#e1e4e6',
    text100: '#1E2022',
    text200: '#52616B',
    bg100: '#F0F5F9',
    bg200: '#C9D6DF',
    bg300: '#bfc7d1',
    iconTheme: '#dcdcdc'
  },
  dark: {
    primary100: '#2ECC71',
    primary200: '#00ae56',
    primary300: '#006a18',
    accent100: '#27AE60',
    accent200: '#004f09',
    text100: '#FFFFFF',
    text200: '#e0e0e0',
    bg100: '#1A1A1A',
    bg200: '#292929',
    bg300: '#404040',
    iconTheme: '#dcdcdc'
  },
};