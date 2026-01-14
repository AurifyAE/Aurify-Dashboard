"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ActivityLog } from "@/lib/types";
import { CheckCircle2, XCircle, AlertTriangle, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const RecentActivity = () => {
  const activities: ActivityLog[] = [
    {
      id: "1",
      user: "John Doe",
      action: "Created new user account",
      target: "user@example.com",
      timestamp: "2 minutes ago",
      ip: "192.168.1.1",
      status: "success",
    },
    {
      id: "2",
      user: "Jane Smith",
      action: "Updated system settings",
      target: "General Settings",
      timestamp: "15 minutes ago",
      ip: "192.168.1.2",
      status: "success",
    },
    {
      id: "3",
      user: "Admin User",
      action: "Failed login attempt",
      target: "admin@example.com",
      timestamp: "1 hour ago",
      ip: "192.168.1.3",
      status: "failed",
    },
    {
      id: "4",
      user: "System",
      action: "Database backup completed",
      target: "Backup System",
      timestamp: "2 hours ago",
      ip: "127.0.0.1",
      status: "success",
    },
    {
      id: "5",
      user: "Security Bot",
      action: "Security alert triggered",
      target: "Firewall",
      timestamp: "3 hours ago",
      ip: "127.0.0.1",
      status: "warning",
    },
    {
      id: "6",
      user: "Admin User",
      action: "Deleted user account",
      target: "olduser@example.com",
      timestamp: "5 hours ago",
      ip: "192.168.1.1",
      status: "success",
    },
  ];

  const getStatusIcon = (status: ActivityLog["status"]) => {
    switch (status) {
      case "success":
        return <CheckCircle2 className="h-4 w-4 text-green-600" />;
      case "failed":
        return <XCircle className="h-4 w-4 text-red-600" />;
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-yellow-600" />;
      default:
        return <Clock className="h-4 w-4 text-slate-400" />;
    }
  };

  const getStatusBadge = (status: ActivityLog["status"]) => {
    switch (status) {
      case "success":
        return <Badge variant="success">Success</Badge>;
      case "failed":
        return <Badge variant="destructive">Failed</Badge>;
      case "warning":
        return <Badge variant="warning">Warning</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Monitor all system activities and user actions
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Action</TableHead>
              <TableHead>Target</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>IP Address</TableHead>
              <TableHead>Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {activities.map((activity) => (
              <TableRow key={activity.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${activity.user}`} />
                      <AvatarFallback>
                        {activity.user
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{activity.user}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(activity.status)}
                    <span>{activity.action}</span>
                  </div>
                </TableCell>
                <TableCell className="text-slate-600">
                  {activity.target}
                </TableCell>
                <TableCell>{getStatusBadge(activity.status)}</TableCell>
                <TableCell className="font-mono text-xs text-slate-500">
                  {activity.ip}
                </TableCell>
                <TableCell className="text-slate-500">
                  {activity.timestamp}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
