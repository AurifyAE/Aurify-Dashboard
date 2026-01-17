"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Hugeicons imports
import { HugeiconsIcon } from "@hugeicons/react";
import {
  DashboardSquare02Icon,
  Chart01Icon,
  User02Icon,
  Activity01Icon,
  Database01Icon,
  Shield01Icon,
  File01Icon,
  Settings01Icon,
  Eraser01Icon,
  BeltIcon,
  Logout01Icon,
  Menu01Icon,
  Cancel01Icon,
  TvFixFreeIcons,
  ComputerAddIcon,
  ComputerDeskIcon,
  Computer,
  Server,
  ArrowLeft01Icon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons";

import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface NavItem {
  title: string;
  href: string;
  icon: typeof DashboardSquare02Icon;
  badge?: string;
}

const navItems: NavItem[] = [
  { title: "Dashboard", href: "/dashboard", icon: DashboardSquare02Icon },
  { title: "Spot Rate", href: "/dashboard/analytics", icon: Chart01Icon },
  {
    title: "Configure Screens",
    href: "/dashboard/users",
    icon: TvFixFreeIcons,
  },
  { title: "My Screens", href: "/dashboard/activity", icon: Computer },
  { title: "System Health", href: "/dashboard/system", icon: Database01Icon },
  { title: "Security", href: "/dashboard/security", icon: Shield01Icon },
  { title: "Reports", href: "/dashboard/reports", icon: File01Icon },
  { title: "Settings", href: "/dashboard/settings", icon: Settings01Icon },
  { title: "WebServer", href: "/dashboard/webserver", icon: Server },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-collapse after 5 seconds on desktop
  useEffect(() => {
    const timer = setTimeout(() => {
      if (window.innerWidth >= 1024) {
        setIsCollapsed(true);
      }
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  // Determine if sidebar should show as expanded
  const shouldExpand = !isCollapsed || isHovered;

  return (
    <>
      {/* Mobile toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="bg-white/90 backdrop-blur-sm shadow-lg border-slate-200 text-slate-900"
        >
          <HugeiconsIcon
            icon={isMobileOpen ? Cancel01Icon : Menu01Icon}
            size={20}
            color="currentColor"
            strokeWidth={1.5}
          />
        </Button>
      </div>

      {/* Sidebar */}
      <aside
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cn(
          "flex flex-col  z-40 text-white transition-all duration-300 ease-in-out overflow-hidden",
          // Desktop behavior
          "lg:translate-x-0",
          shouldExpand ? "lg:w-70" : "lg:w-20",
          // Mobile behavior
          "w-64",
          isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
        style={{ pointerEvents: "auto" }}
      >
        {/* Logo section */}
        <div className="p-6 min-h-10 border-b border-slate-700/60 flex justify-center items-center relative flex-shrink-0 overflow-hidden">
          <div className="flex items-center gap-2 transition-all duration-300 relative">
            {/* Logo Icon – always visible */}
            <Image
              src="/images/aurify-logo1.svg"
              alt="Aurify"
              width={36}
              height={36}
              priority
              className="flex-shrink-0 relative z-10"
            />

            {/* Logo Text – hides when collapsed */}
            <div
              className={cn(
                "transition-all duration-300  relative z-0",
                shouldExpand ? "  opacity-100 visible" : "  opacity-0 invisible"
              )}
            >
              <Image
                src="/images/aurify-logo2.svg"
                alt="Aurify"
                width={120}
                height={30}
                priority
              />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto overflow-x-hidden p-4 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileOpen(false)}
                title={!shouldExpand ? item.title : undefined}
                className={cn(
                  "group px-4 py-3 flex gap-3 items-center rounded-lg transition-all duration-200 relative",
                  isActive
                    ? "bg-gradient-to-r custom_b_border from-blue-700/30 to-indigo-700/20 text-white font-medium shadow-sm"
                    : "text-slate-300 hover:bg-slate-800/50 hover:text-white"
                )}
              >
                <HugeiconsIcon
                  icon={item.icon}
                  size={20}
                  color="currentColor"
                  strokeWidth={1.5}
                  className="transition-transform duration-200 flex-shrink-0"
                />
                <span
                  className={cn(
                    "transition-all duration-300 whitespace-nowrap",
                    shouldExpand
                      ? "opacity-100 w-auto visible"
                      : "opacity-0 w-0 invisible"
                  )}
                >
                  {item.title}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* User profile */}
        <div className="p-4 border-t border-slate-700/60 mt-auto flex-shrink-0">
          {!shouldExpand ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="w-full flex justify-center p-2 rounded-lg hover:bg-slate-800/50 transition-colors">
                  <Avatar className="h-10 w-10 flex-shrink-0">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="User"
                    />
                    <AvatarFallback className="bg-gradient-to-br from-blue-600 to-indigo-600">
                      SA
                    </AvatarFallback>
                  </Avatar>
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-56" >
                <DropdownMenuLabel>
                  <div className="flex flex-col">
                    <span>Super Admin</span>
                    <span className="text-xs font-normal text-slate-500">
                      admin@example.com
                    </span>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuItem>
                  <HugeiconsIcon
                    icon={Settings01Icon}
                    size={16}
                    color="currentColor"
                    strokeWidth={1.5}
                    className="mr-2"
                  />
                  Settings
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <HugeiconsIcon
                    icon={BeltIcon}
                    size={16}
                    color="currentColor"
                    strokeWidth={1.5}
                    className="mr-2"
                  />
                  Notifications
                </DropdownMenuItem>

                <DropdownMenuItem className="text-red-500 focus:text-red-500">
                  <HugeiconsIcon
                    icon={Logout01Icon}
                    size={16}
                    color="currentColor"
                    strokeWidth={1.5}
                    className="mr-2"
                  />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800/50 transition-colors text-left overflow-hidden relative">
                  <Avatar className="h-10 w-10 flex-shrink-0 relative z-10">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="User"
                    />
                    <AvatarFallback className="bg-gradient-to-br from-blue-600 to-indigo-600">
                      SA
                    </AvatarFallback>
                  </Avatar>

                  <div
                    className={cn(
                      "flex-1 min-w-0 transition-all duration-300 absolute left-14",
                      shouldExpand
                        ? "translate-x-0 opacity-100 visible"
                        : "-translate-x-64 opacity-0 invisible"
                    )}
                  >
                    <div className="text-sm font-semibold truncate whitespace-nowrap">
                      Super Admin
                    </div>
                    <div className="text-xs text-slate-400 truncate whitespace-nowrap">
                      admin@example.com
                    </div>
                  </div>
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuItem>
                  <HugeiconsIcon
                    icon={Settings01Icon}
                    size={16}
                    color="currentColor"
                    strokeWidth={1.5}
                    className="mr-2"
                  />
                  Settings
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <HugeiconsIcon
                    icon={BeltIcon}
                    size={16}
                    color="currentColor"
                    strokeWidth={1.5}
                    className="mr-2"
                  />
                  Notifications
                </DropdownMenuItem>

                <DropdownMenuItem className="text-red-500 focus:text-red-500">
                  <HugeiconsIcon
                    icon={Logout01Icon}
                    size={16}
                    color="currentColor"
                    strokeWidth={1.5}
                    className="mr-2"
                  />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </aside>

      {/* Mobile overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  );
}
