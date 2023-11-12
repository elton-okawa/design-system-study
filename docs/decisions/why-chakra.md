# Why Chakra?

TLDR:

- Easy to style
- Amazing documentation
- A clear and well defined vision for the future
- Typescript support, specially on custom theme variables

## Overview

We have the following requirements for a design system library:

1. Styling must be easy and flexible
2. We must be able to customize components for specific usage

Available approaches balance **flexibility** and **required effort** to create and maintain a library, starting from the most flexible and hardest to less flexible and easiest:

1. Everything from scratch
2. Headless Components + styling system
3. Using existing design system library

(1) we can eliminate right away because we have amazing libraries from (2) and (3) that are maintained by a giant community and have been validated in real world use cases by them.

## Headless Components + css/styling system

Headless Components libraries give well defined, accessible, battle tested, unstyled components and leave the styling part to us.

Headless Components:

- [Material UI - Base UI](https://mui.com/base-ui/)
- [Chakra UI - Ark](https://ark-ui.com/)
- [Radix UI - Primitives](https://www.radix-ui.com/primitives)
- [Adobe - React Aria](https://react-spectrum.adobe.com/react-aria/index.html)

CSS/Styling System

- [Styled Components](https://styled-components.com/)
- [Chakra UI - Panda CSS](https://panda-css.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Sass](https://sass-lang.com/)

## Design System Libraries

Design System Libraries provide an implementation of a Design System such as Material Design from Google or Ant Design.

Libraries:

- [Material UI - MUI](https://mui.com/)
- [Ant Design](https://ant.design/)
- [Chakra UI](https://chakra-ui.com/)
- [Mantine](https://mantine.dev/)

## Choosing one

I have working experience with `MUI` using it as is, without having to modify its style. It has a large amount of available components and the documentation is good.

When it comes to styling, we are **limited to the defined theme options** or modifying an existing component using `emotion/styled` for example.

Whenever our Design System does not meet the library visual look and feel, we are constantly fighting against the actual implementation, trying to fit a square in a circle.

So why did I choose `Chakra (Design System)` instead of a `Headless Components` approach?

- Chakra styling documentation is amazing, they provide the same API used to defined built in components
- Chakra code is really easy to follow, so we can use as reference whenever we need
- It works more or less the same idea of `Headless Components` + `theme system`

## Chakra future

Chakra's team know the library downsides and are working on it and also splitting up the library into manageable components:

- **Styled System** with zero runtime CSS-in-JS - `Panda CSS`
- **State Machine + Accessibility** to model component logic - `Zag`
- **Headless Components** framework wrappers over state-machine - `Ark`
- **Design Tokens** single place to manage it - `Ultra`

They are planning to have better support on Server Side Rendering, complex components like Data Picker and improve their styling API.

References:

- https://www.adebayosegun.com/blog/the-future-of-chakra-ui
- https://www.adebayosegun.com/blog/chakra-panda-ark-whats-the-plan
