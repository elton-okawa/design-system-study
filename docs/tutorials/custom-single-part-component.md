# Styling a custom single part component

## Overview

In order to style a single part component, you need to perform the following step by step:

1. Define style
2. Add it on theme
3. Create a component to consume it - you can skip it if the component already exists

## Step by step

Create style:

```tsx
import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const baseStyle = defineStyle({});
const sizes = defineStyle({});
const variants = defineStyle({});

export const Tile = defineStyleConfig({
  baseStyle, // Styles for the base style
  sizes, // Styles for the size variations
  variants, // Styles for the visual style variations
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

    The next steps are applicable only if you are creating a new component, if you are styling an existing one, you can skip it.

Create a new component that consumes it:

- Use `chakra` factory to accept chakra properties
- `props` must inherit from:
  - the base container, e.g. `HTMLChakraProps<'div'>`
  - actual theme props defined, e.g. `ThemingProps<'Tile'>`
- `useStyleConfig` to consume styling
  - the first parameter `themeKey` must match key on `theme.components.<themeKey>`

```tsx
import {
  ComponentWithAs,
  HTMLChakraProps,
  ThemingProps,
  chakra,
  forwardRef,
  useStyleConfig,
} from '@chakra-ui/react';
import React from 'react';

interface TileProps extends HTMLChakraProps<'div'>, ThemingProps<'Tile'> {}

export const Tile: ComponentWithAs<'div', TileProps> = forwardRef(
  (props, ref) => {
    const { variant, size, children, ...rest } = props;
    const styles = useStyleConfig('Tile', { variant, size });

    return (
      <chakra.div ref={ref} {...rest} __css={styles}>
        {children}
      </chakra.div>
    );
  },
);
```
