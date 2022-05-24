import * as React from 'react';
import './style.css';

//5

import { useState } from 'react';
import ReactDOM from 'react-dom/client';

//5

function MyFormone() {
  const [textarea, setTextarea] = useState(
    'The content of a textarea goes in the value attribute'
  );

  const handleChange = (event) => {
    setTextarea(event.target.value);
  };

  export function MyFormone() {
    return (
      <MyFormone>
        <textarea value={textarea} onChange={handleChange} />
      </MyFormone>
    );
  }
}

//1
export default function App() {
  return (
    <div>
      <h1 id="Root">Root</h1>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
