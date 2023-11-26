import {
  chakra,
  ComponentWithAs,
  forwardRef,
  HTMLChakraProps,
  ThemingProps,
  useMultiStyleConfig,
} from '@chakra-ui/react';
import { FormStylesProvider } from './form-style-context';

export type FormProps = HTMLChakraProps<'form'> & ThemingProps<'Form'>;

export const Form: ComponentWithAs<'form', FormProps> = forwardRef(
  ({ size, variant, children, ...rest }, ref) => {
    const styles = useMultiStyleConfig('Form', { size, variant });

    return (
      <chakra.form ref={ref} __css={styles.container} {...rest}>
        <FormStylesProvider value={styles}>{children}</FormStylesProvider>
      </chakra.form>
    );
  },
);
