import { Button } from '@carbon/react';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Button>Hello world</Button>} />
        <Route path="/about" element={<div>About Page</div>} />
      </Routes>
    </div>
  );
}
