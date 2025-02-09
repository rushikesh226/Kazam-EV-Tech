import React from "react";
import Sidebar from "../Components/Home/Sidebar";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <div className="flex h-[98vh] gap-4">
      <div className="border rounded-xl w-1/6 p-4 flex flex-col justify-between">
        <Sidebar />
      </div>
      <div className="border rounded-xl w-5/6 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
