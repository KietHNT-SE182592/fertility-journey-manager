
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, TestTube, Eye, Download, Plus, Calendar, User } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const PatientRecordManagement = () => {
  const [showTestDetail, setShowTestDetail] = useState(false);
  const [showTreatmentDetail, setShowTreatmentDetail] = useState(false);
  const [selectedTest, setSelectedTest] = useState<any>(null);
  const [selectedTreatment, setSelectedTreatment] = useState<any>(null);

  const testRecords = [
    {
      test_ID: 1,
      cus_ID: 1,
      doc_ID: 1,
      patientName: "Nguyễn Văn An - Trần Thị Bình",
      doctorName: "Dr. Nguyễn Thị Hoa",
      hus_Test: "Phân tích tinh dịch",
      wife_Test: "Hormone AMH",
      hus_Test_Date: "2024-06-01",
      wife_Test_Date: "2024-06-02",
      hus_Test_Result: "Số lượng tinh trùng: 20M/ml, Độ di động: 60%",
      wife_Test_Result: "AMH: 2.5 ng/ml - Trong giới hạn bình thường",
      status: "Completed"
    },
    {
      test_ID: 2,
      cus_ID: 2,
      doc_ID: 2,
      patientName: "Lê Văn Cường - Phạm Thị Dung",
      doctorName: "Dr. Trần Văn Minh",
      hus_Test: "Hormone FSH, LH",
      wife_Test: "Siêu âm buồng trứng",
      hus_Test_Date: "2024-06-05",
      wife_Test_Date: "2024-06-05",
      hus_Test_Result: "Đang chờ kết quả",
      wife_Test_Result: "Đang chờ kết quả",
      status: "Pending"
    }
  ];

  const treatmentPlans = [
    {
      tp_ID: 1,
      cus_ID: 1,
      doc_ID: 1,
      ser_ID: 1,
      patientName: "Nguyễn Văn An - Trần Thị Bình",
      doctorName: "Dr. Nguyễn Thị Hoa",
      serviceName: "IVF Treatment",
      startDate: "2024-06-01",
      endDate: "2024-08-01",
      currentStep: "Kích thích buồng trứng",
      status: "Active",
      progress: 40
    },
    {
      tp_ID: 2,
      cus_ID: 2,
      doc_ID: 2,
      ser_ID: 2,
      patientName: "Lê Văn Cường - Phạm Thị Dung",
      doctorName: "Dr. Trần Văn Minh",
      serviceName: "IUI Treatment",
      startDate: "2024-05-15",
      endDate: "2024-06-30",
      currentStep: "Hoàn thành",
      status: "Completed",
      progress: 100
    }
  ];

  const bioSamples = [
    {
      bs_ID: 1,
      tp_ID: 1,
      bt_ID: 1,
      bs_Name: "Trứng Patient #1",
      bioTypeName: "Trứng",
      status: "Stored",
      quality: "Grade A",
      collectionDate: "2024-06-10",
      storageLocation: "Tank A-01",
      note: "Chất lượng tốt, bảo quản ở -196°C"
    },
    {
      bs_ID: 2,
      tp_ID: 1,
      bt_ID: 2,
      bs_Name: "Tinh trùng Patient #1",
      bioTypeName: "Tinh trùng",
      status: "Stored",
      quality: "Grade B",
      collectionDate: "2024-06-10",
      storageLocation: "Tank B-03",
      note: "Đã xử lý và bảo quản"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-100 text-green-800";
      case "Completed": return "bg-blue-100 text-blue-800";
      case "Pending": return "bg-yellow-100 text-yellow-800";
      case "Stored": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const handleViewTest = (test: any) => {
    setSelectedTest(test);
    setShowTestDetail(true);
  };

  const handleViewTreatment = (treatment: any) => {
    setSelectedTreatment(treatment);
    setShowTreatmentDetail(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Quản lý Hồ sơ Bệnh nhân</h2>
          <p className="text-gray-600">Quản lý kết quả xét nghiệm, kế hoạch điều trị và mẫu sinh học</p>
        </div>
      </div>

      <Tabs defaultValue="tests" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="tests">Kết quả Xét nghiệm</TabsTrigger>
          <TabsTrigger value="treatments">Kế hoạch Điều trị</TabsTrigger>
          <TabsTrigger value="biosamples">Mẫu Sinh học</TabsTrigger>
        </TabsList>

        {/* Test Results Tab */}
        <TabsContent value="tests">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TestTube className="w-5 h-5 text-blue-600" />
                <span>Kết quả Xét nghiệm</span>
                <Badge variant="secondary">{testRecords.length} bản ghi</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Mã XN</TableHead>
                    <TableHead>Bệnh nhân</TableHead>
                    <TableHead>Bác sĩ</TableHead>
                    <TableHead>Xét nghiệm Chồng</TableHead>
                    <TableHead>Xét nghiệm Vợ</TableHead>
                    <TableHead>Ngày thực hiện</TableHead>
                    <TableHead>Trạng thái</TableHead>
                    <TableHead>Thao tác</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {testRecords.map((test) => (
                    <TableRow key={test.test_ID}>
                      <TableCell className="font-medium">#{test.test_ID}</TableCell>
                      <TableCell>{test.patientName}</TableCell>
                      <TableCell>{test.doctorName}</TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium">{test.hus_Test}</p>
                          <p className="text-sm text-gray-500">{test.hus_Test_Date}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium">{test.wife_Test}</p>
                          <p className="text-sm text-gray-500">{test.wife_Test_Date}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <p>Chồng: {test.hus_Test_Date}</p>
                          <p>Vợ: {test.wife_Test_Date}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(test.status)}>
                          {test.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => handleViewTest(test)}
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Treatment Plans Tab */}
        <TabsContent value="treatments">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-blue-600" />
                <span>Kế hoạch Điều trị</span>
                <Badge variant="secondary">{treatmentPlans.length} kế hoạch</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Mã KH</TableHead>
                    <TableHead>Bệnh nhân</TableHead>
                    <TableHead>Bác sĩ</TableHead>
                    <TableHead>Dịch vụ</TableHead>
                    <TableHead>Thời gian</TableHead>
                    <TableHead>Bước hiện tại</TableHead>
                    <TableHead>Tiến độ</TableHead>
                    <TableHead>Trạng thái</TableHead>
                    <TableHead>Thao tác</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {treatmentPlans.map((plan) => (
                    <TableRow key={plan.tp_ID}>
                      <TableCell className="font-medium">#{plan.tp_ID}</TableCell>
                      <TableCell>{plan.patientName}</TableCell>
                      <TableCell>{plan.doctorName}</TableCell>
                      <TableCell>{plan.serviceName}</TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <p>{plan.startDate}</p>
                          <p>{plan.endDate}</p>
                        </div>
                      </TableCell>
                      <TableCell>{plan.currentStep}</TableCell>
                      <TableCell>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ width: `${plan.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600">{plan.progress}%</span>
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(plan.status)}>
                          {plan.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => handleViewTreatment(plan)}
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Bio Samples Tab */}
        <TabsContent value="biosamples">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TestTube className="w-5 h-5 text-blue-600" />
                <span>Mẫu Sinh học</span>
                <Badge variant="secondary">{bioSamples.length} mẫu</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Mã mẫu</TableHead>
                    <TableHead>Tên mẫu</TableHead>
                    <TableHead>Loại mẫu</TableHead>
                    <TableHead>Chất lượng</TableHead>
                    <TableHead>Ngày thu thập</TableHead>
                    <TableHead>Vị trí lưu trữ</TableHead>
                    <TableHead>Trạng thái</TableHead>
                    <TableHead>Thao tác</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {bioSamples.map((sample) => (
                    <TableRow key={sample.bs_ID}>
                      <TableCell className="font-medium">#{sample.bs_ID}</TableCell>
                      <TableCell>{sample.bs_Name}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{sample.bioTypeName}</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge 
                          className={sample.quality === "Grade A" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}
                        >
                          {sample.quality}
                        </Badge>
                      </TableCell>
                      <TableCell>{sample.collectionDate}</TableCell>
                      <TableCell>{sample.storageLocation}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(sample.status)}>
                          {sample.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Test Detail Dialog */}
      <Dialog open={showTestDetail} onOpenChange={setShowTestDetail}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Chi tiết Kết quả Xét nghiệm #{selectedTest?.test_ID}</DialogTitle>
          </DialogHeader>
          {selectedTest && (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Kết quả Chồng</h3>
                  <div className="space-y-3">
                    <div>
                      <Label>Xét nghiệm</Label>
                      <Input value={selectedTest.hus_Test} readOnly />
                    </div>
                    <div>
                      <Label>Ngày thực hiện</Label>
                      <Input value={selectedTest.hus_Test_Date} readOnly />
                    </div>
                    <div>
                      <Label>Kết quả</Label>
                      <Textarea value={selectedTest.hus_Test_Result} readOnly />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Kết quả Vợ</h3>
                  <div className="space-y-3">
                    <div>
                      <Label>Xét nghiệm</Label>
                      <Input value={selectedTest.wife_Test} readOnly />
                    </div>
                    <div>
                      <Label>Ngày thực hiện</Label>
                      <Input value={selectedTest.wife_Test_Date} readOnly />
                    </div>
                    <div>
                      <Label>Kết quả</Label>
                      <Textarea value={selectedTest.wife_Test_Result} readOnly />
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label>Bệnh nhân</Label>
                  <Input value={selectedTest.patientName} readOnly />
                </div>
                <div>
                  <Label>Bác sĩ phụ trách</Label>
                  <Input value={selectedTest.doctorName} readOnly />
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Treatment Detail Dialog */}
      <Dialog open={showTreatmentDetail} onOpenChange={setShowTreatmentDetail}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Chi tiết Kế hoạch Điều trị #{selectedTreatment?.tp_ID}</DialogTitle>
          </DialogHeader>
          {selectedTreatment && (
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label>Bệnh nhân</Label>
                  <Input value={selectedTreatment.patientName} readOnly />
                </div>
                <div>
                  <Label>Bác sĩ phụ trách</Label>
                  <Input value={selectedTreatment.doctorName} readOnly />
                </div>
                <div>
                  <Label>Dịch vụ điều trị</Label>
                  <Input value={selectedTreatment.serviceName} readOnly />
                </div>
                <div>
                  <Label>Trạng thái</Label>
                  <Input value={selectedTreatment.status} readOnly />
                </div>
                <div>
                  <Label>Ngày bắt đầu</Label>
                  <Input value={selectedTreatment.startDate} readOnly />
                </div>
                <div>
                  <Label>Ngày kết thúc</Label>
                  <Input value={selectedTreatment.endDate} readOnly />
                </div>
              </div>
              <div>
                <Label>Bước hiện tại</Label>
                <Input value={selectedTreatment.currentStep} readOnly />
              </div>
              <div>
                <Label>Tiến độ hoàn thành</Label>
                <div className="flex items-center space-x-3">
                  <div className="flex-1 bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-blue-600 h-3 rounded-full" 
                      style={{ width: `${selectedTreatment.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium">{selectedTreatment.progress}%</span>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PatientRecordManagement;
