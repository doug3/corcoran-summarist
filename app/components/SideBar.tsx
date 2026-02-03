import React from 'react';
import Image from "next/image";

export default function SideBar() {
  const handleLogout = () => {
    // Add logout logic here
  };

  return (
    <aside className="sidebar">
      <h2>Side Bar</h2>
      <figure className="nav__img--mask">
        <Image 
          className="nav__img" 
          src="/logo.png" 
          alt="logo" 
          width={100} 
          height={100}
        />
      </figure>
      <button className='border bg-blue-300' onClick={handleLogout}>
        Log Out
      </button>
    </aside>
  );
}