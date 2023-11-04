import type { StorybookConfig } from '@storybook/react-vite';

type ChakraAddon = {
  features: {
    emotionAlias: boolean;
  };
};

type Config = StorybookConfig & ChakraAddon;

const config: Config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@chakra-ui/storybook-addon',
  ],
  features: {
    emotionAlias: false,
  },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  typescript: {
    // View storybook-doc-gen.md
    reactDocgenTypescriptOptions: {
      propFilter: filterOutExternalProps,
      compilerOptions: {
        // Optional property handling - optional properties didn't come with correct control such as toggle for boolean
        // https://github.com/storybookjs/storybook/issues/11146
        shouldRemoveUndefinedFromOptional: true,
        allowSyntheticDefaultImports: true,
        esModuleInterop: true,
        // END Optional property handling
      },
    },
  },
};

function filterOutExternalProps(prop: any) {
  return (
    !prop.name.startsWith('_') &&
    prop.name !== 'as' &&
    !prop.parent?.fileName.includes('node_modules')
  );
}

export default config;
