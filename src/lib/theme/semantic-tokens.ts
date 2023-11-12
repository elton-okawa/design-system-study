export const semanticTokens = {
  colors: {
    primary: {
      a: {
        default: 'black.default',
        transparent: 'black.transparent',
      },
      b: {
        default: 'white.default',
        transparent: 'white.transparent',
      },
    },
    accent: 'blue.600',
    negative: 'red.600',
    warning: 'yellow.300',
    positive: 'green.600',
    background: {
      primary: 'primary.b.default',
      secondary: 'gray.50',
      tertiary: 'gray.100',
      inverse: {
        primary: 'primary.a.default',
        secondary: 'gray.800',
      },
      state: {
        disabled: 'gray.50',
      },
      overlay: {
        art: 'black.0',
        dark: 'black.500',
        elevation: 'black.0',
      },
      accent: 'blue.600',
      negative: 'red.600',
      warning: 'yellow.300',
      positive: 'green.600',
      light: {
        accent: 'blue.50',
        negative: 'red.50',
        warning: 'yellow.50',
        positive: 'green.50',
      },
      always: {
        dark: 'black.default',
        light: 'white.default',
      },
    },
    content: {
      primary: 'black.default',
      secondary: 'gray.800',
      tertiary: 'gray.700',
      inverse: {
        primary: 'white.default',
        secondary: 'gray.200',
        tertiary: 'gray.400',
      },
      state: {
        disabled: 'gray.400',
      },
      on: {
        color: {
          default: 'white.default',
          inverse: 'black.default',
        },
      },
      accent: 'blue.600',
      negative: 'red.600',
      warning: 'yellow.600',
      positive: 'green.600',
    },
    border: {
      opaque: 'gray.100',
      transparent: 'primary.a.transparent',
      selected: 'primary.a.default',
      inverse: {
        opaque: 'gray.800',
        transparent: 'primary.b.transparent',
        selected: 'primary.b.default',
      },
      state: {
        disabled: 'gray.50',
      },
      accent: {
        default: 'blue.600',
        light: 'blue.200',
      },
      negative: 'red.600',
      warning: 'yellow.600',
      positive: 'green.600',
    },
  },
};
