import React from "react";
import { Outlet } from "react-router-dom";
import Topbar from "./dashboard-topbar/topbar";
import Leftbar from "./dashboard-leftbar/leftbar";

export default function Dashboard() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (!isLoggedIn) return <>Devi effettuare il <a href="/" className="underline cursor-pointer hover:text-primary500">login</a> per accedere alla dashboard</>;

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
