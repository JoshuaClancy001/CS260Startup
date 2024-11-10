import React from 'react';
import './message.css';

export function Messagepage() {
  return (
    <main className="main-container">
    <span>Message</span>
    <input type="text" placeholder="type a message" />
    <button type="submit">Send</button>
    <form method="get" action="friendslistpage.html">
        <button type="submit">Exit</button>
    </form>
</main>

  );
}