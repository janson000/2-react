import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

//7

import { useState } from 'react';
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
/*
//5


//5
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function FavoriteColor() {
  const [color, setColor] = useState('violet');

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
  const [colortwo, setColortwo] = useState('indigo');

  return (
    <>
      <h1>My {brand}</h1>
      <p>
        It is a {colortwo}, {model} from {year}.
      </p>
    </>
  );
}

const rootsix = ReactDOM.createroot(document.getElementById('rootsix'));
rootsix.render(<Car />);
*/
//7

function Car() {
  const [car, setCar] = useState({
    brand: 'Ford',
    model: 'Mustang',
    year: '1964',
    color: 'red',
  });

  const updateColor = () => {
    setCar((previousState) => {
      return { ...previousState, color: 'blue' };
    });
  };

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button type="button" onClick={updateColor}>
        Blue
      </button>
    </>
  );
}

const rootseven = ReactDOM.createroot(document.getElementById('rootseven'));
rootseven.render(<Car />);
