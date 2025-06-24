
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings, Users, Calendar, FileText, Star, TestTube, BarChart3, TrendingUp, User, DollarSign, Heart } from "lucide-react";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from "recharts";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import ServiceManagement from "@/components/manager/ServiceManagement";
import BlogManagement from "@/components/manager/BlogManagement";
import DoctorManagement from "@/components/manager/DoctorManagement";
import DoctorScheduleManagement from "@/components/manager/DoctorScheduleManagement";
import FeedbackManagement from "@/components/manager/FeedbackManagement";

const ManagerDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  // Sample data for charts
  const monthlyRevenue = [
    { month: 'Jan', revenue: 45000 },
    { month: 'Feb', revenue: 52000 },
    { month: 'Mar', revenue: 48000 },
    { month: 'Apr', revenue: 61000 },
    { month: 'May', revenue: 55000 },
    { month: 'Jun', revenue: 67000 },
    { month: 'Jul', revenue: 70000 },
    { month: 'Aug', revenue: 62000 },
    { month: 'Sep', revenue: 58000 },
    { month: 'Oct', revenue: 65000 },
    { month: 'Nov', revenue: 73000 },
    { month: 'Dec', revenue: 78000 }
  ];

  const treatmentDistribution = [
    { name: 'IVF', value: 45, color: '#3B82F6' },
    { name: 'IUI', value: 35, color: '#10B981' },
    { name: 'Other', value: 20, color: '#F59E0B' }
  ];

  const successRates = [
    { treatment: 'IVF', rate: 65 },
    { treatment: 'IUI', rate: 45 }
  ];

  const upcomingAppointments = [
    { patient: 'Sarah Johnson', date: '2024-06-03', time: '09:00 AM', type: 'Consultation' },
    { patient: 'Maria Garcia', date: '2024-06-03', time: '10:30 AM', type: 'IVF Follow-up' },
    { patient: 'Emma Wilson', date: '2024-06-03', time: '02:00 PM', type: 'IUI Procedure' },
    { patient: 'Lisa Chen', date: '2024-06-04', time: '11:00 AM', type: 'Consultation' }
  ];

  const sidebarItems = [
    { title: "Dashboard", icon: BarChart3, value: "dashboard" },
    { title: "Appointments", icon: Calendar, value: "appointments" },
    { title: "Patients", icon: Users, value: "patients" },
    { title: "Doctors", icon: User, value: "doctors" },
    { title: "Reports", icon: FileText, value: "reports" },
    { title: "Services", icon: TestTube, value: "services" },
    { title: "Blogs", icon: FileText, value: "blogs" },
    { title: "Schedules", icon: Calendar, value: "schedules" },
    { title: "Feedback", icon: Star, value: "feedback" }
  ];

  const dashboardStats = [
    { title: "Total Customers", value: "1,234", icon: Users, color: "bg-blue-500", change: "+12%" },
    { title: "Total Bookings", value: "856", icon: Calendar, color: "bg-green-500", change: "+8%" },
    { title: "Total Revenue", value: "$734,000", icon: DollarSign, color: "bg-yellow-500", change: "+15%" },
    { title: "Success Rate", value: "68%", icon: TrendingUp, color: "bg-purple-500", change: "+3%" }
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-slate-50 to-blue-50">
        <Sidebar className="border-r border-slate-200">
          <SidebarHeader className="p-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-slate-800">FertilityCare</h2>
                <p className="text-xs text-slate-500">Management System</p>
              </div>
            </div>
          </SidebarHeader>
          
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {sidebarItems.map((item) => (
                    <SidebarMenuItem key={item.value}>
                      <SidebarMenuButton 
                        onClick={() => setActiveTab(item.value)}
                        isActive={activeTab === item.value}
                        className="w-full"
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          
          <SidebarFooter className="p-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-slate-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-800">Admin User</p>
                <p className="text-xs text-slate-500">Manager</p>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset className="flex-1">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b border-slate-200 px-6 bg-white/80 backdrop-blur-sm">
            <SidebarTrigger className="-ml-1" />
            <div className="flex-1">
              <h1 className="text-xl font-semibold text-slate-800">
                {sidebarItems.find(item => item.value === activeTab)?.title || "Dashboard"}
              </h1>
            </div>
          </header>

          <main className="flex-1 p-6 space-y-6">
            {activeTab === "dashboard" && (
              <>
                {/* Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {dashboardStats.map((stat, index) => (
                    <Card key={index} className="border-0 shadow-sm bg-white/60 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-slate-600">{stat.title}</p>
                            <p className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</p>
                            <p className="text-sm text-green-600 font-medium mt-1">{stat.change}</p>
                          </div>
                          <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center`}>
                            <stat.icon className="h-6 w-6 text-white" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Charts Row */}
                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Revenue Chart */}
                  <Card className="lg:col-span-2 border-0 shadow-sm bg-white/60 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-slate-800">Monthly Revenue Trend</CardTitle>
                      <CardDescription>Revenue performance over the year</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={monthlyRevenue}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                          <XAxis dataKey="month" stroke="#64748b" />
                          <YAxis stroke="#64748b" />
                          <Tooltip 
                            contentStyle={{ 
                              backgroundColor: 'white', 
                              border: '1px solid #e2e8f0',
                              borderRadius: '8px',
                              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                            }}
                            formatter={(value) => [`$${value?.toLocaleString()}`, 'Revenue']}
                          />
                          <Line 
                            type="monotone" 
                            dataKey="revenue" 
                            stroke="#3B82F6" 
                            strokeWidth={3}
                            dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>

                  {/* Treatment Distribution */}
                  <Card className="border-0 shadow-sm bg-white/60 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-slate-800">Treatment Services</CardTitle>
                      <CardDescription>Distribution of treatments</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                          <Pie
                            data={treatmentDistribution}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={100}
                            paddingAngle={5}
                            dataKey="value"
                          >
                            {treatmentDistribution.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                        </PieChart>
                      </ResponsiveContainer>
                      <div className="flex justify-center space-x-4 mt-4">
                        {treatmentDistribution.map((item, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                            <span className="text-sm text-slate-600">{item.name}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Bottom Row */}
                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Success Rates */}
                  <Card className="border-0 shadow-sm bg-white/60 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-slate-800">Success Rates</CardTitle>
                      <CardDescription>Treatment success percentages</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={200}>
                        <BarChart data={successRates}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                          <XAxis dataKey="treatment" stroke="#64748b" />
                          <YAxis stroke="#64748b" />
                          <Tooltip 
                            contentStyle={{ 
                              backgroundColor: 'white', 
                              border: '1px solid #e2e8f0',
                              borderRadius: '8px'
                            }}
                            formatter={(value) => [`${value}%`, 'Success Rate']}
                          />
                          <Bar dataKey="rate" fill="#10B981" radius={4} />
                        </BarChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>

                  {/* Upcoming Appointments */}
                  <Card className="border-0 shadow-sm bg-white/60 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-slate-800">Upcoming Appointments</CardTitle>
                      <CardDescription>Next appointments scheduled</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {upcomingAppointments.slice(0, 4).map((appointment, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                            <div>
                              <p className="font-medium text-slate-800">{appointment.patient}</p>
                              <p className="text-sm text-slate-600">{appointment.type}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-medium text-slate-800">{appointment.time}</p>
                              <p className="text-xs text-slate-500">{appointment.date}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Top Doctor & Feedback */}
                  <div className="space-y-6">
                    {/* Top Rated Doctor */}
                    <Card className="border-0 shadow-sm bg-white/60 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="text-slate-800">Top Rated Doctor</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center">
                            <User className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <p className="font-medium text-slate-800">Dr. Sarah Johnson</p>
                            <p className="text-sm text-slate-600">Fertility Specialist</p>
                            <div className="flex items-center mt-1">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              ))}
                              <span className="text-sm text-slate-600 ml-2">4.9 (127 reviews)</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Feedback Summary */}
                    <Card className="border-0 shadow-sm bg-white/60 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="text-slate-800">Feedback Summary</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-center">
                          <div className="flex justify-center items-center space-x-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <p className="text-2xl font-bold text-slate-800">4.8</p>
                          <p className="text-sm text-slate-600">Average Rating</p>
                          <p className="text-xs text-slate-500 mt-1">Based on 342 reviews</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </>
            )}

            {activeTab === "services" && <ServiceManagement />}
            {activeTab === "blogs" && <BlogManagement />}
            {activeTab === "doctors" && <DoctorManagement />}
            {activeTab === "schedules" && <DoctorScheduleManagement />}
            {activeTab === "feedback" && <FeedbackManagement />}
            
            {(activeTab === "appointments" || activeTab === "patients" || activeTab === "reports") && (
              <Card className="border-0 shadow-sm bg-white/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-slate-800">
                    {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Management
                  </CardTitle>
                  <CardDescription>
                    This section is under development. Advanced {activeTab} management features will be available soon.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Settings className="h-8 w-8 text-slate-400" />
                    </div>
                    <p className="text-slate-600">Coming Soon</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default ManagerDashboard;
