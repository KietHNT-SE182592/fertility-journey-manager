
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { User, Mail, Phone, MapPin, Edit2, Save, X } from "lucide-react";

const ProfileManagement = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: "Emma",
    lastName: "Johnson",
    email: "emma.johnson@email.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main Street, City, State 12345",
    emergencyContact: "John Johnson - +1 (555) 987-6543",
    medicalHistory: "No known allergies. Previous fertility treatments: None."
  });

  const handleSave = () => {
    console.log("Saving profile data:", profileData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Profile Management</h2>
          <p className="text-gray-600">View and update your personal information</p>
        </div>
        {!isEditing && (
          <Button 
            onClick={() => setIsEditing(true)}
            className="bg-gradient-to-r from-blue-600 to-teal-600"
          >
            <Edit2 className="w-4 h-4 mr-2" />
            Edit Profile
          </Button>
        )}
      </div>

      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <User className="w-5 h-5 text-blue-600" />
            <span>Personal Information</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label>First Name</Label>
              {isEditing ? (
                <Input 
                  value={profileData.firstName}
                  onChange={(e) => setProfileData({...profileData, firstName: e.target.value})}
                />
              ) : (
                <p className="font-medium">{profileData.firstName}</p>
              )}
            </div>
            <div>
              <Label>Last Name</Label>
              {isEditing ? (
                <Input 
                  value={profileData.lastName}
                  onChange={(e) => setProfileData({...profileData, lastName: e.target.value})}
                />
              ) : (
                <p className="font-medium">{profileData.lastName}</p>
              )}
            </div>
          </div>
          
          <div>
            <Label className="flex items-center space-x-1">
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </Label>
            {isEditing ? (
              <Input 
                type="email"
                value={profileData.email}
                onChange={(e) => setProfileData({...profileData, email: e.target.value})}
              />
            ) : (
              <p className="font-medium">{profileData.email}</p>
            )}
          </div>

          <div>
            <Label className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>Phone</span>
            </Label>
            {isEditing ? (
              <Input 
                value={profileData.phone}
                onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
              />
            ) : (
              <p className="font-medium">{profileData.phone}</p>
            )}
          </div>

          <div>
            <Label className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>Address</span>
            </Label>
            {isEditing ? (
              <Textarea 
                value={profileData.address}
                onChange={(e) => setProfileData({...profileData, address: e.target.value})}
              />
            ) : (
              <p className="font-medium">{profileData.address}</p>
            )}
          </div>

          <div>
            <Label>Emergency Contact</Label>
            {isEditing ? (
              <Input 
                value={profileData.emergencyContact}
                onChange={(e) => setProfileData({...profileData, emergencyContact: e.target.value})}
              />
            ) : (
              <p className="font-medium">{profileData.emergencyContact}</p>
            )}
          </div>

          <div>
            <Label>Medical History</Label>
            {isEditing ? (
              <Textarea 
                value={profileData.medicalHistory}
                onChange={(e) => setProfileData({...profileData, medicalHistory: e.target.value})}
                rows={3}
              />
            ) : (
              <p className="font-medium">{profileData.medicalHistory}</p>
            )}
          </div>

          {isEditing && (
            <div className="flex space-x-3 pt-4">
              <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
              <Button variant="outline" onClick={handleCancel}>
                <X className="w-4 h-4 mr-2" />
                Cancel
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileManagement;
