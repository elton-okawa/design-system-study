# Best Practices

### Naming and file structure

We follow [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) to organize our components:

- **Atoms** - basic building blocks, the HTML tags such as label, input
- **Molecules** - group of atoms, do one thing and do it well such as card
- **Organisms** - group of molecules, form a distinct section of an interface such as page header

Naming:

- Component folder **uppercase**, e.g. `Button.tsx`
- Component stories **uppercase**, e.g. `Button.stories.tsx`
- Component theme **lowercase**, e.g. `theme.ts`
- Component part **dash-case**, e.g. `card-button.tsx`

Example:

```
atoms
|- Button
  |- button.tsx
  |- Button.stories.tsx
  |- theme.ts
  |- index.ts
|- Typography
molecules
|- Card
```

### Composition over single component

Whenever possible prefer creating composable components instead of a single component with options.

View [Composition Docs](./decisions/composition.md) for more info

### Keep related components together

Multi part components only makes sense when used together, by grouping them we make it explicitly on `index.ts`:

```ts
import { Card as InternalCard } from './card';
import { CardBadge } from './card-badge';
import { CardContent } from './card-content';
import { CardButton } from './card-button';

type InternalCardType = typeof InternalCard;
export interface ICard extends InternalCardType {
  Content: typeof CardContent;
  Badge: typeof CardBadge;
  Button: typeof CardButton;
}

export const Card = InternalCard as ICard;
Card.Badge = CardBadge;
Card.Content = CardContent;
Card.Button = CardButton;
```

Usage becomes:

```tsx
<Card>
  <Card.Content />
  <Card.Button />
</Card>
```

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
