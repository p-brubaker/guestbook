import './Home.css';
import GuestSign from '../../components/guest-sign/GuestSign';
import Entries from '../../components/entries/Entries';

export default function Home() {
  return (
    <div className="home">
      <GuestSign />
      <Entries />
    </div>
  );
}
