import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

//5
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

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
function FavoriteColor() {
  const [color, setColor] = useState('red');

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button type="button" onClick={() => setColor('blue')}>
        Blue
      </button>
      <button type="button" onClick={() => setColor('red')}>
        Red
      </button>
      <button type="button" onClick={() => setColor('pink')}>
        Pink
      </button>
      <button type="button" onClick={() => setColor('green')}>
        Green
      </button>
    </>
  );
}

const rootfive = ReactDOM.createRoot(document.getElementById('rootfive'));
rootfive.render(<FavoriteColor />);
