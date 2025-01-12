import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardContent } from "@/components/dashboard/DashboardContent";
import { TooltipProvider } from "@/components/ui/tooltip";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <TooltipProvider>
      <SidebarProvider>
        <div className="min-h-screen flex w-full">
          <DashboardSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className="flex-1 flex flex-col">
            <DashboardHeader />
            <DashboardContent activeTab={activeTab} />
          </div>
        </div>
      </SidebarProvider>
    </TooltipProvider>
  );
};

export default Dashboard;