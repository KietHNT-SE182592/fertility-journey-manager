
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, TestTube, Users, FileText, Clock, Plus } from "lucide-react";
import TestManagement from "@/components/doctor/TestManagement";
import TreatmentPlanManagement from "@/components/doctor/TreatmentPlanManagement";
import BioSampleManagement from "@/components/doctor/BioSampleManagement";
import ScheduleManagement from "@/components/doctor/ScheduleManagement";

const DoctorDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const dashboardStats = [
    { title: "Active Patients", value: "24", icon: Users, color: "blue" },
    { title: "Pending Tests", value: "8", icon: TestTube, color: "yellow" },
    { title: "Today's Appointments", value: "6", icon: Calendar, color: "green" },
    { title: "Treatment Plans", value: "18", icon: FileText, color: "purple" }
  ];

  const recentActivities = [
    { id: 1, type: "test", patient: "Emma Johnson", action: "Test results reviewed", time: "2 hours ago" },
    { id: 2, type: "treatment", patient: "Mike Wilson", action: "Treatment plan updated", time: "4 hours ago" },
    { id: 3, type: "appointment", patient: "Sarah Davis", action: "Appointment completed", time: "6 hours ago" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Doctor Dashboard</h1>
          <p className="text-gray-600">Manage your patients and treatments</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="tests">Tests</TabsTrigger>
            <TabsTrigger value="treatments">Treatment Plans</TabsTrigger>
            <TabsTrigger value="biosamples">Bio Samples</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
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
          </TabsContent>

          <TabsContent value="tests">
            <TestManagement />
          </TabsContent>

          <TabsContent value="treatments">
            <TreatmentPlanManagement />
          </TabsContent>

          <TabsContent value="biosamples">
            <BioSampleManagement />
          </TabsContent>

          <TabsContent value="schedule">
            <ScheduleManagement />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DoctorDashboard;
