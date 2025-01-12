import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, Map, Plus, Edit, Trash } from "lucide-react";
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { addSupplier, startAssessment, uploadData } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";

interface Supplier {
  id: string;
  name: string;
  location: string;
  riskLevel: "low" | "medium" | "high";
  complianceScore: number;
}

export function TraceabilityTools() {
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const addSupplierMutation = useMutation({
    mutationFn: addSupplier,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['suppliers'] });
      toast({
        title: "Success",
        description: "Supplier added successfully",
      });
    },
  });

  const startAssessmentMutation = useMutation({
    mutationFn: startAssessment,
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Assessment started successfully",
      });
    },
  });

  const uploadDataMutation = useMutation({
    mutationFn: uploadData,
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Data uploaded successfully",
      });
    },
  });

  const handleAddSupplier = () => {
    addSupplierMutation.mutate({
      name: "New Supplier",
      location: "Location",
      coordinates: { x: 0, y: 0 }
    });
  };

  const handleStartAssessment = (supplierId: string) => {
    startAssessmentMutation.mutate(supplierId);
  };

  const handleUploadData = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files?.length) return;
    
    const formData = new FormData();
    formData.append('file', event.target.files[0]);
    uploadDataMutation.mutate(formData);
  };

  const filteredSuppliers = suppliers.filter(supplier =>
    supplier.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-fade-up">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Traceability Tools</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
          <Button variant="outline" size="sm">
            <Map className="w-4 h-4 mr-2" />
            View Map
          </Button>
        </div>
      </div>

      <div className="flex justify-between gap-4">
        <Input
          placeholder="Search suppliers..."
          className="max-w-sm"
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="flex gap-2">
          <Button onClick={handleAddSupplier}>
            <Plus className="w-4 h-4 mr-2" />
            Add Supplier
          </Button>
          <Input
            type="file"
            className="hidden"
            id="data-upload"
            onChange={handleUploadData}
          />
          <Button
            variant="outline"
            onClick={() => document.getElementById('data-upload')?.click()}
          >
            Upload Data
          </Button>
        </div>
      </div>

      <div className="grid gap-4">
        {filteredSuppliers.map((supplier) => (
          <Card key={supplier.id}>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-xl">{supplier.name}</CardTitle>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleStartAssessment(supplier.id)}
                  >
                    Start Assessment
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                  >
                    <Trash className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Location:</span>
                  <span>{supplier.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Risk Level:</span>
                  <span className={`capitalize ${
                    supplier.riskLevel === 'high' ? 'text-red-500' :
                    supplier.riskLevel === 'medium' ? 'text-yellow-500' :
                    'text-green-500'
                  }`}>
                    {supplier.riskLevel}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Compliance Score:</span>
                  <span>{supplier.complianceScore}%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}