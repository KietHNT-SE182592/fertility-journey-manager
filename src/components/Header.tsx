
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, LogIn, ChevronDown, User, Calendar, FileText, TestTube, CreditCard, Settings, LogOut } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { getButtonClass, getNavClass } from "@/lib/colors";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Check if user is logged in (this would typically come from context/state management)
  const checkLoginStatus = () => {
    const loginData = localStorage.getItem('loginData');
    if (loginData) {
      const parsed = JSON.parse(loginData);
      setIsLoggedIn(true);
      setUserRole(parsed.role);
    }
  };

  // Call this on component mount
  React.useEffect(() => {
    checkLoginStatus();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loginData');
    setIsLoggedIn(false);
    setUserRole(null);
    navigate('/');
  };

  // Helper function to check if menu item is active
  const isActiveRoute = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  // Helper function to get menu item classes
  const getMenuItemClass = (path: string) => {
    return isActiveRoute(path) 
      ? getNavClass('itemActive') + ' px-3 py-2' 
      : getNavClass('item') + ' px-3 py-2 ' + getNavClass('itemHover');
  };

  const servicesDropdown = [
    { name: "IUI Treatment", href: "/services/iui" },
    { name: "IVF Treatment", href: "/services/ivf" },
    { name: "Fertility Assessment", href: "/services/assessment" },
    { name: "Egg Freezing", href: "/services/egg-freezing" },
  ];

  const patientMenuItems = [
    { name: "My Appointments", href: "/customer/appointments", icon: Calendar },
    { name: "Treatment Plans", href: "/customer/treatments", icon: FileText },
    { name: "Test Results", href: "/customer/tests", icon: TestTube },
    { name: "Payment History", href: "/customer/payments", icon: CreditCard },
    { name: "Profile Management", href: "/customer/profile", icon: Settings },
  ];

  return (
    <header className="bg-white border-b border-blue-100 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Rectangular */}
          <Link to="/" className="flex-shrink-0">
            <div className="w-40 h-16 md:w-44 md:h-18 overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=150&q=80" 
                alt="FertileCare Logo" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger className={`flex items-center ${getMenuItemClass('/services')}`}>
                Services <ChevronDown className="w-4 h-4 ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className={`w-56 ${getNavClass('dropdown')}`}>
                <DropdownMenuItem asChild>
                  <Link to="/services" className={`flex items-center px-4 py-3 ${getNavClass('dropdownItem')}`}>
                    All Services
                  </Link>
                </DropdownMenuItem>
                {servicesDropdown.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link to={item.href} className={`flex items-center px-4 py-3 ${getNavClass('dropdownItem')}`}>
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/doctors" className={getMenuItemClass('/doctors')}>
              Doctors
            </Link>
            
            <Link to="/blog" className={getMenuItemClass('/blog')}>
              Blog
            </Link>
            
            <Link to="/about-us" className={getMenuItemClass('/about-us')}>
              About Us
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {isLoggedIn && userRole === "customer" ? (
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar className="w-10 h-10 cursor-pointer hover:ring-2 hover:ring-blue-500 transition-all">
                    <AvatarFallback className={`${getButtonClass('primary')} text-white`}>
                      <User className="w-5 h-5" />
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className={`w-56 ${getNavClass('dropdown')}`} align="end">
                  {patientMenuItems.map((item) => (
                    <DropdownMenuItem key={item.name} asChild>
                      <Link to={item.href} className={`flex items-center px-4 py-3 ${getNavClass('dropdownItem')}`}>
                        <item.icon className="w-4 h-4 mr-3" />
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuItem onClick={handleLogout} className="flex items-center px-4 py-3 text-red-600 hover:bg-red-50 transition-colors cursor-pointer">
                    <LogOut className="w-4 h-4 mr-3" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/login">
                <Button size="sm" className={`${getButtonClass('primary')} shadow-lg`}>
                  <LogIn className="w-4 h-4 mr-2" />
                  Login
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-blue-100">
            <nav className="flex flex-col space-y-3 mt-4">
              <Link to="/services" className={`${getMenuItemClass('/services')} block`}>Services</Link>
              <Link to="/doctors" className={`${getMenuItemClass('/doctors')} block`}>Doctors</Link>
              <Link to="/blog" className={`${getMenuItemClass('/blog')} block`}>Blog</Link>
              <Link to="/about-us" className={`${getMenuItemClass('/about-us')} block`}>About Us</Link>
            </nav>
            <div className="flex flex-col space-y-2 mt-4">
              {isLoggedIn && userRole === "customer" ? (
                <div className="space-y-2">
                  {patientMenuItems.map((item) => (
                    <Link key={item.name} to={item.href}>
                      <Button variant="ghost" size="sm" className="w-full justify-start">
                        <item.icon className="w-4 h-4 mr-2" />
                        {item.name}
                      </Button>
                    </Link>
                  ))}
                  <Button onClick={handleLogout} variant="ghost" size="sm" className="w-full justify-start text-red-600">
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </Button>
                </div>
              ) : (
                <Link to="/login">
                  <Button size="sm" className={`w-full ${getButtonClass('primary')}`}>
                    <LogIn className="w-4 h-4 mr-2" />
                    Login
                  </Button>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
