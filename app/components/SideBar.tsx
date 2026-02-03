import React from 'react';

export default function SideBar() {
  const handleLogout = () => {
    
   
  };

  return (
    <aside className="sidebar">
      <h2>Side Bar</h2>
      <button onClick={handleLogout}>Log Out</button>
    </aside>
  );
}