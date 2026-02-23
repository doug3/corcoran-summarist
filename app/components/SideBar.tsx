import React from "react";
import Image from "next/image";
import { auth } from "../firebase/config";
import { useSignOut } from "react-firebase-hooks/auth";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import {
  IoHomeOutline,
  IoBookmarkOutline,
  IoSearchOutline,
  IoSettingsOutline,
  IoHelpCircleOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import { BsHighlighter } from "react-icons/bs";

export default function SideBar() {
  const [signOut, loading, error] = useSignOut(auth);
  const router = useRouter();
  const currentPage = usePathname().slice(10);

  const handleLogout = async () => {
    await signOut();
    router.push("/loggedout");
  };

  return (
    <aside className="bg-teal-50 h-full flex flex-col">
      <figure className="flex justify-center m-3">
        <Image
          className="nav__img"
          src="/logo.png"
          alt="logo"
          width={100}
          height={100}
          priority
        />
      </figure>
      <nav className="flex flex-col justify-between h-full text-lg mt-10">
        <div className="flex flex-col gap-10 p-4">
          <Link href="/loggedIn/for-you" className={currentPage === "for-you" ? "font-bold text-xl" : ""}>
            <span className="flex items-center gap-2">
              <IoHomeOutline size={32} />
              For You
            </span>
          </Link>
        
          <Link href="/loggedIn/myLibrary" className={currentPage === "myLibrary" ? "font-bold text-xl" : ""}>
            <span className="flex items-center gap-2">
              <IoBookmarkOutline size={32} />
              My Library
            </span>
          </Link>
          
          <Link href="" className="cursor-not-allowed">
            <span className="flex items-center gap-2">
              <BsHighlighter size={32} />
              Highlights
            </span>
          </Link>
          <Link href="" className="cursor-not-allowed">
            <span className="flex items-center gap-2">
              <IoSearchOutline size={32} />
              Search
            </span>
          </Link>
        </div>

        <div className="flex flex-col gap-10 p-4 mb-12 ">
          <Link href="/loggedIn/settings" className={currentPage === "settings" ? "font-bold text-xl" : ""}>
            <span className="flex items-center gap-2">
              <IoSettingsOutline size={32} />
              Settings
            </span>
          </Link>
          <Link href="" className="cursor-not-allowed">
            <span className="flex items-center gap-2">
              <IoHelpCircleOutline size={32} />
              Help &amp; Support
            </span>
          </Link>

          <Link href="/loggedout" onClick={handleLogout}>
            <span className="flex items-center gap-2">
              <IoLogOutOutline size={32} />
              Logout
            </span>
          </Link>
        </div>
      </nav>
    </aside>
  );
}
