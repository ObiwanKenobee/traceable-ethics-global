import { Leaf, Users, AlertTriangle, Scale } from "lucide-react";
import { MetricCard } from "../../shared/MetricCard";

export function MetricsGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <MetricCard
        title="Sustainability Score"
        value="85%"
        subtitle="+2.5% from last month"
        icon={Leaf}
      />
      <MetricCard
        title="Traced Suppliers"
        value="2,350"
        subtitle="48 new this month"
        icon={Users}
      />
      <MetricCard
        title="Flagged Risks"
        value="12"
        subtitle="-3 from last month"
        icon={AlertTriangle}
      />
      <MetricCard
        title="Completed Audits"
        value="124"
        subtitle="15 pending review"
        icon={Scale}
      />
    </div>
  );
}