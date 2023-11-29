import {
  chakra,
  ComponentWithAs,
  forwardRef,
  HTMLChakraProps,
} from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';

export type FormProps = HTMLChakraProps<'form'> & {
  onSubmit: (values: unknown) => void;
};

export const Form: ComponentWithAs<'form', FormProps> = forwardRef(
  ({ children, onSubmit, ...rest }, ref) => {
    const { handleSubmit } = useFormContext();

    return (
      <chakra.form ref={ref} {...rest} onSubmit={handleSubmit(onSubmit)}>
        {children}
      </chakra.form>
    );
  },
);
