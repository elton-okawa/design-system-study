import {
  HTMLChakraProps,
  ThemingProps,
  chakra,
  forwardRef,
  useMultiStyleConfig,
  ComponentWithAs,
} from '@chakra-ui/react';
import { LoadingProvider } from 'lib/core/loading-provider';
import { CardStylesProvider } from './card-context';

export type CardProps = HTMLChakraProps<'div'> &
  ThemingProps<'Card'> & {
    loading?: boolean;
  };

export const Card: ComponentWithAs<'div', CardProps> = forwardRef(
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
