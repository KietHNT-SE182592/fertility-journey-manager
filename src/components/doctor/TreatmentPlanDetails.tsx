import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Plus, Edit, CheckCircle, Clock, TestTube, MapPin, Thermometer } from "lucide-react";

interface TreatmentPlanDetailsProps {
  treatmentPlan: any;
  onBack: () => void;
}

const TreatmentPlanDetails = ({ treatmentPlan, onBack }: TreatmentPlanDetailsProps) => {
  const [showCreateStep, setShowCreateStep] = useState(false);
  const [showUpdateStep, setShowUpdateStep] = useState(false);
  const [showCreateSample, setShowCreateSample] = useState(false);

  const stepDetails = [
    {
      id: 1,
      stepName: "Initial Consultation",
      note: "Patient consultation and evaluation",
      status: "Completed",
      planDate: "2024-01-15",
      doneDate: "2024-01-15",
      drugName: null,
      dosage: null
    },
    {
      id: 2,
      stepName: "Ovarian Stimulation",
      note: "Hormone injections for ovulation stimulation",
      status: "In Progress",
      planDate: "2024-02-01",
      doneDate: null,
      drugName: "Follicle Stimulating Hormone",
      dosage: "150 IU daily"
    },
    {
      id: 3,
      stepName: "Egg Retrieval",
      note: "Surgical egg retrieval procedure",
      status: "Planned",
      planDate: "2024-02-15",
      doneDate: null,
      drugName: null,
      dosage: null
    }
  ];

  const bioSamples = [
    {
      id: 1,
      sampleName: "Embryo Sample #001",
      type: "Embryo",
      quality: "Grade A",
      status: "Stored",
      collectionDate: "2024-02-10",
      storageLocation: "Tank A-001"
    },
    {
      id: 2,
      sampleName: "Sperm Sample #045",
      type: "Sperm",
      quality: "Good",
      status: "Ready for Use",
      collectionDate: "2024-02-08",
      storageLocation: "Tank B-012"
    }
  ];

  const handleCreateStep = () => {
    console.log("Creating step detail");
    setShowCreateStep(false);
  };

  const handleUpdateCurrentStep = () => {
    console.log("Updating current step");
    setShowUpdateStep(false);
  };

  const handleCreateSample = () => {
    console.log("Creating bio sample");
    setShowCreateSample(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "default";
      case "In Progress": return "secondary";
      case "Planned": return "outline";
      case "Stored": return "default";
      case "Ready for Use": return "secondary";
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
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="outline" onClick={onBack}>
            ← Back
          </Button>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Treatment Plan Details</h2>
            <p className="text-gray-600">{treatmentPlan.patientName} - {treatmentPlan.service}</p>
          </div>
        </div>
      </div>

      {/* Treatment Plan Overview */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle>Treatment Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-gray-600">Start Date</p>
              <p className="font-semibold">{treatmentPlan.startDate}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Current Step</p>
              <p className="font-semibold">{treatmentPlan.currentStep}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Progress</p>
              <div className="flex items-center space-x-2">
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${treatmentPlan.progress}%` }}
                  ></div>
                </div>
                <span className="text-sm font-semibold">{treatmentPlan.progress}%</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="steps" className="space-y-4">
        <TabsList>
          <TabsTrigger value="steps">Treatment Steps</TabsTrigger>
          <TabsTrigger value="biosamples">Bio Samples</TabsTrigger>
        </TabsList>

        <TabsContent value="steps">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <span>Treatment Steps</span>
                </CardTitle>
                <div className="flex space-x-3">
                  <Button onClick={() => setShowUpdateStep(true)} className="bg-gradient-to-r from-green-600 to-emerald-600">
                    Update Current Step
                  </Button>
                  <Button onClick={() => setShowCreateStep(true)} className="bg-gradient-to-r from-blue-600 to-teal-600">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Step Detail
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Step Name</TableHead>
                    <TableHead>Plan Date</TableHead>
                    <TableHead>Done Date</TableHead>
                    <TableHead>Drug/Dosage</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {stepDetails.map((step) => (
                    <TableRow key={step.id}>
                      <TableCell className="font-medium">{step.stepName}</TableCell>
                      <TableCell>{step.planDate}</TableCell>
                      <TableCell>{step.doneDate || "-"}</TableCell>
                      <TableCell>
                        {step.drugName ? (
                          <div className="text-sm">
                            <div className="font-medium">{step.drugName}</div>
                            <div className="text-gray-500">{step.dosage}</div>
                          </div>
                        ) : "-"}
                      </TableCell>
                      <TableCell>
                        <Badge variant={getStatusColor(step.status)}>
                          {step.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Edit className="w-4 h-4" />
                          </Button>
                          {step.status === "In Progress" && (
                            <Button size="sm" className="bg-green-600 hover:bg-green-700">
                              <CheckCircle className="w-4 h-4" />
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="biosamples">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="flex items-center space-x-2">
                  <TestTube className="w-5 h-5 text-blue-600" />
                  <span>Bio Samples</span>
                </CardTitle>
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
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {bioSamples.map((sample) => (
                  <Card key={sample.id} className="border border-gray-200">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg flex items-center space-x-2">
                            <TestTube className="w-4 h-4 text-blue-600" />
                            <span>{sample.sampleName}</span>
                          </CardTitle>
                          <CardDescription>Type: {sample.type}</CardDescription>
                        </div>
                        <Badge variant={getStatusColor(sample.status)}>
                          {sample.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
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
                          <Thermometer className="w-4 h-4 mr-1" />
                          Check Temperature
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TreatmentPlanDetails;
