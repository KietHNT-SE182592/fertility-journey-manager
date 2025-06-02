
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
import { Calendar, Plus, Edit, CheckCircle, Clock } from "lucide-react";

interface TreatmentPlanDetailsProps {
  treatmentPlan: any;
  onBack: () => void;
}

const TreatmentPlanDetails = ({ treatmentPlan, onBack }: TreatmentPlanDetailsProps) => {
  const [showCreateStep, setShowCreateStep] = useState(false);
  const [showUpdateStep, setShowUpdateStep] = useState(false);

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

  const handleCreateStep = () => {
    console.log("Creating step detail");
    setShowCreateStep(false);
  };

  const handleUpdateCurrentStep = () => {
    console.log("Updating current step");
    setShowUpdateStep(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "default";
      case "In Progress": return "secondary";
      case "Planned": return "outline";
      default: return "outline";
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
        <div className="flex space-x-3">
          <Dialog open={showUpdateStep} onOpenChange={setShowUpdateStep}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-green-600 to-emerald-600">
                Update Current Step
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Update Current Treatment Step</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label>Current Step</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select current step..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Initial Consultation</SelectItem>
                      <SelectItem value="2">Ovarian Stimulation</SelectItem>
                      <SelectItem value="3">Egg Retrieval</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button onClick={handleUpdateCurrentStep} className="w-full">
                  Update Current Step
                </Button>
              </div>
            </DialogContent>
          </Dialog>
          
          <Dialog open={showCreateStep} onOpenChange={setShowCreateStep}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-blue-600 to-teal-600">
                <Plus className="w-4 h-4 mr-2" />
                Add Step Detail
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Step Detail</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label>Step Name</Label>
                  <Input placeholder="Enter step name..." />
                </div>
                <div>
                  <Label>Plan Date</Label>
                  <Input type="date" />
                </div>
                <div>
                  <Label>Drug Name (Optional)</Label>
                  <Input placeholder="Enter drug name..." />
                </div>
                <div>
                  <Label>Dosage (Optional)</Label>
                  <Input placeholder="Enter dosage..." />
                </div>
                <div>
                  <Label>Note</Label>
                  <Textarea placeholder="Enter step details..." />
                </div>
                <Button onClick={handleCreateStep} className="w-full">
                  Add Step Detail
                </Button>
              </div>
            </DialogContent>
          </Dialog>
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

      {/* Step Details */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-blue-600" />
            <span>Treatment Steps</span>
          </CardTitle>
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
    </div>
  );
};

export default TreatmentPlanDetails;
