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
import {
  Server,
  Globe,
  Rocket,
  Activity,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function HostingCenterPage() {
  return (
    <div className="h-screen flex  ">
      <Sidebar />
      <div className="flex-1 transition-all duration-300 p-5 overflow-hidden">
        <div className="h-full bg-accent rounded-[15px] overflow-hidden flex flex-col">
          <Header />

          <main className="flex-1 p-6">
            {/* Page Header */}
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-slate-900 mb-2">
                Hosting & Deployment Center
              </h1>
              <p className="text-slate-600">
                Manage deployments, domains, and hosting performance
              </p>
            </div>

            {/* Dashboard Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Deployment Status */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Rocket className="h-5 w-5 text-indigo-600" />
                    Deployment Status
                  </CardTitle>
                  <CardDescription>
                    Latest build and deployment info
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span>Last Deployment</span>
                      <Badge variant="success">Successful</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Build Time</span>
                      <span className="font-semibold">48s</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Environment</span>
                      <span className="text-slate-700 font-medium">
                        Production
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Hosting Health */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Server className="h-5 w-5 text-green-600" />
                    Hosting Health
                  </CardTitle>
                  <CardDescription>
                    Server and uptime monitoring
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span>Uptime</span>
                      <span className="text-green-600 font-semibold">
                        99.98%
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Active Instances</span>
                      <span className="font-semibold">6</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Region</span>
                      <span className="text-slate-700">Global CDN</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Domains & SSL */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-blue-600" />
                    Domains & SSL
                  </CardTitle>
                  <CardDescription>
                    Connected domains and certificates
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span>Primary Domain</span>
                      <span className="font-medium">mysite.aurify.app</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>SSL Status</span>
                      <Badge variant="success">Active</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Expiry</span>
                      <span className="text-slate-700">Auto-renew enabled</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Traffic & Requests */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-orange-600" />
                    Traffic Overview
                  </CardTitle>
                  <CardDescription>
                    Requests and bandwidth usage
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span>Requests (24h)</span>
                      <span className="font-semibold">124,320</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Bandwidth Used</span>
                      <span className="font-semibold">3.6 GB</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Build Errors */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <XCircle className="h-5 w-5 text-red-600" />
                    Build Errors
                  </CardTitle>
                  <CardDescription>Recent failed builds</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-slate-600">
                    No failed builds in the last 7 days 🎉
                  </div>
                </CardContent>
              </Card>

              {/* Live Status */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                    Live Status
                  </CardTitle>
                  <CardDescription>Public availability</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span>Website Status</span>
                    <Badge variant="success">Live</Badge>
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
