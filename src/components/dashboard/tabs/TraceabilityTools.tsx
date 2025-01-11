import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, Map, Plus, Edit, Trash } from "lucide-react";
import { useState } from "react";

interface Supplier {
  id: string;
  name: string;
  location: string;
  riskLevel: "low" | "medium" | "high";
  complianceScore: number;
}

const initialSuppliers: Supplier[] = [
  {
    id: "1",
    name: "Global Manufacturing Co.",
    location: "Asia Pacific",
    riskLevel: "low",
    complianceScore: 92,
  },
  {
    id: "2",
    name: "EcoTextiles Ltd.",
    location: "South America",
    riskLevel: "medium",
    complianceScore: 78,
  },
];

export function TraceabilityTools() {
  const [suppliers, setSuppliers] = useState<Supplier[]>(initialSuppliers);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddSupplier = () => {
    // Implementation for adding a new supplier
    console.log("Add supplier");
  };

  const handleEditSupplier = (id: string) => {
    // Implementation for editing a supplier
    console.log("Edit supplier", id);
  };

  const handleDeleteSupplier = (id: string) => {
    setSuppliers(suppliers.filter(supplier => supplier.id !== id));
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
        <Button onClick={handleAddSupplier}>
          <Plus className="w-4 h-4 mr-2" />
          Add Supplier
        </Button>
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
                    onClick={() => handleEditSupplier(supplier.id)}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDeleteSupplier(supplier.id)}
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