import { MetricsGrid } from "./overview/MetricsGrid";
import { SustainabilityChart } from "./overview/SustainabilityChart";
import { RecentActivities } from "./overview/RecentActivities";

export function Overview() {
  return (
    <div className="space-y-6 animate-fade-up">
      <h2 className="text-3xl font-bold tracking-tight">Overview</h2>
      <MetricsGrid />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <SustainabilityChart />
        <RecentActivities />
      </div>
    </div>
  );
}