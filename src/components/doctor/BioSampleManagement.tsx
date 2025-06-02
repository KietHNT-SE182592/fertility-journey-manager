
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { TestTube, Plus, Thermometer, MapPin } from "lucide-react";

const BioSampleManagement = () => {
  const [showCreateSample, setShowCreateSample] = useState(false);

  const bioSamples = [
    {
      id: 1,
      sampleName: "Embryo Sample #001",
      patientName: "Emma & John Johnson",
      treatmentPlan: "IVF Treatment",
      type: "Embryo",
      quality: "Grade A",
      status: "Stored",
      collectionDate: "2024-02-10",
      storageLocation: "Tank A-001"
    },
    {
      id: 2,
      sampleName: "Sperm Sample #045",
      patientName: "Sarah & Mike Davis",
      treatmentPlan: "IUI Treatment",
      type: "Sperm",
      quality: "Good",
      status: "Ready for Use",
      collectionDate: "2024-02-08",
      storageLocation: "Tank B-012"
    },
    {
      id: 3,
      sampleName: "Egg Sample #023",
      patientName: "Lisa & Tom Wilson",
      treatmentPlan: "Egg Freezing",
      type: "Oocyte",
      quality: "Excellent",
      status: "Frozen",
      collectionDate: "2024-01-25",
      storageLocation: "Tank C-005"
    }
  ];

  const handleCreateSample = () => {
    console.log("Creating bio sample");
    setShowCreateSample(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Stored": return "default";
      case "Ready for Use": return "secondary";
      case "Frozen": return "outline";
      default: return "outline";
    }
  };

  const getQualityColor = (quality: string) => {
    switch (quality) {
      case "Excellent": case "Grade A": return "text-green-600";
      case "Good": return "text-blue-600";
      case "Fair": return "text-yellow-600";
      default: return "text-gray-600";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Bio Sample Management</h2>
          <p className="text-gray-600">Track and manage biological samples for treatments</p>
        </div>
        <Dialog open={showCreateSample} onOpenChange={setShowCreateSample}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-blue-600 to-teal-600">
              <Plus className="w-4 h-4 mr-2" />
              Add Bio Sample
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Bio Sample</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label>Treatment Plan</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select treatment plan..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Emma & John Johnson - IVF Treatment</SelectItem>
                    <SelectItem value="2">Sarah & Mike Davis - IUI Treatment</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label>Sample Name</Label>
                  <Input placeholder="Enter sample name..." />
                </div>
                <div>
                  <Label>Sample Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="embryo">Embryo</SelectItem>
                      <SelectItem value="sperm">Sperm</SelectItem>
                      <SelectItem value="oocyte">Oocyte</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label>Quality</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Quality assessment..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="excellent">Excellent</SelectItem>
                      <SelectItem value="good">Good</SelectItem>
                      <SelectItem value="fair">Fair</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Storage Location</Label>
                  <Input placeholder="Tank A-001" />
                </div>
              </div>
              <div>
                <Label>Collection Date</Label>
                <Input type="date" />
              </div>
              <Button onClick={handleCreateSample} className="w-full">
                Add Bio Sample
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-6">
        {bioSamples.map((sample) => (
          <Card key={sample.id} className="border-0 shadow-lg">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <TestTube className="w-5 h-5 text-blue-600" />
                    <span>{sample.sampleName}</span>
                  </CardTitle>
                  <CardDescription>
                    {sample.patientName} - {sample.treatmentPlan}
                  </CardDescription>
                </div>
                <div className="flex flex-col items-end space-y-2">
                  <Badge variant={getStatusColor(sample.status)}>
                    {sample.status}
                  </Badge>
                  <span className="text-sm text-gray-500">Type: {sample.type}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Quality</p>
                  <p className={`font-semibold ${getQualityColor(sample.quality)}`}>
                    {sample.quality}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Collection Date</p>
                  <p className="font-semibold">{sample.collectionDate}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    Storage Location
                  </p>
                  <p className="font-semibold">{sample.storageLocation}</p>
                </div>
              </div>
              
              <div className="flex space-x-3 mt-4">
                <Button size="sm" variant="outline">
                  Update Status
                </Button>
                <Button size="sm" variant="outline">
                  View Details
                </Button>
                <Button size="sm" variant="outline">
                  <Thermometer className="w-4 h-4 mr-1" />
                  Check Temperature
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BioSampleManagement;
