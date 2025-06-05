
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, TestTube, Heart, Star, FileText, Clock, CreditCard, Home as HomeIcon } from "lucide-react";
import { SidebarProvider } from "@/components/ui/sidebar";
import CustomerSidebar from "@/components/customer/CustomerSidebar";
import ProfileManagement from "@/components/customer/ProfileManagement";
import PaymentHistory from "@/components/customer/PaymentHistory";
import FeedbackModal from "@/components/customer/FeedbackModal";
import TreatmentPlanDetails from "@/components/customer/TreatmentPlanDetails";

const CustomerDashboard = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [showFeedback, setShowFeedback] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState<any>(null);
  const [selectedPlanForDetails, setSelectedPlanForDetails] = useState<any>(null);

  const handleLogout = () => {
    console.log("Customer logged out");
    // In a real app, this would clear auth state and redirect
    window.location.href = "/";
  };

  const treatmentPlans = [
    {
      id: 1,
      serviceName: "IVF Treatment",
      doctorName: "Dr. Sarah Johnson",
      startDate: "2024-01-15",
      endDate: "2024-03-15",
      status: "In Progress",
      currentStep: "Ovarian Stimulation",
      progress: 60
    },
    {
      id: 2,
      serviceName: "IUI Treatment",
      doctorName: "Dr. Michael Chen",
      startDate: "2023-11-01",
      endDate: "2023-12-15",
      status: "Completed",
      currentStep: "Treatment Complete",
      progress: 100
    }
  ];

  const testResults = [
    {
      id: 1,
      testName: "Hormone Panel - Wife",
      testDate: "2024-02-10",
      result: "Normal ranges detected",
      status: "Completed"
    },
    {
      id: 2,
      testName: "Sperm Analysis - Husband",
      testDate: "2024-02-08",
      result: "Good motility and count",
      status: "Completed"
    },
    {
      id: 3,
      testName: "Ultrasound Follow-up",
      testDate: "2024-02-15",
      result: "Pending",
      status: "Scheduled"
    }
  ];

  const handleFeedback = (treatment: any) => {
    setSelectedTreatment(treatment);
    setShowFeedback(true);
  };

  const handleViewPlanDetails = (plan: any) => {
    setSelectedPlanForDetails(plan);
  };

  const renderHomeContent = () => (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to Your Fertility Journey</h1>
        <p className="text-gray-600">Track your treatment progress and manage your health information</p>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Heart className="w-5 h-5 text-red-500" />
              <span>Active Treatments</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600">1</div>
            <p className="text-gray-600">Currently in progress</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TestTube className="w-5 h-5 text-blue-500" />
              <span>Completed Tests</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">2</div>
            <p className="text-gray-600">Results available</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-purple-500" />
              <span>Next Appointment</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold text-purple-600">Feb 20, 2024</div>
            <p className="text-gray-600">Follow-up consultation</p>
          </CardContent>
        </Card>
      </div>

      {/* Current Treatment Progress */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle>Current Treatment Progress</CardTitle>
          <CardDescription>IVF Treatment with Dr. Sarah Johnson</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-medium">Treatment Progress</span>
              <span className="text-blue-600 font-semibold">60%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '60%' }}></div>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Started: Jan 15, 2024</span>
              <span>Expected completion: Mar 15, 2024</span>
            </div>
            <div className="mt-4">
              <Badge className="bg-blue-100 text-blue-700">Current Step: Ovarian Stimulation</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderAppointmentsContent = () => (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Appointments</h2>
      <p>Your scheduled appointments will appear here...</p>
    </div>
  );

  const renderTreatmentsContent = () => {
    if (selectedPlanForDetails) {
      return (
        <TreatmentPlanDetails 
          treatmentPlan={selectedPlanForDetails} 
          onBack={() => setSelectedPlanForDetails(null)} 
        />
      );
    }

    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">My Treatment Plans</h2>
        {treatmentPlans.map((plan) => (
          <Card key={plan.id} className="border-0 shadow-lg">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">{plan.serviceName}</CardTitle>
                  <CardDescription>Dr. {plan.doctorName}</CardDescription>
                </div>
                <div className="flex flex-col items-end space-y-2">
                  <Badge variant={plan.status === "Completed" ? "default" : "secondary"}>
                    {plan.status}
                  </Badge>
                  {plan.status === "Completed" && (
                    <Button 
                      size="sm" 
                      onClick={() => handleFeedback(plan)}
                      className="bg-gradient-to-r from-blue-600 to-teal-600"
                    >
                      <Star className="w-4 h-4 mr-1" />
                      Rate & Review
                    </Button>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-600">Start Date</p>
                  <p className="font-semibold">{plan.startDate}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">End Date</p>
                  <p className="font-semibold">{plan.endDate}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Current Step</p>
                  <p className="font-semibold">{plan.currentStep}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Progress</p>
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${plan.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-semibold">{plan.progress}%</span>
                  </div>
                </div>
              </div>
              <Button 
                onClick={() => handleViewPlanDetails(plan)}
                className="bg-gradient-to-r from-blue-600 to-teal-600"
              >
                <FileText className="w-4 h-4 mr-2" />
                View Treatment Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  const renderTestsContent = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">My Test Results</h2>
      {testResults.map((test) => (
        <Card key={test.id} className="border-0 shadow-lg">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-lg">{test.testName}</CardTitle>
                <CardDescription>Performed on {test.testDate}</CardDescription>
              </div>
              <Badge variant={test.status === "Completed" ? "default" : "secondary"}>
                {test.status}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div>
              <p className="text-sm text-gray-600 mb-2">Result</p>
              <p className="font-semibold">{test.result}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case "home":
        return renderHomeContent();
      case "profile":
        return <ProfileManagement />;
      case "appointments":
        return renderAppointmentsContent();
      case "treatments":
        return renderTreatmentsContent();
      case "tests":
        return renderTestsContent();
      case "payments":
        return <PaymentHistory />;
      default:
        return renderHomeContent();
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-blue-50 to-teal-50">
        {/* Left Navigation Sidebar */}
        <CustomerSidebar 
          activeSection={activeSection} 
          onSectionChange={setActiveSection}
          onLogout={handleLogout}
        />

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <div className="container mx-auto px-4 py-8">
            {renderContent()}
          </div>
        </div>
      </div>

      {/* Feedback Modal */}
      {showFeedback && (
        <FeedbackModal
          treatment={selectedTreatment}
          onClose={() => setShowFeedback(false)}
          onSubmit={(feedback) => {
            console.log('Feedback submitted:', feedback);
            setShowFeedback(false);
          }}
        />
      )}
    </SidebarProvider>
  );
};

export default CustomerDashboard;
