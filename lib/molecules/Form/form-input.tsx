import { Input, InputProps as ChakraInputProps } from '@chakra-ui/react';
import React from 'react';
import { useController } from 'react-hook-form';

export type InputProps = ChakraInputProps & {
  name: string;
};

export const FormInput: React.FC<InputProps> = ({ name, ...props }) => {
  const {
    field: { ref, ...remaining },
  } = useController({ name });

  return <Input {...props} ref={ref} {...remaining} />;
};
