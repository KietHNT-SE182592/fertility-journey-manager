
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Plus, Search, Calendar, User, TestTube, ArrowLeft } from "lucide-react";
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
      progress: 60,
      bioSamples: [
        {
          id: 1,
          name: "Embryo Sample #001",
          type: "Embryo",
          quality: "Grade A",
          status: "Stored",
          location: "Tank A-001"
        }
      ]
    },
    {
      id: 2,
      patientName: "Sarah & Mike Davis",
      service: "IUI Treatment",
      startDate: "2024-02-01",
      currentStep: "Pending Patient Confirmation",
      status: "Pending",
      progress: 0,
      bioSamples: []
    },
    {
      id: 3,
      patientName: "Lisa & Tom Wilson",
      service: "IVF Treatment",
      startDate: "2023-11-15",
      currentStep: "Treatment Complete",
      status: "Completed",
      progress: 100,
      bioSamples: [
        {
          id: 2,
          name: "Sperm Sample #045",
          type: "Sperm",
          quality: "Good",
          status: "Used",
          location: "Tank B-012"
        }
      ]
    }
  ];

  const handleCreatePlan = () => {
    console.log("Creating treatment plan");
    setShowCreatePlan(false);
  };

  const handleViewDetails = (plan: any) => {
    setSelectedPlan(plan);
  };

  const filterPlansByStatus = (status: string) => {
    return treatmentPlans.filter(plan => {
      if (status === "in-progress") return plan.status === "In Progress";
      if (status === "completed") return plan.status === "Completed";
      if (status === "pending") return plan.status === "Pending";
      return false;
    });
  };

  const renderPlanCard = (plan: any) => (
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

          {plan.bioSamples.length > 0 && (
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <TestTube className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium">Bio Samples: {plan.bioSamples.length}</span>
              </div>
              <div className="text-xs text-gray-600">
                {plan.bioSamples.map(sample => sample.name).join(", ")}
              </div>
            </div>
          )}

          <div className="flex space-x-3">
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-blue-600 to-teal-600"
              onClick={() => handleViewDetails(plan)}
            >
              View Details & Manage Bio Samples
            </Button>
            {plan.status === "Pending" && (
              <Button variant="outline" size="sm">
                Contact Patient
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );

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
              <Button onClick={() => setShowCreatePlan(false)} className="w-full">
                Create Plan (Pending Patient Confirmation)
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="in-progress" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="in-progress">In Progress ({filterPlansByStatus("in-progress").length})</TabsTrigger>
          <TabsTrigger value="completed">Completed ({filterPlansByStatus("completed").length})</TabsTrigger>
          <TabsTrigger value="pending">Pending ({filterPlansByStatus("pending").length})</TabsTrigger>
        </TabsList>

        <TabsContent value="in-progress" className="space-y-4">
          {filterPlansByStatus("in-progress").map(renderPlanCard)}
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          {filterPlansByStatus("completed").map(renderPlanCard)}
        </TabsContent>

        <TabsContent value="pending" className="space-y-4">
          {filterPlansByStatus("pending").map(renderPlanCard)}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TreatmentPlanManagement;
