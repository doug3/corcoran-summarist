import React from 'react';
import Image from "next/image";
import { auth } from '../firebase/config';
import { useSignOut } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/navigation';

export default function SideBar() {
  const [signOut, loading, error] = useSignOut(auth);
  const router = useRouter();

  const handleLogout = () => {
    signOut();
    router.push('/loggedout');
  };

  return (
    <aside className="border-r border-gray-300 h-full flex flex-col">
      <figure className="flex justify-center m-3">
        <Image 
          className="nav__img" 
          src="/logo.png" 
          alt="logo" 
          width={100} 
          height={100}
        />
      </figure>
      <button className='border p-2 rounded bg-blue-300 text-black hover:bg-blue-400' onClick={handleLogout}>
        Log Out
      </button>
    </aside>
  );
}