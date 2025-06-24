
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar, Clock, Plus, CheckCircle, XCircle } from "lucide-react";

const ScheduleManagement = () => {
  const [showRequestSchedule, setShowRequestSchedule] = useState(false);
  const [showAbsentRequest, setShowAbsentRequest] = useState(false);

  const scheduleRequests = [
    {
      id: 1,
      date: "2024-02-20",
      timeSlot: "09:00 AM - 12:00 PM",
      room: "Room 101",
      status: "Pending Approval"
    },
    {
      id: 2,
      date: "2024-02-21",
      timeSlot: "02:00 PM - 05:00 PM",
      room: "Room 102",
      status: "Approved"
    }
  ];

  const upcomingSchedule = [
    {
      id: 1,
      date: "2024-02-15",
      timeSlot: "09:00 AM - 12:00 PM",
      room: "Room 101",
      appointments: 4,
      status: "Confirmed"
    },
    {
      id: 2,
      date: "2024-02-16",
      timeSlot: "02:00 PM - 05:00 PM",
      room: "Room 102",
      appointments: 3,
      status: "Confirmed"
    }
  ];

  const handleScheduleRequest = () => {
    console.log("Requesting schedule");
    setShowRequestSchedule(false);
  };

  const handleAbsentRequest = () => {
    console.log("Requesting absent");
    setShowAbsentRequest(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Schedule Management</h2>
          <p className="text-gray-600">Manage your work schedule and availability</p>
        </div>
        <div className="flex space-x-3">
          <Dialog open={showAbsentRequest} onOpenChange={setShowAbsentRequest}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <XCircle className="w-4 h-4 mr-2" />
                Request Absent
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Request Absence</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label>Date</Label>
                  <Input type="date" />
                </div>
                <div>
                  <Label>Time Slot</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time slot..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">09:00 AM - 12:00 PM</SelectItem>
                      <SelectItem value="afternoon">02:00 PM - 05:00 PM</SelectItem>
                      <SelectItem value="full">Full Day</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Reason</Label>
                  <Input placeholder="Reason for absence..." />
                </div>
                <Button onClick={handleAbsentRequest} className="w-full">
                  Submit Absence Request
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog open={showRequestSchedule} onOpenChange={setShowRequestSchedule}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-blue-600 to-teal-600">
                <Plus className="w-4 h-4 mr-2" />
                Request Schedule
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Request Work Schedule</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label>Date</Label>
                  <Input type="date" />
                </div>
                <div>
                  <Label>Time Slot</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time slot..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">09:00 AM - 12:00 PM</SelectItem>
                      <SelectItem value="afternoon">02:00 PM - 05:00 PM</SelectItem>
                      <SelectItem value="evening">06:00 PM - 09:00 PM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Preferred Room</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select room..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="101">Room 101</SelectItem>
                      <SelectItem value="102">Room 102</SelectItem>
                      <SelectItem value="103">Room 103</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800 text-sm">
                    Your schedule request will be sent to admin for approval. You'll be notified once it's processed.
                  </p>
                </div>
                <Button onClick={handleScheduleRequest} className="w-full">
                  Submit Schedule Request
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Schedule Requests */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Pending Schedule Requests</h3>
        <div className="grid gap-4">
          {scheduleRequests.map((request) => (
            <Card key={request.id} className="border-0 shadow-lg">
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-semibold">{request.date}</p>
                      <p className="text-sm text-gray-600">{request.timeSlot} - {request.room}</p>
                    </div>
                  </div>
                  <Badge variant={request.status === "Approved" ? "default" : "secondary"}>
                    {request.status}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Upcoming Schedule */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Upcoming Schedule</h3>
        <div className="grid gap-4">
          {upcomingSchedule.map((schedule) => (
            <Card key={schedule.id} className="border-0 shadow-lg">
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-semibold">{schedule.date}</p>
                      <p className="text-sm text-gray-600">{schedule.timeSlot} - {schedule.room}</p>
                      <p className="text-sm text-blue-600">{schedule.appointments} appointments scheduled</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Badge variant="default">{schedule.status}</Badge>
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScheduleManagement;
