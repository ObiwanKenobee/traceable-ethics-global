import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileBarChart, Download, Filter, Plus, Edit, Trash } from "lucide-react";
import { useState } from "react";

interface Report {
  id: string;
  title: string;
  type: string;
  createdAt: string;
  status: "draft" | "published";
}

const initialReports: Report[] = [
  {
    id: "1",
    title: "Q1 2024 Sustainability Report",
    type: "Quarterly Review",
    createdAt: "2024-03-15",
    status: "published",
  },
  {
    id: "2",
    title: "Supply Chain Risk Assessment",
    type: "Risk Analysis",
    createdAt: "2024-03-14",
    status: "draft",
  },
];

export function Reports() {
  const [reports, setReports] = useState<Report[]>(initialReports);

  const handleCreateReport = () => {
    // Implementation for creating a new report
    console.log("Create report");
  };

  const handleEditReport = (id: string) => {
    // Implementation for editing a report
    console.log("Edit report", id);
  };

  const handleDeleteReport = (id: string) => {
    setReports(reports.filter(report => report.id !== id));
  };

  return (
    <div className="space-y-6 animate-fade-up">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Reports & Analytics</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter Reports
          </Button>
          <Button variant="default" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export Data
          </Button>
        </div>
      </div>

      <div className="flex justify-end">
        <Button onClick={handleCreateReport}>
          <Plus className="w-4 h-4 mr-2" />
          Create Report
        </Button>
      </div>

      <div className="grid gap-4">
        {reports.map((report) => (
          <Card key={report.id}>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>{report.title}</CardTitle>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEditReport(report.id)}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDeleteReport(report.id)}
                  >
                    <Trash className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Type:</span>
                  <span>{report.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Created:</span>
                  <span>{new Date(report.createdAt).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status:</span>
                  <span className={`capitalize ${
                    report.status === 'published' ? 'text-green-500' : 'text-yellow-500'
                  }`}>
                    {report.status}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}