
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { TestTube, Plus, Search, Calendar } from "lucide-react";

const TestManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showCreateTest, setShowCreateTest] = useState(false);

  const tests = [
    {
      id: 1,
      patientName: "Emma & John Johnson",
      testType: "Hormone Panel",
      testDate: "2024-02-15",
      status: "Pending Payment",
      results: ""
    },
    {
      id: 2,
      patientName: "Sarah & Mike Davis",
      testType: "Sperm Analysis",
      testDate: "2024-02-10",
      status: "Completed",
      results: "Normal parameters, good motility"
    },
    {
      id: 3,
      patientName: "Lisa & Tom Wilson",
      testType: "Ultrasound",
      testDate: "2024-02-12",
      status: "Pending Payment",
      results: ""
    }
  ];

  const handleCreateTest = () => {
    console.log("Creating new test");
    setShowCreateTest(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Test Management</h2>
          <p className="text-gray-600">Manage patient tests and results</p>
        </div>
        <Dialog open={showCreateTest} onOpenChange={setShowCreateTest}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-blue-600 to-teal-600">
              <Plus className="w-4 h-4 mr-2" />
              Create Test
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Test</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label>Patient</Label>
                <Input placeholder="Select patient..." />
              </div>
              <div>
                <Label>Test Type</Label>
                <Input placeholder="Enter test type..." />
              </div>
              <div>
                <Label>Test Date</Label>
                <Input type="date" />
              </div>
              <div>
                <Label>Notes</Label>
                <Textarea placeholder="Additional notes..." />
              </div>
              <Button onClick={handleCreateTest} className="w-full">
                Create Test (Pending Patient Payment)
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search tests..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="grid gap-6">
        {tests.map((test) => (
          <Card key={test.id} className="border-0 shadow-lg">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{test.patientName}</CardTitle>
                  <CardDescription>{test.testType}</CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant={test.status === "Completed" ? "default" : "secondary"}>
                    {test.status}
                  </Badge>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {test.testDate}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {test.results ? (
                  <div>
                    <Label className="text-sm font-medium">Test Results</Label>
                    <p className="text-gray-700 mt-1">{test.results}</p>
                  </div>
                ) : (
                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <p className="text-yellow-800 text-sm">
                      Waiting for patient payment confirmation to proceed with test.
                    </p>
                  </div>
                )}
                
                <div className="flex space-x-3">
                  {test.status === "Completed" ? (
                    <Button variant="outline" size="sm">
                      View Full Results
                    </Button>
                  ) : (
                    <Button size="sm" disabled>
                      Pending Payment
                    </Button>
                  )}
                  <Button variant="ghost" size="sm">
                    Contact Patient
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TestManagement;
