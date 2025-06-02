
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Star, MessageSquare, Eye } from "lucide-react";

const FeedbackManagement = () => {
  const feedbacks = [
    {
      id: 1,
      patientName: "Emma Johnson",
      doctorName: "Dr. Sarah Johnson",
      serviceName: "IVF Treatment",
      rating: 5,
      content: "Excellent service and very professional staff...",
      date: "2024-02-15",
      status: "Published"
    },
    {
      id: 2,
      patientName: "Mike Wilson",
      doctorName: "Dr. Michael Chen",
      serviceName: "IUI Treatment",
      rating: 4,
      content: "Good experience overall, very satisfied with results...",
      date: "2024-02-10",
      status: "Published"
    },
    {
      id: 3,
      patientName: "Sarah Davis",
      doctorName: "Dr. Sarah Johnson",
      serviceName: "Fertility Test",
      rating: 3,
      content: "Service was okay but waiting time was too long...",
      date: "2024-02-08",
      status: "Pending Review"
    }
  ];

  const handleViewDetails = (feedbackId: number) => {
    console.log("Viewing feedback details:", feedbackId);
  };

  const getRatingColor = (rating: number) => {
    if (rating >= 4) return "text-green-600";
    if (rating >= 3) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Feedback Management</h2>
          <p className="text-gray-600">Monitor and manage patient feedback and ratings</p>
        </div>
      </div>

      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MessageSquare className="w-5 h-5 text-blue-600" />
            <span>Patient Feedback</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Patient</TableHead>
                <TableHead>Doctor</TableHead>
                <TableHead>Service</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {feedbacks.map((feedback) => (
                <TableRow key={feedback.id}>
                  <TableCell className="font-medium">{feedback.patientName}</TableCell>
                  <TableCell>{feedback.doctorName}</TableCell>
                  <TableCell>{feedback.serviceName}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1">
                      <Star className={`w-4 h-4 fill-current ${getRatingColor(feedback.rating)}`} />
                      <span className={getRatingColor(feedback.rating)}>{feedback.rating}/5</span>
                    </div>
                  </TableCell>
                  <TableCell>{feedback.date}</TableCell>
                  <TableCell>
                    <Badge variant={feedback.status === "Published" ? "default" : "secondary"}>
                      {feedback.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => handleViewDetails(feedback.id)}
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
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

export default FeedbackManagement;
