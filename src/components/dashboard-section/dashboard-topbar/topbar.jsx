import React from "react";
import chevronDown from "../../../images/chevron-down.svg";
import userPhoto from "../../../images/logo192.png";

export default function Topbar() {
  const username = localStorage.getItem("name");
  return (
    <div className="w-full h-[80px] bg-gray200 flex items-center justify-end px-4">
      <div className="h-full flex items-center gap-x-3">
        <button className="flex items-end">
          <span className="text-xl text-gray700">{username}</span>
          <img src={chevronDown} alt="" />
        </button>
        <img src={userPhoto} alt="user-photo" className="h-full" />
      </div>
    </div>
  )
}
