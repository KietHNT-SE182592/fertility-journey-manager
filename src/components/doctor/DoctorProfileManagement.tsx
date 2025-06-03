
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { User, Mail, Phone, MapPin, Edit2, Save, X, Stethoscope } from "lucide-react";

const DoctorProfileManagement = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: "Dr. Sarah",
    lastName: "Johnson",
    email: "dr.sarah.johnson@fertilcare.com",
    phone: "+1 (555) 123-4567",
    address: "123 Medical Center Drive, City, State 12345",
    specialization: "Reproductive Endocrinology",
    licenseNumber: "MD12345678",
    yearsOfExperience: "15",
    education: "MD from Harvard Medical School, Fellowship in Reproductive Endocrinology",
    bio: "Specializing in fertility treatments with over 15 years of experience helping couples achieve their dreams of parenthood."
  });

  const handleSave = () => {
    console.log("Saving doctor profile data:", profileData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Doctor Profile Management</h2>
          <p className="text-gray-600">View and update your professional information</p>
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
        </CardContent>
      </Card>

      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Stethoscope className="w-5 h-5 text-blue-600" />
            <span>Professional Information</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label>Specialization</Label>
              {isEditing ? (
                <Input 
                  value={profileData.specialization}
                  onChange={(e) => setProfileData({...profileData, specialization: e.target.value})}
                />
              ) : (
                <p className="font-medium">{profileData.specialization}</p>
              )}
            </div>
            <div>
              <Label>License Number</Label>
              {isEditing ? (
                <Input 
                  value={profileData.licenseNumber}
                  onChange={(e) => setProfileData({...profileData, licenseNumber: e.target.value})}
                />
              ) : (
                <p className="font-medium">{profileData.licenseNumber}</p>
              )}
            </div>
          </div>

          <div>
            <Label>Years of Experience</Label>
            {isEditing ? (
              <Input 
                value={profileData.yearsOfExperience}
                onChange={(e) => setProfileData({...profileData, yearsOfExperience: e.target.value})}
              />
            ) : (
              <p className="font-medium">{profileData.yearsOfExperience} years</p>
            )}
          </div>

          <div>
            <Label>Education</Label>
            {isEditing ? (
              <Textarea 
                value={profileData.education}
                onChange={(e) => setProfileData({...profileData, education: e.target.value})}
                rows={2}
              />
            ) : (
              <p className="font-medium">{profileData.education}</p>
            )}
          </div>

          <div>
            <Label>Bio</Label>
            {isEditing ? (
              <Textarea 
                value={profileData.bio}
                onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                rows={3}
              />
            ) : (
              <p className="font-medium">{profileData.bio}</p>
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

export default DoctorProfileManagement;
