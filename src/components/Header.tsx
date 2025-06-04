
import { Button } from "@/components/ui/button";
import { Menu, LogIn, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const servicesDropdown = [
    { name: "IUI Treatment", href: "/services/iui" },
    { name: "IVF Treatment", href: "/services/ivf" },
    { name: "Fertility Assessment", href: "/services/assessment" },
    { name: "Egg Freezing", href: "/services/egg-freezing" },
  ];

  return (
    <header className="bg-white/98 backdrop-blur-lg border-b border-blue-100 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 overflow-hidden rounded-xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80" 
                alt="FertileCare Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">FertileCare</h1>
              <p className="text-xs text-gray-500 font-medium">Fertility Center</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Home
            </a>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Services <ChevronDown className="w-4 h-4 ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white border border-gray-200 shadow-xl">
                <DropdownMenuItem asChild>
                  <Link to="/services" className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    All Services
                  </Link>
                </DropdownMenuItem>
                {servicesDropdown.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link to={item.href} className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/doctors" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Doctors
            </Link>
            
            <Link to="/blog" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Blog
            </Link>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link to="/login">
              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 shadow-lg">
                <LogIn className="w-4 h-4 mr-2" />
                Login
              </Button>
            </Link>
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
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</a>
              <Link to="/services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Services</Link>
              <Link to="/doctors" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Doctors</Link>
              <Link to="/blog" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Blog</Link>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
            </nav>
            <div className="flex flex-col space-y-2 mt-4">
              <Link to="/login">
                <Button size="sm" className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700">
                  <LogIn className="w-4 h-4 mr-2" />
                  Login
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
