"use client";
import React, { useState, useEffect } from "react";

const Button = ({ text, width }: { text: string; width: number }) => {
  const [preciseWidth, setPreciseWidth] = useState<number>(width);

  useEffect(() => {
    setPreciseWidth(width);
  }, [width]);

  return (
    <button
      // Inline style for dynamic width
      style={{ width: `${preciseWidth}px` }}
      className="p-2 h-[50px] text-white bg-[#DB4444] rounded-md mx-auto"
    >
      {text}
    </button>
  );
};

export default Button;
