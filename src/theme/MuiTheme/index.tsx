import { ThemeProvider } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import { theme } from './theme';

export const MuiTheme: React.FC<PropsWithChildren> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
