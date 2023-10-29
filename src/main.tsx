import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ChakraTheme } from 'theme/ChakraTheme/index.tsx';
import { MuiTheme } from 'theme/MuiTheme/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraTheme>
      <MuiTheme>
        <App />
      </MuiTheme>
    </ChakraTheme>
  </React.StrictMode>,
);
