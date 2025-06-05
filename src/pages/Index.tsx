
import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Doctors from "@/components/Doctors";
import Blog from "@/components/Blog";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/Breadcrumb";

const Index = () => {
  // Simulate login state - in real app this would come from auth context
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<string | null>(null);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole(null);
    console.log("Customer logged out");
  };

  // Simulate login for testing - remove in production
  const handleLogin = (role: string) => {
    setIsLoggedIn(true);
    setUserRole(role);
  };

  return (
    <div className="min-h-screen">
      <Header 
        isLoggedIn={isLoggedIn} 
        userRole={userRole} 
        onLogout={handleLogout} 
      />
      <BreadcrumbNav items={[]} />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Doctors />
      <Blog />
      <Footer />
      
      {/* Temporary login buttons for testing - remove in production */}
      {!isLoggedIn && (
        <div className="fixed bottom-4 right-4 space-y-2">
          <button 
            onClick={() => handleLogin("customer")}
            className="block bg-blue-600 text-white px-4 py-2 rounded shadow-lg"
          >
            Test Login as Customer
          </button>
        </div>
      )}
    </div>
  );
};

export default Index;
