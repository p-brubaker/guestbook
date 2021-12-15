import './Header.css';

export default function Header() {
  const name = 'Friend'; // replace with value from context

  return (
    <div className="header">
      <p>Sign in {name}!</p>
    </div>
  );
}
