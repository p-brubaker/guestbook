import React, { useState, useEffect } from 'react';
import { getGuests, addGuest } from '../../services/guests';
import { useUser } from '../../context/UserContext';
import './Home.css';
import GuestSign from '../../components/guest-sign/GuestSign';
import Entries from '../../components/entries/Entries';
import Header from '../../components/header/Header';

export default function Home() {
  const [guests, setGuests] = useState(null);
  const { user } = useUser();

  useEffect(() => {
    getGuests().then((res) => setGuests(res));
  }, []);

  async function handleAddGuest({ name, entry }) {
    const newGuest = await addGuest({ name, entry });
    setGuests((prev) => [
      ...prev,
      { name: newGuest[0].name, entry: newGuest[0].entry, id: newGuest[0].id },
    ]);
  }

  return guests ? (
    <div className="home">
      <Header />
      <GuestSign addGuest={handleAddGuest} />
      {user ? <Entries guests={guests} /> : <></>}
    </div>
  ) : (
    <p>Loading...</p>
  );
}
