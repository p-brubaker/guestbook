import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

export default function Login() {
  const { setUser } = useUser();
  const [userInput, setUserInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [error, setError] = useState(null);
  const location = useLocation();
  const history = useHistory();
  const { from } = location.state || { from: { pathname: '/' } };

  function handleSubmit(e) {
    e.preventDefault();
    if (
      userInput === process.env.USER_NAME &&
      passwordInput === process.env.PASSWORD
    ) {
      setUser(userInput);
      history.replace(from);
    } else {
      setError('Incorrect Email / Password combination');
    }
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="user-input">User Name</label>
        <input
          name="user-input"
          id="user-input"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <label htmlFor="password-input">Password</label>
        <input
          name="password"
          id="password"
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      {error ? <p>{error}</p> : <></>}
    </div>
  );
}
