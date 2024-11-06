import React from 'react';
import { useNavigate } from 'react-router-dom';

export function GoogleDrive() {

    const navigate = useNavigate();

    const handleExit = (event) => {
    event.preventDefault();
    navigate('/logpage');
  };

  return (
    <main className="main-container">
      <h2 style={{ alignItems: 'center', position: 'relative', left: '8%' }}>
        Google Drive Placeholder
      </h2>

      <form onSubmit={handleExit}>
        <button 
          type="submit" 
          className="btn btn-primary" 
          style={{ 
            justifyContent: 'center', 
            alignItems: 'center', 
            backgroundColor: 'lightblue', 
            borderColor: 'lightblue', 
            position: 'relative', 
            left: '-100%' 
          }}
        >
          Exit
        </button>
      </form>
    </main>
  );
}
