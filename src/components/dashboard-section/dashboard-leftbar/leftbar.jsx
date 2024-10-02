import React from "react";
import { useNavigate } from "react-router-dom";

export default function Leftbar() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-[700px] p-4 bg-white shadow-md w-64 rounded-lg">
    <ul className="space-y-4">
      <li>
        <button
          onClick={() => navigate("/dashboard/posts")}
          className="flex items-center space-x-3 p-3 rounded-lg bg-orange-400 text-white font-semibold w-full"
        >
          <span role="img" aria-label="Pubblicità">💡</span>
          <span>Post pubblicati</span>
        </button>
      </li>
    </ul>
  </div>
  )
}
