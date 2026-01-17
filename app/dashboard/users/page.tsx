import React from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import UsersTable from "@/components/dashboard/UsersTable";

export default function UsersPage() {
  return (
    <div className="h-screen flex  ">
      <Sidebar />
      <div className="flex-1 transition-all duration-300 p-5 overflow-hidden">
        <div className="h-full bg-accent rounded-[15px] overflow-hidden flex flex-col">
          <Header />
          <main className="flex-1 p-6">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-slate-900 mb-2">
                User Management
              </h1>
              <p className="text-slate-600">
                Manage all users, roles, and permissions
              </p>
            </div>
            <UsersTable />
          </main>
        </div>
      </div>
    </div>
  );
}
