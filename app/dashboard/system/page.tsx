import React from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import SystemHealth from "@/components/dashboard/SystemHealth";

export default function SystemPage() {
  return (
    <div className="min-h-screen  lg:pl-64">
      <Sidebar />
      <div className="fixed h-[95%]  page_width m-5 bg-accent rounded-[15px] overflow-hidden">
        <div className="flex flex-col h-full overflow-y-scroll scrollbar-none">
          <Header />
          <main className="flex-1 p-6">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-slate-900 mb-2">
                System Health
              </h1>
              <p className="text-slate-600">
                Monitor system performance and resources
              </p>
            </div>
            <SystemHealth />
          </main>
        </div>
      </div>
    </div>
  );
}
