
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

const Index = () => {
  // Simulate login state - in real app this would come from auth context
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState("appointments");

  // Simulate customer login - in real app this would be handled by auth
  const handleCustomerLogin = () => {
    setIsLoggedIn(true);
    setUserRole("customer");
  };

  const renderCustomerContent = () => {
    switch (activeSection) {
      case "profile":
        return <ProfileManagement />;
      case "appointments":
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Appointments</h2>
            <p>Appointment management content will be here...</p>
          </div>
        );
      case "treatments":
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Treatment Plans</h2>
            <p>Treatment plans content will be here...</p>
          </div>
        );
      case "tests":
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Test Results</h2>
            <p>Test results content will be here...</p>
          </div>
        );
      default:
        return null;
    }
  };

  if (isLoggedIn && userRole === "customer") {
    return (
      <SidebarProvider>
        <div className="min-h-screen flex w-full">
          <CustomerSidebar 
            activeSection={activeSection} 
            onSectionChange={setActiveSection} 
          />
          <SidebarInset>
            <div className="flex-1 overflow-auto">
              {renderCustomerContent()}
            </div>
          </SidebarInset>
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
      
      {/* Temporary login button for demo - remove in production */}
      <div className="fixed bottom-4 right-4">
        <button 
          onClick={handleCustomerLogin}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg"
        >
          Demo Customer Login
        </button>
      </div>
    </div>
  );
};

export default Index;
