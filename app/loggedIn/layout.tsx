import React from 'react';
import SideBar from '../components/SideBar';
import SearchBar from '../components/SearchBar';

export default function LoggedInLayout({
  children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="logged-in-layout">
            <SideBar />
            <SearchBar />
            {children}
        </div>
    );
}