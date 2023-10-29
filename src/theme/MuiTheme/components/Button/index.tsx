import { styled } from '@mui/material';
import MuiButton from '@mui/material/Button';

export const Button = styled(MuiButton)({
  padding: '0.875rem 1rem',
  borderRadius: '0.5rem',
  width: '16rem',
  textTransform: 'none',
  '&:hover': {
    boxShadow: '999px 999px 0px 0px rgba(255, 255, 255, 0.20) inset',
  },
});
