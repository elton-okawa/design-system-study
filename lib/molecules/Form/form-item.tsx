import { FormControl, FormLabel } from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';
import { useController } from 'react-hook-form';

export type FormItemProps = PropsWithChildren<{
  label: string;
  name: string;
}>;

export const FormItem: React.FC<FormItemProps> = ({
  name,
  label,
  children,
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name });

  return (
    <FormControl isDisabled={field.disabled} isInvalid={Boolean(error)}>
      <FormLabel>{label}</FormLabel>
      {children}
    </FormControl>
  );
};
