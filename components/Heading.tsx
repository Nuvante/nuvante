import React from "react";

type propType = {
  message: string;
  secondaryMessage: string;
};

export default function Heading({ message, secondaryMessage }: propType) {
  return (
    <>
      <div className="flex gap-4  flex-col mb-8 w-full">
        <div className="flex items-center gap-2">
          <div className="w-[27px] h-[45px] rounded-lg bg-[#DB4444]"></div>
          <div className="text-[#DB4444] font-semibold">{message}</div>
        </div>
        <div className="text-black font-semibold text-3xl">
          {secondaryMessage}
        </div>
      </div>
    </>
  );
}
