import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import { CollaborationFeatures } from "./collaboration/CollaborationFeatures";
import { ProjectList } from "./collaboration/ProjectList";

interface Project {
  id: string;
  title: string;
  team: string[];
  status: "active" | "completed" | "on-hold";
  deadline: string;
}

const initialProjects: Project[] = [
  {
    id: "1",
    title: "Supply Chain Audit 2024",
    team: ["John Doe", "Jane Smith"],
    status: "active",
    deadline: "2024-06-30",
  },
  {
    id: "2",
    title: "Supplier Onboarding Program",
    team: ["Mike Johnson", "Sarah Wilson"],
    status: "on-hold",
    deadline: "2024-05-15",
  },
];

export function Collaboration() {
  const [projects, setProjects] = useState<Project[]>(initialProjects);

  const handleCreateProject = () => {
    console.log("Create project");
  };

  const handleEditProject = (id: string) => {
    console.log("Edit project", id);
  };

  const handleDeleteProject = (id: string) => {
    setProjects(projects.filter(project => project.id !== id));
  };

  return (
    <div className="space-y-6 animate-fade-up">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Collaboration Center</h2>
        <Button onClick={handleCreateProject}>
          <Plus className="w-4 h-4 mr-2" />
          New Project
        </Button>
      </div>

      <CollaborationFeatures />

      <ProjectList
        projects={projects}
        onEdit={handleEditProject}
        onDelete={handleDeleteProject}
      />
    </div>
  );
}