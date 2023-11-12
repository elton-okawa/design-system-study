import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ChakraTheme } from './lib';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraTheme>
      <App />
    </ChakraTheme>
  </React.StrictMode>,
);
