import React from 'react';
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
    return (
        <div className="w-full max-w-4xl mx-auto relative flex">
            <div className="justify-end w-full flex">
            <input
                type="text"
                className="rounded-xl border-2 border-gray-300 p-2 bg-gray-50 pr-12"
                placeholder=" Search for books"
            />
            <p className="w-px h-full bg-gray-300 absolute right-12 top-1/2 transform -translate-y-1/2">&nbsp;</p>
            <button 
                type="button"
                aria-label="Search"
                className="text-gray-500 bg-gray-50 rounded-xl absolute right-2 top-1/2 transform -translate-y-1/2 p-2"
            >
                <FaSearch className="inline-block" />
            </button>
            </div>
        </div>
    );
}