import { useState, useEffect } from 'react';
import { getGuests, addGuest } from '../../services/guests';
import './Home.css';
import GuestSign from '../../components/guest-sign/GuestSign';
import Entries from '../../components/entries/Entries';

export default function Home() {
  const [guests, setGuests] = useState(null);

  useEffect(() => {
    getGuests().then((res) => setGuests(res));
  }, []);

  async function handleAddGuest({ name, entry }) {
    const newGuest = await addGuest({ name, entry });
    setGuests((prev) => [
      ...prev,
      { name: newGuest.name, entry: newGuest.entry },
    ]);
  }

  return guests ? (
    <div className="home">
      <GuestSign addGuest={handleAddGuest} />
      <Entries guests={guests} />
    </div>
  ) : (
    <p>Loading...</p>
  );
}
