import React from 'react';
import './TopStripe.css';

export const TopStripe = () => {
  const items = [
    "Telefon: +48 725 116 511",
    "Email: u.jendral@gmail.com",
  ];

  // 8 slots, cycling through the 2 items
  const slots = Array.from({ length: 8 }, (_, i) => items[i % items.length]);

  return (
    <div className="topStripe">
      <div className="wrapper">
        {slots.map((text, i) => (
          <div className={`item item${i + 1}`} key={i}>
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};