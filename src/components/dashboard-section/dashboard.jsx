import React from "react";
import Topbar from "./dashboard-topbar/topbar";
import Leftbar from "./dashboard-leftbar/leftbar";

export default function Dashboard() {
  return (
    <div className="w-full">
      <Topbar />
      <Leftbar />
    </div>
  )
}