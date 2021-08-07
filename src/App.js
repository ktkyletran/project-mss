import React from 'react';
import './App.css';
import About from './components/About';

function App() {
  return (
    <div className="app">
      <About />
      <div className="brand">
        <a href="/" className="brand-about">about</a>
        <h1 className="brand-name">r.diate</h1>
        <h4 className="brand-subtitle">jewelry</h4>
        <a href="/" className="brand-products">products</a>
      </div>
    </div>
  );
}

export default App;