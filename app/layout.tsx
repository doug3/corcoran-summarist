"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StoreProvider from "./store/StoreProvider";
import Login from "./components/Login";
import { useState } from "react";
import Home from "./page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    document.body.style.overflow = showModal ? "auto" : "hidden";
    window.scrollTo(0, 0);
    setShowModal(!showModal);
  };
  
  return (
    <StoreProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Home handleShowModal={handleShowModal} />
          {showModal && <Login handleShowModal={handleShowModal} />}
        </body>
      </html>
    </StoreProvider>
  );
}
