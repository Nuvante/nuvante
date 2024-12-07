import React from "react";

const Button = ({ text, width }: { text: string; width: number }) => {
  return (
    <button
      className={`w-[${width}px] p-2 h-[50px] text-white bg-[#DB4444] rounded-md mx-auto`}
    >
      {text}
    </button>
  );
};

export default Button;
