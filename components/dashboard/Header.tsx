"use client";

import React from "react";
import { Bell, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  return (
    <header className="sticky top-0 z-30 w-full  bg-[#F1F1F1] border-b border-slate-200">
      <div className="flex h-14 items-center justify-end px-6 gap-3">
        {/* Notification */}
        <Button
          size="icon"
          className="bg-slate-300 cursor-pointer hover:bg-slate-200 rounded-xl"
        >
          <Bell className="h-5 w-5 text-slate-600" />
        </Button>

        <div className="flex  items-center justify-end p-1 rounded-3xl gap-1 bg-white">
          {/* Profile */}
          <Avatar className="h-9 w-9 cursor-pointer">
            <AvatarImage src="/images/avatar.png" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>

          {/* Settings */}
          <Button size="icon" className=" cursor-pointer rounded-full bg-transparent hover:bg-transparent">
            <Settings className="h-5 w-5 bg-slate-100  hover:bg-slat  text-slate-600" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
