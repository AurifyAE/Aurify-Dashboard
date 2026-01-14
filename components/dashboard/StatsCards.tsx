"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Activity,
  Server,
  Shield,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { StatCard } from "@/lib/types";

const StatsCards = () => {
  const stats: StatCard[] = [
    {
      label: "Total Users",
      value: "12,345",
      change: "+12.5%",
      positive: true,
      icon: <Users className="h-5 w-5" />,
    },
    {
      label: "Active Users",
      value: "8,234",
      change: "+8.2%",
      positive: true,
      icon: <Activity className="h-5 w-5" />,
    },
    {
      label: "Revenue",
      value: "$124,567",
      change: "+15.3%",
      positive: true,
      icon: <DollarSign className="h-5 w-5" />,
    },
    {
      label: "System Health",
      value: "98.5%",
      change: "+2.1%",
      positive: true,
      icon: <Server className="h-5 w-5" />,
    },
    {
      label: "Security Score",
      value: "95/100",
      change: "+5.0",
      positive: true,
      icon: <Shield className="h-5 w-5" />,
    },
    {
      label: "Response Time",
      value: "142ms",
      change: "-8.2%",
      positive: true,
      icon: <Zap className="h-5 w-5" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <Card
          key={index}
          className="relative overflow-hidden border-slate-200 hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
        >
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="space-y-2 flex-1">
                <p className="text-sm font-medium text-slate-600">
                  {stat.label}
                </p>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-3xl font-bold text-slate-900">
                    {stat.value}
                  </h3>
                </div>
                <div
                  className={cn(
                    "flex items-center gap-1 text-sm font-semibold",
                    stat.positive
                      ? "text-green-600"
                      : "text-red-600"
                  )}
                >
                  {stat.positive ? (
                    <TrendingUp className="h-4 w-4" />
                  ) : (
                    <TrendingDown className="h-4 w-4" />
                  )}
                  <span>{stat.change}</span>
                  <span className="text-slate-500 font-normal">
                    from last month
                  </span>
                </div>
              </div>
              <div
                className={cn(
                  "p-3 rounded-xl",
                  index === 0 && "bg-blue-100 text-blue-600",
                  index === 1 && "bg-green-100 text-green-600",
                  index === 2 && "bg-purple-100 text-purple-600",
                  index === 3 && "bg-orange-100 text-orange-600",
                  index === 4 && "bg-red-100 text-red-600",
                  index === 5 && "bg-yellow-100 text-yellow-600"
                )}
              >
                {stat.icon}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatsCards;
