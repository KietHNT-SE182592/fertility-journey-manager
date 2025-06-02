
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calendar, Check, X, Clock } from "lucide-react";

const DoctorScheduleManagement = () => {
  const pendingSchedules = [
    {
      id: 1,
      doctorName: "Dr. Sarah Johnson",
      requestDate: "2024-02-20",
      workDate: "2024-02-25",
      timeSlot: "09:00 - 17:00",
      roomNumber: "Room A-101",
      status: "Pending",
      requestType: "New Schedule"
    },
    {
      id: 2,
      doctorName: "Dr. Michael Chen",
      requestDate: "2024-02-19",
      workDate: "2024-02-24",
      timeSlot: "13:00 - 21:00",
      roomNumber: "Room B-205",
      status: "Pending",
      requestType: "Schedule Change"
    }
  ];

  const handleApprove = (scheduleId: number) => {
    console.log("Approving schedule:", scheduleId);
  };

  const handleReject = (scheduleId: number) => {
    console.log("Rejecting schedule:", scheduleId);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Doctor Schedule Management</h2>
          <p className="text-gray-600">Approve or reject doctor schedule requests</p>
        </div>
      </div>

      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-blue-600" />
            <span>Pending Schedule Requests</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Doctor</TableHead>
                <TableHead>Request Type</TableHead>
                <TableHead>Work Date</TableHead>
                <TableHead>Time Slot</TableHead>
                <TableHead>Room</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pendingSchedules.map((schedule) => (
                <TableRow key={schedule.id}>
                  <TableCell className="font-medium">{schedule.doctorName}</TableCell>
                  <TableCell>{schedule.requestType}</TableCell>
                  <TableCell>{schedule.workDate}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span>{schedule.timeSlot}</span>
                    </div>
                  </TableCell>
                  <TableCell>{schedule.roomNumber}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{schedule.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button 
                        size="sm" 
                        onClick={() => handleApprove(schedule.id)}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        <Check className="w-4 h-4" />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="destructive"
                        onClick={() => handleReject(schedule.id)}
                      >
                        <X className="w-4 h-4" />
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

export default DoctorScheduleManagement;
