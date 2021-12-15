import { getGuests, addGuest, deleteGuestById } from './services/guests';
import Home from '../src/views/home/Home';
import { UserProvider } from './context/UserContext';

export default function App() {
  return (
    <UserProvider>
      <Home />
    </UserProvider>
  );
}
