import React from "react";

export default function Banner({ title }) {
  return (
    <div className="p-10 w-full h-32 flex items-center border-b">
      <h1 className="text-3xl">{title}</h1>
    </div>
  );
}
