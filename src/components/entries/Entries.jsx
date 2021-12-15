import './Entries.css';

export default function Entries() {
  const guests = []; // replace with value from context

  return guests.map((guest) => {
    <div key={entry.id}>
      <p>{guest.name}</p>
      <p>{guest.entry}</p>
    </div>;
  });
}
