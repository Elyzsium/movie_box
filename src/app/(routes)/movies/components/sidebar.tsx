"use client";

import Logo from "@/components/Navbar/logo";
import { Button } from "@/components/ui/button";
import { Calendar, Clapperboard, Home, LogOut, Tv } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

const sideLinks = [
  {
    name: "Home",
    icon: <Home />,
  },
  {
    name: "Movies",
    icon: <Clapperboard />,
  },
  {
    name: "TV Series",
    icon: <Tv />,
  },
  {
    name: "Upcoming",
    icon: <Calendar />,
  },
 
  
];
const logOut = [
  {
    name: "Logout",
    icon: <LogOut />,
  },
]

const Sidebar = () => {
  return (
    <aside className="fixed max-[1250px]:hidden overflow-auto h-full hide-scrollbar rounded-tr-[45px] rounder-br-[45px] w-[226px] border">
      <div className="flex flex-col pt-10">
        <div className="ml-2">
          <Logo textColor="text-black" />
        </div>
        <ul className="flex flex-col items-start gap-6 my-16">
          {sideLinks.map((link, index) => (
            <li key={index}>
              <span
                className={cn(
                  "flex py-4 hover:border-r-rose-700 cursor-pointer text-[#333333] hover:border-r-[6px] w-[226px] items-start gap-4 px-4 hover:bg-rose-100",
                  link.name === "Movies"
                    ? "border-r-rose-700 bg-rose-100 border-r-[6px]"
                    : ""
                )}
              >
                <span className="w-4 h-4">{link.icon}</span>
                <span className="font-bold text-black ">{link.name}</span>
              </span>
            </li>
          ))}
        </ul>
        <div className="px-3 py-6 mx-5 border bg-rose-100 border-rose-700 rounded-2xl">
          <h4 className="text-[#333333] font-semibold">
            Play movie quizes and earn free tickets
          </h4>
          <p className="text-[#666666]">50k people are playing now</p>
          <Button className="mt-3 border border-transparent rounded-full bg-rose-200 hover:bg-transparent hover:border-rose-500 text-rose-500">
            Start playing
          </Button>
        </div>
        <div className="">
        <ul className="flex flex-col items-start gap-6 my-16">
          {logOut.map((link, index) => (
            <li key={index}>
              <span
                className={cn(
                  "flex py-4 hover:border-r-rose-700 cursor-pointer text-[#333333] hover:border-r-[6px] w-[226px] items-start gap-4 px-4 hover:bg-rose-100",
                  link.name === "Movies"
                    ? "border-r-rose-700 bg-rose-100 border-r-[6px]"
                    : ""
                )}
              >
                <span className="w-4 h-4">{link.icon}</span>
                <span className="font-bold text-black ">{link.name}</span>
              </span>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
