import './Header.css';
import React from 'react';
import { useUser } from '../../context/UserContext';

export default function Header() {
  const { user } = useUser();

  return user ? (
    <div className="header">
      <p>Thanks for signing in {user}!</p>
    </div>
  ) : (
    <div className="header">
      <p>Sign in Friend!</p>
    </div>
  );
}
