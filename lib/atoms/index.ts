import { buttonTheme } from './Button';
import { tileTheme } from './Tile';
import { cardTheme } from '../molecules/Card';
import { theme } from '@chakra-ui/theme';
export { Skeleton, Button, Stack } from '@chakra-ui/react';
export { Tile } from './Tile';

const { Skeleton: skeletonTheme } = theme.components;

export const components = {
  Skeleton: skeletonTheme,
  Button: buttonTheme,
  Tile: tileTheme,
  Card: cardTheme,
};

export type Components = typeof components;
