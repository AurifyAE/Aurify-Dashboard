"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Server, Cpu, HardDrive, Activity, Wifi } from "lucide-react";

const SystemHealth = () => {
  const metrics = [
    {
      name: "CPU Usage",
      value: 68,
      icon: <Cpu className="h-5 w-5" />,
      color: "bg-blue-500",
    },
    {
      name: "Memory Usage",
      value: 75,
      icon: <Server className="h-5 w-5" />,
      color: "bg-green-500",
    },
    {
      name: "Disk Usage",
      value: 45,
      icon: <HardDrive className="h-5 w-5" />,
      color: "bg-purple-500",
    },
    {
      name: "Network I/O",
      value: 32,
      icon: <Wifi className="h-5 w-5" />,
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {metrics.map((metric, index) => (
        <Card key={index}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${metric.color} text-white`}>
                  {metric.icon}
                </div>
                <div>
                  <CardTitle className="text-lg">{metric.name}</CardTitle>
                  <CardDescription>Current usage</CardDescription>
                </div>
              </div>
              <div className="text-2xl font-bold">{metric.value}%</div>
            </div>
          </CardHeader>
          <CardContent>
            <Progress value={metric.value} className="h-2" />
            <div className="mt-4 flex items-center justify-between text-sm text-slate-600">
              <span>0%</span>
              <span>100%</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SystemHealth;
