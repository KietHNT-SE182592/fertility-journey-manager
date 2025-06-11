
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Users, Plus, Edit, Trash2, Search, Phone, Mail, Heart } from "lucide-react";

const PatientManagement = () => {
  const [showCreatePatient, setShowCreatePatient] = useState(false);
  const [showEditPatient, setShowEditPatient] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState<any>(null);

  const patients = [
    {
      cus_ID: 1,
      acc_ID: 4,
      hus_Name: "Nguyễn Văn An",
      wife_Name: "Trần Thị Bình",
      hus_YOB: "1985-03-15",
      wife_YOB: "1987-07-22",
      phone: "+84-123-456-789",
      mail: "nguyenvanan@email.com",
      joinDate: "2024-01-15",
      treatmentCount: 2,
      lastVisit: "2024-06-10"
    },
    {
      cus_ID: 2,
      acc_ID: 5,
      hus_Name: "Lê Văn Cường",
      wife_Name: "Phạm Thị Dung",
      hus_YOB: "1982-11-08",
      wife_YOB: "1984-05-30",
      phone: "+84-987-654-321",
      mail: "levancuong@email.com",
      joinDate: "2024-02-20",
      treatmentCount: 1,
      lastVisit: "2024-06-08"
    }
  ];

  const handleCreatePatient = () => {
    console.log("Creating patient");
    setShowCreatePatient(false);
  };

  const handleEditPatient = (patient: any) => {
    setSelectedPatient(patient);
    setShowEditPatient(true);
  };

  const handleUpdatePatient = () => {
    console.log("Updating patient", selectedPatient);
    setShowEditPatient(false);
    setSelectedPatient(null);
  };

  const handleDeletePatient = (patientId: number) => {
    console.log("Deleting patient", patientId);
  };

  const calculateAge = (birthDate: string) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Quản lý Bệnh nhân</h2>
          <p className="text-gray-600">Quản lý thông tin cặp vợ chồng và hồ sơ bệnh nhân</p>
        </div>
        <Dialog open={showCreatePatient} onOpenChange={setShowCreatePatient}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-blue-600 to-teal-600">
              <Plus className="w-4 h-4 mr-2" />
              Thêm Bệnh nhân
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>Thêm Bệnh nhân Mới</DialogTitle>
            </DialogHeader>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Heart className="w-5 h-5 mr-2 text-pink-500" />
                  Thông tin Chồng
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>Họ và Tên Chồng</Label>
                    <Input placeholder="Nhập tên chồng..." />
                  </div>
                  <div>
                    <Label>Ngày sinh Chồng</Label>
                    <Input type="date" />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Heart className="w-5 h-5 mr-2 text-pink-500" />
                  Thông tin Vợ
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>Họ và Tên Vợ</Label>
                    <Input placeholder="Nhập tên vợ..." />
                  </div>
                  <div>
                    <Label>Ngày sinh Vợ</Label>
                    <Input type="date" />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Thông tin Liên hệ</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>Số điện thoại</Label>
                    <Input placeholder="+84-xxx-xxx-xxx" />
                  </div>
                  <div>
                    <Label>Email</Label>
                    <Input type="email" placeholder="email@example.com" />
                  </div>
                </div>
              </div>
            </div>
            <Button onClick={handleCreatePatient} className="w-full mt-4">
              Thêm Bệnh nhân
            </Button>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search and Filter */}
      <Card className="border-0 shadow-sm">
        <CardContent className="p-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 flex-1">
              <Search className="w-4 h-4 text-gray-500" />
              <Input placeholder="Tìm kiếm theo tên hoặc email..." className="max-w-md" />
            </div>
            <Input type="date" placeholder="Ngày khám từ" className="w-40" />
            <Input type="date" placeholder="Ngày khám đến" className="w-40" />
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="w-5 h-5 text-blue-600" />
            <span>Danh sách Bệnh nhân</span>
            <Badge variant="secondary">{patients.length} cặp vợ chồng</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Mã BN</TableHead>
                <TableHead>Thông tin Chồng</TableHead>
                <TableHead>Thông tin Vợ</TableHead>
                <TableHead>Liên hệ</TableHead>
                <TableHead>Số lần điều trị</TableHead>
                <TableHead>Lần khám cuối</TableHead>
                <TableHead>Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {patients.map((patient) => (
                <TableRow key={patient.cus_ID}>
                  <TableCell className="font-medium">#{patient.cus_ID}</TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium">{patient.hus_Name}</p>
                      <p className="text-sm text-gray-500">
                        {calculateAge(patient.hus_YOB)} tuổi
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium">{patient.wife_Name}</p>
                      <p className="text-sm text-gray-500">
                        {calculateAge(patient.wife_YOB)} tuổi
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm space-y-1">
                      <div className="flex items-center space-x-1">
                        <Phone className="w-3 h-3 text-gray-400" />
                        <span>{patient.phone}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Mail className="w-3 h-3 text-gray-400" />
                        <span className="truncate max-w-32">{patient.mail}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{patient.treatmentCount} lần</Badge>
                  </TableCell>
                  <TableCell className="text-sm">
                    {new Date(patient.lastVisit).toLocaleDateString('vi-VN')}
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleEditPatient(patient)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleDeletePatient(patient.cus_ID)}
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

      {/* Edit Patient Dialog */}
      <Dialog open={showEditPatient} onOpenChange={setShowEditPatient}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Chỉnh sửa thông tin Bệnh nhân #{selectedPatient?.cus_ID}</DialogTitle>
          </DialogHeader>
          {selectedPatient && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Heart className="w-5 h-5 mr-2 text-pink-500" />
                  Thông tin Chồng
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>Họ và Tên Chồng</Label>
                    <Input defaultValue={selectedPatient.hus_Name} />
                  </div>
                  <div>
                    <Label>Ngày sinh Chồng</Label>
                    <Input type="date" defaultValue={selectedPatient.hus_YOB} />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Heart className="w-5 h-5 mr-2 text-pink-500" />
                  Thông tin Vợ
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>Họ và Tên Vợ</Label>
                    <Input defaultValue={selectedPatient.wife_Name} />
                  </div>
                  <div>
                    <Label>Ngày sinh Vợ</Label>
                    <Input type="date" defaultValue={selectedPatient.wife_YOB} />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Thông tin Liên hệ</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>Số điện thoại</Label>
                    <Input defaultValue={selectedPatient.phone} />
                  </div>
                  <div>
                    <Label>Email</Label>
                    <Input defaultValue={selectedPatient.mail} />
                  </div>
                </div>
              </div>
            </div>
          )}
          <Button onClick={handleUpdatePatient} className="w-full mt-4">
            Cập nhật thông tin
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PatientManagement;
