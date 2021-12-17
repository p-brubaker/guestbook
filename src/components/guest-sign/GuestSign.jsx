import './GuestSign.css';
import { useState } from 'react';
import { useUser } from '../../context/UserContext';

export default function GuestSign({ addGuest }) {
  const { user, setUser } = useUser(null);
  const [entryInput, setEntryInput] = useState('');
  const [nameInput, setNameInput] = useState('');

  async function handleSign() {
    addGuest({ name: nameInput, entry: entryInput });
    setUser(nameInput);
  }

  async function handleChangeName() {
    setUser(null);
  }

  if (user) {
    return (
      <div className="guest-sign-container">
        <p>Thanks for Signing {user}!</p>
        <label htmlFor="guest-entry">Guest Entry</label>
        <input
          name="guest-entry"
          id="guest-entry"
          value={entryInput}
          onChange={(e) => setEntryInput(e.target.value)}
        />
        <button onClick={handleSign}>Sign</button>
        <button onClick={handleChangeName}>Not {user}?</button>
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
