
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Users, Plus, Edit, Trash2, Star, Phone, Mail } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const DoctorManagement = () => {
  const [showCreateDoctor, setShowCreateDoctor] = useState(false);
  const [showEditDoctor, setShowEditDoctor] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null);

  const doctors = [
    { 
      doc_ID: 1, 
      acc_ID: 2,
      doc_Name: "Dr. Nguyễn Thị Hoa", 
      gender: "Female",
      yob: "1980-05-15",
      mail: "dr.hoa@fertilcare.com",
      phone: "+84-123-456-789",
      experience: 15,
      specialized: "Reproductive Endocrinology", 
      certification: "Board Certified in Reproductive Endocrinology and Infertility"
    },
    { 
      doc_ID: 2, 
      acc_ID: 3,
      doc_Name: "Dr. Trần Văn Minh", 
      gender: "Male",
      yob: "1975-08-22",
      mail: "dr.minh@fertilcare.com",
      phone: "+84-987-654-321",
      experience: 20,
      specialized: "IVF Specialist", 
      certification: "Fellowship in Assisted Reproductive Technology"
    }
  ];

  const handleCreateDoctor = () => {
    console.log("Creating doctor");
    setShowCreateDoctor(false);
  };

  const handleEditDoctor = (doctor: any) => {
    setSelectedDoctor(doctor);
    setShowEditDoctor(true);
  };

  const handleUpdateDoctor = () => {
    console.log("Updating doctor", selectedDoctor);
    setShowEditDoctor(false);
    setSelectedDoctor(null);
  };

  const handleDeleteDoctor = (doctorId: number) => {
    console.log("Deleting doctor", doctorId);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Quản lý Bác sĩ</h2>
          <p className="text-gray-600">Quản lý thông tin và hồ sơ bác sĩ</p>
        </div>
        <Dialog open={showCreateDoctor} onOpenChange={setShowCreateDoctor}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-blue-600 to-teal-600">
              <Plus className="w-4 h-4 mr-2" />
              Thêm Bác sĩ
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>Thêm Bác sĩ Mới</DialogTitle>
            </DialogHeader>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label>Họ và Tên</Label>
                <Input placeholder="Nhập tên bác sĩ..." />
              </div>
              <div>
                <Label>Giới tính</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn giới tính" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Male">Nam</SelectItem>
                    <SelectItem value="Female">Nữ</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Năm sinh</Label>
                <Input type="date" />
              </div>
              <div>
                <Label>Email</Label>
                <Input type="email" placeholder="email@example.com" />
              </div>
              <div>
                <Label>Số điện thoại</Label>
                <Input placeholder="+84-xxx-xxx-xxx" />
              </div>
              <div>
                <Label>Kinh nghiệm (năm)</Label>
                <Input type="number" placeholder="Số năm kinh nghiệm" />
              </div>
              <div className="md:col-span-2">
                <Label>Chuyên khoa</Label>
                <Input placeholder="Nhập chuyên khoa..." />
              </div>
              <div className="md:col-span-2">
                <Label>Chứng chỉ</Label>
                <Textarea placeholder="Nhập thông tin chứng chỉ và bằng cấp..." />
              </div>
            </div>
            <Button onClick={handleCreateDoctor} className="w-full mt-4">
              Thêm Bác sĩ
            </Button>
          </DialogContent>
        </Dialog>
      </div>

      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="w-5 h-5 text-blue-600" />
            <span>Danh sách Bác sĩ</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Thông tin cá nhân</TableHead>
                <TableHead>Liên hệ</TableHead>
                <TableHead>Chuyên khoa</TableHead>
                <TableHead>Kinh nghiệm</TableHead>
                <TableHead>Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {doctors.map((doctor) => (
                <TableRow key={doctor.doc_ID}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{doctor.doc_Name}</p>
                      <p className="text-sm text-gray-500">
                        {doctor.gender} • {new Date(doctor.yob).getFullYear()}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm space-y-1">
                      <div className="flex items-center space-x-1">
                        <Mail className="w-3 h-3 text-gray-400" />
                        <span>{doctor.mail}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Phone className="w-3 h-3 text-gray-400" />
                        <span>{doctor.phone}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">{doctor.specialized}</Badge>
                  </TableCell>
                  <TableCell>{doctor.experience} năm</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleEditDoctor(doctor)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleDeleteDoctor(doctor.doc_ID)}
                      >
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

      {/* Edit Doctor Dialog */}
      <Dialog open={showEditDoctor} onOpenChange={setShowEditDoctor}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Chỉnh sửa thông tin Bác sĩ</DialogTitle>
          </DialogHeader>
          {selectedDoctor && (
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label>Họ và Tên</Label>
                <Input defaultValue={selectedDoctor.doc_Name} />
              </div>
              <div>
                <Label>Giới tính</Label>
                <Select defaultValue={selectedDoctor.gender}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Male">Nam</SelectItem>
                    <SelectItem value="Female">Nữ</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Email</Label>
                <Input defaultValue={selectedDoctor.mail} />
              </div>
              <div>
                <Label>Số điện thoại</Label>
                <Input defaultValue={selectedDoctor.phone} />
              </div>
              <div>
                <Label>Kinh nghiệm (năm)</Label>
                <Input type="number" defaultValue={selectedDoctor.experience} />
              </div>
              <div>
                <Label>Chuyên khoa</Label>
                <Input defaultValue={selectedDoctor.specialized} />
              </div>
              <div className="md:col-span-2">
                <Label>Chứng chỉ</Label>
                <Textarea defaultValue={selectedDoctor.certification} />
              </div>
            </div>
          )}
          <Button onClick={handleUpdateDoctor} className="w-full mt-4">
            Cập nhật
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DoctorManagement;
