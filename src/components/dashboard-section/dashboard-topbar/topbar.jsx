import React, { useState } from "react";
import chevronDown from "../../../images/chevron-down.svg";
import userPhoto from "../../../images/logo192.png";
import { useNavigate } from "react-router-dom";

export default function Topbar() {
  const username = localStorage.getItem("name");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="w-full h-[80px] bg-gray200 flex justify-end px-4">
      <div className="h-full flex items-center gap-x-3">
        <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 font-medium relative" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="text-gray700 text-xl">{username}</span>
          <img src={chevronDown} alt="" className="mt-1"/>
          {isMenuOpen && 
            <div className="absolute w-[200px] bg-gray100 right-0 top-10 rounded-md" onClick={() => navigate("/dashboard/settings")}>
              <div className="p-4">
                Impostazioni profilo
              </div>
            </div>
          }
        </button>
        <img src={userPhoto} alt="user-photo" className="h-full" />
      </div>
    </div>
  )
}
