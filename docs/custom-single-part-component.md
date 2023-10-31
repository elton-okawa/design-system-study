# Creating custom single part component

Create style:

```tsx
import { defineStyleConfig } from '@chakra-ui/react';

export const Tile = defineStyleConfig({
  baseStyle: {}, // Styles for the base style
  sizes: {}, // Styles for the size variations
  variants: {}, // Styles for the visual style variations
  defaultProps: {}, // The default `size` or `variant` values
});
```

Add it on theme:

```tsx
import { extendTheme } from '@chakra-ui/react';
import { Tile } from './Tile';

const theme = extendTheme({
  components: {
    Tile,
  },
});
```

Create a new component that consumes it:

- Use `chakra` factory to accept chakra properties
- `props` must inherit from:
  - the base container, e.g. `HTMLChakraProps<'div'>`
  - actual theme props defined, e.g. `ThemingProps<'Tile'>`
- `useStyleConfig` to consume styling
  - the first parameter `themeKey` must match key on `theme.components.<themeKey>`

```tsx
import {
  HTMLChakraProps,
  ThemingProps,
  chakra,
  useStyleConfig,
} from '@chakra-ui/react';
import React from 'react';

interface TileProps extends HTMLChakraProps<'div'>, ThemingProps<'Tile'> {}

export const Tile = React.forwardRef<'div', TileProps>((props, ref) => {
  const { variant, children, ...rest } = props;
  const styles = useStyleConfig('Tile', { variant });

  return (
    <chakra.div ref={ref} {...rest} __css={styles}>
      {children}
    </chakra.div>
  );
});
```
