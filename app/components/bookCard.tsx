
import React from "react";
import { FaRegClock, FaRegStar } from "react-icons/fa6";
import { useRouter } from "next/navigation";

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

interface BookCardProps {
    book: Book;
}

const BookCard: React.FC<BookCardProps> = (props) => {
    const { book } = props;
    const router = useRouter();
    return (
        <div className="relative pt-4" onClick={() => router.push(`/loggedIn/book/${book.id}`)}>
            {book.subscriptionRequired && (
                <div className="absolute top-0 right-2 bg-black text-white px-2 py-1 text-xs font-bold rounded-2xl border border-blue-500">
                    Premium
                </div>
            )}
            <img
                src={book.imageLink}
                alt={book.title}
                width={190}
                height={280}
                className="mb-2"
            />
            <h3 className="text-lg font-bold mb-2">{book.title}</h3>
            <p className="text-md text-gray-500 mb-2">{book.author}</p>
            <p className="text-md text-gray-700">{book.subTitle}</p>
            <div className="text-md text-gray-500 flex items-center">
                <span>
                    <FaRegClock />
                </span>
                <span>&nbsp;time&nbsp;&nbsp;</span>
                <span>
                    <FaRegStar />
                </span>
                <span>&nbsp;{book.averageRating}</span>
            </div>
        </div>
    );
};

export default BookCard;
