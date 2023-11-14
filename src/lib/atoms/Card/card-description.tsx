import {
  ComponentWithAs,
  HTMLChakraProps,
  chakra,
  forwardRef,
} from '@chakra-ui/react';
import { useCardStyles } from './card-context';

type CardDescriptionProps = HTMLChakraProps<'p'> & {
  children?: string;
};

export const CardDescription: ComponentWithAs<'p', CardDescriptionProps> =
  forwardRef(({ children, ...props }, ref) => {
    const styles = useCardStyles();

    return (
      <chakra.p ref={ref} __css={styles.description} {...props}>
        {children}
      </chakra.p>
    );
  });
