'use client'

import React from "react";
import SideBar from "../components/SideBar";
import SearchBar from "../components/SearchBar";

export default function LoggedInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="flex">
        <div className="flex flex-col w-52 h-screen border-r border-gray-300">
          <SideBar />
        </div>
        <div className="flex flex-col flex-1">
          <div className="h-24 flex items-center justify-end px-4 border-b border-gray-300">
            <SearchBar />
          </div>
          <div className="flex-1 p-4">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
