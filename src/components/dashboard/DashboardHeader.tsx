import { Button } from "@/components/ui/button";
import { Upload, PlayCircle, FileBarChart } from "lucide-react";

export function DashboardHeader() {
  return (
    <header className="border-b border-border p-4 bg-background">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold">Global Trace Protocol</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Upload className="w-4 h-4 mr-2" />
            Upload Data
          </Button>
          <Button variant="outline" size="sm">
            <PlayCircle className="w-4 h-4 mr-2" />
            Start Assessment
          </Button>
          <Button variant="outline" size="sm">
            <FileBarChart className="w-4 h-4 mr-2" />
            Generate Report
          </Button>
        </div>
      </div>
    </header>
  );
}