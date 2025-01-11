import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Video, FileText, Search, Plus, Edit, Trash } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface Resource {
  id: string;
  title: string;
  type: "guide" | "video" | "case-study";
  description: string;
  dateAdded: string;
}

const initialResources: Resource[] = [
  {
    id: "1",
    title: "Supply Chain Transparency Guide",
    type: "guide",
    description: "Comprehensive guide to implementing transparency in your supply chain",
    dateAdded: "2024-03-15",
  },
  {
    id: "2",
    title: "Risk Assessment Tutorial",
    type: "video",
    description: "Step-by-step tutorial on conducting risk assessments",
    dateAdded: "2024-03-14",
  },
];

export function ResourceHub() {
  const [resources, setResources] = useState<Resource[]>(initialResources);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddResource = () => {
    // Implementation for adding a new resource
    console.log("Add resource");
  };

  const handleEditResource = (id: string) => {
    // Implementation for editing a resource
    console.log("Edit resource", id);
  };

  const handleDeleteResource = (id: string) => {
    setResources(resources.filter(resource => resource.id !== id));
  };

  const filteredResources = resources.filter(resource =>
    resource.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-fade-up">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Resource Hub</h2>
        <Button onClick={handleAddResource}>
          <Plus className="w-4 h-4 mr-2" />
          Add Resource
        </Button>
      </div>

      <div className="flex gap-2">
        <Input
          placeholder="Search resources..."
          className="max-w-xs"
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid gap-4">
        {filteredResources.map((resource) => (
          <Card key={resource.id}>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="flex items-center gap-2">
                  {resource.type === 'guide' && <BookOpen className="w-4 h-4" />}
                  {resource.type === 'video' && <Video className="w-4 h-4" />}
                  {resource.type === 'case-study' && <FileText className="w-4 h-4" />}
                  {resource.title}
                </CardTitle>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEditResource(resource.id)}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDeleteResource(resource.id)}
                  >
                    <Trash className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
                <p className="text-sm text-muted-foreground">{resource.description}</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Added:</span>
                  <span>{new Date(resource.dateAdded).toLocaleDateString()}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}