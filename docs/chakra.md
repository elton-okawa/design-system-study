# Usage

## TODO Write about

### `ChakraBaseProvider` and `extendBaseTheme`

select which components to include

https://chakra-ui.com/getting-started#chakrabaseprovider

## Styling a component

TODO gotcha

- storybook docs, default property must come from destructuring props on argument instead of on code `const Component = ({ value = 'default' }) => {}` to be documented correctly

You have three options:

- [Style an existing one](./tutorials/custom-existing-component.md)
- [Create a new single part component](./tutorials/custom-single-part-component.md)
- [Create a new multi part component](./tutorials/custom-multi-part-component.md)

References

- [Chakra Component Style](https://chakra-ui.com/docs/styled-system/component-style)
- [Chakra Factory](https://chakra-ui.com/docs/styled-system/chakra-factory)
- [Chakra Button Code](https://github.com/chakra-ui/chakra-ui/blob/b6befea762b44f923af42792473963215dc50ed1/packages/components/button/src/button.tsx)

Setup guides:

- [Chakra + Storybook](https://chakra-ui.com/getting-started/with-storybook)
- [Chakra CLI - Generate theme typing](https://chakra-ui.com/docs/styled-system/cli)
