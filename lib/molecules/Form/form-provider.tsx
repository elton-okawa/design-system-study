import React from 'react';
import { useForm, FormProvider as HookFormProvider } from 'react-hook-form';

export type FormProviderProps = React.PropsWithChildren<
  Parameters<typeof useForm>
>;

export const FormProvider: React.FC<FormProviderProps> = ({
  children,
  ...props
}) => {
  const methods = useForm(props);

  return <HookFormProvider {...methods}>{children}</HookFormProvider>;
};
