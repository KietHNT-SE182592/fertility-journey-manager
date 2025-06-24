
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Heart, Plus, Search, Calendar, User } from "lucide-react";
import TreatmentPlanDetails from "./TreatmentPlanDetails";

const TreatmentPlanManagement = () => {
  const [showCreatePlan, setShowCreatePlan] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);

  const treatmentPlans = [
    {
      id: 1,
      patientName: "Emma & John Johnson",
      service: "IVF Treatment",
      startDate: "2024-01-15",
      currentStep: "Ovarian Stimulation",
      status: "In Progress",
      progress: 60
    },
    {
      id: 2,
      patientName: "Sarah & Mike Davis",
      service: "IUI Treatment",
      startDate: "2024-02-01",
      currentStep: "Pending Patient Confirmation",
      status: "Pending Confirmation",
      progress: 0
    },
    {
      id: 3,
      patientName: "Lisa & Tom Wilson",
      service: "IVF Treatment",
      startDate: "2023-11-15",
      currentStep: "Treatment Complete",
      status: "Completed",
      progress: 100
    }
  ];

  const handleCreatePlan = () => {
    console.log("Creating treatment plan");
    setShowCreatePlan(false);
  };

  const handleViewDetails = (plan: any) => {
    setSelectedPlan(plan);
  };

  if (selectedPlan) {
    return (
      <TreatmentPlanDetails 
        treatmentPlan={selectedPlan} 
        onBack={() => setSelectedPlan(null)} 
      />
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Treatment Plans</h2>
          <p className="text-gray-600">Manage patient treatment plans and progress</p>
        </div>
        <Dialog open={showCreatePlan} onOpenChange={setShowCreatePlan}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-blue-600 to-teal-600">
              <Plus className="w-4 h-4 mr-2" />
              Create Treatment Plan
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create New Treatment Plan</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label>Patient</Label>
                  <Input placeholder="Select patient..." />
                </div>
                <div>
                  <Label>Service</Label>
                  <Input placeholder="Select service..." />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label>Start Date</Label>
                  <Input type="date" />
                </div>
                <div>
                  <Label>Expected End Date</Label>
                  <Input type="date" />
                </div>
              </div>
              <div>
                <Label>Treatment Notes</Label>
                <Textarea placeholder="Initial treatment notes and plan..." />
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 text-sm">
                  The treatment plan will be sent to the patient for confirmation and payment before becoming active.
                </p>
              </div>
              <Button onClick={handleCreatePlan} className="w-full">
                Create Plan (Pending Patient Confirmation)
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-6">
        {treatmentPlans.map((plan) => (
          <Card key={plan.id} className="border-0 shadow-lg">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <User className="w-5 h-5 text-blue-600" />
                    <span>{plan.patientName}</span>
                  </CardTitle>
                  <CardDescription>{plan.service}</CardDescription>
                </div>
                <div className="flex flex-col items-end space-y-2">
                  <Badge variant={
                    plan.status === "Completed" ? "default" : 
                    plan.status === "In Progress" ? "secondary" : "outline"
                  }>
                    {plan.status}
                  </Badge>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    Started: {plan.startDate}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Current Step</span>
                    <span className="text-blue-600 font-semibold">{plan.progress}%</span>
                  </div>
                  <p className="text-gray-700 mb-2">{plan.currentStep}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${plan.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex space-x-3">
                  {plan.status === "In Progress" ? (
                    <>
                      <Button 
                        size="sm" 
                        className="bg-gradient-to-r from-blue-600 to-teal-600"
                        onClick={() => handleViewDetails(plan)}
                      >
                        Manage Treatment Details
                      </Button>
                      <Button variant="outline" size="sm">
                        Contact Patient
                      </Button>
                    </>
                  ) : plan.status === "Pending Confirmation" ? (
                    <>
                      <Button size="sm" disabled>
                        Pending Patient Confirmation
                      </Button>
                      <Button variant="outline" size="sm">
                        Contact Patient
                      </Button>
                    </>
                  ) : (
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleViewDetails(plan)}
                    >
                      View Completed Plan
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TreatmentPlanManagement;
