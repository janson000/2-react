import * as React from 'react';
import './style.css';

//8

import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

export default function Apptwo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return <h1>I have rendered {count} times!</h1>;
}
