
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Calendar, Search, Eye, Edit, CheckCircle, XCircle, Clock } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const BookingManagement = () => {
  const [showBookingDetail, setShowBookingDetail] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState<any>(null);
  const [statusFilter, setStatusFilter] = useState("all");

  const bookings = [
    {
      booking_ID: 1,
      cus_ID: 1,
      doc_ID: 1,
      ds_ID: 1,
      customerName: "Nguyễn Văn An - Trần Thị Bình",
      doctorName: "Dr. Nguyễn Thị Hoa",
      workDate: "2024-06-15",
      timeSlot: "09:00 - 10:00",
      roomNumber: "A101",
      status: "Confirmed",
      create_At: "2024-06-10 14:30:00",
      note: "Khám tư vấn ban đầu"
    },
    {
      booking_ID: 2,
      cus_ID: 2,
      doc_ID: 2,
      ds_ID: 2,
      customerName: "Lê Văn Cường - Phạm Thị Dung",
      doctorName: "Dr. Trần Văn Minh",
      workDate: "2024-06-16",
      timeSlot: "14:00 - 15:00",
      roomNumber: "B205",
      status: "Pending",
      create_At: "2024-06-11 09:15:00",
      note: "Tái khám sau điều trị"
    },
    {
      booking_ID: 3,
      cus_ID: 1,
      doc_ID: 1,
      ds_ID: 3,
      customerName: "Nguyễn Văn An - Trần Thị Bình",
      doctorName: "Dr. Nguyễn Thị Hoa",
      workDate: "2024-06-12",
      timeSlot: "10:00 - 11:00",
      roomNumber: "A101",
      status: "Completed",
      create_At: "2024-06-08 16:45:00",
      note: "Khám định kỳ"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Confirmed": return "bg-green-100 text-green-800";
      case "Pending": return "bg-yellow-100 text-yellow-800";
      case "Completed": return "bg-blue-100 text-blue-800";
      case "Cancelled": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Confirmed": return <CheckCircle className="w-4 h-4" />;
      case "Pending": return <Clock className="w-4 h-4" />;
      case "Completed": return <CheckCircle className="w-4 h-4" />;
      case "Cancelled": return <XCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const handleViewBooking = (booking: any) => {
    setSelectedBooking(booking);
    setShowBookingDetail(true);
  };

  const handleUpdateStatus = (bookingId: number, newStatus: string) => {
    console.log("Updating booking status", bookingId, newStatus);
  };

  const filteredBookings = statusFilter === "all" 
    ? bookings 
    : bookings.filter(booking => booking.status === statusFilter);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Quản lý Đặt lịch</h2>
          <p className="text-gray-600">Quản lý các cuộc hẹn và lịch khám của bệnh nhân</p>
        </div>
      </div>

      {/* Filters */}
      <Card className="border-0 shadow-sm">
        <CardContent className="p-4">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center space-x-2">
              <Search className="w-4 h-4 text-gray-500" />
              <Input placeholder="Tìm kiếm theo tên bệnh nhân..." className="w-64" />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Lọc theo trạng thái" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả trạng thái</SelectItem>
                <SelectItem value="Pending">Chờ xác nhận</SelectItem>
                <SelectItem value="Confirmed">Đã xác nhận</SelectItem>
                <SelectItem value="Completed">Hoàn thành</SelectItem>
                <SelectItem value="Cancelled">Đã hủy</SelectItem>
              </SelectContent>
            </Select>
            <Input type="date" className="w-40" />
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-blue-600" />
            <span>Danh sách Đặt lịch</span>
            <Badge variant="secondary">{filteredBookings.length} lịch hẹn</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Mã đặt lịch</TableHead>
                <TableHead>Bệnh nhân</TableHead>
                <TableHead>Bác sĩ</TableHead>
                <TableHead>Ngày & Giờ</TableHead>
                <TableHead>Phòng</TableHead>
                <TableHead>Trạng thái</TableHead>
                <TableHead>Ngày tạo</TableHead>
                <TableHead>Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredBookings.map((booking) => (
                <TableRow key={booking.booking_ID}>
                  <TableCell className="font-medium">#{booking.booking_ID}</TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium">{booking.customerName}</p>
                    </div>
                  </TableCell>
                  <TableCell>{booking.doctorName}</TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium">{booking.workDate}</p>
                      <p className="text-sm text-gray-500">{booking.timeSlot}</p>
                    </div>
                  </TableCell>
                  <TableCell>{booking.roomNumber}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(booking.status)}>
                      <div className="flex items-center space-x-1">
                        {getStatusIcon(booking.status)}
                        <span>{booking.status}</span>
                      </div>
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm text-gray-500">
                    {new Date(booking.create_At).toLocaleDateString('vi-VN')}
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleViewBooking(booking)}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      {booking.status === "Pending" && (
                        <>
                          <Button 
                            size="sm" 
                            className="bg-green-600 hover:bg-green-700"
                            onClick={() => handleUpdateStatus(booking.booking_ID, "Confirmed")}
                          >
                            <CheckCircle className="w-4 h-4" />
                          </Button>
                          <Button 
                            size="sm" 
                            variant="destructive"
                            onClick={() => handleUpdateStatus(booking.booking_ID, "Cancelled")}
                          >
                            <XCircle className="w-4 h-4" />
                          </Button>
                        </>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Booking Detail Dialog */}
      <Dialog open={showBookingDetail} onOpenChange={setShowBookingDetail}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Chi tiết Đặt lịch #{selectedBooking?.booking_ID}</DialogTitle>
          </DialogHeader>
          {selectedBooking && (
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label>Bệnh nhân</Label>
                  <Input value={selectedBooking.customerName} readOnly />
                </div>
                <div>
                  <Label>Bác sĩ</Label>
                  <Input value={selectedBooking.doctorName} readOnly />
                </div>
                <div>
                  <Label>Ngày khám</Label>
                  <Input value={selectedBooking.workDate} readOnly />
                </div>
                <div>
                  <Label>Giờ khám</Label>
                  <Input value={selectedBooking.timeSlot} readOnly />
                </div>
                <div>
                  <Label>Phòng khám</Label>
                  <Input value={selectedBooking.roomNumber} readOnly />
                </div>
                <div>
                  <Label>Trạng thái hiện tại</Label>
                  <Select defaultValue={selectedBooking.status}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Pending">Chờ xác nhận</SelectItem>
                      <SelectItem value="Confirmed">Đã xác nhận</SelectItem>
                      <SelectItem value="Completed">Hoàn thành</SelectItem>
                      <SelectItem value="Cancelled">Đã hủy</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label>Ghi chú</Label>
                <Textarea value={selectedBooking.note} readOnly />
              </div>
              <div className="text-sm text-gray-500">
                <p>Ngày tạo: {new Date(selectedBooking.create_At).toLocaleString('vi-VN')}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BookingManagement;
