import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Map, Filter, Plus, Edit, Trash } from "lucide-react";
import { useState } from "react";

interface RiskZone {
  id: string;
  region: string;
  riskLevel: "low" | "medium" | "high";
  riskFactors: string[];
  lastUpdated: string;
}

const initialRiskZones: RiskZone[] = [
  {
    id: "1",
    region: "Southeast Asia",
    riskLevel: "high",
    riskFactors: ["Labor violations", "Environmental concerns"],
    lastUpdated: "2024-03-15",
  },
  {
    id: "2",
    region: "Eastern Europe",
    riskLevel: "medium",
    riskFactors: ["Supply chain disruption"],
    lastUpdated: "2024-03-14",
  },
];

export function RiskHeatmap() {
  const [riskZones, setRiskZones] = useState<RiskZone[]>(initialRiskZones);

  const handleAddRiskZone = () => {
    // Implementation for adding a new risk zone
    console.log("Add risk zone");
  };

  const handleEditRiskZone = (id: string) => {
    // Implementation for editing a risk zone
    console.log("Edit risk zone", id);
  };

  const handleDeleteRiskZone = (id: string) => {
    setRiskZones(riskZones.filter(zone => zone.id !== id));
  };

  return (
    <div className="space-y-6 animate-fade-up">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Risk Heatmap</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Risk Filters
          </Button>
          <Button variant="destructive" size="sm">
            <AlertTriangle className="w-4 h-4 mr-2" />
            High Risk Areas
          </Button>
        </div>
      </div>

      <Card className="col-span-3">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Global Risk Distribution</CardTitle>
            <Button onClick={handleAddRiskZone}>
              <Plus className="w-4 h-4 mr-2" />
              Add Risk Zone
            </Button>
          </div>
        </CardHeader>
        <CardContent className="h-[400px] flex items-center justify-center bg-muted/50">
          <div className="text-center space-y-2">
            <Map className="w-12 h-12 mx-auto text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              Interactive risk heatmap visualization coming soon...
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4">
        {riskZones.map((zone) => (
          <Card key={zone.id}>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>{zone.region}</CardTitle>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEditRiskZone(zone.id)}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDeleteRiskZone(zone.id)}
                  >
                    <Trash className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Risk Level:</span>
                  <span className={`capitalize ${
                    zone.riskLevel === 'high' ? 'text-red-500' :
                    zone.riskLevel === 'medium' ? 'text-yellow-500' :
                    'text-green-500'
                  }`}>
                    {zone.riskLevel}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Risk Factors:</span>
                  <span>{zone.riskFactors.join(", ")}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Last Updated:</span>
                  <span>{new Date(zone.lastUpdated).toLocaleDateString()}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}