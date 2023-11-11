import { HTMLChakraProps, chakra } from '@chakra-ui/react';
import React from 'react';
import { useCardStyles } from './card-context';

type CardDescriptionProps = HTMLChakraProps<'p'> & {
  children?: string;
};

export const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  CardDescriptionProps
>(({ children, ...props }, ref) => {
  const styles = useCardStyles();

  return (
    <chakra.p ref={ref} __css={styles.description} {...props}>
      {children}
    </chakra.p>
  );
});
