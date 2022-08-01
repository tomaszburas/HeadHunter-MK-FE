import {ThemeProvider} from 'styled-components';
import {ReactNode} from 'react';

const theme = {
  colors: {
    black: '#1E1E1F',
    red: '#E02735',
    blue: '#0B8BD4',
    background: '#222324',
    darkGray: '#292A2B',
    gray: '#6b6a6a',
    lightGray: '#b0b0b0',
    white: '#FFFFFF',
    darkBlue: '#457b9d',
  },
  fontSize: {
    m: '0.8rem',
    sm: '1rem',
    base: '1.3rem',
    lg: '2rem',
    xl: '2.5rem',
    xl2: '3rem',
  },
  paddingSize: {
    sm: '0.5rem',
    base: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xl2: '4rem',
  },
  marginSize: {
    sm: '0.5rem',
    base: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xl2: '4rem',
  },
};

interface Props {
  children: ReactNode;
}

export const Theme = ({children}: Props) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
