"use client";

import { FaDiscord } from 'react-icons/fa';

export function DiscordButton() {
  const handleClick = () => {
    alert("Add 'astroom' on Discord.");
  };

  return (
    <div
      className="z-10 text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
      onClick={handleClick}
    >
      <FaDiscord className="text-3xl" />
    </div>
  );
}