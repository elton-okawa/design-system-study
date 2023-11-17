# Best Practices

### Create components like chakra library does

Checklist:

1. Return root component using [chakra factory](https://chakra-ui.com/docs/styled-system/chakra-factory) to allow **chakra style props**
2. Make sure to use `forwardRef` from `chakra` and not from `react`
3. `props` must extends `HTMLChakraProps` and `ThemingProps` to inherit both **chakra styles** and **theming props**
4. Explicitly type component using `ComponentWithAs` to avoid building warnings

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

// (3)
export interface TileProps
  extends HTMLChakraProps<'div'>,
    ThemingProps<'Tile'> {}

// (2) and (4)
export const Tile: ComponentWithAs<'div', TileProps> = forwardRef(
  (props, ref) => {
    const { variant, size, children, ...rest } = props;
    const styles = useStyleConfig('Tile', { variant, size });

    return (
      // (1)
      <chakra.div ref={ref} {...rest} __css={styles}>
        {children}
      </chakra.div>
    );
  },
);
```

### Storybook default property docs

Storybook automagically reads Typescript code to auto generate docs.
In order to get default values correctly, we must destructure it on arguments instead of on code:

```tsx
type ComponentProps {
  value?: string;
}

const Component = ({ value = 'default' }: ComponentProps) => {};
```

References:

- [Storybook - autodocs](https://storybook.js.org/docs/react/writing-docs/autodocs)
