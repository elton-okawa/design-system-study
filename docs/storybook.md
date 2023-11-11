# Storybook

## Gotchas

### Component's stories

You can organize your storybook components **implicitly** by folder structure or **explicitly** using `title` property:

```
Both will result in the same presentation:

src/
  Button/
    Button.stories.tsx

const meta = {
  title: 'atoms/Button',
}
```

Gotcha on `folder structure`, whenever a story and folder matches and there is no sibling story, it's **hoisted** in the hierarchy. E.g. it won't be shown at `atoms/Button/Button`.

References:

- [Storybook - naming components and hierarchy](https://storybook.js.org/docs/react/writing-stories/naming-components-and-hierarchy)
