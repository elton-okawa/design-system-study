import { buttonTheme } from './Button';
import { tileTheme } from './Tile';
import { cardTheme } from './Card';
import { theme } from '@chakra-ui/theme';

const { Skeleton } = theme.components;

export const components = {
  Skeleton,
  Button: buttonTheme,
  Tile: tileTheme,
  Card: cardTheme,
};

export type Components = typeof components;
