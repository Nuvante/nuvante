"use client";
import React, { useState, useEffect } from "react";

const Button = ({ text, width }: { text: string; width: number }) => {
  const [calculatedWidth, setCalculatedWidth] = useState<string | number>(
    width
  );

  useEffect(() => {
    const handleResize = (dimension: any) => {
      if (window.innerWidth < 456) {
        setCalculatedWidth(180);
      } else {
        setCalculatedWidth(width);
      }
    };

    handleResize(width);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return (
    <button
      style={{
        width:
          typeof calculatedWidth === "number"
            ? `${calculatedWidth}px`
            : calculatedWidth,
      }}
      className="p-2 h-[50px] text-white bg-[#DB4444] rounded-md"
    >
      {text}
    </button>
  );
};

export default Button;
