import React from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Shield, Lock, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function SecurityPage() {
  return (
    <div className="min-h-screen  lg:pl-64">
      <Sidebar />
      <div className="fixed h-[95%]  page_width m-5 bg-accent rounded-[15px] overflow-hidden">
        <div className="flex flex-col h-full overflow-y-scroll scrollbar-none">
          <Header />
          <main className="flex-1 p-6">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-slate-900 mb-2">
                Security Center
              </h1>
              <p className="text-slate-600">
                Monitor security threats and manage access controls
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-blue-600" />
                    Security Status
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span>Overall Score</span>
                      <Badge variant="success">95/100</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Threats Detected</span>
                      <span className="text-green-600 font-semibold">0</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lock className="h-5 w-5 text-purple-600" />
                    Access Control
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span>Active Sessions</span>
                      <span className="font-semibold">42</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Failed Logins</span>
                      <span className="text-red-600 font-semibold">3</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-yellow-600" />
                    Recent Alerts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="text-sm">No recent security alerts</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
