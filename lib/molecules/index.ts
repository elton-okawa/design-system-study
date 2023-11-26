import { cardTheme } from './Card';
import { formTheme, formLabelTheme, inputTheme } from './Form';

export {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from './Form';

export const molecules = {
  Card: cardTheme,
  Form: formTheme,
  FormLabel: formLabelTheme,
  Input: inputTheme,
};

export type Molecules = typeof molecules;
