import React from 'react';
import { LoadingContext } from './LoadingContext';

type LoadingProviderProps = {
  loading: boolean;
};

export const LoadingProvider: React.FC<
  React.PropsWithChildren<LoadingProviderProps>
> = ({ children, loading }) => {
  return (
    <LoadingContext.Provider value={loading}>
      {children}
    </LoadingContext.Provider>
  );
};
