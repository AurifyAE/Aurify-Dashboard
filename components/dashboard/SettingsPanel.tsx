"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Shield, Bell, Server } from "lucide-react";

const SettingsPanel = () => {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="general">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="system">System</TabsTrigger>
        </TabsList>

        {/* General */}
        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>
                Basic application settings and preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Application Name</label>
                <Input defaultValue="Super Admin Dashboard" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Default Language</label>
                <Input defaultValue="English" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Time Zone</label>
                <Input defaultValue="UTC" />
              </div>
              <Button>Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security */}
        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Security Settings
              </CardTitle>
              <CardDescription>
                Configure security policies and authentication
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Session Timeout (minutes)
                </label>
                <Input type="number" defaultValue="30" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Password Min Length
                </label>
                <Input type="number" defaultValue="8" />
              </div>
              <div className="flex items-center gap-2">
                <Input type="checkbox" defaultChecked className="w-4 h-4" />
                <label className="text-sm font-medium">Enable 2FA</label>
              </div>
              <Button>Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications */}
        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notification Settings
              </CardTitle>
              <CardDescription>
                Manage notification preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Input type="checkbox" defaultChecked className="w-4 h-4" />
                <label className="text-sm font-medium">
                  Email Notifications
                </label>
              </div>
              <div className="flex items-center gap-2">
                <Input type="checkbox" defaultChecked className="w-4 h-4" />
                <label className="text-sm font-medium">
                  Push Notifications
                </label>
              </div>
              <Button>Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* System */}
        <TabsContent value="system" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Server className="h-5 w-5" />
                System Settings
              </CardTitle>
              <CardDescription>
                System configuration and maintenance
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Input type="checkbox" defaultChecked className="w-4 h-4" />
                <label className="text-sm font-medium">Auto Backup</label>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Backup Frequency
                </label>
                <Input defaultValue="Daily" />
              </div>
              <Button>Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingsPanel;
