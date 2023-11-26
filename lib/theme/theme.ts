import { extendBaseTheme } from '@chakra-ui/react';

import { Colors, foundations } from './foundations';
import { semanticTokens } from './semantic-tokens';
import { Atoms, atoms } from '../atoms';
import { Molecules, molecules } from '../molecules';

type ArgTypeTheme = {
  colors: Colors;
  components: Atoms & Molecules;
};

/**
 * See what we can override:
 * https://github.com/chakra-ui/chakra-ui/tree/b6befea762b44f923af42792473963215dc50ed1/packages/components/theme/src
 */
export const theme = extendBaseTheme({
  semanticTokens,
  components: { ...atoms, ...molecules },
  ...foundations,
}) as ArgTypeTheme;
