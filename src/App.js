import React from 'react';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <span className="navbar-brand mb-0 h1">Million Real Estate</span>
        </div>
      </nav>
      <HomePage />
    </>
  );
}
