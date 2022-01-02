import './Header.css';
import React from 'react';

export default function Header() {
  const name = 'Friend'; // replace with value from context

  return (
    <div className="header">
      <p>Sign in {name}!</p>
    </div>
  );
}
