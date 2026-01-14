"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  UserPlus,
  Download,
  Upload,
  Settings,
  Shield,
  Database,
  Mail,
  Bell,
} from "lucide-react";

const QuickActions = () => {
  const actions = [
    {
      icon: <UserPlus className="h-5 w-5" />,
      label: "Add User",
      description: "Create a new user account",
      variant: "default" as const,
    },
    {
      icon: <Download className="h-5 w-5" />,
      label: "Export Data",
      description: "Download reports and data",
      variant: "outline" as const,
    },
    {
      icon: <Upload className="h-5 w-5" />,
      label: "Import Data",
      description: "Upload CSV or JSON files",
      variant: "outline" as const,
    },
    {
      icon: <Database className="h-5 w-5" />,
      label: "Backup Now",
      description: "Create system backup",
      variant: "outline" as const,
    },
    {
      icon: <Shield className="h-5 w-5" />,
      label: "Security Scan",
      description: "Run security audit",
      variant: "outline" as const,
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Send Notification",
      description: "Broadcast message",
      variant: "outline" as const,
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>
          Frequently used administrative actions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant={action.variant}
              className="h-auto flex-col items-start justify-start p-4 gap-2"
            >
              <div className="flex items-center gap-2 w-full">
                {action.icon}
                <span className="font-semibold">{action.label}</span>
              </div>
              <span className="text-xs text-left opacity-70 w-full">
                {action.description}
              </span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;
