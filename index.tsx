import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

//1
import App from './App';

//5

import React from 'react';
import ReactDOM from 'react-dom/client';

//1
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

//5

function Car(props) {
  return <h2>I am a {props.brand.model}!</h2>;
}

function Garage() {
  const carInfo = { name: 'Ford', model: 'Mustang' };
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand={carInfo} />
    </>
  );
}

const rootfive = ReactDOM.createRoot(document.getElementById('rootfive'));
rootfive.render(<Garage />);

//6
import React from 'react';
import ReactDOM from 'react-dom/client';

function Car(props) {
  return <li>I am a { props.brand }</li>;
}

function Garage() {
  const cars = ['Ford', 'BMW', 'Audi'];
  return (
    <>
	    <h1>Who lives in my garage?</h1>
	    <ul>
        {cars.map((car) => <Car brand={car} />)}
      </ul>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);

