
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TestTube, Plus, Edit, Trash2 } from "lucide-react";

const ServiceManagement = () => {
  const [showCreateService, setShowCreateService] = useState(false);

  const services = [
    { id: 1, name: "IUI Treatment", price: 1500, description: "Intrauterine Insemination treatment" },
    { id: 2, name: "IVF Treatment", price: 10000, description: "In Vitro Fertilization complete package" },
    { id: 3, name: "Fertility Test Package", price: 800, description: "Comprehensive fertility testing" }
  ];

  const handleCreateService = () => {
    console.log("Creating service");
    setShowCreateService(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Service Management</h2>
          <p className="text-gray-600">Manage fertility treatment services and pricing</p>
        </div>
        <Dialog open={showCreateService} onOpenChange={setShowCreateService}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-blue-600 to-teal-600">
              <Plus className="w-4 h-4 mr-2" />
              Add Service
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Service</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label>Service Name</Label>
                <Input placeholder="Enter service name..." />
              </div>
              <div>
                <Label>Price ($)</Label>
                <Input type="number" placeholder="Enter price..." />
              </div>
              <div>
                <Label>Description</Label>
                <Textarea placeholder="Enter service description..." />
              </div>
              <Button onClick={handleCreateService} className="w-full">
                Create Service
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TestTube className="w-5 h-5 text-blue-600" />
            <span>Available Services</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Service Name</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {services.map((service) => (
                <TableRow key={service.id}>
                  <TableCell className="font-medium">{service.name}</TableCell>
                  <TableCell>${service.price}</TableCell>
                  <TableCell>{service.description}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceManagement;
