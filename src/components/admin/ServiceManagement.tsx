
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { TestTube, Plus, Edit, Trash2, DollarSign, Search } from "lucide-react";

const ServiceManagement = () => {
  const [showCreateService, setShowCreateService] = useState(false);
  const [showEditService, setShowEditService] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);

  const services = [
    {
      ser_ID: 1,
      ser_Name: "IVF Treatment",
      price: 150000000,
      description: "Gói điều trị thụ tinh ống nghiệm hoàn chỉnh bao gồm tất cả các bước từ kích thích buồng trứng đến chuyển phôi",
      category: "Điều trị chính",
      duration: "8-12 tuần",
      isActive: true
    },
    {
      ser_ID: 2,
      ser_Name: "IUI Treatment",
      price: 25000000,
      description: "Điều trị thụ tinh trong tử cung, phương pháp hỗ trợ sinh sản ít xâm lấn",
      category: "Điều trị chính",
      duration: "2-4 tuần",
      isActive: true
    },
    {
      ser_ID: 3,
      ser_Name: "Gói Xét nghiệm Toàn diện",
      price: 15000000,
      description: "Gói xét nghiệm đầy đủ cho cả vợ và chồng bao gồm hormone, tinh dịch đồ, siêu âm",
      category: "Xét nghiệm",
      duration: "1-2 tuần",
      isActive: true
    },
    {
      ser_ID: 4,
      ser_Name: "Đông lạnh Trứng",
      price: 45000000,
      description: "Dịch vụ thu thập và bảo quản trứng bằng công nghệ đông lạnh tiên tiến",
      category: "Bảo quản",
      duration: "1 ngày",
      isActive: true
    },
    {
      ser_ID: 5,
      ser_Name: "Tư vấn Di truyền",
      price: 8000000,
      description: "Tư vấn chuyên sâu về các rối loạn di truyền và nguy cơ di truyền cho con",
      category: "Tư vấn",
      duration: "1-2 giờ",
      isActive: false
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  const handleCreateService = () => {
    console.log("Creating service");
    setShowCreateService(false);
  };

  const handleEditService = (service: any) => {
    setSelectedService(service);
    setShowEditService(true);
  };

  const handleUpdateService = () => {
    console.log("Updating service", selectedService);
    setShowEditService(false);
    setSelectedService(null);
  };

  const handleDeleteService = (serviceId: number) => {
    console.log("Deleting service", serviceId);
  };

  const handleToggleStatus = (serviceId: number) => {
    console.log("Toggling service status", serviceId);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Điều trị chính": return "bg-blue-100 text-blue-800";
      case "Xét nghiệm": return "bg-green-100 text-green-800";
      case "Bảo quản": return "bg-purple-100 text-purple-800";
      case "Tư vấn": return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Quản lý Dịch vụ</h2>
          <p className="text-gray-600">Quản lý các dịch vụ điều trị hiếm muộn và giá cả</p>
        </div>
        <Dialog open={showCreateService} onOpenChange={setShowCreateService}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-blue-600 to-teal-600">
              <Plus className="w-4 h-4 mr-2" />
              Thêm Dịch vụ
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Thêm Dịch vụ Mới</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label>Tên dịch vụ</Label>
                <Input placeholder="Nhập tên dịch vụ..." />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label>Giá dịch vụ (VNĐ)</Label>
                  <Input type="number" placeholder="0" />
                </div>
                <div>
                  <Label>Thời gian thực hiện</Label>
                  <Input placeholder="VD: 2-4 tuần" />
                </div>
              </div>
              <div>
                <Label>Danh mục</Label>
                <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                  <option value="">Chọn danh mục</option>
                  <option value="Điều trị chính">Điều trị chính</option>
                  <option value="Xét nghiệm">Xét nghiệm</option>
                  <option value="Bảo quản">Bảo quản</option>
                  <option value="Tư vấn">Tư vấn</option>
                </select>
              </div>
              <div>
                <Label>Mô tả dịch vụ</Label>
                <Textarea placeholder="Nhập mô tả chi tiết về dịch vụ..." rows={4} />
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="isActive" defaultChecked />
                <Label htmlFor="isActive">Kích hoạt dịch vụ</Label>
              </div>
            </div>
            <Button onClick={handleCreateService} className="w-full mt-4">
              Tạo Dịch vụ
            </Button>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search and Filter */}
      <Card className="border-0 shadow-sm">
        <CardContent className="p-4">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center space-x-2 flex-1">
              <Search className="w-4 h-4 text-gray-500" />
              <Input placeholder="Tìm kiếm dịch vụ..." className="max-w-md" />
            </div>
            <select className="border border-gray-300 rounded-md px-3 py-2">
              <option value="">Tất cả danh mục</option>
              <option value="Điều trị chính">Điều trị chính</option>
              <option value="Xét nghiệm">Xét nghiệm</option>
              <option value="Bảo quản">Bảo quản</option>
              <option value="Tư vấn">Tư vấn</option>
            </select>
            <select className="border border-gray-300 rounded-md px-3 py-2">
              <option value="">Tất cả trạng thái</option>
              <option value="active">Đang hoạt động</option>
              <option value="inactive">Tạm dừng</option>
            </select>
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TestTube className="w-5 h-5 text-blue-600" />
            <span>Danh sách Dịch vụ</span>
            <Badge variant="secondary">{services.length} dịch vụ</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Mã DV</TableHead>
                <TableHead>Tên dịch vụ</TableHead>
                <TableHead>Danh mục</TableHead>
                <TableHead>Giá dịch vụ</TableHead>
                <TableHead>Thời gian</TableHead>
                <TableHead>Trạng thái</TableHead>
                <TableHead>Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {services.map((service) => (
                <TableRow key={service.ser_ID}>
                  <TableCell className="font-medium">#{service.ser_ID}</TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium">{service.ser_Name}</p>
                      <p className="text-sm text-gray-500 max-w-xs truncate">
                        {service.description}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getCategoryColor(service.category)}>
                      {service.category}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1">
                      <DollarSign className="w-4 h-4 text-green-600" />
                      <span className="font-semibold text-green-600">
                        {formatPrice(service.price)}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>{service.duration}</TableCell>
                  <TableCell>
                    <Badge 
                      className={service.isActive ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}
                    >
                      {service.isActive ? "Hoạt động" : "Tạm dừng"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleEditService(service)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button 
                        size="sm" 
                        variant={service.isActive ? "outline" : "default"}
                        onClick={() => handleToggleStatus(service.ser_ID)}
                      >
                        {service.isActive ? "Tạm dừng" : "Kích hoạt"}
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleDeleteService(service.ser_ID)}
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

      {/* Edit Service Dialog */}
      <Dialog open={showEditService} onOpenChange={setShowEditService}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Chỉnh sửa Dịch vụ #{selectedService?.ser_ID}</DialogTitle>
          </DialogHeader>
          {selectedService && (
            <div className="space-y-4">
              <div>
                <Label>Tên dịch vụ</Label>
                <Input defaultValue={selectedService.ser_Name} />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label>Giá dịch vụ (VNĐ)</Label>
                  <Input type="number" defaultValue={selectedService.price} />
                </div>
                <div>
                  <Label>Thời gian thực hiện</Label>
                  <Input defaultValue={selectedService.duration} />
                </div>
              </div>
              <div>
                <Label>Danh mục</Label>
                <select className="w-full border border-gray-300 rounded-md px-3 py-2" defaultValue={selectedService.category}>
                  <option value="Điều trị chính">Điều trị chính</option>
                  <option value="Xét nghiệm">Xét nghiệm</option>
                  <option value="Bảo quản">Bảo quản</option>
                  <option value="Tư vấn">Tư vấn</option>
                </select>
              </div>
              <div>
                <Label>Mô tả dịch vụ</Label>
                <Textarea defaultValue={selectedService.description} rows={4} />
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="editIsActive" defaultChecked={selectedService.isActive} />
                <Label htmlFor="editIsActive">Kích hoạt dịch vụ</Label>
              </div>
            </div>
          )}
          <Button onClick={handleUpdateService} className="w-full mt-4">
            Cập nhật Dịch vụ
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ServiceManagement;
