
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calendar, Clock, AlertCircle, X } from "lucide-react";

interface TreatmentPlanDetailsProps {
  treatmentPlan: any;
  onBack: () => void;
}

const TreatmentPlanDetails = ({ treatmentPlan, onBack }: TreatmentPlanDetailsProps) => {
  const [showChangeRequest, setShowChangeRequest] = useState(false);
  const [selectedStep, setSelectedStep] = useState<any>(null);

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

  const handleChangeRequest = (step: any, type: 'change' | 'cancel') => {
    setSelectedStep({ ...step, requestType: type });
    setShowChangeRequest(true);
  };

  const handleSubmitRequest = () => {
    console.log("Submitting change request for step:", selectedStep);
    setShowChangeRequest(false);
    setSelectedStep(null);
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
            <h2 className="text-2xl font-semibold text-gray-900">My Treatment Plan Details</h2>
            <p className="text-gray-600">{treatmentPlan.serviceName} with {treatmentPlan.doctorName}</p>
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

      {/* Step Details */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-blue-600" />
            <span>Treatment Schedule</span>
          </CardTitle>
          <CardDescription>
            You can request to change the date or cancel any planned step
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Step Name</TableHead>
                <TableHead>Planned Date</TableHead>
                <TableHead>Done Date</TableHead>
                <TableHead>Medication</TableHead>
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
                    {(step.status === "Planned" || step.status === "In Progress") && (
                      <div className="flex space-x-2">
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => handleChangeRequest(step, 'change')}
                        >
                          <Clock className="w-4 h-4 mr-1" />
                          Change Date
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => handleChangeRequest(step, 'cancel')}
                        >
                          <X className="w-4 h-4 mr-1" />
                          Cancel
                        </Button>
                      </div>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Change Request Modal */}
      <Dialog open={showChangeRequest} onOpenChange={setShowChangeRequest}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {selectedStep?.requestType === 'change' ? 'Request Date Change' : 'Request Cancellation'}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold">{selectedStep?.stepName}</h4>
              <p className="text-sm text-gray-600">Current date: {selectedStep?.planDate}</p>
            </div>
            
            {selectedStep?.requestType === 'change' && (
              <div>
                <Label>Preferred New Date</Label>
                <Input type="date" />
              </div>
            )}
            
            <div>
              <Label>Reason for {selectedStep?.requestType === 'change' ? 'Change' : 'Cancellation'}</Label>
              <Textarea placeholder="Please explain your reason..." />
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg flex items-start space-x-2">
              <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
              <div className="text-sm text-yellow-800">
                Your request will be reviewed by the doctor. You will be notified of the decision.
              </div>
            </div>
            
            <div className="flex space-x-3">
              <Button 
                variant="outline" 
                onClick={() => setShowChangeRequest(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button 
                onClick={handleSubmitRequest}
                className="flex-1 bg-gradient-to-r from-blue-600 to-teal-600"
              >
                Submit Request
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TreatmentPlanDetails;
