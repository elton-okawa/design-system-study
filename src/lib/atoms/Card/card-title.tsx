import {
  ComponentWithAs,
  HTMLChakraProps,
  chakra,
  forwardRef,
} from '@chakra-ui/react';
import { useCardStyles } from './card-context';

type CardTitleProps = HTMLChakraProps<'p'> & {
  children?: string;
};

export const CardTitle: ComponentWithAs<'p', CardTitleProps> = forwardRef(
  ({ children, ...props }, ref) => {
    const styles = useCardStyles();

    return (
      <chakra.p ref={ref} __css={styles.title} {...props}>
        {children}
      </chakra.p>
    );
  },
);
