import { useLoading } from 'lib/core/loading-provider';
import { useCardStyles } from './card-context';
import {
  ComponentWithAs,
  HTMLChakraProps,
  Skeleton,
  chakra,
  forwardRef,
} from '@chakra-ui/react';
import React from 'react';

export type CardBadgeProps = React.PropsWithChildren<HTMLChakraProps<'div'>>;

export const CardBadge: ComponentWithAs<'div', CardBadgeProps> = forwardRef(
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
