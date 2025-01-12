import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit, Trash } from "lucide-react";

interface Report {
  id: string;
  title: string;
  type: string;
  createdAt: string;
  status: "draft" | "published";
}

interface ReportsListProps {
  reports: Report[];
  isLoading: boolean;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export function ReportsList({ reports, isLoading, onEdit, onDelete }: ReportsListProps) {
  return (
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
                  onClick={() => onEdit(report.id)}
                  disabled={isLoading}
                >
                  <Edit className="w-4 h-4" />
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => onDelete(report.id)}
                  disabled={isLoading}
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
  );
}