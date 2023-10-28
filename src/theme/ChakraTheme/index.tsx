import { ChakraBaseProvider } from '@chakra-ui/react';
import React from 'react';
import { theme } from './theme';

export const ChakraTheme: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <ChakraBaseProvider theme={theme}>{children}</ChakraBaseProvider>;
};
