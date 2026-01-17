import React from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import RecentActivity from "@/components/dashboard/RecentActivity";

export default function ActivityPage() {
  return (
    <div className="min-h-screen  lg:pl-64">
      <Sidebar />
      <div className="fixed h-[95%]  page_width m-5 bg-accent rounded-[15px] overflow-hidden">
        <div className="flex flex-col h-full overflow-y-scroll scrollbar-none">
          <Header />
          <main className="flex-1 p-6">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-slate-900 mb-2">
                Activity Logs
              </h1>
              <p className="text-slate-600">
                View all system activities and user actions
              </p>
            </div>
            <RecentActivity />
          </main>
        </div>
      </div>
    </div>
  );
}
