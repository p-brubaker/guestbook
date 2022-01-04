import styles from './Entries.module.css';
import React from 'react';

export default function Entries({ guests }) {
  return (
    <div className="entries-container">
      {guests.map((guest) => (
        <div className={styles.entry} key={guest.id}>
          <p>{guest.name}</p>
          <p>{guest.entry}</p>
        </div>
      ))}
    </div>
  );
}
