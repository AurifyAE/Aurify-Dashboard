"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Charts = () => {
  const userGrowthData = [
    { month: "Jan", users: 4000, active: 2400 },
    { month: "Feb", users: 3000, active: 1398 },
    { month: "Mar", users: 2000, active: 9800 },
    { month: "Apr", users: 2780, active: 3908 },
    { month: "May", users: 1890, active: 4800 },
    { month: "Jun", users: 2390, active: 3800 },
    { month: "Jul", users: 3490, active: 4300 },
  ];

  const revenueData = [
    { month: "Jan", revenue: 40000, target: 50000 },
    { month: "Feb", revenue: 30000, target: 50000 },
    { month: "Mar", revenue: 50000, target: 50000 },
    { month: "Apr", revenue: 45000, target: 50000 },
    { month: "May", revenue: 55000, target: 50000 },
    { month: "Jun", revenue: 60000, target: 50000 },
    { month: "Jul", revenue: 65000, target: 50000 },
  ];

  const systemMetrics = [
    { time: "00:00", cpu: 45, memory: 60, disk: 30 },
    { time: "04:00", cpu: 52, memory: 65, disk: 32 },
    { time: "08:00", cpu: 68, memory: 70, disk: 35 },
    { time: "12:00", cpu: 75, memory: 75, disk: 38 },
    { time: "16:00", cpu: 70, memory: 72, disk: 36 },
    { time: "20:00", cpu: 58, memory: 68, disk: 33 },
    { time: "24:00", cpu: 50, memory: 62, disk: 31 },
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <Tabs defaultValue="users">
          <TabsList>
            <TabsTrigger value="users">User Growth</TabsTrigger>
            <TabsTrigger value="revenue">Revenue</TabsTrigger>
            <TabsTrigger value="system">System Metrics</TabsTrigger>
          </TabsList>

          <TabsContent value="users" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>User Growth Analytics</CardTitle>
                <CardDescription>
                  Track user growth and active users over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <AreaChart data={userGrowthData}>
                    <defs>
                      <linearGradient
                        id="colorUsers"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#3b82f6"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="#3b82f6"
                          stopOpacity={0}
                        />
                      </linearGradient>
                      <linearGradient
                        id="colorActive"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#8b5cf6"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="#8b5cf6"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="users"
                      stroke="#3b82f6"
                      fill="url(#colorUsers)"
                      name="Total Users"
                    />
                    <Area
                      type="monotone"
                      dataKey="active"
                      stroke="#8b5cf6"
                      fill="url(#colorActive)"
                      name="Active Users"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="revenue" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Analytics</CardTitle>
                <CardDescription>Monthly revenue vs targets</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar
                      dataKey="revenue"
                      fill="#10b981"
                      radius={[8, 8, 0, 0]}
                    />
                    <Bar
                      dataKey="target"
                      fill="#e2e8f0"
                      radius={[8, 8, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="system" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>System Performance Metrics</CardTitle>
                <CardDescription>
                  Real-time system resource usage
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <LineChart data={systemMetrics}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="cpu"
                      stroke="#ef4444"
                      strokeWidth={2}
                    />
                    <Line
                      type="monotone"
                      dataKey="memory"
                      stroke="#3b82f6"
                      strokeWidth={2}
                    />
                    <Line
                      type="monotone"
                      dataKey="disk"
                      stroke="#10b981"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Charts;
