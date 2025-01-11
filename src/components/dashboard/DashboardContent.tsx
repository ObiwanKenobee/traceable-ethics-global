import { Overview } from "./tabs/Overview";
import { TraceabilityTools } from "./tabs/TraceabilityTools";
import { RiskHeatmap } from "./tabs/RiskHeatmap";
import { Reports } from "./tabs/Reports";
import { ResourceHub } from "./tabs/ResourceHub";
import { Collaboration } from "./tabs/Collaboration";
import { Settings } from "./tabs/Settings";

interface DashboardContentProps {
  activeTab: string;
}

export function DashboardContent({ activeTab }: DashboardContentProps) {
  return (
    <main className="flex-1 p-6 overflow-auto">
      {activeTab === "overview" && <Overview />}
      {activeTab === "traceability" && <TraceabilityTools />}
      {activeTab === "heatmap" && <RiskHeatmap />}
      {activeTab === "reports" && <Reports />}
      {activeTab === "resources" && <ResourceHub />}
      {activeTab === "collaboration" && <Collaboration />}
      {activeTab === "settings" && <Settings />}
    </main>
  );
}