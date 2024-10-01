import React from "react";

export default function Leftbar() {
  return (
    <div className="flex flex-col h-[700px] p-4 bg-white shadow-lg w-64 rounded-lg">
    {/* Icone di navigazione */}
    <ul className="space-y-4">
      <li>
        <a
          href="#"
          className="flex items-center space-x-3 p-3 rounded-lg bg-orange-400 text-white font-semibold"
        >
          <span role="img" aria-label="Pubblicità">💡</span>
          <span>Post pubblicati</span>
        </a>
      </li>
    </ul>
  </div>
  )
}
