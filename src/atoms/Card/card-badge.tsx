import { useLoading } from 'core/loading-provider';
import { useCardStyles } from './card-context';
import { HTMLChakraProps, Skeleton, chakra } from '@chakra-ui/react';
import React from 'react';

type CardBadgeProps = React.PropsWithChildren<HTMLChakraProps<'div'>>;

export const CardBadge = React.forwardRef<HTMLDivElement, CardBadgeProps>(
  ({ children, ...props }, ref) => {
    const styles = useCardStyles();
    const loading = useLoading();

    return (
      <chakra.div ref={ref} __css={styles.badge} {...props}>
        <Skeleton isLoaded={!loading}>{children}</Skeleton>
      </chakra.div>
    );
  },
);
