import { HTMLChakraProps, chakra } from '@chakra-ui/react';
import React from 'react';
import { useCardStyles } from './card-context';

type CardTitleProps = HTMLChakraProps<'p'> & {
  children?: string;
};

export const CardTitle = React.forwardRef<HTMLParagraphElement, CardTitleProps>(
  ({ children, ...props }, ref) => {
    const styles = useCardStyles();

    return (
      <chakra.p ref={ref} __css={styles.title} {...props}>
        {children}
      </chakra.p>
    );
  },
);
