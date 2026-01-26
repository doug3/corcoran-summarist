import React from "react";
import SideBar from "../components/SideBar";
import SearchBar from "../components/SearchBar";

export default function LoggedInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <div className="flex-col w-48 h-screen border-r border-gray-300">
        <SideBar />
      </div>
      <div className="flex-row">
        <div className="h-24 flex items-center justify-end px-4 border-b border-gray-300">
          <SearchBar />
        </div>
        {children}
      </div>
    </div>
  );
}
