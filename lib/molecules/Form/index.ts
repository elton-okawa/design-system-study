export * from './form-theme';
export * from './form-label-theme';
export * from './input-theme';

import { Form as InternalForm } from './form';
import { FormItem } from './form-item';
import { FormInput } from './form-input';
import { FormProvider } from './form-provider';

type InternalFormType = typeof InternalForm;
export type IForm = InternalFormType & {
  Item: typeof FormItem;
  Input: typeof FormInput;
  Provider: typeof FormProvider;
};

export const Form = InternalForm as IForm;
Form.Item = FormItem;
Form.Input = FormInput;
Form.Provider = FormProvider;
