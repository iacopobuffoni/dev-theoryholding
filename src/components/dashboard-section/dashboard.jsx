import React from "react";
import { Outlet } from "react-router-dom";
import Topbar from "./dashboard-topbar/topbar";
import Leftbar from "./dashboard-leftbar/leftbar";

export default function Dashboard() {
  
  return (
    <div className="w-full">
      <Topbar />
      <div className="flex">
        <Leftbar />
        <Outlet />
      </div>
    </div>
  )
}
