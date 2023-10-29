import { createTheme } from '@mui/material/styles';
import { common } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: common.black,
      light: common.black,
      dark: common.white,
      contrastText: common.white,
    },
  },
});
