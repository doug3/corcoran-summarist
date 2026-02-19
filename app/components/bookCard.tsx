import React from "react";
import { FaRegClock, FaRegStar } from "react-icons/fa6";

interface Book {
    imageLink: string;
    title: string;
    author: string;
    subTitle: string;
    averageRating: number;
    subscriptionRequired: boolean;
}

interface BookCardProps {
    book: Book;
}

const bookCard: React.FC<BookCardProps> = (props) => {
    const { book } = props;
    return (
        <div className="relative pt-4">
            {book.subscriptionRequired && (
                <div className="absolute top-0 right-2 bg-black text-white px-2 py-1 text-xs font-bold rounded-2xl border border-blue-500">
                    Premium
                </div>
            )}
            <img
                src={book.imageLink}
                alt={book.title}
                width={190}
                height="auto"
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

export default bookCard;
