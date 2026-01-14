import React from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import UsersTable from "@/components/dashboard/UsersTable";

export default function UsersPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      <div className="flex-1 flex flex-col lg:ml-64">
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
  );
}
