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

  return guests ? (
    <div className="home">
      <GuestSign />
      <Entries guests={guests} />
    </div>
  ) : (
    <p>Loading...</p>
  );
}
