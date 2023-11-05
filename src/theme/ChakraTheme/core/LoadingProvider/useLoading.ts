import { useContext } from 'react';
import { LoadingContext } from './LoadingContext';

export const useLoading = () => {
  return useContext(LoadingContext);
};
