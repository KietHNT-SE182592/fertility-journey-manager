
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Users, Plus, Edit, Trash2, Star } from "lucide-react";

const DoctorManagement = () => {
  const [showCreateDoctor, setShowCreateDoctor] = useState(false);

  const doctors = [
    { 
      id: 1, 
      name: "Dr. Sarah Johnson", 
      email: "sarah.johnson@fertilcare.com",
      phone: "+1-555-0101",
      specialized: "Reproductive Endocrinology", 
      experience: 15,
      rating: 4.9
    },
    { 
      id: 2, 
      name: "Dr. Michael Chen", 
      email: "michael.chen@fertilcare.com",
      phone: "+1-555-0102",
      specialized: "Fertility & IUI Specialist", 
      experience: 12,
      rating: 4.8
    }
  ];

  const handleCreateDoctor = () => {
    console.log("Creating doctor");
    setShowCreateDoctor(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Doctor Management</h2>
          <p className="text-gray-600">Manage doctor profiles and information</p>
        </div>
        <Dialog open={showCreateDoctor} onOpenChange={setShowCreateDoctor}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-blue-600 to-teal-600">
              <Plus className="w-4 h-4 mr-2" />
              Add Doctor
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Doctor</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label>Full Name</Label>
                  <Input placeholder="Enter doctor name..." />
                </div>
                <div>
                  <Label>Email</Label>
                  <Input type="email" placeholder="Enter email..." />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label>Phone</Label>
                  <Input placeholder="Enter phone number..." />
                </div>
                <div>
                  <Label>Experience (years)</Label>
                  <Input type="number" placeholder="Years of experience..." />
                </div>
              </div>
              <div>
                <Label>Specialization</Label>
                <Input placeholder="Enter specialization..." />
              </div>
              <div>
                <Label>Certification</Label>
                <Textarea placeholder="Enter certifications and qualifications..." />
              </div>
              <Button onClick={handleCreateDoctor} className="w-full">
                Add Doctor
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="w-5 h-5 text-blue-600" />
            <span>Doctors</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Specialization</TableHead>
                <TableHead>Experience</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {doctors.map((doctor) => (
                <TableRow key={doctor.id}>
                  <TableCell className="font-medium">{doctor.name}</TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div>{doctor.email}</div>
                      <div className="text-gray-500">{doctor.phone}</div>
                    </div>
                  </TableCell>
                  <TableCell>{doctor.specialized}</TableCell>
                  <TableCell>{doctor.experience} years</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{doctor.rating}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default DoctorManagement;
