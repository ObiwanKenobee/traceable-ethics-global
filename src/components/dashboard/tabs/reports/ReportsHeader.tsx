import { Button } from "@/components/ui/button";
import { Filter, Download, Plus } from "lucide-react";

interface ReportsHeaderProps {
  onCreateReport: () => void;
  isLoading: boolean;
}

export function ReportsHeader({ onCreateReport, isLoading }: ReportsHeaderProps) {
  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Reports & Analytics</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" disabled={isLoading}>
            <Filter className="w-4 h-4 mr-2" />
            Filter Reports
          </Button>
          <Button variant="default" size="sm" disabled={isLoading}>
            <Download className="w-4 h-4 mr-2" />
            Export Data
          </Button>
        </div>
      </div>

      <div className="flex justify-end">
        <Button onClick={onCreateReport} disabled={isLoading}>
          <Plus className="w-4 h-4 mr-2" />
          {isLoading ? "Creating..." : "Create Report"}
        </Button>
      </div>
    </>
  );
}