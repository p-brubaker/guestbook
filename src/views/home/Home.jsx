import { useState, useEffect } from 'react';
import { getGuests, addGuest } from '../../services/guests';
import { useUser } from '../../context/UserContext';
import './Home.css';
import GuestSign from '../../components/guest-sign/GuestSign';
import Entries from '../../components/entries/Entries';

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
      { name: newGuest[0].name, entry: newGuest[0].entry },
    ]);
  }

  return guests ? (
    <div className="home">
      <GuestSign addGuest={handleAddGuest} />
      {user ? <Entries guests={guests} /> : <></>}
    </div>
  ) : (
    <p>Loading...</p>
  );
}
