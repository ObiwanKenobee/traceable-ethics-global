import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { ConfirmDialog } from "@/components/shared/ConfirmDialog";
import { ReportsHeader } from "./reports/ReportsHeader";
import { ReportsList } from "./reports/ReportsList";

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
  const [isLoading, setIsLoading] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [reportToDelete, setReportToDelete] = useState<string | null>(null);
  const { toast } = useToast();

  const handleCreateReport = async () => {
    try {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast({
        title: "Success",
        description: "New report created successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create report. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditReport = async (id: string) => {
    try {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast({
        title: "Success",
        description: "Report updated successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update report. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const confirmDelete = (id: string) => {
    setReportToDelete(id);
    setDeleteDialogOpen(true);
  };

  const handleDeleteReport = async () => {
    if (!reportToDelete) return;

    try {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      setReports(reports.filter(report => report.id !== reportToDelete));
      toast({
        title: "Success",
        description: "Report deleted successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete report. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
      setDeleteDialogOpen(false);
      setReportToDelete(null);
    }
  };

  return (
    <div className="space-y-6 animate-fade-up">
      <ReportsHeader 
        onCreateReport={handleCreateReport}
        isLoading={isLoading}
      />
      
      <ReportsList
        reports={reports}
        isLoading={isLoading}
        onEdit={handleEditReport}
        onDelete={confirmDelete}
      />

      <ConfirmDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        title="Delete Report"
        description="Are you sure you want to delete this report? This action cannot be undone."
        onConfirm={handleDeleteReport}
      />
    </div>
  );
}