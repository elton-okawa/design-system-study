import { extendBaseTheme, theme as defaultTheme } from '@chakra-ui/react';

import { Colors, foundations } from './foundations';
import { semanticTokens } from './semantic-tokens';
import { Components, components } from './components';

type ArgTypeTheme = {
  colors: Colors;
  components: Components;
};

/**
 * See what we can override:
 * https://github.com/chakra-ui/chakra-ui/tree/b6befea762b44f923af42792473963215dc50ed1/packages/components/theme/src
 */
export const theme = extendBaseTheme(
  { semanticTokens, components, ...foundations },
  {
    config: defaultTheme.config,
    direction: defaultTheme.direction,
    transition: defaultTheme.transition,
    breakpoints: defaultTheme.breakpoints,
    zIndices: defaultTheme.zIndices,
    components: {},
    styles: {},
    borders: {},
    colors: {},
    radii: {},
    shadows: {},
    sizes: {},
    space: {},
    fonts: {},
    fontSizes: {},
    fontWeights: {},
    letterSpacings: {},
    lineHeights: {},
  },
) as ArgTypeTheme;
