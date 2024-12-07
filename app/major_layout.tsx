import React from "react";

export default function MajorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex w-[83%] flex-col mx-auto">{children}</div>
    </>
  );
}
