
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, TestTube, Users, FileText, Clock, Plus, LogOut, User, Menu, X } from "lucide-react";
import TestManagement from "@/components/doctor/TestManagement";
import TreatmentPlanManagement from "@/components/doctor/TreatmentPlanManagement";
import ScheduleManagement from "@/components/doctor/ScheduleManagement";
import DoctorProfileManagement from "@/components/doctor/DoctorProfileManagement";

const DoctorDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleLogout = () => {
    console.log("Logging out...");
    window.location.href = "/";
  };

  const dashboardStats = [
    { title: "Active Patients", value: "24", icon: Users, color: "blue" },
    { title: "Pending Tests", value: "8", icon: TestTube, color: "yellow" },
    { title: "Today's Appointments", value: "6", icon: Calendar, color: "green" },
    { title: "Treatment Plans", value: "18", icon: FileText, color: "purple" }
  ];

  const navigationItems = [
    { id: "overview", label: "Overview", icon: Users },
    { id: "tests", label: "Tests", icon: TestTube },
    { id: "treatments", label: "Treatment Plans", icon: FileText },
    { id: "schedule", label: "Schedule", icon: Calendar },
    { id: "profile", label: "Manage Profile", icon: User }
  ];

  const recentActivities = [
    { id: 1, type: "test", patient: "Emma Johnson", action: "Test results reviewed", time: "2 hours ago" },
    { id: 2, type: "treatment", patient: "Mike Wilson", action: "Treatment plan updated", time: "4 hours ago" },
    { id: 3, type: "appointment", patient: "Sarah Davis", action: "Appointment completed", time: "6 hours ago" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 flex">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-16'} transition-all duration-300 bg-white shadow-lg flex flex-col`}>
        <div className="p-4 border-b">
          <div className="flex items-center justify-between">
            {sidebarOpen && (
              <div>
                <h2 className="font-bold text-lg">FertileCare</h2>
                <p className="text-sm text-gray-500">Doctor Portal</p>
              </div>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        <nav className="flex-1 p-4">
          <div className="space-y-2">
            {navigationItems.map((item) => (
              <Button
                key={item.id}
                variant={activeTab === item.id ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab(item.id)}
              >
                <item.icon className="w-4 h-4" />
                {sidebarOpen && <span className="ml-2">{item.label}</span>}
              </Button>
            ))}
          </div>
        </nav>

        <div className="p-4 border-t">
          <Button
            variant="outline"
            onClick={handleLogout}
            className="w-full justify-start"
          >
            <LogOut className="w-4 h-4" />
            {sidebarOpen && <span className="ml-2">Logout</span>}
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Doctor Dashboard</h1>
              <p className="text-gray-600">Manage your patients and treatments</p>
            </div>
          </div>

          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Stats Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {dashboardStats.map((stat, index) => (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                      <stat.icon className={`h-4 w-4 text-${stat.color}-600`} />
                    </CardHeader>
                    <CardContent>
                      <div className={`text-2xl font-bold text-${stat.color}-600`}>{stat.value}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Recent Activities */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Recent Activities</CardTitle>
                  <CardDescription>Latest updates on your patients</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map((activity) => (
                      <div key={activity.id} className="flex items-center space-x-4 p-4 bg-white rounded-lg border">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <div className="flex-1">
                          <p className="font-medium">{activity.patient}</p>
                          <p className="text-sm text-gray-600">{activity.action}</p>
                        </div>
                        <div className="text-sm text-gray-500">{activity.time}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "tests" && <TestManagement />}
          {activeTab === "treatments" && <TreatmentPlanManagement />}
          {activeTab === "schedule" && <ScheduleManagement />}
          {activeTab === "profile" && <DoctorProfileManagement />}
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
