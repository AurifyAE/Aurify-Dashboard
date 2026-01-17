import React from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import StatsCards from "@/components/dashboard/StatsCards";
import Charts from "@/components/dashboard/Charts";
import RecentActivity from "@/components/dashboard/RecentActivity";
import QuickActions from "@/components/dashboard/QuickActions";

export default function DashboardPage() {
  return (
    <div className="h-screen flex  ">
      <Sidebar />
      <div className="flex-1 transition-all duration-300 p-5 overflow-hidden">
        <div className="h-full bg-accent rounded-[15px] overflow-hidden flex flex-col">
          <Header />
          <main className="fle  x-1 p-6 space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-slate-800 mb-2">
                Super Admin Dashboard
              </h1>
              <p className="text-slate-800">
                Monitor and manage your entire system from one place
              </p>
            </div>

            <StatsCards />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Charts />
              </div>
              <div>
                <QuickActions />
              </div>
            </div>

            <RecentActivity />
          </main>
        </div>
      </div>
    </div>
  );
}
