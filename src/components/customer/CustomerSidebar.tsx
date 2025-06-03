
import { Calendar, User, Heart, FileText, LogOut } from "lucide-react";
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
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

interface CustomerSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const CustomerSidebar = ({ activeSection, onSectionChange }: CustomerSidebarProps) => {
  const menuItems = [
    {
      title: "Appointments",
      icon: Calendar,
      key: "appointments"
    },
    {
      title: "Treatment Plans",
      icon: Heart,
      key: "treatments"
    },
    {
      title: "Test Results",
      icon: FileText,
      key: "tests"
    },
    {
      title: "Manage Profile",
      icon: User,
      key: "profile"
    }
  ];

  const handleLogout = () => {
    console.log("Logging out...");
    // Navigate to home page
    window.location.href = "/";
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center space-x-2 p-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
            <Heart className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="font-bold text-sm">FertileCare</h2>
            <p className="text-xs text-gray-500">Customer Portal</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.key}>
                  <SidebarMenuButton 
                    onClick={() => onSectionChange(item.key)}
                    isActive={activeSection === item.key}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <Button 
          variant="outline" 
          onClick={handleLogout}
          className="w-full"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
};

export default CustomerSidebar;
