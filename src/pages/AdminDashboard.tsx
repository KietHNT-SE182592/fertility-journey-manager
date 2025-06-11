
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Settings, 
  Users, 
  Calendar, 
  FileText, 
  TestTube, 
  BarChart3, 
  TrendingUp, 
  User, 
  DollarSign, 
  Heart,
  UserCheck,
  Stethoscope,
  FileUser
} from "lucide-react";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from "recharts";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import DoctorManagement from "@/components/admin/DoctorManagement";
import BookingManagement from "@/components/admin/BookingManagement";
import PatientManagement from "@/components/admin/PatientManagement";
import PatientRecordManagement from "@/components/admin/PatientRecordManagement";
import ServiceManagement from "@/components/admin/ServiceManagement";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  // Sample data for charts
  const monthlyRevenue = [
    { month: 'T1', revenue: 2800000000 },
    { month: 'T2', revenue: 3200000000 },
    { month: 'T3', revenue: 2900000000 },
    { month: 'T4', revenue: 3800000000 },
    { month: 'T5', revenue: 3400000000 },
    { month: 'T6', revenue: 4100000000 }
  ];

  const treatmentDistribution = [
    { name: 'IVF', value: 45, color: '#3B82F6' },
    { name: 'IUI', value: 35, color: '#10B981' },
    { name: 'Xét nghiệm', value: 15, color: '#F59E0B' },
    { name: 'Khác', value: 5, color: '#EF4444' }
  ];

  const successRates = [
    { treatment: 'IVF', rate: 65 },
    { treatment: 'IUI', rate: 45 },
    { treatment: 'Đông lạnh trứng', rate: 85 }
  ];

  const upcomingAppointments = [
    { patient: 'Nguyễn Văn An - Trần Thị Bình', date: '2024-06-15', time: '09:00', type: 'Tư vấn' },
    { patient: 'Lê Văn Cường - Phạm Thị Dung', date: '2024-06-15', time: '10:30', type: 'Tái khám IVF' },
    { patient: 'Trần Văn Đức - Hoàng Thị Em', date: '2024-06-15', time: '14:00', type: 'Thủ thuật IUI' },
    { patient: 'Phạm Văn Giang - Vũ Thị Hoa', date: '2024-06-16', time: '11:00', type: 'Khám tư vấn' }
  ];

  const sidebarItems = [
    { title: "Bảng điều khiển", icon: BarChart3, value: "dashboard" },
    { title: "Quản lý Bác sĩ", icon: Stethoscope, value: "doctors" },
    { title: "Quản lý Đặt lịch", icon: Calendar, value: "bookings" },
    { title: "Quản lý Bệnh nhân", icon: Users, value: "patients" },
    { title: "Hồ sơ Bệnh nhân", icon: FileUser, value: "records" },
    { title: "Quản lý Dịch vụ", icon: TestTube, value: "services" },
    { title: "Báo cáo", icon: FileText, value: "reports" }
  ];

  const dashboardStats = [
    { title: "Tổng Bệnh nhân", value: "1,234", icon: Users, color: "bg-blue-500", change: "+12%" },
    { title: "Tổng Đặt lịch", value: "856", icon: Calendar, color: "bg-green-500", change: "+8%" },
    { title: "Doanh thu Tháng", value: "4.1 tỷ VNĐ", icon: DollarSign, color: "bg-yellow-500", change: "+15%" },
    { title: "Tỷ lệ Thành công", value: "68%", icon: TrendingUp, color: "bg-purple-500", change: "+3%" }
  ];

  const formatRevenue = (value: any) => {
    return `${(value / 1000000000).toFixed(1)} tỷ`;
  };

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
                <p className="text-xs text-slate-500">Admin Panel</p>
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
                <p className="text-xs text-slate-500">Administrator</p>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset className="flex-1">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b border-slate-200 px-6 bg-white/80 backdrop-blur-sm">
            <SidebarTrigger className="-ml-1" />
            <div className="flex-1">
              <h1 className="text-xl font-semibold text-slate-800">
                {sidebarItems.find(item => item.value === activeTab)?.title || "Bảng điều khiển"}
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
                      <CardTitle className="text-slate-800">Doanh thu theo Tháng</CardTitle>
                      <CardDescription>Biểu đồ doanh thu 6 tháng gần nhất</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={monthlyRevenue}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                          <XAxis dataKey="month" stroke="#64748b" />
                          <YAxis stroke="#64748b" tickFormatter={formatRevenue} />
                          <Tooltip 
                            contentStyle={{ 
                              backgroundColor: 'white', 
                              border: '1px solid #e2e8f0',
                              borderRadius: '8px',
                              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                            }}
                            formatter={(value: any) => [`${formatRevenue(value)} VNĐ`, 'Doanh thu']}
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
                      <CardTitle className="text-slate-800">Phân bố Dịch vụ</CardTitle>
                      <CardDescription>Tỷ lệ các loại điều trị</CardDescription>
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
                          <Tooltip formatter={(value) => [`${value}%`, 'Tỷ lệ']} />
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
                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Success Rates */}
                  <Card className="border-0 shadow-sm bg-white/60 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-slate-800">Tỷ lệ Thành công</CardTitle>
                      <CardDescription>Tỷ lệ thành công các phương pháp điều trị</CardDescription>
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
                            formatter={(value) => [`${value}%`, 'Tỷ lệ thành công']}
                          />
                          <Bar dataKey="rate" fill="#10B981" radius={4} />
                        </BarChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>

                  {/* Upcoming Appointments */}
                  <Card className="border-0 shadow-sm bg-white/60 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-slate-800">Lịch hẹn Sắp tới</CardTitle>
                      <CardDescription>Các cuộc hẹn trong ngày hôm nay</CardDescription>
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
                </div>
              </>
            )}

            {activeTab === "doctors" && <DoctorManagement />}
            {activeTab === "bookings" && <BookingManagement />}
            {activeTab === "patients" && <PatientManagement />}
            {activeTab === "records" && <PatientRecordManagement />}
            {activeTab === "services" && <ServiceManagement />}
            
            {activeTab === "reports" && (
              <Card className="border-0 shadow-sm bg-white/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-slate-800">Báo cáo Thống kê</CardTitle>
                  <CardDescription>
                    Phần báo cáo đang trong quá trình phát triển. Các tính năng báo cáo chi tiết sẽ được cung cấp sớm.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Settings className="h-8 w-8 text-slate-400" />
                    </div>
                    <p className="text-slate-600">Đang phát triển</p>
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

export default AdminDashboard;
