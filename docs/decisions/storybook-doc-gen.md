# Disabling Storybook documentation generation

On `.storybook.main.ts` you'll find:

```ts
export const Config = {
  ...
  typescript: {
    reactDocgenTypescriptOptions: {
      propFilter: filterOutExternalProps,
    },
  },
}

function filterOutExternalProps(prop: any) {
  return (
    !prop.name.startsWith('_') &&
    prop.name !== 'as' &&
    !prop.parent?.fileName.includes('node_modules')
  );
}
```

This config filter out anything that:

1. Starts with `_` - "private" properties
2. `as` - Chakra property
3. External property that comes from `node_modules`

I choose this approach because Chakra components have practically all css properties as props, **bloating the ones that we are most interested in.** Now we can cherry pick the ones that are the most interesting to play around.
