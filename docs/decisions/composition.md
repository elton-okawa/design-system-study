# Composition

There are three alternatives:

1. Configuration
2. Composition
3. Slots

References:

- https://portal.gitnation.org/contents/react-slots-a-new-way-of-composition

## Configuration

**Configuration** means exposing internal element's props to be passed down:

```tsx
const TextInput = ({ id, inputProps, labelProps }) => {
  return (
    <div>
      <label for={id} {...labelProps} >
      <input id={id} {...inputProps} >
    </div>
  );
}
```

:x: Flexibility - the bigger the component, the more exposed props you need
:heavy_check_mark: Consistency - rules are explicit

Example:

- [Mantine TextInput](https://mantine.dev/core/text-input/?t=props)

## Composition

**Composition** means exporting composable components:

```tsx
const Text = () => {...};
const TextLabel = (props) => {...};
const TextInput = (props) => {...};

Text.Label = TextLabel;
Text.Input = TextInput;
```

:heavy_check_mark: Flexibility - each props in its own component
:x: Consistency - child order matters and adding other components may break the layout

## Slots

**Slots** expose a component that will be placed correctly in the "template" location without worrying about order:

```tsx
const TextLabel = createSlot('label');
const TextInput = createSlot('input');

export const Text = (props) => {
  const id = useId();

  return createHost(props.children, (Slots) => {
    const labelProps = Slots.getProps(TextLabel);
    const inputProps = Slots.getProps(TextInput);
    const inputId = inputProps?.id || id;

    return (
      <div {...props}>
        {labelProps && <label {...labelProps} htmlFor={inputId} />}
        <input id={id} {...inputProps} />
      </div>
    );
  });
};

Text.Label = FieldLabel;
Text.Input = FieldInput;
```

:heavy_check_mark: Flexibility
:heavy_check_mark: Consistency
