import React from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import SettingsPanel from "@/components/dashboard/SettingsPanel";

export default function SettingsPage() {
  return (
    <div className="min-h-screen  lg:pl-64">
      <Sidebar />
      <div className="fixed h-[95%]  page_width m-5 bg-accent rounded-[15px] overflow-hidden">
        <div className="flex flex-col h-full overflow-y-scroll scrollbar-none">
          <Header />
          <main className="flex-1 p-6">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-slate-900 mb-2">
                Settings
              </h1>
              <p className="text-slate-600">
                Configure system settings and preferences
              </p>
            </div>
            <SettingsPanel />
          </main>
        </div>
      </div>
    </div>
  );
}
