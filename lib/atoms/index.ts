import { buttonTheme } from './Button';
import { tileTheme } from './Tile';
import { theme } from '@chakra-ui/theme';
export { Skeleton, Button, Stack } from '@chakra-ui/react';

const { Skeleton: skeletonTheme } = theme.components;

export const atoms = {
  Skeleton: skeletonTheme,
  Button: buttonTheme,
  Tile: tileTheme,
};

export type Atoms = typeof atoms;
