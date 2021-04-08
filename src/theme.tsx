import react from 'react';

export interface Theme {
  primaryColor: string;
  primaryLightColor: string;
  primaryDarkColor: string;
  accentColor: string;
  textColor: string;
  primaryTextColor: string;
  secondaryTextColor: string;
  dividerColor: string;
}

export const defaultTheme: Theme = {
  primaryColor: '#607D8B',
  primaryLightColor: '#CFD8DC',
  primaryDarkColor: '#455A64',
  accentColor: '#4CAF50',
  textColor: '#FFFFFF',
  primaryTextColor: '#212121',
  secondaryTextColor: '#757575',
  dividerColor: '#BDBDBD',
}

export const ThemeContext = react.createContext(defaultTheme);
