import React from "react";
import Image from "next/image";
import { auth } from "../firebase/config";
import { useSignOut } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SideBar() {
  const [signOut, loading, error] = useSignOut(auth);
  const router = useRouter();

  const handleLogout = () => {
    signOut();
    router.push("/loggedout");
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
      <nav className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-2 p-3">
          <Link href="/for-you" className="nav__link">
            For you
          </Link>
          <Link href="/myLibrary" className="nav__link">
            My Library
          </Link>
        </div>

        <div className="flex flex-col gap-2 p-3">
          <Link href="/settings" className="nav__link">
            Settings
          </Link>
          <Link href="/help" className="nav__link">
            Help &amp; Support
          </Link>
        
        <Link
          href="/logout"
          className=""
          onClick={handleLogout}
        >
          Logout
        </Link>
        </div>
      </nav>
    </aside>
  );
}
