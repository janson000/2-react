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

//6
function Car() {
  const [brand, setBrand] = useState('Ford');
  const [model, setModel] = useState('Mustang');
  const [year, setYear] = useState('1964');
  const [colortwo, setColor] = useState('red');

  return (
    <>
      <h1>My {brand}</h1>
      <p>
        It is a {colortwo} {model} from {year}.
      </p>
    </>
  );
}

const rootsix = ReactDOM.createrootsix(document.getElementById('rootsix'));
rootsix.render(<Car />);
