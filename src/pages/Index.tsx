
import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Doctors from "@/components/Doctors";
import Blog from "@/components/Blog";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import { SidebarProvider } from "@/components/ui/sidebar";
import CustomerSidebar from "@/components/customer/CustomerSidebar";
import ProfileManagement from "@/components/customer/ProfileManagement";

const Index = () => {
  // Simulate login state - in real app this would come from auth context
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState("home");

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole(null);
    setActiveSection("home");
    console.log("Customer logged out");
  };

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
            <WhyChooseUs />
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
          {/* Left Navigation Sidebar */}
          <CustomerSidebar 
            activeSection={activeSection} 
            onSectionChange={setActiveSection}
            onLogout={handleLogout}
          />

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
      <WhyChooseUs />
      <Doctors />
      <Blog />
      <Footer />
    </div>
  );
};

export default Index;
