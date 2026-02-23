"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaRegClock, FaRegStar } from "react-icons/fa6";
import { CiMicrophoneOn } from "react-icons/ci";
import { TbBulb } from "react-icons/tb";


interface Book {
  id: string;
  author: string;
  title: string;
  subTitle: string;
  imageLink: string;
  audioLink: string;
  totalRating: number;
  averageRating: number;
  keyIdeas: string;
  type: string;
  status: string;
  subscriptionRequired: boolean;
  summary: string;
  tags: string[];
  bookDescription: string;
  authorDescription: string;
}

const page = () => {
  const [currentBook, setCurrentBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const { id } = useParams();

  useEffect(() => {
    async function fetchBook() {
      try {
        const response = await axios.get(
          `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`,
        );
        setCurrentBook(response.data);
      } catch (error) {
        console.error("Error fetching book:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchBook();
  }, [id]);

  return (
    <div className="w-full mx-auto max-w-6xl flex p-6">
      {loading ? (
        <p>Loading...</p>
      ) : currentBook ? (
        <>
          <div className="p-8">
            <h1 className="text-4xl font-bold mb-4">{currentBook.title}</h1>
            <p className="text-xl font-bold text-gray-700 mb-4">
              {currentBook.author}
            </p>
            <p className="text-2xl text-gray-500 mb-10">
              {currentBook.subTitle}
            </p>

            <hr className="my-6 mb-10 text-gray-300" />

            <div className="grid grid-cols-2 grid-rows-2 gap-4 mb-10">
              <p className="text-md text-gray-500 flex">
                <FaRegStar className="mr-2" size={32} />{" "}
                {currentBook.averageRating}
              </p>
              <p className="text-md text-gray-500 flex">
                <FaRegClock className="mr-2" size={32} /> audio time
              </p>
              <p className="text-md text-gray-500 flex">
                <CiMicrophoneOn className="mr-2" size={32} /> {currentBook.type}
              </p>
              <p className="text-md text-gray-500 flex">
                <TbBulb className="mr-2" size={32} /> {currentBook.keyIdeas} Key Ideas
              </p>
            </div>
            <hr className="my-6 mb-10 text-gray-300" />
          </div>
          <div className="relative p-4">
            <img
              src={currentBook.imageLink}
              alt={currentBook.title}
              width={500}
              height="auto"
              className="mt-4"
            />
            {currentBook.subscriptionRequired && (
              <div className="absolute top-0 right-2 bg-black text-white px-2 py-1 text-xs font-bold rounded-2xl border border-blue-500">
                Premium
              </div>
            )}
          </div>
        </>
      ) : (
        <p>Book not found.</p>
      )}
    </div>
  );
};

export default page;
