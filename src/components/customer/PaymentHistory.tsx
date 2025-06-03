
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CreditCard, Calendar, DollarSign } from "lucide-react";

const PaymentHistory = () => {
  const payments = [
    {
      id: 1,
      amount: 2500.00,
      date: "2024-02-15",
      method: "Credit Card ****1234",
      status: "Completed",
      description: "IVF Treatment - Initial Payment"
    },
    {
      id: 2,
      amount: 1200.00,
      date: "2024-01-20",
      method: "Credit Card ****1234",
      status: "Completed",
      description: "Consultation and Initial Tests"
    },
    {
      id: 3,
      amount: 800.00,
      date: "2024-02-28",
      method: "Bank Transfer",
      status: "Pending",
      description: "IVF Treatment - Second Payment"
    },
    {
      id: 4,
      amount: 450.00,
      date: "2024-01-05",
      method: "Credit Card ****5678",
      status: "Failed",
      description: "Additional Lab Tests"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-green-100 text-green-700";
      case "pending":
        return "bg-yellow-100 text-yellow-700";
      case "failed":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const totalPaid = payments
    .filter(payment => payment.status === "Completed")
    .reduce((sum, payment) => sum + payment.amount, 0);

  const pendingAmount = payments
    .filter(payment => payment.status === "Pending")
    .reduce((sum, payment) => sum + payment.amount, 0);

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment History</h2>
        <p className="text-gray-600">View all your payment transactions and billing information</p>
      </div>

      {/* Payment Summary */}
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <DollarSign className="w-5 h-5 text-green-500" />
              <span>Total Paid</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">${totalPaid.toFixed(2)}</div>
            <p className="text-gray-600">Successfully processed</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-yellow-500" />
              <span>Pending Payments</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-yellow-600">${pendingAmount.toFixed(2)}</div>
            <p className="text-gray-600">Awaiting processing</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CreditCard className="w-5 h-5 text-blue-500" />
              <span>Total Transactions</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600">{payments.length}</div>
            <p className="text-gray-600">Payment records</p>
          </CardContent>
        </Card>
      </div>

      {/* Payment History Table */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle>Payment Transactions</CardTitle>
          <CardDescription>Complete history of all payment transactions</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Payment Method</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payments.map((payment) => (
                <TableRow key={payment.id}>
                  <TableCell className="font-medium">
                    {new Date(payment.date).toLocaleDateString()}
                  </TableCell>
                  <TableCell>{payment.description}</TableCell>
                  <TableCell className="flex items-center space-x-2">
                    <CreditCard className="w-4 h-4 text-gray-500" />
                    <span>{payment.method}</span>
                  </TableCell>
                  <TableCell className="font-semibold">
                    ${payment.amount.toFixed(2)}
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(payment.status)}>
                      {payment.status}
                    </Badge>
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

export default PaymentHistory;
