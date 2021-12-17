import './Entries.css';

export default function Entries({ guests }) {
  return (
    <div className="entries-container">
      {guests.map((guest) => (
        <div key={guest.id}>
          <p>{guest.name}</p>
          <p>{guest.entry}</p>
        </div>
      ))}
    </div>
  );
}
