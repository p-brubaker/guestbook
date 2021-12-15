import './GuestSign.css';
import { useState } from 'react';

export default function GuestSign() {
  const name = 'Joe'; // replace with value from context
  const [entryInput, setEntryInput] = useState('');
  const [nameInput, setNameInput] = useState('');

  function handleSign() {
    // replace with call to set context
  }
  function handleChangeName() {
    // replace with call to set context
  }

  if (name) {
    return (
      <div className="guest-sign-container">
        <p>Thanks for Signing {name}!</p>
        <label htmlFor="guest-entry">Guest Entry</label>
        <input
          name="guest-entry"
          id="guest-entry"
          value={entryInput}
          onChange={(e) => setEntryInput(e.target.value)}
        />
        <button onClick={handleSign}>Sign</button>
        <button onClick={handleChangeName}>Not {name}?</button>
      </div>
    );
  } else {
    return (
      <div className="guest-sign-container">
        <p>Please Sign the Guestbook!</p>
        <label htmlFor="guest-name">Guest Name</label>
        <input
          name="guest-name"
          id="guest-name"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />
        <label htmlFor="guest-entry">Guest Entry</label>
        <input
          name="guest-entry"
          id="guest-entry"
          value={entryInput}
          onChange={(e) => setEntryInput(e.target.value)}
        />
        <button onClick={handleSign}>Sign</button>
      </div>
    );
  }
}
