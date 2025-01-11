import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users2, MessageSquare, Calendar, Plus, Edit, Trash } from "lucide-react";
import { useState } from "react";

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
    // Implementation for creating a new project
    console.log("Create project");
  };

  const handleEditProject = (id: string) => {
    // Implementation for editing a project
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

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users2 className="w-4 h-4" />
              Team Workspace
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Collaborate with your team members on projects and tasks.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Messages
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Communication hub for team and suppliers.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Schedule
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Manage audits and meeting schedules.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>{project.title}</CardTitle>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEditProject(project.id)}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDeleteProject(project.id)}
                  >
                    <Trash className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Team:</span>
                  <span>{project.team.join(", ")}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status:</span>
                  <span className={`capitalize ${
                    project.status === 'active' ? 'text-green-500' :
                    project.status === 'completed' ? 'text-blue-500' :
                    'text-yellow-500'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Deadline:</span>
                  <span>{new Date(project.deadline).toLocaleDateString()}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}