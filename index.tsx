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

import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
  const [textarea, setTextarea] = useState(
    'The content of a textarea goes in the value attribute'
  );

  const handleChange = (event) => {
    setTextarea(event.target.value);
  };

  return (
    <form>
      <textarea value={textarea} onChange={handleChange} />
    </form>
  );
}

const rootfive = ReactDOM.createrootfive(document.getElementById('rootfive'));
rootfive.render(<MyForm />);

//6

import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  );
}

const rootsix = ReactDOM.createRoot(document.getElementById('rootsix'));
rootsix.render(<MyForm />);

//7

import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
  const [myCar, setMyCar] = useState('Volvo');

  const handleChange = (event) => {
    setMyCar(event.target.value);
  };

  return (
    <form>
      <select value={myCar} onChange={handleChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
    </form>
  );
}

const rootseven = ReactDOM.createrootseven(
  document.getElementById('rootseven')
);
rootseven.render(<MyForm />);

//8
