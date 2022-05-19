import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

import Name from './App';
import Age from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

const rootElementone = document.getElementById('rootfive');
const rootfive = createRoot(rootElementone);

rootfive.render(
  <StrictMode>
    <Name />
  </StrictMode>
);

const rootElementtwo = document.getElementById('rootsix');
const rootsix = createRoot(rootElementtwo);

rootsix.render(
  <StrictMode>
    <Age />
  </StrictMode>
);
