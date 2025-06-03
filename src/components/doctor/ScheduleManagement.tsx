
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar, Clock, Plus, CheckCircle, XCircle, Edit, AlertTriangle } from "lucide-react";

const ScheduleManagement = () => {
  const [showRequestSchedule, setShowRequestSchedule] = useState(false);
  const [showAbsentRequest, setShowAbsentRequest] = useState(false);
  const [showUpdateRequest, setShowUpdateRequest] = useState(false);
  const [selectedSchedule, setSelectedSchedule] = useState<any>(null);

  const scheduleRequests = [
    {
      id: 1,
      date: "2024-02-20",
      timeSlot: "09:00 AM - 12:00 PM",
      room: "Room 101",
      status: "Pending Approval",
      canUpdate: true
    },
    {
      id: 2,
      date: "2024-02-21",
      timeSlot: "02:00 PM - 05:00 PM",
      room: "Room 102",
      status: "Approved",
      canUpdate: false
    }
  ];

  const confirmedSchedule = [
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
    },
    {
      id: 3,
      date: "2024-02-18",
      timeSlot: "09:00 AM - 17:00 PM",
      room: "Room 103",
      appointments: 6,
      status: "Confirmed"
    }
  ];

  const handleScheduleRequest = () => {
    console.log("Requesting schedule");
    setShowRequestSchedule(false);
  };

  const handleAbsentRequest = () => {
    console.log("Requesting absent for schedule:", selectedSchedule);
    setShowAbsentRequest(false);
    setSelectedSchedule(null);
  };

  const handleUpdateRequest = () => {
    console.log("Requesting update for schedule:", selectedSchedule);
    setShowUpdateRequest(false);
    setSelectedSchedule(null);
  };

  const handleScheduleClick = (schedule: any) => {
    setSelectedSchedule(schedule);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Schedule Management</h2>
          <p className="text-gray-600">Manage your work schedule and availability</p>
        </div>
        <div className="flex space-x-3">
          <Dialog open={showRequestSchedule} onOpenChange={setShowRequestSchedule}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-blue-600 to-teal-600">
                <Plus className="w-4 h-4 mr-2" />
                Request Schedule (2+ weeks ahead)
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Request Work Schedule</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label>Date (Minimum 2 weeks from today)</Label>
                  <Input type="date" min={new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]} />
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
                      <SelectItem value="full">09:00 AM - 17:00 PM (Full Day)</SelectItem>
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
                    Schedule requests must be made at least 2 weeks in advance and will be sent to admin for approval.
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

      {/* Confirmed Schedule */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Confirmed Work Schedule</h3>
        <div className="grid gap-4">
          {confirmedSchedule.map((schedule) => (
            <Card 
              key={schedule.id} 
              className="border-0 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => handleScheduleClick(schedule)}
            >
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
                  <div className="flex flex-col items-end space-y-2">
                    <Badge variant="default">{schedule.status}</Badge>
                    <p className="text-xs text-gray-500">Click to manage</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
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
                  <div className="flex items-center space-x-3">
                    <Badge variant={request.status === "Approved" ? "default" : "secondary"}>
                      {request.status}
                    </Badge>
                    {request.canUpdate && (
                      <Button size="sm" variant="outline">
                        <Edit className="w-4 h-4 mr-1" />
                        Update Request
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Schedule Action Dialog */}
      {selectedSchedule && (
        <Dialog open={!!selectedSchedule} onOpenChange={() => setSelectedSchedule(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Manage Schedule - {selectedSchedule.date}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-medium">{selectedSchedule.timeSlot} - {selectedSchedule.room}</p>
                <p className="text-sm text-gray-600">{selectedSchedule.appointments} appointments scheduled</p>
              </div>
              
              <div className="flex flex-col space-y-3">
                <Button 
                  onClick={() => {
                    setShowUpdateRequest(true);
                    setSelectedSchedule(null);
                  }}
                  className="w-full"
                  variant="outline"
                >
                  <Edit className="w-4 h-4 mr-2" />
                  Request Schedule Update
                </Button>
                
                <Button 
                  onClick={() => {
                    setShowAbsentRequest(true);
                  }}
                  className="w-full"
                  variant="outline"
                >
                  <XCircle className="w-4 h-4 mr-2" />
                  Request Absence
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Update Request Dialog */}
      <Dialog open={showUpdateRequest} onOpenChange={setShowUpdateRequest}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Request Schedule Update</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label>New Date</Label>
              <Input type="date" />
            </div>
            <div>
              <Label>New Time Slot</Label>
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
              <Label>Reason for Update</Label>
              <Input placeholder="Reason for schedule change..." />
            </div>
            <Button onClick={handleUpdateRequest} className="w-full">
              Submit Update Request
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Absence Request Dialog */}
      <Dialog open={showAbsentRequest} onOpenChange={setShowAbsentRequest}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Request Absence</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {selectedSchedule && (
              <div className="bg-yellow-50 p-4 rounded-lg">
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-600" />
                  <p className="font-medium text-yellow-800">
                    Requesting absence for: {selectedSchedule.date} - {selectedSchedule.timeSlot}
                  </p>
                </div>
                <p className="text-sm text-yellow-700 mt-1">
                  {selectedSchedule.appointments} appointments will need to be rescheduled
                </p>
              </div>
            )}
            <div>
              <Label>Reason for Absence</Label>
              <Input placeholder="Reason for absence..." />
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <p className="text-red-800 text-sm">
                Please note: All scheduled appointments will need to be rescheduled and patients will be notified.
              </p>
            </div>
            <Button onClick={handleAbsentRequest} className="w-full" variant="destructive">
              Submit Absence Request
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ScheduleManagement;
