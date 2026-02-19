import React from "react";
import Image from "next/image";
import { auth } from "../firebase/config";
import { useSignOut } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
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
          <Link href="/loggedIn/for-you" className="nav__link">
            <span className="flex items-center gap-2">
              <IoHomeOutline size={28} />
              For You
            </span>
          </Link>
          <Link href="/loggedIn/myLibrary" className="nav__link">
            <span className="flex items-center gap-2">
              <IoBookmarkOutline size={28} />
              My Library
            </span>
          </Link>
          <Link href="" className="cursor-not-allowed">
            <span className="flex items-center gap-2">
              <BsHighlighter size={28} />
              Highlights
            </span>
          </Link>
          <Link href="" className="cursor-not-allowed">
            <span className="flex items-center gap-2">
              <IoSearchOutline size={28} />
              Search
            </span>
          </Link>
        </div>

        <div className="flex flex-col gap-10 p-4 mb-8">
          <Link href="/loggedIn/settings" className="nav__link">
            <span className="flex items-center gap-2">
              <IoSettingsOutline size={28} />
              Settings
            </span>
          </Link>
          <Link href="" className="cursor-not-allowed">
            <span className="flex items-center gap-2">
              <IoHelpCircleOutline size={28} />
              Help &amp; Support
            </span>
          </Link>

          <Link href="/loggedout" className="" onClick={handleLogout}>
            <span className="flex items-center gap-2">
              <IoLogOutOutline size={28} />
              Logout
            </span>
          </Link>
        </div>
      </nav>
    </aside>
  );
}
