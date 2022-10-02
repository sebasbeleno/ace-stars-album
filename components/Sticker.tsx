import React from "react";

import albumImage from "../public/album.jpeg";

export default function Sticker() {
  return (
    <div
      style={{
        backgroundImage: `url(${albumImage.src})`,
      }}
      className="bg-cover bg-center w-56 h-72 rounded-lg drop-shadow-xl hover:drop-shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out hover:cursor-pointer hover:blur-none blur-sm"
    >
    </div>
  );
}
