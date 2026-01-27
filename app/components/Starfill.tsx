import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

const Starfill = ({ wholeStars, halfStars }: { wholeStars: number, halfStars: number }) => {
  // Clamp values to valid ranges
//   if (wholeStars < 0) wholeStars = 0;
//   if (halfStars < 0) halfStars = 0;
  if (wholeStars > 5) wholeStars = 5;
  if (halfStars > 1) halfStars = 1;
  if (wholeStars + halfStars > 5) {
    halfStars = 0;
    wholeStars = 5;
  }

  return (
    <div className="flex items-center gap-1 text-yellow-500">
      {wholeStars === 0 && halfStars === 0 ? null : (
        <>
        {wholeStars <= 0 ? null : (
          [...Array(wholeStars)].map((_, index) => (
            <BsStarFill key={index} />
          )))}
         {halfStars <= 0 ? null : (
          [...Array(halfStars)].map((_, index2) => (  
            <BsStarHalf key={index2} />
          )))}
        </>
      )}
    </div>
  );
};

export default Starfill;
