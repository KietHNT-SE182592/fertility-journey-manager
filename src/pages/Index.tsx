
import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Doctors from "@/components/Doctors";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import CustomerSidebar from "@/components/customer/CustomerSidebar";
import ProfileManagement from "@/components/customer/ProfileManagement";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Index = () => {
  // Simulate login state - in real app this would come from auth context
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderCustomerContent = () => {
    switch (activeSection) {
      case "profile":
        return <ProfileManagement />;
      case "appointments":
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">My Appointments</h2>
            <p>Your scheduled appointments will appear here...</p>
          </div>
        );
      case "treatments":
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">My Treatment Plans</h2>
            <p>Your treatment plans will appear here...</p>
          </div>
        );
      case "tests":
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">My Test Results</h2>
            <p>Your test results will appear here...</p>
          </div>
        );
      case "home":
      default:
        return (
          <div className="min-h-screen">
            <Hero />
            <Services />
            <Doctors />
            <Blog />
          </div>
        );
    }
  };

  if (isLoggedIn && userRole === "customer") {
    return (
      <SidebarProvider>
        <div className="min-h-screen flex w-full">
          {/* Toggle Button */}
          <Button
            variant="outline"
            size="sm"
            className="fixed top-4 left-4 z-50 bg-white shadow-lg"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </Button>

          {/* Sidebar */}
          <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out fixed left-0 top-0 h-full z-40`}>
            <CustomerSidebar 
              activeSection={activeSection} 
              onSectionChange={setActiveSection} 
            />
          </div>

          {/* Main Content */}
          <div className="flex-1 overflow-auto">
            <Header />
            {renderCustomerContent()}
            <Footer />
          </div>
        </div>
      </SidebarProvider>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Doctors />
      <Blog />
      <Footer />
    </div>
  );
};

export default Index;
