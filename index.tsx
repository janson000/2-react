import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

//1
import App from './App';

//1
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

//5
