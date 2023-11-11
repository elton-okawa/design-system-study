import { useLoading } from 'core/loading-provider';
import { useCardStyles } from './card-context';
import { Button, HTMLChakraProps, Skeleton, chakra } from '@chakra-ui/react';
import React from 'react';

type CardButtonProps = HTMLChakraProps<'div'>;

export const CardButton = React.forwardRef<HTMLButtonElement, CardButtonProps>(
  ({ children, ...props }, ref) => {
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
  },
);
