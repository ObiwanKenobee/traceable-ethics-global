import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  Route,
  Map,
  AlertTriangle,
  BarChart3,
  BookOpen,
  Users2,
  Settings,
} from "lucide-react";

const menuItems = [
  { id: "overview", title: "Overview", icon: LayoutDashboard },
  { id: "traceability", title: "Traceability Tools", icon: Route },
  { id: "heatmap", title: "Risk Heatmap", icon: Map },
  { id: "reports", title: "Reports & Analytics", icon: BarChart3 },
  { id: "resources", title: "Resource Hub", icon: BookOpen },
  { id: "collaboration", title: "Collaboration Center", icon: Users2 },
  { id: "settings", title: "Settings", icon: Settings },
];

interface DashboardSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function DashboardSidebar({ activeTab, setActiveTab }: DashboardSidebarProps) {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => setActiveTab(item.id)}
                    className={activeTab === item.id ? "bg-accent" : ""}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}