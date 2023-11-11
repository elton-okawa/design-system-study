import { useContext } from 'react';
import { LoadingContext } from './loading-context';

export const useLoading = () => {
  return useContext(LoadingContext);
};
