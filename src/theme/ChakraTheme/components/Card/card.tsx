import {
  HTMLChakraProps,
  ThemingProps,
  chakra,
  useMultiStyleConfig,
} from '@chakra-ui/react';
import React from 'react';
import { LoadingProvider } from 'theme/ChakraTheme/core/LoadingProvider';
import { CardStylesProvider } from './card-context';

type CardProps = HTMLChakraProps<'div'> &
  ThemingProps<'Card'> & {
    loading?: boolean;
  };

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ size, variant, loading = false, children, ...rest }, ref) => {
    const styles = useMultiStyleConfig('Card', { size, variant });

    return (
      <chakra.div ref={ref} __css={styles.card} {...rest}>
        <CardStylesProvider value={styles}>
          <LoadingProvider loading={loading}>{children}</LoadingProvider>
        </CardStylesProvider>
      </chakra.div>
    );
  },
);
