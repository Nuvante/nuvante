import React from "react";

const filled_star = "http://localhost:3000/filled_star.svg";
const unfilled_star = "http://localhost:3000/unfilled_star.svg";

export default function Stars({ count }: { count: number }) {
  let dummy = new Array(5);
  for (let i = 0; i < 5; ++i) {
    dummy[i] = count - i - 1 >= 0 ? true : false;
  }
  return (
    <div className="flex">
      {dummy.map((element, index) => (
        <img
          key={index}
          src={element ? filled_star : unfilled_star}
          alt={element ? "Filled star" : "Unfilled star"}
        />
      ))}
    </div>
  );
}
