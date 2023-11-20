import { useLoading } from 'lib/core/LoadingProvider';
import { useCardStyles } from './card-context';
import {
  Button,
  ComponentWithAs,
  HTMLChakraProps,
  Skeleton,
  chakra,
  forwardRef,
} from '@chakra-ui/react';

export type CardButtonProps = HTMLChakraProps<'div'>;

export const CardButton: ComponentWithAs<'button', CardButtonProps> =
  forwardRef(({ children, ...props }, ref) => {
    const styles = useCardStyles();
    const loading = useLoading();

    return (
      <chakra.div __css={styles.button} {...props}>
        <Skeleton isLoaded={!loading}>
          <Button ref={ref} variant="pill-secondary">
            {children}
          </Button>
        </Skeleton>
      </chakra.div>
    );
  });
