# Styling a custom multi part component

## Overview

In order to style a custom multi part component, you need to perform the following step by step:

1. Define style for each component part
2. Add it on theme
3. Create each component part consuming the styling - you can skip this part if the component already exists in chakra package

## Defining component theme

Define the style for each component's parts, note that for each one of them, you can define `baseStyle`, `sizes`, `variants` and `defaultProps` just like you do with `simple components`.

The major difference is the nesting level of css styling, for **simple components** you define it **directly as child** but for **multi part components** you specify the **part as key and then the styling**. You can follow the template:

```ts
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(['card', 'title']);

const baseStyle = definePartsStyle({
  card: {},
  title: {},
});

const sizes = {
  big: definePartsStyle({
    card: {},
    title: {},
  }),
  medium: definePartsStyle({
    card: {},
    title: {},
  }),
};

const variants = {
  default: definePartsStyle({
    card: {},
    title: {},
  }),
  outlined: definePartsStyle({
    card: {},
    title: {},
  }),
};

const theme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {},
});
```

Add it on theme:

```ts
import { extendTheme } from '@chakra-ui/react';
import { MyCardTheme } from './MyCardTheme';

const theme = extendTheme({
  components: {
    MyCardTheme,
  },
});
```

## Consuming component theme

    Current step is only applicable only if you are creating a new component, if you are styling an existing one, you can skip it.

Create a **style context** to provide styling for children components using `createStylesContext`.

Consume it on the **container component**:

- consumes theme via `useMultiStyleConfig` hook
- set styling `value` for `StylesProvider`
- remaining parts is the same as `single component`, using `chakra factory` and `props` as union for correct interfaces.

On the **part component**:

- use the returned hook from `createStylesContext` such as `useCardStyles` to retrieve styling.
- remaining parts is the same as `single component`, using `chakra factory` and `props` as union for correct interfaces.

```tsx
import {
  HTMLChakraProps,
  ThemingProps,
  chakra,
  useMultiStyleConfig,
  createStylesContext,
} from '@chakra-ui/react';
import React from 'react';

// Style context
export const [CardStylesProvider, useCardStyles] =
  createStylesContext('MyCardTheme');

// Container
type CardProps = HTMLChakraProps<'div'> &
  ThemingProps<'Card'> & {
    loading?: boolean;
  };

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ size, variant, loading = false, children, ...rest }, ref) => {
    const styles = useMultiStyleConfig('MyCardTheme', { size, variant });

    return (
      <chakra.div ref={ref} __css={styles.card} {...rest}>
        <CardStylesProvider value={styles}>{children}</CardStylesProvider>
      </chakra.div>
    );
  },
);

// Part
type CardTitleProps = HTMLChakraProps<'p'> & {
  children?: string;
};

export const CardTitle = React.forwardRef<HTMLParagraphElement, CardTitleProps>(
  ({ children, ...props }, ref) => {
    const styles = useCardStyles();

    return (
      <chakra.p ref={ref} __css={styles.title} {...props}>
        {children}
      </chakra.p>
    );
  },
);
```
