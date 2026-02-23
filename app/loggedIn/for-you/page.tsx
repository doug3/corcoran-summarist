"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import BookCard from "@/app/components/bookCard";

interface Book {
  id: string;
  author: string;
  title: string;
  subTitle: string;
  imageLink: string;
  audioLink: string;
  totalRating: number;
  averageRating: number;
  keyIdeas: string[];
  type: string;
  status: string;
  subscriptionRequired: boolean;
  summary: string;
  tags: string[];
  bookDescription: string;
  authorDescription: string;
}

export default function ForYou() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [recommendedBooks, setRecommendedBooks] = useState<Book[]>([]);
  const [suggestedBooks, setSuggestedBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchBooks() {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected",
      );
      setSelectedBook(response.data[0]);
    } catch (error) {
      console.error("Error fetching selected book:", error);
    } finally {
      setLoading(false);
    }
    try {
      setLoading(true);
      const response = await axios.get(
        "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended",
      );
      const books = response.data;
      if (books.length > 5) {
        setRecommendedBooks(books.slice(0, 5));
      } else {
        setRecommendedBooks(books);
      }
    } catch (error) {
      console.error("Error fetching recommended books:", error);
    } finally {
      setLoading(false);
    }

    try {
      setLoading(true);
      const response = await axios.get(
        "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested",
      );
      const books = response.data;
      if (books.length > 5) {
        setSuggestedBooks(books.slice(0, 5));
      } else {
        setSuggestedBooks(books);
      }
    } catch (error) {
      console.error("Error fetching suggested books:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <section className="w-full mx-auto max-w-6xl flex flex-col p-6 items-center">
      <div className="flex mb-6 flex-col w-full">
        <h2 className="text-2xl font-bold mb-6">Selected just for you</h2>

        <div className="w-full max-w-3xl bg-orange-100 rounded-lg p-6 shadow-md">
          {loading ? (
            <div className="flex items-left justify-center h-32">
              <p className="text-lg">Loading...</p>
            </div>
          ) : selectedBook ? (
            <div className="flex gap-6">
              {/* Book Description */}
              <div className="flex-1">
                <p className="text-lg text-gray-700 mb-2">
                  {selectedBook?.subTitle || "Book Description"}
                </p>
              </div>

              {/* Vertical Divider */}
              <div className="w-px h-auto bg-gray-400"></div>

              {/* Book Image */}
              <div className="shrink-0">
                {selectedBook?.imageLink && (
                  <img
                    src={selectedBook.imageLink}
                    alt="Book Cover"
                    className="rounded-md shadow-sm"
                    width="150"
                    height="auto"
                  />
                )}
              </div>

              {/* Book Details */}
              <div className="flex flex-col min-w-0 flex-1">
                <h3 className="text-lg font-bold mb-1 truncate">
                  {selectedBook?.title || "Book Title"}
                </h3>
                <p className="text-md text-gray-600 mb-2 truncate">
                  {selectedBook?.author || "Book Author"}
                </p>
                <div className="text-sm text-blue-600 cursor-pointer hover:text-blue-800">
                  🎵 Audio Player
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-32">
              <p className="text-lg text-gray-500">No book selected</p>
            </div>
          )}
        </div>
      </div>
      {/* Recommended Books Section */}
      <div className="flex mb-6 mt-6 flex-col w-full">
        <h2 className="text-2xl font-bold mb-6">Recommended for you</h2>
        <h3 className="text-lg text-gray-500 mb-12">We think you'll like these</h3>
        {/* Recommended Books List */}
        <div className="w-full max-w-6xl rounded-lg grid grid-cols-5 gap-4">
          {recommendedBooks.length === 0 ? (
            <p className="text-lg text-gray-700">
              No recommendations available
            </p>
          ) : (
            recommendedBooks.map((book, index) => (
              <div key={index} className="mb-4 mt-6 flex flex-col">
                <BookCard book={book} />
              </div>
            ))
          )}
        </div>
        <div className="flex mb-6 mt-6 flex-col w-full">
          <h2 className="text-2xl font-bold mb-6">Suggested Books</h2>
          <h3 className="text-lg text-gray-500 mb-12">Browse these books</h3>
          <div className="w-full max-w-6xl rounded-lg grid grid-cols-5 gap-4">
            {suggestedBooks.length === 0 ? (
              <p className="text-lg text-gray-700">No suggestions available</p>
            ) : (
              suggestedBooks.map((book, index) => (
                <div key={index} className="mb-4 mt-6 flex flex-col">
                  <BookCard book={book} />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
